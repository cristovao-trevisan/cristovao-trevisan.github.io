import{_ as t,a as n,b as e,c as i,i as r,d as a,s,S as o,j as l,k as c,m as f,n as u,o as h,p as m,q as v,r as p,u as $,v as g,z as b,C as d,D as w,E as y,w as _,A as N,L as k,H as x,M as C,J as E,K as D,y as I}from"./chunk.c4158fc0.js";import"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/helpers/esm/get";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";import{G as T,L as V,T as P}from"./chunk.11bf628d.js";function H(t){var n,e;return{c:function(){n=l("div"),e=c(t.title),this.h()},l:function(i){n=f(i,"DIV",{class:!0},!1);var r=u(n);e=h(r,t.title),r.forEach(m),this.h()},h:function(){n.className="title svelte-16rgv81"},m:function(t,i){v(t,n,i),p(n,e)},p:function(t,n){t.title&&$(e,n.title)},d:function(t){t&&m(n)}}}function j(t){var n,e,i,r,a=t.icon;if(a)var s=new a({});var o=t.title&&H(t);return{c:function(){n=l("a"),e=l("div"),s&&s.$$.fragment.c(),i=g(),o&&o.c(),this.h()},l:function(t){n=f(t,"A",{href:!0,class:!0,target:!0},!1);var r=u(n);e=f(r,"DIV",{class:!0},!1);var a=u(e);s&&s.$$.fragment.l(a),a.forEach(m),i=h(r,"\n  "),o&&o.l(r),r.forEach(m),this.h()},h:function(){e.className="icon svelte-16rgv81",n.href=t.path,n.className="container svelte-16rgv81",n.target="_blank"},m:function(t,a){v(t,n,a),p(n,e),s&&b(s,e,null),p(n,i),o&&o.m(n,null),r=!0},p:function(t,i){if(a!==(a=i.icon)){if(s){d();var l=s;w(function(){l.$destroy()}),l.$$.fragment.o(1),y()}a?((s=new a({})).$$.fragment.c(),s.$$.fragment.i(1),b(s,e,null)):s=null}i.title?o?o.p(t,i):((o=H(i)).c(),o.m(n,null)):o&&(o.d(1),o=null),r&&!t.path||(n.href=i.path)},i:function(t){r||(s&&s.$$.fragment.i(t),r=!0)},o:function(t){s&&s.$$.fragment.o(t),r=!1},d:function(t){t&&m(n),s&&s.$destroy(),o&&o.d()}}}function G(t,n,e){var i=n.icon,r=n.path,a=n.title;return t.$set=function(t){"icon"in t&&e("icon",i=t.icon),"path"in t&&e("path",r=t.path),"title"in t&&e("title",a=t.title)},{icon:i,path:r,title:a}}var L=function(l){function c(t){var o;return n(this,c),o=e(this,i(c).call(this)),r(a(o),t,G,j,s,["icon","path","title"]),o}return t(c,o),c}();function M(t,n,e){var i=Object.create(t);return i.item=n[e],i}function A(t,n){for(var e,i,r=[n.item],a={},s=0;s<r.length;s+=1)a=I(a,r[s]);var o=new L({props:a});return{key:t,first:null,c:function(){e=_(),o.$$.fragment.c(),this.h()},l:function(t){e=_(),o.$$.fragment.l(t),this.h()},h:function(){this.first=e},m:function(t,n){v(t,e,n),b(o,t,n),i=!0},p:function(t,n){var e=t.socialNetworks?N(r,[n.item]):{};o.$set(e)},i:function(t){i||(o.$$.fragment.i(t),i=!0)},o:function(t){o.$$.fragment.o(t),i=!1},d:function(t){t&&m(e),o.$destroy(t)}}}function F(t){var n,e,i,r,a,s,o,w,_,N,E,D,I,V,P=t.$_("engineerPage.presentation"),H=t.$_("engineerPage.Follow me on GitHub!"),j=[],G=new Map;document.title=n=" Cristóvão Trevisan - "+t.$_("engineer")+" ";for(var F=new L({props:{icon:T,title:"cristovao-trevisan",path:"https://github.com/cristovao-trevisan"}}),O=t.socialNetworks,S=function(t){return t.item.path},q=0;q<O.length;q+=1){var z=M(t,O,q),J=S(z);G.set(J,j[q]=A(J,z))}return{c:function(){for(e=g(),i=l("div"),r=l("div"),a=c("Cristóvão Trevisan"),s=g(),o=l("div"),w=g(),_=l("div"),N=c(H),E=g(),F.$$.fragment.c(),D=g(),I=l("div"),q=0;q<j.length;q+=1)j[q].c();this.h()},l:function(t){e=h(t,"\n\n"),i=f(t,"DIV",{class:!0},!1);var n=u(i);r=f(n,"DIV",{class:!0},!1);var l=u(r);a=h(l,"Cristóvão Trevisan"),l.forEach(m),s=h(n,"\n  "),o=f(n,"DIV",{class:!0,style:!0},!1),u(o).forEach(m),w=h(n,"\n  "),_=f(n,"DIV",{class:!0,style:!0},!1);var c=u(_);N=h(c,H),c.forEach(m),E=h(n,"\n\n  "),F.$$.fragment.l(n),D=h(n,"\n\n  "),I=f(n,"DIV",{class:!0},!1);var v=u(I);for(q=0;q<j.length;q+=1)j[q].l(v);v.forEach(m),n.forEach(m),this.h()},h:function(){r.className="title svelte-1hylv3x",o.className="text svelte-1hylv3x",k(o,"margin-top","40px"),k(o,"margin-bottom","16px"),_.className="subtitle svelte-1hylv3x",k(_,"margin","16px 0"),I.className="social-networks svelte-1hylv3x",i.className="container svelte-1hylv3x"},m:function(t,n){for(v(t,e,n),v(t,i,n),p(i,r),p(r,a),p(i,s),p(i,o),o.innerHTML=P,p(i,w),p(i,_),p(_,N),p(i,E),b(F,i,null),p(i,D),p(i,I),q=0;q<j.length;q+=1)j[q].m(I,null);V=!0},p:function(t,e){V&&!t.$_||n===(n=" Cristóvão Trevisan - "+e.$_("engineer")+" ")||(document.title=n),V&&!t.$_||P===(P=e.$_("engineerPage.presentation"))||(o.innerHTML=P),V&&!t.$_||H===(H=e.$_("engineerPage.Follow me on GitHub!"))||$(N,H);var i={};t.GithubIcon&&(i.icon=T),F.$set(i);var r=e.socialNetworks;d(),j=x(j,t,S,1,e,r,G,I,C,A,null,M),y()},i:function(t){if(!V){F.$$.fragment.i(t);for(var n=0;n<O.length;n+=1)j[n].i();V=!0}},o:function(t){for(F.$$.fragment.o(t),q=0;q<j.length;q+=1)j[q].o();V=!1},d:function(t){for(t&&(m(e),m(i)),F.$destroy(),q=0;q<j.length;q+=1)j[q].d()}}}function O(t,n,e){var i;return E(t,D,function(t){e("$_",i=t)}),{socialNetworks:[{path:"https://www.linkedin.com/in/cristovao-trevisan",icon:V},{path:"https://twitter.com/cristovao_tre",icon:P}],$_:i}}export default(function(l){function c(t){var o;return n(this,c),o=e(this,i(c).call(this)),r(a(o),t,O,F,s,[]),o}return t(c,o),c}());
//# sourceMappingURL=index.0b594e34.js.map
