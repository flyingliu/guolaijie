webpackJsonp([0],{15:function(t,e,o){"use strict";function a(t){c||o(64)}Object.defineProperty(e,"__esModule",{value:!0});var n=o(55),r=o(67),c=!1,p=o(14),s=a,l=p(n.a,r.a,!1,s,"data-v-0c4864d3",null);l.options.__file="src/views/company.vue",e.default=l.exports},50:function(t,e,o){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=o(4),r=o.n(n),c=function(){function t(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),p=r.a.create({baseURL:"localhost"===location.hostname?"http://localhost:3030":"https://jieapi.herokuapp.com/",headers:{"Content-Type":"application/json"}}),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t),this.defaultData=e,this.ajax=p}return c(t,[{key:"setDefaultData",value:function(t){for(var e in t)p.defaults.headers[e]=t[e]}}]),t}();e.a=new s},51:function(t,e){function o(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=a(n);return[o].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([r]).join("\n")}return[o].join("\n")}function a(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=o(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(a[r]=!0)}for(n=0;n<t.length;n++){var c=t[n];"number"==typeof c[0]&&a[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),e.push(c))}},e}},52:function(t,e,o){function a(t){for(var e=0;e<t.length;e++){var o=t[e],a=i[o.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](o.parts[n]);for(;n<o.parts.length;n++)a.parts.push(r(o.parts[n]));a.parts.length>o.parts.length&&(a.parts.length=o.parts.length)}else{for(var c=[],n=0;n<o.parts.length;n++)c.push(r(o.parts[n]));i[o.id]={id:o.id,refs:1,parts:c}}}}function n(){var t=document.createElement("style");return t.type="text/css",m.appendChild(t),t}function r(t){var e,o,a=document.querySelector("style["+v+'~="'+t.id+'"]');if(a){if(y)return f;a.parentNode.removeChild(a)}if(b){var r=d++;a=u||(u=n()),e=c.bind(null,a,r,!1),o=c.bind(null,a,r,!0)}else a=n(),e=p.bind(null,a),o=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else o()}}function c(t,e,o,a){var n=o?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var r=document.createTextNode(n),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(r,c[e]):t.appendChild(r)}}function p(t,e){var o=e.css,a=e.media,n=e.sourceMap;if(a&&t.setAttribute("media",a),h.ssrId&&t.setAttribute(v,e.id),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=o(53),i={},m=s&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,y=!1,f=function(){},h=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o,n){y=o,h=n||{};var r=l(t,e);return a(r),function(e){for(var o=[],n=0;n<r.length;n++){var c=r[n],p=i[c.id];p.refs--,o.push(p)}e?(r=l(t,e),a(r)):r=[];for(var n=0;n<o.length;n++){var p=o[n];if(0===p.refs){for(var s=0;s<p.parts.length;s++)p.parts[s]();delete i[p.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},53:function(t,e){t.exports=function(t,e){for(var o=[],a={},n=0;n<e.length;n++){var r=e[n],c=r[0],p=r[1],s=r[2],l=r[3],i={id:t+":"+n,css:p,media:s,sourceMap:l};a[c]?a[c].parts.push(i):o.push(a[c]={id:c,parts:[i]})}return o}},55:function(t,e,o){"use strict";var a=o(66),n=o(50);e.a={data:function(){return{companyType:a.a.companyType,productType:a.a.productType,company:{comName:"上海广告歌科技有限公司",comWeb:"http://www.guolaijie.com",comNo:"No.1234324242342",comType:"1",comProfile:"大法师分",contactName:"过来借",contactMobile:"18812345678",contactEmail:"66@qq.com",proName:"过来借",proType:"1",proNumber:[20,50],proRate:"0.5%",proGood:"三步借款，秒拿一万元",proTime:"1个月到1年",proConditions:"条件1必须有身份证",proMaterial:"1.身份证：拍照时航船",proLogo:"http://ov61aed6n.bkt.clouddn.com/18-4-16/27145859.jpg",proApp:"http://ov61aed6n.bkt.clouddn.com/18-4-16/27145859.jpg"}}},watch:{$route:{handler:"resetData",immediate:!0}},methods:{resetData:function(){this.getPost(this.$route.params.id)},getPost:function(t){var e=this;t&&n.a.ajax.get("company/"+t).then(function(t){console.log(t),e.company=t.data}).catch(function(t){console.log(t)})},edit:function(t){var e=this;t&&n.a.ajax.patch("company/"+t,this.company).then(function(t){e.$router.go(-1)}).catch(function(t){console.log(t)})},submit:function(){var t=this;n.a.ajax.post("company",this.company).then(function(e){console.log(e),201===e.status&&t.reset()}).catch(function(t){console.log(t)})},reset:function(){for(var t in this.company)"string"==typeof this.company[t]&&(this.company[t]="")}}}},64:function(t,e,o){var a=o(65);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(52)("38e84dc3",a,!1,{})},65:function(t,e,o){e=t.exports=o(51)(!1),e.push([t.i,"\n.form[data-v-0c4864d3] {\n  width: 900px;\n  margin: auto;\n}\n.form h1[data-v-0c4864d3] {\n    padding: 20px 0;\n}\n.form h3[data-v-0c4864d3] {\n    background: #eee;\n    padding: 5px 0;\n    margin: 0 0 10px 0;\n}\n",""])},66:function(t,e,o){"use strict";var a=o(16),n={env:a.a,productType:{1:"小额速贷",2:"工薪贷",3:"电商贷",4:"芝麻分贷",5:"同城大额"},companyType:{1:"小贷公司",2:"P2P",3:"其他"}};e.a=n},67:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form"},[o("Form",{attrs:{model:t.company,"label-width":120}},[o("h1",[t._v("请填写合作意向材料")]),t._v(" "),o("h3",[t._v("公司信息")]),t._v(" "),o("FormItem",{attrs:{label:"企业名称"}},[o("Input",{attrs:{maxlength:20,placeholder:"上海..."},model:{value:t.company.comName,callback:function(e){t.$set(t.company,"comName",e)},expression:"company.comName"}})],1),t._v(" "),o("FormItem",{attrs:{label:"企业网址"}},[o("Input",{attrs:{maxlength:30,placeholder:"http://..."},model:{value:t.company.comWeb,callback:function(e){t.$set(t.company,"comWeb",e)},expression:"company.comWeb"}})],1),t._v(" "),o("FormItem",{attrs:{label:"营业执照编号"}},[o("Input",{style:{width:"200px"},attrs:{maxlength:30,placeholder:"Enter something..."},model:{value:t.company.comNo,callback:function(e){t.$set(t.company,"comNo",e)},expression:"company.comNo"}})],1),t._v(" "),o("FormItem",{attrs:{label:"企业类型"}},[o("Select",{style:{width:"200px"},model:{value:t.company.comType,callback:function(e){t.$set(t.company,"comType",e)},expression:"company.comType"}},t._l(t.companyType,function(e,a){return o("Option",{key:a,attrs:{value:a}},[t._v(t._s(e))])}))],1),t._v(" "),o("FormItem",{attrs:{label:"企业简介"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"Enter something..."},model:{value:t.company.comProfile,callback:function(e){t.$set(t.company,"comProfile",e)},expression:"company.comProfile"}})],1),t._v(" "),o("FormItem",{attrs:{label:"对接人姓名"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"姓名...",maxlength:20},model:{value:t.company.contactName,callback:function(e){t.$set(t.company,"contactName",e)},expression:"company.contactName"}})],1),t._v(" "),o("FormItem",{attrs:{label:"对接人手机"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"手机...",maxlength:11},model:{value:t.company.contactMobile,callback:function(e){t.$set(t.company,"contactMobile",e)},expression:"company.contactMobile"}})],1),t._v(" "),o("FormItem",{attrs:{label:"对接人邮箱"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"邮箱...",maxlength:30},model:{value:t.company.contactEmail,callback:function(e){t.$set(t.company,"contactEmail",e)},expression:"company.contactEmail"}})],1),t._v(" "),o("h3",[t._v("合作信息")]),t._v(" "),o("FormItem",{attrs:{label:"产品名称"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"名称...",maxlength:20},model:{value:t.company.proName,callback:function(e){t.$set(t.company,"proName",e)},expression:"company.proName"}})],1),t._v(" "),o("FormItem",{attrs:{label:"贷款类型"}},[o("Select",{style:{width:"200px"},model:{value:t.company.proType,callback:function(e){t.$set(t.company,"proType",e)},expression:"company.proType"}},t._l(t.productType,function(e,a){return o("Option",{key:a,attrs:{value:a}},[t._v(t._s(e))])}))],1),t._v(" "),o("FormItem",{attrs:{label:"放款额度(千元)"}},[o("Slider",{attrs:{range:""},model:{value:t.company.proNumber,callback:function(e){t.$set(t.company,"proNumber",e)},expression:"company.proNumber"}})],1),t._v(" "),o("FormItem",{attrs:{label:"参考月利率"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"月利率...",maxlength:10},model:{value:t.company.proRate,callback:function(e){t.$set(t.company,"proRate",e)},expression:"company.proRate"}})],1),t._v(" "),o("FormItem",{attrs:{label:"产品特点"}},[o("Input",{style:{width:"500px"},attrs:{placeholder:"特点...",maxlength:30},model:{value:t.company.proGood,callback:function(e){t.$set(t.company,"proGood",e)},expression:"company.proGood"}})],1),t._v(" "),o("FormItem",{style:{width:"200px"},attrs:{label:"贷款期限"}},[o("Input",{style:{width:"200px"},attrs:{placeholder:"Enter something..."},model:{value:t.company.proTime,callback:function(e){t.$set(t.company,"proTime",e)},expression:"company.proTime"}})],1),t._v(" "),o("FormItem",{attrs:{label:"申请条件"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"每个条件一行..."},model:{value:t.company.proConditions,callback:function(e){t.$set(t.company,"proConditions",e)},expression:"company.proConditions"}})],1),t._v(" "),o("FormItem",{attrs:{label:"产品logo"}},[o("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.company.proLogo,callback:function(e){t.$set(t.company,"proLogo",e)},expression:"company.proLogo"}})],1),t._v(" "),o("FormItem",{attrs:{label:"产品URL"}},[o("Input",{attrs:{placeholder:"产品URL"},model:{value:t.company.proUrl,callback:function(e){t.$set(t.company,"proUrl",e)},expression:"company.proUrl"}})],1),t._v(" "),o("FormItem",{attrs:{label:"App截图"}},[o("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.company.proApp,callback:function(e){t.$set(t.company,"proApp",e)},expression:"company.proApp"}})],1),t._v(" "),t.company._id?t._e():o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),t.company._id?o("div",[o("FormItem",{attrs:{label:"攻略地址"}},[o("Input",{style:{width:"500px"},attrs:{placeholder:"特点...",maxlength:30},model:{value:t.company.proStrategy,callback:function(e){t.$set(t.company,"proStrategy",e)},expression:"company.proStrategy"}})],1),t._v(" "),o("FormItem",{attrs:{label:"利率详情"}},[o("Input",{style:{width:"500px"},attrs:{placeholder:"特点...",maxlength:30},model:{value:t.company.proRateInfo,callback:function(e){t.$set(t.company,"proRateInfo",e)},expression:"company.proRateInfo"}})],1),t._v(" "),o("FormItem",{attrs:{label:"申请流程"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"每个流程一行..."},model:{value:t.company.proProcess,callback:function(e){t.$set(t.company,"proProcess",e)},expression:"company.proProcess"}})],1),t._v(" "),o("FormItem",{attrs:{label:"申请者所需材料"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"每个材料一行..."},model:{value:t.company.proMaterial,callback:function(e){t.$set(t.company,"proMaterial",e)},expression:"company.proMaterial"}})],1),t._v(" "),o("FormItem",{attrs:{label:"是否上线"}},[o("RadioGroup",{model:{value:t.company.proStatus,callback:function(e){t.$set(t.company,"proStatus",e)},expression:"company.proStatus"}},[o("Radio",{attrs:{label:"1"}},[t._v("上线")]),t._v(" "),o("Radio",{attrs:{label:"0"}},[t._v("下线")])],1)],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.edit(t.company._id)}}},[t._v("修改")])],1)],1):t._e()],1)],1)},n=[];a._withStripped=!0;var r={render:a,staticRenderFns:n};e.a=r}});