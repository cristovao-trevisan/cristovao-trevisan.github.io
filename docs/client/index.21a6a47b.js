import{S as t,a as e,e as s,k as i,s as l,b as a,u as n,d as r,f as o,g as c,h,j as f,l as v,v as x,E as d,n as m,q as p,F as y}from"./chunk.1732d770.js";import{_ as u,l as g}from"./chunk.2994a429.js";function C(t,e,s){const i=Object.create(t);return i.image=e[s].image,i.title=e[s].title,i.path=e[s].path,i}function b(t,e){var l,d,m,p,y,u,g,C=e.$_(e.title);return{key:t,first:null,c(){l=s("a"),d=s("img"),p=a(),y=s("div"),u=n(C),g=a(),this.h()},l(t){l=r(t,"A",{rel:!0,href:!0,class:!0},!1);var e=o(l);d=r(e,"IMG",{class:!0,src:!0,alt:!0},!1),o(d).forEach(c),p=h(e,"\n\t\t\t\t"),y=r(e,"DIV",{class:!0},!1);var s=o(y);u=h(s,C),s.forEach(c),g=h(e,"\n\t\t\t"),e.forEach(c),this.h()},h(){f(d,"class","link-image svelte-1h222yx"),f(d,"src",e.image),f(d,"alt",m=e.$_(e.title)),f(y,"class","link-text svelte-1h222yx"),f(l,"rel","prefetch"),f(l,"href",e.path),f(l,"class","link-container svelte-1h222yx"),this.first=l},m(t,e){v(t,l,e),i(l,d),i(l,p),i(l,y),i(y,u),i(l,g)},p(t,e){t.$_&&m!==(m=e.$_(e.title))&&f(d,"alt",m),t.$_&&C!==(C=e.$_(e.title))&&x(u,C)},d(t){t&&c(l)}}}function w(t){var e,l,a,x,d;return{c(){e=s("div"),l=n("Cristóvão is a direct reference to Christopher\n\t\t\t("),a=s("code"),x=n("'Cristóvão Colombo' = 'Christopher Columbus'"),d=n("),\n\t\t\tso feel free to call me Chris."),this.h()},l(t){e=r(t,"DIV",{class:!0},!1);var s=o(e);l=h(s,"Cristóvão is a direct reference to Christopher\n\t\t\t("),a=r(s,"CODE",{class:!0},!1);var i=o(a);x=h(i,"'Cristóvão Colombo' = 'Christopher Columbus'"),i.forEach(c),d=h(s,"),\n\t\t\tso feel free to call me Chris."),s.forEach(c),this.h()},h(){f(a,"class","svelte-1h222yx"),f(e,"class","curiosity svelte-1h222yx")},m(t,s){v(t,e,s),i(e,l),i(e,a),i(a,x),i(e,d)},d(t){t&&c(e)}}}function k(t){var e,l,p,u,g,k,$,E,j,_,I,D,S=t.$_("what are you interested in?"),V=[],z=new Map,T=t.items;const B=t=>t.title;for(var M=0;M<T.length;M+=1){let e=C(t,T,M),s=B(e);z.set(s,V[M]=b(s,e))}var O="en"===t.$locale&&w();return{c(){for(e=a(),l=s("h1"),p=n("Cristóvão "),u=s("br"),g=n(" Trevisan"),k=a(),$=s("div"),E=s("div"),j=n(S),_=a(),I=s("div"),M=0;M<V.length;M+=1)V[M].c();D=a(),O&&O.c(),this.h()},l(t){e=h(t,"\n\n"),l=r(t,"H1",{class:!0},!1);var s=o(l);p=h(s,"Cristóvão "),u=r(s,"BR",{},!1),o(u).forEach(c),g=h(s," Trevisan"),s.forEach(c),k=h(t,"\n\n"),$=r(t,"DIV",{class:!0},!1);var i=o($);E=r(i,"DIV",{class:!0},!1);var a=o(E);j=h(a,S),a.forEach(c),_=h(i,"\n\t"),I=r(i,"DIV",{class:!0},!1);var n=o(I);for(M=0;M<V.length;M+=1)V[M].l(n);n.forEach(c),D=h(i,"\n\n\t"),O&&O.l(i),i.forEach(c),this.h()},h(){document.title=" Cristóvão Trevisan ",f(l,"class","title svelte-1h222yx"),f(E,"class","curiosity svelte-1h222yx"),f(I,"class","links svelte-1h222yx"),f($,"class","container svelte-1h222yx")},m(t,s){for(v(t,e,s),v(t,l,s),i(l,p),i(l,u),i(l,g),v(t,k,s),v(t,$,s),i($,E),i(E,j),i($,_),i($,I),M=0;M<V.length;M+=1)V[M].m(I,null);i($,D),O&&O.m($,null)},p(t,e){t.$_&&S!==(S=e.$_("what are you interested in?"))&&x(j,S);const s=e.items;V=d(V,t,B,1,e,s,z,I,y,b,null,C),"en"===e.$locale?O||((O=w()).c(),O.m($,null)):O&&(O.d(1),O=null)},i:m,o:m,d(t){for(t&&(c(e),c(l),c(k),c($)),M=0;M<V.length;M+=1)V[M].d();O&&O.d()}}}function $(t,e,s){let i,l;p(t,u,t=>{s("$_",i=t)}),p(t,g,t=>{s("$locale",l=t)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:i,$locale:l}}export default class extends t{constructor(t){var a;super(),document.getElementById("svelte-1h222yx-style")||((a=s("style")).id="svelte-1h222yx-style",a.textContent=".title.svelte-1h222yx{text-align:center;font-family:'Street Slab';font-weight:500;font-size:48px;margin-bottom:0}.container.svelte-1h222yx{display:flex;align-items:center;justify-content:center;flex-direction:column;margin:32px 0}.links.svelte-1h222yx{display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;width:100%;max-width:800px}.links.svelte-1h222yx :hover{opacity:0.6}.link-container.svelte-1h222yx{position:relative;height:300px;width:300px;background-color:#d1d1d1;display:flex;align-items:center;justify-content:center;text-decoration:none;border-radius:2px;overflow:hidden;margin:24px}.link-image.svelte-1h222yx{position:absolute;width:100%;height:100%;top:0;left:0;-o-object-fit:contain;object-fit:contain;opacity:0.7}.link-text.svelte-1h222yx{font-weight:bold;z-index:1;color:white;font-family:'Street Slab';font-size:42px;text-shadow:0 2px 8px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.4)}.curiosity.svelte-1h222yx{width:80%;max-width:500px;font-style:italic;text-align:center}.curiosity.svelte-1h222yx code.svelte-1h222yx{white-space:nowrap}",i(document.head,a)),e(this,t,$,k,l,[])}}
//# sourceMappingURL=index.21a6a47b.js.map