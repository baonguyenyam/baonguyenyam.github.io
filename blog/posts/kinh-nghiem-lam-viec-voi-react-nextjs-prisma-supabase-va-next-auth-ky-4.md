---
date: 2024-06-09T00:00:00Z
author: Nguyen Pham
title: "Kinh nghiệm làm việc với FullStack NextJS - Kỳ 4: Upload file lên Cloudfare R2"
excerpt: Cách upload file lên Cloudfare R2, In App và Custom Storage
image: '@/assets/images/2024/0_vKkSG7mJA3tFWsRp.png'
categories: 
    - Kiến thức
    - Lập trình
    - TypeScript
    - Cloudfare R2
    - Amazon S3
    - PHP Upload
    - NextJS Upload
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
    canonical: https://coirieng.com/post/kinh-nghiem-lam-viec-voi-react-nextjs-prisma-supabase-va-next-auth-ky-4
---

## Tổng quan

Bài này sẽ hướng dẫn quý vị các cách upload file lên Cloudfare R2, hoặc upload vào ngay trong App của chúng ta. Đồng thời mình cũng sẽ giới thiệu về cách upload lên một server khác bằng cách sử dụng PHP.

## Cloudflare R2 và Amazon S3

Cloudflare R2 là một dịch vụ lưu trữ file của Cloudflare, giúp chúng ta lưu trữ file một cách dễ dàng và nhanh chóng. Còn Amazon S3 là một dịch vụ lưu trữ file của Amazon, cũng giúp chúng ta lưu trữ file một cách dễ dàng, điểm khác biệt giữa Amazon S3 và Cloudflare R2 thì nhiều lắm mình không tiện nói ở đây tuy nhiên quý vị có thể tham khảo thêm ở đây [https://www.cloudflare.com/pg-cloudflare-r2-vs-aws-s3/](https://www.cloudflare.com/pg-cloudflare-r2-vs-aws-s3/). Nói chung mình từng là người dùng Amazon S3 10 năm trước, và giờ mình chuyển sang dùng Cloudflare R2 vì nó hợp lý hơn.

## Upload file lên Cloudflare R2

Về cơ bản cách upload file lên Cloudflare R2 và Amazon S3 thì không khác biệt nhiều, nên trong này mình sẽ sử dụng thư viện `@aws-sdk/client-s3` để thực hiện việc này cho Cloudflare R2. 

Đầu tiên hãy cài đặt thư viện `@aws-sdk/client-s3` và `memoize-one` bằng cách chạy lệnh sau:

```bash
yarn add @aws-sdk/client-s3 memoize-one @aws-sdk/s3-presigned-post @aws-sdk/s3-request-presigner
```

Sau đó đăng ký dịch vụ Cloudflare R2 và tạo một bucket, sau đó tạo một file mới trong thư mục `src/lib/storage/s3.ts` với nội dung như sau:

**./src/lib/storage/s3.ts**

```ts
import { S3Client } from "@aws-sdk/client-s3";
import memoizeOne from "memoize-one";

export const Bucket = {
	dev: process.env.R2_BUCKET_DEV,
	prod: process.env.R2_BUCKET_PROD,
	public: process.env.R2_BUCKET_PUBLIC,
};

const getClient = memoizeOne(() => {
	const endpoint = `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;

	return new S3Client({
		region: "auto",
		credentials: {
			accessKeyId: process.env.S3_COMPATIBLE_ACCESS_ID as string,
			secretAccessKey: process.env.S3_COMPATIBLE_SECRET_KEY as string,
		},
		endpoint,
		forcePathStyle: true,
		apiVersion: "v4",
	});
});

export const s3Client = getClient();
```

Bây giờ trong file form upload file của chúng ta, hãy tham khảo đoạn mã sau:

```tsx
const uploadImage = async (e: any) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const imageResponse = await axios.post("/api/upload-cloud", formData);
};
```

Như vậy chúng ta sẽ lấy dữ liệu từ form upload sau đó thêm vào FormData dưới tên là `file`, sau đó gửi lên server qua API `/api/upload-cloud`.

Bây giờ hãy tạo một file mới trong thư mục `src/app/api/upload-cloud/route.ts` với nội dung như sau:

**./src/app/api/upload-cloud/route.ts**

```ts
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import { Bucket, s3Client } from '@/lib/storage/s3'

