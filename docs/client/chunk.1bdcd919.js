import{S as t,a,s,e,u as n,d as l,f as i,h as r,g as c,j as h,l as f,k as o,v as u,b as p,y as $,C as g,p as m,A as v,D as d,t as k}from"./chunk.1732d770.js";function D(t){var a,s;return{c(){a=e("div"),s=n(t.title),this.h()},l(e){a=l(e,"DIV",{class:!0},!1);var n=i(a);s=r(n,t.title),n.forEach(c),this.h()},h(){h(a,"class","title svelte-1ugf982")},m(t,e){f(t,a,e),o(a,s)},p(t,a){t.title&&u(s,a.title)},d(t){t&&c(a)}}}function E(t){var a,s,n,u,E=t.icon;if(E)var b=new E({});var j=t.title&&D(t);return{c(){a=e("a"),s=e("div"),b&&b.$$.fragment.c(),n=p(),j&&j.c(),this.h()},l(t){a=l(t,"A",{href:!0,class:!0,target:!0},!1);var e=i(a);s=l(e,"DIV",{class:!0},!1);var h=i(s);b&&b.$$.fragment.l(h),h.forEach(c),n=r(e,"\n  "),j&&j.l(e),e.forEach(c),this.h()},h(){h(s,"class","icon svelte-1ugf982"),h(a,"href",t.path),h(a,"class","container svelte-1ugf982"),h(a,"target","_blank")},m(t,e){f(t,a,e),o(a,s),b&&$(b,s,null),o(a,n),j&&j.m(a,null),u=!0},p(t,e){if(E!==(E=e.icon)){if(b){g();const t=b;m(t.$$.fragment,1,()=>{v(t)}),d()}E?((b=new E({})).$$.fragment.c(),k(b.$$.fragment,1),$(b,s,null)):b=null}e.title?j?j.p(t,e):((j=D(e)).c(),j.m(a,null)):j&&(j.d(1),j=null),u&&!t.path||h(a,"href",e.path)},i(t){u||(b&&k(b.$$.fragment,t),u=!0)},o(t){b&&m(b.$$.fragment,t),u=!1},d(t){t&&c(a),b&&v(b),j&&j.d()}}}function b(t,a,s){let{icon:e,path:n,title:l}=a;return t.$set=t=>{"icon"in t&&s("icon",e=t.icon),"path"in t&&s("path",n=t.path),"title"in t&&s("title",l=t.title)},{icon:e,path:n,title:l}}class j extends t{constructor(t){super(),a(this,t,b,E,s,["icon","path","title"])}}export{j as S};
//# sourceMappingURL=chunk.1bdcd919.js.map
