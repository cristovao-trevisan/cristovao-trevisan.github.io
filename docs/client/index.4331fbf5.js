import{S as t,a as i,s as e,e as s,d as a,f as r,g as l,j as o,H as n,l as c,k as h,n as d,u as m,b as u,h as v,y as f,t as w,p,A as g,E as x,D as $,q as k,C as y,I as b}from"./chunk.1732d770.js";import{_ as W}from"./chunk.2994a429.js";function E(t){var i,e,m;return{c(){i=s("div"),e=s("div"),m=s("iframe"),this.h()},l(t){i=a(t,"DIV",{style:!0},!1);var s=r(i);e=a(s,"DIV",{class:!0,style:!0},!1);var o=r(e);m=a(o,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0},!1),r(m).forEach(l),o.forEach(l),s.forEach(l),this.h()},h(){o(m,"title",t.title),o(m,"width","560"),o(m,"height","315"),o(m,"src",t.src),o(m,"frameborder","0"),o(m,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),m.allowFullscreen=!0,o(m,"class","svelte-1r8k93m"),o(e,"class","video-container svelte-1r8k93m"),n(e,"padding-bottom",100/t.ratio+"%"),n(i,"width",t.width),n(i,"max-width",t.maxWidth)},m(t,s){c(t,i,s),h(i,e),h(e,m)},p(t,s){t.title&&o(m,"title",s.title),t.src&&o(m,"src",s.src),t.ratio&&n(e,"padding-bottom",100/s.ratio+"%"),t.width&&n(i,"width",s.width),t.maxWidth&&n(i,"max-width",s.maxWidth)},i:d,o:d,d(t){t&&l(i)}}}function I(t,i,e){let{src:s,title:a,width:r,maxWidth:l,ratio:o=16/9}=i;return t.$set=t=>{"src"in t&&e("src",s=t.src),"title"in t&&e("title",a=t.title),"width"in t&&e("width",r=t.width),"maxWidth"in t&&e("maxWidth",l=t.maxWidth),"ratio"in t&&e("ratio",o=t.ratio)},{src:s,title:a,width:r,maxWidth:l,ratio:o}}class D extends t{constructor(t){super(),i(this,t,I,E,e,["src","title","width","maxWidth","ratio"])}}function _(t,i,e){const s=Object.create(t);return s.title=i[e].title,s.link=i[e].link,s}function j(t,i){var e,n,d,x,$,k,y=i.title,b=new D({props:{title:i.title,width:"80%",maxWidth:"1024px",src:i.link}});return{key:t,first:null,c(){e=s("div"),n=s("div"),d=m(y),x=u(),b.$$.fragment.c(),$=u(),this.h()},l(t){e=a(t,"DIV",{class:!0},!1);var i=r(e);n=a(i,"DIV",{class:!0},!1);var s=r(n);d=v(s,y),s.forEach(l),x=v(i,"\n      "),b.$$.fragment.l(i),$=v(i,"\n    "),i.forEach(l),this.h()},h(){o(n,"class","title svelte-9qw25y"),o(e,"class","item svelte-9qw25y"),this.first=e},m(t,i){c(t,e,i),h(e,n),h(n,d),h(e,x),f(b,e,null),h(e,$),k=!0},p(t,i){var e={};t.videos&&(e.title=i.title),t.videos&&(e.src=i.link),b.$set(e)},i(t){k||(w(b.$$.fragment,t),k=!0)},o(t){p(b.$$.fragment,t),k=!1},d(t){t&&l(e),g(b)}}}function q(t){var i,e,n,h,d=[],m=new Map;document.title=i=" Cristóvão Trevisan - "+t.$_("videos")+" ";var f=t.videos;const g=t=>t.link;for(var k=0;k<f.length;k+=1){let i=_(t,f,k),e=g(i);m.set(e,d[k]=j(e,i))}return{c(){for(e=u(),n=s("div"),k=0;k<d.length;k+=1)d[k].c();this.h()},l(t){e=v(t,"\n\n"),n=a(t,"DIV",{class:!0},!1);var i=r(n);for(k=0;k<d.length;k+=1)d[k].l(i);i.forEach(l),this.h()},h(){o(n,"class","container svelte-9qw25y")},m(t,i){for(c(t,e,i),c(t,n,i),k=0;k<d.length;k+=1)d[k].m(n,null);h=!0},p(t,e){h&&!t.$_||i===(i=" Cristóvão Trevisan - "+e.$_("videos")+" ")||(document.title=i);const s=e.videos;y(),d=x(d,t,g,1,e,s,m,n,b,j,null,_),$()},i(t){if(!h){for(var i=0;i<f.length;i+=1)w(d[i]);h=!0}},o(t){for(k=0;k<d.length;k+=1)p(d[k]);h=!1},d(t){for(t&&(l(e),l(n)),k=0;k<d.length;k+=1)d[k].d()}}}function V(t,i,e){let s;k(t,W,t=>{e("$_",s=t)});return{videos:[{title:"Pra Todo Adams",link:"https://www.youtube.com/embed/pqIhL_pHFgE"},{title:"Travessia - Milton Nascimento",link:"https://www.youtube.com/embed/rLntM8zj5U4"}],$_:s}}export default class extends t{constructor(t){super(),i(this,t,V,q,e,[])}}
//# sourceMappingURL=index.4331fbf5.js.map
