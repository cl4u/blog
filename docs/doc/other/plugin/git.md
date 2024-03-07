---
outline: deep
---

# vscode 配置 Git 命令

在 vscode 中配置 git 路径，将你的 git 安装路径写在 git.path 中，如果复制后出现报错，见下图，这是由于字符串解析的转义导致，改成双斜杠即可

> 找到 setting.json，搜索 git.path

<img src="../../../imgs/git1.png" class="theme-image set-bg" />

> 错误图例

<img src="../../../imgs/git2.png" class="theme-image set-bg" />

> 正确配置

<img src="../../../imgs/git3.png" class="theme-image set-bg" />
