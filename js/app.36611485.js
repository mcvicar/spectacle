(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f040a12a","chunk-6f9d57e6":"02e51dff"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-6f9d57e6":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-6f9d57e6":"78baa1f5"}[e]+".css",i=s.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),e._m(0),r("section",[r("router-view")],1),e._m(1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"banner"}},[r("a",{attrs:{href:"https://www.theslate.co"}},[e._v("Looking for a fully hosted version service catalouge to turn your team's tribal knowledge into organisational context? "),r("br"),e._v(" Checkout The Slate ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v(" Made by "),r("a",{attrs:{href:"http://www.menace.co.nz"}},[e._v("mcvicar")]),e._v(" | Get the code on "),r("a",{attrs:{href:"https://github.com/mcvicar/spectacle"}},[e._v("Github")])])}],o=(r("034f"),r("2877")),c={},s=Object(o["a"])(c,a,i,!1,null,null,null),u=s.exports,l=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._m(0),e._l(e.serviceInstances,(function(t){return r("div",[r(e.service,{tag:"component",attrs:{serviceInstance:t,servicesList:e.serviceInstances},on:{removeInstance:function(t){return e.removeService(t)}}})],1)})),r("div",{staticClass:"crud-bar"},[r("input",{attrs:{type:"button",value:"Add another Service"},on:{click:e.addService}})])],2)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"intro"}},[r("h1",[e._v("Spectacle")]),r("p",[e._v("A PoC based on the idea of capturing and displaying SLIs, SLOs, SLAs and bringing them closer to understanding the business value.")])])}],p=(r("4de4"),r("a434"),r("5530")),h=r("c64e"),v=r.n(h),m={name:"Home",components:{services:function(){return r.e("chunk-6f9d57e6").then(r.bind(null,"76d2"))}},data:function(){return{service:"services",serviceInstances:[{id:v()(),isEditing:!1,serviceName:"Service name",environment:"Production",safeToFail:!0,errorBudget:"43m 50s",knownImpacts:[],redRoutes:{howMany:3,howOften:2},deploymentFrequency:"Multiple Deploys Per Day",leadTime:"Less than one hour",meanTimeRestore:"Less than one day",changeFailureRate:"46-60%",slos:[{slo:{NFP:"Availability",Predicate:">",Metric:"99.9%"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Response Time",Predicate:"<",Metric:"40ms"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Throughput",Predicate:">",Metric:"100Mbps"},qc:{NFP:"Network Bandwith",Predicate:">",Metric:"100Mbps"}},{slo:{NFP:"Capacity",Predicate:">",Metric:"999GB"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Redundancy",Predicate:">",Metric:"200%"},qc:{NFP:"",Predicate:"",Metric:""}}],newSlo:{slo:{NFP:"",Predicate:"",Metric:""},qc:{NFP:"",Predicate:"",Metric:""}}}],newService:{id:null,isEditing:!1,serviceName:"Service name",environment:"Production",safeToFail:!0,errorBudget:"43m 50s",knownImpacts:[],redRoutes:{howMany:3,howOften:2},deploymentFrequency:"Multiple Deploys Per Day",leadTime:"Less than one hour",meanTimeRestore:"Less than one day",changeFailureRate:"46-60%",slos:[{slo:{NFP:"Availability",Predicate:">",Metric:"99.9%"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Response Time",Predicate:"<",Metric:"40ms"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Throughput",Predicate:">",Metric:"100Mbps"},qc:{NFP:"Network Bandwith",Predicate:">",Metric:"100Mbps"}},{slo:{NFP:"Capacity",Predicate:">",Metric:"999GB"},qc:{NFP:"",Predicate:"",Metric:""}},{slo:{NFP:"Redundancy",Predicate:">",Metric:"200%"},qc:{NFP:"",Predicate:"",Metric:""}}],newSlo:{slo:{NFP:"",Predicate:"",Metric:""},qc:{NFP:"",Predicate:"",Metric:""}}}}},mounted:function(){localStorage.getItem("services")&&(this.serviceInstances=JSON.parse(localStorage.getItem("services")))},methods:{addService:function(){this.serviceInstances.push(Object(p["a"])({},this.newService))},removeService:function(e){this.serviceInstances.filter((function(t,r,n){e==t.id&&n.splice(r,1)}))}},watch:{serviceInstances:{handler:function(){localStorage.setItem("services",JSON.stringify(this.serviceInstances))},deep:!0}}},P=m,b=Object(o["a"])(P,d,f,!1,null,null,null),g=b.exports;n["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],w=new l["a"]({routes:y}),M=w;n["a"].config.productionTip=!1,new n["a"]({router:M,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.36611485.js.map