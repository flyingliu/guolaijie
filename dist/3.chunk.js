webpackJsonp([3],{47:function(t,e,n){"use strict";function i(t){s||n(72)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),o=n(73),s=!1,c=n(14),r=i,l=c(a.a,o.a,!1,r,"data-v-38f8c0da",null);l.options.__file="src/views/admin/company.vue",e.default=l.exports},49:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=n(4),o=n.n(a),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=o.a.create({baseURL:"http://localhost:3030",headers:{"Content-Type":"application/json"}}),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.defaultData=e,this.ajax=c}return s(t,[{key:"setDefaultData",value:function(t){for(var e in t)c.defaults.headers[e]=t[e]}}]),t}();e.a=new r},55:function(t,e,n){"use strict";var i=n(49);e.a={data:function(){var t=this;return{isCollapsed:!1,list:[],detail:{},showDetail:!1,columns:[{title:"Id",key:"_id"},{title:"Title",key:"comName"},{title:"Action",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n)}}},"详细"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n)}}},"删除")])}}]}},methods:{isok:function(){this.showDetail=!1},show:function(t){this.detail=t.row,this.showDetail=!0},remove:function(t){var e=this;this.$Modal.confirm({title:"确定要删除！",content:"<p>删除后无法恢复，请慎重！</p>",onOk:function(){i.a.ajax.delete("company/"+t.row._id).then(function(n){e.$Message.info("删除成功！"),e.list.splice(t.index,1)}).catch(function(t){console.log(t)})},onCancel:function(){}})}},created:function(){var t=this;i.a.ajax.get("company").then(function(e){console.log(e),t.list=e.data.data,t.reset()}).catch(function(t){console.log(t)})},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}}},72:function(t,e){},73:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Table",{attrs:{border:"",columns:t.columns,data:t.list}})],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.a=o}});