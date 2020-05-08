---
title: html2pdf.js - html转pdf
search: true
---

## 一.官方网站（结合html2canvas and jsPDF封装的插件）
- [github地址](https://github.com/eKoopmans/html2pdf.js#dependencies)
- 研究不深，请看github地址api

## 二.在vue中安装使用的例子
1. 安装

```js
npm install --save html2pdf.js 或  npm install html2pdf.js -S
//记得插件名称是“html2pdf.js”
```
2. 引入

```js
  import getPdf from 'html2pdf.js'
```

3. 使用(三步搞定)
- [opt：配置](https://github.com/eKoopmans/html2pdf.js#options)
- [page-breaks：分页](https://github.com/eKoopmans/html2pdf.js#page-breaks)
```js
    downPdf(){
      console.log("getPdf",getPdf);
      //这里打印出来是方法
      let ele = document.querySelector("#container");//1.获取需要转pdf的dom元素
      var opt = { // 2.一些配置
            margin:       1,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

      // New Promise-based usage:
      getPdf().set(opt).from(ele).save(); //3.调用
      // Old monolithic-style usage:
      // getPdf(element, opt);
    },
```

## 三.疑点
1. 为什么打印不出来带分页的table(缺点)
- 答：估计跟它原理有关，毕竟是利用html2canvas截图，然后再转的pdf

## 四.假如要做截图的话
- [github地址](https://github.com/eKoopmans/html2pdf.js#console)
- 复制一下，方便使用
```js
function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');
html2pdf(document.body)

```