---
abbrlink: ''
categories:
- - 域名
cover: https://www.baota.me/usr/uploads/2024/10/2315211984.png
date: '2024-11-05T21:04:09.930538+08:00'
excerpt: CloudFlare Workers 实现自选优选ip 简单介绍 CloudFlare Worker...
tags:
- workers
title: CloudFlare Workers 实现自选优选ip
updated: '2024-11-05T21:29:40.387+08:00'
---
# CloudFlare Workers 实现自选优选ip

#### 简单介绍

CloudFlare Workers优选还是挺简单的，NS接入的也可以实现优选倒是我没想到。

![https://tc.tcip.top/file/1730813370336_image.png](https://tc.tcip.top/file/1730813370336_image.png)

#### 准备工作

前言：为避免篇幅过长，本文只介绍Workers优选相关的，准备工作可能需要您查询其他文章。
1.CloudFlare 账号一个
2.Workers 已经部署的项目一个
3.NS或 [SAAS(CNAME)]([归档 | TCIP的窝窝](https://vercel.blog.tcip.top/2024/11/05/CloudFlare%20SAAS(cname)%20%E6%8E%A5%E5%85%A5%E7%BD%91%E7%AB%99%E5%9F%9F%E5%90%8D/)) 接入的需要优选的域名一个
注：推荐使用使用SAAS(CNAME)方式接入，本文将会使用workers.baota.me作为需要优选的域名

#### 创建域名(二选一)

因为有NS或SAAS(CNAME)两种方式接入的情况，请自行选择适合您的方式。
**1.NS方式接入的域名**
DNS记录内创建workers.baota.me 并cname到 优选域名cloudflare.182682.xyz
![dns.png](https://www.baota.me/usr/uploads/2024/10/250444570.png "dns.png")

**2.【推荐】SAAS(CNAME)方式接入的域名 >> [详细教程](https://www.baota.me/post-413.html)**
![saas.png](https://www.baota.me/usr/uploads/2024/10/2196547213.png "saas.png")

#### 创建Workers路由

**添加workers.baota.me域名到Workers项目路由**
路径：项目-设置-域和路由-添加-路由
![workers1.png](https://www.baota.me/usr/uploads/2024/10/2315211984.png "workers1.png")
![workers-rou.png](https://www.baota.me/usr/uploads/2024/10/3615702402.png "workers-rou.png")
**创建路由workers.baota.me/\* 切记域名后面一定要加/\***
![workers-baotame.png](https://www.baota.me/usr/uploads/2024/10/1274528574.png "workers-baotame.png")

0
