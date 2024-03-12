<!--
 * @Author: rk
 * @Description:
 * @Date: 2024-03-12 10:00:47
 * @LastEditors: rk
 * @LastEditTime: 2024-03-12 19:00:28
-->

# font-size 设置小于 12px

由于谷歌浏览器最低支持 12px 的字号，所以平时开发中想要设置小于 12px 的字体，该如何设置才能生效并且满足需求呢？

## 1、使用-webkit-text-size-adjust 属性

该属性在 chrome29 版本之前有效，之后的版本就不支持了

```css
div {
  -webkit-text-size-adjust: none;
  font-size: 10px;
}
```

## 2、使用 transform 来解决

```css
div {
  transform: scale(0.8);
}
```

使用此方案可以实现当前需求，但是除了在缩小字体外，也缩小了盒子的大小

## 3、使用 rem

```css
html {
  font-size: 100px;
}
p {
  font-size: 0.1rem;
}
```

该方案可以满足当前需求。

## 4、使用 room 方式

```css
span {
  font-size: 12px;
  zoom: 0.8;
}
```

在火狐浏览器中的部分版本不支持 zoom。
