---
title: countUp组件
search: true
---

## 二次封装countUp.js
注解：这是一个数字展示组件

##### 一.官网链接：[countUp.js](https://inorganik.github.io/countUp.js/)
##### 二. 封装后的效果以及原vue代码
1. 
 <CountUp :startVal ='100':endVal='2020' :decimalPlaces='2' :duration='5' :delay='2000' />
 <<< @/docs/.vuepress/components/CountUp.vue

2. 在本项目任何一个.md文件写出下面的标签即可使用
```html
 <CountUp :endVal='2020'/>
```
3. 可传参数：
- 必选项： 
1. endVal ： 结尾数字（即从0加载到这个数字）必选项
- 可选项：
2. startVal ：开始数字（即从这个数字倒数为0）
3. decimalPlaces ：精确度（小数点后几位）
4. duration： 数字加载完成时间,1表示1s
5. delay：组件开始渲染时间，1000表示1s







