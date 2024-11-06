---
abbrlink: ''
ai: Github Pages 博客网站访问速度优化  但由于众所周知的原因，此方法搭建的博客在国内访问速度不佳。因此考虑采用一些方法来加速访问，主要思路是使用
  CDN 加速网站的静态资源。 对于不同的静态资源，加速方法分别如下：  使用自定义域名，见个人 Github 博客设置自定义域名； js/css文件  ​使用jsdelivr
  和 unpkg 进行 CDN...
categories:
- - Github
- - Pages
cover: https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171452357.png
date: '2024-11-06T14:11:56.425679+08:00'
tags:
- 优选
- Github Pages
title: Github Pages 博客网站访问速度优化
updated: '2024-11-06T14:18:18.135+08:00'
---
# Github Pages 博客网站访问速度优化

![https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171452357.png](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401171452357.png "个人博客访问速度优化记录。使用自定义域名、分流CDN等方法实现加快加载速度。")


但由于众所周知的原因，此方法搭建的博客在国内访问速度不佳。因此考虑采用一些方法来加速访问，主要思路是使用 CDN 加速网站的静态资源。

对于不同的静态资源，加速方法分别如下：

1. 使用自定义域名，见[个人 Github 博客设置自定义域名](https://www.haoyep.com/posts/windows-hugo-blog-github/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%9A%E5%AE%A2%E5%9F%9F%E5%90%8D)；
2. `js/css`文件
   * ​~~使用`jsdelivr` 和 `unpkg` 进行 CDN 加速~~​，亲测使用自定义域名后，这两个 CDN 反而会降速。因此不需要单独对`js/css`文件加速。
3. 托管在 Github 仓库上的[图床图片](https://www.haoyep.com/posts/optimize-github-pages-blog-access-speed/#%e5%9b%be%e7%89%87%e5%8a%a0%e9%80%9f)。
   * 本人博客上的图片都是使用 PicGo 上传到图床，图床是用 GitHub 仓库搭建的，[图床搭建可以实现粘贴图片自动上传到 GitHub 的公有仓库 | TCIP的窝窝](https://vercel.blog.tcip.top/2024/11/06/%E5%9B%BE%E5%BA%8A%E6%90%AD%E5%BB%BA%E5%8F%AF%E4%BB%A5%E5%AE%9E%E7%8E%B0%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87%E8%87%AA%E5%8A%A8%E4%B8%8A%E4%BC%A0%E5%88%B0%20GitHub%20%E7%9A%84%E5%85%AC%E6%9C%89%E4%BB%93%E5%BA%93/)为了加快 GitHub 文件访问速度，参考[通过 Cloudflare 和 jsDelivr 免费加速博客 GitHub 图床等静态资源](https://www.haoyep.com/posts/github-graph-beds-cdn/)，通过自定义域名区分国内外请求，分配不同的 CDN 资源。最后，替换博客内所有 Github 文件链接即可。[![替换 Github 文件链接](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152140943.png "替换 Github 文件链接")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152140943.png?size=large)
4. [加速谷歌字体](https://www.haoyep.com/posts/optimize-github-pages-blog-access-speed/#%e5%8a%a0%e9%80%9f%e8%b0%b7%e6%ad%8c%e5%ad%97%e4%bd%93)
5. [加速 avatar 头像](https://www.haoyep.com/posts/optimize-github-pages-blog-access-speed/#%e5%8a%a0%e9%80%9f-avatar-%e5%a4%b4%e5%83%8f)

## 1 图片加速

首先参考这篇文章，搭建加速域名。[通过 Cloudflare 和 JsDelivr 免费加速博客 GitHub 图床等静态资源 | TCIP的窝窝](https://vercel.blog.tcip.top/2024/11/06/%E9%80%9A%E8%BF%87%20Cloudflare%20%E5%92%8C%20JsDelivr%20%E5%85%8D%E8%B4%B9%E5%8A%A0%E9%80%9F%E5%8D%9A%E5%AE%A2%20GitHub%20%E5%9B%BE%E5%BA%8A%E7%AD%89%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90/)通过 Cloudflare 和 jsDelivr 免费加速博客 GitHub 图床等静态资源")

对于要使用的图片，使用 PicGo 上传到 GitHub 图床，获取 CDN 加速链接。然后在配置文件中使用相应的链接即可。下面介绍几个配置中常见的图片。

### 1.1 网站图片

| `1``2` | `# 网站图片，用于 Open Graph 和 Twitter Cards``  images = ["https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/weblogo.png"]` |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |

[![网站图片，用于 Open Graph 和 Twitter Cards](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161421814.png "网站图片，用于 Open Graph 和 Twitter Cards")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161421814.png?size=large)

### 1.2 网站图标

配置：`[params]`——`[params.app]`。

| `1``2``3``4``5``6``7``8` | `# 应用图标配置``  [params.app]``    # 当添加到 iOS 主屏幕或者 Android 启动器时的标题，覆盖默认标题``    title = "Leehow"``    # 是否隐藏网站图标资源链接``    noFavicon = false``    # 更现代的 SVG 网站图标，可替代旧的 .png 和 .ico 文件``    svgFavicon = "https://cdn.haoyep.com/gh/leegical/Blog_img/favicon.svg"` |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![网站图标](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161426248.png "网站图标")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161426248.png?size=large)

### 1.3 网站 logo

配置：`[params]`——`[params.header]`——`[params.header.title]`。

| `1``2``3``4` | `#  页面头部导航栏标题配置``    [params.header.title]``      # LOGO 的 URL``      logo = "https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/weblogo.png"` |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![网站 logo](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161428936.png "网站 logo")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161428936.png?size=large)

### 1.4 主页头像

配置：`[params]`——`[params.home]`——`[params.home.profile]`。

| `1``2``3``4``5``6``7` | `# 主页个人信息``    [params.home.profile]``      enable = true``      # Gravatar 邮箱，用于优先在主页显示的头像``      gravatarEmail = ""``      # 主页显示头像的 URL``      avatarURL = "https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/avatar.png"` |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

[![主页头像](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161433480.png "主页头像")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312161433480.png?size=large)

## 2 加速谷歌字体

[**FixIt** 主题](https://github.com/hugo-fixit/FixIt)默认使用系统字体作为博客渲染字体，免去了加载字体。

[![Fixit主题全局字体](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152148953.png "Fixit主题全局字体")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152148953.png?size=large)

但是想要为一些特定区域，如 `code` 设置特别字体时，就需要用到谷歌字体。这里选择使用 `fonts.loli.net` 加速。在 `assets/css` 中新建 `_override.scss` 文件，内容如下：

| `1``2` | `@import url('https://fonts.loli.net/css?family=JetBrains+Mono:400,700&display=swap&subset=latin-ext');``$code-font-family: JetBrains Mono, Fira Mono, Source Code Pro, Menlo, Consolas, Monaco, monospace;` |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![加速code的谷歌字体](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152151358.png "加速code的谷歌字体")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152151358.png?size=large)

## 3 加速 avatar 头像

在 `hugo.toml` 设置 Gravatar 主机为七牛云地址 `dn-qiniu-avatar.qbox.me`：

| `1``2``3``4``5``6``7` | `  # FixIt 0.2.14 \| NEW Gravatar 设置``  [params.gravatar]``    #  取决于作者邮箱，作者邮箱未设置则使用本地头像``    enable = true``    # Gravatar 主机，默认：“www.gravatar.com”``    host = "dn-qiniu-avatar.qbox.me" # ["cn.gravatar.com", "gravatar.loli.net", ...]``    style = "identicon" # ["", "mp", "identicon", "monsterid", "wavatar", "retro", "blank", "robohash"]` |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![设置 Gravatar 主机为七牛云地址](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152153926.png "设置 Gravatar 主机为七牛云地址")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202312152153926.png?size=large)

