---
date: 2024-06-10T00:00:00Z
author: Nguyen Pham
title: "Kinh nghiệm làm việc với FullStack NextJS - Kỳ 5: Thủ thuật khác"
excerpt: Những quick tip khi làm việc với các dự án Node JS, React, NextJS, Prisma, Supabase, Next Auth
image: '@/assets/images/2024/download.jpeg'
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
    canonical: https://coirieng.com/post/kinh-nghiem-lam-viec-voi-react-nextjs-prisma-supabase-va-next-auth-ky-5
---

## Tổng quan

Trong phần này mình sẽ nói về Axios và Fetch sau đó là một số code command line hữu ích khi làm việc với các dự án Node.

## Axios và Fetch

Axios và Fetch là hai thư viện phổ biến nhất khi làm việc với API trong JavaScript. Fetch là một API được xây dựng vào trình duyệt, giúp chúng ta gửi các yêu cầu HTTP từ trình duyệt, trong khi đó Axios là một thư viện javascript dùng cho cả Node, XMLHttpRequest hay trên trình duyệt. Đó là một thư viện hiện đại, dựa trên Promise API.

Hầu hết các ứng dụng khi gọi API từ Client đều sử dụng Axios, vì nó hỗ trợ nhiều tính năng hơn so với Fetch. Tuy nhiên khi sử dụng NextJS, mà gọi API từ Server thì Fetch là lựa chọn tốt nhất. Vì sao vậy?

```tsx
import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import axios from "axios";

export const metadata: Metadata = {
  ...meta({
    title: "User Management",
  }),
};

export default async function Index({ params }: { params: { id: string } }) {

  const user = await new axios.get(`/api/user/${params.id}`);

  return (
    <>
	...
	</>
  );
}
```

Thường thì chúng ta sẽ gặp lỗi `ReferenceError: window is not defined` khi sử dụng Axios trong NextJS. Đó là vì Axios sử dụng `window` để gửi yêu cầu HTTP, nhưng NextJS không hỗ trợ `window` trong Server Side Rendering. Để khắc phục lỗi này, chúng ta có thể sử dụng Fetch thay vì Axios.

```tsx
import type { Metadata } from "next";
import { meta } from "@/lib/meta";

export const metadata: Metadata = {
  ...meta({
	title: "User Management",
  }),
};

export default async function Index({ params }: { params: { id: string } }) {

  const res = await fetch(`/api/user/${params.id}`);
  const user = await res.json();

  return (
	<>
	...
	</>
  );
}
```

## Command line

Thay vì cứ thao tác mệt nhọc với các command line hàng ngày, chúng ta có thể sử dụng một số thủ thuật khác để giúp chúng ta làm việc hiệu quả hơn. Trong bài viết này, mình sẽ giới thiệu một số thủ thuật mà mình thường sử dụng khi làm việc với các dự án Node JS, React, NextJS, Prisma, Supabase, Next Auth.

## Cài đặt

Tạo file `app.sh` trong thư mục gốc của dự án và thêm vào đoạn code sau:

```bash
echo "\033[1;32mSelect the app to run\033[0m"
select app in "Run DEV" "Exit"
do
	case $app in
		"Run DEV")
		echo "\033[1;32mRunning DEV app\033[0m"
			sh cmd/dev.sh
			break
			;;
		"Exit")
			echo "Exiting..."
			sh app.sh
			break
			;;
		*)
			# Return to the main menu
			echo "Invalid option $REPLY"
			sh app.sh
			break
		;;

	esac
done
```

OK bây giờ hãy chạy lệnh này sẽ thấy một menu hiện ra cho chúng ta chọn lựa.

![Next Auth](@/assets/images/2024/sh.png)

## Nâng cao 

Hãy xem xét đoạn mã dưới đây:

```bash
rm -rf ./cmd/tmp
mkdir ./cmd/tmp
# create .gitkeep file
touch ./cmd/tmp/.gitkeep

echo "Enter the name of the component: " 
read name

# get the name of the component
output=$(cat << EOF
$name
EOF
)

LowerName=$(echo $output | tr '[:upper:]' '[:lower:]')
UppserCaseFirstLetter=$(echo $LowerName | cut -c1 | tr '[:lower:]' '[:upper:]')
RemoveFirstLetter=$(echo $LowerName | cut -c2-)
getOnlyFirstLetter=$(echo $LowerName | cut -c1 | tr '[:lower:]' '[:upper:]')

cp -R './cmd/template' "./cmd/tmp/$LowerName"

directory="./cmd/tmp/$LowerName"
suffix="in"

browsefoldersInFileName () {
  for i in "$1"/*;
  do
  	if [ -f "$i" ]; then
		if [[ $i == *@templateInterface.* ]]; then
			mv "$i" "${i/@template/$LowerName}"
		fi
		if [[ $i == *@template.* ]]; then
			mv "$i" "${i/@template/$LowerName}"
		fi
	fi 
	if [ -d "$i" ]; then
	  browsefoldersInFileName "$i"
	fi
  done
}
browsefoldersInFileName  "$directory"

browsefoldersDir () {
  for i in "$1"/*;
  do
  	if [ -d "$i" ]; then
		if [[ $i == *@template ]]; then
			mv "$i" "${i/@template/$LowerName}"
		fi
		if [[ $i == *@Template ]]; then
			mv "$i" "${i/@Template/$getOnlyFirstLetter$RemoveFirstLetter}"
		fi
	fi 
	if [ -d "$i" ]; then
	  browsefoldersDir "$i"
	fi
  done
}
browsefoldersDir  "$directory"

browsefolders () {
  for i in "$1"/*;
  do
	if [ -f "$i" ]; then
	  if [[ $i == *.printedthread ]]; then
		mv "$i" "${i%.printedthread}.ts"
	  fi
	  if [[ $i == *.printedthreads ]]; then
		mv "$i" "${i%.printedthreads}.tsx"
	  fi
	fi
	if [ -d "$i" ]; then
	  browsefolders "$i"
	fi
  done
}
browsefolders  "$directory"


browsefoldersFiles () {
  for i in "$1"/*;
  do
  	if [ -f "$i" ]; then
		find "$i" -type f -exec sed -i '' -e "s/@Template/$getOnlyFirstLetter$RemoveFirstLetter/g" {} \;
		find "$i" -type f -exec sed -i '' -e "s/@template/$LowerName/g" {} \;
	fi 
	if [ -d "$i" ]; then
	  browsefoldersFiles "$i"
	fi
  done
}
browsefoldersFiles  "$directory"
```

Đoạn mã này cho phép:

- Copy toàn bộ thư mục có trong `./cmd/template` vào `./cmd/tmp/`
- Thay thế tất cả các từ khóa `@template` trong tên file, tên foldẻ và nội dung file bằng tên component mà chúng ta nhập vào 
- Thay thế tất cả các từ khóa file có phần mở rộng là `.printedthread` thành `.ts`
- Thay thế tất cả các từ khóa file có phần mở rộng là `.printedthreads` thành `.tsx`

## Lỗi thường gặp


### Lỗi: findDOMNode

Thỉng thoảng quý vị sẽ gặp lỗi như sau:

findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of DomWrapper which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node

Và đây là đoạn mã gây ra lỗi:

```tsx
<Tooltip title={task?.user?.name}>
	<Avatar data={task?.user} />
</Tooltip>
```
Rất lạ phải không nào? Nó hoàn toàn rất ổn nhưng nếu chúng ta sử dụng `React.StrictMode` thì sẽ gặp lỗi. Để khắc phục lỗi này, chúng ta chỉ cần thay đổi như sau:

```tsx
<Tooltip title={task?.user?.name}>
	<>
		<Avatar data={task?.user} />
	</>
</Tooltip>
```

## Kết luận

Các dự án trên NextJS có muôn vàn lỗi nhưng đó không phải là nó không ổn định mà là do chúng ta chưa hiểu rõ về nó. Những lỗi phát sinh này là do những quy tắc khắt khe của React, NextJS và TypeScript. Chính vì những quy tắc này mà chúng ta có thể xây dựng những ứng dụng tốt nhất đảm bảo hiệu suất và chạy ổn định nhất.

Một lần nữa mình là Nguyen Pham, trường nhóm lập trình tại phòng thí nghiệm MADE, Texas, Hoa Kỳ. Chúc quý vị một ngày làm việc hiệu quả và thành công. Cảm ơn quý vị đã đọc bài viết này.
