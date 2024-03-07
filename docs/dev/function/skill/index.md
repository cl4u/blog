---
outline: deep
---

# 开发技巧

该目录包含一些常用的开发技巧，可以方便编写代码以及提升代码质量。

## 1、简写条件判断语句

如果仅在判断条件为 true 时才执行函数，则可以使用 && 简写。

```
// 普通写法
if (condition) {
    doSomething();
}
// 简写
condition && doSomething();
```

## 2、将字符串转换为数字

```
const str = '404';
console.log(+str) // 404;
```

## 3、将数字转为字符串

```
const myNumber = 403;
console.log(myNumber + ''); // '403'
```

## 4、数组去重

```
const1 numbers = [1,1,2,2,3,3];

// 方案一
function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
     }
   }
   return newArr
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案二
function unique(arr) {
  var formArr = arr.sort();
  var newArr = [formArr[0]];
  for (let i = 1; i < formArr.length; i++) {
    if (formArr[i] !== formArr[i - 1]) {
      newArr.push(formArr[i])
    }
  }
  return newArr
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案三
function unique(arr) {
  var obj = {};
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案四
function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案五
function unique(arr) {
  var newArr = [];
  newArr = arr.filter(item => {
    return newArr.includes(item) ? '' : newArr.push(item)
  })
  return newArr
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案六，filter+indexOf
function unique(arr) {
  return arr.filter((item,index) => arr.indexOf(item,0) === index);
}

解析：
假设数组为: [1,1,2,2,3,3]

const handleRemoveRepeat = (arr) => arr.filter((item,index) => arr.indexOf(item,0) === index);

第一次filter循环(当前循环index === 0) 过程： [1,1,2,2,3,3].indexOf(1,0) === 0 // 调节满足，返回

第二次filter循环(当前循环index === 1) 过程： [1,1,2,2,3,3].indexOf(1,0) === 1 // 调节不满足，不返回

第三次filter循环(当前循环index === 2) 过程： [1,1,2,2,3,3].indexOf(2,0) === 2 // 调节满足，返回

第四次filter循环(当前循环index === 3) 过程： [1,1,2,2,3,3].indexOf(2,0) === 3 // 调节不满足，不返回

... 以此类推
```

```
// 方案七,利用Array.from将Set结构转换成数组
function unique(arr) {
  return Array.from(new Set(arr))
}
console.log(unique(numbers)) // [1, 2 ,3]
```

```
// 方案八 利用es6扩展运算符
function unique(arr) {
  return [...new Set(numbers)]
}

console.log(unique(numbers)); // [1, 2 ,3]
```

## 5、使用 includes 进行条件判断

```
// 普通写法
if(type == 1 || type == 2 || type == 3 || type == 4) {
    // do something
}

// indexOf用法
const condition = [1, 2, 3, 4];
if (condition.indexOf(type) > -1) {
  // do something
}

// includes 写法
const condition = [1, 2, 3, 4];
if (condition.includes(type)) {
    // do something
}
```

::: tip 提示
includes 和 indexOf 的区别：

相同点：都是检查是否包含某个值

不同点：

indexOf： 方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对 NaN 的误判。
:::

```
var ary = [NaN];
console.log(ary.indexOf(NaN)) // -1

// includes： 内部使用了Number.isNaN对NaN进行了匹配
var ary = [NaN];
con  sole.log(ary.includes(NaN)) // true
```

## 6、数据合并

### 6.1 数组合并

```
ES5合并数组用的是concat方法
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = a.concat(b); // [1, 2, 3, 1, 5, 6]

ES6合并数组使用的是扩展运算符,并且去重，去重针对的是简单的数据结构。
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = [...new Set([...a,...b])]; // [1, 2, 3, 5, 6]
```

### 6.2 对象合并

```
ES5合并对象用的是Object.assign({},{})
const obj1 = { a: 1 }
const obj2 = { b: 1 }
const obj = Object.assign({}, obj1, obj2); // { a: 1, b: 1 }

ES6合并对象用扩展运算符
...  扩展对象，只能做到当对象属性是 基本数据类型 才是 深拷贝，如果是 引用数据类型并且只有一层时，是深拷贝，如果层级超过一层，那就是浅拷贝
const obj1 = { a: 1 }
const obj2 = { b: 1 }
const obj = {...obj1, ...obj2}; // { a: 1, b: 1 }
```

## 7、find 和 filter 使用区别

### 7.1 find

只要找到符合条件的第一个就不再执行

```
const list = [
  { name: 1, index: 1 },
  { name: 2 },
  { name: 1, index: 2 }
]
let list2 = list.find(i => i.name === 1)
console.log(list2); // { name: 1, index: 1 }

const arr = [
  {id: 1, name: "rk"},
  {id: 2, name: "rk1"},
  {id: 3, name: "rk2"}
]
// 如何去到id=2的name
const {name} = arr.find(i => i.id == 2)
console.log(name) // rk1
```

### 7.2 filter

找到所有符合条件的数据

```
const list = [
  { name: 1, index: 1 },
  { name: 2},
  { name: 1 }
]
let list3 = list.filter (i=> i.name === 1)
console.log(list3); // [{ name: 1, index: 1 }, { name: 1 }]
```

## 8、获取对象属性值使用可选链操作(?.)

```
let obj = {
  name: "rk",
  age: 23,
  favorite: {
    sport: "basketball",
    subject: "math"
  }
}

普通用法：
const sport= obj && obj.favorite && obj.favorite.sport;

if (res.data && res.data.length > 0) {
  ...
}

ES6写法：
const sport = obj?.favorite?.sport;

if (res.data?.length > 0) {
  ...
}
```

## 9、输入框非空验证

ES6 提供了空值合并运算符??，可以方便进行判断

```
普通写法：
if(value !== null && value !== undefined && value !== ''){
    //...
}

ES6空值合并运算符：
// ?? 的作用是: 判断值是否是null 或者是 undefined
if((value ?? '') !== ''){
  //...
}
```

## 10、url 参数转为对象

```
如 'www.baidu.com?a=1&b=2' 转为{ a: 1, b: 2 }

const queryString = location.search;
const queryParams = new URLSearchParams(queryString);
const paramObj = Object.fromEntries(queryParams);
console.log(paramObj)  // { a: 1, b: 2 }
```

## 11、json 对象转为 url 参数

```
将{a:1,b:2}转为a=1&b=2

方案一：
function jsonToUrlParam(json) {
  return Object.keys(json).map(key => key + '=' + json[key]).join('&')
}
let json = { a: 1, b: 2 }
console.log(jsonToUrlParam(json)) // a=1&b=2
```

```
方案二：
// 在实际的应用场景中，一个JSON对象可能有很多属性，但是URL参数只需要部分属性，
// 这个时候可以改造一下上面的方法，从而实现忽略指定的属性即可
function jsonToUrlParam(json, ignoreFields) {
    return Object.keys(json)
        .filter(key => ignoreFields.indexOf(key) === -1)
        .map(key => key + '=' + json[key]).join('&');
}
let json = { a: 1, b: 2 }
console.log(jsonToUrlParam(json, ['b'])) // a=1
```

```
方案三：
// URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
function jsonToUrlParam(json) {
    return new URLSearchParams(json).toString();
}
let json = { a: 1, b: 2 }
console.log(jsonToUrlParam(json)) // a=1&b=2
```

```
方案四：
function jsonToUrlParam(obj) {
  return Object.entries(obj).map(([key,val]) => `${key}=${val}`).join("&")
}
let json = { a: 1, b: 2 }
console.log(jsonToUrlParam(json)) // a=1&b=2
```

## 12、对象中传值，键名相同可以简写

```
let id = "123"

普通写法：
let obj = {
  name: "rk",
  id: id
}

可简写：
let obj = {
  name: "rk",
  id
}
```

## 13、if...else 优化

