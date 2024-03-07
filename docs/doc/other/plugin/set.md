---
outline: deep
---

# vscode 插件配置

为了规范开发，vscode 插件配置信息尽量相同，下面主要罗列常用的配置。

## 1、koroFileHeader

korofileheader 是一款用于在 VSCode 中用于生成文件头部注释和函数注释的插件。根据需要修改了默认设置。

### 1.1 安装 koroFileHeader

在 vscode 插件中搜索 koroFileHeader 进行安装

### 1.2 配置

vscode 左下角找到设置，然后输入 fileheader

文件头部注释：Fileheader:custom Made

```javascript
/**
 * @desc: 基本样式定义
 * @auth: rk
 * @date: 2022-05-31
 * @LastEditors: rk
 * @LastEditTime: 2023-06-30 16:25:40
 */
```

函数注释：Fileheader:cursor Mode

```javascript
/**
 * @brief:
 * @param[in] NotifyClass
 * @param[in] NotifyID
 * @return
 */
```

## 2、prettier

### 2.1 安装 prettier

在 vscode 插件中搜索 prettier 进行安装

### 2.2 配置 prettier

vscode 左下角找到设置，然后输入 prettier

::: tip 具体配置如下：

prettier: Print Width: 80

prettier: Semi 选择在所有代码语句的末尾添加分号

prettier: Tab Width: 2

Editor: Default Formatter 选择 Prettier - Code formatter
:::

## 3、eslint

### 3.1 安装 eslint

在 vscode 插件中搜索 eslint 进行安装

### 3.2 eslint 配置

在.eslintrc.js 文件中定义 rule 进行配置

```javascript

rule: {
    // 禁止变量名出现下划线
    "no-underscore-dangle": "off",
    // 使用双引号
    quotes: ["warn", "double"],
    // @fixable 禁止出现多余的分号
    "no-extra-semi": "warn",
    // 禁止在函数参数中出现重复名称的参数
    "no-dupe-args": "error",
    // 禁止在对象字面量中出现重复名称的键名
    "no-dupe-keys": "error",
    // 禁止使用保留字作为变量名
    "no-shadow-restricted-names": "error",
    // 禁止重复定义变量
    "no-redeclare": "error",
    // 禁止使用未定义的变量
    "no-undef": [
      "error",
      {
        typeof: false,
      },
    ],
    // 定义过的变量必须使用
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        caughtErrors: "none",
        ignoreRestSiblings: true,
      },
    ],
    // 变量必须先定义后使用
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    // 禁止对使用 const 定义的常量重新赋值
    "no-const-assign": "warn",
    // 禁止重复定义类
    "no-dupe-class-members": "error",
    // 禁止重复 import 模块
    "no-duplicate-imports": "error",
    // 禁止对定义过的 class 重新赋值
    "no-class-assign": "error",
    // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],
    // 禁止连续赋值，比如 a = b = c = 5
    "no-multi-assign": "warn",
    // 禁止使用 console
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // @fixable 禁止使用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-unused-components": "off", // 当存在定义而未使用的组件时，关闭报错
    // eqeqeq: 2 // 要求使用 === 和 !== ,
    "no-magic-numbers": 0, // 禁止使用魔术数字,
    "no-multi-spaces": 0, // 禁止使用多个空格
    "spaced-comment": 1, // 注释加空格
}
```

## 3、Chinese (Simplified) Language Pack for Visual Studio Code

> 汉化包，将英文版的 vscode 翻译为中文

## 4、Path Autocomplete

> Path Autocomplete 提供了路径自动完成，因此不必记住那些很长的文件路径

## 5、Node.js Modules Intellisense

> 该插件可用于在 JavaScript 和 TypeScript 导入声明时执行自动补全功能。

## 6、CodeSnap

> CodeSnap 简化了代码截图的过程。它可以捕获您的代码片段并生成一个图片文件，您可以轻松地与他人分享，因此它是文档、教程以及在社交媒体平台上分享代码的理想选择。

## 7、Image preview

> 图片预览

## 8、JavaScript (ES6) code snippets

> ES6 语法智能提示，以及快速输入

## 9、Live Server

> 开启一个具有实时重新加载功能的小型开发服务器，可以一边编写代码一边保存，即实时刷新预览

## 10、prettier - code formatter

> pretter 没有对代码的质量进行检查的能力，只关注格式化，并不具有 eslint 检查语法等能力，其只会对代码风格按照指定的规范进行统一，避免一个项目中出现多种不同的代码风格

## 11、vetur

> 该插件可实现针对.vue 文件中的代码进行语法错误检查、代码高亮与码自动补全

## 12、Vue Volar extension Pack

> 该扩展包自带了众多 vue3 开发需要的插件

## 13、Partial Diff

> 文件差异比较
