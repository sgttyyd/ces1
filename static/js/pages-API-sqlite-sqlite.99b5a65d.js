(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-sqlite-sqlite"],{"01be":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDB.apply(void 0,arguments)}}},[t._v("打开数据库test.db")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.executeSQL.apply(void 0,arguments)}}},[t._v("创建表database及插入数据")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSQL.apply(void 0,arguments)}}},[t._v("查询表database的数据")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.droptable.apply(void 0,arguments)}}},[t._v("删除表database")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDB.apply(void 0,arguments)}}},[t._v("关闭数据库test.db")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isOpenDB.apply(void 0,arguments)}}},[t._v("查询是否打开数据库")])],1)],1)],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"0b32":function(t,e,n){"use strict";n.r(e);var i=n("01be"),a=n("d408");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("12d3");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"429738e8",null,!1,i["a"],u);e["default"]=c.exports},"12d3":function(t,e,n){"use strict";var i=n("c136"),a=n.n(i);a.a},"7f05":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-btn-v[data-v-429738e8]{margin:%?20?% 0;padding:0}",""]),t.exports=e},b98e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(t){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(t){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(t){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(t))}})},fail:function(t){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(t))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(t){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(t){plus.nativeUI.alert("删除表database成功")},fail:function(t){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(t))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(t){plus.nativeUI.alert("关闭数据库成功")},fail:function(t){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(t))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};e.default=i},c136:function(t,e,n){var i=n("7f05");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0e2f31bc",i,!0,{sourceMap:!1,shadowMode:!1})},d408:function(t,e,n){"use strict";n.r(e);var i=n("b98e"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);