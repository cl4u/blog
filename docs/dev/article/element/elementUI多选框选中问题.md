# elementUI 多选框选中问题

elementUI 表格多选做批量处理时，如果在弹出框选中取消时，关闭弹窗，这时需要把选中的状态全部恢复，一直没有找到好的办法，前几天看文档，发现官方已经有提供的方法，只是一直没有仔细观看文档，记录下。

只需要给表格加一个 ref，然后在取消时执行下边的代码即可。

```javascript
this.$refs.dataTable.clearSelection();
```
