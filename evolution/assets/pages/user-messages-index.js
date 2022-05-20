(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[4640],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/clear-message-system-dialog.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var a,l=o(t("./node_modules/@babel/runtime/regenerator/index.js")),n=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),r=t("./src/js/api/commands/user/messages.js"),i={data:function(){return{subject:"",when:"all",days:"1",deleteEverything:!1}},api:[{command:r.getClearOptions,bind:"options"}],computed:{subjects:function(){return this.$api.options.subjects},periods:function(){return this.$api.options.periods}},watch:{when:function(e){"all"!==e||this.days||(this.days="1")}},methods:{clearMessageSystem:(a=(0,n.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.clearSystem)({delete_messages_days:this.days,subject:this.deleteEverything?"":this.subject,subject_select:this.deleteEverything?"2":null,when:this.when});case 2:this.$store.dispatch("session/GET_SESSION_STATE"),this.$emit("updateMessages");case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})}};s.Z=i},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var a,l=o(t("./node_modules/@babel/runtime/regenerator/index.js")),n=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),r=t("./src/js/api/commands/user/messages.js"),i={data:function(){return{send:!1,email:"",days:{tickets:"0",messages:"0"},deleteTickets:!1,deleteMessages:!1}},api:[{command:r.getSystemOptions,bind:"options"}],created:function(){this.initData()},methods:{save:(a=(0,n.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.saveSystemOptions)({delete_messages_days:this.deleteMessages?this.days.messages:"0",delete_tickets_days:this.deleteTickets?this.days.tickets:"0",ON:this.send,email:this.email});case 2:e.sent.success&&this.$notifications.success({title:"Options saved successfully"});case 5:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),initData:function(){this.$_initData(this.$api.options),this.deleteTickets="0"!==this.days.tickets,this.deleteMessages="0"!==this.days.messages}}};s.Z=i},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-message-dialog.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var o={api:[{command:t("./src/js/api/commands/user/messages.js").getMessage,bind:{"response.content":"content","response.time":"time","response.subject":"subject"}}]};s.Z=o},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var a,l=o(t("./node_modules/@babel/runtime/regenerator/index.js")),n=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),r=t("./src/js/api/commands/user/messages.js"),i={api:[{command:r.getTicket,bind:"messages"}],filters:{firstLetter:function(e){return e[0].toUpperCase()}},data:function(){return{message:""}},computed:{number:function(){return this.$state.commands.TICKET.params.number||""},messages:function(){return this.$api.messages}},methods:{postReply:(a=(0,n.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.postReply)(this.$get(["number","message"]));case 2:this.$reset(),(0,r.getTicket)(this.$get("number"));case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})}};s.Z=i},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_tables/tickets.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var a=o(t("./node_modules/@babel/runtime/regenerator/index.js")),l=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));t("./node_modules/core-js/modules/es.number.constructor.js");var n,r=t("./src/js/api/commands/user/messages.js"),i={data:function(){return{showClosed:!0}},computed:{newTickets:function(){return this.$_session.newTickets}},commands:{getTickets:r.getTickets},watch:{newTickets:function(e,s){Number(e)>Number(s)&&this.$refs.table.reloadTable()}},created:function(){this.$route.query.ticket&&this.openTicket(this.$route.query.ticket)},methods:{openTicket:(n=(0,l.default)(a.default.mark((function e(s){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getTicket)({number:s});case 2:this.$dialog("VIEW_TICKET_DIALOG").open(),this.$store.dispatch("session/GET_SESSION_STATE"),this.$reloadApiTable();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})}};s.Z=i},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/index.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=t("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var l=o(t("./node_modules/@babel/runtime/regenerator/index.js")),n=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),r=function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=m(s);if(t&&t.has(e))return t.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var r=l?Object.getOwnPropertyDescriptor(e,n):null;r&&(r.get||r.set)?Object.defineProperty(o,n,r):o[n]=e[n]}o.default=e,t&&t.set(e,o);return o}(t("./src/js/api/commands/user/messages.js")),i=o(t("./src/js/pages/user/messages/_dialogs/view-message-dialog.vue")),u=o(t("./src/js/pages/user/messages/_dialogs/clear-message-system-dialog.vue")),d=o(t("./src/js/pages/user/messages/_dialogs/message-system-options.vue")),c=o(t("./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue"));function m(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:s})(e)}var p,g,_,v={name:"UserMessages",components:{TicketsTable:o(t("./src/js/pages/user/messages/_tables/tickets.vue")).default,ViewMessageDialog:i.default,ClearMessageSystemDialog:u.default,MessageSystemOptionsDialog:d.default,ViewTicketDialog:c.default},preload:[r.getMessages,r.getTickets,r.getClearOptions],commands:r,data:function(){return{select:[]}},computed:{newMessages:function(){return this.$_session.newMessages},tab:{get:function(){return"/user/messages"===this.$route.path?"messages":"tickets"},set:function(e){this.$route.path!=="/user/".concat(e)&&this.$router.push({path:"messages"===e?"/user/messages":"/user/tickets",query:this.$route.query})}},page:function(){return this.$route.query.page||"1"},ipp:function(){return this.$route.query.ipp||"20"}},watch:{newMessages:function(){this.$refs.table&&this.$refs.table.reloadTable()}},created:function(){this.$route.query.id&&this.openMessageDialog(this.$route.query.id),this.$route.query.ticket&&(this.tab="tickets")},methods:{openMessageDialog:(_=(0,n.default)(l.default.mark((function e(s){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getMessage({number:s});case 2:e.sent?(this.$dialog("VIEW_MESSAGE_DIALOG").open(),this.$store.dispatch("session/GET_SESSION_STATE")):this.$notifications.error({title:this.$gettext("Cannot execute your request"),content:this.$gettext("Message #".concat(s," is not appears in your message system"))});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)}),deleteMessages:(g=(0,n.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.deleteMessages(this.$get("select"));case 2:this.$reset(),this.$store.dispatch("session/GET_SESSION_STATE"),this.$refs.table.reloadTable();case 5:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)}),markAsRead:function(){r.markRead({select:this.select}).then(this.$reset).then(this.$reloadApiTable)},openOptionsDialog:(p=(0,n.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getSystemOptions();case 2:this.$dialog("MESSAGE_SYSTEM_OPTIONS_DIALOG").open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})}};s.Z=v},"./src/js/api/commands/user/messages.js":function(e,s,t){"use strict";t("./node_modules/core-js/modules/es.object.keys.js"),t("./node_modules/core-js/modules/es.symbol.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),t("./node_modules/core-js/modules/web.dom-collections.for-each.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),t("./node_modules/core-js/modules/es.object.define-properties.js"),t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.saveSystemOptions=s.postReply=s.markRead=s.getTickets=s.getTicket=s.getSystemOptions=s.getMessages=s.getMessage=s.getClearOptions=s.deleteMessages=s.clearSystem=void 0,t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.promise.js"),t("./node_modules/core-js/modules/es.array.filter.js");var a=o(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),l=o(t("./src/js/api/command/index.js")),n=o(t("./node_modules/date-fns/esm/formatDistance/index.js"));function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){(0,a.default)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var u="/CMD_TICKET",d=l.default.get({id:"MESSAGES",url:u,params:{type:"message"},pagination:!0,schema:{sort:i(i({},l.default.SORT),{},{default:[{key:3,order:"DESC"}]})},after:function(e){return e.flow(e.project({rows:"messages"}),e.processTableInfo("rows"),e.mapProp("rows",e.flow(e.mapArray(e.moveProp("message","id")),e.mapArrayProps({new:e.convert.toAppBoolean,last_message:e.convert.toAppDate,subject:e.convert.toAppHtml}))))}});s.getMessages=d;var c=l.default.get({id:"TICKETS",url:u,params:{type:"ticket"},pagination:!0,schema:{sort:l.default.SORT,show_closed:{type:Boolean,required:!1,default:!0}},after:function(e){return e.flow(e.getProp("tickets"),e.toTable(e.mapArrayProps({subject:e.convert.toAppString,last_message:e.convert.toAppDate,new:e.convert.toAppBoolean})))}});s.getTickets=c;var m=l.default.get({id:"TICKET",url:u,response:[],params:{action:"view",type:"ticket"},schema:{number:l.default.REQUIRED_STRING},after:function(e){return e.flow(e.deleteProp("info"),e.toArray,(function(e){return e.reverse()}),e.mapArrayProps({message:e.convert.toAppHtml,time:function(s){return(0,n.default)(Date.now(),e.convert.toAppDate(s))}}))}});s.getTicket=m;var p=l.default.post({url:u,params:{action:"reply",type:"reply",user:"creator",subject:"none",priority:"0"},schema:{message:l.default.REQUIRED_STRING,number:l.default.REQUIRED_STRING}});s.postReply=p;var g=l.default.get({id:"MESSAGE",url:u,params:{action:"view",type:"message"},schema:{number:l.default.REQUIRED_STRING},after:function(e){return e.flow(e.getProp("0"),e.moveProp("message","content"),e.mapProps({priority:e.convert.toAppNumber,content:e.convert.toAppHtml,time:e.convert.toAppDate}))}});s.getMessage=g;var _=l.default.select({url:u,params:{action:"multiple",delete:!0,type:"message"}});s.deleteMessages=_;var v=l.default.post({url:u,params:{action:"clear"},schema:{subject:l.default.REQUIRED_STRING,when:l.default.REQUIRED_STRING,delete_messages_days:l.default.OPTIONAL_STRING}});s.clearSystem=v;var f=l.default.get({id:"CLEAR_MESSAGES_OPTIONS",url:u,after:function(e){return e.flow(e.project({subjects:"clear_messages.SUBJECT_SELECT",periods:"clear_messages.WHEN_SELECT"}),e.mapProps({subjects:e.flow(e.toArray,e.mapArray(e.getProp("text")),e.filter(e.flow(e.isEqual("-- anything --"),e.not))),periods:e.transformObject((function(e){var s=e.text,t=e.value;return(0,a.default)({},t,s)}))}))}});s.getClearOptions=f;var b=l.default.get({id:"MESSAGES_SYSTEM_OPTIONS",url:u,after:function(e){return e.flow(e.getProp("settings"),e.project({"days.messages":"DELETE_MESSAGES_DAYS","days.tickets":"DELETE_TICKETS_DAYS",email:"EMAIL",send:"EMAILCHECKED"}),e.mapProp("send",e.isEqual("checked")))}});s.getSystemOptions=b;var j=l.default.post({url:u,params:{action:"email",save:!0},schema:{email:l.default.REQUIRED_STRING,ON:l.default.REQUIRED_BOOL,delete_tickets_days:l.default.REQUIRED_STRING,delete_messages_days:l.default.REQUIRED_STRING},notifySuccess:!1});s.saveSystemOptions=j;var y=l.default.select({url:u,params:{action:"multiple",read:!0,type:"message"}});s.markRead=y},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=style&index=0&lang=scss&":function(){},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/pages/user/messages/_dialogs/clear-message-system-dialog.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return l}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/clear-message-system-dialog.vue?vue&type=script&lang=js&"),a=o.Z,l=(0,t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ui-dialog",{attrs:{id:"CLEAR_MESSAGE_SYSTEM_DIALOG",size:"normal"}},[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Clear Message System\n    ")]),e._v(" "),t("template",{slot:"content"},[t("ui-form-element",{attrs:{group:"clearMessages"}},[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Subject Contains\n            ")]),e._v(" "),t("input-autocomplete",{attrs:{slot:"content",values:e.subjects,disabled:e.deleteEverything},slot:"content",model:{value:e.subject,callback:function(s){e.subject=s},expression:"subject"}},[t("input-checkbox-button",{attrs:{slot:"additions:right"},slot:"additions:right",model:{value:e.deleteEverything,callback:function(s){e.deleteEverything=s},expression:"deleteEverything"}},[t("translate",[e._v("Anything")])],1)],1),e._v(" "),t("translate",{attrs:{slot:"error:validateSubject"},slot:"error:validateSubject"},[e._v("\n                Required field\n            ")])],1),e._v(" "),t("ui-form-element",{attrs:{group:"clearMessages"}},[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                When\n            ")]),e._v(" "),"all"===e.when?t("input-select",{attrs:{slot:"content",options:e.periods,disabled:e.deleteEverything,novalidate:""},slot:"content",model:{value:e.when,callback:function(s){e.when=s},expression:"when"}}):t("ui-input-group",{attrs:{slot:"content"},slot:"content"},[t("input-select",{attrs:{slot:"additions:left",options:e.periods},slot:"additions:left",model:{value:e.when,callback:function(s){e.when=s},expression:"when"}}),e._v(" "),t("input-text",{attrs:{slot:"input",number:""},slot:"input",model:{value:e.days,callback:function(s){e.days=s},expression:"days"}}),e._v(" "),t("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[t("translate",{attrs:{"translate-n":Number(e.days)||1,"translate-plural":"Days"}},[e._v("\n                        Day\n                    ")])],1)],1)],1)],1),e._v(" "),t("ui-button",{attrs:{slot:"buttons",theme:"danger",disabled:!(e.deleteEverything||e.subject)||!e.days},on:{click:e.clearMessageSystem},slot:"buttons"},[t("translate",[e._v("Clear")])],1)],2)}),[],!1,null,null,null).exports},"./src/js/pages/user/messages/_dialogs/message-system-options.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return l}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=script&lang=js&"),a=o.Z,l=(t("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=style&index=0&lang=scss&"),(0,t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ui-dialog",{attrs:{id:"MESSAGE_SYSTEM_OPTIONS_DIALOG"},on:{"dialog:open":e.initData}},[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Options\n    ")]),e._v(" "),t("template",{slot:"content"},[t("ui-form-element",{attrs:{vertical:"",group:"messageOptions",validators:{required:e.send}}},[t("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.send,callback:function(s){e.send=s},expression:"send"}},[t("translate",[e._v("E-mail a copy of all messages")])],1),e._v(" "),t("input-text",{attrs:{slot:"content",disabled:!e.send},slot:"content",model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),e._v(" "),t("translate",{attrs:{slot:"error:regex"},slot:"error:regex"},[e._v("\n                Should be valid email\n            ")])],1),e._v(" "),t("ui-form-element",{attrs:{vertical:"",group:"messageOptions",validators:{required:!0}}},[t("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.deleteTickets,callback:function(s){e.deleteTickets=s},expression:"deleteTickets"}},[t("translate",[e._v("Automatically delete tickets")])],1),e._v(" "),e.deleteTickets?t("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.days.tickets,callback:function(s){e.$set(e.days,"tickets",s)},expression:"days.tickets"}},[t("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[t("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Older than\n                    ")])],1),e._v(" "),t("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[t("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Days\n                    ")])],1)],1):e._e()],1),e._v(" "),t("ui-form-element",{attrs:{group:"messageOptions",vertical:"",validators:{required:!0}}},[t("input-checkbox",{attrs:{slot:"title"},slot:"title",model:{value:e.deleteMessages,callback:function(s){e.deleteMessages=s},expression:"deleteMessages"}},[t("translate",[e._v("Automatically delete messages")])],1),e._v(" "),e.deleteMessages?t("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:e.days.messages,callback:function(s){e.$set(e.days,"messages",s)},expression:"days.messages"}},[t("ui-button",{attrs:{slot:"additions:left",disabled:""},slot:"additions:left"},[t("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        Older than\n                    ")])],1),e._v(" "),t("ui-button",{attrs:{slot:"additions:right",disabled:""},slot:"additions:right"},[t("translate",{staticClass:"wrap:nowrap"},[e._v("\n                        days\n                    ")])],1)],1):e._e()],1)],1),e._v(" "),t("ui-button",{attrs:{slot:"buttons","validate-group":"messageOptions",theme:"primary"},on:{click:e.save},slot:"buttons"},[t("translate",[e._v("Save")])],1)],2)}),[],!1,null,null,null).exports)},"./src/js/pages/user/messages/_dialogs/view-message-dialog.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return l}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-message-dialog.vue?vue&type=script&lang=js&"),a=o.Z,l=(0,t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ui-dialog",{attrs:{id:"VIEW_MESSAGE_DIALOG",size:"normal","no-close-btn":e.$api.isLoading},on:{"dialog:close":function(s){return e.$emit("close")}}},[t("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Message\n    ")]),e._v(" "),e.$api.isLoading?e._e():t("header",{directives:[{name:"flex",rawName:"v-flex",value:{main:"between",cross:"baseline",wrap:!0},expression:"{\n            main: 'between',\n            cross:'baseline',\n            wrap: true\n        }"},{name:"gutter",rawName:"v-gutter",value:[1,2],expression:"[1, 2]"}],attrs:{slot:"content:header"},slot:"content:header"},[t("h2",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"}],staticClass:"overfl:hid toverfl:ellipsis",domProps:{textContent:e._s(e.$api.subject)}}),e._v(" "),t("time",[e._v(e._s(e._f("date")(e.$api.time)))])]),e._v(" "),t("ui-code-area",{attrs:{slot:"content",content:e.$api.content,"break-lines":""},slot:"content"})],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return l}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=script&lang=js&"),a=o.Z,l=(t("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=style&index=0&lang=scss&"),(0,t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ui-dialog",{attrs:{id:"VIEW_TICKET_DIALOG",size:"normal","no-close-btn":""}},[t("translate",{attrs:{slot:"title","translate-params":{number:e.number}},slot:"title"},[e._v("\n        View Ticket: #%{ number }\n    ")]),e._v(" "),t("div",{attrs:{slot:"content"},slot:"content"},[t("ui-form-element",{staticClass:"pos:rel",attrs:{vertical:"",validators:{required:!0},group:"ticketReply"}},[t("input-textarea",{attrs:{slot:"content",rows:"5",placeholder:e.$gettext("Type your reply here...")},slot:"content",model:{value:e.message,callback:function(s){e.message=s},expression:"message"}}),e._v(" "),t("ui-button",{staticClass:"replyButton",attrs:{slot:"content",theme:"safe",size:"normal","validate-group":"ticketReply"},on:{click:e.postReply},slot:"content"},[t("translate",[e._v("Post Reply")])],1)],1),e._v(" "),t("ui-table",{attrs:{items:e.messages,"hide-headers":""}},[t("ui-column",{attrs:{id:"avatar",fit:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("ui-round-badge",{staticClass:"messageAvatar",attrs:{theme:e.$state.app.user.name===s.from?"safe":"primary",size:48}},[e._v("\n                        "+e._s(e._f("firstLetter")(s.from))+"\n                    ")])]}}])}),e._v(" "),t("ui-column",{attrs:{id:"message"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("ui-grid",{attrs:{slot:"col:message",column:""},slot:"col:message"},[t("ui-grid",{attrs:{cross:"center"}},[t("span",{staticClass:"userName"},[e._v("\n                                "+e._s({admin:e.$gettext("Admin"),reseller:e.$gettext("Reseller"),user:e.$gettext("User")}[s.level])+":\n                                "+e._s(s.name)+"\n                            ")]),e._v(" "),t("span",{staticClass:"c:txt:neutral"},[e._v("\n                                ("+e._s(s.time)+")\n                            ")])]),e._v(" "),t("p",{domProps:{innerHTML:e._s(s.message)}})],1)]}}])})],1)],1)],1)}),[],!1,null,null,null).exports)},"./src/js/pages/user/messages/_tables/tickets.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return l}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_tables/tickets.vue?vue&type=script&lang=js&"),a=o.Z,l=(0,t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ui-api-table",e._b({ref:"table",attrs:{"disable-select":""},scopedSlots:e._u([{key:"col:subject",fn:function(s){var o=s.new,a=s.priority,l=s.subject,n=s.ticket;return t("ui-link",{class:{"txt:bold":o},on:{click:function(s){return e.openTicket(n)}}},[t("ui-round-badge",{attrs:{theme:{0:"safe",10:"safe",20:"primary",30:"danger"}[a],size:12}}),e._v("\n        "+e._s(l)+"\n    ")],1)}},{key:"col:status",fn:function(s){var o=s.status;return t("ui-badge",{attrs:{theme:{open:"safe",closed:"neutral"}[o]}},[e._v("\n        "+e._s(e._f("capitalize")(o))+"\n    ")])}}])},"ui-api-table",{command:e.$commands.getTickets,rowID:"ticket",columns:{ticket:e.$gettext("Ticket #"),subject:e.$gettext("Subject"),replies:e.$gettext("Replies"),status:e.$gettext("Status"),last_message:{label:e.$gettext("Last Message"),filter:"date"}},verticalLayout:e.$_Client.isPhone,requestData:{show_closed:e.showClosed}},!1),[t("input-checkbox",{attrs:{slot:"buttons:before"},slot:"buttons:before",model:{value:e.showClosed,callback:function(s){e.showClosed=s},expression:"showClosed"}},[t("translate",[e._v("Show closed")])],1)],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/messages/index.vue":function(e,s,t){"use strict";t.r(s),t.d(s,{__esModule:function(){return o.X},default:function(){return u}});var o=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/index.vue?vue&type=script&lang=js&"),a=o.Z,l=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),n=t("./src/js/pages/user/messages/index.vue?vue&type=custom&index=0&blockType=route"),r=t.n(n),i=(0,l.Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("app-page",[t("app-page-section",[t("ui-tabs",{attrs:{tabs:[{id:"messages",label:e.$gettext("Messages")},e.$_flags["server.ticketsEnabled"]?{id:"tickets",label:e.$gettext("Tickets")}:{}],"hide-single-tab":"",selected:e.tab,"force-horizontal":""},on:{"update:selected":function(s){e.tab=s}}},[t("ui-api-table",e._b({ref:"table",attrs:{slot:"tab:messages"},on:{"action:del":function(s){e.$dialog("DELETE_ITEMS_DIALOG").open()},"action:read":e.markAsRead},slot:"tab:messages",scopedSlots:e._u([{key:"col:subject",fn:function(s){var o=s.id,a=s.new,l=s.subject;return t("ui-link",{on:{click:function(s){return e.openMessageDialog(o)}}},[t("span",{class:{"txt:bold":a},domProps:{innerHTML:e._s(l)}})])}}]),model:{value:e.select,callback:function(s){e.select=s},expression:"select"}},"ui-api-table",{command:e.$commands.getMessages,rowID:"id",columns:{subject:{label:e.$gettext("Subject"),grow:!0},last_message:{label:e.$gettext("Date"),filter:"date"}},actions:{read:e.$gettext("Mark as read"),del:e.$gettext("Delete")},updateOn:["DELETE_MESSAGES","CLEAR_MESSAGE_SYSTEM","GET_MESSAGE","MARK_MESSAGES_AS_READ"],initialSort:{key:"last_message",order:"DESC"},verticalLayout:e.$_Client.isPhone},!1)),e._v(" "),t("tickets-table",{attrs:{slot:"tab:tickets"},slot:"tab:tickets"})],1)],1),e._v(" "),t("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:function(s){e.$dialog("CLEAR_MESSAGE_SYSTEM_DIALOG").open()}},slot:"bottom:links"},[t("translate",[e._v("Clear Message System")])],1),e._v(" "),t("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:e.openOptionsDialog},slot:"bottom:links"},[t("translate",[e._v("Options")])],1),e._v(" "),"root"!==e.$_session.creator&&e.$_flags["server.ticketsEnabled"]?t("ui-link",{attrs:{slot:"bottom:links",name:"user/create-ticket",bullet:""},slot:"bottom:links"},[t("translate",[e._v("Create Ticket")])],1):e._e(),e._v(" "),t("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("message","messages",e.select.length)},on:{"click:confirm":e.deleteMessages}}),e._v(" "),t("view-message-dialog"),e._v(" "),e.$state.commands.TICKET.isDone?t("view-ticket-dialog"):e._e(),e._v(" "),t("clear-message-system-dialog",{on:{updateMessages:e.$reloadApiTable}}),e._v(" "),t("message-system-options-dialog")],1)}),[],!1,null,null,null);"function"==typeof r()&&r()(i);var u=i.exports},"./src/js/pages/user/messages/index.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/message-system-options.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("2218c0dc",o,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/messages/_dialogs/view-ticket-dialog.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("654f4932",o,!0,{})}}]);