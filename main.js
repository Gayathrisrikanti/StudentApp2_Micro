(()=>{var e,r,t,n,o,a,i={497:(e,r,t)=>{Promise.all([t.e(914),t.e(723)]).then(t.bind(t,723))},898:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof studentapp1)return e();t.l("http://localhost:3000/remoteEntry.js",(t=>{if("undefined"!=typeof studentapp1)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"studentapp1")})).then((()=>studentapp1))}},u={};function f(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={id:e,exports:{}};return i[e](t,t.exports,f),t.exports}f.m=i,f.c=u,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);f.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,f.d(o,a),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>e+".js",f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="StudentAPP2:",f.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={920:[920]},a={920:["default","./StudentForm",898]},f.f.remotes=(e,r)=>{f.o(o,e)&&o[e].forEach((e=>{var t=f.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),f.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,u,f)=>{try{var l=e(t,a);if(!l||!l.then)return u(l,i,f);var s=l.then((e=>u(e,i)),o);if(!f)return s;r.push(n.p=s)}catch(e){o(e)}},u=(e,r,o)=>i(r.get,n[1],t,0,l,o),l=r=>{n.p=1,f.m[e]=e=>{e.exports=r()}};i(f,n[2],0,0,((e,r,t)=>e?i(f.I,n[0],0,e,u,t):o()),1)}}))},(()=>{f.S={};var e={},r={};f.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];f.o(f.S,t)||(f.S[t]={});var a=f.S[t],i="StudentAPP2",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([f.e(961),f.e(914)]).then((()=>()=>f(961))))),u("react","18.2.0",(()=>f.e(540).then((()=>()=>f(159))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=f(898);if(!o)return;var a=e=>e&&e.init&&e.init(f.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}})()),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),f.p="http://localhost:3001/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():r(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,p=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(s=(typeof(l=n[i]))[0]))return!f||("u"==p?u>o&&!a:""==p!=a);if("u"==s){if(!f||"u"!=p)return!1}else if(f)if(p==s)if(u<=o){if(l!=r[u])return!1}else{if(a?l>r[u]:l<r[u])return!1;l!=r[u]&&(f=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||s<p!=a)return!1;f=!1}else"s"!=p&&"n"!=p&&(f=!1,u--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,u,f)=>{var l=n(e,u);return t(f,l)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,u,l,f)),i(e[u][l])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,o){var a=f.I(r);return a&&a.then?a.then(e.bind(e,r,f.S[r],t,n,o)):e(r,f.S[r],t,n,o)})(((e,r,t,n,a)=>r&&f.o(r,t)?o(r,0,t,n):a())),l={},s={914:()=>u("default","react",[1,18,2,0],(()=>f.e(540).then((()=>()=>f(159))))),672:()=>u("default","react-dom",[1,18,2,0],(()=>f.e(961).then((()=>()=>f(961)))))},p={723:[672],914:[914]},d={};f.f.consumes=(e,r)=>{f.o(p,e)&&p[e].forEach((e=>{if(f.o(l,e))return r.push(l[e]);if(!d[e]){var t=r=>{l[e]=0,f.m[e]=t=>{delete f.c[e],t.exports=r()}};d[e]=!0;var n=r=>{delete l[e],f.m[e]=t=>{throw delete f.c[e],r}};try{var o=s[e]();o.then?r.push(l[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0};f.f.j=(r,t)=>{var n=f.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^9(14|20)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)f.o(i,n)&&(f.m[n]=i[n]);u&&u(f)}for(r&&r(t);l<a.length;l++)o=a[l],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkStudentAPP2=self.webpackChunkStudentAPP2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f.nc=void 0,f(497)})();