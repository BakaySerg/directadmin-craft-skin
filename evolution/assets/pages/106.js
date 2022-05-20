(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1760:function(t,e,o){"use strict";o.r(e);var n=o(3959),s=o(2267);for(var r in s)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return s[t]}))}(r);o(3360);var a=o(0),l=o(3362),p=o.n(l),i=Object(a.a)(s.default,n.a,n.b,!1,null,"7f2270f0",null);"function"==typeof p.a&&p()(i),e.default=i.exports},1924:function(t,e,o){"use strict";o(7),o(10),o(6),o(8),o(11);var n=o(1);Object.defineProperty(e,"__esModule",{value:!0}),e.updateCron=e.getCron=e.restoreBackup=e.getRestoreFiles=e.scheduleBackup=e.getRestoreOptions=e.getScheduleOptions=e.getSettings=e.updateSettings=e.deleteCrons=e.duplicateCrons=e.getEncryptionStatus=e.hasResellerCrons=e.getCrons=void 0;var s=n(o(2));o(86),o(21),o(40),o(50),o(57),o(27),o(5);var r=n(o(78));function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){(0,s.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var p="/CMD_USER_BACKUP",i=r.default.get({id:"USER_BACKUPS",url:p,after:function(t){return t.flow((function(t){return{rows:t.crons,location:t.files_location}}),t.processTableInfo("rows"),t.mapProps({rows:t.flow(t.toArray,t.mapArrayProps({where:t.flow(t.moveProp("encryption_password","encrypted"),t.mapProps({encrypted:t.flow(t.setDefault("0"),t.isEqual("1")),path:function(t){return t.replace("<span class='green_lock'>&#128274;</span>","").trim()}}))}))}))}});e.getCrons=i;var u=r.default.get({id:"HAS_USER_BACKUPS",url:p,response:!1,mapResponse:function(t){return 0!==t.crons.length}});e.hasResellerCrons=u;var c=r.default.get({id:"BACKUP_ENCRYPTION_STATUS",url:p,after:function(t){return t.flow(t.project({enabled:"settings.allow_backup_encryption",password:"settings.encryption_password"}),t.mapProp("enabled",t.convert.toAppBoolean))}});e.getEncryptionStatus=c;var f=r.default.select({url:p,params:{duplicate:!0}});e.duplicateCrons=f;var d=r.default.select({url:p,params:{delete:!0}});e.deleteCrons=d;var _=r.default.post({url:p,params:{action:"setting"},schema:{message:r.default.REQUIRED_BOOL,local_ns:r.default.REQUIRED_BOOL,restore_spf:r.default.REQUIRED_BOOL}});e.updateSettings=_;var h=r.default.get({id:"USER_BACKUP_SETTINGS",url:p,after:function(t){return t.flow(t.project({local_ns:"settings.local_ns",message:"settings.message",restore_spf:"settings.restore_spf"}),t.mapValues(t.convert.toAppBoolean))}});e.getSettings=h;var v=r.default.get({id:"USER_BACKUP_SCHEDULE_OPTIONS",url:p,after:function(t){return t.flow(t.project({settings:"settings","settings.append":"append_to_path",where:"where",users:"users",location:"files_location"}),t.mapProps({users:t.flow(t.deleteProp("info"),t.toArray,t.mapArray(t.getProp("user"))),settings:t.flow(t.project({ip:"ftp_ip",password:"ftp_password",path:"ftp_path",port:"ftp_port",secure:"ftp_secure",username:"ftp_username",append:"append"}),t.mapProps({secure:t.convert.toAppBoolean,append:function(t){var e=Object.values(t),o=e.find((function(t){return t.selected})),n=e.reduce((function(t,e){return l(l({},t),{},(0,s.default)({},e.value,e.text))}),{});return{value:o.value,options:n}}}))}))}});e.getScheduleOptions=v;var m=r.default.get({id:"USER_BACKUP_RESTORE_OPTIONS",url:p,after:function(t){return t.flow(t.project({settings:"settings",where:"where",location:"files_location",ips:"ip_list",files:"files"}),t.mapProps({files:t.flow(t.deleteProp("info"),t.toArray),settings:t.flow(t.getProps(["ftp_ip","ftp_password","ftp_path","ftp_port","ftp_secure","ftp_username"]),t.mapProps({ftp_secure:t.convert.toAppBoolean})),ips:function(t){var e=Object.values(t),o=e.find((function(t){return t.selected})),n=e.reduce((function(t,e){return l(l({},t),{},(0,s.default)({},e.value,e.text))}),{});return{value:o.value,options:n}}}))}});e.getRestoreOptions=m;var w=r.default.post({url:p,params:{action:"create",form_version:"3"},schema:{who:r.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:r.default.OPTIONAL_BOOL,when:r.default.REQUIRED_STRING,minute:r.default.OPTIONAL_STRING,hour:r.default.OPTIONAL_STRING,dayofmonth:r.default.OPTIONAL_STRING,month:r.default.OPTIONAL_STRING,dayofweek:r.default.OPTIONAL_STRING,where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,append_to_path:r.default.OPTIONAL_STRING,custom_append:r.default.OPTIONAL_STRING,encryption_password:r.default.OPTIONAL_STRING}});e.scheduleBackup=w;var O=r.default.get({url:p,id:"USER_BACKUP_RESTORE_FILES",params:{action:"update_files"},schema:{where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING},after:function(t){return t.flow(t.getProp("files"),t.deleteProp("info"),t.toArray)}});e.getRestoreFiles=O;var I=r.default.post({url:p,params:{action:"restore"},schema:{where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,ip_choice:r.default.REQUIRED_STRING,ip:r.default.OPTIONAL_STRING,select:{type:Array,required:!0},encryption_password:r.default.OPTIONAL_STRING}});e.restoreBackup=I;var P=r.default.post({url:"/CMD_USER_BACKUP_MODIFY",id:"USER_BACKUP_CRON",schema:{id:r.default.REQUIRED_STRING},notifySuccess:!1,notifyError:!0,after:function(t){return t.flow(t.moveProp({append_to_path:"append","settings.where":"where"}),t.mapProps({settings:t.mapProp("ftp_secure",t.convert.toAppBoolean),who:t.mapProps({skip_suspended:t.convert.toAppBoolean,users:t.flow(t.deleteProp("info"),t.toArray,t.mapArray(t.getProp("user"))),select:t.feedWith(1,t.flow(t.getProp("users"),t.deleteProp("info"),t.filter(t.flow(t.getProp("checkbox"),t.isEqual("checked"))),t.mapValues(t.getProp("user")),t.toArray))}),append:t.flow(t.mapProps({options:t.feedWith(1,t.transformObject((function(t){var e=t.value,o=t.text;return(0,s.default)({},e,o)}))),value:t.feedWith(1,t.flow(t.find(t.getProp("selected")),t.getProp("value")))}),t.getProps(["value","options"])),custom_append:t.feedWith(1,t.getProp("append.custom_append"))}))}});e.getCron=P;var R=r.default.post({url:p,params:{action:"modify",when:"cron",form_version:"3"},schema:{id:r.default.REQUIRED_STRING,who:r.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:r.default.OPTIONAL_BOOL,minute:r.default.REQUIRED_STRING,hour:r.default.REQUIRED_STRING,dayofmonth:r.default.REQUIRED_STRING,month:r.default.REQUIRED_STRING,dayofweek:r.default.REQUIRED_STRING,where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,append_to_path:r.default.REQUIRED_STRING,custom_append:r.default.OPTIONAL_STRING}});e.updateCron=R},2267:function(t,e,o){"use strict";o.r(e);var n=o(2268),s=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=s.a},2268:function(t,e,o){"use strict";o(7),o(10),o(5),o(6),o(8),o(11);var n=o(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(o(2));o(49);var r=o(1924),a=o(58);function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){(0,s.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var i={preload:[r.getCron,r.getEncryptionStatus],api:[{command:r.getCron,bind:"cron"},{command:r.getEncryptionStatus,bind:{"response.enabled":"encryption",response:"encryptionStatus"}}],mixins:[(0,a.$bindTab)({defaultTab:"who",param:"step"})],props:{id:{type:String,required:!0}},data:function(){return{who:"all",where:"local",whoData:{select:[],skip_suspended:!1},cron:{minute:"",hour:"",dayofmonth:"",month:"",dayofweek:""},ftp:{ftp_ip:"",ftp_username:"",ftp_password:"",ftp_path:"",ftp_port:"",ftp_secure:!1},append_to_path:"nothing",custom_append:"",encrypt:!1,password:""}},computed:{validWho:function(){return"all"===this.who||!!this.whoData.select.length},validWhen:function(){return"now"===this.when||!!this.cron.minute&&!!this.cron.hour&&!!this.cron.dayofmonth&&!!this.cron.month&&!!this.cron.dayofweek},validWhere:function(){return"local"===this.where||!!this.ftp.ftp_ip&&!!this.ftp.ftp_username&&!!this.ftp.ftp_password&&!!this.ftp.ftp_path&&!!this.ftp.ftp_port}},created:function(){this.who=this.$api.cron.who.who,this.whoData.select=this.$api.cron.who.select,this.whoData.skip_suspended=this.$api.cron.who.skip_suspended,Object.assign(this.cron,this.$api.cron.when),this.where=this.$api.cron.where,Object.assign(this.ftp,this.$api.cron.settings),this.append_to_path=this.$api.cron.append.value,this.custom_append=this.$api.cron.custom_append||"",this.encrypt=!!this.$api.encryptionStatus.password,this.password=this.$api.encryptionStatus.password},methods:{submit:function(){(0,r.updateCron)(p(p(p({id:this.id,who:this.who,select:this.whoData.select,skip_suspended:this.whoData.skip_suspended,when:"cron"},this.cron),{},{where:this.where},this.ftp),{},{ftp_secure:this.ftp.ftp_secure?"ftps":"no",append_to_path:this.append_to_path,custom_append:this.custom_append,encryption_password:this.encrypt?this.password:""}))}}};e.default=i},3060:function(t,e,o){var n=o(3361);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(4).default)("012aba3a",n,!0,{})},3360:function(t,e,o){"use strict";o(3060)},3361:function(t,e,o){},3362:function(t,e){},3959:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-page",{attrs:{id:"modify-reseller-backup"}},[o("app-page-section",[o("ui-steps",{attrs:{steps:[{id:"who",label:t.$gettext("Step 1: Who"),desc:t.$gettext("Select users you would like to backup."),completed:t.validWho},{id:"when",label:t.$gettext("Step 2: When"),desc:t.$gettext("Select time period for backup."),completed:t.validWhen},{id:"where",label:t.$gettext("Step 3: Where"),desc:t.$gettext("Select directory for backups."),completed:t.validWhere}],current:t.step,disabled:!t.$valid("modifyBackup")},on:{"update:current":function(e){t.step=e}}},[o("div",{key:"who",attrs:{slot:"step:who"},slot:"step:who"},[o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        All Users\n                    ")]),t._v(" "),o("input-radio",{attrs:{slot:"content",value:"all"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Selected Users\n                    ")]),t._v(" "),o("input-radio",{attrs:{slot:"content",value:"selected"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        All Users Except Selected\n                    ")]),t._v(" "),o("input-radio",{attrs:{slot:"content",value:"except"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),"all"!==t.who?o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Users\n                    ")]),t._v(" "),o("input-select-multiple",{attrs:{slot:"content",options:t.$api.cron.who.users},slot:"content",model:{value:t.whoData.select,callback:function(e){t.$set(t.whoData,"select",e)},expression:"whoData.select"}})],1):t._e(),t._v(" "),o("ui-form-element",{attrs:{underline:!1,"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Skip Suspended\n                    ")]),t._v(" "),o("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.whoData.skip_suspended,callback:function(e){t.$set(t.whoData,"skip_suspended",e)},expression:"whoData.skip_suspended"}})],1)],1),t._v(" "),o("div",{key:"when",attrs:{slot:"step:when"},slot:"step:when"},[o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Minute\n                    ")]),t._v(" "),o("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("0–59")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.cron.minute,callback:function(e){t.$set(t.cron,"minute",e)},expression:"cron.minute"}})],1),t._v(" "),o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Hour\n                    ")]),t._v(" "),o("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("0–23")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.cron.hour,callback:function(e){t.$set(t.cron,"hour",e)},expression:"cron.hour"}})],1),t._v(" "),o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Day of Month\n                    ")]),t._v(" "),o("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("1–31")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.cron.dayofmonth,callback:function(e){t.$set(t.cron,"dayofmonth",e)},expression:"cron.dayofmonth"}})],1),t._v(" "),o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0}}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Month\n                    ")]),t._v(" "),o("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("1–12")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.cron.month,callback:function(e){t.$set(t.cron,"month",e)},expression:"cron.month"}})],1),t._v(" "),o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0},underline:!1}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Day of Week\n                    ")]),t._v(" "),o("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                        0–7; 0,7 = Sunday\n                    ")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.cron.dayofweek,callback:function(e){t.$set(t.cron,"dayofweek",e)},expression:"cron.dayofweek"}})],1)],1),t._v(" "),o("div",{key:"where",attrs:{slot:"step:where"},slot:"step:where"},[o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title","translate-params":t.$api.cron.settings},slot:"title"},[t._v("\n                        Local: %{ local_path }\n                    ")]),t._v(" "),o("input-radio",{attrs:{slot:"content",value:"local"},slot:"content",model:{value:t.where,callback:function(e){t.where=e},expression:"where"}})],1),t._v(" "),o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        FTP\n                    ")]),t._v(" "),o("input-radio",{attrs:{slot:"content",value:"ftp"},slot:"content",model:{value:t.where,callback:function(e){t.where=e},expression:"where"}})],1),t._v(" "),"ftp"===t.where?o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        FTP Settings\n                    ")]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                IP\n                            ")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_ip,callback:function(e){t.$set(t.ftp,"ftp_ip",e)},expression:"ftp.ftp_ip"}})],1),t._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Username\n                            ")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_username,callback:function(e){t.$set(t.ftp,"ftp_username",e)},expression:"ftp.ftp_username"}})],1),t._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Password\n                            ")]),t._v(" "),o("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_password,callback:function(e){t.$set(t.ftp,"ftp_password",e)},expression:"ftp.ftp_password"}})],1),t._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Remote Path\n                            ")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_path,callback:function(e){t.$set(t.ftp,"ftp_path",e)},expression:"ftp.ftp_path"}})],1),t._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Port\n                            ")]),t._v(" "),o("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_port,callback:function(e){t.$set(t.ftp,"ftp_port",e)},expression:"ftp.ftp_port"}})],1),t._v(" "),o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Secure FTP\n                            ")]),t._v(" "),o("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.ftp.ftp_secure,callback:function(e){t.$set(t.ftp,"ftp_secure",e)},expression:"ftp.ftp_secure"}})],1)],1)],1):t._e(),t._v(" "),o("ui-form-element",{attrs:{underline:t.$api.encryption||"custom"===t.append_to_path}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Append\n                    ")]),t._v(" "),o("input-select",{attrs:{slot:"content",options:t.$api.cron.append.options},slot:"content",model:{value:t.append_to_path,callback:function(e){t.append_to_path=e},expression:"append_to_path"}})],1),t._v(" "),"custom"===t.append_to_path?o("ui-form-element",{attrs:{"help-i-d":"539",underline:t.$api.encryption}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Custom Path\n                    ")]),t._v(" "),o("input-text",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{slot:"content",prefix:"/"},slot:"content",model:{value:t.custom_append,callback:function(e){t.custom_append=e},expression:"custom_append"}})],1):t._e(),t._v(" "),t.$api.encryption?[o("ui-form-element",{attrs:{underline:t.encrypt,"vertical-on-phone":!1,reverse:t.$_Client.isPhone}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                            Backup Encryption\n                        ")]),t._v(" "),o("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.encrypt,callback:function(e){t.encrypt=e},expression:"encrypt"}})],1),t._v(" "),o("transition",{attrs:{name:"fadeBounce"}},[t.encrypt?o("ui-form-element",{attrs:{group:"modifyBackup",validators:{required:!0},underline:!1}},[o("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                                Password\n                            ")]),t._v(" "),o("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e()],1)]:t._e()],2),t._v(" "),o("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:!(t.validWho&&t.validWhen&&t.validWhere)},on:{click:t.submit},slot:"buttons"},[o("translate",[t._v("Save")])],1)],1)],1)],1)},s=[]}}]);