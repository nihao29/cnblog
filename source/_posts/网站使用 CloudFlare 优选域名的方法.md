---
abbrlink: CloudFlare 优选域名
categories:
- - 域名
- - 教程
cover: https://www.baota.me/usr/uploads/2024/03/607071051.png
date: '2024-11-05T16:53:12.343612+08:00'
excerpt: 简单介绍 由于CloudFlare官方IP是泛播路由，意味着同一个IP在不同地区不同运营商所链接的机房是不同的。 因此公共优选域名并不适合非网站用途，如果需要建议使用CloudflareSpeedTest项目自行测试本地最优的IP地址。 准备事项 使用本教程前请先查看文章 CloudFlare SAAS(cname) 接入网站域名 使用SAAS功能接入后再查看本教程操作。 优选域名 由于CNAME...
tags:
- 优选
- 加速
title: 网站提速使用 CloudFlare 优选域名的方法
updated: '2024-11-05T16:56:13.527+08:00'
---
#### 简单介绍

由于CloudFlare官方IP是泛播路由，意味着同一个IP在不同地区不同运营商所链接的机房是不同的。
因此公共优选域名并不适合非网站用途，如果需要建议使用CloudflareSpeedTest项目自行测试本地最优的IP地址。

#### 准备事项

使用本教程前请先查看文章 [CloudFlare SAAS(cname) 接入网站域名](https://www.baota.me/post-413.html) 使用SAAS功能接入后再查看本教程操作。

#### 优选域名

由于CNAME地址会有被污染、域名所有者不维护等情况，为了方便更新，该列表会单独一个页面展示。
[CloudFlare公共优选Cname域名地址列表](https://www.wetest.vip/page/cloudflare/cname.html)
本文章将使用cloudflare.182682.xyz域名来做示例优选域名。

#### 测速工具

由于公共优选域名有很多，质量也参差不齐。
因此我们需要使用在线测速工具来测试优选效果。
以下是我收集的支持指定cname的在线测速工具。
[炸了吗-HTTP网站测速工具](https://zhale.me/http/)
[IT狗-HTTP网站测速工具](https://www.itdog.cn/http/)
[测速网-HTTP网站测速工具](https://www.cesu.net/http/)
[tcping8-HTTP网站测速工具](https://tcping8.com/http/)
[17测-HTTP网站测速工具](https://www.17ce.com/)
本文章将使用 炸了吗-HTTP网站测速工具 来做示例测速。

#### 挑选域名

![zhalema.png](https://www.baota.me/usr/uploads/2024/03/2389097122.png "zhalema.png")
1.挑选时不要只看小地图，应该根据平均访问速度，最大访问速度，失败节点数等综合判断。
2.因为有些非官方的优选IP不支持80或者443端口。
因此测试时建议对http、https链接单独测试。
3.如果您的网站并发过低建议使用慢速监测。
快速测试：模拟用户同时访问指定网站
慢速监测：模拟用户依次访问指定网站

#### 解析域名

通过SAAS验证后，可直接替换回退源为优选域名，但出于风险考虑我比较建议分线路解析。
1.国外线路解析到回退源域名是为了避免CF增加监测系统，自动删除已添加的网站域名。
2.优选域名一般都会只优选国内线路，因此国外线路大概率没有进行优选。
3.默认回退源域名一般情况下，国外访问最近策略，会比自定义IP效果要好。
**【可选】将优选域名解析到国内线路上**
![cn.png](https://www.baota.me/usr/uploads/2024/03/607071051.png "cn.png")
**补充截图用于校验设置-华为云可能跟其他DNS不一样**
![xysz.png](https://www.baota.me/usr/uploads/2024/03/3526151628.png "xysz.png")
**【可选】将搜索引擎线路设置为源站或者其他IP**
在loc有用户反馈，公共cname可能会将搜索引擎蜘蛛线路解析到其他服务器来劫持蜘蛛。
因此我们可以自定义搜索引擎线路来避免这种情况的发生，需要说明不是所有DNS支持设置搜索引擎线路。
