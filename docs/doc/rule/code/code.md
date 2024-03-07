---
outline: deep
---

# 代码规范

该目录下包含 HTML、CSS、Javascript、Vue。

## 1、HTML

### 1.1 元素及标签闭合

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和结束标签的元素亦都要写上。

- 空元素标签都不加 “/” 字符。

### 1.2 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

```
<!-- 块状 -->
<div>
    <h1></h1>
    <p></p>
</div>

<!-- 内联元素 -->
<p><span></span><span></span></p>
```

## 2、CSS

### 2.1 样式文件

样式文件必须写上  @charset  规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用  “UTF-8”。

```
@charset "UTF-8";
 
.container {
  //
}
```

### 2.2 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```
img {
  display: inline-block;
}
```

### 2.3 代码易读性

#### 2.3.1 左括号与类名之间一个空格，冒号与属性值之间一个空格

```
.container {
  width: 100%;
}
```

#### 2.3.2 逗号分隔的取值，逗号之后一个空格

```
.container {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

#### 2.3.3 颜色值 rgb()、rgba()中不需有空格，且取值不要带有不必要的 0

```
.container {
  color: rgba(255,255,255,.5);
}
```

#### 2.3.4 属性值十六进制数值能用简写的尽量用简写

```
.title_color {
  color: #fff;
}
```

#### 2.3.5 不要为  0  指明单位

能使用 none 的不要使用 0，可以减少一次计算。

```
.container {
  margin: 0 10px;
  border: none;
}
```

### 2.4 属性书写建议

::: tip 建议遵循以下顺序：

1、布局定位属性：display / position / float / clear / visibility / overflow

2、自身属性：width / height / margin / padding / border / background

3、文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word

4、其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient
:::

```
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  text-align: center;
  border-radius: 10px;
}
```

### 2.5 css3 浏览器兼容属性

CSS3 浏览器私有前缀在前，标准前缀在后。

```
.container {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

### 2.6 class 和 id 使用

class 一般是设置样式，是可以重复的，所以放在子级，id 一般是操作 dom，是唯一的，所以放在父级。

### 2.7 属性书写顺序

::: tip 提示：
class，id，name，data-\*，src，for，type，href，value，max-length，max，min，pattern，placehoulder，title，readonly，disabled
:::

### 2.8 选择器不要超过 4 层

```
// 定义样式时，最多不能超过4层
.container .main .left-box .user-info{
  ...
}
```

## 3、Javascript

### 3.1 命名

#### 3.1.1 采用小写驼峰命名

#### 3.1.2 方法名、参数名、成员变量、局部变量头统一使用小驼峰风格

::: warning 警告
其中 method 方法命名必须是 动词+名词 形式

特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他

add / update / delete / detail / get 
:::

::: details 函数方法常用的动词
get 获取/set 设置,

add 增加/remove 删除,

create 创建/destory 销毁,

start 启动/stop 停止,

open 打开/close 关闭,

read 读取/write 写入,

load 载入/save 保存,

begin 开始/end 结束,

backup 备份/restore 恢复,

import 导入/export 导出,

split 分割/merge 合并,

inject 注入/extract 提取,

attach 附着/detach 脱离,

bind 绑定/separate 分离,

view 查看/browse 浏览,

edit 编辑/modify 修改,

select 选取/mark 标记,

copy 复制/paste 粘贴,

undo 撤销/redo 重做,

insert 插入/delete 移除,

add 加入/append 添加,

clean 清理/clear 清除,

index 索引/sort 排序,

find 查找/search 搜索,

increase 增加/decrease 减少,

play 播放/pause 暂停,

launch 启动/run 运行,

compile 编译/execute 执行,

debug 调试/trace 跟踪,

observe 观察/listen 监听,

build 构建/publish 发布,

input 输入/output 输出,

encode 编码/decode 解码,

encrypt 加密/decrypt 解密,

compress 压缩/decompress 解压缩,

pack 打包/unpack 解包,

parse 解析/emit 生成,

connect 连接/disconnect 断开,

send 发送/receive 接收,

download 下载/upload 上传,

refresh 刷新/synchronize 同步,

update 更新/revert 复原,

lock 锁定/unlock 解锁,

check out 签出/check in 签入,

submit 提交/commit 交付,

push 推/pull 拉,

expand 展开/collapse 折叠,

enter 进入/exit 退出,

abort 放弃/quit 离开,

obsolete 废弃/depreciate 废旧,

collect 收集/aggregate 聚集
:::

### 3.2 单行代码块

在单行代码块中使用空格

```
function foo () { return true }
if (foo) { bar = 0 }
```

### 3.3 大括号风格

```
if (type == 1) {
  //
} else if (type == 2) {
  //
} else {
  //
}
```

### 3.4 代码中的空格

#### 3.4.1 逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格

```
let a = 2, arr = [];
```

#### 3.4.2 对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格

```
let obj = { name: "rk", age: 23 }
```

#### 3.4.3 代码块前要添加空格

```
if (a) {
  this.getList();
}
function a() {};
```

#### 3.4.4 在函数调用时，禁止使用空格

```
this.getList();
```

#### 3.4.5 在操作符前后都需要添加空格

```
let num = num1 + num2;
```

### 3.5 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try,catch, finally, with。

```
if (condition) {
  doSomething();
}
```

### 3.6 undefined 判断

永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串'undefined'对变量进行判断。

```
 if（typeof state === 'undefined'）{...}
```

### 3.7 this 的转换命名

对上下文 this 的引用只能使用 ’self’ 来命名。

## 4、Vue

### 4.1 代码结构

```
<template>
  <div clss="user-info">
    <p>111</p>
  </div>
</template>
<script>
import DemoComponent from '../component/DemoComponent';
export default {
  name: 'UserInfo',
  components: { DemoComponent },
props: {},
  mixins: [],
  data () {
    return {
      //
    }
  },
  computed: {},
  watch: {},
  Filter: {},
  created() {},
  mounted() {},
  methods: {},
  destroyed() {}
}
</script>
<style lang="scss" scoped>
.user-info {
 //
}
</style>
```

### 4.2 prop

prop 定义应该尽量详细

1、必须使用 camelCase 驼峰命名

2、必须指定类型

3、必须加上注释，表明其含义

4、必须加上 required 或者 default，两者二选其一

5、如果有业务需要，必须加上 validator 验证

```
props: {
  // 组件状态，用于控制组件的颜色
   status: {
     type: String,
     required: true,
     validator: function (value) {
       return [
         'succ',
         'info',
         'error'
       ].indexOf(value) !== -1
     }
   },
}
```

### 4.3 computed

应该把复杂计算属性分割为尽可能多的更简单的属性。

```
computed： {
  basePrice() {
    return this.num * this.price
  },
  disCount() {
    // 折扣
    return this.basePrice * this.rebates；
  }，
  lastPrice() {
    return this.basePrice - this.disCount;
  }
}
```

### 4.4 v-for 循环必须添加 key

vue 渲染是根据 key 值去对比，如果存在则使用原来的值，如果不存在，则新增或者删除，而且 key 值一般使用的是后台返回的 id,尽量不使用 index 作为 key 值，这可以节省渲染时间

```
<div>
  <span v-for="item in itemList" :key="item.id">
    {{ item.title }}
  </span>
</div>
```

### 4.5 v-if 和 v-for 互斥

永远不要把这两个放在同一个元素上。在 vue2 中，v-for 优先级高于 v-if，所以每次执行循环时都会判断一次是否存在，比较影响性能。而 vue3 中，v-if 优先级高于 v-for,所以一般解决这种问题有两种方案

1、在 v-for 外层加 v-if 进行判断

```
<div>
  <p v-if="showItem">
    <span v-for="item in itemList" :key="item.id">
      {{item.title}}
    </span>
  </p>
</div>
```

2、通过 computed 属性过滤掉不符合条件的数据

```
<div>
  <span v-for="item in itemList" :key="item.id">
    {{item.title}}
  </span>
</div>
 
computed: {
  getLastItemList() {
    return this.itemList.filter(item => item.flag)
  }
}
```

### 4.6 多个 attribute 多行显示

```
// 先写属性，再写方法
<show-add-dialog
  :title="title"
  :item-list="itemList"
  @get-list="getList"
>
</show-add-dialog>
```

### 4.7 模板中使用简单的表达式

在模板中使用简单的表达式，而复杂的表达式尽量用 computed 属性来实现

```
// 简单写入
<p>{{ num1 + num2 }}</p>
 
// 使用computed进行计算
<span>{{ getLastDate }}</span>
 
computed: {
  getLastDate() {
    return
      new Date(this.time).getFullYear
      +
      new Date(this.time).getMonth > 10
      ?
      new Date(this.time).getMonth
      :
      (new Date(this.time).getMonth+ 1)
  }
}
```

### 4.8 指令缩写

用  :  表示  v-bind:

用  @  表示  v-on:

用  #  表示  v-slot:

```
// 点击事件
<el-button @click="handleFormSubmit"></el-button>
 
// 属性绑定
<add-user :show-add-dialog="showAddDialog"></add-user>
 
// slot
<template #menu></template>
```

### 4.9 所有的 input 使用时，需要去除空格

```
<el-input v-model.trim="username"></el-input>
```

### 4.10 三元运算符禁止嵌套使用

```
let a = status === 1 ? "未完成" : status === 2 ? "已完成" : "已关闭"
```

### 4.11 所有的元素有 v-if 判断，则将 v-if 写在最前边

```
<el-form-item>
  <el-input
    v-if="status === 1"
    v-model="status"
    placeholder="">
  </el-input>
</el-form-item>
```

### 4.12 注释说明

1、公共组件使用说明

2、api 目录的接口 js 文件必须加注释

3、store 中的 state、mutation、action 等必须加注释

4、vue 文件的 methods,每个 method 必须添加注释

### 4.13 其他

1、尽量不要手动操作 dom

2、删除无用代码，包括 console.log，已废弃的功能代码
