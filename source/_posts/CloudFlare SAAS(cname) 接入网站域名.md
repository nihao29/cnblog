---
abbrlink: ''
categories:
- - CloudFlare
- - SAAS
cover: https://www.baota.me/usr/uploads/2024/03/191983650.png
date: '2024-11-05T20:36:57.609024+08:00'
excerpt: CloudFlare SAAS(cname) 接入网站域名 CloudFlare SAAS，简单来说是为了给自助建站类似的网站，而提供的用户自定义域名接入的功能。 比如您做一个系统，可以给用户开通分站等功能，您希望通过api的方式将您的用户自己的域名解析到CloudFlare当中，而不是直接解析到源站。 考虑到本文章是为了让大家使用自选IP,因此在思路上将不会以上述分站的逻辑来解释说明。 准备事项...
tags:
- CloudFlare
- cname
- 域名
title: CloudFlare SAAS(cname) 接入网站域名
updated: '2024-11-05T20:41:54.754+08:00'
---
# CloudFlare SAAS(cname) 接入网站域名

CloudFlare SAAS，简单来说是为了给自助建站类似的网站，而提供的用户自定义域名接入的功能。
比如您做一个系统，可以给用户开通分站等功能，您希望通过api的方式将您的用户自己的域名解析到CloudFlare当中，而不是直接解析到源站。
考虑到本文章是为了让大家使用自选IP,因此在思路上将不会以上述分站的逻辑来解释说明。

##### 准备事项

CloudFlare账户

![cfsaas.png](https://www.baota.me/usr/uploads/2024/03/1702653114.png "cfsaas.png")

描述

注册不难就不说了。不过需要贝宝以及海外银行卡认证来开通CloudFlare SAAS（自定义主机名）功能。

网站域名

描述

用于建站并使用自选IP的域名，并且该域名的DNS解析服务器不能使用CloudFlare，因为严格来讲CloudFlare是支持DNS解析的CDN服务，您使用该DNS解析会造成CDN配置冲突。
请注意如果你使用www或者@主机名做站，您应该理解为这是两个网站域名，如www.youname.com、youname.com。
文章示例中会使用web.baota.me，域名在华为云解析。

回源域名

描述

该域名NS将被CloudFlare接管，因此无法用于自选IP等用途。
如果您要接入的网站域名较多，请尽可能的选择长久使用的域名，而不是年抛域名。
不然年抛域名到期后需要耗费很多时间用来迁移域名。
可以使用 6位数字.xyz，价格便宜可以续费10年。
需要注意不是所有二级域名都支持ns接入到CloudFlare的。可以在下面文章中查看并获取其他后缀的域名。
[CloudFlare可NS方式接入的免费、低价域名](https://www.baota.me/post-410.html)
本文章将使用在dash.gacjie.cn注册的baota.free.hr域名。（目前该项目已经停止注册free.hr域名，请勿注册账号。）

##### 回源域名NS接入到CloudFlare

**如果您的回源域名已经NS添加到CloudFlare，此步可以跳过。**

1.将回源域名(baota.free.hr)添加到CloudFlare,应该不难就不一步一步的写了。

2.复制ns服务器信息

![getns.png](https://www.baota.me/usr/uploads/2024/03/1102210375.png "getns.png")

3.1.将CF提供的ns服务器信息更新到域名那边

![upnsinfo.png](https://www.baota.me/usr/uploads/2024/03/191983650.png "upnsinfo.png")

3.2.如果你没有域名也可以直接注册

描述

该域名NS将被CloudFlare接管，因此无法用于自选IP等用途。
[CloudFlare可NS方式接入的免费、低价域名](https://www.baota.me/post-410.html)

##### 网站域名的顶级域名解析到非CF的DNS域名解析系统

这里就不详细说明了，更换ns服务器跟回源域名NS接入到CloudFlare差不多。

##### 回源域名创建回退源地址

![source.png](https://www.baota.me/usr/uploads/2024/03/2844064453.png "source.png")

描述

source可以是@也可以是任意的子域名前缀，但我比较建议使用子域名创建。
111.111.111.111是你的网站源服务器，您可以改为您的源站IP地址。
代理状态(小云朵),请务必开启，如果关闭您后续添加在自定义主机名里面的网站域名将全部回源。

##### 自定义主机名添加回退源地址

![addsource.png](https://www.baota.me/usr/uploads/2024/03/1521704290.png "addsource.png")

描述

source.baota.free.hr是上一步创建的回退源地址，请改为您创建的域名。

##### 自定义主机名添加网站域名

1.确保回退源已经生效，然后点击右上角的添加自定义主机名。

![addsite.png](https://www.baota.me/usr/uploads/2024/03/1120721735.png "addsite.png")

2.填写您的网站域名，这里的web.baota.me是示例域名，您可能要添加www.youname.com、youname.com或者其他的二级域名。

![addsite2.png](https://www.baota.me/usr/uploads/2024/03/3025004807.png "addsite2.png")

3.复制自定义主机名的 DCV 委派提供的信息用来下一步的域名验证。

![addsite3.png](https://www.baota.me/usr/uploads/2024/03/2037506274.png "addsite3.png")

4.到您的网站域名NS解析服务商，添加DCV 委派验证记录。

![adddnsr.png](https://www.baota.me/usr/uploads/2024/03/2909431396.png "adddnsr.png")

描述

演示截图配置的网站为web.baota.me。
主机名为\_acme-challenge.web值为web.baota.me.9cf4d41f99889e0c.dcv.cloudflare.com
如果配置的网站为baota.me。
主机名为\_acme-challenge值为baota.me.9cf4d41f99889e0c.dcv.cloudflare.com
如果配置的网站为www.baota.me。
主机名为\_acme-challenge.www值为www.baota.me.9cf4d41f99889e0c.dcv.cloudflare.com
上述仅用于演示，请自行替换为自己的dcv信息。

5.添加网站域名的解析记录指向回退源

![addsourcename.png](https://www.baota.me/usr/uploads/2024/03/3767576559.png "addsourcename.png")

6.使用ITDOG访问一次网站域名

![itdog-web.png](https://www.baota.me/usr/uploads/2024/03/2249217061.png "itdog-web.png")

描述

主机名一共有两种验证方式
预验证：即txt或者http验证方式，但需要等待一段时间的Cloudflare官方扫描。
实时验证：即将主机名正确的cname到回退源地址。
本教程使用实时验证方式。为了加快验证，因此用测速工具来完成正常解析请求。

7.正常情况下，刷新一下CloudFlare自定义主机名页面，应该已经完成验证了，如果没有可能要等待一段时间，或者需要检查上述配置是否出错。

![web.baota.me.png](https://www.baota.me/usr/uploads/2024/03/2241544505.png "web.baota.me.png")

8.补一张图用于解析配置检查

![sitenss.png](https://www.baota.me/usr/uploads/2024/03/3414879881.png "sitenss.png")

描述

解析配置检查图片里面主机名带baota.me是华为云解析系统自动添加的，使用其他解析的时候需要注意。
