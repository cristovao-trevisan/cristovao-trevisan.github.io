import{S as e,i as t,s,e as l,q as r,f as c,h as i,k as a,j as n,J as o,m as u,o as d,n as f,M as v,K as h,v as p,d as m,z as g,A as $,p as x,B as N,F as b,D as k,_ as y,y as E}from"./chunk.ff323d17.js";import"./chunk.b9c73cbf.js";import{a as I,A as D}from"./chunk.7394ae91.js";function V(e){var t,s,h,p,m,g,$,x,N,b,k,y,E,I;return{c(){t=l("div"),s=l("div"),h=l("div"),p=r(),m=l("img"),g=r(),$=l("img"),x=r(),N=l("div"),b=l("div"),k=r(),y=l("div"),E=l("div"),this.h()},l(e){t=c(e,"DIV",{class:!0},!1);var l=i(t);s=c(l,"DIV",{class:!0},!1);var r=i(s);h=c(r,"DIV",{class:!0},!1),i(h).forEach(a),p=n(r,"\n    "),m=c(r,"IMG",{class:!0,src:!0,alt:!0},!1),i(m).forEach(a),g=n(r,"\n    "),$=c(r,"IMG",{class:!0,src:!0,alt:!0},!1),i($).forEach(a),x=n(r,"\n    "),N=c(r,"DIV",{class:!0},!1);var o=i(N);b=c(o,"DIV",{class:!0},!1),i(b).forEach(a),o.forEach(a),k=n(r,"\n    "),y=c(r,"DIV",{class:!0},!1);var u=i(y);E=c(u,"DIV",{class:!0},!1),i(E).forEach(a),u.forEach(a),r.forEach(a),l.forEach(a),this.h()},h(){h.className="mask svelte-367gcx",m.className="blur svelte-367gcx",m.src=e.initial,m.alt="loading",$.className="image svelte-367gcx",$.src=e.src,$.alt="high resolution picture",b.className="icon svelte-367gcx",N.className="icon-left svelte-367gcx",E.className="icon svelte-367gcx",y.className="icon-right svelte-367gcx",s.className="container svelte-367gcx",t.className="overlay svelte-367gcx",I=[o(window,"keydown",e.handleKeydown),o(h,"click",e.onClose),o(N,"click",e.onPrevious),o(y,"click",e.onNext)]},m(e,l){u(e,t,l),d(t,s),d(s,h),d(s,p),d(s,m),d(s,g),d(s,$),d(s,x),d(s,N),d(N,b),d(s,k),d(s,y),d(y,E)},p(e,t){e.initial&&(m.src=t.initial),e.src&&($.src=t.src)},i:f,o:f,d(e){e&&a(t),v(I)}}}function w(e,t,s){let{initial:l,src:r}=t;const c=h(),i=()=>c("close"),a=()=>c("next"),n=()=>c("previous");return e.$set=(e=>{"initial"in e&&s("initial",l=e.initial),"src"in e&&s("src",r=e.src)}),{initial:l,src:r,onClose:i,onNext:a,onPrevious:n,handleKeydown:e=>{"Escape"===e.key?i():"ArrowRight"===e.key?a():"ArrowLeft"===e.key&&n()}}}class _ extends e{constructor(e){super(),t(this,e,w,V,s,["initial","src"])}}function P(e,t,s){const l=Object.create(e);return l.picture=t[s],l.index=s,l}function j(e){var t,s=new _({props:{initial:e.folder+"/blur/"+e.selected,src:e.folder+"/2048px/"+e.selected}});return s.$on("close",e.removeSelection),s.$on("next",e.onNext),s.$on("previous",e.onPrevious),{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,l){p(s,e,l),t=!0},p(e,t){var l={};(e.folder||e.selected)&&(l.initial=t.folder+"/blur/"+t.selected),(e.folder||e.selected)&&(l.src=t.folder+"/2048px/"+t.selected),s.$set(l)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function A(e,t){var s,f,v,h,m=new D({props:{initial:t.folder+"/blur/"+t.picture,src:t.folder+"/400px/"+t.picture,alt:"picture-"+t.index}});return{key:e,first:null,c(){s=l("div"),m.$$.fragment.c(),f=r(),this.h()},l(e){s=c(e,"DIV",{class:!0},!1);var t=i(s);m.$$.fragment.l(t),f=n(t,"\n      "),t.forEach(a),this.h()},h(){s.className="image-container hoverlay svelte-13but6l",h=o(s,"click",t.selectPicture(t.picture,t.index)),this.first=s},m(e,t){u(e,s,t),p(m,s,null),d(s,f),v=!0},p(e,s){t=s;var l={};(e.folder||e.pictures)&&(l.initial=t.folder+"/blur/"+t.picture),(e.folder||e.pictures)&&(l.src=t.folder+"/400px/"+t.picture),e.pictures&&(l.alt="picture-"+t.index),m.$set(l)},i(e){v||(m.$$.fragment.i(e),v=!0)},o(e){m.$$.fragment.o(e),v=!1},d(e){e&&a(s),m.$destroy(),h()}}}function M(e){var t,s,o,f,v,h,p,k=e.$_("album",{title:e.$_(e.title)}),y=[],I=new Map,D=e.selected&&j(e),V=e.pictures;const w=e=>e.picture;for(var _=0;_<V.length;_+=1){let t=P(e,V,_),s=w(t);I.set(s,y[_]=A(s,t))}return{c(){for(D&&D.c(),t=r(),s=l("div"),o=m(k),f=r(),v=l("div"),h=l("div"),_=0;_<y.length;_+=1)y[_].c();this.h()},l(e){D&&D.l(e),t=n(e,"\n\n"),s=c(e,"DIV",{class:!0},!1);var l=i(s);o=n(l,k),l.forEach(a),f=n(e,"\n\n"),v=c(e,"DIV",{class:!0},!1);var r=i(v);h=c(r,"DIV",{class:!0},!1);var u=i(h);for(_=0;_<y.length;_+=1)y[_].l(u);u.forEach(a),r.forEach(a),this.h()},h(){s.className="title svelte-13but6l",h.className="container svelte-13but6l",v.className="layout svelte-13but6l"},m(e,l){for(D&&D.m(e,l),u(e,t,l),u(e,s,l),d(s,o),u(e,f,l),u(e,v,l),d(v,h),_=0;_<y.length;_+=1)y[_].m(h,null);p=!0},p(e,s){s.selected?D?(D.p(e,s),D.i(1)):((D=j(s)).c(),D.i(1),D.m(t.parentNode,t)):D&&(E(),g(()=>{D.d(1),D=null}),D.o(1),$()),p&&!e.$_&&!e.title||k===(k=s.$_("album",{title:s.$_(s.title)}))||x(o,k);const l=s.pictures;E(),y=N(y,e,w,1,s,l,I,h,b,A,null,P),$()},i(e){if(!p){D&&D.i();for(var t=0;t<V.length;t+=1)y[t].i();p=!0}},o(e){for(D&&D.o(),_=0;_<y.length;_+=1)y[_].o();p=!1},d(e){for(D&&D.d(e),e&&(a(t),a(s),a(f),a(v)),_=0;_<y.length;_+=1)y[_].d()}}}async function K(e,t){const{album:s}=e.params;return I.find(e=>e.title===s)}function S(e,t,s){let l;k(e,y,e=>{s("$_",l=e)});let{folder:r,pictures:c,title:i}=t,a=null,n=-1;return e.$set=(e=>{"folder"in e&&s("folder",r=e.folder),"pictures"in e&&s("pictures",c=e.pictures),"title"in e&&s("title",i=e.title)}),{folder:r,pictures:c,title:i,selected:a,selectPicture:(e,t)=>()=>{s("selected",a=e),n=t},removeSelection:()=>{s("selected",a=null)},onNext:()=>{n<c.length-1&&s("selected",a=c[n+=1])},onPrevious:()=>{n>0&&s("selected",a=c[n-=1])},$_:l}}export default class extends e{constructor(e){super(),t(this,e,S,M,s,["folder","pictures","title"])}}export{K as preload};
//# sourceMappingURL=[album].66183519.js.map
