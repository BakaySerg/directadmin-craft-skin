(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1876:function(t,e,n){"use strict";n.r(e);var r=n(4073),a=n(2816);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n(3860);var s=n(0),i=n(3862),l=n.n(i),c=Object(s.a)(a.default,r.a,r.b,!1,null,null,null);"function"==typeof l.a&&l()(c),e.default=c.exports},1926:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(45),a=n(22),o=n(20);function s(t,e){Object(o.a)(2,arguments);var n=Object(a.a)(t),s=Object(r.a)(e);if(isNaN(s))return new Date(NaN);if(!s)return n;var i=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+s+1,0);var c=l.getDate();return i>=c?l:(n.setFullYear(l.getFullYear(),l.getMonth(),i),n)}},1962:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(45),a=n(707),o=n(20);function s(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(e),s=7*n;return Object(a.a)(t,s)}},2816:function(t,e,n){"use strict";n.r(e);var r=n(2817),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=a.a},2817:function(t,e,n){"use strict";n(7),n(5),n(6),n(8),n(11),n(23),n(25);var r=n(1),a=n(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(36));n(27),n(34),n(16),n(14),n(18),n(10),n(3855),n(17);var s=r(n(37)),i=r(n(2)),l=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=f(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var i=o?Object.getOwnPropertyDescriptor(t,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=t[s]}r.default=t,n&&n.set(t,r);return r}(n(3856)),c=n(504),u=r(n(3857)),d=r(n(3858)),p=r(n(3859));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(f=function(t){return t?n:e})(t)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h,_,b,y,m={preload:[l.getSettings,l.getSecret,l.getCodes],api:[{command:l.getSettings,bind:"values"},{command:l.generateSecret,bind:{isDone:"secretGenerated"}},{command:l.getSecret,bind:"secret"},{command:l.getCodes,bind:"codes"}],data:function(){return{code:"",expiry:"0",checkedRows:[],tab:"general",settings:{description:"",enabled:!1,notify:!1,allowApiLogins:!1}}},computed:{expiryOptions:function(){var t=function(t){return(0,c.toApiDate)(t(new Date))};return[{label:this.$gettext("1 Day"),key:t((0,u.default)(1))},{label:this.$gettext("2 Days"),key:t((0,u.default)(2))},{label:this.$gettext("1 Week"),key:t((0,d.default)(1))},{label:this.$gettext("2 Weeks"),key:t((0,d.default)(2))},{label:this.$gettext("1 Month"),key:t((0,p.default)(1))},{label:this.$gettext("6 Months"),key:t((0,p.default)(6))},{label:this.$gettext("12 Months"),key:t((0,p.default)(12))}].reduce((function(t,e){var n=e.key,r=e.label;return g(g({},t),{},(0,i.default)({},n,r))}),{0:this.$gettext("Never")})},checkedCodes:function(){return this.checkedRows.map((function(t){return t.code}))}},created:function(){this.settings=g({},this.$api.values)},methods:{generateSecret:(y=(0,s.default)(o.default.mark((function t(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.generateSecret();case 2:(e=t.sent)&&e.success&&(l.getSecret(),l.getSettings(),this.reloadScratchCodes());case 4:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)}),testAuthCode:function(){l.testCode(this.$get(["code"]))},saveSettings:(b=(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.saveSettings({twostep_auth_description:this.settings.description,twostep_auth:this.settings.enabled,api_with_password:this.settings.allowApiLogins,notify_on_all_twostep_auth_failures:this.settings.notify});case 2:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),addCodes:(_=(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.addCodes(this.$get(["expiry"]));case 2:t.sent&&this.reloadScratchCodes();case 4:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),reloadScratchCodes:function(){l.getCodes(),this.checkedRows=[]},printCodes:function(){document.querySelector("html").classList.add("print-scratch-codes"),window.print()},deleteCodes:(h=(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.deleteCodes({select:this.checkedCodes});case 2:t.sent&&this.reloadScratchCodes();case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),sorter:function(t){switch(t){case"expiry":return function(t){return t.expiry||1/0};case"created":return function(t){return t.created};default:return function(t){return Number(t.code)}}}}};e.default=m},2818:function(t,e,n){"use strict";function r(t,e,n){return(n=n||[]).length>=e?t.apply(null,n.slice(0,e).reverse()):function(){var a=Array.prototype.slice.call(arguments);return r(t,e,n.concat(a))}}n.d(e,"a",(function(){return r}))},3166:function(t,e,n){var r=n(3861);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("84b2a8f2",r,!0,{})},3855:function(t,e,n){"use strict";var r=n(29),a=n(51),o=n(39),s=n(52),i=n(46),l=n(56).f,c=n(949),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(p,u);var f=p.prototype=u.prototype;f.constructor=p;var v=f.toString,g="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=v.call(t);if(s(d,t))return"";var n=g?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},3856:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.deleteCodes=e.getCodes=e.addCodes=e.submitCode=e.saveSettings=e.getSecret=e.testCode=e.generateSecret=e.getSettings=void 0;var a=r(n(2)),o=r(n(78));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l="/CMD_TWOSTEP_AUTH",c=o.default.get({id:"TSA_SETTINGS",url:l,after:function(t){return t.flow(t.project({maxAttempts:"MAX_ATTEMPTS",description:"KEY_NAME",enabled:"TWOSTEP_AUTH_CHECKED",requireGeneration:"TWOSTEP_AUTH_DISABLED",notify:"NOTIFY_ON_ALL_FAILURES_CHECKED",allowApiLogins:"SECURITY_QUESTIONS_ON_API_CHECKED"}),t.mapProps({notify:t.isEqual("checked"),allowApiLogins:t.isEqual("checked"),enabled:t.convert.toAppBoolean,requireGeneration:t.convert.toAppBoolean}))}});e.getSettings=c;var u=o.default.post({url:l,id:"GENERATE_TSA_SECRET",params:{action:"new_secret"}});e.generateSecret=u;var d=o.default.post({url:l,params:{action:"test"},schema:{code:o.default.REQUIRED_STRING}});e.testCode=d;var p=o.default.get({id:"TSA_SECRET",url:l,after:function(t){return t.project({value:"SPACED_SECRET",qr:"QR_URL"})}});e.getSecret=p;var f=o.default.post({url:l,params:{action:"settings"},schema:{twostep_auth_description:o.default.REQUIRED_STRING,twostep_auth:o.default.REQUIRED_BOOL,api_with_password:o.default.REQUIRED_BOOL,notify_on_all_twostep_auth_failures:o.default.REQUIRED_BOOL}});e.saveSettings=f;var v=o.default.post({url:"/CMD_ASK_TWOSTEP_AUTH",params:{action:"submit",json:!0},schema:{code:o.default.REQUIRED_STRING,trust_device:o.default.REQUIRED_BOOL,referrer:i(i({},o.default.OPTIONAL_STRING),{},{default:"/"})}});e.submitCode=v;var g=o.default.post({url:l,params:{add:!0,action:"select"},schema:{expiry:o.default.REQUIRED_STRING}});e.addCodes=g;var h=o.default.get({id:"TSA_CODES",url:l,response:[],after:function(t){return t.flow(t.getProp("scratch_codes"),t.mapValues((function(t,e){return i({code:e},t)})),t.toArray,t.mapArrayProps({created:t.convert.toAppDate,expiry:function(e){return"0"!==e&&t.convert.toAppDate(e)}}))}});e.getCodes=h;var _=o.default.select({url:l,params:{delete:!0}});e.deleteCodes=_},3857:function(t,e,n){"use strict";n.r(e);var r=n(707),a=n(2818),o=Object(a.a)(r.a,2);e.default=o},3858:function(t,e,n){"use strict";n.r(e);var r=n(1962),a=n(2818),o=Object(a.a)(r.a,2);e.default=o},3859:function(t,e,n){"use strict";n.r(e);var r=n(1926),a=n(2818),o=Object(a.a)(r.a,2);e.default=o},3860:function(t,e,n){"use strict";n(3166)},3861:function(t,e,n){},3862:function(t,e){},4073:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{id:"two-step-auth",actions:[{label:t.$gettext("Generate Secret"),icon:"#dices",handler:t.generateSecret,visible:!0===t.$api.values.requireGeneration},{label:t.$gettext("Add Codes"),icon:"#plus-fill",handler:t.$dialog("ADD_CODES_DIALOG").open,visible:!1===t.$api.values.requireGeneration&&"codes"===t.tab},{label:t.$gettext("Print"),handler:t.printCodes,icon:"#console",visible:!1===t.$api.values.requireGeneration&&"codes"===t.tab}]}},[n("template",{slot:"details"},[t.$api.values.requireGeneration&&!t.$api.secretGenerated?n("ui-infobar-item",{attrs:{title:t.$gettext("Details")}},[n("translate",{attrs:{tag:"strong"}},[t._v("\n                This feature is not turned on.\n            ")]),t._v(" "),n("translate",{attrs:{tag:"p"}},[t._v("\n                Create a new secret to begin.\n            ")])],1):t._e()],1),t._v(" "),t.$api.values.requireGeneration?n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:t.generateSecret},slot:"header:buttons"},[n("translate",[t._v("Generate Secret")])],1):t._e(),t._v(" "),t.$api.values.requireGeneration||"codes"!==t.tab?t._e():n("template",{slot:"header:buttons"},[n("ui-button",{attrs:{theme:"primary"},on:{click:function(e){t.$dialog("ADD_CODES_DIALOG").open()}}},[n("translate",[t._v("Add Codes")])],1),t._v(" "),n("ui-button",{attrs:{theme:"safe"},on:{click:t.printCodes}},[n("translate",[t._v("Print")])],1)],1),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"page:title"},slot:"page:title"},[n("translate",[t._v("\n            Two-Step Authentication\n        ")]),t._v(" "),n("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin",value:[,,,1],expression:"[,,,1]"}],attrs:{placement:"bottom"}},[n("translate",{attrs:{tag:"div"}},[t._v("\n                To use this feature, download the Google Authenticator App for your phone (or equivalent), and scan in the QR code.\n            ")]),t._v(" "),n("translate",{attrs:{tag:"div"}},[t._v("\n                The App will show you a code, which you'll use to Login to DirectAdmin.\n            ")]),t._v(" "),n("translate",{attrs:{tag:"div"}},[t._v("\n                Scratch Codes are one-time use codes in case you don't have your phone, so keep them safe.\n            ")])],1)],1),t._v(" "),t.$api.values.requireGeneration&&!t.$api.secretGenerated?n("app-page-section",[n("translate",{attrs:{tag:"strong"}},[t._v("\n            This feature is not turned on.\n        ")]),t._v(" "),n("translate",{attrs:{tag:"p"}},[t._v("\n            Create a new secret to begin.\n        ")])],1):n("ui-tabs",{attrs:{tabs:[{id:"general",label:t.$gettext("Settings")},{id:"codes",label:t.$gettext("Scratch Codes")}],"hide-single-tab":"",selected:t.tab},on:{"update:selected":function(e){t.tab=e}}},[n("template",{slot:"tab:general"},[t.$api.values.requireGeneration?t._e():[n("ui-form-element",{attrs:{underline:!1}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Secret\n                    ")]),t._v(" "),n("ui-input-group",{attrs:{slot:"content"},slot:"content"},[n("ui-button",{attrs:{slot:"additions:left",title:t.$gettext("Generate Secret")},on:{click:t.generateSecret},slot:"additions:left"},[n("ui-icon",{attrs:{slot:"icon",id:"dices",theme:"primary"},slot:"icon"}),t._v(" "),t.$_Client.isPhone?t._e():n("translate",[t._v("\n                                Generate Secret\n                            ")])],1),t._v(" "),n("input-text",{attrs:{slot:"input",value:t.$api.secret.value,disabled:""},slot:"input"}),t._v(" "),n("ui-tooltip",{attrs:{slot:"additions:right"},slot:"additions:right"},[n("ui-button",{attrs:{slot:"trigger",theme:"light"},slot:"trigger"},[n("ui-icon",{attrs:{id:"question",size:"medium",theme:"primary"}})],1),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column",cross:"center"},expression:"{ dir: 'column', cross: 'center'}"}],staticClass:"qr-code-tooltip"},[n("img",{attrs:{src:t.$api.secret.qr,width:t.$_Client.isPhone?"100%":"200",title:t.$gettext("Scan this code in your phone")}}),t._v(" "),n("translate",[t._v("\n                                    Be sure to re-scan the QR code, as all old codes become invalid.\n                                ")])],1)],1)],1)],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        QR Code\n                    ")]),t._v(" "),n("ui-input-group",{attrs:{slot:"content"},slot:"content"},[n("input-text",{attrs:{slot:"input",number:"",placeholder:t.$gettext("Test your phone's code")},slot:"input",model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" "),n("ui-button",{attrs:{slot:"additions:right",disabled:!t.code},on:{click:t.testAuthCode},slot:"additions:right"},[n("translate",[t._v("\n                                Test Code\n                            ")])],1)],1)],1)],t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Description\n                ")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.description,callback:function(e){t.$set(t.settings,"description",e)},expression:"settings.description"}})],1),t._v(" "),n("ui-form-element",{attrs:{underline:!1}},[n("span",{attrs:{slot:"title"},slot:"title"}),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.enabled,callback:function(e){t.$set(t.settings,"enabled",e)},expression:"settings.enabled"}},[n("translate",[t._v("\n                        Require valid Two-Step Authentication Code to login to this account.\n                    ")])],1)],1),t._v(" "),n("ui-form-element",{attrs:{underline:!1}},[n("span",{attrs:{slot:"title"},slot:"title"}),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.allowApiLogins,callback:function(e){t.$set(t.settings,"allowApiLogins",e)},expression:"settings.allowApiLogins"}},[n("translate",[t._v("\n                        Allow API logins with the current User/password. Login Keys and Session Keys are always allowed.\n                    ")])],1)],1),t._v(" "),n("ui-form-element",{attrs:{underline:!1}},[n("span",{attrs:{slot:"title"},slot:"title"}),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.notify,callback:function(e){t.$set(t.settings,"notify",e)},expression:"settings.notify"}},[n("translate",[t._v("\n                        Notify me on all incorrect codes entries. Disabling this option will still notify you after 5 failed attempts.\n                    ")])],1)],1)],2),t._v(" "),n("div",{attrs:{slot:"tab:codes",id:"scratch-codes"},slot:"tab:codes"},[n("ui-r-table",{attrs:{rows:t.$api.codes,columns:[{id:"code",label:t.$gettext("Scratch Code"),editable:!1},{id:"created",label:t.$gettext("Date Created")},{id:"expiry",label:t.$gettext("Expires")}],"rows-count":t.$api.codes.length,"checked-rows":t.checkedRows,"vertical-layout":t.$_Client.isPhone,"sort-by":t.sorter,"is-sortable":"","disable-pagination":"","equal-width-layout":""},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"col:created",fn:function(e){var n=e.created;return[t._v("\n                    "+t._s(t._f("date")(n))+"\n                ")]}},{key:"col:expiry",fn:function(e){var r=e.expiry;return[r?[t._v("\n                        "+t._s(t._f("date")(r))+"\n                    ")]:n("translate",[t._v("\n                        Never\n                    ")])]}}])},[n("ui-table-action",{attrs:{slot:"table:actions"},on:{click:t.deleteCodes},slot:"table:actions"},[n("translate",[t._v("Delete")])],1)],1)],1)],2),t._v(" "),n("ui-dialog",{attrs:{id:"ADD_CODES_DIALOG"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n            Add Scratch Codes\n        ")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("translate",[t._v("\n                Scratch Codes are one-time use codes in case you don't have your phone, so keep them safe.\n            ")]),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Expiry\n                ")]),t._v(" "),n("input-select",{attrs:{slot:"content",options:t.expiryOptions},slot:"content",model:{value:t.expiry,callback:function(e){t.expiry=e},expression:"expiry"}})],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:t.addCodes},slot:"buttons"},[n("translate",[t._v("Add Codes")])],1)],1),t._v(" "),"general"!==t.tab||t.$api.values.requireGeneration?t._e():n("ui-button",{attrs:{slot:"footer:buttons",theme:"primary"},on:{click:t.saveSettings},slot:"footer:buttons"},[n("translate",[t._v("Save")])],1)],2)},a=[]}}]);