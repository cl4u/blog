---
outline: deep
---

#### 1、使用 scss 生成 margin 四个方向，0-100px 的值

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
```

#### 2、使用 scss 生成 padding 四个方向，0-100px 的值

```
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
