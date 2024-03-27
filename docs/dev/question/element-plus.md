---
outline: deep
---

# 开发常见问题-elementPlus

## 1、表单的 ref 和 model 不能使用同一个值

Element-plus 使用 el-form 必须配置 ref 和 model 属性，二者的值不能相同（在 ElementUI 中是可以相同的），否则会冲突

## 2、tooltip 提示框修改宽度

在 element 中，想要设置表格的内容，超出部分隐藏，鼠标悬浮提示，可以在 el-table 上添加 show-overflow-tooltip 属性。

同时可以通过 tooltip-options 配置提示信息,如果内容很多，则提示框会单行一直显示,如何换行呢？可以使用 css 解决

```html
<el-table
  show-overflow-tooltip
  :tooltip-options="{ effect: 'dark', placement: 'bottom', showArrow: true, width: '80px' }"
  height="430"
  :header-cell-style="{ backgroundColor: 'rgba(19, 185, 201,.7)', color: 'rgb(54, 54, 54)' }"
>
</el-table>

<style>
  .el-popper {
    max-width: 200px !important;
  }
</style>
```
