(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"0af3":function(t,e,n){"use strict";var i=n("7c29"),a=n.n(i);a.a},"41af":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.tempFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:t.tempFilePath,mode:"aspectFit"}})]:t._e(),!t.tempFilePath&&t.savedFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:t.savedFilePath,mode:"aspectFit"}})]:t._e(),t.tempFilePath||t.savedFilePath?t._e():[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("+ 请选择文件")])],n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-savefile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveFile.apply(void 0,arguments)}}},[t._v("保存文件")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("删除文件")])],1),n("v-uni-view",{staticClass:"btn-area"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDocument.apply(void 0,arguments)}}},[t._v("打开pdf文件")])],1)],2)],1)},c=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}))},"45aa":function(t,e,n){"use strict";n.r(e);var i=n("41af"),a=n("9ce3");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("0af3");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"cebdf810",null,!1,i["a"],o);e["default"]=l.exports},"7c29":function(t,e,n){var i=n("e0dc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b98d62a6",i,!0,{sourceMap:!1,shadowMode:!1})},"8bd4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0]},fail:function(t){}})},saveFile:function(){var t=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(e){t.savedFilePath=e.savedFilePath,uni.setStorageSync("savedFilePath",e.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(t){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(t),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/helloworld.pdf",success:function(t){uni.openDocument({filePath:t.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};e.default=i},"9ce3":function(t,e,n){"use strict";n.r(e);var i=n("8bd4"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},e0dc:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".image[data-v-cebdf810]{width:100%;height:%?360?%}.btn-savefile[data-v-cebdf810]{background-color:#007aff;color:#fff}",""]),t.exports=e}}]);