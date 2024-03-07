<!--
 * @Author: rk
 * @Description:
 * @Date: 2023-12-01 12:09:23
 * @LastEditors: rk
 * @LastEditTime: 2024-03-07 11:17:01
-->

# 为什么搭建？

vue3 不仅在性能上有了大大的提升，使用 typescript 的类型校验，能使前端项目有更强的健壮性，这也使得 Vue3 对于大型项目的开发提供了更强的质量保证，
所以使用 vite+vue3+element-plus+ts 搭建一套新的后台管理系统。

## 目录结构

```bash
├─ public                     # 静态资源 不参与打包
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   │   ├─ interface          # 接口数据类型
│   │   ├─ modules            # 接口模块数据
│   │   ├─ index.ts           # 请求封装
│   │   └─ statusCode.js      # 请求响应状态码处理
│   ├─ assets                 # 图片、图标、字体、主题等静态资源
│   ├─ config                 # 全局配置
│   ├─ directives             # 自定义指令
│   ├─ hooks                  # 自定义hooks封装
│   ├─ icons                  # icons
│   ├─ plugins                # element-plus引入
│   ├─ styles                 # 样式文件
│   ├─ utils                  # 公共方法封装
│   ├─ components             # 全局公用组件
│   ├─ constants              # 全局公用常量
│   ├─ doc                    # 文档
│   ├─ layout                 # 布局页面
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局状态管理
│   ├─ views                  # views 所有页面
│   ├─ App.vue                # 入口页面
│   ├─ main.ts                # 源码入口
├── types                     # ts类型配置
├── .browserslistrc           # 浏览器兼容配置
├── .editorconfig             # 编码文件格式
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── .env.test                 # 测试环境变量配置
├── .eslintignore             # eslint忽略检查
├── .eslintrc.js              # eslint配置
├── .gitignore                # git配置
├── .prettierignore           # prettier忽略检查
├── index.html                # 全项目入口文件
├── README.md                 # 项目自述
├── package-lock.json         # 依赖包 锁文件
├── package.json              # package.json
├── tsconfig.json             # 用于指定编译 TypeScript 代码时的编译选项和编译目标等信息
└── vite.config.ts            # vite配置
```

## 快速使用

vue3 模板从 [vue3template](https://github.com/ec-cli/vue3TsTemplate.git)克隆一份代码，将代码复制到需要开发的项目文件夹中，安装依赖，启动服务，进行开发。

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
