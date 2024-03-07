---
outline: deep
---

# 开发常见问题-elementPlus

## 1、表单的 ref 和 model 不能使用同一个值

Element-plus 使用 el-form 必须配置 ref 和 model 属性，二者的值不能相同（在 ElementUI 中是可以相同的），否则会冲突
