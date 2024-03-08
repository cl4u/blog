#!/usr/bin/env sh
###
 # @Author: rk
 # @Description: 
 # @Date: 2024-03-07 17:17:42
 # @LastEditors: rk
 # @LastEditTime: 2024-03-08 09:37:34
### 
 
# 忽略错误
set -e  #有错误抛出错误
 
# 构建
npm run docs:build  #然后执行打包命令
 
# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录
 
git init  #执行这些git命令
git add -A
git commit -m 'deploy'
 
git push -f https://github.com/cl4u/blog.git master  #提交到这个分支
 
cd -
 
 rm -rf docs/.vitepress/dist  #删除dist文件夹