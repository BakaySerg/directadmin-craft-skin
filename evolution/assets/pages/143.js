(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1749:function(e,t,n){"use strict";n.r(t);var s=n(3950),a=n(2219);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o=n(0),i=n(3324),u=n.n(i),l=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);"function"==typeof u.a&&u()(l),t.default=l.exports},1938:function(e,t,n){"use strict";var s=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getUsersCountPerReseller=t.saveComments=t.createAdmin=t.deleteUsers=t.unsuspendUsers=t.suspendUsers=void 0;var a=s(n(78)),r=a.default.post({url:"/CMD_SELECT_USERS",notifySuccess:!0,notifyError:!0,params:{location:"CMD_ALL_USER_SHOW"},schema:{select:a.default.ROWS},blocking:!0}),o=r.extend({params:{dosuspend:!0},schema:{reason:a.default.REQUIRED_STRING},blocking:!0});t.suspendUsers=o;var i=r.extend({params:{dounsuspend:!0},blocking:!0});t.unsuspendUsers=i;var u=r.extend({params:{delete:!0,confirmed:!0},schema:{leave_dns:a.default.OPTIONAL_BOOL},blocking:!0});t.deleteUsers=u;var l=a.default.post({url:"/CMD_ACCOUNT_ADMIN",params:{action:"create"},schema:{username:a.default.REQUIRED_STRING,email:a.default.REQUIRED_STRING,passwd:a.default.REQUIRED_STRING,passwd2:a.default.REQUIRED_STRING,notify:a.default.REQUIRED_BOOL}});t.createAdmin=l;var d=a.default.post({url:"/CMD_COMMENTS",params:{location:"CMD_SHOW_RESELLER"},schema:{user:a.default.REQUIRED_STRING,comments:a.default.REQUIRED_STRING}});t.saveComments=d;var c=a.default.post({url:"/CMD_MOVE_USERS",id:"USERS_COUNT_PER_RESELLER",response:{},after:function(e){return e.flow(e.getProp("data_list"),e.mapValues((function(e){return e.length})))}});t.getUsersCountPerReseller=c},2006:function(e,t,n){"use strict";n(7),n(10),n(6),n(8),n(11);var s=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getAdmins=t.getUsers=void 0,n(34),n(21),n(61),n(86),n(17),n(55),n(5),n(24);var a=s(n(2)),r=s(n(38)),o=s(n(78));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=o.default.get({id:"ALL_USERS",url:"/CMD_ALL_USER_SHOW",pagination:!0,params:{bytes:!0},after:function(e){return e.flow(e.wrap("users"),e.moveProp({"users.reasons":"options.reasons","users.add_leave_dns":"options.add_leave_dns","users.remote_server":"options.remote_servers","users.RESULT":"options.connectionError"}),e.mapProp("users",e.toTable(e.flow(e.mapArrayProps({username:e.getProp("value"),is_user:e.feedWith(1,e.flow(e.getProp("username.is_user"),e.convert.toAppBoolean)),suspended:e.flow(e.getProp("value"),e.convert.toAppBoolean),reason:e.feedWith(1,(function(e){return e.suspended.reason||"none"})),vdomains:e.toLimitedUsage(),bandwidth:e.toLimitedUsage(),quota:e.toLimitedUsage(),date_created:e.convert.toAppDate,mysql:function(t){if(t){var n=t.split("/").map((function(e){return e.trim()})),s=(0,r.default)(n,2),a=s[0],o=s[1];return e.toLimitedUsage()({limit:Number(o)||1/0,usage:a})}}}),e.mapArray((function(e){return u(u({},e),{},{test:"test"})}))))),e.mapProp("options",e.mapProps({add_leave_dns:e.convert.toAppBoolean,connectionError:function(t){return(t||"").split("<br>\\n").filter(e.notEmpty).join("<br>")},remote_servers:e.flow((function(e){return e||{}}),e.mapValues((function(t,n){var s=t.ssl,a=t.port,r=e.convert.toAppBoolean(s)?"https":"http";return"".concat(r,"://").concat(n,":").concat(a)}))),reasons:e.toSelect})))}});t.getUsers=l;var d=o.default.get({id:"ADMINS",url:"/CMD_ADMIN_SHOW",params:{bytes:!0},pagination:!0,after:function(e){return e.flow(e.wrap("admins"),e.moveProp({"admins.reasons":"reasons"}),e.mapProp("admins",e.toTable(e.mapArrayProps({nusers:e.convert.toAppNumber,suspended:e.flow(e.getProp("value"),e.isEqual("no:"),e.not),reason:e.feedWith(1,(function(e){return e.suspended.reason||"none"})),vdomains:e.toLimitedUsage(),bandwidth:e.toLimitedUsage(),quota:e.toLimitedUsage()}))),e.mapProp("reasons",e.toSelect))}});t.getAdmins=d},2219:function(e,t,n){"use strict";n.r(t);var s=n(2220),a=n.n(s);for(var r in s)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(r);t.default=a.a},2220:function(e,t,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var s=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(2));n(34),n(57);var r=n(2006),o=n(1938),i=s(n(2044)),u=s(n(2007)),l=s(n(1951));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={preload:r.getAdmins,commands:{getAdmins:r.getAdmins},components:{CreateMessageDialog:i.default,SuspendUserDialog:u.default,ChangePasswordDialog:l.default},api:r.getAdmins,data:function(){return{select:[],remove:[]}},computed:{reasons:function(){return u.default.$exports.reasons.call(this,this.$api.reasons.options)},selectedAdmins:function(){var e=this;return this.select.map((function(t){return e.$api.admins.rows.find((function(e){return e.username===t}))}))},count:function(){return this.$api.admins.rowsCount}},methods:{reloadTable:function(){this.$reset(),this.$reloadApiTable()},deleteAdmins:function(){(0,o.deleteUsers)({select:this.remove,location:"CMD_ADMIN_SHOW"}).then(this.reloadTable)},suspendAdmins:function(e){(0,o.suspendUsers)(c(c({select:this.select},e),{},{location:"CMD_ADMIN_SHOW"})).then(this.reloadTable)},unsuspendAdmins:function(){(0,o.unsuspendUsers)({select:this.select,location:"CMD_ADMIN_SHOW"}).then(this.reloadTable)},loginAs:function(e){this.$store.dispatch("app/LOGIN_AS",{user:e,path:this.$route.path,router:this.$router})},changePassword:function(e){this.$refs.cpd.show(e)},showDeleteDialog:function(){this.remove=this.select,this.$dialog("DELETE_ADMINS_DIALOG").open()}}};t.default=p},3324:function(e,t){},3950:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",{attrs:{actions:[{name:"admin/users/create-admin",label:e.$gettext("Create Administrator"),icon:"create-administrator"},{name:"admin/users/resellers/create",label:e.$gettext("Create Reseller"),icon:"create-reseller"},{name:"reseller/users/create",label:e.$gettext("Add New User"),icon:"add-new-user"}]}},[n("template",{slot:"header:buttons"},[n("ui-button-link",{attrs:{theme:"primary",name:"admin/users/create-admin"}},[n("translate",[e._v("Create Admin")])],1)],1),e._v(" "),n("template",{slot:"details"},[n("ui-infobar-item",{attrs:{title:e.$gettext("Stats")}},[n("ui-infobar-stats",{attrs:{usage:e.count,limit:1/0,title:e.$gettext("Admins Count")}})],1)],1),e._v(" "),n("app-page-section",[n("ui-api-table",e._b({on:{"action:message":function(t){e.$dialog("CREATE_MESSAGE_DIALOG").open()},"action:suspend":function(t){e.$dialog("SUSPEND_USER_DIALOG").open()},"action:unsuspend":e.unsuspendAdmins,"action:remove":e.showDeleteDialog},scopedSlots:e._u([{key:"col:username",fn:function(t){var s=t.username,a=t.reason,r=t.suspended;return[n("ui-link",{attrs:{name:"admin/users/resellers/view",params:{user:s}}},[e._v("\n                    "+e._s(s)+"\n                ")]),e._v(" "),r?n("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[n("translate",{attrs:{"translate-params":{reason:e.reasons[a]}}},[e._v("\n                        Suspended: %{ reason }\n                    ")])],1):e._e()]}},{key:"col:bandwidth",fn:function(t){var s=t.bandwidth;return n("ui-limited-usage",e._b({},"ui-limited-usage",s,!1))}},{key:"col:quota",fn:function(t){var s=t.quota;return n("ui-limited-usage",e._b({},"ui-limited-usage",s,!1))}},{key:"col:vdomains",fn:function(t){var s=t.vdomains;return n("ui-limited-usage",e._b({attrs:{plain:""}},"ui-limited-usage",s,!1))}},{key:"row:actions",fn:function(t){var s=t.username,a=t.suspended;return n("ui-actions",{},[n("ui-link",{on:{click:function(t){e.select=[s],e.$dialog("CREATE_MESSAGE_DIALOG").open()}}},[n("translate",[e._v("Send a Message")])],1),e._v(" "),a?e._e():n("ui-link",{on:{click:function(t){e.select=[s],e.$dialog("SUSPEND_USER_DIALOG").open()}}},[n("translate",[e._v("Suspend")])],1),e._v(" "),a?n("ui-link",{on:{click:function(t){e.select=[s],e.unsuspendAdmins()}}},[n("translate",[e._v("Unsuspend")])],1):e._e(),e._v(" "),n("ui-link",{on:{click:function(t){return e.loginAs(s)}}},[n("translate",{attrs:{"translate-params":{username:s}}},[e._v("\n                        Login as %{ username }\n                    ")])],1),e._v(" "),n("ui-link",{on:{click:function(t){return e.changePassword(s)}}},[n("translate",{attrs:{"translate-params":{username:s}}},[e._v("\n                        Change %{ username }'s password\n                    ")])],1),e._v(" "),n("ui-link",{on:{click:function(t){e.select=[s],e.showDeleteDialog()}}},[n("translate",[e._v("Remove")])],1)],1)}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getAdmins,property:"admins",rowID:"username",columns:{username:{label:e.$gettext("Username"),grow:!0,searchable:!0},bandwidth:{label:e.$gettext("Bandwidth"),getClass:function(e){return e.bandwidth.status?"--usage:"+e.bandwidth.status:""},width:"20%"},quota:{label:e.$gettext("Disk Usage"),getClass:function(e){return e.bandwidth.status?"--usage:"+e.quota.status:""},width:"20%"},nusers:e.$gettext("# of Users"),vdomains:e.$gettext("# of domains"),suspended:{label:e.$gettext("Suspended"),hide:!0,searchable:{type:"select",comparison:"contains",options:{"yes:":e.$gettext("Yes"),"no:":e.$gettext("No")}}}},actions:{message:e.$gettext("Send a Message"),suspend:e.$gettext("Suspend"),unsuspend:e.$gettext("Unsuspend"),remove:e.$gettext("Delete")},updateOn:["DELETE_USERS","SUSPEND_USERS","UNSUSPEND_USERS"],verticalLayout:e.$_Client.isPhone},!1))],1),e._v(" "),n("create-message-dialog",{attrs:{users:e.select}}),e._v(" "),n("ui-dialog",{attrs:{id:"DELETE_ADMINS_DIALOG",theme:"danger",size:"normal"}},[n("translate",{attrs:{slot:"title","translate-plural":"Delete Admins","translate-n":e.select.length},slot:"title"},[e._v("\n            Delete Admin\n        ")]),e._v(" "),n("template",{slot:"content"},[n("translate",[e._v("Please confirm your request")]),e._v(" "),n("input-select-multiple",{attrs:{options:e.select,"hide-header":""},model:{value:e.remove,callback:function(t){e.remove=t},expression:"remove"}},e._l(e.selectedAdmins,(function(t){return n("span",{key:t.username,attrs:{slot:"option:"+t.username},slot:"option:"+t.username},[Number(t.nusers)?[n("translate",{attrs:{"translate-params":t,"translate-n":Number(t.nusers),"translate-plural":"Admin: %{ username } and %{ nusers } users"}},[e._v("Admin: %{ username } and %{ nusers } user")]),e._v(" "),n("ui-tooltip",{attrs:{theme:"danger"}},[n("translate",[e._v("\n                                You are deleting admin that have users under\n                                control. If you proceed, these user\n                                accounts, along with ALL the associated\n                                website and email contents, which are not\n                                listed here, will also be removed.\n                            ")])],1)]:n("translate",{attrs:{"translate-params":t}},[e._v("Admin: %{ username }")])],2)})),0)],1),e._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger",disabled:0===e.remove.length},on:{click:e.deleteAdmins},slot:"buttons"},[n("translate",[e._v("Confirm")])],1)],2),e._v(" "),n("suspend-user-dialog",{attrs:{"api-reasons":e.$api.reasons.options},on:{suspend:e.suspendAdmins}}),e._v(" "),n("change-password-dialog",{ref:"cpd"})],2)},a=[]}}]);