(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1847:function(e,t,n){"use strict";n.r(t);var i=n(4045),a=n(2702);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var s=n(0),l=n(3722),r=n.n(l),d=Object(s.a)(a.default,i.a,i.b,!1,null,null,null);"function"==typeof r.a&&r()(d),t.default=d.exports},2702:function(e,t,n){"use strict";n.r(t);var i=n(2703),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t.default=a.a},2703:function(e,t,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var i=n(1),a=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(38));n(27),n(34),n(5),n(12),n(15),n(21),n(61),n(24),n(26);var s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var r=o?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(i,s,r):i[s]=e[s]}i.default=e,n&&n.set(e,i);return i}(n(2704));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var r={preload:s.getMimetypes,api:[{command:s.getMimetypes,bind:"mimetypes"}],commands:s,data:function(){return{select:[],add:{name:"",extension:""},del:{extension:""}}},computed:{checkedExtensions:function(){var e=this;return this.$api.mimetypes.rows.filter((function(t){var n=t.mimetype;return e.select.includes(n)})).map((function(e){return e.extensions.split(" ")})).reduce((function(e,t){return e.concat(t)}),[])}},methods:{reloadTable:function(){this.$reloadApiTable(),this.$reset()},addMimeType:function(){s.createMimetype({name:this.add.name,extension:this.add.extension}).then(this.reloadTable)},deleteMimeTypes:function(){s.deleteMimetypes({select:this.select}).then(this.reloadTable)},deleteExtension:function(){s.deleteMimetypeExtension({select:this.select,extension:this.del.extension}).then(this.reloadTable)},initDel:function(){var e=(0,o.default)(this.checkedExtensions,1);this.del.extension=e[0]}}};t.default=r},2704:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.deleteMimetypeExtension=t.deleteMimetypes=t.createMimetype=t.getSystemMimetypes=t.getMimetypes=void 0;var a=i(n(78)),o=a.default.get({id:"MIMETYPES",url:"/CMD_MIME_TYPES",domain:!0,pagination:!0,after:function(e){return e.flow((function(e){return{rows:e}}),e.processTableInfo("rows"),e.mapProps({rows:e.toArray}))}});t.getMimetypes=o;var s=o.extend({id:"SYSTEM_MIMETYPES",params:{action:"system"}});t.getSystemMimetypes=s;var l=a.default.post({url:"/CMD_MIME_TYPES",params:{action:"add"},domain:!0,schema:{name:a.default.REQUIRED_STRING,extension:a.default.REQUIRED_STRING}});t.createMimetype=l;var r=a.default.select({url:"/CMD_MIME_TYPES",params:{action:"multiple",button:"type"},domain:!0});t.deleteMimetypes=r;var d=r.extend({params:{button:"extension"},schema:{extension:a.default.REQUIRED_STRING}});t.deleteMimetypeExtension=d},3722:function(e,t){},4045:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",[n("template",{slot:"details"},[n("ui-infobar-item",{attrs:{title:e.$gettext("Add Mime Type")}},[n("ui-form-element",{attrs:{group:"addMimeType",validators:{required:!0},vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Name\n                ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.add.name,callback:function(t){e.$set(e.add,"name",t)},expression:"add.name"}})],1),e._v(" "),n("ui-form-element",{attrs:{group:"addMimeType",validators:{required:!0},vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Extension\n                ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.add.extension,callback:function(t){e.$set(e.add,"extension",t)},expression:"add.extension"}})],1),e._v(" "),n("ui-button",{directives:[{name:"margin",rawName:"v-margin:top",value:2,expression:"2",arg:"top"}],staticClass:"width:100%",attrs:{theme:"safe","validate-group":"addMimeType"},on:{click:e.addMimeType}},[n("translate",[e._v("Add")])],1)],1)],1),e._v(" "),n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){e.$dialog("ADD_MIMETYPE_DIALOG").open()}},slot:"header:buttons"},[n("translate",[e._v("Add Mime Type")])],1),e._v(" "),n("app-page-section",[n("ui-api-table",e._b({ref:"table",attrs:{"equal-width-layout":""},on:{"action:deleteMimetype":function(t){e.$dialog("DELETE_MIMETYPES_DIALOG").open()},"action:deleteExtension":function(t){e.$dialog("DELETE_EXTENSION_DIALOG").open()}},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getMimetypes,rowID:"mimetype",columns:{mimetype:e.$gettext("Mime Type"),extensions:e.$gettext("Extensions")},actions:{deleteMimetype:e.$gettext("Delete Mime Type"),deleteExtension:e.$gettext("Delete Extension")}},!1))],1),e._v(" "),n("ui-link",{attrs:{slot:"bottom:links",name:"user/mimetypes/system"},slot:"bottom:links"},[n("translate",[e._v("System Mime Types")])],1),e._v(" "),n("ui-dialog",{attrs:{id:"ADD_MIMETYPE_DIALOG",theme:"safe"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Add New Mime Type\n        ")]),e._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{group:"addMimeType",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Name\n                ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.add.name,callback:function(t){e.$set(e.add,"name",t)},expression:"add.name"}})],1),e._v(" "),n("ui-form-element",{attrs:{group:"addMimeType",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                    Extension\n                ")]),e._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.add.extension,callback:function(t){e.$set(e.add,"extension",t)},expression:"add.extension"}})],1)],1),e._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe","validate-group":"addMimeType"},on:{click:e.addMimeType},slot:"buttons"},[n("translate",[e._v("Add")])],1)],2),e._v(" "),n("ui-dialog-delete-items",{attrs:{id:"DELETE_MIMETYPES_DIALOG",subject:e.$ngettext("Mime Type","Mime Types",e.select.length)},on:{"click:confirm":e.deleteMimeTypes}}),e._v(" "),n("ui-dialog",{attrs:{id:"DELETE_EXTENSION_DIALOG",theme:"danger"},on:{"dialog:open":e.initDel}},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n            Delete Extension\n        ")]),e._v(" "),n("ui-form-element",{attrs:{slot:"content"},slot:"content"},[n("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n                Extension:\n            ")]),e._v(" "),n("input-select",{attrs:{slot:"content",options:e.checkedExtensions},slot:"content",model:{value:e.del.extension,callback:function(t){e.$set(e.del,"extension",t)},expression:"del.extension"}})],1),e._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger"},on:{click:e.deleteExtension},slot:"buttons"},[n("translate",[e._v("Delete")])],1)],1)],2)},a=[]}}]);