(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1732:function(e,t,r){"use strict";r.r(t);var n=r(3933),s=r(2164);for(var a in s)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r(3272);var i=r(0),o=r(3274),u=r.n(o),l=Object(i.a)(s.default,n.a,n.b,!1,null,null,null);"function"==typeof u.a&&u()(l),t.default=l.exports},2164:function(e,t,r){"use strict";r.r(t);var n=r(2165),s=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},2165:function(e,t,r){"use strict";r(7),r(10),r(6),r(8),r(11);var n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r(36)),a=n(r(37)),i=n(r(2));r(34),r(17),r(27),r(5),r(26),r(710),r(24),r(85);var o=r(3268),u=n(r(2023)),l=n(r(3269)),c=n(r(3039)),f=r(74),d=r(1954);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m,h,b,_=function(e){var t=e.getTime();return String(Math.floor(t/1e3))},g=function(e){return void 0===e||void 0===e.some?[0,0,0]:[e.some.avg10,e.some.avg60,e.some.avg300].map(Number)},y={preload:[o.getLiveRates,o.getEventsCache],api:[{command:o.getLiveRates,bind:{response:"rates",isLoading:"ratesLoading"}},{command:o.getEventsCache,bind:{response:"cache",isLoading:"cacheLoading"}},{command:o.getEvents,bind:"events"}],components:{LimitHitsDialog:l.default,PressureBlock:c.default,InputDateRange:u.default},props:{level:{type:String,required:!0}},data:function(){return{filter:"",reloadInfo:{delay:"0",left:0,timer:null},tab:"live",events:{user:"",range:{start:(0,d.subDays)(new Date,1),end:new Date},data:{}},hits:{newerThan:{start:(0,d.subDays)(new Date,1),end:(0,d.subDays)(new Date,1)}}}},computed:{tabs:function(){return[{id:"live",label:this.$gettext("Live Usage")},{id:"hits",label:this.$gettext("Limit Hits")}]},reloadOptions:function(){var e=this;return[1,2,3,4,5,10,15,30,60].reduce((function(t,r){return v(v({},t),{},(0,i.default)({},r,e.$gettextInterpolate(e.$ngettext("Every second","Every %{n} seconds",r),{n:r})))}),{0:this.$gettext("Manually")})},rates:function(){var e=this;return""===this.filter?this.$api.rates:this.$api.rates.reduce((function(t,r){var n=(0,f.fuzzySearch)(r.user,e.filter);return""!==n&&t.push(v(v({},r),{},{name:n})),t}),[])},cache:function(){var e=this,t=function(e){var t={user:e.user,name:e.name||e.user,cpu:"0.00",mem:0,io:0,tasks:0};return e["cpu.stat"]&&(t.cpu=Number(e["cpu.stat"].throttled_percentage).toFixed(2)),e["memory.events"]&&(t.mem=Number(e["memory.events"].high)),e["pids.events"]&&(t.tasks=Number(e["pids.events"].recent)),e["io.stat"]&&(t.io=Number(e["io.stat"].dbytes)),t.cpu_pressure=g(e["cpu.pressure"]),t.mem_pressure=g(e["memory.pressure"]),t.io_pressure=g(e["io.pressure"]),t};if(""===this.filter)return this.$api.cache.map(t);var r=this.$api.cache.reduce((function(t,r){var n=(0,f.fuzzySearch)(r.user,e.filter);return""!==n&&t.push(v(v({},r),{},{name:n})),t}),[]);return r.map(t)},rows:function(){if("hits"===this.tab)return this.cache;var e=function(e){return"-"===e?0:Number(e)};return("live"===this.tab?this.rates:this.cache).map((function(t){var r={user:t.user,name:t.name||t.user,cpu:0,mem:0,io_read:0,io_write:0,tasks:0};if(void 0!==t.cgtop){var n=t.cgtop;r.cpu=e(n.cpu),r.mem=e(n.memory),r.io_read=e(n.input_bps),r.io_write=e(n.output_bps),r.tasks=e(n.tasks)}return r.cpu_pressure=g(t["cpu.pressure"]),r.mem_pressure=g(t["memory.pressure"]),r.io_pressure=g(t["io.pressure"]),r}))},columns:function(){var e="hits"===this.tab?[{id:"io",label:this.$gettext("IO")}]:[{id:"io_read",label:this.$gettext("IO Read")},{id:"io_write",label:this.$gettext("IO Write")}];return[{id:"user",label:this.$gettext("User")},{id:"cpu",label:this.$gettext("CPU")},{id:"cpu_pressure",label:this.$gettext("CPU Pressure")},{id:"mem",label:this.$gettext("MEM")},{id:"mem_pressure",label:this.$gettext("MEM Pressure")}].concat(e,[{id:"io_pressure",label:this.$gettext("IO Pressure")},{id:"tasks",label:this.$gettext("Tasks")}])}},watch:{tab:function(){this.filter="",this.clearTimer(),"0"!==this.reloadInfo.delay&&this.startReload()},"reloadInfo.delay":{deep:!0,handler:function(){this.clearTimer(),"0"!==this.reloadInfo.delay&&this.startReload()}}},methods:{getEventsRequest:(b=(0,a.default)(s.default.mark((function e(){var t;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getEvents)({user:this.events.user,level:this.level,range_start:_(this.events.range.start),range_end:_(this.events.range.end)});case 2:t=e.sent,this.events.data=t instanceof Error?{events:{}}:t;case 4:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)}),getEvents:function(e){this.events.user=e,this.getEventsRequest(),this.$dialog("LIMIT_HITS_DIALOG").open()},updateEventsRange:function(e){this.events.range=e,this.getEventsRequest()},reload:function(){return"live"===this.tab?(0,o.getLiveRates)({level:this.level}):(0,o.getEventsCache)({newer_than:_(this.hits.newerThan.start),level:this.level})},loadInfoManually:(h=(0,a.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.clearTimer(),e.next=3,this.reload();case 3:"0"!==this.reloadInfo.delay&&this.startReload();case 4:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)}),clearTimer:function(){this.reloadInfo.left=0,this.reloadInfo.timer&&clearTimeout(this.reloadInfo.timer)},startReload:(m=(0,a.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.reloadInfo.left=this.reloadInfo.left?this.reloadInfo.left-1:parseInt(this.reloadInfo.delay,10),this.reloadInfo.left){e.next=5;break}return e.next=4,this.reload();case 4:this.reloadInfo.left=parseInt(this.reloadInfo.delay,10);case 5:this.reloadInfo.timer=setTimeout(this.startReload,1e3);case 6:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})}};t.default=y},2166:function(e,t,r){"use strict";r.r(t);var n=r(2167),s=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},2167:function(e,t,r){"use strict";r(7),r(10),r(5),r(6),r(8),r(11),r(16),r(14),r(23),r(25),r(18);var n=r(1),s=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(2)),i=n(r(38));r(34),r(17);var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(9)),u=n(r(2023)),l=n(r(3039));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(e){return void 0===e||void 0===e.some?[0,0,0]:[e.some.avg10,e.some.avg60,e.some.avg300].map(Number)},p={components:{DateRangePicker:u.default,PressureBlock:l.default},props:{data:{type:Object,required:!0},user:{type:String,required:!0}},data:function(){return{details:null}},computed:{rows:function(){return o.toPairs(this.data.events).map((function(e){var t=(0,i.default)(e,2),r=t[0],n=t[1],s={id:r};return s.time=new Date(1e3*Number(r)),s.cpu=o.prop("cpu.stat",n)||!1,s.mem=o.path(["memory.events","high"],n)||"-",s.tasks=o.path(["pids.events","recent"],n)||"-",s.io=o.path(["io.stat","dbytes"],n)||"-",s.cpu_pressure=d(n["cpu.pressure"]),s.mem_pressure=d(n["memory.pressure"]),s.io_pressure=d(n["io.pressure"]),s}))},columns:function(){return[{id:"time",label:this.$gettext("Time")},{id:"cpu",label:this.$gettext("CPU")},{id:"cpu_pressure",label:this.$gettext("CPU Pressure")},{id:"mem",label:this.$gettext("MEM")},{id:"mem_pressure",label:this.$gettext("MEM Pressure")},{id:"io",label:this.$gettext("IO")},{id:"io_pressure",label:this.$gettext("IO Pressure")},{id:"tasks",label:this.$gettext("Tasks")},{id:"info",label:this.$gettext("Process Info")}]},processes:function(){if(null===this.details||void 0===this.data.events[this.details])return[];var e=this.data.events[this.details].processes||{};return o.map((function(e){var t=(0,i.default)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({pid:t[0]},t[1])}),o.toPairs(e))}},watch:{range:function(e){this.$emit("update:range",e)}},methods:{showDetails:function(e){this.details=e}}};t.default=p},2168:function(e,t,r){"use strict";r.r(t);var n=r(2169),s=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},2169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(710);var n={props:{pressure:{type:Array,required:!0}},computed:{items:function(){var e=function(e){return e.toFixed(2)},t=function(e){return e>10?"danger":e>5?"warning":"safe"};return[{key:"avg10",label:this.$gettext("10s"),value:e(this.pressure[0]),theme:t(this.pressure[0])},{key:"avg60",label:this.$gettext("1m"),value:e(this.pressure[1]),theme:t(this.pressure[1])},{key:"avg300",label:this.$gettext("5m"),value:e(this.pressure[2]),theme:t(this.pressure[2])}]},noData:function(){return this.pressure.every((function(e){return 0===e}))}}};t.default=n},3039:function(e,t,r){"use strict";r.r(t);var n=r(4097),s=r(2168);for(var a in s)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r(3270);var i=r(0),o=Object(i.a)(s.default,n.a,n.b,!1,null,null,null);t.default=o.exports},3040:function(e,t,r){var n=r(3271);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(4).default)("5f30d05c",n,!0,{})},3041:function(e,t,r){var n=r(3273);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(4).default)("be9a707a",n,!0,{})},3268:function(e,t,r){"use strict";r(7),r(10),r(5),r(6),r(8),r(11),r(16),r(14),r(23),r(25),r(18);var n=r(1),s=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.getEvents=t.getEventsCache=t.getLiveRates=t.getLimits=void 0;var a=n(r(2)),i=n(r(38)),o=n(r(78)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(9));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=o.default.get({url:function(e){return"admin"===e.level?"/CMD_ADMIN_LIMITS":"/CMD_RESELLER_LIMITS"},schema:{user:o.default.OPTIONAL_STRING},mapResponse:u.pipe(u.prop("users"),u.toPairs,u.map((function(e){var t=(0,i.default)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({user:t[0]},t[1])})))}),d=f.extend({id:"ADMIN_LIMITS"});t.getLimits=d;var p=f.extend({id:"ADMIN_LIMITS_RATES",params:{live_rates:!0}});t.getLiveRates=p;var v=f.extend({id:"ADMIN_LIMITS_CACHE",params:{show:"events_cache"}});t.getEventsCache=v;var m=o.default.get({url:"/CMD_ADMIN_LIMITS",schema:{user:o.default.REQUIRED_STRING}}).extend({id:"ADMIN_LIMITS_EVENTS",params:{show:"events"},schema:{range_start:o.default.OPTIONAL_STRING,range_end:o.default.OPTIONAL_STRING}});t.getEvents=m},3269:function(e,t,r){"use strict";r.r(t);var n=r(4096),s=r(2166);for(var a in s)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(a);var i=r(0),o=Object(i.a)(s.default,n.a,n.b,!1,null,null,null);t.default=o.exports},3270:function(e,t,r){"use strict";r(3040)},3271:function(e,t,r){},3272:function(e,t,r){"use strict";r(3041)},3273:function(e,t,r){},3274:function(e,t){},3933:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-page",{attrs:{id:"limits"}},[r("app-page-section",[r("ui-form-element",[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Reload\n            ")]),e._v(" "),r("input-select",{attrs:{slot:"content",options:e.reloadOptions,disabled:e.$api.ratesLoading||e.$api.hitsLoading},on:{change:function(t){e.reloadInfo.left=parseInt(t)}},slot:"content",model:{value:e.reloadInfo.delay,callback:function(t){e.$set(e.reloadInfo,"delay",t)},expression:"reloadInfo.delay"}})],1),e._v(" "),r("ui-form-element",[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Filter users\n            ")]),e._v(" "),r("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),e._v(" "),r("ui-form-element",[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Show\n            ")]),e._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("input-radio-group",{attrs:{options:[{id:"live",value:"live",label:e.$gettext("Live Usage")},{id:"hits",value:"hits",label:e.$gettext("Limit Hits")}]},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}})],1)],1),e._v(" "),"hits"===e.tab?r("ui-form-element",{staticClass:"newer-than-picker"},[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Newer Than:\n            ")]),e._v(" "),r("input-date-range",{attrs:{slot:"content",range:e.hits.newerThan},slot:"content"})],1):e._e(),e._v(" "),r("template",{slot:"footer:buttons"},[e.reloadInfo.left?r("translate",{attrs:{"translate-plural":"Reloading in %{n} seconds","translate-params":{n:e.reloadInfo.left},"translate-n":e.reloadInfo.left}},[e._v("\n                Reloading in %{n} second\n            ")]):e._e(),e._v(" "),r("ui-button",{attrs:{theme:"safe"},on:{click:e.reload}},[e._v("\n                "+e._s("hits"===e.tab?e.$gettext("Load Hits"):e.$gettext("Load Usage"))+"\n            ")])],1)],2),e._v(" "),r("ui-r-table",e._b({key:e.tab+"-table",attrs:{"hide-before-controls":""},scopedSlots:e._u([{key:"col:user",fn:function(t){var n=t.name,s=t.user;return[r("ui-link",{on:{click:function(t){return e.getEvents(s)}}},[r("span",{domProps:{innerHTML:e._s(n)}}),e._v(" "),r("ui-icon",{attrs:{id:"log",size:"medium",theme:"primary"}})],1)]}},{key:"col:cpu",fn:function(t){var r=t.cpu;return[e._v("\n            "+e._s(r)+"%\n        ")]}},{key:"col:cpu_pressure",fn:function(e){var t=e.cpu_pressure;return r("pressure-block",{attrs:{pressure:t}})}},{key:"col:mem",fn:function(t){var r=t.mem;return[e._v("\n            "+e._s(e._f("humanReadableSize")(r))+"\n        ")]}},{key:"col:mem_pressure",fn:function(e){var t=e.mem_pressure;return r("pressure-block",{attrs:{pressure:t}})}},{key:"col:io",fn:function(t){var r=t.io;return[e._v("\n            "+e._s(e._f("humanReadableSize")(r))+"\n        ")]}},{key:"col:io_read",fn:function(t){var r=t.io_read;return[e._v("\n            "+e._s(e._f("humanReadableSize")(r))+"\n        ")]}},{key:"col:io_write",fn:function(t){var r=t.io_write;return[e._v("\n            "+e._s(e._f("humanReadableSize")(r))+"\n        ")]}},{key:"col:io_pressure",fn:function(e){var t=e.io_pressure;return r("pressure-block",{attrs:{pressure:t}})}}])},"ui-r-table",{rows:e.rows,columns:e.columns,sort:{key:"cpu",order:"DESC"}},!1)),e._v(" "),r("limit-hits-dialog",{attrs:{user:e.events.user,data:e.events.data,range:e.events.range},on:{"update:range":e.updateEventsRange}})],1)},s=[]},4096:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-dialog",{attrs:{id:"LIMIT_HITS_DIALOG",size:"normal","no-close-btn":"","force-maximize":""},on:{"dialog:open":function(t){e.details=null}}},[null===e.details?r("translate",{attrs:{slot:"title","translate-params":{user:e.user}},slot:"title"},[e._v("\n        %{user } limit hits\n    ")]):r("span",{attrs:{slot:"title"},slot:"title"},[r("ui-button-icon",{attrs:{icon:"arrow-left",theme:"light",title:e.$gettext("Back to limit hits table...")},on:{click:function(t){e.details=null}}}),e._v(" "),r("translate",[e._v("Process list")])],1),e._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[null===e.details?[r("translate",[e._v("\n                The table lists the number of hits (failures) that occurred until that time. If you compare it to the previous hit, you'd get a total number of hits between these time periods. CPU column is an exception, it shows the percentage of total/throttled events.\n            ")]),e._v(" "),r("ui-form-element",{attrs:{underline:!1}},[r("date-range-picker",e._g(e._b({attrs:{slot:"content"},slot:"content"},"date-range-picker",e.$attrs,!1),e.$listeners))],1),e._v(" "),r("ui-r-table",e._b({attrs:{slot:"content"},slot:"content",scopedSlots:e._u([{key:"col:time",fn:function(t){var r=t.time;return[e._v("\n                    "+e._s(e._f("date")(r))+"\n                ")]}},{key:"col:cpu",fn:function(t){var r=t.cpu;return[r?[e._v("\n                        "+e._s(Number(r.throttled_percentage).toFixed(2))+"%\n                    ")]:[e._v("\n                        -\n                    ")]]}},{key:"col:cpu_pressure",fn:function(e){var t=e.cpu_pressure;return r("pressure-block",{attrs:{pressure:t}})}},{key:"col:mem_pressure",fn:function(e){var t=e.mem_pressure;return r("pressure-block",{attrs:{pressure:t}})}},{key:"col:io_pressure",fn:function(e){var t=e.io_pressure;return r("pressure-block",{attrs:{pressure:t}})}},{key:"col:info",fn:function(t){var n=t.id;return r("ui-link",{on:{click:function(t){return e.showDetails(n)}}},[r("ui-icon",{attrs:{id:"question",size:"medium4",theme:"primary"}})],1)}}],null,!1,2944382240)},"ui-r-table",{rows:e.rows,columns:e.columns,sort:{key:"time",order:"DESC"},isCheckable:!1,isSortable:!1,hideBeforeControls:!0,disablePagination:!0},!1))]:[r("ui-table",{attrs:{items:e.processes}},[r("ui-column",{attrs:{id:"pid",label:e.$gettext("PID")}}),e._v(" "),r("ui-column",{attrs:{id:"cpu",label:e.$gettext("CPU")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.cpu;return[r?[e._v("\n                            "+e._s(r)+"%\n                        ")]:[e._v("\n                            -\n                        ")]]}}])}),e._v(" "),r("ui-column",{attrs:{id:"mem",label:e.$gettext("Memory")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.mem;return[e._v("\n                        "+e._s(e._f("humanReadableSize")(r))+"\n                    ")]}}])}),e._v(" "),r("ui-column",{attrs:{id:"time",label:e.$gettext("Time")}}),e._v(" "),r("ui-column",{attrs:{id:"started",label:e.$gettext("Started")}}),e._v(" "),r("ui-column",{attrs:{id:"cmd",label:e.$gettext("Command")}})],1)]],2)],1)},s=[]},4097:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"pressure-line"},[e.noData?r("span",[e._v("\n        -\n    ")]):e._l(e.items,(function(t){return r("span",{key:t.key,staticClass:"pressure-item",class:"--theme-"+t.theme,domProps:{textContent:e._s(t.label+": "+t.value+"%")}})}))],2)},s=[]}}]);