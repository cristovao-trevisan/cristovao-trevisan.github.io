import{S as e,i as t,s as n,o as s,j as o,v as r,w as a,x as l,h as c,A as i,q as $,r as p,F as h,p as u,n as f,c as m,e as d,b as g,d as v,G as w,k as b,g as k,a as D,H as y,m as N,f as T,t as M,l as x,E,I as C,y as I,C as _}from"./chunk.5a48e96c.js";import{r as R}from"./chunk.50074e8e.js";import{_ as S}from"./chunk.04354f7d.js";import{M as V,H as j,I as O}from"./chunk.c9132fb7.js";const H=()=>{if("undefined"==typeof window)return{width:800,height:600};return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}};var A=R(H(),e=>{if("undefined"==typeof window)return;const t=((e,t)=>{let n=null;return()=>{n||(n=setTimeout(()=>{n=null,t()},e))}})(200,()=>e(H()));return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)});function W(e){var t,n,i=[e.props],h=e.Default;function f(e){let t={};for(var n=0;n<i.length;n+=1)t=u(t,i[n]);return{props:t}}if(h)var m=new h(f());return{c(){m&&m.$$.fragment.c(),t=s()},l(e){m&&m.$$.fragment.l(e),t=s()},m(e,s){m&&$(m,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?p(i,[n.props]):{};if(h!==(h=n.Default)){if(m){r();const e=m;a(()=>{e.$destroy()}),e.$$.fragment.o(1),l()}h?((m=new h(f())).$$.fragment.c(),m.$$.fragment.i(1),$(m,t.parentNode,t)):m=null}else h&&m.$set(s)},i(e){n||(m&&m.$$.fragment.i(e),n=!0)},o(e){m&&m.$$.fragment.o(e),n=!1},d(e){e&&c(t),m&&m.$destroy(e)}}}function z(e){var t,n,r;let a={ctx:e,current:null,pending:B,then:q,catch:L,value:"Result",error:"null",blocks:Array(3)};return h(n=e.Component(),a),{c(){t=s(),a.block.c()},l(e){t=s(),a.block.l(e)},m(e,n){o(e,t,n),a.block.m(e,a.anchor=n),a.mount=(()=>t.parentNode),a.anchor=t,r=!0},p(t,s){e=s,a.ctx=e,"Component"in t&&n!==(n=e.Component())&&h(n,a)||a.block.p(t,u(u({},e),a.resolved))},i(e){r||(a.block.i(),r=!0)},o(e){for(let e=0;e<3;e+=1){const t=a.blocks[e];t&&t.o()}r=!1},d(e){e&&c(t),a.block.d(e),a=null}}}function L(e){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function q(e){var t,n,i=[e.props],h=e.Result.default;function f(e){let t={};for(var n=0;n<i.length;n+=1)t=u(t,i[n]);return{props:t}}if(h)var m=new h(f());return{c(){m&&m.$$.fragment.c(),t=s()},l(e){m&&m.$$.fragment.l(e),t=s()},m(e,s){m&&$(m,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?p(i,[n.props]):{};if(h!==(h=n.Result.default)){if(m){r();const e=m;a(()=>{e.$destroy()}),e.$$.fragment.o(1),l()}h?((m=new h(f())).$$.fragment.c(),m.$$.fragment.i(1),$(m,t.parentNode,t)):m=null}else h&&m.$set(s)},i(e){n||(m&&m.$$.fragment.i(e),n=!0)},o(e){m&&m.$$.fragment.o(e),n=!1},d(e){e&&c(t),m&&m.$destroy(e)}}}function B(e){var t,n,i=[e.props],h=e.Default;function f(e){let t={};for(var n=0;n<i.length;n+=1)t=u(t,i[n]);return{props:t}}if(h)var m=new h(f());return{c(){m&&m.$$.fragment.c(),t=s()},l(e){m&&m.$$.fragment.l(e),t=s()},m(e,s){m&&$(m,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?p(i,[n.props]):{};if(h!==(h=n.Default)){if(m){r();const e=m;a(()=>{e.$destroy()}),e.$$.fragment.o(1),l()}h?((m=new h(f())).$$.fragment.c(),m.$$.fragment.i(1),$(m,t.parentNode,t)):m=null}else h&&m.$set(s)},i(e){n||(m&&m.$$.fragment.i(e),n=!0)},o(e){m&&m.$$.fragment.o(e),n=!1},d(e){e&&c(t),m&&m.$destroy(e)}}}function F(e){var t,n,i,$,p=[z,W],h=[];function u(e){return e.Component&&e.Component!==e.Default?0:1}return t=u(e),n=h[t]=p[t](e),{c(){n.c(),i=s()},l(e){n.l(e),i=s()},m(e,n){h[t].m(e,n),o(e,i,n),$=!0},p(e,s){var o=t;(t=u(s))===o?h[t].p(e,s):(r(),a(()=>{h[o].d(1),h[o]=null}),n.o(1),l(),(n=h[t])||(n=h[t]=p[t](s)).c(),n.i(1),n.m(i.parentNode,i))},i(e){$||(n&&n.i(),$=!0)},o(e){n&&n.o(),$=!1},d(e){h[t].d(e),e&&c(i)}}}function G(e,t,n){let s;i(e,A,e=>{n("$dimensions",s=e)});let o,r,{Default:a,Mobile:l,Desktop:c,props:$,widthThreshhold:p=500,heightThreshhold:h=null}=t,u=a;return e.$set=(e=>{"Default"in e&&n("Default",a=e.Default),"Mobile"in e&&n("Mobile",l=e.Mobile),"Desktop"in e&&n("Desktop",c=e.Desktop),"props"in e&&n("props",$=e.props),"widthThreshhold"in e&&n("widthThreshhold",p=e.widthThreshhold),"heightThreshhold"in e&&n("heightThreshhold",h=e.heightThreshhold)}),e.$$.update=((e={$dimensions:1,widthThreshhold:1,width:1,Mobile:1,heightThreshhold:1,height:1,Desktop:1})=>{e.$dimensions&&n("width",o=s.width),e.$dimensions&&n("height",r=s.height),(e.widthThreshhold||e.width||e.Mobile||e.heightThreshhold||e.height||e.Desktop)&&n("Component",u=p&&o<p?l:h&&r<h?l:c)}),{Default:a,Mobile:l,Desktop:c,props:$,widthThreshhold:p,heightThreshhold:h,Component:u}}class P extends e{constructor(e){super(),t(this,e,G,F,n,["Default","Mobile","Desktop","props","widthThreshhold","heightThreshhold"])}}function U(e){var t,n,s,r;const a=e.$$slots.default,l=m(a,e,null);return{c(){t=d("div"),n=d("button"),l&&l.c(),this.h()},l(e){t=g(e,"DIV",{},!1);var s=v(t);n=g(s,"BUTTON",{class:!0},!1);var o=v(n);l&&l.l(o),o.forEach(c),s.forEach(c),this.h()},h(){n.className="button svelte-67owpm",r=w(n,"click",e.onClick)},m(e,r){o(e,t,r),b(t,n),l&&l.m(n,null),s=!0},p(e,t){l&&l.p&&e.$$scope&&l.p(k(a,t,e,null),D(a,t,null))},i(e){s||(l&&l.i&&l.i(e),s=!0)},o(e){l&&l.o&&l.o(e),s=!1},d(e){e&&c(t),l&&l.d(e),r()}}}function J(e,t,n){const s=y();let{$$slots:o={},$$scope:r}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",r=e.$$scope)}),{onClick:()=>s("click"),$$slots:o,$$scope:r}}class K extends e{constructor(e){super(),t(this,e,J,U,n,[])}}function Q(e){var t,n=new V({props:{alt:"open navigation"}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){$(n,e,s),t=!0},p:f,i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function X(e){var t,n,s,r;const a=e.$$slots.default,l=m(a,e,null);var i=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:e}}});return i.$on("click",e.onMenu),{c(){t=d("div"),n=d("div"),l&&l.c(),s=N(),i.$$.fragment.c(),this.h()},l(e){t=g(e,"DIV",{class:!0},!1);var o=v(t);n=g(o,"DIV",{class:!0},!1);var r=v(n);l&&l.l(r),s=T(r,"\n\n    "),i.$$.fragment.l(r),r.forEach(c),o.forEach(c),this.h()},h(){n.className="container nav-icon svelte-nkvyf3",t.className="margin svelte-nkvyf3"},m(e,a){o(e,t,a),b(t,n),l&&l.m(n,null),b(n,s),$(i,n,null),r=!0},p(e,t){l&&l.p&&e.$$scope&&l.p(k(a,t,e,null),D(a,t,null));var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),i.$set(n)},i(e){r||(l&&l.i&&l.i(e),i.$$.fragment.i(e),r=!0)},o(e){l&&l.o&&l.o(e),i.$$.fragment.o(e),r=!1},d(e){e&&c(t),l&&l.d(e),i.$destroy()}}}function Y(e,t,n){const s=y();let{$$slots:o={},$$scope:r}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",r=e.$$scope)}),{onMenu:()=>s("menu"),$$slots:o,$$scope:r}}class Z extends e{constructor(e){super(),t(this,e,Y,X,n,[])}}function ee(e){var t,n,s,r,a;const l=e.$$slots.default,i=m(l,e,null);return{c(){t=d("div"),n=N(),s=d("div"),i&&i.c(),this.h()},l(e){t=g(e,"DIV",{class:!0},!1),v(t).forEach(c),n=T(e,"\n\t"),s=g(e,"DIV",{class:!0},!1);var o=v(s);i&&i.l(o),o.forEach(c),this.h()},h(){t.className="overlay mask svelte-1usk1hu",s.className="overlay container svelte-1usk1hu",a=w(t,"click",e.onClose)},m(e,a){o(e,t,a),o(e,n,a),o(e,s,a),i&&i.m(s,null),r=!0},p(e,t){i&&i.p&&e.$$scope&&i.p(k(l,t,e,null),D(l,t,null))},i(e){r||(i&&i.i&&i.i(e),r=!0)},o(e){i&&i.o&&i.o(e),r=!1},d(e){e&&(c(t),c(n),c(s)),i&&i.d(e),a()}}}function te(e){var t,n,i=e.open&&ee(e);return{c(){i&&i.c(),t=s()},l(e){i&&i.l(e),t=s()},m(e,s){i&&i.m(e,s),o(e,t,s),n=!0},p(e,n){n.open?i?(i.p(e,n),i.i(1)):((i=ee(n)).c(),i.i(1),i.m(t.parentNode,t)):i&&(r(),a(()=>{i.d(1),i=null}),i.o(1),l())},i(e){n||(i&&i.i(),n=!0)},o(e){i&&i.o(),n=!1},d(e){i&&i.d(e),e&&c(t)}}}function ne(e,t,n){let{open:s=!1}=t;const o=y();let{$$slots:r={},$$scope:a}=t;return e.$set=(e=>{"open"in e&&n("open",s=e.open),"$$scope"in e&&n("$$scope",a=e.$$scope)}),{open:s,onClose:()=>o("close"),$$slots:r,$$scope:a}}class se extends e{constructor(e){super(),t(this,e,ne,te,n,["open"])}}function oe(e,t,n){const s=Object.create(e);return s.path=t[n].path,s.icon=t[n].icon,s.title=t[n].title,s}function re(e){var t,n,s=e.$_(e.currentRoute.title);return{c(){t=d("div"),n=M(s),this.h()},l(e){t=g(e,"DIV",{class:!0},!1);var o=v(t);n=T(o,s),o.forEach(c),this.h()},h(){t.className="page-title svelte-12towps"},m(e,s){o(e,t,s),b(t,n)},p(e,t){(e.$_||e.currentRoute)&&s!==(s=t.$_(t.currentRoute.title))&&x(n,s)},d(e){e&&c(t)}}}function ae(e,t){var n,s,i,p,h,u,f,m,k,D,y=t.$_(t.title),I=t.icon;if(I)var _=new I({});return{key:e,first:null,c(){n=d("a"),s=d("div"),_&&_.$$.fragment.c(),i=N(),p=d("div"),h=M(y),f=N(),this.h()},l(e){n=g(e,"A",{rel:!0,href:!0,class:!0},!1);var t=v(n);s=g(t,"DIV",{class:!0},!1);var o=v(s);_&&_.$$.fragment.l(o),o.forEach(c),i=T(t,"\n\t\t\t\t"),p=g(t,"DIV",{class:!0,href:!0},!1);var r=v(p);h=T(r,y),r.forEach(c),f=T(t,"\n\t\t\t"),t.forEach(c),this.h()},h(){s.className="item-icon svelte-12towps",p.className="item-title",E(p,"href",u=t.path),n.rel="prefetch",n.href=m=`${t.basepath}/${t.path}`,n.className="item-container svelte-12towps",C(n,"selected",t.path===t.parsedSegment),D=w(n,"click",t.toggleMenu),this.first=n},m(e,t){o(e,n,t),b(n,s),_&&$(_,s,null),b(n,i),b(n,p),b(p,h),b(n,f),k=!0},p(e,t){if(I!==(I=t.icon)){if(_){r();const e=_;a(()=>{e.$destroy()}),e.$$.fragment.o(1),l()}I?((_=new I({})).$$.fragment.c(),_.$$.fragment.i(1),$(_,s,null)):_=null}k&&!e.$_&&!e.routes||y===(y=t.$_(t.title))||x(h,y),k&&!e.routes||u===(u=t.path)||E(p,"href",u),k&&!e.basepath&&!e.routes||m===(m=`${t.basepath}/${t.path}`)||(n.href=m),(e.routes||e.parsedSegment)&&C(n,"selected",t.path===t.parsedSegment)},i(e){k||(_&&_.$$.fragment.i(e),k=!0)},o(e){_&&_.$$.fragment.o(e),k=!1},d(e){e&&c(n),_&&_.$destroy(),D()}}}function le(e){var t,n,s=[],a=new Map,i=e.routes;const $=e=>e.path;for(var p=0;p<i.length;p+=1){let t=oe(e,i,p),n=$(t);a.set(n,s[p]=ae(n,t))}return{c(){for(t=d("nav"),p=0;p<s.length;p+=1)s[p].c();this.h()},l(e){t=g(e,"NAV",{class:!0},!1);var n=v(t);for(p=0;p<s.length;p+=1)s[p].l(n);n.forEach(c),this.h()},h(){t.className="container noise svelte-12towps"},m(e,r){for(o(e,t,r),p=0;p<s.length;p+=1)s[p].m(t,null);n=!0},p(e,n){const o=n.routes;r(),s=I(s,e,$,1,n,o,a,t,_,ae,null,oe),l()},i(e){if(!n){for(var t=0;t<i.length;t+=1)s[t].i();n=!0}},o(e){for(p=0;p<s.length;p+=1)s[p].o();n=!1},d(e){for(e&&c(t),p=0;p<s.length;p+=1)s[p].d()}}}function ce(e){var t,n,s=new Z({props:{$$slots:{default:[re]},$$scope:{ctx:e}}});s.$on("menu",e.toggleMenu);var r=new se({props:{open:e.menuOpen,$$slots:{default:[le]},$$scope:{ctx:e}}});return r.$on("close",e.toggleMenu),{c(){s.$$.fragment.c(),t=N(),r.$$.fragment.c()},l(e){s.$$.fragment.l(e),t=T(e,"\n\n"),r.$$.fragment.l(e)},m(e,a){$(s,e,a),o(e,t,a),$(r,e,a),n=!0},p(e,t){var n={};(e.$$scope||e.$_||e.currentRoute)&&(n.$$scope={changed:e,ctx:t}),s.$set(n);var o={};e.menuOpen&&(o.open=t.menuOpen),(e.$$scope||e.routes||e.basepath||e.parsedSegment||e.$_)&&(o.$$scope={changed:e,ctx:t}),r.$set(o)},i(e){n||(s.$$.fragment.i(e),r.$$.fragment.i(e),n=!0)},o(e){s.$$.fragment.o(e),r.$$.fragment.o(e),n=!1},d(e){s.$destroy(e),e&&c(t),r.$destroy(e)}}}function ie(e,t,n){let s;i(e,S,e=>{n("$_",s=e)});let{segment:o="",routes:r=[],basepath:a=""}=t,l=!1;let c,$;return e.$set=(e=>{"segment"in e&&n("segment",o=e.segment),"routes"in e&&n("routes",r=e.routes),"basepath"in e&&n("basepath",a=e.basepath)}),e.$$.update=((e={segment:1,routes:1,parsedSegment:1})=>{e.segment&&n("parsedSegment",c="/"===o?"":o||""),(e.routes||e.parsedSegment)&&n("currentRoute",$=r.find(e=>e.path===c))}),{segment:o,routes:r,basepath:a,menuOpen:l,toggleMenu:()=>{n("menuOpen",l=!l)},parsedSegment:c,currentRoute:$,$_:s}}class $e extends e{constructor(e){super(),t(this,e,ie,ce,n,["segment","routes","basepath"])}}var pe=[{path:"",title:"homePage",icon:j},{path:"gallery",title:"gallery",icon:O}];function he(e){var t,n,s=new P({props:{Default:$e,Desktop:fe,props:{segment:e.segment,routes:pe,basepath:ue}}});const r=e.$$slots.default,a=m(r,e,null);return{c(){s.$$.fragment.c(),t=N(),a&&a.c()},l(e){s.$$.fragment.l(e),t=T(e,"\n\n"),a&&a.l(e)},m(e,r){$(s,e,r),o(e,t,r),a&&a.m(e,r),n=!0},p(e,t){var n={};e.NavMobile&&(n.Default=$e),(e.segment||e.routes||e.basepath)&&(n.props={segment:t.segment,routes:pe,basepath:ue}),s.$set(n),a&&a.p&&e.$$scope&&a.p(k(r,t,e,null),D(r,t,null))},i(e){n||(s.$$.fragment.i(e),a&&a.i&&a.i(e),n=!0)},o(e){s.$$.fragment.o(e),a&&a.o&&a.o(e),n=!1},d(e){s.$destroy(e),e&&c(t),a&&a.d(e)}}}const ue="artist";function fe(){return import("./NavDesktop.8cb7cf86.js")}function me(e,t,n){let{segment:s}=t,{$$slots:o={},$$scope:r}=t;return e.$set=(e=>{"segment"in e&&n("segment",s=e.segment),"$$scope"in e&&n("$$scope",r=e.$$scope)}),{segment:s,$$slots:o,$$scope:r}}export default class extends e{constructor(e){super(),t(this,e,me,he,n,["segment"])}}
//# sourceMappingURL=_layout.87971569.js.map
