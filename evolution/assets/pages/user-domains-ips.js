(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[7248],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/domains/_components/add-ip-to-domain-dialog.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o,a=n(s("./node_modules/@babel/runtime/regenerator/index.js")),r=n(s("./node_modules/@babel/runtime/helpers/slicedToArray.js")),i=n(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),d=s("./src/js/api/commands/user/domains/index.js"),l={data:function(){return{ip:"",dns:!0}},api:[{command:d.getDomainIps,bind:"ips"}],computed:{available:function(){return this.$api.ips.available}},methods:{assignIP:(o=(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.assignDomainIps)({ip:this.ip,domain:this.$domain,dns:this.dns||null});case 2:e.sent&&(0,d.getDomainIps)();case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),onOpen:function(){var e=(0,r.default)(this.available,1);this.ip=e[0]}}};t.Z=l},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/domains/ips.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=n(s("./node_modules/@babel/runtime/regenerator/index.js")),a=n(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));s("./node_modules/core-js/modules/es.array.map.js");var r,i=s("./src/js/api/commands/user/domains/index.js"),d={components:{AddIpToDomainDialog:n(s("./src/js/pages/user/domains/_components/add-ip-to-domain-dialog.vue")).default},preload:i.getDomainIps,api:[{command:i.getDomainIps,bind:"ips"}],data:function(){return{checkedRows:[],removedns:!0}},computed:{assigned:function(){return this.$api.ips.assigned},available:function(){return this.$api.ips.available},checkedIPs:function(){return this.checkedRows.map((function(e){return e.ip}))}},methods:{deleteIPs:(r=(0,a.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.deleteDomainIps)({select:this.checkedIPs,removedns:this.removedns||null});case 2:(0,i.getDomainIps)(),this.$reset();case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})}};t.Z=d},"./src/js/api/commands/user/domains/index.js":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.symbol.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),s("./node_modules/core-js/modules/es.object.define-properties.js"),s("./node_modules/core-js/modules/es.object.define-property.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.setDomainPrivateHtml=t.setDomainPHPVersions=t.setDefaultDomain=t.renameDomain=t.modifyDomain=t.getDomains=t.getDomainPHPVersions=t.getDomainIps=t.getDomain=t.getCustomItems=t.deleteDomains=t.deleteDomainIps=t.createDomain=t.changeDomainStatus=t.assignDomainIps=void 0,s("./node_modules/core-js/modules/es.array.includes.js");var o=n(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=n(s("./src/js/api/command/index.js")),r=n(s("./src/js/api/commands/user/domains/$processors.ts"));function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,o.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var l=a.default.get({id:"GET_DOMAINS",url:"/CMD_ADDITIONAL_DOMAINS",params:{bytes:!0},response:[],mapResponse:r.default.getDomains});t.getDomains=l;var u=a.default.get({id:"GET_DOMAIN",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},schema:{domain:a.default.DOMAIN},mapResponse:r.default.getDomain});t.getDomain=u;var c=a.default.get({id:"DOMAIN_CUSTOM_ITEMS",url:"/HTM_ADD_DOMAIN",mapResponse:r.default.getDomain.custom_items});t.getCustomItems=c;var p=a.default.select({url:"/CMD_DOMAIN"}),m=p.extend({params:{default:!0}});t.setDefaultDomain=m;var f=p.extend({params:{reason:"Other",suspend:!0}});t.changeDomainStatus=f;var _=p.extend({params:{delete:!0,confirmed:!0,delete_data_aware:!0},schema:{delete_data:a.default.REQUIRED_BOOL}});t.deleteDomains=_;var v=a.default.post({url:"/CMD_DOMAIN",params:{action:"create"},schema:{domain:a.default.REQUIRED_STRING,bandwidth:a.default.OPTIONAL_STRING,unbandwidth:a.default.OPTIONAL_STRING,quota:a.default.OPTIONAL_STRING,uquota:a.default.OPTIONAL_STRING,ssl:a.default.OPTIONAL_STRING,cgi:a.default.OPTIONAL_STRING,php:a.default.OPTIONAL_STRING},notifySuccess:!0,notifyError:!0});t.createDomain=v;var D=a.default.post({url:"/CMD_CHANGE_DOMAIN",params:{json:!0},schema:{old_domain:a.default.REQUIRED_STRING,new_domain:a.default.REQUIRED_STRING}});t.renameDomain=D;var I=a.default.post({url:"/CMD_DOMAIN",params:{action:"modify",form_version:"1.1"},body:{domain:a.default.DOMAIN,bandwidth:a.default.REQUIRED_STRING,ubandwidth:a.default.REQUIRED_STRING,quota:a.default.REQUIRED_STRING,uquota:a.default.REQUIRED_STRING,ssl:a.default.REQUIRED_STRING,php:a.default.REQUIRED_STRING,cgi:a.default.REQUIRED_STRING,www_pointers:a.default.OPTIONAL_STRING,force_redirect:a.default.REQUIRED_STRING}});t.modifyDomain=I;var b=a.default.post({url:"/CMD_DOMAIN",params:{action:"private_html"},schema:{domain:a.default.DOMAIN,val:d(d({},a.default.REQUIRED_STRING),{},{validator:function(e){return["directory","symlink"].includes(e)}}),force_ssl:a.default.OPTIONAL_BOOL},notifySuccess:!1});t.setDomainPrivateHtml=b;var h=a.default.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",add:!0},schema:{domain:a.default.DOMAIN,ip:a.default.REQUIRED_STRING,dns:a.default.OPTIONAL_BOOL}});t.assignDomainIps=h;var g=a.default.get({id:"DOMAIN_IPS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view",ips:!0},schema:{domain:a.default.DOMAIN},after:function(e){return e.flow(e.project({assigned:"assigned_ips",available:"available_ips"}),e.mapProp("assigned",e.mapArray((function(e){return{ip:e}}))))}});t.getDomainIps=g;var O=a.default.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",delete:!0},schema:{domain:a.default.DOMAIN,select:a.default.ROWS,removedns:a.default.OPTIONAL_BOOL}});t.deleteDomainIps=O;var j=a.default.get({id:"DOMAIN_PHP_VERSIONS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},domain:!0,mapResponse:r.default.getPhpVersions});t.getDomainPHPVersions=j;var y=a.default.post({url:"/CMD_DOMAIN",method:"POST",params:{action:"php_selector",save:!0},domain:!0,schema:{php1_select:a.default.REQUIRED_STRING}});t.setDomainPHPVersions=y},"./src/js/api/commands/user/domains/$processors.ts":function(e,t,s){"use strict";s.r(t),s.d(t,{toDomain:function(){return i},getDomainInfo:function(){return d},processCheckbox:function(){return l},processText:function(){return u},processSelect:function(){return c},getMap:function(){return p},getCustomItems:function(){return f},getPhpVersions:function(){return _}});var n=s("./node_modules/ramda/es/index.js"),o=s("./src/js/api/commands/converters/index.ts"),a=function(){return a=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var o in t=arguments[s])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},r=n.pipe(Number,Number.isFinite),i=function(e){return{domain:e.domain,active:(0,o.toBoolean)(e.active),defaultdomain:(0,o.toBoolean)(e.defaultdomain),subdomain:(0,o.toNumber)(e.subdomain),bandwidth:(0,o.toUsage)({usage:r(e.bandwidth)?e.bandwidth:"0",limit:e.bandwidth_limit}),quota:(0,o.toUsage)({usage:r(e.quota)?e.quota:"0",limit:e.quota_limit}),pointers:n.pipe(n.defaultTo({}),n.keys,n.map(String))(e.pointers)}},d=function(e){return{bandwidth:e.bandwidth,quota:e.quota,ssl:"ON"===e.ssl,cgi:"ON"===e.cgi,php:"ON"===e.php,show_ips:"yes"===e.has_multiple_ips,show_php:"yes"===e.has_php_selector,force_ssl:"yes"===e.force_ssl,private_html:"link"===e.private_html?"symlink":"directory",force_redirect:e.force_redirect||"none",modsecurity:"yes"===e.modsecurity,nginx:"1"===e.nginx}},l=function(e){return{type:"checkbox",value:"ON"===e.value||"yes"===e.checked,description:e.desc||"",label:e.string||"",api_only:"yes"===e.api_only,hidden:"yes"===e.hidden}},u=function(e){return{type:"text",description:e.desc||"",label:e.string||"",value:e.value||"",api_only:"yes"===e.api_only,hidden:"yes"===e.hidden}},c=function(e){var t=Object.keys(e).filter((function(e){return/^item\d+val*$/.test(e)})).reduce((function(t,s){var n;return a(a({},t),((n={})[e[s]]=e[s.replace("val","txt")]||"",n))}),{});return{type:"select",description:e.desc||"",label:e.string||"",value:e.value||e.default||"",options:t,api_only:"yes"===e.api_only,hidden:"yes"===e.hidden}},p=function(e){return e.split("&").reduce((function(e,t){var s,n=t.split("="),o=n[0],r=void 0===o?"":o,i=n[1],d=void 0===i?"":i;return a(a({},e),((s={})[r]=d,s))}),{})},m=function(e){switch(e.type){case"listbox":return c(e);case"checkbox":return l(e);default:return u(e)}},f=function(e){var t=n.mapObjIndexed(p,e.custom_domain_items||{}),s=n.pickAll(n.keys(t),e),o=n.mergeDeepLeft(n.mapObjIndexed((function(e){return{value:e}}),s),t);return n.mapObjIndexed(m,o)},_=function(e){if("yes"===e.has_php_selector){if("object"==typeof e.php1_select)return{enabled:!0,legacy:"2"===e.php_selector_count,versions:(0,o.toSelectData)(e.php1_select)};var t=n.pick(n.map((function(e){return"php".concat(e,"_select")}),n.range(1,5)),e.options);return{enabled:!0,versions:{value:e.php1_select,options:t},legacy:"2"===e.php_selector_count}}return{enabled:!1,legacy:!1,versions:{options:{},value:""}}};t.default={getDomains:function(e){return n.map(i,n.values(e))},getDomain:{domain:d,custom_items:f},getPhpVersions:_}},"./src/js/pages/user/domains/_components/add-ip-to-domain-dialog.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return n.X},default:function(){return a}});var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/domains/_components/add-ip-to-domain-dialog.vue?vue&type=script&lang=js&"),o=n.Z,a=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"ADD_IP_TO_DOMAIN_DIALOG"},on:{"dialog:open":e.onOpen}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Add Another IP\n    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Select IP to Add\n            ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:e.available},slot:"content",model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}})],1),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.dns,callback:function(t){e.dns=t},expression:"dns"}},[s("translate",[e._v("Add DNS records for this IP")])],1)],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:e.assignIP},slot:"buttons"},[s("translate",[e._v("Save")])],1)],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/domains/ips.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return n.X},default:function(){return l}});var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/domains/ips.vue?vue&type=script&lang=js&"),o=n.Z,a=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),r=s("./src/js/pages/user/domains/ips.vue?vue&type=custom&index=0&blockType=route"),i=s.n(r),d=(0,a.Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{actions:e.available.length?[{label:e.$gettext("Add IP"),handler:e.$dialog("ADD_IP_TO_DOMAIN_DIALOG").open}]:[]}},[e.available.length?s("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("ADD_IP_TO_DOMAIN_DIALOG").open()}},slot:"header:buttons"},[s("translate",[e._v("Add IP")])],1):e._e(),e._v(" "),s("app-page-section",[s("ui-r-table",{attrs:{rows:e.assigned,"checked-rows":e.checkedRows,columns:[{id:"ip",label:e.$ngettext("Assigned IP","Assigned IPs",e.assigned.length)}]},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}},[e.checkedRows.length<e.assigned.length?s("ui-table-action",{attrs:{slot:"table:actions"},on:{click:function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},slot:"table:actions"},[s("translate",[e._v("Delete")])],1):e._e()],1)],1),e._v(" "),s("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("IP","IPs",e.checkedRows.length)},on:{"click:confirm":e.deleteIPs}},[s("input-checkbox",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],model:{value:e.removedns,callback:function(t){e.removedns=t},expression:"removedns"}},[s("translate",{attrs:{"translate-plural":"Remove DNS records for IPs","translate-n":e.checkedRows.length}},[e._v("\n                Remove DNS records for IP\n            ")])],1)],1),e._v(" "),s("add-ip-to-domain-dialog")],1)}),[],!1,null,null,null);"function"==typeof i()&&i()(d);var l=d.exports},"./src/js/pages/user/domains/ips.vue?vue&type=custom&index=0&blockType=route":function(){}}]);