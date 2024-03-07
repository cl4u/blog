---
outline: deep
---

# 注释规范

该目录下包含 HTML、CSS、Javascript。

## 1、HTML

### 1.1 单行注释

一般用于简单的描述，如某些状态描述、属性描述等。

```
<!-- Comment Text -->
<div class="comment"></div>
```

### 1.2 模块注释

一般用于描述模块的名称以及模块开始与结束的位置。S 表示开始，E 表示结束,模块与模块之间使用空行隔开。

```
<!-- S 户号大于0页面展示内容 -->
<div v-if="userInfo.registerList.length > 0">
  ....
</div>
<!-- E 户号大于0页面展示内容 -->
 
<!-- S 户号小于0页面展示内容 -->
<div v-else>
  ....
</div>
<!-- E 户号小于0页面展示内容 -->
```

### 1.3 嵌套模块

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用。注释写在模块结尾标签底部，单独一行。

```
<!-- S 户号大于0页面展示内容 -->
<div v-if="userInfo.registerList.length > 0">
  <div>
      嵌套第一个模块
  </div>
  <!-- /first module -->

  <div>
    嵌套第一个模块
  </div>
  <!-- /second module -->

</div>
<!-- E 户号大于0页面展示内容 -->
```

## 2、CSS

### 2.1 单行注释

```
/* menu */
.menu {

}
```

### 2.2 模块注释

```
/* moduleA ------------------------------------------------------ */
 
/* moduleB ------------------------------------------------------ */
```

### 2.3 文件头部注释信息

```
/**
 * @desc: 基本样式定义
 * @auth: rk
 * @date: 2022-05-31
 * @LastEditors: rk
 * @LastEditTime: 2023-06-30 16:25:40
 */
```

## 3、Javascript

### 3.1 单行注释

单行注释使用  //，注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面。注释行的上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性。

```
methods: {
  // 获取当前页面列表数据
  getContractList() {
    getContractList(obj).then(res => {
      if (res) {
        this.pagination.total = res.total;

        // 对返回的数据进行特殊处理
        this.getContractListHandle(res.data);
      } else {
        ...
      }
    })
  }
}
```

### 3.2 多行注释

多行注释使用 /\*\* \*/

```
函数的注释
/**
 * @params{string} title - 需要传入名称
 * @params{number} type - 需要通过类型判断
 */
```

### 3.3 注释内容

注释内容与注释符之间需要使用空格

#### 3.3.1 data 中的注释

```
data() {
  return {
    companyList: [], // 存放公司名称数据
    isShowUser: false, // 是否展示用户信息
  }
}
```

#### 3.3.2 函数中的注释

```
// 分页回调
pagination() {
  //
}
```

### 3.4 特殊标记

目前常用的特殊标记有两个，TODO 和 FIXME。

TODO：记录还未开发完成的代码

FIXME：记录这块的代码有 bug,需要修复

```
// TODO 等待后台接口开发完成，对接接口
.....
 
// FIXME 以下实现方式需要测试边缘数据，对数组是否存在未判断
let startDate = this.searchForm.date_range[0];
let endDate = this.searchForm.date_range[1];
```
