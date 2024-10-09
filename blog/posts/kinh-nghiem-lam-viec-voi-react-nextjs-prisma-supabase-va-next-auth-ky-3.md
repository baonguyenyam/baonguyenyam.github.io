---
date: 2024-06-07T00:00:00Z
author: Nguyen Pham
title: "Kinh nghiệm làm việc với FullStack NextJS - Kỳ 3: Supabase Realtime"
excerpt: Làm việc với cơ sở dữ liệu realtime sử dụng Supabase 
image: '@/assets/images/2024/egghead-dynamically-update-ui-with-database-changes-using-supabase-realtime-vGmntEVZb.jpg'
categories: 
    - Kiến thức
    - Lập trình
    - TypeScript
    - Seed 
    - Prisma Client
    - Supabase Client
tags:
    - Next.js
    - React
    - Prisma
    - Supabase
    - TypeScript
    - Node.js
    - API
    - RESTful
    - GraphQL
    - SQL
    - Supabase
    - Realtime
metadata:
    canonical: https://coirieng.com/post/kinh-nghiem-lam-viec-voi-react-nextjs-prisma-supabase-va-next-auth-ky-3
---

## Tổng quan

Có một vấn đề khá phiền là mỗi khi migrate dữ liệu, chúng ta cần phải vào lại supabase để bật tính năng realtime lên hoặc chạy lệnh SQL trong khi chạy command seed. Điều này khá là phiền phức. Vậy nên mình sẽ hướng dẫn quý vị cách làm việc với supabase realtime một cách dễ dàng hơn.

## Cài đặt

**./src/db/seed.ts**

Mở lại file seed.ts và thêm vào đoạn code sau:

```typescript
import { PrismaClient } from "@prisma/client";

import { AdminSeed } from "./@SEED/seed_global";
import { OrderSeed } from "./@SEED/seed_order";
import { OtherSeed } from "./@SEED/seed_other";
import { ProductSeed } from "./@SEED/seed_product";

const prisma = new PrismaClient();

async function main() {

  // Code seed ở đây

  // VERY IMPORTANT
  // Realtime
  const getallTable = async () => {
    await prisma.$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`.then(
      (res: any) => {
        res.forEach(async (table: any) => {
          await prisma.$queryRaw`SELECT * FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = ${table.table_name}`.then(
            async (checkRealtime: any) => {
              if (
                checkRealtime.length < 1 &&
                table.table_name !== "_prisma_migrations"
              ) {
                const table_name = table.table_name;
                await prisma.$executeRawUnsafe(
                  `ALTER PUBLICATION supabase_realtime ADD TABLE "${table_name}"`,
                );
              }
            },
          );
        });
      },
    );
  };
  getallTable();

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```
Đoạn mã này sẽ tìm tất cả các bảng trong cơ sở dữ liệu và thêm vào publication `supabase_realtime`. Điều này giúp chúng ta không cần phải vào supabase để bật realtime mỗi khi chạy lệnh seed.

## Gọi dữ liệu 

Thông thuờng chúng ta sẽ gọi dữ liệu từ cơ sở dữ liệu thông qua API và gọi trực tiếp từ file `./src/app/user/page.tsx` Với cách làm này sẽ phát sinh nhiều lỗi về fetch data là `NULL` mà mình sẽ nói ở phần sau. Tuy nhiên, với App Router của NextJS quý vị nên phân biệt rõ như sau:

- **page.tsx**: Là trang nên chạy ở tầng server, nên không nên gọi dữ liệu ở đây. Trong file này chúng ta chỉ nên xử lý dữ liệu cần thiết nhất mà thôi ví dụ như SEO metadata, title, description, ...

```typescript
import type { Metadata } from "next";
import { meta } from "@/lib/meta";

import Action from "./action";

export const metadata: Metadata = {
  ...meta({
    title: "User Management",
  }),
};

export default async function Index({ params }: { params: { page: string } }) {

  const { page } = params;
  metadata.title = "User Management | Page " + page;

  return <Action page={page} />;
}
```

Trên đây là ví dụ về cách chúng ta làm việc với file `./src/app/user/page.tsx`. Chúng ta sẽ gọi dữ liệu từ file `./src/app/user/action.tsx`. Trong file này chúng ta sẽ xử lý dữ liệu, gọi API, xử lý realtime, ...

- **action.tsx**: Là file sẽ chạy ở tầng client, chúng ta sẽ xử lý các vần đề tương tác với người dùng như realtime, gọi API, xử lý dữ liệu, ...

**./src/app/user/action.tsx**

```typescript
"use client";

import { useCallback, useEffect, useState } from "react";
import supabaseClient from "@/client";
import { AppService } from "@/lib/services";

export default function Action({ page }: { page: string }) {
    const [users, setUsers] = useState<any>();

    const fetchData = useCallback(async () => {
        const _users = await new AppService().getAllUsers();
        setUsers(_users);
    }, [page]);

    useEffect(() => {
    fetchData();
    const channel = supabaseClient
        .channel("myChannel")
        .on("postgres_changes", { event: "*", schema: "public", table: "User" }, () => {
        fetchData();
        })
        .subscribe();
    return () => {
        supabaseClient.removeChannel(channel);
    };
    }, [fetchData, page]);

  return (

    <>
      ...
    </>
  );
}
```

Có vài điều cần lưu ý ở đây:

- Mình sử dụng `useCallback` để tránh việc gọi lại hàm `fetchData` mỗi khi component re-render.
- Mình sử dụng `useEffect` để gọi hàm `fetchData` mỗi khi component được render.
- Mình sử dụng `supabaseClient` để gọi realtime từ supabase.

Với cấu hình này ứng dụng của quý vị sẽ tự làm mới dữ liệu mỗi khi có bất kỳ thay đổi nào từ bảng `User` trong cơ sở dữ liệu. Trong một số trường hợp, quý vị cần phải xử lý dữ liệu một cách chính xác, thì hãy thay đổi `event: "*"` thành `event: "INSERT"`, `event: "UPDATE"`, `event: "DELETE"`.

## supabase Client

**./src/client.ts**

```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yoururl.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOURKEY',
  {
    realtime: {
      params: {
        eventsPerSecond: 1000,
      },
    },
  },
);

export default supabaseClient;
```

Supabase còn cung cấp Authenticated nhưng mình sẽ không nói ở đây. Quý vị có thể tham khảo tại [đây](https://supabase.io/docs/guides/auth). Mình sử dụng Next Auth để xử lý Authenticated. Với cá nhân mình thì mình thấy Next Auth ổn định và dễ mở rộng hơn so với Authenticated của Supabase. tuy nhiên nếu muốn đơn giản thì quý vị có thể sử dụng Authenticated của Supabase.

## Kết luận

Mình biết một số quý vị gặp rất nhiều khó khăn trong khi khai triển dự án với Supabase, Prisma và Next Auth. Tuy nhiên lời khuyên chân thành là hãy kiên nhẫn và tìm hiểu kỹ về cách hoạt động của từng công nghệ và áp dụng chúng một cách triệt để vì nếu khi dự án phình to ra thì việc khai triển lúc đó sẽ khó khăn hơn rất nhiều. Mình sẽ tiếp tục viết về cách làm việc với Supabase, Prisma và Next Auth trong các bài viết tiếp theo.

Một lần nữa mình là Nguyen Pham, trường nhóm lập trình tại phòng thí nghiệm MADE, Texas, Hoa Kỳ. Chúc quý vị một ngày làm việc hiệu quả và thành công. Cảm ơn quý vị đã đọc bài viết này.
