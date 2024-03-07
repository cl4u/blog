<!--
 * @Author: rk
 * @Description:
 * @Date: 2023-12-01 12:09:23
 * @LastEditors: rk
 * @LastEditTime: 2024-03-07 11:11:18
-->

# 为什么搭建？

vue3 的发布给开发中带来了很多好处，首先是性能方面的提升，通过摇树(减轻了多达 41％的资源大小)，初始渲染（加快了多达 55％的速度），更新速度:（加快了 133％的速度），内存占用:(最多减少 54％)，其次解决了 vue2 存在的一些问题，加上配合 vite，使得构建速度大大提升，所以使用 vite+vue3+element-plus 搭建一套新的后台管理系统。

## 目录结构

```bash
├─ public                     # 静态资源 不参与打包
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   │   ├─ system             # 模块化api接口
│   │   └─ common.js          # 公共api
│   ├─ assets                 # 图片、图标、字体、主题等静态资源
│   ├─ components             # 全局公用组件
│   ├─ constants              # 全局公用常量
│   ├─ directives             # 自定义指令
│   ├─ hooks                  # 自定义hooks封装
│   ├─ layout                 # 布局页面
│   ├─ plugins                # element-plus引入
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局状态管理
│   ├─ utils                  # 公共方法封装
│   ├─ views                  # views 所有页面
│   ├─ App.vue                # 入口页面
│   ├─ main.js                # 源码入口
│   ├─ permission.js          # 路由权限
│   ├─ settings.js            # 静态变量定义
│   ├─ auto-import.d.ts       # 自动引入文件
├──  vite/plugins             # 配置项
├── .editorconfig             # 编码文件格式
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── .env.test                 # 测试环境变量配置
├── .eslintignore             # eslint忽略检查
├── .eslintrc-auto-import.json # eslint自动引入文件配置
├── .eslintrc.js              # eslint配置
├── .gitignore                # git配置
├── .prettierrc.js            # prettier配置
├── babel.config.js           # babel配置
├── index.html                # 全项目入口文件
├── README.md                 # 项目自述
├── package-lock.json         # 依赖包 锁文件
├── package.json              # package.json
├── jsconfig.json             # 主要作用是vscode导入使用别名时可以自动化提示文件路径
└── vite.config.js            # vite配置
```

## 快速使用

vue3 模板从 [vue3template](https://github.com/ec-cli/vue3Template.git)克隆一份代码，将代码复制到需要开发的项目文件夹中，安装依赖，启动服务，进行开发。

vue3 项目是基于 vite 构建：

1、[Node.js](https://nodejs.org/) 16 及以上版本

2、安装依赖

::: code-group

```sh [npm]
npm install
```

```sh [pnpm]
pnpm install
```

```sh [yarn]
yarn add
```

:::

3、启动项目

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

:::
