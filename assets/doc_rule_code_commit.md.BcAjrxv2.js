import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.t2hUVk8X.js";const g=JSON.parse('{"title":"代码提交规范","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"doc/rule/code/commit.md","filePath":"doc/rule/code/commit.md","lastUpdated":1709812522000}'),e={name:"doc/rule/code/commit.md"},t=p(`<h1 id="代码提交规范" tabindex="-1">代码提交规范 <a class="header-anchor" href="#代码提交规范" aria-label="Permalink to &quot;代码提交规范&quot;">​</a></h1><h2 id="_1、基本信息" tabindex="-1">1、基本信息 <a class="header-anchor" href="#_1、基本信息" aria-label="Permalink to &quot;1、基本信息&quot;">​</a></h2><p>git commit 规范不仅可以帮助开发人员日后根据提交类型和内容找到之前的代码，而且让提交的代码更加规范。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>commit 的类型：</span></span>
<span class="line"><span>  feat: feature缩写，用户相关的新功能，构建脚本功能除外</span></span>
<span class="line"><span>  fix: 修改 bug</span></span>
<span class="line"><span>  perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）</span></span>
<span class="line"><span>  refactor: 为了可读性或者性能，在不改变原有功能的前提下做的修改</span></span>
<span class="line"><span>  docs: 文档的变更</span></span>
<span class="line"><span>  style: 代码格式修改, 注意不是 css 修改（例如分号修改）</span></span>
<span class="line"><span>  conflict: 修复代码冲突,</span></span>
<span class="line"><span>  font: 字体文件更新,</span></span>
<span class="line"><span>  test: 增加或重构了测试代码，但没有增加产品代码</span></span>
<span class="line"><span>  build: 影响项目构建或依赖项修改</span></span>
<span class="line"><span>  revert: 恢复上一次提交</span></span>
<span class="line"><span>  ci: 持续集成相关文件修改</span></span>
<span class="line"><span>  chore: 更新构建脚本，但是不会更新产品代码</span></span></code></pre></div><p>如开发新功能:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>feat: 用户管理开发</span></span></code></pre></div><p>bug 修复：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fix: 用户管理字段取值容错修改</span></span></code></pre></div><h2 id="_2、git-cz-代码提交统一规范配置" tabindex="-1">2、git-cz 代码提交统一规范配置 <a class="header-anchor" href="#_2、git-cz-代码提交统一规范配置" aria-label="Permalink to &quot;2、git-cz 代码提交统一规范配置&quot;">​</a></h2><h3 id="_2-1-安装-husky" tabindex="-1">2.1 安装 husky <a class="header-anchor" href="#_2-1-安装-husky" aria-label="Permalink to &quot;2.1 安装 husky&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i husky -save-dev</span></span></code></pre></div><h3 id="_2-2-创建-husky-目录并指定该目录为-git-hooks-所在的目录" tabindex="-1">2.2 创建.husky/目录并指定该目录为 git hooks 所在的目录 <a class="header-anchor" href="#_2-2-创建-husky-目录并指定该目录为-git-hooks-所在的目录" aria-label="Permalink to &quot;2.2 创建.husky/目录并指定该目录为 git hooks 所在的目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm set-script prepare &quot;husky install&quot; &amp;&amp; npm run prepare</span></span></code></pre></div><p>执行该命令后，会看到 package.json 文件中 scripts 对象中新增一条 prepare:&quot;husky install&quot;命令,项目根目录会生成一个.husky 文件夹</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>需要 npm 版本 Version 7.x(npm set-script 命令需要 7.x)，建议 node 版本升级到 16.x</p></div><h3 id="_2-3-创建预提交脚本" tabindex="-1">2.3 创建预提交脚本 <a class="header-anchor" href="#_2-3-创建预提交脚本" aria-label="Permalink to &quot;2.3 创建预提交脚本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx husky add .husky/pre-commit &quot;npm run lint&quot;</span></span></code></pre></div><p>执行该命令后，会看到.husky/目录下新增了一个名为 pre-commit 的 shell 脚本。</p><p>这样，在之后执行 git commit 命令时会先触发 pre-commit 这个脚本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm run lint</span></span></code></pre></div><h3 id="_2-4-创建提交校验信息检测脚本-commitlint-进行校验" tabindex="-1">2.4 创建提交校验信息检测脚本，commitlint 进行校验 <a class="header-anchor" href="#_2-4-创建提交校验信息检测脚本-commitlint-进行校验" aria-label="Permalink to &quot;2.4 创建提交校验信息检测脚本，commitlint 进行校验&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span></span></code></pre></div><p>执行该命令后，会看到.husky/目录下新增了一个名为 commit-msg 的 shell 脚本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx --no-install commitlint --edit &quot;&quot;</span></span></code></pre></div><h3 id="_2-5-lint-staged-安装配置" tabindex="-1">2.5 lint-staged 安装配置 <a class="header-anchor" href="#_2-5-lint-staged-安装配置" aria-label="Permalink to &quot;2.5 lint-staged 安装配置&quot;">​</a></h3><p>lint-staged 用于预提交时要进行代码检查的规范，比如 eslint。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev lint-staged</span></span></code></pre></div><p>在 package.json 新增 lint-staged 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    &quot;src/**/*.{js,vue}&quot;: [</span></span>
<span class="line"><span>      &quot;eslint --fix&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h3 id="_2-6-commitlint-提交校验安装配置" tabindex="-1">2.6 commitlint 提交校验安装配置 <a class="header-anchor" href="#_2-6-commitlint-提交校验安装配置" aria-label="Permalink to &quot;2.6 commitlint 提交校验安装配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i --save-dev @commitlint/config-conventional @commitlint/cli</span></span></code></pre></div><p>在项目根目录下创建 commitlint.config.js 文件，并设置如下信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    extends: [&quot;@commitlint/config-conventional&quot;],</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_2-7-commitzen-适配器" tabindex="-1">2.7 commitzen 适配器 <a class="header-anchor" href="#_2-7-commitzen-适配器" aria-label="Permalink to &quot;2.7 commitzen 适配器&quot;">​</a></h3><p>用于命令交互式提交的插件，方便大家进行提交</p><p>全局安装 commitzen</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g commitizen@4.2.4</span></span></code></pre></div><p>安装自定义项目提交配置适配器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev cz-customizable@6.3.0</span></span></code></pre></div><p>package.json 中添加 commitizen 配置，config</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;config&quot;: {</span></span>
<span class="line"><span>    &quot;commitizen&quot;: {</span></span>
<span class="line"><span>      &quot;path&quot;: &quot;./node_modules/cz-customizable&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>配置 cz-customizable 配置项</p><p>在项目根目录创建.cz-config.js 配置文件，文件内容参考如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span> // 可选类型</span></span>
<span class="line"><span> types: [</span></span>
<span class="line"><span>    { value: &#39;feat&#39;, name: &#39;feat: 新功能&#39; },</span></span>
<span class="line"><span>    { value: &#39;fix&#39;, name: &#39;fix: 修复一个 bug&#39; },</span></span>
<span class="line"><span>    { value: &#39;docs&#39;, name: &#39;docs: 文档变更&#39; },</span></span>
<span class="line"><span>    { value: &#39;style&#39;, name: &#39;style: 代码格式(不影响代码运行的变动)&#39; },</span></span>
<span class="line"><span>    { value: &#39;conflict&#39;, name: &#39;conflict: 修复代码冲突&#39; },</span></span>
<span class="line"><span>    { value: &#39;font&#39;, name: &#39;font: 字体文件更新&#39; },</span></span>
<span class="line"><span>    { value: &#39;refactor&#39;, name: &#39;refactor: 重构(既不是增加 feature，也不是修复 bug)&#39; },</span></span>
<span class="line"><span>    { value: &#39;perf&#39;, name: &#39;perf: 性能优化&#39; },</span></span>
<span class="line"><span>    { value: &#39;test&#39;, name: &#39;test: 增加测试&#39; },</span></span>
<span class="line"><span>    { value: &#39;chore&#39;, name: &#39;chore: 构建过程或辅助工具或配置工具修改&#39; },</span></span>
<span class="line"><span>    { value: &#39;revert&#39;, name: &#39;revert: 回退&#39; },</span></span>
<span class="line"><span>    { value: &#39;build&#39;, name: &#39;build: 影响构建系统或外部依赖项的更改(如:webpack、npm)&#39; }</span></span>
<span class="line"><span> ],</span></span>
<span class="line"><span> // 交互式消息提示步骤</span></span>
<span class="line"><span> messages: {</span></span>
<span class="line"><span>    type: &#39;请选择提交类型:&#39;,</span></span>
<span class="line"><span>    customScope: &#39;请输入修改范围(可选):&#39;,</span></span>
<span class="line"><span>    subject: &#39;请简要描述提交(必填):&#39;,</span></span>
<span class="line"><span>    body: &#39;请输入详细描述(可选):&#39;,</span></span>
<span class="line"><span>    footer: &#39;请输入要关闭的 issue(可选):&#39;,</span></span>
<span class="line"><span>    confirmCommit: &#39;确认使用以上信息提交？(y/n/e/h)&#39;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>// 跳过问题</span></span>
<span class="line"><span>skipQuestions: [&#39;body&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span>// subject 文字长度默认是 72</span></span>
<span class="line"><span>subjectLimit: 72</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-8-增加自定义校验规则到-commitlint-配置" tabindex="-1">2.8 增加自定义校验规则到 commitlint 配置 <a class="header-anchor" href="#_2-8-增加自定义校验规则到-commitlint-配置" aria-label="Permalink to &quot;2.8 增加自定义校验规则到 commitlint 配置&quot;">​</a></h3><p>编辑 commitlint.config.js，导入.cz-config.js 中的自定义的规则项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { types } = require(&quot;./.cz-config.js&quot;)</span></span>
<span class="line"><span>const typeList = types.map(item =&gt; item.value)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    extends: [&quot;@commitlint/config-conventional&quot;],</span></span>
<span class="line"><span>    rules: {</span></span>
<span class="line"><span>        &quot;type-enum&quot;: [2, &quot;always&quot;, typeList]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div>`,47),i=[t];function l(c,o,d,u,h,m){return n(),a("div",null,i)}const v=s(e,[["render",l]]);export{g as __pageData,v as default};
