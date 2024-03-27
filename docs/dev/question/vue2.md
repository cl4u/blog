---
outline: deep
---

# 开发常见问题-vue2

## 1、token 设置

系统内嵌到其他系统时，token 不要使用 cookies 存储，而是通过 localStorage 存储
:::tip 提示
由于 Chrome 在 80 版本后，浏览器的 Cookie 新增加了一个 SameSite 属性，用来防止 CSRF 攻击和用户追踪。所以 iframe 内嵌页面无法写入 cookie
:::

## 2、使用 vue 项目中导出时文件名称从后台获取

在做后台管理系统项目时，导出功能后端一般返回文件流或者链接，前端进行相关处理，今天只说文件流相关内容，之前项目中所有的文件名称都是前端进行拼接的，像 xxxx-20231002122415.xlsx 等等，那下载时文件名称如何从后台获取呢？

### 2.1 首先需要后台配置

在响应标头中我们可以看到 Content-Disposition:attachment;filename=xxxxx.xlsx 信息，filename 后边的就是后台返回的文件名称，一般是进行转码的，但是前端一般是拿不到的，需要后端进行配置：

```javascript
response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
```

### 2.2 配置好后，可以看到相应头部有 Access-Control-Expose-Headers 信息，这个时候可以从 header 中拿到该信息，

<img src="../../imgs/question5.png" class="theme-image" />

```javascript
// 获取后台返回的文件名称
const headerFilename = response.headers["content-disposition"]
  ?.split(";")[1]
  .split("=")[1];
```

拿到 headerFilename 后，因为后端是 encode 过的，所以前端需要 decode 下，但是有时会出现乱码情况，而且 decode 后在其他浏览器可能也存在问题，这里可以一劳永逸的解决。

使用 Node.js 的 iconv-lite 解决中文乱码问题。

```javascript
if (headerFilename) {
  // 对文件名乱码转义--【Node.js】使用iconv-lite解决中文乱码
  let iconv = require("iconv-lite");
  iconv.skipDecodeWarning = true;
  let fileName = iconv.decode(headerFilename, "utf-8");
  data.fileName = fileName;
}
```

## 3、下拉框失焦问题

<img src="../../imgs/question1.gif" class="theme-image" />

切换下拉框类型后，然后从文件夹拖文件到导入框，会触发下拉框事件

解决方案：

```javascript
// 新建一个mixins
export default {
  data() {
    return {};
  },
  methods: {
    handleSelectChange(flag) {
      if (flag) {
        this.$refs.selectRef.focus();
      } else {
        this.$refs.selectRef.blur();
      }
    },
  },
};
```

```javascript
// 在下拉框上添加@visible-change事件
<el-select
    ref="selectRef"
    v-model="formParams.gensetId"
    placeholder="请选择机组"
    style="width: 100%"
    filterable
    @visible-change="handleSelectChange"
>
    <el-option
    v-for="item in importParams.gensetList"
    :key="item.id"
    :label="item.label"
    :value="item.id"
    ></el-option>
</el-select>

// 引入mixin
import selectMixin from "@mixins/selectMixin.js";
// 使用mixins
mixins: [selectMixin],
```

## 4、清除定时器

以前页面需要用到定时器时，要在 data 中定义变量，在 mounted 或者方法中使用定时器，然后在 beforeDestroy 中销毁。具体操作如下：

```js
export default {
  data() {
    timer: null;
  },
  mounted() {
    this.timer = setInterval(() => {
      // ...
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
```

但是我们可以使用$once 替换以上的代码，方便维护。

:::tip 介绍

- $once 是一个函数，可以为 Vue 组件实例绑定一个自定义事件，但该事件只能被触发一次，触发之后随即被移除。

- $once 有两个参数，第一个参数为字符串类型，用来指定绑定的事件名称，第二个参数设置事件的回调函数。

* $once 可以多次为同一个事件绑定多个回调，触发时，回调函数按照绑定顺序依次执行。

* 还可以作为修饰符使用
  :::

