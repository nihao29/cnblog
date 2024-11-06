---
abbrlink: ''
ai: 告别龟速！用 Cloudflare Pages 搭建 DockerHub 镜像加速器  大家好啊！最近在折腾Docker的时候，有没有遇到拉取镜像特别慢，甚至直接超时的情况？别着急，今天我就来和大家分享一个小妙招，教你如何用Cloudflare
  Pages搭建一个DockerHub代理，让你的镜像下载飞起来！  为啥要搞这个代理？ 说到为什么要搞这个代理，主...
categories:
- - Cloudflare
- - Pages
cover: https://imgs.huluohu.com/2024/10/04/17280420173512.jpg
date: '2024-11-06T14:56:46.185316+08:00'
tags:
- Github
- Follow
title: 告别龟速！用 Cloudflare Pages 搭建 DockerHub 镜像加速器
updated: '2024-11-06T14:58:13.155+08:00'
---
# 告别龟速！用 Cloudflare Pages 搭建 DockerHub 镜像加速器



> 大家好啊！最近在折腾Docker的时候，有没有遇到拉取镜像特别慢，甚至直接超时的情况？别着急，今天我就来和大家分享一个小妙招，教你如何用Cloudflare Pages搭建一个DockerHub代理，让你的镜像下载飞起来！

## 为啥要搞这个代理？

说到为什么要搞这个代理，主要是因为咱们访问DockerHub的时候经常会遇到一些烦人的问题：

1. 下载速度慢得让人抓狂
2. 时不时就连接超时
3. 有时候莫名其妙就被墙了

这些问题真的是让人又气又恼。但是呢，有问题咱就要想办法解决，对吧？所以今天我就给大家介绍这么一个简单又好用的方法。

## Cloudflare Pages是个啥？

在开始动手之前，我们先来简单了解一下Cloudflare Pages。这玩意儿其实是Cloudflare推出的一个静态网站托管服务，不过它可不只是用来放静态网页那么简单。借助它的能力，我们可以轻松部署一些serverless应用，比如说今天我们要搭建的这个DockerHub代理。

使用Cloudflare Pages有这么几个好处：

1. 完全免费，不用花一分钱
2. 部署超简单，几分钟就能搞定
3. 自带CDN加速，速度杠杠的
4. 安全可靠，有Cloudflare的保护

听起来是不是很不错？那咱们就赶紧开始动手吧！

## 搭建步骤

好了，废话不多说，现在就来看看具体怎么操作：

### 1. 准备工作

首先，你得有个Cloudflare账号和Github账号。没有的话赶紧去注册一个，很简单的。地址如下：

* Cloudflare官网：`https://dash.cloudflare.com/`
* Github官网：`https://github.com/`

### 2. Fork代理项目

打开项目`https://github.com/cmliu/CF-Workers-docker.io`，并Fork到自己的Github账号。

![Docker](https://imgs.huluohu.com/2024/10/04/17280420173512.jpg)

### 3. 创建一个新的Pages项目

1. 登录Cloudflare控制台，点击左侧菜单的"Worker 和 Pages"，创建一个新Pages项目
   ![Docker](https://imgs.huluohu.com/2024/10/03/17278880637304.jpg)
2. 点击"链接到Git"，在Github页签下添加你的Github账号，并在存储库中选择上面Fork的项目
   ![Docker](https://imgs.huluohu.com/2024/10/04/17280421505668.jpg)
3. 继续点击"开始部署"，啥都不用改，直接"保存并部署"，等待部署完成

![Docker](https://imgs.huluohu.com/2024/10/04/17280423292946.jpg)

### 4. 自定义域名

点击"保存并部署"按钮，然后就静静等待Cloudflare帮我们把项目部署好。一般来说，这个过程很快，可能就一两分钟。部署完成后，进入项目的页面，点击`自定义域`，给这个代理设置一个域名，以方便后续的使用（前提是你在Cloudflare中已经添加了自己的域名），比如`docker.youdomain.com`

![Docker](https://imgs.huluohu.com/2024/10/04/17280424424844.jpg)

## 如何使用

好了，代理搭建完成，现在来看看怎么用：

1. 打开你的终端或命令提示符
2. 想拉取镜像的时候，把原来的 `docker.io` 替换成你的Cloudflare Pages域名就行了

比如说，原来你可能是这么拉取镜像的：

```bash
docker pull docker.io/library/nginx:latest
```

现在你就可以这么写：

```bash
docker pull docker.youdomain.com/library/nginx:latest
```

就这么简单，一个改动就搞定了！

## 小贴士

1. 如果你经常使用Docker，可以考虑把这个代理地址设置成默认的registry-mirrors，这样以后就不用每次都改了。
   ![Docker](https://imgs.huluohu.com/2024/10/04/17280427120442.jpg)
2. 记得定期检查一下cmliu/CF-Workers-docker.io这个项目，看看有没有更新。如果有的话，你可以在Cloudflare Pages后台轻松重新部署，保持代理始终是最新的状态。

## 总结

好啦，今天的分享就到这里。通过这个小技巧，相信大家以后再也不用为DockerHub龟速发愁了。虽然这个方法可能不是最完美的解决方案，但是对于我们普通用户来说，已经足够好用了。
