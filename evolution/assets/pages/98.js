(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1723:function(e,t,a){"use strict";a.r(t);var n=a(3924),l=a(2107);for(var o in l)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(o);a(3228);var r=a(0),s=a(3230),i=a.n(s),u=Object(r.a)(l.default,n.a,n.b,!1,null,"6a20e2e6",null);"function"==typeof i.a&&i()(u),t.default=u.exports},2016:function(e,t,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.resetZone=t.deleteZones=t.addZone=t.getZones=void 0;var l=n(a(2)),o=n(a(78));function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var i=o.default.get({id:"DNS_ZONES",url:"/CMD_DNS_ADMIN",domain:!1,schema:s(s({},o.default.PAGINATION),{},{filters:{type:Object,required:!1},domain:null}),before:function(e){var t=e.filters;if(t){var a={};t.domain&&(a.comparison1=t.searchType,a.value1=t.domain),t.local_data&&(a.comparison2="contains",a.value2=t.local_data),t.local_mail&&(a.comparison3="contains",a.value3=t.local_mail)}return{}},after:function(e){return function(t){return{info:{dns_ns:t.info.dns_ns,dns_ptr:t.info.dns_ptr},zones:e.toTable(e.mapArrayProps({local_data:e.convert.toAppBoolean,local_mail:e.convert.toAppBoolean}))(t)}}}});t.getZones=i;var u=o.default.post({url:"/CMD_DNS_ADMIN",params:{action:"create"},domain:!0,schema:{ip:o.default.REQUIRED_STRING,ns1:o.default.REQUIRED_STRING,ns2:o.default.REQUIRED_STRING,reverse:o.default.OPTIONAL_BOOL}});t.addZone=u;var c=o.default.select({url:"/CMD_DNS_ADMIN",params:{action:"delete"}});t.deleteZones=c;var d=o.default.post({url:"/CMD_DNS_ADMIN",params:{action:"select",reset:!0},domain:!0});t.resetZone=d},2107:function(e,t,a){"use strict";a.r(t);var n=a(2108),l=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t.default=l.a},2108:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o=n(a(36)),r=n(a(37)),s=a(2016),i={preload:s.getZones,commands:{getZones:s.getZones},api:[{command:s.getZones,bind:"zones"}],data:function(){return{records:[],filters:[{column:"domain",type:"startswith",value:""},{column:"local_data",type:"contains",value:""},{column:"local_mail",type:"contains",value:""}]}},methods:{deleteRecords:(l=(0,r.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.deleteZones)({select:this.records});case 2:this.$refs.zones.reloadTable(),this.$reset();case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})}};t.default=i},2897:function(e,t,a){var n=a(3229);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(4).default)("5bcfe6a8",n,!0,{})},3228:function(e,t,a){"use strict";a(2897)},3229:function(e,t,a){},3230:function(e,t){},3924:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{actions:[{name:"admin/dns/add",label:e.$gettext("Add DNS Zone"),icon:"#plus-fill"}]}},[a("ui-button-link",{attrs:{slot:"header:buttons",theme:"safe",name:"admin/dns/add"},slot:"header:buttons"},[a("translate",[e._v("Add DNS Zone")])],1),e._v(" "),a("app-page-section",[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Show domains that\n            ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex"},{name:"gutter",rawName:"v-gutter",value:[0,1],expression:"[0, 1]"}],attrs:{slot:"content"},slot:"content"},[a("ui-input-group",[a("input-select",{staticClass:"search-type-select",attrs:{slot:"additions:left",options:{startswith:e.$gettext("Starts With"),contains:e.$gettext("Contains"),equals:e.$gettext("Equals")}},slot:"additions:left",model:{value:e.filters[0].type,callback:function(t){e.$set(e.filters[0],"type",t)},expression:"filters[0].type"}}),e._v(" "),a("input-text",{attrs:{slot:"input"},slot:"input",model:{value:e.filters[0].value,callback:function(t){e.$set(e.filters[0],"value",t)},expression:"filters[0].value"}}),e._v(" "),a("ui-button",{attrs:{slot:"additions:right",theme:"light",size:"normal",icon:"close",title:e.$gettext("Clear Search")},on:{click:function(t){e.filters[0].value=""}},slot:"additions:right"})],1)],1)],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Local Data\n            ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex"},{name:"gutter",rawName:"v-gutter",value:[0,1],expression:"[0, 1]"}],attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:""},model:{value:e.filters[1].value,callback:function(t){e.$set(e.filters[1],"value",t)},expression:"filters[1].value"}},[a("translate",[e._v("Both")])],1),e._v(" "),a("input-radio",{attrs:{value:"yes"},model:{value:e.filters[1].value,callback:function(t){e.$set(e.filters[1],"value",t)},expression:"filters[1].value"}},[a("translate",[e._v("Enabled")])],1),e._v(" "),a("input-radio",{attrs:{value:"no"},model:{value:e.filters[1].value,callback:function(t){e.$set(e.filters[1],"value",t)},expression:"filters[1].value"}},[a("translate",[e._v("Disabled")])],1)],1)],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Local Mail\n            ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex"},{name:"gutter",rawName:"v-gutter",value:[0,1],expression:"[0, 1]"}],attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:""},model:{value:e.filters[2].value,callback:function(t){e.$set(e.filters[2],"value",t)},expression:"filters[2].value"}},[a("translate",[e._v("Both")])],1),e._v(" "),a("input-radio",{attrs:{value:"yes"},model:{value:e.filters[2].value,callback:function(t){e.$set(e.filters[2],"value",t)},expression:"filters[2].value"}},[a("translate",[e._v("Enabled")])],1),e._v(" "),a("input-radio",{attrs:{value:"no"},model:{value:e.filters[2].value,callback:function(t){e.$set(e.filters[2],"value",t)},expression:"filters[2].value"}},[a("translate",[e._v("Disabled")])],1)],1)],1)],1),e._v(" "),a("app-page-section",[a("ui-api-table",e._b({ref:"zones",on:{"action:delete":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},scopedSlots:e._u([{key:"col:domain",fn:function(t){var n=t.domain;return a("ui-link",{attrs:{name:"admin/dns/edit",params:{dom:n}}},[e._v("\n                "+e._s(e._f("p6eUnicode")(n))+"\n            ")])}},{key:"col:local_data",fn:function(t){var n=t.local_data;return a("ui-badge",{attrs:{theme:n?"safe":"danger",label:n?e.$gettext("Yes"):e.$gettext("No")}})}},{key:"col:local_mail",fn:function(t){var n=t.local_mail;return a("ui-badge",{attrs:{theme:n?"safe":"danger",label:n?e.$gettext("Yes"):e.$gettext("No")}})}}]),model:{value:e.records,callback:function(t){e.records=t},expression:"records"}},"ui-api-table",{command:e.$commands.getZones,property:"zones",rowID:"domain",columns:{domain:{label:e.$gettext("Domain"),grow:!0},local_data:e.$gettext("Local Data"),local_mail:e.$gettext("Local Mail")},actions:{delete:e.$gettext("Delete Selected")},filters:e.filters,verticalLayout:e.$_Client.isPhone},!1))],1),e._v(" "),a("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("record","records",e.records.length)},on:{"click:confirm":e.deleteRecords}})],1)},l=[]}}]);