# git 分支管理

::: tip git 日常开发分支介绍:
dev 分支：开发分支

保存了开发的最新代码，日常开发都是从这里拉分支

test 分支：测试分支

一个版本完成之后，将 dev 代码 merge 到测试分支。如果 dev 开了新的版本，test 分支有 bug，直接在 test 分支进行修改，修改完之后，将代码 merge 到 dev

master 分支：主分支

主要用来版本发布,一般不提交代码，只会 merge 其他分支已经测试好的代码

hotfix 分支：线上 bug 修复分支

每次修改前，将 master 分支 merger 到该分支，修改完后将代码 merge 到 master 和 dev 上。
:::
