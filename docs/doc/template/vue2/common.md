---
outline: deep
---

# common 目录文件介绍

该目录下存放封装的过滤器、工具函数、自定义指令、混入、echarts 方法等。

## 1、chart

chartParams.js 文件对 echarts 常用图形进行了封装，包含双 y 轴、三条 y 轴等。其次常用的折线图、柱状图、饼图都已经进行封装。

chartStyle.js 文件封装了曲线图的颜色，文字大小等，包括暗黑模式和明亮模式下的属性设置。

## 2、directives

自定义指令包括了拖拽、input 输入框限制、下拉框懒加载、权限设置等。

## 3、filter

封装了数字千分位格式的过滤器

## 4、mixins

封装了分页、排序、表格多选等混入方法

## 5、utils

### 5.1 auth

封装了常用的 token 获取、存储、移除方法。

### 5.2 index

封装了常用的获取字典数据等方法。

### 5.3 setStyle

封装了主题切换方法。

### 5.4 singeMessage

重置 message，防止重复点击重复弹出 message 弹框
