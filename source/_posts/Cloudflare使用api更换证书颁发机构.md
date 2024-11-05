---
abbrlink: ''
categories:
- - 证书
cover: https://tc.tcip.top/file/1730812351019_image.png
date: '2024-11-05T21:10:57.047350+08:00'
excerpt: 联通宽带对部署了GTS证书网站的IP阶段性阻断 简单介绍 在折腾联通宽带下的虚拟机时，需要换源，在执...
tags:
- 域名
title: Cloudflare使用api更换证书颁发机构
updated: '2024-11-05T21:14:51.643+08:00'
---
# 联通宽带对部署了GTS证书网站的IP阶段性阻断



#### 简单介绍

在折腾联通宽带下的虚拟机时，需要换源，在执行之前写的脚本的时候，发现阶段性无法链接，因此做了一些测试。

#### 测试地区线路

北京联通、重庆联通、江苏南京联通、山东枣庄联通、浙江宁波电信、山东潍坊移动

#### 网站影响

找了几个联通的用户测了一下
浏览器正常访问是不影响的
触发条件应该是非浏览器访问 + Cloudflare + GTS
但我在curl上面指定UA，依然阻断，具体怎么识别浏览器的还不清楚。
也就是会影响阻断命令行下载、api接口之类的请求。
不适合脚本站或者需要对接客户端提供API服务。

#### 阻断情况

我执行了以下命令进行测试

```shell-session
curl --insecure --resolve "www.baota.me:443:172.67.69.150" "https://www.baota.me" -o "www.baota.me.txt" --max-time 10
```

测试发现所有联通都会阻断
第一次 执行上述命令 正常访问
第二次 执行上述命令 无法访问

#### 阻断规律

为了搞清楚阻断频率因此我在江苏南京联通做了个每3分钟访问一次的计划任务
连续阻断情况为1-3次 即有时候会阻断3-9分钟
阻断过后会有15分钟左右的正常访问时间
然后进入下次阻断周期
目前测试阻断全部CloudFlare的IP，包括一些跟CF合作的IP。

#### 阻断原因

原以为是阻断了CF的IP或者ASN，经过loc论坛回复得知可能是因为证书品牌的缘故。
因此单独使用一个NS接入的域名进行测试.
测试结果
使用GTS证书
还是跟上面一样访问一次就阻断了。
然后使用API进行更换证书为let's证书
连续测试多次并且更换其他IP都没有阻断的情况

#### 证书版本测试

群里有老哥说可能是因为tls1.3+ech导致的无差别阻断。
然后我改进了一下命令 指定tls最大版本1.2进行测试

```shell-session
curl --insecure --resolve "www.baota.me:443:172.67.69.150" "https://www.baota.me" -o "www.baota.me.txt" --max-time 10 --tls-max 1.2
```

测试阻断依旧

#### 解决办法

Cloudflare NS方式接入，可以[使用api更换证书颁发机构][Cloudflare使用api更换证书颁发机构 | TCIP的窝窝](https://vercel.blog.tcip.top/2024/11/05/Cloudflare%E4%BD%BF%E7%94%A8api%E6%9B%B4%E6%8D%A2%E8%AF%81%E4%B9%A6%E9%A2%81%E5%8F%91%E6%9C%BA%E6%9E%84/))。
Cloudflare SAAS方式接入的无解，API提示需要Enterprise套餐。
也可以使用其他CDN来服务联通线路的用户。

# 解决方案如下：

移动联通电信阻断Cloudflare使用api更换证书颁发机构

#### 简单介绍

由于发现联通会阻断GTS证书之后，为了解决阻断问题，查看Cloudflare API文档寻找，更换证书颁发机构的方法。但很可惜，只有通用证书可以更换，SAAS主机名的证书,API返回提示要Enterprise套餐才有权限更换。考虑有NS接入的，因此我把通用证书的更换方法写在了这里。

![https://tc.tcip.top/file/1730812351019_image.png](https://tc.tcip.top/file/1730812351019_image.png)

#### 一键脚本

```shell-session
#!/bin/bash
# +-------------------------------------------------------------------
# | Cloudflare使用api更换证书颁发机构脚本
# +-------------------------------------------------------------------
# | https://www.baota.me/post-453.html
# +-------------------------------------------------------------------

# 区域ID
ZONEID=''
# 邮箱账号
EMAIL=''
# Global API Key 密钥
APIKEY=''
# 证书颁发机构标识  
CERTCODE='lets_encrypt'

curl -X PATCH "https://api.cloudflare.com/client/v4/zones/${ZONEID}/ssl/universal/settings" \
     -H "X-Auth-Email: ${EMAIL}" \
     -H "X-Auth-Key: ${APIKEY}" \
     -H "Content-Type: application/json" \
     --data "{\"enabled\":true,\"certificate_authority\":\"${CERTCODE}\"}"
```

#### 区域ID获取

选择一个域后，在右侧有个区域ID。

#### Global API Key 获取

访问
[https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
在API 密钥栏内查看Global API Key

#### 证书颁发机构标识

Let's Encrypt 标识为 lets\_encrypt
Google Trust Services 标识为 google
DigiCert 标识为 digicert 该证书根证书已经过期失效
SSLCOM 标识为 ssl\_com 该证书测试中暂不支持
Sectigo 标识为 sectigo 该证书仅用于备份不支持切换
