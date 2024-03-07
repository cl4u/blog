---
outline: deep
---

# assets 目录文件介绍 {#assets}

该目录下存放 src 里的组件所使用的静态资源（在 webpack 打包时会被当成一个模块打包到 js 文件夹里。）

主要包含 css、icons、images、json、theme 等。

## css {#css}

### index.scss {#index}

存放基本的布局样式、滚动条和一些公共样式。

### element.scss {#element}

存放对 element 样式的二次修改，包含暗黑模式和明亮模式。

### fp.scss {#fp}

封装了 margin 和 padding 的四个方向 5 种类型值。

```
// margin
@for $i from 0 through 100 {
    .m#{$i} {
        margin: $i + px;
    }

    .mt#{$i} {
        margin-top: $i + px;
    }

    .mr#{$i} {
        margin-right: $i + px;
    }

    .mb#{$i} {
        margin-bottom: $i + px;
    }

    .ml#{$i} {
        margin-left: $i + px;
    }
}

// padding
@for $i from 0 through 100 {
    .p#{$i} {
        padding: $i + px;
    }

    .pt#{$i} {
        padding-top: $i + px;
    }

    .pr#{$i} {
        padding-right: $i + px;
    }

    .pb#{$i} {
        padding-bottom: $i + px;
    }

    .pl#{$i} {
        padding-left: $i + px;
    }
}
```

使用

```
<div class="m10 pl10 pr10"></div>
```

### mixin.scss {#mixin}

封装了 flex 布局的各种情况，在需要地方进行混入引入。

```
@mixin flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@mixin flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

```

使用

```
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.content {
    @include flex-between;
}
</style>
```

### skin.scss {#skin}

定义整个系统变量，包含字体颜色、字体大小、边框颜色、背景色等。

## icons {#icons}

svg 存放从 iconfont 下载的 svg 资源，下载时大小选择 128，下载后将 svg 种的所有颜色去掉。

[iconfont](https://www.iconfont.cn/)阿里巴巴图标库

## images {#images}

存放一些 loading、404、500 等其他图片。如果图片比较大，需要进行压缩。

[tinify](https://tinypng.com/)免费压缩图片

## json {#json}

存放一些 json 静态数据，像全国省市区数据信息。

## theme

存放的是两套不同的主题样式文件和字体文件，用于设置主题切换。
