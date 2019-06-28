import{_ as t,a as n,b as e,c as i,i as r,s,d as c,S as a,f as l,g as o,h as f,j as u,k as d,l as v,m as h,P as p,o as m,n as y,y as $,H as g,Q as k,A as w,t as x,r as E,C as b,v as I,F as D,w as V,J as _,u as j,E as P,N}from"./chunk.585d01de.js";import{_ as z}from"./chunk.989207aa.js";import{_ as A,a as C}from"./chunk.d81ff78f.js";import"./chunk.bb5976f1.js";import{A as M}from"./chunk.26f2ee1f.js";import{a as S}from"./chunk.551b080a.js";function G(t){var n,e,i,r,s,c,a,k,w,x,E,b,I,D;return{c:function(){n=l("div"),e=l("div"),i=l("div"),r=o(),s=l("img"),c=o(),a=l("img"),k=o(),w=l("div"),x=l("div"),E=o(),b=l("div"),I=l("div"),this.h()},l:function(t){n=f(t,"DIV",{class:!0},!1);var l=u(n);e=f(l,"DIV",{class:!0},!1);var o=u(e);i=f(o,"DIV",{class:!0},!1),u(i).forEach(d),r=v(o,"\n    "),s=f(o,"IMG",{class:!0,src:!0,alt:!0},!1),u(s).forEach(d),c=v(o,"\n    "),a=f(o,"IMG",{class:!0,src:!0,alt:!0},!1),u(a).forEach(d),k=v(o,"\n    "),w=f(o,"DIV",{class:!0},!1);var h=u(w);x=f(h,"DIV",{class:!0},!1),u(x).forEach(d),h.forEach(d),E=v(o,"\n    "),b=f(o,"DIV",{class:!0},!1);var p=u(b);I=f(p,"DIV",{class:!0},!1),u(I).forEach(d),p.forEach(d),o.forEach(d),l.forEach(d),this.h()},h:function(){h(i,"class","mask svelte-1yy7ffd"),h(s,"class","blur svelte-1yy7ffd"),h(s,"src",t.initial),h(s,"alt","loading"),h(a,"class","image svelte-1yy7ffd"),h(a,"src",t.src),h(a,"alt","high resolution picture"),h(x,"class","icon svelte-1yy7ffd"),h(w,"class","icon-left svelte-1yy7ffd"),h(I,"class","icon svelte-1yy7ffd"),h(b,"class","icon-right svelte-1yy7ffd"),h(e,"class","container svelte-1yy7ffd"),h(n,"class","overlay svelte-1yy7ffd"),D=[p(window,"keydown",t.handleKeydown),p(i,"click",t.onClose),p(w,"click",t.onPrevious),p(b,"click",t.onNext)]},m:function(t,l){m(t,n,l),y(n,e),y(e,i),y(e,r),y(e,s),y(e,c),y(e,a),y(e,k),y(e,w),y(w,x),y(e,E),y(e,b),y(b,I)},p:function(t,n){t.initial&&h(s,"src",n.initial),t.src&&h(a,"src",n.src)},i:$,o:$,d:function(t){t&&d(n),g(D)}}}function K(t,n,e){var i=n.initial,r=n.src,s=k(),c=function(){return s("close")},a=function(){return s("next")},l=function(){return s("previous")};return t.$set=function(t){"initial"in t&&e("initial",i=t.initial),"src"in t&&e("src",r=t.src)},{initial:i,src:r,onClose:c,onNext:a,onPrevious:l,handleKeydown:function(t){"Escape"===t.key?c():"ArrowRight"===t.key?a():"ArrowLeft"===t.key&&l()}}}var F=function(l){function o(t){var a;return n(this,o),a=e(this,i(o).call(this)),r(c(a),t,K,G,s,["initial","src"]),a}return t(o,a),o}();function H(t,n,e){var i=Object.create(t);return i.picture=n[e],i.index=e,i}function J(t){var n,e=new F({props:{initial:t.folder+"/blur/"+t.selected,src:t.folder+"/2048px/"+t.selected}});return e.$on("close",t.removeSelection),e.$on("next",t.onNext),e.$on("previous",t.onPrevious),{c:function(){e.$$.fragment.c()},l:function(t){e.$$.fragment.l(t)},m:function(t,i){w(e,t,i),n=!0},p:function(t,n){var i={};(t.folder||t.selected)&&(i.initial=n.folder+"/blur/"+n.selected),(t.folder||t.selected)&&(i.src=n.folder+"/2048px/"+n.selected),e.$set(i)},i:function(t){n||(x(e.$$.fragment,t),n=!0)},o:function(t){E(e.$$.fragment,t),n=!1},d:function(t){b(e,t)}}}function L(t,n){var e,i,r,s,c=new M({props:{initial:n.folder+"/blur/"+n.picture,src:n.folder+"/400px/"+n.picture,alt:"picture-"+n.index}});return{key:t,first:null,c:function(){e=l("div"),c.$$.fragment.c(),i=o(),this.h()},l:function(t){e=f(t,"DIV",{class:!0},!1);var n=u(e);c.$$.fragment.l(n),i=v(n,"\n      "),n.forEach(d),this.h()},h:function(){h(e,"class","image-container hoverlay svelte-7fzsaw"),s=p(e,"click",n.selectPicture(n.picture,n.index)),this.first=e},m:function(t,n){m(t,e,n),w(c,e,null),y(e,i),r=!0},p:function(t,e){n=e;var i={};(t.folder||t.pictures)&&(i.initial=n.folder+"/blur/"+n.picture),(t.folder||t.pictures)&&(i.src=n.folder+"/400px/"+n.picture),t.pictures&&(i.alt="picture-"+n.index),c.$set(i)},i:function(t){r||(x(c.$$.fragment,t),r=!0)},o:function(t){E(c.$$.fragment,t),r=!1},d:function(t){t&&d(e),b(c),s()}}}function O(t){for(var n,e,i,r,s,c,a,p=t.$_("album",{title:t.$_(t.title)}),$=[],g=new Map,k=t.selected&&J(t),w=t.pictures,b=function(t){return t.picture},j=0;j<w.length;j+=1){var z=H(t,w,j),A=b(z);g.set(A,$[j]=L(A,z))}return{c:function(){for(k&&k.c(),n=o(),e=l("div"),i=I(p),r=o(),s=l("div"),c=l("div"),j=0;j<$.length;j+=1)$[j].c();this.h()},l:function(t){k&&k.l(t),n=v(t,"\n\n"),e=f(t,"DIV",{class:!0},!1);var a=u(e);i=v(a,p),a.forEach(d),r=v(t,"\n\n"),s=f(t,"DIV",{class:!0},!1);var l=u(s);c=f(l,"DIV",{class:!0},!1);var o=u(c);for(j=0;j<$.length;j+=1)$[j].l(o);o.forEach(d),l.forEach(d),this.h()},h:function(){h(e,"class","title svelte-7fzsaw"),h(c,"class","container svelte-7fzsaw"),h(s,"class","layout svelte-7fzsaw")},m:function(t,l){for(k&&k.m(t,l),m(t,n,l),m(t,e,l),y(e,i),m(t,r,l),m(t,s,l),y(s,c),j=0;j<$.length;j+=1)$[j].m(c,null);a=!0},p:function(t,e){e.selected?k?(k.p(t,e),x(k,1)):((k=J(e)).c(),x(k,1),k.m(n.parentNode,n)):k&&(P(),E(k,1,function(){k=null}),D()),a&&!t.$_&&!t.title||p===(p=e.$_("album",{title:e.$_(e.title)}))||V(i,p);var r=e.pictures;P(),$=_($,t,b,1,e,r,g,c,N,L,null,H),D()},i:function(t){if(!a){x(k);for(var n=0;n<w.length;n+=1)x($[n]);a=!0}},o:function(t){for(E(k),j=0;j<$.length;j+=1)E($[j]);a=!1},d:function(t){for(k&&k.d(t),t&&(d(n),d(e),d(r),d(s)),j=0;j<$.length;j+=1)$[j].d()}}}function Q(t,n){return R.apply(this,arguments)}function R(){return(R=A(C.mark(function t(n,e){var i;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.params.album,t.abrupt("return",S.find(function(t){return t.title===i}));case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function q(t,n,e){var i;j(t,z,function(t){e("$_",i=t)});var r=n.folder,s=n.pictures,c=n.title,a=null,l=-1;return t.$set=function(t){"folder"in t&&e("folder",r=t.folder),"pictures"in t&&e("pictures",s=t.pictures),"title"in t&&e("title",c=t.title)},{folder:r,pictures:s,title:c,selected:a,selectPicture:function(t,n){return function(){e("selected",a=t),l=n}},removeSelection:function(){e("selected",a=null)},onNext:function(){l<s.length-1&&e("selected",a=s[l+=1])},onPrevious:function(){l>0&&e("selected",a=s[l-=1])},$_:i}}export default(function(l){function o(t){var a;return n(this,o),a=e(this,i(o).call(this)),r(c(a),t,q,O,s,["folder","pictures","title"]),a}return t(o,a),o}());export{Q as preload};
//# sourceMappingURL=[album].7d646f19.js.map
