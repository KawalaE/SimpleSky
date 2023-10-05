(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),s=n(667),c=n.n(s),d=new URL(n(364),n.b),l=new URL(n(524),n.b),u=o()(a()),p=c()(d),m=c()(l);u.push([e.id,`@font-face {\n    font-family: 'Poppins';\n    src: url(${p}) format('woff2'),\n      url(${m}) format('woff');\n    font-style: normal;\n  }\n\n:root{\n  --primary-blue: #30a0e0;\n}\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\nbody{\n  height: 100vh;\n  background: linear-gradient(41deg, rgba(0,0,0,1) 0%, rgba(40,41,43,1) 89%, rgba(52,58,60,1) 100%);\n  align-items: center;\n}\n.page{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 150px;\n}\n.search{\n  background-color: transparent;\n  width: 200px;\n  border: none;\n  color: white;\n}\n.search-container{\n  border: 1px solid white;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  width: 300px;\n  gap: 10px;\n  caret-color: white;\n  margin-bottom: 70px;\n}\nbutton.search{\n  width: 30px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n}\nbutton.search img{\n  width: 20px;\n  transition: 0.2s ease-in-out;\n}\n.search-container input:focus{\n   outline: none;\n}\n.button-delete{\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in-out;\n}\n.button-delete img{\n  width: 20px;\n}\n.button-delete:active, button.search img:active{\n  transform: scale(80%);\n}\n.main-forecast{\n\n}\n.city-name{\n  color: white;\n  font-size: 2rem;\n}`,""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},524:(e,t,n)=>{e.exports=n.p+"530ca46191e1d72e793a.woff"},364:(e,t,n)=>{e.exports=n.p+"669df14acbd3a5a2fc5a.woff2"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"5601f656b6c78ef750ff.svg",g=n.p+"81b8670882c9536d4878.svg",y=n.p+"da616b259e333f069a12.svg",v=new Image;v.src=f;const w=new Image;w.src=g;const b=new Image;b.src=y;const x=document.createElement("div");class _{constructor(e,t,n,r,a,i,o,s){this.time=e,this.precipitation=t,this.rain=n,this.snowfall=r,this.temperatureMax=a,this.temperatureMin=i,this.weathercode={0:"Clear sky",1:"Predominantly clear with scattered clouds.",2:"Predominantly clear with scattered clouds.",3:"Predominantly clear with scattered clouds.",45:"Fog and depositing rime fog",48:"Fog and depositing rime fog",51:"Light drizzle at moderate and dense intensity",53:"Light drizzle at moderate and dense intensity",55:"Light drizzle at moderate and dense intensity",56:"Freezing drizzle at light and dense intenisty",57:"Freezing drizzle at light and dense intenisty",61:"Rain at moderate and heavy intensity",63:"Rain at moderate and heavy intensity",65:"Rain at moderate and heavy intensity",66:"Freezing rain at light an heavy intensity",67:"Freezing rain at light an heavy intensity",71:"Snow fall at slight, moderate and heavy intensity",73:"Snow fall at slight, moderate and heavy intensity",75:"Snow fall at slight, moderate and heavy intensity",77:"Snow grains",80:"Rain showers at slight, moderete and violent intensity",81:"Rain showers at slight, moderete and violent intensity",82:"Rain showers at slight, moderete and violent intensity",85:"Snow showers at slight and heavy intensity",86:"Snow showers at slight and heavy intensity",95:"Thunderstorm at slight and moderate intensity",96:"Thunderstorm with slight and heavy hail",99:"Thunderstorm with slight and heavy hail"}[o],this.windspeed=s}getTime(){return this.time}getprecipitation(){return this.precipitation}getRain(){return this.rain}getSnowfall(){return this.snowfall}getMaxTemp(){return this.temperatureMax}getMinTemp(){return this.temperatureMin}getWeatherCode(){return this.weathercode}getWindspeed(){return this.windspeed}}function E(e){let t=[];return async function(e){const t=`https://geocoding-api.open-meteo.com/v1/search?name=${e}&count=10&timezone&language=en&format=json`;try{const e=await fetch(t,{mode:"cors"}),n=await e.json();if(200===e.status){const{latitude:e}=n.results[0],{longitude:t}=n.results[0],{timezone:r}=n.results[0];return[e,t,r]}return"Server error"}catch(e){return`Error ${e}`}}(e).then((e=>(t=e,async function(e,t,n){const r=`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&timezone=${n}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_mean,snowfall_sum,windspeed_10m_max`,a=await fetch(r,{mode:"cors"});return await a.json()}(t[0],t[1],t[2]).then((e=>function(e){const t=[];let n;for(let r=0;r<=6;r++)n=new _(e.daily.time[r],e.daily.precipitation_probability_mean[r],e.daily.rain_sum[r],e.daily.snowfall_sum[r],e.daily.temperature_2m_max[r],e.daily.temperature_2m_min[r],e.daily.weathercode[0],e.daily.windspeed_10m_max[0]),t.push(n);return t}(e))))))}!function(){const e=document.querySelector("head"),t=document.createElement("link");t.setAttribute("rel","shortcut icon"),t.setAttribute("href",v.src),e.append(t)}(),function(){x.classList.add("page"),document.body.appendChild(x);const e=document.createElement("div");e.classList.add("search-container");const t=document.createElement("input");t.id="search",t.type="text",t.placeholder="City",t.classList.add("search");const n=document.createElement("button");n.classList.add("button-delete");const r=document.createElement("button"),a=document.createElement("img");a.src=b.src,n.append(a),r.id="search",r.classList.add("search"),document.createElement("img").src=w.src,r.append(w),e.append(n,t,r),x.appendChild(e)}(),function(){const e=document.querySelector("input[class='search']");e.addEventListener("keydown",(t=>{if("Enter"===t.key){const t=e.value;E(t).then((e=>{!function(e,t){let n=document.createElement("div");n.classList.add("main-forecast");let r=document.createElement("p");r.classList.add("city-name"),r.innerText=e,n.append(r),x.append(n),console.log(e),console.log(t[0])}(t,e)}))}})),document.querySelector("button[class='search']").addEventListener("click",(()=>{E(e.value)})),document.querySelector(".button-delete").addEventListener("click",(()=>{e.value=""}))}()})()})();