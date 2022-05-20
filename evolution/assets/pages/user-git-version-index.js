(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[7704],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/info-repo-dialog-has-remote.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o={props:{item:{type:Object,required:!0}}};t.Z=o},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/info-repo-dialog.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o={props:{item:{type:Object,required:!0}},methods:{showKey:function(e){return"uuid"!=e&&"remote"!=e&&"webhook_url"!=e&&"keyfile"!=e&&"branches"!=e}}};t.Z=o},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var n=o(s("./node_modules/@babel/runtime/regenerator/index.js"));s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.object.assign.js");var i,r,u=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=s("./src/js/api/commands/fm.js"),d=s("./src/js/endpoints/git-version/index.ts"),a=s("./src/js/api/endpoint/index.ts"),c={beforeRouteEnter:(0,a.preload)([function(){return d.getInfo.request({uuid:undefined.uuid})}]),props:{uuid:{type:String,required:!0}},data:function(){return{query:{deploy_branch:"",deploy_dir:"",keyfile:"",branches:[]}}},computed:{gitInfo:d.getInfo.bindData(),name:function(){return this.gitInfo.name},homeDir:function(){return this.$state.session.homeDir}},methods:{validateKeyFile:function(e){return!e||(0,l.checkExists)({path:e})},initRepoInfo:(r=(0,u.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.query=Object.assign(this.query,this.gitInfo);case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),submit:(i=(0,u.default)(n.default.mark((function e(){var t,s;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$valid("edit-repo")){e.next=7;break}return e.next=3,d.putModify.request({uuid:this.uuid,deploy_branch:this.query.deploy_branch,deploy_dir:this.query.deploy_dir,keyfile:this.query.keyfile});case 3:t=e.sent,(s=t.error)?s.notify():this.$notifications.success({title:this.$gettext("Git Modify"),content:this.$gettext("Repository modified")}),this.$emit("modified");case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}};t.Z=c},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/index.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var n=o(s("./node_modules/@babel/runtime/regenerator/index.js")),i=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));s("./node_modules/core-js/modules/es.object.to-string.js");var r,u,l,d,a,c,p,f=o(s("./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue")),m=o(s("./src/js/pages/user/git-version/_dialogs/info-repo-dialog.vue")),_=o(s("./src/js/pages/user/git-version/_dialogs/info-repo-dialog-has-remote.vue")),v=s("./src/js/endpoints/git-version/index.ts"),g={beforeRouteEnter:(0,s("./src/js/api/endpoint/index.ts").preload)([function(){return v.getGit.request()}]),components:{ModifyRepoDialog:f.default,InfoRepoDialog:m.default,InfoRepoDialogHasRemote:_.default},data:function(){return{currentItem:{}}},computed:{showLogsButton:function(){return this.gitList.some((function(e){return e.valid&&0!==e.branches.length}))},gitList:v.getGit.bindData()},watch:{$domain:function(){this.getList()}},methods:{defaultBranch:function(e){return v.helpers.getDefaultBranch(e.branches)},getList:(p=(0,i.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.getGit.request();case 1:case"end":return e.stop()}}),e)}))),function(){return p.apply(this,arguments)}),modifyDialog:(c=(0,i.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.currentItem=t,e.next=3,v.getInfo.request({uuid:t.uuid});case 3:this.$dialog("MODIFY_GIT_REPO_DIALOG").open();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)}),infoDialog:(a=(0,i.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getInfo.request({uuid:t.uuid});case 2:this.currentItem=t,t.remote?this.$dialog("INFO_GIT_REPO_DIALOG_HAS_REMOTE").open():this.$dialog("INFO_GIT_REPO_DIALOG").open();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),fetch:(d=(0,i.default)(n.default.mark((function e(t){var s,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.remote){e.next=4;break}this.$notifications.info({title:this.$gettext("Git Fetch"),content:this.$gettext("Remote is not set")}),e.next=9;break;case 4:return e.next=6,v.postFetch.request({uuid:t.uuid});case 6:s=e.sent,(o=s.error)?o.notify():this.$notifications.success({title:this.$gettext("Git Fetch"),content:this.$gettext("Fetch completed")});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)}),deploy:(l=(0,i.default)(n.default.mark((function e(t){var s,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.postDeploy.request({uuid:t.uuid});case 2:s=e.sent,(o=s.error)?o.notify():this.$notifications.success({title:this.$gettext("Git Deploy"),content:this.$gettext("Deployment completed")});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),deleteRepoBefore:(u=(0,i.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentItem=t,this.$dialog("DELETE_ITEMS_DIALOG").open();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)}),deleteRepoAfter:(r=(0,i.default)(n.default.mark((function e(){var t,s;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.deleteRepo.request({uuid:this.currentItem.uuid});case 2:t=e.sent,(s=t.error)?s.notify():(this.$notifications.success({title:this.$gettext("Delete"),content:this.$gettext("Repository deleted")}),this.getList());case 5:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})}};t.Z=g},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=style&index=0&id=a8ccbe52&lang=scss&scoped=true&":function(){},"./src/js/endpoints/git-version/index.ts":function(e,t,s){"use strict";s.r(t),s.d(t,{deleteRepo:function(){return c},getCommit:function(){return _},getGit:function(){return u},getInfo:function(){return p},getLogs:function(){return f},helpers:function(){return o},postDeploy:function(){return r},postFetch:function(){return d},postInit:function(){return l},postWebhook:function(){return a},putModify:function(){return m}});var o={};s.r(o),s.d(o,{getDefaultBranch:function(){return i}});var n=s("./src/js/api/endpoint/index.ts"),i=function(e){return 0===e.length?"":["main","master"].find((function(t){return e.includes(t)}))||e[0]},r=(0,n.POST)("/git/uuid/:uuid/deploy",{statusCodes:{409:"GIT_DEPLOY_BRANCH_NOT_SET",410:"GIT_DEPLOY_DIR_NOT_SET"},errorMessages:{GIT_DEPLOY_BRANCH_NOT_SET:(0,n.$gettext)("Git deploy branch is not set"),GIT_DEPLOY_DIR_NOT_SET:(0,n.$gettext)("Git deploy directory is not set")}}),u=(0,n.GET)("/git/domain/:domain"),l=(0,n.POST)("/git/domain/:domain",{statusCodes:{409:"GIT_DIRECTORY_EXISTS"},errorMessages:{GIT_DIRECTORY_EXISTS:(0,n.$gettext)("Git directory exists %{ directory }")}}),d=(0,n.POST)("/git/uuid/:uuid/fetch"),a=(0,n.POST)("/git/uuid/:uuid/webhook"),c=(0,n.DELETE)("/git/uuid/:uuid"),p=(0,n.GET)("/git/uuid/:uuid"),f=(0,n.GET)("/git/uuid/:uuid/branch/:branch"),m=(0,n.PUT)("/git/uuid/:uuid"),_=(0,n.GET)("/git/uuid/:uuid/commit/:commit")},"./src/js/pages/user/git-version/_dialogs/info-repo-dialog-has-remote.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/info-repo-dialog-has-remote.vue?vue&type=script&lang=js&"),n=o.Z,i=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"INFO_GIT_REPO_DIALOG_HAS_REMOTE",size:"normal","no-close-btn":!0}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Info\n    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("table",e._l(e.item,(function(t,o){return s("tr",{key:o},["uuid"!=o?s("td",{domProps:{textContent:e._s(""+o.replace("_"," "))}}):e._e(),e._v(" "),"branches"==o?s("td",{domProps:{textContent:e._s(t.join(", "))}}):"uuid"!=o?s("td",{domProps:{textContent:e._s(t)}}):e._e()])})),0)])],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/git-version/_dialogs/info-repo-dialog.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/info-repo-dialog.vue?vue&type=script&lang=js&"),n=o.Z,i=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"INFO_GIT_REPO_DIALOG",size:"normal","no-close-btn":!0}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Info\n    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("table",e._l(e.item,(function(t,o){return s("tr",{key:o},[e.showKey(o)?[s("td",{domProps:{textContent:e._s(""+o.replace("_"," "))}}),e._v(" "),s("td",{domProps:{textContent:e._s(t)}})]:e._e(),e._v(" "),"branches"===o?[s("td",{domProps:{textContent:e._s(""+o.replace("_"," "))}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.join(", "))}})]:e._e()],2)})),0)])],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return r}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=script&lang=js&"),n=o.Z,i=(s("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=style&index=0&id=a8ccbe52&lang=scss&scoped=true&"),(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"MODIFY_GIT_REPO_DIALOG",size:"normal"},on:{"dialog:open":e.initRepoInfo}},[s("translate",{attrs:{slot:"title","translate-params":{name:e.name}},slot:"title"},[e._v("\n        Modify Repository %{ name }\n    ")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Deploy Branch\n            ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:e.query.branches||[]},slot:"content",model:{value:e.query.deploy_branch,callback:function(t){e.$set(e.query,"deploy_branch",t)},expression:"query.deploy_branch"}})],1),e._v(" "),s("ui-form-element",{attrs:{vertical:"",group:"edit-repo",validators:{required:!1}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Deploy Directory\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},slot:"content",model:{value:e.query.deploy_dir,callback:function(t){e.$set(e.query,"deploy_dir",t)},expression:"query.deploy_dir"}})],1),e._v(" "),s("ui-form-element",{directives:[{name:"show",rawName:"v-show",value:e.gitInfo.remote,expression:"gitInfo.remote"}],attrs:{vertical:"",group:"edit-repo",validators:{required:!1}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Key file\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},slot:"content",model:{value:e.query.keyfile,callback:function(t){e.$set(e.query,"keyfile",t)},expression:"query.keyfile"}})],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary","validate-group":"edit-repo"},on:{click:e.submit},slot:"buttons"},[s("translate",[e._v("Save")])],1)],1)}),[],!1,null,"a8ccbe52",null)),r=i.exports},"./src/js/pages/user/git-version/index.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return d}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/index.vue?vue&type=script&lang=js&"),n=o.Z,i=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),r=s("./src/js/pages/user/git-version/index.vue?vue&type=custom&index=0&blockType=route"),u=s.n(r),l=(0,i.Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{actions:[{label:e.$gettext("Create Repository"),visible:!0,icon:"#plus-fill",name:"user/git-version/create"}]}},[s("template",{slot:"header:buttons"},[s("ui-button-link",{attrs:{name:"user/git-version/create",theme:"primary"}},[s("translate",[e._v("Create Repository")])],1)],1),e._v(" "),s("app-page-section",[s("ui-r-table",e._b({attrs:{"disable-pagination":""},scopedSlots:e._u([{key:"col:name",fn:function(t){var o=t.item;return s("ui-link",{attrs:{name:"user/git-version/info",params:{uuid:o.uuid},disabled:!o.valid}},[e._v("\n                "+e._s(o.name)+"\n                "),o.valid?e._e():s("ui-badge",{attrs:{theme:"danger",title:e.$gettext("Repository is not valid")}})],1)}},{key:"row:actions",fn:function(t){var o=t.item;return s("ui-actions",{},[o.valid?s("ui-link",{on:{click:function(t){return e.modifyDialog(o)}}},[s("translate",[e._v("Edit")])],1):e._e(),e._v(" "),o.valid&&o.branches.length?s("ui-link",{attrs:{name:"user/git-version/logs",params:{branch:e.defaultBranch(o),uuid:o.uuid,skip:"0"}}},[s("translate",[e._v("Logs")])],1):e._e(),e._v(" "),o.valid?s("ui-link",{on:{click:function(t){return e.infoDialog(o)}}},[s("translate",[e._v("Info")])],1):e._e(),e._v(" "),o.valid&&o.remote?s("ui-link",{staticClass:"reload",on:{click:function(t){return e.fetch(o)}}},[s("translate",[e._v("Fetch")])],1):e._e(),e._v(" "),o.valid?s("ui-link",{staticClass:"download",on:{click:function(t){return e.deploy(o)}}},[s("translate",[e._v("Deploy")])],1):e._e(),e._v(" "),s("ui-link",{on:{click:function(t){return e.deleteRepoBefore(o)}}},[s("translate",[e._v("Delete")])],1)],1)}}])},"ui-r-table",{rows:e.gitList,columns:[{id:"name",label:e.$gettext("Name")},{id:"url",label:e.$gettext("Url")}],verticalLayout:e.$_Client.isPhone,isCheckable:!1},!1))],1),e._v(" "),e.currentItem.uuid?s("modify-repo-dialog",{attrs:{uuid:e.currentItem.uuid},on:{modified:e.getList}}):e._e(),e._v(" "),s("info-repo-dialog-has-remote",{attrs:{item:e.currentItem}}),e._v(" "),s("info-repo-dialog",{attrs:{item:e.currentItem}}),e._v(" "),s("ui-dialog-delete-items",{on:{"click:confirm":function(t){return e.deleteRepoAfter()}}},[e._v("\n        "+e._s(e.currentItem.name)+"\n    ")])],2)}),[],!1,null,null,null);"function"==typeof u()&&u()(l);var d=l.exports},"./src/js/pages/user/git-version/index.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=style&index=0&id=a8ccbe52&lang=scss&scoped=true&":function(e,t,s){var o=s("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/git-version/_dialogs/modify-repo-dialog.vue?vue&type=style&index=0&id=a8ccbe52&lang=scss&scoped=true&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("2d05da27",o,!0,{})}}]);