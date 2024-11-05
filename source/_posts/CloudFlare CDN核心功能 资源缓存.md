---
abbrlink: ''
categories:
- - CDN
- - 资源缓冲
cover: https://www.baota.me/usr/uploads/2024/03/1989952620.png
date: '2024-11-05T20:59:46.214156+08:00'
excerpt: CloudFlare CDN核心功能 资源缓存 简单介绍 资源缓存功能是CDN核心功能，也是加速的关...
tags:
- CloudFlare
- CDN
- 缓冲
- 加速
title: CloudFlare CDN核心功能 资源缓存
updated: '2024-11-05T22:36:15.412+08:00'
---
# CloudFlare CDN核心功能 资源缓存

#### 简单介绍

资源缓存功能是CDN核心功能，也是加速的关键。
网上经常说CDN可以网站加速、节约带宽等优点，大部分都是建立在缓存上面。
但由于每个网站的情况不同，并不是所有网站都适合缓存，因此缓存规则仅供参考，还需要自行修改编写属于自己网站的缓存规则。

#### 功能详解

**我们在不使用CDN时，网络链路应该是这样的。**
用户浏览器 --链接-- 源站服务器 --返回-- 用户浏览器
**使用CDN不缓存时的网络链路**
用户浏览器 --链接-- CDN边缘节点 --链接-- 源站服务器 --返回-- CDN边缘节点 --返回-- 用户浏览器
所以CDN不缓存时，网站是否加速取决于您的源站线路有多差劲。
**使用CDN缓存时的网络链路**
第一次访问：用户浏览器 --链接-- CDN边缘节点 --链接-- 源站服务器 --返回-- CDN边缘节点（此时会缓存资源到节点） --返回-- 用户浏览器
第二次访问：用户浏览器 --链接-- CDN边缘节点（输出缓存） --返回-- 用户浏览器
可以看到缓存后因为不必回源，因此用户请求CDN节点后，直接返回了网页，这样减少了回源的这段时间。

#### 默认缓存

CloudFlare默认会缓存2小时以下资源，因此这些资源并不需要手动配置缓存。
.7z .csv .GIF .MIDI .PNG .TIF .ZIP
.AVI .DOC .GZ .MKV .PPT .TIFF .ZST
.AVIF .DOCX .ICO .MP3 .PPTX .TTF
.APK .DMG .ISO .MP4 .PS .WEBM
.BIN .EJS .JAR .OGG .RAR .WEBP
.BMP .EOT .JPG .OTF .SVG .WOFF
.BZ2 .EPS .JPEG .PDF .SVGZ .WOFF2
.CLASS .EXE .JS .PICT .SWF .XLS
.CSS .FLAC .MID .PLS .TAR.XLSX

#### 缓存首页以及html页面

![cache_home_html.png](https://www.baota.me/usr/uploads/2024/03/1776383670.png "cache_home_html.png")

#### 指定域名全站缓存(适合下载站图片站)

![cache_site.png](https://www.baota.me/usr/uploads/2024/03/2417704019.png "cache_site.png")

#### 设置缓存时间

建议：
浏览器TTL不要设置太长时间，否则网站更新后浏览器缓存更新不及时会带来很多问题。
边缘TTL可随意设置，如果设置的时间比较长，别忘记到cf控制台清理缓存。
![cache_ttl.png](https://www.baota.me/usr/uploads/2024/03/3077350668.png "cache_ttl.png")

#### 检查资源是否命中缓存

可以访问指定页面-右键-审核元素，打开调试控制台。HIT状态为缓存命中，如果是其他的可自行翻译。
![cf-cache-status.png](https://www.baota.me/usr/uploads/2024/03/1989952620.png "cf-cache-status.png")

0
