(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1841:function(e,t,r){"use strict";r.r(t);var s=r(4039),a=r(2672);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);r(3696);var i=r(0),o=r(3698),u=r.n(o),l=Object(i.a)(a.default,s.a,s.b,!1,null,"017c49ee",null);"function"==typeof u.a&&u()(l),t.default=l.exports},2672:function(e,t,r){"use strict";r.r(t);var s=r(2673),a=r.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},2673:function(e,t,r){"use strict";r(16),r(14),r(23),r(25),r(18),r(6);var s=r(1),a=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(36)),i=s(r(37));r(17),r(84);var o=m(r(3691)),u=m(r(9)),l=r(1954),c=s(r(2023)),f=s(r(3692)),p=s(r(3693));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(s,i,o):s[i]=e[i]}return s.default=e,r&&r.set(e,s),s}var v,_,g,h,b=function(e){var t=e.getTime();return String(Math.floor(t/1e3))},y={components:{DateRangePicker:c.default,ProcessesDialog:f.default,PressureBlock:p.default},api:o.getLiveRates,data:function(){return{range:{start:(0,l.subDays)(new Date,1),end:new Date},reloadInfo:{left:0,timer:null},tab:"rates",eventsData:[],processes:[]}},computed:{rates:function(){return this.$api},events:function(){return{columns:[{id:"time",label:this.$gettext("Time")},{id:"cpu",label:this.$gettext("CPU")},{id:"mem",label:this.$gettext("MEM")},{id:"io",label:this.$gettext("IO")},{id:"iops",label:this.$gettext("IOPS")},{id:"tasks",label:this.$gettext("Tasks")}],rows:this.eventsData}},limits:function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return function(t){if(!t)return 1/0;if(isFinite(Number(t)))return Number(t);var r=t.slice(-1);return Number(t.slice(0,-1))*Math.pow(e,{K:1,M:2,G:3,T:4}[r.toUpperCase()])}},t=this.$state.app.tokens,r=t.CGROUP_CPUQuota,s=t.CGROUP_IOReadBandwidthMax,a=t.CGROUP_IOReadIOPSMax,n=t.CGROUP_IOWriteBandwidthMax,i=t.CGROUP_IOWriteIOPSMax,o=t.CGROUP_MemoryHigh,l=t.CGROUP_TasksMax;return u.evolve({cpu:u.ifElse(Boolean,u.pipe(u.replace("%",""),Number),u.always(1/0)),io_read:e(1e3),io_write:e(1e3),memory:e(1024)},{cpu:r,io_read:s,io_write:n,iops_read:a,iops_write:i,memory:o,tasks:Number(l)||1/0})}},created:(h=(0,i.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getEvents(),e.next=3,this.getRates();case 3:this.startReload();case 4:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)}),methods:{getRates:function(){return o.getLiveRates({},{throw:!1})},getEvents:(g=(0,i.default)(n.default.mark((function e(){var t;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getEvents({range_start:b(this.range.start),range_end:b(this.range.end)});case 2:t=e.sent,this.eventsData=t instanceof Error?[]:t;case 4:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)}),updateRange:function(e){var t=this;this.range.start=e.start,this.range.end=e.end,this.$nextTick((function(){return t.getEvents()}))},reload:(_=(0,i.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.clearTimer(),"rates"!==this.tab){e.next=4;break}return e.next=4,this.getRates();case 4:this.startReload();case 5:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)}),clearTimer:function(){this.reloadInfo.left=0,this.reloadInfo.timer&&clearTimeout(this.reloadInfo.timer)},startReload:(v=(0,i.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.reloadInfo.left=this.reloadInfo.left?this.reloadInfo.left-1:15,this.reloadInfo.left){e.next=5;break}return e.next=4,this.reload();case 4:this.reloadInfo.left=15;case 5:this.reloadInfo.timer=setTimeout(this.startReload,1e3);case 6:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),showProcesses:function(e){this.processes=e,this.$dialog("SHOW_PROCESSES_DIALOG").open()}}};t.default=y},2674:function(e,t,r){"use strict";r.r(t);var s=r(2675),a=r.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},2675:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={props:{processes:{type:Array,required:!0}}};t.default=s},2676:function(e,t,r){"use strict";r.r(t);var s=r(2677),a=r.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},2677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(710);var s={props:{label:{type:String,required:!0},pressure:{type:Object,required:!0}},computed:{items:function(){var e=function(e){return e.toFixed(2)},t=function(e){return e>.1?"danger":e>.05?"warning":"safe"};return[{key:"avg10",label:this.$gettext("10 seconds"),value:e(this.pressure.avg10),theme:t(this.pressure.avg10)},{key:"avg60",label:this.$gettext("1 minute"),value:e(this.pressure.avg60),theme:t(this.pressure.avg60)},{key:"avg300",label:this.$gettext("5 minutes"),value:e(this.pressure.avg300),theme:t(this.pressure.avg300)}]}}};t.default=s},3135:function(e,t,r){var s=r(3695);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,r(4).default)("82853674",s,!0,{})},3136:function(e,t,r){var s=r(3697);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,r(4).default)("cc9c67ec",s,!0,{})},3691:function(e,t,r){"use strict";r(7),r(10),r(5),r(6),r(8),r(11),r(16),r(14),r(23),r(25),r(18);var s=r(1),a=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.getEvents=t.getEventsCache=t.getLiveRates=t.getRates=void 0;var n=s(r(2)),i=s(r(38));r(17),r(34);var o=s(r(78)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(s,i,o):s[i]=e[i]}s.default=e,r&&r.set(e,s);return s}(r(9));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}var f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return u.pipe(u.path(["".concat(e,".pressure"),"some"]),u.defaultTo({avg10:0,avg60:0,avg300:0}),u.omit(["total"]),u.map((function(e){return Number(e)*r})))(t)},p=o.default.get({id:"USER_LIMITS",url:"/CMD_USER_LIMITS",response:{cpu:0,cpu_throttle:{usage:0,limit:1},memory:0,io_read:0,io_write:0,iops_read:0,iops_write:0,tasks:0},mapResponse:u.pipe(u.prop("users"),(function(e){var t={cpu:0,cpu_throttle:{usage:0,limit:1},memory:0,io_read:0,io_write:0,iops_read:0,iops_write:0,tasks:0},r=u.keys(e),s=(0,i.default)(r,1)[0],a=void 0!==s&&s;if(!1!==a){var n=e[a],o=function(e){return function(e,t){var r=Number(u.path(e,t));return isFinite(r)?r:0}(e,n)};t.cpu=o(["cgtop","cpu"]),t.cpuPressure=f("cpu",n),t.memory=o(["cgtop","memory"]),t.memoryPressure=f("memory",n,1),t.tasks=o(["cgtop","tasks"]),t.io_read=o(["cgtop","input_bps"]),t.ioPressure=f("io",n)}return t})),options:{throw:!1}});t.getRates=p;var d=p.extend({id:"USER_LIVE_RATES",params:{live_rates:!0},throw:!1});t.getLiveRates=d;var m=p.extend({id:"USER_LIMIT_EVENTS_CACHE",params:{show:"events_cache"},throw:!1});t.getEventsCache=m;var v=o.default.get({id:"USER_LIMIT_EVENTS",url:"/CMD_USER_LIMITS",params:{show:"events"},schema:{range_start:o.default.OPTIONAL_STRING,range_end:o.default.OPTIONAL_STRING},throw:!1,notifyError:!1,response:[],mapResponse:function(e){var t=e.events;return u.toPairs(t).map((function(e){var t=(0,i.default)(e,2),r=t[0],s=t[1],a={id:r,processes:[]};return a.time=new Date(1e3*Number(r)),a.cpu=u.prop("cpu.stat",s)||"-",a.mem=u.path(["memory.events","high"],s)||"-",a.tasks=u.path(["pids.events","recent"],s)||"-",a.io=u.path(["io.stat","dbytes"],s)||"-",a.iops=u.path(["io.stat","dios"],s)||"-",s.processes&&(a.processes=u.toPairs(s.processes).map((function(e){var t=(0,i.default)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({pid:t[0]},t[1])}))),a}))}});t.getEvents=v},3692:function(e,t,r){"use strict";r.r(t);var s=r(4172),a=r(2674);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);var i=r(0),o=Object(i.a)(a.default,s.a,s.b,!1,null,null,null);t.default=o.exports},3693:function(e,t,r){"use strict";r.r(t);var s=r(4173),a=r(2676);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);r(3694);var i=r(0),o=Object(i.a)(a.default,s.a,s.b,!1,null,null,null);t.default=o.exports},3694:function(e,t,r){"use strict";r(3135)},3695:function(e,t,r){},3696:function(e,t,r){"use strict";r(3136)},3697:function(e,t,r){},3698:function(e,t){},4039:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-page",["rates"===e.tab?r("ui-button",{attrs:{slot:"header:buttons",theme:"safe"},on:{click:e.reload},slot:"header:buttons"},[e.reloadInfo.left?r("translate",{attrs:{"translate-plural":"Reloading in %{n} seconds","translate-params":{n:e.reloadInfo.left},"translate-n":e.reloadInfo.left}},[e._v("\n            Reloading in %{n} second\n        ")]):r("ui-loader-icon",{attrs:{size:16}})],1):e._e(),e._v(" "),r("app-page-section",[r("ui-tabs",{attrs:{selected:e.tab,tabs:[{id:"rates",label:e.$gettext("Rates")},{id:"hits",label:e.$gettext("Limit Hits")}]},on:{"update:selected":function(t){e.tab=t}}},[r("div",{staticClass:"limits-grid",attrs:{slot:"tab:rates"},slot:"tab:rates"},[e._e(),e._v(" "),r("ui-infobar-stats",{attrs:{usage:e.$api.cpu,limit:e.limits.cpu,title:e.$gettext("CPU")}},[r("template",{slot:"progress"},[e._v("\n                        "+e._s(e.$api.cpu)+"% / "+e._s(e.limits.cpu===1/0?e.$gettext("Unlimited"):e.limits.cpu+"%")+"\n                    ")])],2),e._v(" "),e.rates.cpuPressure?r("pressure-block",{attrs:{label:e.$gettext("CPU Pressure"),pressure:e.rates.cpuPressure}}):e._e(),e._v(" "),r("ui-infobar-stats",{attrs:{usage:e.$api.memory,limit:e.limits.memory,title:e.$gettext("Memory")}},[r("template",{slot:"progress"},[e._v("\n                        "+e._s(e._f("humanReadableSize")(e.$api.memory))+" /\n                        "),e.limits.memory===1/0?[e._v("\n                            "+e._s(e.$gettext("Unlimited"))+"\n                        ")]:[e._v("\n                            "+e._s(e._f("humanReadableSize")(e.limits.memory))+"\n                        ")]],2)],2),e._v(" "),e.rates.memoryPressure?r("pressure-block",{attrs:{label:e.$gettext("Memory Pressure"),pressure:e.rates.memoryPressure}}):e._e(),e._v(" "),r("ui-infobar-stats",{attrs:{usage:e.$api.tasks,limit:e.limits.tasks,title:e.$gettext("Tasks")}}),e._v(" "),r("ui-infobar-stats",{attrs:{usage:e.$api.io_read,limit:e.limits.io_read,title:e.$gettext("IO Read")}},[r("template",{slot:"progress"},[e._v("\n                        "+e._s(e._f("humanReadableSize")(e.$api.io_read))+" /\n                        "),e.limits.io_read===1/0?[e._v("\n                            "+e._s(e.$gettext("Unlimited"))+"\n                        ")]:[e._v("\n                            "+e._s(e._f("humanReadableSize")(e.limits.io_read))+"\n                        ")]],2)],2),e._v(" "),r("ui-infobar-stats",{attrs:{usage:e.$api.io_write,limit:e.limits.io_write,title:e.$gettext("IO Write")}},[r("template",{slot:"progress"},[e._v("\n                        "+e._s(e._f("humanReadableSize")(e.$api.io_write))+" /\n                        "),e.limits.io_write===1/0?[e._v("\n                            "+e._s(e.$gettext("Unlimited"))+"\n                        ")]:[e._v("\n                            "+e._s(e._f("humanReadableSize")(e.limits.io_write))+"\n                        ")]],2)],2),e._v(" "),e.rates.ioPressure?r("pressure-block",{attrs:{label:e.$gettext("IO Pressure"),pressure:e.rates.ioPressure}}):e._e()],1),e._v(" "),r("ui-r-table",e._b({attrs:{slot:"tab:hits"},slot:"tab:hits",scopedSlots:e._u([{key:"col:time",fn:function(t){var r=t.time;return[e._v("\n                    "+e._s(e._f("date")(r))+"\n                ")]}},{key:"col:cpu",fn:function(t){var r=t.cpu;return["-"===r?[e._v("\n                        "+e._s(r)+"\n                    ")]:[e._v("\n                        "+e._s(Number(r.throttled_percentage).toFixed(2))+"%\n                    ")]]}},{key:"col:mem",fn:function(t){var r=t.mem;return[e._v("\n                    "+e._s(r.total||r)+"\n                ")]}},{key:"row:actions",fn:function(t){var s=t.processes;return[s.length?r("ui-link",{on:{click:function(t){return e.showProcesses(s)}}},[r("ui-icon",{attrs:{id:"question",size:"medium4",theme:"primary"}})],1):e._e()]}}])},"ui-r-table",{rows:e.events.rows,columns:e.events.columns,sort:{key:"time",order:"DESC"},isCheckable:!1,isSortable:!1,disablePagination:!0},!1),[e._v(" "),e._v(" "),e._v(" "),r("template",{slot:"buttons:before"},[r("ui-form-element",{staticStyle:{"min-width":"50rem"},attrs:{underline:!1}},[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                            Date Range\n                        ")]),e._v(" "),r("date-range-picker",{attrs:{slot:"content",range:e.range},on:{"update:range":e.updateRange},slot:"content"})],1)],1)],2)],1)],1),e._v(" "),r("processes-dialog",e._b({},"processes-dialog",{processes:e.processes},!1))],1)},a=[]},4172:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-dialog",{attrs:{id:"SHOW_PROCESSES_DIALOG",size:"normal"}},[r("translate",{attrs:{slot:"title"},slot:"title"},[e._v("View Processes")]),e._v(" "),r("ui-table",{attrs:{slot:"content",items:e.processes},slot:"content"},[r("ui-column",{attrs:{id:"pid",label:e.$gettext("PID")}}),e._v(" "),r("ui-column",{attrs:{id:"cpu",label:e.$gettext("CPU")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.cpu;return[e._v("\n                "+e._s(r)+"%\n            ")]}}])}),e._v(" "),r("ui-column",{attrs:{id:"mem",label:e.$gettext("Memory")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.mem;return[e._v("\n                "+e._s(e._f("humanReadableSize")(r))+"\n            ")]}}])}),e._v(" "),r("ui-column",{attrs:{id:"time",label:e.$gettext("Time")}}),e._v(" "),r("ui-column",{attrs:{id:"started",label:e.$gettext("Started")}}),e._v(" "),r("ui-column",{attrs:{id:"cmd",label:e.$gettext("Command")}})],1)],1)},a=[]},4173:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pressure-block"},[r("span",{staticClass:"pressure-block-label",domProps:{textContent:e._s(e.label)}}),e._v(" "),r("div",{staticClass:"pressure-items"},[e._l(e.items,(function(t){return[r("span",{key:t.key+"-label",staticClass:"pressure-item-label",domProps:{textContent:e._s(t.label)}}),e._v(" "),r("div",{key:t.key+"-progress",staticClass:"pressure-item-progress"},[r("div",{staticClass:"pressure-item-track",class:"--theme-"+t.theme,style:{width:t.value+"%"}})]),e._v(" "),r("span",{key:t.key+"-value",staticClass:"pressure-item-value",domProps:{textContent:e._s(t.value+"%")}})]}))],2)])},a=[]}}]);