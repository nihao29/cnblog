---
abbrlink: ''
ai: 斐讯N1 iStoreOS 固件  斐讯N1 专用文档 刷机方法：  参考先刷到U盘 U盘启动以后，终端执行 install-to-emmc.sh，就可以安装到eMMC，然后就可以关机拔掉U盘
  开机前连接HDMI显示器启动的话可以显示终端，所以可以接到HDMI看打印日志，注意必须在开机前就接上HDMI显示器才有效。如果接了USB键盘，当显示器的日志不再滚动时...
categories:
- - n1
cover: https://tc.tcip.top/file/1731064296518_image.png
date: '2024-11-08T19:10:01.136402+08:00'
tags: []
title: 斐讯N1 iStoreOS 固件
updated: '2024-11-08T19:33:19.154+08:00'
---
`斐讯N1 iStoreOS 固件`

![https://tc.tcip.top/file/1731064296518_image.png](https://tc.tcip.top/file/1731064296518_image.png)

## 斐讯N1 专用文档

刷机方法：

1. [参考](https://doc.linkease.com/zh/guide/istoreos/install_sd.html)先刷到U盘
2. U盘启动以后，终端执行 `install-to-emmc.sh`，就可以安装到eMMC，然后就可以关机拔掉U盘
3. 开机前连接HDMI显示器启动的话可以显示终端，所以可以接到HDMI看打印日志，注意必须在开机前就接上HDMI显示器才有效。如果接了USB键盘，当显示器的日志不再滚动时按键盘回车键可以进入iStoreOS命令行。
4. 默认网口是DHCP客户端，所以IP不是固定的，在连接显示器启动的情况下可以在命令行执行`ip addr`命令查看IP，否则在主路由后台看看最近分配的IP地址。
5. 系统启动过程中，前面的LOGO灯会闪。一般开机后20秒内灯会开始闪，系统初始化完毕以后灯变成常亮。如果开机以后30秒灯还不闪，估计启动失败了。
6. 如果要升级固件，不需要重新制作U盘或写入eMMC，只需下载新固件（无需解压），然后在网页后台“系统”-“备份/升级”，点击“刷写固件”按钮，上传新固件，然后按页面提示升级。

如果遇到问题，或者怀疑固件BUG，那么分以下情况重新刷机：

* 如果盒子是原厂固件：如果版本比较高要先降级到2.19（具体怎么降级B站很多教程，至少Bootloader要降级），降级以后进安卓系统，联网获取IP，然后插上制作好的U盘，然后用电脑执行`adb connect 盒子IP`连接盒子，再执行`adb shell reboot update`，系统会自动重启几次，之后就会进入iStoreOS了。
* 如果盒子原本就是Linux系统（非安卓），例如armbian或flippy的固件：那只要插上制作好的U盘即可启动到iStoreOS。
* 如果原本是砖，或者想完全恢复出厂状态，或者遇到其他系统启动问题：那么参考B站的救砖教程（可能需要拆机），救砖以后就按原厂固件刷机流程。


|  | [File Name](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=N&O=A) [↓](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=N&O=D)                                                                                                        | [File Size](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=S&O=A) [↓](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=S&O=D) | [Date](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=M&O=A) [↓](https://fw.koolcenter.com/iStoreOS/alpha/n1/?C=M&O=D) |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|  | [istoreos-amlogic-meson-phicomm\_n1-squashfs-20240329.img.gz](https://fw0.koolcenter.com/iStoreOS/alpha/n1/istoreos-amlogic-meson-phicomm_n1-squashfs-20240329.img.gz "istoreos-amlogic-meson-phicomm_n1-squashfs-20240329.img.gz") | 108.4 MiB                                                                                                                    | 2024-03-29 19:19                                                                                                        |
|  | [istoreos-22.03.6-2024043010-phicomm\_n1-squashfs.img.gz](https://fw0.koolcenter.com/iStoreOS/alpha/n1/istoreos-22.03.6-2024043010-phicomm_n1-squashfs.img.gz "istoreos-22.03.6-2024043010-phicomm_n1-squashfs.img.gz")             | 108.4 MiB                                                                                                                    | 2024-04-30 14:02                                                                                                        |
