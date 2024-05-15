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
new CMDL(字符串[,命令标识])
//返回示例
{
  header:"标识"
  cmd:"命令",
  args:[参数数组]
}
```
`命令标识`为命令的开头字符(可为多个)

当命令为空或不满足命令标识时返回`null`
- 将对象序列化为字符串
```js
解析出的对象.toString()
```
- 完整示例
```js
let obj=new CMDL('/give @s apple 64','/')
console.log(obj.header) //输出/
console.log(obj.cmd) //输出give
console.log(obj.args) //输出@s,apple,64
```
```js
let obj=new CMDL('/give "The Chuan 1503" apple 64')
console.log(obj.header) //输出空字符串
console.log(obj.cmd) //输出/give
console.log(obj.args) //输出The Chuan 1503,apple,64
```
```js
let obj=new CMDL('give @s apple','/')
console.log(obj.header) //输出undefined
console.log(obj.cmd) //输出undefined
console.log(obj.args) //输出undefined
```
```js
let obj=new CMDL('     ')
console.log(obj.header) //输出undefined
console.log(obj.cmd) //输出undefined
console.log(obj.args) //输出undefined
```

```js
let obj=new CMDL('/give @s apple 64','/')
console.log(obj.toString()) //输出/give @s apple 64
```
```js
let obj=new CMDL('/give @s "apple" 64','/')
console.log(obj.toString()) //输出/give @s apple 64
```
```js
let obj=new CMDL('/give @s "app le" 64','/')
console.log(obj.toString()) //输出/give @s "app le" 64
```
