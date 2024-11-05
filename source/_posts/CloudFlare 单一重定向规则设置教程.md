---
abbrlink: ''
categories:
- - CloudFlare
- - 域名
cover: https://www.baota.me/usr/uploads/2024/11/949298620.png
date: '2024-11-05T20:34:32.334335+08:00'
excerpt: CloudFlare 单一重定向规则设置教程 简单介绍 之前觉得重定向规则这玩意不难，之后研究了一下在一些使用情况下还需要手动编写规则，所以记录一下折腾结果，方便大家配置使用。 准备工作 1.CloudFlare 账号一个 2.NS接入的区域一个 静态重定向 静态重定向是不管访问http://www.youname.com 还是http://www.youname.com/post.html都会重...
tags:
- CloudFlare
- 域名
title: CloudFlare 单一重定向规则设置教程
updated: '2024-11-05T20:35:51.704+08:00'
---
# CloudFlare 单一重定向规则设置教程


### 简单介绍

之前觉得重定向规则这玩意不难，之后研究了一下在一些使用情况下还需要手动编写规则，所以记录一下折腾结果，方便大家配置使用。

### 准备工作

1.CloudFlare 账号一个
2.NS接入的区域一个

### 静态重定向

静态重定向是不管访问[http://www.youname.com](http://www.youname.com/) 还是[http://www.youname.com/post.html](http://www.youname.com/post.html)都会重定向到指定URL上面。
比如
访问[http://www.youname.com](http://www.youname.com/) 跳转到 [http://www.newname.com](http://www.newname.com/)
访问[http://www.youname.com/post.html](http://www.youname.com/post.html) 跳转到 [http://www.newname.com](http://www.newname.com/)
![cdx1.png](https://www.baota.me/usr/uploads/2024/11/949298620.png "cdx1.png")

### 动态重定向

动态重定向是访问任意URL都重定向到对应域名后保留链接路径。
比如
访问[http://www.youname.com](http://www.youname.com/) 跳转到 [http://www.newname.com](http://www.newname.com/)
访问[http://www.youname.com/post.html](http://www.youname.com/post.html) 跳转到 [http://www.newname.com/post.html](http://www.newname.com/post.html)
![cdx2.png](https://www.baota.me/usr/uploads/2024/11/634770534.png "cdx2.png")

0
