---
date: 2024-04-14T00:00:00Z
author: Nguyen Pham
title: Next.js - Prisma Setup
excerpt: Cấu hình Next.js với Prisma
image: '@/assets/images/2024/633d7a26d52a3258d9815a89_nextjs-prisma-header-min.png'
categories: 
    - Kiến thức
    - Lập trình
    - TypeScript
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
metadata:
    canonical: https://coirieng.com/post/nextjs-prisma
---

## Tổng quan

Cấu hình Next.js với Prisma

## Nội dung

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
```

# Hoặc 

```ts
// import { PrismaClient } from '../generated/client'
import { PrismaClient } from "@prisma/client";

declare global {
	interface Window {
		prismaGlobal: PrismaClient;
	}
}

declare const globalThis: any;

const prismaClientSingleton = () => {
	return new PrismaClient()
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export default prisma
```