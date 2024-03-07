<!--
 * @Author: rk
 * @Description:
 * @Date: 2023-12-01 12:09:23
 * @LastEditors: rk
 * @LastEditTime: 2024-01-18 11:07:18
-->

# views 目录文件介绍

用于存放我们开发的各种页面，如 login、main 等。

该目录下是以菜单栏为单位创建文件夹，一个一级导航是一个文件夹，如果有多个二级菜单，则在该文件夹下创建多个子文件夹。

入口文件是 index.vue 页面，如果有局部组件，在 index.vue 平级创建 component 存放组件，constant.js 存放该文件下的所有常量。

```bash
├─ views
│   ├─ systemManage
│   │   ├─ munuManage
│   │   ├─ roleManage
│   ├─ accountInfo
│   │   ├─ index.vue
│   │   ├─ component
│   │   │  ├─ editInfo.vue
│   │   ├─ constant.js
```
