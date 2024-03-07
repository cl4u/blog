# env 目录文件介绍

一般项目包括本地开发环境、测试环境、生产环境等，他们对应的文件分别是.env.development、.env.test、.env.prod 文件。

在 package.json 文件中，scripts 下配置了打包命令对应了三个文件，当执行命令时，判断环境执行不同的文件内容。

在.env.development 文件中，NODE_ENV 只能配置为 dev
在.env.test 和.env.prod 文件中，NODE_ENV 只能配置 production。

所以判断项目是哪个环境时，需要重新定义变量，如 VUE_APP_ENV = dev、test、prod 进行判断。

::: warning 警告
自定义变量时，必须以 VUE_APP 开头，否则是识别不到的。
:::
