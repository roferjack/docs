(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{498:function(t,r,e){t.exports=e.p+"assets/img/prop1.35076d42.png"},565:function(t,r,e){"use strict";e.r(r);var a=e(33),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-父传子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-父传子"}},[t._v("#")]),t._v(" 一.父传子")]),t._v(" "),a("h4",{attrs:{id:"v-bind-绑定-prop-动态传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-绑定-prop-动态传值"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-bind",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-bind"),a("OutboundLink")],1),t._v(" 绑定 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#props",target:"_blank",rel:"noopener noreferrer"}},[t._v("prop"),a("OutboundLink")],1),t._v(" 动态传值")]),t._v(" "),a("h4",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#props",target:"_blank",rel:"noopener noreferrer"}},[t._v("props"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_1-具体操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-具体操作"}},[t._v("#")]),t._v(" 1.具体操作")]),t._v(" "),a("p",[t._v("(1). 在父组件中：给绑定的prop取一个有语义化的名字，然后将需要传的值赋给这个prop属性。如图1：\n"),a("img",{attrs:{src:e(498),alt:"图一"}}),t._v("\n(2). 在子组件中：在子组件必须声明props选项，并将在父组件中定义的语义话名字放到这个选项中，可以使用字符串数组的形式，也可以使用对象的形式（可以验证传值类型，方便找错和测试）\n"),a("img",{attrs:{src:t.$withBase("/assets/vueImg/prop2.png"),alt:"图二"}})]),t._v(" "),a("p",[t._v("(3). prop可以"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%95%B0%E5%AD%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("传的类型"),a("OutboundLink")],1),t._v("，props可以"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("验证的类型"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_2-拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拓展"}},[t._v("#")]),t._v(" 2.拓展")]),t._v(" "),a("p",[t._v("(1). 为什么说是单向数据流，因为防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解，违反则会控制台中发出警告"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("(2). 这里传值可以是"),a("span",{staticStyle:{"font-weight":"700"}},[t._v("静态的(像html标签一样添加属性)")]),a("span",{staticStyle:{color:"red"}},[t._v("动态的（v-bind绑定动态追）")]),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E9%80%92%E9%9D%99%E6%80%81%E6%88%96%E5%8A%A8%E6%80%81-Prop",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("(3)"),a("a",{attrs:{href:"https://www.cnblogs.com/yuzhongyu/p/10825824.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("父组件中调用子组件的方法"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"二-子传父"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-子传父"}},[t._v("#")]),t._v(" 二.子传父")]),t._v(" "),a("h4",{attrs:{id:"利用v-on监听实例-即子组件-自定义事件-其回调函数会接收所有传入事件触发函数的额外参数-emit在子组件触发事件-父组件内v-on接收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用v-on监听实例-即子组件-自定义事件-其回调函数会接收所有传入事件触发函数的额外参数-emit在子组件触发事件-父组件内v-on接收"}},[t._v("#")]),t._v(" 利用"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-on"),a("OutboundLink")],1),t._v("监听实例（即子组件）自定义事件，其回调函数会接收所有传入事件触发函数的额外参数"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-emit",target:"_blank",rel:"noopener noreferrer"}},[t._v("$emit"),a("OutboundLink")],1),t._v("在子组件触发事件，父组件内v-on接收")]),t._v(" "),a("h4",{attrs:{id:"_1-具体操作-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-具体操作-2"}},[t._v("#")]),t._v(" 1.具体操作")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/vueImg/emit1.png"),alt:"图一"}}),t._v(" "),a("h4",{attrs:{id:"_2-拓展-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拓展-2"}},[t._v("#")]),t._v(" 2.拓展")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/jin-zhe/p/9523782.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("子组件调用父组件的方法"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"三-兄弟传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-兄弟传值"}},[t._v("#")]),t._v(" 三.兄弟传值")]),t._v(" "),a("h2",{attrs:{id:"四-隔代传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-隔代传值"}},[t._v("#")]),t._v(" 四.隔代传值")]),t._v(" "),a("h2",{attrs:{id:"五-页面传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-页面传值"}},[t._v("#")]),t._v(" 五.页面传值")]),t._v(" "),a("h2",{attrs:{id:"六"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六"}},[t._v("#")]),t._v(" 六.")])])}),[],!1,null,null,null);r.default=s.exports}}]);