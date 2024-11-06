---
abbrlink: ''
ai: Serv00.com最近比较火热，因为号称提供10年免费并无限流量的虚拟主机服务确实很吸引...
categories:
- - 邮箱
- - Serv00
cover: https://www.geekyes.com/wp-content/uploads/2024/08/100-1024x738.png
date: '2024-11-06T13:08:37.422540+08:00'
tags:
- 邮箱
- Serv00
title: Serv00部署域名邮箱 (详细教程)
updated: '2024-11-06T13:09:58.223+08:00'
---
[Serv00.com](https://www.serv00.com/)最近比较火热，因为号称提供10年免费并无限流量的虚拟主机服务确实很吸引人，我昨天注册了一个已经是S8了，如何注册大家自己试试，主要是看IP的干净程度。今天写一篇用Serv00.com自带的邮箱系统搭建自己的"Serv00 域名邮箱"，使用自己域名进行邮箱操作，包括收发邮件、邮件转发、Catch-all、无限别名、自定义发件人身份等。

为了写文方便，先定义一下

自己的主域名：geekyes.eu.org；子域名：mail.geekyes.eu.org；DNS解析托管在cloudflare.com

注册成功后，进入面板或通过注册邮件查看账号基本信息

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/0-1024x1008.png)

我这里的邮箱信息是mail8开头，教程里也就以mail8为例，以后注册到了mail9、mail10请自行替换。

## 一、部署收发邮件

1、新建站点

我使用子域名mail.geekyes.eu.org，也可以直接使用主域名。

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/1-1024x270.png)

2、查看站点ip，二选一用哪个都行，复制备用。

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/2-1024x478.png)

3、在cloudflare面板新建一个A记录，解析到刚才查看的ip地址。

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/3-1024x659.png)

4、回到serv00面板，E-mail栏下，选择“add new e-mail”，填入任意名称@mail.geekyes.eu.org，设置密码，添加完成。

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/4-1024x340.png)

注：这个邮件地址可以设置多个，各自独立。

5、又回到cloudflare面板，新建一个TXT和MX记录。

![](https://www.geekyes.com/wp-content/uploads/2024/08/5-1024x332.png)

**类型    名称    内容                                            TTL**

**MX    mail    mail8.**serv00**.**com**                             自动**

**TXT    mail    v=spf1 a mx include:mail8.**serv00**.**com** -all    自动**

6、又回到serv00面板（折腾来回跑），点击自己邮件域名后的Detalls按钮。

![](https://www.geekyes.com/wp-content/uploads/2024/08/5-0-1-1024x255.png)

7、点击“Set quota”给邮箱定个容量，serv00一共大小3G，邮箱容量不用设置太大，我这里给了100MB。

![](https://www.geekyes.com/wp-content/uploads/2024/08/6-1024x354.png)

8、返回点击自己域名邮箱后面的DKIM按钮

这一步是为了发信更可靠，不然发出的邮件基本都进了对方的垃圾箱。

![](https://www.geekyes.com/wp-content/uploads/2024/08/7-1024x274.png)

9、直接点签署域名。

![](https://www.geekyes.com/wp-content/uploads/2024/08/8-1024x308.png)

10、弹出2条DNS记录，留着，下一步要用。

![](https://www.geekyes.com/wp-content/uploads/2024/08/9-1024x254.png)

11、再次回到cloudflare面板，新建一条TXT记录

![](https://www.geekyes.com/wp-content/uploads/2024/08/10-1024x245.png)

**类型    名称                     内容                            TTL**

**TXT    devil.**\_domainkey**.**mail**    v=DKIM1; k=rsa; p=XXXXXXX;    自动**

使用子域名的情况下，devil.\_domainkey后面一定要加上自定义的子域名，比如我这里子域名是mail，所以就要写devil.\_domainkey.mail，如果直接用主域名，就是devil.\_domainkey

11-1、设置**DMARC（可选），为了发件更可信。**

cloudflare面板，新建一条TXT记录

**类型  名称          内容**

**TXT  \_dmarc.**mail**   v=DMARC1; p=none; rua=mailto:你的任意其他邮箱; ruf=mailto:你的任意其他邮箱; pct=**100**; sp=none; aspf=r;**

12、测试邮件收发

到这一步就基本完成了，可以登陆邮件面板[mail.serv00.com](https://mail.serv00.com/)进行测试，用户名和密码就是步骤4时设定的。

[测试邮件质量网站](https://www.mail-tester.com/)

![](https://www.geekyes.com/wp-content/uploads/2024/08/100-1024x738.png)

## 二、设置Catch-all

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/11-1024x707.png)

E-mail栏下，点击“add new alias”添加一个新别名，如图依次打开高级设置，选择“Catch-all”，再填写域名和收件人，发件人会自动生成，保存。

现在Catch-all就设置好了，这样任何发送到@mail.geekyes.eu.org的电子邮件，不管收件人地址是否存在，都会被发送到admin@mail.geekyes.eu.org

## 三、邮件转发

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/12-1024x301.png)

进入[mail.serv00.com](https://mail.serv00.com/)邮件系统，点击设置——过滤器——建立，过滤规则名称随便，范围“所有邮件”，动作按需自选，我这里选的是发送到我的其他邮箱，这样方便统一接收邮件通知等。

## 四、自定义发件人身份

有时候需要用不存在的邮箱名称发邮件，这时候就要用到自定义发件人身份的功能。

比如使用Catch-all的情况下，我用不存在的123@mail.geekyes.eu.org收验证码注册了某网站，有一天需要用123@mail.geekyes.eu.org发邮件和这个网站的客服沟通，就属于这种情况。

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/14-1024x400.png)

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/15-1024x321.png)

1、在邮件系统里，点击设置——发件人身份——建立——邮件地址填需要的发件人信息，保存。

2、写新邮件的时候，在发件人栏就可以选择这个新发件人了。

也可以在上面“部署收发邮件”的第4步，新建多个各自独立的邮箱，这就是真实的发件人了。

## 五、关闭白名单

serv00的邮件设置默认使用收件人白名单，如果不设置的话，自己收到的邮件都会直接进垃圾箱。而一个个添加域名白名单是很不方便而且容易遗漏的，所以我把这个选项关了

![Serv00 域名邮箱](https://www.geekyes.com/wp-content/uploads/2024/08/13-1024x584.png)

进入serv00面板，E-mail栏下，点击自己邮件域名后的Detalls按钮，选择“Options”——“Move spam”选项选择“Disabled”，这样收到的邮件不用设置白名单也能正常出现在收件箱了。

## 结尾

篇幅有点长了，全部部署完成后，现在这套邮件系统已经基本完善了，如果要在第三方程序或邮件客户端中使用，需要配置SMTP或IMAP，没什么难度大家可以自行尝试。

这里serv00.com的部署同样适用于ct8.pl。

## 补充

1、第3步cloudflare面板A记录解析IP地址非必需步骤，如果一切正常可以跳过或部署后删除，这样不影响域名其他使用，特别是使用主域名@的情况下。

2、在ct8.pl部署的时候发现SPF 记录不生效，如有这种情况可以修改SPF 记录的内容为：

**v=spf1 a mx ip4:your-ip include:s1.**ct8**.**pl** -all**

your-ip的值为第6步发件IP，s1.ct8.pl为前言中账户信息的服务器地址。
