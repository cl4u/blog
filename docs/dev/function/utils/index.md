---
outline: deep
---

# 工具类函数 [js-fastcode](https://www.npmjs.com/package/js-fastcode)

该文件是将常用的工具类函数进行统一封装并发布到 npm 上，使用时安装依赖。

```
npm  install  js-fastcode
```

## 1、toggleClass(element,className)

说明：

> 切换主题的方法，接收两个参数 element 和 className

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| element | 必传 | string | |
| className | 必传 | string | |

使用：

```javascript
// 给某个元素上添加类名
toggleClass(document.body, "custom-" + this.theme);
```

## 2、resetForm(refName)

说明：

> 表单重置，接收一个参数 refName

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| refName | 必传 | string | 传入该表单的 ref 对应的属性值 |

使用：

```javascript
// 对表单进行重置并且去除校验
resetForm("queryForm");
```

## 3、createNonceStr()

说明：

> 生成 16 位随机字符串

使用：

```javascript
// 随机生成16位字符串，一般用于echarts的id定义
createNonceStr();
```

## 4、deepClone(source)

说明：

> 深拷贝，接收要拷贝的对象或数组。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| source | 必传 | array,object | 对对象和数组进行拷贝 |

使用：

```javascript
// 对数组或对象进行深拷贝

let arr = [{ name: "xx", age: 30 }];
deepClone(arr);
```

## 5、numberArray2String(arr)

说明：

> 将数组每一项转字符串，数组是简单的数字数组，接收一个参数 arr。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | |

使用：

```javascript
// 将简单的数字数组转为字符串
let arr = [1, 2, 3];
numberArray2String(arr);
```

## 6、getValIndex(list,name)

说明：

> 获取某个值在数组中的下标，未找到则返回-1，接收两个参数 list 和 name。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| list | 必传 | array | 目标数组 |
| name | 必传 | string | 获取该值的下标 |

使用：

```javascript
// 获取3在数组arr中的下标
let arr = [1, 3, 2, 3];
getValIndex(arr, 3); // 1

let arr = [1, 3, 2, 3];
getValIndex(arr, 5); // -1
```

## 7、getRandomColor()

说明：

> 生成随机颜色，返回 rgb 颜色值

使用：

```javascript
// 随机返回颜色值
getRandomColor();
```

## 8、getOpacityColor(color,opacity)

说明：

> 改变颜色透明度，接收两个参数 color 和 opacity。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| color | 必传 | string | 需要改变的颜色值 |
| opacity | 必传 | string | 透明度设置值 |

使用：

```javascript
// 修改透明度
getOpacityColor("#fff", "0.3");
```

## 9、paramsFormate(url)

说明：

> 将 url 中的参数转为对象，如 www.baidu.com?a=1&b=2 转为{a:1,b:2}，接收一个参数 url，如果未传 url，则使用 location.search 的链接

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| url | 非必传 | string | 如未传 url，则获取 location.search 中的值 |

使用：

```javascript
// 将字符串参数转为对象
paramsFormate("https:www.baidu.com?a=123&b=456"); // {a:123,b:456}
```

## 10、json2UrlParam(json)

说明：

> 将 json 对象转为 url 参数，如{a:1,b:2} 转为'a=1&b=2'，接收一个参数 json

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| json | 必传 | object | 需要被转换的 json，只支持 object 类型的数据 |

使用：

```javascript
// 将对象转为字符串
json2UrlParam({ a: 123, b: 456 }); // a=123&b=456
```

## 11、sortByType(arr,key)

说明：

> 数组根据某个字段进行排序，接收两个参数 arr 和 key

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | 目标数组 |
| key | 必传 | string | 根据该字段进行排序 |

使用：

```javascript
// 根据key对数组进行排序

let arr = [
  { id: 23, name: "ee" },
  { id: 3, name: "rr" },
  { id: 13, name: "uu" },
];
sortByType(arr, "id");
```

## 12、debounce(func[,delay,immediate])

说明：

> 防抖函数，支持三个参数：func,delay,immediate

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| func | 必传 | function | 传入需要进行防抖操作的函数 |
| delay | 非必传 | number | 默认 1000 毫秒，意为 delay 秒后执行 |
| immediate | 非必传 | boolean | 默认 false，适用于首次需要立即执行的 |

使用：

```javascript
// 对Input输入框进行防抖操作
debounce(handleClick, 1000, false);
```

## 13、throttle(func[,delay])

说明：

> 节流函数，支持两个参数：func 和 delay

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| func | 必传 | function | 传入需要进行节流操作的函数 |
| delay | 非必传 | number | 默认 1000 毫秒，意为 delay 秒后执行 |

使用：

```javascript
// 对按钮重复点击进行节流操作
throttle(handleClick, 1000);
```

## 14、uniqueArray(arr1,arr2,key[,type])

说明：

> 对数组对象进行合并并且去重,接收四个参数 arr1,arr2,key 和 type。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr1 | 必传 | array | 目标数组 1 |
| arr2 | 必传 | array | 目标数组 2 |
| key | 必传 | string | 根据该字段进行去重 |
| type | 非必传 | number | 默认 1 <br> 1，arr1 和 arr2 中相同 key 的数据，取 arr1 的数据 <br> 2，arr1 和 arr2 中相同 key 的数据，取 arr2 的数据 |

使用：

```javascript
// 合并arr1和arr2,根据id去重

let arr1 = [
  { id: 1, name: "xx" },
  { id: 2, name: "rr" },
  { id: 3, name: "yy" },
];
let arr2 = [
  { id: 1, name: "vv" },
  { id: 2, name: "rr" },
];
uniqueArray(arr1, arr2, "id");
```

