(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-issue-issuePage"],{"2f6a":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-126c6f8a]{background-color:#fff}.infolistbar[data-v-126c6f8a]{padding:%?30?% %?20?%}.infolistbar .content .content-icobox[data-v-126c6f8a]{height:%?40?%}.infolistbar .content .content-icobox .content-icobox-ico[data-v-126c6f8a]{height:%?40?%;width:%?40?%}.infolistbar .content .content-text[data-v-126c6f8a]{margin-left:%?20?%;font-family:MicrosoftYaHei;font-size:%?28?%;font-weight:700;font-stretch:normal;letter-spacing:%?0?%;color:#3f3f3f;text-align:center}.infolistbar .action .action-text[data-v-126c6f8a]{font-family:MicrosoftYaHei;font-size:%?28?%;font-weight:700;font-stretch:normal;letter-spacing:%?0?%;color:#d3d3d3}.infolistbar .action .action-avator[data-v-126c6f8a]{width:%?124?%;height:%?124?%;border-radius:50%;margin-right:%?20?%}.infolistbar .action .action-arrow[data-v-126c6f8a]{width:%?28?%;height:%?30?%}body.?%PAGE?%[data-v-126c6f8a]{background-color:#fff}',""])},4312:function(t,n,a){"use strict";var e=a("ef35"),i=a.n(e);i.a},5410:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("top-status"),a("topBar",{attrs:{title:"我要发布",showBottom:!0}}),a("content-input"),a("v-uni-view",[t._v("图片上传")]),a("v-uni-view",{staticClass:"infolistbar flex justify-between align-center border-tb-small bg-white"},[a("v-uni-view",{staticClass:"content flex justify-between align-center"},[a("v-uni-view",{staticClass:"content-icobox"},[a("v-uni-image",{staticClass:"content-icobox-ico",attrs:{src:"/static/images/admit/admit-avator.png"}})],1),a("v-uni-view",{staticClass:"content-text"},[t._v("谁可以看")])],1),a("v-uni-view",{staticClass:"action flex align-center justify-between"},[a("v-uni-text",{staticClass:"action-text text-grey text-sm"},[t._v("对所有人可见")]),a("v-uni-image",{staticClass:"action-arrow",attrs:{src:"/static/images/arrow/rightArrow.png"}})],1)],1),a("issue-botton")],1)},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},c18d:function(t,n,a){"use strict";a.r(n);var e=a("5410"),i=a("f601");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("4312");var c=a("2877"),s=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,"126c6f8a",null);n["default"]=s.exports},ce5f:function(t,n,a){"use strict";var e=a("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("bef1")),o=e(a("be7b")),c=e(a("9e75")),s=e(a("36f1")),r={components:{topStatus:i.default,topBar:o.default,contentInput:c.default,issueBotton:s.default},onShow:function(){uni.getLocation({type:"wgs84",success:function(t){console.log("当前位置的经度："+t.longitude),console.log("当前位置的纬度："+t.latitude)}})}};n.default=r},ef35:function(t,n,a){var e=a("2f6a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("70d79cbe",e,!0,{sourceMap:!1,shadowMode:!1})},f601:function(t,n,a){"use strict";a.r(n);var e=a("ce5f"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a}}]);