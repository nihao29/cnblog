---
abbrlink: ''
ai: 熟练使用右上角的搜索和Ctrl+F快速定位问题解答 如果是订阅或节点的问题，做好将你的订阅或节点链接发出来让大佬直接查看； 如果你什么都不提供，你的问题就如同占卜，大佬是不会理你的。  常见问题汇总  Q：我的Cloudflare
  Workers/Page 项目出现了错误代码Error 1101！我该怎么办？  如果你的Worker项目是edgetunnel...
categories:
- - 问题
- - Cloudflare Pages
cover: https://imgs.huluohu.com/blog/20230920/16951760495215.jpg
date: '2024-11-06T16:08:47.993981+08:00'
tags:
- 解决
- Cloudflare
- Github
title: 熟练使用右上角的搜索和Ctrl+F快速定位问题解答
updated: '2024-11-06T16:16:47.712+08:00'
---
## **熟练使用右上角的搜索和`Ctrl+F`快速定位问题解答**

如果是**订阅或节点**的问题，做好将你的**订阅或节点链接**发出来让大佬直接查看；
如果你什么都不提供，你的问题就如同占卜，大佬是不会理你的。

---

# 常见问题汇总

---

### Q：我的Cloudflare *Workers/Page* 项目出现了错误代码Error 1101！我该怎么办？

* 如果你的Worker项目是**edgetunnel**： 你需要先**删除删除删除**当前的Worker项目。接着，访问[edgetunnel](https://github.com/cmliu/edgetunnel/blob/main/_worker.js)，复制最新的代码，并将它部署到另一个新的Worker项目中。
* 对于其他类型的Worker项目：
  * 如果你之前修改了代码： 请尝试将代码**恢复到原始状态**，然后保存更改以查看是否解决了问题。
  * 如果你添加了新的变量： 你需要**逐一移除**这些变量。采用**控制变量法**，即每次移除一个变量后检查问题是否得到解决，这样可以帮你确定是哪个具体的变量导致了问题。
* 重新部署项目的建议： 你也可以尝试重新部署一个新的Worker项目。如果新项目没有出现Error 1101，这意味着你的原始项目代码并无问题。问题可能出现在你后续添加的某些参数上。此时，你可以逐步重新添加之前的变量，**每添加一个变量后，都去检查一次是否出现Error 1101**，直到找出问题的源头。

---

### Q：OpenWRT使用**PassWall**、**SSR**等插件在订阅[edgetunnel](https://github.com/cmliu/edgetunnel)、[epeius](https://github.com/cmliu/epeius)项目的VLESS、Trojan订阅链接导入失败？

A：可以尝试使用**Base64订阅地址**去导入。

### Q：**OpenClash**呢?

A：可以尝试使用**Clash订阅地址**去导入。

### Q：Pages部署时，构建日志提示 ✘ [ERROR] No Pages config file found？

A：**无视它**，这个提示并不影响部署进程。

---

### Q：Clash订阅时提示 ‘proxy 0: unsupport proxy type: vless’？

A：你当前所使用的客户端内核**不支持vless节点**
解决方法：更换`clash.meta`或`mihomo`内核，也可以直接下载CM同款 [Clash Nyanpasu](https://github.com/LibNyanpasu/clash-nyanpasu) 或 [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev) 使用即可.

---

### Q：小火箭订阅提示”不能获取节点”？

A：因为小火箭打开了`隐藏UA`，冒充浏览器，导致订阅返回内容是edt配置信息而非节点订阅内容
解决方法：> [视频教程](https://t.me/CMLiussss_channel/97)；

---

### Q：能订阅出节点，但是节点全部返回 **-1** 或 **不可用**？

* 1. 如果你使用的是**NekoBox**，Url Test链接为`https://cp.cloudflare.com/` 属于CF家CDN产品，所以实际测试会走完优选IP>worker>proxyip>CF 代理链容易造成异常超时。
     解决方法：修改延迟测试URL为 `https://www.google.com/generate_204` > [图文教程](https://t.me/CMLiussss_channel/58)
* 2. 如果你使用的是**v2rayN**，那么请检查是否开启了`开启Mux多路复用`，如果开启请将其关闭后再试;
* 3. 如果不是以上情况请尝试**更换新的UUID**，也许有效果；> 这个**还真TM有效果** > [UUID在线生成](https://1024tools.com/uuid)
* 4. 也可将你的节点订阅**发给群友测试**，如果群友能连上，那**99.99%**是因为**你当地的运营商屏蔽了你当前使用的域名**，更换自定义域。

---

### Q：为什么节点名称提示**已启用临时域名中转服务，请尽快绑定自定义域！**？

A：因为你当前订阅使用的是**workers.dev**或**pages.dev**分配的域名去订阅的节点，而这些域名已经被墙，所以订阅器会给你的伪装域名套上中转域名来解决问题。

### Q：但是我已经套上了自定义域为什么还是提示**已启用临时域名中转服务，请尽快绑定自定义域！**？

A：因为你没有使用**自定义域/UUID**的方式去订阅。

### Q：但是我的订阅地址并不是通过/UUID或/PASSWORD订阅的，而是通过**优选订阅生成器/TOKEN**订阅的？

A：说明你优选订阅生成器内的**HOST变量**里的域名使用的是**workers.dev**或**pages.dev**分配的域名，你需要给节点项目绑定一个**自定义域**，然后将**自定义域**赋值给**HOST变量**。

---

### Q：为什么订阅自己的节点就提示已使用 6TB/24TB？我的**订阅被盗**了吗？

A：该功能实际上是重置**Worker请求次数**的**倒计时**，重置时间为**北京时间 08:00** 。

---

### Q：bot机器人频繁通知**异常访问**！我的**订阅被盗**了吗？

A：首先，这个通知功能我已经**明确强调小白别开**，提示你**异常访问**你还有这样的疑问，那么你就是符合**别开这个功能的小白！**；
**异常访问**就只是异常访问，只有提示**获取订阅**，但是订阅的人不是你，这才是你的订阅被盗了！
**异常访问**只是普通的网络爬虫行为，且无法避免！请把这个通知功能关掉！！！

---

## 熟练使用右上角的搜索和`Ctrl+F`快速定位问题解答
