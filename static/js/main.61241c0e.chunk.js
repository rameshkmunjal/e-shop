(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(18),r=c.n(n),a=c(9),i=c(14),j=c(34),o=c(33),l=c(3),d="PRODUCT_LIST_REQUEST",b="PRODUCT_LIST_SUCCESS",h="PRODUCT_LIST_FAIL",O="PRODUCT_DETAILS_REQUEST",u="PRODUCT_DETAILS_SUCCESS",x="PRODUCT_DETAILS_FAIL",p=Object(i.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0,products:[]};case b:return{loading:!1,products:t.payload};case h:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case u:return{loading:!1,product:t.payload};case x:return{loading:!1,error:t.payload};default:return e}}}),m=[j.a],g=Object(i.createStore)(p,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,m))),f=(c(47),c(48),c(10)),y=c(2),N=c(70),v=c(71),w=c(72),T=c.p+"static/media/rkm.99e09103.jpg",S=c(0),C=function(){return Object(S.jsx)(N.a,{fluid:!0,className:"header-container",children:Object(S.jsxs)(v.a,{className:"nav-section",children:[Object(S.jsx)(w.a,{lg:3,xs:3,className:"logo-div",children:Object(S.jsx)("h4",{children:Object(S.jsx)(f.b,{to:"/e-shop",className:"header-heading-link",children:"E-Shop"})})}),Object(S.jsxs)(w.a,{lg:6,xs:5,className:"search-div",children:[Object(S.jsx)("input",{type:"text",defaultValue:"Search ...",className:"search-input-box"}),Object(S.jsx)("span",{className:"search-btn-span",children:Object(S.jsx)("i",{className:"fas fa-search"})})]}),Object(S.jsxs)(w.a,{lg:3,xs:4,className:"right-span",children:[Object(S.jsx)("span",{className:"bell-btn",children:Object(S.jsx)("i",{className:"fas fa-bell"})}),Object(S.jsx)("img",{className:"user-image",src:T,alt:"user"})]})]})})},E=c(74),k=function(e){var t=e.product,c=Object(y.f)();return Object(S.jsx)(w.a,{lg:3,onClick:function(e){return function(e,t){e.preventDefault(),console.log(t),c("/product/".concat(t))}(e,t.id)},children:Object(S.jsxs)("div",{className:"card-div",children:[Object(S.jsx)(E.a.Img,{variant:"top",src:t.image,className:"card-image"}),Object(S.jsxs)(E.a.Body,{className:"card-body",children:[Object(S.jsx)(E.a.Title,{className:"text-center title",children:t.title.substring(1,20)}),Object(S.jsxs)(E.a.Text,{className:"text-center ",children:[Object(S.jsxs)("span",{className:"category",children:[t.category," "]}),Object(S.jsxs)("span",{className:"price",children:[100*t.price," "]}),Object(S.jsxs)("span",{className:"rating",children:[t.rating.rate," "]})]})]})]})})},L=c(15),I=c.n(L),R=c(23),_=c(36),D=c.n(_),P=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){var c,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:d}),e.next=4,D.a.get("https://fakestoreapi.com/products");case 4:c=e.sent,s=c.data,console.log(s),t({type:b,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:h,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},U=function(){return Object(S.jsx)(N.a,{fluid:!0,className:"footer-container",children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(w.a,{lg:4,children:Object(S.jsxs)("address",{children:[Object(S.jsx)("h5",{children:"E-Shop Private Limited"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"154, Golf Course Extension Road"}),Object(S.jsx)("li",{children:"Sector-55, Gurugram"}),Object(S.jsx)("li",{children:"Pincode - 122001"})]})]})}),Object(S.jsx)(w.a,{lg:4,children:Object(S.jsxs)("footer",{children:[Object(S.jsx)("h5",{children:"Categories"}),Object(S.jsxs)("ul",{className:"footer-links-ul",children:[Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"footer-link",to:"/product/category/".concat("men's clothing"),children:"Men's Clothing"})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"footer-link",to:"/product/category/".concat("women's clothing"),children:"Women's Clothing"})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"footer-link",to:"/product/category/".concat("jewelery"),children:"Jewellery"})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"footer-link",to:"/product/category/".concat("electronics"),children:"Electronics"})})]})]})}),Object(S.jsx)(w.a,{lg:4,children:Object(S.jsxs)("footer",{children:[Object(S.jsx)("h5",{children:"Follow us on "}),Object(S.jsxs)("p",{className:"social-media-links",children:[Object(S.jsx)("span",{children:Object(S.jsx)("i",{className:"fab fa-twitter"})}),Object(S.jsx)("span",{children:Object(S.jsx)("i",{className:"fab fa-facebook"})}),Object(S.jsx)("span",{children:Object(S.jsx)("i",{className:"fab fa-instagram"})}),Object(S.jsx)("span",{children:Object(S.jsx)("i",{className:"fab fa-youtube"})}),Object(S.jsx)("span",{children:Object(S.jsx)("i",{className:"fab fa-google"})})]})]})})]})})},A=function(e){var t=e.history,c=Object(a.b)(),n=Object(a.c)((function(e){return e.productList})).products;Object(s.useEffect)((function(){c(P())}),[c,t]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{}),Object(S.jsx)(N.a,{fluid:!0,className:"product-list-container",children:Object(S.jsx)(v.a,{children:n.map((function(e){return Object(S.jsx)(k,{product:e},e.id)}))})}),Object(S.jsx)(U,{})]})},F=c(73),B=function(){return Object(S.jsx)("h1",{className:"text-center",children:"Admin Room"})},G=function(e){var t=e.history,c=Object(a.b)(),n=Object(a.c)((function(e){return e.productList})).products;return Object(s.useEffect)((function(){c(P())}),[c,t]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(B,{}),Object(S.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"ID"}),Object(S.jsx)("th",{children:"TITLE"}),Object(S.jsx)("th",{children:"PRICE"}),Object(S.jsx)("th",{children:"CATEGORY"}),Object(S.jsx)("th",{children:"RATING"}),Object(S.jsx)("th",{})]})}),Object(S.jsx)("tbody",{children:n.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.id}),Object(S.jsx)("td",{children:e.title}),Object(S.jsxs)("td",{children:["$",e.price]}),Object(S.jsx)("td",{children:e.category}),Object(S.jsx)("td",{children:e.rating.rate})]},e.id)}))})]})]})},W=function(){var e,t=Object(y.g)().id,c=Object(a.b)(),s=Object(a.c)((function(e){return e.productList.products})).find((function(e){return e.id==t}));return c((e=s,function(){var t=Object(R.a)(I.a.mark((function t(c){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c({type:O}),c({type:u,payload:e})}catch(s){c({type:x,payload:{message:"product not found"}})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{}),Object(S.jsx)(N.a,{children:Object(S.jsx)(v.a,{children:Object(S.jsxs)(w.a,{className:"single-product-div",lg:6,children:[Object(S.jsx)("h1",{children:s.title}),Object(S.jsx)("div",{className:"img-div",children:Object(S.jsx)("img",{src:s.image,alt:"product pic",className:"single-product-page-image"})}),Object(S.jsx)("h4",{children:s.rating.rate}),Object(S.jsxs)("h3",{children:["Offer Price:",s.price]}),Object(S.jsx)("h5",{children:s.category}),Object(S.jsx)("p",{children:s.description}),Object(S.jsxs)("div",{className:"btn-div",children:[Object(S.jsx)("button",{className:"buy-now-btn",children:"Buy Now"}),Object(S.jsx)("button",{className:"add-to-cart-btn",children:"Add To Cart"})]})]})})}),Object(S.jsx)(U,{})]})},J=function(){var e=Object(y.g)().cat_name;console.log("category in singleProductScreen",e);var t=Object(a.c)((function(e){return e.productList.products}));console.log(t);var c=t.filter((function(t){return t.category===e}));console.log(c);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{}),Object(S.jsxs)(N.a,{children:[Object(S.jsxs)("h3",{className:"category-page-heading",children:["Category Selected : ",e]}),Object(S.jsx)(v.a,{children:c.map((function(e){return Object(S.jsx)(k,{product:e},e.id)}))})]}),Object(S.jsx)(U,{})]})},M=function(){return Object(S.jsx)(f.a,{children:Object(S.jsxs)(y.c,{children:[Object(S.jsx)(y.a,{path:"/e-shop",element:Object(S.jsx)(A,{})}),Object(S.jsx)(y.a,{path:"/product/:id",element:Object(S.jsx)(W,{})}),Object(S.jsx)(y.a,{path:"/product/category/:cat_name",element:Object(S.jsx)(J,{})}),Object(S.jsx)(y.a,{path:"/admin",element:Object(S.jsx)(G,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(S.jsx)(a.a,{store:g,children:Object(S.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.61241c0e.chunk.js.map