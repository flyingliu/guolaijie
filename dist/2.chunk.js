webpackJsonp([2],{48:function(t,e,n){"use strict";function o(t){a||n(75)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(59),i=n(77),a=!1,s=n(14),c=o,u=s(r.a,i.a,!1,c,null,null);u.options.__file="src/views/admin/company.vue",e.default=u.exports},50:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(4),i=n.n(r),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=i.a.create({baseURL:"localhost"===location.hostname?"http://localhost:3030":"https://jieapi.herokuapp.com/",headers:{"Content-Type":"application/json"}}),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.defaultData=e,this.ajax=s}return a(t,[{key:"setDefaultData",value:function(t){for(var e in t)s.defaults.headers[e]=t[e]}}]),t}();e.a=new c},51:function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},52:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function i(t){var e,n,o=document.querySelector("style["+g+'~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(y){var i=d++;o=f||(f=r()),e=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),m.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(53),l={},p=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){h=n,m=r||{};var i=u(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=l[a.id];s.refs--,n.push(s)}e?(i=u(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},53:function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s=i[1],c=i[2],u=i[3],l={id:t+":"+r,css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}},59:function(t,e,n){"use strict";var o=n(50);e.a={data:function(){var t=this;return{isCollapsed:!1,list:[],detail:{},showDetail:!1,columns:[{title:"Logo",key:"proLogo",width:84,render:function(t,e){return t("div",[t("img",{attrs:{src:e.row.proLogo,class:"img"}})])}},{title:"产品名称",key:"proName"},{title:"产品状态",key:"proStatus"},{title:"Title",key:"comName"},{title:"Action",key:"action",width:200,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n)}}},"详细"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.$router.push({name:"companydetail",params:{id:n.row._id}})}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n)}}},"删除")])}}]}},methods:{isok:function(){this.showDetail=!1},show:function(t){this.detail=t.row,this.showDetail=!0},remove:function(t){var e=this;this.$Modal.confirm({title:"确定要删除！",content:"<p>删除后无法恢复，请慎重！</p>",onOk:function(){o.a.ajax.delete("company/"+t.row._id).then(function(n){e.$Message.info("删除成功！"),e.list.splice(t.index,1)}).catch(function(t){console.log(t)})},onCancel:function(){}})}},created:function(){var t=this;o.a.ajax.get("company").then(function(e){console.log(e),t.list=e.data.data}).catch(function(t){console.log(t)})},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}}},75:function(t,e,n){var o=n(76);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(52)("00fda4d6",o,!1,{})},76:function(t,e,n){e=t.exports=n(51)(!1),e.push([t.i,"\n.prolist img {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  display: block;\n  margin: 5px 0;\n}\n.item {\n  padding: 5px 0;\n  border-top: 1px solid #eee;\n}\n",""])},77:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Table",{staticClass:"prolist",attrs:{border:"",columns:t.columns,data:t.list}}),t._v(" "),n("Modal",{attrs:{title:"公司详细"},on:{"on-ok":t.isok},model:{value:t.showDetail,callback:function(e){t.showDetail=e},expression:"showDetail"}},t._l(t.detail,function(e,o){return n("Row",{key:o,staticClass:"item",attrs:{gutter:16}},[n("Col",{attrs:{span:"6"}},[n("div",[t._v(t._s(o))])]),t._v(" "),n("Col",{attrs:{span:"18"}},[n("div",[t._v(t._s(e))])])],1)}))],1)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};e.a=i}});