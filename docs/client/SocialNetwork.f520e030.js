import{S as t,a,s,e,v as n,d as i,f as l,w as r,h as c,k as h,m as f,l as o,x as u,b as p,j as $,A as m,F as v,q as g,D as d,G as x,t as b}from"./index.9b1e5536.js";function w(t){var a,s;return{c(){a=e("div"),s=n(t.title),this.h()},l(e){a=i(e,"DIV",{class:!0},!1);var n=l(a);s=r(n,t.title),n.forEach(c),this.h()},h(){h(a,"class","title svelte-1ugf982")},m(t,e){f(t,a,e),o(a,s)},p(t,a){t.title&&u(s,a.title)},d(t){t&&c(a)}}}function D(t){var a,s,n,r,u=t.icon;if(u)var D=new u({});var E=t.title&&w(t);return{c(){a=e("a"),s=e("div"),D&&D.$$.fragment.c(),n=p(),E&&E.c(),this.h()},l(t){a=i(t,"A",{href:!0,class:!0,target:!0},!1);var e=l(a);s=i(e,"DIV",{class:!0},!1);var r=l(s);D&&D.$$.fragment.l(r),r.forEach(c),n=$(e),E&&E.l(e),e.forEach(c),this.h()},h(){h(s,"class","icon svelte-1ugf982"),h(a,"href",t.path),h(a,"class","container svelte-1ugf982"),h(a,"target","_blank")},m(t,e){f(t,a,e),o(a,s),D&&m(D,s,null),o(a,n),E&&E.m(a,null),r=!0},p(t,e){if(u!==(u=e.icon)){if(D){v();const t=D;g(t.$$.fragment,1,0,()=>{d(t,1)}),x()}u?((D=new u({})).$$.fragment.c(),b(D.$$.fragment,1),m(D,s,null)):D=null}e.title?E?E.p(t,e):((E=w(e)).c(),E.m(a,null)):E&&(E.d(1),E=null),r&&!t.path||h(a,"href",e.path)},i(t){r||(D&&b(D.$$.fragment,t),r=!0)},o(t){D&&g(D.$$.fragment,t),r=!1},d(t){t&&c(a),D&&d(D),E&&E.d()}}}function E(t,a,s){let{icon:e,path:n,title:i}=a;return t.$set=t=>{"icon"in t&&s("icon",e=t.icon),"path"in t&&s("path",n=t.path),"title"in t&&s("title",i=t.title)},{icon:e,path:n,title:i}}class j extends t{constructor(t){super(),a(this,t,E,D,s,["icon","path","title"])}}export{j as S};