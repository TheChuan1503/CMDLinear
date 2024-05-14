# CMDLinear
轻量的JS命令行解析器
## 使用方法
- 引入JS
```html
<head>
  <script src="cmdl.min.js"></script>
</head>
```
- 将字符串解析为对象
```js
cmdl.parse(字符串)
//返回示例
{
  cmd:"命令",
  args:[参数数组]
}
```
- 将对象序列化为字符串
```js
//方法1
解析出的对象.toString()
//方法2
cmdl.toString(解析出的对象或带有命令和参数的数组)
```
