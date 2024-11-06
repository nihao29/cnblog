---
abbrlink: ''
ai: 利用 Cloudflare Pages 和 BPB 面板搭建免费VPN订阅节点  无需域名，无需 SSL，通过 Cloudflare 和 BPB Panel，搭建一个永久免费且高速的免费
  VPN。结合 Cloudflare 实现优选订阅、永久免费 vless 节点订阅，为使用（singbox-core 和 xray-core）的跨平台客户端提供配置。
  1 G...
categories:
- - 节点
- - Cloudflare Pages
cover: https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290144107.png
date: '2024-11-06T13:36:46.985573+08:00'
tags:
- BPB
- 面板
- Cloudflare Pages
title: 利用 Cloudflare Pages 和 BPB 面板搭建免费VPN订阅节点
updated: '2024-11-06T13:38:17.793+08:00'
---
# 利用 Cloudflare Pages 和 BPB 面板搭建免费VPN订阅节点

![https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290144107.png](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290144107.png "无需域名，无需 SSL，通过 Cloudflare 和 BPB Panel，搭建一个永久免费且高速的免费 VPN。结合 Cloudflare 实现优选订阅永久免费节点订阅，为使用（singbox-core 和 xray-core）的跨平台客户端提供配置。")

无需域名，无需 SSL，通过 Cloudflare 和 BPB Panel，搭建一个永久免费且高速的免费 VPN。结合 Cloudflare 实现优选订阅、永久免费 vless 节点订阅，为使用（singbox-core 和 xray-core）的跨平台客户端提供配置。

## 1 GitHub

