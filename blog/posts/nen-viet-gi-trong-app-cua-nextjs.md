---
date: 2024-04-06T00:00:00Z
author: Nguyen Pham
title: Nên viết gì trong file _app.tsx của React/Next.js
excerpt: Trong bài viết này, mình sẽ hướng dẫn cách sử dụng file _app.tsx trong React/Next.js để tùy chỉnh layout cho toàn bộ ứng dụng của quý vị.
image: https://plus.unsplash.com/premium_photo-1689703068866-5fcba89130ca?q=80&w=6270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Lập trình
    - Next.js
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
metadata:
    canonical: https://coirieng.com/post/nen-viet-gi-trong-app-cua-nextjs
---

## Tổng quan

Trước hết, chúng ta cần hiểu rằng file `_app.tsx` là một file quan trọng trong Next.js. Nó chứa toàn bộ ứng dụng của quý vị, bao gồm tất cả các trang. Điều này có nghĩa là bất kỳ thay đổi nào quý vị thực hiện trong file này đều ảnh hưởng đến toàn bộ ứng dụng của quý vị. 

## Cách sử dụng

Quý vị cần tạo một file có tên `_app.tsx` trong thư mục `pages` của dự án Next.js của mình. Nội dung của file này sẽ giống như sau:

```tsx
// @/pages/_app.tsx
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
```

Đó là tất cả những gì quý vị cần làm để bắt đầu sử dụng file `_app.tsx`. Bây giờ, quý vị có thể tùy chỉnh layout cho toàn bộ ứng dụng của mình bằng cách thêm mã HTML, CSS, hoặc JavaScript vào file này.

## Ví dụ

Dưới đây là một ví dụ về cách sử dụng file `_app.tsx` để tùy chỉnh layout cho toàn bộ ứng dụng của quý vị:

```tsx
// @/pages/_app.tsx
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from '@/components/loading';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";
import "@/styles/custom.sass";

const myApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const handleRouteChangeDone = () => {
            setLoading(false)
        }
        const handleRouteChange = () => {
            setLoading(true)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteChangeDone)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', handleRouteChangeDone)
        }
    }, [router.pathname]);
    return (
        <>
            {!loading ? (
                <>
                    <Component {...pageProps} />
                    <ToastContainer />
                </>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

export default myApp;
```

Trong ví dụ trên, chúng ta đã sử dụng file `_app.tsx` để hiển thị một màn hình tải trước khi nội dung trang được hiển thị. Điều này giúp cải thiện trải nghiệm người dùng khi chuyển từ trang này sang trang khác trong ứng dụng của quý vị. Ngoài ra, chúng ta cũng đã sử dụng thư viện `react-toastify` để hiển thị thông báo cho người dùng khi có lỗi xảy ra trong ứng dụng.

## Trang loading

Hãy tạo một component `LoadingScreen` như sau:

```tsx
// @/src/components/loading/index.tsx
import styles from './index.module.css';
const LoadingScreen = () => {
	return (
		<div className={`${styles.load}`}>
			<svg className={`${styles.madeloading}`} x="0px" y="0px" viewBox="0 0 350.9 120.8">
				<path d="M46.2,87.2L29.7,39.1h-0.2v48.1H9.3v-76h29.9l15.3,45.4h0.2l15.3-45.4h29.3v76H77.9V39.1h-0.2L61.3,87.2H46.2z" />
				<path d="M163.7,73h-30.4L128,87.2h-21.8l30-76.1h25.3l30.2,76.1h-22.8L163.7,73z M139.6,56.1h17.9l-8.6-23.8h-0.3L139.6,56.1z" />
				<path d="M271.1,49c0,22.9-15.2,38.1-39.6,38.1h-33.1V11.1h33.1C255.8,11.1,271.1,26.2,271.1,49z M220.2,28.2v42h11.2 c11,0,16.8-6.6,16.8-21.1c0-14.4-5.9-20.9-16.8-20.9H220.2z"/>
				<path d="M280.5,87.2V11.1h60.2v17h-38.3v12.3h33.6v17h-33.6v12.7h39.3v17H280.5z" />
				<rect x="9.3" y="95.4" width="332.5" height="17" />
			</svg>
		</div>
	);
};

export default LoadingScreen;
```

Và một file CSS cho component này:

```css
/* @/src/components/loading/index.module.css */
.load {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.madeloading{
    width: 200px;
    display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.madeloading rect,
.madeloading path{ 
    fill: transparent;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    stroke: #ffffff;
    stroke-width: 2px;
}
.madeloading path{ 
    animation: strokeAnimation 1.5s linear infinite;
}
.madeloading rect{ 
    animation: strokeAnimation 1.5s linear infinite;
}

@keyframes strokeAnimation {
    0% {
        stroke-dashoffset: 800;
    }
    100% {
        stroke-dashoffset: 0;
    }
}
```

## Thêm cảnh báo lỗi cho ứng dụng

Để thêm cảnh báo lỗi cho ứng dụng, chúng ta cần chèn thêm mã sau vào file `_app.tsx`:

```tsx
// @/pages/_app.tsx
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

useEffect(() => {
    toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}, []);
```
