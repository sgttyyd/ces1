(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-intersection-observer-intersection-observer"],{2549:function(e,t,i){var n=i("3a51");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("91784db4",n,!0,{sourceMap:!1,shadowMode:!1})},"3a51":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".scroll-view[data-v-53a89fb2]{height:%?400?%;background:#fff;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box}.scroll-area[data-v-53a89fb2]{height:%?1300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notice[data-v-53a89fb2]{margin-top:%?150?%;margin:%?150?% 0 %?400?% 0}.ball[data-v-53a89fb2]{width:%?200?%;height:%?200?%;background:#4cd964;border-radius:50%}",""]),e.exports=t},"62db":function(e,t,i){"use strict";var n=i("2549"),a=i.n(n);a.a},"8e9e":function(e,t,i){"use strict";i.r(t);var n=i("bab9"),a=i("fec3");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("62db");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"53a89fb2",null,!1,n["a"],o);t["default"]=s.exports},"9ff0":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,a={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var e=this;n=uni.createIntersectionObserver(this),n.relativeTo(".scroll-view").observe(".ball",(function(t){t.intersectionRatio>0&&!e.appear?e.appear=!0:!t.intersectionRatio>0&&e.appear&&(e.appear=!1)}))},onUnload:function(){n&&n.disconnect()}};t.default=a},bab9:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v(e._s(e.appear?"小球出现":"小球消失"))]),i("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"scroll-area"},[i("v-uni-text",{staticClass:"notice"},[e._v("向下滚动让小球出现")]),i("v-uni-view",{staticClass:"ball"})],1)],1)],1)],1)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},fec3:function(e,t,i){"use strict";i.r(t);var n=i("9ff0"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}}]);