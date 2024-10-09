---
date: 2024-04-04T00:00:00Z
author: Nguyen Pham
title: Tạo trang blog detail trong Next.js với WordPress
excerpt: Để tạo trang blog detail trong Next.js là một công việc không quá khó khăn với những ai vừa mới bắt đầu làm quen với Next.js.
image: https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Lập trình
    - WordPress
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
    - WordPress
metadata:
    canonical: https://coirieng.com/post/tao-trang-blog-detail-trong-nextjs-voi-wordpress
---

## Tổng quan

Giả sử quý vị đã có một trang blog với danh sách các bài viết như /blog/abc, /blog/xyz, ... và muốn tạo trang chi tiết cho từng bài viết như /blog/abc, /blog/xyz, ... thì bài viết này sẽ giúp quý vị làm được điều đó.

## Bước 1: Tạo file trong thư mục pages

Trong thư mục `pages`, tạo một thư mục `blog` và tạo file `[slug].tsx` trong thư mục `blog`. File này sẽ là trang chi tiết của bài viết. [slug] là một dynamic route trong Next.js. Trong một số trường hợp, quý vị có thể muốn sử dụng `id` thay vì `slug`. Ví dụ: `pages/blog/[id].tsx`.

Ngoài ra còn phải sử dụng `getStaticPaths` và `getStaticProps` để tạo trang chi tiết cho bài viết. Tuy nhiên trong bài viết này, chúng ta sẽ gọi lên API của WordPress để lấy dữ liệu nên chỉ cần sử dụng `getStaticProps` là đủ.

```tsx
// pages/blog/[slug].tsx
import { AppService } from "@/services/AppService";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
export default function BlogDetails({ slug }: any) {
    const router = useRouter()
    const [blog, setBlog] = useState<any>([])
    useEffect(() => {
    if (router.isReady) {
        const appService = new AppService().getBlog(slug)
        appService.then((res) => {
        setBlog(res[0])
        })
    }
    }, [router.isReady])
    return (
    <>
        {blog && (
            <>
                <h1>{blog.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} /> 
            </>
        )}
    </>
    )
}
BlogDetails.getInitialProps = ({ query: { slug } }: any) => {
    return { slug }
}
```

## Bước 2: Tạo service để gọi API

```jsx
import axios from 'axios';

export class AppService {
    public async getBlog(slug: string): Promise<any> {
		const getBlog = "https://[your-wordpress-site]/wp-json/wp/v2/posts?slug=";
		const res = await axios.get(getBlog + slug);
		return res.data
	}
}
```