import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.t2hUVk8X.js";const o=JSON.parse('{"title":"public 目录文件介绍","description":"","frontmatter":{},"headers":[],"relativePath":"doc/template/vue2/public.md","filePath":"doc/template/vue2/public.md","lastUpdated":1709812522000}'),h={name:"doc/template/vue2/public.md"},l=n(`<h1 id="public-目录文件介绍" tabindex="-1">public 目录文件介绍 <a class="header-anchor" href="#public-目录文件介绍" aria-label="Permalink to &quot;public 目录文件介绍&quot;">​</a></h1><p>该目录下包含 plug、index.html 和 favicon.ico 文件。</p><h2 id="plug" tabindex="-1">plug <a class="header-anchor" href="#plug" aria-label="Permalink to &quot;plug&quot;">​</a></h2><p>可以将静态资源放在此目录下，包括 axios、echarts、element、vue、icon、images 等不需要打进包的资源，可以减短打包时间，进行项目优化。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plug</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            # 项目静态资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # axios资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 最小资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echarts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # echarts资源资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echarts.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 最小资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # echarts资源资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-ui.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 最小js资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-ui.min.css</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 最小css资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # vue资源资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-router.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # vue-router资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # vue资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vuex.min.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # vuex资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> image</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 图片资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> icon</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # icon资源文件</span></span></code></pre></div><h2 id="favicon-ico" tabindex="-1">favicon.ico <a class="header-anchor" href="#favicon-ico" aria-label="Permalink to &quot;favicon.ico&quot;">​</a></h2><p>一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上，用于显示网站的 logo，目前主要的浏览器都支持 favicon.ico 图标，可以进行替换。</p><h2 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-label="Permalink to &quot;index.html&quot;">​</a></h2><p>该页面是一个模板文件，作用是生成项目的入口文件，webpack 打包的 js,css 也会自动注入到该页面中。</p>`,9),t=[l];function p(k,e,F,r,d,c){return a(),i("div",null,t)}const y=s(h,[["render",p]]);export{o as __pageData,y as default};