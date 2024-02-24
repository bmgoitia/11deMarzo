var de=Object.defineProperty;var ce=(e,a,i)=>a in e?de(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var wa=(e,a,i)=>(ce(e,typeof a!="symbol"?a+"":a,i),i);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();function v(){}const ie=e=>e;function Za(e,a){for(const i in a)e[i]=a[i];return e}function te(e){return e()}function Qa(){return Object.create(null)}function ba(e){e.forEach(te)}function se(e){return typeof e=="function"}function j(e,a){return e!=e?a==a:e!==a||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}function pe(e,...a){if(e==null){for(const s of a)s(void 0);return v}const i=e.subscribe(...a);return i.unsubscribe?()=>i.unsubscribe():i}function Wa(e,a,i){e.$$.on_destroy.push(pe(a,i))}function Ka(e){return e??""}const oe=typeof window<"u";let ge=oe?()=>window.performance.now():()=>Date.now(),re=oe?e=>requestAnimationFrame(e):v;const K=new Set;function le(e){K.forEach(a=>{a.c(e)||(K.delete(a),a.f())}),K.size!==0&&re(le)}function ue(e){let a;return K.size===0&&re(le),{promise:new Promise(i=>{K.add(a={c:e,f:i})}),abort(){K.delete(a)}}}function o(e,a){e.appendChild(a)}function B(e,a,i){e.insertBefore(a,i||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function _a(e){return document.createTextNode(e)}function f(){return _a(" ")}function ve(e,a,i,s){return e.addEventListener(a,i,s),()=>e.removeEventListener(a,i,s)}function d(e,a,i){i==null?e.removeAttribute(a):e.getAttribute(a)!==i&&e.setAttribute(a,i)}function _e(e){return Array.from(e.childNodes)}function xa(e,a){a=""+a,e.data!==a&&(e.data=a)}function va(e,a,i,s){i==null?e.style.removeProperty(a):e.style.setProperty(a,i,s?"important":"")}let aa;function $(e){aa=e}function he(){if(!aa)throw new Error("Function called outside component initialization");return aa}function fe(e){he().$$.on_mount.push(e)}const W=[],Xa=[];let X=[];const $a=[],be=Promise.resolve();let Ia=!1;function ye(){Ia||(Ia=!0,be.then(ne))}function fa(e){X.push(e)}const Ca=new Set;let Z=0;function ne(){if(Z!==0)return;const e=aa;do{try{for(;Z<W.length;){const a=W[Z];Z++,$(a),Me(a.$$)}}catch(a){throw W.length=0,Z=0,a}for($(null),W.length=0,Z=0;Xa.length;)Xa.pop()();for(let a=0;a<X.length;a+=1){const i=X[a];Ca.has(i)||(Ca.add(i),i())}X.length=0}while(W.length);for(;$a.length;)$a.pop()();Ia=!1,Ca.clear(),$(e)}function Me(e){if(e.fragment!==null){e.update(),ba(e.before_update);const a=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,a),e.after_update.forEach(fa)}}function we(e){const a=[],i=[];X.forEach(s=>e.indexOf(s)===-1?a.push(s):i.push(s)),i.forEach(s=>s()),X=a}const ha=new Set;let xe;function k(e,a){e&&e.i&&(ha.delete(e),e.i(a))}function A(e,a,i,s){if(e&&e.o){if(ha.has(e))return;ha.add(e),xe.c.push(()=>{ha.delete(e),s&&(i&&e.d(1),s())}),e.o(a)}else s&&s()}function P(e){e&&e.c()}function T(e,a,i){const{fragment:s,after_update:n}=e.$$;s&&s.m(a,i),fa(()=>{const t=e.$$.on_mount.map(te).filter(se);e.$$.on_destroy?e.$$.on_destroy.push(...t):ba(t),e.$$.on_mount=[]}),n.forEach(fa)}function D(e,a){const i=e.$$;i.fragment!==null&&(we(i.after_update),ba(i.on_destroy),i.fragment&&i.fragment.d(a),i.on_destroy=i.fragment=null,i.ctx=[])}function Ce(e,a){e.$$.dirty[0]===-1&&(W.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[a/31|0]|=1<<a%31}function L(e,a,i,s,n,t,r=null,l=[-1]){const _=aa;$(e);const c=e.$$={fragment:null,ctx:[],props:t,update:v,not_equal:n,bound:Qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(_?_.$$.context:[])),callbacks:Qa(),dirty:l,skip_bound:!1,root:a.target||_.$$.root};r&&r(c.root);let b=!1;if(c.ctx=i?i(e,a.props||{},(g,I,...w)=>{const y=w.length?w[0]:I;return c.ctx&&n(c.ctx[g],c.ctx[g]=y)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](y),b&&Ce(e,g)),I}):[],c.update(),b=!0,ba(c.before_update),c.fragment=s?s(c.ctx):!1,a.target){if(a.hydrate){const g=_e(a.target);c.fragment&&c.fragment.l(g),g.forEach(O)}else c.fragment&&c.fragment.c();a.intro&&k(e.$$.fragment),T(e,a.target,a.anchor),ne()}$(_)}class U{constructor(){wa(this,"$$");wa(this,"$$set")}$destroy(){D(this,1),this.$destroy=v}$on(a,i){if(!se(i))return v;const s=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return s.push(i),()=>{const n=s.indexOf(i);n!==-1&&s.splice(n,1)}}$set(a){this.$$set&&!me(a)&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);const Ee="/11deMarzo/assets/trenII-DaZpweGS.png",qe="/11deMarzo/assets/prueba-BPfI_YNn.mp4",Q=[];function je(e,a=v){let i;const s=new Set;function n(l){if(j(e,l)&&(e=l,i)){const _=!Q.length;for(const c of s)c[1](),Q.push(c,e);if(_){for(let c=0;c<Q.length;c+=2)Q[c][0](Q[c+1]);Q.length=0}}}function t(l){n(l(e))}function r(l,_=v){const c=[l,_];return s.add(c),s.size===1&&(i=a(n,t)||v),l(e),()=>{s.delete(c),s.size===0&&i&&(i(),i=null)}}return{set:n,update:t,subscribe:r}}function ae(e){return Object.prototype.toString.call(e)==="[object Date]"}function Oe(e){const a=e-1;return a*a*a+1}function Ea(e,a){if(e===a||e!==e)return()=>e;const i=typeof e;if(i!==typeof a||Array.isArray(e)!==Array.isArray(a))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=a.map((n,t)=>Ea(e[t],n));return n=>s.map(t=>t(n))}if(i==="object"){if(!e||!a)throw new Error("Object cannot be null");if(ae(e)&&ae(a)){e=e.getTime(),a=a.getTime();const t=a-e;return r=>new Date(e+r*t)}const s=Object.keys(a),n={};return s.forEach(t=>{n[t]=Ea(e[t],a[t])}),t=>{const r={};return s.forEach(l=>{r[l]=n[l](t)}),r}}if(i==="number"){const s=a-e;return n=>e+n*s}throw new Error(`Cannot interpolate ${i} values`)}function ee(e,a={}){const i=je(e);let s,n=e;function t(r,l){if(e==null)return i.set(e=r),Promise.resolve();n=r;let _=s,c=!1,{delay:b=0,duration:g=400,easing:I=ie,interpolate:w=Ea}=Za(Za({},a),l);if(g===0)return _&&(_.abort(),_=null),i.set(e=n),Promise.resolve();const y=ge()+b;let x;return s=ue(M=>{if(M<y)return!0;c||(x=w(e,r),typeof g=="function"&&(g=g(e,r)),c=!0),_&&(_.abort(),_=null);const p=M-y;return p>g?(i.set(e=r),!1):(i.set(e=x(I(p/g))),!0)}),s.promise}return{set:t,update:(r,l)=>t(r(n,e),l),subscribe:i.subscribe}}function ke(e){let a,i,s,n,t=Math.round(e[1])+"",r,l,_,c,b,g,I,w,y,x,M,p=Math.round(e[2])+"",C;return{c(){a=m("div"),i=m("div"),s=m("p"),n=m("span"),r=_a(t),_=f(),c=m("div"),b=m("p"),g=m("span"),I=_a(e[0]),w=f(),y=m("div"),x=m("p"),M=m("span"),C=_a(p),d(n,"class","svelte-1uhcm16"),d(s,"class",l=Ka(e[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),d(i,"class","lv_contPiece svelte-1uhcm16"),d(g,"class","svelte-1uhcm16"),d(b,"class","svelte-1uhcm16"),d(c,"class","lv_contPiece svelte-1uhcm16"),d(M,"class","svelte-1uhcm16"),d(x,"class","svelte-1uhcm16"),d(y,"class","lv_contPiece svelte-1uhcm16"),d(a,"class","lv_contP")},m(E,q){B(E,a,q),o(a,i),o(i,s),o(s,n),o(n,r),o(a,_),o(a,c),o(c,b),o(b,g),o(g,I),o(a,w),o(a,y),o(y,x),o(x,M),o(M,C)},p(E,[q]){q&2&&t!==(t=Math.round(E[1])+"")&&xa(r,t),q&2&&l!==(l=Ka(E[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&d(s,"class",l),q&1&&xa(I,E[0]),q&4&&p!==(p=Math.round(E[2])+"")&&xa(C,p)},i:v,o:v,d(E){E&&O(a)}}}function Te(e,a,i){let s,n,{lv_day:t=0}=a,{lv_month:r}=a,{lv_year:l}=a;const _=ee(t,{duration:1500,delay:0,easing:ie});Wa(e,_,g=>i(1,s=g));const c=ee(l,{duration:1500,delay:0,easing:Oe});Wa(e,c,g=>i(2,n=g));const b=function(){_.set(t),c.set(l)};return e.$$set=g=>{"lv_day"in g&&i(5,t=g.lv_day),"lv_month"in g&&i(0,r=g.lv_month),"lv_year"in g&&i(6,l=g.lv_year)},e.$$.update=()=>{e.$$.dirty&32&&b(),e.$$.dirty&64&&b()},[r,s,n,_,c,t,l]}class De extends U{constructor(a){super(),L(this,a,Te,ke,j,{lv_day:5,lv_month:0,lv_year:6})}}function Be(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_OperacionDatil11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Le extends U{constructor(a){super(),L(this,a,null,Be,j,{})}}function Ue(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_Casablanca11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Ae extends U{constructor(a){super(),L(this,a,null,Ue,j,{})}}function Pe(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_BinLaden11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Ne extends U{constructor(a){super(),L(this,a,null,Pe,j,{})}}function Ye(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_CNI11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Se extends U{constructor(a){super(),L(this,a,null,Ye,j,{})}}function ze(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_IrakEmboscada11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class He extends U{constructor(a){super(),L(this,a,null,ze,j,{})}}function Ge(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_Convoy11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Ve extends U{constructor(a){super(),L(this,a,null,Ge,j,{})}}function Je(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_UCIEvsUDYCO11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Fe extends U{constructor(a){super(),L(this,a,null,Je,j,{})}}function Re(e){let a;return{c(){a=m("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,d(a,"id","g-20240225_BerrajTurquia11M-box"),d(a,"class","ai2html")},m(i,s){B(i,a,s)},p:v,i:v,o:v,d(i){i&&O(a)}}}class Ze extends U{constructor(a){super(),L(this,a,null,Re,j,{})}}function Qe(e){let a=!1,i=()=>{a=!1},s,n,t,r,l,_,c,b,g,I,w,y,x,M,p,C,E,q,ea,Y,qa,ia,ja,ta,Oa,u,sa,ka,S,Ta,oa,Da,z,Ba,ra,La,H,Ua,la,Aa,G,Pa,na,Na,V,Ya,da,Sa,J,za,ca,Ha,F,Ga,ma,Va,R,Ja,pa,Fa,ya,ga,Ma,Ra;return fa(e[5]),Y=new De({props:{lv_day:e[1],lv_month:e[2],lv_year:e[3]}}),S=new Le({}),z=new Ae({}),H=new Ne({}),G=new Se({}),V=new He({}),J=new Ve({}),F=new Fe({}),R=new Ze({}),{c(){n=m("main"),t=m("div"),r=m("div"),l=f(),_=m("div"),c=m("div"),b=m("div"),g=m("div"),g.innerHTML=`<img src="${Ee}" alt="tren 11-M" class="svelte-145qrfl"/>`,I=f(),w=m("div"),y=m("div"),y.innerHTML="",x=f(),M=m("div"),M.innerHTML='<div class="lv_Titular lv_tit svelte-145qrfl"><h1 class="svelte-145qrfl">11-M: las señales que España no vio</h1></div> <div class="lv_Subti lv_tit svelte-145qrfl"><h3 class="svelte-145qrfl">Cómo se gestó el atentado más mortífero de Europa</h3></div> <div class="lv_Author lv_tit svelte-145qrfl"><p class="lv_auth svelte-145qrfl">Por Ignacio Orovio, Clara Penín, Laura Aragó y Begoña M. Goitia</p></div> <div class="lv_titExtra lv_tit svelte-145qrfl"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',p=f(),C=m("div"),E=m("div"),q=m("div"),ea=m("div"),P(Y.$$.fragment),qa=f(),ia=m("div"),ja=f(),ta=m("div"),ta.innerHTML=`<div class="lv_videoWrapper svelte-145qrfl"><video class="lv_videoItem svelte-145qrfl" preload="auto" muted="" autoplay="" loop="" playsinline=""><source src="${qe}" type="video/mp4"/></video></div>`,Oa=f(),u=m("div"),sa=m("div"),sa.innerHTML='<p class="lv_Par svelte-145qrfl">11 de marzo de 2004. En tres minutos, a partir de las 7.37 de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.</p> <p class="lv_Par svelte-145qrfl">De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.</p> <p class="lv_Par svelte-145qrfl">El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los de Estados Unidos.</p> <p class="lv_Par svelte-145qrfl">Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.</p> <p id="io_sect1" class="lv_Par io_bird svelte-145qrfl">El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias <span class="lv_Highlight">Abu Dadah, ciudadano sirio y líder de la formación yihadista en España</span>.</p> <p class="lv_Par svelte-145qrfl">Algunos presuntos miembros de la célula logran huir. Entre ellas, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España sino que son el hilo que lleva al 11-M: Amer Azizi [ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m], Serhane ben Abdelmajid [el Tunecino, líder del 11-M], Said Berraj [también entrenado en Afganistán y miembro de la célula del 11-M] y Jamal Zougam [fue condenado como autor material de los atentados].</p>',ka=f(),P(S.$$.fragment),Ta=f(),oa=m("div"),oa.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-145qrfl">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebraran fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-145qrfl">El yihadista argelino Allekema Lamari [detenido en 1997, condenado por su radicalismo y miembro clave del 11-M] es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <p id="io_sect4" class="lv_Par io_bird svelte-145qrfl">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-145qrfl">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <p class="lv_Par svelte-145qrfl">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación.</p> <p class="lv_Par svelte-145qrfl">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <p class="lv_Par svelte-145qrfl">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',Da=f(),P(z.$$.fragment),Ba=f(),ra=m("div"),ra.innerHTML='<p class="lv_Par svelte-145qrfl">Uno de los líderes del 11-m, Jamal Ahmidan [el Chino, narcotraficante y persona clave en la preparacion del 11m] sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-145qrfl">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <p class="lv_Par svelte-145qrfl">Osama Bin Laden emite un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario</p>',La=f(),P(H.$$.fragment),Ua=f(),la=m("div"),la.innerHTML='<p class="lv_Par svelte-145qrfl">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con un ex minero asturiano y traficante de dinamita. Pactan enviar 60 kg de explosivo a Madrid.</p> <p class="lv_Par svelte-145qrfl">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <p class="lv_Par svelte-145qrfl">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>',Aa=f(),P(G.$$.fragment),Pa=f(),na=m("div"),na.innerHTML='<p class="lv_Par svelte-145qrfl">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',Na=f(),P(V.$$.fragment),Ya=f(),da=m("div"),da.innerHTML='<p class="lv_Par svelte-145qrfl">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) informa que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <p class="lv_Par svelte-145qrfl">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <p class="lv_Par svelte-145qrfl">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <p class="lv_Par svelte-145qrfl">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán.</p> <p class="lv_Par svelte-145qrfl">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <p class="lv_Par svelte-145qrfl">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <p class="lv_Par svelte-145qrfl">La casa de Morata se habilita para albergar la dinamita. Crean un zulo impermeabilizado donde almacenar la dinamita.</p> <p class="lv_Par svelte-145qrfl">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. [Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes]</p> <p class="lv_Par svelte-145qrfl">Jamal Ahmidan, El Chino, y otros dos miembros de la célula viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita.</p> <p class="lv_Par svelte-145qrfl">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>',Sa=f(),P(J.$$.fragment),za=f(),ca=m("div"),ca.innerHTML='<p class="lv_Par svelte-145qrfl">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que es el que se utilizará como detonador de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <p class="lv_Par svelte-145qrfl">El comando alquila un piso en la calle Martín Gaite de Leganés.</p> <p class="lv_Par svelte-145qrfl">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-145qrfl">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>',Ha=f(),P(F.$$.fragment),Ga=f(),ma=m("div"),ma.innerHTML='<p class="lv_Par svelte-145qrfl">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',Va=f(),P(R.$$.fragment),Ja=f(),pa=m("div"),pa.innerHTML='<p class="lv_Par svelte-145qrfl">Ese mismo día, a partir de las 2.24 de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando las bombas.</p> <p class="lv_Par svelte-145qrfl">Hacia las 6.50 de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-145qrfl">A partir de las 7 de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37 y las 7.39 de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p>',Fa=f(),ya=m("div"),d(r,"id","lv_preHeader"),d(g,"class","lv_obLayer lv_obLayer1 capaTren svelte-145qrfl"),d(y,"class","lv_explWrapper svelte-145qrfl"),va(y,"transform",`scale(${e[4]<0?0:e[4]})`),d(w,"class","lv_obLayer lv_obLayer2 capaExpl svelte-145qrfl"),d(b,"class","lv_obWrapper svelte-145qrfl"),d(c,"class","lv_Obertura svelte-145qrfl"),d(M,"class","lv_titBlock svelte-145qrfl"),va(M,"transform",`translate3d(0, ${e[0]*-.3}px, 0)`),d(_,"id","lv_Header"),d(ea,"class","lv_cont_fecha svelte-145qrfl"),d(q,"class","lv_migCont"),d(E,"class","lv_Contador svelte-145qrfl"),d(ia,"id","lv_Counter"),d(ia,"class","io_bird lv_fakeCounter"),d(ta,"class","lv_inVideo svelte-145qrfl"),d(sa,"class","lv_Text svelte-145qrfl"),d(oa,"class","lv_Text svelte-145qrfl"),d(ra,"class","lv_Text svelte-145qrfl"),d(la,"class","lv_Text svelte-145qrfl"),d(na,"class","lv_Text svelte-145qrfl"),d(da,"class","lv_Text svelte-145qrfl"),d(ca,"class","lv_Text svelte-145qrfl"),d(ma,"class","lv_Text svelte-145qrfl"),d(pa,"class","lv_Text svelte-145qrfl"),d(u,"class","lv_Text_block svelte-145qrfl"),d(C,"id","lv_Content"),d(ya,"id","lv_Footer"),d(t,"class","lv_mainContainer svelte-145qrfl")},m(h,N){B(h,n,N),o(n,t),o(t,r),o(t,l),o(t,_),o(_,c),o(c,b),o(b,g),o(b,I),o(b,w),o(w,y),o(_,x),o(_,M),o(t,p),o(t,C),o(C,E),o(E,q),o(q,ea),T(Y,ea,null),o(C,qa),o(C,ia),o(C,ja),o(C,ta),o(C,Oa),o(C,u),o(u,sa),o(u,ka),T(S,u,null),o(u,Ta),o(u,oa),o(u,Da),T(z,u,null),o(u,Ba),o(u,ra),o(u,La),T(H,u,null),o(u,Ua),o(u,la),o(u,Aa),T(G,u,null),o(u,Pa),o(u,na),o(u,Na),T(V,u,null),o(u,Ya),o(u,da),o(u,Sa),T(J,u,null),o(u,za),o(u,ca),o(u,Ha),T(F,u,null),o(u,Ga),o(u,ma),o(u,Va),T(R,u,null),o(u,Ja),o(u,pa),o(t,Fa),o(t,ya),ga=!0,Ma||(Ra=ve(window,"scroll",()=>{a=!0,clearTimeout(s),s=setTimeout(i,100),e[5]()}),Ma=!0)},p(h,[N]){N&1&&!a&&(a=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[0]),s=setTimeout(i,100)),N&16&&va(y,"transform",`scale(${h[4]<0?0:h[4]})`),N&1&&va(M,"transform",`translate3d(0, ${h[0]*-.3}px, 0)`);const ua={};N&2&&(ua.lv_day=h[1]),N&4&&(ua.lv_month=h[2]),N&8&&(ua.lv_year=h[3]),Y.$set(ua)},i(h){ga||(k(Y.$$.fragment,h),k(S.$$.fragment,h),k(z.$$.fragment,h),k(H.$$.fragment,h),k(G.$$.fragment,h),k(V.$$.fragment,h),k(J.$$.fragment,h),k(F.$$.fragment,h),k(R.$$.fragment,h),ga=!0)},o(h){A(Y.$$.fragment,h),A(S.$$.fragment,h),A(z.$$.fragment,h),A(H.$$.fragment,h),A(G.$$.fragment,h),A(V.$$.fragment,h),A(J.$$.fragment,h),A(F.$$.fragment,h),A(R.$$.fragment,h),ga=!1},d(h){h&&O(n),D(Y),D(S),D(z),D(H),D(G),D(V),D(J),D(F),D(R),Ma=!1,Ra()}}}function We(e,a,i){let s;const n=new Date;let t=n.getDate(),r=n.toLocaleString("es-ES",{month:"short"}),l=n.getFullYear();fe(_);function _(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const g={root:null,rootMargin:"0px 0px -30% 0px",threshold:.2};function I(x,M){x.forEach(p=>{p.isIntersecting&&(p.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),i(1,t=11),i(2,r="MAR"),i(3,l=2004)):p.target.id==="io_sect1"?(i(1,t=0),i(2,r="NOV"),i(3,l=2001),p.target.querySelector(".lv_Highlight").classList.add("prova")):p.target.id==="io_sect2"?(i(1,t=0),i(2,r="JUN"),i(3,l=2002)):p.target.id==="io_sect3"?(i(1,t=29),i(2,r="JUN"),i(3,l=2002)):p.target.id==="io_sect4"?(i(1,t=0),i(2,r="ENE"),i(3,l=2003)):p.target.id==="io_sect5"?(i(1,t=20),i(2,r="MAR"),i(3,l=2003)):p.target.id==="io_sect6"?(i(1,t=16),i(2,r="MAY"),i(3,l=2003)):p.target.id==="io_sect7"?(i(1,t=0),i(2,r="JUN"),i(3,l=2003)):p.target.id==="io_sect8"?(i(1,t=18),i(2,r="OCT"),i(3,l=2003)):p.target.id==="io_sect9"?(i(1,t=28),i(2,r="OCT"),i(3,l=2003)):p.target.id==="io_sect10"?(i(1,t=6),i(2,r="NOV"),i(3,l=2003)):p.target.id==="io_sect11"?(i(1,t=29),i(2,r="NOV"),i(3,l=2003)):p.target.id==="io_sect12"?(i(1,t=0),i(2,r="DIC"),i(3,l=2003)):p.target.id==="io_sect13"?(i(1,t=17),i(2,r="DIC"),i(3,l=2003)):p.target.id==="io_sect14"?(i(1,t=12),i(2,r="DIC"),i(3,l=2003)):p.target.id==="io_sect15"?(i(1,t=0),i(2,r="ENE"),i(3,l=2004)):p.target.id==="io_sect16"?(i(1,t=5),i(2,r="ENE"),i(3,l=2004)):p.target.id==="io_sect17"?(i(1,t=28),i(2,r="ENE"),i(3,l=2004)):p.target.id==="io_sect18"?(i(1,t=0),i(2,r="FEB"),i(3,l=2004)):p.target.id==="io_sect19"?(i(1,t=4),i(2,r="FEB"),i(3,l=2004)):p.target.id==="io_sect20"?(i(1,t=27),i(2,r="FEB"),i(3,l=2004)):p.target.id==="io_sect21"?(i(1,t=29),i(2,r="FEB"),i(3,l=2004)):p.target.id==="io_sect22"?(i(1,t=3),i(2,r="MAR"),i(3,l=2004)):p.target.id==="io_sect23"?(i(1,t=6),i(2,r="MAR"),i(3,l=2004)):p.target.id==="io_sect24"?(i(1,t=8),i(2,r="MAR"),i(3,l=2004)):p.target.id==="io_sect25"?(i(1,t=10),i(2,r="MAR"),i(3,l=2004)):p.target.id==="io_sect26"&&(i(1,t=11),i(2,r="MAR"),i(3,l=2004)))})}const w=new IntersectionObserver(I,g);document.querySelectorAll(".io_bird").forEach(x=>{w.observe(x)})}let c=0;function b(){i(0,c=window.pageYOffset)}return e.$$.update=()=>{e.$$.dirty&1&&i(4,s=1-c*.005)},[c,t,r,l,s,b]}class Ke extends U{constructor(a){super(),L(this,a,We,Qe,j,{})}}new Ke({target:document.getElementById("app")});
