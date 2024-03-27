import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.t2hUVk8X.js";const b=JSON.parse('{"title":"注释规范","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"doc/rule/code/comment.md","filePath":"doc/rule/code/comment.md","lastUpdated":1709812522000}'),e={name:"doc/rule/code/comment.md"},l=p(`<h1 id="注释规范" tabindex="-1">注释规范 <a class="header-anchor" href="#注释规范" aria-label="Permalink to &quot;注释规范&quot;">​</a></h1><p>该目录下包含 HTML、CSS、Javascript。</p><h2 id="_1、html" tabindex="-1">1、HTML <a class="header-anchor" href="#_1、html" aria-label="Permalink to &quot;1、HTML&quot;">​</a></h2><h3 id="_1-1-单行注释" tabindex="-1">1.1 单行注释 <a class="header-anchor" href="#_1-1-单行注释" aria-label="Permalink to &quot;1.1 单行注释&quot;">​</a></h3><p>一般用于简单的描述，如某些状态描述、属性描述等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- Comment Text --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;comment&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h3 id="_1-2-模块注释" tabindex="-1">1.2 模块注释 <a class="header-anchor" href="#_1-2-模块注释" aria-label="Permalink to &quot;1.2 模块注释&quot;">​</a></h3><p>一般用于描述模块的名称以及模块开始与结束的位置。S 表示开始，E 表示结束,模块与模块之间使用空行隔开。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- S 户号大于0页面展示内容 --&gt;</span></span>
<span class="line"><span>&lt;div v-if=&quot;userInfo.registerList.length &gt; 0&quot;&gt;</span></span>
<span class="line"><span>  ....</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;!-- E 户号大于0页面展示内容 --&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;!-- S 户号小于0页面展示内容 --&gt;</span></span>
<span class="line"><span>&lt;div v-else&gt;</span></span>
<span class="line"><span>  ....</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;!-- E 户号小于0页面展示内容 --&gt;</span></span></code></pre></div><h3 id="_1-3-嵌套模块" tabindex="-1">1.3 嵌套模块 <a class="header-anchor" href="#_1-3-嵌套模块" aria-label="Permalink to &quot;1.3 嵌套模块&quot;">​</a></h3><p>当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用。注释写在模块结尾标签底部，单独一行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- S 户号大于0页面展示内容 --&gt;</span></span>
<span class="line"><span>&lt;div v-if=&quot;userInfo.registerList.length &gt; 0&quot;&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>      嵌套第一个模块</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- /first module --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    嵌套第一个模块</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- /second module --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;!-- E 户号大于0页面展示内容 --&gt;</span></span></code></pre></div><h2 id="_2、css" tabindex="-1">2、CSS <a class="header-anchor" href="#_2、css" aria-label="Permalink to &quot;2、CSS&quot;">​</a></h2><h3 id="_2-1-单行注释" tabindex="-1">2.1 单行注释 <a class="header-anchor" href="#_2-1-单行注释" aria-label="Permalink to &quot;2.1 单行注释&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* menu */</span></span>
<span class="line"><span>.menu {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-模块注释" tabindex="-1">2.2 模块注释 <a class="header-anchor" href="#_2-2-模块注释" aria-label="Permalink to &quot;2.2 模块注释&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* moduleA ------------------------------------------------------ */</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>/* moduleB ------------------------------------------------------ */</span></span></code></pre></div><h3 id="_2-3-文件头部注释信息" tabindex="-1">2.3 文件头部注释信息 <a class="header-anchor" href="#_2-3-文件头部注释信息" aria-label="Permalink to &quot;2.3 文件头部注释信息&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @desc: 基本样式定义</span></span>
<span class="line"><span> * @auth: rk</span></span>
<span class="line"><span> * @date: 2022-05-31</span></span>
<span class="line"><span> * @LastEditors: rk</span></span>
<span class="line"><span> * @LastEditTime: 2023-06-30 16:25:40</span></span>
<span class="line"><span> */</span></span></code></pre></div><h2 id="_3、javascript" tabindex="-1">3、Javascript <a class="header-anchor" href="#_3、javascript" aria-label="Permalink to &quot;3、Javascript&quot;">​</a></h2><h3 id="_3-1-单行注释" tabindex="-1">3.1 单行注释 <a class="header-anchor" href="#_3-1-单行注释" aria-label="Permalink to &quot;3.1 单行注释&quot;">​</a></h3><p>单行注释使用  //，注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面。注释行的上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>methods: {</span></span>
<span class="line"><span>  // 获取当前页面列表数据</span></span>
<span class="line"><span>  getContractList() {</span></span>
<span class="line"><span>    getContractList(obj).then(res =&gt; {</span></span>
<span class="line"><span>      if (res) {</span></span>
<span class="line"><span>        this.pagination.total = res.total;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 对返回的数据进行特殊处理</span></span>
<span class="line"><span>        this.getContractListHandle(res.data);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-2-多行注释" tabindex="-1">3.2 多行注释 <a class="header-anchor" href="#_3-2-多行注释" aria-label="Permalink to &quot;3.2 多行注释&quot;">​</a></h3><p>多行注释使用 /** */</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数的注释</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @params{string} title - 需要传入名称</span></span>
<span class="line"><span> * @params{number} type - 需要通过类型判断</span></span>
<span class="line"><span> */</span></span></code></pre></div><h3 id="_3-3-注释内容" tabindex="-1">3.3 注释内容 <a class="header-anchor" href="#_3-3-注释内容" aria-label="Permalink to &quot;3.3 注释内容&quot;">​</a></h3><p>注释内容与注释符之间需要使用空格</p><h4 id="_3-3-1-data-中的注释" tabindex="-1">3.3.1 data 中的注释 <a class="header-anchor" href="#_3-3-1-data-中的注释" aria-label="Permalink to &quot;3.3.1 data 中的注释&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>data() {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    companyList: [], // 存放公司名称数据</span></span>
<span class="line"><span>    isShowUser: false, // 是否展示用户信息</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-3-2-函数中的注释" tabindex="-1">3.3.2 函数中的注释 <a class="header-anchor" href="#_3-3-2-函数中的注释" aria-label="Permalink to &quot;3.3.2 函数中的注释&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 分页回调</span></span>
<span class="line"><span>pagination() {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-4-特殊标记" tabindex="-1">3.4 特殊标记 <a class="header-anchor" href="#_3-4-特殊标记" aria-label="Permalink to &quot;3.4 特殊标记&quot;">​</a></h3><p>目前常用的特殊标记有两个，TODO 和 FIXME。</p><p>TODO：记录还未开发完成的代码</p><p>FIXME：记录这块的代码有 bug,需要修复</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// TODO 等待后台接口开发完成，对接接口</span></span>
<span class="line"><span>.....</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// FIXME 以下实现方式需要测试边缘数据，对数组是否存在未判断</span></span>
<span class="line"><span>let startDate = this.searchForm.date_range[0];</span></span>
<span class="line"><span>let endDate = this.searchForm.date_range[1];</span></span></code></pre></div>`,37),t=[l];function i(c,o,d,h,r,u){return n(),s("div",null,t)}const v=a(e,[["render",i]]);export{b as __pageData,v as default};
