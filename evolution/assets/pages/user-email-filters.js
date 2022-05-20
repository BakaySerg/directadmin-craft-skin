(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[303],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/email/_components/filter-input.vue?vue&type=script&lang=js&":function(e,t,o){"use strict";o("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,o("./node_modules/core-js/modules/es.number.constructor.js");var s={props:{value:{type:[String,Number],required:!0},type:{type:String,required:!0}},data:function(){return{dataValue:this.value}},computed:{input:function(){return"size"===this.type?"input-size":"input-text"},validators:function(){var e={required:!0};return"email"!==this.type&&"domain"!==this.type||(e[this.type]=!0),e}},watch:{type:function(){this.dataValue="",this.$emit("input","")},dataValue:function(e){this.$emit("input",e)}},methods:{submit:function(){this.$emit("block")}}};t.Z=s},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/email/filters.vue?vue&type=script&lang=js&":function(e,t,o){"use strict";o("./node_modules/core-js/modules/es.array.iterator.js"),o("./node_modules/core-js/modules/es.string.iterator.js"),o("./node_modules/core-js/modules/es.weak-map.js"),o("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o("./node_modules/core-js/modules/es.object.define-property.js"),o("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var s=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=s(o("./node_modules/@babel/runtime/regenerator/index.js")),i=s(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));o("./node_modules/core-js/modules/es.array.map.js"),o("./node_modules/core-js/modules/es.array.index-of.js"),o("./node_modules/core-js/modules/es.object.to-string.js"),o("./node_modules/core-js/modules/es.regexp.to-string.js"),o("./node_modules/core-js/modules/es.array.filter.js");var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=u(t);if(o&&o.has(e))return o.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(s,i,a):s[i]=e[i]}s.default=e,o&&o.set(e,s);return s}(o("./src/js/api/commands/user/email/filters.js")),l=s(o("./src/js/pages/user/email/_components/filter-input.vue"));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(u=function(e){return e?o:t})(e)}var d,c,p,m={preload:a.getFilters,api:[{command:a.getFilters,bind:"filters"}],components:{FilterInput:l.default},data:function(){return{add:{type:"email",value:""},adult:!1,action:"drop",checkedRows:[],showAddFilter:!0}},computed:{checkedFilters:function(){var e=this;return this.checkedRows.map((function(t){return e.$api.filters.rows.indexOf(t)}))}},watch:{$domain:{handler:(p=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getFilters();case 2:this.checkedRows=[],this.adult=this.$api.filters.options.adult,this.action=this.$api.filters.options.action;case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})}},created:function(){var e=this;this.adult=this.$api.filters.options.adult,this.action=this.$api.filters.options.action,this.$watch("add.type",(function(){e.add.value=""})),this.filterTypeStrings={email:{label:this.$gettext("E-mail"),tooltip:this.$gettext("Block a specific E-mail address")},domain:{label:this.$gettext("Domain"),tooltip:this.$gettext("Block mail from an entire domain")},word:{label:this.$gettext("Stop word"),tooltip:this.$gettext("Block all e-mails containing stop words")},size:{label:this.$gettext("Size"),tooltip:this.$gettext("Block all e-mails larger than (KB)")}}},methods:{reloadFilters:function(){a.getFilters(),this.checkedRows=[]},updateAdult:function(){a.setOption({option:"adult",value:this.adult})},updateAction:function(){a.setOption({option:"action",value:this.action})},addFilter:(c=(0,i.default)(r.default.mark((function e(){var t,o,s,n=this;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.showAddFilter=!1,this.$nextTick((function(){n.showAddFilter=!0})),t=this.add.value,o=this.add.type,t=t.toString(),"email"===this.add.type?t=this.$p6e.email2ascii(t):"size"===this.add.type&&(t="".concat(t,"B")),e.next=8,a.createFilter({type:this.add.type,value:t});case 8:if(!e.sent){e.next=20;break}if(this.$reset(),this.adult=this.$api.filters.options.adult,this.action=this.$api.filters.options.action,"size"!==o){e.next=18;break}if(!(s=this.$api.filters.rows.filter((function(e){return"size"===e.type}))).length){e.next=18;break}return e.next=18,a.deleteFilters({select:s.map((function(e){return n.$api.filters.rows.indexOf(e)}))});case 18:this.reloadFilters(),this.add.type=o;case 20:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),deleteFilters:(d=(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.deleteFilters({select:this.checkedFilters});case 2:e.sent&&(this.checkedRows=[],this.reloadFilters());case 4:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})}};t.Z=m},"./src/js/api/commands/user/email/filters.js":function(e,t,o){"use strict";o("./node_modules/core-js/modules/es.object.keys.js"),o("./node_modules/core-js/modules/es.symbol.js"),o("./node_modules/core-js/modules/es.array.filter.js"),o("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),o("./node_modules/core-js/modules/web.dom-collections.for-each.js"),o("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),o("./node_modules/core-js/modules/es.object.define-properties.js"),o("./node_modules/core-js/modules/es.object.define-property.js");var s=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.setOption=t.getFilters=t.deleteFilters=t.createFilter=void 0;var n=s(o("./node_modules/@babel/runtime/helpers/defineProperty.js"));o("./node_modules/core-js/modules/es.regexp.exec.js"),o("./node_modules/core-js/modules/es.string.replace.js"),o("./node_modules/core-js/modules/es.object.to-string.js"),o("./node_modules/core-js/modules/es.promise.js"),o("./node_modules/core-js/modules/es.array.includes.js");var r=s(o("./src/js/api/command/index.js"));function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){(0,n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l=r.default.get({id:"FILTERS",url:"/CMD_EMAIL_FILTER",params:{bytes:!0},domain:!0,after:function(e){return function(t){return{options:{action:(t.action||"action=drop").replace("action=",""),adult:"ON"===t.adult},rows:e.toArray(t.filters)}}}});t.getFilters=l;var u=r.default.post({url:"/CMD_EMAIL_FILTER",params:{action:"add"},domain:!0,schema:{type:r.default.REQUIRED_STRING,value:r.default.REQUIRED_STRING}});t.createFilter=u;var d=r.default.post({url:"/CMD_EMAIL_FILTER",domain:!0,params:{option:a(a({},r.default.REQUIRED_STRING),{},{validator:function(e){return["adult","action"].includes(e)}}),value:{required:!0}},before:function(e){var t=e.option,o=e.value;return"adult"===t?{action:"adult",enabled:o,add:o?"Enable":"Disable"}:{action:"action",value:o}}});t.setOption=d;var c=r.default.select({url:"/CMD_EMAIL_FILTER",params:{action:"delete"},domain:!0});t.deleteFilters=c},"./src/js/pages/user/email/_components/filter-input.vue":function(e,t,o){"use strict";o.r(t),o.d(t,{__esModule:function(){return s.X},default:function(){return i}});var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/email/_components/filter-input.vue?vue&type=script&lang=js&"),n=s.Z,r=(0,o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ui-form-element",e._b({key:e.type,attrs:{vertical:"",group:"filterInput"}},"ui-form-element",{validators:e.validators},!1),[o("ui-input-group",{attrs:{slot:"content"},slot:"content"},[o(e.input,{key:e.type,tag:"component",attrs:{slot:"input",units:"KB"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},slot:"input",model:{value:e.dataValue,callback:function(t){e.dataValue=t},expression:"dataValue"}}),e._v(" "),o("ui-button",{attrs:{slot:"additions:right",theme:"safe","validate-group":"filterInput"},on:{click:e.submit},slot:"additions:right"},[o("translate",[e._v("Block")])],1)],1),e._v(" "),o("translate",{attrs:{slot:"error:email"},slot:"error:email"},[e._v("\n        Should be valid email\n    ")]),e._v(" "),o("translate",{attrs:{slot:"error:domain"},slot:"error:domain"},[e._v("\n        Should be valid domain\n    ")])],1)}),[],!1,null,null,null),i=r.exports},"./src/js/pages/user/email/filters.vue":function(e,t,o){"use strict";o.r(t),o.d(t,{__esModule:function(){return s.X},default:function(){return u}});var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/email/filters.vue?vue&type=script&lang=js&"),n=s.Z,r=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),i=o("./src/js/pages/user/email/filters.vue?vue&type=custom&index=0&blockType=route"),a=o.n(i),l=(0,r.Z)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("app-page",[o("app-page-section",[o("ui-r-table",e._b({key:e.add.type+"-type-select",attrs:{"checked-rows":e.checkedRows,editable:!1},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"col:type",fn:function(t){var o=t.type;return[e._v("\n                "+e._s(e.filterTypeStrings[o].label)+"\n            ")]}},{key:"col:value",fn:function(t){var o=t.value,s=t.item;return["size"===s.type?[e._v("\n                    "+e._s(e._f("humanReadableSize")(o))+"\n                ")]:"email"===s.type?[e._v("\n                    "+e._s(e._f("p6eUnicodeEmail")(o))+"\n                ")]:[e._v("\n                    "+e._s(o)+"\n                ")]]}}])},"ui-r-table",{rows:e.$api.filters.rows,columns:[{id:"type",label:e.$gettext("Block By"),width:"200px"},{id:"value",label:e.$gettext("Value"),grow:!0}],rowsCount:e.$api.filters.rows.length,isCheckable:!0,isSortable:!1,verticalLayout:e.$_Client.isPhone},!1),[o("template",{slot:"table:actions"},[o("ui-table-action",{on:{click:function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}}},[o("translate",[e._v("Delete")])],1)],1),e._v(" "),e._v(" "),e._v(" "),e.$_Client.isPhone?e._e():[e._v("\n                x\n                "),o("ui-form-element",{attrs:{slot:"col:after:type",vertical:""},slot:"col:after:type"},[o("input-select",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],attrs:{slot:"content",options:{email:e.$gettext("E-mail"),domain:e.$gettext("Domain"),word:e.$gettext("Stop word"),size:e.$gettext("Size")}},slot:"content",model:{value:e.add.type,callback:function(t){e.$set(e.add,"type",t)},expression:"add.type"}}),e._v(" "),o("ui-tooltip",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!1},expression:"{ grow: false }"},{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}],attrs:{slot:"content",theme:"primary"},slot:"content"},[e._v("\n                        "+e._s(e.filterTypeStrings[e.add.type].tooltip)+"\n                        "),"word"===e.add.type?o("translate",{attrs:{tag:"p"}},[e._v('\n                            Note: the word filter matches partial words. For\n                            example, if you block the word "put" and the\n                            email contains "computer", then the email will\n                            be blocked. If you expect it to be its own word,\n                            then block " put ", with spaces beside it to\n                            avoid partial matching.\n                        ')]):e._e()],1)],1),e._v(" "),e.showAddFilter?o("filter-input",{attrs:{slot:"col:after:value",type:e.add.type},on:{block:e.addFilter},slot:"col:after:value",model:{value:e.add.value,callback:function(t){e.$set(e.add,"value",t)},expression:"add.value"}}):e._e()]],2),e._v(" "),e.$_Client.isPhone?[o("ui-form-element",{attrs:{vertical:""}},[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Block By\n                ")]),e._v(" "),o("input-select",{attrs:{slot:"content",options:{email:e.$gettext("E-mail"),domain:e.$gettext("Domain"),word:e.$gettext("Stop word"),size:e.$gettext("Size")}},slot:"content",model:{value:e.add.type,callback:function(t){e.$set(e.add,"type",t)},expression:"add.type"}})],1),e._v(" "),o("ui-form-element",{attrs:{vertical:""}},[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Value\n                ")]),e._v(" "),e.showAddFilter?o("filter-input",{attrs:{slot:"content",type:e.add.type},on:{block:e.addFilter},slot:"content",model:{value:e.add.value,callback:function(t){e.$set(e.add,"value",t)},expression:"add.value"}}):e._e()],1),e._v(" "),o("ui-form-element",{attrs:{vertical:""}},[o("span",{attrs:{slot:"content"},slot:"content"},[e._v("\n                    "+e._s(e.filterTypeStrings[e.add.type].tooltip)+"\n                    "),"word"===e.add.type?o("translate",{attrs:{tag:"p"}},[e._v('\n                        Note: the word filter matches partial words. For\n                        example, if you block the word "put" and the email\n                        contains "computer", then the email will be blocked.\n                        If you expect it to be its own word, then block "\n                        put ", with spaces beside it to avoid partial\n                        matching.\n                    ')]):e._e()],1)])]:e._e()],2),e._v(" "),o("app-page-section",[o("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Options\n        ")]),e._v(" "),o("ui-form-element",[o("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}],attrs:{slot:"title"},slot:"title"},[o("translate",[e._v("Adult Filter:")]),e._v(" "),o("ui-tooltip",[e._v("\n                    "+e._s(e.$gettext("Blocks out common adult phrases, words, an addresses"))+"\n                ")])],1),e._v(" "),o("input-checkbox",{attrs:{slot:"content"},on:{change:e.updateAdult},slot:"content",model:{value:e.adult,callback:function(t){e.adult=t},expression:"adult"}},[e._v("\n                "+e._s(e.adult?e.$gettext("Enabled"):e.$gettext("Disabled"))+"\n            ")])],1),e._v(" "),o("ui-form-element",[o("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Action for filter matches:\n            ")]),e._v(" "),o("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:e.$_Client.isPhone?"start":"center",dir:e.$_Client.isPhone?"column":"row"},expression:"{\n                    cross: $_Client.isPhone ? 'start' : 'center',\n                    dir: $_Client.isPhone ? 'column' : 'row',\n                }"},{name:"gutter",rawName:"v-gutter",value:[0,1],expression:"[0, 1]"}],attrs:{slot:"content"},slot:"content"},[o("input-radio",{attrs:{value:"drop"},on:{change:e.updateAction},model:{value:e.action,callback:function(t){e.action=t},expression:"action"}},[o("translate",[e._v("Drop E-mail")])],1),e._v(" "),o("input-radio",{attrs:{value:"email"},on:{change:e.updateAction},model:{value:e.action,callback:function(t){e.action=t},expression:"action"}},[o("translate",[e._v("Send to spambox")])],1)],1)],1)],1),e._v(" "),o("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("filter","filters",e.checkedRows.length)},on:{"click:confirm":e.deleteFilters}})],1)}),[],!1,null,null,null);"function"==typeof a()&&a()(l);var u=l.exports},"./src/js/pages/user/email/filters.vue?vue&type=custom&index=0&blockType=route":function(){}}]);