```js
export default {
  methods: {
    getInfo() {
      let timer = setInterval(() => {
        // ...
      }, 1000);
      this.$once("hook.beforeDestroy", () => {
        clearInterval(timer);
        timer = null;
      });
    },
  },
};
```

这样使用定时器和清除定时器就写在一起，不用定义多余的变量，感觉代码更优雅了。

## 5、支付密码组件

在 pc 端，做支付功能需要做一个输入密码框的组件，移动端会默认使用键盘，所以需要一个输入框组件，用来输入密码。

```html
<!-- passwordInput.vue -->
<template>
  <div :id="`ids_${id}`" class="m-password-input">
    <div v-for="(v, i) in 6" :key="i" class="box-input">
      <div v-show="pwdList[i]" class="u-dot" @click="changePwd">•</div>
      <input
        :key="i"
        v-model="pwdList[i]"
        type="tel"
        readonly
        onfocus="this.removeAttribute('readonly');"
        maxlength="1"
        autocomplete="new-password"
        class="u-input"
        @input="changeInput"
        @click="changePwd"
        @keyup="keyUp($event)"
        @keydown="oldPwdList = pwdList.length"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 1, // 当一个页面有多个密码输入框时，用id来区分
      },
      dataList: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        pwdList: [],
        pwdListReal: [],
        oldPwdList: [],
        isDelete: false,
        ipt: "",
      };
    },
    watch: {
      dataList: {
        handler(newVal, oldVal) {
          this.pwdList = newVal;
        },
        immediate: true,
      },
    },
    mounted() {
      this.pwdList = this.dataList;
      this.ipt = document.querySelectorAll(`#ids_${this.id} .u-input`);
    },
    methods: {
      keyUp(ev) {
        let index = this.pwdList.length;
        if (!index) return;
        if (ev.keyCode === 8) {
          this.isDelete = true;
          if (this.oldPwdList === this.pwdList.length) {
            if (index === this.pwdList.length) {
              this.pwdList.pop();
            }
            index--;
          } else {
            index > 0 && (index = this.pwdList.length);
          }
          this.ipt[index].focus();
        } else if (
          this.isDelete &&
          index === this.pwdList.length &&
          /^\d$/.test(ev.key)
        ) {
          this.isDelete = false;
          this.pwdList.pop();
          this.pwdList.push(ev.key);
          this.ipt[this.pwdList.length] &&
            this.ipt[this.pwdList.length].focus();
        }
        this.$emit("get-pwd", this.pwdList.join(""));
      },
      changePwd() {
        let index = this.pwdList.length;
        index === 6 && index--;
        this.ipt[index].focus();
      },
      changeInput() {
        let index = this.pwdList.length;
        const val = this.pwdList[index - 1];
        if (!/[0-9]/.test(val)) {
          this.pwdList.pop();
          return;
        }
        if (!val) {
          this.pwdList.pop();
          index--;
          if (index > 0) this.ipt[index - 1].focus();
        } else {
          if (index < 6) this.ipt[index].focus();
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .m-password-input {
    display: flex;
    border-radius: 5px;
    position: relative;
    .box-input {
      display: inline-block;
      position: relative;
      border: 1px solid #e8e8e8 !important;
      margin-left: 10px;
      .u-dot {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 5px;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
      }
      .u-input {
        text-align: center;
        font-size: 30px;
        float: left;
        width: 40px;
        height: 40px !important;
        line-height: 40px;
        color: transparent;
        caret-color: auto;
        outline: none;
        border: none;
      }
    }
  }
</style>
```

```html
<!-- 如何使用  -->
<password-input :dataList="dataList" @get-pwd="getPwd"></password-input>

<script>
  // 输入密码组件
  import PasswordInput from "./PasswordInput.vue";
  export default {
    components: { PasswordInput },
    methods: {
      getPwd(val) {
        // val就是输入的密码
      },
    },
  };
</script>
```

## 6、表单动态新增和删除

```html
<template>
  <el-form
    ref="form"
    :rules="formRules"
    :inline="true"
    :model="form"
    label-width="80px"
  >
    <div v-for="(item, index) in form.dynamicItem" :key="index">
      <el-form-item
        label="姓名"
        :prop="'dynamicItem.' + index + '.name'"
        :rules="{
            required: true, message: '姓名不能为空', trigger: 'blur'
        }"
      >
        <el-input v-model="item.name"></el-input>
      </el-form-item>
      <el-form-item
        label="手机号"
        :prop="'dynamicItem.' + index + '.phone'"
        :rules="[
             {required: true, message: '手机号不能为空', trigger: 'blur'},
              { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
          ]"
      >
        <el-input v-model="item.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="index+1 == form.dynamicItem.length"
          @click="addItem"
          type="primary"
          >增加</el-button
        >
        <el-button
          v-if="index !== 0"
          @click="deleteItem(item, index)"
          type="danger"
          >删除</el-button
        >
      </el-form-item>
    </div>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          dynamicItem: [
            {
              name: "",
              phone: "",
            },
          ],
        },
      };
    },
    methods: {
      addItem() {
        this.form.dynamicItem.push({
          name: "",
          phone: "",
        });
      },
      sure(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            return false;
          }
        });
      },
      deleteItem(item, index) {
        this.form.dynamicItem.splice(index, 1);
      },
    },
  };
