import{S as t,i as e,s,e as a,m as i,t as r,b as l,d as n,h as c,f as o,j as h,k as m,l as v,y as f,z as u,n as d,A as g}from"./chunk.5a48e96c.js";import{_ as k,l as p}from"./chunk.04354f7d.js";function C(t,e,s){const a=Object.create(t);return a.image=e[s].image,a.title=e[s].title,a.path=e[s].path,a}function $(t,e){var s,f,u,d,g,k,p=e.$_(e.title);return{key:t,first:null,c(){s=a("a"),f=a("img"),d=i(),g=a("div"),k=r(p),this.h()},l(t){s=l(t,"A",{rel:!0,href:!0,class:!0},!1);var e=n(s);f=l(e,"IMG",{class:!0,src:!0,alt:!0},!1),n(f).forEach(c),d=o(e,"\n\t\t\t\t"),g=l(e,"DIV",{class:!0},!1);var a=n(g);k=o(a,p),a.forEach(c),e.forEach(c),this.h()},h(){f.className="link-image svelte-29s3ki",f.src=e.image,f.alt=u=e.$_(e.title),g.className="link-text svelte-29s3ki",s.rel="prefetch",s.href=e.path,s.className="link-container svelte-29s3ki",this.first=s},m(t,e){h(t,s,e),m(s,f),m(s,d),m(s,g),m(g,k)},p(t,e){t.$_&&u!==(u=e.$_(e.title))&&(f.alt=u),t.$_&&p!==(p=e.$_(e.title))&&v(k,p)},d(t){t&&c(s)}}}function E(t){var e,s,i,v,f;return{c(){e=a("div"),s=r("Cristóvão is a direct reference to Christopher\n\t\t\t("),i=a("code"),v=r("'Cristóvão Colombo' = 'Christopher Columbus'"),f=r("),\n\t\t\tso feel free to call me Chris."),this.h()},l(t){e=l(t,"DIV",{class:!0},!1);var a=n(e);s=o(a,"Cristóvão is a direct reference to Christopher\n\t\t\t("),i=l(a,"CODE",{class:!0},!1);var r=n(i);v=o(r,"'Cristóvão Colombo' = 'Christopher Columbus'"),r.forEach(c),f=o(a,"),\n\t\t\tso feel free to call me Chris."),a.forEach(c),this.h()},h(){i.className="svelte-29s3ki",e.className="curiosity svelte-29s3ki"},m(t,a){h(t,e,a),m(e,s),m(e,i),m(i,v),m(e,f)},d(t){t&&c(e)}}}function _(t){var e,s,g,k,p,_,N,b,j,y,D,I,V=t.$_("what are you interested in?"),w=[],x=new Map,T=t.items;const A=t=>t.title;for(var M=0;M<T.length;M+=1){let e=C(t,T,M),s=A(e);x.set(s,w[M]=$(s,e))}var O="en"===t.$locale&&E();return{c(){for(e=i(),s=a("h1"),g=r("Cristóvão "),k=a("br"),p=r(" Trevisan"),_=i(),N=a("div"),b=a("div"),j=r(V),y=i(),D=a("div"),M=0;M<w.length;M+=1)w[M].c();I=i(),O&&O.c(),this.h()},l(t){e=o(t,"\n\n"),s=l(t,"H1",{class:!0},!1);var a=n(s);g=o(a,"Cristóvão "),k=l(a,"BR",{},!1),n(k).forEach(c),p=o(a," Trevisan"),a.forEach(c),_=o(t,"\n\n"),N=l(t,"DIV",{class:!0},!1);var i=n(N);b=l(i,"DIV",{class:!0},!1);var r=n(b);j=o(r,V),r.forEach(c),y=o(i,"\n\t"),D=l(i,"DIV",{class:!0},!1);var h=n(D);for(M=0;M<w.length;M+=1)w[M].l(h);h.forEach(c),I=o(i,"\n\n\t"),O&&O.l(i),i.forEach(c),this.h()},h(){document.title=" Cristóvão Trevisan ",s.className="title svelte-29s3ki",b.className="curiosity svelte-29s3ki",D.className="links svelte-29s3ki",N.className="container svelte-29s3ki"},m(t,a){for(h(t,e,a),h(t,s,a),m(s,g),m(s,k),m(s,p),h(t,_,a),h(t,N,a),m(N,b),m(b,j),m(N,y),m(N,D),M=0;M<w.length;M+=1)w[M].m(D,null);m(N,I),O&&O.m(N,null)},p(t,e){t.$_&&V!==(V=e.$_("what are you interested in?"))&&v(j,V);const s=e.items;w=f(w,t,A,1,e,s,x,D,u,$,null,C),"en"===e.$locale?O||((O=E()).c(),O.m(N,null)):O&&(O.d(1),O=null)},i:d,o:d,d(t){for(t&&(c(e),c(s),c(_),c(N)),M=0;M<w.length;M+=1)w[M].d();O&&O.d()}}}function N(t,e,s){let a,i;g(t,k,t=>{s("$_",a=t)}),g(t,p,t=>{s("$locale",i=t)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:a,$locale:i}}export default class extends t{constructor(t){super(),e(this,t,N,_,s,[])}}
//# sourceMappingURL=index.bb006a19.js.map
