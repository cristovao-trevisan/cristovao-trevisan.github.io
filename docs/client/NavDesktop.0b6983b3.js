import{S as e,i as t,s,e as a,t as r,g as n,a as h,b as o,j as c,d as l,H as p,f as i,k as u,p as m,n as f,o as g,B as d}from"./chunk.fca4c666.js";import{_ as $}from"./chunk.04354f7d.js";function b(e,t,s){const a=Object.create(e);return a.path=t[s].path,a.icon=t[s].icon,a.title=t[s].title,a}function v(e){var t,s,f,g,d,$=e.$_(e.title);return{c(){t=a("div"),s=a("a"),f=r($),d=n(),this.h()},l(e){t=h(e,"DIV",{class:!0},!1);var a=o(t);s=h(a,"A",{class:!0,href:!0},!1);var r=o(s);f=c(r,$),r.forEach(l),d=c(a,"\n\t\t"),a.forEach(l),this.h()},h(){s.className="item-title",s.href=g=`${e.basepath}/${e.path}`,t.className="item-container svelte-p34j56",p(t,"selected",e.parsedSegment===e.path)},m(e,a){i(e,t,a),u(t,s),u(s,f),u(t,d)},p(e,a){(e.$_||e.routes)&&$!==($=a.$_(a.title))&&m(f,$),(e.basepath||e.routes)&&g!==(g=`${a.basepath}/${a.path}`)&&(s.href=g),(e.parsedSegment||e.routes)&&p(t,"selected",a.parsedSegment===a.path)},d(e){e&&l(t)}}}function S(e){for(var t,s=e.routes,r=[],n=0;n<s.length;n+=1)r[n]=v(b(e,s,n));return{c(){t=a("nav");for(var e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=h(e,"NAV",{class:!0},!1);for(var s=o(t),a=0;a<r.length;a+=1)r[a].l(s);s.forEach(l),this.h()},h(){t.className="container svelte-p34j56"},m(e,s){i(e,t,s);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p(e,a){if(e.parsedSegment||e.routes||e.basepath||e.$_){s=a.routes;for(var n=0;n<s.length;n+=1){const h=b(a,s,n);r[n]?r[n].p(e,h):(r[n]=v(h),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},i:f,o:f,d(e){e&&l(t),g(r,e)}}}function j(e,t,s){let a;d(e,$,e=>{s("$_",a=e)});let r,{routes:n=[],segment:h="",basepath:o=""}=t;return e.$set=(e=>{"routes"in e&&s("routes",n=e.routes),"segment"in e&&s("segment",h=e.segment),"basepath"in e&&s("basepath",o=e.basepath)}),e.$$.update=((e={segment:1})=>{e.segment&&s("parsedSegment",r="/"===h?"":h||"")}),{routes:n,segment:h,basepath:o,parsedSegment:r,$_:a}}export default class extends e{constructor(e){super(),t(this,e,j,S,s,["routes","segment","basepath"])}}
//# sourceMappingURL=NavDesktop.0b6983b3.js.map