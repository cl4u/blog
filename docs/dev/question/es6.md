---
outline: deep
---

# 开发常见问题-es6

## 1、判断对象 key 是否存在

```javascript
let obj = {
  name: "xx",
  sex: "male",
  age: 18,
};
// 判断name是否存在
Object.keys(obj).includes("name");
```

## 2、使用 filter 和 map 代替 for 循环

```js
let arr = [
  { id: 1, name: "rr" },
  { id: 2, name: "rr" },
  { id: 3, name: "cc" },
  { id: 1, name: "dd" },
];

// 需求： 找到id是1的name集合

let result = arr.filter((item) => item.id === 1).map((item) => item.name);
```

## 3、解构

### 3.1 使用解构交换两个值

```js
let a = 10,
  b = 20;

// 需求：交换a和b的值
[a, b] = [b, a];
```

### 3.2 对象解构

```js
let obj = { name: "rr", age: 18 };
let { name, age } = obj || {};

// 深度解构
let obj = {
  name: "rr",
  feature: {
    height: 180,
    weight: 80,
  },
};

let {
  name,
  feature: { height, weight },
} = obj;

// 解构使用别名
有时候后台返回的数据名称不是我们想要的，解构时可以使用别名
let result = {number:12,pId: 1}

let {number:num, pId: id} = result;
console.log(num,id)
```

### 3.3 数组解构

```js
let arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
```

### 3.4 函数参数解构

```js
let obj = { name: "rr", age: 18 };
function getInfo({ name, age }) {
  return `${name}今年${age}岁了`;
}
getInfo(obj);
```

## 4、使用 reduce 计算总和

```js
let arr = [
  { name: "peach", price: 10, num: 3 },
  { name: "apple", price: 15, num: 5 },
  { name: "bunana", price: 5, num: 6 },
];

// 需求：求三种水果总价

let total = arr.reduce((prev, curr) => {
  return prev + curr.price * curr.num;
}, 0);
```

## 5、动态添加对象属性

```js
let obj = {};
let index = 1;
obj[`top${index}`] = "标题1";
```

## 6、输入框非空判断

```js
if (value !== null && value !== "" && value !== undefined) {
  // 非空判断
}

// 可以使用es6的空值合并运算符
if ((value ?? "") !== "") {
  // ...
}
```

## 7、有条件地向对象、数组添加属性

### 7.1 向对象添加属性

可以使用展开运算符来有条件地向对象中添加属性,如果 flag 是 true，则向对象中添加 address 属性，如果是 false，则不影响原始对象

```js
const flag = true;
let obj = {
  name: "rr",
  age: 30,
  ...(flag && { address: "beijing" }),
};
```

### 7.2 向数组添加属性

```js
let arr = [30, flag && 40];
```

## 8、初始化二维数组

```js
const matrix = Array(5)
  .fill(0)
  .map(() => Array(5).fill(0));
```
