<!--
 * @Author: rk
 * @Description:
 * @Date: 2024-03-12 19:34:39
 * @LastEditors: rk
 * @LastEditTime: 2024-03-12 19:36:44
-->

# 浏览器记住密码去除 input 背景

一般浏览器记住密码后，下次进入页面会自动填充信息和背景色，但是如何修改背景色呢？

```css
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-text-fill-color: #333 !important;
  background-color: transparent;
  transition: background-color 50000s ease-in-out 0s;
}
input {
  background-color: transparent;
}
```
