(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[3625],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/cgroups-editor.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.function.name.js");var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var s=r(t);if(s&&s.has(e))return s.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(l,a,u):l[a]=e[a]}l.default=e,s&&s.set(e,l);return l}(s("./node_modules/ramda/src/index.js"));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(r=function(e){return e?s:t})(e)}var n={props:{options:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{values:{}}},computed:{enabled:function(){return this.options.length&&this.$_flags["server.cgroup"]},requestData:function(){return l.map((function(e){return e.unlimited?"":e.value}),this.values)}},watch:{requestData:{deep:!0,handler:function(e){this.$emit("update:cgroup-values",e)}}},created:function(){var e=this;this.enabled&&this.options.forEach((function(t){var s=t.value||t.default,o=""===s;e.$set(e.values,t.name,{value:s,unlimited:o})}))},methods:{setLimitState:function(e,t){this.values[e.name].unlimited=t,!1===t&&""===this.values[e.name].value&&(this.values[e.name].value=e.placeholder)},checkValue:function(e){""===this.values[e].value&&(this.values[e].unlimited=!0)}}};t.Z=n},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),l=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.array.reduce.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.object.keys.js");var r=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),n=o(s("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),a=s("./src/js/api/commands/admin/users/packages.js"),u=o(s("./src/js/components/local/cgroups-editor.vue")),i=s("./src/js/modules/utils/index.js"),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var s=c(t);if(s&&s.has(e))return s.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var a=r?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(o,n,a):o[n]=e[n]}o.default=e,s&&s.set(e,o);return o}(s("./node_modules/ramda/src/index.js"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(c=function(e){return e?s:t})(e)}function m(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?m(Object(s),!0).forEach((function(t){(0,r.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f=function(e,t){return d.pipe(d.toPairs,d.filter((function(t){return e.apply(void 0,(0,n.default)(t))})),d.fromPairs)(t)},v={components:{CgroupsEditor:u.default},api:[{command:a.getPackage,bind:"package"}],props:{package:{type:String,required:!1,default:"newpackage"}},data:function(){return{limits:[],features:[],customItems:[],dns:"OFF",serverip:!0,ips:"0",homeOverride:{value:"",options:{}},cgroupValues:{}}},computed:{processedData:function(){return p(p(p(p(p({},i._.reduce(this.limits,(function(e,t,s){var o;return p(p({},e),{},(o={},(0,r.default)(o,s,["bandwidth","quota"].includes(s)?String(t.value/Math.pow(2,20)):t.value),(0,r.default)(o,"u".concat(s),t.unlimited||null),o))}),{})),i._.reduce(this.customItems,(function(e,t){return p(p({},e),{},(0,r.default)({},t.name,!0===t.value?"ON":t.value))}),{})),i._.mapValues(this.features,(function(e){return e?"ON":null}))),this.cgroupValues),{},{serverip:this.serverip?"ON":null,dns:this.dns,ips:this.ips,create_user_home_override:this.canOverrideHome?this.homeOverride.value:null})},canOverrideHome:function(){return this.homeOverride&&!!Object.keys(this.homeOverride.options).length},enabledFeatureLabels:function(){var e=this;return f((function(t,s){return s&&void 0!==e.features[t]}),this.featureLabels)},enabledLimitLabels:function(){var e=this;return f((function(t,s){return s&&e.limits[t]}),this.limitLabels)}},watch:{processedData:function(e){this.$emit("update",e)}},created:function(){this.limitLabels={bandwidth:this.$gettext("Bandwidth"),quota:this.$gettext("Disk Space"),inode:this.$_flags["server.inode"]?this.$gettext("Inode"):void 0,vdomains:this.$gettext("Domains"),nsubdomains:this.$gettext("Sub-Domains"),nemails:this.$gettext("E-mail Accounts"),nemailf:this.$gettext("E-mail Forwarders"),nemailml:this.$gettext("Mailing Lists"),nemailr:this.$gettext("Autoresponders"),mysql:this.$gettext("MySQL Databases"),domainptr:this.$gettext("Domain Pointers"),ftp:this.$gettext("FTP Accounts"),nusers:this.$gettext("User Accounts")},this.featureLabels={aftp:this.$gettext("Anonymous FTP Accounts"),cgi:this.$gettext("CGI Access"),git:this.$gettext("Git"),wordpress:this.$gettext("Wordpress"),clamav:this.$gettext("ClamAV"),nginx_unit:this.$gettext("Nginx Unit"),php:this.$gettext("PHP Access"),spam:this.$gettext("SpamAssassin"),catchall:this.$gettext("Catch-All E-mail"),ssl:this.$gettext("SSL Access"),ssh:this.$gettext("SSH Access"),userssh:this.$gettext("SSH Access for Users"),redis:this.$gettext("Redis"),oversell:this.$gettext("Allow Overselling"),cron:this.$gettext("Cron Jobs"),sysinfo:this.$gettext("System Info"),login_keys:this.$gettext("Login Keys"),dnscontrol:this.$gettext("DNS Control")};var e=this.$store.getters["session/serverFeatures"];!1===e.redis&&delete this.featureLabels.redis,!1===e.wordpress&&delete this.featureLabels.wordpress,!1===e.git&&delete this.featureLabels.git,!1===e.clamav&&delete this.featureLabels.clamav,!1===e.unit&&delete this.featureLabels.nginx_unit;var t=this.$api.package;this.limits=i._.cloneDeep(t.limits),this.features=i._.cloneDeep(t.features),this.customItems=i._.cloneDeep(t.customItems),this.ips=t.ips||0,this.homeOverride=i._.cloneDeep(t.homeOverride),this.serverip=t.features.serverip,this.dns=t.dns,null===this.package&&(this.limits.bandwidth.value*=Math.pow(2,20),this.limits.quota.value*=Math.pow(2,20))},methods:{checkEmptyness:function(e){e.value||(e.unlimited=!0)}}};t.Z=v},"./src/js/api/commands/admin/users/packages.js":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.updatePackage=t.importPackages=t.getPackages=t.getPackage=t.exportPackages=t.doPackageAction=t.deletePackages=void 0;var l=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js"));s("./node_modules/core-js/modules/es.array.reduce.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.promise.js"),s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.array.find.js"),s("./node_modules/core-js/modules/es.object.values.js"),s("./node_modules/core-js/modules/es.array.filter.js");var r=o(s("./src/js/api/command/index.js"));function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){(0,l.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u="/CMD_MANAGE_RESELLER_PACKAGES",i=r.default.get({id:"RESELLER_PACKAGES",url:u,params:{bytes:!0},pagination:!0,after:function(e){return e.toTable(e.mapArrayProps({bandwidth:e.convert.toAppLimit,quota:e.convert.toAppLimit,ips:function(t){return e.convert.toAppNumber(t||"0")}}))}});t.getPackages=i;var d=r.default.post({url:u,schema:{select:r.default.ROWS},before:function(e){return e.select.reduce((function(e,t,s){return a(a({},e),{},(0,l.default)({},"delete".concat(s),t))}),{delete:!0})}});t.deletePackages=d;var c=r.default.post({url:u,params:{export:!0},schema:{select:r.default.ROWS}});t.exportPackages=c;var m=r.default.post({url:u,params:{action:"import"},schema:{import:r.default.REQUIRED_STRING}});t.importPackages=m;var p=r.default.get({url:"/CMD_SHOW_RESELLER_PACKAGE",id:"RESELLER_PACKAGE",params:{bytes:!0},query:{package:r.default.REQUIRED_STRING},after:function(e){return e.flow((function(e){return{data:e}}),e.moveProp({"data.ips":"ips","data.custom_items":"customItems","data.have_inode":"haveInode","data.dns":"dns","data.ip":"ip","data.create_user_home_override":"homeOverride","data.cgroup":"cgroup"}),e.mapProps({homeOverride:e.flow((function(e){return e||{}}),e.toSelect),customItems:e.flow(e.toArray,e.mapArray((function(t){var s={type:t.type,description:t.desc,label:t.string,name:t.name};switch(t.type){case"checkbox":return a(a({},s),{},{value:"yes"===t.checked});case"text":return a(a({},s),{},{value:t.value});case"listbox":return a(a({},s),{},{value:Object.values(t.select).find((function(e){return e.selected})).value,options:e.reduce((function(e,t){return a(a({},e),{},(0,l.default)({},t.value,t.text))}))(t.select)});default:return!1}})),(function(e){return e.filter((function(e){return!!e}))})),haveInode:e.convert.toAppBoolean,dns:e.getProp("value"),ip:e.getProp("value"),ips:e.convert.toAppNumber,features:e.feedWith(1,e.flow(e.getProp("data"),e.filter(e.flow(e.getProp("type"),e.isEqual("checkbox"))),e.mapValues(e.flow(e.getProp("checked"),e.convert.toAppBoolean)))),limits:e.feedWith(1,e.flow(e.getProp("data"),e.filter(e.flow(e.getProp("type"),e.isEqual("unlimited"))),e.mapValues((function(t){var s=e.convert.toAppLimit(t.value)===1/0;return{value:s?"":t.value,unlimited:s}})))),cgroup:function(e){return e?Object.values(a(a({},e.options||{}),e.saved||{})):[]}}),e.deleteProp("data"))}});t.getPackage=p;var f=r.default.post({url:u,params:{add:!0},schema:{bandwidth:r.default.OPTIONAL_STRING,ubandwidth:r.default.OPTIONAL_BOOL,quota:r.default.OPTIONAL_STRING,uquota:r.default.OPTIONAL_BOOL,inode:r.default.OPTIONAL_STRING,uinode:r.default.OPTIONAL_BOOL,vdomains:r.default.OPTIONAL_STRING,uvdomains:r.default.OPTIONAL_BOOL,nsubdomains:r.default.OPTIONAL_STRING,unsubdomains:r.default.OPTIONAL_BOOL,nemails:r.default.OPTIONAL_STRING,unemails:r.default.OPTIONAL_BOOL,nemailf:r.default.OPTIONAL_STRING,unemailf:r.default.OPTIONAL_BOOL,nemailml:r.default.OPTIONAL_STRING,unemailml:r.default.OPTIONAL_BOOL,nemailr:r.default.OPTIONAL_STRING,unemailr:r.default.OPTIONAL_BOOL,mysql:r.default.OPTIONAL_STRING,umysql:r.default.OPTIONAL_BOOL,domainptr:r.default.OPTIONAL_STRING,udomainptr:r.default.OPTIONAL_BOOL,ftp:r.default.OPTIONAL_STRING,uftp:r.default.OPTIONAL_BOOL,aftp:r.default.OPTIONAL_STRING,cgi:r.default.OPTIONAL_STRING,git:r.default.OPTIONAL_STRING,php:r.default.OPTIONAL_STRING,spam:r.default.OPTIONAL_STRING,catchall:r.default.OPTIONAL_STRING,ssl:r.default.OPTIONAL_STRING,ssh:r.default.OPTIONAL_STRING,userssh:r.default.OPTIONAL_STRING,oversell:r.default.OPTIONAL_STRING,cron:r.default.OPTIONAL_STRING,sysinfo:r.default.OPTIONAL_STRING,login_keys:r.default.OPTIONAL_STRING,dnscontrol:r.default.OPTIONAL_STRING,dns:r.default.REQUIRED_STRING,serverip:r.default.OPTIONAL_STRING,packagename:r.default.OPTIONAL_STRING,create_user_home_override:r.default.OPTIONAL_STRING,nusers:r.default.OPTIONAL_STRING,unusers:r.default.OPTIONAL_BOOL}});t.updatePackage=f;var v=r.default.post({url:u,schema:{action:r.default.REQUIRED_STRING,from:r.default.REQUIRED_STRING,to:r.default.REQUIRED_STRING},before:function(e){return{from:null,to:null,old_package:e.from,new_package:e.to}}});t.doPackageAction=v},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/components/local/cgroups-editor.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return r}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/cgroups-editor.vue?vue&type=script&lang=js&"),l=o.Z,r=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.enabled?s("app-page-section",[s("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"section:title"},slot:"section:title"},[s("translate",[e._v("Resource Limits")]),e._v(" "),e.$slots.tooltip?s("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin:left",value:.5,expression:"0.5",arg:"left"}]},[s("translate",[e._v("\n                Set maximum values reseller could set for his users.\n            ")])],1):e._e()],1),e._v(" "),e._l(e.options,(function(t){return s("ui-form-element",{key:t.name},[s("span",{attrs:{slot:"title"},domProps:{textContent:e._s(t.string)},slot:"title"}),e._v(" "),s("span",{attrs:{slot:"tooltip"},domProps:{textContent:e._s(t.desc)},slot:"tooltip"}),e._v(" "),s("input-text",{attrs:{slot:"content",disabled:e.values[t.name].unlimited,placeholder:t.placeholder},on:{blur:function(s){return e.checkValue(t.name)}},slot:"content",model:{value:e.values[t.name].value,callback:function(s){e.$set(e.values[t.name],"value",s)},expression:"values[item.name].value"}},[s("input-checkbox-button",{attrs:{slot:"additions:right",value:e.values[t.name].unlimited},on:{input:function(s){return e.setLimitState(t,s)}},slot:"additions:right"},[s("translate",[e._v("Unlimited")])],1)],1)],1)}))],2):e._e()}),[],!1,null,null,null).exports},"./src/js/pages/admin/reseller-packages/_components/reseller-package.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return r}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=script&lang=js&"),l=o.Z,r=(s("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=style&index=0&lang=scss&"),(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reseller-package"},[e._l(e.enabledLimitLabels,(function(t,o){return s("ui-form-element",{key:o},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            "+e._s(t)+"\n        ")]),e._v(" "),s(["bandwidth","quota"].includes(o)?"input-size":"input-text",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],tag:"component",attrs:{slot:"content",disabled:e.limits[o].unlimited,number:""},on:{blur:function(t){return e.checkEmptyness(e.limits[o])}},slot:"content",model:{value:e.limits[o].value,callback:function(t){e.$set(e.limits[o],"value",t)},expression:"limits[key].value"}},[s("ui-button",{attrs:{slot:"additions:right",tabindex:"-1"},on:{click:function(t){e.limits[o].unlimited=!e.limits[o].unlimited}},slot:"additions:right"},[s("input-checkbox",{attrs:{label:e.$gettext("Unlimited")},model:{value:e.limits[o].unlimited,callback:function(t){e.$set(e.limits[o],"unlimited",t)},expression:"limits[key].unlimited"}})],1)],1)],1)})),e._v(" "),s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("IPs")]),e._v(" "),s("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.ips,callback:function(t){e.ips=t},expression:"ips"}})],1),e._v(" "),e._l(e.enabledFeatureLabels,(function(t,o){return s("ui-form-element",{key:o,class:{dimmed:!e.features[o]},attrs:{"vertical-on-phone":!1,reverse:e.$_Client.isPhone}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            "+e._s(t)+"\n        ")]),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.features[o],callback:function(t){e.$set(e.features,o,t)},expression:"features[key]"}})],1)})),e._v(" "),s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Personal DNS's")]),e._v(" "),s("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},[s("input-radio",{attrs:{value:"OFF"},model:{value:e.dns,callback:function(t){e.dns=t},expression:"dns"}},[s("translate",[e._v("None")])],1),e._v(" "),s("input-radio",{attrs:{value:"TWO"},model:{value:e.dns,callback:function(t){e.dns=t},expression:"dns"}},[s("translate",[e._v("Uses 2 IP's, domain uses one of them")])],1),e._v(" "),s("input-radio",{attrs:{value:"Three"},model:{value:e.dns,callback:function(t){e.dns=t},expression:"dns"}},[s("translate",[e._v("Uses 3 IP's, domain gets own IP")])],1)],1)],1),e._v(" "),s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Share Server IP")]),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.serverip,callback:function(t){e.serverip=t},expression:"serverip"}},[s("translate",[e._v("\n                Allow Reseller to create sites with server IP\n            ")])],1)],1),e._v(" "),e.canOverrideHome?s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Home Directory")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("input-select",{attrs:{options:e.homeOverride.options},model:{value:e.homeOverride.value,callback:function(t){e.$set(e.homeOverride,"value",t)},expression:"homeOverride.value"}})],1)],1):e._e(),e._v(" "),e._l(e.customItems,(function(t){return s("ui-form-element",{key:t.name},[s("span",{attrs:{slot:"title"},domProps:{textContent:e._s(t.label)},slot:"title"}),e._v(" "),"checkbox"===t.type?s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.value,callback:function(s){e.$set(t,"value",s)},expression:"customItem.value"}},[e._v("\n            "+e._s(t.description)+"\n        ")]):s("text"===t.type?"input-text":"input-select",{tag:"component",attrs:{slot:"content",options:"listbox"===t.type?t.options:[]},slot:"content",model:{value:t.value,callback:function(s){e.$set(t,"value",s)},expression:"customItem.value"}},[s("ui-button",{attrs:{slot:"additions:right"},slot:"additions:right"},[e._v("\n                "+e._s(t.description)+"\n            ")])],1)],1)})),e._v(" "),s("cgroups-editor",{attrs:{options:e.$api.package.cgroup},on:{"update:cgroup-values":function(t){e.cgroupValues=t}}},[s("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n            Set maximum values reseller could set for his users.\n        ")])],1)],2)}),[],!1,null,null,null).exports)},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/reseller-packages/_components/reseller-package.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("148a5519",o,!0,{})}}]);