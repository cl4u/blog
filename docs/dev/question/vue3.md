---
outline: deep
---

# 开发常见问题-vue3

## 1、自动导入

使用 unplugin-auto-import 插件

:::tip 介绍
unplugin-auto-import 插件的作用是实现 vue 中模块的自动装载，只用该插件后就可以不用在每个组件中都导入所需要使用的模块了，
:::

具体使用如下：

### 1.1 安装

```
npm i unplugin-auto-import -D或者yarn add unplugin-auto-import --dev
```

### 1.2 配置

在 vite.config.js 中配置

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ imports: ["vue", "vue-router"] }), // 需要导入的内容
  ],
});
```

## 2、判断插槽是否为空

setup()的第二个参数(the context) 包含组件的 slots. 第一个参数是组件的 props。

```js
<script setup>
const slots = useSlots()
const hasSlot = (name) => {
    return !!slots[name];
  }
</script>
```
