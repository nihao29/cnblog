var posts=["2024/11/05/CloudFlare CDN核心功能 资源缓存/","2024/11/05/CloudFlare Pages 实现自选优选ip/","2024/11/05/CloudFlare SAAS(cname) 接入网站域名/","2024/11/05/CloudFlare Workers 实现自选优选ip/","2024/11/05/CloudFlare 单一重定向规则设置教程/","2024/11/05/CloudFlare 电子邮箱路由实现无限别名邮箱/","2024/11/05/CloudFlare可NS方式接入的免费、低价域名/","2024/11/05/Cloudflare使用api更换证书颁发机构/","2024/11/06/Follow：新一代RSS订阅工具，让阅读更有趣！/","2024/11/06/Github Pages 博客网站访问速度优化/","2024/07/21/GitHubAction/","2024/11/06/Githuber MD: 让你的WordPress博客焕发Markdown魅力/","2024/05/31/Nine-AI部署教程/","2024/11/06/Serv00部署域名邮箱 (详细教程)/","2024/11/06/Sink：使用Cloudflare打造你的专属短链服务，免费又强大！/","2024/11/05/Vercel 加速，快，不止更快，Vercel 不仅可以部署 Hexo 博客，还能部署很多服务/","2024/11/05/vercel优选IP加速vercel项目 CDN/","2024/11/06/使用 Vercel 加速 Github 图床/","2024/11/06/保姆级教程使用Cloudflare和Telegraph搭建零成本图床系统/","2024/11/06/利用 Cloudflare Pages 和 BPB 面板搭建免费VPN订阅节点/","2024/11/05/历史性的第一时刻Tcip中心/","2024/11/06/告别龟速！用 Cloudflare Pages 搭建 DockerHub 镜像加速器/","2024/11/06/图床搭建可以实现粘贴图片自动上传到 GitHub 的公有仓库/","2024/11/08/在线24小时更新优选IP/","2024/11/06/在翻墙的过程中发表不当言论真的会被查水表，这不是危言耸听，很多的案例也不难打听，大家谨言慎行。切记不可涉政，不可造谣传谣。/","2024/11/06/基于Cloudflare R2搭建零成本图床，配合免费CDN，这才叫遥遥领先！/","2024/11/08/斐讯N1 iStoreOS 固件/","2024/11/06/熟练使用右上角的搜索和CtrlF快速定位问题解答/","2024/11/07/独立博客运营总结/","2024/11/05/网站使用 CloudFlare 优选域名的方法/","2024/11/06/自用常用脚本汇总/","2024/11/06/通过Cloudflare Tunnel访问内网端口/","2024/11/06/通过 Cloudflare 和 JsDelivr 免费加速博客 GitHub 图床等静态资源/","2024/11/06/通过ZeroTier SSH连接内网主机/","2024/11/06/通过热点共享网络，让局域网内的手机等设备共享本机代理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"天亮了","link":"https://blog.httple.net/","avatar":"https://blog.httple.net/sitelogo.png","descr":"知识创造一切"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };