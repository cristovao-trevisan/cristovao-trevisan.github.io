import{S as s,i as t,s as o,l as e,z as r,p as n,q as a,y as l,d as h,a as p,t as c,E as f,x as u,n as i,H as g}from"./chunk.1a0f83e2.js";function v(s,t,o){const e=Object.create(s);return e.post=t[o],e}function m(s){var t,o,u,i,g=s.post.title;return{c(){t=e("li"),o=e("a"),u=r(g),this.h()},l(s){t=n(s,"LI",{},!1);var e=a(t);o=n(e,"A",{rel:!0,href:!0},!1);var r=a(o);u=l(r,g),r.forEach(h),e.forEach(h),this.h()},h(){o.rel="prefetch",o.href=i="blog/"+s.post.slug},m(s,e){p(s,t,e),c(t,o),c(o,u)},p(s,t){s.posts&&g!==(g=t.post.title)&&f(u,g),s.posts&&i!==(i="blog/"+t.post.slug)&&(o.href=i)},d(s){s&&h(t)}}}function d(s){for(var t,o,f,d,E,b=s.posts,j=[],x=0;x<b.length;x+=1)j[x]=m(v(s,b,x));return{c(){t=u(),o=e("h1"),f=r("Recent posts"),d=u(),E=e("ul");for(var s=0;s<j.length;s+=1)j[s].c();this.h()},l(s){t=l(s,"\n\n"),o=n(s,"H1",{},!1);var e=a(o);f=l(e,"Recent posts"),e.forEach(h),d=l(s,"\n\n"),E=n(s,"UL",{class:!0},!1);for(var r=a(E),p=0;p<j.length;p+=1)j[p].l(r);r.forEach(h),this.h()},h(){document.title="Blog",E.className="svelte-1frg2tf"},m(s,e){p(s,t,e),p(s,o,e),c(o,f),p(s,d,e),p(s,E,e);for(var r=0;r<j.length;r+=1)j[r].m(E,null)},p(s,t){if(s.posts){b=t.posts;for(var o=0;o<b.length;o+=1){const e=v(t,b,o);j[o]?j[o].p(s,e):(j[o]=m(e),j[o].c(),j[o].m(E,null))}for(;o<j.length;o+=1)j[o].d(1);j.length=b.length}},i:i,o:i,d(s){s&&(h(t),h(o),h(d),h(E)),g(j,s)}}}function E({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function b(s,t,o){let{posts:e}=t;return s.$set=(s=>{"posts"in s&&o("posts",e=s.posts)}),{posts:e}}export default class extends s{constructor(s){super(),t(this,s,b,d,o,["posts"])}}export{E as preload};
//# sourceMappingURL=index.3ada48c2.js.map
