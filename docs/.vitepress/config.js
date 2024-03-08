/*
 * @Author: rk
 * @Description:
 * @Date: 2024-02-29 16:16:47
 * @LastEditors: rk
 * @LastEditTime: 2024-03-08 09:53:12
 */
const argv = require("minimist")(process.argv.slice(2));
const build = argv.build || false;
const baseBuild = build ? "/blog/" : "/";
module.exports = {
  title: "easy-coding",
  base: baseBuild,
  description: "Documentation on front-end development",
  // 最后更新于 开关
  lastUpdated: true,
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    lastUpdated: {
      text: "最近更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    langMenuLabel: "多语言",
    externalLinkIcon: true,
    // aside: false,
    outlineTitle: "当前页",
    // 左上角的
    siteTitle: "easy-coding",
    // 左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    logo: "./logo.png",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // 右上角的导航栏
    nav: [
      {
        text: "文档",
        items: [
          { text: "模板介绍", link: "/doc/template/vue2/introduce" },
          { text: "规范", link: "/doc/rule/layout/index" },
          { text: "其他", link: "/doc/other/nvm/index" },
        ],
      },
      {
        text: "开发",
        items: [
          { text: "工具函数", link: "/dev/function/utils/date" },
          { text: "常见问题", link: "/dev/question/html" },
          { text: "文章", link: "/dev/article/html/index" },
          { text: "其他", link: "/dev/other/theme" },
        ],
      },
      {
        text: "面试",
        link: "/interview/html",
        activeMatch: "/interview/",
      },
    ],
    // 侧边栏
    sidebar: {
      "/doc/template": [
        {
          items: [
            {
              text: "vue2+element",
              collapsible: true,
              collapsed: true,
              items: [
                { text: "介绍", link: "/doc/template/vue2/introduce" },
                { text: "public", link: "/doc/template/vue2/public" },
                { text: "api目录", link: "/doc/template/vue2/api" },
                { text: "assets目录", link: "/doc/template/vue2/assets" },
                { text: "common目录", link: "/doc/template/vue2/common" },
                {
                  text: "components目录",
                  link: "/doc/template/vue2/components",
                },
                { text: "constants目录", link: "/doc/template/vue2/constants" },
                { text: "layout目录", link: "/doc/template/vue2/layout" },
                { text: "plugins目录", link: "/doc/template/vue2/plugins" },
                { text: "router目录", link: "/doc/template/vue2/router" },
                { text: "store目录", link: "/doc/template/vue2/store" },
                { text: "views目录", link: "/doc/template/vue2/views" },
                { text: "app目录", link: "/doc/template/vue2/app" },
                { text: "main目录", link: "/doc/template/vue2/main" },
                {
                  text: "permission目录",
                  link: "/doc/template/vue2/permission",
                },
                { text: "theme", link: "/doc/template/vue2/theme" },
                { text: "env", link: "/doc/template/vue2/env" },
                { text: "config", link: "/doc/template/vue2/config" },
              ],
            },
            { text: "vue3+element-plus", link: "/doc/template/vue3/introduce" },
            {
              text: "vue3+ts+element-plus",
              link: "/doc/template/vue3Ts/introduce",
            },
          ],
        },
      ],
      "/doc/rule": [
        {
          items: [
            {
              text: "样式布局规范",
              link: "/doc/rule/layout/index",
            },
            {
              text: "前端开发规范",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                { text: "文件目录命名规范", link: "/doc/rule/code/index" },
                { text: "代码规范", link: "/doc/rule/code/code" },
                { text: "注释规范", link: "/doc/rule/code/comment" },
                { text: "代码提交规范", link: "/doc/rule/code/commit" },
                { text: "git分支管理", link: "/doc/rule/code/git" },
              ],
            },
            {
              text: "前后端联调规范",
              link: "/doc/rule/development/index",
            },
          ],
        },
      ],
      "/doc/other": [
        {
          items: [
            {
              text: "nvm安装",
              link: "/doc/other/nvm/index",
            },
            {
              text: "vscode配置",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                { text: "vscode配置git命令", link: "/doc/other/plugin/git" },
                {
                  text: "vscode配置vue代码片段",
                  link: "/doc/other/plugin/code",
                },
                { text: "vscode插件配置", link: "/doc/other/plugin/set" },
              ],
            },
          ],
        },
      ],
      "/dev/function": [
        {
          items: [
            {
              text: "函数封装",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                { text: "日期函数", link: "/dev/function/utils/date" },
                {
                  text: "计算函数",
                  link: "/dev/function/utils/math",
                },
                { text: "验证函数", link: "/dev/function/utils/validate" },
                { text: "工具类函数", link: "/dev/function/utils/index" },
              ],
            },
            {
              text: "开发技巧",
              link: "/dev/function/skill/index",
            },
          ],
        },
      ],
      "/dev/question": [
        {
          items: [
            {
              text: "常见问题",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                {
                  text: "html",
                  link: "/dev/question/html",
                },
                {
                  text: "css",
                  link: "/dev/question/css",
                },
                {
                  text: "js",
                  link: "/dev/question/js",
                },
                {
                  text: "es6",
                  link: "/dev/question/es6",
                },
                {
                  text: "element",
                  link: "/dev/question/element",
                },
                {
                  text: "element-plus",
                  link: "/dev/question/element-plus",
                },
                {
                  text: "vue2",
                  link: "/dev/question/vue2",
                },
                {
                  text: "vue3",
                  link: "/dev/question/vue3",
                },
              ],
            },
          ],
        },
      ],
      "/dev/article": [
        {
          items: [
            {
              text: "文章",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                {
                  text: "html",
                  link: "/dev/article/html/index",
                },
                {
                  text: "css",
                  link: "/dev/article/css/index",
                },
                {
                  text: "js",
                  link: "/dev/article/js/index",
                },
                {
                  text: "es6",
                  link: "/dev/article/es6/index",
                },
                {
                  text: "element",
                  link: "/dev/article/element/index",
                },
                {
                  text: "vue2",
                  link: "/dev/article/vue2/index",
                },
                {
                  text: "vue3",
                  link: "/dev/article/vue3/index",
                },
              ],
            },
          ],
        },
      ],
      "/dev/other": [
        {
          items: [
            {
              text: "主体切换",
              link: "/dev/other/theme",
            },
            {
              text: "动画",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                {
                  text: "卡片动画",
                  link: "/dev/other/animation",
                },
              ],
            },
          ],
        },
      ],

      "/interview/": {
        items: [
          { text: "html", link: "/interview/html" },
          { text: "css", link: "/interview/css" },
          { text: "js", link: "/interview/js" },
          { text: "es6", link: "/interview/es6" },
          { text: "http", link: "/interview/http" },
          { text: "element", link: "/interview/element" },
          { text: "vue2", link: "/interview/vue2" },
          { text: "vue3", link: "/interview/vue3" },
          { text: "webpack", link: "/interview/webpack" },
          { text: "项目优化", link: "/interview/optimisation" },
        ],
      },
    },
    socialLinks: [{ icon: "github", link: "/rule/code/index" }],
    footer: {
      message: "海阔凭鱼跃，天高任鸟飞",
      // copyright: '天高任鸟飞',
    },

    search: {
      provider: "local",
    },
  },
};
