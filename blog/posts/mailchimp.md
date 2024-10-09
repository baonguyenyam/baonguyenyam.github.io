---
date: 2024-08-12T00:00:00Z
author: Nguyen Pham
title: Cách gửi email thông qua API của MailChimp bằng React
excerpt: Trong bài viết này mình sẽ hướng dẫn cách gọi đến APIs MailChimp và gửi email thôgn qua dịch vụ Mandrill
image: '@/assets/images/2024/mailchimp-1024x590.webp'
categories: 
    - Kiến thức
    - Lập trình
    - MailChimp
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
    - MailChimp
metadata:
    canonical: https://coirieng.com/post/mailchimp
---

## Tổng quan

Trong bài viết này mình sẽ hướng dẫn cách gọi đến APIs MailChimp và gửi email thôgn qua dịch vụ Mandrill

## Cài đặt Mandrill

Đầu tiên, chúng ta cần cài đặt `Mandrill` bằng cách vào `Transactional Email` trên MailChimp và chọn `Lanch App`

![MailChimp](@/assets/images/2024/lanchapp.png)

## Tạo API Key 

Sau khi cài đặt xong, chúng ta cần tạo `API Key` để gọi đến API của Mandrill. Để tạo `API Key`, chúng ta vào `Settings` -> `SMTP & API Info` -> `API Keys` và chọn `Create A Key`

![MailChimp](@/assets/images/2024/mainchimp-1.png)

## Verify Domain 

Để gửi email, chúng ta cần verify domain của mình trước nếu không thư sẽ không gửi được hoặc sẽ vào spam mail. Để verify domain, chúng ta vào `Settings` -> `Domains` và chọn `Verify a Domain`

![MailChimp](@/assets/images/2024/mainchimp-2.png)

Nhập tiếp email của quý vị để Mandrill gửi thư xác nhận, chú ý là email phải cùng domain với domain vừa add

## Tạo Email Template 

Sau khi verify domain, chúng ta cần tạo email template để gửi email. Để tạo email template, chúng ta vào `Outbound` -> `Create Template`

![MailChimp](@/assets/images/2024/mainchimp-3.png)

## Gửi Email 

Dưới đây là 2 đoạn mã React để gửi email bằng Template và gửi Email bằng cách tuy chỉnh nội dung:

```jsx
const dataEmail = {
    key: 'API_KEY',
    template_name: 'partner-page',
    template_content: [{}],
    message : {
        from_email: 'fromemail@demo.com',
        from_name: 'Test',
        to: [ {email: 'toemail@demo.com', type: 'to'} ],
        subject: 'Thanks for subscribing!',
    }
}
await axios.post(`https://mandrillapp.com/api/1.0/messages/send-template`, dataEmail);
```

```jsx
const dataEmail = {
    key: 'API_KEY',
    message : {
        from_email: 'fromemail@demo.com',
        from_name: 'Test',
        to: [ {email: 'toemail@demo.com', type: 'to'} ],
        subject: 'Thanks for subscribing!',
        text: `First Name: ${formData.get("firstName")}\n\n
            Last Name: ${formData.get("lastName")}\n\n
            Email: ${formData.get("Email")}\n\n
            Phone: ${formData.get("Phone")}\n\n
            Description: ${formData.get("Description")}`,
        code: `First Name: ${formData.get("firstName")}<br/>
            Last Name: ${formData.get("lastName")}<br/>
            Email: ${formData.get("Email")}<br/>
            Phone: ${formData.get("Phone")}<br/>
            Description: ${formData.get("Description")}`,
    }
}
await axios.post(`https://mandrillapp.com/api/1.0/messages/send`, dataEmailAdmin);
```