```
方案一： 使用switch...case

switch (condition) {
  case 'value1':
    // do something
    break;
  case 'value2':
    // do something else
    break;
  default:
    // do default
}
```

```
方案二： 三元运算符

const flag = this.status === 2 ? "已修改" : "未修改";
```

::: warning 警告
三元运算符尽量不要嵌套使用，因为可读性太差。
:::

```
方案三： 一般项目中像类型、状态这种下拉框数据是写在一个数组中，然后再列表中渲染时，后端一般返回的是值，前端根据值显示对应的文案。

let statusList = [
  { value: 1, label: "未核验" },
  { value: 2, label: "已核验" }
]

现在可以使用以下方式简写：
<span>{{ statusList[scope.row.status - 1 ].label }}</span>
```

```
方案四： 使用对象键值对简化

let dialogTitle = "", type = "add";
let typeMap = {
  "add": "新增",
  "edit": "修改",
  "detail": "详情"
}
dialogTitle  = typeMap[type]
```

```
方案五： 策略模式

let timeMap = {
  "day": (num) => {
    return num + 30;
  },
  "month": (num) => {
    return num + 1
  },
  "year": (num) => {
    return num + "0.2"
  }
}
const geResult = (type, num) => timeMap[type](num)
```

```
方案六： 其他

提交form表单时，使用if...else写法：

if （!this.form.username） {
  this.$message.warning("请填写用户名称");
  return false;
} else if (!this.form.password) {
  this.$message.warning("请填写用户密码");
  return false;
} else if (!this.form.tel) {
  this.$message.warning("请填写用户联系方式");
  return false;
}

修改后代码如下：
const validators = [
  {key:"username", message: "请填写用户名称", required: true},
  {key:"password", message: "请填写用户密码", required: true},
  {key:"tel", message: "请填写用户联系方式", required: true},
]

handleFormSubmit() {
  if (this.validator(this.form)) {
     return;
  }
},
validator(arr) {
  return validators.some(item => {
    if (item.required && !arr[item.key]) {
      this.$message.warning(item.message);
      return true
    }
  })
}
```

## 14、使用高阶函数代替 for 循环

```
取出age是20的所有name放在一个数组中

let arr = [
  { name: "rl", age: 20 },
  { name: "rk", age: 22 },
  { name: "rj", age: 20 },
  { name: "rh", age: 20 }
]

一般写法：
const names = []
for (let i = 0, len = arr.length; i < len; i++) {
  if (arr[i].age === 20) {
    names.push(arr[i].name)
  }
}

使用高阶函数：
const names = arr.filter(item => item.age === 20).map(item => item.name)
```

## 15、取整

```
// 一般写法：
let a = 21.369
Math.floor(a)

// ES6写法：
let a = 21.369
~~a
```

## 16、数组求和

```
一般求购物车所有东西之和写法如下：

let shopList = [
  { price: 12, number: 2, id: 1 },
  { price: 13, number: 5, id: 2 },
  { price: 6, number: 3, id: 3 },
]

// forEach写法
let sum = 0
shopList.forEach(item => {
  sum += item.price * item.number
})

// ES6使用reduce计算：
let sum = shopList.reduce(
  (res, item) => (res += item.price * item.number),
  0
);
```

## 17、数组循环方法比较

在 JavaScript 中，for、forEach、map、filter、some 和 every 是用于处理数组的常见方法。它们之间有一些区别和特点：

### 17.1 for 循环

for 循环：for 循环是一种基本的迭代方法，可以用于遍历数组中的元素。它需要手动编写迭代逻辑，并且在处理数组时需要注意索引的控制。比较灵活，但相对繁琐。

```
let arr = [1,2,3,4,5];
let brr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    brr.push(arr[i])
  }
}
console.log(brr)  // [2, 4]
```

### 17.2 forEach 循环

forEach 是 Array 原型上的一个方法，用于遍历数组中的每个元素，并对其进行操作。它接受一个回调函数作为参数，该函数会被依次应用于数组中的每个元素，但无法改变原始数组。只是遍历，没有返回值。

```
let arr = [1,2,3,4,5];
let brr = [];
arr.forEach(item => {
  if (item % 2 == 0) {
    brr.push(item)
  }
})
console.log(brr)  // [2, 4]
```

### 17.3 map 循环

map 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，并返回一个新的数组，该数组包含了回调函数的返回值。可以通过 map 将一个数组转化为另一个数组，长度与原数组相同。

```
// 根据if条件进行过滤数据
let arr = [1, 2, 3, 4, 5];
let brr = [];
arr.map(item => {
  if (item % 2 == 0) {
    brr.push(item)
  }
})
console.log(brr);  // [2, 4]

// brr直接接收arr处理数据，是一个新数组
let arr = [1, 2, 3, 4, 5];
let brr = arr.map(item => item * 2)
console.log(brr)  // [2, 4, 6, 8, 10]

// 遍历映射关系
const source = [1,2,3,4,5]
const target = source.map(item => ({id: item,label:`label${item}`}))
console.log(target)
```

### 17.4 filter 过滤

filter 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，并返回一个新的数组，该数组只包含满足回调函数条件的元素。用于过滤数组中的元素。

```
let arr = [1, 2, 3, 4, 5];
let brr = arr.filter(item => item % 2 == 0)
console.log(brr)  // [2, 4]
```

### 17.5 some

some 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，如果有任意一个元素满足回调函数的条件，则返回 true，否则返回 false。用于判断数组中是否存在符合条件的元素。

```
let arr = [1, 2, 3, 4, 5];
let brr = arr.some(item => item % 2 == 0)
console.log(brr)  // true
```

### 17.6 every

every 方法也是 Array 原型上的一个方法，它会对数组中的每个元素应用一个回调函数，如果所有元素都满足回调函数的条件，则返回 true，否则返回 false。用于判断数组中的所有元素是否都满足条件。

```
let arr = [1, 2, 3, 4, 5];
let brr = arr.every(item => item % 2 == 0)
console.log(brr) // false
```

::: tip 总结
总结来说，for 循环是一种基本的迭代方法，而 forEach、map、filter、some 和 every 是数组特有的方法，对数组的处理更加方便和简洁。其中，forEach 只是遍历数组，没有返回值；map 方法返回一个新的数组；filter 方法返回满足条件的元素组成的新数组；some 方法判断数组中是否存在符合条件的元素；every 方法判断数组中所有元素是否都满足条件。根据具体需求选择使用不同的方法。
:::

## 18、 数组对象表单数据提交时判断其中的每一项都不为空

```
如 let list = [{ name:  "xx", age:  23},{ name: "yy", age: 23 }],对数组中的name和age进行必填校验，如果有一个为空，则表单不能提交

// 对外层数组进行判断
function judgeListComplete(list) {
    let isNotComplete = list.findIndex(item => {
      return this.judgeObjectComplete(item) === false
    })
    if (isNotComplete > -1) {
      return false
    } else {
      return true
    }
 }
// 对循环数组的每一项进行验证
function judgeObjectComplete(ObjectValue) {
    let flag = true;
    for (let key in ObjectValue) {
      if (!ObjectValue[key]){
        flag = false
      }
    }
    if (!flag) {
      return false
    } else {
      return true
    }
}
let list = [{ name: "xx", age: 23 },{ name: "yy", age: 23 }]
judgeListComplete(list)  // true
let list = [{ name: "xx", age: 23 },{ name: "", age: 23 }]
judgeListComplete(list)  // false
```

## 19、 数组对象去重

### 19.1 数组对象合并并且去重

```
let arr = [
  { name: "rl", age: 20 },
  { name: "rk", age: 22 },
  { name: "rj", age: 20 },
  { name: "rh", age: 20 }
]
let arr1 = [{ name: "rk", age: 23 },{ name: "rj", age: 24 }]

// 如果去重取得是第一个数组中的值，那...arr写在前边，

let arr2 = [...arr, ...arr1]
let d = []
let hash = {}
d = arr2.reduce((item, next) => {
   hash[next.name] ? '' : hash[next.name] = true && item.push(next)
   return item
}, [])
console.log(d)


// 如果取第二个数组的值，那么...arr1则再前
let arr2 = [...arr1, ...arr]
let d = []
let hash = {}
d = arr2.reduce((item, next) => {
   hash[next.name] ? '' : hash[next.name] = true && item.push(next)
   return item
}, [])
console.log(d)
```

