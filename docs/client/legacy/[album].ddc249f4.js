import{_ as t,a as e,b as n,c as i,i as c,d as r,s,S as a,h as o,q as l,j as u,k as f,m as d,l as h,N as v,n as p,o as m,u as g,D as $,O as x,w as N,t as b,A as k,B as y,p as E,F as w,L as I,H as D,z as V}from"./chunk.05fd7ce5.js";import{_}from"./chunk.cca16f1b.js";import{_ as j,a as P}from"./chunk.161b790d.js";import"./chunk.d455d604.js";import{A}from"./chunk.97ec1602.js";import{a as M}from"./chunk.551b080a.js";function S(t){var e,n,i,c,r,s,a,x,N,b,k,y,E,w;return{c:function(){e=o("div"),n=o("div"),i=o("div"),c=l(),r=o("img"),s=l(),a=o("img"),x=l(),N=o("div"),b=o("div"),k=l(),y=o("div"),E=o("div"),this.h()},l:function(t){e=u(t,"DIV",{class:!0},!1);var o=f(e);n=u(o,"DIV",{class:!0},!1);var l=f(n);i=u(l,"DIV",{class:!0},!1),f(i).forEach(d),c=h(l,"\n    "),r=u(l,"IMG",{class:!0,src:!0,alt:!0},!1),f(r).forEach(d),s=h(l,"\n    "),a=u(l,"IMG",{class:!0,src:!0,alt:!0},!1),f(a).forEach(d),x=h(l,"\n    "),N=u(l,"DIV",{class:!0},!1);var v=f(N);b=u(v,"DIV",{class:!0},!1),f(b).forEach(d),v.forEach(d),k=h(l,"\n    "),y=u(l,"DIV",{class:!0},!1);var p=f(y);E=u(p,"DIV",{class:!0},!1),f(E).forEach(d),p.forEach(d),l.forEach(d),o.forEach(d),this.h()},h:function(){i.className="mask svelte-367gcx",r.className="blur svelte-367gcx",r.src=t.initial,r.alt="loading",a.className="image svelte-367gcx",a.src=t.src,a.alt="high resolution picture",b.className="icon svelte-367gcx",N.className="icon-left svelte-367gcx",E.className="icon svelte-367gcx",y.className="icon-right svelte-367gcx",n.className="container svelte-367gcx",e.className="overlay svelte-367gcx",w=[v(window,"keydown",t.handleKeydown),v(i,"click",t.onClose),v(N,"click",t.onPrevious),v(y,"click",t.onNext)]},m:function(t,o){p(t,e,o),m(e,n),m(n,i),m(n,c),m(n,r),m(n,s),m(n,a),m(n,x),m(n,N),m(N,b),m(n,k),m(n,y),m(y,E)},p:function(t,e){t.initial&&(r.src=e.initial),t.src&&(a.src=e.src)},i:g,o:g,d:function(t){t&&d(e),$(w)}}}function C(t,e,n){var i=e.initial,c=e.src,r=x(),s=function(){return r("close")},a=function(){return r("next")},o=function(){return r("previous")};return t.$set=function(t){"initial"in t&&n("initial",i=t.initial),"src"in t&&n("src",c=t.src)},{initial:i,src:c,onClose:s,onNext:a,onPrevious:o,handleKeydown:function(t){"Escape"===t.key?s():"ArrowRight"===t.key?a():"ArrowLeft"===t.key&&o()}}}var G=function(o){function l(t){var a;return e(this,l),a=n(this,i(l).call(this)),c(r(a),t,C,S,s,["initial","src"]),a}return t(l,a),l}();function K(t,e,n){var i=Object.create(t);return i.picture=e[n],i.index=n,i}function L(t){var e,n=new G({props:{initial:t.folder+"/blur/"+t.selected,src:t.folder+"/2048px/"+t.selected}});return n.$on("close",t.removeSelection),n.$on("next",t.onNext),n.$on("previous",t.onPrevious),{c:function(){n.$$.fragment.c()},l:function(t){n.$$.fragment.l(t)},m:function(t,i){N(n,t,i),e=!0},p:function(t,e){var i={};(t.folder||t.selected)&&(i.initial=e.folder+"/blur/"+e.selected),(t.folder||t.selected)&&(i.src=e.folder+"/2048px/"+e.selected),n.$set(i)},i:function(t){e||(n.$$.fragment.i(t),e=!0)},o:function(t){n.$$.fragment.o(t),e=!1},d:function(t){n.$destroy(t)}}}function O(t,e){var n,i,c,r,s=new A({props:{initial:e.folder+"/blur/"+e.picture,src:e.folder+"/400px/"+e.picture,alt:"picture-"+e.index}});return{key:t,first:null,c:function(){n=o("div"),s.$$.fragment.c(),i=l(),this.h()},l:function(t){n=u(t,"DIV",{class:!0},!1);var e=f(n);s.$$.fragment.l(e),i=h(e,"\n      "),e.forEach(d),this.h()},h:function(){n.className="image-container hoverlay svelte-13but6l",r=v(n,"click",e.selectPicture(e.picture,e.index)),this.first=n},m:function(t,e){p(t,n,e),N(s,n,null),m(n,i),c=!0},p:function(t,n){e=n;var i={};(t.folder||t.pictures)&&(i.initial=e.folder+"/blur/"+e.picture),(t.folder||t.pictures)&&(i.src=e.folder+"/400px/"+e.picture),t.pictures&&(i.alt="picture-"+e.index),s.$set(i)},i:function(t){c||(s.$$.fragment.i(t),c=!0)},o:function(t){s.$$.fragment.o(t),c=!1},d:function(t){t&&d(n),s.$destroy(),r()}}}function q(t){for(var e,n,i,c,r,s,a,v=t.$_("album",{title:t.$_(t.title)}),g=[],$=new Map,x=t.selected&&L(t),N=t.pictures,D=function(t){return t.picture},_=0;_<N.length;_+=1){var j=K(t,N,_),P=D(j);$.set(P,g[_]=O(P,j))}return{c:function(){for(x&&x.c(),e=l(),n=o("div"),i=b(v),c=l(),r=o("div"),s=o("div"),_=0;_<g.length;_+=1)g[_].c();this.h()},l:function(t){x&&x.l(t),e=h(t,"\n\n"),n=u(t,"DIV",{class:!0},!1);var a=f(n);i=h(a,v),a.forEach(d),c=h(t,"\n\n"),r=u(t,"DIV",{class:!0},!1);var o=f(r);s=u(o,"DIV",{class:!0},!1);var l=f(s);for(_=0;_<g.length;_+=1)g[_].l(l);l.forEach(d),o.forEach(d),this.h()},h:function(){n.className="title svelte-13but6l",s.className="container svelte-13but6l",r.className="layout svelte-13but6l"},m:function(t,o){for(x&&x.m(t,o),p(t,e,o),p(t,n,o),m(n,i),p(t,c,o),p(t,r,o),m(r,s),_=0;_<g.length;_+=1)g[_].m(s,null);a=!0},p:function(t,n){n.selected?x?(x.p(t,n),x.i(1)):((x=L(n)).c(),x.i(1),x.m(e.parentNode,e)):x&&(V(),k(function(){x.d(1),x=null}),x.o(1),y()),a&&!t.$_&&!t.title||v===(v=n.$_("album",{title:n.$_(n.title)}))||E(i,v);var c=n.pictures;V(),g=w(g,t,D,1,n,c,$,s,I,O,null,K),y()},i:function(t){if(!a){x&&x.i();for(var e=0;e<N.length;e+=1)g[e].i();a=!0}},o:function(t){for(x&&x.o(),_=0;_<g.length;_+=1)g[_].o();a=!1},d:function(t){for(x&&x.d(t),t&&(d(e),d(n),d(c),d(r)),_=0;_<g.length;_+=1)g[_].d()}}}function z(t,e){return B.apply(this,arguments)}function B(){return(B=j(P.mark(function t(e,n){var i;return P.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.params.album,t.abrupt("return",M.find(function(t){return t.title===i}));case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function F(t,e,n){var i;D(t,_,function(t){n("$_",i=t)});var c=e.folder,r=e.pictures,s=e.title,a=null,o=-1;return t.$set=function(t){"folder"in t&&n("folder",c=t.folder),"pictures"in t&&n("pictures",r=t.pictures),"title"in t&&n("title",s=t.title)},{folder:c,pictures:r,title:s,selected:a,selectPicture:function(t,e){return function(){n("selected",a=t),o=e}},removeSelection:function(){n("selected",a=null)},onNext:function(){o<r.length-1&&n("selected",a=r[o+=1])},onPrevious:function(){o>0&&n("selected",a=r[o-=1])},$_:i}}export default(function(o){function l(t){var a;return e(this,l),a=n(this,i(l).call(this)),c(r(a),t,F,q,s,["folder","pictures","title"]),a}return t(l,a),l}());export{z as preload};
//# sourceMappingURL=[album].ddc249f4.js.map