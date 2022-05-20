(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[7731],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_components/authorized-keys.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js");var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var s=n(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,s&&s.set(e,r);return r}(s("./src/js/api/commands/user/ssh-keys/index.ts"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(n=function(e){return e?s:t})(e)}var a={api:[{command:r.getKeys,bind:{"response.authorized":"keys"}}],data:function(){return{checkedRows:[],keys:!1}},computed:{checkedKeys:function(){return this.checkedRows.map((function(e){return e.fingerprint}))},showGlobal:function(){return"user"!==this.$state.app.user.level}},methods:{reloadKeys:function(){r.getKeys(),this.$reset()},editKey:function(e){this.keys=this.$api.keys,this.$router.push({name:"user/ssh-keys/edit",params:{fingerprint:e}})},deleteKeys:function(){r.deleteAuthorizedKeys({select:this.checkedKeys}).then(this.reloadKeys)}}};t.Z=a},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_components/public-keys.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.map.js");var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var s=n(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,s&&s.set(e,r);return r}(s("./src/js/api/commands/user/ssh-keys/index.ts"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(n=function(e){return e?s:t})(e)}var a={api:[{command:r.getKeys,bind:{"response.public":"keys"}}],data:function(){return{checkedRows:[]}},computed:{checkedKeys:function(){return this.checkedRows.map((function(e){return e.fingerprint}))}},methods:{reloadKeys:function(){r.getKeys(),this.checkedRows=[]},authorizeKeys:function(){r.authorizeKeys({select:this.checkedKeys}).then(this.reloadKeys)},deleteKeys:function(){r.deleteKeys({select:this.checkedKeys}).then(this.reloadKeys)}}};t.Z=a},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_dialogs/create-key-dialog.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.string.replace.js");var o=s("./src/js/api/commands/user/ssh-keys/index.ts"),r={props:{keysizes:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{id:"",comment:"",keysize:"",password:"",overwrite:!1,authorize:!1}},api:[{command:o.getKeys,bind:{"response.public":"keys"}}],computed:{keyData:function(){return{id:this.id,comment:this.comment,keysize:this.keysize,passwd:this.password,overwrite:this.overwrite,authorize:this.authorize}},keyNames:function(){return this.$api.keys.map((function(e){return e.id.replace("_rsa","")}))}},methods:{setKeysize:function(){this.keysize=this.keysizes.value},submit:function(){(0,o.createKey)(this.keyData).then((function(){return(0,o.getKeys)()})).then(this.$reset)}}};t.Z=r},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_dialogs/paste-key-dialog.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var s=n(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,s&&s.set(e,r);return r}(s("./src/js/api/commands/user/ssh-keys/index.ts"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(n=function(e){return e?s:t})(e)}var a={data:function(){return{text:""}},methods:{submit:function(){r.pasteKey({text:this.text}).then(r.getKeys).then(this.$reset)}}};t.Z=a},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/index.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,s("./node_modules/core-js/modules/es.array.map.js");var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var s=c(t);if(s&&s.has(e))return s.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,s&&s.set(e,o);return o}(s("./src/js/api/commands/user/ssh-keys/index.ts")),a=s("./src/js/vue/mixins.js"),l=o(s("./src/js/pages/user/ssh-keys/_dialogs/create-key-dialog.vue")),i=o(s("./src/js/pages/user/ssh-keys/_dialogs/paste-key-dialog.vue")),u=o(s("./src/js/pages/user/ssh-keys/_components/authorized-keys.vue")),d=o(s("./src/js/pages/user/ssh-keys/_components/public-keys.vue"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(c=function(e){return e?s:t})(e)}var p={preload:n.getKeys,components:{CreateKeyDialog:l.default,PublicKeys:d.default,AuthorizedKeys:u.default,PasteKeyDialog:i.default},mixins:[(0,a.$bindTab)({defaultTab:"public",param:"tab"})],api:[{command:n.getKeys,bind:"keys"}],data:function(){return{checkedRows:[]}},computed:{checkedKeys:function(){return this.checkedRows.map((function(e){return e.fingerprint}))}},methods:{}};t.Z=p},"./src/js/api/commands/user/ssh-keys/index.ts":function(e,t,s){"use strict";s.r(t),s.d(t,{authorizeKeys:function(){return b},createKey:function(){return y},deleteAuthorizedKeys:function(){return v},deleteKeys:function(){return _},getKeys:function(){return f},modifyKey:function(){return h},pasteKey:function(){return j}});var o,r=s("./src/js/api/command/index.js"),n=s("./node_modules/ramda/es/index.js"),a=s("./src/js/api/commands/converters/index.ts"),l=s("./node_modules/monet/dist/monet.js"),i=function(){return i=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};!function(e){e.VALUE="value",e.CHECKBOX="checkbox"}(o||(o={}));var u=n.pipe(n.prop("keysize"),a.toSelectData),d=function(e,t){return i(i({id:e},t),{timestamp:(0,a.toAppDate)(t.timestamp)})},c={getKeys:{users:function(e){return l.Maybe.Some(e).flatMap((function(e){return l.Maybe.fromNull(e.users)})).orSome([])},options:n.prop("key_options"),sizes:u,public:function(e){return n.toPairs(e.public_keys).map(n.apply(d))},authorized:function(e){return n.values(e.authorized_keys).map(function(e){return function(t){var s=l.Maybe.Some(t).flatMap((function(e){return l.Maybe.fromNull(e.options)})).map(n.defaultTo({})).map(n.values).map(n.reduce((function(e,t){var s,o=t.name,r=t.value;return i(i({},e),((s={})[o]=r,s))}),{})).orSome({}),o=l.Maybe.Some(e).flatMap((function(e){return l.Maybe.fromNull(e.global_keys)})).flatMap((function(e){return l.Maybe.fromNull(e[t.fingerprint])})),r=o.map((function(e){return e.who})).orSome("no"),a=o.flatMap((function(e){return l.Maybe.fromNull(e.users)})).map(n.toPairs).map(n.filter(n.pipe(n.nth(1),n.prop("enabled"),n.equals("yes")))).map(n.map(n.head)).orSome([]);return i(i({},t),{options:s,global:r,users:"except"===r?n.without(a,e.users||[]):a})}}(e))}}},p=function(){return p=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)},m="/CMD_SSH_KEYS",f=r.default.get({id:"SSH_KEYS",url:m,mapResponse:c.getKeys,schema:{enabled_users:r.default.OPTIONAL_BOOL,fingerprint:r.default.OPTIONAL_STRING}}),y=r.default.post({url:m,params:{action:"create",type:"rsa"},schema:{id:r.default.REQUIRED_STRING,comment:r.default.REQUIRED_STRING,keysize:r.default.REQUIRED_STRING,passwd:r.default.OPTIONAL_STRING,overwrite:r.default.REQUIRED_BOOL,authorize:r.default.REQUIRED_BOOL},before:function(e){return{passwd2:e.passwd}}}),b=r.default.select({url:m,params:{type:"public",authorize:!0}}),_=r.default.select({url:m,params:{type:"public",delete:!0}}),v=r.default.select({url:m,params:{type:"authorized_keys",delete:!0}}),j=r.default.post({url:m,params:{type:"paste",action:"authorize"},schema:{text:r.default.REQUIRED_STRING}}),h=r.default.post({url:"/CMD_SSH_KEYS",params:{action:"modify"},schema:{fingerprint:r.default.REQUIRED_STRING,comment:r.default.REQUIRED_STRING,options:{type:Object,required:!0,default:function(){return{}}},global:r.default.REQUIRED_BOOL,users:{type:Array,required:!0,default:function(){return[]}},who:r.default.OPTIONAL_STRING},before:function(e){var t=e.options,s=e.users,o=e.global;return p(p({},t),{global_key:o,select:s,options:null,global:null,users:null})}})},"./src/js/pages/user/ssh-keys/_components/authorized-keys.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return n}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_components/authorized-keys.vue?vue&type=script&lang=js&"),r=o.Z,n=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-r-table",{attrs:{columns:[{id:"comment",label:e.$gettext("Comment")},{id:"fingerprint",label:e.$gettext("Fingerprint")},{id:"type",label:e.$gettext("Type")},{id:"keysize",label:e.$gettext("Size")},{id:!!e.showGlobal&&"global",label:e.$gettext("Global Key")},{id:"options",label:e.$gettext("Options")}],rows:e.keys||e.$api.keys,"checked-rows":e.checkedRows},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"col:options",fn:function(t){var o=t.options;return s("ui-grid",{attrs:{column:""}},e._l(o,(function(t,o){return s("span",[e._v("\n            "+e._s(o)),t?[e._v(" = "+e._s(t))]:e._e()],2)})),0)}},{key:"col:global",fn:function(t){var o=t.global;return s("span",{},[e._v("\n        "+e._s({no:e.$gettext("No"),selected:e.$gettext("Selected Users"),all:e.$gettext("All Users"),except:e.$gettext("Except Selected Users")}[o])+"\n    ")])}},{key:"row:actions",fn:function(t){var o=t.fingerprint;return s("ui-link",{on:{click:function(t){return e.editKey(o)}}},[s("ui-icon",{attrs:{id:"pencil",size:"medium"}})],1)}}])},[s("ui-table-action",{attrs:{slot:"table:actions"},on:{click:e.deleteKeys},slot:"table:actions"},[s("translate",[e._v("Delete")])],1)],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/ssh-keys/_components/public-keys.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return n}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_components/public-keys.vue?vue&type=script&lang=js&"),r=o.Z,n=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-r-table",{key:"public",attrs:{slot:"tab:public",columns:[{id:"id",label:e.$gettext("Key ID")},{id:"comment",label:e.$gettext("Comment")},{id:"fingerprint",label:e.$gettext("Fingerprint")},{id:"type",label:e.$gettext("Type")},{id:"keysize",label:e.$gettext("Size")}],rows:e.$api.keys,"checked-rows":e.checkedRows},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},slot:"tab:public",scopedSlots:e._u([{key:"col:id",fn:function(t){var o=t.id;return s("a",{attrs:{href:"/CMD_FILE_MANAGER/.ssh/"+o+".pub",download:o+".pub"}},[e._v("\n        "+e._s(o)+"\n    ")])}}])},[s("template",{slot:"table:actions"},[s("ui-table-action",{on:{click:e.authorizeKeys}},[s("translate",[e._v("Authorize")])],1),e._v(" "),s("ui-table-action",{on:{click:e.deleteKeys}},[s("translate",[e._v("Delete")])],1)],1)],2)}),[],!1,null,null,null).exports},"./src/js/pages/user/ssh-keys/_dialogs/create-key-dialog.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return n}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_dialogs/create-key-dialog.vue?vue&type=script&lang=js&"),r=o.Z,n=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"CREATE_KEY_DIALOG",size:"small"},on:{"dialog:open":e.setKeysize}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Create SSH Key\n    ")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",{attrs:{vertical:"",group:"createKey",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Key ID\n            ")]),e._v(" "),s("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                Filename of the new key\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content",suffix:"_rsa",placeholder:"id"},slot:"content",model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),e._v(" "),s("translate",{attrs:{slot:"error:regex"},slot:"error:regex"},[e._v("\n                Should not contain special characters\n            ")])],1),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.authorize,callback:function(t){e.authorize=t},expression:"authorize"}},[s("translate",[e._v("Authorize")])],1)],1),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.keyNames.includes(e.id)?s("ui-form-element",{attrs:{vertical:""}},[s("span",{attrs:{slot:"title"},slot:"title"}),e._v(" "),s("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.overwrite,callback:function(t){e.overwrite=t},expression:"overwrite"}},[s("translate",[e._v("Overwrite")])],1)],1):e._e()],1),e._v(" "),s("ui-form-element",{attrs:{group:"createKey",validators:{required:!0},vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Comment\n            ")]),e._v(" "),s("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                Descriptor for the Key\n            ")]),e._v(" "),s("input-text",{attrs:{slot:"content",placeholder:"descriptive@comment.com"},slot:"content",model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Key size\n            ")]),e._v(" "),s("input-select",{attrs:{slot:"content",options:e.keysizes.options},slot:"content",model:{value:e.keysize,callback:function(t){e.keysize=t},expression:"keysize"}})],1),e._v(" "),s("ui-form-element",{attrs:{vertical:""}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Password\n            ")]),e._v(" "),s("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[e._v("\n                Optional\n            ")]),e._v(" "),s("input-password",{attrs:{slot:"content"},slot:"content",model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary",disabled:e.keyNames.includes(e.id)&&!e.overwrite,"validate-group":"createKey"},on:{click:e.submit},slot:"buttons"},[s("translate",[e._v("Create")])],1)],2)}),[],!1,null,null,null).exports},"./src/js/pages/user/ssh-keys/_dialogs/paste-key-dialog.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return n}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/_dialogs/paste-key-dialog.vue?vue&type=script&lang=js&"),r=o.Z,n=(0,s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"PASTE_KEY_DIALOG",size:"normal"}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Paste Authorized Key\n    ")]),e._v(" "),s("ui-form-element",{attrs:{slot:"content",group:"pasteKey",validators:{required:!0},vertical:""},slot:"content"},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Line\n        ")]),e._v(" "),s("input-text",{attrs:{slot:"content",placeholder:"(options) ssh-rsa ... comment"},slot:"content",model:{value:e.text,callback:function(t){e.text=t},expression:"text"}},[s("ui-link",{attrs:{slot:"additions:right",href:"https://man.openbsd.org/sshd#AUTHORIZED_KEYS_FILE_FORMAT",target:"_blank"},slot:"additions:right"},[s("ui-button",{attrs:{icon:"question"}})],1)],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"safe","validate-group":"pasteKey"},on:{click:e.submit},slot:"buttons"},[s("translate",[e._v("Create")])],1)],1)}),[],!1,null,null,null).exports},"./src/js/pages/user/ssh-keys/index.vue":function(e,t,s){"use strict";s.r(t),s.d(t,{__esModule:function(){return o.X},default:function(){return u}});var o=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/user/ssh-keys/index.vue?vue&type=script&lang=js&"),r=o.Z,n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./src/js/pages/user/ssh-keys/index.vue?vue&type=custom&index=0&blockType=route"),l=s.n(a),i=(0,n.Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",{attrs:{actions:[{label:e.$gettext("Create Key"),handler:e.$dialog("CREATE_KEY_DIALOG").open,icon:"#plus-fill"},{label:e.$gettext("Paste Key"),handler:e.$dialog("PASTE_KEY_DIALOG").open,icon:"#clipboard-copy"}]}},[s("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("CREATE_KEY_DIALOG").open()}},slot:"header:buttons"},[s("translate",[e._v("Create Key")])],1),e._v(" "),s("ui-button",{attrs:{slot:"header:buttons",theme:"safe"},on:{click:function(t){e.$dialog("PASTE_KEY_DIALOG").open()}},slot:"header:buttons"},[s("translate",[e._v("Paste Key")])],1),e._v(" "),s("app-page-section",[s("ui-tabs",{attrs:{tabs:[{id:"public",label:e.$gettext("Public Keys")},{id:"authorized",label:e.$gettext("Authorized Keys")}],selected:e.tab},on:{"update:selected":function(t){e.tab=t}}},[s("PublicKeys",{key:"public-keys",attrs:{slot:"tab:public"},slot:"tab:public"}),e._v(" "),s("AuthorizedKeys",{key:"authorized-keys",attrs:{slot:"tab:authorized"},slot:"tab:authorized"})],1)],1),e._v(" "),s("create-key-dialog",{attrs:{keysizes:e.$api.keys.sizes}}),e._v(" "),s("paste-key-dialog")],1)}),[],!1,null,null,null);"function"==typeof l()&&l()(i);var u=i.exports},"./src/js/pages/user/ssh-keys/index.vue?vue&type=custom&index=0&blockType=route":function(){}}]);