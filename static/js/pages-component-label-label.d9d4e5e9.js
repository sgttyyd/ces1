(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-label-label"],{"00d6":function(e,t,i){"use strict";var n=i("8746"),a=i.n(n);a.a},2662:function(e,t,i){"use strict";i.r(t);var n=i("2def"),a=i("dedf");for(var l in a)"default"!==l&&function(e){i.d(t,e,(function(){return a[e]}))}(l);i("00d6");var c,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"7ba7f118",null,!1,n["a"],c);t["default"]=s.exports},"2def":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("表单组件在label内")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,(function(t){return i("v-uni-label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:t.name,checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.value))])],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label用for标识表单组件")]),i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.value))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"label-3"},[i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),i("v-uni-view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])],1)],1)],1)],1)],1)},l=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return n}))},8746:function(e,t,i){var n=i("d29d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("4375f344",n,!0,{sourceMap:!1,shadowMode:!1})},c4f7:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){var t=e.detail.value;console.log(t)},radioChange:function(e){var t=e.detail.value;console.log(t)}}};t.default=n},d29d:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-list-cell[data-v-7ba7f118]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-list .label-3[data-v-7ba7f118]{padding:0}.label-2-text[data-v-7ba7f118]{-webkit-box-flex:1;-webkit-flex:1;flex:1}",""]),e.exports=t},dedf:function(e,t,i){"use strict";i.r(t);var n=i("c4f7"),a=i.n(n);for(var l in n)"default"!==l&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=a.a}}]);