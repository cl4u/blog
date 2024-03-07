---
outline: deep
---

# 计算函数 [js-fastcode](https://www.npmjs.com/package/js-fastcode)

该文件是将常用的计算函数进行统一封装并发布到 npm 上，使用时安装依赖。

```
npm  install  js-fastcode
```

## 1、plus(num1,num2)

说明：

> 两数相加，接收两个参数 num1 和 num2，支持负数相加

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相加
plus(2, 3.5);

// 负数相加
plus(-3, -6);
```

## 2、subtract(num1,num2)

说明：

> 两数相减，接收两个参数 num1 和 num2，支持负数相减

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相减
subtract(3, 8);

// 负数相减
subtract(-3, -8);
```

## 3、multiply(num1,num2)

说明：

> 两数相乘，接收两个参数 num1 和 num2，支持负数

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相乘
multiply(3, 8);

// 负数相乘
multiply(-3, -8);
```

## 4、divide(num1,num2)

说明：

> 两数相除，接收两个参数 num1 和 num2，支持负数

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相乘
divide(3, 8);

// 负数相乘
divide(-3, -8);
```
