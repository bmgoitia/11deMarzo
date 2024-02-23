var de=Object.defineProperty;var ce=(a,e,t)=>e in a?de(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var wa=(a,e,t)=>(ce(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function _(){}const te=a=>a;function Za(a,e){for(const t in e)a[t]=e[t];return a}function ie(a){return a()}function Qa(){return Object.create(null)}function fa(a){a.forEach(ie)}function se(a){return typeof a=="function"}function T(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}function me(a){return Object.keys(a).length===0}function ge(a,...e){if(a==null){for(const s of e)s(void 0);return _}const t=a.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Wa(a,e,t){a.$$.on_destroy.push(ge(e,t))}function Ka(a){return a??""}const re=typeof window<"u";let pe=re?()=>window.performance.now():()=>Date.now(),oe=re?a=>requestAnimationFrame(a):_;const K=new Set;function ne(a){K.forEach(e=>{e.c(a)||(K.delete(e),e.f())}),K.size!==0&&oe(ne)}function ue(a){let e;return K.size===0&&oe(ne),{promise:new Promise(t=>{K.add(e={c:a,f:t})}),abort(){K.delete(e)}}}function r(a,e){a.appendChild(e)}function N(a,e,t){a.insertBefore(e,t||null)}function L(a){a.parentNode&&a.parentNode.removeChild(a)}function m(a){return document.createElement(a)}function ha(a){return document.createTextNode(a)}function b(){return ha(" ")}function ve(a,e,t,s){return a.addEventListener(e,t,s),()=>a.removeEventListener(e,t,s)}function d(a,e,t){t==null?a.removeAttribute(e):a.getAttribute(e)!==t&&a.setAttribute(e,t)}function he(a){return Array.from(a.childNodes)}function xa(a,e){e=""+e,a.data!==e&&(a.data=e)}function va(a,e,t,s){t==null?a.style.removeProperty(e):a.style.setProperty(e,t,s?"important":"")}let aa;function $(a){aa=a}function _e(){if(!aa)throw new Error("Function called outside component initialization");return aa}function be(a){_e().$$.on_mount.push(a)}const W=[],Xa=[];let X=[];const $a=[],fe=Promise.resolve();let Ia=!1;function ye(){Ia||(Ia=!0,fe.then(le))}function ba(a){X.push(a)}const Ca=new Set;let Z=0;function le(){if(Z!==0)return;const a=aa;do{try{for(;Z<W.length;){const e=W[Z];Z++,$(e),Me(e.$$)}}catch(e){throw W.length=0,Z=0,e}for($(null),W.length=0,Z=0;Xa.length;)Xa.pop()();for(let e=0;e<X.length;e+=1){const t=X[e];Ca.has(t)||(Ca.add(t),t())}X.length=0}while(W.length);for(;$a.length;)$a.pop()();Ia=!1,Ca.clear(),$(a)}function Me(a){if(a.fragment!==null){a.update(),fa(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(ba)}}function we(a){const e=[],t=[];X.forEach(s=>a.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),X=e}const _a=new Set;let xe;function k(a,e){a&&a.i&&(_a.delete(a),a.i(e))}function O(a,e,t,s){if(a&&a.o){if(_a.has(a))return;_a.add(a),xe.c.push(()=>{_a.delete(a),s&&(t&&a.d(1),s())}),a.o(e)}else s&&s()}function P(a){a&&a.c()}function q(a,e,t){const{fragment:s,after_update:l}=a.$$;s&&s.m(e,t),ba(()=>{const i=a.$$.on_mount.map(ie).filter(se);a.$$.on_destroy?a.$$.on_destroy.push(...i):fa(i),a.$$.on_mount=[]}),l.forEach(ba)}function B(a,e){const t=a.$$;t.fragment!==null&&(we(t.after_update),fa(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ce(a,e){a.$$.dirty[0]===-1&&(W.push(a),ye(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function U(a,e,t,s,l,i,o=null,n=[-1]){const v=aa;$(a);const c=a.$$={fragment:null,ctx:[],props:i,update:_,not_equal:l,bound:Qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:Qa(),dirty:n,skip_bound:!1,root:e.target||v.$$.root};o&&o(c.root);let f=!1;if(c.ctx=t?t(a,e.props||{},(p,I,...w)=>{const y=w.length?w[0]:I;return c.ctx&&l(c.ctx[p],c.ctx[p]=y)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](y),f&&Ce(a,p)),I}):[],c.update(),f=!0,fa(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const p=he(e.target);c.fragment&&c.fragment.l(p),p.forEach(L)}else c.fragment&&c.fragment.c();e.intro&&k(a.$$.fragment),q(a,e.target,e.anchor),le()}$(v)}class A{constructor(){wa(this,"$$");wa(this,"$$set")}$destroy(){B(this,1),this.$destroy=_}$on(e,t){if(!se(t))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);const Ee="/11deMarzo/assets/trenII-DaZpweGS.png",je="/11deMarzo/assets/prueba-BPfI_YNn.mp4",Q=[];function Te(a,e=_){let t;const s=new Set;function l(n){if(T(a,n)&&(a=n,t)){const v=!Q.length;for(const c of s)c[1](),Q.push(c,a);if(v){for(let c=0;c<Q.length;c+=2)Q[c][0](Q[c+1]);Q.length=0}}}function i(n){l(n(a))}function o(n,v=_){const c=[n,v];return s.add(c),s.size===1&&(t=e(l,i)||_),n(a),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:l,update:i,subscribe:o}}function ae(a){return Object.prototype.toString.call(a)==="[object Date]"}function ke(a){const e=a-1;return e*e*e+1}function Ea(a,e){if(a===e||a!==a)return()=>a;const t=typeof a;if(t!==typeof e||Array.isArray(a)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(a)){const s=e.map((l,i)=>Ea(a[i],l));return l=>s.map(i=>i(l))}if(t==="object"){if(!a||!e)throw new Error("Object cannot be null");if(ae(a)&&ae(e)){a=a.getTime(),e=e.getTime();const i=e-a;return o=>new Date(a+o*i)}const s=Object.keys(e),l={};return s.forEach(i=>{l[i]=Ea(a[i],e[i])}),i=>{const o={};return s.forEach(n=>{o[n]=l[n](i)}),o}}if(t==="number"){const s=e-a;return l=>a+l*s}throw new Error(`Cannot interpolate ${t} values`)}function ee(a,e={}){const t=Te(a);let s,l=a;function i(o,n){if(a==null)return t.set(a=o),Promise.resolve();l=o;let v=s,c=!1,{delay:f=0,duration:p=400,easing:I=te,interpolate:w=Ea}=Za(Za({},e),n);if(p===0)return v&&(v.abort(),v=null),t.set(a=l),Promise.resolve();const y=pe()+f;let x;return s=ue(M=>{if(M<y)return!0;c||(x=w(a,o),typeof p=="function"&&(p=p(a,o)),c=!0),v&&(v.abort(),v=null);const g=M-y;return g>p?(t.set(a=o),!1):(t.set(a=x(I(g/p))),!0)}),s.promise}return{set:i,update:(o,n)=>i(o(l,a),n),subscribe:t.subscribe}}function qe(a){let e,t,s,l,i=Math.round(a[1])+"",o,n,v,c,f,p,I,w,y,x,M,g=Math.round(a[2])+"",C;return{c(){e=m("div"),t=m("div"),s=m("p"),l=m("span"),o=ha(i),v=b(),c=m("div"),f=m("p"),p=m("span"),I=ha(a[0]),w=b(),y=m("div"),x=m("p"),M=m("span"),C=ha(g),d(l,"class","svelte-1uhcm16"),d(s,"class",n=Ka(a[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),d(t,"class","lv_contPiece svelte-1uhcm16"),d(p,"class","svelte-1uhcm16"),d(f,"class","svelte-1uhcm16"),d(c,"class","lv_contPiece svelte-1uhcm16"),d(M,"class","svelte-1uhcm16"),d(x,"class","svelte-1uhcm16"),d(y,"class","lv_contPiece svelte-1uhcm16"),d(e,"class","lv_contP")},m(E,j){N(E,e,j),r(e,t),r(t,s),r(s,l),r(l,o),r(e,v),r(e,c),r(c,f),r(f,p),r(p,I),r(e,w),r(e,y),r(y,x),r(x,M),r(M,C)},p(E,[j]){j&2&&i!==(i=Math.round(E[1])+"")&&xa(o,i),j&2&&n!==(n=Ka(E[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&d(s,"class",n),j&1&&xa(I,E[0]),j&4&&g!==(g=Math.round(E[2])+"")&&xa(C,g)},i:_,o:_,d(E){E&&L(e)}}}function Be(a,e,t){let s,l,{lv_day:i=0}=e,{lv_month:o}=e,{lv_year:n}=e;const v=ee(i,{duration:1500,delay:0,easing:te});Wa(a,v,p=>t(1,s=p));const c=ee(n,{duration:1500,delay:0,easing:ke});Wa(a,c,p=>t(2,l=p));const f=function(){v.set(i),c.set(n)};return a.$$set=p=>{"lv_day"in p&&t(5,i=p.lv_day),"lv_month"in p&&t(0,o=p.lv_month),"lv_year"in p&&t(6,n=p.lv_year)},a.$$.update=()=>{a.$$.dirty&32&&f(),a.$$.dirty&64&&f()},[o,s,l,v,c,i,n]}class Le extends A{constructor(e){super(),U(this,e,Be,qe,T,{lv_day:5,lv_month:0,lv_year:6})}}class Ue extends A{constructor(e){super(),U(this,e,null,null,T,{})}}function Ae(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_Casablanca11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Oe extends A{constructor(e){super(),U(this,e,null,Ae,T,{})}}function Pe(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_BinLaden11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Ne extends A{constructor(e){super(),U(this,e,null,Pe,T,{})}}function De(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_CNI11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Ye extends A{constructor(e){super(),U(this,e,null,De,T,{})}}function Se(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_IrakEmboscada11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class ze extends A{constructor(e){super(),U(this,e,null,Se,T,{})}}function He(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_Convoy11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Ge extends A{constructor(e){super(),U(this,e,null,He,T,{})}}function Ve(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_UCIEvsUDYCO11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Je extends A{constructor(e){super(),U(this,e,null,Ve,T,{})}}function Fe(a){let e;return{c(){e=m("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,d(e,"id","g-20240225_BerrajTurquia11M-box"),d(e,"class","ai2html")},m(t,s){N(t,e,s)},p:_,i:_,o:_,d(t){t&&L(e)}}}class Re extends A{constructor(e){super(),U(this,e,null,Fe,T,{})}}function Ze(a){let e=!1,t=()=>{e=!1},s,l,i,o,n,v,c,f,p,I,w,y,x,M,g,C,E,j,ea,Y,ja,ta,Ta,ia,ka,u,sa,qa,S,Ba,ra,La,z,Ua,oa,Aa,H,Oa,na,Pa,G,Na,la,Da,V,Ya,da,Sa,J,za,ca,Ha,F,Ga,ma,Va,R,Ja,ga,Fa,ya,pa,Ma,Ra;return ba(a[5]),Y=new Le({props:{lv_day:a[1],lv_month:a[2],lv_year:a[3]}}),S=new Ue({}),z=new Oe({}),H=new Ne({}),G=new Ye({}),V=new ze({}),J=new Ge({}),F=new Je({}),R=new Re({}),{c(){l=m("main"),i=m("div"),o=m("div"),n=b(),v=m("div"),c=m("div"),f=m("div"),p=m("div"),p.innerHTML=`<img src="${Ee}" alt="tren 11-M" class="svelte-7jr6gh"/>`,I=b(),w=m("div"),y=m("div"),y.innerHTML="",x=b(),M=m("div"),M.innerHTML='<div class="lv_Titular lv_tit svelte-7jr6gh"><h1 class="svelte-7jr6gh">11-M: las señales que España no vio</h1></div> <div class="lv_Subti lv_tit svelte-7jr6gh"><h3 class="svelte-7jr6gh">Cómo se gestó el atentado más mortífero de Europa</h3></div> <div class="lv_Author lv_tit svelte-7jr6gh"><p class="lv_auth svelte-7jr6gh">Por Ignacio Orovio, Clara Penín, Laura Aragó y Begoña M. Goitia</p></div> <div class="lv_titExtra lv_tit svelte-7jr6gh"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',g=b(),C=m("div"),E=m("div"),j=m("div"),ea=m("div"),P(Y.$$.fragment),ja=b(),ta=m("div"),Ta=b(),ia=m("div"),ia.innerHTML=`<div class="lv_videoWrapper svelte-7jr6gh"><video loop="" muted="" autoplay="" class="svelte-7jr6gh"><source src="${je}" type="video/mp4"/></video></div>`,ka=b(),u=m("div"),sa=m("div"),sa.innerHTML='<p class="lv_Par svelte-7jr6gh">11 de marzo de 2004. En tres minutos, a partir de las 7.37 de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.</p> <p class="lv_Par svelte-7jr6gh">De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.</p> <p class="lv_Par svelte-7jr6gh">El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los de Estados Unidos.</p> <p class="lv_Par svelte-7jr6gh">Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.</p> <p id="io_sect1" class="lv_Par io_bird svelte-7jr6gh">El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias Abu Dadah [ciudadano sirio y líder de la formación yihadista en España].</p> <p class="lv_Par svelte-7jr6gh">Algunos presuntos miembros de la célula logran huir. Entre ellas, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España sino que son el hilo que lleva al 11-M: Amer Azizi [ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m], Serhane ben Abdelmajid [el Tunecino, líder del 11-M], Said Berraj [también entrenado en Afganistán y miembro de la célula del 11-M] y Jamal Zougam [fue condenado como autor material de los atentados].</p>',qa=b(),P(S.$$.fragment),Ba=b(),ra=m("div"),ra.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-7jr6gh">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebraran fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-7jr6gh">El yihadista argelino Allekema Lamari [detenido en 1997, condenado por su radicalismo y miembro clave del 11-M] es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <p id="io_sect4" class="lv_Par io_bird svelte-7jr6gh">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-7jr6gh">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <p class="lv_Par svelte-7jr6gh">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación.</p> <p class="lv_Par svelte-7jr6gh">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <p class="lv_Par svelte-7jr6gh">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',La=b(),P(z.$$.fragment),Ua=b(),oa=m("div"),oa.innerHTML='<p class="lv_Par svelte-7jr6gh">Uno de los líderes del 11-m, Jamal Ahmidan [el Chino, narcotraficante y persona clave en la preparacion del 11m] sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-7jr6gh">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <p class="lv_Par svelte-7jr6gh">Osama Bin Laden emite un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario</p>',Aa=b(),P(H.$$.fragment),Oa=b(),na=m("div"),na.innerHTML='<p class="lv_Par svelte-7jr6gh">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con un ex minero asturiano y traficante de dinamita. Pactan enviar 60 kg de explosivo a Madrid.</p> <p class="lv_Par svelte-7jr6gh">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <p class="lv_Par svelte-7jr6gh">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>',Pa=b(),P(G.$$.fragment),Na=b(),la=m("div"),la.innerHTML='<p class="lv_Par svelte-7jr6gh">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',Da=b(),P(V.$$.fragment),Ya=b(),da=m("div"),da.innerHTML='<p class="lv_Par svelte-7jr6gh">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) informa que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <p class="lv_Par svelte-7jr6gh">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <p class="lv_Par svelte-7jr6gh">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <p class="lv_Par svelte-7jr6gh">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán.</p> <p class="lv_Par svelte-7jr6gh">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <p class="lv_Par svelte-7jr6gh">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <p class="lv_Par svelte-7jr6gh">La casa de Morata se habilita para albergar la dinamita. Crean un zulo impermeabilizado donde almacenar la dinamita.</p> <p class="lv_Par svelte-7jr6gh">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. [Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes]</p> <p class="lv_Par svelte-7jr6gh">Jamal Ahmidan, El Chino, y otros dos miembros de la célula viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita.</p> <p class="lv_Par svelte-7jr6gh">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>',Sa=b(),P(J.$$.fragment),za=b(),ca=m("div"),ca.innerHTML='<p class="lv_Par svelte-7jr6gh">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que es el que se utilizará como detonador de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <p class="lv_Par svelte-7jr6gh">El comando alquila un piso en la calle Martín Gaite de Leganés.</p> <p class="lv_Par svelte-7jr6gh">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-7jr6gh">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>',Ha=b(),P(F.$$.fragment),Ga=b(),ma=m("div"),ma.innerHTML='<p class="lv_Par svelte-7jr6gh">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',Va=b(),P(R.$$.fragment),Ja=b(),ga=m("div"),ga.innerHTML='<p class="lv_Par svelte-7jr6gh">Ese mismo día, a partir de las 2.24 de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando las bombas.</p> <p class="lv_Par svelte-7jr6gh">Hacia las 6.50 de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-7jr6gh">A partir de las 7 de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37 y las 7.39 de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p>',Fa=b(),ya=m("div"),d(o,"id","lv_preHeader"),d(p,"class","lv_obLayer lv_obLayer1 capaTren svelte-7jr6gh"),d(y,"class","lv_explWrapper svelte-7jr6gh"),va(y,"transform",`scale(${a[4]<0?0:a[4]})`),d(w,"class","lv_obLayer lv_obLayer2 capaExpl svelte-7jr6gh"),d(f,"class","lv_obWrapper svelte-7jr6gh"),d(c,"class","lv_Obertura svelte-7jr6gh"),d(M,"class","lv_titBlock svelte-7jr6gh"),va(M,"transform",`translate3d(0, ${a[0]*-.3}px, 0)`),d(v,"id","lv_Header"),d(ea,"class","lv_cont_fecha svelte-7jr6gh"),d(j,"class","lv_migCont"),d(E,"class","lv_Contador svelte-7jr6gh"),d(ta,"id","lv_Counter"),d(ta,"class","io_bird lv_fakeCounter"),d(ia,"class","lv_inVideo svelte-7jr6gh"),d(sa,"class","lv_Text svelte-7jr6gh"),d(ra,"class","lv_Text svelte-7jr6gh"),d(oa,"class","lv_Text svelte-7jr6gh"),d(na,"class","lv_Text svelte-7jr6gh"),d(la,"class","lv_Text svelte-7jr6gh"),d(da,"class","lv_Text svelte-7jr6gh"),d(ca,"class","lv_Text svelte-7jr6gh"),d(ma,"class","lv_Text svelte-7jr6gh"),d(ga,"class","lv_Text svelte-7jr6gh"),d(u,"class","lv_Text_block svelte-7jr6gh"),d(C,"id","lv_Content"),d(ya,"id","lv_Footer"),d(i,"class","lv_mainContainer svelte-7jr6gh")},m(h,D){N(h,l,D),r(l,i),r(i,o),r(i,n),r(i,v),r(v,c),r(c,f),r(f,p),r(f,I),r(f,w),r(w,y),r(v,x),r(v,M),r(i,g),r(i,C),r(C,E),r(E,j),r(j,ea),q(Y,ea,null),r(C,ja),r(C,ta),r(C,Ta),r(C,ia),r(C,ka),r(C,u),r(u,sa),r(u,qa),q(S,u,null),r(u,Ba),r(u,ra),r(u,La),q(z,u,null),r(u,Ua),r(u,oa),r(u,Aa),q(H,u,null),r(u,Oa),r(u,na),r(u,Pa),q(G,u,null),r(u,Na),r(u,la),r(u,Da),q(V,u,null),r(u,Ya),r(u,da),r(u,Sa),q(J,u,null),r(u,za),r(u,ca),r(u,Ha),q(F,u,null),r(u,Ga),r(u,ma),r(u,Va),q(R,u,null),r(u,Ja),r(u,ga),r(i,Fa),r(i,ya),pa=!0,Ma||(Ra=ve(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(t,100),a[5]()}),Ma=!0)},p(h,[D]){D&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[0]),s=setTimeout(t,100)),D&16&&va(y,"transform",`scale(${h[4]<0?0:h[4]})`),D&1&&va(M,"transform",`translate3d(0, ${h[0]*-.3}px, 0)`);const ua={};D&2&&(ua.lv_day=h[1]),D&4&&(ua.lv_month=h[2]),D&8&&(ua.lv_year=h[3]),Y.$set(ua)},i(h){pa||(k(Y.$$.fragment,h),k(S.$$.fragment,h),k(z.$$.fragment,h),k(H.$$.fragment,h),k(G.$$.fragment,h),k(V.$$.fragment,h),k(J.$$.fragment,h),k(F.$$.fragment,h),k(R.$$.fragment,h),pa=!0)},o(h){O(Y.$$.fragment,h),O(S.$$.fragment,h),O(z.$$.fragment,h),O(H.$$.fragment,h),O(G.$$.fragment,h),O(V.$$.fragment,h),O(J.$$.fragment,h),O(F.$$.fragment,h),O(R.$$.fragment,h),pa=!1},d(h){h&&L(l),B(Y),B(S),B(z),B(H),B(G),B(V),B(J),B(F),B(R),Ma=!1,Ra()}}}function Qe(a,e,t){let s;const l=new Date;let i=l.getDate(),o=l.toLocaleString("es-ES",{month:"short"}),n=l.getFullYear();be(v);function v(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const p={root:null,rootMargin:"0px 0px -30% 0px",threshold:.2};function I(x,M){x.forEach(g=>{g.isIntersecting&&(g.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),t(1,i=11),t(2,o="MAR"),t(3,n=2004)):g.target.id==="io_sect1"?(t(1,i=0),t(2,o="NOV"),t(3,n=2001)):g.target.id==="io_sect2"?(t(1,i=0),t(2,o="JUN"),t(3,n=2002)):g.target.id==="io_sect3"?(t(1,i=29),t(2,o="JUN"),t(3,n=2002)):g.target.id==="io_sect4"?(t(1,i=0),t(2,o="ENE"),t(3,n=2003)):g.target.id==="io_sect5"?(t(1,i=20),t(2,o="MAR"),t(3,n=2003)):g.target.id==="io_sect6"?(t(1,i=16),t(2,o="MAY"),t(3,n=2003)):g.target.id==="io_sect7"?(t(1,i=0),t(2,o="JUN"),t(3,n=2003)):g.target.id==="io_sect8"?(t(1,i=18),t(2,o="OCT"),t(3,n=2003)):g.target.id==="io_sect9"?(t(1,i=28),t(2,o="OCT"),t(3,n=2003)):g.target.id==="io_sect10"?(t(1,i=6),t(2,o="NOV"),t(3,n=2003)):g.target.id==="io_sect11"?(t(1,i=29),t(2,o="NOV"),t(3,n=2003)):g.target.id==="io_sect12"?(t(1,i=0),t(2,o="DIC"),t(3,n=2003)):g.target.id==="io_sect13"?(t(1,i=17),t(2,o="DIC"),t(3,n=2003)):g.target.id==="io_sect14"?(t(1,i=12),t(2,o="DIC"),t(3,n=2003)):g.target.id==="io_sect15"?(t(1,i=0),t(2,o="ENE"),t(3,n=2004)):g.target.id==="io_sect16"?(t(1,i=5),t(2,o="ENE"),t(3,n=2004)):g.target.id==="io_sect17"?(t(1,i=28),t(2,o="ENE"),t(3,n=2004)):g.target.id==="io_sect18"?(t(1,i=0),t(2,o="FEB"),t(3,n=2004)):g.target.id==="io_sect19"?(t(1,i=4),t(2,o="FEB"),t(3,n=2004)):g.target.id==="io_sect20"?(t(1,i=27),t(2,o="FEB"),t(3,n=2004)):g.target.id==="io_sect21"?(t(1,i=29),t(2,o="FEB"),t(3,n=2004)):g.target.id==="io_sect22"?(t(1,i=3),t(2,o="MAR"),t(3,n=2004)):g.target.id==="io_sect23"?(t(1,i=6),t(2,o="MAR"),t(3,n=2004)):g.target.id==="io_sect24"?(t(1,i=8),t(2,o="MAR"),t(3,n=2004)):g.target.id==="io_sect25"?(t(1,i=10),t(2,o="MAR"),t(3,n=2004)):g.target.id==="io_sect26"&&(t(1,i=11),t(2,o="MAR"),t(3,n=2004)))})}const w=new IntersectionObserver(I,p);document.querySelectorAll(".io_bird").forEach(x=>{w.observe(x)})}let c=0;function f(){t(0,c=window.pageYOffset)}return a.$$.update=()=>{a.$$.dirty&1&&t(4,s=1-c*.005)},[c,i,o,n,s,f]}class We extends A{constructor(e){super(),U(this,e,Qe,Ze,T,{})}}new We({target:document.getElementById("app")});
