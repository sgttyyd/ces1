(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"2e94":function(i,n,t){var e=t("24fb");n=e(!1),n.push([i.i,"uni-image[data-v-e93fb8d0],\r\nuni-swiper[data-v-e93fb8d0],\r\n.img-view[data-v-e93fb8d0]{width:%?750?%;height:%?500?%}.page-section-title[data-v-e93fb8d0]{margin-top:%?50?%}",""]),i.exports=n},"437e2":function(i,n,t){var e=t("2e94");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var a=t("4f06").default;a("c0462694",e,!0,{sourceMap:!1,shadowMode:!1})},6182:function(i,n,t){"use strict";t.r(n);var e=t("8355"),a=t.n(e);for(var u in e)"default"!==u&&function(i){t.d(n,i,(function(){return e[i]}))}(u);n["default"]=a.a},8355:function(i,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{showSwiper:!1,imgUrls:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"]}},onNavigationBarSearchInputClicked:function(i){console.log("事件执行了"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"提示",content:"用户点击了功能按钮，这里仅做展示。",success:function(i){i.confirm&&console.log("用户点击了确定")}})}};n.default=e},8745:function(i,n,t){"use strict";var e=t("437e2"),a=t.n(e);a.a},d48a:function(i,n,t){"use strict";t.r(n);var e=t("d6c8"),a=t("6182");for(var u in a)"default"!==u&&function(i){t.d(n,i,(function(){return a[i]}))}(u);t("8745");var r,v=t("f0c5"),c=Object(v["a"])(a["default"],e["b"],e["c"],!1,null,"e93fb8d0",null,!1,e["a"],r);n["default"]=c.exports},d6c8:function(i,n,t){"use strict";var e,a=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("v-uni-view",{staticClass:"page"},[t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,n){return t("v-uni-swiper-item",{key:n},[t("v-uni-image",{attrs:{src:i}})],1)})),1),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("本示例为导航栏带搜索框完整功能演示，主要演示有：")]),t("v-uni-view",[i._v("1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。")]),t("v-uni-view",[i._v("2. 点击搜索框跳转到搜索页面。")]),t("v-uni-view",[i._v("3. 点击导航栏右侧按钮实现关联操作。")]),t("v-uni-view",[i._v("4. 搜索页面为提示词搜索，输入内容实时显示关联词。")]),t("v-uni-view",[i._v("5. 搜索结果根据搜索内容高亮显示文字。")]),t("v-uni-view",[i._v("6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。")]),t("v-uni-view",[i._v("7. 点击删除图标，清空历史搜索列表。")]),t("v-uni-view",[i._v("Tips")]),t("v-uni-view",[i._v("1. 本示例目前仅支持 App 端")]),t("v-uni-view",[i._v("2. 所有示例均为演示使用，具体逻辑需要自己实现。")])],1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},u=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return e}))}}]);