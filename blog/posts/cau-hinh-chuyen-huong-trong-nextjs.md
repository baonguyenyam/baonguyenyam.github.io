---
date: 2024-04-05T00:00:00Z
author: Nguyen Pham
title: Cấu hình chuyển huớng trong Next.js
excerpt: Bài này sẽ hướng dẫn quý vị cách cấu hình chuyển hướng trong Next.js.
image: https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=4506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Lập trình
tags:
    - JavaScript
    - front-end
    - Next.js
metadata:
    canonical: https://coirieng.com/post/cau-hinh-chuyen-huong-trong-next-js
---

## Tổng quan

Chuyển hướng là một phần quan trọng trong mọi ứng dụng web, giúp người dùng di chuyển giữa các trang một cách dễ dàng và nhanh chóng.

Giả sử quý vị có một ứng dụng Next.js với một số trang như `/events`, `/classes`, `/about`, `/contact`,... Bạn muốn chuyển hướng từ `/classes` sang `/events` hoặc từ `/about` sang `/contact`. Để thực hiện điều này, quý vị cần cấu hình chuyển hướng trong Next.js.

Để cấu hình chuyển hướng trong Next.js, quý vị có thể sử dụng `rewrites` trong file `next.config.js`. `rewrites` cho phép quý vị chuyển hướng từ một URL nguồn đến một URL đích.

```jsx
// next.config.js
module.exports = withBundleAnalyzer({
    ...
    async rewrites() {
        return [{
            source: '/classes',
            destination: '/events',
        }]
    },
    ...
});
```
