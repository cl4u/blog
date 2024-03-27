import{_ as s,c as n,o as a,a5 as p}from"./chunks/framework.t2hUVk8X.js";const m=JSON.parse('{"title":"开发技巧","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"dev/function/skill/index.md","filePath":"dev/function/skill/index.md","lastUpdated":1709812522000}'),e={name:"dev/function/skill/index.md"},l=p(`<h1 id="开发技巧" tabindex="-1">开发技巧 <a class="header-anchor" href="#开发技巧" aria-label="Permalink to &quot;开发技巧&quot;">​</a></h1><p>该目录包含一些常用的开发技巧，可以方便编写代码以及提升代码质量。</p><h2 id="_1、简写条件判断语句" tabindex="-1">1、简写条件判断语句 <a class="header-anchor" href="#_1、简写条件判断语句" aria-label="Permalink to &quot;1、简写条件判断语句&quot;">​</a></h2><p>如果仅在判断条件为 true 时才执行函数，则可以使用 &amp;&amp; 简写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 普通写法</span></span>
<span class="line"><span>if (condition) {</span></span>
<span class="line"><span>    doSomething();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 简写</span></span>
<span class="line"><span>condition &amp;&amp; doSomething();</span></span></code></pre></div><h2 id="_2、将字符串转换为数字" tabindex="-1">2、将字符串转换为数字 <a class="header-anchor" href="#_2、将字符串转换为数字" aria-label="Permalink to &quot;2、将字符串转换为数字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const str = &#39;404&#39;;</span></span>
<span class="line"><span>console.log(+str) // 404;</span></span></code></pre></div><h2 id="_3、将数字转为字符串" tabindex="-1">3、将数字转为字符串 <a class="header-anchor" href="#_3、将数字转为字符串" aria-label="Permalink to &quot;3、将数字转为字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const myNumber = 403;</span></span>
<span class="line"><span>console.log(myNumber + &#39;&#39;); // &#39;403&#39;</span></span></code></pre></div><h2 id="_4、数组去重" tabindex="-1">4、数组去重 <a class="header-anchor" href="#_4、数组去重" aria-label="Permalink to &quot;4、数组去重&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const1 numbers = [1,1,2,2,3,3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方案一</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  var newArr = [];</span></span>
<span class="line"><span>  for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (newArr.indexOf(arr[i]) === -1) {</span></span>
<span class="line"><span>      newArr.push(arr[i])</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案二</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  var formArr = arr.sort();</span></span>
<span class="line"><span>  var newArr = [formArr[0]];</span></span>
<span class="line"><span>  for (let i = 1; i &lt; formArr.length; i++) {</span></span>
<span class="line"><span>    if (formArr[i] !== formArr[i - 1]) {</span></span>
<span class="line"><span>      newArr.push(formArr[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案三</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  var obj = {};</span></span>
<span class="line"><span>  var newArr = [];</span></span>
<span class="line"><span>  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (!obj[arr[i]]) {</span></span>
<span class="line"><span>      obj[arr[i]] = 1</span></span>
<span class="line"><span>      newArr.push(arr[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案四</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  var newArr = [];</span></span>
<span class="line"><span>  for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (!newArr.includes(arr[i])) {</span></span>
<span class="line"><span>      newArr.push(arr[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案五</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  var newArr = [];</span></span>
<span class="line"><span>  newArr = arr.filter(item =&gt; {</span></span>
<span class="line"><span>    return newArr.includes(item) ? &#39;&#39; : newArr.push(item)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案六，filter+indexOf</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  return arr.filter((item,index) =&gt; arr.indexOf(item,0) === index);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解析：</span></span>
<span class="line"><span>假设数组为: [1,1,2,2,3,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleRemoveRepeat = (arr) =&gt; arr.filter((item,index) =&gt; arr.indexOf(item,0) === index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一次filter循环(当前循环index === 0) 过程： [1,1,2,2,3,3].indexOf(1,0) === 0 // 调节满足，返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二次filter循环(当前循环index === 1) 过程： [1,1,2,2,3,3].indexOf(1,0) === 1 // 调节不满足，不返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第三次filter循环(当前循环index === 2) 过程： [1,1,2,2,3,3].indexOf(2,0) === 2 // 调节满足，返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第四次filter循环(当前循环index === 3) 过程： [1,1,2,2,3,3].indexOf(2,0) === 3 // 调节不满足，不返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 以此类推</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案七,利用Array.from将Set结构转换成数组</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  return Array.from(new Set(arr))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(unique(numbers)) // [1, 2 ,3]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方案八 利用es6扩展运算符</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>  return [...new Set(numbers)]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(unique(numbers)); // [1, 2 ,3]</span></span></code></pre></div><h2 id="_5、使用-includes-进行条件判断" tabindex="-1">5、使用 includes 进行条件判断 <a class="header-anchor" href="#_5、使用-includes-进行条件判断" aria-label="Permalink to &quot;5、使用 includes 进行条件判断&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 普通写法</span></span>
<span class="line"><span>if(type == 1 || type == 2 || type == 3 || type == 4) {</span></span>
<span class="line"><span>    // do something</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// indexOf用法</span></span>
<span class="line"><span>const condition = [1, 2, 3, 4];</span></span>
<span class="line"><span>if (condition.indexOf(type) &gt; -1) {</span></span>
<span class="line"><span>  // do something</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// includes 写法</span></span>
<span class="line"><span>const condition = [1, 2, 3, 4];</span></span>
<span class="line"><span>if (condition.includes(type)) {</span></span>
<span class="line"><span>    // do something</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>includes 和 indexOf 的区别：</p><p>相同点：都是检查是否包含某个值</p><p>不同点：</p><p>indexOf： 方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对 NaN 的误判。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ary = [NaN];</span></span>
<span class="line"><span>console.log(ary.indexOf(NaN)) // -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// includes： 内部使用了Number.isNaN对NaN进行了匹配</span></span>
<span class="line"><span>var ary = [NaN];</span></span>
<span class="line"><span>con  sole.log(ary.includes(NaN)) // true</span></span></code></pre></div><h2 id="_6、数据合并" tabindex="-1">6、数据合并 <a class="header-anchor" href="#_6、数据合并" aria-label="Permalink to &quot;6、数据合并&quot;">​</a></h2><h3 id="_6-1-数组合并" tabindex="-1">6.1 数组合并 <a class="header-anchor" href="#_6-1-数组合并" aria-label="Permalink to &quot;6.1 数组合并&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ES5合并数组用的是concat方法</span></span>
<span class="line"><span>const a = [1, 2, 3];</span></span>
<span class="line"><span>const b = [1, 5, 6];</span></span>
<span class="line"><span>const c = a.concat(b); // [1, 2, 3, 1, 5, 6]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES6合并数组使用的是扩展运算符,并且去重，去重针对的是简单的数据结构。</span></span>
<span class="line"><span>const a = [1, 2, 3];</span></span>
<span class="line"><span>const b = [1, 5, 6];</span></span>
<span class="line"><span>const c = [...new Set([...a,...b])]; // [1, 2, 3, 5, 6]</span></span></code></pre></div><h3 id="_6-2-对象合并" tabindex="-1">6.2 对象合并 <a class="header-anchor" href="#_6-2-对象合并" aria-label="Permalink to &quot;6.2 对象合并&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ES5合并对象用的是Object.assign({},{})</span></span>
<span class="line"><span>const obj1 = { a: 1 }</span></span>
<span class="line"><span>const obj2 = { b: 1 }</span></span>
<span class="line"><span>const obj = Object.assign({}, obj1, obj2); // { a: 1, b: 1 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES6合并对象用扩展运算符</span></span>
<span class="line"><span>...  扩展对象，只能做到当对象属性是 基本数据类型 才是 深拷贝，如果是 引用数据类型并且只有一层时，是深拷贝，如果层级超过一层，那就是浅拷贝</span></span>
<span class="line"><span>const obj1 = { a: 1 }</span></span>
<span class="line"><span>const obj2 = { b: 1 }</span></span>
<span class="line"><span>const obj = {...obj1, ...obj2}; // { a: 1, b: 1 }</span></span></code></pre></div><h2 id="_7、find-和-filter-使用区别" tabindex="-1">7、find 和 filter 使用区别 <a class="header-anchor" href="#_7、find-和-filter-使用区别" aria-label="Permalink to &quot;7、find 和 filter 使用区别&quot;">​</a></h2><h3 id="_7-1-find" tabindex="-1">7.1 find <a class="header-anchor" href="#_7-1-find" aria-label="Permalink to &quot;7.1 find&quot;">​</a></h3><p>只要找到符合条件的第一个就不再执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const list = [</span></span>
<span class="line"><span>  { name: 1, index: 1 },</span></span>
<span class="line"><span>  { name: 2 },</span></span>
<span class="line"><span>  { name: 1, index: 2 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let list2 = list.find(i =&gt; i.name === 1)</span></span>
<span class="line"><span>console.log(list2); // { name: 1, index: 1 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = [</span></span>
<span class="line"><span>  {id: 1, name: &quot;rk&quot;},</span></span>
<span class="line"><span>  {id: 2, name: &quot;rk1&quot;},</span></span>
<span class="line"><span>  {id: 3, name: &quot;rk2&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// 如何去到id=2的name</span></span>
<span class="line"><span>const {name} = arr.find(i =&gt; i.id == 2)</span></span>
<span class="line"><span>console.log(name) // rk1</span></span></code></pre></div><h3 id="_7-2-filter" tabindex="-1">7.2 filter <a class="header-anchor" href="#_7-2-filter" aria-label="Permalink to &quot;7.2 filter&quot;">​</a></h3><p>找到所有符合条件的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const list = [</span></span>
<span class="line"><span>  { name: 1, index: 1 },</span></span>
<span class="line"><span>  { name: 2},</span></span>
<span class="line"><span>  { name: 1 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let list3 = list.filter (i=&gt; i.name === 1)</span></span>
<span class="line"><span>console.log(list3); // [{ name: 1, index: 1 }, { name: 1 }]</span></span></code></pre></div><h2 id="_8、获取对象属性值使用可选链操作" tabindex="-1">8、获取对象属性值使用可选链操作(?.) <a class="header-anchor" href="#_8、获取对象属性值使用可选链操作" aria-label="Permalink to &quot;8、获取对象属性值使用可选链操作(?.)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  age: 23,</span></span>
<span class="line"><span>  favorite: {</span></span>
<span class="line"><span>    sport: &quot;basketball&quot;,</span></span>
<span class="line"><span>    subject: &quot;math&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>普通用法：</span></span>
<span class="line"><span>const sport= obj &amp;&amp; obj.favorite &amp;&amp; obj.favorite.sport;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (res.data &amp;&amp; res.data.length &gt; 0) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES6写法：</span></span>
<span class="line"><span>const sport = obj?.favorite?.sport;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (res.data?.length &gt; 0) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_9、输入框非空验证" tabindex="-1">9、输入框非空验证 <a class="header-anchor" href="#_9、输入框非空验证" aria-label="Permalink to &quot;9、输入框非空验证&quot;">​</a></h2><p>ES6 提供了空值合并运算符??，可以方便进行判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>普通写法：</span></span>
<span class="line"><span>if(value !== null &amp;&amp; value !== undefined &amp;&amp; value !== &#39;&#39;){</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES6空值合并运算符：</span></span>
<span class="line"><span>// ?? 的作用是: 判断值是否是null 或者是 undefined</span></span>
<span class="line"><span>if((value ?? &#39;&#39;) !== &#39;&#39;){</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_10、url-参数转为对象" tabindex="-1">10、url 参数转为对象 <a class="header-anchor" href="#_10、url-参数转为对象" aria-label="Permalink to &quot;10、url 参数转为对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如 &#39;www.baidu.com?a=1&amp;b=2&#39; 转为{ a: 1, b: 2 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const queryString = location.search;</span></span>
<span class="line"><span>const queryParams = new URLSearchParams(queryString);</span></span>
<span class="line"><span>const paramObj = Object.fromEntries(queryParams);</span></span>
<span class="line"><span>console.log(paramObj)  // { a: 1, b: 2 }</span></span></code></pre></div><h2 id="_11、json-对象转为-url-参数" tabindex="-1">11、json 对象转为 url 参数 <a class="header-anchor" href="#_11、json-对象转为-url-参数" aria-label="Permalink to &quot;11、json 对象转为 url 参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将{a:1,b:2}转为a=1&amp;b=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：</span></span>
<span class="line"><span>function jsonToUrlParam(json) {</span></span>
<span class="line"><span>  return Object.keys(json).map(key =&gt; key + &#39;=&#39; + json[key]).join(&#39;&amp;&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let json = { a: 1, b: 2 }</span></span>
<span class="line"><span>console.log(jsonToUrlParam(json)) // a=1&amp;b=2</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案二：</span></span>
<span class="line"><span>// 在实际的应用场景中，一个JSON对象可能有很多属性，但是URL参数只需要部分属性，</span></span>
<span class="line"><span>// 这个时候可以改造一下上面的方法，从而实现忽略指定的属性即可</span></span>
<span class="line"><span>function jsonToUrlParam(json, ignoreFields) {</span></span>
<span class="line"><span>    return Object.keys(json)</span></span>
<span class="line"><span>        .filter(key =&gt; ignoreFields.indexOf(key) === -1)</span></span>
<span class="line"><span>        .map(key =&gt; key + &#39;=&#39; + json[key]).join(&#39;&amp;&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let json = { a: 1, b: 2 }</span></span>
<span class="line"><span>console.log(jsonToUrlParam(json, [&#39;b&#39;])) // a=1</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案三：</span></span>
<span class="line"><span>// URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。</span></span>
<span class="line"><span>function jsonToUrlParam(json) {</span></span>
<span class="line"><span>    return new URLSearchParams(json).toString();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let json = { a: 1, b: 2 }</span></span>
<span class="line"><span>console.log(jsonToUrlParam(json)) // a=1&amp;b=2</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案四：</span></span>
<span class="line"><span>function jsonToUrlParam(obj) {</span></span>
<span class="line"><span>  return Object.entries(obj).map(([key,val]) =&gt; \`\${key}=\${val}\`).join(&quot;&amp;&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let json = { a: 1, b: 2 }</span></span>
<span class="line"><span>console.log(jsonToUrlParam(json)) // a=1&amp;b=2</span></span></code></pre></div><h2 id="_12、对象中传值-键名相同可以简写" tabindex="-1">12、对象中传值，键名相同可以简写 <a class="header-anchor" href="#_12、对象中传值-键名相同可以简写" aria-label="Permalink to &quot;12、对象中传值，键名相同可以简写&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let id = &quot;123&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>普通写法：</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  id: id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可简写：</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  id</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_13、if-else-优化" tabindex="-1">13、if...else 优化 <a class="header-anchor" href="#_13、if-else-优化" aria-label="Permalink to &quot;13、if...else 优化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案一： 使用switch...case</span></span>
<span class="line"><span></span></span>
<span class="line"><span>switch (condition) {</span></span>
<span class="line"><span>  case &#39;value1&#39;:</span></span>
<span class="line"><span>    // do something</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  case &#39;value2&#39;:</span></span>
<span class="line"><span>    // do something else</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    // do default</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案二： 三元运算符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const flag = this.status === 2 ? &quot;已修改&quot; : &quot;未修改&quot;;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>三元运算符尽量不要嵌套使用，因为可读性太差。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案三： 一般项目中像类型、状态这种下拉框数据是写在一个数组中，然后再列表中渲染时，后端一般返回的是值，前端根据值显示对应的文案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let statusList = [</span></span>
<span class="line"><span>  { value: 1, label: &quot;未核验&quot; },</span></span>
<span class="line"><span>  { value: 2, label: &quot;已核验&quot; }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在可以使用以下方式简写：</span></span>
<span class="line"><span>&lt;span&gt;{{ statusList[scope.row.status - 1 ].label }}&lt;/span&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案四： 使用对象键值对简化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let dialogTitle = &quot;&quot;, type = &quot;add&quot;;</span></span>
<span class="line"><span>let typeMap = {</span></span>
<span class="line"><span>  &quot;add&quot;: &quot;新增&quot;,</span></span>
<span class="line"><span>  &quot;edit&quot;: &quot;修改&quot;,</span></span>
<span class="line"><span>  &quot;detail&quot;: &quot;详情&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>dialogTitle  = typeMap[type]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案五： 策略模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let timeMap = {</span></span>
<span class="line"><span>  &quot;day&quot;: (num) =&gt; {</span></span>
<span class="line"><span>    return num + 30;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;month&quot;: (num) =&gt; {</span></span>
<span class="line"><span>    return num + 1</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;year&quot;: (num) =&gt; {</span></span>
<span class="line"><span>    return num + &quot;0.2&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const geResult = (type, num) =&gt; timeMap[type](num)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案六： 其他</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提交form表单时，使用if...else写法：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if （!this.form.username） {</span></span>
<span class="line"><span>  this.$message.warning(&quot;请填写用户名称&quot;);</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>} else if (!this.form.password) {</span></span>
<span class="line"><span>  this.$message.warning(&quot;请填写用户密码&quot;);</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>} else if (!this.form.tel) {</span></span>
<span class="line"><span>  this.$message.warning(&quot;请填写用户联系方式&quot;);</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改后代码如下：</span></span>
<span class="line"><span>const validators = [</span></span>
<span class="line"><span>  {key:&quot;username&quot;, message: &quot;请填写用户名称&quot;, required: true},</span></span>
<span class="line"><span>  {key:&quot;password&quot;, message: &quot;请填写用户密码&quot;, required: true},</span></span>
<span class="line"><span>  {key:&quot;tel&quot;, message: &quot;请填写用户联系方式&quot;, required: true},</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>handleFormSubmit() {</span></span>
<span class="line"><span>  if (this.validator(this.form)) {</span></span>
<span class="line"><span>     return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>validator(arr) {</span></span>
<span class="line"><span>  return validators.some(item =&gt; {</span></span>
<span class="line"><span>    if (item.required &amp;&amp; !arr[item.key]) {</span></span>
<span class="line"><span>      this.$message.warning(item.message);</span></span>
<span class="line"><span>      return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_14、使用高阶函数代替-for-循环" tabindex="-1">14、使用高阶函数代替 for 循环 <a class="header-anchor" href="#_14、使用高阶函数代替-for-循环" aria-label="Permalink to &quot;14、使用高阶函数代替 for 循环&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>取出age是20的所有name放在一个数组中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rl&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 22 },</span></span>
<span class="line"><span>  { name: &quot;rj&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rh&quot;, age: 20 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一般写法：</span></span>
<span class="line"><span>const names = []</span></span>
<span class="line"><span>for (let i = 0, len = arr.length; i &lt; len; i++) {</span></span>
<span class="line"><span>  if (arr[i].age === 20) {</span></span>
<span class="line"><span>    names.push(arr[i].name)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用高阶函数：</span></span>
<span class="line"><span>const names = arr.filter(item =&gt; item.age === 20).map(item =&gt; item.name)</span></span></code></pre></div><h2 id="_15、取整" tabindex="-1">15、取整 <a class="header-anchor" href="#_15、取整" aria-label="Permalink to &quot;15、取整&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 一般写法：</span></span>
<span class="line"><span>let a = 21.369</span></span>
<span class="line"><span>Math.floor(a)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ES6写法：</span></span>
<span class="line"><span>let a = 21.369</span></span>
<span class="line"><span>~~a</span></span></code></pre></div><h2 id="_16、数组求和" tabindex="-1">16、数组求和 <a class="header-anchor" href="#_16、数组求和" aria-label="Permalink to &quot;16、数组求和&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>一般求购物车所有东西之和写法如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let shopList = [</span></span>
<span class="line"><span>  { price: 12, number: 2, id: 1 },</span></span>
<span class="line"><span>  { price: 13, number: 5, id: 2 },</span></span>
<span class="line"><span>  { price: 6, number: 3, id: 3 },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// forEach写法</span></span>
<span class="line"><span>let sum = 0</span></span>
<span class="line"><span>shopList.forEach(item =&gt; {</span></span>
<span class="line"><span>  sum += item.price * item.number</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ES6使用reduce计算：</span></span>
<span class="line"><span>let sum = shopList.reduce(</span></span>
<span class="line"><span>  (res, item) =&gt; (res += item.price * item.number),</span></span>
<span class="line"><span>  0</span></span>
<span class="line"><span>);</span></span></code></pre></div><h2 id="_17、数组循环方法比较" tabindex="-1">17、数组循环方法比较 <a class="header-anchor" href="#_17、数组循环方法比较" aria-label="Permalink to &quot;17、数组循环方法比较&quot;">​</a></h2><p>在 JavaScript 中，for、forEach、map、filter、some 和 every 是用于处理数组的常见方法。它们之间有一些区别和特点：</p><h3 id="_17-1-for-循环" tabindex="-1">17.1 for 循环 <a class="header-anchor" href="#_17-1-for-循环" aria-label="Permalink to &quot;17.1 for 循环&quot;">​</a></h3><p>for 循环：for 循环是一种基本的迭代方法，可以用于遍历数组中的元素。它需要手动编写迭代逻辑，并且在处理数组时需要注意索引的控制。比较灵活，但相对繁琐。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1,2,3,4,5];</span></span>
<span class="line"><span>let brr = [];</span></span>
<span class="line"><span>for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>  if (arr[i] % 2 == 0) {</span></span>
<span class="line"><span>    brr.push(arr[i])</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(brr)  // [2, 4]</span></span></code></pre></div><h3 id="_17-2-foreach-循环" tabindex="-1">17.2 forEach 循环 <a class="header-anchor" href="#_17-2-foreach-循环" aria-label="Permalink to &quot;17.2 forEach 循环&quot;">​</a></h3><p>forEach 是 Array 原型上的一个方法，用于遍历数组中的每个元素，并对其进行操作。它接受一个回调函数作为参数，该函数会被依次应用于数组中的每个元素，但无法改变原始数组。只是遍历，没有返回值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1,2,3,4,5];</span></span>
<span class="line"><span>let brr = [];</span></span>
<span class="line"><span>arr.forEach(item =&gt; {</span></span>
<span class="line"><span>  if (item % 2 == 0) {</span></span>
<span class="line"><span>    brr.push(item)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(brr)  // [2, 4]</span></span></code></pre></div><h3 id="_17-3-map-循环" tabindex="-1">17.3 map 循环 <a class="header-anchor" href="#_17-3-map-循环" aria-label="Permalink to &quot;17.3 map 循环&quot;">​</a></h3><p>map 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，并返回一个新的数组，该数组包含了回调函数的返回值。可以通过 map 将一个数组转化为另一个数组，长度与原数组相同。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 根据if条件进行过滤数据</span></span>
<span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let brr = [];</span></span>
<span class="line"><span>arr.map(item =&gt; {</span></span>
<span class="line"><span>  if (item % 2 == 0) {</span></span>
<span class="line"><span>    brr.push(item)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(brr);  // [2, 4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// brr直接接收arr处理数据，是一个新数组</span></span>
<span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let brr = arr.map(item =&gt; item * 2)</span></span>
<span class="line"><span>console.log(brr)  // [2, 4, 6, 8, 10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 遍历映射关系</span></span>
<span class="line"><span>const source = [1,2,3,4,5]</span></span>
<span class="line"><span>const target = source.map(item =&gt; ({id: item,label:\`label\${item}\`}))</span></span>
<span class="line"><span>console.log(target)</span></span></code></pre></div><h3 id="_17-4-filter-过滤" tabindex="-1">17.4 filter 过滤 <a class="header-anchor" href="#_17-4-filter-过滤" aria-label="Permalink to &quot;17.4 filter 过滤&quot;">​</a></h3><p>filter 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，并返回一个新的数组，该数组只包含满足回调函数条件的元素。用于过滤数组中的元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let brr = arr.filter(item =&gt; item % 2 == 0)</span></span>
<span class="line"><span>console.log(brr)  // [2, 4]</span></span></code></pre></div><h3 id="_17-5-some" tabindex="-1">17.5 some <a class="header-anchor" href="#_17-5-some" aria-label="Permalink to &quot;17.5 some&quot;">​</a></h3><p>some 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，如果有任意一个元素满足回调函数的条件，则返回 true，否则返回 false。用于判断数组中是否存在符合条件的元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let brr = arr.some(item =&gt; item % 2 == 0)</span></span>
<span class="line"><span>console.log(brr)  // true</span></span></code></pre></div><h3 id="_17-6-every" tabindex="-1">17.6 every <a class="header-anchor" href="#_17-6-every" aria-label="Permalink to &quot;17.6 every&quot;">​</a></h3><p>every 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，如果所有元素都满足回调函数的条件，则返回 true，否则返回 false。用于判断数组中的所有元素是否都满足条件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let brr = arr.every(item =&gt; item % 2 == 0)</span></span>
<span class="line"><span>console.log(brr) // false</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">总结</p><p>总结来说，for 循环是一种基本的迭代方法，而 forEach、map、filter、some 和 every 是数组特有的方法，对数组的处理更加方便和简洁。其中，forEach 只是遍历数组，没有返回值；map 方法返回一个新的数组；filter 方法返回满足条件的元素组成的新数组；some 方法判断数组中是否存在符合条件的元素；every 方法判断数组中所有元素是否都满足条件。根据具体需求选择使用不同的方法。</p></div><h2 id="_18、-数组对象表单数据提交时判断其中的每一项都不为空" tabindex="-1">18、 数组对象表单数据提交时判断其中的每一项都不为空 <a class="header-anchor" href="#_18、-数组对象表单数据提交时判断其中的每一项都不为空" aria-label="Permalink to &quot;18、 数组对象表单数据提交时判断其中的每一项都不为空&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如 let list = [{ name:  &quot;xx&quot;, age:  23},{ name: &quot;yy&quot;, age: 23 }],对数组中的name和age进行必填校验，如果有一个为空，则表单不能提交</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 对外层数组进行判断</span></span>
<span class="line"><span>function judgeListComplete(list) {</span></span>
<span class="line"><span>    let isNotComplete = list.findIndex(item =&gt; {</span></span>
<span class="line"><span>      return this.judgeObjectComplete(item) === false</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    if (isNotComplete &gt; -1) {</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>// 对循环数组的每一项进行验证</span></span>
<span class="line"><span>function judgeObjectComplete(ObjectValue) {</span></span>
<span class="line"><span>    let flag = true;</span></span>
<span class="line"><span>    for (let key in ObjectValue) {</span></span>
<span class="line"><span>      if (!ObjectValue[key]){</span></span>
<span class="line"><span>        flag = false</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!flag) {</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let list = [{ name: &quot;xx&quot;, age: 23 },{ name: &quot;yy&quot;, age: 23 }]</span></span>
<span class="line"><span>judgeListComplete(list)  // true</span></span>
<span class="line"><span>let list = [{ name: &quot;xx&quot;, age: 23 },{ name: &quot;&quot;, age: 23 }]</span></span>
<span class="line"><span>judgeListComplete(list)  // false</span></span></code></pre></div><h2 id="_19、-数组对象去重" tabindex="-1">19、 数组对象去重 <a class="header-anchor" href="#_19、-数组对象去重" aria-label="Permalink to &quot;19、 数组对象去重&quot;">​</a></h2><h3 id="_19-1-数组对象合并并且去重" tabindex="-1">19.1 数组对象合并并且去重 <a class="header-anchor" href="#_19-1-数组对象合并并且去重" aria-label="Permalink to &quot;19.1 数组对象合并并且去重&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rl&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 22 },</span></span>
<span class="line"><span>  { name: &quot;rj&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rh&quot;, age: 20 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let arr1 = [{ name: &quot;rk&quot;, age: 23 },{ name: &quot;rj&quot;, age: 24 }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果去重取得是第一个数组中的值，那...arr写在前边，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr2 = [...arr, ...arr1]</span></span>
<span class="line"><span>let d = []</span></span>
<span class="line"><span>let hash = {}</span></span>
<span class="line"><span>d = arr2.reduce((item, next) =&gt; {</span></span>
<span class="line"><span>   hash[next.name] ? &#39;&#39; : hash[next.name] = true &amp;&amp; item.push(next)</span></span>
<span class="line"><span>   return item</span></span>
<span class="line"><span>}, [])</span></span>
<span class="line"><span>console.log(d)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果取第二个数组的值，那么...arr1则再前</span></span>
<span class="line"><span>let arr2 = [...arr1, ...arr]</span></span>
<span class="line"><span>let d = []</span></span>
<span class="line"><span>let hash = {}</span></span>
<span class="line"><span>d = arr2.reduce((item, next) =&gt; {</span></span>
<span class="line"><span>   hash[next.name] ? &#39;&#39; : hash[next.name] = true &amp;&amp; item.push(next)</span></span>
<span class="line"><span>   return item</span></span>
<span class="line"><span>}, [])</span></span>
<span class="line"><span>console.log(d)</span></span></code></pre></div><h3 id="_19-2-数组对象去重" tabindex="-1">19.2 数组对象去重 <a class="header-anchor" href="#_19-2-数组对象去重" aria-label="Permalink to &quot;19.2 数组对象去重&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 前边相同name属性的age会被保留，后边的会被舍弃</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rl&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 22 },</span></span>
<span class="line"><span>  { name: &quot;rl&quot;, age: 23 },</span></span>
<span class="line"><span>  { name: &quot;rh&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 30}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let brr = Array.from(new Set(arr.map((item) =&gt; item.name))).map((name) =&gt;</span></span>
<span class="line"><span>          arr.find((item) =&gt; item.name === name)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>console.log(brr)</span></span></code></pre></div><h2 id="_20、判断对象为空" tabindex="-1">20、判断对象为空 <a class="header-anchor" href="#_20、判断对象为空" aria-label="Permalink to &quot;20、判断对象为空&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1、变成字符串验证</span></span>
<span class="line"><span>JSON.stringify(obj) == &#39;{}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、ES6属性验证</span></span>
<span class="line"><span>Object.keys(obj).length == 0</span></span></code></pre></div><h2 id="_21、判断数组对象中是否存在有重复的值" tabindex="-1">21、判断数组对象中是否存在有重复的值 <a class="header-anchor" href="#_21、判断数组对象中是否存在有重复的值" aria-label="Permalink to &quot;21、判断数组对象中是否存在有重复的值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { time: &quot;2022-05-26&quot;, id: 1, name: &quot;rk&quot; },</span></span>
<span class="line"><span>  { tiem: &quot;2022-05-25&quot;, id: 2, name: &quot;rk&quot; }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const name = arr.map(item =&gt; item.name); // [&quot;rk&quot;, &quot;rk&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 去重操作</span></span>
<span class="line"><span>const nameSet = new Set(name); // { rk }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果数组长度不等于去重之后对象的size，说明数组中是有重复的值</span></span>
<span class="line"><span>if (nameSet.size != name.length) {</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_22、使用-es6-进行对象扁平化" tabindex="-1">22、使用 ES6 进行对象扁平化 <a class="header-anchor" href="#_22、使用-es6-进行对象扁平化" aria-label="Permalink to &quot;22、使用 ES6 进行对象扁平化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var object = {</span></span>
<span class="line"><span>    a: 1,</span></span>
<span class="line"><span>    b: 2,</span></span>
<span class="line"><span>    c: {</span></span>
<span class="line"><span>        aa: 11,</span></span>
<span class="line"><span>        bb: 22</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求的结果是： object = { a: 1, b: 2, aa: 11, bb: 22 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const objFlat = (obj, res = {}) =&gt; {</span></span>
<span class="line"><span>  Object.keys(obj).map((k) =&gt; {</span></span>
<span class="line"><span>    obj[k].constructor === Object</span></span>
<span class="line"><span>      ? objFlat(obj[k], res)</span></span>
<span class="line"><span>      : (res[k] = obj[k]);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  return res;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(objFlat(object)) // { a: 1, b: 2, aa: 11, bb: 22 }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 扩展</span></span>
<span class="line"><span>const object = {</span></span>
<span class="line"><span>    a: 1,</span></span>
<span class="line"><span>    b: 2,</span></span>
<span class="line"><span>    c: {</span></span>
<span class="line"><span>        aa: 11,</span></span>
<span class="line"><span>        bb: 22</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    d: null,</span></span>
<span class="line"><span>    e: [1, 2, 3]</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>function flatObject(source, target = {}) {</span></span>
<span class="line"><span>    Object.entries(source)</span></span>
<span class="line"><span>        .forEach(([k, v]) =&gt; {</span></span>
<span class="line"><span>            if (v &amp;&amp; typeof v === &quot;object&quot; &amp;&amp; !Array.isArray(v)) {</span></span>
<span class="line"><span>                flatObject(v, target);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                target[k] = v;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    return target;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>flatObject(object)</span></span></code></pre></div><h2 id="_23、按照数组对象中的某个属性对数据排序" tabindex="-1">23、按照数组对象中的某个属性对数据排序 <a class="header-anchor" href="#_23、按照数组对象中的某个属性对数据排序" aria-label="Permalink to &quot;23、按照数组对象中的某个属性对数据排序&quot;">​</a></h2><p>对 arr 中的 age 进行排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age:20 },</span></span>
<span class="line"><span>  { name: &quot;rk1&quot;, age:15 },</span></span>
<span class="line"><span>  { name: &quot;rk2&quot;, age:13 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sortByKey(array,key){</span></span>
<span class="line"><span>    return array.sort(function(a,b){</span></span>
<span class="line"><span>        var x = a[key];</span></span>
<span class="line"><span>        var y = b[key];</span></span>
<span class="line"><span>        return((x&lt;y)?-1:((x&gt;y)?1:0));</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sortByKey(arr, age)</span></span></code></pre></div><h2 id="_24、删除-a-数组和-b-数组中重复的数据" tabindex="-1">24、删除 a 数组和 b 数组中重复的数据 <a class="header-anchor" href="#_24、删除-a-数组和-b-数组中重复的数据" aria-label="Permalink to &quot;24、删除 a 数组和 b 数组中重复的数据&quot;">​</a></h2><p>根据某个字段删除两个数组中重复的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr1 = [</span></span>
<span class="line"><span>    { id: 1, name: &quot;qq&quot; },</span></span>
<span class="line"><span>    { id: 2, name: &quot;ww&quot; },</span></span>
<span class="line"><span>    { id: 3, name: &quot;ee&quot; }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr2 = [{ id: 4, name: &quot;rr&quot; },{ id: 2, name: &quot;tt&quot; }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let set = arr2.map(item =&gt; item.id)</span></span>
<span class="line"><span>console.log(set) // [4, 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let resArr = arr1.filter(item =&gt; !set.includes(item.id))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(resArr)</span></span>
<span class="line"><span>// [{ id: 1, name: &#39;qq&#39; },{ id: 3, name: &#39;ee&#39; }]</span></span></code></pre></div><h2 id="_25、es6-判断对象中的-key-是否存在" tabindex="-1">25、ES6 判断对象中的 key 是否存在 <a class="header-anchor" href="#_25、es6-判断对象中的-key-是否存在" aria-label="Permalink to &quot;25、ES6 判断对象中的 key 是否存在&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  age: 23</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断obj中是否有age字段</span></span>
<span class="line"><span>let arr = Object.keys(obj)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// true说明存在，false不存在</span></span>
<span class="line"><span>arr.includes(&quot;age&quot;)  // true</span></span></code></pre></div><h2 id="_26、es6-对对象和数组解构" tabindex="-1">26、ES6 对对象和数组解构 <a class="header-anchor" href="#_26、es6-对对象和数组解构" aria-label="Permalink to &quot;26、ES6 对对象和数组解构&quot;">​</a></h2><h3 id="_26-1-对象解构" tabindex="-1">26.1 对象解构 <a class="header-anchor" href="#_26-1-对象解构" aria-label="Permalink to &quot;26.1 对象解构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let res = {</span></span>
<span class="line"><span>  code: &quot;200&quot;,</span></span>
<span class="line"><span>  data: [</span></span>
<span class="line"><span>    { id: 1, name: &quot;rk&quot;, age: 20 },</span></span>
<span class="line"><span>    { id: 2, name: &quot;rk1&quot;, age: 21 },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  msg: &quot;请求成功&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 普通写法：</span></span>
<span class="line"><span>let code = res.code;</span></span>
<span class="line"><span>let data = res.data;</span></span>
<span class="line"><span>let msg = res.msg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ES6写法：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一般像接口请求回来的数据可以按照这么操作</span></span>
<span class="line"><span>let {code, data, msg} = res || {}</span></span></code></pre></div><h3 id="_26-2-数组解构" tabindex="-1">26.2 数组解构 <a class="header-anchor" href="#_26-2-数组解构" aria-label="Permalink to &quot;26.2 数组解构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;rk&quot;,</span></span>
<span class="line"><span>    age: 20</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  33</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 普通写法</span></span>
<span class="line"><span>let name = arr[0].name;</span></span>
<span class="line"><span>let age = arr[0].age;</span></span>
<span class="line"><span>let number = arr[1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ES6写法:</span></span>
<span class="line"><span>let [{name, age}, number] = arr || []</span></span></code></pre></div><h2 id="_27、find-和-findindex-区别" tabindex="-1">27、find 和 findIndex 区别 <a class="header-anchor" href="#_27、find-和-findindex-区别" aria-label="Permalink to &quot;27、find 和 findIndex 区别&quot;">​</a></h2><h3 id="_27-1-find" tabindex="-1">27.1 find <a class="header-anchor" href="#_27-1-find" aria-label="Permalink to &quot;27.1 find&quot;">​</a></h3><p>find 查找数组中符合条件的第一个元素,查到则不继续往下查找，如果没有符合条件的数组，返回 undefined</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk1&quot;, age: 19 },</span></span>
<span class="line"><span>  { name: &quot;rk2&quot;, age: 28 },</span></span>
<span class="line"><span>  { name: &quot;rk3&quot;, age: 19 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查找到第一个age=19的数据，就不会继续往下查找</span></span>
<span class="line"><span>let obj = arr.find(item =&gt; item.age === 19)</span></span>
<span class="line"><span>console.log(obj) // { name: &#39;rk1&#39;, age: 19 }</span></span></code></pre></div><h3 id="_27-2-findindex" tabindex="-1">27.2 findIndex <a class="header-anchor" href="#_27-2-findindex" aria-label="Permalink to &quot;27.2 findIndex&quot;">​</a></h3><p>findIndex 查找数组中是否符合条件的第一个条件的的元素的下标，如果有则返回下标，并且不继续查找数组，如果没有，返回 -1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk1&quot;, age: 19 },</span></span>
<span class="line"><span>  { name: &quot;rk2&quot;, age: 28 },</span></span>
<span class="line"><span>  { name: &quot;rk3&quot;, age: 19 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查找到第一个age=19的数据，就不会继续往下查找</span></span>
<span class="line"><span>let index= arr.findIndex(item =&gt; item.age === 19)</span></span>
<span class="line"><span>console.log(index)  // 1</span></span></code></pre></div><h2 id="_28、async-和-await-用法" tabindex="-1">28、async 和 await 用法 <a class="header-anchor" href="#_28、async-和-await-用法" aria-label="Permalink to &quot;28、async 和 await 用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>async created () {</span></span>
<span class="line"><span>    const res = await axios.get(&#39;https://xxx.com?id=1&#39;)</span></span>
<span class="line"><span>    console.log(res)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_29、对数组对象中相同名称和年龄的相加-eggs-属性" tabindex="-1">29、对数组对象中相同名称和年龄的相加 eggs 属性 <a class="header-anchor" href="#_29、对数组对象中相同名称和年龄的相加-eggs-属性" aria-label="Permalink to &quot;29、对数组对象中相同名称和年龄的相加 eggs 属性&quot;">​</a></h2><p>数组对象中，如果有相同名称和相同年龄的，将 eggs 属性相加起来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [</span></span>
<span class="line"><span>   { name:&#39;lilei&#39;, age:18, eggs:10 },</span></span>
<span class="line"><span>   { name:&#39;haozi&#39;, age:20, eggs:7 },</span></span>
<span class="line"><span>   { name:&#39;lilei&#39;, age:18, eggs:5 },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一、</span></span>
<span class="line"><span>let res = [];</span></span>
<span class="line"><span>for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    let merged = false;</span></span>
<span class="line"><span>    for (let j = 0; j &lt; res.length; j++) {</span></span>
<span class="line"><span>        if (res[j].name === arr[i].name &amp;&amp; res[j].age === arr[i].age) {</span></span>
<span class="line"><span>            res[j].eggs += arr[i].eggs;</span></span>
<span class="line"><span>            merged = true;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!merged) {</span></span>
<span class="line"><span>        res.push(arr[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(res);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案二、</span></span>
<span class="line"><span>let res = [];</span></span>
<span class="line"><span>arr.forEach(m =&gt; {</span></span>
<span class="line"><span>    let obj = res.find(n =&gt; n.name === m.name &amp;&amp; n.age === m.age);</span></span>
<span class="line"><span>    if (obj) {</span></span>
<span class="line"><span>        obj.eggs += m.eggs;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        res.push(m);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(res);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案三、</span></span>
<span class="line"><span>let res = arr.reduce((acc, cur) =&gt; {</span></span>
<span class="line"><span>    let obj = acc.find(e =&gt; e.name === cur.name &amp;&amp; e.age === cur.age);</span></span>
<span class="line"><span>    if (obj) {</span></span>
<span class="line"><span>        obj.eggs += cur.eggs;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        acc.push(cur);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return acc;</span></span>
<span class="line"><span>}, []);</span></span>
<span class="line"><span>console.log(res);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案四、</span></span>
<span class="line"><span>const record = {}</span></span>
<span class="line"><span>arr.forEach(({ name, age, eggs }) =&gt; {</span></span>
<span class="line"><span>  if (!record[name]) {</span></span>
<span class="line"><span>    record[name] = {}</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const nameRecord = record[name]</span></span>
<span class="line"><span>  if (!nameRecord[age]) {</span></span>
<span class="line"><span>    nameRecord[age] = 0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  nameRecord[age] += eggs</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>record.lilei[&#39;18&#39;] // 15</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案五、</span></span>
<span class="line"><span>function sortSum (arr=[]) {</span></span>
<span class="line"><span>    return arr.reduce((pre, cur) =&gt; {</span></span>
<span class="line"><span>        let key = \`\${cur.name}-\${cur.age}\`;</span></span>
<span class="line"><span>        if (pre[key] !== undefined) {</span></span>
<span class="line"><span>            pre[key] += cur.eggs;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            pre[key] = cur.eggs;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return pre;</span></span>
<span class="line"><span>    }, {});</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sortSum(arr)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案六、</span></span>
<span class="line"><span>var newArr = arr.reduce(</span></span>
<span class="line"><span>        (prev, curr) =&gt; (</span></span>
<span class="line"><span>          !prev.some(</span></span>
<span class="line"><span>            (item) =&gt;</span></span>
<span class="line"><span>              item.name === curr.name &amp;&amp;</span></span>
<span class="line"><span>              item.age === curr.age &amp;&amp;</span></span>
<span class="line"><span>              (item.eggs += curr.eggs)</span></span>
<span class="line"><span>          ) &amp;&amp; prev.push(curr),</span></span>
<span class="line"><span>          prev</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        []</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><h2 id="_30、从对象数组中取出最大值" tabindex="-1">30、从对象数组中取出最大值 <a class="header-anchor" href="#_30、从对象数组中取出最大值" aria-label="Permalink to &quot;30、从对象数组中取出最大值&quot;">​</a></h2><p>从下边数组中取出 flag 是 true，id 最大的 label</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { id: 1, flag: true, label: &quot;较差&quot; },</span></span>
<span class="line"><span>  { id: 2, flag: false, label: &quot;差&quot; },</span></span>
<span class="line"><span>  { id: 3, flag: true, label: &quot;一般&quot; },</span></span>
<span class="line"><span>  { id: 4, flag: true, label: &quot;满意&quot; },</span></span>
<span class="line"><span>  { id: 5, flag: false, label: &quot;十分满意&quot; }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.reduce((prev, cur) =&gt; (cur.flag &amp;&amp; prev.id &lt; cur.id ? cur : prev)).label;</span></span></code></pre></div><h2 id="_31、合并数组-同一个数组内对象合并" tabindex="-1">31、合并数组-同一个数组内对象合并 <a class="header-anchor" href="#_31、合并数组-同一个数组内对象合并" aria-label="Permalink to &quot;31、合并数组-同一个数组内对象合并&quot;">​</a></h2><p>根据数组中相同的某一属性值合并</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let list = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        name:&#39;rk&#39;,</span></span>
<span class="line"><span>        age:22,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        name:&#39;rk&#39;,</span></span>
<span class="line"><span>        sex:&#39;男&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        name:&#39;zq&#39;,</span></span>
<span class="line"><span>        age: 21,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        name:&#39;zq&#39;,</span></span>
<span class="line"><span>        sex:&#39;女&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> 将list根据name合并成如下：</span></span>
<span class="line"><span> list = [</span></span>
<span class="line"><span>          { name: &quot;rk&quot;, age: 22, sex: &quot;男&quot; },</span></span>
<span class="line"><span>          { name: &quot;zq&quot;, age: 21, sex: &quot;女&quot; }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function merge(list) {</span></span>
<span class="line"><span>    return list.reduce((r, it) =&gt; {</span></span>
<span class="line"><span>        const existed = r.find(({ name }) =&gt; it.name == name);</span></span>
<span class="line"><span>        if (existed) {</span></span>
<span class="line"><span>            Object.assign(existed, it);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            r.push({ ...it });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return r;</span></span>
<span class="line"><span>    }, []);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>merge(list)</span></span></code></pre></div><h2 id="_32、合并数组-不同数组之间进行合并" tabindex="-1">32、合并数组-不同数组之间进行合并 <a class="header-anchor" href="#_32、合并数组-不同数组之间进行合并" aria-label="Permalink to &quot;32、合并数组-不同数组之间进行合并&quot;">​</a></h2><p>两个数组根据 id 相同进行合并</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr1 = [</span></span>
<span class="line"><span>  { id: 1, number: 5, },</span></span>
<span class="line"><span>  { id: 2, number: 10, },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>const arr2 = [</span></span>
<span class="line"><span>  { id: 1, label: &quot;较差&quot; },</span></span>
<span class="line"><span>  { id: 1, label: &quot;差&quot; },</span></span>
<span class="line"><span>  { id: 2, label: &quot;较差&quot; },</span></span>
<span class="line"><span>  { id: 2, label: &quot;差&quot; },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr1和arr2根据id合并成如下数组：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>     {id: 1, number: 5, label: &#39;较差&#39;},</span></span>
<span class="line"><span>     {id: 1, number: 5, label: &#39;差&#39;},</span></span>
<span class="line"><span>     {id: 2, number: 10, label: &#39;较差&#39;},</span></span>
<span class="line"><span>     {id: 2, number: 10, label: &#39;差&#39;},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr3 = arr2.map(item =&gt; {</span></span>
<span class="line"><span>    let foundItem = arr1.find(v =&gt; v.id == item.id)</span></span>
<span class="line"><span>    if (foundItem) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...foundItem,</span></span>
<span class="line"><span>            ...item</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return item</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_33、对数组进行分类" tabindex="-1">33、对数组进行分类 <a class="header-anchor" href="#_33、对数组进行分类" aria-label="Permalink to &quot;33、对数组进行分类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { name: &quot;rk&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;rk1&quot;, age: 21 },</span></span>
<span class="line"><span>  { name: &quot;zq&quot;, age: 20 },</span></span>
<span class="line"><span>  { name: &quot;cl&quot;, age: 17 }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数组按照age字段进行分类，要求结果如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  20: [</span></span>
<span class="line"><span>    {name: &quot;rk&quot;, age: 20},</span></span>
<span class="line"><span>    {name: &quot;zq&quot;, age: 20},</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  21: [</span></span>
<span class="line"><span>    {name: &quot;rk1&quot;, age: 21},</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  17: [</span></span>
<span class="line"><span>    {name: &quot;cl&quot;, age: 17}</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：</span></span>
<span class="line"><span>let arr1 = arr.reduce((prev,curr) =&gt; {</span></span>
<span class="line"><span>  let key = curr[&quot;age&quot;];</span></span>
<span class="line"><span>  if (!prev[key]) {</span></span>
<span class="line"><span>    prev[key] = []</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  prev[key].push(curr);</span></span>
<span class="line"><span>  return prev</span></span>
<span class="line"><span>},{})</span></span>
<span class="line"><span>console.log(arr1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：</span></span>
<span class="line"><span>ES6数组提供了一个新的方法来对数组按属性进行分类,目前只是提出方案，还不能正式使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是lodash中提供了groupBy方法可以有效解决该类问题。</span></span>
<span class="line"><span>const arr1 = arr.groupBy(({ age }) =&gt; age)</span></span></code></pre></div><h2 id="_34、深拷贝与浅拷贝" tabindex="-1">34、深拷贝与浅拷贝 <a class="header-anchor" href="#_34、深拷贝与浅拷贝" aria-label="Permalink to &quot;34、深拷贝与浅拷贝&quot;">​</a></h2><p>js 有两种数据类型：基本类型和引用类型</p><p>基本类型数据保存在在栈内存中</p><p>引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中</p><h3 id="_34-1-浅拷贝" tabindex="-1">34.1 浅拷贝 <a class="header-anchor" href="#_34-1-浅拷贝" aria-label="Permalink to &quot;34.1 浅拷贝&quot;">​</a></h3><p>浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝。 如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址，即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。</p><div class="tip custom-block"><p class="custom-block-title">常见的浅拷贝方法：</p><p>1、Object.assign()</p><p>2、concat()</p><p>3、扩展运算符 {...obj1, ...obj2}, [...arr1, ...arr2]</p><p>4、lodash 中的_.clone 方法</p></div><h3 id="_34-2-深拷贝" tabindex="-1">34.2 深拷贝 <a class="header-anchor" href="#_34-2-深拷贝" aria-label="Permalink to &quot;34.2 深拷贝&quot;">​</a></h3><p>深拷贝开辟一个新的栈，两个对象属性完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。</p><div class="tip custom-block"><p class="custom-block-title">常用的深拷贝方法：</p><p>1、jQuery.extend()</p><p>2、lodash 中的_.cloneDeep()</p><p>3、JSON.parse(JSON.stringify())</p><p>4、自己封装</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第三种方法有弊端，会忽略undefined、函数和Symbol</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  type: undefined,</span></span>
<span class="line"><span>  age: Symbol(&quot;yy&quot;),</span></span>
<span class="line"><span>  getMax: function () {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj2 = JSON.parse(JSON.stringify(obj));</span></span>
<span class="line"><span>console.log(obj2) // { name: &quot;rk&quot; }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第四种：自己封装方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function deepClone(obj, hash = new WeakMap()) {</span></span>
<span class="line"><span>  // 如果是null或者undefined我就不进行拷贝操作</span></span>
<span class="line"><span>  if (obj === null) return obj;</span></span>
<span class="line"><span>  if (obj instanceof Date) return new Date(obj);</span></span>
<span class="line"><span>  if (obj instanceof RegExp) return new RegExp(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝</span></span>
<span class="line"><span>  if (typeof obj !== &quot;object&quot;) return obj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 是对象的话就要进行深拷贝</span></span>
<span class="line"><span>  if (hash.get(obj)) return hash.get(obj);</span></span>
<span class="line"><span>  let cloneObj = new obj.constructor();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身</span></span>
<span class="line"><span>  hash.set(obj, cloneObj);</span></span>
<span class="line"><span>  for (let key in obj) {</span></span>
<span class="line"><span>      if (obj.hasOwnProperty(key)) {</span></span>
<span class="line"><span>          // 实现一个递归拷贝</span></span>
<span class="line"><span>          cloneObj[key] = deepClone(obj[key], hash);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return cloneObj;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 举例：</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  type: undefined,</span></span>
<span class="line"><span>  age: Symbol(&quot;yy&quot;),</span></span>
<span class="line"><span>  getMax: function () {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj2 = deepClone(obj);</span></span>
<span class="line"><span>console.log(obj2)</span></span>
<span class="line"><span>// { name: &quot;rk&quot;, getMax: f(), age: Symbol(yy), type: undefined }</span></span></code></pre></div><h2 id="_35、获取时间戳" tabindex="-1">35、获取时间戳 <a class="header-anchor" href="#_35、获取时间戳" aria-label="Permalink to &quot;35、获取时间戳&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案一、</span></span>
<span class="line"><span>let date = new Date().getTime();</span></span>
<span class="line"><span>console.log(date)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二、</span></span>
<span class="line"><span>let date = +new Date;</span></span>
<span class="line"><span>console.log(date)</span></span></code></pre></div><h2 id="_36、媒体查询" tabindex="-1">36、媒体查询 <a class="header-anchor" href="#_36、媒体查询" aria-label="Permalink to &quot;36、媒体查询&quot;">​</a></h2><p>原来通过 max-width 和 min-width 来实现的现在可以通过数学运算符&gt;=、&lt;=来实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案一：</span></span>
<span class="line"><span>@media (max-width: 750px) {}</span></span>
<span class="line"><span>@media (min-width: 375px) and (max-width: 750px) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：</span></span>
<span class="line"><span>@media (width &lt;= 750px) {}</span></span>
<span class="line"><span>@media (375px &lt;= width &lt;= 750px) {}</span></span></code></pre></div><h2 id="_37、分割时间" tabindex="-1">37、分割时间 <a class="header-anchor" href="#_37、分割时间" aria-label="Permalink to &quot;37、分割时间&quot;">​</a></h2><p>一般常见的是将 24 小时按照 30 分钟、60 分钟进行分组，像[00:00-00:30,00:30-01:00...]或者[00:00-01:00,01:00-02:00...]这种进行分组，但是还有其他情况，比如按照 15 分钟进行分组，[00:00-00:15,00:15-00:30...]等</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>需要注意的是，如果时间跨度无法被整除，那么生成的时间区间可能无法完全覆盖 24 小时。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// time是要分割的时间，比如 15、30、60等</span></span>
<span class="line"><span>function generateTimes(time) {</span></span>
<span class="line"><span>    let size = Math.floor((24 * 60) / time);</span></span>
<span class="line"><span>    let timeArrays = new Array(size).fill(&quot;&quot;).map((item, index) =&gt; {</span></span>
<span class="line"><span>      let startVal = index * time;</span></span>
<span class="line"><span>      let endVal = (index + 1) * time;</span></span>
<span class="line"><span>      let startHour = Math.floor(startVal / 60);</span></span>
<span class="line"><span>      let startMinute = startVal % 60;</span></span>
<span class="line"><span>      let endHour = Math.floor(endVal / 60);</span></span>
<span class="line"><span>      let endMinute = endVal % 60;</span></span>
<span class="line"><span>      let startTime =</span></span>
<span class="line"><span>        (startHour &lt; 10 ? &quot;0&quot; + startHour : startHour) +</span></span>
<span class="line"><span>        &quot;:&quot; +</span></span>
<span class="line"><span>        (startMinute === 0 ? &quot;00&quot; : startMinute);</span></span>
<span class="line"><span>      let endTime =</span></span>
<span class="line"><span>        (endHour &lt; 10 ? &quot;0&quot; + endHour : endHour) +</span></span>
<span class="line"><span>        &quot;:&quot; +</span></span>
<span class="line"><span>        (endMinute === 0 ? &quot;00&quot; : endMinute);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return startTime + &quot; - &quot; + endTime;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    return timeArrays;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(generateTimes(15));</span></span></code></pre></div><h2 id="_38、取出数组最后一项" tabindex="-1">38、取出数组最后一项 <a class="header-anchor" href="#_38、取出数组最后一项" aria-label="Permalink to &quot;38、取出数组最后一项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1、使用数组的length-1取值</span></span>
<span class="line"><span>let last = arr[arr.length - 1]; // 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、使用slice方法获取,slice方法获取到的数据是一个数组</span></span>
<span class="line"><span>let last = arr.slice(-1)[0]; // 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、使用slice + 解构赋值取值;</span></span>
<span class="line"><span>let [last] = arr.slice(-1); // 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、使用at方法获取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>  at 方法传递索引为正时从左往右定位（这与直接通过下标访问的作用一致），索引为负时</span></span>
<span class="line"><span>  从右往左定位。在访问数组最后一个元素的场景中非常好用。从 Chrome 92 开始已经支持</span></span>
<span class="line"><span>  at 方法，core-js 也提供了 polyfill。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let last = arr.at(-1); // 5</span></span></code></pre></div><h2 id="_39、检查对象中是否有某个属性" tabindex="-1">39、检查对象中是否有某个属性 <a class="header-anchor" href="#_39、检查对象中是否有某个属性" aria-label="Permalink to &quot;39、检查对象中是否有某个属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、可以使用 in 关键字检查对象中是否存在某个属性：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj = { name: &quot;rk&quot;, age: 30 };</span></span>
<span class="line"><span>console.log(&quot;sex&quot; in obj) // false</span></span>
<span class="line"><span>console.log(&quot;age&quot; in obj) // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 但是 in 关键字其实并不安全，会把原型上的属性也包括进去，例如：</span></span>
<span class="line"><span>console.log(&quot;toString&quot; in {}); // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、使用Object.prototype.hasOwnProperty.call()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.prototype.hasOwnProperty.call(obj , &quot;age&quot;); // true</span></span>
<span class="line"><span>Object.prototype.hasOwnProperty.call(obj , &quot;sex&quot;); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、使用Object.hasOwn()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 需要注意这个语法存在兼容性问题（Chrome &gt; 92），不过只要正确配置 polyfill，就可以放心使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.hasOwn(obj, &quot;age&quot;)； // true</span></span>
<span class="line"><span>Object.hasOwn(obj, &quot;sex&quot;); // false</span></span></code></pre></div><h2 id="_40、将数组或者-map-转为对象" tabindex="-1">40、将数组或者 Map 转为对象 <a class="header-anchor" href="#_40、将数组或者-map-转为对象" aria-label="Permalink to &quot;40、将数组或者 Map 转为对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、数组转为对象</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [&quot;name&quot;, &quot;rk&quot;],</span></span>
<span class="line"><span>  [&quot;age&quot;, 30]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let obj = Object.fromEntries(arr);</span></span>
<span class="line"><span>console.og(obj);  // { name: &quot;rk&quot;, age: 30};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、将Map转为对象</span></span>
<span class="line"><span>let arr = new Map([</span></span>
<span class="line"><span>  [&quot;name&quot;, &quot;rk&quot;],</span></span>
<span class="line"><span>  [&quot;age&quot;, 30]</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>let obj = Object.fromEntries(arr);</span></span>
<span class="line"><span>console.og(obj);  // { name: &quot;rk&quot;, age: 30};</span></span></code></pre></div><h2 id="_41、es6-将对象转为数组" tabindex="-1">41、ES6 将对象转为数组 <a class="header-anchor" href="#_41、es6-将对象转为数组" aria-label="Permalink to &quot;41、ES6 将对象转为数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = { name: &quot;rk&quot;, age: 30};</span></span>
<span class="line"><span>let arr = Object.entries(obj);</span></span>
<span class="line"><span>console.log(arr); // [[&quot;name&quot;, &quot;rk&quot;], [&quot;age&quot;, 30]]</span></span></code></pre></div><h2 id="_42、js-判断两个对象是否相等" tabindex="-1">42、js 判断两个对象是否相等 <a class="header-anchor" href="#_42、js-判断两个对象是否相等" aria-label="Permalink to &quot;42、js 判断两个对象是否相等&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj1 = {</span></span>
<span class="line"><span>  name: &quot;rk&quot;,</span></span>
<span class="line"><span>  age: 33,</span></span>
<span class="line"><span>  sex: &quot;男&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj2 = {</span></span>
<span class="line"><span>  name: &quot;rk1&quot;,</span></span>
<span class="line"><span>  age: 33,</span></span>
<span class="line"><span>  sex: &quot;男&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法1 -&gt; 如果两个对象中的属性名和属性值相同，但是顺序不同，会判定为true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isObjectValueEqual (a, b) {</span></span>
<span class="line"><span>    // 取对象a和b的属性名</span></span>
<span class="line"><span>    var aProps = Object.getOwnPropertyNames(a);</span></span>
<span class="line"><span>    var bProps = Object.getOwnPropertyNames(b);</span></span>
<span class="line"><span>    // 判断属性名的length是否一致</span></span>
<span class="line"><span>    if (aProps.length != bProps.length) {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 循环取出属性名，再判断属性值是否一致</span></span>
<span class="line"><span>    for (var i = 0; i &lt; aProps.length; i++) {</span></span>
<span class="line"><span>        var propName = aProps[i];</span></span>
<span class="line"><span>        if (a[propName] !== b[propName]) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(isObjectValueEqual(obj1,obj2)) // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法2 -&gt; 如果两个对象中的属性顺序不一样，则会判定为false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const isEqual = (...objects) =&gt; objects.every((obj) =&gt;</span></span>
<span class="line"><span>  JSON.stringify(obj) === JSON.stringify(objects[0]));</span></span></code></pre></div><h2 id="_43、es6-将对象数组转为对象" tabindex="-1">43、ES6 将对象数组转为对象 <a class="header-anchor" href="#_43、es6-将对象数组转为对象" aria-label="Permalink to &quot;43、ES6 将对象数组转为对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如何将以下对象数组转为对象？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {name: &quot;rk&quot;, age: 33},</span></span>
<span class="line"><span>  {name: &quot;cl&quot;, age: 30}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>转为</span></span>
<span class="line"><span>{rk: 33, cl: 30}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = Object.fromEntries(</span></span>
<span class="line"><span>    arr.map(({ name, age }) =&gt; [name, age])</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>console.log(result) // {cl: 30, rk: 33}</span></span></code></pre></div><h2 id="_44、数组取交集、差集、并集、补集" tabindex="-1">44、数组取交集、差集、并集、补集 <a class="header-anchor" href="#_44、数组取交集、差集、并集、补集" aria-label="Permalink to &quot;44、数组取交集、差集、并集、补集&quot;">​</a></h2><h3 id="_44-1-交集" tabindex="-1">44.1 交集 <a class="header-anchor" href="#_44-1-交集" aria-label="Permalink to &quot;44.1 交集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span>const brr = [4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const crr = [...new Set(arr)].filter(item =&gt; brr.includes(item));</span></span>
<span class="line"><span>console.log(crr); // [4, 5, 6]</span></span></code></pre></div><h3 id="_44-2-差集" tabindex="-1">44.2 差集 <a class="header-anchor" href="#_44-2-差集" aria-label="Permalink to &quot;44.2 差集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span>const brr = [4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一种，arr中的差集</span></span>
<span class="line"><span>const crr = [...new Set(arr)].filter(item =&gt; !brr.includes(item));</span></span>
<span class="line"><span>console.log(crr); // [1, 2, 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种，brr中的差集</span></span>
<span class="line"><span>const crr = [...new Set(brr)].filter(item =&gt; !arr.includes(item));</span></span>
<span class="line"><span>console.log(crr); // [7, 8, 9]</span></span></code></pre></div><h3 id="_44-3-并集" tabindex="-1">44.3 并集 <a class="header-anchor" href="#_44-3-并集" aria-label="Permalink to &quot;44.3 并集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span>const brr = [4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const crr = brr.filter(item =&gt; !arr.includes(item));</span></span>
<span class="line"><span>const drr = [...arr, ...crr];</span></span>
<span class="line"><span>console.log(drr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span></code></pre></div><h3 id="_44-4-补集" tabindex="-1">44.4 补集 <a class="header-anchor" href="#_44-4-补集" aria-label="Permalink to &quot;44.4 补集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span>const brr = [4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 先取出数组交集</span></span>
<span class="line"><span>const crr = [...new Set(arr)].filter(item =&gt; brr.includes(item));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 合并arr和brr数组并去重，过滤掉并集数据</span></span>
<span class="line"><span>const drr = [...new Set([...arr, ...brr])]</span></span>
<span class="line"><span>            .filter(item =&gt; !crr.includes(item));</span></span>
<span class="line"><span>console.log(drr) // [1, 2, 3, 7, 8, 9]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方案二：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const crr = [...new Set([...arr, ...brr])]</span></span>
<span class="line"><span>          .filter(item =&gt; !arr.includes(item) || !brr.includes(item))</span></span>
<span class="line"><span>console.log(drr) // [1, 2, 3, 7, 8, 9]</span></span></code></pre></div><h2 id="_45、数组批量造数据" tabindex="-1">45、数组批量造数据 <a class="header-anchor" href="#_45、数组批量造数据" aria-label="Permalink to &quot;45、数组批量造数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方案一：创建新数组使用 for 循环批量 push 数据</span></span>
<span class="line"><span>let arr = []</span></span>
<span class="line"><span>for(let i = 0; i &lt; 1000; i++) {</span></span>
<span class="line"><span>  arr.push(i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：创建空数组，填充full，然后map</span></span>
<span class="line"><span>function createData() {</span></span>
<span class="line"><span> // 如果不 fill 循环默认会跳过空值</span></span>
<span class="line"><span> return new Array(1000).fill(null).</span></span>
<span class="line"><span>  map((v, i) =&gt; ({ name: \`name\${i + 1}\` }));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const data = createData();</span></span>
<span class="line"><span>console.log(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案三:Array.from 第二个初始化函数返回数据</span></span>
<span class="line"><span>function createData() {</span></span>
<span class="line"><span>  return Array.from({ length: 1000 },</span></span>
<span class="line"><span>         (v, i) =&gt; ({ name: \`name\${i + 1}\` }));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const data = createData();</span></span>
<span class="line"><span>console.log(data);</span></span></code></pre></div><h2 id="_46、foreach-和-map" tabindex="-1">46、forEach 和 map <a class="header-anchor" href="#_46、foreach-和-map" aria-label="Permalink to &quot;46、forEach 和 map&quot;">​</a></h2><p>项目中会经常碰见从后台拿取数据，前端重新整理数据用于渲染等，如 data 是后台获取的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const data = [</span></span>
<span class="line"><span>  {id:1, name: &quot;xx&quot;, age: 23, sex: &quot;男&quot;, hobby: &quot;basketball&quot;},</span></span>
<span class="line"><span>  {id:2, name: &quot;yy&quot;, age: 24, sex: &quot;女&quot;, hobby: &quot;football&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们现在只需要id和age去做其他事情,并且键名不同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：使用forEach</span></span>
<span class="line"><span>let brr = [];</span></span>
<span class="line"><span>let obj = {};</span></span>
<span class="line"><span>data.forEach(item =&gt; {</span></span>
<span class="line"><span>  let obj = {</span></span>
<span class="line"><span>    cId: item.id,</span></span>
<span class="line"><span>    cAge: item.age</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  brr.push(obj)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(brr)</span></span>
<span class="line"><span>// [{cId: 1, cAge: 23},{cId: 2, cAge: 24}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：使用map</span></span>
<span class="line"><span>let brr = [];</span></span>
<span class="line"><span>brr = data.map(item =&gt; ({cId: item.id, cAge: item.age}))</span></span>
<span class="line"><span>console.log(brr);</span></span>
<span class="line"><span>// [{cId: 1, cAge: 23},{cId: 2, cAge: 24}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从以上代码可以看到，两个函数都可以实现，但是使用map比较简洁，减少变量的声明。</span></span></code></pre></div><h2 id="_47、使用数组扁平化处理多维度数据-flat" tabindex="-1">47、使用数组扁平化处理多维度数据--flat <a class="header-anchor" href="#_47、使用数组扁平化处理多维度数据-flat" aria-label="Permalink to &quot;47、使用数组扁平化处理多维度数据--flat&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>项目中常见的情况：将data中的所有children合并成一个数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const data = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: 1,</span></span>
<span class="line"><span>    name: &quot;方案&quot;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {id: &quot;1-1&quot;,name: &quot;方案一&quot;},</span></span>
<span class="line"><span>      {id: &quot;1-2&quot;,name: &quot;方案二&quot;},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: 2,</span></span>
<span class="line"><span>    name: &quot;结果&quot;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {id: &quot;2-1&quot;,name: &quot;结果一&quot;},</span></span>
<span class="line"><span>      {id: &quot;2-2&quot;,name: &quot;结果二&quot;},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：</span></span>
<span class="line"><span>let arr = [];</span></span>
<span class="line"><span>data.forEach(item =&gt; {</span></span>
<span class="line"><span>  item.children.forEach(list =&gt; {</span></span>
<span class="line"><span>    arr.push(list)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(arr)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：</span></span>
<span class="line"><span>let arr = [];</span></span>
<span class="line"><span>arr = data.map(({ children }) =&gt; children).flat();</span></span>
<span class="line"><span>console.log(arr)</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> [</span></span>
<span class="line"><span>    {id: &#39;1-1&#39;, name: &#39;方案一&#39;},</span></span>
<span class="line"><span>    {id: &#39;1-2&#39;, name: &#39;方案二&#39;},</span></span>
<span class="line"><span>    {id: &#39;2-1&#39;, name: &#39;结果一&#39;},</span></span>
<span class="line"><span>    {id: &#39;2-2&#39;, name: &#39;结果二&#39;}</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h2 id="_48、reduce-使用" tabindex="-1">48、reduce 使用 <a class="header-anchor" href="#_48、reduce-使用" aria-label="Permalink to &quot;48、reduce 使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>项目中常见情景：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将</span></span>
<span class="line"><span>const data = [</span></span>
<span class="line"><span>  {name: &quot;陕西-西安&quot;},</span></span>
<span class="line"><span>  {name: &quot;陕西-咸阳&quot;},</span></span>
<span class="line"><span>  {name: &quot;甘肃-兰州&quot;},</span></span>
<span class="line"><span>  {name: &quot;甘肃-庆阳&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>转换为：</span></span>
<span class="line"><span>const arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>     province:&quot;陕西&quot;,</span></span>
<span class="line"><span>     children: [</span></span>
<span class="line"><span>       {city: &quot;西安&quot;},</span></span>
<span class="line"><span>       {city: &quot;咸阳&quot;}</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>     province:&quot;甘肃&quot;,</span></span>
<span class="line"><span>     children: [</span></span>
<span class="line"><span>       {city: &quot;兰州&quot;},</span></span>
<span class="line"><span>       {city: &quot;庆阳&quot;}</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案一：</span></span>
<span class="line"><span>const b = Object</span></span>
<span class="line"><span>    .entries(</span></span>
<span class="line"><span>        data.map(({ name }) =&gt; name.split(&quot;-&quot;))</span></span>
<span class="line"><span>            .reduce((group, [province, city]) =&gt; {</span></span>
<span class="line"><span>                (group[province] ??= []).push({ city });</span></span>
<span class="line"><span>                return group;</span></span>
<span class="line"><span>            }, {})</span></span>
<span class="line"><span>    ).map(([province, children]) =&gt; ({ province, children}));</span></span>
<span class="line"><span>console.log(b)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方案二：</span></span>
<span class="line"><span>const b = data.reduce((res, item) =&gt; {</span></span>
<span class="line"><span>    let [province, city] = item.name.split(&#39;-&#39;)</span></span>
<span class="line"><span>    let parent = res.find(i =&gt; i.province === province)</span></span>
<span class="line"><span>    if (parent) {</span></span>
<span class="line"><span>        parent.children.push({ city })</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        res.push({province: province, children: [{ city }]})</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res</span></span>
<span class="line"><span>}, [])</span></span></code></pre></div><h2 id="_49、数组对象去重-对其他属性进行相加" tabindex="-1">49、数组对象去重-对其他属性进行相加 <a class="header-anchor" href="#_49、数组对象去重-对其他属性进行相加" aria-label="Permalink to &quot;49、数组对象去重-对其他属性进行相加&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {name: &quot;rk&quot;, math: 52, chinese: 36},</span></span>
<span class="line"><span>  {name: &quot;cl&quot;, math: 95, chinese: 97},</span></span>
<span class="line"><span>  {name: &quot;zq&quot;, math: 86, chinese: 81},</span></span>
<span class="line"><span>  {name: &quot;rk&quot;, math: 88, chinese: 94}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对数组对象根据name去重，并且对math和chinese进行相加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.reduce((brr,item) =&gt; {</span></span>
<span class="line"><span>  let res = brr.find(i =&gt; i.name == item.name);</span></span>
<span class="line"><span>  if (res) {</span></span>
<span class="line"><span>    res.math += item.math;</span></span>
<span class="line"><span>    res.chinese += item.chinese;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    brr.push(item)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return brr;</span></span>
<span class="line"><span>},[])</span></span></code></pre></div><h2 id="_50、防抖和节流" tabindex="-1">50、防抖和节流 <a class="header-anchor" href="#_50、防抖和节流" aria-label="Permalink to &quot;50、防抖和节流&quot;">​</a></h2><h3 id="_50-1-防抖" tabindex="-1">50.1 防抖 <a class="header-anchor" href="#_50-1-防抖" aria-label="Permalink to &quot;50.1 防抖&quot;">​</a></h3><p>指定时间内，频繁触发一个事件，以最后一次触发为准</p><div class="tip custom-block"><p class="custom-block-title">常用场景：</p><p>防抖： input 进行输入搜索，用户在不断输入内容时，用防抖来减少请求次数并且节约请求资源</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>*  防抖</span></span>
<span class="line"><span>*  fn 需要防抖的函数</span></span>
<span class="line"><span>*  delay 为定时器时间</span></span>
<span class="line"><span>*  immediate立即执行</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function debounce(fn, delay=1000，immediate = false) {</span></span>
<span class="line"><span>  let timer = null; // 用于保存定时器</span></span>
<span class="line"><span>  return function() {</span></span>
<span class="line"><span>    // 如果timer存在 就清除定时器，重新计时</span></span>
<span class="line"><span>    if (timer) {</span></span>
<span class="line"><span>      clearTimeout(timeout);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //适用于首次需要立刻执行的</span></span>
<span class="line"><span>    if (immediate &amp;&amp; !timer) {</span></span>
<span class="line"><span>      func.apply(this, arguments)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 设置定时器，规定时间后执行真实要执行的函数</span></span>
<span class="line"><span>    timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>      fn.apply(this, arguments);</span></span>
<span class="line"><span>    }, delay)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_50-2-节流" tabindex="-1">50.2 节流 <a class="header-anchor" href="#_50-2-节流" aria-label="Permalink to &quot;50.2 节流&quot;">​</a></h3><p>指定时间内 频繁触发一个事件，只会触发一次</p><div class="tip custom-block"><p class="custom-block-title">常用场景：</p><p>节流：重复点击按钮，1s 之内点击多次，使用节流后，只会触发最后一次。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>*  节流</span></span>
<span class="line"><span>*  fn 需要防抖的函数</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function throttle(fn，delay = 1000) {</span></span>
<span class="line"><span>  let lastTime = 0, timer = null; // 用于保存定时器</span></span>
<span class="line"><span>  return function () {</span></span>
<span class="line"><span>    let _this = this;</span></span>
<span class="line"><span>    let _arguments = arguments;</span></span>
<span class="line"><span>    let now = new Date().getTime()</span></span>
<span class="line"><span>    clearTimeout(timer);</span></span>
<span class="line"><span>    // 判断上次触发的时间和本次触发的时间差是否小于delay,创建一个timer</span></span>
<span class="line"><span>    if (now - lastTime &lt; delay) {</span></span>
<span class="line"><span>      timer = setTimeout(function () {</span></span>
<span class="line"><span>        lastTime = now;</span></span>
<span class="line"><span>        fn.apply(_this, _arguments)</span></span>
<span class="line"><span>      }, delay)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // 否则可以直接执行</span></span>
<span class="line"><span>      lastTime = now;</span></span>
<span class="line"><span>      fn.apply(_this, _arguments);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_51、网页改成灰白色" tabindex="-1">51、网页改成灰白色 <a class="header-anchor" href="#_51、网页改成灰白色" aria-label="Permalink to &quot;51、网页改成灰白色&quot;">​</a></h2><p>在一些特殊的日子，网站需要变成灰白色的时候可以使用以下属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在最外层的容器上添加样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>  filter:grayscale(100%)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_52、判断当前设备是苹果设备" tabindex="-1">52、判断当前设备是苹果设备 <a class="header-anchor" href="#_52、判断当前设备是苹果设备" aria-label="Permalink to &quot;52、判断当前设备是苹果设备&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);</span></span>
<span class="line"><span>console.log(isAppleDevice);</span></span></code></pre></div><h2 id="_53、数组对象取差集" tabindex="-1">53、数组对象取差集 <a class="header-anchor" href="#_53、数组对象取差集" aria-label="Permalink to &quot;53、数组对象取差集&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>从arr中过滤掉brr的数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {name: &quot;rk&quot;, age: 33},</span></span>
<span class="line"><span>  {name: &quot;zl&quot;, age: 30},</span></span>
<span class="line"><span>  {name: &quot;cl&quot;, age: 28},</span></span>
<span class="line"><span>  {name: &quot;zq&quot;, age: 31}</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>let brr = [</span></span>
<span class="line"><span>  {name: &quot;cl&quot;, age:28},</span></span>
<span class="line"><span>  {name: &quot;zl&quot;, age: 30}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法一：</span></span>
<span class="line"><span>let crr = arr.filter(({name}) =&gt; !brr.some(item =&gt; item.name == name))</span></span>
<span class="line"><span>console.log(crr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法二:</span></span>
<span class="line"><span>let crr = arr.filter(({name}) =&gt; brr.every(item =&gt; item.name != name))</span></span>
<span class="line"><span>console.log(crr);</span></span>
<span class="line"><span>// [{name: &#39;rk&#39;, age: 33},{name: &#39;zq&#39;, age: 31}]</span></span></code></pre></div><h2 id="_54、将数组结构转为树形结构" tabindex="-1">54、将数组结构转为树形结构 <a class="header-anchor" href="#_54、将数组结构转为树形结构" aria-label="Permalink to &quot;54、将数组结构转为树形结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [&quot;分类1&quot;,&quot;分类1/目录1&quot;,&quot;分类1/目录2&quot;,&quot;分类2&quot;,&quot;分类2/目录1&quot;,&quot;分类2/目录2&quot;,&quot;分类3&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将arr转为以下结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>brr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    menu: &quot;分类1&quot;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {name: &quot;分类1/目录1&quot;},</span></span>
<span class="line"><span>      {name: &quot;分类1/目录2&quot;}</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    menu: &quot;分类2&quot;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {name: &quot;分类2/目录1&quot;},</span></span>
<span class="line"><span>      {name: &quot;分类2/目录2&quot;}</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    menu: &quot;分类3&quot;,</span></span>
<span class="line"><span>    children: []</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 存放一级目录</span></span>
<span class="line"><span>let arr1 = arr.filter(item =&gt; !item.includes(&quot;/&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 存放二级目录</span></span>
<span class="line"><span>let arr2 = arr.filter(item =&gt; item.includes(&quot;/&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr3 = arr1.map(item =&gt; {</span></span>
<span class="line"><span>  let list = [];</span></span>
<span class="line"><span>  for (let i = 0;i&lt;arr2.length;i++) {</span></span>
<span class="line"><span>    if (arr2[i].includes(item)) {</span></span>
<span class="line"><span>      list.push({name: arr2[i]})</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const obj = {</span></span>
<span class="line"><span>    menu: item,</span></span>
<span class="line"><span>    children: list</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return obj;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(arr3)</span></span></code></pre></div><h2 id="_55、将数组结构转为树形结构" tabindex="-1">55、将数组结构转为树形结构 <a class="header-anchor" href="#_55、将数组结构转为树形结构" aria-label="Permalink to &quot;55、将数组结构转为树形结构&quot;">​</a></h2><p>前提是对象中的属性都是对象或者数组才可以用下边的方法进行合并</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj1 = {</span></span>
<span class="line"><span>  love:[&quot;math&quot;,&quot;chinese&quot;],</span></span>
<span class="line"><span>  series: {</span></span>
<span class="line"><span>    app: [1,2],</span></span>
<span class="line"><span>    sports: [&quot;swim&quot;,&quot;sing&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj2 = {</span></span>
<span class="line"><span>  love:[&quot;english&quot;],</span></span>
<span class="line"><span>  series: {</span></span>
<span class="line"><span>    app: [4],</span></span>
<span class="line"><span>    sports: [&quot;basketball&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>希望的结果是</span></span>
<span class="line"><span>obj = {</span></span>
<span class="line"><span>  love: [&quot;math&quot;,&quot;chinese&quot;,&quot;english&quot;],</span></span>
<span class="line"><span>  series: {</span></span>
<span class="line"><span>    app: [1,2,4],</span></span>
<span class="line"><span>    sports: [&quot;swim&quot;,&quot;sing&quot;,&quot;basketball&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function merge(target,source) {</span></span>
<span class="line"><span>  return Object.keys(source).reduce((res,k) =&gt; {</span></span>
<span class="line"><span>    res[k] = k in target ? Array.isArray(res[k]) ? [...new Set(source[k].concat(target[k]))] : typeof res[k] == &#39;object&#39; ? merge(res[k],source[k]) : res[k] : source[k]</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>  }, JSON.parse(JSON.stringify(target)));</span></span>
<span class="line"><span>  // 为了不影响目标对象，做一次拷贝</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_56、多维数组排序问题" tabindex="-1">56、多维数组排序问题 <a class="header-anchor" href="#_56、多维数组排序问题" aria-label="Permalink to &quot;56、多维数组排序问题&quot;">​</a></h2><p>假设有无数层数组，需要对其中某个字段进行排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    sort: 6,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        sort: 5,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          {sort: 10,},</span></span>
<span class="line"><span>          {sort: 1}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        sort: 3,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          {sort: 18},</span></span>
<span class="line"><span>          {sort: 4}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    sort: 10,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        sort: 2,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          {sort: 153},</span></span>
<span class="line"><span>          {sort: 3}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        sort: 4,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sortFun(list) {</span></span>
<span class="line"><span>  if (!Array.isArray(list)) {return}</span></span>
<span class="line"><span>  list.forEach(({children}) =&gt; sortFun(children))</span></span>
<span class="line"><span>  list.sort((a,b)=&gt; a.sort - b.sort)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sortFun(arr)</span></span></code></pre></div><h2 id="_57、将多维数组对象中的属性名称进行修改" tabindex="-1">57、将多维数组对象中的属性名称进行修改 <a class="header-anchor" href="#_57、将多维数组对象中的属性名称进行修改" aria-label="Permalink to &quot;57、将多维数组对象中的属性名称进行修改&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;陕西省&#39;,</span></span>
<span class="line"><span>    code: 12,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {name: &#39;西安&#39;,code: 1201,},</span></span>
<span class="line"><span>      {name: &#39;咸阳&#39;,code: 1202,},</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;山东省&#39;,</span></span>
<span class="line"><span>    code: 15,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {name: &#39;青岛&#39;,code: 1501,},</span></span>
<span class="line"><span>      {name: &#39;潍坊&#39;,code: 1506,},</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将arr中所有的name换成label，code替换成value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法1：</span></span>
<span class="line"><span>let s = arr.map(item =&gt; {</span></span>
<span class="line"><span>  let res = {};</span></span>
<span class="line"><span>  res.value = item.code;</span></span>
<span class="line"><span>  res.lable = item.name;</span></span>
<span class="line"><span>  if (item.children) {</span></span>
<span class="line"><span>    res.children = item.children.map(data =&gt; {return {value: data.code,label: data.name}})</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return res;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法2：</span></span>
<span class="line"><span>const TreeDataSource = (arr) =&gt; {</span></span>
<span class="line"><span>  if (!Array.isArray(arr)) {</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let obj = {};</span></span>
<span class="line"><span>  return arr.map((v, i) =&gt; {</span></span>
<span class="line"><span>    obj = {</span></span>
<span class="line"><span>      value: v.code,</span></span>
<span class="line"><span>      lable: v.name,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    if (v.children) {</span></span>
<span class="line"><span>      obj.children = TreeDataSource(v.children);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return obj;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="_58、将数组转化为对象" tabindex="-1">58、将数组转化为对象 <a class="header-anchor" href="#_58、将数组转化为对象" aria-label="Permalink to &quot;58、将数组转化为对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将[&quot;张三&quot;,1,&quot;李四&quot;,5,&quot;王麻子&quot;,6] 转为 {&quot;张三&quot;:1,&quot;李四&quot;:5,&quot;王麻子&quot;:6}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [&quot;张三&quot;,1,&quot;李四&quot;,5,&quot;王麻子&quot;,6];</span></span>
<span class="line"><span>let obj = {};</span></span>
<span class="line"><span>while(arr.length) {</span></span>
<span class="line"><span>  obj[arr.shift()] = arr.shift();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(obj)</span></span></code></pre></div><h2 id="_59、console-log" tabindex="-1">59、console.log <a class="header-anchor" href="#_59、console-log" aria-label="Permalink to &quot;59、console.log&quot;">​</a></h2><p>使用时，可以将参数用大括号括起来，这样就可以看到变量名称和变量值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &quot;rk&quot;,</span></span>
<span class="line"><span>    age: 23</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log({obj})</span></span></code></pre></div><h2 id="_60、删除对象中所有的-null-和-undefined" tabindex="-1">60、删除对象中所有的 null 和 undefined <a class="header-anchor" href="#_60、删除对象中所有的-null-和-undefined" aria-label="Permalink to &quot;60、删除对象中所有的 null 和 undefined&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;xx&quot;,</span></span>
<span class="line"><span>  age: null,</span></span>
<span class="line"><span>  id: undefined,</span></span>
<span class="line"><span>  sex: &quot;男&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法1：</span></span>
<span class="line"><span>const removeNullUndefined = (obj) =&gt;</span></span>
<span class="line"><span>  Object.entries(obj)</span></span>
<span class="line"><span>   .reduce((a, [k, v]) =&gt; (v == null ? a : ((a[k] = v), a)), {});</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方法2:</span></span>
<span class="line"><span>const removeNullUndefined = (obj) =&gt;</span></span>
<span class="line"><span>  Object.entries(obj)</span></span>
<span class="line"><span>  .filter(([_, v]) =&gt; v != null)</span></span>
<span class="line"><span>  .reduce((acc, [k, v]) =&gt; ({ ...acc, [k]: v }), {});</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方法3：</span></span>
<span class="line"><span>const removeNullUndefined = (obj) =&gt;</span></span>
<span class="line"><span>    Object.fromEntries(Object.entries(obj).filter(([_, v]) =&gt; v != null));</span></span>
<span class="line"><span>console.log(removeNullUndefined(obj))</span></span></code></pre></div><h2 id="_61、根据对象的属性对其进行排序" tabindex="-1">61、根据对象的属性对其进行排序 <a class="header-anchor" href="#_61、根据对象的属性对其进行排序" aria-label="Permalink to &quot;61、根据对象的属性对其进行排序&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  name: &quot;xx&quot;,</span></span>
<span class="line"><span>  age:23,</span></span>
<span class="line"><span>  id: 12,</span></span>
<span class="line"><span>  class: 2,</span></span>
<span class="line"><span>  sex: &quot;男&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sorts(obj) {</span></span>
<span class="line"><span>  return Object.keys(obj).sort().reduce((p,c) =&gt; ((p[c] = obj[c]),p),{})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(sorts(obj))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;age&quot;: 23,</span></span>
<span class="line"><span>    &quot;class&quot;: 2,</span></span>
<span class="line"><span>    &quot;id&quot;: 12,</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;xx&quot;,</span></span>
<span class="line"><span>    &quot;sex&quot;: &quot;男&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h2 id="_62、给时间添加-am-pm-后缀" tabindex="-1">62、给时间添加&quot;am/pm&quot;后缀 <a class="header-anchor" href="#_62、给时间添加-am-pm-后缀" aria-label="Permalink to &quot;62、给时间添加&quot;am/pm&quot;后缀&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>h的值是介于0-23之间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function suffixAmPm(h) {</span></span>
<span class="line"><span>  return \`\${h % 12 === 0 ? 12 : h % 12} \${h &lt; 12 ? &quot;am&quot; : &quot;pm&quot;}\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(suffixAmPm(12))</span></span></code></pre></div><h2 id="_63、计算两个日期之间的天数" tabindex="-1">63、计算两个日期之间的天数 <a class="header-anchor" href="#_63、计算两个日期之间的天数" aria-label="Permalink to &quot;63、计算两个日期之间的天数&quot;">​</a></h2><p>计算 2022-11-15 和 2023-03-01 之间的天数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function diffDays(date,otherDate) {</span></span>
<span class="line"><span> return Math.ceil(Math.abs(new Date(date)- new Date(otherDate)) / (1000 * 24*60*60))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(diffDays(&quot;2022-11-15&quot;,&quot;2023-03-01&quot;))</span></span></code></pre></div><h2 id="_64、copywithin-方法使用" tabindex="-1">64、copyWithin()方法使用 <a class="header-anchor" href="#_64、copywithin-方法使用" aria-label="Permalink to &quot;64、copyWithin()方法使用&quot;">​</a></h2><p>copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  第一个参数：从索引3的位置开始粘贴</span></span>
<span class="line"><span>  第二个参数：从索引0的位置开始复制</span></span>
<span class="line"><span>  第三个参数：遇到索引3时停止复制（不包含该位置本身）</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [1, 2, 3, &#39;arr&#39;, 5, 9, 17];</span></span>
<span class="line"><span>arr.copyWithin(3, 0, 3);</span></span>
<span class="line"><span>console.log(arr);//[1,2,3,1,2,3,17]</span></span></code></pre></div><h2 id="_65、css-禁止用户选择" tabindex="-1">65、css 禁止用户选择 <a class="header-anchor" href="#_65、css-禁止用户选择" aria-label="Permalink to &quot;65、css 禁止用户选择&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>body{</span></span>
<span class="line"><span>  -webkit-touch-callout: none;</span></span>
<span class="line"><span>  -webkit-user-select: none;</span></span>
<span class="line"><span>  -khtml-user-select: none;</span></span>
<span class="line"><span>  -moz-user-select: none;</span></span>
<span class="line"><span>  -ms-user-select: none;</span></span>
<span class="line"><span>  user-select: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_66、横向数组和纵向数组之间转换-矩阵交换行和列" tabindex="-1">66、横向数组和纵向数组之间转换(矩阵交换行和列) <a class="header-anchor" href="#_66、横向数组和纵向数组之间转换-矩阵交换行和列" aria-label="Permalink to &quot;66、横向数组和纵向数组之间转换(矩阵交换行和列)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>方法一：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1、横向数组转为纵向数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [&quot;销售（sales）&quot;,&quot;4300&quot;,&quot;5000&quot;,&quot;6000&quot;],</span></span>
<span class="line"><span>  [&quot;管理（Administration）&quot;,&quot;10000&quot;,&quot;14000&quot;,&quot;16000&quot;],</span></span>
<span class="line"><span>  [&quot;信息技术（Information Techology）&quot;,&quot;28000&quot;,&quot;28000&quot;,&quot;30000&quot;],</span></span>
<span class="line"><span>  [&quot;客服（Customer Support）&quot;,&quot;35000&quot;,&quot;31000&quot;,&quot;38000&quot;],</span></span>
<span class="line"><span>  [&quot;研发（Development）&quot;,&quot;50000&quot;,&quot;42000&quot;,&quot;52000&quot;],</span></span>
<span class="line"><span>  [&quot;市场（Marketing）&quot;,&quot;19000&quot;,&quot;21000&quot;,&quot;25000&quot;]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function reverse(arr) {</span></span>
<span class="line"><span>  let list = [];</span></span>
<span class="line"><span>  for (let i = 0;i &lt; arr[0].length;i++) {</span></span>
<span class="line"><span>    list[i] = [];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  for (let i = 0;i &lt; arr.length;i++) {</span></span>
<span class="line"><span>    for (let j = 0;j&lt;arr[i].length;j++) {</span></span>
<span class="line"><span>      list[j][i] = arr[i][j]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return list</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(reverse(arr))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  [&quot;销售（sales）&quot;,&quot;管理（Administration）&quot;,&quot;信息技术（Information Techology）&quot;,&quot;客服（Customer Support）&quot;,&quot;研发（Development）&quot;,&quot;市场（Marketing）&quot;],</span></span>
<span class="line"><span>  [&quot;4300&quot;,&quot;10000&quot;,&quot;28000&quot;,&quot;35000&quot;,&quot;50000&quot;,&quot;19000&quot;],</span></span>
<span class="line"><span>  [&quot;5000&quot;,&quot;14000&quot;,&quot;28000&quot;,&quot;31000&quot;,&quot;42000&quot;,&quot;21000&quot;],</span></span>
<span class="line"><span>  [&quot;6000&quot;,&quot;16000&quot;,&quot;30000&quot;,&quot;38000&quot;,&quot;52000&quot;,&quot;25000&quot;],</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、纵向转为横向</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [2004, 2005, 2006, 2007, 2008],</span></span>
<span class="line"><span>  [46890000, 55900500, 33786400, 57054400, 61834100],</span></span>
<span class="line"><span>  [28440000, 29340700, 15127600, 16771500, 36568800]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function changeArr(arr) {</span></span>
<span class="line"><span>  let maxLength = getMaxLength(arr);</span></span>
<span class="line"><span>  let rowArr=[];</span></span>
<span class="line"><span>  for (let i = 0;i&lt;arr.length;i++) {</span></span>
<span class="line"><span>    for (let j = 0;j&lt;maxLength;j++) {</span></span>
<span class="line"><span>      if (!rowArr[j]) {</span></span>
<span class="line"><span>        rowArr[j] = [];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      rowArr[j].push(arr[i][j]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return rowArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getMaxLength(arr) {</span></span>
<span class="line"><span>    let max = 0;</span></span>
<span class="line"><span>    for (let i = 0;i&lt;arr.length;i++) {</span></span>
<span class="line"><span>      if (arr[i].length &gt; max) {</span></span>
<span class="line"><span>        max = arr[i].length;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return max;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(changeArr(arr))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法二：</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [1,2,3,4,5],</span></span>
<span class="line"><span>  [4,5,6,7,null],</span></span>
<span class="line"><span>  [7,8,9,null,null]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>转为</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  [1,4,7],</span></span>
<span class="line"><span>  [2,5,8],</span></span>
<span class="line"><span>  [3,6,9],</span></span>
<span class="line"><span>  [4,7,null],</span></span>
<span class="line"><span>  [5,null,null]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [1,4,7],</span></span>
<span class="line"><span>  [2,5,8],</span></span>
<span class="line"><span>  [3,6,9],</span></span>
<span class="line"><span>  [4,7,null],</span></span>
<span class="line"><span>  [5,null,null]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>转为</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  [1,2,3,4,5],</span></span>
<span class="line"><span>  [4,5,6,7,null],</span></span>
<span class="line"><span>  [7,8,9,null,null]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const transpose = (matrix) =&gt; matrix[0].map((col, i) =&gt; matrix.map((row) =&gt; row[i] ?? null));</span></span></code></pre></div><h2 id="_67、将数组里面的对象转换为其他键值对" tabindex="-1">67、将数组里面的对象转换为其他键值对 <a class="header-anchor" href="#_67、将数组里面的对象转换为其他键值对" aria-label="Permalink to &quot;67、将数组里面的对象转换为其他键值对&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>转换前:</span></span>
<span class="line"><span>[{入职日期:12,姓名:&quot;rk&quot;,手机号:13266665555,转正日期:17,工号:12345},{...},{...}]</span></span>
<span class="line"><span>转换后:</span></span>
<span class="line"><span>[{timeOfEntry:12,name:&quot;rk&quot;,tel:13266665555,correctionTime:17,workNum:123450},{...}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一种，将中文转换为英文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 罗列映射关系</span></span>
<span class="line"><span>let userRelations = {</span></span>
<span class="line"><span>  &quot;入职日期&quot;: &quot;timeOfEntry&quot;,</span></span>
<span class="line"><span>  &quot;姓名&quot;: &quot;username&quot;,</span></span>
<span class="line"><span>  &quot;手机号&quot;: &quot;mobile&quot;,</span></span>
<span class="line"><span>  &quot;转正日期&quot;: &quot;correctionTime&quot;,</span></span>
<span class="line"><span>  &quot;工号&quot;: &quot;workNumber&quot;,</span></span>
<span class="line"><span>  &quot;部门&quot;: &quot;departmentName&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {&quot;入职日期&quot;:12,&quot;姓名&quot;:&quot;xf&quot;,&quot;手机号&quot;:13266665555,&quot;转正日期&quot;:17,&quot;工号&quot;:45,&quot;部门&quot;:&quot;董事长&quot;},</span></span>
<span class="line"><span>  {&quot;入职日期&quot;:15,&quot;姓名&quot;:&quot;zq&quot;,&quot;手机号&quot;:13266666666,&quot;转正日期&quot;:20,&quot;工号&quot;:46,&quot;部门&quot;:&quot;小秘1&quot;},</span></span>
<span class="line"><span>  {&quot;入职日期&quot;:18,&quot;姓名&quot;:&quot;zj&quot;,&quot;手机号&quot;:13266667777,&quot;转正日期&quot;:23,&quot;工号&quot;:47,&quot;部门&quot;:&quot;小秘2&quot;},</span></span>
<span class="line"><span>  {&quot;入职日期&quot;:21,&quot;姓名&quot;:&quot;cl&quot;,&quot;手机号&quot;:13266668888,&quot;转正日期&quot;:25,&quot;工号&quot;:48,&quot;部门&quot;:&quot;小秘3&quot;},</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二种，将英文转为中文</span></span>
<span class="line"><span>const userRelations = {</span></span>
<span class="line"><span>  timeOfEntry: &#39;入职日期&#39;,</span></span>
<span class="line"><span>  mobile: &#39;手机号&#39;,</span></span>
<span class="line"><span>  username: &#39;姓名&#39;,</span></span>
<span class="line"><span>  correctionTime: &#39;转正日期&#39;,</span></span>
<span class="line"><span>  workNumber: &#39;工号&#39;,</span></span>
<span class="line"><span>  departmentName: &#39;部门&#39;,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {timeOfEntry:12,username:&quot;xf&quot;,mobile:13266665555,correctionTime:17,workNumber:45,departmentName:&quot;董事长&quot;},</span></span>
<span class="line"><span>  {timeOfEntry:15,username:&quot;zq&quot;,mobile:13266666666,correctionTime:20,workNumber:46,departmentName:&quot;小秘1&quot;},</span></span>
<span class="line"><span>  {timeOfEntry:18,username:&quot;zj&quot;,mobile:13266667777,correctionTime:23,workNumber:47,departmentName:&quot;小秘2&quot;},</span></span>
<span class="line"><span>  {timeOfEntry:21,username:&quot;cl&quot;,mobile:13266668888,correctionTime:25,workNumber:48,departmentName:&quot;小秘3&quot;},</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 此方法可共用</span></span>
<span class="line"><span>function demandArr(userRelations,arr) {</span></span>
<span class="line"><span>  let list = [];</span></span>
<span class="line"><span>  arr.forEach(item =&gt; {</span></span>
<span class="line"><span>    let obj = {};</span></span>
<span class="line"><span>    for (let i in item) {</span></span>
<span class="line"><span>      const key = userRelations[i]</span></span>
<span class="line"><span>      obj[key] = item[i]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    list.push(obj)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return list</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>demandArr(userRelations,arr)</span></span></code></pre></div><h2 id="_68、js-精度丢失解决方案" tabindex="-1">68、js 精度丢失解决方案 <a class="header-anchor" href="#_68、js-精度丢失解决方案" aria-label="Permalink to &quot;68、js 精度丢失解决方案&quot;">​</a></h2><p>因为在计算机最底层，数值的运算和操作都是采用二进制实现的，所以计算机没有办法精确表示浮点数，而只能用二进制近似相等的去表示浮点数的小数部分。</p><div class="tip custom-block"><p class="custom-block-title">解决方案</p><p>1、Decimal.js</p><p>2、bignumber.js</p><p>3、big.js</p><p>4、手写代码</p></div><p>以下是手写代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 加法</span></span>
<span class="line"><span>* 0.1 + 0.2 = 0.30000000000000004</span></span>
<span class="line"><span>* 0.7 + 0.1 = 0.7999999999999999</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function plus(num1, num2) {</span></span>
<span class="line"><span>    let r1, r2, m;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        r1 = num1.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>        r1 = 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        r2 = num2.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>        r2 = 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m = Math.pow(10, Math.max(r1, r2))</span></span>
<span class="line"><span>    return (num1 * m + num2 * m) / m</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 减法</span></span>
<span class="line"><span>* 1.5 - 1.2 = 0.30000000000000004</span></span>
<span class="line"><span>* 0.3 - 0.2 = 0.09999999999999998</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function subtract(num1, num2) {</span></span>
<span class="line"><span>    let r1, r2, m, n;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        r1 = num1.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>        r1 = 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        r2 = num2.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>        r2 = 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span>    n = (r1 &gt;= r2) ? r1 : r2;</span></span>
<span class="line"><span>    return +((num1 * m - num2 * m) / m).toFixed(n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 乘法</span></span>
<span class="line"><span>* 1.1 * 100 = 110.00000000000001</span></span>
<span class="line"><span>* 0.8 * 3 = 2.4000000000000004</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function multiply(num1, num2) {</span></span>
<span class="line"><span>    let m = 0,</span></span>
<span class="line"><span>        s1 = num1.toString(),</span></span>
<span class="line"><span>        s2 = num2.toString();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        m += s1.split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {}</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        m += s2.split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {}</span></span>
<span class="line"><span>    return Number(s1.replace(&quot;.&quot;, &quot;&quot;)) * Number(s2.replace(&quot;.&quot;, &quot;&quot;)) / Math.pow(10, m)</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 除法</span></span>
<span class="line"><span>* 0.3 / 0.1 = 2.9999999999999996</span></span>
<span class="line"><span>* 0.69 / 10 = 0.06899999999999999</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function divide(num1, num2) {</span></span>
<span class="line"><span>    let t1 = 0,</span></span>
<span class="line"><span>        t2 = 0,</span></span>
<span class="line"><span>        r1, r2;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        t1 = num1.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {}</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        t2 = num2.toString().split(&quot;.&quot;)[1].length</span></span>
<span class="line"><span>    } catch (e) {}</span></span>
<span class="line"><span>    with(Math) {</span></span>
<span class="line"><span>        r1 = Number(num1.toString().replace(&quot;.&quot;, &quot;&quot;))</span></span>
<span class="line"><span>        r2 = Number(num2.toString().replace(&quot;.&quot;, &quot;&quot;))</span></span>
<span class="line"><span>        // multiply乘法配合一起使用</span></span>
<span class="line"><span>        return multiply((r1 / r2), pow(10, t2 - t1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_69、前端根据多个条件筛选过滤数据" tabindex="-1">69、前端根据多个条件筛选过滤数据 <a class="header-anchor" href="#_69、前端根据多个条件筛选过滤数据" aria-label="Permalink to &quot;69、前端根据多个条件筛选过滤数据&quot;">​</a></h2><p>多条件过滤数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;rk&quot;,</span></span>
<span class="line"><span>    age: 30,</span></span>
<span class="line"><span>    sex: &quot;男&quot;,</span></span>
<span class="line"><span>    hobby: &quot;basketball&quot;,</span></span>
<span class="line"><span>    status: 1</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;zq&quot;,</span></span>
<span class="line"><span>    age:27,</span></span>
<span class="line"><span>    sex: &quot;male&quot;,</span></span>
<span class="line"><span>    hobby: &quot;read&quot;,</span></span>
<span class="line"><span>    status: 2</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function filterHandle(condition,data) {</span></span>
<span class="line"><span>  return data.filter(item =&gt; {</span></span>
<span class="line"><span>    return Object.keys(condition).every(key =&gt; {</span></span>
<span class="line"><span>      return String(item[key]).toLowerCase().includes(</span></span>
<span class="line"><span>        String(condition[key]).trim().toLowerCase()</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let condition = {name: &quot;rk&quot;,age: &quot;&quot;}</span></span>
<span class="line"><span>filterHandle(condition,arr)</span></span></code></pre></div><h2 id="_70、获取每个月最后一天" tabindex="-1">70、获取每个月最后一天 <a class="header-anchor" href="#_70、获取每个月最后一天" aria-label="Permalink to &quot;70、获取每个月最后一天&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方法1</span></span>
<span class="line"><span>function getLastDay(year,month) {</span></span>
<span class="line"><span>  const isLeap = ((year % 4) == 0) &amp;&amp; (year % 100 != 0)</span></span>
<span class="line"><span>        || ((year % 400) == 0)</span></span>
<span class="line"><span>  const maxDays = [1,3,5,7,8,10,12]</span></span>
<span class="line"><span>  const middleDays = [4,6,9,11]</span></span>
<span class="line"><span>  if (+month == 2) {</span></span>
<span class="line"><span>    if (isLeap) {</span></span>
<span class="line"><span>      return 29</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return 28</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else if (maxDays.includes(month)) {</span></span>
<span class="line"><span>    return 31</span></span>
<span class="line"><span>  } else if (middleDays.includes(month)) {</span></span>
<span class="line"><span>    return 30</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法2</span></span>
<span class="line"><span>function getLastDay(year, month) {</span></span>
<span class="line"><span>  const date = new Date(year, month, 0)</span></span>
<span class="line"><span>  return date.getDate()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_71、树形数据结构转换" tabindex="-1">71、树形数据结构转换 <a class="header-anchor" href="#_71、树形数据结构转换" aria-label="Permalink to &quot;71、树形数据结构转换&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  { id: &quot;a&quot;, pid: &quot;&quot;, name: &quot;总裁办&quot; },</span></span>
<span class="line"><span>  { id: &quot;b&quot;, pid: &quot;&quot;, name: &quot;行政部&quot; },</span></span>
<span class="line"><span>  { id: &quot;c&quot;, pid: &quot;&quot;, name: &quot;财务部&quot; },</span></span>
<span class="line"><span>  { id: &quot;d&quot;, pid: &quot;c&quot;, name: &quot;财务核算部&quot; },</span></span>
<span class="line"><span>  { id: &quot;e&quot;, pid: &quot;c&quot;, name: &quot;税务管理部&quot; },</span></span>
<span class="line"><span>  { id: &quot;f&quot;, pid: &quot;e&quot;, name: &quot;税务管理部-分部&quot; },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function tranListToTree(list) {</span></span>
<span class="line"><span>  const treeList = [],map = {};</span></span>
<span class="line"><span>  list.forEach(item =&gt; {</span></span>
<span class="line"><span>    if (!item.children) {</span></span>
<span class="line"><span>      item.children = []</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    map[item.id] = item</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  list.forEach(item =&gt; {</span></span>
<span class="line"><span>    const parent = map[item.pid]</span></span>
<span class="line"><span>    if (parent) {</span></span>
<span class="line"><span>        parent.children.push(item)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      treeList.push(item)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return treeList</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_72、replace-方法替换变量" tabindex="-1">72、replace 方法替换变量 <a class="header-anchor" href="#_72、replace-方法替换变量" aria-label="Permalink to &quot;72、replace 方法替换变量&quot;">​</a></h2><p>可以通过变量进行全文替换</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 将变量key替换成b</span></span>
<span class="line"><span>string.replace(new RegExp(key,&quot;g&quot;),&quot;b&quot;)</span></span></code></pre></div><h2 id="_73、删除数组中某个指定的元素" tabindex="-1">73、删除数组中某个指定的元素 <a class="header-anchor" href="#_73、删除数组中某个指定的元素" aria-label="Permalink to &quot;73、删除数组中某个指定的元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let value = &#39;b&#39;,arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1、splice删除</span></span>
<span class="line"><span>arr.splice(arr.indexOf(value), 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2、filter删除</span></span>
<span class="line"><span>arr = arr.filter(item =&gt; item != value)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3、for删除</span></span>
<span class="line"><span>let arrLen = arr.length,newArr = []</span></span>
<span class="line"><span>for (let i = 0; i &lt; arrLen; i++) {</span></span>
<span class="line"><span>    if (arr[i] !== value) {</span></span>
<span class="line"><span>        newArr.push(arr[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 4、Set删除</span></span>
<span class="line"><span>let newSet = new Set(arr)</span></span>
<span class="line"><span>newSet.delete(value)</span></span>
<span class="line"><span>let newArr = [...newSet]</span></span></code></pre></div><h2 id="_74、递归替换数组对象字段名称" tabindex="-1">74、递归替换数组对象字段名称 <a class="header-anchor" href="#_74、递归替换数组对象字段名称" aria-label="Permalink to &quot;74、递归替换数组对象字段名称&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: 12,</span></span>
<span class="line"><span>    typeName: &#39;xf&#39;,</span></span>
<span class="line"><span>    enable: 1,</span></span>
<span class="line"><span>    sort: 45,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {id: 115,typeName: &#39;dd&#39;,enable: 1,sort: 49,},</span></span>
<span class="line"><span>      {id: 116,typeName: &#39;ed&#39;,enable: 1,sort: 50,},</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { id: 13, typeName: &#39;xf1&#39;, enable: 2, sort: 46 },</span></span>
<span class="line"><span>  { id: 14, typeName: &#39;xf2&#39;, enable: 1, sort: 47 },</span></span>
<span class="line"><span>  { id: 15, typeName: &#39;xf3&#39;, enable: 2, sort: 48 },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const treeDataSource = (arr) =&gt; {</span></span>
<span class="line"><span>  if (!Array.isArray(arr)) {</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let obj = {}</span></span>
<span class="line"><span>  return arr.map((v, i) =&gt; {</span></span>
<span class="line"><span>    obj = {</span></span>
<span class="line"><span>      key: v.id,</span></span>
<span class="line"><span>      title: v.typeName,</span></span>
<span class="line"><span>      order: v.sort,</span></span>
<span class="line"><span>      isClose: v.enable == 1 ? false : true,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (v.children) {</span></span>
<span class="line"><span>      obj.children = treeDataSource(v.children)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return obj</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(treeDataSource(arr))</span></span></code></pre></div><h2 id="_75、检测数据类型" tabindex="-1">75、检测数据类型 <a class="header-anchor" href="#_75、检测数据类型" aria-label="Permalink to &quot;75、检测数据类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const typeOf = function(obj) {</span></span>
<span class="line"><span>  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_76、手机号脱敏" tabindex="-1">76、手机号脱敏 <a class="header-anchor" href="#_76、手机号脱敏" aria-label="Permalink to &quot;76、手机号脱敏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const hideMobile = (mobile) =&gt; {</span></span>
<span class="line"><span>  return mobile.replace(/^(\\d{3})\\d{4}(\\d{4})$/, &quot;$1****$2&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_77、大小写转换" tabindex="-1">77、大小写转换 <a class="header-anchor" href="#_77、大小写转换" aria-label="Permalink to &quot;77、大小写转换&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* str 待转换的字符串</span></span>
<span class="line"><span>* type 1-全大写 2-全小写 3-首字母大写</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>export const turnCase = (str, type) =&gt; {</span></span>
<span class="line"><span>  switch (type) {</span></span>
<span class="line"><span>    case 1:</span></span>
<span class="line"><span>      return str.toUpperCase()</span></span>
<span class="line"><span>    case 2:</span></span>
<span class="line"><span>      return str.toLowerCase()</span></span>
<span class="line"><span>    case 3:</span></span>
<span class="line"><span>      return str[0].toUpperCase() + str.substring(1).toLowerCase()</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>      return str</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_78、滚动到页面顶部" tabindex="-1">78、滚动到页面顶部 <a class="header-anchor" href="#_78、滚动到页面顶部" aria-label="Permalink to &quot;78、滚动到页面顶部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const scrollToTop = () =&gt; {</span></span>
<span class="line"><span>  const height = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span>  if (height &gt; 0) {</span></span>
<span class="line"><span>    window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span>    window.scrollTo(0, height - height / 8);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_79、滚动到元素位置" tabindex="-1">79、滚动到元素位置 <a class="header-anchor" href="#_79、滚动到元素位置" aria-label="Permalink to &quot;79、滚动到元素位置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const smoothScroll = element =&gt;{</span></span>
<span class="line"><span>    document.querySelector(element).scrollIntoView({</span></span>
<span class="line"><span>        behavior: &#39;smooth&#39;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smoothScroll(&#39;#target&#39;); // 平滑滚动到 ID 为 target 的元素</span></span></code></pre></div><h2 id="_80、滚动到元素位置" tabindex="-1">80、滚动到元素位置 <a class="header-anchor" href="#_80、滚动到元素位置" aria-label="Permalink to &quot;80、滚动到元素位置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* {number} number：要格式化的数字</span></span>
<span class="line"><span>* {number} decimals：保留几位小数</span></span>
<span class="line"><span>* {string} dec_point：小数点符号</span></span>
<span class="line"><span>* {string} thousands_sep：千分位符号</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const moneyFormat = (number, decimals, dec_point, thousands_sep) =&gt; {</span></span>
<span class="line"><span>  number = (number + &#39;&#39;).replace(/[^0-9+-Ee.]/g, &#39;&#39;)</span></span>
<span class="line"><span>  const n = !isFinite(+number) ? 0 : +number</span></span>
<span class="line"><span>  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)</span></span>
<span class="line"><span>  const sep = typeof thousands_sep === &#39;undefined&#39; ? &#39;,&#39; : thousands_sep</span></span>
<span class="line"><span>  const dec = typeof dec_point === &#39;undefined&#39; ? &#39;.&#39; : dec_point</span></span>
<span class="line"><span>  let s = &#39;&#39;</span></span>
<span class="line"><span>  const toFixedFix = function(n, prec) {</span></span>
<span class="line"><span>    const k = Math.pow(10, prec)</span></span>
<span class="line"><span>    return &#39;&#39; + Math.ceil(n * k) / k</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  s = (prec ? toFixedFix(n, prec) : &#39;&#39; + Math.round(n)).split(&#39;.&#39;)</span></span>
<span class="line"><span>  const re = /(-?\\d+)(\\d{3})/</span></span>
<span class="line"><span>  while (re.test(s[0])) {</span></span>
<span class="line"><span>    s[0] = s[0].replace(re, &#39;$1&#39; + sep + &#39;$2&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if ((s[1] || &#39;&#39;).length &lt; prec) {</span></span>
<span class="line"><span>    s[1] = s[1] || &#39;&#39;</span></span>
<span class="line"><span>    s[1] += new Array(prec - s[1].length + 1).join(&#39;0&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return s.join(dec)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>moneyFormat(10000000) // 10,000,000.00</span></span>
<span class="line"><span>moneyFormat(10000000, 3, &#39;.&#39;, &#39;-&#39;) // 10-000-000.000</span></span></code></pre></div><h2 id="_81、模糊搜索" tabindex="-1">81、模糊搜索 <a class="header-anchor" href="#_81、模糊搜索" aria-label="Permalink to &quot;81、模糊搜索&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* list 原数组</span></span>
<span class="line"><span>* keyWord 查询的关键词</span></span>
<span class="line"><span>* attribute 数组需要检索属性</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const fuzzyQuery = (list, keyWord, attribute = &#39;name&#39;) =&gt; {</span></span>
<span class="line"><span>  const reg = new RegExp(keyWord)</span></span>
<span class="line"><span>  const arr = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; list.length; i++) {</span></span>
<span class="line"><span>    if (reg.test(list[i][attribute])) {</span></span>
<span class="line"><span>      arr.push(list[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return arr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const list = [</span></span>
<span class="line"><span>  { id: 1, name: &#39;qa&#39; },</span></span>
<span class="line"><span>  { id: 2, name: &#39;ws&#39; },</span></span>
<span class="line"><span>  { id: 3, name: &#39;ed&#39; },</span></span>
<span class="line"><span>  { id: 4, name: &#39;rf&#39; },</span></span>
<span class="line"><span>  { id: 5, name: &#39;tg&#39; },</span></span>
<span class="line"><span>  { id: 6, name: &#39;az&#39; },</span></span>
<span class="line"><span>  { id: 7, name: &#39;sx&#39; },</span></span>
<span class="line"><span>  { id: 8, name: &#39;dc&#39;},</span></span>
<span class="line"><span>  { id: 9, name: &#39;fv&#39;},</span></span>
<span class="line"><span>  { id: 10, name: &#39;gb&#39;},</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>fuzzyQuery(list, &#39;f&#39;, &#39;name&#39;)</span></span></code></pre></div><h2 id="_82、复制文本" tabindex="-1">82、复制文本 <a class="header-anchor" href="#_82、复制文本" aria-label="Permalink to &quot;82、复制文本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const copyText = (text) =&gt; {</span></span>
<span class="line"><span>  // clipboardData 在页面上将需要的东西复制到剪贴板上</span></span>
<span class="line"><span>  const clipboardData = window.clipboardData</span></span>
<span class="line"><span>  if (clipboardData) {</span></span>
<span class="line"><span>    clipboardData.clearData()</span></span>
<span class="line"><span>    clipboardData.setData(&#39;Text&#39;, text)</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  } else if (document.execCommand) {  // 注意 document.execCommand 已弃用 但是有些浏览器依旧支持 用的时候记得看兼容情况</span></span>
<span class="line"><span>    // 通过创建 dom 元素，去把要复制的内容拿到</span></span>
<span class="line"><span>    const el = document.createElement(&#39;textarea&#39;)</span></span>
<span class="line"><span>    el.value = text</span></span>
<span class="line"><span>    el.setAttribute(&#39;readonly&#39;, &#39;&#39;)</span></span>
<span class="line"><span>    el.style.position = &#39;absolute&#39;</span></span>
<span class="line"><span>    el.style.left = &#39;-9999px&#39;</span></span>
<span class="line"><span>    document.body.appendChild(el)</span></span>
<span class="line"><span>    el.select()</span></span>
<span class="line"><span>    // 拷贝当前内容到剪贴板</span></span>
<span class="line"><span>    document.execCommand(&#39;copy&#39;)</span></span>
<span class="line"><span>    // 删除 el 节点</span></span>
<span class="line"><span>    document.body.removeChild(el)</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>copyText(&#39;hello!&#39;) // ctrl + v = copyText  | true</span></span></code></pre></div><h2 id="_83、js-如何判断-a-数组的-value-和-b-数组的-key-是否相同-组成新数组" tabindex="-1">83、js 如何判断 a 数组的 value 和 b 数组的 key 是否相同，组成新数组 <a class="header-anchor" href="#_83、js-如何判断-a-数组的-value-和-b-数组的-key-是否相同-组成新数组" aria-label="Permalink to &quot;83、js 如何判断 a 数组的 value 和 b 数组的 key 是否相同，组成新数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [</span></span>
<span class="line"><span>  {id:1, key: &#39;key1&#39;, value: &#39;rk&#39;},</span></span>
<span class="line"><span>  {id:2, key: &#39;key2&#39;, value: &#39;rl&#39;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let brr = [</span></span>
<span class="line"><span>  {id: 3, key1: &#39;rr&#39;},</span></span>
<span class="line"><span>  {id: 4, key2: &#39;cc&#39;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>期望结果</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  {id: 3, key1: &quot;rr&quot;, key: &quot;key1&quot;, value: &quot;rk&quot;},</span></span>
<span class="line"><span>  {id: 4, key2: &quot;cc&quot;, key: &quot;key2&quot;, value: &quot;rl&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const crr = brr.map(item =&gt; {</span></span>
<span class="line"><span>  let obj = arr.find(list =&gt; Object.keys(item).includes(list.key))||{}</span></span>
<span class="line"><span>  return {...obj, ...item}</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_84、根据后台返回数据过滤出需要字段" tabindex="-1">84、根据后台返回数据过滤出需要字段 <a class="header-anchor" href="#_84、根据后台返回数据过滤出需要字段" aria-label="Permalink to &quot;84、根据后台返回数据过滤出需要字段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let detailInfo= {a: 1, b: 2}; // 前端页面定义字段</span></span>
<span class="line"><span>let resObj = {a: 10, b: 20, c: 30}; // 后端接口返回字段</span></span>
<span class="line"><span>Object.keys(detailInfo).forEach(key =&gt; detailInfo[key] = resObj[key]);</span></span></code></pre></div><h2 id="_85、后端参数处理" tabindex="-1">85、后端参数处理 <a class="header-anchor" href="#_85、后端参数处理" aria-label="Permalink to &quot;85、后端参数处理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 前端定义的字段</span></span>
<span class="line"><span>let queryForm = {</span></span>
<span class="line"><span>  date_range:[],</span></span>
<span class="line"><span>  name: &quot;&quot;,</span></span>
<span class="line"><span>  age: &quot;&quot;,</span></span>
<span class="line"><span>  account: &quot;&quot;,</span></span>
<span class="line"><span>  companyName: &quot;&quot;,</span></span>
<span class="line"><span>  price: &quot;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 后端需要的字段</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  start_date: &quot;&quot;,</span></span>
<span class="line"><span>  end_date: &quot;&quot;,</span></span>
<span class="line"><span>  name: &quot;&quot;,</span></span>
<span class="line"><span>  age: &quot;&quot;,</span></span>
<span class="line"><span>  account: &quot;&quot;,</span></span>
<span class="line"><span>  companyName: &quot;&quot;,</span></span>
<span class="line"><span>  price: &quot;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法一：</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>  ...queryForm,</span></span>
<span class="line"><span>  start_date: queryForm.date_range?.split(0),</span></span>
<span class="line"><span>  end_date:queryForm.date_range?.split(1),</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>delete obj.date_range</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法二：</span></span>
<span class="line"><span>const {date_range,...params} = queryForm;</span></span>
<span class="line"><span>params.start_date = date_range?.[0];</span></span>
<span class="line"><span>params.end_date= date_range?.[1];</span></span></code></pre></div><h2 id="_86、定时器中使用-once-代替-destory" tabindex="-1">86、定时器中使用$once 代替 destory <a class="header-anchor" href="#_86、定时器中使用-once-代替-destory" aria-label="Permalink to &quot;86、定时器中使用$once 代替 destory&quot;">​</a></h2><p>如果项目中使用定时器，一般会在 data 下设置一个变量，在 created 或者 mounted 中定义定时器，在 beforeDestroy 中销毁定时器。这种方式有个弊端是设置了一个全局变量，就多一次设置响应数据，消耗性能，可以使用$once 代替</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>data() {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    timer: null</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>created() {</span></span>
<span class="line"><span>  this.timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },100)</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>beforeDestroy() {</span></span>
<span class="line"><span>  clearInterval(this.timer);</span></span>
<span class="line"><span>  this.timer = null;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用$once</span></span>
<span class="line"><span>created() {</span></span>
<span class="line"><span> let timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  }, 100);</span></span>
<span class="line"><span>  this.$once(&quot;hook:beforeDestroy&quot;,() =&gt; {</span></span>
<span class="line"><span>    clearInterval(timer);</span></span>
<span class="line"><span>    timer = null;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,289),i=[l];function t(c,o,r,u,d,h){return a(),n("div",null,i)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};