import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.t2hUVk8X.js";const b=JSON.parse('{"title":"代码规范","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"doc/rule/code/code.md","filePath":"doc/rule/code/code.md","lastUpdated":1709812522000}'),e={name:"doc/rule/code/code.md"},t=p(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><p>该目录下包含 HTML、CSS、Javascript、Vue。</p><h2 id="_1、html" tabindex="-1">1、HTML <a class="header-anchor" href="#_1、html" aria-label="Permalink to &quot;1、HTML&quot;">​</a></h2><h3 id="_1-1-元素及标签闭合" tabindex="-1">1.1 元素及标签闭合 <a class="header-anchor" href="#_1-1-元素及标签闭合" aria-label="Permalink to &quot;1.1 元素及标签闭合&quot;">​</a></h3><p>为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：</p><ul><li><p>所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和结束标签的元素亦都要写上。</p></li><li><p>空元素标签都不加 “/” 字符。</p></li></ul><h3 id="_1-2-代码嵌套" tabindex="-1">1.2 代码嵌套 <a class="header-anchor" href="#_1-2-代码嵌套" aria-label="Permalink to &quot;1.2 代码嵌套&quot;">​</a></h3><p>元素嵌套规范，每个块状元素独立一行，内联元素可选</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 块状 --&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 内联元素 --&gt;</span></span>
<span class="line"><span>&lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;/p&gt;</span></span></code></pre></div><h2 id="_2、css" tabindex="-1">2、CSS <a class="header-anchor" href="#_2、css" aria-label="Permalink to &quot;2、CSS&quot;">​</a></h2><h3 id="_2-1-样式文件" tabindex="-1">2.1 样式文件 <a class="header-anchor" href="#_2-1-样式文件" aria-label="Permalink to &quot;2.1 样式文件&quot;">​</a></h3><p>样式文件必须写上  @charset  规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用  “UTF-8”。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@charset &quot;UTF-8&quot;;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-代码大小写" tabindex="-1">2.2 代码大小写 <a class="header-anchor" href="#_2-2-代码大小写" aria-label="Permalink to &quot;2.2 代码大小写&quot;">​</a></h3><p>样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>img {</span></span>
<span class="line"><span>  display: inline-block;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-3-代码易读性" tabindex="-1">2.3 代码易读性 <a class="header-anchor" href="#_2-3-代码易读性" aria-label="Permalink to &quot;2.3 代码易读性&quot;">​</a></h3><h4 id="_2-3-1-左括号与类名之间一个空格-冒号与属性值之间一个空格" tabindex="-1">2.3.1 左括号与类名之间一个空格，冒号与属性值之间一个空格 <a class="header-anchor" href="#_2-3-1-左括号与类名之间一个空格-冒号与属性值之间一个空格" aria-label="Permalink to &quot;2.3.1 左括号与类名之间一个空格，冒号与属性值之间一个空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-2-逗号分隔的取值-逗号之后一个空格" tabindex="-1">2.3.2 逗号分隔的取值，逗号之后一个空格 <a class="header-anchor" href="#_2-3-2-逗号分隔的取值-逗号之后一个空格" aria-label="Permalink to &quot;2.3.2 逗号分隔的取值，逗号之后一个空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-3-颜色值-rgb-、rgba-中不需有空格-且取值不要带有不必要的-0" tabindex="-1">2.3.3 颜色值 rgb()、rgba()中不需有空格，且取值不要带有不必要的 0 <a class="header-anchor" href="#_2-3-3-颜色值-rgb-、rgba-中不需有空格-且取值不要带有不必要的-0" aria-label="Permalink to &quot;2.3.3 颜色值 rgb()、rgba()中不需有空格，且取值不要带有不必要的 0&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  color: rgba(255,255,255,.5);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-4-属性值十六进制数值能用简写的尽量用简写" tabindex="-1">2.3.4 属性值十六进制数值能用简写的尽量用简写 <a class="header-anchor" href="#_2-3-4-属性值十六进制数值能用简写的尽量用简写" aria-label="Permalink to &quot;2.3.4 属性值十六进制数值能用简写的尽量用简写&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.title_color {</span></span>
<span class="line"><span>  color: #fff;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-5-不要为-0-指明单位" tabindex="-1">2.3.5 不要为  0  指明单位 <a class="header-anchor" href="#_2-3-5-不要为-0-指明单位" aria-label="Permalink to &quot;2.3.5 不要为  0  指明单位&quot;">​</a></h4><p>能使用 none 的不要使用 0，可以减少一次计算。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  margin: 0 10px;</span></span>
<span class="line"><span>  border: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-4-属性书写建议" tabindex="-1">2.4 属性书写建议 <a class="header-anchor" href="#_2-4-属性书写建议" aria-label="Permalink to &quot;2.4 属性书写建议&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">建议遵循以下顺序：</p><p>1、布局定位属性：display / position / float / clear / visibility / overflow</p><p>2、自身属性：width / height / margin / padding / border / background</p><p>3、文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word</p><p>4、其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  margin: 0 10px;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  border-radius: 10px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-5-css3-浏览器兼容属性" tabindex="-1">2.5 css3 浏览器兼容属性 <a class="header-anchor" href="#_2-5-css3-浏览器兼容属性" aria-label="Permalink to &quot;2.5 css3 浏览器兼容属性&quot;">​</a></h3><p>CSS3 浏览器私有前缀在前，标准前缀在后。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  -webkit-border-radius: 10px;</span></span>
<span class="line"><span>  -moz-border-radius: 10px;</span></span>
<span class="line"><span>  -o-border-radius: 10px;</span></span>
<span class="line"><span>  -ms-border-radius: 10px;</span></span>
<span class="line"><span>  border-radius: 10px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-6-class-和-id-使用" tabindex="-1">2.6 class 和 id 使用 <a class="header-anchor" href="#_2-6-class-和-id-使用" aria-label="Permalink to &quot;2.6 class 和 id 使用&quot;">​</a></h3><p>class 一般是设置样式，是可以重复的，所以放在子级，id 一般是操作 dom，是唯一的，所以放在父级。</p><h3 id="_2-7-属性书写顺序" tabindex="-1">2.7 属性书写顺序 <a class="header-anchor" href="#_2-7-属性书写顺序" aria-label="Permalink to &quot;2.7 属性书写顺序&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示：</p><p>class，id，name，data-*，src，for，type，href，value，max-length，max，min，pattern，placehoulder，title，readonly，disabled</p></div><h3 id="_2-8-选择器不要超过-4-层" tabindex="-1">2.8 选择器不要超过 4 层 <a class="header-anchor" href="#_2-8-选择器不要超过-4-层" aria-label="Permalink to &quot;2.8 选择器不要超过 4 层&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义样式时，最多不能超过4层</span></span>
<span class="line"><span>.container .main .left-box .user-info{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3、javascript" tabindex="-1">3、Javascript <a class="header-anchor" href="#_3、javascript" aria-label="Permalink to &quot;3、Javascript&quot;">​</a></h2><h3 id="_3-1-命名" tabindex="-1">3.1 命名 <a class="header-anchor" href="#_3-1-命名" aria-label="Permalink to &quot;3.1 命名&quot;">​</a></h3><h4 id="_3-1-1-采用小写驼峰命名" tabindex="-1">3.1.1 采用小写驼峰命名 <a class="header-anchor" href="#_3-1-1-采用小写驼峰命名" aria-label="Permalink to &quot;3.1.1 采用小写驼峰命名&quot;">​</a></h4><h4 id="_3-1-2-方法名、参数名、成员变量、局部变量头统一使用小驼峰风格" tabindex="-1">3.1.2 方法名、参数名、成员变量、局部变量头统一使用小驼峰风格 <a class="header-anchor" href="#_3-1-2-方法名、参数名、成员变量、局部变量头统一使用小驼峰风格" aria-label="Permalink to &quot;3.1.2 方法名、参数名、成员变量、局部变量头统一使用小驼峰风格&quot;">​</a></h4><div class="warning custom-block"><p class="custom-block-title">警告</p><p>其中 method 方法命名必须是 动词+名词 形式</p><p>特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他</p><p>add / update / delete / detail / get</p></div><details class="details custom-block"><summary>函数方法常用的动词</summary><p>get 获取/set 设置,</p><p>add 增加/remove 删除,</p><p>create 创建/destory 销毁,</p><p>start 启动/stop 停止,</p><p>open 打开/close 关闭,</p><p>read 读取/write 写入,</p><p>load 载入/save 保存,</p><p>begin 开始/end 结束,</p><p>backup 备份/restore 恢复,</p><p>import 导入/export 导出,</p><p>split 分割/merge 合并,</p><p>inject 注入/extract 提取,</p><p>attach 附着/detach 脱离,</p><p>bind 绑定/separate 分离,</p><p>view 查看/browse 浏览,</p><p>edit 编辑/modify 修改,</p><p>select 选取/mark 标记,</p><p>copy 复制/paste 粘贴,</p><p>undo 撤销/redo 重做,</p><p>insert 插入/delete 移除,</p><p>add 加入/append 添加,</p><p>clean 清理/clear 清除,</p><p>index 索引/sort 排序,</p><p>find 查找/search 搜索,</p><p>increase 增加/decrease 减少,</p><p>play 播放/pause 暂停,</p><p>launch 启动/run 运行,</p><p>compile 编译/execute 执行,</p><p>debug 调试/trace 跟踪,</p><p>observe 观察/listen 监听,</p><p>build 构建/publish 发布,</p><p>input 输入/output 输出,</p><p>encode 编码/decode 解码,</p><p>encrypt 加密/decrypt 解密,</p><p>compress 压缩/decompress 解压缩,</p><p>pack 打包/unpack 解包,</p><p>parse 解析/emit 生成,</p><p>connect 连接/disconnect 断开,</p><p>send 发送/receive 接收,</p><p>download 下载/upload 上传,</p><p>refresh 刷新/synchronize 同步,</p><p>update 更新/revert 复原,</p><p>lock 锁定/unlock 解锁,</p><p>check out 签出/check in 签入,</p><p>submit 提交/commit 交付,</p><p>push 推/pull 拉,</p><p>expand 展开/collapse 折叠,</p><p>enter 进入/exit 退出,</p><p>abort 放弃/quit 离开,</p><p>obsolete 废弃/depreciate 废旧,</p><p>collect 收集/aggregate 聚集</p></details><h3 id="_3-2-单行代码块" tabindex="-1">3.2 单行代码块 <a class="header-anchor" href="#_3-2-单行代码块" aria-label="Permalink to &quot;3.2 单行代码块&quot;">​</a></h3><p>在单行代码块中使用空格</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function foo () { return true }</span></span>
<span class="line"><span>if (foo) { bar = 0 }</span></span></code></pre></div><h3 id="_3-3-大括号风格" tabindex="-1">3.3 大括号风格 <a class="header-anchor" href="#_3-3-大括号风格" aria-label="Permalink to &quot;3.3 大括号风格&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (type == 1) {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>} else if (type == 2) {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-4-代码中的空格" tabindex="-1">3.4 代码中的空格 <a class="header-anchor" href="#_3-4-代码中的空格" aria-label="Permalink to &quot;3.4 代码中的空格&quot;">​</a></h3><h4 id="_3-4-1-逗号前后的空格可以提高代码的可读性-团队约定在逗号后面使用空格-逗号前面不加空格" tabindex="-1">3.4.1 逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格 <a class="header-anchor" href="#_3-4-1-逗号前后的空格可以提高代码的可读性-团队约定在逗号后面使用空格-逗号前面不加空格" aria-label="Permalink to &quot;3.4.1 逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a = 2, arr = [];</span></span></code></pre></div><h4 id="_3-4-2-对象字面量的键和值之间不能存在空格-且要求对象字面量的冒号和值之间存在一个空格" tabindex="-1">3.4.2 对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格 <a class="header-anchor" href="#_3-4-2-对象字面量的键和值之间不能存在空格-且要求对象字面量的冒号和值之间存在一个空格" aria-label="Permalink to &quot;3.4.2 对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = { name: &quot;rk&quot;, age: 23 }</span></span></code></pre></div><h4 id="_3-4-3-代码块前要添加空格" tabindex="-1">3.4.3 代码块前要添加空格 <a class="header-anchor" href="#_3-4-3-代码块前要添加空格" aria-label="Permalink to &quot;3.4.3 代码块前要添加空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (a) {</span></span>
<span class="line"><span>  this.getList();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function a() {};</span></span></code></pre></div><h4 id="_3-4-4-在函数调用时-禁止使用空格" tabindex="-1">3.4.4 在函数调用时，禁止使用空格 <a class="header-anchor" href="#_3-4-4-在函数调用时-禁止使用空格" aria-label="Permalink to &quot;3.4.4 在函数调用时，禁止使用空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>this.getList();</span></span></code></pre></div><h4 id="_3-4-5-在操作符前后都需要添加空格" tabindex="-1">3.4.5 在操作符前后都需要添加空格 <a class="header-anchor" href="#_3-4-5-在操作符前后都需要添加空格" aria-label="Permalink to &quot;3.4.5 在操作符前后都需要添加空格&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let num = num1 + num2;</span></span></code></pre></div><h3 id="_3-5-括号" tabindex="-1">3.5 括号 <a class="header-anchor" href="#_3-5-括号" aria-label="Permalink to &quot;3.5 括号&quot;">​</a></h3><p>下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try,catch, finally, with。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (condition) {</span></span>
<span class="line"><span>  doSomething();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-6-undefined-判断" tabindex="-1">3.6 undefined 判断 <a class="header-anchor" href="#_3-6-undefined-判断" aria-label="Permalink to &quot;3.6 undefined 判断&quot;">​</a></h3><p>永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串&#39;undefined&#39;对变量进行判断。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> if（typeof state === &#39;undefined&#39;）{...}</span></span></code></pre></div><h3 id="_3-7-this-的转换命名" tabindex="-1">3.7 this 的转换命名 <a class="header-anchor" href="#_3-7-this-的转换命名" aria-label="Permalink to &quot;3.7 this 的转换命名&quot;">​</a></h3><p>对上下文 this 的引用只能使用 ’self’ 来命名。</p><h2 id="_4、vue" tabindex="-1">4、Vue <a class="header-anchor" href="#_4、vue" aria-label="Permalink to &quot;4、Vue&quot;">​</a></h2><h3 id="_4-1-代码结构" tabindex="-1">4.1 代码结构 <a class="header-anchor" href="#_4-1-代码结构" aria-label="Permalink to &quot;4.1 代码结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div clss=&quot;user-info&quot;&gt;</span></span>
<span class="line"><span>    &lt;p&gt;111&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import DemoComponent from &#39;../component/DemoComponent&#39;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;UserInfo&#39;,</span></span>
<span class="line"><span>  components: { DemoComponent },</span></span>
<span class="line"><span>props: {},</span></span>
<span class="line"><span>  mixins: [],</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      //</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {},</span></span>
<span class="line"><span>  watch: {},</span></span>
<span class="line"><span>  Filter: {},</span></span>
<span class="line"><span>  created() {},</span></span>
<span class="line"><span>  mounted() {},</span></span>
<span class="line"><span>  methods: {},</span></span>
<span class="line"><span>  destroyed() {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.user-info {</span></span>
<span class="line"><span> //</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="_4-2-prop" tabindex="-1">4.2 prop <a class="header-anchor" href="#_4-2-prop" aria-label="Permalink to &quot;4.2 prop&quot;">​</a></h3><p>prop 定义应该尽量详细</p><p>1、必须使用 camelCase 驼峰命名</p><p>2、必须指定类型</p><p>3、必须加上注释，表明其含义</p><p>4、必须加上 required 或者 default，两者二选其一</p><p>5、如果有业务需要，必须加上 validator 验证</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>props: {</span></span>
<span class="line"><span>  // 组件状态，用于控制组件的颜色</span></span>
<span class="line"><span>   status: {</span></span>
<span class="line"><span>     type: String,</span></span>
<span class="line"><span>     required: true,</span></span>
<span class="line"><span>     validator: function (value) {</span></span>
<span class="line"><span>       return [</span></span>
<span class="line"><span>         &#39;succ&#39;,</span></span>
<span class="line"><span>         &#39;info&#39;,</span></span>
<span class="line"><span>         &#39;error&#39;</span></span>
<span class="line"><span>       ].indexOf(value) !== -1</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-3-computed" tabindex="-1">4.3 computed <a class="header-anchor" href="#_4-3-computed" aria-label="Permalink to &quot;4.3 computed&quot;">​</a></h3><p>应该把复杂计算属性分割为尽可能多的更简单的属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>computed： {</span></span>
<span class="line"><span>  basePrice() {</span></span>
<span class="line"><span>    return this.num * this.price</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  disCount() {</span></span>
<span class="line"><span>    // 折扣</span></span>
<span class="line"><span>    return this.basePrice * this.rebates；</span></span>
<span class="line"><span>  }，</span></span>
<span class="line"><span>  lastPrice() {</span></span>
<span class="line"><span>    return this.basePrice - this.disCount;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-4-v-for-循环必须添加-key" tabindex="-1">4.4 v-for 循环必须添加 key <a class="header-anchor" href="#_4-4-v-for-循环必须添加-key" aria-label="Permalink to &quot;4.4 v-for 循环必须添加 key&quot;">​</a></h3><p>vue 渲染是根据 key 值去对比，如果存在则使用原来的值，如果不存在，则新增或者删除，而且 key 值一般使用的是后台返回的 id,尽量不使用 index 作为 key 值，这可以节省渲染时间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;span v-for=&quot;item in itemList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>    {{ item.title }}</span></span>
<span class="line"><span>  &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="_4-5-v-if-和-v-for-互斥" tabindex="-1">4.5 v-if 和 v-for 互斥 <a class="header-anchor" href="#_4-5-v-if-和-v-for-互斥" aria-label="Permalink to &quot;4.5 v-if 和 v-for 互斥&quot;">​</a></h3><p>永远不要把这两个放在同一个元素上。在 vue2 中，v-for 优先级高于 v-if，所以每次执行循环时都会判断一次是否存在，比较影响性能。而 vue3 中，v-if 优先级高于 v-for,所以一般解决这种问题有两种方案</p><p>1、在 v-for 外层加 v-if 进行判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;p v-if=&quot;showItem&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-for=&quot;item in itemList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>      {{item.title}}</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>2、通过 computed 属性过滤掉不符合条件的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;span v-for=&quot;item in itemList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>    {{item.title}}</span></span>
<span class="line"><span>  &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>computed: {</span></span>
<span class="line"><span>  getLastItemList() {</span></span>
<span class="line"><span>    return this.itemList.filter(item =&gt; item.flag)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-6-多个-attribute-多行显示" tabindex="-1">4.6 多个 attribute 多行显示 <a class="header-anchor" href="#_4-6-多个-attribute-多行显示" aria-label="Permalink to &quot;4.6 多个 attribute 多行显示&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 先写属性，再写方法</span></span>
<span class="line"><span>&lt;show-add-dialog</span></span>
<span class="line"><span>  :title=&quot;title&quot;</span></span>
<span class="line"><span>  :item-list=&quot;itemList&quot;</span></span>
<span class="line"><span>  @get-list=&quot;getList&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&lt;/show-add-dialog&gt;</span></span></code></pre></div><h3 id="_4-7-模板中使用简单的表达式" tabindex="-1">4.7 模板中使用简单的表达式 <a class="header-anchor" href="#_4-7-模板中使用简单的表达式" aria-label="Permalink to &quot;4.7 模板中使用简单的表达式&quot;">​</a></h3><p>在模板中使用简单的表达式，而复杂的表达式尽量用 computed 属性来实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 简单写入</span></span>
<span class="line"><span>&lt;p&gt;{{ num1 + num2 }}&lt;/p&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 使用computed进行计算</span></span>
<span class="line"><span>&lt;span&gt;{{ getLastDate }}&lt;/span&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>computed: {</span></span>
<span class="line"><span>  getLastDate() {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>      new Date(this.time).getFullYear</span></span>
<span class="line"><span>      +</span></span>
<span class="line"><span>      new Date(this.time).getMonth &gt; 10</span></span>
<span class="line"><span>      ?</span></span>
<span class="line"><span>      new Date(this.time).getMonth</span></span>
<span class="line"><span>      :</span></span>
<span class="line"><span>      (new Date(this.time).getMonth+ 1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-8-指令缩写" tabindex="-1">4.8 指令缩写 <a class="header-anchor" href="#_4-8-指令缩写" aria-label="Permalink to &quot;4.8 指令缩写&quot;">​</a></h3><p>用  :  表示  v-bind:</p><p>用  @  表示  v-on:</p><p>用  #  表示  v-slot:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 点击事件</span></span>
<span class="line"><span>&lt;el-button @click=&quot;handleFormSubmit&quot;&gt;&lt;/el-button&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 属性绑定</span></span>
<span class="line"><span>&lt;add-user :show-add-dialog=&quot;showAddDialog&quot;&gt;&lt;/add-user&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// slot</span></span>
<span class="line"><span>&lt;template #menu&gt;&lt;/template&gt;</span></span></code></pre></div><h3 id="_4-9-所有的-input-使用时-需要去除空格" tabindex="-1">4.9 所有的 input 使用时，需要去除空格 <a class="header-anchor" href="#_4-9-所有的-input-使用时-需要去除空格" aria-label="Permalink to &quot;4.9 所有的 input 使用时，需要去除空格&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;el-input v-model.trim=&quot;username&quot;&gt;&lt;/el-input&gt;</span></span></code></pre></div><h3 id="_4-10-三元运算符禁止嵌套使用" tabindex="-1">4.10 三元运算符禁止嵌套使用 <a class="header-anchor" href="#_4-10-三元运算符禁止嵌套使用" aria-label="Permalink to &quot;4.10 三元运算符禁止嵌套使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a = status === 1 ? &quot;未完成&quot; : status === 2 ? &quot;已完成&quot; : &quot;已关闭&quot;</span></span></code></pre></div><h3 id="_4-11-所有的元素有-v-if-判断-则将-v-if-写在最前边" tabindex="-1">4.11 所有的元素有 v-if 判断，则将 v-if 写在最前边 <a class="header-anchor" href="#_4-11-所有的元素有-v-if-判断-则将-v-if-写在最前边" aria-label="Permalink to &quot;4.11 所有的元素有 v-if 判断，则将 v-if 写在最前边&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;el-form-item&gt;</span></span>
<span class="line"><span>  &lt;el-input</span></span>
<span class="line"><span>    v-if=&quot;status === 1&quot;</span></span>
<span class="line"><span>    v-model=&quot;status&quot;</span></span>
<span class="line"><span>    placeholder=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;/el-input&gt;</span></span>
<span class="line"><span>&lt;/el-form-item&gt;</span></span></code></pre></div><h3 id="_4-12-注释说明" tabindex="-1">4.12 注释说明 <a class="header-anchor" href="#_4-12-注释说明" aria-label="Permalink to &quot;4.12 注释说明&quot;">​</a></h3><p>1、公共组件使用说明</p><p>2、api 目录的接口 js 文件必须加注释</p><p>3、store 中的 state、mutation、action 等必须加注释</p><p>4、vue 文件的 methods,每个 method 必须添加注释</p><h3 id="_4-13-其他" tabindex="-1">4.13 其他 <a class="header-anchor" href="#_4-13-其他" aria-label="Permalink to &quot;4.13 其他&quot;">​</a></h3><p>1、尽量不要手动操作 dom</p><p>2、删除无用代码，包括 console.log，已废弃的功能代码</p>`,117),l=[t];function i(o,c,d,r,h,u){return n(),s("div",null,l)}const v=a(e,[["render",i]]);export{b as __pageData,v as default};
