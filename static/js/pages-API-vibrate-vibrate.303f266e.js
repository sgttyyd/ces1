(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{"29fd":function(t,n,i){var e=i("e0fc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("3ed93bd4",e,!0,{sourceMap:!1,shadowMode:!1})},"982e":function(t,n,i){"use strict";i.r(n);var e=i("b410"),a=i("b931");for(var u in a)"default"!==u&&function(t){i.d(n,t,(function(){return a[t]}))}(u);i("d15f");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"18e5a810",null,!1,e["a"],o);n["default"]=c.exports},"9fba":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){console.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){console.log("success")}})}}};n.default=e},b410:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},u=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return e}))},b931:function(t,n,i){"use strict";i.r(n);var e=i("9fba"),a=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a},d15f:function(t,n,i){"use strict";var e=i("29fd"),a=i.n(e);a.a},e0fc:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".uni-padding-wrap[data-v-18e5a810]{margin-top:%?50?% 0}.uni-button[data-v-18e5a810]{margin:%?30?% 0}.uni-tips[data-v-18e5a810]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-18e5a810]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),t.exports=n}}]);