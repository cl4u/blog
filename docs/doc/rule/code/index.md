---
outline: deep
---

# 文件目录命名规范

该目录下包含 项目文件命名、Vue 组件命名、代码参数命名。

## 1、项目文件命名

### 1.1 项目命名

全部采用小写方式，以下划线分隔。如 my_project_name 等。

### 1.2 目录命名

命名方式遵循小驼峰命名法，但是有复数时，要采用复数命名方式。
如:images,modules 等。

### 1.3 HTML 文件命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。
如：form_detail.html 等。

### 1.4 CSS 文件命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以短横线分隔。
如：base.css,form-input.css 等。

### 1.5 Javascript 文件命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以小驼峰为准。
如：validate.js,setStyle.js 等。

### 1.6 图片文件命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。
如;logo.png,side_tab.png 等。

## 2、Vue 组件命名

### 2.1 文件命名

一般 views 下的.vue 文件命名都是使用中划线命名规则，如：user-add.vue 等。
views 下的文件是用中划线，component 是用单数。

### 2.2 全局公共组件命名

文件扩展名为 .vue 的 single-file components (单文件组件)。单文件组件名应该始终是中划线风格 (kebab-case)。 如：custom-batch-import.vue 等。

#### 2.2.1 基础组件名

基础组件：不包含业务，独立、具体功能的基础组件，比如日期选择器、模态框等。
这类组件作为项目的基础控件，会被大量使用。

像这种不掺杂业务逻辑或者没有逻辑的基础组件，应该使用统一的前 base,如：base-button.vue、base-pagination.vue 等

#### 2.2.2 业务组件名

它不像基础组件只包含某个功能，而是在业务中被多个页面复用的（具有可复用性），它与基础组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；而基础组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框。

掺杂了复杂业务的组件（拥有自身 data、prop 的相关处理）即业务组件应该以 Custom 前缀命名。 如：custom-batch-import.vue 等。

#### 2.2.3 单例组件名

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

只应该拥有单个活跃实例的组件应该以  The  前缀命名，以示其唯一性。

### 2.3 紧密耦合的组件名

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
```

### 2.4 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

```
components/
|- search-button-clear.vue
|- search-button-run.vue
|- search-input-query.vue
|- search-input-exclude-glob.vue
|- settings-checkbox-terms.vue
```

### 2.5 完整单词的组件名

组件名称使用完整单词进行命名，禁止使用单词缩写。如：update-bind-statue.vue 等。

## 3、代码参数命名

### 3.1 prop 命名

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。我们单纯的遵循每个语言的约定，在 JavaScript 中自然是 camelCase。而在 HTML 中则是 kebab-case。

如父组件引用子组件：

```
<add-user :show-add-dialog="showAddDialog"></add-user>
```

子组件接收传值:

```
export default{
  name: "AddUser",
  props: {
    showAddDialog: {
      type: Object,
      default: () => ({})
    }
  }
}
```

### 3.2 路由命名规范

path 命名规范采用 kebab-case 命名规范（尽量与 vue 文件的目录结构保持一致，因为目录、文件名都是 kebab-case，这样很方便找到对应的文件）
name 命名规范采用 KebabCase 命名规范且和 component 组件名保持一致！（因为要保持 keep-alive 特性，keep-alive 按照 component 的 name 进行缓存，所以两者必须高度保持一致）

```
// 动态加载
export const reload = [
  {
    path: '/reload',
    name: 'reload',
    component: Main,
    meta: {
      title: '动态加载',
      icon: 'icon iconfont'
    },
    children: [
      {
        path: '/reload/smart-reload-list',
        name: 'SmartReloadList',
        meta: {
          title: 'SmartReload',
        },
        component: () =>
          import('@/views/reload/smart-reload/smart-reload-list.vue')
      }
    ]
  }
];
```

### 3.3 模板中的组件

一般在父组件引入子组件使用大驼峰，在 dom 中引用使用中划线，即 kebab-case。

```
<add-user :show-add-dialog="showAddDialog"></add-user>
 
import AddUser from "./component/add-user.vue";
```

### 3.4 变量命名

变量命名规则是类型+对象描述的方式，一般使用小驼峰形式。如：

```
let dialogTitle = "弹窗名称";
let addContractTitle = "新增合同"
```

### 3.5 常量命名

常量命名规则是大写字母+下划线分割单词。如：

```
const ELECTRO_TYPE = [];
const STEP_NUM = 1;
```

### 3.6 方法命名

一般使用动词+名词命名，使用小驼峰形式。如：

```
// 跳转页面
jumpPage() {
  //
}
```

如果方法中的数据处理逻辑比较多，需要写 handle 函数对数据进行处理，一般是方法后+handle,如：

```
// 获取页面列表
getContractList() {
  getContractList().then(res => {
    if (res) {
      this.getContractListHandle(res.data);
    } else {

    }
  })
}
// 数据处理函数
getContractListHandle(data) {
  //
}
```

以下为一般命名方法名称前缀，可以语义化的知道该方法作用

::: details 示例
| 动词 | 含义 | 返回值 |
| :------- | :------: | -------: |
| can | 判断是否可执行某个动作函数 | true：可执行；false：不可执行 |
| has | 判断是否含有某个值函数 | true：含有此值；false：不含有此值 |
| is | 判断是否为某个值函数 | true：为某个值；false：不为某个值 |
| get | 获取某个值 | 函数返回一个非布尔值 |
| set | 设置某个值 | 无返回值、返回是否设置成功 |
:::

### 3.7 自定义事件命名

自定义事件应始终使用 kebab-case 的事件名。不同于组件和 prop，事件名不存在任何自动化的大小写转换。并且  v-on  事件监听器在 DOM 模板中会被自动转换为全小写。

父组件

```
// 在dom中，监听事件会自动转换大小写，所以全部写成中划线形式，可以优化代码。
<get-bind-status @get-status="getStatus"></get-bind-status>
```

子组件

```
// 事件调用时不会自动转换大小写
this.$emit("get-status")
```

### 3.8 事件方法命名

使用 handle + 名词 + 动词规范命名，一般使用小驼峰命名。如：

```
// 下拉框
<el-select @change="handleItemChange"></el-select>
 
// 提交按钮
<el-button @click="handleFormSubmit"></el-button>
```

### 3.9 中划线和小驼峰命名

一般在 html 中，class 和 id 命名有多个字母，使用中划线分割，如：class="user-info"。

一般在 js 中，定义变量时使用小驼峰命名，如：let userInfo = [];
