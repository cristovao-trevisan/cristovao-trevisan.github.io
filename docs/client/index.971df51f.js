import{S as e,a as t,e as a,k as s,s as r,b as l,u as n,d as o,f as i,g as c,h as f,j as u,l as h,y as v,v as d,t as p,p as m,A as g,E as x,D as w,q as y,C as $,I as k}from"./chunk.1732d770.js";import{_ as b}from"./chunk.2994a429.js";import{A as j}from"./chunk.6b23af5d.js";import{a as _}from"./chunk.4a35cc55.js";function E(e,t,a){const s=Object.create(e);return s.title=t[a].title,s.folder=t[a].folder,s.cover=t[a].cover,s}function I(e,t){var r,x,w,y,$,k,b,_=t.$_(t.title),E=new j({props:{initial:t.folder+"/blur/"+t.cover,src:t.folder+"/400px/"+t.cover,alt:t.title}});return{key:e,first:null,c(){r=a("a"),x=a("div"),E.$$.fragment.c(),w=l(),y=a("div"),$=n(_),k=l(),this.h()},l(e){r=o(e,"A",{rel:!0,class:!0,href:!0},!1);var t=i(r);x=o(t,"DIV",{class:!0},!1);var a=i(x);E.$$.fragment.l(a),a.forEach(c),w=f(t,"\n        "),y=o(t,"DIV",{},!1);var s=i(y);$=f(s,_),s.forEach(c),k=f(t,"\n      "),t.forEach(c),this.h()},h(){u(x,"class","image-container svelte-1saw3ak"),u(r,"rel","prefetch"),u(r,"class","item-container hoverlay svelte-1saw3ak"),u(r,"href","artist/gallery/album/"+t.title),this.first=r},m(e,t){h(e,r,t),s(r,x),v(E,x,null),s(r,w),s(r,y),s(y,$),s(r,k),b=!0},p(e,t){var a={};e.albuns&&(a.initial=t.folder+"/blur/"+t.cover),e.albuns&&(a.src=t.folder+"/400px/"+t.cover),e.albuns&&(a.alt=t.title),E.$set(a),b&&!e.$_||_===(_=t.$_(t.title))||d($,_)},i(e){b||(p(E.$$.fragment,e),b=!0)},o(e){m(E.$$.fragment,e),b=!1},d(e){e&&c(r),g(E)}}}function D(e){var t,r,n,v,d,g=[],y=new Map;document.title=t=" Cristóvão Trevisan - "+e.$_("gallery")+" ";var b=_;const j=e=>e.title;for(var D=0;D<b.length;D+=1){let t=E(e,b,D),a=j(t);y.set(a,g[D]=I(a,t))}return{c(){for(r=l(),n=a("div"),v=a("div"),D=0;D<g.length;D+=1)g[D].c();this.h()},l(e){r=f(e,"\n\n"),n=o(e,"DIV",{class:!0},!1);var t=i(n);v=o(t,"DIV",{class:!0},!1);var a=i(v);for(D=0;D<g.length;D+=1)g[D].l(a);a.forEach(c),t.forEach(c),this.h()},h(){u(v,"class","container svelte-1saw3ak"),u(n,"class","layout svelte-1saw3ak")},m(e,t){for(h(e,r,t),h(e,n,t),s(n,v),D=0;D<g.length;D+=1)g[D].m(v,null);d=!0},p(e,a){d&&!e.$_||t===(t=" Cristóvão Trevisan - "+a.$_("gallery")+" ")||(document.title=t);const s=_;$(),g=x(g,e,j,1,a,s,y,v,k,I,null,E),w()},i(e){if(!d){for(var t=0;t<b.length;t+=1)p(g[t]);d=!0}},o(e){for(D=0;D<g.length;D+=1)m(g[D]);d=!1},d(e){for(e&&(c(r),c(n)),D=0;D<g.length;D+=1)g[D].d()}}}function C(e,t,a){let s;y(e,b,e=>{a("$_",s=e)});let{slug:r}=t;return e.$set=e=>{"slug"in e&&a("slug",r=e.slug)},{slug:r,$_:s}}export default class extends e{constructor(e){var l;super(),document.getElementById("svelte-1saw3ak-style")||((l=a("style")).id="svelte-1saw3ak-style",l.textContent=".layout.svelte-1saw3ak{display:flex;justify-content:center;margin-top:16px}.container.svelte-1saw3ak{display:flex;width:100%;max-width:1024px;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.item-container.svelte-1saw3ak{margin-bottom:8px;position:relative;display:flex;flex-direction:column;text-decoration:none;align-items:center}.image-container.svelte-1saw3ak{margin-bottom:2px;width:200px;height:200px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);border-radius:8px;overflow:hidden;cursor:pointer}",s(document.head,l)),t(this,e,C,D,r,["slug"])}}
//# sourceMappingURL=index.971df51f.js.map