(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[1459],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/usage-table-value.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.number.constructor.js");var a={props:{bytes:Boolean,value:[String,Number,Object,Boolean,Array]}};t.Z=a},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/usage-table.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js");var a=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.to-string.js");var l={components:{UsageTableValue:a(s("./src/js/components/local/stats/usage-table-value.vue")).default},props:{items:{type:Array,required:!0}},data:function(){return{columns:[{id:"label",label:this.$gettext("Setting"),width:"30%",editable:!1},{id:"value",label:this.$gettext("Usage"),grow:!0,editable:!1}]}},computed:{rows:function(){return this.items.filter((function(e){return void 0!==e.value}))}}};t.Z=l},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var a=s("./src/js/api/commands/user/stats.js"),l={commands:{getStats:a.getStats},props:{showLinks:{type:Boolean,required:!1,default:!0}},data:function(){return{select:[],awstatsDir:"awstats"}},methods:{makePublic:function(){(0,a.setPublicStats)({select:this.select,path:this.awstatsDir}).then(this.$reset)},unsetPublic:function(){(0,a.unsetPublicStats)({select:this.select,path:this.awstatsDir}).then(this.$reset)}}};t.Z=l},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/stats/index.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var a=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),l=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=a(s("./node_modules/@babel/runtime/regenerator/index.js")),n=a(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.find.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.function.name.js");var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var s=c(t);if(s&&s.has(e))return s.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}a.default=e,s&&s.set(e,a);return a}(s("./src/js/api/commands/user/stats.js")),r=s("./src/js/vue/mixins.js"),u=a(s("./src/js/components/local/stats/webalizer-table.vue")),d=a(s("./src/js/components/local/stats/usage-table.vue"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(c=function(e){return e?s:t})(e)}var m,v,p={preload:i.getStats,api:[{command:i.getStats,bind:"stats"}],components:{WebalizerTable:u.default,UsageTable:d.default},mixins:[(0,r.$bindTab)({param:"tab",defaultTab:"webalizer"})],data:function(){return{account:{email:"",name:"",awstats:"0",limitNotice:""},skin:"craft"}},computed:{stats:function(){return this.$api.stats.stats},addons:function(){return this.$api.stats.addons},skinOptions:function(){return!!this.stats.skin&&this.stats.skin.map((function(e){return e.value}))},selectedSkin:function(){return this.stats.skin&&this.skinOptions?this.stats.skin.find((function(e){return!!e.selected})).value:""}},created:function(){this.resetAccountConfig(),this.skinOptions&&(this.skin=this.selectedSkin)},methods:{verifyLicense:function(){i.licenseVerify()},updateDiskUsage:(v=(0,n.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.updateDiskUsage();case 2:i.getUserStats();case 3:case"end":return e.stop()}}),e)}))),function(){return v.apply(this,arguments)}),resetAccountConfig:function(){this.account={name:this.stats.name,email:this.$p6e.email2unicode(this.stats.email),awstats:this.stats.awstats,limitNotice:this.$api.stats.limitNotice?this.$api.stats.limitNotice.value:""}},saveAccountConfig:(m=(0,n.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.setMultiple({evalue:this.account.email,nvalue:this.account.name,awstatsvalue:this.account.awstats,skinvalue:this.skin,send_usage_message_value:this.account.limitNotice});case 2:return this.skinOptions&&this.skin!==this.selectedSkin&&(window.location.href="/CMD_USER_STATS?domain=".concat(this.$domain)),e.next=5,i.getStats();case 5:this.resetAccountConfig();case 6:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})}};t.Z=p},"./src/js/api/commands/user/stats.js":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js");var a=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),l=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.updateDiskUsage=t.unsetPublicStats=t.setUserStats=t.setUserSkin=t.setUserName=t.setUserEmail=t.setUserAwstats=t.setPublicStats=t.setMultiple=t.licenseVerify=t.getWebalizerReport=t.getStatsStatus=t.getStats=t.getDomainLog=void 0;var o=a(s("./node_modules/@babel/runtime/helpers/typeof.js")),n=a(s("./node_modules/@babel/runtime/helpers/defineProperty.js"));s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.promise.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.object.values.js"),s("./node_modules/core-js/modules/es.array.reduce.js"),s("./node_modules/core-js/modules/es.array.find.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.array.slice.js");var i=a(s("./src/js/api/command/index.js")),r=s("./src/js/api/commands/converters/customItems.ts"),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var s=d(t);if(s&&s.has(e))return s.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}a.default=e,s&&s.set(e,a);return a}(s("./node_modules/ramda/src/index.js"));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(d=function(e){return e?s:t})(e)}function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){(0,n.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var v="/CMD_USER_STATS",p="/CMD_CHANGE_INFO",b=i.default.get({id:"USER_STATS",url:v,params:{bytes:!0},domain:!0,pagination:!0,after:function(e){return e.flow(e.project({domains:"domains",stats:"stats","addons.webalizer":"webalizer","addons.awstats":"awstats",limitNotice:"stats",customItems:"custom_items"}),e.mapProps({stats:e.flow(e.deleteProp("info"),e.toArray,e.filter((function(e){return!!e.usage})),e.transformObject((function(e){return(0,n.default)({},e.setting,{usage:e.usage||void 0,limit:e.max_usage||void 0})})),e.mapValues((function(e){return["ON","OFF"].includes(e.usage)?{usage:"ON"===e.usage}:"object"===(0,o.default)(e.usage)?m(m({},e),{},{usage:Object.values(e.usage)}):e})),e.mapValues((function(t){return t.limit?e.toLimitedUsage(e.convert.toAppNumber)(t):t.usage})),e.mapProps({awstats:e.flow(e.toSelect,e.getProp("value"))})),domains:e.toTable(e.mapArray(e.flow((function(e){var t=e.subdomains||e.settings.subdomains||[];return void 0!==e.settings.subdomains&&delete e.settings.subdomains,e.subdomains=t,e}),e.mapProps({bandwidth:e.mapProp("usage",e.convert.toAppNumber),quota:e.convert.toAppNumber,log_usage:e.convert.toAppNumber,nsubdomains:e.convert.toAppNumber,suspended:e.convert.toAppBoolean,settings:e.mapValues(e.convert.toAppBoolean)})))),addons:e.flow(e.toArray,e.mapArray(e.isEqual("1")),e.reduce((function(e,t){return e||t}),!1)),limitNotice:function(t){var s=Object.values(t).find((function(e){return"send_usage_message"===e.setting}));return!!s&&{defaultValue:s.max_usage,value:e.toSelect(s.usage).value}},customItems:u.pipe(u.defaultTo({}),u.map(r.fromObject),u.filter((function(e){return e.value||"checkbox"===e.type})),u.values)}))}});t.getStats=b;var _=i.default.get({id:"STATS_STATUS",url:v,domain:!0,after:function(e){return e.flow(e.project({awstats:"awstats",awstatsOptions:"domain_awstats",webalizer:"webalizer"}),e.mapProp("awstats",(function(e){return"0"!==e})),e.mapProp("webalizer",e.isEqual("1")))}});t.getStatsStatus=_;var f=i.default.get({id:"WEBALIZER_REPORT",url:"/CMD_FILE_MANAGER",response:!1,params:{action:"exists"},schema:{domain:i.default.DOMAIN,subdomain:i.default.OPTIONAL_STRING},before:function(e){var t=e.domain,s=e.subdomain;return{path:s?"/domains/".concat(t,"/stats/").concat(s,"/index.html"):"/domains/".concat(t,"/stats/index.html"),domain:null,subdomain:null}},after:function(){return function(e){return"1"===e.exists}}});t.getWebalizerReport=f;var g=i.default.select({url:"/CMD_PUBLIC_STATS",params:{action:"public",json:!0},domain:!0,schema:{path:i.default.REQUIRED_STRING}});t.setPublicStats=g;var j=i.default.select({url:"/CMD_PUBLIC_STATS",params:{action:"public",json:!0,unset:!0},schema:{path:i.default.REQUIRED_STRING}});t.unsetPublicStats=j;var y=i.default.post({url:p,params:{json:!0},domain:!0,schema:{evalue:i.default.OPTIONAL_STRING,nvalue:i.default.OPTIONAL_STRING,lvalue:i.default.OPTIONAL_STRING}});t.setUserStats=y;var h=i.default.post({url:p,domain:!0}),x=h.extend({params:{name:!0},schema:{nvalue:i.default.REQUIRED_STRING}});t.setUserName=x;var S=h.extend({params:{email:!0},schema:{evalue:i.default.REQUIRED_STRING}});t.setUserEmail=S;var w=h.extend({params:{skin:!0},schema:{skinvalue:i.default.REQUIRED_STRING}});t.setUserSkin=w;var k=h.extend({params:{set_multiple:!0,send_usage_message:!0},schema:{nvalue:i.default.OPTIONAL_STRING,evalue:i.default.OPTIONAL_STRING,skinvalue:i.default.OPTIONAL_STRING,lvalue:i.default.OPTIONAL_STRING,awstatsvalue:i.default.OPTIONAL_STRING,zvalue:i.default.OPTIONAL_STRING},before:function(e){return{name:!!e.nvalue||null,email:!!e.evalue||null,skin:!!e.skinvalue||null,language:!!e.lvalue||null,awstats:!!e.awstatsvalue||null,zoom:!!e.zvalue||null}}});t.setMultiple=k;var O=h.extend({params:{awstats:!0},schema:{awstatsvalue:i.default.REQUIRED_STRING}});t.setUserAwstats=O;var $=i.default.get({id:"LICENSE_VERIFY",url:"/CMD_LICENSE_VERIFY",notifySuccess:!0});t.licenseVerify=$;var N=i.default.post({url:"/CMD_CHANGE_INFO",params:{update:!0}});t.updateDiskUsage=N;var R=i.default.get({id:"DOMAIN_LOG",url:"/CMD_SHOW_LOG",params:{json:null},accepts:"text/plain",domain:!0,schema:{type:i.default.REQUIRED_STRING},after:function(e){return e.flow((function(e){return e.split("\n")}),(function(e){return e.slice(0,-1)}))}});t.getDomainLog=R},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/components/local/stats/usage-table-value.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return a.X},default:function(){return o}});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/usage-table-value.vue?vue&type=script&lang=js&"),l=a.Z,o=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return["string","number"].includes(typeof e.value)?s("span",{staticClass:"txt:bold"},[e.bytes?[e._v("\n        "+e._s(e._f("humanReadableSize")(Number(e.value)))+"\n    ")]:[e._v("\n        "+e._s(e.value)+"\n    ")]],2):"boolean"==typeof e.value?s("ui-badge",{attrs:{theme:e.value?"safe":"danger"}},[e.value?s("translate",[e._v("\n        Enabled\n    ")]):s("translate",[e._v("\n        Disabled\n    ")])],1):Array.isArray(e.value)?s("span",{staticClass:"txt:bold",domProps:{textContent:e._s(e.value.join(", "))}}):s("ui-progress-label",{attrs:{value:e.value.usage,limit:e.value.limit}},[s("template",{slot:"value"},[e.bytes?[e._v("\n            "+e._s(e._f("humanReadableSize")(e.value.usage))+"\n        ")]:[e._v("\n            "+e._s(e.value.usage)+"\n        ")]],2),e._v(" "),e.value.limit!==1/0?s("template",{slot:"limit"},[e.bytes?[e._v("\n            "+e._s(e._f("humanReadableSize")(e.value.limit))+"\n        ")]:[e._v("\n            "+e._s(e.value.limit)+"\n        ")]],2):e._e()],2)}),[],!1,null,null,null).exports},"./src/js/components/local/stats/usage-table.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return a.X},default:function(){return o}});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/usage-table.vue?vue&type=script&lang=js&"),l=a.Z,o=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-r-table",e._b({attrs:{"is-checkable":!1,"is-sortable":!1,"disable-pagination":"","hide-before-controls":""},scopedSlots:e._u([{key:"col:label",fn:function(t){var s=t.label,a=t.id;return[a?e._t("label:"+a,(function(){return[e._v("\n            "+e._s(s)+"\n        ")]})):[e._v("\n            "+e._s(s)+"\n        ")]]}},{key:"col:value",fn:function(t){var a=t.value,l=t.bytes,o=t.id;return[o?e._t("value:"+o,(function(){return[s("usage-table-value",e._b({},"usage-table-value",{bytes:l,value:a},!1))]})):s("usage-table-value",e._b({},"usage-table-value",{bytes:l,value:a},!1))]}}],null,!0)},"ui-r-table",{columns:e.columns,rows:e.rows},!1))}),[],!1,null,null,null).exports},"./src/js/components/local/stats/webalizer-table.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return a.X},default:function(){return o}});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=script&lang=js&"),l=a.Z,o=(s("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=style&index=0&lang=scss&"),(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-api-table",e._b({staticClass:"webalizer-table",on:{"action:awstats":function(t){e.$dialog("MAKE_AWSTATS_PUBLIC").open()},"action:unset":function(t){e.$dialog("UNSET_PUBLIC_AWSTATS").open()}},scopedSlots:e._u([{key:"col:domain",fn:function(t){var a=t.domain,l=t.suspended;return[e.showLinks?s("ui-link",{attrs:{name:"user/stats/domain-statistics",params:{domain:a}}},[e._v("\n                "+e._s(e._f("p6eUnicode")(a))+"\n            ")]):s("span",[e._v(e._s(e._f("p6eUnicode")(a)))]),e._v(" "),l?s("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[s("translate",[e._v("Suspended")])],1):e._e()]}},{key:"col:bandwidth",fn:function(t){var a=t.bandwidth;return[e._v("\n            "+e._s(e._f("humanReadableSize")(a.usage))+"\n            /\n            "),"shared"===a.limit||a.limit===1/0?s("translate",[e._v("\n                Shared\n            ")]):s("span",[e._v("\n                "+e._s(e._f("humanReadableSize")(a.limit))+"\n            ")])]}},{key:"col:nsubdomains",fn:function(t){var a=t.subdomains,l=t.domain;return s("div",{},e._l(a,(function(t){return s("ui-actions",{key:t,staticClass:"log-actions",attrs:{position:"right"}},[s("span",{attrs:{slot:"toggle"},slot:"toggle"},[e._v(e._s(t)+"."+e._s(e._f("p6eUnicode")(l)))]),e._v(" "),s("ui-link",{attrs:{name:"user/stats/subdomain-log",params:{subdomain:t+"."+l,type:"usage"}}},[s("translate",[e._v("Usage log")])],1),e._v(" "),s("ui-link",{attrs:{name:"user/stats/subdomain-log",params:{subdomain:t+"."+l,type:"error"}}},[e._v("\n                    Error Log\n                ")])],1)})),1)}},{key:"col:log_usage",fn:function(t){var a=t.log_usage,l=t.domain;return s("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}]},[0!==a?s("ui-link",{attrs:{bullet:"",name:"user/stats/log",params:{domain:l,type:"usage"}}},[s("translate",[e._v("Usage Log")]),e._v("(\n                "),s("span",[e._v(e._s(e._f("humanReadableSize")(a)))]),e._v(")\n            ")],1):e._e(),e._v(" "),s("ui-link",{attrs:{bullet:"",name:"user/stats/log",params:{domain:l,type:"error"}}},[s("translate",[e._v("Error Log")])],1)],1)}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getStats,property:"domains",rowID:"domain",columns:{domain:{label:e.$gettext("Domain"),width:"30%"},bandwidth:e.$gettext("Bandwidth"),quota:{label:e.$gettext("Disk Usage"),filter:"humanReadableSize"},nsubdomains:e.$gettext("Subdomains"),log_usage:{label:e.$gettext("Logs"),filter:"humanReadableSize"}},actions:{awstats:e.$gettext("Make statistics publicly viewable"),unset:e.$gettext("Remove public stats")},verticalLayout:e.$_Client.isPhone},!1)),e._v(" "),s("ui-dialog",{attrs:{id:"MAKE_AWSTATS_PUBLIC"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Make statistics publicly viewable\n        ")]),e._v(" "),s("translate",{attrs:{slot:"contentTitle","translate-n":e.select.length,"translate-plural":"Set selected domains to be publicly viewable"},slot:"contentTitle"},[e._v("\n            Set selected domain to be publicly viewable.\n        ")]),e._v(" "),s("ui-form-element",{attrs:{slot:"content"},slot:"content"},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Directory:\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content",prefix:"/"},slot:"content",model:{value:e.awstatsDir,callback:function(t){e.awstatsDir=t},expression:"awstatsDir"}})],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:e.makePublic},slot:"buttons"},[s("translate",[e._v("Save")])],1)],1),e._v(" "),s("ui-dialog",{attrs:{id:"UNSET_PUBLIC_AWSTATS"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Unset publicly viewable statistics\n        ")]),e._v(" "),s("ui-form-element",{attrs:{slot:"content",vertical:""},slot:"content"},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Directory\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content",prefix:"/"},slot:"content",model:{value:e.awstatsDir,callback:function(t){e.awstatsDir=t},expression:"awstatsDir"}})],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"danger"},on:{click:e.unsetPublic},slot:"buttons"},[s("translate",[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null).exports)},"./src/js/pages/user/stats/index.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return a.X},default:function(){return u}});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/stats/index.vue?vue&type=script&lang=js&"),l=a.Z,o=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),n=s("./src/js/pages/user/stats/index.vue?vue&type=custom&index=0&blockType=route"),i=s.n(n),r=(0,o.Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{actions:[{label:e.$gettext("Edit Account Configuration"),handler:e.$dialog("EDIT_ACCOUNT_CONFIG").open,icon:"#pencil"}]}},[s("translate",{attrs:{slot:"page:title","translate-params":{username:e.$state.app.user.name}},slot:"page:title"},[e._v('\n        Details for user "%{username}"\n    ')]),e._v(" "),s("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("EDIT_ACCOUNT_CONFIG").open()}},slot:"header:buttons"},[s("translate",[e._v("Edit Account Configuration")])],1),e._v(" "),s("app-page-section",[s("ui-tabs",{attrs:{selected:e.tab,tabs:[{id:"webalizer",label:this.$gettext("Domain Statistics")},{id:"usage",label:this.$gettext("Usage Statistics")},{id:"account",label:this.$gettext("Account Configuration")}]},on:{"update:selected":function(t){e.tab=t}}},[s("div",{attrs:{slot:"tab:webalizer"},slot:"tab:webalizer"},[s("webalizer-table",{attrs:{"show-links":e.addons}})],1),e._v(" "),s("div",{attrs:{slot:"tab:usage"},slot:"tab:usage"},[s("usage-table",{attrs:{items:[{label:e.$gettext("Bandwidth"),value:e.stats.bandwidth,id:"bandwidth",bytes:!0},{label:e.$gettext("Total Disk Usage"),value:e.stats.quota,id:"quota",bytes:!0},{label:e.$gettext("E-mail Disk Usage"),value:e.stats.email_quota,bytes:!0},{label:e.$gettext("Database Disk Usage"),value:e.stats.db_quota,bytes:!0},{label:e.$gettext("Inodes"),value:e.stats.inode?e.stats.inode.usage:void 0},{label:e.$gettext("# of Domains"),value:e.stats.vdomains},{label:e.$gettext("# of Subdomains"),value:e.stats.nsubdomains},{label:e.$gettext("E-mail Accounts"),value:e.stats.nemails},{label:e.$gettext("E-mail Forwarders"),value:e.stats.nemailf},{label:e.$gettext("Mailing Lists"),value:e.stats.nemailml},{label:e.$gettext("Autoresponders"),value:e.stats.nemailr},{label:e.$gettext("Sent E-mails"),value:e.stats.email_deliveries_outgoing,id:"sentEmails"},{label:e.$gettext("Received E-mails"),value:e.stats.email_deliveries_incoming},{label:e.$gettext("# of MySQL DBs"),value:e.stats.mysql},{label:e.$gettext("Domain Pointers"),value:e.stats.domainptr},{label:e.$gettext("FTP Accounts"),value:e.stats.ftp}]}},[s("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"label:bandwidth"},slot:"label:bandwidth"},[s("ui-actions",{attrs:{position:"right"}},[s("ui-link",{attrs:{slot:"toggle"},slot:"toggle"},[s("translate",[e._v("Bandwidth")]),e._v(" "),s("ui-icon",{attrs:{id:"caret-right",size:"small"}})],1),e._v(" "),s("ui-link",{attrs:{name:"user/bandwidth",params:{year:String((new Date).getFullYear()),month:String((new Date).getMonth()+1)}}},[s("translate",[e._v("Details")])],1)],1)],1),e._v(" "),s("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"label:quota"},slot:"label:quota"},[s("ui-actions",{attrs:{position:"right"}},[s("ui-link",{attrs:{slot:"toggle"},slot:"toggle"},[s("translate",[e._v("Disk Usage")]),e._v(" "),s("ui-icon",{attrs:{id:"caret-right",size:"small"}})],1),e._v(" "),s("ui-link",{on:{click:e.updateDiskUsage}},[s("translate",[e._v("Update")])],1),e._v(" "),s("ui-link",{attrs:{name:"user/disk-usage"}},[s("translate",[e._v("Details")])],1)],1)],1),e._v(" "),e.stats.email_deliveries_outgoing_today?s("ui-progress-label",{attrs:{slot:"value:sentEmails",value:Number(e.stats.email_deliveries_outgoing_today),limit:e.stats.email_deliveries_outgoing.limit,"hide-limit":""},slot:"value:sentEmails"},[s("translate",{attrs:{slot:"value","translate-params":{sent:e.stats.email_deliveries_outgoing.usage,today:e.stats.email_deliveries_outgoing_today,limit:e.stats.email_deliveries_outgoing.limit}},slot:"value"},[e._v("\n                            %{ sent } (Today: %{ today } / %{ limit })\n                        ")])],1):e._e()],1)],1),e._v(" "),s("div",{attrs:{slot:"tab:account"},slot:"tab:account"},[s("usage-table",{attrs:{items:[{label:e.$gettext("Name"),value:e.stats.name},{label:e.$gettext("E-mail"),value:e.stats.email},{label:e.$gettext("IP"),value:e.stats.ip},{label:e.$gettext("Name Server 1"),value:e.stats.ns1},{label:e.$gettext("Name Server 2"),value:e.stats.ns2},{label:e.$gettext("Shell Access (SSH)"),value:e.stats.ssh},{label:e.$gettext("Secure Socket Layer (SSL)"),value:e.stats.ssl},{label:e.$gettext("CGI-Bin"),value:e.stats.cgi},{label:e.$gettext("PHP"),value:e.stats.php},{label:e.$gettext("SpamAssassin"),value:e.stats.spam},{label:e.$gettext("Catch-All E-mail"),value:e.stats.catchall},{label:e.$gettext("Anonymous FTP"),value:e.stats.aftp},{label:e.$gettext("Cron Jobs"),value:e.stats.cron},{label:e.$gettext("System Info"),value:e.stats.sysinfo},{label:e.$gettext("Login Keys"),value:e.stats.login_keys},{label:e.$gettext("DNS Control"),value:e.stats.dnscontrol},{label:e.$gettext("Suspend at Limit"),value:e.stats.suspend_at_limit}]}}),e._v(" "),Object.keys(e.$api.stats.customItems).length?s("app-page-section",[s("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n                        Custom Items\n                    ")]),e._v(" "),e._l(e.$api.stats.customItems,(function(t){return s("ui-form-element",{key:t.name},[s("span",{attrs:{slot:"title"},domProps:{textContent:e._s(t.label)},slot:"title"}),e._v(" "),"checkbox"===t.type?s("input-checkbox",{attrs:{slot:"content",disabled:""},slot:"content",model:{value:t.value,callback:function(s){e.$set(t,"value",s)},expression:"customItem.value"}},[e._v("\n                            "+e._s(t.description)+"\n                        ")]):s("input-text",{attrs:{slot:"content",disabled:"",value:"select"===t.type?t.options[t.value]:t.value},slot:"content"},[t.description?s("ui-button",{attrs:{slot:"additions:right"},slot:"additions:right"},[e._v("\n                                "+e._s(t.description)+"\n                            ")]):e._e()],1)],1)}))],2):e._e()],1)])],1),e._v(" "),s("template",{slot:"bottom:links"},[e.$_cmd("/CMD_USER_HISTORY")?s("ui-link",{attrs:{bullet:"",name:"user/history"}},[s("translate",[e._v("User History")])],1):e._e(),e._v(" "),e.$_cmd("/CMD_FILE_MANAGER")?s("ui-link",{attrs:{bullet:"",href:"/CMD_FILE_MANAGER?path=/domains/"+e.$domain+"/logs",target:"_blank"}},[s("translate",[e._v("Backed up Web Logs")])],1):e._e(),e._v(" "),e.$_cmd("/CMD_LICENSE_VERIFY")?s("ui-link",{attrs:{bullet:""},on:{click:e.verifyLicense}},[s("translate",[e._v("Verify License")])],1):e._e()],1),e._v(" "),s("ui-dialog",{attrs:{id:"EDIT_ACCOUNT_CONFIG"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Edit Account Configuration\n        ")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",{attrs:{group:"accountConfiguration",validators:{required:!0},vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Name\n                ")]),e._v(" "),s("input-text",{attrs:{slot:"content",type:"text"},slot:"content",model:{value:e.account.name,callback:function(t){e.$set(e.account,"name",t)},expression:"account.name"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"accountConfiguration",validators:{required:!0,email:!0},vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    E-mail\n                ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.account.email,callback:function(t){e.$set(e.account,"email",t)},expression:"account.email"}}),e._v(" "),s("translate",{attrs:{slot:"error:email"},slot:"error:email"},[e._v("\n                    Should be valid email\n                ")])],1),e._v(" "),e.skinOptions?s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Skin\n                ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:e.skinOptions},slot:"content",model:{value:e.skin,callback:function(t){e.skin=t},expression:"skin"}})],1):e._e(),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    AWstats\n                ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:{0:e.$gettext("Off"),1:e.$gettext("On")}},slot:"content",model:{value:e.account.awstats,callback:function(t){e.$set(e.account,"awstats",t)},expression:"account.awstats"}})],1),e._v(" "),e.$api.stats.limitNotice?s("ui-form-element",{attrs:{vertical:"","feature-i-d":"2242"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Limit Notice\n                ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:{0:e.$gettext("Off"),1:e.$gettext("On"),2:"1"===e.$api.stats.limitNotice.defaultValue?e.$gettext("Default (On)"):e.$gettext("Default (Off)")}},slot:"content",model:{value:e.account.limitNotice,callback:function(t){e.$set(e.account,"limitNotice",t)},expression:"account.limitNotice"}})],1):e._e()],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"safe","validate-group":"accountConfiguration"},on:{click:e.saveAccountConfig},slot:"buttons"},[s("translate",[e._v("Save")])],1)],2)],2)}),[],!1,null,null,null);"function"==typeof i()&&i()(r);var u=r.exports},"./src/js/pages/user/stats/index.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var a=s("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/local/stats/webalizer-table.vue?vue&type=style&index=0&lang=scss&");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("66a0700c",a,!0,{})}}]);