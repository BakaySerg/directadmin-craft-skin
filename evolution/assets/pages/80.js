(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1804:function(t,e,a){"use strict";a.r(e);var n=a(4002),i=a(2558);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a(3606);var r=a(0),s=a(3608),u=a.n(s),l=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);"function"==typeof u.a&&u()(l),e.default=l.exports},1884:function(t,e,a){"use strict";var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.validateIPRangeList=e.validateDomain=e.validatePassword=e.validateSubdomain=e.validateUsername=e.validateDBUser=e.validateDatabase=e.validateDNSName=e.validateMXValue=e.validateDNSValue=e.validateFTP=e.validateEmail=e.validateForwarder=void 0;var i=n(a(78)),o=n(a(98)),r=n(a(1885)),s=i.default.get({url:"/CMD_JSON_VALIDATE",schema:{value:i.default.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:r.default.isValid,message:r.default.getMessage}}),u=s.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}});e.validateForwarder=u;var l=s.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}});e.validateEmail=l;var d=s.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0});e.validateFTP=d;var c=s.extend({params:{type:"dns"},domain:!0,schema:{record:i.default.REQUIRED_STRING}}),p=c.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:i.default.REQUIRED_STRING}});e.validateDNSValue=p;var m=p.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:function(t){return{value:"10",mx_value:t.value}}});e.validateMXValue=m;var f=c.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:i.default.REQUIRED_STRING,value:null}});e.validateDNSName=f;var v=s.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}});e.validateDatabase=v;var _=s.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}});e.validateDBUser=_;var h=s.extend({id:"VALIDATE_USERNAME",params:{type:"username"}});e.validateUsername=h;var D=s.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}});e.validateSubdomain=D;var b=s.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}});e.validatePassword=b;var I=s.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:function(t){var e=t.value;return{value:o.default.toASCII(e)}}});e.validateDomain=I;var O=s.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}});e.validateIPRangeList=O},1885:function(t,e,a){"use strict";a.r(e);var n=a(97);e.default={isValid:function(t){return void 0===t.error},getMessage:function(t){return Object(n.toAppHtml)(t.error||"")}}},1899:function(t,e,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.setDomainPHPVersions=e.getDomainPHPVersions=e.deleteDomainIps=e.getDomainIps=e.assignDomainIps=e.setDomainPrivateHtml=e.modifyDomain=e.renameDomain=e.createDomain=e.deleteDomains=e.changeDomainStatus=e.setDefaultDomain=e.getCustomItems=e.getDomain=e.getDomains=void 0,a(12);var i=n(a(2)),o=n(a(78)),r=n(a(1939));function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){(0,i.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l=o.default.get({id:"GET_DOMAINS",url:"/CMD_ADDITIONAL_DOMAINS",params:{bytes:!0},response:[],mapResponse:r.default.getDomains});e.getDomains=l;var d=o.default.get({id:"GET_DOMAIN",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},schema:{domain:o.default.DOMAIN},mapResponse:r.default.getDomain});e.getDomain=d;var c=o.default.get({id:"DOMAIN_CUSTOM_ITEMS",url:"/HTM_ADD_DOMAIN",mapResponse:r.default.getDomain.custom_items});e.getCustomItems=c;var p=o.default.select({url:"/CMD_DOMAIN"}),m=p.extend({params:{default:!0}});e.setDefaultDomain=m;var f=p.extend({params:{reason:"Other",suspend:!0}});e.changeDomainStatus=f;var v=p.extend({params:{delete:!0,confirmed:!0,delete_data_aware:!0},schema:{delete_data:o.default.REQUIRED_BOOL}});e.deleteDomains=v;var _=o.default.post({url:"/CMD_DOMAIN",params:{action:"create"},schema:{domain:o.default.REQUIRED_STRING,bandwidth:o.default.OPTIONAL_STRING,unbandwidth:o.default.OPTIONAL_STRING,quota:o.default.OPTIONAL_STRING,uquota:o.default.OPTIONAL_STRING,ssl:o.default.OPTIONAL_STRING,cgi:o.default.OPTIONAL_STRING,php:o.default.OPTIONAL_STRING},notifySuccess:!0,notifyError:!0});e.createDomain=_;var h=o.default.post({url:"/CMD_CHANGE_DOMAIN",params:{json:!0},schema:{old_domain:o.default.REQUIRED_STRING,new_domain:o.default.REQUIRED_STRING}});e.renameDomain=h;var D=o.default.post({url:"/CMD_DOMAIN",params:{action:"modify",form_version:"1.1"},body:{domain:o.default.DOMAIN,bandwidth:o.default.REQUIRED_STRING,ubandwidth:o.default.REQUIRED_STRING,quota:o.default.REQUIRED_STRING,uquota:o.default.REQUIRED_STRING,ssl:o.default.REQUIRED_STRING,php:o.default.REQUIRED_STRING,cgi:o.default.REQUIRED_STRING,www_pointers:o.default.OPTIONAL_STRING,force_redirect:o.default.REQUIRED_STRING}});e.modifyDomain=D;var b=o.default.post({url:"/CMD_DOMAIN",params:{action:"private_html"},schema:{domain:o.default.DOMAIN,val:u(u({},o.default.REQUIRED_STRING),{},{validator:function(t){return["directory","symlink"].includes(t)}}),force_ssl:o.default.OPTIONAL_BOOL},notifySuccess:!1});e.setDomainPrivateHtml=b;var I=o.default.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",add:!0},schema:{domain:o.default.DOMAIN,ip:o.default.REQUIRED_STRING,dns:o.default.OPTIONAL_BOOL}});e.assignDomainIps=I;var O=o.default.get({id:"DOMAIN_IPS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view",ips:!0},schema:{domain:o.default.DOMAIN},after:function(t){return t.flow(t.project({assigned:"assigned_ips",available:"available_ips"}),t.mapProp("assigned",t.mapArray((function(t){return{ip:t}}))))}});e.getDomainIps=O;var g=o.default.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",delete:!0},schema:{domain:o.default.DOMAIN,select:o.default.ROWS,removedns:o.default.OPTIONAL_BOOL}});e.deleteDomainIps=g;var y=o.default.get({id:"DOMAIN_PHP_VERSIONS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},domain:!0,mapResponse:r.default.getPhpVersions});e.getDomainPHPVersions=y;var A=o.default.post({url:"/CMD_DOMAIN",method:"POST",params:{action:"php_selector",save:!0},domain:!0,schema:{php1_select:o.default.REQUIRED_STRING}});e.setDomainPHPVersions=A},1939:function(t,e,a){"use strict";a.r(e),a.d(e,"toDomain",(function(){return s})),a.d(e,"getDomainInfo",(function(){return u})),a.d(e,"processCheckbox",(function(){return l})),a.d(e,"processText",(function(){return d})),a.d(e,"processSelect",(function(){return c})),a.d(e,"getMap",(function(){return p})),a.d(e,"getCustomItems",(function(){return f})),a.d(e,"getPhpVersions",(function(){return v}));var n=a(9),i=a(97),o=function(){return(o=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},r=n.pipe(Number,Number.isFinite),s=function(t){return{domain:t.domain,active:Object(i.toBoolean)(t.active),defaultdomain:Object(i.toBoolean)(t.defaultdomain),subdomain:Object(i.toNumber)(t.subdomain),bandwidth:Object(i.toUsage)({usage:r(t.bandwidth)?t.bandwidth:"0",limit:t.bandwidth_limit}),quota:Object(i.toUsage)({usage:r(t.quota)?t.quota:"0",limit:t.quota_limit}),pointers:n.pipe(n.defaultTo({}),n.keys,n.map(String))(t.pointers)}},u=function(t){return{bandwidth:t.bandwidth,quota:t.quota,ssl:"ON"===t.ssl,cgi:"ON"===t.cgi,php:"ON"===t.php,show_ips:"yes"===t.has_multiple_ips,show_php:"yes"===t.has_php_selector,force_ssl:"yes"===t.force_ssl,private_html:"link"===t.private_html?"symlink":"directory",force_redirect:t.force_redirect||"none",modsecurity:"yes"===t.modsecurity,nginx:"1"===t.nginx}},l=function(t){return{type:"checkbox",value:"ON"===t.value||"yes"===t.checked,description:t.desc||"",label:t.string||"",api_only:"yes"===t.api_only,hidden:"yes"===t.hidden}},d=function(t){return{type:"text",description:t.desc||"",label:t.string||"",value:t.value||"",api_only:"yes"===t.api_only,hidden:"yes"===t.hidden}},c=function(t){var e=Object.keys(t).filter((function(t){return/^item\d+val*$/.test(t)})).reduce((function(e,a){var n;return o(o({},e),((n={})[t[a]]=t[a.replace("val","txt")]||"",n))}),{});return{type:"select",description:t.desc||"",label:t.string||"",value:t.value||t.default||"",options:e,api_only:"yes"===t.api_only,hidden:"yes"===t.hidden}},p=function(t){return t.split("&").reduce((function(t,e){var a,n=e.split("="),i=n[0],r=void 0===i?"":i,s=n[1],u=void 0===s?"":s;return o(o({},t),((a={})[r]=u,a))}),{})},m=function(t){switch(t.type){case"listbox":return c(t);case"checkbox":return l(t);default:return d(t)}},f=function(t){var e=n.mapObjIndexed(p,t.custom_domain_items||{}),a=n.pickAll(n.keys(e),t),i=n.mergeDeepLeft(n.mapObjIndexed((function(t){return{value:t}}),a),e);return n.mapObjIndexed(m,i)},v=function(t){if("yes"===t.has_php_selector){if("object"==typeof t.php1_select)return{enabled:!0,legacy:"2"===t.php_selector_count,versions:Object(i.toSelectData)(t.php1_select)};var e=n.pick(n.map((function(t){return"php"+t+"_select"}),n.range(1,5)),t.options);return{enabled:!0,versions:{value:t.php1_select,options:e},legacy:"2"===t.php_selector_count}}return{enabled:!1,legacy:!1,versions:{options:{},value:""}}};e.default={getDomains:function(t){return n.map(s,n.values(t))},getDomain:{domain:u,custom_items:f},getPhpVersions:v}},2558:function(t,e,a){"use strict";a.r(e);var n=a(2559),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e.default=i.a},2559:function(t,e,a){"use strict";a(10),a(5),a(6),a(11),a(16),a(14),a(23),a(25),a(18);var n=a(1),i=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a(36));a(8),a(7);var r=n(a(37)),s=n(a(2)),u=a(1899),l=a(1884),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=c(e);if(a&&a.has(t))return a.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var s=o?Object.getOwnPropertyDescriptor(t,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=t[r]}n.default=t,a&&a.set(t,n);return n}(a(9));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(c=function(t){return t?a:e})(t)}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f,v={preload:u.getCustomItems,api:[{command:u.getCustomItems,bind:"customItems"}],commands:{validateDomain:l.validateDomain},data:function(){return{domain:"",bandwidth:"1000",ubandwidth:!0,quota:"0",uquota:!0,ssl:!0,cgi:!1,php:!0,custom:{}}},computed:{customItemsData:function(){var t=d.keys(d.filter((function(t){return!t.api_only}),this.$api.customItems));return d.map((function(t){return"boolean"==typeof t?t?"ON":"OFF":t}),d.pick(t,this.custom))},requestData:function(){return m({ssl:this.ssl?"ON":null,cgi:this.cgi?"ON":null,php:this.php?"ON":null,bandwidth:this.ubandwidth?null:this.bandwidth,quota:this.uquota?null:this.quota,ubandwidth:this.ubandwidth?"unlimited":null,uquota:this.uquota?"unlimited":null},this.customItemsData)},visibleCustomItems:function(){return d.filter(d.complement(d.prop("hidden")),this.$api.customItems)}},created:function(){var t=this;Object.keys(this.$api.customItems).forEach((function(e){return t.$set(t.custom,e,t.$api.customItems[e].value)}))},methods:{getComponent:function(t){return{text:"input-text",checkbox:"input-checkbox",select:"input-select"}[t.type]},createDomain:(f=(0,r.default)(o.default.mark((function t(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$p6e.toA(this.domain),this.domain!==e&&this.$notifications.info({title:this.$gettext("Domain name punycoded"),content:this.$gettext("Domain name has been automatically converted to punycode format. Punycode is used to encode internationalized domain names (IDN) by converting Unicode characters to ASCII.")}),t.next=4,(0,u.createDomain)(m(m({},this.requestData),{},{domain:e}));case 4:if(!t.sent){t.next=9;break}return t.next=8,this.$store.dispatch("app/GET_TOKENS");case 8:this.$router.push({name:"user/domains"});case 9:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),checkQuota:function(){this.quota||(this.quota="0")},checkBandwidth:function(){this.bandwidth||(this.bandwidth="0")}}};e.default=v},3119:function(t,e,a){var n=a(3607);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("18b77c34",n,!0,{})},3606:function(t,e,a){"use strict";a(3119)},3607:function(t,e,a){},3608:function(t,e){},4002:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",[a("ui-button",{attrs:{slot:"footer:buttons",theme:"primary","validate-group":"createDomain"},on:{click:t.createDomain},slot:"footer:buttons"},[a("translate",[t._v("Create")])],1),t._v(" "),a("app-page-section",[a("ui-form-element",{attrs:{group:"createDomain",validators:{required:!0,api:t.$commands.validateDomain},vertical:t.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Domain:\n            ")]),t._v(" "),a("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                Do not use CAPS, www, or http:// in your domain name\n            ")]),t._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}})],1),t._v(" "),a("ui-form-element",{attrs:{vertical:t.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Bandwidth\n            ")]),t._v(" "),a("ui-input-group",{attrs:{slot:"content"},slot:"content"},[a("input-text",{staticClass:"grouped-input",style:{width:"1px"},attrs:{slot:"input",number:"",disabled:t.ubandwidth,suffix:"MB"},on:{blur:t.checkBandwidth},slot:"input",model:{value:t.bandwidth,callback:function(e){t.bandwidth=e},expression:"bandwidth"}}),t._v(" "),a("input-checkbox-button",{attrs:{slot:"additions:right"},slot:"additions:right",model:{value:t.ubandwidth,callback:function(e){t.ubandwidth=e},expression:"ubandwidth"}},[a("translate",{staticClass:"wrap:nowrap"},[t._v("\n                        Same as Main account\n                    ")])],1)],1)],1),t._v(" "),a("ui-form-element",{attrs:{vertical:t.$_Client.isPhone}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Disk Usage\n            ")]),t._v(" "),a("ui-input-group",{attrs:{slot:"content"},slot:"content"},[a("input-text",{staticClass:"grouped-input",style:{width:"1px"},attrs:{slot:"input",disabled:t.uquota,number:"",suffix:"MB"},on:{blur:t.checkQuota},slot:"input",model:{value:t.quota,callback:function(e){t.quota=e},expression:"quota"}}),t._v(" "),a("input-checkbox-button",{attrs:{slot:"additions:right"},slot:"additions:right",model:{value:t.uquota,callback:function(e){t.uquota=e},expression:"uquota"}},[a("translate",{staticClass:"wrap:nowrap"},[t._v("\n                        Same as Main account\n                    ")])],1)],1)],1),t._v(" "),a("ui-form-element",{attrs:{underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Options\n            ")]),t._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:t.$_Client.isMobile?"column":"row",cross:t.$_Client.isMobile?"start":"center"},expression:"{\n                    dir: $_Client.isMobile\n                        ? 'column'\n                        : 'row',\n                    cross: $_Client.isMobile\n                        ? 'start'\n                        : 'center'\n                }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}],attrs:{slot:"content"},slot:"content"},[a("input-checkbox",{model:{value:t.ssl,callback:function(e){t.ssl=e},expression:"ssl"}},[a("translate",[t._v("Secure SSL")])],1),t._v(" "),a("input-checkbox",{model:{value:t.cgi,callback:function(e){t.cgi=e},expression:"cgi"}},[a("translate",[t._v("CGI Access")])],1),t._v(" "),a("input-checkbox",{model:{value:t.php,callback:function(e){t.php=e},expression:"php"}},[a("translate",[t._v("PHP Access")])],1)],1)],1)],1),t._v(" "),Object.keys(t.visibleCustomItems).length?a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("\n            Custom Items\n        ")]),t._v(" "),t._l(t.visibleCustomItems,(function(e,n){return a("ui-form-element",{key:n},[a("span",{attrs:{slot:"title"},domProps:{textContent:t._s(e.label)},slot:"title"}),t._v(" "),e.description?a("span",{attrs:{slot:"tooltip"},domProps:{textContent:t._s(e.description)},slot:"tooltip"}):t._e(),t._v(" "),a(t.getComponent(e),{tag:"component",attrs:{slot:"content",options:e.options||{},disabled:e.api_only},slot:"content",model:{value:t.custom[n],callback:function(e){t.$set(t.custom,n,e)},expression:"custom[id]"}})],1)}))],2):t._e()],1)},i=[]}}]);