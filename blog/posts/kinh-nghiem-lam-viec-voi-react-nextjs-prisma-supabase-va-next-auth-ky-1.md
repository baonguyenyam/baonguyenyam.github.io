---
date: 2024-06-05T00:00:00Z
author: Nguyen Pham
title: "Kinh nghiệm làm việc với FullStack NextJS - Kỳ 1: Next, Node và Next Auth"
excerpt: Hơn 8 năm làm việc trên các nền tảng này thực sự mình đã gặp không ít vấn đề đau đầu và mất thời gian để giải quyết.
image: '@/assets/images/2024/ne.png'
categories: 
    - Kiến thức
    - Lập trình
    - TypeScript
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
    canonical: https://coirieng.com/post/kinh-nghiem-lam-viec-voi-react-nextjs-prisma-supabase-va-next-auth-ky-1
---

## Tổng quan

Bởi lẽ các lỗi thường xuyên xảy ra và không phải ai cũng biết cách giải quyết. Bài viết này mình sẽ chia sẻ những kinh nghiệm mà mình đã trải qua để giúp quý vị tiết kiệm thời gian và công sức hơn.

## Cấu hình NextJS

Đầu tiên, chúng ta sẽ bàn về cấu hình NextJS. Nếu quý vị nào sử dụng Antd mà build bị lỗi thì hãy thêm cấu hình sau vào file `next.config.mjs`:

```ts
const nextConfig = {
  ...
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
  ...
}
```

Cũng đừng nên tắt `reactStrictMode` vì nó giúp quý vị phát hiện lỗi một cách dễ dàng hơn. Sai lầm phổ biến mà mình thấy là quý vị tắt `reactStrictMode` để rồi sau này khi ứng dụng phình to lên thì gặp rất nhiều lỗi không mong muốn mà bất lực không biết phải làm sao.

## Next Auth và `middleware.ts` 

Vercel mặc định không hỗ trợ file `middleware.ts` lớn hơn 1MB bởi lẽ nó ảnh huởng đến hiệu suất của ứng dụng. Nếu quý vị gặp lỗi `Error: Middleware is too large` thì hãy cắt giảm bớt các plugins import vào file `middleware.ts` thường là từ file `auth.ts` hoặc `session.ts`. Dung lượng file `middleware.ts` được thể hiện trong phần log khi quý vị build ứng dụng.

![Next Auth](@/assets/images/2024/build.png)

Thường mình chỉ import các plugins thực sự cần thiết vào file `middleware.ts` ví dụ như Auth mà thôi, tránh tình trạng import cả prisma, supabase vào file này. Có lần mình giúp một anh bạn ở Delaware giải quyết vấn đề ứng dụng build OK nhưng không chạy được, hoá ra anh ấy import faker vào file `middleware.ts` và dung lượng file lên gần 2MB. Điều này là quá vô nghĩa và không cần thiết.

![Next Auth](@/assets/images/2024/conf.png)

Một thủ thuật khác cũng khá hay là hãy tách `auth.config.ts` và `auth.ts` ra khỏi nhau để chỉ import phần config vào file `middleware.ts` thôi:

**auth.ts**

```ts
import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

export const {
	auth,
	handlers,
	signIn,
	signOut,
} = NextAuth({
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	...authConfig,
});
```

## Lazy load mọi thứ

Mặc định NextJS sẽ tải tất cả các component mà quý vị import vào trước khi render trang. Điều này sẽ làm giảm hiệu suất của ứng dụng và rất dễ gây lỗi. Để giải quyết vấn đề này, quý vị hãy sử dụng `next/dynamic` để lazy load mọi thứ. Ví dụ dưới đây sẽ cho thấy cách lazy load một component là `@blocknote`:


**Editor.tsx**

```tsx
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import("./EditorBlock_Init"), { ssr: false });
export default Editor;
```

**EditorBlock_Init.tsx**

```tsx
"use client";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

export default function EditorBlock({
  onChange,
  defaultValue,
}: {
  onChange: any;
  defaultValue: any;
}) {

  ...
  return (
    <>
      ...
    </>
  );
}
```

## Cấu hình `.eslintrc.json` chặt chẽ

Dưới đây mà code mẫu một file `.eslintrc.json` mà mình sử dụng, hãy chú ý 2 plugins `jsx-a11y` và `simple-import-sort`, chúng sẽ giúp quý vị kiểm tra lỗi và sắp xếp import một cách chặt chẽ. Điều này giúp cho code của quý vị dễ đọc hơn và dễ bảo trì hơn, đồng thời giúp quý vị tránh được một số lỗi phổ biến build ứng dụng:

```json
{
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  "plugins": [
    "react",
    "import",
    "simple-import-sort",
    "jsx-a11y",
    "react-hooks",
    "@typescript-eslint",
    "tailwindcss",
    "jest",
    "jest-formatting",
    "testing-library",
    "jest-dom"
  ],
  "rules": {
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            "^react",
            "^@?\\w"
          ],
          [
            "^(@|components)(/.*|$)"
          ],
          [
            "^\\u0000"
          ],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$"
          ],
          [
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$"
          ],
          [
            "^.+\\.?(css)$"
          ]
        ]
      }
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/named": 0,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-named-as-default-member": 0,
    "import/no-unresolved": 0,
    "no-useless-escape": "off",
    // React 
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "jsx-a11y/rule-name": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/img-redundant-alt": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/anchor-has-content": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "off",
    "react/destructuring-assignment": "off", 
    "react/require-default-props": "off", 
    "react/jsx-props-no-spreading": "off", 
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/react-in-jsx-scope": "off",
    "@next/next/no-img-element": "off",
    // Tailwindcss
    "tailwindcss/classnames-order": "off",
    "tailwindcss/enforces-negative-arbitrary-values": "off",
    "tailwindcss/enforces-shorthand": "off",
    "tailwindcss/migration-from-tailwind-2": "off",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "off",
    "tailwindcss/no-unnecessary-arbitrary-value": "off"
  },
  "settings": {
    "jsx-a11y": {
      "polymorphicPropName": "as",
      "components": {
        "CityInput": "input",
        "CustomButton": "button",
        "MyButton": "button",
        "RoundButton": "button"
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    },
    "react": {
      "createClass": "createReactClass", 
      "pragma": "React", 
      "fragment": "Fragment", 
      "version": "detect", 
      "flowVersion": "0.53" 
    }
  },
  "ignorePatterns": [
    "./_**/*"
  ]
}
```

## Node.js và ncu 

Nếu quý vị gặp lỗi khi cài đặt các package Node.js thì hãy sử dụng `ncu` để cập nhật các package lên phiên bản mới nhất. Điều này giúp tránh được một số lỗi phổ biến khi cài đặt các package Node.js:

```bash
pnpm i -g npm-check-updates
```

Sau đó chạy lệnh sau để cập nhật các package:

```bash
npx ncu -u
```

và cuối cùng chạy lệnh sau để cài đặt các package mới:

```bash
pnpm i
```

Tuy nhiên khi cập nhật các package lên phiên bản mới nhất, quý vị thường bị những lỗi như thế này:

![Next Auth](@/assets/images/2024/loi.png)

Hãy xem xét kỹ các lỗi trên. Đọc kỹ log để biết lỗi đó là gì và cách giải quyết nó. Ví dụ này cho thấy rằng node thấy plugins `eslint@9.4.0` không tương thích với `eslint-plugin-import@2.29.1`. Lý do là bản thân `eslint-plugin-import@2.29.1` chỉ tương thích tối đa với `eslint@8.x.x` mà thôi. Để giải quyết vấn đề này, quý vị chỉ cần cài đặt lại `eslint@8.x.x` hoặc gỡ bỏ `eslint-plugin-import@2.29.1` ra khỏi `package.json`.

Tuy nhiên quý vị vẫn có thể bỏ qua các lỗi này bằng cách thêm `--force` vào lệnh cập nhật package, điều này không phải lúc nào cũng là giải pháp tốt:

```bash
npm i --force
```

Còn một lỗi khác lại vô cùng quan trọng không kém khi build ứng dụng NextJS không được trong khi chạy dev rất mượt mà và không có lỗi. 90% lỗi này là do quý vị sử dụng phiên bản Node không mong đợi. 

![Next Auth](@/assets/images/2024/node.png)

Kinh nghiệm với Node nhiều năm cho thấy không nên tham lam sử dụng các phiên bản mới quá của nó mà hãy sử dụng phiên bản LTS. ĐỪNG MẠO HIỂM SỬ DỤNG PHIÊN BẢN MỚI CỦA NODE.JS VÌ NÓ SẼ GÂY RA RẤT NHIỀU LỖI MÀ QUÝ VỊ KHÔNG THỂ GIẢI QUYẾT ĐƯỢC.


## Kiến trúc ứng dụng

Thông thuờng khi import một component quý vị hay sử dụng cú pháp sau:

```tsx
import { myButton } from "../../components/myButton";
```

![Next Auth](@/assets/images/2024/struc.png)

Hãy sử dụng `jest` để giúp quý vị thay đổi cú pháp import một cách dễ dàng hơn, dưới đây là một ví dụ về cách sử dụng `jest.config.js`:

```tsx 
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/**/_*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!./src/generated/**",
  ],
  ...
};

module.exports = createJestConfig(customJestConfig);
```

Với cấu hình này, quý vị có thể import một component ở bất cứ đâu như sau:

```tsx
import { myButton } from "@/components/myButton";
```


## Kết luận

Mình chắc chắn là nếu tuân thủ những nguyên tắc ở phần này quý vị sẽ làm việc mượt mà hơn và giảm thiểu được rất nhiều lỗi không cần thiết. Điều mà không ít những quý vị mới vào nghề hay làm việc với NextJS gặp phải. Suốt ngày chỉ loay hoay với lỗi mà không biết cách giải quyết dẫn đến mất thời gian và công sức và cuối cùng là nản chí và từ bỏ. Hy vọng bài viết này sẽ giúp quý vị giải quyết được một số vấn đề mà mình đã gặp phải và giúp quý vị tiết kiệm thời gian và công sức hơn.

Trong phần sau mình sẽ nói về cách làm việc với Prisma, Supabase và những điều còn tuyệt vời hơn nữa. Hẹn gặp lại quý vị ở phần sau.

Một lần nữa mình là Nguyen Pham, trường nhóm lập trình tại phòng thí nghiệm MADE, Texas, Hoa Kỳ. Chúc quý vị một ngày làm việc hiệu quả và thành công. Cảm ơn quý vị đã đọc bài viết này.
