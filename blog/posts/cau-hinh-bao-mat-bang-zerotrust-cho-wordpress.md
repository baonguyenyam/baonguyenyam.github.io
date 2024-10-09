---
# https://tsmith.co/
date: 2024-04-06T00:00:00Z
author: Nguyen Pham
title: Cấu hình bảo mật WordPress bằng Zero Trust của Cloudflare
excerpt: Một bài viết hướng dẫn cấu hình bảo mật cho WordPress bằng Zero Trust của Cloudflare
image: https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=6270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: 
    - Kiến thức
    - Bảo mật
    - WordPress
    - Cloudflare
tags:
    - bảo mật
    - WordPress
    - Cloudflare
    - Zero Trust
metadata:
    canonical: https://coirieng.com/post/cau-hinh-bao-mat-bang-zerotrust-cho-wordpress
---

## Tổng quan

Nói đến Cloudflare chắc hẳn ai cũng biết đến công dụng của nó trong việc tăng tốc độ website, bảo vệ website khỏi các cuộc tấn công DDoS, cung cấp SSL miễn phí, ... Tuy nhiên, ít người biết rằng Cloudflare còn cung cấp một dịch vụ bảo mật mạnh mẽ hơn, đó là Zero Trust.

Với Zero Trust, sẽ giúp quý vị tăng cường bảo mật cho website WordPress của mình một cách hiệu quả hơn. Bên cạnh đó còn giúp quý vị kiểm soát quyền truy cập vào website của mình một cách chặt chẽ hơn.

## Cấu hình Zero Trust cho WordPress

Zero Trust cho phép quý vị tạo một địa chỉ riêng cho mình, đó sẽ là URL mà quý vị sẽ sử dụng để truy cập vào website của quý vị, ví dụ như `https://my-business.cloudflareaccess.com/`.

### Bước 1: Tạo Cloufdlare Zero Trust URL

Đăng nhập vào Cloudflare của tên miền của quý vị và chọn **Zero Trust** từ menu bên trái, sau đó chọn **Settings** → **General** → **Team domain**. 

![Zero Trust](@/assets/images/2024/zero.webp)

### Bước 2: Cấu hình Zero Trust Authentication

Bắt đầu cấu hình phương thức đăng nhập đầu tiên bằng cách chọn **Settings** → **Authentication** → **Add new**.

![Zero Trust](@/assets/images/2024/zero-1.webp)

Trong ví dụ này mình sử dụng **One-time PIN** làm phương thức đăng nhập đầu tiên. 

### Bước 3: Tạo ứng dụng Zero Trust

Di chuyển đến **Access** → **Applications** → **Add an application**.

![Zero Trust](@/assets/images/2024/zero-2.webp)

Trong ví dụ này mình sử dụng **Self-hosted**. 

![Zero Trust](@/assets/images/2024/image-23.png)

Ví dụ mình đặt tên ứng dụng là `DangNho Admin` và chọn tên miền của quý vị từ danh sách thả xuống. Với WordPress, có 2 đường dẫn cần được bảo vệ. Đường dẫn đầu tiên mà mình muốn bảo vệ là `wp-admin*`.

![Zero Trust](@/assets/images/2024/image-24.png)

## Identity Providers

Cuộn xuống phần **Identity Providers**, mặc định hệ thống sẽ chọn là “Accept all available identity providers.” Nếu quý vị muốn sử dụng Google thì chọn **Accept all available identity providers** hoặc muốn sử dụng mã PIN một lần thì chọn **One-time PIN**. 

![Zero Trust](@/assets/images/2024/image-25.png)

## Configure Rules

Ở phần Configure Rules cho phép quý vị thiết lập chính sách xác định người dùng nào có quyền truy cập vào ứng dụng. Nếu là duy nhất quản trị viên trên trang web WordPress của mình thì quý vị nên chọn là “onlyme” ở phần Selector **Allow**. Trong ví dụ này mình chọn **Emails** vì hệ thống mình có nhiều người dùng. 

![Zero Trust](@/assets/images/2024/image-26.png)

## Chạy ứng dụng

OK, bây giờ quý vị đã cấu hình xong ứng dụng Zero Trust. Hãy vào lại wp-admin của website WordPress của quý vị và sẽ thấy một trang đăng nhập mới. Đây chính là trang đăng nhập của ứng dụng Zero Trust mà quý vị vừa tạo.

![Zero Trust](@/assets/images/2024/image-27.png)


