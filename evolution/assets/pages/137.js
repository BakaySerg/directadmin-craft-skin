(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1834:function(t,e,n){"use strict";n.r(e);var o=n(4032),r=n(2656);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n(3678);var i=n(0),a=n(3680),l=n.n(a),u=Object(i.a)(r.default,o.a,o.b,!1,null,"31f77433",null);"function"==typeof l.a&&l()(u),e.default=u.exports},2656:function(t,e,n){"use strict";n.r(e);var o=n(2657),r=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e.default=r.a},2657:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var o=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(36)),s=o(n(37)),i=o(n(2)),a=o(n(3130)),l=n(1943);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f,d,p,v,h,g={beforeRouteEnter:(0,n(1886).preload)([function(t){return l.getInfo.request({uuid:t.params.uuid})}]),components:{ModifyRepoDialog:a.default},props:{uuid:{type:String,required:!0}},computed:{gitInfo:l.getInfo.bindData((function(t){return c(c({},t),{},{default_branch:(0,l.getDefaultBranch)(t.branches)})}))},methods:{modifyDialog:(h=(0,s.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getInfo.request({uuid:this.uuid});case 2:this.$dialog("MODIFY_GIT_REPO_DIALOG").open();case 3:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),gitGet:(v=(0,s.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getInfo.request({uuid:this.uuid});case 2:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),getLogs:(p=(0,s.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$router.push({name:"user/git-version/logs",params:{branch:this.gitInfo.default_branch,uuid:this.uuid,skip:"0"}});case 1:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),fetch:(d=(0,s.default)(r.default.mark((function t(){var e,n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.gitInfo.remote){t.next=4;break}this.$notifications.info({title:this.$gettext("Git Fetch"),content:this.$gettext("Remote is not set")}),t.next=9;break;case 4:return t.next=6,l.postFetch.request({uuid:this.uuid});case 6:e=t.sent,(n=e.error)?n.notify():this.$notifications.success({title:this.$gettext("Git Fetch"),content:this.$gettext("Fetch completed")});case 9:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),deploy:(f=(0,s.default)(r.default.mark((function t(){var e,n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.postDeploy.request({uuid:this.uuid});case 2:e=t.sent,(n=e.error)?n.notify():this.$notifications.success({title:this.$gettext("Git Deploy"),content:this.$gettext("Deployment completed")});case 5:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})}};e.default=g},3133:function(t,e,n){var o=n(3679);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4).default)("51c17de2",o,!0,{})},3678:function(t,e,n){"use strict";n(3133)},3679:function(t,e,n){},3680:function(t,e){},4032:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{actions:[{label:t.$gettext("Logs"),visible:t.gitInfo.branches.length>0,icon:"#log",handler:function(){return t.getLogs()}},{label:t.$gettext("Fetch"),visible:t.gitInfo.remote,icon:"#reload",handler:function(){return t.fetch()}},{label:t.$gettext("Deploy"),visible:!0,icon:"#download",handler:function(){return t.deploy()}},{label:t.$gettext("Modify"),visible:!0,icon:"#settings",handler:function(){return t.modifyDialog()}}]}},[n("template",{slot:"page:title"},[n("translate",{attrs:{"translate-params":t.gitInfo}},[t._v("\n            Repository: %{name}\n        ")])],1),t._v(" "),n("template",{slot:"header:buttons"},[t.gitInfo.branches.length>0?n("ui-button-link",{attrs:{theme:"safe",name:"user/git-version/logs",params:{branch:t.gitInfo.default_branch,uuid:t.uuid,skip:0}}},[n("translate",[t._v("Logs")])],1):t._e(),t._v(" "),n("ui-button",{staticClass:"reload",attrs:{theme:"safe"},on:{click:function(e){return t.fetch()}}},[n("translate",[t._v("Fetch")])],1),t._v(" "),n("ui-button",{staticClass:"download",attrs:{theme:"safe"},on:{click:function(e){return t.deploy()}}},[n("translate",[t._v("Deploy")])],1),t._v(" "),n("ui-button",{staticClass:"settings",attrs:{theme:"safe"},on:{click:function(e){return t.modifyDialog()}}},[n("translate",[t._v("Modify")])],1)],1),t._v(" "),n("app-page-section",[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Deploy Branch\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.deploy_branch||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Deploy Directory\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.deploy_dir||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",{directives:[{name:"show",rawName:"v-show",value:t.gitInfo.remote,expression:"gitInfo.remote"}]},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Keyfile\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.keyfile||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Branches\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.branches.join(", ")||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",{directives:[{name:"show",rawName:"v-show",value:t.gitInfo.remote,expression:"gitInfo.remote"}]},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Remote\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.remote||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                URL\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.url||"None")+"\n            ")])],1),t._v(" "),n("ui-form-element",{directives:[{name:"show",rawName:"v-show",value:t.gitInfo.remote,expression:"gitInfo.remote"}]},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Webhook URL\n            ")]),t._v(" "),n("div",{staticClass:"element-text",attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.gitInfo.webhook_url||"None")+"\n            ")])],1)],1),t._v(" "),n("modify-repo-dialog",{attrs:{uuid:t.uuid},on:{modified:t.gitGet}})],2)},r=[]}}]);