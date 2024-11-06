---
abbrlink: ''
ai: 通过Cloudflare Tunnel访问内网端口  通过Cloudflare Tunnel内网穿透，访问内网主机端口。 1 Tunnel 可以做什么  将本地网络的服务暴露到公网，可以理解为内网穿透。
  例如我们在本地服务器 192.168.1.1:3000 搭建了一个 Transmission 服务用于 BT 下载，我们只能在内网环境才能访问这个服务，但通...
categories:
- - 内网端口
cover: https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141503511.png
date: '2024-11-06T14:01:44.333619+08:00'
tags:
- 内网端口
- Cloudflare
title: 通过Cloudflare Tunnel访问内网端口
updated: '2024-11-06T14:03:35.673+08:00'
---
# 通过Cloudflare Tunnel访问内网端口


![https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141503511.png](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141503511.png "通过Cloudflare tunnel内网穿透，访问内网端口")

通过Cloudflare Tunnel内网穿透，访问内网主机端口。

## 1 Tunnel 可以做什么

* **将本地网络的服务暴露到公网，可以理解为内网穿透。** 例如我们在本地服务器 `192.168.1.1:3000` 搭建了一个 Transmission 服务用于 BT 下载，我们只能在内网环境才能访问这个服务，但通过内网穿透技术，我们可以在任何广域网环境下访问该服务。相比 NPS 之类传统穿透服务，Tunnel 不需要公网云服务器，同时自带域名解析，无需 DDNS 和公网 IP。
* **将非常规端口服务转发到 80/443 常规端口。** 无论是使用公网 IP + DDNS 还是传统内网穿透服务，都免不了使用非常规端口进行访问，如果某些服务使用了复杂的重定向可能会导致 URL 中端口号丢失而引起不可控的问题，同时也不够优雅。
* **自动为你的域名提供 HTTPS 认证。**
* **为你的服务提供额外保护认证。**
* **最重要的是——免费。**

## 2 Tunnel 工作原理

Tunnel 通过在本地网络运行的一个 Cloudflare 守护程序，与 Cloudflare 云端通信，将云端请求数据转发到本地网络的 IP + 端口。

## 3 前置条件

* 持有一个域名
* 将域名 DNS 解析托管到 CF
* 内网有一台本地服务器，用于运行本地与 cloudflare 通信的 cloudflared 程序
* 一张境内双币信用卡（仅用于添加付款方式，服务是免费的）

## 4 开始

### 4.1 创建 **Cloudflare Zero Trust**

1. 打开 [Cloudflare Zero Trust](https://one.dash.cloudflare.com/) 工作台面板。
2. 创建 **Cloudflare Zero Trust** ，选择免费计划。需要提供付款方式，使用境内的双币卡即可。

[![随意填写一个team name](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355958.png "随意填写一个team name")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355958.png?size=large)

[![选择Free计划](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355959.png "选择Free计划")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355959.png?size=large)

[![添加付款方式](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355960.png "添加付款方式")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355960.png?size=large)

[![填写信用卡信息（仅验证，不会扣款），完成配置](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355961.png "填写信用卡信息（仅验证，不会扣款），完成配置")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122355961.png?size=large)

### 4.2 创建 Tunnel

点击 Access——Tunnels，创建一个 Tunnel。

[![创建一个 Tunnel](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122351924.png "创建一个 Tunnel")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401122351924.png?size=large)

为创建的 tunnel 取一个名字。

[![为tunnel取一个名字](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130000169.png "为tunnel取一个名字")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130000169.png?size=large)

### 4.3 部署 Tunnel

Tunnel 部署方式，这里推荐选择 docker。

[![获取 Cloudflared docker部署命令及 Token](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130002128.png "获取 Cloudflared docker部署命令及 Token")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130002128.png?size=large)

将图中的 token 替换到下面的命令中，然后执行，启动 docker。


| `1`<br/> | `docker run --name cf-tunnel -d --restart always cloudflare/cloudflared:latest tunnel --no-autoupdate run --token <YourToken>` |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |

### 4.4 配置域名和转发 URL

* 子域名（Subdomain）：自定义一个。Path 留空。
* Type：`SSH`。URL ：`localhost:22`。

提示

如果需要转发其他协议和端口，你可以选择相应的 Type 和 URL。

[![配置域名](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130019856.png "配置域名")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202401130019856.png?size=large)

## 5 完成

接着访问刚刚配置的三级域名，例如`https://app.yourdomain.com`（是的，你没看错，是 https，cloudflare 已经自动为域名提供了 https 证书）就可以访问到内网的非公端口号服务了。一个 Tunnel 中可以添加多条三级域名来跳转到不同的内网服务，在 Tunnel 页面的 Public Hostname 中新增即可。

## 6 为你的服务添加额外验证

如果你觉得这种直接暴露内网服务的方式有较高的安全风险，我们还可以使用 Application 功能为服务添加额外的安全验证。

1. 点击 Application - Get started。

[![Application](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141511385.png "Application")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141511385.png?size=large)

创建 Application

2. 选择 Self-hosted。

[![选择 Self-hosted](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141512523.png "选择 Self-hosted")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141512523.png?size=large)

选择类型

3. 填写配置，**注意 Subdomain 和 Domain 需要使用刚刚创建的 Tunnel 服务相同的 Domain 配置**。

[![配置三级域名](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141513455.png "配置三级域名")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141513455.png?size=large)

配置三级域名

4. 选择验证方式。填写 Policy name（任意）。在 Include 区域选择验证方式，示例图片中使用的是 Email 域名的方式，用户在访问该网络时需要使用指定的邮箱域名（如@gmail.com）验证，这种方式比较适合自定义域名的企业邮箱用户。另外你还可以指定特定完整邮箱地址、IP 地址范围等方式。

[![选择验证方式](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141513592.png "选择验证方式")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141513592.png?size=large)

选择验证方式

5. 完成添加

[![完成添加](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141514826.png "完成添加")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141514826.png?size=large)

此时，访问 [https://app.yourdomain.com](https://app.yourdomain.com/) 可以看到网站多了一个验证页面，使用刚刚设置的域名邮箱，接收验证码来访问。

[![验证页面](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141514928.png "验证页面")](https://cdn.haoyep.com/gh/leegical/Blog_img/cdnimg/202405141514928.png?size=large)

## 7 评价

除了上述直接转发 http 服务之外，Tunnel 还支持 RDP、SSH 等协议的转发，玩法丰富，有待各位探索。作为一款免费的服务，简单的配置，低门槛使用条件，适合各位 Self-hosted 玩家尝试。不过要注意的是 Tunnel 在国内访问速度不快，并且有断流的情况，请酌情使用。
