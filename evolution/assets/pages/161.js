(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1818:function(e,t,s){"use strict";s.r(t);var r=s(4016),a=s(2610);for(var i in a)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(i);var n=s(0),o=s(3648),l=s.n(o),c=Object(n.a)(a.default,r.a,r.b,!1,null,null,null);"function"==typeof l.a&&l()(c),t.default=c.exports},2036:function(e,t,s){"use strict";s(7),s(10),s(5),s(6),s(8),s(11);var r=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.updateListInfo=t.getListInfo=t.deleteFromList=t.addToList=t.getDigestListSubscribers=t.getListSubscribers=t.deleteLists=t.purgeListArchives=t.createList=t.getLists=void 0,s(57),s(50),s(12);var a=r(s(19)),i=r(s(2)),n=r(s(78));function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}var l=n.default.get({id:"MAILING_LISTS",url:"/CMD_EMAIL_LIST",response:[],domain:!0,after:function(e){return e.flow(e.mapValues((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){(0,i.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({list:t},e)})),e.toArray,e.mapArrayProps({archive_size:e.convert.toAppNumber,digest_subscribers:e.convert.toAppNumber,subscribers:e.convert.toAppNumber}))}});t.getLists=l;var c=n.default.post({url:"/CMD_EMAIL_LIST",params:{action:"create"},domain:!0,schema:{name:n.default.REQUIRED_STRING}});t.createList=c;var u=n.default.select({url:"/CMD_EMAIL_LIST",params:{purge_archives:!0,action:"delete"},domain:!0,schema:{purge_days:n.default.REQUIRED_STRING}});t.purgeListArchives=u;var d=n.default.select({url:"/CMD_EMAIL_LIST",params:{delete:!0,action:"delete"},domain:!0});t.deleteLists=d;var b=n.default.get({id:"LIST_SUBSCRIBERS",url:"/CMD_EMAIL_LIST",params:{action:"view"},domain:!0,pagination:!0,schema:{name:n.default.REQUIRED_STRING},after:function(e){return e.flow(e.deleteProp("digest_subscribers"),e.processTableInfo("subscribers"),e.moveProp("subscribers","rows"),e.mapProp("rows",e.toArray))}});t.getListSubscribers=b;var p=b.extend({id:"DIGEST_LIST_SUBSCRIBERS",after:function(e){return e.flow(e.deleteProp("subscribers"),e.processTableInfo("digest_subscribers"),e.moveProp("digest_subscribers","rows"),e.mapProp("rows",e.toArray))}});t.getDigestListSubscribers=p;var m=n.default.post({url:"/CMD_EMAIL_LIST",params:{action:"add"},domain:!0,schema:{name:n.default.REQUIRED_STRING,email:n.default.REQUIRED_STRING,type:n.default.REQUIRED_STRING}});t.addToList=m;var f=n.default.select({url:"/CMD_EMAIL_LIST",params:{action:"delete_subscriber",delete:!0},domain:!0,schema:{name:n.default.REQUIRED_STRING,digest:{type:Boolean,default:!1,required:!1}},before:function(e){return{action:e.digest?"delete_subscriber_digest":"delete_subscriber"}}});t.deleteFromList=f;var g=n.default.get({id:"LIST_INFO",url:"/CMD_EMAIL_LIST",params:{action:"modify"},domain:!0,schema:{name:n.default.REQUIRED_STRING},after:function(e){return e.flow(e.mapValues((function(t){return["yes","no"].includes(t)?e.convert.toAppBoolean(t):"object"===(0,a.default)(t)?(s=t,(r=Object.values(s).find((function(e){return e.selected})))?r.value:""):t;var s,r})),e.mapProps({message_fronter:e.convert.toAppText,info:e.convert.toAppText,taboo_body:e.convert.toAppText,taboo_headers:e.convert.toAppText,message_footer:e.convert.toAppText,message_headers:e.convert.toAppText}))}});t.getListInfo=g;var _=n.default.post({url:"/CMD_EMAIL_LIST",method:"POST",params:{action:"save"},domain:!0,schema:{name:n.default.REQUIRED_STRING}});t.updateListInfo=_},2610:function(e,t,s){"use strict";s.r(t);var r=s(2611),a=s.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},2611:function(e,t,s){"use strict";var r=s(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(s(36));s(55),s(34),s(5),s(21),s(61),s(86),s(26);var i,n,o,l=r(s(37)),c=s(2036),u=s(58),d={preload:[c.getListSubscribers,c.getDigestListSubscribers],commands:{getListSubscribers:c.getListSubscribers,getDigestListSubscribers:c.getDigestListSubscribers},mixins:[(0,u.$bindTab)({param:"tab",defaultTab:"list"})],props:{name:{type:String,required:!0}},data:function(){return{add:{type:"list",email:""},selectList:[],selectDigestList:[],checkedRows:{list:[],digest:[]}}},methods:{addEmail:(o=(0,l.default)(a.default.mark((function e(){var t,s=this;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.add.email.split(",").map((function(e){return e.trim()})).filter(Boolean).map((function(e){return s.$p6e.email2ascii(e)})).join(","),e.next=3,(0,c.addToList)({type:this.add.type,email:t,name:this.name});case 3:e.sent&&(this.add={email:"",type:"list"},(0,c.getListSubscribers)(this.$get("name")),(0,c.getDigestListSubscribers)(this.$get("name")));case 5:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),deleteDigestSubscribers:(n=(0,l.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.deleteFromList)({name:this.name,select:this.selectDigestList,digest:!0});case 2:this.$reset(),(0,c.getDigestListSubscribers)(this.$get("name"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),deleteSubscribers:(i=(0,l.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.deleteFromList)({name:this.name,select:this.selectList});case 2:this.$reset(),(0,c.getListSubscribers)(this.$get("name"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}};t.default=d},3648:function(e,t){},4016:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{actions:[{label:e.$gettext("Add Subscriber"),icon:"#plus-fill",handler:e.$dialog("ADD_EMAIL_DIALOG").open}]}},[s("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("ADD_EMAIL_DIALOG").open()}},slot:"header:buttons"},[s("translate",[e._v("Add Subscriber")])],1),e._v(" "),s("app-page-section",[s("ui-tabs",{attrs:{tabs:[{id:"list",label:e.$gettext("Subscribers")},{id:"digest",label:e.$gettext("Digest Subscribers")}],selected:e.tab},on:{"update:selected":function(t){e.tab=t}}},[s("ui-api-table",e._b({attrs:{slot:"tab:list"},on:{"action:del":function(t){e.$dialog("DELETE_SUBSCRIBERS_DIALOG").open()}},slot:"tab:list",model:{value:e.selectList,callback:function(t){e.selectList=t},expression:"selectList"}},"ui-api-table",{command:e.$commands.getListSubscribers,rowID:"email",requestData:{name:e.name},columns:{email:{label:e.$gettext("Subscriber"),filter:"p6eUnicodeEmail"}},actions:{del:e.$gettext("Delete")}},!1)),e._v(" "),s("ui-api-table",e._b({attrs:{slot:"tab:digest"},on:{"action:del":function(t){e.$dialog("DELETE_DIGEST_SUBSCRIBERS_DIALOG").open()}},slot:"tab:digest",model:{value:e.selectDigestList,callback:function(t){e.selectDigestList=t},expression:"selectDigestList"}},"ui-api-table",{command:e.$commands.getDigestListSubscribers,rowID:"email",requestData:{name:e.name},columns:{email:{label:e.$gettext("Subscriber"),filter:"p6eUnicodeEmail"}},actions:{del:e.$gettext("Delete")}},!1))],1)],1),e._v(" "),s("ui-dialog",{attrs:{id:"ADD_EMAIL_DIALOG"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Add an E-mail Address to the list\n        ")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",{attrs:{group:"addEmail",validators:{required:!0},vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    E-mail Address:\n                ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.add.email,callback:function(t){e.$set(e.add,"email",t)},expression:"add.email"}})],1),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Add to:\n                ")]),e._v(" "),s("template",{slot:"content"},[s("input-radio",{attrs:{value:"list"},model:{value:e.add.type,callback:function(t){e.$set(e.add,"type",t)},expression:"add.type"}},[e._v("\n                        "+e._s(e.name)+"\n                    ")]),e._v(" "),s("input-radio",{attrs:{value:"digest"},model:{value:e.add.type,callback:function(t){e.$set(e.add,"type",t)},expression:"add.type"}},[s("translate",{attrs:{"translate-params":{name:e.name}}},[e._v("\n                            %{name}-digest\n                        ")])],1)],1)],2)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons","validate-group":"addEmail",theme:"primary"},on:{click:e.addEmail},slot:"buttons"},[s("translate",[e._v("Add")])],1)],2),e._v(" "),s("ui-dialog-delete-items",{attrs:{id:"DELETE_SUBSCRIBERS_DIALOG",subject:e.$ngettext("subscriber","subscribers",e.checkedRows.list.length)},on:{"click:confirm":e.deleteSubscribers}}),e._v(" "),s("ui-dialog-delete-items",{attrs:{id:"DELETE_DIGEST_SUBSCRIBERS_DIALOG",subject:e.$ngettext("digest subscriber","digest subscribers",e.checkedRows.list.length)},on:{"click:confirm":e.deleteDigestSubscribers}})],1)},a=[]}}]);