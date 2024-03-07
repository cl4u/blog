# public 目录文件介绍

该目录下包含 plug、index.html 和 favicon.ico 文件。

## plug

可以将静态资源放在此目录下，包括 axios、echarts、element、vue、icon、images 等不需要打进包的资源，可以减短打包时间，进行项目优化。

```bash
├─ plug                            # 项目静态资源
│   ├─ axios                       # axios资源
│   │   ├─ axios.min.js            # 最小资源文件
│   ├─ echarts                     # echarts资源资源
│   │   ├─ echarts.min.js          # 最小资源文件
│   ├─ element                     # echarts资源资源
│   │   ├─ element-ui.min.js       # 最小js资源文件
│   │   ├─ element-ui.min.css      # 最小css资源文件
│   ├─ vue                         # vue资源资源
│   │   ├─ vue-router.min.js       # vue-router资源文件
│   │   ├─ vue.min.js              # vue资源文件
│   │   ├─ vuex.min.js             # vuex资源文件
│   ├─ image                       # 图片资源文件
│   ├─ icon                        # icon资源文件
```

## favicon.ico

一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上，用于显示网站的 logo，目前主要的浏览器都支持 favicon.ico 图标，可以进行替换。

## index.html

该页面是一个模板文件，作用是生成项目的入口文件，webpack 打包的 js,css 也会自动注入到该页面中。
