import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.t2hUVk8X.js";const m=JSON.parse('{"title":"api 目录文件介绍","description":"","frontmatter":{},"headers":[],"relativePath":"doc/template/vue2/api.md","filePath":"doc/template/vue2/api.md","lastUpdated":1709812522000}'),e={name:"doc/template/vue2/api.md"},t=p(`<h1 id="api-目录文件介绍" tabindex="-1">api 目录文件介绍 <a class="header-anchor" href="#api-目录文件介绍" aria-label="Permalink to &quot;api 目录文件介绍&quot;">​</a></h1><p>该目录下包含 apiList、index.js 和 statusCode.js 文件。</p><h2 id="apilist" tabindex="-1">apiList <a class="header-anchor" href="#apilist" aria-label="Permalink to &quot;apiList&quot;">​</a></h2><p>此文件夹下包含了所有的 api 接口请求地址，和菜单栏目录进行一一对应，名称和菜单栏目录名称一致，方便查找。</p><p>此外，最外层中的 common.js 中封装了所有的公共请求接口，auth.js 中封装了所有的登录登出等请求接口。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>get 和 post 请求中根据不同请求头部需要特殊设置</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * get传参示例,特殊处理参数放在url后</span></span>
<span class="line"><span> * blob=true,表示是请求文件流接口</span></span>
<span class="line"><span> * urlcode=true，表示要设置请求头部为application/x-www-form-urlencoded</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>export const updateStatus = params =&gt; {</span></span>
<span class="line"><span>	return request.get(&quot;/sale/contractInfo/updateStatus?urlcode=true&quot;, params);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * post传参示例，</span></span>
<span class="line"><span> * isQs:true,表示请求头部是application/x-www-form-urlencoded，数据需要序列化</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>export const creatClientCconfirm = params =&gt; {</span></span>
<span class="line"><span>	return request.post(&quot;/sale/settlement/creatClientCconfirm&quot;, params, { isQs: true });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="index-js" tabindex="-1">index.js <a class="header-anchor" href="#index-js" aria-label="Permalink to &quot;index.js&quot;">​</a></h2><p>该文件对 axios 进行二次封装。</p><p>在请求拦截中处理了 token 携带，</p><p>get 请求中对下载文件流的接口进行请求头部设置，对于请求头部是 application/x-www-form-urlencoded 形式的进行头部设置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (obj.blob == &quot;true&quot;) {</span></span>
<span class="line"><span>	config.responseType = &quot;blob&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (obj.urlencoded) {</span></span>
<span class="line"><span>	config.headers[&quot;Content-Type&quot;] = &quot;application/x-www-form-urlencoded&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>post 请求中对于 application/x-www-form-urlencoded 形式的接口进行数据序列化处理。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (config.isQs) {</span></span>
<span class="line"><span>	config.data = Q.stringify(config.data);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在响应拦截器中对返回的状态码进行不同处理，对请求错误接口进行错误提示。</p><p>如果是文件流格式的数据，则文件名称从后台获取。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (response.headers[&quot;content-disposition&quot;]) {</span></span>
<span class="line"><span>	// 获取后台返回的文件名称</span></span>
<span class="line"><span>	const headerFilename = response.headers[&quot;content-disposition&quot;]</span></span>
<span class="line"><span>	?.split(&quot;;&quot;)[1]</span></span>
<span class="line"><span>	.split(&quot;=&quot;)[1];</span></span>
<span class="line"><span>	data.fileName = decodeURIComponent(headerFilename);</span></span>
<span class="line"><span>	return data;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果是其他类型的数据，则根据不同状态进行处理。</p><p>此外还封装了 get 和 post 请求</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const request = {</span></span>
<span class="line"><span>  get(url, params) {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      service</span></span>
<span class="line"><span>        .get(url, { params })</span></span>
<span class="line"><span>        .then((res) =&gt; {</span></span>
<span class="line"><span>          resolve(res);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .catch((err) =&gt; {</span></span>
<span class="line"><span>          reject(err);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  post(url, params, headerConfig) {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      service</span></span>
<span class="line"><span>        .post(url, params, headerConfig)</span></span>
<span class="line"><span>        .then((res) =&gt; {</span></span>
<span class="line"><span>          resolve(res);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .catch((err) =&gt; {</span></span>
<span class="line"><span>          reject(err);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="statuscode-js" tabindex="-1">statusCode.js <a class="header-anchor" href="#statuscode-js" aria-label="Permalink to &quot;statusCode.js&quot;">​</a></h2><p>该文件下主要是处理不同状态码的，根据状态码值是 0 的进行 return data.data，对于状态码是其他的进行提示或者重定向到登录页等。</p>`,22),l=[t];function i(c,o,r,d,u,h){return n(),a("div",null,l)}const b=s(e,[["render",i]]);export{m as __pageData,b as default};