</script>
```

## 7、数组拖拽排序

```html
<template>
  <div id="content">
    <transition-group name="flip-list" class="box">
      <div
        v-for="item in items"
        :key="item"
        draggable="true"
        class="items"
        :class="{active: oldVal == item && isActive==item}"
        @dragstart="dragstart(item)"
        @dragenter="dragenter(item)"
        @dragend="dragend(item)"
      >
        {{item}}
      </div>
    </transition-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        isActive: 0,
        oldVal: 0,
        newOld: 0,
      };
    },
    methods: {
      dragstart(val) {
        this.oldVal = val;
        this.isActive = val;
      },
      dragend(val) {
        if (this.oldVal != this.newOld) {
          let oldIndex = this.items.indexOf(this.oldVal);
          let newIndex = this.items.indexOf(this.newOld);
          let newItems = [...this.items];
          // 删除老的节点
          newItems.splice(oldIndex, 1);
          // 增加新的节点
          newItems.splice(newIndex, 0, this.oldVal);
          // items结构发生变化触发transition-group的动画
          this.items = [...newItems];
          this.isActive = -1;
        }
      },
      // 记录移动过程中信息
      dragenter(val) {
        this.newOld = val;
      },
    },
  };
</script>
<style type="text/css">
  .flip-list-move {
    transition: transform 0.3s ease-in;
  }

  .box {
    display: block;
    display: flex;
    width: 500px;
    flex-wrap: wrap;
  }

  .items {
    width: 100px;
    height: 50px;
    margin: 10px;
    line-height: 50px;
    text-align: center;
    border: 1px solid red;
    cursor: move;
  }

  .items.active {
    background: rgba(0, 0, 0, 0.4);
  }
</style>
```

## 8、pc 端滚动到页面底部翻页

```html
<template>
  <div class="list" ref="scrollTopList">
    <div
      class="listsmall"
      v-for="(item,index) of list"
      :key="index"
      @click="getDeviceInfo(item.id)"
    >
      <span
        class="state"
        :class="{'state1':item.status==1,'state0':item.status==0,'state2':item.status==2,'state3':item.status==3}"
      ></span>
      <span class="text textcolor">【{{item.code||item.name}}】</span>
      <span class="text">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.$refs.scrollTopList.addEventListener(
        "scroll",
        this.throttle(this.handleScroll, 500),
        true
      );
    },
    methods: {
      handleScroll() {
        let scrollTop = this.$refs.scrollTopList.scrollTop,
          clientHeight = this.$refs.scrollTopList.clientHeight,
          scrollHeight = this.$refs.scrollTopList.scrollHeight,
          height = 50; // 根据项目实际定义
        if (scrollTop + clientHeight >= scrollHeight - height) {
          if (this.pageSize > this.total) {
            return false;
          } else {
            this.pageSize = this.pageSize + 10; // 显示条数新增
            this.getpageList(); // 请求列表list 接口方法
          }
        } else {
          return false;
        }
      },
      // 节流函数
      throttle(func, wait) {
        let lastTime = null;
        let timeout;
        return () => {
          let context = this;
          let now = new Date();
          let arg = arguments;
          if (now - lastTime - wait > 0) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            func.apply(context, arg);
            lastTime = now;
          } else if (!timeout) {
            timeout = setTimeout(() => {
              func.apply(context, arg);
            }, wait);
          }
        };
      },
    },
  };
