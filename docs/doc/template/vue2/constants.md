# constants 目录文件介绍

该目录主要存放的是常量。主要包含系统公共常量和路由配置。

## index

全局常量字典存放，以 label 和 value 键值对存储

```
// 时间周期类型
export const PERIOD_TYPE_LIST = [
  { label: "日", value: 7 },
  { label: "旬", value: 8 },
  { label: "月", value: 3 },
  { label: "季", value: 2 },
  { label: "年", value: 1 },
];
```

## router

路由声明文件，一般是系统中没有做菜单配置，所以由前端静态编写。
