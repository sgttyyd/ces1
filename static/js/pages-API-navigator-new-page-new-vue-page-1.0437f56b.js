(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-1"],{"437e":function(t,e,n){var a=n("ada2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("66eeee7a",a,!0,{sourceMap:!1,shadowMode:!1})},"4fe9":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("从上个页面接收到参数："+t._s(t.data))])],1),n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"88b8":function(t,e,n){"use strict";var a=n("437e"),i=n.n(a);i.a},"94cc":function(t,e,n){"use strict";n.r(e);var a=n("c5d6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"99b5":function(t,e,n){"use strict";n.r(e);var a=n("4fe9"),i=n("94cc");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("88b8");var c,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"1550917c",null,!1,a["a"],c);e["default"]=s.exports},ada2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-1550917c]{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%}.new-page__text[data-v-1550917c]{font-size:14px;color:#666}.root[data-v-1550917c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-1550917c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__text-box[data-v-1550917c]{padding:20px}.new-page__color[data-v-1550917c]{display:-webkit-box;display:-webkit-flex;display:flex;width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-1550917c]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-1550917c]{margin-top:15px;width:300px}",""]),t.exports=e},c5d6:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f3f3")),o=n("2f62"),c={data:function(){return{title:"新页面",data:""}},computed:(0,i.default)({},(0,o.mapState)(["colorIndex","colorList"]),{},(0,o.mapGetters)(["currentColor"])),onLoad:function(t){t.data&&(this.data=t.data),uni.$on("postMsg",(function(t){uni.showModal({content:"收到uni.$emit消息:".concat(t.msg),showCancel:!1})}))},onUnload:function(){uni.$off("postMsg")},methods:(0,i.default)({},(0,o.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-1"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=c}}]);