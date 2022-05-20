(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1827:function(t,e,n){"use strict";n.r(e);var a=n(4025),s=n(2633);for(var r in s)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(r);var o=n(0),u=n(3665),i=n.n(u),c=Object(o.a)(s.default,a.a,a.b,!1,null,null,null);"function"==typeof i.a&&i()(c),e.default=c.exports},1884:function(t,e,n){"use strict";var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.validateIPRangeList=e.validateDomain=e.validatePassword=e.validateSubdomain=e.validateUsername=e.validateDBUser=e.validateDatabase=e.validateDNSName=e.validateMXValue=e.validateDNSValue=e.validateFTP=e.validateEmail=e.validateForwarder=void 0;var s=a(n(78)),r=a(n(98)),o=a(n(1885)),u=s.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:s.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:o.default.isValid,message:o.default.getMessage}}),i=u.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});e.validateForwarder=i;var c=u.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});e.validateEmail=c;var l=u.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});e.validateFTP=l;var d=u.extend({params:{type:"dns"},domain:!0,schema:{record:s.default.REQUIRED_STRING}}),p=d.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:s.default.REQUIRED_STRING}});e.validateDNSValue=p;var f=p.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(t){return{value:"10",mx_value:t.value}}});e.validateMXValue=f;var m=d.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:s.default.REQUIRED_STRING,value:null}});e.validateDNSName=m;var v=u.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});e.validateDatabase=v;var A=u.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});e.validateDBUser=A;var h=u.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});e.validateUsername=h;var _=u.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});e.validateSubdomain=_;var g=u.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});e.validatePassword=g;var w=u.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(t){var e=t.value;return{value:r.default.toASCII(e)}}});e.validateDomain=w;var b=u.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});e.validateIPRangeList=b},1885:function(t,e,n){"use strict";n.r(e);var a=n(97);e.default={isValid:function(t){return void 0===t.error},getMessage:function(t){return Object(a.toAppHtml)(t.error||"")}}},1953:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.changePassword=e.updateSettings=e.getSettings=e.deleteAccounts=e.unsuspendAccounts=e.suspendAccounts=e.updateAccount=e.createAccount=e.getAccounts=e.getAccount=void 0;var s=a(n(2)),r=a(n(78));function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var u=r.default.get({id:"FTP_ACCOUNT",url:"/CMD_FTP_SHOW",domain:!0,schema:{user:r.default.REQUIRED_STRING}});e.getAccount=u;var i=r.default.get({id:"FTP_ACCOUNTS",url:"/CMD_FTP",response:[],params:{full_json:!0},domain:!0,after:function(t){return t.flow(t.project({accounts:"users",anonLogin:"ANONLOGIN"}),t.mapProp("accounts",t.flow(t.mapValues((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,s.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({login:e},t)})),t.toArray,t.mapArrayProps({suspended:t.convert.toAppBoolean}))))}});e.getAccounts=i;var c=r.default.post({url:"/CMD_FTP",params:{action:"create"},domain:!0,schema:{user:r.default.REQUIRED_STRING,passwd:r.default.REQUIRED_STRING,passwd2:r.default.REQUIRED_STRING,type:r.default.REQUIRED_STRING,custom_val:r.default.OPTIONAL_STRING},notifySuccess:!1});e.createAccount=c;var l=c.extend({params:{action:"modify"},schema:{passwd:r.default.OPTIONAL_STRING,passwd2:r.default.OPTIONAL_STRING}});e.updateAccount=l;var d=r.default.select({url:"/CMD_FTP",domain:!0,params:{action:"delete"},notifySuccess:!1,notifyError:!1}),p=d.extend({params:{suspend:!0}});e.suspendAccounts=p;var f=d.extend({params:{unsuspend:!0}});e.unsuspendAccounts=f;var m=d.extend({params:{delete:!0}});e.deleteAccounts=m;var v=r.default.get({id:"FTP_SETTINGS",url:"/CMD_FTP_SETTINGS",domain:!0,after:function(t){return function(e){return{access:t.convert.toAppBoolean(e.Anonymous),upload:t.convert.toAppBoolean(e.AnonymousUpload),message:t.flow(t.convert.toAppString,t.convert.toAppText)(e.message)}}}});e.getSettings=v;var A=r.default.post({url:"/CMD_FTP_SETTINGS",params:{action:"modify"},domain:!0,schema:{anon:r.default.REQUIRED_BOOL,anonup:r.default.REQUIRED_BOOL,message:r.default.REQUIRED_STRING}});e.updateSettings=A;var h=r.default.post({url:"/CMD_CHANGE_FTP_PASSWORD",schema:{ftp:r.default.REQUIRED_STRING,password1:r.default.REQUIRED_STRING,password2:r.default.REQUIRED_STRING}});e.changePassword=h},2633:function(t,e,n){"use strict";n.r(e);var a=n(2634),s=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=s.a},2634:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n(36)),r=a(n(37)),o=a(n(2));n(26),n(34),n(57);var u=n(1953),i=n(504);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d,p,f,m={components:{ChangeFtpPasswordDialog:a(n(3664)).default},preload:u.getAccounts,api:[{command:u.getAccounts,bind:"ftp"}],data:function(){return{checkedRows:[],currentUsername:""}},computed:{aFTP:function(){return this.$state.app.tokens.USERAFTP},accounts:function(){return this.$api.ftp.accounts},limit:function(){return(0,i.toAppLimit)(this.$state.app.tokens.USERFTPMAX)},anonLogin:function(){return this.$api.ftp.anonLogin},rows:function(){var t=this.$state.app.user.name;return this.accounts.map((function(e){return l(l({},e),{},{route:t===e.user?"user/password":"user/ftp-accounts/edit"})}))},currentUser:function(){var t=this;return this.rows.find((function(e){return e.user===t.$state.app.user.name}))},checkedAccounts:function(){return this.checkedRows.map((function(t){return t.user}))},suspendActionAvailable:function(){return!!this.checkedRows.find((function(t){return!t.suspended}))},unsuspendActionAvailable:function(){return!!this.checkedRows.find((function(t){return t.suspended}))}},watch:{$domain:function(){this.loadAccounts()}},methods:{doAction:(f=(0,r.default)(s.default.mark((function t(e,n){var a;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({select:this.checkedAccounts});case 2:(a=t.sent)&&"0"===a.error&&(this.$notify({theme:"safe",title:n}),this.checkedRows=[],this.loadAccounts());case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return f.apply(this,arguments)}),suspendAccounts:function(){this.doAction(u.suspendAccounts,this.$ngettext("Account was successfully suspended","Accounts was successfully suspended",this.checkedAccounts.length))},unsuspendAccounts:(p=(0,r.default)(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.doAction(u.unsuspendAccounts,this.$ngettext("Account was successfully unsuspended","Accounts was successfully unsuspended",this.checkedAccounts.length));case 1:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),deleteAccounts:(d=(0,r.default)(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.doAction(u.deleteAccounts,this.$ngettext("Account was successfully deleted","Accounts was successfully deleted",this.checkedAccounts.length));case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),loadAccounts:function(){(0,u.getAccounts)()},openPasswordDialog:function(t){this.currentUsername=t,this.$dialog("CHANGE_FTP_PASSWORD_DIALOG").open()}}};e.default=m},2635:function(t,e,n){"use strict";n.r(e);var a=n(2636),s=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=s.a},2636:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(24);var s=a(n(2)),r=n(1884),o=n(1953),u=n(13);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,s.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={commands:{validatePassword:r.validatePassword},props:{username:{type:String,required:!0}},data:function(){return{newPassword:""}},computed:c(c({},(0,u.mapTokens)({ftpSep:"FTP_SEP"})),{},{fullUsername:function(){return"".concat(this.username).concat(this.ftpSep).concat(this.$domain)},requestData:function(){return{ftp:"".concat(this.username).concat(this.ftpSep).concat(this.$domain),password1:this.newPassword,password2:this.newPassword}}}),methods:{changePassword:function(){(0,o.changePassword)(this.requestData)}}};e.default=l},3664:function(t,e,n){"use strict";n.r(e);var a=n(4168),s=n(2635);for(var r in s)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(r);var o=n(0),u=Object(o.a)(s.default,a.a,a.b,!1,null,null,null);e.default=u.exports},3665:function(t,e){},4025:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{actions:t.rows.length<t.limit||t.aFTP?[{name:"user/ftp-accounts/create",label:t.$gettext("Create FTP Account"),visible:t.rows.length<t.limit,icon:"#plus-fill",theme:"primary"},{name:"user/ftp-settings",label:t.$gettext("Anonymous FTP Settings"),visible:t.aFTP,icon:"#settings"}]:[]}},[n("template",{slot:"details"},[n("ui-infobar-item",[n("ui-infobar-stats",{attrs:{usage:t.rows.length,limit:t.limit,title:t.$gettext("FTP Accounts")}})],1)],1),t._v(" "),n("translate",{attrs:{slot:"page:title","translate-params":{domain:t.$domainUnicode}},slot:"page:title"},[t._v("\n        FTP Accounts for %{ domain }\n    ")]),t._v(" "),n("ui-tokens-conditional-button",{attrs:{slot:"header:buttons",link:"",theme:"primary",name:"user/ftp-accounts/create",token:"USERFTPMAX",usage:t.rows.length},slot:"header:buttons"},[n("translate",[t._v("Create FTP Account")]),t._v(" "),n("translate",{attrs:{slot:"limitText"},slot:"limitText"},[t._v("\n            FTP Account limit reached\n        ")])],1),t._v(" "),t.aFTP&&"standard2021"!==t.$_layout?n("ui-link",{attrs:{slot:"bottom:links",name:"user/ftp-settings",bullet:""},slot:"bottom:links"},[n("translate",[t._v("Anonymous FTP Settings")])],1):t._e(),t._v(" "),t.$_Client.isPhone?n("app-page-section",[n("ui-stats-summary",{attrs:{badges:[{label:t.$gettext("FTP accounts"),value:t.rows.length}]}})],1):t._e(),t._v(" "),n("app-page-section",[n("ui-r-table",t._b({attrs:{"checked-rows":t.checkedRows},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"col:user",fn:function(e){var a=e.user,s=e.login,r=e.route,o=e.suspended;return["user/password"===r?[n("ui-icon",{directives:[{name:"margin",rawName:"v-margin:right",value:"4px",expression:"'4px'",arg:"right"}],attrs:{id:"pencil",size:"small"}}),t._v(" "),t.$_cmd("CMD_PASSWD")?n("ui-link",{attrs:{name:r}},[t._v("\n                        "+t._s(s)+"\n                    ")]):n("span",{domProps:{textContent:t._s(s)}})]:n("ui-link",{attrs:{name:r,params:{user:a}}},[n("ui-icon",{directives:[{name:"margin",rawName:"v-margin:right",value:"4px",expression:"'4px'",arg:"right"}],attrs:{id:"pencil",size:"small"}}),t._v("\n                    "+t._s(s)+"\n                ")],1),t._v(" "),o?n("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[n("translate",[t._v("Suspended")])],1):t._e()]}}])},"ui-r-table",{rows:t.rows,columns:[{id:"user",label:this.$gettext("Account"),editable:!1},{id:"path",label:this.$gettext("Server Path"),grow:!0}],isSortable:!0,notCheckable:[t.currentUser],disablePagination:!0,rowsCount:t.rows.length,verticalLayout:t.$_Client.isPhone},!1),["standard2021"!==t.$_layout?n("ui-stats-summary",{attrs:{slot:"buttons:before",badges:[{label:t.$gettext("FTP accounts"),value:t.rows.length}]},slot:"buttons:before"}):t._e(),t._v(" "),n("template",{slot:"table:actions"},[n("ui-table-action",{attrs:{disabled:!t.suspendActionAvailable},on:{click:t.suspendAccounts}},[n("translate",[t._v("Suspend")])],1),t._v(" "),n("ui-table-action",{attrs:{disabled:!t.unsuspendActionAvailable},on:{click:t.unsuspendAccounts}},[n("translate",[t._v("Unsuspend")])],1),t._v(" "),n("ui-table-action",{on:{click:function(e){t.$dialog("DELETE_ITEMS_DIALOG").open()}}},[n("translate",[t._v("Delete")])],1)],1)],2)],1),t._v(" "),n("ui-dialog-delete-items",{attrs:{subject:t.$ngettext("account","accounts",t.checkedRows.length)},on:{"click:confirm":t.deleteAccounts}}),t._v(" "),n("change-ftp-password-dialog",{attrs:{username:t.currentUsername}})],2)},s=[]},4168:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"CHANGE_FTP_PASSWORD_DIALOG"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        Change Password\n    ")]),t._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Username\n            ")]),t._v(" "),n("input-text",{attrs:{slot:"content",value:t.fullUsername,disabled:""},slot:"content"})],1),t._v(" "),n("ui-form-element",{attrs:{vertical:"",group:"changePassword",validators:{required:!0,api:t.$commands.validatePassword}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                New Password\n            ")]),t._v(" "),n("input-password",{attrs:{slot:"content","show-generator":""},slot:"content",model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:t.changePassword},slot:"buttons"},[n("translate",[t._v("Save")])],1)],2)},s=[]}}]);