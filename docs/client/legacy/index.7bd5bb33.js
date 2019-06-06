import{_ as e,a as t,b as s,c as i,i as r,d as a,s as n,S as l,j as o,v as c,k as m,m as h,n as u,p as f,o as p,q as v,r as b,u as C,H as g,I as d,x as k,J as $,K as _,l as E}from"./chunk.c4158fc0.js";import"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/helpers/esm/get";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";function N(e,t,s){var i=Object.create(e);return i.image=t[s].image,i.title=t[s].title,i.path=t[s].path,i}function y(e,t){var s,i,r,a,n,l,g=t.$_(t.title);return{key:e,first:null,c:function(){s=o("a"),i=o("img"),a=c(),n=o("div"),l=m(g),this.h()},l:function(e){s=h(e,"A",{rel:!0,href:!0,class:!0},!1);var t=u(s);i=h(t,"IMG",{class:!0,src:!0,alt:!0},!1),u(i).forEach(f),a=p(t,"\n\t\t\t\t"),n=h(t,"DIV",{class:!0},!1);var r=u(n);l=p(r,g),r.forEach(f),t.forEach(f),this.h()},h:function(){i.className="link-image svelte-29s3ki",i.src=t.image,i.alt=r=t.$_(t.title),n.className="link-text svelte-29s3ki",s.rel="prefetch",s.href=t.path,s.className="link-container svelte-29s3ki",this.first=s},m:function(e,t){v(e,s,t),b(s,i),b(s,a),b(s,n),b(n,l)},p:function(e,t){e.$_&&r!==(r=t.$_(t.title))&&(i.alt=r),e.$_&&g!==(g=t.$_(t.title))&&C(l,g)},d:function(e){e&&f(s)}}}function I(e){var t,s,i,r,a;return{c:function(){t=o("div"),s=m("Cristóvão is a direct reference to Christopher\n\t\t\t("),i=o("code"),r=m("'Cristóvão Colombo' = 'Christopher Columbus'"),a=m("),\n\t\t\tso feel free to call me Chris."),this.h()},l:function(e){t=h(e,"DIV",{class:!0},!1);var n=u(t);s=p(n,"Cristóvão is a direct reference to Christopher\n\t\t\t("),i=h(n,"CODE",{class:!0},!1);var l=u(i);r=p(l,"'Cristóvão Colombo' = 'Christopher Columbus'"),l.forEach(f),a=p(n,"),\n\t\t\tso feel free to call me Chris."),n.forEach(f),this.h()},h:function(){i.className="svelte-29s3ki",t.className="curiosity svelte-29s3ki"},m:function(e,n){v(e,t,n),b(t,s),b(t,i),b(i,r),b(t,a)},d:function(e){e&&f(t)}}}function D(e){for(var t,s,i,r,a,n,l,$,_,E,D,j,V=e.$_("what are you interested in?"),w=[],x=new Map,O=e.items,T=function(e){return e.title},A=0;A<O.length;A+=1){var H=N(e,O,A),M=T(H);x.set(M,w[A]=y(M,H))}var P="en"===e.$locale&&I();return{c:function(){for(t=c(),s=o("h1"),i=m("Cristóvão "),r=o("br"),a=m(" Trevisan"),n=c(),l=o("div"),$=o("div"),_=m(V),E=c(),D=o("div"),A=0;A<w.length;A+=1)w[A].c();j=c(),P&&P.c(),this.h()},l:function(e){t=p(e,"\n\n"),s=h(e,"H1",{class:!0},!1);var o=u(s);i=p(o,"Cristóvão "),r=h(o,"BR",{},!1),u(r).forEach(f),a=p(o," Trevisan"),o.forEach(f),n=p(e,"\n\n"),l=h(e,"DIV",{class:!0},!1);var c=u(l);$=h(c,"DIV",{class:!0},!1);var m=u($);_=p(m,V),m.forEach(f),E=p(c,"\n\t"),D=h(c,"DIV",{class:!0},!1);var v=u(D);for(A=0;A<w.length;A+=1)w[A].l(v);v.forEach(f),j=p(c,"\n\n\t"),P&&P.l(c),c.forEach(f),this.h()},h:function(){document.title=" Cristóvão Trevisan ",s.className="title svelte-29s3ki",$.className="curiosity svelte-29s3ki",D.className="links svelte-29s3ki",l.className="container svelte-29s3ki"},m:function(e,o){for(v(e,t,o),v(e,s,o),b(s,i),b(s,r),b(s,a),v(e,n,o),v(e,l,o),b(l,$),b($,_),b(l,E),b(l,D),A=0;A<w.length;A+=1)w[A].m(D,null);b(l,j),P&&P.m(l,null)},p:function(e,t){e.$_&&V!==(V=t.$_("what are you interested in?"))&&C(_,V);var s=t.items;w=g(w,e,T,1,t,s,x,D,d,y,null,N),"en"===t.$locale?P||((P=I()).c(),P.m(l,null)):P&&(P.d(1),P=null)},i:k,o:k,d:function(e){for(e&&(f(t),f(s),f(n),f(l)),A=0;A<w.length;A+=1)w[A].d();P&&P.d()}}}function j(e,t,s){var i,r;$(e,_,function(e){s("$_",i=e)}),$(e,E,function(e){s("$locale",r=e)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:i,$locale:r}}export default(function(o){function c(e){var l;return t(this,c),l=s(this,i(c).call(this)),r(a(l),e,j,D,n,[]),l}return e(c,l),c}());
//# sourceMappingURL=index.7bd5bb33.js.map
