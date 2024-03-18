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
