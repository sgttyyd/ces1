(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-API-API"],{"0013":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"tababr",hasSetTabBarBadge:!1,hasShownTabBarRedDot:!1,hasCustomedStyle:!1,hasCustomedItem:!1,hasHiddenTabBar:!1}},destroyed:function(){if(this.hasSetTabBarBadge&&uni.removeTabBarBadge({index:1}),this.hasShownTabBarRedDot&&uni.hideTabBarRedDot({index:1}),this.hasHiddenTabBar&&uni.showTabBar(),this.hasCustomedStyle&&uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}),this.hasCustomedItem){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};uni.setTabBarItem(t)}},methods:{navigateBack:function(){this.$emit("unmount")},setTabBarBadge:function(){this.hasShownTabBarRedDot&&(uni.hideTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot),this.hasSetTabBarBadge?uni.removeTabBarBadge({index:1}):uni.setTabBarBadge({index:1,text:"1"}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge},showTabBarRedDot:function(){this.hasSetTabBarBadge&&(uni.removeTabBarBadge({index:1}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge),this.hasShownTabBarRedDot?uni.hideTabBarRedDot({index:1}):uni.showTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot},hideTabBar:function(){this.hasHiddenTabBar?uni.showTabBar():uni.hideTabBar(),this.hasHiddenTabBar=!this.hasHiddenTabBar},customStyle:function(){this.hasCustomedStyle?uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}):uni.setTabBarStyle({color:"#FFF",selectedColor:"#007AFF",backgroundColor:"#000000",borderStyle:"black"}),this.hasCustomedStyle=!this.hasCustomedStyle},customItem:function(){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};this.hasCustomedItem?uni.setTabBarItem(t):(t.text="API",uni.setTabBarItem(t)),this.hasCustomedItem=!this.hasCustomedItem}}};a.default=n},"0cfd":function(t,a,e){"use strict";e.r(a);var n=e("6e54"),i=e("6426");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("10bf");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"50e721e0",null,!1,n["a"],r);a["default"]=u.exports},"10bf":function(t,a,e){"use strict";var n=e("7c9b"),i=e.n(n);i.a},"266e":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-45abc1ed]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-45abc1ed]{font-family:uniicons;font-weight:400}.uni-container[data-v-45abc1ed]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-45abc1ed]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-45abc1ed]{width:80px;height:80px}.uni-hello-text[data-v-45abc1ed]{margin-bottom:20px}.hello-text[data-v-45abc1ed]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-45abc1ed]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-45abc1ed]{margin-bottom:12px}.uni-panel-h[data-v-45abc1ed]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-45abc1ed]{background-color:#f0f0f0}.uni-panel-text[data-v-45abc1ed]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-45abc1ed]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-45abc1ed]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-45abc1ed]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-45abc1ed]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-45abc1ed]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-45abc1ed]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),t.exports=a},3730:function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[t.showSetTabBarPage?[e("set-tab-bar",{on:{unmount:function(a){arguments[0]=a=t.$handleEvent(a),t.leaveSetTabBarPage.apply(void 0,arguments)}}})]:[e("v-uni-view",{staticClass:"uni-header-logo"},[e("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/apiIndex.png"}})],1),e("v-uni-view",{staticClass:"uni-hello-text"},[e("v-uni-text",{staticClass:"hello-text"},[t._v("以下将演示uni-app接口能力，详细文档见：")]),e("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/api/",text:"https://uniapp.dcloud.io/api/",inWhiteList:!0}})],1),t._l(t.list,(function(a,n){return e("v-uni-view",{key:a.id,staticClass:"uni-panel"},[e("v-uni-view",{staticClass:"uni-panel-h",class:a.open?"uni-panel-h-on":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.triggerCollapse(n)}}},[e("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(a.name))]),e("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:a.open?"uni-panel-icon-on":""},[t._v(t._s(a.pages?"":""))])],1),a.open?e("v-uni-view",{staticClass:"uni-panel-c"},t._l(a.pages,(function(n,i){return e("v-uni-view",{key:i,staticClass:"uni-navigate-item",attrs:{url:a.url},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetailPage(n.url)}}},[e("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(n.name?n.name:n))]),e("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)})),1):t._e()],1)}))]],2)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"4a31":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".button[data-v-50e721e0]{margin-top:%?30?%;margin-left:0;margin-right:0}.btn-area[data-v-50e721e0]{padding-top:%?30?%}",""]),t.exports=a},6426:function(t,a,e){"use strict";e.r(a);var n=e("0013"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"6c50":function(t,a,e){"use strict";var n=e("badf"),i=e.n(n);i.a},"6c85":function(t,a,e){"use strict";e.r(a);var n=e("6d43"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"6d43":function(t,a,e){"use strict";var n=e("ee27");e("c975"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("ed28")),o=n(e("0cfd")),r={components:{uLink:i.default,setTabBar:o.default},data:function(){var t=[{name:"图片",url:"image"},{name:"视频",url:"video"}],a=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"节点布局交互状态",url:"intersection-observer"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"websocket",name:"websocket",open:!1,pages:[{name:"socketTask",url:"websocket-socketTask"},{name:"全局websocket",url:"websocket-global"}]},{id:"media",name:"媒体",open:!1,pages:t},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"},{name:"地图控制",url:"map"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储（key-value）",url:"storage"}]}];return{showSetTabBarPage:!1,list:a,navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.navigateFlag=!1,this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var a=0;a<this.list.length;++a)this.list[a].open=t===a&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){if(!this.navigateFlag)if(this.navigateFlag=!0,"set-tabbar"!==t){var a=~t.indexOf("platform")?t:"/pages/API/"+t+"/"+t;uni.navigateTo({url:a})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){var t=this;setTimeout((function(){t.navigateFlag=!1}),200),this.showSetTabBarPage=!1}}};a.default=r},"6e54":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("page-head",{attrs:{title:t.title}}),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setTabBarBadge.apply(void 0,arguments)}}},[t._v(t._s(t.hasSetTabBarBadge?"移除tab徽标":"设置tab徽标"))]),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showTabBarRedDot.apply(void 0,arguments)}}},[t._v(t._s(t.hasShownTabBarRedDot?"移除红点":"显示红点"))]),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.customStyle.apply(void 0,arguments)}}},[t._v(t._s(t.hasCustomedStyle?"移除自定义样式":"自定义Tab样式"))]),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.customItem.apply(void 0,arguments)}}},[t._v(t._s(t.hasCustomedItem?"移除自定义信息":"自定义Tab信息"))]),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideTabBar.apply(void 0,arguments)}}},[t._v(t._s(t.hasHiddenTabBar?"显示TabBar":"隐藏TabBar"))]),e("v-uni-view",{staticClass:"btn-area"},[e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navigateBack.apply(void 0,arguments)}}},[t._v("返回上一级")])],1)],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"7c9b":function(t,a,e){var n=e("4a31");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3ec9655b",n,!0,{sourceMap:!1,shadowMode:!1})},8847:function(t,a,e){"use strict";e.r(a);var n=e("3730"),i=e("6c85");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("6c50");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"45abc1ed",null,!1,n["a"],r);a["default"]=u.exports},badf:function(t,a,e){var n=e("266e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("ef31a0e2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);