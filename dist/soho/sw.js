if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>r(e,a),d={module:{uri:a},exports:c,require:o};i[a]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arrow-forw-0c961c66.svg",revision:null},{url:"assets/home-2c7949b7.svg",revision:null},{url:"assets/index-2cc9ce6a.css",revision:null},{url:"assets/index-8a53f30f.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"images/background-0.png",revision:"0afb733fd4766bfbdca90a4f966ebd53"},{url:"images/background-1.png",revision:"de92745ba72b70576219d2128352cd02"},{url:"images/background-10.png",revision:"c0a3cfc75a8e02b748bf008d56a44438"},{url:"images/background-11.png",revision:"c751955937fc915e3d2ccd1e89365e27"},{url:"images/background-2.png",revision:"96fb201c7cc6d59778ccca567a71f23a"},{url:"images/background-3.png",revision:"d14a303a7d32c7073e9c9ac9d5a5cfdc"},{url:"images/background-4.png",revision:"affafd4f4fc573f3f690354578db4a72"},{url:"images/background-5.png",revision:"0a0546a1c15e82e9c6afd57381764764"},{url:"images/background-6.png",revision:"12120f01a047aff3c500e0a97f3fe930"},{url:"images/background-7.png",revision:"6c07518dbb740af411f32027353e3f27"},{url:"images/background-8.png",revision:"ac73e6966be38105342d4971c3ef2436"},{url:"images/background-9.png",revision:"48cf3a9eefd0bbd0a226a03f38df4522"},{url:"images/background.png",revision:"0afb733fd4766bfbdca90a4f966ebd53"},{url:"images/kz-button-back.png",revision:"2631d2fc8413848c68322f403e66c452"},{url:"index.html",revision:"375363ebaaf50d1a5eeb7ced595fd676"},{url:"logo.svg",revision:"ea96fd9d4089e753cc4972e362d46c91"},{url:"logo.svg",revision:"ea96fd9d4089e753cc4972e362d46c91"},{url:"./logo.svg",revision:"ea96fd9d4089e753cc4972e362d46c91"},{url:"manifest.webmanifest",revision:"bab98f58079c28369bf8105842b3937c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
