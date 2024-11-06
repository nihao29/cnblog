---
abbrlink: ''
ai: 在现代软件开发和运维中，自动化工具的使用变得越来越普遍和重要。GitHub Actions 作为一种强大的持续集成和持续部署（CI/CD）工具，极大地简化了开发者的工作流程。在这个项目中，我们将探讨如何利用
  GitHub Actions 创建临时远程桌面协议（RDP）连接，以便进行测试和教育用途。  免责声明： 本项目使用 GitHub Actions 创建...
categories:
- - 生活
- - 开发
cover: https://imgs.huluohu.com/2024/09/30/17277094171937.jpg
date: '2024-07-22T07:58:55.809531+08:00'
tags:
- 图床
title: 利用GitHub Action搭建免费临时远程服务器桌面
updated: '2024-11-06T16:39:21.085+08:00'
---
在现代软件开发和运维中，自动化工具的使用变得越来越普遍和重要。GitHub Actions 作为一种强大的持续集成和持续部署（CI/CD）工具，极大地简化了开发者的工作流程。在这个项目中，我们将探讨如何利用 GitHub Actions 创建临时远程桌面协议（RDP）连接，以便进行测试和教育用途。

> **免责声明**：
>
> 本项目使用 GitHub Actions 创建临时远程桌面协议（RDP）连接。请注意以下事项：
>
> 1. **仅供测试和教育用途**：本项目仅供测试和教育用途，不得用于任何非法或未经授权的活动。用户应确保其行为符合相关法律法规。
> 2. **安全性和隐私**：使用临时 RDP 连接可能存在安全风险。请勿在连接中传输敏感或机密信息。用户应采取必要的安全措施保护其数据和隐私。
> 3. **责任限制**：本项目的开发者不对因使用本项目而导致的任何直接或间接损失、损害或责任承担任何责任。用户应自行承担使用本项目的风险。
> 4. **第三方服务**：本项目可能依赖于第三方服务（如 GitHub 和 Microsoft Azure）。用户应遵守这些服务的使用条款和政策。
> 5. **项目变更**：本项目可能会随时进行更改或更新，恕不另行通知。用户应定期检查项目的更新和变更。
>
> 通过使用本项目，您即表示已阅读并同意上述条款。如有任何疑问，请联系项目维护者。

## 

准备工作

### 

"注册GitHub账户")注册GitHub账户

https://github.com/signup

```
https://www.notion.so/image/https%3A%2F%2Fgithub.githubassets.com%2Fassets%2Fgithub-logo-55c5b9a1fe52.png?table=block&id=f43b6c08-1e58-42c6-8b00-eb62a1edcb78&t=f43b6c08-1e58-42c6-8b00-eb62a1edcb78
```

非常简单，一步一步跟着做即可

### 

注册ngrok")注册ngrok

https://dashboard.ngrok.com/signup

也同样非常简单

## 

fork项目

https://github.com/HowToLearnHacking/uploads/fork

登录账号后fork本项目。

![notion image](https://picningguoxu.080912.xyz/file/eff088a695f6987c93b76.jpg?t=b8d84b2a-a22c-44e0-820c-8b415afe5024)

## 

启动Action

![notion image](https://picningguoxu.080912.xyz/file/237ae6af707d2dded7eac.jpg?t=02d5942d-8a4f-4bf6-8ddb-086a0eb60fbd)

输入以下代码：

### yaml

```yaml
name: CI

on: [push, workflow_dispatch]

jobs:
  build:

    runs-on: windows-latest

    steps:
    - name: Download
      run: Invoke-WebRequest https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip -OutFile ngrok.zip
    - name: Extract
      run: Expand-Archive ngrok.zip
    - name: Auth
      run: .\ngrok\ngrok.exe authtoken $Env:NGROK_AUTH_TOKEN
      env:
        NGROK_AUTH_TOKEN: ${{ secrets.NGROK_AUTH_TOKEN }}
    - name: Enable TS
      run: Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server'-name "fDenyTSConnections" -Value 0
    - run: Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
    - run: Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp' -name "UserAuthentication" -Value 1
    - run: Set-LocalUser -Name "runneradmin" -Password (ConvertTo-SecureString -AsPlainText "P@ssw0rd!" -Force)
    - name: Create Tunnel
      run: .\ngrok\ngrok.exe tcp 3389
```

YAML

Copy

![notion image](https://picningguoxu.080912.xyz/file/7edf29a28cbd9fb0ea6ff.jpg?t=059dc315-b500-411f-9258-c60ed5a365cf)

然后点击保存

## 

配置环境变量

转到“设置”，按图片提示添加环境变量

![notion image](https://picningguoxu.080912.xyz/file/188af6c73df5ff6f95897.jpg?t=23e6f83a-6851-4fbd-adce-82bdc948a07b)

变量名为：`NGROK_AUTH_TOKEN`，先把它填上。

### 

[](https://www.080912.xyz/article/b71400ff-f0b1-4dbe-bf44-6a249b8c075b#7a07a452b66d4f4b9238acf683b37b93 "获取变量值")获取变量值

![notion image](https://picningguoxu.080912.xyz/file/df610844a4de4fe2055aa.jpg?t=25a49e7a-13bc-4242-b467-ffb0fcb55cb4)

登录ngrok，根据图片提示复制值并填入到Github。

![notion image](https://picningguoxu.080912.xyz/file/ddf3f89cea14aacf38026.jpg?t=5e7184a7-1674-40b8-b656-44022a860a1f)

然后重新运行

![notion image](https://picningguoxu.080912.xyz/file/2dc6869eb638cee2af5e2.jpg?t=d873b751-36d5-4827-9ff0-fff61406d123)

到这一步就成功了。

![notion image](https://picningguoxu.080912.xyz/file/72d920a894587f0340e2b.jpg?t=1c9ae4c8-2264-431e-b833-6244e5ab6190)

转到ngrok，点击“EndPoints”会看到一个tcp链接，把`tcp://`删去，就是RDP链接。

## 

连接RDP

![notion image](https://picningguoxu.080912.xyz/file/00b4c098b6829cc266810.jpg?t=d6d296b1-ef3c-47a9-aad5-ec8ab435f236)

账户：**runneradmin**

默认密码：**P@ssw0rd!**

可自行更改密码。

## 

使用体验

![notion image](https://picningguoxu.080912.xyz/file/98ad5b683d0b3f3857979.jpg?t=dbf1ca00-a2be-41ad-b2d4-f9b541362d23)

注意：这个窗口千万不要关闭，否则RDP就没了，建议最小化。

![notion image](https://picningguoxu.080912.xyz/file/93d9265bb0ec63d26ce47.jpg?t=8ccdc15b-132a-4118-82df-848f15414cb1)

配置：2C16GB

网速特别快。

![notion image](https://picningguoxu.080912.xyz/file/8458651744f69051c2251.jpg?t=af9a10fc-a5a4-4c72-b2e7-83691c43b8a0)

## 

总结归纳

本文介绍了如何使用GitHub Action搭建免费临时RDP。主要步骤包括注册GitHub和ngrok账户，fork项目，启动Action，配置环境变量，获取变量值，连接RDP。注意，此项目仅供测试和教育用途，使用时需注意安全性和隐私保护，并自行承担使用风险。
