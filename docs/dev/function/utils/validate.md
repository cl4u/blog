---
outline: deep
---

# 校验类函数 [js-fastcode](https://www.npmjs.com/package/js-fastcode)

该文件是将常用的校验函数进行统一封装并发布到 npm 上，使用时安装依赖。

```
npm  install  js-fastcode
```

## 1、isExternal(path)

说明：

> 校验是否以 https:|mailto:|tel: 开始的链接，接收一个参数 path

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| path | 必传 | string | 被校验的链接 |

使用：

```javascript
// 校验是以https开始的链接
isExternal("https://www.baidu.com");

// 校验是以mailto开始的邮箱
isExternal("mailto: 13333333@163.com");

// 校验是以tel开始的手机号
isExternal("tel:888826554");
```

## 2、checkTel(tel)

说明：

> 手机号格式校验，按照最新工信部颁发的手机号段进行匹配，接收一个参数 tel
>
> 只支持手机号，不支持固话

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| tel | 必传 | number | 需要输入校验的手机号 |

使用：

```javascript
// 校验手机号是否合法
isExternal("13266666666");
```

## 3、dataType(data)

说明：

> 检测数据类型，接收一个参数 data

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| data | 必传 | any | 检测 number,string,object 等数据类型 |

使用：

```javascript
// 返回数据类型
dataType("13266666666");
```

## 4、judgeListComplete(list)

说明：

> 数组对象表单数据提交时判断每一项都不能为空，接收一个参数 list。
>
> 该方法在循环数组的每一项进行验证使用的是 judgeObjectComplete()方法进行判断

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| list | 必传 | array | 对该数组进行循环校验 |

使用：

```javascript
// 空数组不能提交
judgeListComplete([]); // false

// 数组对象中有空值不能提交
judgeListComplete([{ name: "xx", age: null }]); // false
```

## 5、isObjEmpty(obj)

说明：

> 判断对象不为空，接收一个参数 obj。
>
> 返回 true 则不为空，否则为空

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| obj | 必传 | object | |

使用：

```javascript
// 传递空对象
isObjEmpty({}); // false

// 数组对象中有空值不能提交
isObjEmpty({ name: "xx", age: null }); // true
```

## 6、isRepeatValue(arr,key)

说明：

> 判断数组对象中是否存在有重复的值，接收两个参数 arr 和 key。
>
> 返回 true 说明数组中有重复的值，否则没有。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| arr | 必传 | array | |
| key | 必传 | string |根据该字段进行判断是否有重复的值 |

使用：

```javascript
// 判断数组中id值是否有重复值
isRepeatValue(
  [
    { name: "xx", id: 12 },
    { name: "yy", id: 13 },
  ],
  "id"
); // false

// 数组对象中有空值不能提交
isRepeatValue(
  [
    { name: "xx", id: 12 },
    { name: "yy", id: 13 },
    { name: "xs", id: 12 },
  ],
  "id"
); // true
```

## 7、isObjectValueEqual(obj1,obj2)

说明：

> 判断两个对象是否相等，接收两个参数 obj1 和 obj2。
>
> 返回 true 说明相等，否则不相等

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :---: | :------: | :----: | :----: |
| obj1 | 必传 | object | |
| obj2 | 必传 | object | |

使用：

```javascript
// 判断两个对象是否相同
isObjectValueEqual({ name: "xx", id: 12 }, { name: "yy", id: 13 }); // false

// 判断两个对象是否相同，两个对象顺序不同也返回true
isObjectValueEqual({ name: "xx", id: 12 }, { id: 12, name: "xx" }); // true
```
