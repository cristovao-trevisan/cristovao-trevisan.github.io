import{a,b as t,c as n,d as r,e as s,s as e,f as i,S as l,j as o,k as c,A as f,l as u,m as v,o as h,p as g,B as m,q as d,u as $,t as p,F as _,C as y,x as b,y as j,I as k,M as w,L as I,z as x,K as E,Q as A}from"./index.64510641.js";import{_ as D}from"./index.es.699a4b2c.js";import{A as V}from"./AsyncImage.a1e6ec49.js";import{a as C}from"./_albuns.9e502ef3.js";function M(a,t,n){var r=Object.create(a);return r.title=t[n].title,r.folder=t[n].folder,r.cover=t[n].cover,r}function T(a,t){var n,r,s,e,i,l,w,I=t.$_(t.title)+"",x=new V({props:{initial:t.folder+"/blur/"+t.cover,src:t.folder+"/400px/"+t.cover,alt:t.title}});return{key:a,first:null,c:function(){n=o("a"),r=o("div"),x.$$.fragment.c(),s=c(),e=o("div"),i=f(I),l=c(),this.h()},l:function(a){n=u(a,"A",{rel:!0,class:!0,href:!0},!1);var t=v(n);r=u(t,"DIV",{class:!0},!1);var o=v(r);x.$$.fragment.l(o),o.forEach(h),s=g(t),e=u(t,"DIV",{},!1);var c=v(e);i=m(c,I),c.forEach(h),l=g(t),t.forEach(h),this.h()},h:function(){d(r,"class","image-container svelte-1saw3ak"),d(n,"rel","prefetch"),d(n,"class","item-container hoverlay svelte-1saw3ak"),d(n,"href","artist/gallery/album/"+t.title),this.first=n},m:function(a,t){$(a,n,t),p(n,r),_(x,r,null),p(n,s),p(n,e),p(e,i),p(n,l),w=!0},p:function(a,t){w&&!a.$_||I===(I=t.$_(t.title)+"")||y(i,I)},i:function(a){w||(b(x.$$.fragment,a),w=!0)},o:function(a){j(x.$$.fragment,a),w=!1},d:function(a){a&&h(n),k(x)}}}function q(a){var t,n,r,s,e,i=[],l=new Map;document.title=t=" Cristóvão Trevisan - "+a.$_("gallery")+" ";for(var f=C,m=function(a){return a.title},_=0;_<f.length;_+=1){var y=M(a,f,_),k=m(y);l.set(k,i[_]=T(k,y))}return{c:function(){n=c(),r=o("div"),s=o("div");for(var a=0;a<i.length;a+=1)i[a].c();this.h()},l:function(a){n=g(a),r=u(a,"DIV",{class:!0},!1);var t=v(r);s=u(t,"DIV",{class:!0},!1);for(var e=v(s),l=0;l<i.length;l+=1)i[l].l(e);e.forEach(h),t.forEach(h),this.h()},h:function(){d(s,"class","container svelte-1saw3ak"),d(r,"class","layout svelte-1saw3ak")},m:function(a,t){$(a,n,t),$(a,r,t),p(r,s);for(var l=0;l<i.length;l+=1)i[l].m(s,null);e=!0},p:function(a,n){e&&!a.$_||t===(t=" Cristóvão Trevisan - "+n.$_("gallery")+" ")||(document.title=t);var r=C;E(),i=w(i,a,m,1,n,r,l,s,A,T,null,M),I()},i:function(a){if(!e){for(var t=0;t<f.length;t+=1)b(i[t]);e=!0}},o:function(a){for(var t=0;t<i.length;t+=1)j(i[t]);e=!1},d:function(a){a&&(h(n),h(r));for(var t=0;t<i.length;t+=1)i[t].d()}}}function z(a,t,n){var r;x(a,D,(function(a){n("$_",r=a)}));var s=t.slug;return a.$set=function(a){"slug"in a&&n("slug",s=a.slug)},{slug:s,$_:r}}var B=function(o){function c(a){var l;return t(this,c),l=n(this,r(c).call(this)),s(i(l),a,z,q,e,["slug"]),l}return a(c,l),c}();export default B;
