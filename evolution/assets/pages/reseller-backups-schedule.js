(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[3078],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var n=o(s("./node_modules/@babel/runtime/regenerator/index.js")),r=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./src/js/api/commands/reseller/backup.js"),u=s("./src/js/vue/mixins.js");function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,l.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d,c={preload:[a.getScheduleOptions,a.getEncryptionStatus],api:[{command:a.getScheduleOptions,bind:"options"},{command:a.getEncryptionStatus,bind:"encryption"}],mixins:[(0,u.$bindTab)({defaultTab:"who",param:"step"})],data:function(){return{who:"all",when:"now",where:"local",whoData:{select:[],skip_suspended:!1},cron:{minute:"0",hour:"5",dayofmonth:"*",month:"*",dayofweek:"*"},ftp:{ip:"",username:"",password:"",path:"",port:"",secure:!1},append_to_path:"nothing",custom_append:"",encrypt:!1,password:""}},computed:{validWho:function(){return"all"===this.who||this.whoData.select.length},validWhen:function(){return"now"===this.when||!!this.cron.minute&&!!this.cron.hour&&!!this.cron.dayofmonth&&!!this.cron.month&&!!this.cron.dayofweek},validWhere:function(){return"local"===this.where||!!this.ftp.ip&&!!this.ftp.username&&!!this.ftp.password&&!!this.ftp.path&&!!this.ftp.port},options:function(){return this.$api.options},encryptionEnabled:function(){return this.$api.encryption.enabled},requestData:function(){var e=this.$get(["who","when","where"]),t="all"===this.who?{}:this.whoData,s="now"===this.when?{}:this.cron,o="local"===this.where?{}:{ftp_ip:this.ftp.ip,ftp_username:this.ftp.username,ftp_password:this.ftp.password,ftp_path:this.ftp.path,ftp_port:this.ftp.port,ftp_secure:this.ftp.secure?"ftps":"no"};return p(p(p(p(p(p({},e),t),s),o),this.$get(["append_to_path","custom_append"])),{},{encryption_password:this.password})}},created:function(){this.ftp.ip=this.options.settings.ip,this.ftp.username=this.options.settings.username,this.ftp.password=this.options.settings.password,this.ftp.path=this.options.settings.path,this.ftp.port=this.options.settings.port,this.ftp.secure=this.options.settings.secure,this.append_to_path=this.options.settings.append.value},methods:{submit:(d=(0,r.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.scheduleBackup)(this.requestData);case 2:200==e.sent.status&&this.$router.push({name:"reseller/backups"});case 4:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})}};t.Z=c},"./src/js/api/commands/reseller/backup.js":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.updateSettings=t.updateCron=t.scheduleBackup=t.restoreBackup=t.hasResellerCrons=t.getSettings=t.getScheduleOptions=t.getRestoreOptions=t.getRestoreFiles=t.getEncryptionStatus=t.getCrons=t.getCron=t.duplicateCrons=t.deleteCrons=void 0;var n=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js"));s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.promise.js"),s("./node_modules/core-js/modules/es.string.trim.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.object.values.js"),s("./node_modules/core-js/modules/es.array.find.js"),s("./node_modules/core-js/modules/es.array.reduce.js"),s("./node_modules/core-js/modules/es.array.filter.js");var r=o(s("./src/js/api/command/index.js"));function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,n.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u="/CMD_USER_BACKUP",i=r.default.get({id:"USER_BACKUPS",url:u,after:function(e){return e.flow((function(e){return{rows:e.crons,location:e.files_location}}),e.processTableInfo("rows"),e.mapProps({rows:e.flow(e.toArray,e.mapArrayProps({where:e.flow(e.moveProp("encryption_password","encrypted"),e.mapProps({encrypted:e.flow(e.setDefault("0"),e.isEqual("1")),path:function(e){return e.replace("<span class='green_lock'>&#128274;</span>","").trim()}}))}))}))}});t.getCrons=i;var p=r.default.get({id:"HAS_USER_BACKUPS",url:u,response:!1,mapResponse:function(e){return 0!==e.crons.length}});t.hasResellerCrons=p;var d=r.default.get({id:"BACKUP_ENCRYPTION_STATUS",url:u,after:function(e){return e.flow(e.project({enabled:"settings.allow_backup_encryption",password:"settings.encryption_password"}),e.mapProp("enabled",e.convert.toAppBoolean))}});t.getEncryptionStatus=d;var c=r.default.select({url:u,params:{duplicate:!0}});t.duplicateCrons=c;var f=r.default.select({url:u,params:{delete:!0}});t.deleteCrons=f;var _=r.default.post({url:u,params:{action:"setting"},schema:{message:r.default.REQUIRED_BOOL,local_ns:r.default.REQUIRED_BOOL,restore_spf:r.default.REQUIRED_BOOL}});t.updateSettings=_;var m=r.default.get({id:"USER_BACKUP_SETTINGS",url:u,after:function(e){return e.flow(e.project({local_ns:"settings.local_ns",message:"settings.message",restore_spf:"settings.restore_spf"}),e.mapValues(e.convert.toAppBoolean))}});t.getSettings=m;var h=r.default.get({id:"USER_BACKUP_SCHEDULE_OPTIONS",url:u,after:function(e){return e.flow(e.project({settings:"settings","settings.append":"append_to_path",where:"where",users:"users",location:"files_location"}),e.mapProps({users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("user"))),settings:e.flow(e.project({ip:"ftp_ip",password:"ftp_password",path:"ftp_path",port:"ftp_port",secure:"ftp_secure",username:"ftp_username",append:"append"}),e.mapProps({secure:e.convert.toAppBoolean,append:function(e){var t=Object.values(e),s=t.find((function(e){return e.selected})),o=t.reduce((function(e,t){return a(a({},e),{},(0,n.default)({},t.value,t.text))}),{});return{value:s.value,options:o}}}))}))}});t.getScheduleOptions=h;var v=r.default.get({id:"USER_BACKUP_RESTORE_OPTIONS",url:u,after:function(e){return e.flow(e.project({settings:"settings",where:"where",location:"files_location",ips:"ip_list",files:"files"}),e.mapProps({files:e.flow(e.deleteProp("info"),e.toArray),settings:e.flow(e.getProps(["ftp_ip","ftp_password","ftp_path","ftp_port","ftp_secure","ftp_username"]),e.mapProps({ftp_secure:e.convert.toAppBoolean})),ips:function(e){var t=Object.values(e),s=t.find((function(e){return e.selected})),o=t.reduce((function(e,t){return a(a({},e),{},(0,n.default)({},t.value,t.text))}),{});return{value:s.value,options:o}}}))}});t.getRestoreOptions=v;var w=r.default.post({url:u,params:{action:"create",form_version:"3"},schema:{who:r.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:r.default.OPTIONAL_BOOL,when:r.default.REQUIRED_STRING,minute:r.default.OPTIONAL_STRING,hour:r.default.OPTIONAL_STRING,dayofmonth:r.default.OPTIONAL_STRING,month:r.default.OPTIONAL_STRING,dayofweek:r.default.OPTIONAL_STRING,where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,append_to_path:r.default.OPTIONAL_STRING,custom_append:r.default.OPTIONAL_STRING,encryption_password:r.default.OPTIONAL_STRING}});t.scheduleBackup=w;var j=r.default.get({url:u,id:"USER_BACKUP_RESTORE_FILES",params:{action:"update_files"},schema:{where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING},after:function(e){return e.flow(e.getProp("files"),e.deleteProp("info"),e.toArray)}});t.getRestoreFiles=j;var b=r.default.post({url:u,params:{action:"restore"},schema:{where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,ip_choice:r.default.REQUIRED_STRING,ip:r.default.OPTIONAL_STRING,select:{type:Array,required:!0},encryption_password:r.default.OPTIONAL_STRING}});t.restoreBackup=b;var g=r.default.post({url:"/CMD_USER_BACKUP_MODIFY",id:"USER_BACKUP_CRON",schema:{id:r.default.REQUIRED_STRING},notifySuccess:!1,notifyError:!0,after:function(e){return e.flow(e.moveProp({append_to_path:"append","settings.where":"where"}),e.mapProps({settings:e.mapProp("ftp_secure",e.convert.toAppBoolean),who:e.mapProps({skip_suspended:e.convert.toAppBoolean,users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("user"))),select:e.feedWith(1,e.flow(e.getProp("users"),e.deleteProp("info"),e.filter(e.flow(e.getProp("checkbox"),e.isEqual("checked"))),e.mapValues(e.getProp("user")),e.toArray))}),append:e.flow(e.mapProps({options:e.feedWith(1,e.transformObject((function(e){var t=e.value,s=e.text;return(0,n.default)({},t,s)}))),value:e.feedWith(1,e.flow(e.find(e.getProp("selected")),e.getProp("value")))}),e.getProps(["value","options"])),custom_append:e.feedWith(1,e.getProp("append.custom_append"))}))}});t.getCron=g;var O=r.default.post({url:u,params:{action:"modify",when:"cron",form_version:"3"},schema:{id:r.default.REQUIRED_STRING,who:r.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:r.default.OPTIONAL_BOOL,minute:r.default.REQUIRED_STRING,hour:r.default.REQUIRED_STRING,dayofmonth:r.default.REQUIRED_STRING,month:r.default.REQUIRED_STRING,dayofweek:r.default.REQUIRED_STRING,where:r.default.REQUIRED_STRING,ftp_ip:r.default.OPTIONAL_STRING,ftp_username:r.default.OPTIONAL_STRING,ftp_password:r.default.OPTIONAL_STRING,ftp_path:r.default.OPTIONAL_STRING,ftp_port:r.default.OPTIONAL_STRING,ftp_secure:r.default.OPTIONAL_STRING,append_to_path:r.default.REQUIRED_STRING,custom_append:r.default.OPTIONAL_STRING}});t.updateCron=O},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/pages/reseller/backups/schedule.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=script&lang=js&"),n=o.Z,r=(s("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=s("./src/js/pages/reseller/backups/schedule.vue?vue&type=custom&index=0&blockType=route"),a=s.n(l),u=(0,r.Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{id:"schedule-reseller-backup"}},[s("app-page-section",[s("ui-steps",{attrs:{steps:[{id:"who",label:e.$gettext("Step 1: Who"),desc:e.$gettext("Select users you would like to backup."),completed:e.validWho},{id:"when",label:e.$gettext("Step 2: When"),desc:e.$gettext("Select time period for backup."),completed:e.validWhen},{id:"where",label:e.$gettext("Step 3: Where"),desc:e.$gettext("Select directory for backups."),completed:e.validWhere}],current:e.step},on:{"update:current":function(t){e.step=t}}},[s("div",{key:"who",attrs:{slot:"step:who"},slot:"step:who"},[s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        All Users\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"all"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Selected Users\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",type:"radio",value:"selected"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        All Users Except Selected\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"except"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),"all"!==e.who?s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Users\n                    ")]),e._v(" "),s("input-select-multiple",{attrs:{slot:"content",options:e.options.users},slot:"content",model:{value:e.whoData.select,callback:function(t){e.$set(e.whoData,"select",t)},expression:"whoData.select"}})],1):e._e(),e._v(" "),s("ui-form-element",{attrs:{underline:!1,reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Skip Suspended\n                    ")]),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.whoData.skip_suspended,callback:function(t){e.$set(e.whoData,"skip_suspended",t)},expression:"whoData.skip_suspended"}})],1)],1),e._v(" "),s("div",{key:"when",attrs:{slot:"step:when"},slot:"step:when"},[s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Now\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"now"},slot:"content",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}})],1),e._v(" "),s("ui-form-element",{attrs:{underline:"cron"===e.when,reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        On Schedule\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"cron"},slot:"content",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}})],1),e._v(" "),"cron"===e.when?s("ui-form-element",{key:"cron-settings",staticClass:"cron-settings",attrs:{underline:!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Cron Settings\n                    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Minute\n                            ")]),e._v(" "),s("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("0–59")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.cron.minute,callback:function(t){e.$set(e.cron,"minute",t)},expression:"cron.minute"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Hour\n                            ")]),e._v(" "),s("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("0–23")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.cron.hour,callback:function(t){e.$set(e.cron,"hour",t)},expression:"cron.hour"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Day of Month\n                            ")]),e._v(" "),s("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("1–31")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.cron.dayofmonth,callback:function(t){e.$set(e.cron,"dayofmonth",t)},expression:"cron.dayofmonth"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[s("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("1–12")]),e._v(" "),s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Month\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.cron.month,callback:function(t){e.$set(e.cron,"month",t)},expression:"cron.month"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Day of Week\n                            ")]),e._v(" "),s("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                0–7; 0, 7 = Sunday\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.cron.dayofweek,callback:function(t){e.$set(e.cron,"dayofweek",t)},expression:"cron.dayofweek"}})],1)],1)],1):e._e()],1),e._v(" "),s("div",{key:"where",attrs:{slot:"step:where"},slot:"step:where"},[s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title","translate-params":e.options},slot:"title"},[e._v("\n                        Local: %{ location }\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"local"},slot:"content",model:{value:e.where,callback:function(t){e.where=t},expression:"where"}})],1),e._v(" "),s("ui-form-element",{attrs:{reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        FTP\n                    ")]),e._v(" "),s("input-radio",{attrs:{slot:"content",value:"ftp"},slot:"content",model:{value:e.where,callback:function(t){e.where=t},expression:"where"}})],1),e._v(" "),"ftp"===e.where?s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        FTP Settings\n                    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                IP\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ftp.ip,callback:function(t){e.$set(e.ftp,"ip",t)},expression:"ftp.ip"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Username\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ftp.username,callback:function(t){e.$set(e.ftp,"username",t)},expression:"ftp.username"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Password\n                            ")]),e._v(" "),s("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.ftp.password,callback:function(t){e.$set(e.ftp,"password",t)},expression:"ftp.password"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Remote Path\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ftp.path,callback:function(t){e.$set(e.ftp,"path",t)},expression:"ftp.path"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Port\n                            ")]),e._v(" "),s("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.ftp.port,callback:function(t){e.$set(e.ftp,"port",t)},expression:"ftp.port"}})],1),e._v(" "),s("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Secure FTP\n                            ")]),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.ftp.secure,callback:function(t){e.$set(e.ftp,"secure",t)},expression:"ftp.secure"}})],1)],1)],1):e._e(),e._v(" "),s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Append\n                    ")]),e._v(" "),s("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"content"},slot:"content"},[s("input-select",{attrs:{options:e.options.settings.append.options},model:{value:e.append_to_path,callback:function(t){e.append_to_path=t},expression:"append_to_path"}})],1)],1),e._v(" "),"custom"===e.append_to_path?s("ui-form-element",{attrs:{"help-i-d":"539"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Custom Path\n                    ")]),e._v(" "),s("input-text",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{slot:"content",prefix:"/"},slot:"content",model:{value:e.custom_append,callback:function(t){e.custom_append=t},expression:"custom_append"}})],1):e._e(),e._v(" "),e.encryptionEnabled?[s("ui-form-element",{attrs:{underline:e.encrypt,reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Backup Encryption\n                        ")]),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.encrypt,callback:function(t){e.encrypt=t},expression:"encrypt"}})],1),e._v(" "),s("transition",{attrs:{name:"fadeBounce"}},[e.encrypt?s("ui-form-element",{attrs:{underline:!1}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Password\n                            ")]),e._v(" "),s("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e()],1)]:e._e()],2),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:!(e.validWho&&e.validWhen&&e.validWhere)},on:{click:e.submit},slot:"buttons"},[s("translate",[e._v("Schedule")])],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof a()&&a()(u);var i=u.exports},"./src/js/pages/reseller/backups/schedule.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/reseller/backups/schedule.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("10b6412e",o,!0,{})}}]);