登录 GitHub，fork [BPB 面板](https://github.com/bia-pain-bache/BPB-Worker-Panel)到自己仓库中。可以更改仓库名。

[![fork仓库](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408210057058.png "fork仓库")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408210057058.png?size=large)

## 2 Cloudflare

登录 [Cloudflare](https://dash.cloudflare.com/)

### 2.1 创建 KV

点击左侧栏 **Workers 和 Pages** -> 【KV】，点击​**创建命名空间**​。 随便起个名字，点击添加。

[![创建 KV](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282353466.png "创建 KV")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282353466.png?size=large)

注意

如果创建失败，或者遇到进不去页面等问题，可以尝试先进行下一步[创建 Pages](https://www.haoyep.com/posts/cf-bpb-vpn/#%e5%88%9b%e5%bb%ba-pages)再回来创建 KV。

### 2.2 创建 Pages

1. 点击左侧栏 **Workers 和 Pages** -> 【概述】，点击**创建**
   [![创建 Pages](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282337942.png "创建 Pages")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282337942.png?size=large)
2. 选择 【Pages】 -> 【连接到 Git】
   [![连接到 Git](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282356132.png "连接到 Git")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408282356132.png?size=large)
3. 安装 Cloudflare 插件 登录 fork 了 BPB 面板仓库的 GitHub 账号。 安装 Cloudflare 插件，可以选择为全部仓库安装，也可以选择指定 BPB 面板仓库。
   [![安装 Cloudflare 插件](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290003015.png "安装 Cloudflare 插件")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290003015.png?size=large)
4. 创建 Pages 项目 插件安装完成后，自动跳转回 Pages 创建页面。选择 BPB 面板仓库，点击开始设置。
   [![开始设置](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290005720.png "开始设置")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290005720.png?size=large)

项目名称随便写。点击环境变量，分别设置 **UUID** 和 ​**PROXYIP**​。点击部署。

* ​**UUID**​：直接安装的 BPB 面板默认使用同一个 UUID [89b3cbba-e6ac-485a-9481-976a0415eab9]，可能存在安全隐患。可以去 [在线生成 UUID 1](https://1024tools.com/uuid) | [在线生成 UUID 2](https://www.lddgo.net/string/uuid) 等网站随机生成一个新的 UUID
* ​**PROXYIP**​：去这里[随机选择一个代理 IP](https://www.nslookup.io/domains/cdn.xn--b6gac.eu.org/dns-records/)，或者你也可以直接把代理 IP 设置为 `cdn-b100.xn--b6gac.eu.org`

[![设置环境变量并部署](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290013515.png "设置环境变量并部署")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290013515.png?size=large)

稍等片刻，部署成功！

[![部署成功](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290035625.png "部署成功")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290035625.png?size=large)

### 2.3 绑定 KV

部署完成后，点击继续处理项目。或者返回到概述中，选择部署的项目，点击访问站点，访问项目页面。 点击**设置** -> ​**函数**​，在函数页面中，找到 KV 命名空间绑定，点击​**添加绑定**​。

* 变量名称：能且仅能填写 **bpb**
* KV 命名空间：选择[创建 KV](https://www.haoyep.com/posts/cf-bpb-vpn/#%e5%88%9b%e5%bb%ba-kv) 中设置的命名空间[![绑定kv](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290039054.png "绑定kv")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290039054.png?size=large)

### 2.4 重新部署

KV 空间绑定后，在所有部署中 点击三个点——重试部署。

注意

注意：在项目有任何改动后，都需要进行重新部署，否则改动不会生效。

[![重新部署](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290046972.png "重新部署")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290046972.png?size=large)

## 3 BPB 面板

访问项目网址： *https://你的项目地址.pages.dev/panel*

### 3.1 修改密码

第一次访问面板会提示你修改密码，建议修改成一个复杂密码，避免面板被盗用。

[![修改密码](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290050299.png "修改密码")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290050299.png?size=large)

### 3.2 面板配置

使用修改后的密码重新登录面板。

1. 勾选屏蔽广告、绕过伊朗和绕过局域网。Block Porn 是屏蔽一些少儿不宜的网站，可以不勾选。[![绕过](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290053192.png "绕过")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290053192.png?size=large)
2. 点击 [Scan Now](https://scanner.github1.cloud/) 扫描 Clean IP。一般来说，Clean IP 的节点RTT 会更短。[![Scan Now](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290057503.png "Scan Now")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290057503.png?size=large)

注意

为了扫描出与你实际网络通信时间最短的IP，扫描时记得关闭代理。

点击Start Scan，开始扫描。第一次扫描的IP数较少，你可以点击下方提示，扫描更多IP。

[![扫描Clean IP](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290102440.png "扫描Clean IP")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290102440.png?size=large)

将扫描到的Clean IP填到BPB面板配置中。

[![配置Clean IP](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290105211.png "配置Clean IP")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290105211.png?size=large)

3. TLS 端口处勾选你想启用的端口，或者默认使用443端口。[![启用TLS端口](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290056538.png "启用TLS端口")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290056538.png?size=large)

点击 ​**APPLY SETTINGS**​，应用设置。

[![APPLY SETTINGS](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290106273.png "APPLY SETTINGS")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290106273.png?size=large)

### 3.3 导入节点

点击 COPY SUB，复制 BPB 面板生成的订阅链接。

[![复制订阅链接](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290110707.png "复制订阅链接")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290110707.png?size=large)

#### 3.3.1 PC-V2rayN

##### 3.3.1.1 导入

打开 V2rayN，【订阅分组】->【订阅分组设置】->【添加】

* 别名：随机写一个
* 可选地址：输入 BPB 面板导出的订阅链接[![V2rayN导入订阅链接](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290114711.png "V2rayN导入订阅链接")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290114711.png?size=large)

##### 3.3.1.2 更新/获取节点

【订阅分组】->【更新全部订阅(不通过代理)】，获取节点

[![获取节点](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290117981.png "获取节点")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290117981.png?size=large)

#### 3.3.2 安卓-V2rayNG

##### 3.3.2.1 导入

【左上角三条横线】->【订阅分组设置】-> 右上角`+`

[![新建订阅分组](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290125388.png "新建订阅分组")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290125388.png?size=large)

* 备注：随便写一个
* 可选地址：输入 BPB 面板导出的订阅链接[![添加订阅分组](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290127693.png "添加订阅分组")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290127693.png?size=large)

##### 3.3.2.2 更新/获取节点

首页右上角三个点 -> 更新订阅

[![更新订阅](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290131358.png "更新订阅")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290131358.png?size=large)

### 3.4 修改密码

如果你觉得原来设置的密码太简单，也可以重新修改密码。 登录你的 BPB 面板，到页面最底端，点击 **Change Password** 来修改密码

[![修改密码](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290120104.png "修改密码")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202408290120104.png?size=large)

