import{S as e,a as t,s,e as a,b as l,v as r,d as n,f as o,h as i,j as c,w as f,k as h,m as u,l as v,A as g,x as m,t as d,q as $,D as p,H as b,G as _,u as w,F as y,L as j}from"./index.9b1e5536.js";import{_ as k}from"./index.es.ba205ebd.js";import{A as x}from"./AsyncImage.9e6eaa73.js";import{a as D}from"./_albuns.348cf5b3.js";function E(e,t,s){const a=Object.create(e);return a.title=t[s].title,a.folder=t[s].folder,a.cover=t[s].cover,a}function I(e,t){var s,b,_,w,y,j,k,D=t.$_(t.title)+"",E=new x({props:{initial:t.folder+"/blur/"+t.cover,src:t.folder+"/400px/"+t.cover,alt:t.title}});return{key:e,first:null,c(){s=a("a"),b=a("div"),E.$$.fragment.c(),_=l(),w=a("div"),y=r(D),j=l(),this.h()},l(e){s=n(e,"A",{rel:!0,class:!0,href:!0},!1);var t=o(s);b=n(t,"DIV",{class:!0},!1);var a=o(b);E.$$.fragment.l(a),a.forEach(i),_=c(t),w=n(t,"DIV",{},!1);var l=o(w);y=f(l,D),l.forEach(i),j=c(t),t.forEach(i),this.h()},h(){h(b,"class","image-container svelte-1saw3ak"),h(s,"rel","prefetch"),h(s,"class","item-container hoverlay svelte-1saw3ak"),h(s,"href","artist/gallery/album/"+t.title),this.first=s},m(e,t){u(e,s,t),v(s,b),g(E,b,null),v(s,_),v(s,w),v(w,y),v(s,j),k=!0},p(e,t){k&&!e.$_||D===(D=t.$_(t.title)+"")||m(y,D)},i(e){k||(d(E.$$.fragment,e),k=!0)},o(e){$(E.$$.fragment,e),k=!1},d(e){e&&i(s),p(E)}}}function A(e){var t,s,r,f,g,m=[],p=new Map;document.title=t=" Cristóvão Trevisan - "+e.$_("gallery")+" ";let w=D;const k=e=>e.title;for(let t=0;t<w.length;t+=1){let s=E(e,w,t),a=k(s);p.set(a,m[t]=I(a,s))}return{c(){s=l(),r=a("div"),f=a("div");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){s=c(e),r=n(e,"DIV",{class:!0},!1);var t=o(r);f=n(t,"DIV",{class:!0},!1);var a=o(f);for(let e=0;e<m.length;e+=1)m[e].l(a);a.forEach(i),t.forEach(i),this.h()},h(){h(f,"class","container svelte-1saw3ak"),h(r,"class","layout svelte-1saw3ak")},m(e,t){u(e,s,t),u(e,r,t),v(r,f);for(let e=0;e<m.length;e+=1)m[e].m(f,null);g=!0},p(e,s){g&&!e.$_||t===(t=" Cristóvão Trevisan - "+s.$_("gallery")+" ")||(document.title=t);const a=D;y(),m=b(m,e,k,1,s,a,p,f,j,I,null,E),_()},i(e){if(!g){for(let e=0;e<w.length;e+=1)d(m[e]);g=!0}},o(e){for(let e=0;e<m.length;e+=1)$(m[e]);g=!1},d(e){e&&(i(s),i(r));for(let e=0;e<m.length;e+=1)m[e].d()}}}function V(e,t,s){let a;w(e,k,e=>{s("$_",a=e)});let{slug:l}=t;return e.$set=e=>{"slug"in e&&s("slug",l=e.slug)},{slug:l,$_:a}}export default class extends e{constructor(e){super(),t(this,e,V,A,s,["slug"])}}
