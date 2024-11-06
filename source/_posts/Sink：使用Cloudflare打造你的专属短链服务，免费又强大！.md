---
abbrlink: ''
ai: Sink：使用Cloudflare打造你的专属短链服务，免费又强大！ 本站要是地址是 Sink - A Simple / Speedy / Secure Link
  Shortener with Analytics, 100% run on Cloudflare.    <p><a href="https://vip.tcip.top...
categories:
- - Sink
- - 短链接
cover: https://imgs.huluohu.com/2024/10/03/17278893391678.jpg
date: '2024-11-06T13:25:29.607375+08:00'
tags:
- Sink
- 短链接
title: Sink：使用Cloudflare打造你的专属短链服务，免费又强大！
updated: '2024-11-06T13:31:59.116+08:00'
---
# Sink：使用Cloudflare打造你的专属短链服务，免费又强大！

本站要是地址是 [Sink - A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.](https://vip.tcip.top/)

<iframe src="https://vip.tcip.top/"
        width="100%" height="300" frameborder="0"
        allowfullscreen sandbox>
  <p><a href="https://vip.tcip.top">点击打开嵌入页面</a></p>
</iframe>

> 嘿，各位网友们！今天我要和大家分享一个超赞的开源项目 —— Sink。如果你一直想要拥有自己的短链接服务，又觉得搭建维护太麻烦，那Sink绝对是为你量身打造的完美解决方案！

## 🌟 什么是Sink？

Sink是一个基于Cloudflare Pages的短链接服务。它的特别之处在于，你可以轻松搭建并完全掌控自己的短链服务，而且无需管理服务器或数据库。只需要一个Cloudflare账号，你就能拥有属于自己的短链王国！

## 🚀 Sink 能做什么？

1. **创建短链接**：Sink 的核心功能是将长 URL 转换为短链接。
2. **自定义短链**：用户可以自定义短链的别名，而不是使用随机生成的字符串。
3. **链接管理**：用户可以查看、编辑和删除自己创建的短链接。
4. **简单的访问统计**：Sink 会记录每个短链接的访问次数。
5. **API 支持**：Sink 提供了 API，允许通过编程方式创建和管理短链接。
6. **浏览器扩展**：Sink现已支持使用浏览器插件管理你的短链。
7. **响应式设计**：Sink 的界面适配各种设备，包括桌面和移动设备。
8. **无需数据库**：Sink 使用 Cloudflare KV 存储数据，无需额外的数据库设置。

## 🛠️ 部署Sink：简单得让你惊讶

别被"部署"这个词吓到，搭建Sink真的超级简单。让我们一步步来：

1. 首先，访问[Sink的GitHub仓库](https://github.com/ccbikai/sink)，并Fork此仓库到自己的Github账号。
   ![Sink](https://imgs.huluohu.com/2024/10/03/17278879309421.jpg)
2. 登录你的Cloudflare账号，在`Workers 和Pages`中创建一个新的Pages项目，连接到你自己的Github仓库。
   ![Sink](https://imgs.huluohu.com/2024/10/03/17278880637304.jpg)
3. 在Pages项目设置中，选择你刚刚创建的仓库，框架预设选择`Nuxt.js`，构建命令为 `npm run build`，输出目录为 `dist`。
   ![Sink](https://imgs.huluohu.com/2024/10/03/17278882935468.jpg)

![Sink](https://imgs.huluohu.com/2024/10/03/17278884399714.jpg)

4. 在后面的`环境变量`中添加添加以下必要的变量，然后点击`保存并部署`
   * `NUXT_SITE_TOKEN`: 管理密码，不少为8个字符
   * `NUXT_CF_ACCOUNT_ID`: Cloudflare账号ID
   * `NUXT_CF_API_TOKEN`: Cloudflare API Token
   * `NUXT_REDIRECT_STATUS_CODE`:重定向状态码，默认是301
   * `NUXT_AI_MODEL`:AI模型，可以直接写Cloudlare AI中的模型
   * `NUXT_HOME_URL`:网站主页地址
   * `NUXT_PUBLIC_SLUG_DEFAULT_LENGTH`:短链ID长度，默认5
     ![Sink](https://imgs.huluohu.com/2024/10/03/17278892084351.jpg)
5. 部署完成后，Cloudflare会自动为你生成一个域名。如果你想使用自己的域名，只需在Cloudflare的DNS设置中添加一个CNAME记录指向Pages提供的域名即可。

![Sink](https://imgs.huluohu.com/2024/10/03/17278893391678.jpg)

就这么简单，你的专属短链服务就搭建完成了！是不是比你想象的要容易得多？

## 🌈 为什么选择Sink？

1. **简单部署**：基于Cloudflare Pages，无需管理服务器和数据库。
2. **完全控制**：自托管意味着你可以完全掌控你的数据和服务。
3. **成本低廉**：利用Cloudflare的免费套餐，你可以几乎零成本运营自己的短链服务。
4. **功能丰富**：短链生成、密码保护、访问统计等功能一应俱全。
5. **开源透明**：代码完全开源，你可以根据需要进行定制和改进。

## 🎉 结语：开启你的短链之旅

Sink不仅仅是一个短链接工具，它更像是你的私人链接管家。有了它，你可以轻松创建、管理和分析你的短链接，让你的在线分享更加高效和专业。

无论你是博主、营销人员，还是普通网友，Sink都能让你的链接分享变得更加轻松愉快。现在，你已经拥有了搭建自己的短链服务所需的所有知识，是时候开始你的Sink之旅了！

> 原创不易，如果觉得此文对你有帮助，不妨点赞+收藏+关注，你的鼓励是我持续创作的动力！