## 15、changeArrayProperty(arr,pro1,pro2,key1,key2)

说明：

> 修改树结构数组对象中的属性名称，常用于将省市区的 name 和 code 转换为 elmenet 组件需要的 label 和 value。接收五个参数，arr、pro1、pro2、key1、key2。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | 要修改的数组 |
| pro1 | 必传 | string | 被替换的属性 1 |
| pro2 | 必传 | string | 被替换的属性 2 |
| key1 | 必传 | string | 替换的属性 1 |
| key2 | 必传 | string | 替换的属性 2 |

使用：

```javascript
// 替换省市的key

let arr = [
  {
    name: "陕西省",
    code: 12,
    children: [
      { name: "西安", code: 1201 },
      { name: "咸阳", code: 1202 },
    ],
  },
  {
    name: "山东省",
    code: 15,
    children: [
      { name: "青岛", code: 1501 },
      { name: "潍坊", code: 1506 },
    ],
  },
];
changeArrayProperty(arr, "name", "code", "label", "value");

/**
 [
    {
        "label": "陕西省",
        "value": 12,
        "children": [
            {
                "label": "西安",
                "value": 1201
            },
            {
                "label": "咸阳",
                "value": 1202
            }
        ]
    },
    {
        "label": "山东省",
        "value": 15,
        "children": [
            {
                "label": "青岛",
                "value": 1501
            },
            {
                "label": "潍坊",
                "value": 1506
            }
        ]
    }
]
*/
```

## 16、horizontal2Vertical(arr)

说明：

> 将横向数组转为纵向数组，多用于后端返回的 echarts 数据结构不符合前端需要，则对该数据进行处理，接收一个参数 arr。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | 要修改的数组 |

使用：

```javascript
// 二维数组转换

let arr = [
  [1, 3, 5],
  [2, null, 6],
  [3, 6, 8],
];

horizontal2Vertical(arr);

/**
[
    [1,2,3],
    [3,null,6],
    [ 5,6,8]
]
*/
```

## 17、vertical2Horizontal(arr)

说明：

> 将纵向数组转为横向数组，多用于后端返回的 echarts 数据结构不符合前端需要，则对该数据进行处理，接收一个参数 arr。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | 要修改的数组 |

使用：

```javascript
// 二维数组转换

let arr = [
  [1, 2, 3],
  [3, null, 6],
  [5, 6, 8],
];
vertical2Horizontal(arr);

/**

[
	[1, 3, 5],
	[2, null, 6],
	[3, 6, 8],
]
*/
```

## 18、demandArr(userRelations, arr)

说明：

> 将数组里面的对象转换为其他键值对，接收两个参数 userRelations 和 arr。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| userRelations | 必传 | map | 映射关系 |
| arr | 必传 | array | 要转换的数组 |

使用：

```javascript
// 使用如下，一般是建立一个映射关系，转换为后端需要的字段进行接口传参

let userRelations = {
	姓名: 'name',
	年龄: 'age',
	性别: 'sex',
}
let arr = [
	{ 姓名: 'rl', 年龄: 20, 性别: '男' },
	{ 姓名: 'rk', 年龄: 22, 性别: '女' },
	{ 姓名: 'rj', 年龄: 20, 性别: '男' },
	{ 姓名: 'rh', 年龄: 20, 性别: '女' },
]
demandArr(userRelations, arr)

//
 [{name:"rl",age:20,sex:"男"},...]
```

## 19、tranListToTree(list,key1,key2)

说明：

> 将数据转换为树形结构，接收三个参数 list,key1,key2。

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| list | 必传 | array | 需要转换的数组 |
| key1 | 必传 | string,number | 父节点 id |
| key2 | 必传 | string,number | 子节点 id |

使用：

```javascript
// 将数组转为树形结构
let arr = [
  { id: "a", pid: "", name: "总裁办" },
  { id: "b", pid: "", name: "行政部" },
  { id: "c", pid: "", name: "财务部" },
  { id: "d", pid: "c", name: "财务核算部" },
  { id: "e", pid: "c", name: "税务管理部" },
  { id: "f", pid: "e", name: "税务管理部-分部" },
]
tranListToTree(arr,"id","pid")

/**
 [
    {
        "id": "a",
        "pid": "",
        "name": "总裁办",
        "children": []
    },
    {
        "id": "b",
        "pid": "",
        "name": "行政部",
        "children": []
    },
    {
        "id": "c",
        "pid": "",
        "name": "财务部",
        "children": [
            {
                "id": "d",
                "pid": "c",
                "name": "财务核算部",
                "children": []
            },
            {
                "id": "e",
                "pid": "c",
                "name": "税务管理部",
                "children": [
                    {
                        "id": "f",
                        "pid": "e",
                        "name": "税务管理部-分部",
                        "children": []
                    }
                ]
            }
        ]
    }
]
 * /
```

## 20、uniqueArrayObject(arr[,key])

说明：

> 数组对象根据字段去重，接收两个参数 arr 和 key

参数：
| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :------------: | :--------------------: |
| arr | 必传 | array | 要转换的数组 |
| key | 非必传 | string | 默认根据 id 进行去重 |

使用：

```javascript
// 根据id去重

let arr = [
  { id: 1, name: "xx" },
  { id: 2, name: "ee" },
  { id: 1, name: "cc" },
];
uniqueArrayObject(arr, "id");
/**
	[({
		id: 1,
		name: 'xx',
	},
	{
		id: 2,
		name: 'ee',
	})
]
*/
```
