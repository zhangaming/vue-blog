(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cb0b68b"],{"5f18":function(t,a,s){t.exports={appColor:"#42b983",appColorRGB:"66, 185, 131"}},a567:function(t,a,s){"use strict";var n=s("5f18"),e=s.n(n);e.a},cbac:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"dragList"}},[s("div",{staticClass:"app-introduce"},[t._v("\n        "+t._s(t.$t("dragList.description"))+"\n        "),s("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])]),s("div",{staticClass:"draglist-contianer"},[s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-header success"},[t._v("已上架")]),s("draggable",{attrs:{group:"music"},model:{value:t.defaultJson,callback:function(a){t.defaultJson=a},expression:"defaultJson"}},t._l(t.defaultJson,function(a,n){return s("div",{key:a.sound.id,staticClass:"list-group-item"},[s("span",[t._v(t._s(n+1))]),t._v("\n                    "+t._s(a.sound.name)+"\n                ")])}),0)],1),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-header info"},[t._v("待上架")]),s("draggable",{attrs:{group:"music"},model:{value:t.newJson,callback:function(a){t.newJson=a},expression:"newJson"}},t._l(t.newJson,function(a,n){return s("div",{key:a.sound.id,staticClass:"list-group-item"},[s("span",[t._v(t._s(n+1))]),t._v("\n                    "+t._s(a.sound.name)+"\n                ")])}),0)],1)])])},e=[],i=s("1980"),o=s.n(i),l={name:"dragList",components:{draggable:o.a},data:function(){return{defaultJson:[],newJson:[],loading:!1}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var t=this;this.loading=!0,this.$store.dispatch("GET_LIST_DATA").then(function(a){if(a){var s=a.data.length/2;t.defaultJson=a.data.slice(0,s),t.newJson=a.data.slice(s)}t.loading=!1})}}},r=l,d=(s("a567"),s("2877")),u=Object(d["a"])(r,n,e,!1,null,null,null);a["default"]=u.exports}}]);