</script>
```

## 9、使用 Object.freeze()提升性能

vue 会将 data 对象中的所有的属性加入到 vue 的响应式系统中，当这些属性的值发生改变时，视图将会产生响应，若对象的体积比较大，会消耗很多浏览器解析时间。
:::tip 介绍
Object.freeze()方法冻结一个对象。冻结一个对象意味着不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举、可配置、可写特性，不能修改已有属性的值，在平时开发中遇到一个对象或者数组，确信不能进行修改，可以使用 Object.freeze()冻结提升性能。
:::

```html
<script>
  export default {
    data() {
      return {
        userList: [],
      };
    },
    mounted() {
      this.getUserList();
    },
    methods: {
      getUserList() {
        getUser().then((res) => {
          if (res) {
            // 此处使用Object.freeze()方法冻结数组，防止数组被修改
            this.userList = Object.freeze(res.data);
          }
        });
      },
    },
  };
</script>
```

## 10、自定义指令

### 10.1 一键复制内容（v-copy）

:::tip 思路：
1、动态创建 textarea 标签，并设置 readOnly 属性及移出可视区域

2、将要复制的值赋给 textarea 标签的 value 属性，并插入到 body

3、选中值 textarea 并复制

4、将 body 中插入的 textarea 移除

5、在第一次调用时绑定事件，在解绑时移除事件
:::

```js
const copy = {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        console.log("无复制内容");
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement("textarea");
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        console.log("复制成功"); // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener("click", el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};

export default copy;
```

### 10.2 长按（v-longpress）

:::tip 思路
1、创建一个计时器， 2 秒后执行函数

2、 当用户按下按钮时触发 mousedown 事件，启动计时器；用户松开按钮时调用 mouseout 事件。

3、如果 mouseup 事件 2 秒内被触发，就清除计时器，当作一个普通的点击事件

4、如果计时器没有在 2 秒内清除，则判定为一次长按，可以执行关联的函数。

5、在移动端要考虑 touchstart，touchend 事件

:::

```js
const longpress = {
  bind: function (el, binding, vNode) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    // 定义变量
    let pressTimer = null;
    // 创建计时器（ 2秒后执行函数 ）
    let start = (e) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler();
        }, 2000);
      }
    };
    // 取消计时器
    let cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e) => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};

export default longpress;
```

### 10.3 防抖（v-debounce）

背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。

需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。

:::tip 思路
1、定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。

2、将事件绑定在 click 方法上。
:::

```js
const debounce = {
  inserted: function (el, binding) {
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 1000);
    });
  },
};

