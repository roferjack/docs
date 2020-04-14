---
title: 修改vue组件样式
search: true
---

## 一.官方教程
- [地址](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8)
- [源码](https://github.com/vuejs/component-compiler-utils/commit/8b2c646)

## 二.网友的教程

1. [vue中style scope深度访问新方式(::v-deep)](https://segmentfault.com/a/1190000021576348)

## 三.总结
1. 简单的方法：给组件外层定义一个独有的class，写全局样式，权重不够用!important
2. 官方的方法：样式穿透--（1）>>> (2)/deep/或::deep
3. 多看官网文档，多试