!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=["service-worker-index.html","favicon.ico","icon-192.png","icon-256.png","icon-32.png","icon-512.png","manifest.json","meta-image.png","onlinelearning.jpg"],c=["client/ce32726682103ff8226f/4.4.js","client/ce32726682103ff8226f/index.1.js","client/ce32726682103ff8226f/index~tag_$tag.0.js","client/ce32726682103ff8226f/main.js","client/ce32726682103ff8226f/tag_$tag.3.js","client/index.c4d53928e9eb9df98719.css","client/index~tag_$tag.eccc0f5864ad76962e4e.css","client/main.9ce2bc6910f10838297a.css","client/new_bg_hero.cbc47a607c1a56c34a16af339662c3f6.webp","client/tag_$tag.e8b0d67816c059537e27.css"]},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0);const r=e.env.SAPPER_TIMESTAMP,c="cache"+r,i=t.b.concat(t.a),o=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open(c).then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)t!==c&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&o.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline"+r).then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const r=await t.match(e.request);if(r)return r;throw n}}))))})}.call(this,n(2))},function(e,t){var n,r,c=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,u=[],f=!1,l=-1;function h(){f&&s&&(f=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!f){var e=a(h);f=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=m,c.addListener=m,c.once=m,c.off=m,c.removeListener=m,c.removeAllListeners=m,c.emit=m,c.prependListener=m,c.prependOnceListener=m,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}]);