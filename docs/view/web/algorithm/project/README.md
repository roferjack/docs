---
title: 关于项目中遇到的问题
search: true
---

### 项目中遇到的数据结构转化
#### 1.多项的对象数组转单项的数组对象
- 思路：从新在外面定义一个对象，一项去添加进去，最后在push进新数组。
```js
let obj ={};
data.map(item=>{
    if(item.a=="x" && item.b="xx"){
        obj.s = item.c
    }else if(item.a=="x" && item.b="xx"){
        obj.z = item.c
    }
})
console.log("obj",obj)
```

#### 2.模糊搜索对象数组（即element中的搜索功能）
- 思路：主要利用es6中数组和字符串的includes方法
```js
data.filter(item=>{
   return Object.values(item).join('').includes("要搜索的字符")
   //如果是精确匹配的话，去掉.join('')
})
```