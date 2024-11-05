---
abbrlink: 节点实现自选优选ip
categories:
- - CloudFlare Pages
- - 节点
- - 教程
- - 国内加速
cover: https://www.baota.me/usr/uploads/2024/10/2517293530.png
date: '2024-11-05T16:56:50.011540+08:00'
excerpt: 简单介绍 原以为pages跟workers是一样的，创建了个pages项目看了一下，有点类似于早期的虚拟主机(空间)。优选的话域名过了验证，改解析到优选域名上即可。 准备工作 前言：为避免篇幅过长，本文只介绍pages优选相关的，准备工作可能需要您查询其他文章。 1.CloudFlare 账号一个 2.pages 已经部署的项目一个 3.域名解析在任意解析服务的域名一个。 注：本文将会使用page...
tags:
- 节点
- CloudFlare Pages
- 提速
- 国内加速
title: CloudFlare Pages 实现自选优选ip
updated: '2024-11-05T17:21:54.000+08:00'
---
#### 简单介绍

原以为pages跟workers是一样的，创建了个pages项目看了一下，有点类似于早期的虚拟主机(空间)。优选的话域名过了验证，改解析到优选域名上即可。

#### 准备工作

前言：为避免篇幅过长，本文只介绍pages优选相关的，准备工作可能需要您查询其他文章。
1.CloudFlare 账号一个
2.pages 已经部署的项目一个
3.域名解析在任意解析服务的域名一个。
注：本文将会使用pages.baota.me作为需要优选的域名，baota.me域名托管在华为云解析。

#### 添加自定义域

![pages-baotame.png](https://www.baota.me/usr/uploads/2024/10/2517293530.png "pages-baotame.png")

#### DNS验证

将您域名解析到page提供的cname地址
![page-dns.png](https://www.baota.me/usr/uploads/2024/10/983170240.png "page-dns.png")

#### 等待验证通过

![on.png](https://www.baota.me/usr/uploads/2024/10/3088367770.png "on.png")

#### 修改为优选地址

我查看了CF文档，没有找到取消解析后会删除停用自定义域的说明。
理论上直接修改为优选地址也是没啥问题的。
但如果你的域名解析支持分国家地区线路。
我强烈建议国内解析到优选地址，国外方向走默认的cname地址。
![pages-182682.png](https://www.baota.me/usr/uploads/2024/10/1954513842.png "pages-182682.png")

0
