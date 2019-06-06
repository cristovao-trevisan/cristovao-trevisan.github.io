import{_ as e,a as t,b as n,c as r,i,d as s,s as c,S as l,j as a,v as o,m as u,n as f,p,o as m,Q as d,q as h,r as v,x as b,U as g,R as $,z as x,k as N,D as y,E as k,u as E,H as w,M as I,J as D,K as V,C as _}from"./chunk.c4158fc0.js";import{_ as C,a as P}from"./chunk.cc5a8de0.js";import"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/helpers/esm/get";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";import"./chunk.11bf628d.js";import{a as j,A}from"./chunk.cddf7664.js";function M(e){var t,n,r,i,s,c,l,$,x,N,y,k,E,w;return{c:function(){t=a("div"),n=a("div"),r=a("div"),i=o(),s=a("img"),c=o(),l=a("img"),$=o(),x=a("div"),N=a("div"),y=o(),k=a("div"),E=a("div"),this.h()},l:function(e){t=u(e,"DIV",{class:!0},!1);var a=f(t);n=u(a,"DIV",{class:!0},!1);var o=f(n);r=u(o,"DIV",{class:!0},!1),f(r).forEach(p),i=m(o,"\n    "),s=u(o,"IMG",{class:!0,src:!0,alt:!0},!1),f(s).forEach(p),c=m(o,"\n    "),l=u(o,"IMG",{class:!0,src:!0,alt:!0},!1),f(l).forEach(p),$=m(o,"\n    "),x=u(o,"DIV",{class:!0},!1);var d=f(x);N=u(d,"DIV",{class:!0},!1),f(N).forEach(p),d.forEach(p),y=m(o,"\n    "),k=u(o,"DIV",{class:!0},!1);var h=f(k);E=u(h,"DIV",{class:!0},!1),f(E).forEach(p),h.forEach(p),o.forEach(p),a.forEach(p),this.h()},h:function(){r.className="mask svelte-367gcx",s.className="blur svelte-367gcx",s.src=e.initial,s.alt="loading",l.className="image svelte-367gcx",l.src=e.src,l.alt="high resolution picture",N.className="icon svelte-367gcx",x.className="icon-left svelte-367gcx",E.className="icon svelte-367gcx",k.className="icon-right svelte-367gcx",n.className="container svelte-367gcx",t.className="overlay svelte-367gcx",w=[d(window,"keydown",e.handleKeydown),d(r,"click",e.onClose),d(x,"click",e.onPrevious),d(k,"click",e.onNext)]},m:function(e,a){h(e,t,a),v(t,n),v(n,r),v(n,i),v(n,s),v(n,c),v(n,l),v(n,$),v(n,x),v(x,N),v(n,y),v(n,k),v(k,E)},p:function(e,t){e.initial&&(s.src=t.initial),e.src&&(l.src=t.src)},i:b,o:b,d:function(e){e&&p(t),g(w)}}}function S(e,t,n){var r=t.initial,i=t.src,s=$(),c=function(){return s("close")},l=function(){return s("next")},a=function(){return s("previous")};return e.$set=function(e){"initial"in e&&n("initial",r=e.initial),"src"in e&&n("src",i=e.src)},{initial:r,src:i,onClose:c,onNext:l,onPrevious:a,handleKeydown:function(e){"Escape"===e.key?c():"ArrowRight"===e.key?l():"ArrowLeft"===e.key&&a()}}}var K=function(a){function o(e){var l;return t(this,o),l=n(this,r(o).call(this)),i(s(l),e,S,M,c,["initial","src"]),l}return e(o,l),o}();function R(e,t,n){var r=Object.create(e);return r.picture=t[n],r.index=n,r}function G(e){var t,n=new K({props:{initial:e.folder+"/blur/"+e.selected,src:e.folder+"/2048px/"+e.selected}});return n.$on("close",e.removeSelection),n.$on("next",e.onNext),n.$on("previous",e.onPrevious),{c:function(){n.$$.fragment.c()},l:function(e){n.$$.fragment.l(e)},m:function(e,r){x(n,e,r),t=!0},p:function(e,t){var r={};(e.folder||e.selected)&&(r.initial=t.folder+"/blur/"+t.selected),(e.folder||e.selected)&&(r.src=t.folder+"/2048px/"+t.selected),n.$set(r)},i:function(e){t||(n.$$.fragment.i(e),t=!0)},o:function(e){n.$$.fragment.o(e),t=!1},d:function(e){n.$destroy(e)}}}function O(e,t){var n,r,i,s,c=new A({props:{initial:t.folder+"/blur/"+t.picture,src:t.folder+"/400px/"+t.picture,alt:"picture-"+t.index}});return{key:e,first:null,c:function(){n=a("div"),c.$$.fragment.c(),r=o(),this.h()},l:function(e){n=u(e,"DIV",{class:!0},!1);var t=f(n);c.$$.fragment.l(t),r=m(t,"\n      "),t.forEach(p),this.h()},h:function(){n.className="image-container hoverlay svelte-13but6l",s=d(n,"click",t.selectPicture(t.picture,t.index)),this.first=n},m:function(e,t){h(e,n,t),x(c,n,null),v(n,r),i=!0},p:function(e,n){t=n;var r={};(e.folder||e.pictures)&&(r.initial=t.folder+"/blur/"+t.picture),(e.folder||e.pictures)&&(r.src=t.folder+"/400px/"+t.picture),e.pictures&&(r.alt="picture-"+t.index),c.$set(r)},i:function(e){i||(c.$$.fragment.i(e),i=!0)},o:function(e){c.$$.fragment.o(e),i=!1},d:function(e){e&&p(n),c.$destroy(),s()}}}function q(e){for(var t,n,r,i,s,c,l,d=e.$_("album",{title:e.$_(e.title)}),b=[],g=new Map,$=e.selected&&G(e),x=e.pictures,D=function(e){return e.picture},V=0;V<x.length;V+=1){var C=R(e,x,V),P=D(C);g.set(P,b[V]=O(P,C))}return{c:function(){for($&&$.c(),t=o(),n=a("div"),r=N(d),i=o(),s=a("div"),c=a("div"),V=0;V<b.length;V+=1)b[V].c();this.h()},l:function(e){$&&$.l(e),t=m(e,"\n\n"),n=u(e,"DIV",{class:!0},!1);var l=f(n);r=m(l,d),l.forEach(p),i=m(e,"\n\n"),s=u(e,"DIV",{class:!0},!1);var a=f(s);c=u(a,"DIV",{class:!0},!1);var o=f(c);for(V=0;V<b.length;V+=1)b[V].l(o);o.forEach(p),a.forEach(p),this.h()},h:function(){n.className="title svelte-13but6l",c.className="container svelte-13but6l",s.className="layout svelte-13but6l"},m:function(e,a){for($&&$.m(e,a),h(e,t,a),h(e,n,a),v(n,r),h(e,i,a),h(e,s,a),v(s,c),V=0;V<b.length;V+=1)b[V].m(c,null);l=!0},p:function(e,n){n.selected?$?($.p(e,n),$.i(1)):(($=G(n)).c(),$.i(1),$.m(t.parentNode,t)):$&&(_(),y(function(){$.d(1),$=null}),$.o(1),k()),l&&!e.$_&&!e.title||d===(d=n.$_("album",{title:n.$_(n.title)}))||E(r,d);var i=n.pictures;_(),b=w(b,e,D,1,n,i,g,c,I,O,null,R),k()},i:function(e){if(!l){$&&$.i();for(var t=0;t<x.length;t+=1)b[t].i();l=!0}},o:function(e){for($&&$.o(),V=0;V<b.length;V+=1)b[V].o();l=!1},d:function(e){for($&&$.d(e),e&&(p(t),p(n),p(i),p(s)),V=0;V<b.length;V+=1)b[V].d()}}}function z(e,t){return H.apply(this,arguments)}function H(){return(H=C(P.mark(function e(t,n){var r;return P.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.album,e.abrupt("return",j.find(function(e){return e.title===r}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e,t,n){var r;D(e,V,function(e){n("$_",r=e)});var i=t.folder,s=t.pictures,c=t.title,l=null,a=-1;return e.$set=function(e){"folder"in e&&n("folder",i=e.folder),"pictures"in e&&n("pictures",s=e.pictures),"title"in e&&n("title",c=e.title)},{folder:i,pictures:s,title:c,selected:l,selectPicture:function(e,t){return function(){n("selected",l=e),a=t}},removeSelection:function(){n("selected",l=null)},onNext:function(){a<s.length-1&&n("selected",l=s[a+=1])},onPrevious:function(){a>0&&n("selected",l=s[a-=1])},$_:r}}export default(function(a){function o(e){var l;return t(this,o),l=n(this,r(o).call(this)),i(s(l),e,J,q,c,["folder","pictures","title"]),l}return e(o,l),o}());export{z as preload};
//# sourceMappingURL=[album].4d9fa204.js.map
