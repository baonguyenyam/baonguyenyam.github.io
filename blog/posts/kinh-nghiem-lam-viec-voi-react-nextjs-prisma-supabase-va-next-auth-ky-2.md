---
date: 2024-06-06T00:00:00Z
author: Nguyen Pham
title: "Kinh nghiệm làm việc với FullStack NextJS - Kỳ 2: Prisma và Supabase"
excerpt: Những điều tuyệt vời khi làm việc với Prisma, postgreSQL và Supabase
image: '@/assets/images/2024/su1.png'
categories: 
    - Kiến thức
    - Lập trình
    - TypeScript
    - Schema
    - Model
    - postgreSQL
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
    canonical: https://coirieng.com/post/kinh-nghiem-lam-viec-voi-react-nextjs-prisma-supabase-va-next-auth-ky-2
---

## Tổng quan

Trong này mình không dành thời gian nhiều để giải thích về Prisma và Supabase hay postgreSQL là gì, quý vị có thể tự tìm hiểu trên Google. Chỉ cần hiều nôm na rằng Prisma là một ORM giúp chúng ta tương tác với database một cách dễ dàng hơn, còn Supabase là một dịch vụ cung cấp database và authen giúp chúng ta xây dựng ứng dụng một cách nhanh chóng và dễ dàng hơn. Trong khi postgreSQL là một hệ quản trị cơ sở dữ liệu mạnh mẽ và phổ biến hiện nay.

## Lý so phải sử dụng Prisma, postgreSQL và Supabase

### Lý do thứ nhất: postgreSQL

Đầu tiên, bất cứ ứng dụng tương tác dữ liệu nào đều cần một database như: postgreSQL, MySQL, MongoDB, ... để lưu trữ dữ liệu. Khác với mySQL hay MongoDB, postgreSQL là một hệ quản trị cơ sở dữ liệu mạnh mẽ và phổ biến hiện nay. Với postgreSQL, chúng ta có thể tạo ra các bảng, cột, ràng buộc, trigger, function, procedure, view, index, ... một cách dễ dàng và mạnh mẽ. Mình là một WordPress Developer lâu năn nên mình đã sử dụng mySQL và PHP nhiều, nhưng mình đã từ bỏ hết nó để chuyển sang postgreSQL và Node.js vì những hạn chế của chúng cũng như không đáp ứng được nhu cầu của các ứng dụng hiện đại. 

### Lý do thứ hai: Prisma

Với Prisma, chúng ta có thể tạo ra các model, relation, query, mutation, ... một cách dễ dàng. Prisma giúp chúng ta tương tác với database nhanh hơn. Thay vì sử dụng những câu lệnh SQL phức tạp, chúng ta có thể sử dụng Prisma để tương tác với database một cách dễ dàng hơn. Nếu quý vị đã từng sử dụng Laravel thì mới thấy được sự mạnh mẽ và tiện lợi của Prisma. Dưới đây là một số ví dụ về Prisma:

```typescript
// Tạo một bản ghi mới
const user = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'abc@demo.com'
    }
})

// Lấy tất cả bản ghi
const allUsers = await prisma.user.findMany(
    take: 10,
    skip: 20,
    orderBy: {
        id: 'desc'
    }
)

// Lấy một bản ghi theo id
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
})
```

Hãy nhìn vào các ví dụ trên, chúng ta có thể thấy rằng Prisma giúp chúng ta tương tác với database quá đơn giản và mạnh mẽ.

**schema.prisma**

```prisma
generator client {
    provider = "prisma-client-js"
    previewFeatures = ["relationJoins"]
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    directUrl = env("DIRECT_URL")
}
...
model Permission {
    id          Int      @id @default(autoincrement())
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
    name        String   @db.VarChar(255)
    description String?  @db.Text
    type        String   @default("none")
    published Boolean  @default(false)
    status      String   @default("pending")
    setorder    Int      @default(0)

    users       UserOnPermission[]
}
```

Cấu hình Prisma cũng rất đơn giản, 

### Lý do thứ ba: Supabase

Một số quý vị sẽ biết đến Firebase thì Supabase cũng tương tự như vậy. Hay nói cách khác đó là đối thủ của Firebase. Supabase khác ở chỗ nó là mã nguồn mở, và hỗ trợ realtime. Trong khi Firebase sử dụng NoSQL thì Supabase sử dụng postgreSQL.

Lý do phải sử dụng Firebase hoặc Supabase vì nó khác với các database thông thuòng cần phải refresh lại trang web để xem dữ liệu mới, còn với Firebase hoặc Supabase thì nó sẽ tự động cập nhật dữ liệu mới mà không cần phải refresh lại trang web.

Một ưu điểm khác nữa của Supabase chính là nó hoàn toàn là một free open source, quý vị có thể dùng nó để tự host trên infra của mình hoặc infra của firebase (sử dụng AWS). Ngược lại với firebase, các dịch vụ độc quyền được sử dụng thông qua infra của google (Google Cloud).


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

OK tóm lược lại, như trên cho quý vị có cái nhìn tổng quan về Prisma, postgreSQL và Supabase. Bây giờ chúng ta sẽ bắt đầu vào phần giải quyết vấn đề. Như đã nói các bài viết này chỉ tập trung vào việc xử lý các lỗi mà chỉ khi quý vị làm việc lâu mới gặp phải. 

## Chạy lệnh Seed trong Prisma

Một trong những lý do mà mình thích Prisma là nó cho phép chúng ta tạo ra các bản ghi mẫu một cách dễ dàng. Để tạo ra các bản ghi mẫu, chúng ta cần chạy lệnh seed. 

