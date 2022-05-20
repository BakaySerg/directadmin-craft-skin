(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[9344],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=t("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var a=o(t("./node_modules/@babel/runtime/regenerator/index.js")),l=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));t("./node_modules/core-js/modules/es.array.includes.js"),t("./node_modules/core-js/modules/es.string.includes.js");var n=i(t("./src/js/api/commands/user/backups.js")),u=i(t("./node_modules/ramda/src/index.js"));function d(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:s})(e)}function i(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d(s);if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var n=a?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(o,l,n):o[l]=e[l]}return o.default=e,t&&t.set(e,o),o}var c,p={preload:n.getBackups,data:function(){return{backup:"",options:[]}},api:[{command:n.getBackups,bind:"backups"},{command:n.getBackup,bind:"backup"}],computed:{hasOptions:function(){return this.$api.backup.length>0},selectOptions:function(){var e=this,s={};return s.website={label:this.$gettext("Website Data"),entries:{domain:this.$gettext("Domains Directory: Backs up all user files for all domains"),subdomain:this.$gettext("Subdomains Lists: Backs up the list of subdomains for each domain")}},s.email={label:this.$gettext("E-mail"),entries:{email:this.$gettext("E-mail Accounts List for all domains (names and passwords)"),email_data:this.$gettext("E-mail Data: Includes the messages from the Inbox, IMAP Folders, and webmail data."),emailsettings:this.$gettext("E-mail Settings: Includes the filters and the catchall address."),forwarder:this.$gettext("Forwarders: Includes all forwarding addresses."),autoresponder:this.$gettext("Autoresponders: Includes all autoresponders and messages."),vacation:this.$gettext("Vacation Messages: Includes all vacation messages and times."),list:this.$gettext("Mailing Lists: Includes the list, digest-list and archives.")}},s.ftp={label:this.$gettext("FTP"),entries:{ftp:this.$gettext("FTP Accounts"),ftpsettings:this.$gettext("FTP Settings")}},s.database={label:this.$gettext("Databases"),entries:{database:this.$gettext("Database Settings: Backs up all DB Users and DB Settings"),database_data:this.$gettext("Database Data")}},u.map(u.evolve({entries:u.pickBy((function(s,t){return e.$api.backup.includes(t)}))}),s)}},watch:{backup:(c=(0,l.default)(a.default.mark((function e(s){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=4;break}return e.next=3,n.getBackup({file:s});case 3:this.options=e.sent;case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},methods:{restoreBackup:function(){n.restoreBackup({file:this.backup,select:this.options})}}};s.Z=p},"./src/js/api/commands/user/backups.js":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.keys.js"),t("./node_modules/core-js/modules/es.symbol.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),t("./node_modules/core-js/modules/web.dom-collections.for-each.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),t("./node_modules/core-js/modules/es.object.define-properties.js"),t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.restoreBackup=s.getBackups=s.getBackup=s.createBackup=void 0;var r=o(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=o(t("./src/js/api/command/index.js"));function l(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?l(Object(t),!0).forEach((function(s){(0,r.default)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var u={url:"/CMD_SITE_BACKUP",domain:!0},d=a.default.get(n(n({},u),{},{id:"SITE_BACKUPS",domain:!0,response:[]}));s.getBackups=d;var i=a.default.select(n(n({},u),{},{params:{action:"backup",form_version:"4"}}));s.createBackup=i;var c=a.default.post(n(n({id:"SITE_BACKUP"},u),{},{params:{action:"view"},schema:{file:a.default.REQUIRED_STRING},response:[],notifySuccess:!1}));s.getBackup=c;var p=a.default.select(n(n({},u),{},{params:{action:"restore",form_version:"3"},schema:{file:a.default.REQUIRED_STRING}}));s.restoreBackup=p},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/pages/user/backup/restore.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return d}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=script&lang=js&"),r=o.Z,a=(t("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=style&index=0&lang=scss&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=t("./src/js/pages/user/backup/restore.vue?vue&type=custom&index=0&blockType=route"),n=t.n(l),u=(0,a.Z)(r,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("app-page",[t("app-page-section",[e.$api.backups.length?t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Backup\n            ")]),e._v(" "),t("input-select",{attrs:{slot:"content",options:e.$api.backups},slot:"content",model:{value:e.backup,callback:function(s){e.backup=s},expression:"backup"}})],1):[t("translate",{attrs:{tag:"p"}},[e._v("\n                Sorry, it seems that there are no backups created yet. Would you like to create one?\n            ")]),e._v(" "),t("ui-button-link",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{name:"user/backup",theme:"safe"}},[t("translate",[e._v("Create Backup")])],1)]],2),e._v(" "),e.hasOptions?t("app-page-section",[t("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Restore Options\n        ")]),e._v(" "),t("input-select-multiple",{staticClass:"frameless-input-multiple",attrs:{options:e.selectOptions,"max-items-visible":1/0,"hide-header":""},model:{value:e.options,callback:function(s){e.options=s},expression:"options"}})],1):e._e(),e._v(" "),t("ui-link",{attrs:{slot:"bottom:links",bullet:"",href:"/CMD_FILE_MANAGER?path=/backups",target:"_blank"},slot:"bottom:links"},[t("translate",[e._v("View current backups")])],1),e._v(" "),t("template",{slot:"footer:buttons"},[e.$api.backups.length?t("ui-button",{attrs:{theme:"safe",disabled:!e.options.length},on:{click:e.restoreBackup}},[t("translate",[e._v("Restore")])],1):e._e()],1)],2)}),[],!1,null,null,null);"function"==typeof n()&&n()(u);var d=u.exports},"./src/js/pages/user/backup/restore.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/backup/restore.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("03b52f1f",o,!0,{})}}]);