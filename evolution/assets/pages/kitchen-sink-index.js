(self.webpackChunkcraft=self.webpackChunkcraft||[]).push([[332],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es.symbol.js"),n("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),n("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),n("./node_modules/core-js/modules/es.object.define-properties.js"),n("./node_modules/core-js/modules/es.object.define-property.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=o(n("./node_modules/@babel/runtime/helpers/typeof.js"));n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.array.includes.js"),n("./node_modules/core-js/modules/es.number.constructor.js"),n("./node_modules/core-js/modules/es.array.find.js"),n("./node_modules/core-js/modules/web.dom-collections.for-each.js"),n("./node_modules/core-js/modules/es.array.reduce.js"),n("./node_modules/core-js/modules/es.array.filter.js"),n("./node_modules/core-js/modules/es.array.map.js"),n("./node_modules/core-js/modules/es.regexp.to-string.js"),n("./node_modules/core-js/modules/es.string.includes.js"),n("./node_modules/core-js/modules/es.object.keys.js"),n("./node_modules/core-js/modules/es.object.assign.js"),n("./node_modules/core-js/modules/es.array.iterator.js"),n("./node_modules/core-js/modules/web.dom-collections.iterator.js");var r=n("./src/js/modules/utils/lodash.js"),l=n("./src/js/modules/utils/other.js");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={props:{component:{type:Object,required:!0},componentInstance:{type:Function,required:!0},values:{type:Object,required:!0},options:{type:Array,default:function(){return[]},validator:function(e){return e.every((function(e){return["string","object"].includes((0,i.default)(e))}))}},model:{type:[String,Number,Boolean,Object,Array],required:!0}},data:function(){return{shouldRender:!0,normalizedOptions:[],tempValue:null,instance:null}},computed:{modelOption:function(){return this.normalizedOptions.find((function(e){return e.isModel}))||{}},textSlot:function(){var e=this.normalizedOptions.find((function(e){return"textSlot"===e.type}));return!!e&&e.value}},created:function(){var e=this;this.normalizeOptions(),this.normalizedOptions.forEach((function(t,n){e.$watch((function(){return e.normalizedOptions[n].value}),(function(n){t.onChange&&t.onChange(n),e.$emit("update:renderedOptions",e.renderedOptions())}),{immediate:!0})})),this.$watch("instance",(function(){e.$forceUpdate()})),void 0!==this.model&&(this.normalizedOptions.push({id:"v-model",type:"code",value:this.model,isModel:!0}),this.$watch("model",(function(t){e.modelOption.value=t})))},beforeUpdate:function(){this.instance=this.componentInstance?this.componentInstance():this.$refs.component},methods:{resetComponent:function(){var e=this;this.shouldRender=!1,this.$nextTick((function(){e.shouldRender=!0})),this.$nextTick((function(){e.$forceUpdate()}),1)},renderedOptions:function(e){return this.normalizedOptions.filter((function(t){return!e||t.isProp})).reduce((function(e,t){return u(u({},e),{},(0,s.default)({},t.id,"array"===t.type?r._.get(t,"value.value"):t.value))}),{})},valueToString:function(e){var t=Array.isArray(e),n=(t?e:[e]).map((function(e){return e instanceof File&&(e=(0,l.reduceToObject)(e,["name","size","type","lastModified"])),e}));return n=t?n:n[0],"object"===(0,i.default)(n)?JSON.stringify(n,null,4):n.toString()},normalizeOptions:function(){var e=this;this.normalizedOptions=this.options.map((function(t){var n="string"==typeof t?t:t.id,o=u({id:n},"object"===(0,i.default)(t)?t:{}),s=e.component&&Object.keys(e.component.props).includes(n),r=function(){if(s){var t=e.component.props[n];return"function"==typeof t?{type:t}:t}return{}}(),a=void 0!==o.value?o.value:void 0!==r.default?"function"==typeof r.default?r.default():r.default:void 0,c=o.type?o.type:void 0!==a?(0,l.getType)(a):r.type?(0,l.getTypeFromConstructor)(r.type):void 0;if(Object.assign(o,{isProp:s,value:a,type:c,values:o.values||r.values||[]}),o.values.length&&(Object.assign(o,{type:"array",values:o.values.map((function(e){return{value:e,label:"".concat(e)}})),value:r.required&&void 0===o.value?o.values[0]:o.value}),o.value=o.values.find((function(e){return e.value===o.value}))),"boolean"!==o.type||o.values.length||(o.values=void 0===o.value?[!0,!1,void 0]:[!0,!1]),"reactive"===o.type){var d=o.value;Object.assign(o,{type:"code",value:function(){return e.instance?(0,l.reduceToObject)(e.instance,d):null}})}return o}))},handleSelectFocus:function(e,t){this.tempValue=this.tempValue||e.value,e.value=t},handleSelectClose:function(e){this.tempValue&&this.tempValue.value!==e.value&&(e.value=this.tempValue),this.tempValue=null}}};t.Z=c},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-elements.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es.object.define-property.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,n("./node_modules/core-js/modules/es.array.map.js");var s=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue")),i=o(n("./src/js/components/global/ui/ui-icon.vue")),r=o(n("./src/js/components/global/ui/ui-button.vue")),l=o(n("./src/js/components/global/ui/ui-notification.vue")),a=o(n("./src/js/components/global/ui/ui-loader-bar.vue")),u=o(n("./src/js/components/global/ui/ui-badge.vue")),c=n("./src/js/modules/utils/other.js"),d=i.default.$exports.sizes.reverse()[0],p=l.default.props.timeout.default,m={components:{KitchenSinkComponent:s.default},data:function(){var e=this;return{icons:{component:i.default,ids:i.default.$exports.icons,biggestSize:d,options:[{id:"size",values:i.default.$exports.sizes,value:d},"theme","color","original"]},button:{component:r.default,options:[{id:"theme",value:r.default.$exports.themes[0]},"size","disabled",{id:"icon",values:[null,"check","close","plus-fill","pencil"],value:"check"},{id:"textSlot",type:"textSlot",value:"Button"}]},notification:{component:l.default,renderedOptions:{},options:["theme",{id:"timeout",values:[1/0,5*p,2*p,p,p/2,p/5],value:1/0},{id:"title",value:"Notification"},{id:"content",type:"html",value:"This is quite a long notification message which wraps into several lines"},{id:"reactiveData",type:"reactive",value:["state","permanent"]},{id:"actions",type:"buttons",value:[{label:"App notification test",handler:function(){return e.$notify((0,c.reduceToObject)(e.notification.renderedOptions,["theme","title","content","timeout"]))}}]}]},loaderBar:{component:a.default,componentInstance:function(){return e.$refs.loaderBar},options:["theme","size",{id:"timeout",value:3e3},{id:"reactiveData",type:"reactive",value:["state","timeStarted","timeNow","timeEnd","timeLeft","progress","progressOffset","progressVisible"]},{id:"actions",type:"buttons",value:["Start","Extend","End","Pause","Continue"].map((function(t){return{label:t,handler:function(){return e.$refs.loaderBar[t.toLowerCase()]()}}}))}]},badge:{component:u.default,options:["theme","size","icon","uppercase",{id:"textSlot",type:"textSlot",value:"Badge"}]}}}};t.Z=m},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-inputs.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es.object.define-property.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var s=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue")),i=o(n("./src/js/components/global/input/input-text.vue")),r=o(n("./src/js/components/global/input/input-password.vue")),l=o(n("./src/js/components/global/input/input-range.vue")),a=o(n("./src/js/components/global/input/input-dropzone.vue")),u=o(n("./src/js/components/global/input/input-color.vue")),c={components:{KitchenSinkComponent:s.default},data:function(){return{text:{component:i.default,options:["disabled","placeholder","prefix","suffix"],model:""},password:{component:r.default,options:["disabled","autocomplete"],model:""},range:{component:l.default,options:["size","theme","min","max","step"],model:50},dropzone:{component:a.default,options:["size","multiple",{id:"maxFiles",value:1,min:1},{id:"accept",values:[null,["image/*"],[".tar.gz"],[".sql",".sql.gz"]]}],model:null},color:{component:u.default,options:[{id:"predefinedColors",value:!0}],colors:["#555","#123456","#987645","#aabbcc","#9f8ac5"],model:""}}}};t.Z=c},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-typography.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es.object.keys.js"),n("./node_modules/core-js/modules/es.symbol.js"),n("./node_modules/core-js/modules/es.array.filter.js"),n("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),n("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),n("./node_modules/core-js/modules/es.object.define-properties.js"),n("./node_modules/core-js/modules/es.object.define-property.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js"));n("./node_modules/core-js/modules/es.array.map.js"),n("./node_modules/core-js/modules/es.array.from.js"),n("./node_modules/core-js/modules/es.string.iterator.js"),n("./node_modules/core-js/modules/es.array.concat.js"),n("./node_modules/core-js/modules/es.array.find.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.array.reduce.js"),n("./node_modules/core-js/modules/web.dom-collections.for-each.js");var i=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue")),r=n("./src/js/modules/utils/css.js");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={shadesCount:5,shadesFn:function(e,t){return e+15*(t-Math.floor(this.shadesCount/2))},colors:["primary","safe","danger","neutral"],modifiers:["lightness","saturation","alpha"]},c={components:{KitchenSinkComponent:i.default},data:function(){var e=this;return{pre:JSON.stringify({path:"/",meta:{label:"Dashboard",parent:"user"},name:"user/dashboard",props:!0},null,4),colors:r.themeColors,cssColors:{items:u.colors.map((function(e){return{id:e,varName:r.cssVars.varName("color",e),modify:(0,r.scaleColor)(r.cssVars.get("color",e)),shades:Array.from({length:u.shadesCount},(function(t,n){return r.cssVars.use("color","".concat(e,"-").concat(n))}))}})),options:u.modifiers.map((function(t){return{id:t,value:"alpha"===t?100:0,min:"alpha"===t?0:-100,max:100,type:"range",onChange:function(n){e.cssColors.options.find((function(e){return e.id===t})).value=n,e.cssColorsRecolor()}}}))}}},computed:{cssColorMixin:function(){var e=this;return u.modifiers.reduce((function(t,n){return a(a({},t),{},(0,s.default)({},n[0],e.cssColors.options.find((function(e){return e.id===n})).value))}),{})}},mounted:function(){this.cssColorsRecolor()},methods:{cssColorsRecolor:function(){var e=this;this.cssColors.items.forEach((function(t){var n=t.id,o=t.modify;t.shades.forEach((function(t,s){var i=e.cssColorMixin,l=i.a,a=i.l,c=i.s;r.cssVars.set("color","".concat(n,"-").concat(s),o({a:l,l:u.shadesFn(a,s),s:u.shadesFn(c,s)}))}))}))}}};t.Z=c},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/index.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es.object.define-property.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,n("./node_modules/core-js/modules/es.array.map.js");var s=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-typography.vue")),i=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-inputs.vue")),r=o(n("./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-elements.vue")),l=n("./src/js/modules/utils/lodash.js"),a=["typography","inputs","elements"],u={components:{TabTypography:s.default,TabInputs:i.default,TabElements:r.default},data:function(){return{tabs:a.map((function(e){return{id:e,label:l._.upperFirst(e)}}))}},computed:{tab:function(){return this.$route.params.tab||a[0]}},methods:{handleTabChange:function(e){this.$router.push({name:"kitchen-sink",params:{tab:e}})}}};t.Z=u},"./node_modules/core-js/internals/array-from.js":function(e,t,n){"use strict";var o=n("./node_modules/core-js/internals/global.js"),s=n("./node_modules/core-js/internals/function-bind-context.js"),i=n("./node_modules/core-js/internals/function-call.js"),r=n("./node_modules/core-js/internals/to-object.js"),l=n("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),a=n("./node_modules/core-js/internals/is-array-iterator-method.js"),u=n("./node_modules/core-js/internals/is-constructor.js"),c=n("./node_modules/core-js/internals/length-of-array-like.js"),d=n("./node_modules/core-js/internals/create-property.js"),p=n("./node_modules/core-js/internals/get-iterator.js"),m=n("./node_modules/core-js/internals/get-iterator-method.js"),v=o.Array;e.exports=function(e){var t=r(e),n=u(this),o=arguments.length,f=o>1?arguments[1]:void 0,j=void 0!==f;j&&(f=s(f,o>2?arguments[2]:void 0));var _,b,h,g,k,y,x=m(t),w=0;if(!x||this==v&&a(x))for(_=c(t),b=n?new this(_):v(_);_>w;w++)y=j?f(t[w],w):t[w],d(b,w,y);else for(k=(g=p(t,x)).next,b=n?new this:[];!(h=i(k,g)).done;w++)y=j?l(g,f,[h.value,w],!0):h.value,d(b,w,y);return b.length=w,b}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(e,t,n){var o=n("./node_modules/core-js/internals/an-object.js"),s=n("./node_modules/core-js/internals/iterator-close.js");e.exports=function(e,t,n,i){try{return i?t(o(n)[0],n[1]):t(n)}catch(t){s(e,"throw",t)}}},"./node_modules/core-js/modules/es.array.from.js":function(e,t,n){var o=n("./node_modules/core-js/internals/export.js"),s=n("./node_modules/core-js/internals/array-from.js");o({target:"Array",stat:!0,forced:!n("./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(e){Array.from(e)}))},{from:s})},"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=style&index=0&lang=scss&":function(){},"./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue":function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=script&lang=js&"),s=o.Z,i=(n("./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=style&index=0&lang=scss&"),(0,n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"margin",rawName:"v-margin",value:[3,null],expression:"[3, null]"}],staticClass:"kitchenSinkSection radius:def border:a:def overfl:hid"},[n("ui-grid",{directives:[{name:"padding",rawName:"v-padding",value:[1,2],expression:"[1, 2]"}],staticClass:"c:bg:gray2 border:b:def",attrs:{tag:"header",gutter:"medium"}},[n("h2",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"},{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}]},[e._t("title")],2),e._v(" "),n("ui-grid",[e.component?n("ui-button-icon",{attrs:{icon:"delete",title:e.$gettext("Reset component")},on:{click:e.resetComponent}}):e._e()],1)],1),e._v(" "),n("ui-grid",{attrs:{cross:"stretch",gutter:0}},[e.normalizedOptions.length?n("div",{directives:[{name:"padding",rawName:"v-padding",value:1,expression:"1"}],staticClass:"kitchenSinkSection-options border:r:def overfl:auto"},[n("div",{staticClass:"disp:table"},e._l(e.normalizedOptions,(function(t){return n("div",{key:t.id,staticClass:"disp:trow"},[n("label",{staticClass:"disp:tcell wrap:nowrap"},[e._v("\n                        "+e._s(t.id)+"\n                    ")]),e._v(" "),n("div",{directives:[{name:"padding",rawName:"v-padding",value:[.5,0,.5,1],expression:"[0.5, 0, 0.5, 1]"}],staticClass:"disp:tcell width:100%"},["string"===t.type||"textSlot"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"option.value"}],staticClass:"width:100%",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}}):e._e(),e._v(" "),"array"===t.type?n("input-select-legacy",{staticClass:"width:100%",attrs:{options:t.values},on:{change:function(t){e.tempValue=null},open:function(t){e.tempValue=null},close:function(n){return e.handleSelectClose(t)},"focus:change":function(n){return e.handleSelectFocus(t,n)}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"option.value"}}):e._e(),e._v(" "),"number"===t.type?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"option.value",modifiers:{number:!0}}],staticClass:"width:100%",attrs:{type:"number",min:t.min,max:t.max},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),e._v(" "),"html"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"option.value"}],staticClass:"width:100%",attrs:{rows:"3"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}}):e._e(),e._v(" "),"range"===t.type?n("input-range",{staticClass:"width:100%",attrs:{min:t.min,max:t.max},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"option.value"}}):e._e(),e._v(" "),"boolean"===t.type?n("ui-grid",{attrs:{gutter:"medium"}},e._l(t.values,(function(o){return n("input-radio",e._b({key:o,model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"option.value"}},"input-radio",{value:o},!1),[e._v("\n                                "+e._s(void 0===o?"undefined":o)+"\n                            ")])})),1):e._e(),e._v(" "),"code"===t.type?n("ui-code-area",{staticClass:"width:100%",attrs:{"break-lines":"",content:e.valueToString("function"==typeof t.value?t.value():t.value)||"&nbsp;"}}):e._e(),e._v(" "),"buttons"===t.type?n("ui-grid",{attrs:{wrap:""}},e._l(t.value,(function(t){return n("ui-button",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],key:t.label,attrs:{theme:"light",size:"normal"},on:{click:t.handler}},[e._v("\n                                "+e._s(t.label)+"\n                            ")])})),1):e._e()],1)])})),0)]):e._e(),e._v(" "),n("section",{directives:[{name:"flex",rawName:"v-flex",value:{main:"center",cross:"center"},expression:"{ main: 'center', cross: 'center' }"},{name:"flex-item",rawName:"v-flex-item",value:{grow:!0,shrink:!0},expression:"{ grow: true, shrink: true }"},{name:"padding",rawName:"v-padding",value:2,expression:"2"}],staticClass:"kitchenSinkSection-preview",class:{"-is-canvas":e.component}},[e.$slots.default?n("div",{staticClass:"width:100%"},[e._t("default")],2):e.shouldRender?e._t("component",(function(){return[n(e.component,e._b({ref:"component",tag:"component",model:{value:e.modelOption.value,callback:function(t){e.$set(e.modelOption,"value",t)},expression:"modelOption.value"}},"component",e.renderedOptions(),!1),[e.textSlot?[e._v("\n                        "+e._s(e.textSlot)+"\n                    ")]:e._e()],2)]}),null,e.renderedOptions(!1)):e._e()],2)])],1)}),[],!1,null,null,null).exports)},"./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-elements.vue":function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-elements.vue?vue&type=script&lang=js&"),s=o.Z,i=(0,n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("kitchen-sink-component",e._b({scopedSlots:e._u([{key:"component",fn:function(t){var o=t.size,s=t.theme,i=t.original,r=t.color;return n("ui-grid",{attrs:{wrap:""}},e._l(e.icons.ids,(function(t){return n("div",{staticClass:"pos:rel"},[n("ui-icon",{directives:[{name:"visible",rawName:"v-visible",value:!1,expression:"false"}],attrs:{id:t,size:e.icons.biggestSize}}),e._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{main:"center",cross:"center"},expression:"{ main: 'center', cross: 'center' }"}],staticClass:"pos:abs pos:a:0"},[n("ui-icon",e._b({attrs:{title:t}},"ui-icon",{id:t,size:o,theme:s,original:i,color:r},!1))],1)],1)})),0)}}])},"kitchen-sink-component",e.icons,!1),[n("template",{slot:"title"},[e._v("\n            Icons\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.button,!1),[n("template",{slot:"title"},[e._v("\n            Button\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.badge,!1),[n("template",{slot:"title"},[e._v("\n            Badge\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({attrs:{"rendered-options":e.notification.renderedOptions},on:{"update:renderedOptions":function(t){return e.$set(e.notification,"renderedOptions",t)},"update:rendered-options":function(t){return e.$set(e.notification,"renderedOptions",t)}}},"kitchen-sink-component",e.notification,!1),[n("template",{slot:"title"},[e._v("\n            Notification\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({scopedSlots:e._u([{key:"component",fn:function(t){var o=t.theme,s=t.size,i=t.timeout;return n("div",{staticClass:"width:100%"},[n("ui-loader-bar",e._b({ref:"loaderBar"},"ui-loader-bar",{theme:o,size:s,timeout:i},!1))],1)}}])},"kitchen-sink-component",e.loaderBar,!1),[n("template",{slot:"title"},[e._v("\n            LoaderBar\n        ")])],2)],1)}),[],!1,null,null,null).exports},"./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-inputs.vue":function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-inputs.vue?vue&type=script&lang=js&"),s=o.Z,i=(0,n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.text,!1),[n("template",{slot:"title"},[e._v("\n            Text\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.password,!1),[n("template",{slot:"title"},[e._v("\n            Password\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.range,!1),[n("template",{slot:"title"},[e._v("\n            Range\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({},"kitchen-sink-component",e.dropzone,!1),[n("template",{slot:"title"},[e._v("\n            Dropzone\n        ")])],2),e._v(" "),n("kitchen-sink-component",e._b({scopedSlots:e._u([{key:"component",fn:function(t){return n("input-color",e._b({staticClass:"width:100%",attrs:{colors:t.predefinedColors?e.color.colors:[]},model:{value:e.color.model,callback:function(t){e.$set(e.color,"model",t)},expression:"color.model"}},"input-color",t,!1))}}])},"kitchen-sink-component",e.color,!1),[n("template",{slot:"title"},[e._v("\n            Color\n        ")])],2)],1)}),[],!1,null,null,null).exports},"./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-typography.vue":function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var o=n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-tab-typography.vue?vue&type=script&lang=js&"),s=o.Z,i=(0,n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("kitchen-sink-component",[n("template",{slot:"title"},[e._v("\n            Headings\n        ")]),e._v(" "),n("h1",[e._v("Heading 1")]),e._v(" "),n("h2",[e._v("Heading 2")]),e._v(" "),n("h3",[e._v("Heading 3")]),e._v(" "),n("h4",[e._v("Heading 4")]),e._v(" "),n("h5",[e._v("Heading 5")])],2),e._v(" "),n("kitchen-sink-component",[n("template",{slot:"title"},[e._v("\n            Table\n        ")]),e._v(" "),n("table",[n("tr",e._l(4,(function(t){return n("th",[e._v("\n                    Table header\n                ")])})),0),e._v(" "),e._l(3,(function(t){return n("tr",[n("td",[e._v("Table row")]),e._v(" "),n("td",[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing\n                    elit.\n                ")]),e._v(" "),n("td",[e._v("Table row")]),e._v(" "),n("td",[e._v("Table row")])])}))],2)],2),e._v(" "),n("kitchen-sink-component",[n("template",{slot:"title"},[e._v("\n            Preformatted text\n        ")]),e._v(" "),n("pre",{domProps:{innerHTML:e._s(e.pre)}})],2),e._v(" "),n("kitchen-sink-component",[n("template",{slot:"title"},[e._v("\n            Theme colors\n        ")]),e._v(" "),n("table",e._l(e.colors,(function(t){return n("tr",[n("td",{staticClass:"txt:medium"},[e._v("\n                    "+e._s(t)+"\n                ")]),e._v(" "),n("td",{staticClass:"width:100%",class:["c:bg:"+t]})])})),0)],2),e._v(" "),n("kitchen-sink-component",{attrs:{options:e.cssColors.options}},[n("template",{slot:"title"},[e._v("\n            Theme colors (CSS variables)\n        ")]),e._v(" "),n("div",{staticClass:"pos:rel",attrs:{slot:"component"},slot:"component"},[n("table",{staticStyle:{"table-layout":"fixed"}},e._l(e.cssColors.items,(function(t){return n("tr",e._l(t.shades,(function(e){return n("td",{style:{background:e}})})),0)})),0),e._v(" "),n("table",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"}],staticClass:"pos:abs pos:t:0"},e._l(e.cssColors.items,(function(t){return n("tr",{staticStyle:{background:"none"}},[n("td",{staticClass:"txt:medium txt:center"},[e._v("\n                        "+e._s(t.varName)+"\n                    ")])])})),0)])],2)],1)}),[],!1,null,null,null).exports},"./src/js/pages/kitchen-sink/index.vue":function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return u}});var o=n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/index.vue?vue&type=script&lang=js&"),s=o.Z,i=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),r=n("./src/js/pages/kitchen-sink/index.vue?vue&type=custom&index=0&blockType=route"),l=n.n(r),a=(0,i.Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",[n("ui-tabs",e._b({attrs:{radio:"",selected:e.tab},on:{"update:selected":e.handleTabChange}},"ui-tabs",{tabs:e.tabs},!1),[e._l(e.tabs,(function(e){return n("template",{slot:"tab:"+e.id},[n("keep-alive",[n("tab-"+e.id,{tag:"component"})],1)],1)}))],2)],1)}),[],!1,null,null,null);"function"==typeof l()&&l()(a);var u=a.exports},"./src/js/pages/kitchen-sink/index.vue?vue&type=custom&index=0&blockType=route":function(){},"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=style&index=0&lang=scss&":function(e,t,n){var o=n("./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-6[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-6[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue?vue&type=style&index=0&lang=scss&");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n("./node_modules/vue-style-loader/lib/addStylesClient.js").Z)("78591f9b",o,!0,{})}}]);