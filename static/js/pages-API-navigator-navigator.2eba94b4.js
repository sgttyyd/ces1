(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-navigator"],{"36cb":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"navigate"}},methods:{navigateTo:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=Hello"})},navigateBack:function(){uni.navigateBack()},redirectTo:function(){uni.redirectTo({url:"new-page/new-vue-page-1"})},switchTab:function(){uni.switchTab({url:"/pages/tabBar/template/template"})},reLaunch:function(){uni.reLaunch({url:"/pages/tabBar/component/component"})},customAnimation:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=使用自定义动画打开页面",animationType:"slide-in-bottom",animationDuration:200})}}};t.default=e},"42b6":function(n,t,a){"use strict";a.r(t);var e=a("36cb"),i=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=i.a},bb7f:function(n,t,a){"use strict";var e,i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:n.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo.apply(void 0,arguments)}}},[n._v("跳转新页面，并传递数据")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateBack.apply(void 0,arguments)}}},[n._v("返回上一页")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.redirectTo.apply(void 0,arguments)}}},[n._v("在当前页面打开")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.switchTab.apply(void 0,arguments)}}},[n._v("切换到模板选项卡")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reLaunch.apply(void 0,arguments)}}},[n._v("关闭所有页面，打开首页")])],1)],1)],1)},u=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}))},f40c:function(n,t,a){"use strict";a.r(t);var e=a("bb7f"),i=a("42b6");for(var u in i)"default"!==u&&function(n){a.d(t,n,(function(){return i[n]}))}(u);var o,c=a("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);t["default"]=r.exports}}]);