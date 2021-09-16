# Draw Lots

抽签经典复刻——React Web 重制版

## 本项目起因

![和以前老师的会话](https://cdn.lwqwq.com/pic/image-20210916183641222.png)

大概是高二的时候，我做过一个随机抽人软件，从最初的易语言版变为 UWP 版，从只能显示学号慢慢支持姓名再支持了 QQ 头像。但是由于当时技术比较差，做出来可移植性不好（名单是写死的），C# UWP 又编译麻烦，就没有再流传下来也没有开源。

## 用法

在班级电脑上打开 <https://lots.lwqwq.com/> 就可以直接使用了。导入的名单保存在浏览器的 Local Storage 里面，并不会上传到服务器。除了下载应用本体之外也不需要和服务器通信什么数据。

功能就是简单的从名单里随机选一个人，名单有空行也没关系，能自动过滤掉。并不能显示 QQ 头像，也没有当年 UWP 版的毛玻璃背景。

