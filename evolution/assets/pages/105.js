(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1769:function(e,t,n){"use strict";n.r(t);var r=n(3968),s=n(2313);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);var i=n(0),o=n(3406),l=n.n(o),u=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},2313:function(e,t,n){"use strict";n.r(t);var r=n(2314),s=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=s.a},2314:function(e,t,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var r=n(1),s=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(36)),i=r(n(37));n(34),n(57),n(12),n(15),n(5);var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(3070)),l=r(n(3405));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var c,f={preload:o.getServers,api:[{command:o.getServers,bind:"servers"}],components:{CreateNameserversDialog:l.default},data:function(){return{ns1:"",ns2:"",checkedRows:[]}},computed:{checkedIPs:function(){return this.checkedRows.map((function(e){return e.ip}))},canDelete:function(){var e=this;if(2!==this.checkedRows.length||this.checkedRows.some((function(e){return!e.ns})))return!1;var t=this.$api.servers.domains.find((function(t){return e.checkedRows[0].ns.includes(t)}));return this.checkedRows[1].ns.includes(t)},actions:function(){return{create:this.$api.servers.ips.filter((function(e){return!e.ns})).length>=2,delete:this.canDelete}}},created:function(){this.ns1=this.$p6e.toU(this.$api.servers.nameservers.ns1),this.ns2=this.$p6e.toU(this.$api.servers.nameservers.ns2)},methods:{reloadRows:function(){o.getServers(),this.checkedRows=[]},updateDefaults:function(){o.setDefault({ns1:this.$p6e.toA(this.ns1),ns2:this.$p6e.toA(this.ns2)}).then(this.reloadRows)},deleteNameservers:(c=(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.deleteServers({select:this.checkedIPs}).then(this.reloadRows);case 1:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})}};t.default=f},2315:function(e,t,n){"use strict";n.r(t);var r=n(2316),s=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=s.a},2316:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(36)),a=r(n(37));n(34),n(26);var i,o=n(3070),l={api:[{command:o.getServers,bind:"servers"}],props:{forceVirtual:{type:Boolean,required:!1,default:!1}},data:function(){return{domain:"",ns1:{name:"ns1",ip:""},ns2:{name:"ns2",ip:""},virtual:this.forceVirtual}},computed:{apiData:function(){return this.$api.servers},domains:function(){return this.apiData.domains},ips:function(){return this.apiData.ips.map((function(e){return e.ip}))},select:function(){return[this.ns1.ip,this.ns2.ip]},suffix:function(){return this.domain?".".concat(this.domain):""},requestData:function(){return{domain:this.domain,select:this.select,ns1:this.ns1.name,ns2:this.ns2.name,virtual:this.virtual}}},methods:{selectDefaultDomain:function(){this.domain=this.domains[0]||""},create:(i=(0,a.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.createServer)(this.requestData);case 2:(0,o.getServers)(),this.$emit("create"),this.$reset();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}};t.default=l},3070:function(e,t,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.setDefault=t.createServer=t.deleteServers=t.getServers=void 0,n(57);var s=r(n(2)),a=r(n(78));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l="/CMD_NAME_SERVER",u=a.default.get({id:"NAMESERVERS",url:l,after:function(e){return e.flow(e.project({ips:"data",domains:"domains",defaultDomain:"domains","nameservers.ns1":"ns1","nameservers.ns2":"ns2"}),e.mapProps({ips:e.flow(e.mapValues((function(e,t){return o(o({},e),{},{ip:t})})),e.toArray,e.mapArray(e.getProps(["ip","status","value","ns"]))),domains:e.flow(e.mapValues(e.getProp("value")),e.toArray),defaultDomain:e.flow(e.find(e.getProp("selected")),e.getProp("value"))}))}});t.getServers=u;var c=a.default.select({url:l,params:{delete:!0}});t.deleteServers=c;var f=a.default.select({url:l,params:{create:!0},schema:{ns1:a.default.REQUIRED_STRING,ns2:a.default.REQUIRED_STRING,domain:a.default.REQUIRED_STRING,virtual:a.default.REQUIRED_BOOL}});t.createServer=f;var d=a.default.post({url:l,params:{action:"modify"},schema:{ns1:a.default.REQUIRED_STRING,ns2:a.default.REQUIRED_STRING}});t.setDefault=d},3405:function(e,t,n){"use strict";n.r(t);var r=n(4122),s=n(2315);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);var i=n(0),o=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);t.default=o.exports},3406:function(e,t){},3968:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",{attrs:{actions:[{label:e.$gettext("Create Name Servers"),theme:"primary",icon:"#plus-fill",handler:e.$dialog("CREATE_NAMESERVERS_DIALOG").open}]}},[n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("CREATE_NAMESERVERS_DIALOG").open()}},slot:"header:buttons"},[n("translate",[e._v("Create Name Servers")])],1),e._v(" "),n("app-page-section",[n("ui-r-table",{attrs:{columns:[{id:"ip",label:e.$gettext("IP"),editable:!1},{id:"status",label:e.$gettext("Status")},{id:"value",label:e.$gettext("User(s)")},{id:"ns",label:e.$gettext("Name Server"),editable:!1}],rows:e.$api.servers.ips,"checked-rows":e.checkedRows,"vertical-layout":e.$_Client.isPhone,"disable-pagination":"","equal-width-layout":""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"col:ns",fn:function(t){var n=t.ns;return[e._v("\n                "+e._s(e._f("p6eUnicode")(n))+"\n            ")]}}])},[n("ui-table-action",{attrs:{slot:"table:actions",disabled:!e.actions.delete},on:{click:function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},slot:"table:actions"},[n("translate",[e._v("Delete")])],1)],1)],1),e._v(" "),n("app-page-section",[n("translate",{attrs:{slot:"section:title"},slot:"section:title"},[e._v("\n            Set the Name servers that will be assigned to new users\n        ")]),e._v(" "),n("ui-form-element",{attrs:{group:"setNameservers",validators:{required:!0,domain:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Name Server 1\n            ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ns1,callback:function(t){e.ns1=t},expression:"ns1"}})],1),e._v(" "),n("ui-form-element",{attrs:{group:"setNameservers",validators:{required:!0,domain:!0},underline:!1}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Name Server 2\n            ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.ns2,callback:function(t){e.ns2=t},expression:"ns2"}})],1),e._v(" "),n("ui-button",{attrs:{slot:"footer:buttons",theme:"safe","validate-group":"setNameservers"},on:{click:e.updateDefaults},slot:"footer:buttons"},[n("translate",[e._v("Save")])],1)],1),e._v(" "),n("create-nameservers-dialog",{attrs:{"force-virtual":!e.actions.create},on:{create:function(t){e.checkedRows=[]}}}),e._v(" "),n("ui-dialog-delete-items",{attrs:{subject:e.$gettext("nameserver")},on:{"click:confirm":e.deleteNameservers}})],1)},s=[]},4122:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-dialog",{attrs:{id:"CREATE_NAMESERVERS_DIALOG",size:"normal"},on:{"dialog:open":e.selectDefaultDomain,"dialog:close":e.$reset}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Create Name Servers\n    ")]),e._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Domain:\n            ")]),e._v(" "),n("input-select",{attrs:{slot:"content",options:e.domains},slot:"content",model:{value:e.domain,callback:function(t){e.domain=t},expression:"domain"}},[n("input-checkbox-button",{attrs:{slot:"additions:right",theme:"light",disabled:e.forceVirtual},slot:"additions:right",model:{value:e.virtual,callback:function(t){e.virtual=t},expression:"virtual"}},[n("translate",[e._v("Virtual")])],1)],1)],1),e._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Name Server 1:\n            ")]),e._v(" "),n("input-text",{attrs:{slot:"content",suffix:e.suffix},slot:"content",model:{value:e.ns1.name,callback:function(t){e.$set(e.ns1,"name",t)},expression:"ns1.name"}})],1),e._v(" "),e.virtual?e._e():n("ui-form-element",{attrs:{vertical:""}},[n("input-select",{attrs:{slot:"content",options:e.ips},slot:"content",model:{value:e.ns1.ip,callback:function(t){e.$set(e.ns1,"ip",t)},expression:"ns1.ip"}})],1),e._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Name Server 2:\n            ")]),e._v(" "),n("input-text",{attrs:{slot:"content",suffix:e.suffix},slot:"content",model:{value:e.ns2.name,callback:function(t){e.$set(e.ns2,"name",t)},expression:"ns2.name"}})],1),e._v(" "),e.virtual?e._e():n("ui-form-element",{attrs:{vertical:""}},[n("input-select",{attrs:{slot:"content",options:e.ips},slot:"content",model:{value:e.ns2.ip,callback:function(t){e.$set(e.ns2,"ip",t)},expression:"ns2.ip"}})],1)],1),e._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:e.create},slot:"buttons"},[n("translate",[e._v("Create Name Servers")])],1)],2)},s=[]}}]);