### 19.2 数组对象去重

```
// 前边相同name属性的age会被保留，后边的会被舍弃
let arr = [
  { name: "rl", age: 20 },
  { name: "rk", age: 22 },
  { name: "rl", age: 23 },
  { name: "rh", age: 20 },
  { name: "rk", age: 30}
]
let brr = Array.from(new Set(arr.map((item) => item.name))).map((name) =>
          arr.find((item) => item.name === name)
        );
console.log(brr)
```

## 20、判断对象为空

```
let obj = {};

1、变成字符串验证
JSON.stringify(obj) == '{}'

2、ES6属性验证
Object.keys(obj).length == 0
```

## 21、判断数组对象中是否存在有重复的值

```
let arr = [
  { time: "2022-05-26", id: 1, name: "rk" },
  { tiem: "2022-05-25", id: 2, name: "rk" }
]

const name = arr.map(item => item.name); // ["rk", "rk"]

// 去重操作
const nameSet = new Set(name); // { rk }

// 如果数组长度不等于去重之后对象的size，说明数组中是有重复的值
if (nameSet.size != name.length) {
  return false;
}
```

## 22、使用 ES6 进行对象扁平化

```
var object = {
    a: 1,
    b: 2,
    c: {
        aa: 11,
        bb: 22
    }
};

要求的结果是： object = { a: 1, b: 2, aa: 11, bb: 22 }

const objFlat = (obj, res = {}) => {
  Object.keys(obj).map((k) => {
    obj[k].constructor === Object
      ? objFlat(obj[k], res)
      : (res[k] = obj[k]);
  });
  return res;
};
console.log(objFlat(object)) // { a: 1, b: 2, aa: 11, bb: 22 }


```

```
// 扩展
const object = {
    a: 1,
    b: 2,
    c: {
        aa: 11,
        bb: 22
    },
    d: null,
    e: [1, 2, 3]
};
function flatObject(source, target = {}) {
    Object.entries(source)
        .forEach(([k, v]) => {
            if (v && typeof v === "object" && !Array.isArray(v)) {
                flatObject(v, target);
            } else {
                target[k] = v;
            }
        });
    return target;
}
flatObject(object)
```

## 23、按照数组对象中的某个属性对数据排序

对 arr 中的 age 进行排序

```
let arr = [
  { name: "rk", age:20 },
  { name: "rk1", age:15 },
  { name: "rk2", age:13 }
]

function sortByKey(array,key){
    return array.sort(function(a,b){
        var x = a[key];
        var y = b[key];
        return((x<y)?-1:((x>y)?1:0));
    })
}
sortByKey(arr, age)
```

## 24、删除 a 数组和 b 数组中重复的数据

根据某个字段删除两个数组中重复的数据

```
let arr1 = [
    { id: 1, name: "qq" },
    { id: 2, name: "ww" },
    { id: 3, name: "ee" }
]

let arr2 = [{ id: 4, name: "rr" },{ id: 2, name: "tt" }]

let set = arr2.map(item => item.id)
console.log(set) // [4, 2]

let resArr = arr1.filter(item => !set.includes(item.id))

console.log(resArr)
// [{ id: 1, name: 'qq' },{ id: 3, name: 'ee' }]
```

## 25、ES6 判断对象中的 key 是否存在

```
let obj = {
  name: "rk",
  age: 23
}

// 判断obj中是否有age字段
let arr = Object.keys(obj)

// true说明存在，false不存在
arr.includes("age")  // true
```

## 26、ES6 对对象和数组解构

### 26.1 对象解构

```
let res = {
  code: "200",
  data: [
    { id: 1, name: "rk", age: 20 },
    { id: 2, name: "rk1", age: 21 },
  ],
  msg: "请求成功"
}

// 普通写法：
let code = res.code;
let data = res.data;
let msg = res.msg;

// ES6写法：

// 一般像接口请求回来的数据可以按照这么操作
let {code, data, msg} = res || {}

```

### 26.2 数组解构

```
let arr = [
  {
    name: "rk",
    age: 20
  },
  33
]

// 普通写法
let name = arr[0].name;
let age = arr[0].age;
let number = arr[1];

// ES6写法:
let [{name, age}, number] = arr || []
```

## 27、find 和 findIndex 区别

### 27.1 find

find 查找数组中符合条件的第一个元素,查到则不继续往下查找，如果没有符合条件的数组，返回 undefined

```
let arr = [
  { name: "rk", age: 20 },
  { name: "rk1", age: 19 },
  { name: "rk2", age: 28 },
  { name: "rk3", age: 19 }
]

// 查找到第一个age=19的数据，就不会继续往下查找
let obj = arr.find(item => item.age === 19)
console.log(obj) // { name: 'rk1', age: 19 }
```

### 27.2 findIndex

findIndex 查找数组中是否符合条件的第一个条件的的元素的下标，如果有则返回下标，并且不继续查找数组，如果没有，返回 -1

```
let arr = [
  { name: "rk", age: 20 },
  { name: "rk1", age: 19 },
  { name: "rk2", age: 28 },
  { name: "rk3", age: 19 }
]

// 查找到第一个age=19的数据，就不会继续往下查找
let index= arr.findIndex(item => item.age === 19)
console.log(index)  // 1
```

## 28、async 和 await 用法

```
async created () {
    const res = await axios.get('https://xxx.com?id=1')
    console.log(res)
}
```

## 29、对数组对象中相同名称和年龄的相加 eggs 属性

数组对象中，如果有相同名称和相同年龄的，将 eggs 属性相加起来

```
var arr = [
   { name:'lilei', age:18, eggs:10 },
   { name:'haozi', age:20, eggs:7 },
   { name:'lilei', age:18, eggs:5 },
];

方案一、
let res = [];
for (let i = 0; i < arr.length; i++) {
    let merged = false;
    for (let j = 0; j < res.length; j++) {
        if (res[j].name === arr[i].name && res[j].age === arr[i].age) {
            res[j].eggs += arr[i].eggs;
            merged = true;
            break;
        }
    }
    if (!merged) {
        res.push(arr[i]);
    }
}
console.log(res);
```

```
方案二、
let res = [];
arr.forEach(m => {
    let obj = res.find(n => n.name === m.name && n.age === m.age);
    if (obj) {
        obj.eggs += m.eggs;
    } else {
        res.push(m);
    }
});
console.log(res);
```

```
方案三、
let res = arr.reduce((acc, cur) => {
    let obj = acc.find(e => e.name === cur.name && e.age === cur.age);
    if (obj) {
        obj.eggs += cur.eggs;
    } else {
        acc.push(cur);
    }
    return acc;
}, []);
console.log(res);
```

```
方案四、
const record = {}
arr.forEach(({ name, age, eggs }) => {
  if (!record[name]) {
    record[name] = {}
  }
  const nameRecord = record[name]
  if (!nameRecord[age]) {
    nameRecord[age] = 0
  }
  nameRecord[age] += eggs
})
record.lilei['18'] // 15
```

```
方案五、
function sortSum (arr=[]) {
    return arr.reduce((pre, cur) => {
        let key = `${cur.name}-${cur.age}`;
        if (pre[key] !== undefined) {
            pre[key] += cur.eggs;
        } else {
            pre[key] = cur.eggs;
        }
        return pre;
    }, {});
}
sortSum(arr)
```

```
方案六、
var newArr = arr.reduce(
        (prev, curr) => (
          !prev.some(
            (item) =>
              item.name === curr.name &&
              item.age === curr.age &&
              (item.eggs += curr.eggs)
          ) && prev.push(curr),
          prev
        ),
        []
      );
console.log(newArr);
```

