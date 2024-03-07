---
outline: deep
---

# 代码片段

使用 vscode 配置 vue 代码片段，可以减少书写 vue 基础代码

## 1、vue2

### 1.1 点击【文件】--【首选项】--【用户代码片段】

### 1.2 新建或修改 vue.json

### 1.3 复制以下代码

```javascript
{
    "Print to console": {
        "prefix": "vue2",
        "body": [
            "<template>",
            "    <div>\n",
            "    </div>",
            "</template>\n",
            "<script>",
            "export default {",
			"    name: '',",
            "    data() {",
            "        return {\n",
            "        };",
            "    },",
            "    created() {\n",
			"    },",
            "    methods: {\n",
            "    },",
            "};",
            "</script>\n",
            "<style scoped lang=\"${1:scss}\">\n",
            "</style>\n",
        ],
    }
}
```

## 2、vue3

### 2.1 点击【文件】--【首选项】--【用户代码片段】

### 2.2 新建或修改 vue.json

### 2.3 复制以下代码

```javascript
{
  "Print to console": {
    "prefix": "vue3",
    "body": [
      "<template>",
      " <div></div>",
      "</template>",
      "",
      "<script setup name=''>",
      "",
      "</script>",
      "",
      "<style scoped lang='scss'>",
      "",
      "</style>"
    ],
    "description": "Log output to console"
  }
}
```
