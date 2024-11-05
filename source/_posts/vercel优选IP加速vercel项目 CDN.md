---
abbrlink: ''
ai: 在现代 Web 开发中，部署个人博客已经变得相当简单，尤其是像 Vercel 这样的无服务...
categories:
- - 优选域名
cover: https://root.tcip.top/edit.html?file=source%2F_posts%2Fvercel%E4%BC%98%E9%80%89IP%E5%8A%A0%E9%80%9Fvercel%E9%A1%B9%E7%9B%AE%20CDN.md&postname=vercel%E4%BC%98%E9%80%89IP%E5%8A%A0%E9%80%9Fvercel%E9%A1%B9%E7%9B%AE%20CDN
date: '2024-11-06T01:03:12.540436+08:00'
tags:
- CDN
title: vercel优选IP加速vercel项目
updated: '2024-11-06T01:19:00.739+08:00'
---
在现代 Web 开发中，部署个人博客已经变得相当简单，尤其是像 Vercel 这样的无服务器平台，它提供了快速、简便的部署体验。除了基本的博客部署，许多人还希望将博客绑定自定义域名，并通过 vercel 优选 IP 提升访问速度或增加一些额外的功能。</p>

<p>本文将带你一步步实现以下目标：</p>
<ol>
<li>使用 Vercel 部署博客。</li>
<li>将博客绑定到自定义域名。</li>
<li>通过 vercel 优选提升访问体验。</li>
</ol>
<h2 id="一、在-Vercel-部署博客"><a title="一、在 Vercel 部署博客" class="headerlink" href="#一、在-Vercel-部署博客"></a>一、在 Vercel 部署博客</h2><h3 id="1-部署到-Vercel"><a title="1. 部署到 Vercel" class="headerlink" href="#1-部署到-Vercel"></a>1. 部署到 Vercel</h3><ol>
<li>进入 Vercel 官网 <a href="https://vercel.com/" rel="noopener">vercel.com</a>，并登录你的账户。</li>
<li>点击右上角的 <strong>“New Project”</strong>，然后选择你刚刚上传到 GitHub 的项目。</li>
<li>点击 <strong>“Deploy”</strong>,Vercel 会自动为你配置项目并完成部署。</li>
</ol>
<p>几分钟后，你将会看到博客已经被部署到了一个 Vercel 提供的默认域名下（通常是 <code>your-project.vercel.app</code>）。</p>
<h2 id="二、配置自定义域"><a title="二、配置自定义域" class="headerlink" href="#二、配置自定义域"></a>二、配置自定义域</h2><p>要使用自己的域名访问博客，接下来需要配置自定义域名。</p>
<h3 id="2-1-添加自定义域名"><a title="2.1 添加自定义域名" class="headerlink" href="#2-1-添加自定义域名"></a>2.1 添加自定义域名</h3><ol>
<li>进入 Vercel 仪表板，选择你的博客项目。</li>
<li>点击 <strong>“Settings”</strong> 标签页，然后选择 <strong>“Domains”</strong>。</li>
<li>输入你购买的自定义域名（如 <code>myblog.com</code>），点击 <strong>“Add”</strong>。</li>
</ol>
<h3 id="2-2-DNS-配置"><a title="2.2 DNS 配置" class="headerlink" href="#2-2-DNS-配置"></a>2.2 DNS 配置</h3><p>要使域名生效，接下来需要在你的域名注册商处进行 DNS 配置。</p>
<ol>
<li>登录你的域名服务商网站，找到 DNS 设置。</li>
<li>添加以下两条记录：<ul>
<li><strong>A 记录</strong>：指向 Vercel 的 IP 地址 <code>76.76.21.21</code>。</li>
<li><strong>CNAME 记录</strong>（仅用于子域名，如 <code>www.myblog.com</code>）：指向 <code>cname.vercel-dns.com</code>。</li>
</ul>
</li>
<li>保存更改后，等待 DNS 生效，通常需要几分钟到 48 小时。</li>
</ol>
<h3 id="2-3-SSL-证书"><a title="2.3 SSL 证书" class="headerlink" href="#2-3-SSL-证书"></a>2.3 SSL 证书</h3><p>Vercel 会自动为你配置 SSL 证书，确保你的博客可以通过 HTTPS 安全访问。你不需要额外的操作。</p>
<h2 id="三、通过Vercel优选IP优化访问"><a title="三、通过Vercel优选IP优化访问" class="headerlink" href="#三、通过Vercel优选IP优化访问"></a>三、通过 Vercel 优选 IP 优化访问</h2><p>通过 vercel 优选 IP 的域名替换官方 CNAME 记录加速博客。</p>
<p>推荐几个 Vercel 优选域名</p>
<figure class="highlight html"><div class="highlight-tools closed"><i class="anzhiyufont anzhiyu-icon-angle-down expand ${highlightShrinkClass}"></i><div class="code-lang">html</div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i></div><div class="__reading_mode_table_and_collapse_button_container" style="width: 264.7px;"><table __reading_mode_is_table_layout_created="true" class="__reading_mode_data_table_class"><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">vercel.cdn.cyfan.top 推荐</span><br><span class="line">vercel.cdn.yt-blog.top</span><br><span class="line">vercel-cname.xingpingcn.top</span><br></pre></td></tr></tbody></table></div></figure>

<p>A 记录不变，CNAME 记录替换。</p>
<ul>
<li><strong>A 记录</strong>：指向 Vercel 的 IP 地址 <code>76.76.21.21</code>。</li>
<li><strong>CNAME 记录</strong>:<code>cname.vercel-dns.com</code> 替换为 <code>vercel.cdn.cyfan.top</code></li>
</ul>
<h2 id="四、加速效果"><a title="四、加速效果" class="headerlink" href="#四、加速效果"></a>四、加速效果</h2><ol>
<li><p>vercel 自定义域名效果</p>
<p>测试网址:<a href="http://www.kejiland.app/" rel="noopener">www.kejiland.app</a></p>
<p><a href="https://images.2024921.xyz/images/202410252043889.png"><img src="https://images.2024921.xyz/images/202410252043889.png" class="entered exited c008" onerror="this.onerror=null,this.src="/img/404.jpg""></a></p>
<p><a href="https://images.2024921.xyz/images/202410252044185.png"><img class="entered loaded c008" onerror="this.onerror=null,this.src="/img/404.jpg"" src="https://images.2024921.xyz/images/202410252044185.png"></a></p>
</li>
<li><p>vercel 自定义加速域名效果</p>
<p><a href="https://www.kejiland.com/" rel="noopener">https://www.kejiland.com</a></p>
<p><a href="https://images.2024921.xyz/images/202410252048287.png"><img class="entered loaded c008" onerror="this.onerror=null,this.src="/img/404.jpg"" src="https://images.2024921.xyz/images/202410252048287.png"></a></p>
<p><a href="https://images.2024921.xyz/images/202410252050056.png"><img src="https://images.2024921.xyz/images/202410252050056.png" class="entered loaded c008" onerror="this.onerror=null,this.src="/img/404.jpg""></a></p></li></ol></div></div>                    <div id="__reading__mode__content_end_mark_container_id">                    <span id="content_end_mark_icon_id" style="display: block;"></span>                    </div>                    <div id="pages_pending_container_id" class="pages_pending_container_class">                        <progress class="progress_pages_pending c0010">                    </progress></div>                    <div class="__reading__mode__copyright c0010" id="copyright"></div>                </div>             </div>