export async function POST(request: Request) {
  const formData = await request.formData();
  const image = formData.get("file") as File;
  const buffer = Buffer.from(await image.arrayBuffer());
  const DayInMonthInYear = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
  const relativeUploadDir = `uploads/${DayInMonthInYear}`;

  try {
    const data = {
      Bucket: Bucket.dev,
      Key: `${relativeUploadDir}/${uuidv4()}.${image.type.split('/')[1]}`,
    };
    const signedUrl = await getSignedUrl(
      s3Client,
      new PutObjectCommand(data),
      { expiresIn: 3600 }
    )
    await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        "Content-Type": image.type,
        "Content-Length": image.size.toString(),
      },
      body: buffer
    })
    const response = Bucket.public + '/' + data.Key
    return NextResponse.json({ success: 'success', url: response })
  } catch (err) {
    console.log('error')
  }
}
```

## Upload file lên App content

Bây giờ hãy tạo một file mới trong thư mục `src/app/api/upload-app/route.ts` với nội dung như sau:

**./src/app/api/upload-app/route.ts**

```ts
import { mkdir, stat, writeFile } from "fs/promises";
import mime from "mime";
import { join } from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const image = formData.get("image") as File;
  const buffer = Buffer.from(await image.arrayBuffer());
  const DayInMonthInYear = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
  const relativeUploadDir = `/uploads/${DayInMonthInYear}`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  // accept only image files
  if (!image.type.startsWith("image")) {
    return new Response(
      JSON.stringify({ message: "Invalid file type", success: "error" }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }
  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}.${mime.getExtension(image.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    return new Response(
      JSON.stringify({
        message: "File uploaded successfully",
        url: fileUrl,
        success: "success",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
}
```

## Upload file lên server PHP 

Bây giờ hãy tạo một file mới trong thư mục `src/app/api/upload-php/route.ts` với nội dung như sau:

**./src/app/api/upload-php/route.ts**

```ts
export async function POST(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const formData = await request.formData();
  const image = formData.get("image") as File;
  const body = new FormData();
  body.append("file", image);
  const ret = await fetch(`https://yourserver.com/upload.php`, {
    method: "POST",
    body: body,
  });

  const json = (await ret.json()).url;
  if (!json) {
    return new Response(
      JSON.stringify({ message: "File upload failed", success: "error" }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      message: "File uploaded successfully",
      url: json,
      success: "success",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    },
  );
}
```

Nội dung file `upload.php` đại khái như sau:

```php
// Accept all CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$file_name = $_FILES['file']['name'];
$file_size = $_FILES['file']['size'];
$ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

$createfolder = '/media';
if (!file_exists(getcwd() . '/uploads')) {
    mkdir(getcwd() . '/uploads', 0777);
}
if (!file_exists(getcwd() . '/uploads/' . $createfolder)) {
    mkdir(getcwd() . '/uploads/' . $createfolder, 0777);
}
if (!file_exists(getcwd() . '/uploads/' . $createfolder . '/' . date('Y'))) {
    mkdir(getcwd() . '/uploads/' . $createfolder . '/' . date('Y'), 0777);
}
if (!file_exists(getcwd() . '/uploads/' . $createfolder . '/' . date('Y') . '/' . date('m'))) {
    mkdir(getcwd() . '/uploads/' . $createfolder . '/' . date('Y') . '/' . date('m'), 0777);
}

$upload_dir = getcwd() . '/uploads/' . $createfolder . '/' . date('Y') . '/' . date('m') . '/';
$upload_file = $upload_dir . basename($file_name);

if (move_uploaded_file($_FILES['file']['tmp_name'], $upload_file)) {
    echo json_encode(array('url' => '/uploads/' . $createfolder . '/' . date('Y') . '/' . date('m') . '/' . $file_name));
} else {
    echo json_encode(array('url' => ''));
}
```

## Kết luận

Trên đây là cách upload file lên Cloudflare R2, Amazon S3, App content và server PHP. Mình hy vọng rằng bài viết này sẽ giúp ích cho quý vị trong công việc của mình.

Một lần nữa mình là Nguyen Pham, trường nhóm lập trình tại phòng thí nghiệm MADE, Texas, Hoa Kỳ. Chúc quý vị một ngày làm việc hiệu quả và thành công. Cảm ơn quý vị đã đọc bài viết này.

