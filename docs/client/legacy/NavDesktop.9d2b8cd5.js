import{_ as e,a as t,b as s,c as a,i as r,d as n,s as o,S as i,j as l,k as c,v as p,m as u,n as h,o as m,p as f,T as b,q as v,r as g,u as d,x as $,V as x,J as S,K as _}from"./chunk.c4158fc0.js";import"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/helpers/esm/get";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";function k(e,t,s){var a=Object.create(e);return a.path=t[s].path,a.icon=t[s].icon,a.title=t[s].title,a}function C(e){var t,s,a,r,n,o=e.$_(e.title);return{c:function(){t=l("div"),s=l("a"),a=c(o),n=p(),this.h()},l:function(e){t=u(e,"DIV",{class:!0},!1);var r=h(t);s=u(r,"A",{rel:!0,class:!0,href:!0},!1);var i=h(s);a=m(i,o),i.forEach(f),n=m(r,"\n\t\t"),r.forEach(f),this.h()},h:function(){s.rel="prefetch",s.className="item-title svelte-vxxkp6",s.href=r="".concat(e.basepath,"/").concat(e.path),t.className="item-container svelte-vxxkp6",b(t,"selected",e.parsedSegment===e.path)},m:function(e,r){v(e,t,r),g(t,s),g(s,a),g(t,n)},p:function(e,n){(e.$_||e.routes)&&o!==(o=n.$_(n.title))&&d(a,o),(e.basepath||e.routes)&&r!==(r="".concat(n.basepath,"/").concat(n.path))&&(s.href=r),(e.parsedSegment||e.routes)&&b(t,"selected",n.parsedSegment===n.path)},d:function(e){e&&f(t)}}}function N(e){for(var t,s=e.routes,a=[],r=0;r<s.length;r+=1)a[r]=C(k(e,s,r));return{c:function(){t=l("nav");for(var e=0;e<a.length;e+=1)a[e].c();this.h()},l:function(e){t=u(e,"NAV",{class:!0},!1);for(var s=h(t),r=0;r<a.length;r+=1)a[r].l(s);s.forEach(f),this.h()},h:function(){t.className="container svelte-vxxkp6"},m:function(e,s){v(e,t,s);for(var r=0;r<a.length;r+=1)a[r].m(t,null)},p:function(e,r){if(e.parsedSegment||e.routes||e.basepath||e.$_){s=r.routes;for(var n=0;n<s.length;n+=1){var o=k(r,s,n);a[n]?a[n].p(e,o):(a[n]=C(o),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=s.length}},i:$,o:$,d:function(e){e&&f(t),x(a,e)}}}function y(e,t,s){var a;S(e,_,function(e){s("$_",a=e)});var r,n=t.routes,o=void 0===n?[]:n,i=t.segment,l=void 0===i?"":i,c=t.basepath,p=void 0===c?"":c;return e.$set=function(e){"routes"in e&&s("routes",o=e.routes),"segment"in e&&s("segment",l=e.segment),"basepath"in e&&s("basepath",p=e.basepath)},e.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{segment:1}).segment&&s("parsedSegment",r="/"===l?"":l||"")},{routes:o,segment:l,basepath:p,parsedSegment:r,$_:a}}export default(function(l){function c(e){var i;return t(this,c),i=s(this,a(c).call(this)),r(n(i),e,y,N,o,["routes","segment","basepath"]),i}return e(c,i),c}());
//# sourceMappingURL=NavDesktop.9d2b8cd5.js.map
