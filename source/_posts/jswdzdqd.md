---
abbrlink: ''
title: 金山文档实现自动签到
categories:
- 自动签到
date: '2023-08-07 12:01:01'
tags:
- 签到
- 金山文档
updated: '2023-08-07 12:01:01'
author: 天亮
---

## 安装
[我的B站视频](https://www.bilibili.com/video/BV18j411r79G/)
[作者公众号文章](https://mp.weixin.qq.com/s/xgL3O_COHYA-k8OJbWoaSQ)
## 各平台配置
[作者公众号文章](https://mp.weixin.qq.com/s/xgL3O_COHYA-k8OJbWoaSQ)
## 进阶:自动通知

注意，配置通知一定要在表格里第三列(是否推送（是/否）)填是
文章演示常见的推送服务

![图片](https://b2.190823.xyz/2023/08/69967156857ad5f174177b986f2906b9.png)
选择PUSH表
![图片](https://b2.190823.xyz/2023/08/f36daa827547bc6fa1248ccf1dbf40f5.png)
这里有bark、pushplus、server酱、邮箱、钉钉、Discord几种通知类型

### pushplus配置
打开[pushplus官网](http://www.pushplus.plus/)
![](https://b2.190823.xyz/2023/08/be195eda568f2b6cfa0320803b193348.png)
点击登录
![](https://b2.190823.xyz/2023/08/a683a1fc0316caea2e0f6af7f59e9e5a.png)
选择一对一消息
![](https://b2.190823.xyz/2023/08/f93135641892559b0db5678c463273a7.png)
一键复制你的token
![](https://b2.190823.xyz/2023/08/953b3ecb05b139db603da87336d27af0.png)
在指定单元格填入你的token,并在手机上关注pushplus 推送加公众号，点击功能，点击个人中心，个人资料，在里面绑定邮箱，然后pushplus就会在公众号和邮件里推送
![](https://b2.190823.xyz/2023/08/c6082322920f93ec98dd70a8373a042f.jpg)

### server酱
登录server酱(不演示了)
复制token
![](https://b2.190823.xyz/2023/08/de6dc91d2104a25f856b0f5fbd73d68d.png)
然后去表格里填入即可，记住不要取关“方糖”公众号
### 钉钉
![](https://b2.190823.xyz/2023/08/7b30a6786caaf07793d754e4978344de.png)
任意群里选择机器人
![](https://b2.190823.xyz/2023/08/30560cb2caf1d57ef2eb34eb962e5620.png)
点击添加机器人，添加机器人
![](https://b2.190823.xyz/2023/08/8713a1b53f88787a94875a4dd591df47.png)
选择自定义机器人
![](https://b2.190823.xyz/2023/08/136331e498dc1d9323fa8d6d913e89d6.png)
加密方式勾选关键词，填入签到二字，同意条款，点击完成
然后复制地址，例如https://oapi.dingtalk.com/robot/send?access_token=dcd40f0239d0d5093马赛克6923207a7a马赛克9c1472724ccbcff8
将access_token=后的内容(dcd40f0239d0d5093马赛克6923207a7a马赛克9c1472724ccbcff8)复制下来粘如表格中(记得设置推送为是)
