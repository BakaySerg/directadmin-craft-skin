(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1765:function(e,t,a){"use strict";a.r(t);var s=a(3964),r=a(2305);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var u=a(0),o=a(3401),i=a.n(o),l=Object(u.a)(r.default,s.a,s.b,!1,null,null,null);"function"==typeof i.a&&i()(l),t.default=l.exports},2046:function(e,t,a){"use strict";var s=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.resetMessage=t.updateMessage=t.getMessage=void 0;var r=s(a(78)),n="/CMD_EDIT_USER_MESSAGE",u=r.default.get({id:"USER_MESSAGE",url:n,after:function(e){return e.mapProp("message",e.convert.toAppText)}});t.getMessage=u;var o=r.default.post({url:n,params:{save:!0},schema:{subject:r.default.REQUIRED_STRING,message:r.default.REQUIRED_STRING}});t.updateMessage=o;var i=r.default.post({url:n,params:{reset:!0}});t.resetMessage=i},2305:function(e,t,a){"use strict";a.r(t);var s=a(2306),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);t.default=r.a},2306:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var s=a(1),r=a(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(36)),u=s(a(37));a(49);var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(s,u,o):s[u]=e[u]}s.default=e,a&&a.set(e,s);return s}(a(2046));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var l,c={preload:o.getMessage,api:[{command:o.getMessage,bind:"data"}],data:function(){return{message:"",subject:""}},created:function(){Object.assign(this,this.$api.data)},methods:{updateUserMessage:function(){o.updateMessage({subject:this.subject,message:this.message})},resetToDefault:(l=(0,u.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.resetMessage();case 2:return e.t0=Object,e.t1=this,e.next=6,o.getMessage();case 6:e.t2=e.sent,e.t0.assign.call(e.t0,e.t1,e.t2);case 8:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})}};t.default=c},3401:function(e,t){},3964:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{actions:[{handler:e.resetToDefault,label:e.$gettext("Reset to default"),icon:"#console",theme:"danger"}]}},[a("ui-button",{attrs:{slot:"header:buttons",theme:"danger"},on:{click:e.resetToDefault},slot:"header:buttons"},[a("translate",[e._v("Reset to default")])],1),e._v(" "),a("app-page-section",[a("ui-form-element",{attrs:{group:"editUserMessage",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Subject\n            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"editUserMessage",validators:{required:!0},underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Message\n            ")]),e._v(" "),a("input-textarea",{attrs:{slot:"content",rows:"80"},slot:"content",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),e._v(" "),a("ui-button",{attrs:{slot:"footer:buttons",theme:"primary","validate-group":"editUserMessage"},on:{click:e.updateUserMessage},slot:"footer:buttons"},[a("translate",[e._v("Save")])],1)],1)},r=[]}}]);