export default debounce;
```

### 10.4 图片懒加载（v-LazyLoad）

背景：在类电商类项目，往往存在大量的图片，如 banner 广告图，菜单导航图，美团等商家列表头图等。图片众多以及图片体积过大往往会影响页面加载速度，造成不良的用户体验，所以进行图片懒加载优化势在必行。

需求：实现一个图片懒加载指令，只加载浏览器可见区域的图片。

:::tip 思路
1、图片懒加载的原理主要是判断当前图片是否到了可视区域这一核心逻辑实现的

2、拿到所有的图片 Dom ，遍历每个图片判断当前图片是否到了可视区范围内

3、如果到了就设置图片的 src 属性，否则显示默认图片
:::

```js
const LazyLoad = {
  // install方法
  install(Vue, options) {
    const defaultSrc = options.default;
    Vue.directive("lazy", {
      bind(el, binding) {
        LazyLoad.init(el, binding.value, defaultSrc);
      },
      inserted(el) {
        if (IntersectionObserver) {
          LazyLoad.observe(el);
        } else {
          LazyLoad.listenerScroll(el);
        }
      },
    });
  },
  // 初始化
  init(el, val, def) {
    el.setAttribute("data-src", val);
    el.setAttribute("src", def);
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    var io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src;
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc;
          el.removeAttribute("data-src");
        }
      }
    });
    io.observe(el);
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.load, 300);
    LazyLoad.load(el);
    window.addEventListener("scroll", () => {
      handler(el);
    });
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight;
    const elTop = el.getBoundingClientRect().top;
    const elBtm = el.getBoundingClientRect().bottom;
    const realSrc = el.dataset.src;
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc;
        el.removeAttribute("data-src");
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer;
    let prevTime;
    return function (...args) {
      const currTime = Date.now();
      const context = this;
      if (!prevTime) prevTime = currTime;
      clearTimeout(timer);

      if (currTime - prevTime > delay) {
        prevTime = currTime;
        fn.apply(context, args);
        clearTimeout(timer);
        return;
      }

      timer = setTimeout(function () {
        prevTime = Date.now();
        timer = null;
        fn.apply(context, args);
      }, delay);
    };
  },
};

export default LazyLoad;
```

### 10.5 权限指令（v-permission）

背景：在一些后台管理系统，我们可能需要根据用户角色进行一些操作权限的判断，很多时候我们都是粗暴地给一个元素添加 v-if / v-show 来进行显示隐藏，但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。针对这种情况，我们可以通过全局自定义指令来处理。

需求：自定义一个权限指令，对需要权限判断的 Dom 进行显示隐藏。

:::tip 思路
1、自定义一个权限数组

2、判断用户的权限是否在这个数组内，如果是则显示，否则则移除 Dom
:::

```js
import store from "@/store";
export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const all_permission = "*:*:*";
    const permissions = store.state && store.state.common.permissions;
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((permission) => {
        return (
          all_permission === permission || permissionFlag.includes(permission)
        );
      });
      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("请设置操作权限标签值");
    }
  },
};
```

### 10.6 水印（v-waterMarker）

:::tip 思路
1、使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。

2、将其设置为背景图片，从而实现页面或组件水印效果
:::

```js
function addWaterMarker(str, parentNode, font, textColor) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement("canvas");
  parentNode.appendChild(can);
  can.width = 200;
  can.height = 150;
  can.style.display = "none";
  var cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font || "16px Microsoft JhengHei";
  cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  cans.textAlign = "left";
  cans.textBaseline = "Middle";
  cans.fillText(str, can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
}

const waterMarker = {
  bind: function (el, binding) {
    addWaterMarker(
      binding.value.text,
      el,
      binding.value.font,
      binding.value.textColor
    );
  },
};

export default waterMarker;

// 使用
<template>
  <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
</template>;
```

### 10.6 拖拽指令（v-draggable）

:::tip 思路
1、设置需要拖拽的元素为相对定位，其父元素为绝对定位。

2、鼠标按下(onmousedown)时记录目标元素当前的 left 和 top 值。

3、鼠标移动(onmousemove)时计算每次移动的横向距离和纵向距离的变化值，并改变元素的 left 和 top 值

4、鼠标松开(onmouseup)时完成一次拖拽
:::

```js
const draggable = {
  inserted: function (el) {
    el.style.cursor = "move";
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft;
      let disy = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        let x = e.pageX - disx;
        let y = e.pageY - disy;
        let maxX =
          document.body.clientWidth -
          parseInt(window.getComputedStyle(el).width);
        let maxY =
          document.body.clientHeight -
          parseInt(window.getComputedStyle(el).height);
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        el.style.left = x + "px";
        el.style.top = y + "px";
      };
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};
export default draggable;
```
