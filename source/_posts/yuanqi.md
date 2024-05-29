---
abbrlink: ''
categories:
- 网站
date: '2022-10-02 14:33:55'
tags:
- 编程
- 起始页
- 开源
- 技术
title: ' 自制一个浏览器起始页'
updated: '2022-10-04 08:56:38'
author: 天亮
---
> 起始页， 从本质上说，起始页就是开始的页面。这是一个通讯行业专用词汇。一般来说，起始页就是Internet起始页。打开你的浏览器，第一个出现在你眼中的页面就是起始页。
>
> 摘自某某百科

一年过去，一岁又来，而不变的，就是打开浏览器后的第一个页面，然而似乎一切并不完美，因为.......以前我用的起始页，臃肿、繁琐，我尝试换过许多次，从百度，到青柠（并不是青柠不好，只是搜索框太小[手动狗头]）

所以，我打算自己写一个起始页

## 名称来历

名字叫什么呢？这是个问题

算了不装了，我一秒钟就想出来叫 **元启**

元即悟元，启即启动，完美😋

## 设计

采用新拟态设计。此外，我并没有在搜索框上设计时间模块，而是把搜索框居中，因为一般人都是看电脑右下(上)角的时钟，所以没必要设计时钟模块。

## 开发过程

> ~~众所周知，程序员谁自己写代码咯~~

emmm，干脆抄代码算了，所以，借鉴了一下codepen上的代码，

当然，自己写了个搜索联想，用了搜狗API（百度最小请求10个数据，懒得去分割）

## 更新计划

* [X]  搜索建议（采用搜狗搜索建议服务）
* [ ]  搜索引擎切换
* [ ]  背景源自定义
* [ ]  更多设置
* [ ]  网站监测跳转

## 宣传视频

<iframe src="https://player.bilibili.com/player.html?aid=815423253&bvid=BV1EG4y1z7WF&cid=829991213&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="380"> </iframe>






<iframe src="https://player.bilibili.com/player.html?aid=773334521&bvid=BV1b14y1h7bg&cid=842156404&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="380" w> </iframe>
