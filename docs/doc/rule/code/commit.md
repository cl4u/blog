---
outline: deep
---

# 代码提交规范

## 1、基本信息

git commit 规范不仅可以帮助开发人员日后根据提交类型和内容找到之前的代码，而且让提交的代码更加规范。

```
commit 的类型：
  feat: feature缩写，用户相关的新功能，构建脚本功能除外
  fix: 修改 bug
  perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
  refactor: 为了可读性或者性能，在不改变原有功能的前提下做的修改
  docs: 文档的变更
  style: 代码格式修改, 注意不是 css 修改（例如分号修改）
  conflict: 修复代码冲突,
  font: 字体文件更新,
  test: 增加或重构了测试代码，但没有增加产品代码
  build: 影响项目构建或依赖项修改
  revert: 恢复上一次提交
  ci: 持续集成相关文件修改
  chore: 更新构建脚本，但是不会更新产品代码
```

如开发新功能:

```
feat: 用户管理开发
```

bug 修复：

```
fix: 用户管理字段取值容错修改
```

## 2、git-cz 代码提交统一规范配置

### 2.1 安装 husky

```
npm i husky -save-dev
```

### 2.2 创建.husky/目录并指定该目录为 git hooks 所在的目录

```
npm set-script prepare "husky install" && npm run prepare
```

执行该命令后，会看到 package.json 文件中 scripts 对象中新增一条 prepare:"husky install"命令,项目根目录会生成一个.husky 文件夹

::: warning 警告
需要 npm 版本 Version 7.x(npm set-script 命令需要 7.x)，建议 node 版本升级到 16.x
:::

### 2.3 创建预提交脚本

```
npx husky add .husky/pre-commit "npm run lint"
```

执行该命令后，会看到.husky/目录下新增了一个名为 pre-commit 的 shell 脚本。

这样，在之后执行 git commit 命令时会先触发 pre-commit 这个脚本。

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint

```

### 2.4 创建提交校验信息检测脚本，commitlint 进行校验

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

执行该命令后，会看到.husky/目录下新增了一个名为 commit-msg 的 shell 脚本。

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit ""

```

### 2.5 lint-staged 安装配置

lint-staged 用于预提交时要进行代码检查的规范，比如 eslint。

```
npm install --save-dev lint-staged
```

在 package.json 新增 lint-staged 配置

```
"lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix"
    ]
  },
```

### 2.6 commitlint 提交校验安装配置

```
npm i --save-dev @commitlint/config-conventional @commitlint/cli
```

在项目根目录下创建 commitlint.config.js 文件，并设置如下信息

```
module.exports = {
    extends: ["@commitlint/config-conventional"],
};
```

### 2.7 commitzen 适配器

用于命令交互式提交的插件，方便大家进行提交

全局安装 commitzen

```
npm install -g commitizen@4.2.4
```

安装自定义项目提交配置适配器

```
npm install --save-dev cz-customizable@6.3.0
```

package.json 中添加 commitizen 配置，config

```
"config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  },
```

配置 cz-customizable 配置项

在项目根目录创建.cz-config.js 配置文件，文件内容参考如下

```
module.exports = {
 // 可选类型
 types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复一个 bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
    { value: 'conflict', name: 'conflict: 修复代码冲突' },
    { value: 'font', name: 'font: 字体文件更新' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加 feature，也不是修复 bug)' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 增加测试' },
    { value: 'chore', name: 'chore: 构建过程或辅助工具或配置工具修改' },
    { value: 'revert', name: 'revert: 回退' },
    { value: 'build', name: 'build: 影响构建系统或外部依赖项的更改(如:webpack、npm)' }
 ],
 // 交互式消息提示步骤
 messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的 issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
},
// 跳过问题
skipQuestions: ['body', 'footer'],
// subject 文字长度默认是 72
subjectLimit: 72
}
```

### 2.8 增加自定义校验规则到 commitlint 配置

编辑 commitlint.config.js，导入.cz-config.js 中的自定义的规则项

```
const { types } = require("./.cz-config.js")
const typeList = types.map(item => item.value)
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", typeList]
    }
};
```
