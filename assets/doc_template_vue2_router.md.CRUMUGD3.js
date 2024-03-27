import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.t2hUVk8X.js";const h=JSON.parse('{"title":"router 目录文件介绍","description":"","frontmatter":{},"headers":[],"relativePath":"doc/template/vue2/router.md","filePath":"doc/template/vue2/router.md","lastUpdated":1709812522000}'),p={name:"doc/template/vue2/router.md"},t=e(`<h1 id="router-目录文件介绍" tabindex="-1">router 目录文件介绍 <a class="header-anchor" href="#router-目录文件介绍" aria-label="Permalink to &quot;router 目录文件介绍&quot;">​</a></h1><p>配置整个 vue 项目的路由，vue 是单页面应用的代表，这里面就是设置一个一个组件的地址文件。</p><p>路由配置字段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1</span></span>
<span class="line"><span> * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面</span></span>
<span class="line"><span> *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面</span></span>
<span class="line"><span> *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由</span></span>
<span class="line"><span> *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由</span></span>
<span class="line"><span> * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击</span></span>
<span class="line"><span> * name:&#39;router-name&#39;               // 设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题</span></span>
<span class="line"><span> * query: &#39;{&quot;id&quot;: 1, &quot;name&quot;: &quot;ry&quot;}&#39; // 访问路由的默认传递参数</span></span>
<span class="line"><span> * roles: [&#39;admin&#39;, &#39;common&#39;]       // 访问路由的角色权限</span></span>
<span class="line"><span> * permissions: [&#39;a:a:a&#39;, &#39;b:b:b&#39;]  // 访问路由的菜单权限</span></span>
<span class="line"><span> * meta : {</span></span>
<span class="line"><span>    noCache: true                   // 如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)</span></span>
<span class="line"><span>    title: &#39;title&#39;                  // 设置该路由在侧边栏和面包屑中展示的名字</span></span>
<span class="line"><span>    icon: &#39;svg-name&#39;                // 设置该路由的图标，对应路径src/assets/icons/svg</span></span>
<span class="line"><span>    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示</span></span>
<span class="line"><span>    activeMenu: &#39;/system/user&#39;      // 当路由设置了该属性，则会高亮相对应的侧边栏。</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> */</span></span></code></pre></div>`,4),l=[t];function r(i,c,o,u,d,m){return n(),a("div",null,l)}const v=s(p,[["render",r]]);export{h as __pageData,v as default};