## 30、从对象数组中取出最大值

从下边数组中取出 flag 是 true，id 最大的 label

```
let arr = [
  { id: 1, flag: true, label: "较差" },
  { id: 2, flag: false, label: "差" },
  { id: 3, flag: true, label: "一般" },
  { id: 4, flag: true, label: "满意" },
  { id: 5, flag: false, label: "十分满意" }
]

arr.reduce((prev, cur) => (cur.flag && prev.id < cur.id ? cur : prev)).label;
```

## 31、合并数组-同一个数组内对象合并

根据数组中相同的某一属性值合并

```
let list = [
    {
        name:'rk',
        age:22,
    },
    {
        name:'rk',
        sex:'男',
    },
    {
        name:'zq',
        age: 21,
    },
    {
        name:'zq',
        sex:'女',
    },
]

/**
 将list根据name合并成如下：
 list = [
          { name: "rk", age: 22, sex: "男" },
          { name: "zq", age: 21, sex: "女" }
        ]
*/

function merge(list) {
    return list.reduce((r, it) => {
        const existed = r.find(({ name }) => it.name == name);
        if (existed) {
            Object.assign(existed, it);
        } else {
            r.push({ ...it });
        }
        return r;
    }, []);
}
merge(list)
```

## 32、合并数组-不同数组之间进行合并

两个数组根据 id 相同进行合并

```
const arr1 = [
  { id: 1, number: 5, },
  { id: 2, number: 10, },
]
const arr2 = [
  { id: 1, label: "较差" },
  { id: 1, label: "差" },
  { id: 2, label: "较差" },
  { id: 2, label: "差" },
]

arr1和arr2根据id合并成如下数组：

/**
    [
     {id: 1, number: 5, label: '较差'},
     {id: 1, number: 5, label: '差'},
     {id: 2, number: 10, label: '较差'},
     {id: 2, number: 10, label: '差'},
    ]
*/

const arr3 = arr2.map(item => {
    let foundItem = arr1.find(v => v.id == item.id)
    if (foundItem) {
        return {
            ...foundItem,
            ...item
        }
    }
    return item
})
```

## 33、对数组进行分类

```
let arr = [
  { name: "rk", age: 20 },
  { name: "rk1", age: 21 },
  { name: "zq", age: 20 },
  { name: "cl", age: 17 }
]

数组按照age字段进行分类，要求结果如下：

/**
let obj = {
  20: [
    {name: "rk", age: 20},
    {name: "zq", age: 20},
  ],
  21: [
    {name: "rk1", age: 21},
  ],
  17: [
    {name: "cl", age: 17}
  ]
}
*/

方案一：
let arr1 = arr.reduce((prev,curr) => {
  let key = curr["age"];
  if (!prev[key]) {
    prev[key] = []
  }
  prev[key].push(curr);
  return prev
},{})
console.log(arr1)

方案二：
ES6数组提供了一个新的方法来对数组按属性进行分类,目前只是提出方案，还不能正式使用。

但是lodash中提供了groupBy方法可以有效解决该类问题。
const arr1 = arr.groupBy(({ age }) => age)
```

## 34、深拷贝与浅拷贝

js 有两种数据类型：基本类型和引用类型

基本类型数据保存在在栈内存中

引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中

### 34.1 浅拷贝

浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝。
如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址，即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。

::: tip 常见的浅拷贝方法：
1、Object.assign()

2、concat()

3、扩展运算符 {...obj1, ...obj2}, [...arr1, ...arr2]

4、lodash 中的\_.clone 方法
:::

### 34.2 深拷贝

深拷贝开辟一个新的栈，两个对象属性完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

::: tip 常用的深拷贝方法：
1、jQuery.extend()

2、lodash 中的\_.cloneDeep()

3、JSON.parse(JSON.stringify())

4、自己封装
:::

```
第三种方法有弊端，会忽略undefined、函数和Symbol

let obj = {
  name: "rk",
  type: undefined,
  age: Symbol("yy"),
  getMax: function () {}
}
let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2) // { name: "rk" }
```

```
第四种：自己封装方法

function deepClone(obj, hash = new WeakMap()) {
  // 如果是null或者undefined我就不进行拷贝操作
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;

  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();

  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          // 实现一个递归拷贝
          cloneObj[key] = deepClone(obj[key], hash);
      }
  }
  return cloneObj;
}

// 举例：
let obj = {
  name: "rk",
  type: undefined,
  age: Symbol("yy"),
  getMax: function () {}
}

let obj2 = deepClone(obj);
console.log(obj2)
// { name: "rk", getMax: f(), age: Symbol(yy), type: undefined }
```

## 35、获取时间戳

```
方案一、
let date = new Date().getTime();
console.log(date)

方案二、
let date = +new Date;
console.log(date)
```

## 36、媒体查询

原来通过 max-width 和 min-width 来实现的现在可以通过数学运算符>=、<=来实现

```
方案一：
@media (max-width: 750px) {}
@media (min-width: 375px) and (max-width: 750px) {}

方案二：
@media (width <= 750px) {}
@media (375px <= width <= 750px) {}
```

## 37、分割时间

一般常见的是将 24 小时按照 30 分钟、60 分钟进行分组，像[00:00-00:30,00:30-01:00...]或者[00:00-01:00,01:00-02:00...]这种进行分组，但是还有其他情况，比如按照 15 分钟进行分组，[00:00-00:15,00:15-00:30...]等

::: warning 警告
需要注意的是，如果时间跨度无法被整除，那么生成的时间区间可能无法完全覆盖 24 小时。
:::

```
// time是要分割的时间，比如 15、30、60等
function generateTimes(time) {
    let size = Math.floor((24 * 60) / time);
    let timeArrays = new Array(size).fill("").map((item, index) => {
      let startVal = index * time;
      let endVal = (index + 1) * time;
      let startHour = Math.floor(startVal / 60);
      let startMinute = startVal % 60;
      let endHour = Math.floor(endVal / 60);
      let endMinute = endVal % 60;
      let startTime =
        (startHour < 10 ? "0" + startHour : startHour) +
        ":" +
        (startMinute === 0 ? "00" : startMinute);
      let endTime =
        (endHour < 10 ? "0" + endHour : endHour) +
        ":" +
        (endMinute === 0 ? "00" : endMinute);

      return startTime + " - " + endTime;
    });
    return timeArrays;
}

console.log(generateTimes(15));
```

## 38、取出数组最后一项

```
let arr = [1, 2, 3, 4, 5];

1、使用数组的length-1取值
let last = arr[arr.length - 1]; // 5

2、使用slice方法获取,slice方法获取到的数据是一个数组
let last = arr.slice(-1)[0]; // 5

3、使用slice + 解构赋值取值;
let [last] = arr.slice(-1); // 5

4、使用at方法获取

/**
  at 方法传递索引为正时从左往右定位（这与直接通过下标访问的作用一致），索引为负时
  从右往左定位。在访问数组最后一个元素的场景中非常好用。从 Chrome 92 开始已经支持
  at 方法，core-js 也提供了 polyfill。
*/

let last = arr.at(-1); // 5
```

## 39、检查对象中是否有某个属性

```
1、可以使用 in 关键字检查对象中是否存在某个属性：

let obj = { name: "rk", age: 30 };
console.log("sex" in obj) // false
console.log("age" in obj) // true

// 但是 in 关键字其实并不安全，会把原型上的属性也包括进去，例如：
console.log("toString" in {}); // true

2、使用Object.prototype.hasOwnProperty.call()

Object.prototype.hasOwnProperty.call(obj , "age"); // true
Object.prototype.hasOwnProperty.call(obj , "sex"); // false

3、使用Object.hasOwn()

// 需要注意这个语法存在兼容性问题（Chrome > 92），不过只要正确配置 polyfill，就可以放心使用。

Object.hasOwn(obj, "age")； // true
Object.hasOwn(obj, "sex"); // false
```

