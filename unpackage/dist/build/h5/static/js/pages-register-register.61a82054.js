(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"1fab":function(t,e,n){"use strict";var a=n("312b"),o=n.n(a);o.a},"312b":function(t,e,n){var a=n("4cef");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("0c456114",a,!0,{sourceMap:!1,shadowMode:!1})},"4cef":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面高度*/uni-page-body[data-v-670e3a6e]{background-color:#fff}\n/* 导航栏 */.lgrg-top-nav[data-v-670e3a6e]{height:%?80?%}.lgrg-top-nav .lgrg-top-nav-img[data-v-670e3a6e]{height:%?53?%;width:%?53?%;border-radius:50%}.lgrg-top-nav .lgrg-top-nav-textbox[data-v-670e3a6e]{width:%?84?%;height:%?42?%;background-color:#cfcece;border-radius:9px}.lgrg-top-nav .lgrg-top-nav-textbox .lgrg-top-nav-textbox-text[data-v-670e3a6e]{font-family:AdobeHeitiStd-Regular;font-size:%?22?%;font-weight:400;font-stretch:normal;letter-spacing:0;color:#fcfafa;line-height:%?42?%}\n/* 标题 */.lgrg-title[data-v-670e3a6e]{padding:%?64?%}.lgrg-title .lgrg-title-big[data-v-670e3a6e]{font-family:AdobeHeitiStd-Regular;font-size:%?40?%;font-weight:700;letter-spacing:%?0?%;color:#000}.lgrg-title .lgrg-title-big .lgrg-title-small[data-v-670e3a6e]{width:%?241?%;height:%?21?%;font-family:AdobeHeitiStd-Regular;font-size:%?22?%;letter-spacing:%?0?%;color:#615f5f}\n/* 输入框 */.lgrg-content[data-v-670e3a6e]{height:%?482?%;border-radius:%?22?%;margin:%?20?% %?64?% %?80?% %?64?%;padding:%?76?% 0 %?70?% 0;-webkit-box-shadow:%?0?% %?0?% %?100?% rgba(114,130,138,.2);box-shadow:%?0?% %?0?% %?100?% rgba(114,130,138,.2)}.lgrg-content .lgrg-content-input[data-v-670e3a6e]{width:%?522?%;height:%?62?%;background-color:#f7f7f7;border-radius:%?31?%;padding:0 %?43?%}.lgrg-content .lgrg-content-bottonbox[data-v-670e3a6e]{width:%?522?%}.lgrg-content .lgrg-content-bottonbox .lgrg-content-bottonbox-button[data-v-670e3a6e]{color:#fdfbfb;width:%?522?%;height:%?62?%;line-height:%?62?%;background-color:#94ddb4;margin-bottom:%?20?%;border-radius:%?31?%}.lgrg-content .lgrg-content-bottonbox .lgrg-content-bottonbox-button[data-v-670e3a6e]:hover{background-color:#39b54a}body.?%PAGE?%[data-v-670e3a6e]{background-color:#fff}',""])},b3b0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("topStatus"),n("v-uni-view",{staticClass:"lgrg-top-nav padding-lr-sm flex flex--rowdirection justify-between align-center"},[n("v-uni-navigator",{attrs:{"open-type":"navigateBack","hover-class":"none"}},[n("v-uni-image",{staticClass:"lgrg-top-nav-img",attrs:{src:"/static/images/login/shutDown.png"}})],1)],1),n("v-uni-view",{staticClass:"lgrg-title"},[n("v-uni-view",{staticClass:"lgrg-title-big text-bold"},[t._v("书斋便捷注册")]),n("v-uni-view",{staticClass:"lgrg-title-small"},[t._v("未注册过的昵称或手机号自动注册")])],1),n("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[n("v-uni-view",{staticClass:"lgrg-content  flex flex-direction justify-around align-center shadow-blur"},[n("v-uni-view",{staticClass:"lgrg-content-input flex align-center justify-start"},[n("v-uni-input",{staticClass:"text-xs",attrs:{name:"telephone",value:"",type:"number",placeholder:"请输入手机号作为账号"}})],1),n("v-uni-view",{staticClass:"lgrg-content-input flex align-center justify-start"},[n("v-uni-input",{staticClass:"text-xs",attrs:{name:"password",value:"",type:"number",placeholder:"请输入密码"}})],1),n("v-uni-view",{staticClass:"lgrg-content-bottonbox"},[n("v-uni-button",{staticClass:"lgrg-content-bottonbox-button",attrs:{type:"primary","form-type":"submit"}},[t._v("注册")])],1)],1)],1)],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ba35:function(t,e,n){"use strict";n.r(e);var a=n("f846"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},dc5c:function(t,e,n){"use strict";n.r(e);var a=n("b3b0"),o=n("ba35");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1fab");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"670e3a6e",null);e["default"]=s.exports},f846:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("f499"));n("96cf");var r=a(n("3b8d")),i=a(n("56cc")),s=n("3201"),l={components:{topStatus:i.default},data:function(){return{}},methods:{formSubmit:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var n,a,r,i,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.detail.value.telephone,a=e.detail.value.password,r={telephone:n,password:a,email:"123455"},!/^1\d{10}$/.test(n)||""==a){t.next=12;break}return i=(0,o.default)(r),t.next=7,(0,s.reqRegister)(i);case 7:l=t.sent,console.log(l);try{200==l.statusCode&&(0==l.data.meta.success&&uni.showToast({title:"注册失败",duration:2e3,icon:"none",position:"center"}),1==l.data.meta.success&&uni.showToast({title:"注册成功",duration:2e3,position:"bottom"}))}catch(e){console.log(e)}t.next=13;break;case 12:uni.showToast({title:"账号错误",duration:2e3,image:"/static/logo.png"});case 13:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=l}}]);