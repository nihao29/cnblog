---
abbrlink: ''
ai: 使用PicGo + GitHub 搭建 Obsidian 图床  使用 Obsidian 等 Markdown 编辑器时，可靠又稳定的图床是必不可少的。PicGo
  + GitHub 背靠微软，稳定性问题基本不用担心，可以实现粘贴图片自动上传到 GitHub 的公有仓库。而且配置简单，使用优雅。 1 Github 1.1 创建仓库
  登陆 github ，创建公...
categories:
- - 图床
cover: https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171458581.png
date: '2024-11-06T13:48:37.172409+08:00'
tags:
- 图床
title: 使用PicGo + GitHub 搭建 Obsidian 图床
updated: '2024-11-06T13:54:43.063+08:00'
---
# 使用PicGo + GitHub 搭建 Obsidian 图床

![https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171458581.png](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171458581.png "使用 PicGo + GitHub 搭建 Obsidian 图床，剪贴板自动上传图片，稳定可靠")

使用 Obsidian 等 Markdown 编辑器时，可靠又稳定的图床是必不可少的。PicGo + GitHub 背靠微软，稳定性问题基本不用担心，可以实现粘贴图片自动上传到 GitHub 的公有仓库。而且配置简单，使用优雅。

## 1 Github

### 1.1 创建仓库

登陆 [github](https://github.com/) ，创建**公开**仓库

[![创建公开图床仓库](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141532137.png "创建公开图床仓库")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141532137.png?size=large)

### 1.2 github 获取个人 token

生成一个token用于PicGo访问图床仓库。

* 访问：[settings-tokens](https://github.com/settings/tokens) ，点击**Generate new token**

[![Generate new token](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141534671.png "Generate new token")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141534671.png?size=large)

* 设置 token 属性
  * Expiration：`no expiration`
  * Select scopes：`repo` 一定要全选，其他的无所谓

[![设置 token 属性](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141536361.png "设置 token 属性")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141536361.png?size=large)

点击`Generate token`，生成 token。

小心

这个 token 生成后只会显示这一次！注意复制、保存到其他地方以备后续使用。

[![复制token](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141537568.png "复制token")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141537568.png?size=large)

## 2 PicGo

到 Github [发布页面](https://github.com/Molunerfinn/PicGo/releases)下载 PicGo 最新安装包。

2.4.0-beta.6 国内可下载链接

[PicGo-2.4.0-beta.6-arm64.dmg](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-2.4.0-beta.6-arm64.dmg)

[PicGo-2.4.0-beta.6-x64.dmg](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-2.4.0-beta.6-x64.dmg)

[PicGo-2.4.0-beta.6.AppImage](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-2.4.0-beta.6.AppImage)

[PicGo-Setup-2.4.0-beta.6-ia32.exe](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-Setup-2.4.0-beta.6-ia32.exe)

[PicGo-Setup-2.4.0-beta.6-x64.exe](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-Setup-2.4.0-beta.6-x64.exe)

[PicGo-Setup-2.4.0-beta.6.exe](https://picgo-release.molunerfinn.com/2.4.0-beta.6/PicGo-Setup-2.4.0-beta.6.exe)

[picgo\_2.4.0-beta.6\_amd64.snap](https://picgo-release.molunerfinn.com/2.4.0-beta.6/picgo_2.4.0-beta.6_amd64.snap)

[![PicGo安装包列表](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141544560.png "PicGo安装包列表")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141544560.png?size=large)

### 2.1 配置 github 图床

仓库名的格式是用户名/仓库，一般选择 main 分支。token 是 [1.2](https://www.haoyep.com/posts/github-graph-beds/#2-github-%e8%8e%b7%e5%8f%96%e4%b8%aa%e4%ba%ba-token) 中获取的。

* 存储路径：可以选择让上传的图片单独放在仓库的某个文件夹中
* 自定义域名：下一篇文章 CDN 加速图床使用，这里先不用填[![github 图床设置](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141548347.png "github 图床设置")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141548347.png?size=large)

### 2.2 PicGo 设置

如果之后自动粘贴图片上传失败，可以尝试把`内置剪贴板上传`功能**关闭**或**开启**。 ![https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141553080.png](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141553080.png "https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141553080.png")

## 3 Obsidian

Obsidian [官网下载链接](https://obsidian.md/download)

### 3.1 安装插件

设置——第三方插件——关闭安全模式——社区插件市场

[![准备安装插件](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141604322.png "准备安装插件")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141604322.png?size=large)

搜索 `image auto upload plugin` 插件并安装

[![安装image auto upload plugin插件](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141605566.png "安装image auto upload plugin插件")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141605566.png?size=large)

### 3.2 配置插件

* 开启剪贴板自动上传
* 接口一一对应（一般默认就是对应好的，不用改）[![配置插件](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141610850.png "配置插件")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312141610850.png?size=large)

### 3.3 使用效果

复制完图片后，在obsidian中使用`Ctrl+V`快捷键自动上传图片，并生成Markdown图片链接。

[![使用效果](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202403182335967.gif "使用效果")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202403182335967.gif?size=large)

## 4 参考文章

[  ](https://segmentfault.com/a/1190000041076406 "一劳永逸，使用 PicGo + GitHub 搭建个人图床工具")
