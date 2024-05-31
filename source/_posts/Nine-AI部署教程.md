---
abbrlink: ''
categories:
- - AI
date: '2024-05-31T14:38:31.739689+08:00'
tags:
- AI
title: Nine-AI部署教程
updated: '2024-05-31T14:38:34.114+08:00'
---
# Nine-Ai部署教程

欢迎大家使用[中转API](https://)，已配置`NineAI全模型`

## 准备⼯作：

1.⼀个最低1h1g的服务器（国内国外都可）

2.推荐服务器系统为：`CentOS-7.6`

## 安装宝塔

### SSH连接服务器

首先使用ssh工具连接服务器，推荐使用[FinalShell](https://www.hostbuf.com/)

详细步骤如下

[![image-20240224141023215](https://bu.dusays.com/2024/02/24/65d9af6ce6ce7.webp)](https://bu.dusays.com/2024/02/24/65d9af6ce6ce7.webp)

[![image-20240224141147721](https://bu.dusays.com/2024/02/24/65d9af6f24d5a.webp)](https://bu.dusays.com/2024/02/24/65d9af6f24d5a.webp)

SSH信息填写，填写完确定

[![image-20240224141312850](https://bu.dusays.com/2024/02/24/65d9af757d7e7.webp)](https://bu.dusays.com/2024/02/24/65d9af757d7e7.webp)

填写过后双击点击服务器连接即可

[![image-20240224141515841](https://bu.dusays.com/2024/02/24/65d9af78c1f8f.webp)](https://bu.dusays.com/2024/02/24/65d9af78c1f8f.webp)

### 宝塔安装脚本

万能安装脚本

CODE


| `1`<br/> | `if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec`<br/> |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

centos 安装宝塔脚本

CODE


| `1`<br/> | `yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec`<br/> |
| -------- | ------------------------------------------------------------------------------------------------------------------------- |

以上两选一即可

复制到SSH窗口回车，再回复一个`y`，等待即可

[![image-20240224141759302](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9b169a6047.webp)

等待约6min看到以下提示即可，**请务必记录面板账户登录信息**

[![image-20240224142626527](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9b16b0b5a3.webp)

### 环境配置

访问外网面板地址，输入登录信息

登录后，登录你的宝塔账户（没有就注册一个就可以了）选择安装推荐配置，

注意：**MySQL**版本必须是`5.7`或者`8.0.20`，具体选择哪个根据自己服务器内存而定，小内存用5.7

[![image-20240224143040764](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9af9b1fef2.webp)

安装过以上内容，在宝塔面板-软件商店-已安装-点击php右侧设置，安装`fileinfo`和`Redis`（Redis必装，fileinfo可选）

[![image-20240224145509418](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afb2924ab.webp)

在软件商店中继续搜索node，安装Node.js版本管理器

[![image-20240224145623197](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afb5bad59.webp)

安装后点击右侧设置-更新版本列表-找到`16.19.1`-选择`中国镜像`-点击安装

[![image-20240224145830363](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afb86f7a8.webp)

安装后请将命令行版本切换至`16.19.1`

[![image-20240224154040446](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afbada169.webp)

返回SHH终端页面检查环境是否配置完备

CODE


| `1`<br/>`2`<br/>`3`<br/>`4`<br/>`5`<br/>`6`<br/>`7`<br/> | `node -v `<br/>`npm -v `<br/>`pnpm -v `<br/>`pm2 -v`<br/> |
| -------------------------------------------------------- | --------------------------------------------------------- |

[![image-20240225170709672.png](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/29/65e08de19ced7.webp)

已安装应用如下

[![image-20240224150544786.png](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afbcbeee2.webp)

### 常见问题

**pnpm问题**

在运行`pnpm -v`时出现`-bash: pnpm: 未找到命令`

解决方法：

国外服务器在SSH终端运行此命令

CODE


| `1`<br/> | `curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;`<br/> |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |

国内服务器在SSH终端运行此命令

CODE


| `1`<br/> | `curl -fsSL "https://mirror.ghproxy.com/https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;`<br/> |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |

安装后再次执行“**pnpm -v**”确认能输出版本号

## 站点搭建

### 添加站点

宝塔面板-网站-添加站点-填写域名-选择数据库MySQL-确定

[![image-20240224150918187](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afbe6cfdc.webp)

请务必保存数据库信息，待会配置要用

[![image-20240224151028152](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afbf64f7b.webp)

点击进入站点目录

[![image-20240224151102087](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc058b08.webp)

上传程序到站点目录并解压

[![image-20240224151322535](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc1dc0f8.webp)

### .env信息配置

复制.env.example文件，粘贴并重命名为.env

[![image-20240224151613428](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc31c4d8.webp)

打开.env并修改配置，数据库信息上一步骤保存过，填进去即可，忘记保存可以去宝塔面板-数据库中获取

邮件服务以qq邮箱为例开通smtp[教程](https://blog.hklan.top/posts/smtpeamil.html),其他邮箱基本一致，具体可去搜索引擎进行搜索

CODE


| `1`<br/>`2`<br/>`3`<br/>`4`<br/>`5`<br/>`6`<br/>`7`<br/>`8`<br/>`9`<br/>`10`<br/>`11`<br/>`12`<br/>`13`<br/>`14`<br/>`15`<br/>`16`<br/>`17`<br/>`18`<br/>`19`<br/>`20`<br/>`21`<br/>`22`<br/>`23`<br/>`24`<br/>`25`<br/>`26`<br/>`27`<br/>`28`<br/> | `# mysql`<br/>`DB_HOST=localhost`<br/>`DB_PORT=3306`<br/>`DB_USER=你的数据库名称`<br/>`DB_PASS=你的数据库密码`<br/>`DB_DATABASE=你的数据库名称`<br/>`#  mailer 邮件服务`<br/>`MAILER_HOST=你的邮箱服务器地址`<br/>`MAILER_PORT=465`<br/>`MAILER_USER=你的邮箱账号`<br/>`MAILER_PASS=你的邮箱密码（这里如果是使用例如QQ邮箱网易邮箱，填写的就是邮箱授权码）`<br/>`MAILER_FROM=你的邮箱账号`<br/>`# Redis`<br/>`REDIS_PORT=6379`<br/>`REDIS_HOST=127.0.0.1`<br/>`REDIS_PASSWORD=`<br/>`# mj并发数`<br/>`CONCURRENCY=3`<br/>`# jwt token`<br/>`JWT_SECRET=chat-nine-ai`<br/>`# jwt token 过期时间`<br/>`JWT_EXPIRESIN=7d`<br/>`# 自定义端口`<br/>`PORT=9520`<br/> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### 安装

切换至SSH面板

进入站点目录

CODE


| `1`<br/> | `cd /www/wwwroot/你的网站域名`<br/> |
| -------- | ----------------------------------- |

输入安装指令

CODE


| `1`<br/> | `pnpm install`<br/> |
| -------- | ------------------- |

[![image-20240224154348944](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc4e5ba4.webp)

启动指令

CODE


| `1`<br/> | `pnpm start`<br/> |
| -------- | ----------------- |

[![image-20240224154443131](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9b17b389a9.webp)

查看启动日志

CODE


| `1`<br/> | `pm2 log`<br/> |
| -------- | -------------- |

[![image-20240224154552829](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9b17d043d3.webp)

看到以上提示即为启动成功

### 开放端口

宝塔面板-安全-添加端口规则-填写`9520`-确定

[![image-20240224154822227](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc696f34.webp)

**注意：部分服务器厂商需要在官方服务器管理平台再开放一次端口，比如腾讯云**

[![image-20240224155108672](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc7c0b8c.webp)

### 反代域名

#### 解析域名

进入域名管理界面，将我们的域名解析至服务器

[![image-20240224155543127](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afc8df999.webp)

#### 配置ssl

宝塔-网站-点击站点右侧设置-选择ssl-选择`Let's Encrypt`-申请

**注意：一定要先配置ssl，后进行反向代理**

[![image-20240224155701499](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afca9acec.webp)

开启强制HTTPS

[![image-20240224160153392](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afcb878f3.webp)

#### 反代配置

宝塔-网站-点击站点右侧设置-选择反向代理-添加反向代理-代理名称随意填

目标url填写

CODE


| `1`<br/> | `http://127.0.0.1:9520`<br/> |
| -------- | ---------------------------- |

点击提交

[![image-20240224160058799](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afcce0821.webp)

### 访问域名

访问你的域名-填写管理员给你的`授权码`即可

[![image-20240224160510191](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afcddb904.webp)

[![image-20240224161304056](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/02/24/65d9afcf7bfab.webp)

## 管理信息

BASH


| `1`<br/>`2`<br/>`3`<br/>`4`<br/> | `用户端 https://你的域名`<br/>`管理端 https://域名/nineai/admin`<br/>`默认演示账号: admin 123456`<br/>`默认超级管理员： super nine-super`<br/> |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |

## 常见问题

### 新版绘画页面添加

请手动前端`用户端->动态菜单`手动添加、添加为站内地址、路径为`/painting`、添加后即可打开
[![image.png](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://bu.dusays.com/2024/03/05/65e7247fcbad7.webp)

### pnpm问题

在运行`pnpm -v`时出现`-bash: pnpm: 未找到命令`

解决方法：

国外服务器在SSH终端运行此命令

CODE


| `1`<br/> | `curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;`<br/> |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |

国内服务器在SSH终端运行此命令

CODE


| `1`<br/> | `curl -fsSL "https://mirror.ghproxy.com/https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;`<br/> |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |

安装后再次执行“**pnpm -v**”确认能输出版本号

### sharp安装问题

#### 更换镜像源安装尝试

CODE


| `1`<br/> | `npm config set sharp binary host "https://npmmirror.com/mirrors/sharp"`<br/> |
| -------- | ----------------------------------------------------------------------------- |

CODE


| `1`<br/> | `npm config set sharp libvips binary host "https://npmmirror.com/mirrors/sharp-libvips"`<br/> |
| -------- | --------------------------------------------------------------------------------------------- |

CODE


| `1`<br/> | `pm2 del all`<br/> |
| -------- | ------------------ |

CODE


| `1`<br/> | `pnpm install`<br/> |
| -------- | ------------------- |

#### 官方方法

* 遇到`sharp包安装失败可以尝试调整版本` 输入`pnpm add sharp@0.33.1`或者输入`pnpm add sharp@0.32.6` 进行尝试、
* 如果依然无法使用请下载 `V3.4.1补丁版`、此版本将移除部分缩率图生成功能！
* 如无必要请尽量下载**v3.4**版本使用
* （区别）🔥🔥🔥 v3.4.1将移除缩略图生成功能、无法为图片生成预览缩略图、加载图片将采用原图### Midjourney问题
* 排查问题之前确保中转站可以使用midjourney服务
* midjourney-proxy-plus地址：[https://github.com/litter-coder/midjourney-proxy-plus](https://github.com/litter-coder/midjourney-proxy-plus)#### 中转日志出图，镜像站图出不来

  添加`图片代理`：[https://mj.nineai.chat](https://mj.nineai.chat/)
  [![image.png](https://bu.dusays.com/2024/03/05/65e720a7ead2c.webp)](https://bu.dusays.com/2024/03/05/65e720a7ead2c.webp)#### 图片卡到一半出不来

  J：关于mj卡一半问题 我测试看了下 是数据库版本问题 老版本的用户 数据库规则不是 utf8mb4 导致无法插入mj返回的图标 手动更新下数据库的字段字符集
  [![0e3346003c4aad005d19013ad2f5a0e8_720.png](https://bu.dusays.com/2024/03/05/65e721304ccf5.webp)](https://bu.dusays.com/2024/03/05/65e721304ccf5.webp)#### 提交Action任务失败

  群友解决方法：`更换中转站`
  官方暂无解决方法\~静待佳音
  很奇怪，我的中转大部分同行都可用，但也有小部分不能用
  [![ad6da024efd7bb72685484d8e99a07fc.png](https://bu.dusays.com/2024/03/05/65e7258532169.webp)](https://bu.dusays.com/2024/03/05/65e7258532169.webp)
