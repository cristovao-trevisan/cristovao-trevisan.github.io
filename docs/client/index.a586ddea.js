import{S as e,a as t,s,y as a,m as n,A as r,B as o,C as i,t as l,q as c,h as m,D as f,e as h,b as p,v,d as g,f as $,j as u,w as d,k as w,K as _,l as b,x as D,H as x,G as k,u as T,z as E,F as j,L as P}from"./index.9b1e5536.js";import{_ as C}from"./index.es.ba205ebd.js";import{S as H}from"./SocialNetwork.f520e030.js";import{G as I,L as N,T as V}from"./index.bf84d3de.js";function y(e,t,s){const a=Object.create(e);return a.item=t[s],a}function G(e,t){var s,h,p=[t.item];let v={};for(var g=0;g<p.length;g+=1)v=E(v,p[g]);var $=new H({props:v});return{key:e,first:null,c(){s=a(),$.$$.fragment.c(),this.h()},l(e){s=a(),$.$$.fragment.l(e),this.h()},h(){this.first=s},m(e,t){n(e,s,t),r($,e,t),h=!0},p(e,t){var s=e.socialNetworks?o(p,[i(t.item)]):{};$.$set(s)},i(e){h||(l($.$$.fragment,e),h=!0)},o(e){c($.$$.fragment,e),h=!1},d(e){e&&m(s),f($,e)}}}function L(e){var t,s,a,o,i,T,E,C,N,V,L,M,F,S,A,q,z=e.$_("engineerPage.presentation")+"",B=e.$_("engineerPage.Follow me on GitHub!")+"",K=[],O=new Map;document.title=t=" Cristóvão Trevisan - "+e.$_("engineer")+" ";var J=new H({props:{icon:I,title:"cristovao-trevisan",path:"https://github.com/cristovao-trevisan"}});let Q=e.socialNetworks;const R=e=>e.item.path;for(let t=0;t<Q.length;t+=1){let s=y(e,Q,t),a=R(s);O.set(a,K[t]=G(a,s))}return{c(){s=h("meta"),o=p(),i=h("div"),T=h("div"),E=v("Cristóvão Trevisan"),C=p(),N=h("div"),V=p(),L=h("div"),M=v(B),F=p(),J.$$.fragment.c(),S=p(),A=h("div");for(let e=0;e<K.length;e+=1)K[e].c();this.h()},l(e){s=g(e,"META",{name:!0,content:!0},!1),$(s).forEach(m),o=u(e),i=g(e,"DIV",{class:!0},!1);var t=$(i);T=g(t,"DIV",{class:!0},!1);var a=$(T);E=d(a,"Cristóvão Trevisan"),a.forEach(m),C=u(t),N=g(t,"DIV",{class:!0,style:!0},!1),$(N).forEach(m),V=u(t),L=g(t,"DIV",{class:!0,style:!0},!1);var n=$(L);M=d(n,B),n.forEach(m),F=u(t),J.$$.fragment.l(t),S=u(t),A=g(t,"DIV",{class:!0},!1);var r=$(A);for(let e=0;e<K.length;e+=1)K[e].l(r);r.forEach(m),t.forEach(m),this.h()},h(){w(s,"name","Description"),w(s,"content",a=e.$_("metaDescription")+", "+e.$_("engineerPage.metaDescription")),w(T,"class","title svelte-1b1opw"),w(N,"class","text svelte-1b1opw"),_(N,"margin-top","40px"),_(N,"margin-bottom","16px"),w(L,"class","subtitle svelte-1b1opw"),_(L,"margin","16px 0"),w(A,"class","social-networks svelte-1b1opw"),w(i,"class","container svelte-1b1opw")},m(e,t){b(document.head,s),n(e,o,t),n(e,i,t),b(i,T),b(T,E),b(i,C),b(i,N),N.innerHTML=z,b(i,V),b(i,L),b(L,M),b(i,F),r(J,i,null),b(i,S),b(i,A);for(let e=0;e<K.length;e+=1)K[e].m(A,null);q=!0},p(e,n){q&&!e.$_||t===(t=" Cristóvão Trevisan - "+n.$_("engineer")+" ")||(document.title=t),q&&!e.$_||a===(a=n.$_("metaDescription")+", "+n.$_("engineerPage.metaDescription"))||w(s,"content",a),q&&!e.$_||z===(z=n.$_("engineerPage.presentation")+"")||(N.innerHTML=z),q&&!e.$_||B===(B=n.$_("engineerPage.Follow me on GitHub!")+"")||D(M,B);const r=n.socialNetworks;j(),K=x(K,e,R,1,n,r,O,A,P,G,null,y),k()},i(e){if(!q){l(J.$$.fragment,e);for(let e=0;e<Q.length;e+=1)l(K[e]);q=!0}},o(e){c(J.$$.fragment,e);for(let e=0;e<K.length;e+=1)c(K[e]);q=!1},d(e){m(s),e&&(m(o),m(i)),f(J);for(let e=0;e<K.length;e+=1)K[e].d()}}}function M(e,t,s){let a;return T(e,C,e=>{s("$_",a=e)}),{socialNetworks:[{path:"https://www.linkedin.com/in/cristovao-trevisan",icon:N},{path:"https://twitter.com/cristovao_tre",icon:V}],$_:a}}export default class extends e{constructor(e){super(),t(this,e,M,L,s,[])}}