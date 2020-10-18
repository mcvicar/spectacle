(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f9d57e6"],{"63ee":function(e,t,n){"use strict";var i=n("8b78"),r=n.n(i);r.a},"76d2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service",attrs:{id:e.instance.id}},[e.instance.isEditing?n("div",[n("h2",[e._v("Edit service")]),n("div",{staticClass:"info"},[n("p",[n("label",{attrs:{for:"serviceName-"+e.instance.id}},[e._v("Service Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.instance.serviceName,expression:"instance.serviceName"}],attrs:{placeholder:"Your service",id:"serviceName-"+e.instance.id,type:"text"},domProps:{value:e.instance.serviceName},on:{input:function(t){t.target.composing||e.$set(e.instance,"serviceName",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"environment-"+e.instance.id}},[e._v("Environment")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.instance.environment,expression:"instance.environment"}],attrs:{placeholder:"Your Environment",id:"environment-"+e.instance.id,type:"text"},domProps:{value:e.instance.environment},on:{input:function(t){t.target.composing||e.$set(e.instance,"environment",t.target.value)}}})]),n("p",[n("label",[n("toggle-button",{model:{value:e.instance.safeToFail,callback:function(t){e.$set(e.instance,"safeToFail",t)},expression:"instance.safeToFail"}}),e._v(" Safe to fail? ")],1),n("span",{staticClass:"helper"},[e._v("Is it ok if this service fails?")])]),n("p",[n("label",{attrs:{for:"errorBudget-"+e.instance.id}},[e._v("Up time per month")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.errorBudget,expression:"instance.errorBudget"}],attrs:{id:"errorBudget-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance,"errorBudget",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"7h 18m 18s"}},[e._v("99%")]),n("option",{attrs:{value:"43m 50s"}},[e._v("99.9%")]),n("option",{attrs:{value:"4m 23s"}},[e._v("99.99%")]),n("option",{attrs:{value:"26s"}},[e._v("99.999%")])]),n("span",{staticClass:"helper"},[e._v("An error budget is the maximum amount of time that a system can fail without contractual consequences based on your uptime")])]),e._m(0),n("p",[n("label",{attrs:{for:"redRoutes.howMany-"+e.instance.id}},[e._v("How many people use this service?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.redRoutes.howMany,expression:"instance.redRoutes.howMany"}],attrs:{id:"redRoutes.howMany-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance.redRoutes,"howMany",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"4"}},[e._v("All of the people")]),n("option",{attrs:{value:"3"}},[e._v("Most of the people")]),n("option",{attrs:{value:"2"}},[e._v("Some of the people")]),n("option",{attrs:{value:"1"}},[e._v("Few of the people")])])]),n("p",[n("label",{attrs:{for:"redRoutes.howOften-"+e.instance.id}},[e._v("How often do people use this service?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.redRoutes.howOften,expression:"instance.redRoutes.howOften"}],attrs:{id:"redRoutes.howOften-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance.redRoutes,"howOften",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"1"}},[e._v("All of the time")]),n("option",{attrs:{value:"2"}},[e._v("Most of the time")]),n("option",{attrs:{value:"3"}},[e._v("Some of the time")]),n("option",{attrs:{value:"4"}},[e._v("Very litte of the time")])])])]),n("div",{staticClass:"impacts"},[e._l(e.serviceList,(function(t){return n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.instance.knownImpacts,expression:"instance.knownImpacts"}],attrs:{type:"checkbox",id:"knownImpacts"+e.instance.id+t.id},domProps:{value:t.id,checked:Array.isArray(e.instance.knownImpacts)?e._i(e.instance.knownImpacts,t.id)>-1:e.instance.knownImpacts},on:{change:function(n){var i=e.instance.knownImpacts,r=n.target,o=!!r.checked;if(Array.isArray(i)){var s=t.id,a=e._i(i,s);r.checked?a<0&&e.$set(e.instance,"knownImpacts",i.concat([s])):a>-1&&e.$set(e.instance,"knownImpacts",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(e.instance,"knownImpacts",o)}}}),n("label",{attrs:{for:"knownImpacts"+e.instance.id+t.id}},[e._v(e._s(t.serviceName))])])})),e._m(1),n("p",[n("label",{attrs:{for:"deploymentFrequency-"+e.instance.id}},[e._v("Deployment Frequency?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.deploymentFrequency,expression:"instance.deploymentFrequency"}],attrs:{id:"deploymentFrequency-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance,"deploymentFrequency",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Multiple Deploys Per Day"}},[e._v("Multiple Deploys Per Day")]),n("option",{attrs:{value:"Between once per hour and once per day"}},[e._v("Between once per hour and once per day")]),n("option",{attrs:{value:"Between once per week and once per month"}},[e._v("Between once per week and once per month")])]),n("span",{staticClass:"helper"},[e._v("How often do you deploy this service to this environment.")])]),n("p",[n("label",{attrs:{for:"leadTime-"+e.instance.id}},[e._v("Lead time for changes?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.leadTime,expression:"instance.leadTime"}],attrs:{id:"leadTime-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance,"leadTime",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Less than one hour"}},[e._v("Less than one hour")]),n("option",{attrs:{value:"Between one day and one week"}},[e._v("Between one day and one week")]),n("option",{attrs:{value:"Between one week and once month"}},[e._v("Between one week and once month")]),n("option",{attrs:{value:"Between one month and 6 months"}},[e._v("Between one month and 6 months")])]),n("span",{staticClass:"helper"},[e._v("The time it takes to go from code committed to code successfully running in this environment")])]),n("p",[n("label",{attrs:{for:"meanTimeRestore-"+e.instance.id}},[e._v("Mean time to restore service?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.meanTimeRestore,expression:"instance.meanTimeRestore"}],attrs:{id:"meanTimeRestore-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance,"meanTimeRestore",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Less than one hour"}},[e._v("Less than one hour")]),n("option",{attrs:{value:"Less than one day"}},[e._v("Less than one day")]),n("option",{attrs:{value:"Less than one week"}},[e._v("Less than one week")]),n("option",{attrs:{value:"Between one week and one month"}},[e._v("Between one week and one month")])]),n("span",{staticClass:"helper"},[e._v("The average time it takes to restore the service in this environment")])]),n("p",[n("label",{attrs:{for:"changeFailureRate-"+e.instance.id}},[e._v("Change failure rate")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.instance.changeFailureRate,expression:"instance.changeFailureRate"}],attrs:{id:"changeFailureRate-"+e.instance.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.instance,"changeFailureRate",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0-15%"}},[e._v("0-15%")]),n("option",{attrs:{value:"16-30%"}},[e._v("16-30%")]),n("option",{attrs:{value:"31-45%"}},[e._v("31-45%")]),n("option",{attrs:{value:"46-60%"}},[e._v("46-60%")])]),n("span",{staticClass:"helper"},[e._v("How often deployment failures occur in this environment that require immediate remedy (e.g. rollbacks)")])])],2),n("div",{staticClass:"slo"},[e._l(e.instance.slos,(function(t,i){return n("div",{staticStyle:{"border-bottom":"8px solid #78c0a8"}},[n("p",[n("strong",[e._v("Your SLO "),n("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.removeSlo(i)}}},[e._v("❌")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.slo.NFP,expression:"slo.slo.NFP"}],attrs:{placeholder:"Your SLO",type:"text"},domProps:{value:t.slo.NFP},on:{input:function(n){n.target.composing||e.$set(t.slo,"NFP",n.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.slo.Predicate,expression:"slo.slo.Predicate"}],on:{change:function(n){var i=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t.slo,"Predicate",n.target.multiple?i:i[0])}}},[n("option"),n("option",{attrs:{value:">"}},[e._v(">")]),n("option",{attrs:{value:"<"}},[e._v("<")]),n("option",{attrs:{value:"="}},[e._v("=")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.slo.Metric,expression:"slo.slo.Metric"}],attrs:{placeholder:"Your Metric",type:"text"},domProps:{value:t.slo.Metric},on:{input:function(n){n.target.composing||e.$set(t.slo,"Metric",n.target.value)}}})]),n("p",[n("strong",[e._v("Your QC")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qc.NFP,expression:"slo.qc.NFP"}],attrs:{placeholder:"Your QC",type:"text"},domProps:{value:t.qc.NFP},on:{input:function(n){n.target.composing||e.$set(t.qc,"NFP",n.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.qc.Predicate,expression:"slo.qc.Predicate"}],on:{change:function(n){var i=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t.qc,"Predicate",n.target.multiple?i:i[0])}}},[n("option"),n("option",{attrs:{value:">"}},[e._v(">")]),n("option",{attrs:{value:"<"}},[e._v("<")]),n("option",{attrs:{value:"="}},[e._v("=")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qc.Metric,expression:"slo.qc.Metric"}],attrs:{placeholder:"Your Metric",type:"text"},domProps:{value:t.qc.Metric},on:{input:function(n){n.target.composing||e.$set(t.qc,"Metric",n.target.value)}}})])])})),n("input",{attrs:{type:"button",value:"Add another SLO"},on:{click:e.addSlo}})],2),n("div",{staticClass:"crud-bar",staticStyle:{clear:"both"}},[n("input",{staticClass:"remove",attrs:{type:"button",value:"Remove"},on:{click:e.removeService}}),e._v(" "),n("input",{attrs:{type:"button",value:"Done"},on:{click:e.updateService}})])]):n("div",[n("h2",[e._v(e._s(e.instance.serviceName)+" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:e.editService}},[e._v("🔧")])]),n("div",{staticClass:"info"},[n("p",[e._v("Environment: "),n("strong",[e._v(e._s(e.instance.environment))]),e._v(" | "),e.instance.safeToFail?n("span",[e._v("Is safe to fail")]):n("span",[n("strong",[e._v("Is not safe to fail")])])]),n("p",[e._v("Error Budget: "),n("strong",[e._v(e._s(e.instance.errorBudget)+" per Month")])]),n("p",[e._v("Business Value")]),n("svg",{attrs:{width:"325",height:"325",xmlns:"http://www.w3.org/2000/svg"}},[n("g",[n("title",[e._v("background")]),n("rect",{attrs:{x:"0",y:"0",width:"325",height:"325",id:"canvas_background",fill:"none"}})]),n("g",[n("title",[e._v("Background")]),n("rect",{attrs:{id:"svg_1",height:"75",width:"75",y:"0",x:"25","stroke-width":"1",stroke:"#ccc",fill:"#fae3e8"}}),n("rect",{attrs:{id:"svg_2",height:"75",width:"75",y:"0",x:"100","stroke-width":"1",stroke:"#ccc",fill:"#f3a3a1"}}),n("rect",{attrs:{id:"svg_3",height:"75",width:"75",y:"0",x:"175","stroke-width":"1",stroke:"#ccc",fill:"#ed462f"}}),n("rect",{attrs:{id:"svg_14",height:"75",width:"75",y:"0",x:"250","stroke-width":"1",stroke:"#ccc",fill:"#ed462f"}}),n("rect",{attrs:{id:"svg_4",height:"75",width:"75",y:"75",x:"25","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_5",height:"75",width:"75",y:"75",x:"100","stroke-width":"1",stroke:"#ccc",fill:"#fae3e8"}}),n("rect",{attrs:{id:"svg_6",height:"75",width:"75",y:"75",x:"175","stroke-width":"1",stroke:"#ccc",fill:"#f3a3a1"}}),n("rect",{attrs:{id:"svg_15",height:"75",width:"75",y:"75",x:"250","stroke-width":"1",stroke:"#ccc",fill:"#ed462f"}}),n("rect",{attrs:{id:"svg_7",height:"75",width:"75",y:"150",x:"25","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_8",height:"75",width:"75",y:"150",x:"100","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_9",height:"75",width:"75",y:"150",x:"175","stroke-width":"1",stroke:"#ccc",fill:"#fae3e8"}}),n("rect",{attrs:{id:"svg_16",height:"75",width:"75",y:"150",x:"250","stroke-width":"1",stroke:"#ccc",fill:"#f3a3a1"}}),n("rect",{attrs:{id:"svg_11",height:"75",width:"75",y:"225",x:"25","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_12",height:"75",width:"75",y:"225",x:"100","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_13",height:"75",width:"75",y:"225",x:"175","stroke-width":"1",stroke:"#ccc",fill:"#fff"}}),n("rect",{attrs:{id:"svg_17",height:"75",width:"75",y:"225",x:"250","stroke-width":"1",stroke:"#ccc",fill:"#fae3e8"}})]),n("g",[n("title",[e._v("Point")]),n("text",{attrs:{"xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"24",id:"svg_10",y:e.textYpostion,x:e.textXpostion,"stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("◆")])]),n("g",[n("title",[e._v("How often legend")]),n("text",{attrs:{transform:"rotate(-90 0,0)","xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"15",x:"-300","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Very little")]),n("text",{attrs:{transform:"rotate(-90 0,0)","xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"15",x:"-225","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Some")]),n("text",{attrs:{transform:"rotate(-90 0,0)","xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"15",x:"-150","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Most")]),n("text",{attrs:{transform:"rotate(-90 0,0)","xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"15",x:"-75","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("All the time")])]),n("g",[n("title",[e._v("How many people legend")]),n("text",{attrs:{"xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"320",x:"25","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Few people")]),n("text",{attrs:{"xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"320",x:"100","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Some people")]),n("text",{attrs:{"xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"320",x:"175","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("Most people")]),n("text",{attrs:{"xml:space":"preserve","text-anchor":"start","font-family":"Helvetica, Arial, sans-serif","font-size":"12",id:"svg_18",y:"320",x:"250","stroke-width":"0",stroke:"#000",fill:"#000000"}},[e._v("All people")])])])]),n("div",{staticClass:"impacts"},[n("h3",[e._v("Known impacts")]),n("p",[e._v("These are other services that are impacted downstream")]),n("ul",e._l(e.instance.knownImpacts,(function(t){return n("li",[n("router-link",{attrs:{to:{hash:"#"+t}},nativeOn:{click:function(n){return e.scrollToService("#"+t)}}},[e._v(e._s(e.getServiceByRef(t)))])],1)})),0),n("h3",[e._v("Deployment")]),n("dl",[n("dt",[e._v("Deployment Frequency")]),n("dd",[e._v(e._s(e.instance.deploymentFrequency))]),n("dt",[e._v("Lead time for changes")]),n("dd",[e._v(e._s(e.instance.leadTime))]),n("dt",[e._v("Mean time to restore service")]),n("dd",[e._v(e._s(e.instance.meanTimeRestore))]),n("dt",[e._v("Change failure rate")]),n("dd",[e._v(e._s(e.instance.changeFailureRate)+"%")])])]),n("div",{staticClass:"slo"},[n("table",[e._m(2),n("tbody",[e._m(3),e._l(e.instance.slos,(function(t){return n("tr",[n("td",[e._v(e._s(t.slo.NFP))]),n("td",{staticClass:"predicate"},[e._v(" "+e._s(t.slo.Predicate))]),n("td",[e._v(e._s(t.slo.Metric))]),n("td",[e._v(e._s(t.qc.NFP))]),n("td",{staticClass:"predicate"},[e._v(" "+e._s(t.qc.Predicate))]),n("td",[e._v(e._s(t.qc.Metric))])])}))],2)])])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Business Value "),n("br"),n("span",{staticClass:"helper"},[e._v("A measure of how many users rely on this service and how often.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"helper"},[e._v("These are other services that are impacted downstream")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#78C0A8"},attrs:{colspan:"3"}},[e._v(" SLO ")]),n("th",{staticStyle:{"background-color":"#873F57",color:"#fff"},attrs:{colspan:"3"}},[e._v(" Qualifying Condition (QC) ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[n("strong",[e._v("NFP")])]),n("td",[n("strong",[e._v("Predicate")])]),n("td",[n("strong",[e._v("Metric")])]),n("td",[n("strong",[e._v("NFP")])]),n("td",[n("strong",[e._v("Predicate")])]),n("td",[n("strong",[e._v("Metric")])])])}],o=(n("4de4"),n("a434"),n("5530")),s=n("f206"),a=n("c64e"),c=n.n(a),l={name:"Services",components:{ToggleButton:s["ToggleButton"]},props:["serviceInstance","servicesList"],data:function(){return{instance:this.serviceInstance,serviceList:this.servicesList}},mounted:function(){null===this.instance.id&&(this.instance.id=c()())},methods:{editService:function(){this.instance.isEditing=!0},updateService:function(){this.instance.isEditing=!1},removeService:function(){this.instance.isEditing=!1,this.$emit("removeInstance",this.instance.id)},getServiceByRef:function(e){var t=this.serviceList.filter((function(t){return e==t.id}));return t[0].serviceName},scrollToService:function(e){location.hash=e},setMatrixPostion:function(e){switch(e){case"textX":return 75*this.instance.redRoutes.howMany-20;case"textY":return 75*this.instance.redRoutes.howOften-30;default:return 0}},addSlo:function(){this.instance.slos.push(Object(o["a"])({},this.instance.newSlo))},removeSlo:function(e){this.instance.slos.splice(e,1)}},computed:{textXpostion:function(){return this.setMatrixPostion("textX")},textYpostion:function(){return this.setMatrixPostion("textY")}}},u=l,d=(n("63ee"),n("2877")),v=Object(d["a"])(u,i,r,!1,null,null,null);t["default"]=v.exports},"8b78":function(e,t,n){},f206:function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=2)}([function(e,t,n){n(8);var i=n(6)(n(1),n(7),"data-v-25adc6c0",null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="#75c791",s="#bfcbd9",a="on",c="off",l="#fff";t["default"]={name:"ToggleButton",props:{value:{type:Boolean,default:!1},name:{type:String},disabled:{type:Boolean,default:!1},tag:{type:String},sync:{type:Boolean,default:!1},speed:{type:Number,default:300},color:{type:[String,Object],validator:function(e){return n.i(i["a"])(e)||n.i(i["b"])(e,"checked")||n.i(i["b"])(e,"unchecked")||n.i(i["b"])(e,"disabled")}},switchColor:{type:[String,Object],validator:function(e){return n.i(i["a"])(e)||n.i(i["b"])(e,"checked")||n.i(i["b"])(e,"unchecked")}},cssColors:{type:Boolean,default:!1},labels:{type:[Boolean,Object],default:!1,validator:function(e){return"object"===("undefined"===typeof e?"undefined":r(e))?e.checked||e.unchecked:"boolean"===typeof e}},height:{type:Number,default:22},width:{type:Number,default:50},margin:{type:Number,default:3},fontSize:{type:Number}},computed:{className:function(){var e=this.toggled,t=this.disabled;return["vue-js-switch",{toggled:e,disabled:t}]},coreStyle:function(){return{width:n.i(i["c"])(this.width),height:n.i(i["c"])(this.height),backgroundColor:this.cssColors?null:this.disabled?this.colorDisabled:this.colorCurrent,borderRadius:n.i(i["c"])(Math.round(this.height/2))}},buttonRadius:function(){return this.height-2*this.margin},distance:function(){return n.i(i["c"])(this.width-this.height+this.margin)},buttonStyle:function(){var e="transform "+this.speed+"ms",t=n.i(i["c"])(this.margin),r=this.toggled?n.i(i["d"])(this.distance,t):n.i(i["d"])(t,t),o=this.switchColor?this.switchColorCurrent:null;return{width:n.i(i["c"])(this.buttonRadius),height:n.i(i["c"])(this.buttonRadius),transition:e,transform:r,background:o}},labelStyle:function(){return{lineHeight:n.i(i["c"])(this.height),fontSize:this.fontSize?n.i(i["c"])(this.fontSize):null}},colorChecked:function(){var e=this.color;return n.i(i["e"])(e)?n.i(i["f"])(e,"checked",o):e||o},colorUnchecked:function(){return n.i(i["f"])(this.color,"unchecked",s)},colorDisabled:function(){return n.i(i["f"])(this.color,"disabled",this.colorCurrent)},colorCurrent:function(){return this.toggled?this.colorChecked:this.colorUnchecked},labelChecked:function(){return n.i(i["f"])(this.labels,"checked",a)},labelUnchecked:function(){return n.i(i["f"])(this.labels,"unchecked",c)},switchColorChecked:function(){return n.i(i["f"])(this.switchColor,"checked",l)},switchColorUnchecked:function(){return n.i(i["f"])(this.switchColor,"unchecked",l)},switchColorCurrent:function(){this.switchColor;return n.i(i["e"])(this.switchColor)?this.toggled?this.switchColorChecked:this.switchColorUnchecked:this.switchColor||l}},watch:{value:function(e){this.sync&&(this.toggled=!!e)}},data:function(){return{toggled:!!this.value}},methods:{toggle:function(e){var t=!this.toggled;this.sync||(this.toggled=t),this.$emit("input",t),this.$emit("change",{value:t,tag:this.tag,srcEvent:e})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n.n(i);n.d(t,"ToggleButton",(function(){return r.a}));var o=!1;t["default"]={install:function(e){o||(e.component("ToggleButton",r.a),o=!0)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l}));var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){return"string"===typeof e},o=function(e){return"object"===("undefined"===typeof e?"undefined":i(e))},s=function(e,t){return o(e)&&e.hasOwnProperty(t)},a=function(e,t,n){return s(e,t)?e[t]:n},c=function(e){return e+"px"},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0px";return"translate3d("+e+", "+t+", "+n+")"}},function(e,t,n){t=e.exports=n(5)(),t.push([e.i,".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"===typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"===typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,o=e.default);var a="function"===typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var c=Object.create(a.computed||null);Object.keys(i).forEach((function(e){var t=i[e];c[e]=function(){return t}})),a.computed=c}return{esModule:r,exports:o,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.className},[n("input",{staticClass:"v-switch-input",attrs:{type:"checkbox",name:e.name,disabled:e.disabled},domProps:{checked:e.value},on:{change:function(t){return t.stopPropagation(),e.toggle(t)}}}),e._v(" "),n("div",{staticClass:"v-switch-core",style:e.coreStyle},[n("div",{staticClass:"v-switch-button",style:e.buttonStyle})]),e._v(" "),e.labels?[e.toggled?n("span",{staticClass:"v-switch-label v-left",style:e.labelStyle},[e._t("checked",[[e._v(e._s(e.labelChecked))]])],2):n("span",{staticClass:"v-switch-label v-right",style:e.labelStyle},[e._t("unchecked",[[e._v(e._s(e.labelUnchecked))]])],2)]:e._e()],2)},staticRenderFns:[]}},function(e,t,n){var i=n(4);"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(9)("2283861f",i,!0)},function(e,t,n){var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(10),o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,u=function(){},d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(f(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(f(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function p(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function f(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(d){var r=c++;i=a||(a=p()),t=m.bind(null,i,r,!1),n=m.bind(null,i,r,!0)}else i=p(),t=g.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}e.exports=function(e,t,n){l=n;var i=r(e,t);return v(i),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s],c=o[a.id];c.refs--,n.push(c)}t?(i=r(e,t),v(i)):i=[];for(s=0;s<n.length;s++){c=n[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function g(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],c=o[2],l=o[3],u={id:e+":"+r,css:a,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}}])}))}}]);
//# sourceMappingURL=chunk-6f9d57e6.4971dc35.js.map