```bash
npx prisma db seed --preview-feature
```

Nhưng thỉnh thoảng quý vị sẽ gặp lỗi sau khi chạy lệnh seed, nếu là dự án NEXTJS thì cố gắng xử lý như sau, trong file `package.json` thêm:

```json
{
    "scripts": {
        "prisma:generate": "prisma generate",
        "prisma:migrate": "prisma migrate dev --name init",
        "prisma:studio": "prisma studio",
        "prisma:reset": "prisma migrate reset --force",
        "prisma:deploy": "prisma migrate deploy",
        "prisma:save": "prisma migrate save --name init",
        "prisma:up": "prisma migrate up --experimental",
        "prisma:down": "prisma migrate down --experimental",
        "prisma:status": "prisma migrate status --experimental",
        "prisma:push": "prisma db push --preview-feature",
        "seed": "npx prisma db seed -- --environment development"
    },
    "prisma": {
        "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} src/db/seed.ts"
    }
}
```

Lệnh này sẽ gọi file `src/db/seed.ts` ra chạy. Bây giờ chúng ta có thể chạy lệnh seed bằng cách:

```bash
npm run seed
```

Tất nhiên cũng đừng quên cài `ts-node` và `typescript` cho ứng dụng.

## Không truy vấn được với ký tự In hoa 

Mặc định khi truy vấn một từ khoá nào đó sẽ có sự phân biệt chữ hoa chữ thường. Để bỏ qua sự phân biệt chữ hoa chữ thường, chúng ta cần thêm `mode: 'insensitive'` vào câu lệnh truy vấn. 

**./src/db/User/index.ts**

```typescript
export const searchUsers = async (search?: any) => {
  return prisma.user.findMany({
    where: {
      OR: [
        { username: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ],
    }
  });
};
```

## Xoá bản ghi đồng thời xoá luôn các bản ghi liên quan

Một trong những lỗi mà mình gặp phải khi làm việc với Prisma là khi xoá một bản ghi thì các bản ghi liên quan không bị xoá. Để giải quyết vấn đề này, chúng ta cần thêm `cascade` vào câu lệnh xoá.

**./prisma/schema.prisma**

```prisma
model User {
  id          Int      @id @default(autoincrement())
  email       String   @unique @db.VarChar(255)
  name        String?  @db.VarChar(255)
  username    String   @unique
  salt        String   @db.VarChar(255)
  password    String   @db.VarChar(255)
  
  posts       Post[]

  @@unique([email, username])
}

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String   @db.Text
  slug      String   @default(cuid())
  image     String?  @default("https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/hxfcV5V-eInX3jbVUhjAt1suB7zB88uGd1j20b.png")
  published Boolean  @default(false)
  user    User     @relation(fields: [userId], references: [id], onUpdate: Cascade, onDelete: Cascade)
  userId  Int

  meta      PostMeta[]

  @@unique([slug, id])
  @@index([userId])
}
```

Hãy chú ý `onUpdate: Cascade, onDelete: Cascade` trong `post` model. Điều này có nghĩa là khi một bản ghi `user` bị xoá thì tất cả các bản ghi `post` liên quan cũng bị xoá theo vì tính liên quan giữa chúng.

## Kết nối Prism Client 

Thuờng thì chúng ta sẽ tạo một file `db.ts` để kết nối với database. Nhưng một số trường hợp chúng ta sẽ gặp lỗi khi kết nối với database. Để giải quyết vấn đề này hãy tham khảo đoạ mã sau:

**./src/db/db.ts**

```typescript
import { PrismaClient } from "@prisma/client";

declare global {
  interface _Window {
    prismaGlobal: PrismaClient;
  }
}

declare const globalThis: any;
const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export default prisma;
```

Bây giờ ở mọi nơi chúng ta chỉ cần import `prisma` như sau:

```typescript
import prisma from '@/db/db';
```

## Prisma Seed

Một trong những lý do mà mình thích Prisma là nó cho phép chúng ta tạo ra các bản ghi mẫu một cách dễ dàng. Hãy tham khảo qua đoạn mã sau:


**./src/db/seed.ts**

```typescript
import { PrismaClient } from "@prisma/client";

import { AdminSeed } from "./@SEED/seed_global";
import { OrderSeed } from "./@SEED/seed_order";
import { OtherSeed } from "./@SEED/seed_other";
import { ProductSeed } from "./@SEED/seed_product";

const prisma = new PrismaClient();

async function main() {

  AdminSeed().then(() => {
    ProductSeed().then(() => {
      OrderSeed().then(() => {
        OtherSeed()
      })
    })
  })

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

Trong ví dụ này mình đã tách seed ra thành nhiều file nhỏ để dễ quản lý. Và đặt chúng chạy theo thứ tự từ mà mình mong muốn.

**./src/db/@SEED/seed_global.ts**

```typescript
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const AdminSeed = async () => {
  ...
  // Code seed ở đây
}
```

## Kết luận

Phần này tạm thời kết thúc ở đây, trong phần tiếp theo mình sẽ giới thiệu về cách làm việc với Supabase. Về cách mà chúng ta có thể xử lý được dữ liệu realtime một cách dễ dàng và mạnh mẽ. Cảm ơn quý vị đã đọc bài viết này. Hẹn gặp lại ở phần tiếp theo.

Một lần nữa mình là Nguyen Pham, trường nhóm lập trình tại phòng thí nghiệm MADE, Texas, Hoa Kỳ. Chúc quý vị một ngày làm việc hiệu quả và thành công. Cảm ơn quý vị đã đọc bài viết này.
