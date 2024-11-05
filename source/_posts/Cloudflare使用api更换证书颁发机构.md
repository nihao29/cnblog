---
abbrlink: ''
categories:
- - 证书
cover: https://tc.tcip.top/file/1730812351019_image.png
date: '2024-11-05T21:10:57.047350+08:00'
excerpt: 移动联通电信阻断Cloudflare使用api更换证书颁发机构 简单介绍 由于发现联通会阻断GTS证...
tags:
- 域名
title: Cloudflare使用api更换证书颁发机构
updated: '2024-11-05T21:12:50.149+08:00'
---
# 移动联通电信阻断Cloudflare使用api更换证书颁发机构


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
