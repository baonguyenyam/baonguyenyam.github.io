---
date: 2024-04-02T00:00:00Z
author: Nguyen Pham
title: Vài hàm helper hữu ích cho React
excerpt: Bộ hàm helper này giúp quý vị viết React nhanh hơn và dễ dàng hơn.
image: https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Lập trình
    - React
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
    - WordPress
metadata:
    canonical: https://coirieng.com/post/vai-ham-helper-huu-ich-cho-react
---

## Tổng quan

Dưới đây là một số hàm helper hữu ích cho React:

## Truncate string

Hàm này giúp quý vị cắt chuỗi văn bản dài thành chuỗi ngắn hơn.

```jsx
export const truncateString = (str: any, num: any) => {
	if (str.length <= num) {
		return str
	}
	// Clear & remove last word
	const newStr = str.slice(0, num + 1).trim()
	// Clear & remove last comma
	const lastSpace = newStr.lastIndexOf(' ')
	if (lastSpace === -1) {
		return `${newStr}...`
	}
	return `${newStr.slice(0, lastSpace)}...`
}
```

Để sử dụng hàm này, quý vị có thể gọi nó như sau:

```jsx
import { truncateString } from "@/utils/helpers";
```

Trong phần render:

```jsx
<div dangerouslySetInnerHTML={{ __html: truncateString(data.content, 200) }} />
```

Ý nghĩa của đoạn mã trên là cắt chuỗi `data.content` và chỉ lấy 200 ký tự đầu tiên.

## Format date

Hàm này giúp quý vị định dạng ngày tháng.

```jsx
export const formatDate = (date: any) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('vi-VN', options)
}
```

## Remove HTML tags

Hàm này giúp quý vị xóa các thẻ HTML ra khỏi chuỗi văn bản.

```jsx
export const removeHTMLTags = (str: any) => {
    return str.replace(/<[^>]*>/g, '')
}
```

## Format number

Hàm này giúp quý vị định dạng số.

```jsx
export const formatNumber = (num: any) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
```

## Format currency

Hàm này giúp quý vị định dạng tiền tệ.

```jsx
export const formatCurrency = (num: any) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'
}
```

## Format URL

Hàm này giúp quý vị định dạng URL.

```jsx
export const formatURL = (str: any) => {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}
```
