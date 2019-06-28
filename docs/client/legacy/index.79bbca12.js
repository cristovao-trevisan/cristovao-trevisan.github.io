import{_ as t,a as e,b as n,c as a,i,s as o,d as s,S as r,f as c,n as l,x as f,o as m,A as u,B as p,t as h,r as v,k as g,C as w,g as $,v as b,h as d,j as x,l as _,m as k,M as y,w as D,J as E,F as T,u as j,z as I,E as C,N as P}from"./chunk.585d01de.js";import{_ as S}from"./chunk.989207aa.js";import{S as M}from"./chunk.634e902b.js";import{G as N,L as V,T as G}from"./chunk.bb5976f1.js";function H(t,e,n){var a=Object.create(t);return a.item=e[n],a}function z(t,e){for(var n,a,i=[e.item],o={},s=0;s<i.length;s+=1)o=I(o,i[s]);var r=new M({props:o});return{key:t,first:null,c:function(){n=f(),r.$$.fragment.c(),this.h()},l:function(t){n=f(),r.$$.fragment.l(t),this.h()},h:function(){this.first=n},m:function(t,e){m(t,n,e),u(r,t,e),a=!0},p:function(t,e){var n=t.socialNetworks?p(i,[e.item]):{};r.$set(n)},i:function(t){a||(h(r.$$.fragment,t),a=!0)},o:function(t){v(r.$$.fragment,t),a=!1},d:function(t){t&&g(n),w(r,t)}}}function B(t){var e,n,a,i,o,s,r,f,p,j,I,S,V,G,B,F,L=t.$_("engineerPage.presentation"),A=t.$_("engineerPage.Follow me on GitHub!"),J=[],O=new Map;document.title=e=" Cristóvão Trevisan - "+t.$_("engineer")+" ";for(var q=new M({props:{icon:N,title:"cristovao-trevisan",path:"https://github.com/cristovao-trevisan"}}),K=t.socialNetworks,Q=function(t){return t.item.path},R=0;R<K.length;R+=1){var U=H(t,K,R),W=Q(U);O.set(W,J[R]=z(W,U))}return{c:function(){for(n=c("meta"),i=$(),o=c("div"),s=c("div"),r=b("Cristóvão Trevisan"),f=$(),p=c("div"),j=$(),I=c("div"),S=b(A),V=$(),q.$$.fragment.c(),G=$(),B=c("div"),R=0;R<J.length;R+=1)J[R].c();this.h()},l:function(t){n=d(t,"META",{name:!0,content:!0},!1),x(n).forEach(g),i=_(t,"\n\n"),o=d(t,"DIV",{class:!0},!1);var e=x(o);s=d(e,"DIV",{class:!0},!1);var a=x(s);r=_(a,"Cristóvão Trevisan"),a.forEach(g),f=_(e,"\n  "),p=d(e,"DIV",{class:!0,style:!0},!1),x(p).forEach(g),j=_(e,"\n  "),I=d(e,"DIV",{class:!0,style:!0},!1);var c=x(I);S=_(c,A),c.forEach(g),V=_(e,"\n\n  "),q.$$.fragment.l(e),G=_(e,"\n\n  "),B=d(e,"DIV",{class:!0},!1);var l=x(B);for(R=0;R<J.length;R+=1)J[R].l(l);l.forEach(g),e.forEach(g),this.h()},h:function(){k(n,"name","Description"),k(n,"content",a=t.$_("metaDescription")+", "+t.$_("engineerPage.metaDescription")),k(s,"class","title svelte-1b1opw"),k(p,"class","text svelte-1b1opw"),y(p,"margin-top","40px"),y(p,"margin-bottom","16px"),k(I,"class","subtitle svelte-1b1opw"),y(I,"margin","16px 0"),k(B,"class","social-networks svelte-1b1opw"),k(o,"class","container svelte-1b1opw")},m:function(t,e){for(l(document.head,n),m(t,i,e),m(t,o,e),l(o,s),l(s,r),l(o,f),l(o,p),p.innerHTML=L,l(o,j),l(o,I),l(I,S),l(o,V),u(q,o,null),l(o,G),l(o,B),R=0;R<J.length;R+=1)J[R].m(B,null);F=!0},p:function(t,i){F&&!t.$_||e===(e=" Cristóvão Trevisan - "+i.$_("engineer")+" ")||(document.title=e),F&&!t.$_||a===(a=i.$_("metaDescription")+", "+i.$_("engineerPage.metaDescription"))||k(n,"content",a),F&&!t.$_||L===(L=i.$_("engineerPage.presentation"))||(p.innerHTML=L),F&&!t.$_||A===(A=i.$_("engineerPage.Follow me on GitHub!"))||D(S,A);var o={};t.GithubIcon&&(o.icon=N),q.$set(o);var s=i.socialNetworks;C(),J=E(J,t,Q,1,i,s,O,B,P,z,null,H),T()},i:function(t){if(!F){h(q.$$.fragment,t);for(var e=0;e<K.length;e+=1)h(J[e]);F=!0}},o:function(t){for(v(q.$$.fragment,t),R=0;R<J.length;R+=1)v(J[R]);F=!1},d:function(t){for(g(n),t&&(g(i),g(o)),w(q),R=0;R<J.length;R+=1)J[R].d()}}}function F(t,e,n){var a;return j(t,S,function(t){n("$_",a=t)}),{socialNetworks:[{path:"https://www.linkedin.com/in/cristovao-trevisan",icon:V},{path:"https://twitter.com/cristovao_tre",icon:G}],$_:a}}export default(function(f){function m(t){var r,f;return e(this,m),r=n(this,a(m).call(this)),document.getElementById("svelte-1b1opw-style")||((f=c("style")).id="svelte-1b1opw-style",f.textContent=".container.svelte-1b1opw{text-align:center;display:flex;align-items:center;flex-direction:column;margin-left:5%;width:90%;height:100%}.title.svelte-1b1opw{font-family:'Street Slab';font-weight:500;font-size:43px;margin-bottom:0;color:#317BE6;margin-top:24px}.text.svelte-1b1opw{text-align:justify;max-width:800px}.subtitle.svelte-1b1opw{font-family:'Street Slab';font-weight:500;font-size:18px;margin-bottom:0;color:#888888}.social-networks.svelte-1b1opw{display:flex;flex-wrap:wrap}",l(document.head,f)),i(s(r),t,F,B,o,[]),r}return t(m,r),m}());
//# sourceMappingURL=index.79bbca12.js.map
