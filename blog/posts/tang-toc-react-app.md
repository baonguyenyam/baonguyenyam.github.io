---
date: 2024-10-05T00:00:00Z
author: Nguyen Pham
title: Cách tăng tốc ứng dụng React
excerpt: Trong bài viết này, mình sẽ hướng dẫn cách tăng tốc ứng dụng React của quý vị một cách hiệu quả nhất.
image: '@/assets/images/2024/1644864897-next-framework.jpeg'
categories: 
    - Kiến thức
    - React
    - JavaScript
    - Performance
    - SpeedUp
tags:
    - JavaScript
    - React
    - Next.js
    - Gatsby
    - Astro
metadata:
    canonical: https://coirieng.com/post/tang-toc-react-app
---

## Tổng quan

React là một thư viện JavaScript phổ biến nhất hiện nay, được Facebook phát triển và duy trì. Nó giúp chúng ta xây dựng các ứng dụng web một cách dễ dàng và nhanh chóng. Tuy nhiên, việc tối ưu hóa ứng dụng React để tăng tốc độ tải trang là một vấn đề mà nhiều nhà phát triển gặp phải.

Trong bài này chugn ta sẽ không nói đến việc cấu hình các công cụ tối ưu hóa như Webpack, Vite... mà sẽ tập trung vào việc tối ưu hóa mã nguồn React để tăng tốc độ tải trang.

## Sử dụng useCallback

Hãy xem đoan mãy sau:

```jsx
export default function Demo() {
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
    };

    return (
        <button onClick={() => toggleTheme()}>Toggle Theme</button>
    );
}
```

Hãy cải thiện nó bằng `useCallback`:

```jsx
import { useCallback } from "react";

export default function Demo() {
    const toggleTheme = useCallback(() => {
        if (theme === "dark") {
            setTheme("light");
        }
    }, [theme, setTheme]);
    
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}

```

Với cách này, React sẽ không phải tạo ra một hàm mới mỗi khi component render lại, giúp giảm bộ nhớ sử dụng và tăng tốc độ tải trang.

## Sử dụng useMemo

Tương tự như `useCallback`, `useMemo` giúp chúng ta tối ưu hóa mã nguồn React bằng cách lưu trữ giá trị tính toán trước đó.

```jsx
export default function Demo() {
    return (
        <BlockBG
            bgImage="/imgs/madelab/homepagebg.jpg"
        />
    );
}
```

Cải thiện bằng `useMemo`:

```jsx
import { useMemo } from "react";

export default function Demo() {
    const blockBGProps = useMemo(() => ({
        bgImage: "/imgs/madelab/homepagebg.jpg",
    }), []);

    return (
        <BlockBG {...blockBGProps} />
    );
}
```

Như vậy, React sẽ không phải tạo ra một object mới mỗi khi component render lại, tất cả sẽ được lưu trữ trong bộ nhớ.

## Thay đổi cách import 

Thay vì import toàn bộ các component từ thư viện React:

```jsx
import BlockNewletters from "./BlockNewletters";
export default function Demo() {
    return (
        <>
            ...
            <BlockNewletters />
            ...
        </>
    )
}
```

Hãy import trực tiếp từng component cần thiết:

```jsx
import React, { useEffect, useState, useCallback } from "react";
import BlockNewletters from "./BlockNewletters";

const MemoizedBlockNewletters = React.memo(BlockNewletters);

export default function Demo() {
    return (
        <>
            ...
            <MemoizedBlockNewletters />
            ...
        </>
    )
}
```

Với cách này, React sẽ không phải tải toàn bộ thư viện React mỗi khi render component. Thay vào đó, nó chỉ tải những component cần thiết trước.

## Sử dụng `React.memo`

`React.memo` giúp chúng ta tối ưu hóa mã nguồn React bằng cách lưu trữ kết quả render trước đó.

```jsx
import { Modal } from "antd";

export default function Demo() {
    return (
        <Modal
            open={isModalOpen === "autosubscribe"}
        >
        </Modal>
    )
}
```

Hãy cải thiện bằng cách:

```jsx
import React, { useCallback } from "react"; 
import { Modal } from "antd";

const MemoizedModal = React.memo(Modal);

export default function Demo() {
    return (
        <MemoizedModal
            open={isModalOpen === "autosubscribe"}
        >
        </MemoizedModal>
    )
}
```

## Cú pháp If-Else

Thay vì sử dụng cú pháp if-else:

```jsx
{loading && (
    <Loading />
)}
{!loading && (
    <Content />
)}
```

Hãy sử dụng cú pháp ngắn gọn hơn:

```jsx
{loading ? <Loading /> : <Content />}
```

## Sử dụng lazy và Suspense

React cung cấp `lazy` và `Suspense` để tải component khi cần thiết.

```jsx
import BlockEditor from "@/app/components/block-editor";

export default function Demo() {
    return (
        <BlockEditor />
    )
}
```

Hãy cải thiện bằng cách:

```jsx
import React, { lazy, Suspense } from "react";

export default function Demo() {
    const LazyBlockEditor = memo(lazy(() => import("@/app/components/block-editor")));

    return (
        <Suspense fallback={<>Loading...</>}>
            <LazyBlockEditor />
        </Suspense>
    )
}
```

## Làm việc với vòng lặp

Thay vì sử dụng vòng lặp thông thường:

```jsx
export default function Demo() {
    return (
        <>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}
```

Hãy sử dụng cách sau:

```jsx
import { useMemo } from "react";

export default function Demo() {
    const socialIcons = useMemo(() => {
        return items.map((item, index) => (
            <Item key={index} item={item} />
        ));
    }, [items]);

    return (
        <>
            {socialIcons}
        </>
    )
}
```

Với cách này, React sẽ không phải tính toán lại mỗi khi component render lại.

## Làm việc với Font render

Thay vì sử dụng font từ FontAwesome:

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Demo() {
    return (
        <FontAwesomeIcon icon={faCoffee} className="icon" style={{ color: "red" }} />
    )
}
```

Hãy sử dụng cách sau:

```jsx
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemoizedFontAwesomeIcon = React.memo(FontAwesomeIcon);

const iconProps = useMemo(() => ({
    className: "icon",
    style: { color: "red" }
}), []);

export default function Demo() {
    return (
        <MemoizedFontAwesomeIcon {...iconProps} icon={faCoffee} />
    )
}
```


## Cache API request

Thay vì gọi API mỗi khi component render lại:

```jsx
import { useEffect, useState } from "react";

export default function Demo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.coirieng.com/posts")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            {data.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}
```

Hãy sử dụng cách sau:

```jsx
import { useCallback, useEffect, useState, useMemo } from "react";

export default function Demo() {
    const [data, setData] = useState([]);
    const fetchData = useCallback(() => {
        fetch("https://api.coirieng.com/posts", { cache: "force-cache" })
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    const memoizedData = useMemo(() => data, [data]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            {memoizedData.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}
```

## Kết luận

Trên đây là một số cách tối ưu hóa mã nguồn React để tăng tốc độ tải trang. Hy vọng bài viết sẽ giúp ích cho quý vị trong việc tối ưu hóa ứng dụng React của mình. Nếu quý vị có bất kỳ câu hỏi hoặc góp ý nào, hãy để lại lời nhắn. Chúc quý vị thành công!