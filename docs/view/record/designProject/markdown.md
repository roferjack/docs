---
# navbar: false
# sidebar: auto
title: markdown的坑
search: true
---


## 一.导出vue组件原代码展示

1. [官方文档操作](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5)
2. 在md文件中写导入路径，只能跟在组件后面，中间不能插任何字段，否则显示不了vue组件原代码
```md
 <CountUp />
 <<< @/docs/.vuepress/components/CountUp.vue
```

## 二.在md文件中有引入图片的方式
1. [官方文档](https://v1.vuepress.vuejs.org/zh/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84)
2. 引入方式（以引入本网站首页的美女为例！）
```md
//方式1，这是普通markdown语法（路径要一级一级找）
![这是个妹子](../../../.vuepress/public/assets/img/girl.jpg)

//方式2，这种注入vue原型的方式，修改base也不会影响，基于public文件夹下的哦！
<img :src="$withBase('/favicon.ico')" alt="logo">
```

3. 坑（img标签形式只能引入public下的图片，里面还嵌有其它文件下的图片就显得无能为力了）


<img :src="$withBase('/favicon.ico')" alt="这是public下的图标">

