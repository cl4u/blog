<!--
 * @Author: rk
 * @Description:
 * @Date: 2024-03-26 15:33:39
 * @LastEditors: rk
 * @LastEditTime: 2024-03-26 16:05:59
-->

# npm 发包

[js-fastcode](https://www.npmjs.com/package/js-fastcode)

## 1、配置 package.json 文件

```
npm init -y
```

```json
{
  "name": "js-fastcode", // 包的名称
  "version": "1.0.0", // 版本
  "description": "Encapsulate some methods for rapid development", // 描述
  "main": "index.js", // 入口文件
  "scripts": {
    // 运行命令
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "http://192.168.100.99:1302/renke/easycode.git"
  },
  "author": "rk", // 作者
  "license": "MIT" // 代码授权许可
}
```

## 2、注册 npm 账号

可去 npm 官网注册: https://www.npmjs.com

首先得将 npm 镜像源切换为官方的源，大部分人的镜像源可能为淘宝镜像源，其他的也不行，想发布就得切换为 npm 官方镜像源

```
npm config set registry=https://registry.npmjs.org
```

注册

```
npm adduser
```

依次填入账号、密码、邮箱, 填写完成后邮箱会收到一个 npm 发的一次性密码(也就是验证码) 再次填入即可，如果还未填写就报错，多半是得需要墙

## 3、登录账号

发布之前可去 npm 官网搜索一下你这个包名是否跟里面的包有重名的，有的话不能发，也可以使用 npm i 你的包名测试

执行命令

```
npm publish
```

发布成功后可以在 npm 官网搜索查看自己发的包

## 4、使用

安装依赖

```
npm i js-fastcode
```

引入使用

```js
import { deepClone } from "js-fastcode";
```

:::danger 注意：
如果修改了代码，则每次发包前修改版本，执行 npm publish 即可。
:::
