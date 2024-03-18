<!--
 * @Author: rk
 * @Description:
 * @Date: 2024-03-18 18:57:08
 * @LastEditors: rk
 * @LastEditTime: 2024-03-18 18:58:28
-->

# 使用 element 给表头单元格添加斜线分割线

先看下效果图，表头第一个单元格使用斜线分割。

<img src="../../../imgs/article4.png" class="theme-image" />

```html
<el-table-column label="时段" align="right" width="150">
  <el-table-column
    prop="month"
    label="月度"
    width="120"
    align="center"
    header-align="left"
  >
  </el-table-column>
</el-table-column>
```

注意：在 el-table-column 上添加了 align 和 header-align 两个属性，header-align 是表头的对齐方式，而 align 是表格内容的对齐方式，所以可以根据不同的原型图进行相关设置。

```css
::v-deep .el-table thead.is-group th {
  background: none;
}
::v-deep .el-table thead.is-group tr:first-of-type th:first-of-type {
  border-bottom: none;
}
::v-deep .el-table thead.is-group tr:first-of-type th:first-of-type:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 82px; /*这里需要自己调整，根据td的宽度和高度*/
  top: 0;
  left: 0;
  background-color: #bbb;
  opacity: 0.3;
  display: block;
  transform: rotate(-58deg); /*这里需要自己调整，根据线的位置*/
  transform-origin: top;
}
::v-deep .el-table thead.is-group tr:last-of-type th:first-of-type:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 82px; /*这里需要自己调整，根据td的宽度和高度*/
  bottom: 0;
  right: 0;
  background-color: #bbb;
  opacity: 0.3;
  display: block;
  transform: rotate(-59.9deg); /*这里需要自己调整，根据线的位置*/
  transform-origin: bottom;
}
```

注意：代码中有注释的地方是需要自己手动去微调的，其实就是将时段和月度分成两个元素，然后使用 rotate 调整角度，使两条线完全重合。
