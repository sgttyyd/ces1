(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-storage-storage"],{"0701":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[t._v("key")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.keyChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[t._v("value")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.dataChange.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setStorage.apply(void 0,arguments)}}},[t._v("存储数据")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getStorage.apply(void 0,arguments)}}},[t._v("读取数据")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clearStorage.apply(void 0,arguments)}}},[t._v("清理数据")])],1)],1)],1)],1)},s=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}))},"13bf":function(t,n,e){"use strict";e.r(n);var a=e("7b17"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"3c9a":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".btn-setstorage[data-v-53ab44d5]{background-color:#007aff;color:#fff}",""]),t.exports=n},"40f3":function(t,n,e){var a=e("3c9a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("1d7d6445",a,!0,{sourceMap:!1,shadowMode:!1})},"7b17":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.detail.value},dataChange:function(t){this.data=t.detail.value},getStorage:function(){var t=this.key;this.data;0===t.length?uni.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):uni.getStorage({key:t,success:function(t){uni.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){uni.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,n=this.data;0===t.length?uni.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):uni.setStorage({key:t,data:n,success:function(t){uni.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){uni.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){uni.clearStorageSync(),this.key="",this.data="",uni.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};n.default=a},"87ae":function(t,n,e){"use strict";var a=e("40f3"),i=e.n(a);i.a},ff13:function(t,n,e){"use strict";e.r(n);var a=e("0701"),i=e("13bf");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("87ae");var l,u=e("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"53ab44d5",null,!1,a["a"],l);n["default"]=o.exports}}]);