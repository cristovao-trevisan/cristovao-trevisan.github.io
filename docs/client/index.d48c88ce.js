import{S as t,i,s as a,e as s,b as r,d as e,h as o,E as c,B as d,j as h,k as l,n,m,f as u,q as w,A as f}from"./chunk.5a48e96c.js";import{_ as p}from"./chunk.04354f7d.js";function v(t){var i,a,m;return{c(){i=s("div"),a=s("div"),m=s("iframe"),this.h()},l(t){i=r(t,"DIV",{style:!0},!1);var s=e(i);a=r(s,"DIV",{class:!0,style:!0},!1);var c=e(a);m=r(c,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0},!1),e(m).forEach(o),c.forEach(o),s.forEach(o),this.h()},h(){m.title=t.title,m.width="560",m.height="315",m.src=t.src,c(m,"frameborder","0"),c(m,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),m.allowFullscreen=!0,m.className="svelte-1939wsu",a.className="video-container svelte-1939wsu",d(a,"padding-bottom",100/t.ratio+"%"),d(i,"width",t.width),d(i,"max-width",t.maxWidth)},m(t,s){h(t,i,s),l(i,a),l(a,m)},p(t,s){t.title&&(m.title=s.title),t.src&&(m.src=s.src),t.ratio&&d(a,"padding-bottom",100/s.ratio+"%"),t.width&&d(i,"width",s.width),t.maxWidth&&d(i,"max-width",s.maxWidth)},i:n,o:n,d(t){t&&o(i)}}}function x(t,i,a){let{src:s,title:r,width:e,maxWidth:o,ratio:c=16/9}=i;return t.$set=(t=>{"src"in t&&a("src",s=t.src),"title"in t&&a("title",r=t.title),"width"in t&&a("width",e=t.width),"maxWidth"in t&&a("maxWidth",o=t.maxWidth),"ratio"in t&&a("ratio",c=t.ratio)}),{src:s,title:r,width:e,maxWidth:o,ratio:c}}class $ extends t{constructor(t){super(),i(this,t,x,v,a,["src","title","width","maxWidth","ratio"])}}function g(t){var i,a,c,d;document.title=i=" Cristóvão Trevisan - "+t.$_("artist")+" ";var l=new $({props:{title:"Pra Todo Adams",width:"80%",maxWidth:"800px",src:"https://www.youtube.com/embed/pqIhL_pHFgE"}});return{c(){a=m(),c=s("div"),l.$$.fragment.c(),this.h()},l(t){a=u(t,"\n\n"),c=r(t,"DIV",{class:!0},!1);var i=e(c);l.$$.fragment.l(i),i.forEach(o),this.h()},h(){c.className="container svelte-1fun2sg"},m(t,i){h(t,a,i),h(t,c,i),w(l,c,null),d=!0},p(t,a){d&&!t.$_||i===(i=" Cristóvão Trevisan - "+a.$_("artist")+" ")||(document.title=i)},i(t){d||(l.$$.fragment.i(t),d=!0)},o(t){l.$$.fragment.o(t),d=!1},d(t){t&&(o(a),o(c)),l.$destroy()}}}function W(t,i,a){let s;return f(t,p,t=>{a("$_",s=t)}),{$_:s}}export default class extends t{constructor(t){super(),i(this,t,W,g,a,[])}}
//# sourceMappingURL=index.d48c88ce.js.map
