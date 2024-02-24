var le=Object.defineProperty;var de=(a,e,i)=>e in a?le(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var Ma=(a,e,i)=>(de(a,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(l){if(l.ep)return;l.ep=!0;const t=i(l);fetch(l.href,t)}})();function u(){}const ee=a=>a;function Ja(a,e){for(const i in e)a[i]=e[i];return a}function ie(a){return a()}function Qa(){return Object.create(null)}function ia(a){a.forEach(ie)}function te(a){return typeof a=="function"}function q(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}function ce(a){return Object.keys(a).length===0}function me(a,...e){if(a==null){for(const s of e)s(void 0);return u}const i=a.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Ra(a,e,i){a.$$.on_destroy.push(me(e,i))}function Za(a){return a??""}const se=typeof window<"u";let ge=se?()=>window.performance.now():()=>Date.now(),oe=se?a=>requestAnimationFrame(a):u;const K=new Set;function re(a){K.forEach(e=>{e.c(a)||(K.delete(e),e.f())}),K.size!==0&&oe(re)}function pe(a){let e;return K.size===0&&oe(re),{promise:new Promise(i=>{K.add(e={c:a,f:i})}),abort(){K.delete(e)}}}function o(a,e){a.appendChild(e)}function L(a,e,i){a.insertBefore(e,i||null)}function T(a){a.parentNode&&a.parentNode.removeChild(a)}function g(a){return document.createElement(a)}function ha(a){return document.createTextNode(a)}function b(){return ha(" ")}function Wa(a,e,i,s){return a.addEventListener(e,i,s),()=>a.removeEventListener(e,i,s)}function c(a,e,i){i==null?a.removeAttribute(e):a.getAttribute(e)!==i&&a.setAttribute(e,i)}function ve(a){return Array.from(a.childNodes)}function wa(a,e){e=""+e,a.data!==e&&(a.data=e)}function _a(a,e,i,s){i==null?a.style.removeProperty(e):a.style.setProperty(e,i,s?"important":"")}let aa;function $(a){aa=a}function ue(){if(!aa)throw new Error("Function called outside component initialization");return aa}function _e(a){ue().$$.on_mount.push(a)}const W=[],Ka=[];let X=[];const Xa=[],he=Promise.resolve();let Ca=!1;function be(){Ca||(Ca=!0,he.then(ne))}function ea(a){X.push(a)}const xa=new Set;let R=0;function ne(){if(R!==0)return;const a=aa;do{try{for(;R<W.length;){const e=W[R];R++,$(e),fe(e.$$)}}catch(e){throw W.length=0,R=0,e}for($(null),W.length=0,R=0;Ka.length;)Ka.pop()();for(let e=0;e<X.length;e+=1){const i=X[e];xa.has(i)||(xa.add(i),i())}X.length=0}while(W.length);for(;Xa.length;)Xa.pop()();Ca=!1,xa.clear(),$(a)}function fe(a){if(a.fragment!==null){a.update(),ia(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(ea)}}function ye(a){const e=[],i=[];X.forEach(s=>a.indexOf(s)===-1?e.push(s):i.push(s)),i.forEach(s=>s()),X=e}const ba=new Set;let Me;function O(a,e){a&&a.i&&(ba.delete(a),a.i(e))}function A(a,e,i,s){if(a&&a.o){if(ba.has(a))return;ba.add(a),Me.c.push(()=>{ba.delete(a),s&&(i&&a.d(1),s())}),a.o(e)}else s&&s()}function P(a){a&&a.c()}function k(a,e,i){const{fragment:s,after_update:l}=a.$$;s&&s.m(e,i),ea(()=>{const t=a.$$.on_mount.map(ie).filter(te);a.$$.on_destroy?a.$$.on_destroy.push(...t):ia(t),a.$$.on_mount=[]}),l.forEach(ea)}function D(a,e){const i=a.$$;i.fragment!==null&&(ye(i.after_update),ia(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function we(a,e){a.$$.dirty[0]===-1&&(W.push(a),be(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function B(a,e,i,s,l,t,r=null,n=[-1]){const _=aa;$(a);const m=a.$$={fragment:null,ctx:[],props:t,update:u,not_equal:l,bound:Qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:Qa(),dirty:n,skip_bound:!1,root:e.target||_.$$.root};r&&r(m.root);let f=!1;if(m.ctx=i?i(a,e.props||{},(p,I,...C)=>{const y=C.length?C[0]:I;return m.ctx&&l(m.ctx[p],m.ctx[p]=y)&&(!m.skip_bound&&m.bound[p]&&m.bound[p](y),f&&we(a,p)),I}):[],m.update(),f=!0,ia(m.before_update),m.fragment=s?s(m.ctx):!1,e.target){if(e.hydrate){const p=ve(e.target);m.fragment&&m.fragment.l(p),p.forEach(T)}else m.fragment&&m.fragment.c();e.intro&&O(a.$$.fragment),k(a,e.target,e.anchor),ne()}$(_)}class U{constructor(){Ma(this,"$$");Ma(this,"$$set")}$destroy(){D(this,1),this.$destroy=u}$on(e,i){if(!te(i))return u;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(i),()=>{const l=s.indexOf(i);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);const Ce="/11deMarzo/assets/trenII-DaZpweGS.png",Ie="/11deMarzo/assets/video_11m-chW1etDk.mp4",Ee="/11deMarzo/assets/11_Mposter-BS1avwby.png",Z=[];function je(a,e=u){let i;const s=new Set;function l(n){if(q(a,n)&&(a=n,i)){const _=!Z.length;for(const m of s)m[1](),Z.push(m,a);if(_){for(let m=0;m<Z.length;m+=2)Z[m][0](Z[m+1]);Z.length=0}}}function t(n){l(n(a))}function r(n,_=u){const m=[n,_];return s.add(m),s.size===1&&(i=e(l,t)||u),n(a),()=>{s.delete(m),s.size===0&&i&&(i(),i=null)}}return{set:l,update:t,subscribe:r}}function $a(a){return Object.prototype.toString.call(a)==="[object Date]"}function qe(a){const e=a-1;return e*e*e+1}function Ia(a,e){if(a===e||a!==a)return()=>a;const i=typeof a;if(i!==typeof e||Array.isArray(a)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(a)){const s=e.map((l,t)=>Ia(a[t],l));return l=>s.map(t=>t(l))}if(i==="object"){if(!a||!e)throw new Error("Object cannot be null");if($a(a)&&$a(e)){a=a.getTime(),e=e.getTime();const t=e-a;return r=>new Date(a+r*t)}const s=Object.keys(e),l={};return s.forEach(t=>{l[t]=Ia(a[t],e[t])}),t=>{const r={};return s.forEach(n=>{r[n]=l[n](t)}),r}}if(i==="number"){const s=e-a;return l=>a+l*s}throw new Error(`Cannot interpolate ${i} values`)}function ae(a,e={}){const i=je(a);let s,l=a;function t(r,n){if(a==null)return i.set(a=r),Promise.resolve();l=r;let _=s,m=!1,{delay:f=0,duration:p=400,easing:I=ee,interpolate:C=Ia}=Ja(Ja({},e),n);if(p===0)return _&&(_.abort(),_=null),i.set(a=l),Promise.resolve();const y=ge()+f;let j;return s=pe(M=>{if(M<y)return!0;m||(j=C(a,r),typeof p=="function"&&(p=p(a,r)),m=!0),_&&(_.abort(),_=null);const x=M-y;return x>p?(i.set(a=r),!1):(i.set(a=j(I(x/p))),!0)}),s.promise}return{set:t,update:(r,n)=>t(r(l,a),n),subscribe:i.subscribe}}function Te(a){let e,i,s,l,t=Math.round(a[1])+"",r,n,_,m,f,p,I,C,y,j,M,x=Math.round(a[2])+"",E;return{c(){e=g("div"),i=g("div"),s=g("p"),l=g("span"),r=ha(t),_=b(),m=g("div"),f=g("p"),p=g("span"),I=ha(a[0]),C=b(),y=g("div"),j=g("p"),M=g("span"),E=ha(x),c(l,"class","svelte-1uhcm16"),c(s,"class",n=Za(a[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),c(i,"class","lv_contPiece svelte-1uhcm16"),c(p,"class","svelte-1uhcm16"),c(f,"class","svelte-1uhcm16"),c(m,"class","lv_contPiece svelte-1uhcm16"),c(M,"class","svelte-1uhcm16"),c(j,"class","svelte-1uhcm16"),c(y,"class","lv_contPiece svelte-1uhcm16"),c(e,"class","lv_contP")},m(w,d){L(w,e,d),o(e,i),o(i,s),o(s,l),o(l,r),o(e,_),o(e,m),o(m,f),o(f,p),o(p,I),o(e,C),o(e,y),o(y,j),o(j,M),o(M,E)},p(w,[d]){d&2&&t!==(t=Math.round(w[1])+"")&&wa(r,t),d&2&&n!==(n=Za(w[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&c(s,"class",n),d&1&&wa(I,w[0]),d&4&&x!==(x=Math.round(w[2])+"")&&wa(E,x)},i:u,o:u,d(w){w&&T(e)}}}function Oe(a,e,i){let s,l,{lv_day:t=0}=e,{lv_month:r}=e,{lv_year:n}=e;const _=ae(t,{duration:1500,delay:0,easing:ee});Ra(a,_,p=>i(1,s=p));const m=ae(n,{duration:1500,delay:0,easing:qe});Ra(a,m,p=>i(2,l=p));const f=function(){_.set(t),m.set(n)};return a.$$set=p=>{"lv_day"in p&&i(5,t=p.lv_day),"lv_month"in p&&i(0,r=p.lv_month),"lv_year"in p&&i(6,n=p.lv_year)},a.$$.update=()=>{a.$$.dirty&32&&f(),a.$$.dirty&64&&f()},[r,s,l,_,m,t,n]}class ke extends U{constructor(e){super(),B(this,e,Oe,Te,q,{lv_day:5,lv_month:0,lv_year:6})}}function De(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-box .g-artboard {
			margin:0 auto;
		}
		#g-20240225_OperacionDatil11M-box .g-artboard p {
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
				#g-20240225_OperacionDatil11M-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20240225_OperacionDatil11M-escritorio1200,
		#g-20240225_OperacionDatil11M-escritorio,
		#g-20240225_OperacionDatil11M-tableta,
		#g-20240225_OperacionDatil11M-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20240225_OperacionDatil11M-movil{
				display: none;
			}
			#g-20240225_OperacionDatil11M-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20240225_OperacionDatil11M-movil{
				display: none;
			}
			#g-20240225_OperacionDatil11M-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20240225_OperacionDatil11M-movil2{
				display: none;
			}
			#g-20240225_OperacionDatil11M-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20240225_OperacionDatil11M-tableta{
				display: none;
			}
			#g-20240225_OperacionDatil11M-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20240225_OperacionDatil11M-escritorio{
				display: none;
			}
			#g-20240225_OperacionDatil11M-escritorio1200{
				display:block;	
			}
			#g-20240225_OperacionDatil11M-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20240225_OperacionDatil11M-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-movil.jpg"/></div> <div id="g-20240225_OperacionDatil11M-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-movil2.jpg"/></div> <div id="g-20240225_OperacionDatil11M-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-tableta.jpg"/></div> <div id="g-20240225_OperacionDatil11M-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-escritorio.jpg"/></div> <div id="g-20240225_OperacionDatil11M-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_OperacionDatil11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Le extends U{constructor(e){super(),B(this,e,null,De,q,{})}}function Be(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_Casablanca11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Ue extends U{constructor(e){super(),B(this,e,null,Be,q,{})}}function Ae(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_BinLaden11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Pe extends U{constructor(e){super(),B(this,e,null,Ae,q,{})}}function Ne(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_CNI11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Se extends U{constructor(e){super(),B(this,e,null,Ne,q,{})}}function ze(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_IrakEmboscada11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Ye extends U{constructor(e){super(),B(this,e,null,ze,q,{})}}function He(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_Convoy11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Ve extends U{constructor(e){super(),B(this,e,null,He,q,{})}}function Fe(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_UCIEvsUDYCO11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Ge extends U{constructor(e){super(),B(this,e,null,Fe,q,{})}}function Je(a){let e;return{c(){e=g("div"),e.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,c(e,"id","g-20240225_BerrajTurquia11M-box"),c(e,"class","ai2html")},m(i,s){L(i,e,s)},p:u,i:u,o:u,d(i){i&&T(e)}}}class Qe extends U{constructor(e){super(),B(this,e,null,Je,q,{})}}const Re="/11deMarzo/assets/Lamari-bDmCLclC.png",Ze="/11deMarzo/assets/Morata-C2xgQsOD.png",We="/11deMarzo/assets/Trium-DSnyAbpp.png",Ke="/11deMarzo/assets/Postit-yVBm9QuQ.png";function Xe(a){let e=!1,i=()=>{e=!1},s,l,t,r,n,_,m,f,p,I,C,y,j,M,x,E,w,d,ta,S,Ea,sa,ja,v,oa,qa,z,Ta,ra,Oa,Y,ka,na,Da,H,La,la,Ba,V,Ua,da,Aa,F,Pa,ca,Na,G,Sa,ma,za,J,Ya,ga,Ha,Q,Va,pa,Fa,fa,va,ya,Ga;return ea(a[6]),ea(a[7]),S=new ke({props:{lv_day:a[1],lv_month:a[2],lv_year:a[3]}}),z=new Le({}),Y=new Ue({}),H=new Pe({}),V=new Se({}),F=new Ye({}),G=new Ve({}),J=new Ge({}),Q=new Qe({}),{c(){l=g("main"),t=g("div"),r=g("div"),n=b(),_=g("div"),m=g("div"),f=g("div"),p=g("div"),p.innerHTML=`<img src="${Ce}" alt="tren 11-M" class="svelte-8v0org"/>`,I=b(),C=g("div"),y=g("div"),y.innerHTML="",j=b(),M=g("div"),M.innerHTML='<div class="lv_Titular lv_tit svelte-8v0org"><h1 class="svelte-8v0org">La docena de señales del 11-M que España no supo ver</h1></div> <div class="lv_Subti lv_tit svelte-8v0org"><h3 class="svelte-8v0org">Así se gestó la mayor matanza terrorista en suelo europeo</h3></div> <div class="lv_Author lv_tit svelte-8v0org"><p class="lv_auth svelte-8v0org">Por Laura Aragó, Begoña M. Goitia, Clara Penín e Ignacio Orovio</p></div> <div class="lv_titExtra lv_tit svelte-8v0org"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',x=b(),E=g("div"),w=g("div"),d=g("div"),ta=g("div"),P(S.$$.fragment),Ea=b(),sa=g("div"),ja=b(),v=g("div"),oa=g("div"),oa.innerHTML=`<p class="lv_Par svelte-8v0org">11 de marzo de 2004. En tres minutos, a partir de las 7.37 de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.</p> <div class="lv_inVideo svelte-8v0org"><div class="lv_videoWrapper svelte-8v0org"><video class="lv_videoItem svelte-8v0org" preload="auto" muted="" autoplay="" loop="" playsinline="" poster="${Ee}"><source src="${Ie}" type="video/mp4"/></video></div></div> <p class="lv_Par svelte-8v0org">De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.</p> <p class="lv_Par svelte-8v0org">El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los de Estados Unidos.</p> <p class="lv_Par svelte-8v0org">Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.</p> <p id="io_sect1" class="lv_Par io_bird svelte-8v0org">El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias <span>Abu Dadah, ciudadano sirio y líder de la formación yihadista en España</span>.</p> <p class="lv_Par svelte-8v0org">Algunos presuntos miembros de la célula logran huir. Entre ellos, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España, sino que son el hilo que lleva al 11-M: <span id="subr2" class="io_bird">Amer Azizi, ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m; Serhane ben Abdelmajid (&#39;El Tunecino&#39;), líder del 11-M; Said Berraj también entrenado en Afganistán y miembro de la célula del 11-M y Jamal Zougam, que fue condenado como autor material de los atentados.</span></p>`,qa=b(),P(z.$$.fragment),Ta=b(),ra=g("div"),ra.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-8v0org">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebraran fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-8v0org">El yihadista argelino <span>Allekema Lamari, detenido en 1997, condenado por su radicalismo y miembro clave del 11-M,</span>  es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <hr class="svelte-8v0org"/> <p id="io_sect4" class="lv_Par io_bird svelte-8v0org">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-8v0org">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <hr class="svelte-8v0org"/> <p id="io_sect5" class="lv_Par io_bird svelte-8v0org">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación, argumentada por la supuesta posesión de armas de destrucción masiva por parte del régimen iraquí. El pacto entre EE.UU., Reino Unido y España se gesta en un encuentro en las islas portuguesas de las Azores, donde sus tres máximos dirigentes se hicieron una histórica fotografía.</p> <p class="lv_Par svelte-8v0org">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <hr class="svelte-8v0org"/> <p id="io_sect6" class="lv_Par io_bird svelte-8v0org">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',Oa=b(),P(Y.$$.fragment),ka=b(),na=g("div"),na.innerHTML='<p id="io_sect7" class="lv_Par io_bird svelte-8v0org">Uno de los líderes del 11-m, <span>Jamal Ahmidan (&#39;El Chino&#39;), narcotraficante y persona clave en la preparacion del 11m</span> sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-8v0org">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <hr class="svelte-8v0org"/> <p id="io_sect8" class="lv_Par io_bird svelte-8v0org">El líder de Al Qaeda Osama Bin Laden emite desde Afganistán un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario, que alerta a los servicios de inteligencia.</p>',Da=b(),P(H.$$.fragment),La=b(),la=g("div"),la.innerHTML=`<p id="io_sect9" class="lv_Par io_bird svelte-8v0org">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con el ex minero asturiano y traficante de dinamita Emilio Suárez Trashorras. Pactan enviar 60 kg de explosivo a Madrid. En su defensa, Suárez Trashorras alegará que nunca pensó que fueran para atentar en España, sino en Marruecos, y para ser empleados en atracos a joyerías.</p> <hr class="svelte-8v0org"/> <p id="io_sect10" class="lv_Par io_bird svelte-8v0org">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <div class="lv_infoMini svelte-8v0org"><img src="${Re}" alt="" class="svelte-8v0org"/></div> <p class="lv_Par svelte-8v0org">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>`,Ba=b(),P(V.$$.fragment),Ua=b(),da=g("div"),da.innerHTML='<p id="io_sect11" class="lv_Par io_bird svelte-8v0org">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',Aa=b(),P(F.$$.fragment),Pa=b(),ca=g("div"),ca.innerHTML=`<p id="io_sect12" class="lv_Par io_bird svelte-8v0org">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) que coincidió en el pasado en una cárcel con el cuñado del minero Suárez Trashorras informa de que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <hr class="svelte-8v0org"/> <p id="io_sect13" class="lv_Par io_bird svelte-8v0org">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <div class="lv_infoMini svelte-8v0org"><img src="${Ke}" alt="" class="svelte-8v0org"/></div> <p id="io_sect14" class="lv_Par io_bird svelte-8v0org">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <hr class="svelte-8v0org"/> <p id="io_sect15" class="lv_Par io_bird svelte-8v0org">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán. Berraj había sido detenido previamente en Estambul en tránsito hacia aquel país, donde al parecer recibió instrucción militar. Este hombre respondía al alias de Said el Mensajero por un trabajo que tuvo en Madrid.</p> <hr class="svelte-8v0org"/> <p id="io_sect16" class="lv_Par io_bird svelte-8v0org">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <hr class="svelte-8v0org"/> <p id="io_sect17" class="lv_Par io_bird svelte-8v0org">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <hr class="svelte-8v0org"/> <p id="io_sect18" class="lv_Par io_bird svelte-8v0org">El comando habilita la casa de Morata de Tajuña para sus fines. Diversos miembros del comando construyen un zulo impermeabilizado donde almacenar la dinamita que va llegando desde Asturias. Aquí se guardan también los macutos en los que se colocarán las bombas.</p> <div class="lv_infoMini svelte-8v0org"><img src="${Ze}" alt="" class="svelte-8v0org"/></div> <hr class="svelte-8v0org"/> <p id="io_sect19" class="lv_Par io_bird svelte-8v0org">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. <span>Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes.</span></p> <hr class="svelte-8v0org"/> <p id="io_sect20" class="lv_Par io_bird svelte-8v0org">Jamal Ahmidan, El Chino, y otros dos miembros de la célula terrorista viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita, siguiendo las indicaciones de Suárez Trashorras. Hacen varios viajes.</p> <hr class="svelte-8v0org"/> <p id="io_sect21" class="lv_Par io_bird svelte-8v0org">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>`,Na=b(),P(G.$$.fragment),Sa=b(),ma=g("div"),ma.innerHTML=`<p id="io_sect22" class="lv_Par io_bird svelte-8v0org">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que es el que se utilizará como detonador de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <div class="lv_infoMini svelte-8v0org"><img src="${We}" alt="" class="svelte-8v0org"/></div> <p id="io_sect23" class="lv_Par io_bird svelte-8v0org">El comando alquila un piso en la calle Martín Gaite de Leganés, donde trasladará la dinamita desde Morata de Tajuña, y también las ametralladoras que adquieren. En este piso serán descubiertos los terroristas el 3 de abril gracias a un número de teléfono detectado en la antena telefónica de la zona.</p> <hr class="svelte-8v0org"/> <p id="io_sect24" class="lv_Par io_bird svelte-8v0org">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-8v0org">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>`,za=b(),P(J.$$.fragment),Ya=b(),ga=g("div"),ga.innerHTML='<p id="io_sect25" class="lv_Par io_bird svelte-8v0org">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',Ha=b(),P(Q.$$.fragment),Va=b(),pa=g("div"),pa.innerHTML='<p class="lv_Par svelte-8v0org">Ese mismo día, a partir de las 2.24 de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando las bombas.</p> <p id="io_sect26" class="lv_Par io_bird svelte-8v0org">Hacia las 6.50 de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-8v0org">A partir de las 7 de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37 y las 7.39 de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p> <hr class="svelte-8v0org"/> <p class="lv_Par lv_Sources svelte-8v0org">FUENTES: Elaboración propia, en base al sumario judicial, la sentencia del tribunal y el libro &#39;Pudo evitarse&#39;, de Fernando Reinares</p>',Fa=b(),fa=g("div"),c(r,"id","lv_preHeader"),c(p,"class","lv_obLayer lv_obLayer1 capaTren svelte-8v0org"),c(y,"class","lv_explWrapper svelte-8v0org"),_a(y,"transform",`scale(${a[5]<0?0:a[5]})`),c(C,"class","lv_obLayer lv_obLayer2 capaExpl svelte-8v0org"),c(f,"class","lv_obWrapper svelte-8v0org"),c(m,"class","lv_Obertura svelte-8v0org"),c(M,"class","lv_titBlock svelte-8v0org"),_a(M,"transform",`translate3d(0, ${a[0]*-.3}px, 0)`),c(_,"id","lv_Header"),c(ta,"class","lv_cont_fecha svelte-8v0org"),c(d,"class","lv_migCont"),c(w,"class","lv_Contador svelte-8v0org"),c(sa,"id","lv_Counter"),c(sa,"class","io_bird lv_fakeCounter"),c(oa,"class","lv_Text svelte-8v0org"),c(ra,"class","lv_Text svelte-8v0org"),c(na,"class","lv_Text svelte-8v0org"),c(la,"class","lv_Text svelte-8v0org"),c(da,"class","lv_Text svelte-8v0org"),c(ca,"class","lv_Text svelte-8v0org"),c(ma,"class","lv_Text svelte-8v0org"),c(ga,"class","lv_Text svelte-8v0org"),c(pa,"class","lv_Text svelte-8v0org"),c(v,"class","lv_Text_block svelte-8v0org"),c(E,"id","lv_Content"),c(fa,"id","lv_Footer"),c(t,"class","lv_mainContainer svelte-8v0org")},m(h,N){L(h,l,N),o(l,t),o(t,r),o(t,n),o(t,_),o(_,m),o(m,f),o(f,p),o(f,I),o(f,C),o(C,y),o(_,j),o(_,M),o(t,x),o(t,E),o(E,w),o(w,d),o(d,ta),k(S,ta,null),o(E,Ea),o(E,sa),o(E,ja),o(E,v),o(v,oa),o(v,qa),k(z,v,null),o(v,Ta),o(v,ra),o(v,Oa),k(Y,v,null),o(v,ka),o(v,na),o(v,Da),k(H,v,null),o(v,La),o(v,la),o(v,Ba),k(V,v,null),o(v,Ua),o(v,da),o(v,Aa),k(F,v,null),o(v,Pa),o(v,ca),o(v,Na),k(G,v,null),o(v,Sa),o(v,ma),o(v,za),k(J,v,null),o(v,Ya),o(v,ga),o(v,Ha),k(Q,v,null),o(v,Va),o(v,pa),o(t,Fa),o(t,fa),va=!0,ya||(Ga=[Wa(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(i,100),a[6]()}),Wa(window,"resize",a[7])],ya=!0)},p(h,[N]){N&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[0]),s=setTimeout(i,100)),N&32&&_a(y,"transform",`scale(${h[5]<0?0:h[5]})`),N&1&&_a(M,"transform",`translate3d(0, ${h[0]*-.3}px, 0)`);const ua={};N&2&&(ua.lv_day=h[1]),N&4&&(ua.lv_month=h[2]),N&8&&(ua.lv_year=h[3]),S.$set(ua)},i(h){va||(O(S.$$.fragment,h),O(z.$$.fragment,h),O(Y.$$.fragment,h),O(H.$$.fragment,h),O(V.$$.fragment,h),O(F.$$.fragment,h),O(G.$$.fragment,h),O(J.$$.fragment,h),O(Q.$$.fragment,h),va=!0)},o(h){A(S.$$.fragment,h),A(z.$$.fragment,h),A(Y.$$.fragment,h),A(H.$$.fragment,h),A(V.$$.fragment,h),A(F.$$.fragment,h),A(G.$$.fragment,h),A(J.$$.fragment,h),A(Q.$$.fragment,h),va=!1},d(h){h&&T(l),D(S),D(z),D(Y),D(H),D(V),D(F),D(G),D(J),D(Q),ya=!1,ia(Ga)}}}function $e(a,e,i){let s;const l=new Date;let t=l.getDate(),r=l.toLocaleString("es-ES",{month:"short"}),n=l.getFullYear();_e(_);function _(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const C={root:null,rootMargin:"0px 0px -40% 0px",threshold:.9};function y(x,E){let w=null;x.forEach(d=>{d.isIntersecting&&(d.target.classList.add("lv_pActive"),w=d.target.id)}),M.forEach(d=>{d.id!==w&&d.classList.remove("lv_pActive")}),x.forEach(d=>{d.isIntersecting&&(d.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),i(1,t=11),i(2,r="MAR"),i(3,n=2004)):d.target.id==="io_sect1"?(i(1,t=0),i(2,r="NOV"),i(3,n=2001),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="subr2"?d.target.classList.add("lv_Highlight","lv_Highlight_slow"):d.target.id==="io_sect2"?(i(1,t=0),i(2,r="JUN"),i(3,n=2002)):d.target.id==="io_sect3"?(i(1,t=29),i(2,r="JUN"),i(3,n=2002),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect4"?(i(1,t=0),i(2,r="ENE"),i(3,n=2003)):d.target.id==="io_sect5"?(i(1,t=20),i(2,r="MAR"),i(3,n=2003)):d.target.id==="io_sect6"?(i(1,t=16),i(2,r="MAY"),i(3,n=2003)):d.target.id==="io_sect7"?(i(1,t=0),i(2,r="JUN"),i(3,n=2003),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect8"?(i(1,t=18),i(2,r="OCT"),i(3,n=2003)):d.target.id==="io_sect9"?(i(1,t=28),i(2,r="OCT"),i(3,n=2003)):d.target.id==="io_sect10"?(i(1,t=6),i(2,r="NOV"),i(3,n=2003)):d.target.id==="io_sect11"?(i(1,t=29),i(2,r="NOV"),i(3,n=2003)):d.target.id==="io_sect12"?(i(1,t=0),i(2,r="DIC"),i(3,n=2003)):d.target.id==="io_sect13"?(i(1,t=17),i(2,r="DIC"),i(3,n=2003)):d.target.id==="io_sect14"?(i(1,t=12),i(2,r="DIC"),i(3,n=2003)):d.target.id==="io_sect15"?(i(1,t=0),i(2,r="ENE"),i(3,n=2004)):d.target.id==="io_sect16"?(i(1,t=5),i(2,r="ENE"),i(3,n=2004)):d.target.id==="io_sect17"?(i(1,t=28),i(2,r="ENE"),i(3,n=2004)):d.target.id==="io_sect18"?(i(1,t=0),i(2,r="FEB"),i(3,n=2004)):d.target.id==="io_sect19"?(i(1,t=4),i(2,r="FEB"),i(3,n=2004),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect20"?(i(1,t=27),i(2,r="FEB"),i(3,n=2004)):d.target.id==="io_sect21"?(i(1,t=29),i(2,r="FEB"),i(3,n=2004)):d.target.id==="io_sect22"?(i(1,t=3),i(2,r="MAR"),i(3,n=2004)):d.target.id==="io_sect23"?(i(1,t=6),i(2,r="MAR"),i(3,n=2004)):d.target.id==="io_sect24"?(i(1,t=8),i(2,r="MAR"),i(3,n=2004)):d.target.id==="io_sect25"?(i(1,t=10),i(2,r="MAR"),i(3,n=2004)):d.target.id==="io_sect26"&&(i(1,t=11),i(2,r="MAR"),i(3,n=2004)))})}const j=new IntersectionObserver(y,C),M=document.querySelectorAll(".io_bird");M.forEach(x=>{j.observe(x)})}let m=0,f;function p(){i(0,m=window.pageYOffset)}function I(){i(4,f=window.innerWidth)}return a.$$.update=()=>{a.$$.dirty&1&&i(5,s=1-m*.005)},[m,t,r,n,f,s,p,I]}class ai extends U{constructor(e){super(),B(this,e,$e,Xe,q,{})}}new ai({target:document.getElementById("app")});
