import{n,s as t}from"./chunk.af0496b1.js";function s(n,t){return{subscribe:r(n,t).subscribe}}function r(s,r=n){let c;const e=[];function u(n){if(t(s,n)){if(s=n,!c)return;e.forEach(n=>n[1]()),e.forEach(n=>n[0](s))}}return{set:u,update:function(n){u(n(s))},subscribe:function(t,i=n){const o=[t,i];return e.push(o),1===e.length&&(c=r(u)||n),t(s),()=>{const n=e.indexOf(o);-1!==n&&e.splice(n,1),0===e.length&&c()}}}}export{s as r,r as w};
//# sourceMappingURL=chunk.c5b8d25a.js.map