## 40、将数组或者 Map 转为对象

```
1、数组转为对象
let arr = [
  ["name", "rk"],
  ["age", 30]
]
let obj = Object.fromEntries(arr);
console.og(obj);  // { name: "rk", age: 30};

2、将Map转为对象
let arr = new Map([
  ["name", "rk"],
  ["age", 30]
])
let obj = Object.fromEntries(arr);
console.og(obj);  // { name: "rk", age: 30};
```

## 41、ES6 将对象转为数组

```
let obj = { name: "rk", age: 30};
let arr = Object.entries(obj);
console.log(arr); // [["name", "rk"], ["age", 30]]
```

## 42、js 判断两个对象是否相等

```
let obj1 = {
  name: "rk",
  age: 33,
  sex: "男"
}
let obj2 = {
  name: "rk1",
  age: 33,
  sex: "男"
}

方法1 -> 如果两个对象中的属性名和属性值相同，但是顺序不同，会判定为true

function isObjectValueEqual (a, b) {
    // 取对象a和b的属性名
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // 判断属性名的length是否一致
    if (aProps.length != bProps.length) {
        return false;
    }
    // 循环取出属性名，再判断属性值是否一致
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
console.log(isObjectValueEqual(obj1,obj2)) // false

方法2 -> 如果两个对象中的属性顺序不一样，则会判定为false

const isEqual = (...objects) => objects.every((obj) =>
  JSON.stringify(obj) === JSON.stringify(objects[0]));
```

## 43、ES6 将对象数组转为对象

```
如何将以下对象数组转为对象？

let arr = [
  {name: "rk", age: 33},
  {name: "cl", age: 30}
]
转为
{rk: 33, cl: 30}

const result = Object.fromEntries(
    arr.map(({ name, age }) => [name, age])
);
console.log(result) // {cl: 30, rk: 33}
```

## 44、数组取交集、差集、并集、补集

### 44.1 交集

```
const arr = [1, 2, 3, 4, 5, 6];
const brr = [4, 5, 6, 7, 8, 9];

const crr = [...new Set(arr)].filter(item => brr.includes(item));
console.log(crr); // [4, 5, 6]
```

### 44.2 差集

```
const arr = [1, 2, 3, 4, 5, 6];
const brr = [4, 5, 6, 7, 8, 9];

// 第一种，arr中的差集
const crr = [...new Set(arr)].filter(item => !brr.includes(item));
console.log(crr); // [1, 2, 3]

// 第二种，brr中的差集
const crr = [...new Set(brr)].filter(item => !arr.includes(item));
console.log(crr); // [7, 8, 9]
```

### 44.3 并集

```
const arr = [1, 2, 3, 4, 5, 6];
const brr = [4, 5, 6, 7, 8, 9];

const crr = brr.filter(item => !arr.includes(item));
const drr = [...arr, ...crr];
console.log(drr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 44.4 补集

```
const arr = [1, 2, 3, 4, 5, 6];
const brr = [4, 5, 6, 7, 8, 9];

方案一：

// 先取出数组交集
const crr = [...new Set(arr)].filter(item => brr.includes(item));

// 合并arr和brr数组并去重，过滤掉并集数据
const drr = [...new Set([...arr, ...brr])]
            .filter(item => !crr.includes(item));
console.log(drr) // [1, 2, 3, 7, 8, 9]

// 方案二：

const crr = [...new Set([...arr, ...brr])]
          .filter(item => !arr.includes(item) || !brr.includes(item))
console.log(drr) // [1, 2, 3, 7, 8, 9]
```

## 45、数组批量造数据

```
方案一：创建新数组使用 for 循环批量 push 数据
let arr = []
for(let i = 0; i < 1000; i++) {
  arr.push(i)
}

方案二：创建空数组，填充full，然后map
function createData() {
 // 如果不 fill 循环默认会跳过空值
 return new Array(1000).fill(null).
  map((v, i) => ({ name: `name${i + 1}` }));
}
const data = createData();
console.log(data);

方案三:Array.from 第二个初始化函数返回数据
function createData() {
  return Array.from({ length: 1000 },
         (v, i) => ({ name: `name${i + 1}` }));
}
const data = createData();
console.log(data);
```

## 46、forEach 和 map

项目中会经常碰见从后台拿取数据，前端重新整理数据用于渲染等，如 data 是后台获取的数据

```
const data = [
  {id:1, name: "xx", age: 23, sex: "男", hobby: "basketball"},
  {id:2, name: "yy", age: 24, sex: "女", hobby: "football"}
]

我们现在只需要id和age去做其他事情,并且键名不同

方案一：使用forEach
let brr = [];
let obj = {};
data.forEach(item => {
  let obj = {
    cId: item.id,
    cAge: item.age
  }
  brr.push(obj)
})
console.log(brr)
// [{cId: 1, cAge: 23},{cId: 2, cAge: 24}]

方案二：使用map
let brr = [];
brr = data.map(item => ({cId: item.id, cAge: item.age}))
console.log(brr);
// [{cId: 1, cAge: 23},{cId: 2, cAge: 24}]

从以上代码可以看到，两个函数都可以实现，但是使用map比较简洁，减少变量的声明。
```

## 47、使用数组扁平化处理多维度数据--flat

```
项目中常见的情况：将data中的所有children合并成一个数组

const data = [
  {
    id: 1,
    name: "方案",
    children: [
      {id: "1-1",name: "方案一"},
      {id: "1-2",name: "方案二"},
    ]
  },
  {
    id: 2,
    name: "结果",
    children: [
      {id: "2-1",name: "结果一"},
      {id: "2-2",name: "结果二"},
    ]
  }
]

方案一：
let arr = [];
data.forEach(item => {
  item.children.forEach(list => {
    arr.push(list)
  })
})
console.log(arr)

方案二：
let arr = [];
arr = data.map(({ children }) => children).flat();
console.log(arr)
/**
 [
    {id: '1-1', name: '方案一'},
    {id: '1-2', name: '方案二'},
    {id: '2-1', name: '结果一'},
    {id: '2-2', name: '结果二'}
  ]
*/
```

## 48、reduce 使用

```
项目中常见情景：

将
const data = [
  {name: "陕西-西安"},
  {name: "陕西-咸阳"},
  {name: "甘肃-兰州"},
  {name: "甘肃-庆阳"}
]
转换为：
const arr = [
  {
     province:"陕西",
     children: [
       {city: "西安"},
       {city: "咸阳"}
     ]
  },
  {
     province:"甘肃",
     children: [
       {city: "兰州"},
       {city: "庆阳"}
     ]
  }
]

方案一：
const b = Object
    .entries(
        data.map(({ name }) => name.split("-"))
            .reduce((group, [province, city]) => {
                (group[province] ??= []).push({ city });
                return group;
            }, {})
    ).map(([province, children]) => ({ province, children}));
console.log(b)

方案二：
const b = data.reduce((res, item) => {
    let [province, city] = item.name.split('-')
    let parent = res.find(i => i.province === province)
    if (parent) {
        parent.children.push({ city })
    } else {
        res.push({province: province, children: [{ city }]})
    }
    return res
}, [])
```

## 49、数组对象去重-对其他属性进行相加

```
let arr = [
  {name: "rk", math: 52, chinese: 36},
  {name: "cl", math: 95, chinese: 97},
  {name: "zq", math: 86, chinese: 81},
  {name: "rk", math: 88, chinese: 94}
]

对数组对象根据name去重，并且对math和chinese进行相加

