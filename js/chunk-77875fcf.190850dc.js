(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77875fcf"],{"0b77":function(t,s,a){},aa93:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mb-5"},[a("h1",{},[t._v("網站管理")]),a("BackStageNav"),a("ProductsTable")],1)},r=[],n=a("c81a"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Spinner",{class:{"fade-out":!t.isLoading}}),a("div",{staticClass:"row justify-content-end mb-3"},[a("router-link",{staticClass:"btn btn-primary shadow-sm",attrs:{to:"/admin/products/create"}},[a("i",{staticClass:"fas fa-file mr-1"}),t._v(" 新增商品 ")])],1),a("div",{staticClass:"row shadow card"},[a("table",{staticClass:"table vertical__middle"},[t._m(0),a("tbody",t._l(t.products,(function(s){return a("tr",{key:s.id},[a("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(s.id))]),a("th",{staticClass:"text-center"},[a("div",{staticClass:"img__box"},[a("router-link",{attrs:{to:{name:"products",params:{id:s.id}}}},[a("img",{staticClass:"img__box mxw__150 img-thumbnail shadow-sm",attrs:{src:s.image}})])],1)]),a("td",[a("span",{staticClass:"badge-pill badge-info vertical__middle"},[a("strong",[t._v(t._s(s.Category.name))])])]),a("td",[a("router-link",{attrs:{to:{name:"products",params:{id:s.id}}}},[t._v(" "+t._s(s.name)+" ")])],1),a("td",[t._v(t._s(s.price))]),a("td",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-primary btn-sm mr-2",attrs:{to:{name:"adminProductsEdit",params:{id:s.id}}}},[a("i",{staticClass:"fas fa-pencil-alt"})]),a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"submit",disabled:t.isProcessing},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.deleteProduct(s.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])],1)])})),0)])])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("id")]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Image")]),a("th",{attrs:{scope:"col"}},[t._v("分類")]),a("th",{attrs:{scope:"col"}},[t._v("品名")]),a("th",{attrs:{scope:"col"}},[t._v("價格")]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("操作")])])])}],o=a("1da1"),l=(a("4de4"),a("96cf"),a("ee21")),u=a("2375"),d=a("2fa3"),p={data:function(){return{products:[],isProcessing:!1,isLoading:!0}},components:{Spinner:u["a"]},methods:{fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.isLoading=!0,s.next=4,l["a"].products.get();case 4:a=s.sent,e=a.data,t.products=e.products,t.isLoading=!1,s.next=15;break;case 10:s.prev=10,s.t0=s["catch"](0),console.log(s.t0),t.$toast.error(" ","操作失敗，請稍後再試",d["c"].options.error),t.isLoading=!1;case 15:case"end":return s.stop()}}),s,null,[[0,10]])})))()},deleteProduct:function(t){var s=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,s.isProcessing=!0,a.next=4,l["a"].products.delete({id:t});case 4:if(e=a.sent,r=e.data,"success"===r.status){a.next=9;break}throw s.$toast.error(" ",r.message,d["c"].options.error),new Error(r.message);case 9:s.products=s.products.filter((function(s){return s.id!==t})),s.$toast.show(" ",r.message,d["c"].options.success),s.isProcessing=!1,a.next=18;break;case 14:a.prev=14,a.t0=a["catch"](0),console.log(a.t0),s.$toast.error(" ","操作失敗，請稍後再試",d["c"].options.error);case 18:case"end":return a.stop()}}),a,null,[[0,14]])})))()}},created:function(){this.fetchData()}},m=p,v=(a("fd06"),a("2877")),f=Object(v["a"])(m,i,c,!1,null,"425d00b9",null),_=f.exports,b={name:"BackStageProduct",components:{BackStageNav:n["a"],ProductsTable:_}},g=b,h=Object(v["a"])(g,e,r,!1,null,null,null);s["default"]=h.exports},c81a:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container pt-3 pb-4 pr-0 pl-0"},[a("ul",{staticClass:"row mt-4 mb-3 nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"adminProducts"}}},[t._v("所有商品")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"adminCategories"}}},[t._v("分類列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"adminUsers"}}},[t._v("會員列表")])],1)])])},r=[],n={name:"BackStageNav",props:{}},i=n,c=a("2877"),o=Object(c["a"])(i,e,r,!1,null,null,null);s["a"]=o.exports},fd06:function(t,s,a){"use strict";a("0b77")}}]);
//# sourceMappingURL=chunk-77875fcf.190850dc.js.map