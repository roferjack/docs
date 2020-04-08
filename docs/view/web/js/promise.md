---
title: promise 使用
search: true
---


##### 经典例子

```js
<script>
  new Promise((resolve,reject)=>{
      console.log('1')
      resolve("2")
  }).then(res){
     console.log("res",res)
  }
<script>
