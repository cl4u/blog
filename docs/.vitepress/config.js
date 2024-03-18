/*
 * @Author: rk
 * @Description:
 * @Date: 2024-02-29 16:16:47
 * @LastEditors: rk
 * @LastEditTime: 2024-03-18 19:19:53
 */
module.exports = {
  title: "easy-coding",
  base: "/blog/",
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
      // {
      //   text: "面试",
      //   link: "/interview/html",
      //   activeMatch: "/interview/",
      // },
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
                // {
                //   text: "html",
                //   link: "/dev/question/html",
                // },
                {
                  text: "css",
                  collapsible: true, // 是不是可以动态展开
                  collapsed: false, // 默认是不是展开
                  items: [
                    {
                      text: "列表边框重合问题",
                      link: "/dev/question/css/列表边框重合问题",
                    },
                    {
                      text: "font-size设置小于12px",
                      link: "/dev/question/css/font-size设置小于12px",
                    },
                    {
                      text: "修改浏览器滚动条",
                      link: "/dev/question/css/修改浏览器滚动条",
                    },
                    {
                      text: "让页面里的字体变清晰，变细用CSS怎么做",
                      link: "/dev/question/css/让页面里的字体变清晰，变细用CSS怎么做",
                    },
                    {
                      text: "浏览器记住密码去除input背景",
                      link: "/dev/question/css/浏览器记住密码去除input背景",
                    },
                    {
                      text: "改变输入框内提示文字颜色",
                      link: "/dev/question/css/改变输入框内提示文字颜色",
                    },
                    {
                      text: "手机上的多行省略",
                      link: "/dev/question/css/手机上的多行省略",
                    },
                    {
                      text: "消除transtration闪屏",
                      link: "/dev/question/css/消除transtration闪屏",
                    },
                    {
                      text: "切角",
                      link: "/dev/question/css/切角",
                    },
                    {
                      text: "滤镜构建圆角及波浪效果",
                      link: "/dev/question/css/滤镜构建圆角及波浪效果",
                    },
                    {
                      text: "flex布局最后一行左对齐",
                      link: "/dev/question/css/flex布局最后一行左对齐",
                    },
                    {
                      text: "长方形中包含一个直角梯形",
                      link: "/dev/question/css/长方形中包含一个直角梯形",
                    },
                  ],
                },
                {
                  text: "scss",
                  collapsible: true, // 是不是可以动态展开
                  collapsed: false, // 默认是不是展开
                  items: [
                    {
                      text: "生成margin、padding值",
                      link: "/dev/question/scss/生成margin、padding值",
                    },
                  ],
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
                  collapsible: true, // 是不是可以动态展开
                  collapsed: false, // 默认是不是展开
                  items: [
                    {
                      text: "html",
                      link: "/dev/article/css/index",
                    },
                  ],
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
                  collapsible: true, // 是不是可以动态展开
                  collapsed: false, // 默认是不是展开
                  items: [
                    {
                      text: "记录elementUI中表格合并",
                      link: "/dev/article/element/记录elementUI中表格合并",
                    },
                    {
                      text: "elementUI多个表单同时提交校验问题",
                      link: "/dev/article/element/elementUI多个表单同时提交校验问题",
                    },
                    {
                      text: "elementUI多选框选中问题",
                      link: "/dev/article/element/elementUI多选框选中问题",
                    },
                    {
                      text: "用element开发一个复杂表格",
                      link: "/dev/article/element/用element开发一个复杂表格",
                    },
                    {
                      text: "使用element给表头单元格添加斜线分割线",
                      link: "/dev/article/element/使用element给表头单元格添加斜线分割线",
                    },
                  ],
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
              text: "主题切换",
              link: "/dev/other/theme",
            },
            {
              text: "动画",
              collapsible: true, // 是不是可以动态展开
              collapsed: false, // 默认是不是展开
              items: [
                {
                  text: "卡片动画",
                  link: "/dev/other/card",
                },
                {
                  text: "大屏动画",
                  link: "/dev/other/screen",
                },
                {
                  text: "其他动画",
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
