var da=Object.defineProperty;var ca=(t,e,a)=>e in t?da(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var we=(t,e,a)=>(ca(t,typeof e!="symbol"?e+"":e,a),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function h(){}const ta=t=>t;function Ze(t,e){for(const a in e)t[a]=e[a];return t}function ia(t){return t()}function Qe(){return Object.create(null)}function fe(t){t.forEach(ia)}function sa(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ma(t){return Object.keys(t).length===0}function ga(t,...e){if(t==null){for(const s of e)s(void 0);return h}const a=t.subscribe(...e);return a.unsubscribe?()=>a.unsubscribe():a}function We(t,e,a){t.$$.on_destroy.push(ga(e,a))}function Ke(t){return t??""}const ra=typeof window<"u";let pa=ra?()=>window.performance.now():()=>Date.now(),oa=ra?t=>requestAnimationFrame(t):h;const K=new Set;function na(t){K.forEach(e=>{e.c(t)||(K.delete(e),e.f())}),K.size!==0&&oa(na)}function ua(t){let e;return K.size===0&&oa(na),{promise:new Promise(a=>{K.add(e={c:t,f:a})}),abort(){K.delete(e)}}}function o(t,e){t.appendChild(e)}function q(t,e,a){t.insertBefore(e,a||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function _e(t){return document.createTextNode(t)}function b(){return _e(" ")}function va(t,e,a,s){return t.addEventListener(e,a,s),()=>t.removeEventListener(e,a,s)}function d(t,e,a){a==null?t.removeAttribute(e):t.getAttribute(e)!==a&&t.setAttribute(e,a)}function ha(t){return Array.from(t.childNodes)}function Ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function ve(t,e,a,s){a==null?t.style.removeProperty(e):t.style.setProperty(e,a,s?"important":"")}let ee;function $(t){ee=t}function _a(){if(!ee)throw new Error("Function called outside component initialization");return ee}function ba(t){_a().$$.on_mount.push(t)}const W=[],Xe=[];let X=[];const $e=[],fa=Promise.resolve();let Ie=!1;function ya(){Ie||(Ie=!0,fa.then(la))}function be(t){X.push(t)}const xe=new Set;let Z=0;function la(){if(Z!==0)return;const t=ee;do{try{for(;Z<W.length;){const e=W[Z];Z++,$(e),Ma(e.$$)}}catch(e){throw W.length=0,Z=0,e}for($(null),W.length=0,Z=0;Xe.length;)Xe.pop()();for(let e=0;e<X.length;e+=1){const a=X[e];xe.has(a)||(xe.add(a),a())}X.length=0}while(W.length);for(;$e.length;)$e.pop()();Ie=!1,xe.clear(),$(t)}function Ma(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function wa(t){const e=[],a=[];X.forEach(s=>t.indexOf(s)===-1?e.push(s):a.push(s)),a.forEach(s=>s()),X=e}const he=new Set;let xa;function B(t,e){t&&t.i&&(he.delete(t),t.i(e))}function P(t,e,a,s){if(t&&t.o){if(he.has(t))return;he.add(t),xa.c.push(()=>{he.delete(t),s&&(a&&t.d(1),s())}),t.o(e)}else s&&s()}function N(t){t&&t.c()}function L(t,e,a){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,a),be(()=>{const i=t.$$.on_mount.map(ia).filter(sa);t.$$.on_destroy?t.$$.on_destroy.push(...i):fe(i),t.$$.on_mount=[]}),r.forEach(be)}function U(t,e){const a=t.$$;a.fragment!==null&&(wa(a.after_update),fe(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function Ca(t,e){t.$$.dirty[0]===-1&&(W.push(t),ya(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,a,s,r,i,n=null,l=[-1]){const v=ee;$(t);const c=t.$$={fragment:null,ctx:[],props:i,update:h,not_equal:r,bound:Qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:Qe(),dirty:l,skip_bound:!1,root:e.target||v.$$.root};n&&n(c.root);let y=!1;if(c.ctx=a?a(t,e.props||{},(p,C,...x)=>{const M=x.length?x[0]:C;return c.ctx&&r(c.ctx[p],c.ctx[p]=M)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](M),y&&Ca(t,p)),C}):[],c.update(),y=!0,fe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const p=ha(e.target);c.fragment&&c.fragment.l(p),p.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&B(t.$$.fragment),L(t,e.target,e.anchor),la()}$(v)}class O{constructor(){we(this,"$$");we(this,"$$set")}$destroy(){U(this,1),this.$destroy=h}$on(e,a){if(!sa(a))return h;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(a),()=>{const r=s.indexOf(a);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ma(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ia="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ia);const Ea="/11deMarzo/assets/trenII-DaZpweGS.png",ja="/11deMarzo/assets/prueba-BPfI_YNn.mp4",Q=[];function ka(t,e=h){let a;const s=new Set;function r(l){if(T(t,l)&&(t=l,a)){const v=!Q.length;for(const c of s)c[1](),Q.push(c,t);if(v){for(let c=0;c<Q.length;c+=2)Q[c][0](Q[c+1]);Q.length=0}}}function i(l){r(l(t))}function n(l,v=h){const c=[l,v];return s.add(c),s.size===1&&(a=e(r,i)||h),l(t),()=>{s.delete(c),s.size===0&&a&&(a(),a=null)}}return{set:r,update:i,subscribe:n}}function ea(t){return Object.prototype.toString.call(t)==="[object Date]"}function Ta(t){const e=t-1;return e*e*e+1}function Ee(t,e){if(t===e||t!==t)return()=>t;const a=typeof t;if(a!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((r,i)=>Ee(t[i],r));return r=>s.map(i=>i(r))}if(a==="object"){if(!t||!e)throw new Error("Object cannot be null");if(ea(t)&&ea(e)){t=t.getTime(),e=e.getTime();const i=e-t;return n=>new Date(t+n*i)}const s=Object.keys(e),r={};return s.forEach(i=>{r[i]=Ee(t[i],e[i])}),i=>{const n={};return s.forEach(l=>{n[l]=r[l](i)}),n}}if(a==="number"){const s=e-t;return r=>t+r*s}throw new Error(`Cannot interpolate ${a} values`)}function aa(t,e={}){const a=ka(t);let s,r=t;function i(n,l){if(t==null)return a.set(t=n),Promise.resolve();r=n;let v=s,c=!1,{delay:y=0,duration:p=400,easing:C=ta,interpolate:x=Ee}=Ze(Ze({},e),l);if(p===0)return v&&(v.abort(),v=null),a.set(t=r),Promise.resolve();const M=pa()+y;let I;return s=ua(E=>{if(E<M)return!0;c||(I=x(t,n),typeof p=="function"&&(p=p(t,n)),c=!0),v&&(v.abort(),v=null);const g=E-M;return g>p?(a.set(t=n),!1):(a.set(t=I(C(g/p))),!0)}),s.promise}return{set:i,update:(n,l)=>i(n(r,t),l),subscribe:a.subscribe}}function qa(t){let e;return{c(){e=m("span"),e.textContent="--",d(e,"class","svelte-1uhcm16")},m(a,s){q(a,e,s)},p:h,d(a){a&&k(e)}}}function Ba(t){let e,a=Math.round(t[1])+"",s;return{c(){e=m("span"),s=_e(a),d(e,"class","svelte-1uhcm16")},m(r,i){q(r,e,i),o(e,s)},p(r,i){i&2&&a!==(a=Math.round(r[1])+"")&&Ce(s,a)},d(r){r&&k(e)}}}function La(t){let e,a,s,r,i,n,l,v,c,y,p,C,x,M=Math.round(t[2])+"",I;function E(w,j){return w[1]?Ba:qa}let g=E(t),f=g(t);return{c(){e=m("div"),a=m("div"),s=m("p"),f.c(),i=b(),n=m("div"),l=m("p"),v=m("span"),c=_e(t[0]),y=b(),p=m("div"),C=m("p"),x=m("span"),I=_e(M),d(s,"class",r=Ke(t[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),d(a,"class","lv_contPiece svelte-1uhcm16"),d(v,"class","svelte-1uhcm16"),d(l,"class","svelte-1uhcm16"),d(n,"class","lv_contPiece svelte-1uhcm16"),d(x,"class","svelte-1uhcm16"),d(C,"class","svelte-1uhcm16"),d(p,"class","lv_contPiece svelte-1uhcm16"),d(e,"class","lv_contP")},m(w,j){q(w,e,j),o(e,a),o(a,s),f.m(s,null),o(e,i),o(e,n),o(n,l),o(l,v),o(v,c),o(e,y),o(e,p),o(p,C),o(C,x),o(x,I)},p(w,[j]){g===(g=E(w))&&f?f.p(w,j):(f.d(1),f=g(w),f&&(f.c(),f.m(s,null))),j&2&&r!==(r=Ke(w[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&d(s,"class",r),j&1&&Ce(c,w[0]),j&4&&M!==(M=Math.round(w[2])+"")&&Ce(I,M)},i:h,o:h,d(w){w&&k(e),f.d()}}}function Ua(t,e,a){let s,r,{lv_day:i=0}=e,{lv_month:n}=e,{lv_year:l}=e;const v=aa(i,{duration:1500,delay:0,easing:ta});We(t,v,p=>a(1,s=p));const c=aa(l,{duration:1500,delay:0,easing:Ta});We(t,c,p=>a(2,r=p));const y=function(){v.set(i),c.set(l)};return t.$$set=p=>{"lv_day"in p&&a(5,i=p.lv_day),"lv_month"in p&&a(0,n=p.lv_month),"lv_year"in p&&a(6,l=p.lv_year)},t.$$.update=()=>{t.$$.dirty&32&&y(),t.$$.dirty&64&&y()},[n,s,r,v,c,i,l]}class Aa extends O{constructor(e){super(),A(this,e,Ua,La,T,{lv_day:5,lv_month:0,lv_year:6})}}class Oa extends O{constructor(e){super(),A(this,e,null,null,T,{})}}function Pa(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_Casablanca11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_Casablanca11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_Casablanca11M-escritorio1200,
		#g-20240225_Casablanca11M-escritorio,
		#g-20240225_Casablanca11M-tableta,
		#g-20240225_Casablanca11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_Casablanca11M-movil{
				display: none;
			}
			#g-20240225_Casablanca11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_Casablanca11M-movil{
				display: none;
			}
			#g-20240225_Casablanca11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_Casablanca11M-movil2{
				display: none;
			}
			#g-20240225_Casablanca11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_Casablanca11M-tableta{
				display: none;
			}
			#g-20240225_Casablanca11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_Casablanca11M-escritorio{
				display: none;
			}
			#g-20240225_Casablanca11M-escritorio1200{
				display:block;	
			}
			#g-20240225_Casablanca11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_Casablanca11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_Casablanca11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-movil.jpg"/></div> <div id="g-20240225_Casablanca11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_Casablanca11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-movil2.jpg"/></div> <div id="g-20240225_Casablanca11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_Casablanca11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-tableta.jpg"/></div> <div id="g-20240225_Casablanca11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_Casablanca11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio.jpg"/></div> <div id="g-20240225_Casablanca11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_Casablanca11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_Casablanca11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Na extends O{constructor(e){super(),A(this,e,null,Pa,T,{})}}function Da(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_BinLaden11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_BinLaden11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_BinLaden11M-escritorio1200,
		#g-20240225_BinLaden11M-escritorio,
		#g-20240225_BinLaden11M-tableta,
		#g-20240225_BinLaden11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_BinLaden11M-movil{
				display: none;
			}
			#g-20240225_BinLaden11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_BinLaden11M-movil{
				display: none;
			}
			#g-20240225_BinLaden11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_BinLaden11M-movil2{
				display: none;
			}
			#g-20240225_BinLaden11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_BinLaden11M-tableta{
				display: none;
			}
			#g-20240225_BinLaden11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_BinLaden11M-escritorio{
				display: none;
			}
			#g-20240225_BinLaden11M-escritorio1200{
				display:block;	
			}
			#g-20240225_BinLaden11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_BinLaden11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_BinLaden11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-movil.jpg"/></div> <div id="g-20240225_BinLaden11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_BinLaden11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-movil2.jpg"/></div> <div id="g-20240225_BinLaden11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_BinLaden11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-tableta.jpg"/></div> <div id="g-20240225_BinLaden11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_BinLaden11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio.jpg"/></div> <div id="g-20240225_BinLaden11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_BinLaden11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_BinLaden11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Ya extends O{constructor(e){super(),A(this,e,null,Da,T,{})}}function Sa(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_CNI11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_CNI11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_CNI11M-escritorio1200,
		#g-20240225_CNI11M-escritorio,
		#g-20240225_CNI11M-tableta,
		#g-20240225_CNI11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_CNI11M-movil{
				display: none;
			}
			#g-20240225_CNI11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_CNI11M-movil{
				display: none;
			}
			#g-20240225_CNI11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_CNI11M-movil2{
				display: none;
			}
			#g-20240225_CNI11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_CNI11M-tableta{
				display: none;
			}
			#g-20240225_CNI11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_CNI11M-escritorio{
				display: none;
			}
			#g-20240225_CNI11M-escritorio1200{
				display:block;	
			}
			#g-20240225_CNI11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_CNI11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_CNI11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-movil.jpg"/></div> <div id="g-20240225_CNI11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_CNI11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-movil2.jpg"/></div> <div id="g-20240225_CNI11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_CNI11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-tableta.jpg"/></div> <div id="g-20240225_CNI11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_CNI11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio.jpg"/></div> <div id="g-20240225_CNI11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_CNI11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_CNI11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class za extends O{constructor(e){super(),A(this,e,null,Sa,T,{})}}function Ha(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_IrakEmboscada11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_IrakEmboscada11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_IrakEmboscada11M-escritorio1200,
		#g-20240225_IrakEmboscada11M-escritorio,
		#g-20240225_IrakEmboscada11M-tableta,
		#g-20240225_IrakEmboscada11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_IrakEmboscada11M-movil{
				display: none;
			}
			#g-20240225_IrakEmboscada11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_IrakEmboscada11M-movil{
				display: none;
			}
			#g-20240225_IrakEmboscada11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_IrakEmboscada11M-movil2{
				display: none;
			}
			#g-20240225_IrakEmboscada11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_IrakEmboscada11M-tableta{
				display: none;
			}
			#g-20240225_IrakEmboscada11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_IrakEmboscada11M-escritorio{
				display: none;
			}
			#g-20240225_IrakEmboscada11M-escritorio1200{
				display:block;	
			}
			#g-20240225_IrakEmboscada11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_IrakEmboscada11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-movil.jpg"/></div> <div id="g-20240225_IrakEmboscada11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-movil2.jpg"/></div> <div id="g-20240225_IrakEmboscada11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-tableta.jpg"/></div> <div id="g-20240225_IrakEmboscada11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio.jpg"/></div> <div id="g-20240225_IrakEmboscada11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_IrakEmboscada11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Ga extends O{constructor(e){super(),A(this,e,null,Ha,T,{})}}function Va(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_Convoy11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_Convoy11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_Convoy11M-escritorio1200,
		#g-20240225_Convoy11M-escritorio,
		#g-20240225_Convoy11M-tableta,
		#g-20240225_Convoy11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_Convoy11M-movil{
				display: none;
			}
			#g-20240225_Convoy11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_Convoy11M-movil{
				display: none;
			}
			#g-20240225_Convoy11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_Convoy11M-movil2{
				display: none;
			}
			#g-20240225_Convoy11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_Convoy11M-tableta{
				display: none;
			}
			#g-20240225_Convoy11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_Convoy11M-escritorio{
				display: none;
			}
			#g-20240225_Convoy11M-escritorio1200{
				display:block;	
			}
			#g-20240225_Convoy11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_Convoy11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_Convoy11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-movil.jpg"/></div> <div id="g-20240225_Convoy11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_Convoy11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-movil2.jpg"/></div> <div id="g-20240225_Convoy11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_Convoy11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-tableta.jpg"/></div> <div id="g-20240225_Convoy11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_Convoy11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio.jpg"/></div> <div id="g-20240225_Convoy11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_Convoy11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_Convoy11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Ja extends O{constructor(e){super(),A(this,e,null,Va,T,{})}}function Fa(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_UCIEvsUDYCO11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_UCIEvsUDYCO11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_UCIEvsUDYCO11M-escritorio1200,
		#g-20240225_UCIEvsUDYCO11M-escritorio,
		#g-20240225_UCIEvsUDYCO11M-tableta,
		#g-20240225_UCIEvsUDYCO11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_UCIEvsUDYCO11M-movil{
				display: none;
			}
			#g-20240225_UCIEvsUDYCO11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_UCIEvsUDYCO11M-movil{
				display: none;
			}
			#g-20240225_UCIEvsUDYCO11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_UCIEvsUDYCO11M-movil2{
				display: none;
			}
			#g-20240225_UCIEvsUDYCO11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_UCIEvsUDYCO11M-tableta{
				display: none;
			}
			#g-20240225_UCIEvsUDYCO11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_UCIEvsUDYCO11M-escritorio{
				display: none;
			}
			#g-20240225_UCIEvsUDYCO11M-escritorio1200{
				display:block;	
			}
			#g-20240225_UCIEvsUDYCO11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_UCIEvsUDYCO11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-movil.jpg"/></div> <div id="g-20240225_UCIEvsUDYCO11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-movil2.jpg"/></div> <div id="g-20240225_UCIEvsUDYCO11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-tableta.jpg"/></div> <div id="g-20240225_UCIEvsUDYCO11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio.jpg"/></div> <div id="g-20240225_UCIEvsUDYCO11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_UCIEvsUDYCO11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Ra extends O{constructor(e){super(),A(this,e,null,Fa,T,{})}}function Za(t){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_BerrajTurquia11M-box .g-artboard p {
			margin:0;
		}
		.g-aiAbs {
			position:absolute;
		}
		.g-aiImg {
			display:block;
			width:100% !important;
		}
		.g-aiPointText p { white-space: nowrap; }</style> <style type="text/css" media="screen,print">/* Custom CSS */
				#g-20240225_BerrajTurquia11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_BerrajTurquia11M-escritorio1200,
		#g-20240225_BerrajTurquia11M-escritorio,
		#g-20240225_BerrajTurquia11M-tableta,
		#g-20240225_BerrajTurquia11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_BerrajTurquia11M-movil{
				display: none;
			}
			#g-20240225_BerrajTurquia11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_BerrajTurquia11M-movil{
				display: none;
			}
			#g-20240225_BerrajTurquia11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_BerrajTurquia11M-movil2{
				display: none;
			}
			#g-20240225_BerrajTurquia11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_BerrajTurquia11M-tableta{
				display: none;
			}
			#g-20240225_BerrajTurquia11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_BerrajTurquia11M-escritorio{
				display: none;
			}
			#g-20240225_BerrajTurquia11M-escritorio1200{
				display:block;	
			}
			#g-20240225_BerrajTurquia11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_BerrajTurquia11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-movil.jpg"/></div> <div id="g-20240225_BerrajTurquia11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-movil2.jpg"/></div> <div id="g-20240225_BerrajTurquia11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-tableta.jpg"/></div> <div id="g-20240225_BerrajTurquia11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio.jpg"/></div> <div id="g-20240225_BerrajTurquia11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_BerrajTurquia11M-box"),d(e,"class","ai2html")},m(a,s){q(a,e,s)},p:h,i:h,o:h,d(a){a&&k(e)}}}class Qa extends O{constructor(e){super(),A(this,e,null,Za,T,{})}}function Wa(t){let e=!1,a=()=>{e=!1},s,r,i,n,l,v,c,y,p,C,x,M,I,E,g,f,w,j,ae,Y,je,te,ke,ie,Te,u,se,qe,S,Be,re,Le,z,Ue,oe,Ae,H,Oe,ne,Pe,G,Ne,le,De,V,Ye,de,Se,J,ze,ce,He,F,Ge,me,Ve,R,Je,ge,Fe,ye,pe,Me,Re;return be(t[5]),Y=new Aa({props:{lv_day:t[1],lv_month:t[2],lv_year:t[3]}}),S=new Oa({}),z=new Na({}),H=new Ya({}),G=new za({}),V=new Ga({}),J=new Ja({}),F=new Ra({}),R=new Qa({}),{c(){r=m("main"),i=m("div"),n=m("div"),l=b(),v=m("div"),c=m("div"),y=m("div"),p=m("div"),p.innerHTML=`<img src="${Ea}" alt="tren 11-M" class="svelte-7jr6gh"/>`,C=b(),x=m("div"),M=m("div"),M.innerHTML="",I=b(),E=m("div"),E.innerHTML='<div class="lv_Titular lv_tit svelte-7jr6gh"><h1 class="svelte-7jr6gh">11-M: las señales que España no vio</h1></div> <div class="lv_Subti lv_tit svelte-7jr6gh"><h3 class="svelte-7jr6gh">Cómo se gestó el atentado más mortífero de Europa</h3></div> <div class="lv_Author lv_tit svelte-7jr6gh"><p class="lv_auth svelte-7jr6gh">Por Ignacio Orovio, Clara Penín, Laura Aragó y Begoña M. Goitia</p></div> <div class="lv_titExtra lv_tit svelte-7jr6gh"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',g=b(),f=m("div"),w=m("div"),j=m("div"),ae=m("div"),N(Y.$$.fragment),je=b(),te=m("div"),ke=b(),ie=m("div"),ie.innerHTML=`<div class="lv_videoWrapper svelte-7jr6gh"><video loop="" muted="" autoplay="" class="svelte-7jr6gh"><source src="${ja}" type="video/mp4"/></video></div>`,Te=b(),u=m("div"),se=m("div"),se.innerHTML='<p class="lv_Par svelte-7jr6gh">11 de marzo de 2004. En tres minutos, a partir de las 7.37 de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.</p> <p class="lv_Par svelte-7jr6gh">De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.</p> <p class="lv_Par svelte-7jr6gh">El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los de Estados Unidos.</p> <p class="lv_Par svelte-7jr6gh">Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.</p> <p id="io_sect1" class="lv_Par io_bird svelte-7jr6gh">El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias Abu Dadah [ciudadano sirio y líder de la formación yihadista en España].</p> <p class="lv_Par svelte-7jr6gh">Algunos presuntos miembros de la célula logran huir. Entre ellas, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España sino que son el hilo que lleva al 11-M: Amer Azizi [ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m], Serhane ben Abdelmajid [el Tunecino, líder del 11-M], Said Berraj [también entrenado en Afganistán y miembro de la célula del 11-M] y Jamal Zougam [fue condenado como autor material de los atentados].</p>',qe=b(),N(S.$$.fragment),Be=b(),re=m("div"),re.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-7jr6gh">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebraran fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-7jr6gh">El yihadista argelino Allekema Lamari [detenido en 1997, condenado por su radicalismo y miembro clave del 11-M] es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <p id="io_sect4" class="lv_Par io_bird svelte-7jr6gh">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-7jr6gh">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <p class="lv_Par svelte-7jr6gh">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación.</p> <p class="lv_Par svelte-7jr6gh">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <p class="lv_Par svelte-7jr6gh">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',Le=b(),N(z.$$.fragment),Ue=b(),oe=m("div"),oe.innerHTML='<p class="lv_Par svelte-7jr6gh">Uno de los líderes del 11-m, Jamal Ahmidan [el Chino, narcotraficante y persona clave en la preparacion del 11m] sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-7jr6gh">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <p class="lv_Par svelte-7jr6gh">Osama Bin Laden emite un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario</p>',Ae=b(),N(H.$$.fragment),Oe=b(),ne=m("div"),ne.innerHTML='<p class="lv_Par svelte-7jr6gh">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con un ex minero asturiano y traficante de dinamita. Pactan enviar 60 kg de explosivo a Madrid.</p> <p class="lv_Par svelte-7jr6gh">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <p class="lv_Par svelte-7jr6gh">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>',Pe=b(),N(G.$$.fragment),Ne=b(),le=m("div"),le.innerHTML='<p class="lv_Par svelte-7jr6gh">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',De=b(),N(V.$$.fragment),Ye=b(),de=m("div"),de.innerHTML='<p class="lv_Par svelte-7jr6gh">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) informa que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <p class="lv_Par svelte-7jr6gh">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <p class="lv_Par svelte-7jr6gh">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <p class="lv_Par svelte-7jr6gh">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán.</p> <p class="lv_Par svelte-7jr6gh">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <p class="lv_Par svelte-7jr6gh">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <p class="lv_Par svelte-7jr6gh">La casa de Morata se habilita para albergar la dinamita. Crean un zulo impermeabilizado donde almacenar la dinamita.</p> <p class="lv_Par svelte-7jr6gh">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. [Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes]</p> <p class="lv_Par svelte-7jr6gh">Jamal Ahmidan, El Chino, y otros dos miembros de la célula viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita.</p> <p class="lv_Par svelte-7jr6gh">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>',Se=b(),N(J.$$.fragment),ze=b(),ce=m("div"),ce.innerHTML='<p class="lv_Par svelte-7jr6gh">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que es el que se utilizará como detonador de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <p class="lv_Par svelte-7jr6gh">El comando alquila un piso en la calle Martín Gaite de Leganés.</p> <p class="lv_Par svelte-7jr6gh">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-7jr6gh">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>',He=b(),N(F.$$.fragment),Ge=b(),me=m("div"),me.innerHTML='<p class="lv_Par svelte-7jr6gh">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',Ve=b(),N(R.$$.fragment),Je=b(),ge=m("div"),ge.innerHTML='<p class="lv_Par svelte-7jr6gh">Ese mismo día, a partir de las 2.24 de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando las bombas.</p> <p class="lv_Par svelte-7jr6gh">Hacia las 6.50 de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-7jr6gh">A partir de las 7 de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37 y las 7.39 de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p>',Fe=b(),ye=m("div"),d(n,"id","lv_preHeader"),d(p,"class","lv_obLayer lv_obLayer1 capaTren svelte-7jr6gh"),d(M,"class","lv_explWrapper svelte-7jr6gh"),ve(M,"transform",`scale(${t[4]<0?0:t[4]})`),d(x,"class","lv_obLayer lv_obLayer2 capaExpl svelte-7jr6gh"),d(y,"class","lv_obWrapper svelte-7jr6gh"),d(c,"class","lv_Obertura svelte-7jr6gh"),d(E,"class","lv_titBlock svelte-7jr6gh"),ve(E,"transform",`translate3d(0, ${t[0]*-.3}px, 0)`),d(v,"id","lv_Header"),d(ae,"class","lv_cont_fecha svelte-7jr6gh"),d(j,"class","lv_migCont"),d(w,"class","lv_Contador svelte-7jr6gh"),d(te,"id","lv_Counter"),d(te,"class","io_bird lv_fakeCounter"),d(ie,"class","lv_inVideo svelte-7jr6gh"),d(se,"class","lv_Text svelte-7jr6gh"),d(re,"class","lv_Text svelte-7jr6gh"),d(oe,"class","lv_Text svelte-7jr6gh"),d(ne,"class","lv_Text svelte-7jr6gh"),d(le,"class","lv_Text svelte-7jr6gh"),d(de,"class","lv_Text svelte-7jr6gh"),d(ce,"class","lv_Text svelte-7jr6gh"),d(me,"class","lv_Text svelte-7jr6gh"),d(ge,"class","lv_Text svelte-7jr6gh"),d(u,"class","lv_Text_block svelte-7jr6gh"),d(f,"id","lv_Content"),d(ye,"id","lv_Footer"),d(i,"class","lv_mainContainer svelte-7jr6gh")},m(_,D){q(_,r,D),o(r,i),o(i,n),o(i,l),o(i,v),o(v,c),o(c,y),o(y,p),o(y,C),o(y,x),o(x,M),o(v,I),o(v,E),o(i,g),o(i,f),o(f,w),o(w,j),o(j,ae),L(Y,ae,null),o(f,je),o(f,te),o(f,ke),o(f,ie),o(f,Te),o(f,u),o(u,se),o(u,qe),L(S,u,null),o(u,Be),o(u,re),o(u,Le),L(z,u,null),o(u,Ue),o(u,oe),o(u,Ae),L(H,u,null),o(u,Oe),o(u,ne),o(u,Pe),L(G,u,null),o(u,Ne),o(u,le),o(u,De),L(V,u,null),o(u,Ye),o(u,de),o(u,Se),L(J,u,null),o(u,ze),o(u,ce),o(u,He),L(F,u,null),o(u,Ge),o(u,me),o(u,Ve),L(R,u,null),o(u,Je),o(u,ge),o(i,Fe),o(i,ye),pe=!0,Me||(Re=va(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(a,100),t[5]()}),Me=!0)},p(_,[D]){D&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,_[0]),s=setTimeout(a,100)),D&16&&ve(M,"transform",`scale(${_[4]<0?0:_[4]})`),D&1&&ve(E,"transform",`translate3d(0, ${_[0]*-.3}px, 0)`);const ue={};D&2&&(ue.lv_day=_[1]),D&4&&(ue.lv_month=_[2]),D&8&&(ue.lv_year=_[3]),Y.$set(ue)},i(_){pe||(B(Y.$$.fragment,_),B(S.$$.fragment,_),B(z.$$.fragment,_),B(H.$$.fragment,_),B(G.$$.fragment,_),B(V.$$.fragment,_),B(J.$$.fragment,_),B(F.$$.fragment,_),B(R.$$.fragment,_),pe=!0)},o(_){P(Y.$$.fragment,_),P(S.$$.fragment,_),P(z.$$.fragment,_),P(H.$$.fragment,_),P(G.$$.fragment,_),P(V.$$.fragment,_),P(J.$$.fragment,_),P(F.$$.fragment,_),P(R.$$.fragment,_),pe=!1},d(_){_&&k(r),U(Y),U(S),U(z),U(H),U(G),U(V),U(J),U(F),U(R),Me=!1,Re()}}}function Ka(t,e,a){let s;const r=new Date;let i=r.getDate(),n=r.toLocaleString("es-ES",{month:"short"}),l=r.getFullYear();ba(v);function v(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const p={root:null,rootMargin:"0px 0px -30% 0px",threshold:.2};function C(I,E){I.forEach(g=>{g.isIntersecting&&(g.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),a(1,i=11),a(2,n="MAR"),a(3,l=2004)):g.target.id==="io_sect1"?(a(1,i=0),a(2,n="NOV"),a(3,l=2001)):g.target.id==="io_sect2"?(a(1,i=0),a(2,n="JUN"),a(3,l=2002)):g.target.id==="io_sect3"?(a(1,i=29),a(2,n="JUN"),a(3,l=2002)):g.target.id==="io_sect4"?(a(1,i=0),a(2,n="ENE"),a(3,l=2003)):g.target.id==="io_sect5"?(a(1,i=20),a(2,n="MAR"),a(3,l=2003)):g.target.id==="io_sect6"?(a(1,i=16),a(2,n="MAY"),a(3,l=2003)):g.target.id==="io_sect7"?(a(1,i=0),a(2,n="JUN"),a(3,l=2003)):g.target.id==="io_sect8"?(a(1,i=18),a(2,n="OCT"),a(3,l=2003)):g.target.id==="io_sect9"?(a(1,i=28),a(2,n="OCT"),a(3,l=2003)):g.target.id==="io_sect10"?(a(1,i=6),a(2,n="NOV"),a(3,l=2003)):g.target.id==="io_sect11"?(a(1,i=29),a(2,n="NOV"),a(3,l=2003)):g.target.id==="io_sect12"?(a(1,i=0),a(2,n="DIC"),a(3,l=2003)):g.target.id==="io_sect13"?(a(1,i=17),a(2,n="DIC"),a(3,l=2003)):g.target.id==="io_sect14"?(a(1,i=12),a(2,n="DIC"),a(3,l=2003)):g.target.id==="io_sect15"?(a(1,i=0),a(2,n="ENE"),a(3,l=2004)):g.target.id==="io_sect16"?(a(1,i=5),a(2,n="ENE"),a(3,l=2004)):g.target.id==="io_sect17"?(a(1,i=28),a(2,n="ENE"),a(3,l=2004)):g.target.id==="io_sect18"?(a(1,i=0),a(2,n="FEB"),a(3,l=2004)):g.target.id==="io_sect19"?(a(1,i=4),a(2,n="FEB"),a(3,l=2004)):g.target.id==="io_sect20"?(a(1,i=27),a(2,n="FEB"),a(3,l=2004)):g.target.id==="io_sect21"?(a(1,i=29),a(2,n="FEB"),a(3,l=2004)):g.target.id==="io_sect22"?(a(1,i=3),a(2,n="MAR"),a(3,l=2004)):g.target.id==="io_sect23"?(a(1,i=6),a(2,n="MAR"),a(3,l=2004)):g.target.id==="io_sect24"?(a(1,i=8),a(2,n="MAR"),a(3,l=2004)):g.target.id==="io_sect25"?(a(1,i=10),a(2,n="MAR"),a(3,l=2004)):g.target.id==="io_sect26"&&(a(1,i=11),a(2,n="MAR"),a(3,l=2004)))})}const x=new IntersectionObserver(C,p);document.querySelectorAll(".io_bird").forEach(I=>{x.observe(I)})}let c=0;function y(){a(0,c=window.pageYOffset)}return t.$$.update=()=>{t.$$.dirty&1&&a(4,s=1-c*.005)},[c,i,n,l,s,y]}class Xa extends O{constructor(e){super(),A(this,e,Ka,Wa,T,{})}}new Xa({target:document.getElementById("app")});