arr.reduce((brr,item) => {
  let res = brr.find(i => i.name == item.name);
  if (res) {
    res.math += item.math;
    res.chinese += item.chinese;
  } else {
    brr.push(item)
  }
  return brr;
},[])
```

## 50、防抖和节流

### 50.1 防抖

指定时间内，频繁触发一个事件，以最后一次触发为准

::: tip 常用场景：
防抖： input 进行输入搜索，用户在不断输入内容时，用防抖来减少请求次数并且节约请求资源
:::

```
/*
*  防抖
*  fn 需要防抖的函数
*  delay 为定时器时间
*  immediate立即执行
*/
function debounce(fn, delay=1000，immediate = false) {
  let timer = null; // 用于保存定时器
  return function() {
    // 如果timer存在 就清除定时器，重新计时
    if (timer) {
      clearTimeout(timeout);
    }
    //适用于首次需要立刻执行的
    if (immediate && !timer) {
      func.apply(this, arguments)
    }
    // 设置定时器，规定时间后执行真实要执行的函数
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay)
  }
}
```

### 50.2 节流

指定时间内 频繁触发一个事件，只会触发一次

::: tip 常用场景：
节流：重复点击按钮，1s 之内点击多次，使用节流后，只会触发最后一次。
:::

```
/*
*  节流
*  fn 需要防抖的函数
*/
function throttle(fn，delay = 1000) {
  let lastTime = 0, timer = null; // 用于保存定时器
  return function () {
    let _this = this;
    let _arguments = arguments;
    let now = new Date().getTime()
    clearTimeout(timer);
    // 判断上次触发的时间和本次触发的时间差是否小于delay,创建一个timer
    if (now - lastTime < delay) {
      timer = setTimeout(function () {
        lastTime = now;
        fn.apply(_this, _arguments)
      }, delay)
    } else {
      // 否则可以直接执行
      lastTime = now;
      fn.apply(_this, _arguments);
    }
  }
}
```

## 51、网页改成灰白色

在一些特殊的日子，网站需要变成灰白色的时候可以使用以下属性

```
在最外层的容器上添加样式

.container {
  filter:grayscale(100%)
}
```

## 52、判断当前设备是苹果设备

```
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
```

## 53、数组对象取差集

```
从arr中过滤掉brr的数据

let arr = [
  {name: "rk", age: 33},
  {name: "zl", age: 30},
  {name: "cl", age: 28},
  {name: "zq", age: 31}
];
let brr = [
  {name: "cl", age:28},
  {name: "zl", age: 30}
]

方法一：
let crr = arr.filter(({name}) => !brr.some(item => item.name == name))
console.log(crr);

方法二:
let crr = arr.filter(({name}) => brr.every(item => item.name != name))
console.log(crr);
// [{name: 'rk', age: 33},{name: 'zq', age: 31}]
```

## 54、将数组结构转为树形结构

```
let arr = ["分类1","分类1/目录1","分类1/目录2","分类2","分类2/目录1","分类2/目录2","分类3"];

将arr转为以下结构

/**
brr = [
  {
    menu: "分类1",
    children: [
      {name: "分类1/目录1"},
      {name: "分类1/目录2"}
    ]
  },
  {
    menu: "分类2",
    children: [
      {name: "分类2/目录1"},
      {name: "分类2/目录2"}
    ]
  },
  {
    menu: "分类3",
    children: []
  }
]
*/

// 存放一级目录
let arr1 = arr.filter(item => !item.includes("/"));

// 存放二级目录
let arr2 = arr.filter(item => item.includes("/"));

const arr3 = arr1.map(item => {
  let list = [];
  for (let i = 0;i<arr2.length;i++) {
    if (arr2[i].includes(item)) {
      list.push({name: arr2[i]})
    }
  }
  const obj = {
    menu: item,
    children: list
  }
  return obj;
})

console.log(arr3)
```

## 55、将数组结构转为树形结构

前提是对象中的属性都是对象或者数组才可以用下边的方法进行合并

```
let obj1 = {
  love:["math","chinese"],
  series: {
    app: [1,2],
    sports: ["swim","sing"]
  }
}
let obj2 = {
  love:["english"],
  series: {
    app: [4],
    sports: ["basketball"]
  }
}

希望的结果是
obj = {
  love: ["math","chinese","english"],
  series: {
    app: [1,2,4],
    sports: ["swim","sing","basketball"]
  }
}

function merge(target,source) {
  return Object.keys(source).reduce((res,k) => {
    res[k] = k in target ? Array.isArray(res[k]) ? [...new Set(source[k].concat(target[k]))] : typeof res[k] == 'object' ? merge(res[k],source[k]) : res[k] : source[k]
    return res;
  }, JSON.parse(JSON.stringify(target)));
  // 为了不影响目标对象，做一次拷贝
}
```

## 56、多维数组排序问题

假设有无数层数组，需要对其中某个字段进行排序

```
let arr = [
  {
    sort: 6,
    children: [
      {
        sort: 5,
        children: [
          {sort: 10,},
          {sort: 1}
        ]
      },
      {
        sort: 3,
        children: [
          {sort: 18},
          {sort: 4}
        ]
      }
    ]
  },
  {
    sort: 10,
    children: [
      {
        sort: 2,
        children: [
          {sort: 153},
          {sort: 3}
        ]
      },
      {
        sort: 4,
      }
    ]
  }
]

function sortFun(list) {
  if (!Array.isArray(list)) {return}
  list.forEach(({children}) => sortFun(children))
  list.sort((a,b)=> a.sort - b.sort)
}
sortFun(arr)
```

## 57、将多维数组对象中的属性名称进行修改

```
let arr = [
  {
    name: '陕西省',
    code: 12,
    children: [
      {name: '西安',code: 1201,},
      {name: '咸阳',code: 1202,},
    ],
  },
  {
    name: '山东省',
    code: 15,
    children: [
      {name: '青岛',code: 1501,},
      {name: '潍坊',code: 1506,},
    ],
  },
];

将arr中所有的name换成label，code替换成value

方法1：
let s = arr.map(item => {
  let res = {};
  res.value = item.code;
  res.lable = item.name;
  if (item.children) {
    res.children = item.children.map(data => {return {value: data.code,label: data.name}})
  }
  return res;
})

方法2：
const TreeDataSource = (arr) => {
  if (!Array.isArray(arr)) {
    return;
  }
  let obj = {};
  return arr.map((v, i) => {
    obj = {
      value: v.code,
      lable: v.name,
    };
    if (v.children) {
      obj.children = TreeDataSource(v.children);
    }
    return obj;
  });
};
```

## 58、将数组转化为对象

```
将["张三",1,"李四",5,"王麻子",6] 转为 {"张三":1,"李四":5,"王麻子":6}

let arr = ["张三",1,"李四",5,"王麻子",6];
let obj = {};
while(arr.length) {
  obj[arr.shift()] = arr.shift();
}
console.log(obj)
```

## 59、console.log

使用时，可以将参数用大括号括起来，这样就可以看到变量名称和变量值

```
let obj = {
    name: "rk",
    age: 23
}
console.log({obj})
```

## 60、删除对象中所有的 null 和 undefined

```
let obj = {
  name: "xx",
  age: null,
  id: undefined,
  sex: "男"
}

方法1：
const removeNullUndefined = (obj) =>
  Object.entries(obj)
   .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});
```

```
方法2:
const removeNullUndefined = (obj) =>
  Object.entries(obj)
  .filter(([_, v]) => v != null)
  .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
```

```
方法3：
const removeNullUndefined = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
console.log(removeNullUndefined(obj))
```

## 61、根据对象的属性对其进行排序

```
let obj = {
  name: "xx",
  age:23,
  id: 12,
  class: 2,
  sex: "男"
}

function sorts(obj) {
  return Object.keys(obj).sort().reduce((p,c) => ((p[c] = obj[c]),p),{})
}
console.log(sorts(obj))

/**
{
    "age": 23,
    "class": 2,
    "id": 12,
    "name": "xx",
    "sex": "男"
}
*/
```

## 62、给时间添加"am/pm"后缀

```
h的值是介于0-23之间

