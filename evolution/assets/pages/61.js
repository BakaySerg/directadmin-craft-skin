(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1880:function(e,t,a){"use strict";a.r(t);var r=a(4078),n=a(2863);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var o=a(0),i=a(3896),u=a.n(i),l=Object(o.a)(n.default,r.a,r.b,!1,null,null,null);"function"==typeof u.a&&u()(l),t.default=l.exports},1886:function(e,t,a){"use strict";a.r(t),a.d(t,"preload",(function(){return E})),a.d(t,"GET",(function(){return I})),a.d(t,"POST",(function(){return y})),a.d(t,"PUT",(function(){return S})),a.d(t,"PATCH",(function(){return w})),a.d(t,"DELETE",(function(){return O})),a.d(t,"$gettext",(function(){return x}));var r=a(30),n=a.n(r),s=a(28),o=a(9),i=a(1893),u=a(1894),l=a(13),d=new n.a,c={401:"UNAUTHORIZED",404:"ENDPOINT_NOT_FOUND",405:"METHOD_NOT_ALLOWED"},p={BAD_REQUEST:d.$gettext("Bad Request: %{ message }"),UNAUTHORIZED:d.$gettext("Unauthorized"),ACCESS_DENIED:d.$gettext("Access Denied"),INTERNAL_ERROR:d.$gettext("Server Error: %{ message }"),METHOD_NOT_ALLOWED:d.$gettext("Method Not Allowed"),ENDPOINT_NOT_FOUND:d.$gettext("Endpoint Not Found")},f=function(e,t,a){void 0===a&&(a={});var r=d.$gettextInterpolate(t,a||{});return{status:e,message:r,type:a.type,data:o.omit(["type"],a),notify:function(){return s.Store.dispatch("notifications/NOTIFY",{theme:"danger",title:d.$gettext("Error"),content:r,route:s.Store.state.app.route.path||"/",time:new Date})}}},m=function(e,t,a,r){return new(a||(a=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},v=function(e,t){var a,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},b={data:{},statusCodes:{},errorMessages:{}},_=function(e,t,a){void 0===a&&(a={});var r=function(e,t){return(e+"_"+t.slice(5).replace(/\//,"_").replace(/\:/,"")).toUpperCase()}(e,t);a=o.mergeDeepRight(b,a);var n=Object(u.registerEndpoint)(r,a.data);return{endpoint:n,request:function(o){return m(void 0,void 0,void 0,(function(){var u,m,b;return v(this,(function(v){switch(v.label){case 0:return s.Store&&s.Store.state.commands.blockingRequest?[4,s.Store.state.commands.blockingRequest]:[3,2];case 1:v.sent(),v.label=2;case 2:n.params=o||{},n.state={isLoading:!0},v.label=3;case 3:return v.trys.push([3,5,,6]),[4,Object(i.request)({endpointID:r,url:t,method:e},n.params)];case 4:return u=v.sent(),"get"===e&&(n.data=u.data),n.state={isOk:!0,isDone:!0,isLoading:!1,error:null},[2,{state:"success",data:u.data,error:null}];case 5:return m=v.sent(),401===(b=function(e,t,a){var r;void 0===t&&(t={}),void 0===a&&(a={});var n=Object.assign(t,c),s=Object.assign(a,p);if(e.response){if(e.response.data&&e.response.data.type)if(void 0!==s[(o=e.response.data).type])return f(e.response.status,s[o.type],o);if(n[e.response.status]){var o={type:n[e.response.status]};e.response.data=o;var i=n[e.response.status];if(i&&s[i])return f(e.response.status,s[i],{type:i})}}else if(e.request)return l.emitter.emit("request:networkerror"),f(-1,d.$gettext("Network Error: Server is unreachable"),{type:"NETWORK_UNREACHABLE"});return f((null===(r=null==e?void 0:e.response)||void 0===r?void 0:r.status)||-1,d.$gettext("Unknown Error"),{type:"UNKNOWN_ERROR"})}(m,a.statusCodes,a.errorMessages)).status&&window.location.reload(),n.state={isOk:!1,isDone:!0,isLoading:!1,error:b},[2,{state:"error",error:b,data:null}];case 6:return[2]}}))}))}}},h=function(e,t,a){void 0===a&&(a={});var r=_(e,t,a),n=r.endpoint,s=r.request;return Object.freeze({get params(){return n.params},get state(){return n.state},request:s})},g=function(e,t,a,r){return new(a||(a=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},D=function(e,t){var a,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},R=function(e,t){return e.notify(),t(!1)},E=function(e,t){return void 0===t&&(t=R),function(a,r,n){return g(void 0,void 0,void 0,(function(){var s,o,i;return D(this,(function(u){switch(u.label){case 0:return[4,Promise.all(e.map((function(e){return e(a,r)})))];case 1:return s=u.sent(),void 0!==(o=s.find((function(e){return"error"===e.state})))?(i=o.error,[2,t(i,n)]):(n(),[2])}}))}))}},I=function(e,t){return function(e,t,a){void 0===a&&(a={});var r=_(e,t,a),n=r.endpoint,s=r.request;return Object.freeze({get data(){return n.data},set data(e){n.data=e},get params(){return n.params},get state(){return n.state},request:s,bindData:function(e){return function(){return e?e(n.data):n.data}}})}("get",e,t)},y=function(e,t){return h("post",e,t)},S=function(e,t){return h("put",e,t)},w=function(e,t){return h("patch",e,t)},O=function(e,t){return h("delete",e,t)},x=(new n.a).$gettext},1893:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var r=a(1),n=a(19);Object.defineProperty(t,"__esModule",{value:!0}),t.request=void 0;var s=r(a(36)),o=r(a(37));a(12),a(15),a(21),a(40),a(84);var i=r(a(505)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=s?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(9)),l=a(31),d=a(28);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var p=i.default.create({baseURL:"/api"});p.interceptors.request.use(u.mergeDeepRight({timeout:0,headers:{Accept:"application/json","Content-Type":"application/json",Pragma:"no-cache"}}));var f,m=function(e,t){if(e.includes(":")){var a=[];return{url:e.replace(/:[a-z]*/g,(function(e){if(":domain"===e&&!t.domain)return d.Store.state.app.domain;e=e.slice(1);var r=t[e];if(void 0===r)throw new Error("EndpointParamError: ".concat(e," is not defined"));return a.push(e),r})),urlParams:a}}return{url:e,urlParams:[]}},v=(f=(0,o.default)(s.default.mark((function e(t,a){var r,n,o,i,d,c,f;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof t.url){e.next=2;break}throw new Error("Unsupported URL format");case 2:return r=m(t.url,a),n=r.url,o=r.urlParams,i={endpointID:t.endpointID,url:n,method:t.method},d=u.omit(o,a),!1===u.isEmpty(d)&&(c="get"===t.method?"params":"data",i[c]=d),e.prev=6,e.next=9,p.request(i);case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(6),l.ENV.DEV&&(console.group(),console.dir(i),f=i.params||i.data,console.table({"Endpoint ID":i.endpointID,Url:i.url,Method:i.method,"Request Data":JSON.stringify(f),"Response Status Code":e.t0.response.status,"Response Data":JSON.stringify(e.t0.response.data)}),console.groupEnd()),e.t0;case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),function(e,t){return f.apply(this,arguments)});t.request=v},1894:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var r=a(19);Object.defineProperty(t,"__esModule",{value:!0}),t.registerEndpoint=void 0,a(49);var n=a(28),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=s?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(9));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}t.registerEndpoint=function(e,t){return n.Store.commit("endpoints/REGISTER_ENDPOINT",{id:e,data:t}),{get data(){return s.clone(n.Store.state.endpoints[e].data)},set data(t){n.Store.commit("endpoints/SET_DATA",{id:e,data:t})},get state(){return n.Store.state.endpoints[e].state},set state(t){n.Store.commit("endpoints/SET_STATE",{id:e,state:Object.assign({},{isLoading:!1,isOk:!1,isError:!1,error:null},t)})},get params(){return s.clone(n.Store.state.endpoints[e].params)},set params(t){n.Store.commit("endpoints/SET_PARAMS",{id:e,params:t})}}}},1895:function(e,t,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var r=a(1),n=a(19);Object.defineProperty(t,"__esModule",{value:!0}),t.getLoginPMAStatus=t.globalLoginPMA=t.loginPMA=t.setUserPrivs=t.getUserPrivs=t.changeUserPassword=t.assignUser=t.addUser=t.deleteAccessHost=t.addAccessHost=t.deleteUsers=t.getDatabase=t.uploadBackup=t.deleteDatabase=t.optimizeDatabase=t.checkDatabase=t.repairDatabase=t.getDatabases=t.createDatabase=t.getUsers=void 0;var s=r(a(78)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=s?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(9));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var u=s.default.get({id:"DB_USERS",url:"/CMD_DB_CREATE",domain:!0,mapResponse:{users:o.pipe(o.omit(["MAX_DB_LENGTH","MAX_DB_USER_LENGTH"]),o.values,o.filter((function(e){return"..."!==e.text})),o.map((function(e){return{value:e.value,label:e.text}}))),max_db_length:o.prop("MAX_DB_LENGTH"),max_db_user_length:o.prop("MAX_DB_USER_LENGTH")}});t.getUsers=u;var l=s.default.post({url:"/CMD_DB",params:{action:"create"},domain:!0,schema:{name:s.default.REQUIRED_STRING,user:s.default.REQUIRED_STRING,passwd:s.default.OPTIONAL_STRING,passwd2:s.default.OPTIONAL_STRING,userlist:s.default.OPTIONAL_STRING},after:function(e){return e.mapProp("result",e.convert.toAppHtml)}});t.createDatabase=l;var d=s.default.get({id:"DATABASES",url:"/CMD_DB",domain:!0,pagination:!0,after:function(e){return e.mapProps({databases:e.toTable(e.mapArrayProps({nusers:e.convert.toAppNumber,size:e.convert.toAppNumber})),HAVE_ONE_CLICK_PMA_LOGIN:e.convert.toAppBoolean,total_usage:e.convert.toAppNumber,dbs_select:e.toSelect})}});t.getDatabases=d;var c=s.default.select({url:"/CMD_DB",domain:!0,params:{json:!0}}),p=c.extend({params:{repair:!0}});t.repairDatabase=p;var f=c.extend({params:{check:!0}});t.checkDatabase=f;var m=c.extend({params:{optimize:!0}});t.optimizeDatabase=m;var v=c.extend({params:{delete_db:!0}});t.deleteDatabase=v;var b=s.default.post({url:"/CMD_DB",params:{action:"restore",method:"default"},domain:!0,schema:{name:s.default.REQUIRED_STRING,dbuser:s.default.REQUIRED_STRING,dbpass:s.default.REQUIRED_STRING,file:{type:File,required:!0}},before:function(e){return{file1:e.file,file:null}},fileTransfer:!0,continous:!0});t.uploadBackup=b;var _=s.default.get({id:"DB_VIEW",url:"/CMD_DB_VIEW",params:{page:1,ipp:9999},domain:!0,schema:{name:s.default.REQUIRED_STRING},after:function(e){return e.flow(e.project({hosts:"access_hosts",users:"db_users",pmaLogin:"HAVE_ONE_CLICK_PMA_LOGIN"}),e.mapProps({users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("User"))),hosts:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("Access Hosts"))),pmaLogin:e.convert.toAppBoolean}))}});t.getDatabase=_;var h=s.default.post({url:"/CMD_DB",method:"POST",params:{action:"deleteuser",delete:!0,json:!0},domain:!0,schema:{name:s.default.REQUIRED_STRING,select:s.default.ROWS}});t.deleteUsers=h;var g=s.default.post({url:"/CMD_DB_ACCESS",domain:!0,params:{add:!0,json:!0},schema:{name:s.default.REQUIRED_STRING,host:s.default.REQUIRED_STRING}});t.addAccessHost=g;var D=s.default.select({url:"/CMD_DB_ACCESS",domain:!0,params:{delete:!0,json:!0},schema:{name:s.default.REQUIRED_STRING}});t.deleteAccessHost=D;var R=s.default.post({url:"/CMD_DB",domain:!0,params:{action:"createuser",json:!0},schema:{name:s.default.REQUIRED_STRING,passwd:s.default.REQUIRED_STRING,passwd2:s.default.REQUIRED_STRING}});t.addUser=R;var E=s.default.post({url:"/CMD_DB",domain:!0,params:{action:"createuser",json:!0,passwd:"*****",passwd2:"*****"},schema:{name:s.default.REQUIRED_STRING,userlist:s.default.REQUIRED_STRING}});t.assignUser=E;var I=s.default.post({url:"/CMD_DB",domain:!0,params:{action:"modifyuser",json:!0},schema:{name:s.default.REQUIRED_STRING,user:s.default.REQUIRED_STRING,passwd:s.default.REQUIRED_STRING,passwd2:s.default.REQUIRED_STRING}});t.changeUserPassword=I;var y=s.default.get({id:"DB_USER_PRIVS",url:"/CMD_DB_USER_PRIVS",domain:!0,schema:{name:s.default.REQUIRED_STRING,user:s.default.REQUIRED_STRING},after:function(e){return e.mapValues(e.isEqual("Y"))}});t.getUserPrivs=y;var S=s.default.post({url:"/CMD_DB_USER_PRIVS",domain:!0,params:{action:"save "},body:{name:s.default.REQUIRED_STRING,user:s.default.REQUIRED_STRING}});t.setUserPrivs=S;var w=s.default.post({url:"/CMD_PMA_LOGIN",domain:!0,params:{json:!0},notifySuccess:!1,notifyError:!1,schema:{name:s.default.REQUIRED_STRING}});t.loginPMA=w;var O=s.default.post({url:"/CMD_PMA_LOGIN",params:{json:!0,name:"all",domain:""},notifySuccess:!1,notifyError:!1});t.globalLoginPMA=O;var x=s.default.get({url:"/CMD_DB",response:!1,mapResponse:function(e){return"yes"===e.HAVE_ONE_CLICK_PMA_LOGIN},notifyError:!1});t.getLoginPMAStatus=x},2856:function(e,t,a){"use strict";a.r(t),a.d(t,"getInstallations",(function(){return i})),a.d(t,"updateRootInstallationDB",(function(){return u})),a.d(t,"deleteRootInstallation",(function(){return l})),a.d(t,"executeInstallation",(function(){return d})),a.d(t,"updateInstallationDirectoryDB",(function(){return c})),a.d(t,"deleteInstallationDirectory",(function(){return p})),a.d(t,"scanInstallations",(function(){return f})),a.d(t,"validateDirectory",(function(){return m})),a.d(t,"deleteInstallation",(function(){return v})),a.d(t,"updateInstallationDB",(function(){return b}));var r=a(1886),n=function(e,t,a,r){return new(a||(a=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var a,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},o={WORDPRESS_INSTALLATION_NOT_FOUND:Object(r.$gettext)("Wordpress installation not found"),WORDPRESS_INVALID_DIRECTORY:"Invalid directory: %{ message }",WORDPRESS_DATABASE_ERROR:"Invalid database credentials"},i=Object(r.GET)("/wordpress/domain/:domain",{errorMessages:o}),u=Object(r.PUT)("/wordpress/domain/:domain",{errorMessages:o}),l=Object(r.DELETE)("/wordpress/domain/:domain",{errorMessages:o}),d=Object(r.POST)("/wordpress/domain/:domain",{errorMessages:o}),c=Object(r.PUT)("/wordpress/domain/:domain/directory/:directory",{errorMessages:o}),p=Object(r.DELETE)("/wordpress/domain/:domain/directory/:directory",{errorMessages:o}),f=Object(r.POST)("/wordpress/domain/:domain/scan",{errorMessages:o}),m=Object(r.POST)("/wordpress/domain/:domain/validate",{errorMessages:o}),v=function(e){return n(void 0,void 0,void 0,(function(){return s(this,(function(t){return[2,e?p.request({directory:e}):l.request()]}))}))},b=function(e){return e.directory?c.request(e):u.request({db_user:e.db_user,db_pass:e.db_pass})}},2863:function(e,t,a){"use strict";a.r(t);var r=a(2864),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=n.a},2864:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(36)),s=r(a(37));a(84),a(26),a(16),a(14),a(73),a(23),a(18),a(24);var o,i,u,l,d,c=r(a(30)),p=a(3894),f=a(2856),m=a(28),v=r(a(961)),b=a(1895),_=r(a(3895)),h=b.createDatabase.extend({notifySuccess:!1}),g=(new c.default).$gettext,D=function(e){e.timestamp=Date.now();var t=JSON.stringify(e);return btoa(t).replaceAll(/[^a-zA-Z]/g,"").slice(-7)},R={beforeRouteEnter:(d=(0,s.default)(n.default.mark((function e(t,a,r){var s,o,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getInstallations.request();case 2:s=e.sent,o=s.error,i=s.data,o&&(o.notify(),r("/user/wordpress")),i.installations.some((function(e){return""===e.dir}))?(m.Store.dispatch("notifications/NOTIFY",{time:new Date,route:t.path,theme:"danger",title:g("Wordpress Manager"),content:g("Wordpress already installed into root directory")}),r("/user/wordpress")):(t.params.allowRoot=0===i.installations.length,r(!0));case 8:case"end":return e.stop()}}),e)}))),function(e,t,a){return d.apply(this,arguments)}),api:[{command:p.getDBUsers,bind:"users"},{command:p.getDBList,bind:"dbList"}],components:{InfoDialog:_.default},props:{allowRoot:Boolean},data:function(){return{type:"dir",admin:{email:"",name:"",pass:""},db:{action:"create",name:"",pass:"",prefix:"wp_",user:""},dir:"",title:"",dbDataLoaded:!1}},computed:{requestData:function(){return{admin:{admin_email:this.admin.email,admin_name:this.admin.name,admin_pass:this.admin.pass},database:{db_name:this.db.name,db_pass:this.db.pass,db_prefix:this.db.prefix,db_user:this.db.user},dir:"root"===this.type?"":this.dir,title:this.title}},validInfo:function(){return Boolean(this.title&&this.$valid("wordpress-info"))},validAdmin:function(){return Boolean(this.admin.email&&this.admin.name&&this.admin.pass&&this.$valid("wordpress-admin"))},validDatabase:function(){return"create"===this.db.action||Boolean(this.db.name&&this.db.pass&&this.db.prefix&&this.db.user&&this.$valid("wordpress-db"))},valid:function(){return this.validInfo&&this.validAdmin&&this.validDatabase}},watch:{"db.action":{handler:(l=(0,s.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.dbDataLoaded){e.next=2;break}return e.abrupt("return");case 2:if("select"!==t){e.next=6;break}return e.next=5,Promise.all([(0,p.getDBUsers)(),(0,p.getDBList)()]);case 5:this.dbDataLoaded=!0;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),immediate:!0}},methods:{createDatabase:(u=(0,s.default)(n.default.mark((function e(){var t,a,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D(this.$data),a="wp".concat(t),e.next=4,(0,v.default)();case 4:return r=e.sent,e.next=7,h({name:a,user:a,passwd:r,passwd2:r,userlist:"..."});case 7:if(!(e.sent instanceof Error)){e.next=10;break}return e.abrupt("return",!1);case 10:return this.db.name="".concat(this.$state.app.user.name,"_").concat(a),this.db.pass=r,this.db.user=this.db.name,this.db.prefix="wp_",e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)}),directoryInvalid:(i=(0,s.default)(n.default.mark((function e(){var t,a,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.validateDirectory.request({directory:this.dir});case 2:return t=e.sent,a=t.state,(r=t.error)&&r.notify(),e.abrupt("return","error"===a);case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),installWordpress:(o=(0,s.default)(n.default.mark((function e(){var t,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="dir"===this.type,!e.t0){e.next=5;break}return e.next=4,this.directoryInvalid();case 4:e.t0=e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:if("create"!=this.db.action){e.next=13;break}return e.next=10,this.createDatabase();case 10:if(!1!==e.sent){e.next=13;break}return e.abrupt("return");case 13:return e.next=15,f.executeInstallation.request(this.requestData);case 15:if(t=e.sent,!(a=t.error)){e.next=20;break}return a.notify(),e.abrupt("return");case 20:this.$dialog("INFO_DIALOG").open();case 21:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),closeInfo:function(){this.$router.push("/user/wordpress"),this.$notifications.success({title:this.$gettext("Wordpress Manager"),content:this.$gettext("Installation successful")})}}};t.default=R},2865:function(e,t,a){"use strict";a.r(t);var r=a(2866),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=n.a},2866:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,s=r(a(36)),o=r(a(37)),i={props:{item:{type:Object,required:!0}},computed:{itemList:function(){return{admin_email:this.item.admin.admin_email,admin_name:this.item.admin.admin_name,admin_pass:this.item.admin.admin_pass,db_name:this.item.database.db_name,db_pass:this.item.database.db_pass,db_user:this.item.database.db_user}}},methods:{close:(n=(0,o.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$emit("close");case 1:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}};t.default=i},3894:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getDBList=t.getDBUsers=t.updateTheme=t.activateTheme=t.deleteTheme=t.updatePlugin=t.togglePlugin=t.deletePlugin=t.deleteInstallation=t.validateDirectory=t.scanDomain=t.executeInstallation=t.getInstallationInfo=t.getInstallations=void 0,a(27),a(50),a(34);var n=r(a(78)),s=a(1895),o=n.default.get({url:"/CMD_WORDPRESS/domain/:domain",id:"WORDPRESS_INSTALLATION_LIST"});t.getInstallations=o;var i=n.default.get({url:"/CMD_WORDPRESS/uuid/:uuid",id:"WORDPRESS_INSTALLATION_INFO"});t.getInstallationInfo=i;var u=n.default.post({url:"/CMD_WORDPRESS/domain/:domain",schema:{admin:{admin_email:n.default.REQUIRED_STRING,admin_name:n.default.REQUIRED_STRING,admin_pass:n.default.REQUIRED_STRING},database:{db_name:n.default.REQUIRED_STRING,db_pass:n.default.REQUIRED_STRING,db_prefix:n.default.REQUIRED_STRING,db_user:n.default.REQUIRED_STRING},dir:n.default.OPTIONAL_STRING,title:n.default.REQUIRED_STRING},contentType:"application/json"});t.executeInstallation=u;var l=n.default.post({url:"/CMD_WORDPRESS/domain/:domain/scan",notifySuccess:!1});t.scanDomain=l;var d=n.default.post({url:"/CMD_WORDPRESS/domain/:domain/validate",query:{directory:n.default.OPTIONAL_STRING}});t.validateDirectory=d;var c=n.default.delete({url:"/CMD_WORDPRESS/uuid/:uuid",noQueryArg:!0,schema:{uuid:n.default.REQUIRED_STRING},before:function(){return{uuid:null}}});t.deleteInstallation=c;var p=n.default.delete({url:"/CMD_WORDPRESS/uuid/:uuid/plugin/:plugin"});t.deletePlugin=p;var f=n.default.post({url:"/CMD_WORDPRESS/uuid/:uuid/plugin/:plugin/toggle",contentType:"application/json"});t.togglePlugin=f;var m=n.default.post({url:"/CMD_WORDPRESS/uuid/:uuid/plugin/:plugin/update"});t.updatePlugin=m;var v=n.default.delete({url:"/CMD_WORDPRESS/uuid/:uuid/theme/:theme"});t.deleteTheme=v;var b=n.default.post({url:"/CMD_WORDPRESS/uuid/:uuid/theme/:theme/activate"});t.activateTheme=b;var _=n.default.post({url:"/CMD_WORDPRESS/uuid/:uuid/theme/:theme/update"});t.updateTheme=_;var h=s.getUsers.extend({mapResponse:function(e){return Object.values(e).reduce((function(e,t){return t.text&&"..."!==t.text&&e.push(t.text),e}),[])}});t.getDBUsers=h;var g=n.default.get({id:"WORDPRESS_DB_LIST",url:"/CMD_DB",domain:!0,response:[],params:{ipp:999999999},mapResponse:function(e){var t=e.databases;return delete t.info,Object.values(t).map((function(e){return e.database}))}});t.getDBList=g},3895:function(e,t,a){"use strict";a.r(t);var r=a(4214),n=a(2865);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var o=a(0),i=Object(o.a)(n.default,r.a,r.b,!1,null,null,null);t.default=i.exports},3896:function(e,t){},4078:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",[a("app-page-section"),e._v(" "),a("app-page-section",[a("ui-steps",{attrs:{steps:[{id:"info",label:e.$gettext("Step 1: Installation Info"),desc:e.$gettext("Select Directory and Title"),completed:e.validInfo},{id:"admin",label:e.$gettext("Step 2: Admin Info"),completed:e.validAdmin,desc:e.$gettext("Select Admin")},{id:"database",label:e.$gettext("Step 3: Database"),completed:e.validDatabase,desc:e.$gettext("Select Database")}]}},[a("app-page-section",{attrs:{slot:"step:info"},slot:"step:info"},[e.allowRoot?a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Type\n                    ")]),e._v(" "),a("input-radio-group",{attrs:{slot:"content",options:[{id:"root",value:"root",label:e.$gettext("Root")},{id:"dir",value:"dir",label:e.$gettext("Subdirectory")}]},slot:"content",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1):e._e(),e._v(" "),"dir"===e.type?a("ui-form-element",{attrs:{group:"wordpress-info",validators:{required:!0,minLength:3,maxLength:30,regex:/^[\w\s_-]+$/}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Directory\n                    ")]),e._v(" "),a("input-text",{attrs:{slot:"content",prefix:"/domains/"+e.$domain+"/public_html/"},slot:"content",model:{value:e.dir,callback:function(t){e.dir=t},expression:"dir"}}),e._v(" "),a("translate",{attrs:{slot:"error:regex"},slot:"error:regex"},[e._v("\n                        Invalid directory name: only letters, digits,\n                        underscore, dash and whitespace characters are\n                        allowed\n                    ")]),e._v(" "),a("translate",{attrs:{slot:"error:minLength"},slot:"error:minLength"},[e._v("\n                        Invalid directory name: length must be between 3 and 30\n                    ")]),e._v(" "),a("translate",{attrs:{slot:"error:maxLength"},slot:"error:maxLength"},[e._v("\n                        Invalid directory name: length must be between 3 and 30\n                    ")])],1):e._e(),e._v(" "),a("ui-form-element",{attrs:{group:"wordpress-info",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Title\n                    ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1),e._v(" "),a("app-page-section",{attrs:{slot:"step:admin"},slot:"step:admin"},[a("ui-form-element",{attrs:{group:"wordpress-admin",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Name\n                    ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.admin.name,callback:function(t){e.$set(e.admin,"name",t)},expression:"admin.name"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"wordpress-admin",validators:{required:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Password\n                    ")]),e._v(" "),a("input-password",{attrs:{slot:"content","show-generator":""},slot:"content",model:{value:e.admin.pass,callback:function(t){e.$set(e.admin,"pass",t)},expression:"admin.pass"}})],1),e._v(" "),a("ui-form-element",{attrs:{group:"wordpress-admin",validators:{required:!0,email:!0}}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Email\n                    ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.admin.email,callback:function(t){e.$set(e.admin,"email",t)},expression:"admin.email"}})],1)],1),e._v(" "),a("app-page-section",{attrs:{slot:"step:database"},slot:"step:database"},[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                        Database\n                    ")]),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"row",cross:"center"},expression:"{ dir: 'row', cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:"create"},model:{value:e.db.action,callback:function(t){e.$set(e.db,"action",t)},expression:"db.action"}},[a("translate",[e._v("Create new")])],1),e._v(" "),a("ui-tooltip",{attrs:{theme:"danger"}},[a("input-radio",{attrs:{slot:"trigger",value:"select"},slot:"trigger",model:{value:e.db.action,callback:function(t){e.$set(e.db,"action",t)},expression:"db.action"}},[a("translate",[e._v("Select existing database")])],1),e._v(" "),a("translate",[e._v("\n                                Note: selected database will be cleared\n                            ")])],1)],1),e._v(" "),a("input-radio-group",{attrs:{options:[{id:"create",value:"create",label:e.$gettext("Create new")},{id:"select",value:"select",label:e.$gettext("Select existing (Note: selected database will be cleared)")}]},model:{value:e.db.action,callback:function(t){e.$set(e.db,"action",t)},expression:"db.action"}})],1),e._v(" "),"select"===e.db.action&&e.dbDataLoaded?[a("ui-form-element",{attrs:{group:"wordpress-db",underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Database Name\n                        ")]),e._v(" "),a("input-select",{attrs:{slot:"content",options:e.$api.dbList},slot:"content",model:{value:e.db.name,callback:function(t){e.$set(e.db,"name",t)},expression:"db.name"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Database User Name\n                        ")]),e._v(" "),a("input-select",{attrs:{slot:"content",options:e.$api.users},slot:"content",model:{value:e.db.user,callback:function(t){e.$set(e.db,"user",t)},expression:"db.user"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Database User Password\n                        ")]),e._v(" "),a("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.db.pass,callback:function(t){e.$set(e.db,"pass",t)},expression:"db.pass"}})],1),e._v(" "),a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Table Prefix\n                        ")]),e._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.db.prefix,callback:function(t){e.$set(e.db,"prefix",t)},expression:"db.prefix"}})],1)]:e._e()],2),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:!1===e.valid},on:{click:e.installWordpress},slot:"buttons"},[a("translate",[e._v("Install")])],1)],1)],1),e._v(" "),a("info-dialog",{attrs:{item:e.requestData},on:{close:e.closeInfo}})],1)},n=[]},4214:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",{attrs:{id:"INFO_DIALOG",cancel:!1},on:{"dialog:close":e.close}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Created Wordpress Installation\n    ")]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("table",e._l(e.itemList,(function(t,r){return a("tr",{key:r},[a("td",{domProps:{textContent:e._s(r)}}),e._v(" "),a("td",{domProps:{textContent:e._s(t)}})])})),0)])],1)},n=[]}}]);