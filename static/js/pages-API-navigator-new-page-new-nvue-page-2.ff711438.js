(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-2"],{4755:function(e,t,n){"use strict";var a=n("eae7"),o=n.n(a);o.a},"6fe3":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1)],1)],1)},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},"7cfc":function(e,t,n){"use strict";var a=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("f3f3")),i=n("2f62"),c={data:function(){return{}},computed:(0,o.default)({},(0,i.mapState)(["colorIndex","colorList"]),{},(0,i.mapGetters)(["currentColor"])),methods:(0,o.default)({},(0,i.mapMutations)(["setColorIndex"]))};t.default=c},"8c46":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".new-page__text[data-v-e21ca6c4]{font-size:14px;color:#666}.root[data-v-e21ca6c4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-e21ca6c4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-e21ca6c4]{padding:20px}.new-page__color[data-v-e21ca6c4]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-e21ca6c4]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-e21ca6c4]{margin-top:15px;width:300px}",""]),e.exports=t},ac49:function(e,t,n){"use strict";n.r(t);var a=n("7cfc"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},eae7:function(e,t,n){var a=n("8c46");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("7d216b25",a,!0,{sourceMap:!1,shadowMode:!1})},ef3c:function(e,t,n){"use strict";n.r(t);var a=n("6fe3"),o=n("ac49");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("4755");var c,r=n("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"e21ca6c4",null,!1,a["a"],c);t["default"]=l.exports}}]);