function suffixAmPm(h) {
  return `${h % 12 === 0 ? 12 : h % 12} ${h < 12 ? "am" : "pm"}`
}
console.log(suffixAmPm(12))
```

## 63、计算两个日期之间的天数

计算 2022-11-15 和 2023-03-01 之间的天数

```
function diffDays(date,otherDate) {
 return Math.ceil(Math.abs(new Date(date)- new Date(otherDate)) / (1000 * 24*60*60))
}
console.log(diffDays("2022-11-15","2023-03-01"))
```

## 64、copyWithin()方法使用

copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

```
/**
  第一个参数：从索引3的位置开始粘贴
  第二个参数：从索引0的位置开始复制
  第三个参数：遇到索引3时停止复制（不包含该位置本身）
*/

let arr = [1, 2, 3, 'arr', 5, 9, 17];
arr.copyWithin(3, 0, 3);
console.log(arr);//[1,2,3,1,2,3,17]
```

## 65、css 禁止用户选择

```
body{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

## 66、横向数组和纵向数组之间转换(矩阵交换行和列)

```

方法一：

1、横向数组转为纵向数组

let arr = [
  ["销售（sales）","4300","5000","6000"],
  ["管理（Administration）","10000","14000","16000"],
  ["信息技术（Information Techology）","28000","28000","30000"],
  ["客服（Customer Support）","35000","31000","38000"],
  ["研发（Development）","50000","42000","52000"],
  ["市场（Marketing）","19000","21000","25000"]
]

function reverse(arr) {
  let list = [];
  for (let i = 0;i < arr[0].length;i++) {
    list[i] = [];
  }
  for (let i = 0;i < arr.length;i++) {
    for (let j = 0;j<arr[i].length;j++) {
      list[j][i] = arr[i][j]
    }
  }
  return list
}
console.log(reverse(arr))

/**
[
  ["销售（sales）","管理（Administration）","信息技术（Information Techology）","客服（Customer Support）","研发（Development）","市场（Marketing）"],
  ["4300","10000","28000","35000","50000","19000"],
  ["5000","14000","28000","31000","42000","21000"],
  ["6000","16000","30000","38000","52000","25000"],
]
*/


2、纵向转为横向

let arr = [
  [2004, 2005, 2006, 2007, 2008],
  [46890000, 55900500, 33786400, 57054400, 61834100],
  [28440000, 29340700, 15127600, 16771500, 36568800]
]

function changeArr(arr) {
  let maxLength = getMaxLength(arr);
  let rowArr=[];
  for (let i = 0;i<arr.length;i++) {
    for (let j = 0;j<maxLength;j++) {
      if (!rowArr[j]) {
        rowArr[j] = [];
      }
      rowArr[j].push(arr[i][j]);
    }
  }
  return rowArr
}

function getMaxLength(arr) {
    let max = 0;
    for (let i = 0;i<arr.length;i++) {
      if (arr[i].length > max) {
        max = arr[i].length;
      }
    }
    return max;
}
console.log(changeArr(arr))

方法二：
let arr = [
  [1,2,3,4,5],
  [4,5,6,7,null],
  [7,8,9,null,null]
]
转为
[
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [4,7,null],
  [5,null,null]
]

或者

let arr = [
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [4,7,null],
  [5,null,null]
]
转为
[
  [1,2,3,4,5],
  [4,5,6,7,null],
  [7,8,9,null,null]
]

const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i] ?? null));
```

## 67、将数组里面的对象转换为其他键值对

```
转换前:
[{入职日期:12,姓名:"rk",手机号:13266665555,转正日期:17,工号:12345},{...},{...}]
转换后:
[{timeOfEntry:12,name:"rk",tel:13266665555,correctionTime:17,workNum:123450},{...}]

第一种，将中文转换为英文

// 罗列映射关系
let userRelations = {
  "入职日期": "timeOfEntry",
  "姓名": "username",
  "手机号": "mobile",
  "转正日期": "correctionTime",
  "工号": "workNumber",
  "部门": "departmentName"
}
let arr = [
  {"入职日期":12,"姓名":"xf","手机号":13266665555,"转正日期":17,"工号":45,"部门":"董事长"},
  {"入职日期":15,"姓名":"zq","手机号":13266666666,"转正日期":20,"工号":46,"部门":"小秘1"},
  {"入职日期":18,"姓名":"zj","手机号":13266667777,"转正日期":23,"工号":47,"部门":"小秘2"},
  {"入职日期":21,"姓名":"cl","手机号":13266668888,"转正日期":25,"工号":48,"部门":"小秘3"},
]

第二种，将英文转为中文
const userRelations = {
  timeOfEntry: '入职日期',
  mobile: '手机号',
  username: '姓名',
  correctionTime: '转正日期',
  workNumber: '工号',
  departmentName: '部门',
};
let arr = [
  {timeOfEntry:12,username:"xf",mobile:13266665555,correctionTime:17,workNumber:45,departmentName:"董事长"},
  {timeOfEntry:15,username:"zq",mobile:13266666666,correctionTime:20,workNumber:46,departmentName:"小秘1"},
  {timeOfEntry:18,username:"zj",mobile:13266667777,correctionTime:23,workNumber:47,departmentName:"小秘2"},
  {timeOfEntry:21,username:"cl",mobile:13266668888,correctionTime:25,workNumber:48,departmentName:"小秘3"},
]

// 此方法可共用
function demandArr(userRelations,arr) {
  let list = [];
  arr.forEach(item => {
    let obj = {};
    for (let i in item) {
      const key = userRelations[i]
      obj[key] = item[i]
    }
    list.push(obj)
  })
  return list
}
demandArr(userRelations,arr)
```

## 68、js 精度丢失解决方案

因为在计算机最底层，数值的运算和操作都是采用二进制实现的，所以计算机没有办法精确表示浮点数，而只能用二进制近似相等的去表示浮点数的小数部分。

::: tip 解决方案
1、Decimal.js

2、bignumber.js

3、big.js

4、手写代码
:::

以下是手写代码

```
/*
* 加法
* 0.1 + 0.2 = 0.30000000000000004
* 0.7 + 0.1 = 0.7999999999999999
*/

function plus(num1, num2) {
    let r1, r2, m;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (num1 * m + num2 * m) / m
}
```

```
/*
* 减法
* 1.5 - 1.2 = 0.30000000000000004
* 0.3 - 0.2 = 0.09999999999999998
*/
function subtract(num1, num2) {
    let r1, r2, m, n;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return +((num1 * m - num2 * m) / m).toFixed(n);
}
```

```
/*
* 乘法
* 1.1 * 100 = 110.00000000000001
* 0.8 * 3 = 2.4000000000000004
*/
function multiply(num1, num2) {
    let m = 0,
        s1 = num1.toString(),
        s2 = num2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {}
    try {
        m += s2.split(".")[1].length
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
```

```
/*
* 除法
* 0.3 / 0.1 = 2.9999999999999996
* 0.69 / 10 = 0.06899999999999999
*/
function divide(num1, num2) {
    let t1 = 0,
        t2 = 0,
        r1, r2;
    try {
        t1 = num1.toString().split(".")[1].length
    } catch (e) {}
    try {
        t2 = num2.toString().split(".")[1].length
    } catch (e) {}
    with(Math) {
        r1 = Number(num1.toString().replace(".", ""))
        r2 = Number(num2.toString().replace(".", ""))
        // multiply乘法配合一起使用
        return multiply((r1 / r2), pow(10, t2 - t1));
    }
}
```

## 69、前端根据多个条件筛选过滤数据

多条件过滤数据

```
let arr = [
  {
    name: "rk",
    age: 30,
    sex: "男",
    hobby: "basketball",
    status: 1
  },
  {
    name: "zq",
    age:27,
    sex: "male",
    hobby: "read",
    status: 2
  }
]

function filterHandle(condition,data) {
  return data.filter(item => {
    return Object.keys(condition).every(key => {
      return String(item[key]).toLowerCase().includes(
        String(condition[key]).trim().toLowerCase()
      )
    })
  })
}

let condition = {name: "rk",age: ""}
filterHandle(condition,arr)
```

## 70、获取每个月最后一天

```
方法1
function getLastDay(year,month) {
  const isLeap = ((year % 4) == 0) && (year % 100 != 0)
        || ((year % 400) == 0)
  const maxDays = [1,3,5,7,8,10,12]
  const middleDays = [4,6,9,11]
  if (+month == 2) {
    if (isLeap) {
      return 29
    } else {
      return 28
    }
  } else if (maxDays.includes(month)) {
    return 31
  } else if (middleDays.includes(month)) {
    return 30
  }
}

方法2
function getLastDay(year, month) {
  const date = new Date(year, month, 0)
  return date.getDate()
}

```

## 71、树形数据结构转换

```
let arr = [
  { id: "a", pid: "", name: "总裁办" },
  { id: "b", pid: "", name: "行政部" },
  { id: "c", pid: "", name: "财务部" },
  { id: "d", pid: "c", name: "财务核算部" },
  { id: "e", pid: "c", name: "税务管理部" },
  { id: "f", pid: "e", name: "税务管理部-分部" },
]

function tranListToTree(list) {
  const treeList = [],map = {};
  list.forEach(item => {
    if (!item.children) {
      item.children = []
    }
    map[item.id] = item
  })
  list.forEach(item => {
    const parent = map[item.pid]
    if (parent) {
        parent.children.push(item)
    } else {
      treeList.push(item)
    }
  })
  return treeList
}
```

## 72、replace 方法替换变量

可以通过变量进行全文替换

```
// 将变量key替换成b
string.replace(new RegExp(key,"g"),"b")
```

## 73、删除数组中某个指定的元素

```
let value = 'b',arr = ['a','b','c','d']

// 1、splice删除
arr.splice(arr.indexOf(value), 1)

// 2、filter删除
arr = arr.filter(item => item != value)

// 3、for删除
let arrLen = arr.length,newArr = []
for (let i = 0; i < arrLen; i++) {
    if (arr[i] !== value) {
        newArr.push(arr[i])
    }
}

// 4、Set删除
let newSet = new Set(arr)
newSet.delete(value)
let newArr = [...newSet]
```

## 74、递归替换数组对象字段名称

```
let arr = [
  {
    id: 12,
    typeName: 'xf',
    enable: 1,
    sort: 45,
    children: [
      {id: 115,typeName: 'dd',enable: 1,sort: 49,},
      {id: 116,typeName: 'ed',enable: 1,sort: 50,},
    ],
  },
  { id: 13, typeName: 'xf1', enable: 2, sort: 46 },
  { id: 14, typeName: 'xf2', enable: 1, sort: 47 },
  { id: 15, typeName: 'xf3', enable: 2, sort: 48 },
];

const treeDataSource = (arr) => {
  if (!Array.isArray(arr)) {
    return;
  }
  let obj = {}
  return arr.map((v, i) => {
    obj = {
      key: v.id,
      title: v.typeName,
      order: v.sort,
      isClose: v.enable == 1 ? false : true,
    }
    if (v.children) {
      obj.children = treeDataSource(v.children)
    }
    return obj
  });
};
console.log(treeDataSource(arr))
```

## 75、检测数据类型

```
export const typeOf = function(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
```

## 76、手机号脱敏

```
export const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}
```

## 77、大小写转换

```
/*
* str 待转换的字符串
* type 1-全大写 2-全小写 3-首字母大写
*/
export const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
    default:
      return str
  }
}
```

## 78、滚动到页面顶部

```
export const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
}
```

## 79、滚动到元素位置

```
export const smoothScroll = element =>{
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};

smoothScroll('#target'); // 平滑滚动到 ID 为 target 的元素
```

## 80、滚动到元素位置

```
/*
* {number} number：要格式化的数字
* {number} decimals：保留几位小数
* {string} dec_point：小数点符号
* {string} thousands_sep：千分位符号
*/

export const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
  const dec = typeof dec_point === 'undefined' ? '.' : dec_point
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

moneyFormat(10000000) // 10,000,000.00
moneyFormat(10000000, 3, '.', '-') // 10-000-000.000
```

## 81、模糊搜索

```
/*
* list 原数组
* keyWord 查询的关键词
* attribute 数组需要检索属性
*/

export const fuzzyQuery = (list, keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord)
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i])
    }
  }
  return arr
}

const list = [
  { id: 1, name: 'qa' },
  { id: 2, name: 'ws' },
  { id: 3, name: 'ed' },
  { id: 4, name: 'rf' },
  { id: 5, name: 'tg' },
  { id: 6, name: 'az' },
  { id: 7, name: 'sx' },
  { id: 8, name: 'dc'},
  { id: 9, name: 'fv'},
  { id: 10, name: 'gb'},
]
fuzzyQuery(list, 'f', 'name')
```

## 82、复制文本

```
const copyText = (text) => {
  // clipboardData 在页面上将需要的东西复制到剪贴板上
  const clipboardData = window.clipboardData
  if (clipboardData) {
    clipboardData.clearData()
    clipboardData.setData('Text', text)
    return true
  } else if (document.execCommand) {  // 注意 document.execCommand 已弃用 但是有些浏览器依旧支持 用的时候记得看兼容情况
    // 通过创建 dom 元素，去把要复制的内容拿到
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    // 拷贝当前内容到剪贴板
    document.execCommand('copy')
    // 删除 el 节点
    document.body.removeChild(el)
    return true
  }
  return false
}
copyText('hello!') // ctrl + v = copyText  | true
```

## 83、js 如何判断 a 数组的 value 和 b 数组的 key 是否相同，组成新数组

```
let arr = [
  {id:1, key: 'key1', value: 'rk'},
  {id:2, key: 'key2', value: 'rl'}
]
let brr = [
  {id: 3, key1: 'rr'},
  {id: 4, key2: 'cc'}
]

期望结果
[
  {id: 3, key1: "rr", key: "key1", value: "rk"},
  {id: 4, key2: "cc", key: "key2", value: "rl"}
]


const crr = brr.map(item => {
  let obj = arr.find(list => Object.keys(item).includes(list.key))||{}
  return {...obj, ...item}
})
```

## 84、根据后台返回数据过滤出需要字段

```
let detailInfo= {a: 1, b: 2}; // 前端页面定义字段
let resObj = {a: 10, b: 20, c: 30}; // 后端接口返回字段
Object.keys(detailInfo).forEach(key => detailInfo[key] = resObj[key]);
```

## 85、后端参数处理

```
// 前端定义的字段
let queryForm = {
  date_range:[],
  name: "",
  age: "",
  account: "",
  companyName: "",
  price: ""
}
// 后端需要的字段
let obj = {
  start_date: "",
  end_date: "",
  name: "",
  age: "",
  account: "",
  companyName: "",
  price: ""
}

方法一：
let obj = {
  ...queryForm,
  start_date: queryForm.date_range?.split(0),
  end_date:queryForm.date_range?.split(1),
}
delete obj.date_range

方法二：
const {date_range,...params} = queryForm;
params.start_date = date_range?.[0];
params.end_date= date_range?.[1];
```

## 86、定时器中使用$once 代替 destory

如果项目中使用定时器，一般会在 data 下设置一个变量，在 created 或者 mounted 中定义定时器，在 beforeDestroy 中销毁定时器。这种方式有个弊端是设置了一个全局变量，就多一次设置响应数据，消耗性能，可以使用$once 代替

```
data() {
  return {
    timer: null
  }
},
created() {
  this.timer = setInterval(() => {
    ...
  },100)
},
beforeDestroy() {
  clearInterval(this.timer);
  this.timer = null;
},

// 使用$once
created() {
 let timer = setInterval(() => {
    ...
  }, 100);
  this.$once("hook:beforeDestroy",() => {
    clearInterval(timer);
    timer = null;
  })
}

```
