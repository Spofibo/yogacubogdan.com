import{s as q,n as g,f as y,h as H}from"../chunks/scheduler.ed1f4acb.js";import{S,i as j,g as _,s as C,h as m,j as w,x as A,c as I,f,k as a,a as d,y as p,z as E}from"../chunks/index.f3526bf9.js";import{e as b}from"../chunks/each.e59479a4.js";import{i as h}from"../chunks/isha.d11ea057.js";function v(n,e,c){const s=n.slice();return s[0]=e[c][0],s[1]=e[c][1],s}function O(n){let e,c,s,o,u=b(Object.entries(h.sources)),l=[];for(let r=0;r<u.length;r+=1)l[r]=x(v(n,u,r));return{c(){e=_("picture");for(let r=0;r<l.length;r+=1)l[r].c();c=C(),s=_("img"),this.h()},l(r){e=m(r,"PICTURE",{});var i=w(e);for(let t=0;t<l.length;t+=1)l[t].l(i);c=I(i),s=m(i,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),i.forEach(f),this.h()},h(){a(s,"class","mask mask-squircle"),y(s.src,o=h.img.src)||a(s,"src",o),a(s,"alt","ISHA"),a(s,"width",h.img.w),a(s,"height",h.img.h)},m(r,i){d(r,e,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);p(e,c),p(e,s)},p(r,i){if(i&0){u=b(Object.entries(h.sources));let t;for(t=0;t<u.length;t+=1){const k=v(r,u,t);l[t]?l[t].p(k,i):(l[t]=x(k),l[t].c(),l[t].m(e,c))}for(;t<l.length;t+=1)l[t].d(1);l.length=u.length}},d(r){r&&f(e),E(l,r)}}}function z(n){let e,c;return{c(){e=_("img"),this.h()},l(s){e=m(s,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){a(e,"class","mask mask-squircle"),y(e.src,c=h.img.src)||a(e,"src",c),a(e,"alt","ISHA"),a(e,"width",h.img.w),a(e,"height",h.img.h)},m(s,o){d(s,e,o)},p:g,d(s){s&&f(e)}}}function x(n){let e,c;return{c(){e=_("source"),this.h()},l(s){e=m(s,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){H(e,c=n[1])||a(e,"srcset",c),a(e,"type","image/"+n[0])},m(s,o){d(s,e,o)},p:g,d(s){s&&f(e)}}}function G(n){let e,c,s="Classical HATHA Yoga",o;function u(i,t){return typeof h=="string"?z:O}let r=u()(n);return{c(){e=_("div"),c=_("h1"),c.textContent=s,o=C(),r.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var t=w(e);c=m(t,"H1",{class:!0,"data-svelte-h":!0}),A(c)!=="svelte-1ebztgj"&&(c.textContent=s),o=I(t),r.l(t),t.forEach(f),this.h()},h(){a(c,"class","font-bold mb-20 text-center text-5xl"),a(e,"class","container mt-20")},m(i,t){d(i,e,t),p(e,c),p(e,o),r.m(e,null)},p(i,[t]){r.p(i,t)},i:g,o:g,d(i){i&&f(e),r.d()}}}class U extends S{constructor(e){super(),j(this,e,null,G,q,{})}}export{U as component};