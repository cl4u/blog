# 为什么搭建？

由于后台管理系统布局、样式基本上大同小异，每次开发都需要重新搭建框架，比较费时费力，所以搭建一个基本的后台管理系统模板可以快速的进行项目开发，开发人员不用过多关注架构建设，可以减少开发时间，提升开发效率。

## 目录结构

```bash
├─ public                     # 静态资源 不参与打包
│   ├─ plug                   # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   │   ├─ apiList            # 模块化Api接口
│   │   ├─ index.js           # 请求封装
│   │   └─ statusCode.js      # 请求响应状态码处理
│   ├─ assets                 # 图片、图标、字体、主题等静态资源
│   ├─ common                 # 全局公用方法
│   │   ├─ chart              # echats二次封装
│   │   ├─ directives         # 自定义指令
│   │   ├─ filters            # 过滤器
│   │   ├─ mixins             # 混入
│   │   ├─ utils              # 公用方法
│   │   └─ index.js           # 全局公用方法入口
│   ├─ components             # 全局公用组件
│   ├─ constants              # 全局公用常量
│   ├─ layout                 # 布局页面
│   ├─ plugins                # 插件注册
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局状态管理
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ main.js                # 源码入口
│   └─ permission.js          # 路由权限
├── theme                     # 主题样式文件
├── .browserslistrc           # 浏览器兼容配置
├── .editorconfig             # 编码文件格式
├── .env.development          # 开发环境变量配置
├── .env.prod                 # 生产环境变量配置
├── .env.test                 # 测试环境变量配置
├── .eslintrc.js              # eslint配置
├── .gitignore                # git配置
├── README.md                 # 项目自述
├── package-lock.json         # 依赖包 锁文件
├── package.json              # package.json
└── vue.config.js             # vue配置
```

## 快速使用

vue2 模板从 [vue2template](https://github.com/ec-cli/vue2Template.git)
克隆一份代码，将代码复制到需要开发的项目文件夹中，安装依赖，启动服务，进行开发。

vue2 项目是基于 vue-cli4 脚手架搭建

1、[Node.js](https://nodejs.org/) 版本升级为 16.17.0，历史版本是 11.15.0

由于 node-sass 和 sass-loader 的版本需要和 node 版本对应，所以在升级 node 版本时，将 node-sass 和 sass-loader 的版本也进行了升级。

以下是对应关系：

|  NodeJS  | Supported node-sass version | Node Module |
| :------: | :-------------------------: | :---------: |
| Node 20  |            9.0+             |     115     |
| Node 19  |             8.0             |     111     |
| Node 18  |             8.0             |     108     |
| Node 17  |          7.0+,<8.0          |     102     |
| Node 16  |            6.0+             |     93      |
| Node 15  |          5.0+,<7.0          |     88      |
| Node 14  |         4.14+,<9.0          |     83      |
| Node 13  |         4.13+,<5.0          |     79      |
| Node 12  |         4.12+,<8.0          |     72      |
| Node 11  |         4.10+,<5.0          |     67      |
| Node 10  |          4.9+,<6.0          |     64      |
|  Node 8  |         4.5.3+,<5.0         |     57      |
| Node < 8 |            <5.0             |     <57     |

以下是 sass-loader 和 node-sass 关系：

node 16+对应的版本是：
sass-loader 10.0.1，node-sass 6.0.1

node 14+对应的版本是：
sass-loader 8.0.2，node-sass 4.12.0

node 11+对应的版本是：
sass-loader 8.0.2，node-sass 4.12.0

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
npm run serve
```

```sh [pnpm]
pnpm run serve
```

```sh [yarn]
yarn serve
```

:::
