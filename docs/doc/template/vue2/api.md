<!--
 * @Author: rk
 * @Description:
 * @Date: 2023-10-10 10:16:22
 * @LastEditors: rk
 * @LastEditTime: 2024-01-18 11:03:23
-->

# api 目录文件介绍

该目录下包含 apiList、index.js 和 statusCode.js 文件。

## apiList

此文件夹下包含了所有的 api 接口请求地址，和菜单栏目录进行一一对应，名称和菜单栏目录名称一致，方便查找。

此外，最外层中的 common.js 中封装了所有的公共请求接口，auth.js 中封装了所有的登录登出等请求接口。

::: tip 提示
get 和 post 请求中根据不同请求头部需要特殊设置
:::

```
/**
 * get传参示例,特殊处理参数放在url后
 * blob=true,表示是请求文件流接口
 * urlcode=true，表示要设置请求头部为application/x-www-form-urlencoded
*/
export const updateStatus = params => {
	return request.get("/sale/contractInfo/updateStatus?urlcode=true", params);
}

/**
 * post传参示例，
 * isQs:true,表示请求头部是application/x-www-form-urlencoded，数据需要序列化
*/
export const creatClientCconfirm = params => {
	return request.post("/sale/settlement/creatClientCconfirm", params, { isQs: true });
}
```

## index.js

该文件对 axios 进行二次封装。

在请求拦截中处理了 token 携带，

get 请求中对下载文件流的接口进行请求头部设置，对于请求头部是 application/x-www-form-urlencoded 形式的进行头部设置。

```
if (obj.blob == "true") {
	config.responseType = "blob";
}

if (obj.urlencoded) {
	config.headers["Content-Type"] = "application/x-www-form-urlencoded";
}
```

post 请求中对于 application/x-www-form-urlencoded 形式的接口进行数据序列化处理。

```
if (config.isQs) {
	config.data = Q.stringify(config.data);
}
```

在响应拦截器中对返回的状态码进行不同处理，对请求错误接口进行错误提示。

如果是文件流格式的数据，则文件名称从后台获取。

```
if (response.headers["content-disposition"]) {
	// 获取后台返回的文件名称
	const headerFilename = response.headers["content-disposition"]
	?.split(";")[1]
	.split("=")[1];
	data.fileName = decodeURIComponent(headerFilename);
	return data;
}
```

如果是其他类型的数据，则根据不同状态进行处理。

此外还封装了 get 和 post 请求

```
const request = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, params, headerConfig) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params, headerConfig)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
```

## statusCode.js

该文件下主要是处理不同状态码的，根据状态码值是 0 的进行 return data.data，对于状态码是其他的进行提示或者重定向到登录页等。
