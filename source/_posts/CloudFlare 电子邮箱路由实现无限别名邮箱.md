---
abbrlink: ''
categories:
- - 邮件
cover: https://www.baota.me/usr/uploads/2024/10/733370060.png
date: '2024-11-05T21:02:57.068785+08:00'
excerpt: CloudFlare 电子邮箱路由实现无限别名邮箱 简单介绍 我们常说CDN是隐藏源站的，而Clou...
tags:
- CloudFlare
title: CloudFlare 电子邮箱路由实现无限别名邮箱
updated: '2024-11-05T21:03:50.389+08:00'
---
# CloudFlare 电子邮箱路由实现无限别名邮箱


#### 简单介绍

我们常说CDN是隐藏源站的，而CloudFlare 电子邮箱路由可以理解为隐藏真实邮箱的。
目前CloudFlare 电子邮箱路由系统提供了接受邮件并且转发到指定邮箱的功能。
但发信还需要使用例如workers等其他的方法实现，不过也可以理解，毕竟发信是骚扰邮件的来源。

#### 准备工作

前言：为避免篇幅过长，本文只介绍CloudFlare 电子邮箱路由相关的，准备工作可能需要您查询其他文章。
1.CloudFlare 账号一个
2.使用NS方式接入的域名一个。
注：本文将会使用bks.us.kg作为NS方式接入的域名。

#### 创建邮件地址

![email-1.png](https://www.baota.me/usr/uploads/2024/10/2100765709.png "email-1.png")

#### 验证收件地址

![email-2.png](https://www.baota.me/usr/uploads/2024/10/1492025752.png "email-2.png")
![email-3.png](https://www.baota.me/usr/uploads/2024/10/248090159.png "email-3.png")

#### 配置解析记录

![email-4.png](https://www.baota.me/usr/uploads/2024/10/733370060.png "email-4.png")
![email-5.png](https://www.baota.me/usr/uploads/2024/10/3992497692.png "email-5.png")
![email-dns.png](https://www.baota.me/usr/uploads/2024/10/2319849639.png "email-dns.png")
![email-6.png](https://www.baota.me/usr/uploads/2024/10/2277293696.png "email-6.png")

#### 配置Catch-all 地址

Catch-all 地址开启后可以将全部邮箱名的邮件转发至指定邮箱内，如果不需要可以关闭。
![email-all.png](https://www.baota.me/usr/uploads/2024/10/1591738913.png "email-all.png")
![email-all-e.png](https://www.baota.me/usr/uploads/2024/10/2830441108.png "email-all-e.png")

#### 配置自定义地址

自定义地址可以将自定义邮箱名转发至指定邮箱。
![email-c-1.png](https://www.baota.me/usr/uploads/2024/10/2604008111.png "email-c-1.png")
![email-c-2.png](https://www.baota.me/usr/uploads/2024/10/2425960061.png "email-c-2.png")

0
