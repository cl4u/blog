---
outline: deep
---

# 开发常见问题-js

## 1、if...else 优化

### 1.1 三元表达式

```javascript
let a = 1;

let b = a === 1 ? true : false;
```

### 1.2 switch...case

```javascript

function getVal(key) {
    switch (key) {
        case: 1
            return "正常";
        case: 2
            return "进行中";
        case: 3
            return "已售卖";
    }
}

```

### 1.3 策略模式

```javascript
let obj = {
  open: "必开",
  stop: "必停",
  other: "其他",
};

let name = list["open"];
```
