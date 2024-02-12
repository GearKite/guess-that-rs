import{s as M,n as E,d as D,u as V,g as H,e as P}from"../chunks/scheduler.CxZ5aOjC.js";import{S as T,i as j,e as f,s as b,c as h,h as g,a as k,f as u,b as m,d as w,k as p,z,v as A,g as C,w as N,x as O,p as L,n as I,y as q}from"../chunks/index.DkDEufJ0.js";import{b as x}from"../chunks/paths.CM5iBkj7.js";const B=!0,G="always",Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:B,trailingSlash:G},Symbol.toStringTag,{value:"Module"}));function R(i){let e,a,t,l,c,v;return{c(){e=f("div"),a=f("input"),t=b(),l=f("label"),this.h()},l(r){e=h(r,"DIV",{});var n=g(e);a=h(n,"INPUT",{type:!0,id:!0,class:!0}),t=k(n),l=h(n,"LABEL",{for:!0,class:!0}),g(l).forEach(u),n.forEach(u),this.h()},h(){a.checked=i[0],m(a,"type","checkbox"),m(a,"id","theme-toggle"),m(a,"class","svelte-rbc0ky"),m(l,"for","theme-toggle"),m(l,"class","svelte-rbc0ky")},m(r,n){w(r,e,n),p(e,a),p(e,t),p(e,l),c||(v=z(a,"click",i[1]),c=!0)},p(r,[n]){n&1&&(a.checked=r[0])},i:E,o:E,d(r){r&&u(e),c=!1,v()}}}function U(i,e,a){let t=!0;function l(){a(0,t=!t),localStorage.setItem("theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t=!0):(document.documentElement.classList.remove("dark"),t=!1),[t,l]}class F extends T{constructor(e){super(),j(this,e,U,R,M,{})}}function J(i){let e,a,t,l,c=`<a href="${x}" class="text-slate-100 text-2xl font-bold">Guess That RS</a> <div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><a href="${x}" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a> <a href="${x}/play" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Play</a></div></div>`,v,r,n,_;r=new F({});const $=i[1].default,o=D($,i,i[0],null);return{c(){e=f("nav"),a=f("div"),t=f("div"),l=f("div"),l.innerHTML=c,v=b(),A(r.$$.fragment),n=b(),o&&o.c(),this.h()},l(s){e=h(s,"NAV",{class:!0});var d=g(e);a=h(d,"DIV",{class:!0});var S=g(a);t=h(S,"DIV",{class:!0});var y=g(t);l=h(y,"DIV",{class:!0,"data-svelte-h":!0}),C(l)!=="svelte-si9y3n"&&(l.innerHTML=c),v=k(y),N(r.$$.fragment,y),y.forEach(u),S.forEach(u),d.forEach(u),n=k(s),o&&o.l(s),this.h()},h(){m(l,"class","flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"),m(t,"class","relative flex h-16 items-center justify-between"),m(a,"class","mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"),m(e,"class","bg-gray-800 dark:bg-gray-900")},m(s,d){w(s,e,d),p(e,a),p(a,t),p(t,l),p(t,v),O(r,t,null),w(s,n,d),o&&o.m(s,d),_=!0},p(s,[d]){o&&o.p&&(!_||d&1)&&V(o,$,s,s[0],_?P($,s[0],d,null):H(s[0]),null)},i(s){_||(L(r.$$.fragment,s),L(o,s),_=!0)},o(s){I(r.$$.fragment,s),I(o,s),_=!1},d(s){s&&(u(e),u(n)),q(r),o&&o.d(s)}}}function K(i,e,a){let{$$slots:t={},$$scope:l}=e;return i.$$set=c=>{"$$scope"in c&&a(0,l=c.$$scope)},[l,t]}class Z extends T{constructor(e){super(),j(this,e,K,J,M,{})}}export{Z as component,Y as universal};