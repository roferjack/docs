---
# navbar: false
# sidebar: auto
title: markdown的坑
search: true
---


##### 导出vue组件原代码展示

1. [官方文档操作](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5)
2. 在md文件中写导入路径，只能跟在组件后面，中间不能插任何字段，否则显示不了vue组件原代码
```md
 <CountUp />
 <<< @/docs/.vuepress/components/CountUp.vue
```
