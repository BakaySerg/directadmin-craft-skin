(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1815:function(t,e,a){"use strict";a.r(e);var n=a(4013),r=a(2598);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o=a(0),l=a(3643),s=a.n(l),u=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);"function"==typeof s.a&&s()(u),e.default=u.exports},1884:function(t,e,a){"use strict";var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.validateIPRangeList=e.validateDomain=e.validatePassword=e.validateSubdomain=e.validateUsername=e.validateDBUser=e.validateDatabase=e.validateDNSName=e.validateMXValue=e.validateDNSValue=e.validateFTP=e.validateEmail=e.validateForwarder=void 0;var r=n(a(78)),i=n(a(98)),o=n(a(1885)),l=r.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:r.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:o.default.isValid,message:o.default.getMessage}}),s=l.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});e.validateForwarder=s;var u=l.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});e.validateEmail=u;var d=l.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});e.validateFTP=d;var c=l.extend({params:{type:"dns"},domain:!0,schema:{record:r.default.REQUIRED_STRING}}),f=c.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:r.default.REQUIRED_STRING}});e.validateDNSValue=f;var v=f.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(t){return{value:"10",mx_value:t.value}}});e.validateMXValue=v;var p=c.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:r.default.REQUIRED_STRING,value:null}});e.validateDNSName=p;var m=l.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});e.validateDatabase=m;var w=l.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});e.validateDBUser=w;var _=l.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});e.validateUsername=_;var h=l.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});e.validateSubdomain=h;var D=l.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});e.validatePassword=D;var y=l.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(t){var e=t.value;return{value:i.default.toASCII(e)}}});e.validateDomain=y;var g=l.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});e.validateIPRangeList=g},1885:function(t,e,a){"use strict";a.r(e);var n=a(97);e.default={isValid:function(t){return void 0===t.error},getMessage:function(t){return Object(n.toAppHtml)(t.error||"")}}},2054:function(t,e,a){"use strict";var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.deleteForwarders=e.modifyForwarder=e.createForwardersRaw=e.createForwarder=e.getForwarders=void 0;var r=n(a(78)),i=r.default.get({id:"FORWARDERS",url:"/CMD_EMAIL_FORWARDER",response:[],domain:!0,after:function(t){return t.flow(t.mapValues((function(t,e){return{name:e,value:t}})),t.toArray)}});e.getForwarders=i;var o=r.default.post({url:"/CMD_EMAIL_FORWARDER",params:{action:"create"},domain:!0,schema:{user:r.default.REQUIRED_STRING,email:r.default.REQUIRED_STRING}});e.createForwarder=o;var l=r.default.post({url:"/CMD_EMAIL_FORWARDER",params:{action:"create"},schema:{forwarders:r.default.REQUIRED_STRING},before:function(t){return{forwarders:null,raw_forwarders:t.forwarders}}});e.createForwardersRaw=l;var s=o.extend({params:{action:"modify"}});e.modifyForwarder=s;var u=r.default.select({url:"/CMD_EMAIL_FORWARDER",method:"POST",params:{action:"delete",delete:!0},domain:!0});e.deleteForwarders=u},2598:function(t,e,a){"use strict";a.r(e);var n=a(2599),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},2599:function(t,e,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var n=a(1),r=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(36)),o=n(a(44)),l=n(a(37));a(34),a(26),a(17),a(5),a(12),a(15);var s=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var a=f(e);if(a&&a.has(t))return a.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=i?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=t[o]}n.default=t,a&&a.set(t,n);return n}(a(2054)),u=n(a(3636)),d=n(a(3639)),c=n(a(3642));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(f=function(t){return t?a:e})(t)}var v,p,m={preload:s.getForwarders,commands:s,api:[{command:s.getForwarders,bind:"forwarders"}],components:{CreateForwardersDialog:u.default,ModifyForwarderDialog:d.default,CreateForwardersDialogLegacy:c.default},data:function(){return{checkedRows:[],modify:{name:"",value:[]},filter:""}},computed:{checkedForwarders:function(){return this.checkedRows.map((function(t){return t.name}))},limit:function(){return Number(this.$state.app.tokens.USERFORWARDERMAX)||1/0},canCreateForwarder:function(){return this.limit>this.$api.forwarders.length},forwarders:function(){if(this.filter){var t=this.filter.toLowerCase(),e=function(e){return e.toLowerCase().includes(t)};return this.$api.forwarders.filter((function(t){return e(t.name)||t.value.some(e)}))}return this.$api.forwarders}},watch:{$domain:function(){s.getForwarders()}},methods:{deleteForwarders:(p=(0,l.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.deleteForwarders({select:this.checkedForwarders});case 2:t.sent&&(this.checkedRows=[],s.getForwarders());case 4:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),modifyForwarderDialog:(v=(0,l.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.modify.name=e.name,this.modify.value=(0,o.default)(e.value),this.$dialog("MODIFY_FORWARDER_DIALOG").open();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})}};e.default=m},2600:function(t,e,a){"use strict";a.r(e);var n=a(2601),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},2601:function(t,e,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var n=a(1),r=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(36));a(24),a(5),a(12),a(15),a(55),a(34),a(57),a(86);var o=n(a(37)),l=n(a(44)),s=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var a=d(e);if(a&&a.has(t))return a.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=i?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=t[o]}n.default=t,a&&a.set(t,n);return n}(a(2054)),u=(a(31),a(1884));function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(d=function(t){return t?a:e})(t)}var c,f,v={data:function(){return{source:[],destination:[],newSource:"",newDestination:{type:"email",value:""}}},api:[{command:u.validateForwarder,bind:"validateForwarder"}],computed:{fullSource:function(){return this.$valid("add-forwarder-name")?[].concat((0,l.default)(this.source),[{value:this.newSource}]):this.source},fullDestination:function(){return this.$valid("add-forwarder-destination")?[].concat((0,l.default)(this.destination),[{value:this.getStringDestination(this.newDestination)}]):this.destination},validForwarder:function(){return this.destination.length&&this.source.length}},methods:{addSource:function(){var t=this;this.newSource&&this.$valid("add-forwarder-name")&&(this.source.push({value:this.newSource}),this.newSource="",setTimeout((function(){t.$store.commit("validation/TOUCH_GROUP_INPUTS","add-forwarder-name")}),500))},removeSource:function(t){this.source=this.source.filter((function(e){return e.value!==t}))},addDestination:function(){var t=this;this.newDestination.value&&this.$valid("add-forwarder-destination")&&(this.destination.push({value:this.getStringDestination(this.newDestination)}),this.newDestination.value="",setTimeout((function(){t.$store.commit("validation/TOUCH_GROUP_INPUTS","add-forwarder-destination")}),500))},removeDestination:function(t){this.destination=this.destination.filter((function(e){return e.value!==t}))},getStringDestination:function(t){return["blackhole","fail"].includes(t.type)?":".concat(t.type,":"):"email"===t.type||t.value.includes('"|')?t.value:'"|'.concat(t.value,'"')},createForwarders:(f=(0,o.default)(i.default.mark((function t(){var e,a,n=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.fullSource.map((function(t){return t.value})).join(","),a=this.fullDestination.map((function(t){return t.value})).map((function(t){return t.includes('"|')?t:n.$p6e.email2ascii(t)})).join(","),t.next=4,s.createForwarder({user:e,email:a});case 4:this.$reset(),s.getForwarders();case 6:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),validateSpace:function(t){return!t||!t.includes(" ")},validateUniqueName:function(t){return!t||!Boolean(this.source.find((function(e){return e.value===t})))},validateUniqueDestination:function(t){var e=this;return!t||!Boolean(this.destination.find((function(t){return t.value===e.getStringDestination(e.newDestination)})))},validateEmpty:function(t){return!t||!!t.trim()},validateForwarder:(c=(0,o.default)(i.default.mark((function t(e){var a,n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,(0,u.validateForwarder)({value:"".concat(e,"@").concat(this.$domain)});case 4:return a=t.sent,n=a.valid,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})}};e.default=v},2602:function(t,e,a){"use strict";a.r(e);var n=a(2603),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},2603:function(t,e,a){"use strict";a(16),a(23),a(25),a(18),a(6);var n=a(1),r=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(36));a(24),a(5),a(12),a(15),a(57),a(86),a(14),a(65),a(34),a(55),a(26);var o=n(a(37)),l=n(a(44)),s=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var a=u(e);if(a&&a.has(t))return a.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=i?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=t[o]}n.default=t,a&&a.set(t,n);return n}(a(2054));a(31);function u(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(u=function(t){return t?a:e})(t)}var d,c,f={props:{name:{type:String,required:!0},value:{type:Array,required:!0}},data:function(){return{destination:[],newDestination:{type:"email",value:""}}},computed:{fullDestination:function(){return this.$valid("add-forwarder-destination")?[].concat((0,l.default)(this.destination),[{value:this.getStringDestination(this.newDestination)}]):this.destination}},methods:{addDestination:function(){var t=this;this.newDestination.value&&this.$valid("add-forwarder-destination")&&(this.destination.push({value:this.getStringDestination(this.newDestination)}),this.newDestination.value="",setTimeout((function(){t.$store.commit("validation/TOUCH_GROUP_INPUTS","add-forwarder-destination")}),500))},removeDestination:function(t){this.destination=this.destination.filter((function(e){return e.value!==t}))},getStringDestination:function(t){return["blackhole","fail"].includes(t.type)?":".concat(t.type,":"):"email"===t.type||t.value.includes('"|')?t.value:'"|'.concat(t.value,'"')},validateUniqueDestination:function(t){var e=this;return!t||!Boolean(this.destination.find((function(t){return t.value===e.getStringDestination(e.newDestination)})))},validateEmpty:function(t){return!t||!!t.trim()},validateForwarder:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((c=(0,o.default)(i.default.mark((function t(e){var a,n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,validateForwarder({value:"".concat(e,"@").concat(this.$domain)});case 4:return a=t.sent,n=a.valid,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})),loadData:function(){var t=this;this.destination=this.value.map((function(e){return{value:e.includes('"|')?e:t.$p6e.email2unicode(e)}}))},modifyForwarder:(d=(0,o.default)(i.default.mark((function t(){var e,a=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.fullDestination.map((function(t){return t.value})).map((function(t){return t.includes('"|')?t:a.$p6e.email2ascii(t)})).join(","),t.next=3,s.modifyForwarder({user:this.name,email:e});case 3:t.sent&&(this.$reset(),s.getForwarders(),this.$emit("modified"));case 5:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})}};e.default=f},2604:function(t,e,a){"use strict";a.r(e);var n=a(2605),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},2605:function(t,e,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var n=a(1),r=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(12),a(15);var i=n(a(36)),o=n(a(37)),l=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var a=s(e);if(a&&a.has(t))return a.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=i?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=t[o]}n.default=t,a&&a.set(t,n);return n}(a(2054));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(s=function(t){return t?a:e})(t)}var u,d={data:function(){return{data:""}},methods:{createForwarders:(u=(0,o.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.createForwardersRaw({forwarders:this.data}).then(l.getForwarders);case 1:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)}),multilineValidator:function(t){return!t||!1===t.includes("\n")}}};e.default=d},3125:function(t,e,a){var n=a(3638);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("1d732ff2",n,!0,{})},3126:function(t,e,a){var n=a(3641);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("0bf18bf6",n,!0,{})},3636:function(t,e,a){"use strict";a.r(e);var n=a(4163),r=a(2600);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a(3637);var o=a(0),l=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);e.default=l.exports},3637:function(t,e,a){"use strict";a(3125)},3638:function(t,e,a){},3639:function(t,e,a){"use strict";a.r(e);var n=a(4164),r=a(2602);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a(3640);var o=a(0),l=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);e.default=l.exports},3640:function(t,e,a){"use strict";a(3126)},3641:function(t,e,a){},3642:function(t,e,a){"use strict";a.r(e);var n=a(4165),r=a(2604);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o=a(0),l=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);e.default=l.exports},3643:function(t,e){},4013:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",{attrs:{actions:t.canCreateForwarder?[{label:t.$gettext("Create E-mail Forwarder"),handler:t.$dialog("CREATE_FORWARDERS_DIALOG").open,icon:"#plus-fill",theme:"primary"},{label:t.$gettext("Create forwarders from raw data"),handler:t.$dialog("CREATE_FORWARDERS_DIALOG_LEGACY").open,icon:"#console"}]:[]}},[a("template",{slot:"details"},[a("ui-infobar-item",{attrs:{title:t.$gettext("Details")}},[a("ui-infobar-stats",{attrs:{title:t.$gettext("Forwarders"),usage:t.$api.forwarders.length,limit:t.limit}})],1)],1),t._v(" "),a("ui-tokens-conditional-button",{attrs:{slot:"header:buttons",theme:"primary",token:"USERFORWARDERMAX",usage:t.$api.forwarders.length},on:{click:function(e){t.$dialog("CREATE_FORWARDERS_DIALOG").open()}},slot:"header:buttons"},[a("translate",[t._v("Create E-mail Forwarder")]),t._v(" "),a("translate",{attrs:{slot:"limitText"},slot:"limitText"},[t._v("\n            E-mail Forwarders limit reached\n        ")])],1),t._v(" "),t.canCreateForwarder&&"standard2021"!==t.$_layout?a("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:function(e){t.$dialog("CREATE_FORWARDERS_DIALOG_LEGACY").open()}},slot:"bottom:links"},[a("translate",[t._v("Create forwarders from raw data")])],1):t._e(),t._v(" "),a("app-page-section",[a("ui-r-table",t._b({attrs:{"disable-pagination":"","vertical-layout":t.$_Client.isPhone},on:{"update:checkedRows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"col:name",fn:function(e){var a=e.name;return[t._v("\n                "+t._s(a)+"@"+t._s(t.$domainUnicode)+"\n            ")]}},{key:"col:value",fn:function(e){var n=e.value;return t._l(n,(function(e){return a("div",{key:e},[t._v("\n                    "+t._s(t._f("p6eUnicodeEmail")(e))+"\n                ")])}))}},{key:"row:actions",fn:function(e){var n=e.item;return[a("ui-button-icon",{attrs:{icon:"pencil",title:t.$gettext("Edit")},on:{click:function(e){return t.modifyForwarderDialog(n)}}})]}}])},"ui-r-table",{rows:t.forwarders,checkedRows:t.checkedRows,columns:[{id:"name",label:t.$gettext("Forwarder")},{id:"value",label:t.$gettext("Value")}]},!1),[a("template",{slot:"buttons:before"},[a("input-text",{attrs:{placeholder:t.$gettext("Filter forwarders")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[a("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[a("ui-icon",{attrs:{id:"search"}})],1),t._v(" "),a("ui-button",{attrs:{slot:"additions:right",disabled:""},on:{click:function(e){t.filter=""}},slot:"additions:right"},[a("ui-icon",{attrs:{id:"cancel"}})],1)],1)],1),t._v(" "),a("template",{slot:"table:actions"},[a("ui-table-action",{on:{click:function(e){t.$dialog("DELETE_ITEMS_DIALOG").open()}}},[a("translate",[t._v("Delete")])],1)],1)],2)],1),t._v(" "),a("create-forwarders-dialog"),t._v(" "),a("create-forwarders-dialog-legacy"),t._v(" "),a("modify-forwarder-dialog",t._b({on:{modified:t.$reset}},"modify-forwarder-dialog",t.modify,!1)),t._v(" "),a("ui-dialog-delete-items",{attrs:{subject:t.$ngettext("forwarder","forwarders",t.checkedRows.length)},on:{"click:confirm":t.deleteForwarders}})],2)},r=[]},4163:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ui-dialog",{attrs:{id:"CREATE_FORWARDERS_DIALOG",size:"normal"}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        Create Forwarders\n    ")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[t.source.length?a("ui-table",{attrs:{items:t.source}},[a("ui-column",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{id:"value",label:t.$gettext("Forwarder Name")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.value)+"@"+t._s(t.$domainUnicode)+"\n                ")]}}],null,!1,3627313924)}),t._v(" "),a("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("ui-button-icon",{attrs:{icon:"delete",title:t.$gettext("Remove Forwarder")},on:{click:function(a){return t.removeSource(e.value)}}})]}}],null,!1,448510911)})],1):t._e(),t._v(" "),a("ui-form-element",{attrs:{vertical:"",group:"add-forwarder-name",validators:{required:!0,validateForwarder:t.validateForwarder,validateSpace:t.validateSpace,validateUniqueName:t.validateUniqueName}}},[t.source.length?t._e():a("translate",{attrs:{slot:"title",vertical:""},slot:"title"},[t._v("\n                New Forwarder Name\n            ")]),t._v(" "),a("input-text",{attrs:{slot:"content"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSource.apply(null,arguments)}},slot:"content",model:{value:t.newSource,callback:function(e){t.newSource=e},expression:"newSource"}},[a("ui-button",{staticClass:"domainButton",attrs:{slot:"additions:right",theme:"light",size:"normal",disabled:""},slot:"additions:right"},[t._v("\n                    @"+t._s(t.$domainUnicode)+"\n                ")]),t._v(" "),a("ui-button",{attrs:{slot:"additions:right",theme:"safe",size:"normal",icon:"plus-fill","validate-group":"add-forwarder-name"},on:{click:t.addSource},slot:"additions:right"},[a("translate",[t._v("Add")])],1)],1),t._v(" "),a("span",{attrs:{slot:"error:validateForwarder"},domProps:{innerHTML:t._s(t.$api.validateForwarder.message)},slot:"error:validateForwarder"}),t._v(" "),a("translate",{attrs:{slot:"error:validateSpace"},slot:"error:validateSpace"},[t._v("\n                Should not contain spaces\n            ")]),t._v(" "),a("translate",{attrs:{slot:"error:validateUniqueName"},slot:"error:validateUniqueName"},[t._v("\n                Name already in list\n            ")])],1),t._v(" "),t.destination.length?a("ui-table",{attrs:{items:t.destination}},[a("ui-column",{attrs:{id:"value",label:t.$gettext("Destination")}}),t._v(" "),a("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("ui-button-icon",{attrs:{icon:"delete",title:t.$gettext("Remove Destination")},on:{click:function(a){return t.removeDestination(e.value)}}})]}}],null,!1,3552980462)})],1):t._e(),t._v(" "),a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Add Destination\n            ")]),t._v(" "),a("input-select",{attrs:{slot:"content",options:{email:t.$gettext("E-Mail"),pipe:t.$gettext("Pipe"),blackhole:":blackhole:",fail:":fail:"}},slot:"content",model:{value:t.newDestination.type,callback:function(e){t.$set(t.newDestination,"type",e)},expression:"newDestination.type"}})],1),t._v(" "),"email"===t.newDestination.type?a("ui-form-element",{key:"emailDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,email:!0,validateUniqueDestination:t.validateUniqueDestination}}},[a("input-text",{attrs:{slot:"content"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addDestination.apply(null,arguments)}},slot:"content",model:{value:t.newDestination.value,callback:function(e){t.$set(t.newDestination,"value",e)},expression:"newDestination.value"}},[a("ui-button",{attrs:{slot:"additions:right",size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:t.addDestination},slot:"additions:right"},[a("translate",[t._v("Add")])],1)],1),t._v(" "),a("translate",{attrs:{slot:"error:validateUniqueDestination"},slot:"error:validateUniqueDestination"},[t._v("\n                Destination already in list\n            ")])],1):"pipe"===t.newDestination.type?a("ui-form-element",{key:"pipeDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,validateEmpty:t.validateEmpty,validateUniqueDestination:t.validateUniqueDestination}}},[a("input-text",{attrs:{slot:"content"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addDestination.apply(null,arguments)}},slot:"content",model:{value:t.newDestination.value,callback:function(e){t.$set(t.newDestination,"value",e)},expression:"newDestination.value"}},[a("ui-button",{attrs:{slot:"additions:right",size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:t.addDestination},slot:"additions:right"},[a("translate",[t._v("Add")])],1)],1),t._v(" "),a("translate",{attrs:{slot:"error:validateEmpty"},slot:"error:validateEmpty"},[t._v("\n                Empty pipes are not allowed\n            ")]),t._v(" "),a("translate",{attrs:{slot:"error:validateUniqueDestination"},slot:"error:validateUniqueDestination"},[t._v("\n                Destination already in list\n            ")])],1):t._e()],1),t._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:!t.fullSource.length||!t.fullDestination.length},on:{click:t.createForwarders},slot:"buttons"},[a("translate",[t._v("Create")])],1)],1)},r=[]},4164:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ui-dialog",{attrs:{id:"MODIFY_FORWARDER_DIALOG",size:"normal"},on:{"dialog:open":t.loadData}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        Modify Forwarder\n    ")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Forwarder Name\n            ")]),t._v(" "),a("input-text",{attrs:{slot:"content",disabled:"disabled",value:t.name+"@"+t.$domainUnicode},slot:"content"})],1),t._v(" "),t.destination.length?a("ui-table",{attrs:{items:t.destination}},[a("ui-column",{attrs:{id:"value",label:t.$gettext("Destination")}}),t._v(" "),a("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("ui-button-icon",{attrs:{icon:"delete",title:t.$gettext("Remove Destination")},on:{click:function(a){return t.removeDestination(e.value)}}})]}}],null,!1,3552980462)})],1):t._e(),t._v(" "),a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Add Destination\n            ")]),t._v(" "),a("input-select",{attrs:{slot:"content",options:{email:t.$gettext("E-Mail"),pipe:t.$gettext("Pipe"),blackhole:t.$gettext("Blackhole"),fail:t.$gettext("Fail")}},slot:"content",model:{value:t.newDestination.type,callback:function(e){t.$set(t.newDestination,"type",e)},expression:"newDestination.type"}})],1),t._v(" "),"email"===t.newDestination.type?a("ui-form-element",{key:"emailDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,email:!0,validateUniqueDestination:t.validateUniqueDestination}}},[a("input-text",{attrs:{slot:"content"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addDestination.apply(null,arguments)}},slot:"content",model:{value:t.newDestination.value,callback:function(e){t.$set(t.newDestination,"value",e)},expression:"newDestination.value"}},[a("ui-button",{attrs:{slot:"additions:right",size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:t.addDestination},slot:"additions:right"},[a("translate",[t._v("Add")])],1)],1),t._v(" "),a("translate",{attrs:{slot:"error:validateUniqueDestination"},slot:"error:validateUniqueDestination"},[t._v("\n                Destination already in list\n            ")])],1):"pipe"===t.newDestination.type?a("ui-form-element",{key:"pipeDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,validateEmpty:t.validateEmpty,validateUniqueDestination:t.validateUniqueDestination}}},[a("input-text",{attrs:{slot:"content"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addDestination.apply(null,arguments)}},slot:"content",model:{value:t.newDestination.value,callback:function(e){t.$set(t.newDestination,"value",e)},expression:"newDestination.value"}},[a("ui-button",{attrs:{slot:"additions:right",size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:t.addDestination},slot:"additions:right"},[a("translate",[t._v("Add")])],1)],1),t._v(" "),a("translate",{attrs:{slot:"error:validateEmpty"},slot:"error:validateEmpty"},[t._v("\n                Empty pipes are not allowed\n            ")]),t._v(" "),a("translate",{attrs:{slot:"error:validateUniqueDestination"},slot:"error:validateUniqueDestination"},[t._v("\n                Destination already in list\n            ")])],1):t._e()],1),t._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary","validate-group":"modifyForwarder",disabled:!t.fullDestination.length},on:{click:t.modifyForwarder},slot:"buttons"},[a("translate",[t._v("Save")])],1)],1)},r=[]},4165:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ui-dialog",{attrs:{id:"CREATE_FORWARDERS_DIALOG_LEGACY",size:"normal"},on:{"dialog:open":t.$reset}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        Create Forwarder\n    ")]),t._v(" "),a("ui-form-element",{attrs:{slot:"content",vertical:"",group:"create-forwarders-raw",validators:{required:!0,multilineValidator:t.multilineValidator}},slot:"content"},[a("input-textarea",{staticClass:"width:100%",attrs:{slot:"content",placeholder:"info@test.com --\x3e matt@test.com, nick@test.com, jeff@test.com, phil@test.com",rows:"1"},slot:"content",model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),t._v(" "),a("translate",{attrs:{slot:"error:multilineValidator"},slot:"error:multilineValidator"},[t._v("\n            The raw forwarders create action does not support multiple lines.\n        ")])],1),t._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"safe","validate-group":"create-forwarders-raw"},on:{click:t.createForwarders},slot:"buttons"},[a("translate",[t._v("\n            Save\n        ")])],1)],1)},r=[]}}]);