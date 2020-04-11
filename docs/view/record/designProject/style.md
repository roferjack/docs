---
title: 样式
search: true
---

### 每个.md文件样式完全和写vue组件的一样（写vue项目的可以说毕业了）
### 现在具体讲讲怎么一样法？
1. 在.md文件里面完全一个直接嵌套\<style>标签和\<script>,这点在官方有说到[地址](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E8%84%9A%E6%9C%AC%E5%92%8C%E6%A0%B7%E5%BC%8F%E6%8F%90%E5%8D%87)
2. 不过你直接写\<style>的话会是全局样式，你想只在当前.md文件显示，地这样\<style scoped> ,这scoped就是vue单文件样式，不会影响到其它文件的
3. 如果你要使用sass那些的话，先安装如下包，然后\<style  scoped lang="sass">
```sh
yarn add -D sass-loader node-sass
```
<p class="container">
<span> 123</span>

</p>

<style scoped>
 .container span{  
    color:pink
 }
 h3{
     color:red
 }
</style>
