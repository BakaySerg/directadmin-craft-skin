(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[2146],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=script&lang=js&":function(e,t,a){"use strict";a("./node_modules/core-js/modules/es.object.keys.js"),a("./node_modules/core-js/modules/es.symbol.js"),a("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),a("./node_modules/core-js/modules/web.dom-collections.for-each.js"),a("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),a("./node_modules/core-js/modules/es.object.define-properties.js"),a("./node_modules/core-js/modules/es.object.define-property.js"),a("./node_modules/core-js/modules/es.array.iterator.js"),a("./node_modules/core-js/modules/es.string.iterator.js"),a("./node_modules/core-js/modules/es.weak-map.js"),a("./node_modules/core-js/modules/web.dom-collections.iterator.js");var s=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=a("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var n=s(a("./node_modules/@babel/runtime/regenerator/index.js")),l=s(a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),r=s(a("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),i=s(a("./node_modules/@babel/runtime/helpers/defineProperty.js"));a("./node_modules/core-js/modules/es.object.to-string.js"),a("./node_modules/core-js/modules/es.object.values.js"),a("./node_modules/core-js/modules/es.array.concat.js"),a("./node_modules/core-js/modules/es.object.assign.js"),a("./node_modules/core-js/modules/es.array.includes.js"),a("./node_modules/core-js/modules/es.string.includes.js"),a("./node_modules/core-js/modules/es.array.filter.js");var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=n?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(s,l,r):s[l]=e[l]}s.default=e,a&&a.set(e,s);return s}(a("./node_modules/ramda/src/index.js")),c=a("./src/js/api/commands/admin/backups/index.js"),d=a("./src/js/vue/mixins.js");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m,_={preload:[c.getScheduleOptions,c.getEncryptionStatus],mixins:[(0,d.$bindTab)({defaultTab:"who",param:"step"})],data:function(){return{who:"selected",whoData:{select:[],skip_suspended:!1},when:"now",whenData:{minute:"0",hour:"5",dayofmonth:"*",month:"*",dayofweek:"*"},where:"local",whereData:{local_path:"",ftp_ip:"",ftp_username:"",ftp_password:"",ftp_path:"",ftp_port:"",ftp_secure:"",append_to_path:"custom",custom_append:""},what:"all",whatData:{option:["domain","subdomain","ftp","ftpsettings","database","database_data","forwarder","email","email_data","emailsettings","vacation","autoresponder","list","trash"]},checkedUsers:[],encrypt:!1,password:""}},api:[{command:c.getScheduleOptions,bind:"options"},{command:c.getEncryptionStatus,bind:"encryption"}],computed:{validWho:function(){return"all"===this.who||!!this.whoData.select.length},validWhen:function(){return"now"===this.when||Object.values(this.whenData).every((function(e){return!!e}))},validWhere:function(){return"local"===this.where&&!!this.whereData.local_path||"ftp"===this.where&&!!this.whereData.ftp_ip&&!!this.whereData.ftp_username&&!!this.whereData.ftp_password&&!!this.whereData.ftp_path&&!!this.whereData.ftp_port},validWhat:function(){return"all"===this.what||!!this.whatData.option.length},options:function(){return this.$api.options},encryptionEnabled:function(){return this.$api.encryption.enabled},requestData:function(){return v(v(v(v(v(v({},this.$get(["who","when","where","what"])),this.whoData),this.whenData),this.whereData),this.whatData),{},{ftp_secure:this.whereData.ftp_secure?"ftps":"no",encryption_password:this.password})},userGroups:function(){var e=this;return u.mapObjIndexed((function(t,a){return{label:e.$gettextInterpolate(e.$gettext("Reseller: %{ creator }"),{creator:a}),entries:[a].concat((0,r.default)(t))}}),this.options.whoData.users)}},created:function(){var e=this;Object.assign(this.whereData,this.options.whereData),this.$watch("whatData.option",(function(t,a){!t.includes("database_data")||a.includes("database_data")||t.includes("database")||(a.includes("database")?e.whatData.option=e.whatData.option.filter((function(e){return"database_data"!==e})):e.whatData.option.push("database")),!t.includes("database")||a.includes("database")||t.includes("database_data")||a.includes("database_data")||e.whatData.option.push("database_data"),!t.includes("email_data")||a.includes("database_data")||t.includes("email")||(a.includes("email")?e.whatData.option=e.whatData.option.filter((function(e){return"email_data"!==e})):e.whatData.option.push("email")),!t.includes("email")||a.includes("email")||t.includes("email_data")||a.includes("email_data")||e.whatData.option.push("email_data")}))},methods:{selectAllDataItems:function(){this.whatData.option=["domain","subdomain","ftp","ftpsettings","database","database_data","forwarder","email","email_data","emailsettings","vacation","autoresponder","list"]},scheduleBackup:(m=(0,l.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.scheduleBackup)(this.requestData);case 2:200==e.sent.status&&this.$router.push({name:"admin/backups"});case 4:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})}};t.Z=_},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=style&index=0&id=bd7d5bba&lang=scss&scoped=true&":function(){},"./src/js/pages/admin/backups/schedule.vue":function(e,t,a){"use strict";a.r(t),a.d(t,{__esModule:function(){return s.X},default:function(){return u}});var s=a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=script&lang=js&"),o=s.Z,n=(a("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=style&index=0&id=bd7d5bba&lang=scss&scoped=true&"),a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=a("./src/js/pages/admin/backups/schedule.vue?vue&type=custom&index=0&blockType=route"),r=a.n(l),i=(0,n.Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{id:"schedule-admin-backup"}},[a("app-page-section",[a("ui-steps",{attrs:{steps:[{id:"who",label:e.$gettext("Step 1: Who"),desc:e.$gettext("Select users you would like to backup."),completed:e.validWho},{id:"when",label:e.$gettext("Step 2: When"),desc:e.$gettext("Select time period for backup."),completed:e.validWhen},{id:"where",label:e.$gettext("Step 3: Where"),desc:e.$gettext("Select directory for backups."),completed:e.validWhere},{id:"what",label:e.$gettext("Step 4: What"),desc:e.$gettext("Select data you would like to backup."),completed:e.validWhat}],current:e.step},on:{"update:current":function(t){e.step=t}}},[a("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:!(e.validWho&&e.validWhere&&e.validWhat&&e.validWhen)},on:{click:e.scheduleBackup},slot:"buttons"},[a("translate",[e._v("Schedule")])],1),e._v(" "),"who"===e.step?a("div",{attrs:{slot:"step:who"},slot:"step:who"},[a("ui-form-element",{key:"whoAll",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        All Users\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"all"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),a("ui-form-element",{key:"whoAllExcept",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        All Users Except Selected\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"except"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),a("ui-form-element",{key:"whoSelected",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone,underline:"all"!==e.who}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Selected Users\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"selected"},slot:"content",model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),"all"!==e.who?[a("ui-form-element",{key:"whoUsers"},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Users\n                        ")]),e._v(" "),a("input-select-multiple",{staticClass:"width:100%",attrs:{slot:"content",options:e.userGroups},slot:"content",model:{value:e.whoData.select,callback:function(t){e.$set(e.whoData,"select",t)},expression:"whoData.select"}})],1),e._v(" "),a("ui-form-element",{key:"whoSkip",attrs:{underline:!1,reverse:e.$_Client.isPhone,"vertical-on-phone":!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Skip Suspended\n                        ")]),e._v(" "),a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.whoData.skip_suspended,callback:function(t){e.$set(e.whoData,"skip_suspended",t)},expression:"whoData.skip_suspended"}})],1)]:e._e()],2):e._e(),e._v(" "),"when"===e.step?a("div",{attrs:{slot:"step:when"},slot:"step:when"},[a("ui-form-element",{key:"whenNow",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Now\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"now"},slot:"content",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}})],1),e._v(" "),a("ui-form-element",{key:"whenCron",attrs:{underline:"cron"===e.when,"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Cron Schedule\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"cron"},slot:"content",model:{value:e.when,callback:function(t){e.when=t},expression:"when"}})],1),e._v(" "),"cron"===e.when?a("ui-form-element",{key:"cron-settings",attrs:{underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Cron Settings\n                    ")]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Minute\n                            ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                0-59\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whenData.minute,callback:function(t){e.$set(e.whenData,"minute",t)},expression:"whenData.minute"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Hour\n                            ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                0-23\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whenData.hour,callback:function(t){e.$set(e.whenData,"hour",t)},expression:"whenData.hour"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Day of Month\n                            ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                1-31\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whenData.dayofmonth,callback:function(t){e.$set(e.whenData,"dayofmonth",t)},expression:"whenData.dayofmonth"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhen",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Month\n                            ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                1-12\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whenData.month,callback:function(t){e.$set(e.whenData,"month",t)},expression:"whenData.month"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Day of Week\n                            ")]),e._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                                0-7. 0,7 - Sunday\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whenData.dayofweek,callback:function(t){e.$set(e.whenData,"dayofweek",t)},expression:"whenData.dayofweek"}})],1)],1)],1):e._e()],1):e._e(),e._v(" "),"where"===e.step?a("div",{attrs:{slot:"step:where"},slot:"step:where"},[a("ui-form-element",{key:"whereLocal",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Local\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"local"},slot:"content",model:{value:e.where,callback:function(t){e.where=t},expression:"where"}})],1),e._v(" "),a("transition",{attrs:{name:"fade"}},["local"===e.where?a("ui-form-element",{key:"whereLocalPath",attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Local path\n                        ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.local_path,callback:function(t){e.$set(e.whereData,"local_path",t)},expression:"whereData.local_path"}})],1):e._e()],1),e._v(" "),a("ui-form-element",{key:"whereFTP",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        FTP\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"ftp"},slot:"content",model:{value:e.where,callback:function(t){e.where=t},expression:"where"}})],1),e._v(" "),"ftp"===e.where?a("ui-form-element",{key:"whereFTPSettings"},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        FTP Settings\n                    ")]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                IP\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.ftp_ip,callback:function(t){e.$set(e.whereData,"ftp_ip",t)},expression:"whereData.ftp_ip"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Username\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.ftp_username,callback:function(t){e.$set(e.whereData,"ftp_username",t)},expression:"whereData.ftp_username"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Password\n                            ")]),e._v(" "),a("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.ftp_password,callback:function(t){e.$set(e.whereData,"ftp_password",t)},expression:"whereData.ftp_password"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Remote Path\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.ftp_path,callback:function(t){e.$set(e.whereData,"ftp_path",t)},expression:"whereData.ftp_path"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"scheduleBackupWhere",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Port\n                            ")]),e._v(" "),a("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.whereData.ftp_port,callback:function(t){e.$set(e.whereData,"ftp_port",t)},expression:"whereData.ftp_port"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Secure FTP\n                            ")]),e._v(" "),a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.whereData.ftp_secure,callback:function(t){e.$set(e.whereData,"ftp_secure",t)},expression:"whereData.ftp_secure"}})],1)],1)],1):e._e(),e._v(" "),a("ui-form-element",{key:"whereAppend"},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Append\n                    ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"content"},slot:"content"},[a("input-select",{attrs:{options:e.options.appendOptions},model:{value:e.whereData.append_to_path,callback:function(t){e.$set(e.whereData,"append_to_path",t)},expression:"whereData.append_to_path"}})],1)],1),e._v(" "),"custom"===e.whereData.append_to_path?a("ui-form-element",{key:"whereAppendCustom",attrs:{"help-i-d":"539"}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Custom Path\n                    ")]),e._v(" "),a("input-text",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{slot:"content",prefix:"/"},slot:"content",model:{value:e.whereData.custom_append,callback:function(t){e.$set(e.whereData,"custom_append",t)},expression:"whereData.custom_append"}})],1):e._e(),e._v(" "),e.encryptionEnabled?[a("ui-form-element",{key:"whereEncrypt",attrs:{underline:e.encrypt,"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Backup Encryption\n                        ")]),e._v(" "),a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.encrypt,callback:function(t){e.encrypt=t},expression:"encrypt"}})],1),e._v(" "),a("transition",{attrs:{name:"fadeBounce"}},[e.encrypt?a("ui-form-element",{key:"wereEncryptPassword",attrs:{group:"scheduleBackupWhere",validators:{required:!0},underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                                Password\n                            ")]),e._v(" "),a("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e()],1)]:e._e()],2):e._e(),e._v(" "),"what"===e.step?a("div",{attrs:{slot:"step:what"},slot:"step:what"},[a("ui-form-element",{key:"whatAll",attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        All Data\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"all"},slot:"content",model:{value:e.what,callback:function(t){e.what=t},expression:"what"}})],1),e._v(" "),a("ui-form-element",{key:"whatSelected",attrs:{underline:!1,"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Selected Data\n                    ")]),e._v(" "),a("input-radio",{attrs:{slot:"content",value:"select"},slot:"content",model:{value:e.what,callback:function(t){e.what=t},expression:"what"}})],1),e._v(" "),"select"===e.what?a("ui-form-element",{key:"whatSelectOptions"},[e.$_Client.isPhone?e._e():a("span",{attrs:{slot:"title"},slot:"title"},[e._v(" ")]),e._v(" "),a("div",{staticClass:"checkboxes-list",attrs:{slot:"content"},slot:"content"},[a("input-checkbox",{attrs:{value:"domain"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Domains Directory")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"subdomain"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Subdomain Lists")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"ftp"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("FTP Accounts")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"ftpsettings"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("FTP Settings")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"database"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Database Settings")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"database_data"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Database Data")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"forwarder"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Forwarders")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"email"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("E-mail Accounts")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"email_data"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("E-mail Data")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"emailsettings"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("E-mail Settings")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"vacation"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Vacation Messages")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"autoresponder"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Autoresponders")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"list"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Mailing Lists")])],1),e._v(" "),a("input-checkbox",{attrs:{value:"trash"},model:{value:e.whatData.option,callback:function(t){e.$set(e.whatData,"option",t)},expression:"whatData.option"}},[a("translate",[e._v("Deleted Trash Data")])],1),e._v(" "),a("div",{staticClass:"select-links"},[a("ui-link",{on:{click:e.selectAllDataItems}},[a("translate",[e._v("All")])],1),e._v("\n                            /\n                            "),a("ui-link",{on:{click:function(t){e.whatData.option=[]}}},[a("translate",[e._v("None")])],1)],1)],1)]):e._e()],1):e._e()],1)],1)],1)}),[],!1,null,"bd7d5bba",null);"function"==typeof r()&&r()(i);var u=i.exports},"./src/js/pages/admin/backups/schedule.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=style&index=0&id=bd7d5bba&lang=scss&scoped=true&":function(e,t,a){var s=a("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/backups/schedule.vue?vue&type=style&index=0&id=bd7d5bba&lang=scss&scoped=true&");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,a("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("67606502",s,!0,{})}}]);