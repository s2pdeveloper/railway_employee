"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{7487:(M,h,i)=>{i.d(h,{c:()=>r});var g=i(773),l=i(4081),c=i(405);const r=(o,n)=>{let e,t;const u=(a,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,w);E&&n(E)?E!==e&&(s(),d(E,p)):s()},d=(a,w)=>{e=a,t||(t=e);const p=e;(0,g.w)(()=>p.classList.add("ion-activated")),w()},s=(a=!1)=>{if(!e)return;const w=e;(0,g.w)(()=>w.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),t=void 0}})}},8438:(M,h,i)=>{i.d(h,{g:()=>l});var g=i(8476);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(M,h,i)=>{i.d(h,{c:()=>g,i:()=>l});const g=(c,r,o)=>"function"==typeof o?o(c,r):"string"==typeof o?c[o]===r[o]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,o)=>void 0!==c&&(Array.isArray(c)?c.some(n=>g(n,r,o)):g(c,r,o))},3351:(M,h,i)=>{i.d(h,{g:()=>g});const g=(n,e,t,u,d)=>c(n[1],e[1],t[1],u[1],d).map(s=>l(n[0],e[0],t[0],u[0],s)),l=(n,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-n*Math.pow(d-1,3),c=(n,e,t,u,d)=>o((u-=d)-3*(t-=d)+3*(e-=d)-(n-=d),3*t-6*e+3*n,3*e-3*n,n).filter(a=>a>=0&&a<=1),o=(n,e,t,u)=>{if(0===n)return((n,e,t)=>{const u=e*e-4*n*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*n),(-e-Math.sqrt(u))/(2*n)]})(e,t,u);const d=(3*(t/=n)-(e/=n)*e)/3,s=(2*e*e*e-9*e*t+27*(u/=n))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5083:(M,h,i)=>{i.d(h,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>r});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let n=[],e=!0;const t=o?o.shadowRoot:document,u=o||document.body,d=y=>{n.forEach(v=>v.classList.remove(g)),y.forEach(v=>v.classList.add(g)),n=y},s=()=>{e=!1,d([])},a=y=>{e=c.includes(y.key),e||d([])},w=y=>{if(e&&void 0!==y.composedPath){const v=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(v)}},p=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:d}}},8281:(M,h,i)=>{i.d(h,{c:()=>l});var g=i(5638);const l=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,g.h)(e);t=!0===e.legacy||!d&&!s&&null!==a}return t}}},c=n=>!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(M,h,i)=>{i.d(h,{I:()=>l,a:()=>e,b:()=>t,c:()=>n,d:()=>d,h:()=>u});var g=i(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,g.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,g.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(s){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:w})},notification(s){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:w})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},o=()=>r.available(),n=()=>{o()&&r.selection()},e=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},u=()=>{o()&&r.selectionEnd()},d=s=>{o()&&r.impact(s)}},2885:(M,h,i)=>{i.d(h,{I:()=>n,a:()=>d,b:()=>o,c:()=>w,d:()=>E,f:()=>s,g:()=>u,i:()=>t,p:()=>p,r:()=>y,s:()=>a});var g=i(467),l=i(5638),c=i(4929);const o="ion-content",n=".ion-content-scroll-host",e=`${o}, ${n}`,t=v=>"ION-CONTENT"===v.tagName,u=function(){var v=(0,g.A)(function*(_){return t(_)?(yield new Promise(m=>(0,l.c)(_,m)),_.getScrollElement()):_});return function(m){return v.apply(this,arguments)}}(),d=v=>v.querySelector(n)||v.querySelector(e),s=v=>v.closest(e),a=(v,_)=>t(v)?v.scrollToTop(_):Promise.resolve(v.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(v,_,m,O)=>t(v)?v.scrollByPoint(_,m,O):Promise.resolve(v.scrollBy({top:m,left:_,behavior:O>0?"smooth":"auto"})),p=v=>(0,c.b)(v,o),E=v=>{if(t(v)){const m=v.scrollY;return v.scrollY=!1,m}return v.style.setProperty("overflow","hidden"),!0},y=(v,_)=>{t(v)?v.scrollY=_:v.style.removeProperty("overflow")}},6726:(M,h,i)=>{i.d(h,{a:()=>g,b:()=>w,c:()=>e,d:()=>p,e:()=>L,f:()=>n,g:()=>E,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>t,m:()=>s,n:()=>y,o:()=>d,p:()=>o,q:()=>r,r:()=>m,s:()=>f,t:()=>a,u:()=>v,v:()=>_,w:()=>u});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(M,h,i)=>{i.d(h,{c:()=>r,g:()=>o});var g=i(8476),l=i(5638),c=i(4929);const r=(e,t,u)=>{let d,s;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(t)?t:[t];d=new MutationObserver(y=>{for(const v of y)for(const _ of v.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&E.includes(_.slot))return u(),void(0,l.r)(()=>a(_))}),d.observe(e,{childList:!0})}const a=E=>{var y;s&&(s.disconnect(),s=void 0),s=new MutationObserver(v=>{u();for(const _ of v)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&p()}),s.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},p=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},o=(e,t,u)=>{const d=null==e?0:e.toString().length,s=n(d,t);if(void 0===u)return s;try{return u(d,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},n=(e,t)=>`${e} / ${t}`},1622:(M,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var g=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},s=f=>{if(g.K.getEngine())a(f);else{if(!f.visualViewport)return;t=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),E()||y(f)?w(f):v(f)&&p(f)}}},a=f=>{f.addEventListener("keyboardDidShow",L=>w(f,L)),f.addEventListener("keyboardDidHide",()=>p(f))},w=(f,L)=>{_(f,L),u=!0},p=f=>{m(f),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=f=>u&&!v(f),v=f=>u&&t.height===f.innerHeight,_=(f,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(D)},m=f=>{const L=new CustomEvent(o);f.dispatchEvent(L)},O=f=>{e=Object.assign({},t),t=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},4379:(M,h,i)=>{i.d(h,{K:()=>r,a:()=>c});var g=i(8438),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),c=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(c||{});const r={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(n=>{if(n.code!==l.Unimplemented)throw n}):Promise.resolve(void 0)}}},4731:(M,h,i)=>{i.d(h,{c:()=>n});var g=i(467),l=i(8476),c=i(4379);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},o=e=>{const t=r(e);return null===t?0:t.clientHeight},n=function(){var e=(0,g.A)(function*(t){let u,d,s,a;const w=function(){var _=(0,g.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=o(O)),s=!0,p(s,O)},d=()=>{s=!1,p(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),p=(_,m)=>{t&&t(_,E(m))},E=_=>{if(0===a||a===o(_))return;const m=r(_);return null!==m?new Promise(O=>{const f=new ResizeObserver(()=>{m.clientHeight===a&&(f.disconnect(),O())});f.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return e.apply(this,arguments)}}()},7838:(M,h,i)=>{i.d(h,{c:()=>l});var g=i(467);const l=()=>{let c;return{lock:function(){var o=(0,g.A)(function*(){const n=c;let e;return c=new Promise(t=>e=t),void 0!==n&&(yield n),e});return function(){return o.apply(this,arguments)}}()}}},2172:(M,h,i)=>{i.d(h,{c:()=>c});var g=i(8476),l=i(5638);const c=(r,o,n)=>{let e;const t=()=>!(void 0===o()||void 0!==r.label||null===n()),d=()=>{const a=o();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const w=n().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),e=void 0)},{threshold:.01,root:r});p.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(M,h,i)=>{i.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,o)=>{const n=c*r/o-c+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,r,o)=>{const n=r/o,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})}}},6492:(M,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>o});var g=i(5638),l=i(5083),c=i(405);i(8221);const o=(n,e,t,u,d)=>{const s=n.ownerDocument.defaultView;let a=(0,l.i)(n);const p=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(n),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=p(m)/s.innerWidth;u(C)},onEnd:m=>{const O=p(m),C=s.innerWidth,f=O/C,L=(m=>a?-m.velocityX:m.velocityX)(m),D=L>=0&&(L>.2||O>C/2),b=(D?1-f:f)*C;let S=0;if(b>5){const A=b/Math.abs(L);S=Math.min(A,540)}d(D,f<=0?.01:(0,g.l)(0,f,.9999),S)}})}},2935:(M,h,i)=>{i.d(h,{w:()=>g});const g=(r,o,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(l(t,o))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,o)=>{let n;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=c(e.addedNodes[t],o)||n}),n},c=(r,o)=>{if(1!==r.nodeType)return;const n=r;return(n.tagName===o.toUpperCase()?[n]:Array.from(n.querySelectorAll(o))).find(t=>t.value===n.value)}},2170:(M,h,i)=>{i.d(h,{s:()=>l});var g=i(4438);let l=(()=>{var c;class r{constructor(){}get(n){var e;return localStorage.getItem(n)?JSON.parse(null!==(e=localStorage.getItem(n))&&void 0!==e?e:""):null}set(n,e){e&&localStorage.setItem(n,JSON.stringify(e))}remove(n){localStorage.removeItem(n)}}return(c=r).\u0275fac=function(n){return new(n||c)},c.\u0275prov=g.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),r})()}}]);