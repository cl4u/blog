import{_ as e,c as t,o as a,a5 as o}from"./chunks/framework.t2hUVk8X.js";const u=JSON.parse('{"title":"git 分支管理","description":"","frontmatter":{},"headers":[],"relativePath":"doc/rule/code/git.md","filePath":"doc/rule/code/git.md","lastUpdated":1709812522000}'),r={name:"doc/rule/code/git.md"},s=o('<h1 id="git-分支管理" tabindex="-1">git 分支管理 <a class="header-anchor" href="#git-分支管理" aria-label="Permalink to &quot;git 分支管理&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">git 日常开发分支介绍:</p><p>dev 分支：开发分支</p><p>保存了开发的最新代码，日常开发都是从这里拉分支</p><p>test 分支：测试分支</p><p>一个版本完成之后，将 dev 代码 merge 到测试分支。如果 dev 开了新的版本，test 分支有 bug，直接在 test 分支进行修改，修改完之后，将代码 merge 到 dev</p><p>master 分支：主分支</p><p>主要用来版本发布,一般不提交代码，只会 merge 其他分支已经测试好的代码</p><p>hotfix 分支：线上 bug 修复分支</p><p>每次修改前，将 master 分支 merger 到该分支，修改完后将代码 merge 到 master 和 dev 上。</p></div>',2),c=[s];function i(d,p,_,l,n,m){return a(),t("div",null,c)}const h=e(r,[["render",i]]);export{u as __pageData,h as default};
