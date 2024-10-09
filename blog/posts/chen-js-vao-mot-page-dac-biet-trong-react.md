---
date: 2024-04-03T00:00:00Z
author: Nguyen Pham
title: Chèn JS vào trang web với React/Next.js
excerpt: Cách chèn JS vào trang web đặc thù với React/Next.js
image: https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=6270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Lập trình
tags:
    - JavaScript
    - front-end
    - Next.js
metadata:
    canonical: https://coirieng.com/post/chen-js-vao-mot-page-dac-biet-trong-react
---

## Tổng quan

Trong một số trường hợp, quý vị cần chèn một đoạn mã JS vào một trang web cụ thể, ví dụ như trang index, một trang web quảng cáo, một trang web chứa một số hiệu ứng đặc biệt, v.v. Trong bài viết này mình sẽ huớng dẫn cách chèn JS vào một trang web đặc biệt với React/Next.js.

Để làm được điều này quý vị cần sử dụng `useEffect` để chèn đoạn mã JS vào trang web. Hàm này cho phép đoạn mã JS chạy sau khi component được render.

```jsx
// index.tsx
import { useEffect } from "react";
const Index = () => {
	useEffect(() => {
		const inlineScript = document.createElement('script');
		inlineScript.innerHTML = `
			function elmOnScroll() {
				console.log('scrolling');
			}
			setTimeout(function () {
				elmOnScroll();
			}, 1000);
			window.onscroll = function () {
				elmOnScroll();
			};
			var Winscroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (Winscroll > 100) {
				elmOnScroll();
			}
		`;
		document.body.append(inlineScript);
		return () => {
			inlineScript.remove();
		};
	}, []);

	return (
		<>
		...
		</>
	);
};
export default Index;
```

## router.isReady 

Nếu quý vị sử dụng Next.js, quý vị cần kiểm tra xem router đã sẵn sàng chưa trước khi chèn JS vào trang web. Điều này giúp tránh lỗi khi truy cập trực tiếp vào trang web.

```jsx
// index.tsx
import { useEffect } from "react";
import { useRouter } from 'next/router';
const Index = () => {}
    useEffect(() => {
        if (router.isReady) {
            // Chèn JS vào trang web
        }
    }, [router.isReady]);
    return (
        <>
        ...
        </>
    );
};
export default Index;
```