import{S as e,a as s,s as t,e as r,b as l,d as c,f as i,g as a,h as n,j as o,K as f,l as d,k as u,n as h,r as v,L as p,y as m,t as y,p as $,A as g,u as x,D as k,v as E,E as w,q as I,C as b,I as D}from"./chunk.1732d770.js";import{_ as V}from"./chunk.2994a429.js";import"./chunk.ceb0f11d.js";import{A as j}from"./chunk.fdb8d9b4.js";import{a as _}from"./chunk.4a35cc55.js";function P(e){var s,t,p,m,y,$,g,x,k,E,w,I,b,D;return{c(){s=r("div"),t=r("div"),p=r("div"),m=l(),y=r("img"),$=l(),g=r("img"),x=l(),k=r("div"),E=r("div"),w=l(),I=r("div"),b=r("div"),this.h()},l(e){s=c(e,"DIV",{class:!0},!1);var r=i(s);t=c(r,"DIV",{class:!0},!1);var l=i(t);p=c(l,"DIV",{class:!0},!1),i(p).forEach(a),m=n(l,"\n    "),y=c(l,"IMG",{class:!0,src:!0,alt:!0},!1),i(y).forEach(a),$=n(l,"\n    "),g=c(l,"IMG",{class:!0,src:!0,alt:!0},!1),i(g).forEach(a),x=n(l,"\n    "),k=c(l,"DIV",{class:!0},!1);var o=i(k);E=c(o,"DIV",{class:!0},!1),i(E).forEach(a),o.forEach(a),w=n(l,"\n    "),I=c(l,"DIV",{class:!0},!1);var f=i(I);b=c(f,"DIV",{class:!0},!1),i(b).forEach(a),f.forEach(a),l.forEach(a),r.forEach(a),this.h()},h(){o(p,"class","mask svelte-1yy7ffd"),o(y,"class","blur svelte-1yy7ffd"),o(y,"src",e.initial),o(y,"alt","loading"),o(g,"class","image svelte-1yy7ffd"),o(g,"src",e.src),o(g,"alt","high resolution picture"),o(E,"class","icon svelte-1yy7ffd"),o(k,"class","icon-left svelte-1yy7ffd"),o(b,"class","icon svelte-1yy7ffd"),o(I,"class","icon-right svelte-1yy7ffd"),o(t,"class","container svelte-1yy7ffd"),o(s,"class","overlay svelte-1yy7ffd"),D=[f(window,"keydown",e.handleKeydown),f(p,"click",e.onClose),f(k,"click",e.onPrevious),f(I,"click",e.onNext)]},m(e,r){d(e,s,r),u(s,t),u(t,p),u(t,m),u(t,y),u(t,$),u(t,g),u(t,x),u(t,k),u(k,E),u(t,w),u(t,I),u(I,b)},p(e,s){e.initial&&o(y,"src",s.initial),e.src&&o(g,"src",s.src)},i:h,o:h,d(e){e&&a(s),v(D)}}}function N(e,s,t){let{initial:r,src:l}=s;const c=p(),i=()=>c("close"),a=()=>c("next"),n=()=>c("previous");return e.$set=e=>{"initial"in e&&t("initial",r=e.initial),"src"in e&&t("src",l=e.src)},{initial:r,src:l,onClose:i,onNext:a,onPrevious:n,handleKeydown:e=>{"Escape"===e.key?i():"ArrowRight"===e.key?a():"ArrowLeft"===e.key&&n()}}}class z extends e{constructor(e){super(),s(this,e,N,P,t,["initial","src"])}}function A(e,s,t){const r=Object.create(e);return r.picture=s[t],r.index=t,r}function C(e){var s,t=new z({props:{initial:e.folder+"/blur/"+e.selected,src:e.folder+"/2048px/"+e.selected}});return t.$on("close",e.removeSelection),t.$on("next",e.onNext),t.$on("previous",e.onPrevious),{c(){t.$$.fragment.c()},l(e){t.$$.fragment.l(e)},m(e,r){m(t,e,r),s=!0},p(e,s){var r={};(e.folder||e.selected)&&(r.initial=s.folder+"/blur/"+s.selected),(e.folder||e.selected)&&(r.src=s.folder+"/2048px/"+s.selected),t.$set(r)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){g(t,e)}}}function K(e,s){var t,h,v,p,x=new j({props:{initial:s.folder+"/blur/"+s.picture,src:s.folder+"/400px/"+s.picture,alt:"picture-"+s.index}});return{key:e,first:null,c(){t=r("div"),x.$$.fragment.c(),h=l(),this.h()},l(e){t=c(e,"DIV",{class:!0},!1);var s=i(t);x.$$.fragment.l(s),h=n(s,"\n      "),s.forEach(a),this.h()},h(){o(t,"class","image-container hoverlay svelte-7fzsaw"),p=f(t,"click",s.selectPicture(s.picture,s.index)),this.first=t},m(e,s){d(e,t,s),m(x,t,null),u(t,h),v=!0},p(e,t){s=t;var r={};(e.folder||e.pictures)&&(r.initial=s.folder+"/blur/"+s.picture),(e.folder||e.pictures)&&(r.src=s.folder+"/400px/"+s.picture),e.pictures&&(r.alt="picture-"+s.index),x.$set(r)},i(e){v||(y(x.$$.fragment,e),v=!0)},o(e){$(x.$$.fragment,e),v=!1},d(e){e&&a(t),g(x),p()}}}function M(e){var s,t,f,h,v,p,m,g=e.$_("album",{title:e.$_(e.title)}),I=[],V=new Map,j=e.selected&&C(e),_=e.pictures;const P=e=>e.picture;for(var N=0;N<_.length;N+=1){let s=A(e,_,N),t=P(s);V.set(t,I[N]=K(t,s))}return{c(){for(j&&j.c(),s=l(),t=r("div"),f=x(g),h=l(),v=r("div"),p=r("div"),N=0;N<I.length;N+=1)I[N].c();this.h()},l(e){j&&j.l(e),s=n(e,"\n\n"),t=c(e,"DIV",{class:!0},!1);var r=i(t);f=n(r,g),r.forEach(a),h=n(e,"\n\n"),v=c(e,"DIV",{class:!0},!1);var l=i(v);p=c(l,"DIV",{class:!0},!1);var o=i(p);for(N=0;N<I.length;N+=1)I[N].l(o);o.forEach(a),l.forEach(a),this.h()},h(){o(t,"class","title svelte-7fzsaw"),o(p,"class","container svelte-7fzsaw"),o(v,"class","layout svelte-7fzsaw")},m(e,r){for(j&&j.m(e,r),d(e,s,r),d(e,t,r),u(t,f),d(e,h,r),d(e,v,r),u(v,p),N=0;N<I.length;N+=1)I[N].m(p,null);m=!0},p(e,t){t.selected?j?(j.p(e,t),y(j,1)):((j=C(t)).c(),y(j,1),j.m(s.parentNode,s)):j&&(b(),$(j,1,()=>{j=null}),k()),m&&!e.$_&&!e.title||g===(g=t.$_("album",{title:t.$_(t.title)}))||E(f,g);const r=t.pictures;b(),I=w(I,e,P,1,t,r,V,p,D,K,null,A),k()},i(e){if(!m){y(j);for(var s=0;s<_.length;s+=1)y(I[s]);m=!0}},o(e){for($(j),N=0;N<I.length;N+=1)$(I[N]);m=!1},d(e){for(j&&j.d(e),e&&(a(s),a(t),a(h),a(v)),N=0;N<I.length;N+=1)I[N].d()}}}async function S(e,s){const{album:t}=e.params;return _.find(e=>e.title===t)}function G(e,s,t){let r;I(e,V,e=>{t("$_",r=e)});let{folder:l,pictures:c,title:i}=s,a=null,n=-1;return e.$set=e=>{"folder"in e&&t("folder",l=e.folder),"pictures"in e&&t("pictures",c=e.pictures),"title"in e&&t("title",i=e.title)},{folder:l,pictures:c,title:i,selected:a,selectPicture:(e,s)=>()=>{t("selected",a=e),n=s},removeSelection:()=>{t("selected",a=null)},onNext:()=>{n<c.length-1&&t("selected",a=c[n+=1])},onPrevious:()=>{n>0&&t("selected",a=c[n-=1])},$_:r}}export default class extends e{constructor(e){super(),s(this,e,G,M,t,["folder","pictures","title"])}}export{S as preload};
//# sourceMappingURL=[album].4bfe02e9.js.map
