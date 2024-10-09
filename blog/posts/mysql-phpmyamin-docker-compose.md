---
date: 2024-04-13T00:00:00Z
author: Nguyen Pham
title: MySQL + phpMyAdmin Docker Compose
excerpt: File docker đơn giản để chạy các dịch vụ MySQL phpMyAdmin các dự án của quý vị
image: '@/assets/images/2024/sql.jpg'
categories: 
    - Kiến thức
    - Lập trình
    - phpMyAdmin
tags:
    - JavaScript
    - back-end
    - phpMyAdmin
    - MySQL
metadata:
    canonical: https://coirieng.com/post/mysql-phpmyamin-docker-compose
---

## Tổng quan

File docker đơn giản để chạy các dịch vụ MySQL phpMyAdmin các dự án của quý vị

## Nội dung

```yaml
version: "3"

services:
  # Database
  db:
    platform: linux/x86_64
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: yourdb
      MYSQL_PASSWORD: password
    networks:
      - mysql-phpmyadmin

  # phpmyadmin
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin
    restart: always
    ports:
      - "8090:80"
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: password
    networks:
      - mysql-phpmyadmin

networks:
  mysql-phpmyadmin:

volumes:
  db_data:
```
