var Ee=Object.defineProperty;var je=(i,a,e)=>a in i?Ee(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e;var La=(i,a,e)=>(je(i,typeof a!="symbol"?a+"":a,e),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerPolicy&&(s.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?s.credentials="include":d.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(d){if(d.ep)return;d.ep=!0;const s=e(d);fetch(d.href,s)}})();function _(){}const be=i=>i;function de(i,a){for(const e in a)i[e]=a[e];return i}function fe(i){return i()}function ce(){return Object.create(null)}function ra(i){i.forEach(fe)}function ye(i){return typeof i=="function"}function L(i,a){return i!=i?a==a:i!==a||i&&typeof i=="object"||typeof i=="function"}function qe(i){return Object.keys(i).length===0}function Te(i,...a){if(i==null){for(const t of a)t(void 0);return _}const e=i.subscribe(...a);return e.unsubscribe?()=>e.unsubscribe():e}function me(i,a,e){i.$$.on_destroy.push(Te(a,e))}function ge(i){return i??""}const Me=typeof window<"u";let ke=Me?()=>window.performance.now():()=>Date.now(),we=Me?i=>requestAnimationFrame(i):_;const $=new Set;function xe(i){$.forEach(a=>{a.c(i)||($.delete(a),a.f())}),$.size!==0&&we(xe)}function Le(i){let a;return $.size===0&&we(xe),{promise:new Promise(e=>{$.add(a={c:i,f:e})}),abort(){$.delete(a)}}}function o(i,a){i.appendChild(a)}function k(i,a,e){i.insertBefore(a,e||null)}function q(i){i.parentNode&&i.parentNode.removeChild(i)}function c(i){return document.createElement(i)}function ja(i){return document.createTextNode(i)}function b(){return ja(" ")}function pe(i,a,e,t){return i.addEventListener(a,e,t),()=>i.removeEventListener(a,e,t)}function r(i,a,e){e==null?i.removeAttribute(a):i.getAttribute(a)!==e&&i.setAttribute(a,e)}function Oe(i){return Array.from(i.childNodes)}function Oa(i,a){a=""+a,i.data!==a&&(i.data=a)}function Ea(i,a,e,t){e==null?i.style.removeProperty(a):i.style.setProperty(a,e,t?"important":"")}let sa;function ta(i){sa=i}function De(){if(!sa)throw new Error("Function called outside component initialization");return sa}function Be(i){De().$$.on_mount.push(i)}const X=[],ve=[];let aa=[];const ue=[],Ue=Promise.resolve();let Ba=!1;function Ae(){Ba||(Ba=!0,Ue.then(Ce))}function oa(i){aa.push(i)}const Da=new Set;let W=0;function Ce(){if(W!==0)return;const i=sa;do{try{for(;W<X.length;){const a=X[W];W++,ta(a),Pe(a.$$)}}catch(a){throw X.length=0,W=0,a}for(ta(null),X.length=0,W=0;ve.length;)ve.pop()();for(let a=0;a<aa.length;a+=1){const e=aa[a];Da.has(e)||(Da.add(e),e())}aa.length=0}while(X.length);for(;ue.length;)ue.pop()();Ba=!1,Da.clear(),ta(i)}function Pe(i){if(i.fragment!==null){i.update(),ra(i.before_update);const a=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,a),i.after_update.forEach(oa)}}function Ne(i){const a=[],e=[];aa.forEach(t=>i.indexOf(t)===-1?a.push(t):e.push(t)),e.forEach(t=>t()),aa=a}const qa=new Set;let Se;function O(i,a){i&&i.i&&(qa.delete(i),i.i(a))}function N(i,a,e,t){if(i&&i.o){if(qa.has(i))return;qa.add(i),Se.c.push(()=>{qa.delete(i),t&&(e&&i.d(1),t())}),i.o(a)}else t&&t()}function S(i){i&&i.c()}function D(i,a,e){const{fragment:t,after_update:d}=i.$$;t&&t.m(a,e),oa(()=>{const s=i.$$.on_mount.map(fe).filter(ye);i.$$.on_destroy?i.$$.on_destroy.push(...s):ra(s),i.$$.on_mount=[]}),d.forEach(oa)}function B(i,a){const e=i.$$;e.fragment!==null&&(Ne(e.after_update),ra(e.on_destroy),e.fragment&&e.fragment.d(a),e.on_destroy=e.fragment=null,e.ctx=[])}function ze(i,a){i.$$.dirty[0]===-1&&(X.push(i),Ae(),i.$$.dirty.fill(0)),i.$$.dirty[a/31|0]|=1<<a%31}function U(i,a,e,t,d,s,l=null,n=[-1]){const h=sa;ta(i);const g=i.$$={fragment:null,ctx:[],props:s,update:_,not_equal:d,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(h?h.$$.context:[])),callbacks:ce(),dirty:n,skip_bound:!1,root:a.target||h.$$.root};l&&l(g.root);let f=!1;if(g.ctx=e?e(i,a.props||{},(p,E,...I)=>{const y=I.length?I[0]:E;return g.ctx&&d(g.ctx[p],g.ctx[p]=y)&&(!g.skip_bound&&g.bound[p]&&g.bound[p](y),f&&ze(i,p)),E}):[],g.update(),f=!0,ra(g.before_update),g.fragment=t?t(g.ctx):!1,a.target){if(a.hydrate){const p=Oe(a.target);g.fragment&&g.fragment.l(p),p.forEach(q)}else g.fragment&&g.fragment.c();a.intro&&O(i.$$.fragment),D(i,a.target,a.anchor),Ce()}ta(h)}class A{constructor(){La(this,"$$");La(this,"$$set")}$destroy(){B(this,1),this.$destroy=_}$on(a,e){if(!ye(e))return _;const t=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return t.push(e),()=>{const d=t.indexOf(e);d!==-1&&t.splice(d,1)}}$set(a){this.$$set&&!qe(a)&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);const He="/11deMarzo/assets/trenII-DaZpweGS.png",Fe="/11deMarzo/assets/video_11m-chW1etDk.mp4",Ge="/11deMarzo/assets/video_11m_peq-4vj1giap.mp4",Ie="/11deMarzo/assets/11_Mposter-BS1avwby.png",K=[];function Ve(i,a=_){let e;const t=new Set;function d(n){if(L(i,n)&&(i=n,e)){const h=!K.length;for(const g of t)g[1](),K.push(g,i);if(h){for(let g=0;g<K.length;g+=2)K[g][0](K[g+1]);K.length=0}}}function s(n){d(n(i))}function l(n,h=_){const g=[n,h];return t.add(g),t.size===1&&(e=a(d,s)||_),n(i),()=>{t.delete(g),t.size===0&&e&&(e(),e=null)}}return{set:d,update:s,subscribe:l}}function _e(i){return Object.prototype.toString.call(i)==="[object Date]"}function Re(i){const a=i-1;return a*a*a+1}function Ua(i,a){if(i===a||i!==i)return()=>i;const e=typeof i;if(e!==typeof a||Array.isArray(i)!==Array.isArray(a))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const t=a.map((d,s)=>Ua(i[s],d));return d=>t.map(s=>s(d))}if(e==="object"){if(!i||!a)throw new Error("Object cannot be null");if(_e(i)&&_e(a)){i=i.getTime(),a=a.getTime();const s=a-i;return l=>new Date(i+l*s)}const t=Object.keys(a),d={};return t.forEach(s=>{d[s]=Ua(i[s],a[s])}),s=>{const l={};return t.forEach(n=>{l[n]=d[n](s)}),l}}if(e==="number"){const t=a-i;return d=>i+d*t}throw new Error(`Cannot interpolate ${e} values`)}function he(i,a={}){const e=Ve(i);let t,d=i;function s(l,n){if(i==null)return e.set(i=l),Promise.resolve();d=l;let h=t,g=!1,{delay:f=0,duration:p=400,easing:E=be,interpolate:I=Ua}=de(de({},a),n);if(p===0)return h&&(h.abort(),h=null),e.set(i=d),Promise.resolve();const y=ke()+f;let T;return t=Le(M=>{if(M<y)return!0;g||(T=I(i,l),typeof p=="function"&&(p=p(i,l)),g=!0),h&&(h.abort(),h=null);const C=M-y;return C>p?(e.set(i=l),!1):(e.set(i=T(E(C/p))),!0)}),t.promise}return{set:s,update:(l,n)=>s(l(d,i),n),subscribe:e.subscribe}}function Je(i){let a,e,t,d,s=Math.round(i[1])+"",l,n,h,g,f,p,E,I,y,T,M,C=Math.round(i[2])+"",j;return{c(){a=c("div"),e=c("div"),t=c("p"),d=c("span"),l=ja(s),h=b(),g=c("div"),f=c("p"),p=c("span"),E=ja(i[0]),I=b(),y=c("div"),T=c("p"),M=c("span"),j=ja(C),r(d,"class","svelte-1uhcm16"),r(t,"class",n=ge(i[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),r(e,"class","lv_contPiece svelte-1uhcm16"),r(p,"class","svelte-1uhcm16"),r(f,"class","svelte-1uhcm16"),r(g,"class","lv_contPiece svelte-1uhcm16"),r(M,"class","svelte-1uhcm16"),r(T,"class","svelte-1uhcm16"),r(y,"class","lv_contPiece svelte-1uhcm16"),r(a,"class","lv_contP")},m(w,m){k(w,a,m),o(a,e),o(e,t),o(t,d),o(d,l),o(a,h),o(a,g),o(g,f),o(f,p),o(p,E),o(a,I),o(a,y),o(y,T),o(T,M),o(M,j)},p(w,[m]){m&2&&s!==(s=Math.round(w[1])+"")&&Oa(l,s),m&2&&n!==(n=ge(w[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&r(t,"class",n),m&1&&Oa(E,w[0]),m&4&&C!==(C=Math.round(w[2])+"")&&Oa(j,C)},i:_,o:_,d(w){w&&q(a)}}}function Qe(i,a,e){let t,d,{lv_day:s=0}=a,{lv_month:l}=a,{lv_year:n}=a;const h=he(s,{duration:1500,delay:0,easing:be});me(i,h,p=>e(1,t=p));const g=he(n,{duration:1500,delay:0,easing:Re});me(i,g,p=>e(2,d=p));const f=function(){h.set(s),g.set(n)};return i.$$set=p=>{"lv_day"in p&&e(5,s=p.lv_day),"lv_month"in p&&e(0,l=p.lv_month),"lv_year"in p&&e(6,n=p.lv_year)},i.$$.update=()=>{i.$$.dirty&32&&f(),i.$$.dirty&64&&f()},[l,t,d,h,g,s,n]}class Ze extends A{constructor(a){super(),U(this,a,Qe,Je,L,{lv_day:5,lv_month:0,lv_year:6})}}function We(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_OperacionDatil11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class Ke extends A{constructor(a){super(),U(this,a,null,We,L,{})}}function Xe(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_Casablanca11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class $e extends A{constructor(a){super(),U(this,a,null,Xe,L,{})}}function ai(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_BinLaden11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class ei extends A{constructor(a){super(),U(this,a,null,ai,L,{})}}function ii(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_CNI11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class ti extends A{constructor(a){super(),U(this,a,null,ii,L,{})}}function si(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_IrakEmboscada11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class oi extends A{constructor(a){super(),U(this,a,null,si,L,{})}}function ri(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_Convoy11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class li extends A{constructor(a){super(),U(this,a,null,ri,L,{})}}function ni(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_UCIEvsUDYCO11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class di extends A{constructor(a){super(),U(this,a,null,ni,L,{})}}function ci(i){let a;return{c(){a=c("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,r(a,"id","g-20240225_BerrajTurquia11M-box"),r(a,"class","ai2html")},m(e,t){k(e,a,t)},p:_,i:_,o:_,d(e){e&&q(a)}}}class mi extends A{constructor(a){super(),U(this,a,null,ci,L,{})}}const gi="/11deMarzo/assets/Lamari-bDmCLclC.png",pi="/11deMarzo/assets/Morata2-BglbUrrS.png",vi="/11deMarzo/assets/Trium-DSnyAbpp.png",ui="/11deMarzo/assets/Postit-yVBm9QuQ.png",_i="/11deMarzo/assets/Bolsa-naGRl-QF.png",hi="/11deMarzo/assets/Conchita-BZxhDFKX.png";function bi(i){let a;return{c(){a=c("video"),a.innerHTML=`<source src="${Fe}" type="video/mp4"/>`,r(a,"class","lv_videoItem svelte-8v0org"),r(a,"preload","auto"),a.muted=!0,a.autoplay=!0,a.loop=!0,a.playsInline=!0,r(a,"poster",Ie)},m(e,t){k(e,a,t)},d(e){e&&q(a)}}}function fi(i){let a;return{c(){a=c("video"),a.innerHTML=`<source src="${Ge}" type="video/mp4"/>`,r(a,"class","lv_videoItem svelte-8v0org"),r(a,"preload","auto"),a.muted=!0,a.autoplay=!0,a.loop=!0,a.playsInline=!0,r(a,"poster",Ie)},m(e,t){k(e,a,t)},d(e){e&&q(a)}}}function yi(i){let a=!1,e=()=>{a=!1},t,d,s,l,n,h,g,f,p,E,I,y,T,M,C,j,w,m,la,Y,Aa,na,Pa,v,x,da,Na,ca,ea,Sa,ma,za,ga,Ya,pa,Ha,ia,Fa,va,Ga,H,Va,ua,Ra,F,Ja,_a,Qa,G,Za,ha,Wa,V,Ka,ba,Xa,R,$a,fa,ae,J,ee,ya,ie,Q,te,Ma,se,Z,oe,wa,re,Ta,xa,ka,le;oa(i[6]),oa(i[7]),Y=new Ze({props:{lv_day:i[1],lv_month:i[2],lv_year:i[3]}});function ne(u,P){return u[4]<650?fi:bi}let Ca=ne(i),z=Ca(i);return H=new Ke({}),F=new $e({}),G=new ei({}),V=new ti({}),R=new oi({}),J=new li({}),Q=new di({}),Z=new mi({}),{c(){d=c("main"),s=c("div"),l=c("div"),n=b(),h=c("div"),g=c("div"),f=c("div"),p=c("div"),p.innerHTML=`<img src="${He}" alt="tren 11-M" class="svelte-8v0org"/>`,E=b(),I=c("div"),y=c("div"),y.innerHTML="",T=b(),M=c("div"),M.innerHTML='<div class="lv_Titular lv_tit svelte-8v0org"><h1 class="svelte-8v0org">La docena de señales del 11-M que España no supo ver</h1></div> <div class="lv_Subti lv_tit svelte-8v0org"><h3 class="svelte-8v0org">Así se gestó la mayor matanza terrorista en suelo europeo</h3></div> <div class="lv_Author lv_tit svelte-8v0org"><p class="lv_auth svelte-8v0org">Por Laura Aragó, Begoña M. Goitia, Clara Penín e Ignacio Orovio</p></div> <div class="lv_titExtra lv_tit svelte-8v0org"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',C=b(),j=c("div"),w=c("div"),m=c("div"),la=c("div"),S(Y.$$.fragment),Aa=b(),na=c("div"),Pa=b(),v=c("div"),x=c("div"),da=c("p"),da.textContent="11 de marzo de 2004. En tres minutos, a partir de las 7.37h de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.",Na=b(),ca=c("div"),ea=c("div"),z.c(),Sa=b(),ma=c("p"),ma.textContent="De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.",za=b(),ga=c("p"),ga.textContent="El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido la de Estados Unidos.",Ya=b(),pa=c("p"),pa.textContent="Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.",Ha=b(),ia=c("p"),ia.innerHTML="El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias <span>Abu Dadah, ciudadano sirio y líder de la formación yihadista en España</span>.",Fa=b(),va=c("p"),va.innerHTML='Algunos presuntos miembros de la célula logran huir. Entre ellos, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España, sino que son el hilo que lleva al 11-M: <span id="subr2" class="io_bird">Amer Azizi, ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m; Serhane ben Abdelmajid (&#39;El Tunecino&#39;), líder del 11-M; Said Berraj también entrenado en Afganistán y miembro de la célula del 11-M y Jamal Zougam, que fue condenado como autor material de los atentados.</span>',Ga=b(),S(H.$$.fragment),Va=b(),ua=c("div"),ua.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-8v0org">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebrarán fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-8v0org">El yihadista argelino <span>Allekema Lamari, detenido en 1997, condenado por su radicalismo y miembro clave del 11-M,</span>  es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <hr class="svelte-8v0org"/> <p id="io_sect4" class="lv_Par io_bird svelte-8v0org">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-8v0org">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <hr class="svelte-8v0org"/> <p id="io_sect5" class="lv_Par io_bird svelte-8v0org">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación, argumentada por la supuesta posesión de armas de destrucción masiva por parte del régimen iraquí. El pacto entre EE.UU., Reino Unido y España se gesta en un encuentro en las islas portuguesas de las Azores, donde sus tres máximos dirigentes se hicieron una histórica fotografía.</p> <p class="lv_Par svelte-8v0org">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <hr class="svelte-8v0org"/> <p id="io_sect6" class="lv_Par io_bird svelte-8v0org">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',Ra=b(),S(F.$$.fragment),Ja=b(),_a=c("div"),_a.innerHTML='<p id="io_sect7" class="lv_Par io_bird svelte-8v0org">Uno de los líderes del 11-m, <span>Jamal Ahmidan (&#39;El Chino&#39;), narcotraficante y persona clave en la preparacion del 11m</span> sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-8v0org">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <hr class="svelte-8v0org"/> <p id="io_sect8" class="lv_Par io_bird svelte-8v0org">El líder de Al Qaeda Osama Bin Laden emite desde Afganistán un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario. El discurso alerta a los servicios de inteligencia.</p>',Qa=b(),S(G.$$.fragment),Za=b(),ha=c("div"),ha.innerHTML=`<p id="io_sect9" class="lv_Par io_bird svelte-8v0org">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con el ex minero asturiano y traficante de dinamita Emilio Suárez Trashorras. Pactan enviar 60 kg de explosivo a Madrid. En su defensa, Suárez Trashorras alegará que nunca pensó que fueran para atentar en España, sino en Marruecos, y para ser empleados en atracos a joyerías.</p> <hr class="svelte-8v0org"/> <p id="io_sect10" class="lv_Par io_bird svelte-8v0org">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <div class="lv_infoMini svelte-8v0org"><img src="${gi}" alt="" class="svelte-8v0org"/></div> <p class="lv_Par svelte-8v0org">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>`,Wa=b(),S(V.$$.fragment),Ka=b(),ba=c("div"),ba.innerHTML='<p id="io_sect11" class="lv_Par io_bird svelte-8v0org">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',Xa=b(),S(R.$$.fragment),$a=b(),fa=c("div"),fa.innerHTML=`<p id="io_sect12" class="lv_Par io_bird svelte-8v0org">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) que coincidió en el pasado en una cárcel con el cuñado del minero Suárez Trashorras informa de que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <hr class="svelte-8v0org"/> <p id="io_sect14" class="lv_Par io_bird svelte-8v0org">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <hr class="svelte-8v0org"/> <p id="io_sect13" class="lv_Par io_bird svelte-8v0org">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <div class="lv_infoMini svelte-8v0org"><img src="${ui}" alt="" class="svelte-8v0org"/></div> <p id="io_sect15" class="lv_Par io_bird svelte-8v0org">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán. Berraj había sido detenido previamente en Estambul en tránsito hacia aquel país, donde al parecer recibió instrucción militar. Este hombre respondía al alias de Said el Mensajero por un trabajo que tuvo en Madrid.</p> <hr class="svelte-8v0org"/> <p id="io_sect16" class="lv_Par io_bird svelte-8v0org">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <div class="lv_infoMini svelte-8v0org"><img src="${_i}" alt="" class="svelte-8v0org"/></div> <p id="io_sect17" class="lv_Par io_bird svelte-8v0org">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <hr class="svelte-8v0org"/> <p id="io_sect18" class="lv_Par io_bird svelte-8v0org">El comando habilita la casa de Morata de Tajuña para sus fines. Diversos miembros del comando construyen un zulo impermeabilizado donde almacenar la dinamita que va llegando desde Asturias. Aquí se guardan también los macutos en los que se colocarán las bombas.</p> <div class="lv_infoMini svelte-8v0org"><img src="${pi}" alt="" class="svelte-8v0org"/></div> <hr class="svelte-8v0org"/> <p id="io_sect19" class="lv_Par io_bird svelte-8v0org">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. <span>Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes.</span></p> <hr class="svelte-8v0org"/> <p id="io_sect20" class="lv_Par io_bird svelte-8v0org">Jamal Ahmidan, El Chino, y otros dos miembros de la célula terrorista viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita, siguiendo las indicaciones de Suárez Trashorras. Hacen varios viajes.</p> <div class="lv_infoMini svelte-8v0org"><img src="${hi}" alt="" class="svelte-8v0org"/></div> <p id="io_sect21" class="lv_Par io_bird svelte-8v0org">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>`,ae=b(),S(J.$$.fragment),ee=b(),ya=c("div"),ya.innerHTML=`<p id="io_sect22" class="lv_Par io_bird svelte-8v0org">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que son los que se utilizarán como detonadores de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <div class="lv_infoMini svelte-8v0org"><img src="${vi}" alt="" class="svelte-8v0org"/></div> <p id="io_sect23" class="lv_Par io_bird svelte-8v0org">El comando alquila un piso en la calle Martín Gaite de Leganés, donde trasladará la dinamita desde Morata de Tajuña, y también las ametralladoras que adquieren. En este piso serán descubiertos los terroristas el 3 de abril gracias a un número de teléfono detectado en la antena telefónica de la zona.</p> <hr class="svelte-8v0org"/> <p id="io_sect24" class="lv_Par io_bird svelte-8v0org">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-8v0org">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>`,ie=b(),S(Q.$$.fragment),te=b(),Ma=c("div"),Ma.innerHTML='<p id="io_sect25" class="lv_Par io_bird svelte-8v0org">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',se=b(),S(Z.$$.fragment),oe=b(),wa=c("div"),wa.innerHTML='<p class="lv_Par svelte-8v0org">Ese mismo día, a partir de las 2.24h de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando los artefactos.</p> <p id="io_sect26" class="lv_Par io_bird svelte-8v0org">Hacia las 6.50h de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-8v0org">A partir de las 7h de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37h y las 7.39h de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p> <hr class="svelte-8v0org"/> <p class="lv_Par lv_Sources svelte-8v0org">FUENTES: Elaboración propia, en base al sumario judicial, la sentencia del tribunal y el libro &#39;Pudo evitarse&#39;, de Fernando Reinares.</p>',re=b(),Ta=c("div"),r(l,"id","lv_preHeader"),r(p,"class","lv_obLayer lv_obLayer1 capaTren svelte-8v0org"),r(y,"class","lv_explWrapper svelte-8v0org"),Ea(y,"transform",`scale(${i[5]<0?0:i[5]})`),r(I,"class","lv_obLayer lv_obLayer2 capaExpl svelte-8v0org"),r(f,"class","lv_obWrapper svelte-8v0org"),r(g,"class","lv_Obertura svelte-8v0org"),r(M,"class","lv_titBlock svelte-8v0org"),Ea(M,"transform",`translate3d(0, ${i[0]*-.3}px, 0)`),r(h,"id","lv_Header"),r(la,"class","lv_cont_fecha svelte-8v0org"),r(m,"class","lv_migCont"),r(w,"class","lv_Contador svelte-8v0org"),r(na,"id","lv_Counter"),r(na,"class","io_bird lv_fakeCounter"),r(da,"class","lv_Par svelte-8v0org"),r(ea,"class","lv_videoWrapper svelte-8v0org"),r(ca,"class","lv_inVideo svelte-8v0org"),r(ma,"class","lv_Par svelte-8v0org"),r(ga,"class","lv_Par svelte-8v0org"),r(pa,"class","lv_Par svelte-8v0org"),r(ia,"id","io_sect1"),r(ia,"class","lv_Par io_bird svelte-8v0org"),r(va,"class","lv_Par svelte-8v0org"),r(x,"class","lv_Text svelte-8v0org"),r(ua,"class","lv_Text svelte-8v0org"),r(_a,"class","lv_Text svelte-8v0org"),r(ha,"class","lv_Text svelte-8v0org"),r(ba,"class","lv_Text svelte-8v0org"),r(fa,"class","lv_Text svelte-8v0org"),r(ya,"class","lv_Text svelte-8v0org"),r(Ma,"class","lv_Text svelte-8v0org"),r(wa,"class","lv_Text svelte-8v0org"),r(v,"class","lv_Text_block svelte-8v0org"),r(j,"id","lv_Content"),r(Ta,"id","lv_Footer"),r(s,"class","lv_mainContainer svelte-8v0org")},m(u,P){k(u,d,P),o(d,s),o(s,l),o(s,n),o(s,h),o(h,g),o(g,f),o(f,p),o(f,E),o(f,I),o(I,y),o(h,T),o(h,M),o(s,C),o(s,j),o(j,w),o(w,m),o(m,la),D(Y,la,null),o(j,Aa),o(j,na),o(j,Pa),o(j,v),o(v,x),o(x,da),o(x,Na),o(x,ca),o(ca,ea),z.m(ea,null),o(x,Sa),o(x,ma),o(x,za),o(x,ga),o(x,Ya),o(x,pa),o(x,Ha),o(x,ia),o(x,Fa),o(x,va),o(v,Ga),D(H,v,null),o(v,Va),o(v,ua),o(v,Ra),D(F,v,null),o(v,Ja),o(v,_a),o(v,Qa),D(G,v,null),o(v,Za),o(v,ha),o(v,Wa),D(V,v,null),o(v,Ka),o(v,ba),o(v,Xa),D(R,v,null),o(v,$a),o(v,fa),o(v,ae),D(J,v,null),o(v,ee),o(v,ya),o(v,ie),D(Q,v,null),o(v,te),o(v,Ma),o(v,se),D(Z,v,null),o(v,oe),o(v,wa),o(s,re),o(s,Ta),xa=!0,ka||(le=[pe(window,"scroll",()=>{a=!0,clearTimeout(t),t=setTimeout(e,100),i[6]()}),pe(window,"resize",i[7])],ka=!0)},p(u,[P]){P&1&&!a&&(a=!0,clearTimeout(t),scrollTo(window.pageXOffset,u[0]),t=setTimeout(e,100)),P&32&&Ea(y,"transform",`scale(${u[5]<0?0:u[5]})`),P&1&&Ea(M,"transform",`translate3d(0, ${u[0]*-.3}px, 0)`);const Ia={};P&2&&(Ia.lv_day=u[1]),P&4&&(Ia.lv_month=u[2]),P&8&&(Ia.lv_year=u[3]),Y.$set(Ia),Ca!==(Ca=ne(u))&&(z.d(1),z=Ca(u),z&&(z.c(),z.m(ea,null)))},i(u){xa||(O(Y.$$.fragment,u),O(H.$$.fragment,u),O(F.$$.fragment,u),O(G.$$.fragment,u),O(V.$$.fragment,u),O(R.$$.fragment,u),O(J.$$.fragment,u),O(Q.$$.fragment,u),O(Z.$$.fragment,u),xa=!0)},o(u){N(Y.$$.fragment,u),N(H.$$.fragment,u),N(F.$$.fragment,u),N(G.$$.fragment,u),N(V.$$.fragment,u),N(R.$$.fragment,u),N(J.$$.fragment,u),N(Q.$$.fragment,u),N(Z.$$.fragment,u),xa=!1},d(u){u&&q(d),B(Y),z.d(),B(H),B(F),B(G),B(V),B(R),B(J),B(Q),B(Z),ka=!1,ra(le)}}}function Mi(i,a,e){let t;const d=new Date;let s=d.getDate(),l=d.toLocaleString("es-ES",{month:"short"}),n=d.getFullYear();Be(h);function h(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const I={root:null,rootMargin:"0px 0px -40% 0px",threshold:.9};function y(C,j){let w=null;C.forEach(m=>{m.isIntersecting&&(m.target.classList.add("lv_pActive"),w=m.target.id)}),M.forEach(m=>{m.id!==w&&m.classList.remove("lv_pActive")}),C.forEach(m=>{m.isIntersecting&&(m.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),e(1,s=11),e(2,l="MAR"),e(3,n=2004)):m.target.id==="io_sect1"?(e(1,s=0),e(2,l="NOV"),e(3,n=2001),m.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):m.target.id==="subr2"?m.target.classList.add("lv_Highlight","lv_Highlight_slow"):m.target.id==="io_sect2"?(e(1,s=0),e(2,l="JUN"),e(3,n=2002)):m.target.id==="io_sect3"?(e(1,s=29),e(2,l="JUN"),e(3,n=2002),m.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):m.target.id==="io_sect4"?(e(1,s=0),e(2,l="ENE"),e(3,n=2003)):m.target.id==="io_sect5"?(e(1,s=20),e(2,l="MAR"),e(3,n=2003)):m.target.id==="io_sect6"?(e(1,s=16),e(2,l="MAY"),e(3,n=2003)):m.target.id==="io_sect7"?(e(1,s=0),e(2,l="JUN"),e(3,n=2003),m.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):m.target.id==="io_sect8"?(e(1,s=18),e(2,l="OCT"),e(3,n=2003)):m.target.id==="io_sect9"?(e(1,s=28),e(2,l="OCT"),e(3,n=2003)):m.target.id==="io_sect10"?(e(1,s=6),e(2,l="NOV"),e(3,n=2003)):m.target.id==="io_sect11"?(e(1,s=29),e(2,l="NOV"),e(3,n=2003)):m.target.id==="io_sect12"?(e(1,s=0),e(2,l="DIC"),e(3,n=2003)):m.target.id==="io_sect13"?(e(1,s=17),e(2,l="DIC"),e(3,n=2003)):m.target.id==="io_sect14"?(e(1,s=12),e(2,l="DIC"),e(3,n=2003)):m.target.id==="io_sect15"?(e(1,s=0),e(2,l="ENE"),e(3,n=2004)):m.target.id==="io_sect16"?(e(1,s=5),e(2,l="ENE"),e(3,n=2004)):m.target.id==="io_sect17"?(e(1,s=28),e(2,l="ENE"),e(3,n=2004)):m.target.id==="io_sect18"?(e(1,s=0),e(2,l="FEB"),e(3,n=2004)):m.target.id==="io_sect19"?(e(1,s=4),e(2,l="FEB"),e(3,n=2004),m.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):m.target.id==="io_sect20"?(e(1,s=27),e(2,l="FEB"),e(3,n=2004)):m.target.id==="io_sect21"?(e(1,s=29),e(2,l="FEB"),e(3,n=2004)):m.target.id==="io_sect22"?(e(1,s=3),e(2,l="MAR"),e(3,n=2004)):m.target.id==="io_sect23"?(e(1,s=6),e(2,l="MAR"),e(3,n=2004)):m.target.id==="io_sect24"?(e(1,s=8),e(2,l="MAR"),e(3,n=2004)):m.target.id==="io_sect25"?(e(1,s=10),e(2,l="MAR"),e(3,n=2004)):m.target.id==="io_sect26"&&(e(1,s=11),e(2,l="MAR"),e(3,n=2004)))})}const T=new IntersectionObserver(y,I),M=document.querySelectorAll(".io_bird");M.forEach(C=>{T.observe(C)})}let g=0,f;function p(){e(0,g=window.pageYOffset)}function E(){e(4,f=window.innerWidth)}return i.$$.update=()=>{i.$$.dirty&1&&e(5,t=1-g*.005)},[g,s,l,n,f,t,p,E]}class wi extends A{constructor(a){super(),U(this,a,Mi,yi,L,{})}}new wi({target:document.getElementById("app")});
