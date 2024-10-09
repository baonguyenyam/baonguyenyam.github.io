---
date: 2024-04-04T00:00:00Z
author: Nguyen Pham
title: Cách gọi đến APIs của WordPress với React/Next.js
excerpt: Trong bài viết này mình sẽ hướng dẫn cách gọi đến APIs của WordPress blog với React/Next.js.
image: https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
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
    canonical: https://coirieng.com/post/cach-goi-den-api-cua-wordpress-blog
---

## Tổng quan

Trong bài viết này mình sẽ hướng dẫn cách gọi đến APIs của WordPress blog với React/Next.js. Để làm được điều này, mình sẽ sử dụng thư viện `axios` để gọi đến APIs của WordPress. 

Sau khi cài đặt `axios`, chúng ta cần tạo một service để gọi đến APIs đó và sau đó sử dụng service đó trong component của chúng ta.

## Cài đặt axios

Đầu tiên, chúng ta cần cài đặt `axios` bằng cách chạy lệnh sau:

```bash
npm install axios
```

## Tạo service

Tiếp theo, chúng ta cần tạo một service để gọi đến APIs của WordPress. Dưới đây là một ví dụ về service:

```jsx
import axios from 'axios';

export class AppService {
    public async getBlogs(): Promise<any> {
		const getBlogs = "https://[your-wordpress-site]/wp-json/wp/v2/posts?per_page=100";
		const res = await axios.get(getBlogs);
		return res.data
	}
}
```

## Gọi service trong component

Cuối cùng, chúng ta sử dụng service trong component của chúng ta. Dưới đây là một ví dụ về cách sử dụng service trong component:

```jsx
// blog.tsx
import { AppService } from "@/services/AppService";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const Blogs = () => {
	const router = useRouter()
    const [blogs, setBlogs] = useState<any>([])
    useEffect(() => {
		if (router.isReady) {
            const appService = new AppService().getBlogs()
            appService.then((res) => {
                setBlog(res)
            })
        }
	}, [router.isReady]);

	return (
		<>
		{blogs.map((blog: any, index: any) => (

            <div key={index}>
                <div>
                    <h2>{blog.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                </div>
            </div>

        ))}
		</>
	);
};
export default Blogs;
```

Trong ví dụ trên, chúng ta đã sử dụng service để gọi đến APIs của WordPress và sau đó hiển thị dữ liệu trả về trong component và lưu trữ dữ liệu trong state `blogs`.