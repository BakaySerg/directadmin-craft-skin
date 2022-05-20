(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[4125],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/plugin-manager.vue?vue&type=script&lang=js&":function(t,e,a){"use strict";a("./node_modules/core-js/modules/es.object.define-property.js");var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"X",{value:!0}),e.Z=void 0;var i=n(a("./node_modules/@babel/runtime/regenerator/index.js")),l=n(a("./node_modules/@babel/runtime/helpers/defineProperty.js")),s=n(a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));a("./node_modules/core-js/modules/es.array.find.js"),a("./node_modules/core-js/modules/es.object.to-string.js"),a("./node_modules/core-js/modules/es.function.name.js");var r,o,u,d,c=a("./src/js/api/commands/plugins.js"),p={preload:c.getPluginsList,api:[{command:c.getPluginsList,bind:"plugins"}],data:function(){return{addPluginData:{method:"url",url:"",file:null,passwd:"",install:!0},currentActionData:{action:"",id:""}}},computed:{plugins:function(){return this.$api.plugins}},methods:{getPluginName:function(t){var e=this.plugins.find((function(e){return e.id===t}));return e?e.name:""},addPlugin:(d=(0,s.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={url:c.installPlugin,file:c.uploadPlugin}[this.addPluginData.method],t.prev=1,t.next=4,e(this.addPluginData);case 4:this.reloadPlugins(),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:return t.prev=9,(0,c.getPluginsList)(),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,7,9,12]])}))),function(){return d.apply(this,arguments)}),pluginAction:(u=(0,s.default)(i.default.mark((function t(e,a){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.currentActionData={action:e,id:a},this.$dialog("CONFIRMATION_DIALOG").open();case 2:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)}),reloadPlugins:(o=(0,s.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.commit("navigation/RESET_PLUGINS"),this.$store.dispatch("navigation/LOAD_PLUGINS",{level:this.$state.app.user.accessLevel});case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),doAction:(r=(0,s.default)(i.default.mark((function t(){var e,a,n,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.currentActionData,n=a.action,s=a.id,t.next=3,(0,c.pluginAction)((e={},(0,l.default)(e,n,!0),(0,l.default)(e,"select",[s]),(0,l.default)(e,"passwd",this.addPluginData.passwd),e));case 3:t.sent&&(this.reloadPlugins(),this.currentActionData={id:"",action:""},(0,c.getPluginsList)());case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}};e.Z=p},"./src/js/pages/admin/plugin-manager.vue":function(t,e,a){"use strict";a.r(e),a.d(e,{__esModule:function(){return n.X},default:function(){return u}});var n=a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/admin/plugin-manager.vue?vue&type=script&lang=js&"),i=n.Z,l=a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=a("./src/js/pages/admin/plugin-manager.vue?vue&type=custom&index=0&blockType=route"),r=a.n(s),o=(0,l.Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",{attrs:{actions:[{handler:t.$dialog("ADD_PLUGIN_DIALOG").open,label:t.$gettext("Add Plugin"),icon:"#plus-fill"}]}},[a("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(e){t.$dialog("ADD_PLUGIN_DIALOG").open()}},slot:"header:buttons"},[a("translate",[t._v("Add")])],1),t._v(" "),a("app-page-section",[a("ui-r-table",{attrs:{"is-checkable":!1,rows:t.plugins,columns:[{id:"name",label:t.$gettext("Plugin"),grow:!0,editable:!1},{id:"version",label:t.$gettext("Version")},{id:"available_version",label:t.$gettext("Available Version")},{id:"active",label:t.$gettext("Active")},{id:"can_update",label:t.$gettext("Can Update")},{id:"installed",label:t.$gettext("Installed")},{id:"author",label:t.$gettext("Author"),grow:!0}],"vertical-layout":t.$_Client.isPhone,"disable-pagination":""},scopedSlots:t._u([{key:"col:name",fn:function(e){var n=e.name,i=e.id;return a("ui-grid",{attrs:{cross:"center"}},[a("span",{domProps:{textContent:t._s(n||i)}}),t._v(" "),n?t._e():a("ui-tooltip",{attrs:{theme:"danger"}},[a("translate",[t._v("Corrupted Plugin")])],1)],1)}},{key:"col:active",fn:function(e){var n=e.active;return a("ui-badge",{attrs:{theme:n?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(n?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"col:can_update",fn:function(e){var n=e.available_version;return a("ui-badge",{attrs:{theme:n?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(n?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"col:installed",fn:function(e){var n=e.installed;return a("ui-badge",{attrs:{theme:n?"safe":"danger",size:"small"}},[t._v("\n                "+t._s(n?t.$gettext("Yes"):t.$gettext("No"))+"\n            ")])}},{key:"row:actions",fn:function(e){var n=e.name,i=e.id,l=e.active,s=e.available_version,r=e.installed;return a("ui-actions",{attrs:{position:"left"}},[r?[l?a("ui-link",{key:"deactivate-link",on:{click:function(e){return t.pluginAction("deactivate",i)}}},[a("translate",[t._v("Deactivate")])],1):a("ui-link",{key:"activate-link",on:{click:function(e){return t.pluginAction("activate",i)}}},[a("translate",[t._v("Activate")])],1)]:t._e(),t._v(" "),s?a("ui-link",{key:"update-link",on:{click:function(e){return t.pluginAction("update",i)}}},[a("translate",[t._v("Update")])],1):t._e(),t._v(" "),!r&&n?a("ui-link",{key:"install-link",on:{click:function(e){return t.pluginAction("install",i)}}},[a("translate",[t._v("Install")])],1):a("ui-link",{key:"uninstall-link",on:{click:function(e){return t.pluginAction("uninstall",i)}}},[a("translate",[t._v("Un-Install")])],1),t._v(" "),a("ui-link",{key:"delete-link",on:{click:function(e){return t.pluginAction("delete",i)}}},[a("translate",[t._v("Delete")])],1)],2)}}])})],1),t._v(" "),a("ui-dialog",{attrs:{id:"ADD_PLUGIN_DIALOG"}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n            Add Plugin\n        ")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Upload Method:\n                ")]),t._v(" "),a("template",{slot:"content"},[a("input-radio",{attrs:{value:"url"},model:{value:t.addPluginData.method,callback:function(e){t.$set(t.addPluginData,"method",e)},expression:"addPluginData.method"}},[a("translate",[t._v("URL")])],1),t._v(" "),a("input-radio",{attrs:{value:"file"},model:{value:t.addPluginData.method,callback:function(e){t.$set(t.addPluginData,"method",e)},expression:"addPluginData.method"}},[a("translate",[t._v("File")])],1)],1)],2),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},["url"===t.addPluginData.method?a("ui-form-element",{key:"url",attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        URL\n                    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPluginData.url,expression:"addPluginData.url"}],attrs:{slot:"content",type:"text"},domProps:{value:t.addPluginData.url},on:{input:function(e){e.target.composing||t.$set(t.addPluginData,"url",e.target.value)}},slot:"content"})],1):a("ui-form-element",{key:"file",attrs:{vertical:""}},[a("translate",{attrs:{slot:"title",vertical:""},slot:"title"},[t._v("\n                        File\n                    ")]),t._v(" "),a("input-dropzone",{attrs:{slot:"content",accept:["application/gzip","application/tgz"]},slot:"content",model:{value:t.addPluginData.file,callback:function(e){t.$set(t.addPluginData,"file",e)},expression:"addPluginData.file"}})],1)],1),t._v(" "),a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                    Password\n                ")]),t._v(" "),a("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.passwd,callback:function(e){t.$set(t.addPluginData,"passwd",e)},expression:"addPluginData.passwd"}})],1),t._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.install,callback:function(e){t.$set(t.addPluginData,"install",e)},expression:"addPluginData.install"}},[a("translate",[t._v("Install after upload")])],1)],1)],1),t._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"primary"},on:{click:t.addPlugin},slot:"buttons"},["url"===t.addPluginData.method?a("translate",[t._v("\n                Install\n            ")]):a("translate",[t._v("\n                Upload\n            ")])],1)],1),t._v(" "),a("ui-dialog-confirm",{attrs:{id:"CONFIRMATION_DIALOG"},on:{"click:confirm":t.doAction,"dialog:close":function(e){t.addPluginData.passwd=""}}},["deactivate"===t.currentActionData.action?a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to deactivate "%{ name }" plugin?\n        ')]):"activate"===t.currentActionData.action?a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to activate "%{ name }" plugin?\n        ')]):"update"===t.currentActionData.action?a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to update "%{ name }" plugin?\n        ')]):"install"===t.currentActionData.action?a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to install "%{ name }" plugin?\n        ')]):"uninstall"===t.currentActionData.action?a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to uninstall "%{ name }" plugin?\n        ')]):a("translate",{attrs:{"translate-params":{name:t.getPluginName(t.currentActionData.id)}}},[t._v('\n            Are you sure you want to delete "%{ name }" plugin?\n        ')]),t._v(" "),a("ui-form-element",{attrs:{vertical:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Password\n            ")]),t._v(" "),a("input-password",{attrs:{slot:"content"},slot:"content",model:{value:t.addPluginData.passwd,callback:function(e){t.$set(t.addPluginData,"passwd",e)},expression:"addPluginData.passwd"}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof r()&&r()(o);var u=o.exports},"./src/js/pages/admin/plugin-manager.vue?vue&type=custom&index=0&blockType=route":function(){}}]);