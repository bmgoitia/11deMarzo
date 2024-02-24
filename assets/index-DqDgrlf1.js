var na=Object.defineProperty;var da=(e,a,i)=>a in e?na(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var Me=(e,a,i)=>(da(e,typeof a!="symbol"?a+"":a,i),i);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();function v(){}const aa=e=>e;function Je(e,a){for(const i in a)e[i]=a[i];return e}function ia(e){return e()}function Re(){return Object.create(null)}function ie(e){e.forEach(ia)}function ta(e){return typeof e=="function"}function j(e,a){return e!=e?a==a:e!==a||e&&typeof e=="object"||typeof e=="function"}function ca(e){return Object.keys(e).length===0}function ma(e,...a){if(e==null){for(const s of a)s(void 0);return v}const i=e.subscribe(...a);return i.unsubscribe?()=>i.unsubscribe():i}function Qe(e,a,i){e.$$.on_destroy.push(ma(a,i))}function Ze(e){return e??""}const sa=typeof window<"u";let pa=sa?()=>window.performance.now():()=>Date.now(),ra=sa?e=>requestAnimationFrame(e):v;const K=new Set;function oa(e){K.forEach(a=>{a.c(e)||(K.delete(a),a.f())}),K.size!==0&&ra(oa)}function ga(e){let a;return K.size===0&&ra(oa),{promise:new Promise(i=>{K.add(a={c:e,f:i})}),abort(){K.delete(a)}}}function r(e,a){e.appendChild(a)}function D(e,a,i){e.insertBefore(a,i||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function he(e){return document.createTextNode(e)}function b(){return he(" ")}function We(e,a,i,s){return e.addEventListener(a,i,s),()=>e.removeEventListener(a,i,s)}function c(e,a,i){i==null?e.removeAttribute(a):e.getAttribute(a)!==i&&e.setAttribute(a,i)}function ua(e){return Array.from(e.childNodes)}function we(e,a){a=""+a,e.data!==a&&(e.data=a)}function _e(e,a,i,s){i==null?e.style.removeProperty(a):e.style.setProperty(a,i,s?"important":"")}let ee;function $(e){ee=e}function va(){if(!ee)throw new Error("Function called outside component initialization");return ee}function _a(e){va().$$.on_mount.push(e)}const W=[],Ke=[];let X=[];const Xe=[],ha=Promise.resolve();let Ce=!1;function ba(){Ce||(Ce=!0,ha.then(la))}function ae(e){X.push(e)}const xe=new Set;let Q=0;function la(){if(Q!==0)return;const e=ee;do{try{for(;Q<W.length;){const a=W[Q];Q++,$(a),fa(a.$$)}}catch(a){throw W.length=0,Q=0,a}for($(null),W.length=0,Q=0;Ke.length;)Ke.pop()();for(let a=0;a<X.length;a+=1){const i=X[a];xe.has(i)||(xe.add(i),i())}X.length=0}while(W.length);for(;Xe.length;)Xe.pop()();Ce=!1,xe.clear(),$(e)}function fa(e){if(e.fragment!==null){e.update(),ie(e.before_update);const a=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,a),e.after_update.forEach(ae)}}function ya(e){const a=[],i=[];X.forEach(s=>e.indexOf(s)===-1?a.push(s):i.push(s)),i.forEach(s=>s()),X=a}const be=new Set;let Ma;function T(e,a){e&&e.i&&(be.delete(e),e.i(a))}function U(e,a,i,s){if(e&&e.o){if(be.has(e))return;be.add(e),Ma.c.push(()=>{be.delete(e),s&&(i&&e.d(1),s())}),e.o(a)}else s&&s()}function A(e){e&&e.c()}function O(e,a,i){const{fragment:s,after_update:n}=e.$$;s&&s.m(a,i),ae(()=>{const t=e.$$.on_mount.map(ia).filter(ta);e.$$.on_destroy?e.$$.on_destroy.push(...t):ie(t),e.$$.on_mount=[]}),n.forEach(ae)}function k(e,a){const i=e.$$;i.fragment!==null&&(ya(i.after_update),ie(i.on_destroy),i.fragment&&i.fragment.d(a),i.on_destroy=i.fragment=null,i.ctx=[])}function wa(e,a){e.$$.dirty[0]===-1&&(W.push(e),ba(),e.$$.dirty.fill(0)),e.$$.dirty[a/31|0]|=1<<a%31}function L(e,a,i,s,n,t,o=null,l=[-1]){const _=ee;$(e);const m=e.$$={fragment:null,ctx:[],props:t,update:v,not_equal:n,bound:Re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(_?_.$$.context:[])),callbacks:Re(),dirty:l,skip_bound:!1,root:a.target||_.$$.root};o&&o(m.root);let f=!1;if(m.ctx=i?i(e,a.props||{},(g,I,...C)=>{const y=C.length?C[0]:I;return m.ctx&&n(m.ctx[g],m.ctx[g]=y)&&(!m.skip_bound&&m.bound[g]&&m.bound[g](y),f&&wa(e,g)),I}):[],m.update(),f=!0,ie(m.before_update),m.fragment=s?s(m.ctx):!1,a.target){if(a.hydrate){const g=ua(a.target);m.fragment&&m.fragment.l(g),g.forEach(q)}else m.fragment&&m.fragment.c();a.intro&&T(e.$$.fragment),O(e,a.target,a.anchor),la()}$(_)}class B{constructor(){Me(this,"$$");Me(this,"$$set")}$destroy(){k(this,1),this.$destroy=v}$on(a,i){if(!ta(i))return v;const s=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return s.push(i),()=>{const n=s.indexOf(i);n!==-1&&s.splice(n,1)}}$set(a){this.$$set&&!ca(a)&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}const xa="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xa);const Ca="/11deMarzo/assets/trenII-DaZpweGS.png",Ia="/11deMarzo/assets/video_11m-chW1etDk.mp4",Ea="/11deMarzo/assets/11_Mposter-BS1avwby.png",Z=[];function za(e,a=v){let i;const s=new Set;function n(l){if(j(e,l)&&(e=l,i)){const _=!Z.length;for(const m of s)m[1](),Z.push(m,e);if(_){for(let m=0;m<Z.length;m+=2)Z[m][0](Z[m+1]);Z.length=0}}}function t(l){n(l(e))}function o(l,_=v){const m=[l,_];return s.add(m),s.size===1&&(i=a(n,t)||v),l(e),()=>{s.delete(m),s.size===0&&i&&(i(),i=null)}}return{set:n,update:t,subscribe:o}}function $e(e){return Object.prototype.toString.call(e)==="[object Date]"}function ja(e){const a=e-1;return a*a*a+1}function Ie(e,a){if(e===a||e!==e)return()=>e;const i=typeof e;if(i!==typeof a||Array.isArray(e)!==Array.isArray(a))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=a.map((n,t)=>Ie(e[t],n));return n=>s.map(t=>t(n))}if(i==="object"){if(!e||!a)throw new Error("Object cannot be null");if($e(e)&&$e(a)){e=e.getTime(),a=a.getTime();const t=a-e;return o=>new Date(e+o*t)}const s=Object.keys(a),n={};return s.forEach(t=>{n[t]=Ie(e[t],a[t])}),t=>{const o={};return s.forEach(l=>{o[l]=n[l](t)}),o}}if(i==="number"){const s=a-e;return n=>e+n*s}throw new Error(`Cannot interpolate ${i} values`)}function ea(e,a={}){const i=za(e);let s,n=e;function t(o,l){if(e==null)return i.set(e=o),Promise.resolve();n=o;let _=s,m=!1,{delay:f=0,duration:g=400,easing:I=aa,interpolate:C=Ie}=Je(Je({},a),l);if(g===0)return _&&(_.abort(),_=null),i.set(e=n),Promise.resolve();const y=pa()+f;let z;return s=ga(M=>{if(M<y)return!0;m||(z=C(e,o),typeof g=="function"&&(g=g(e,o)),m=!0),_&&(_.abort(),_=null);const x=M-y;return x>g?(i.set(e=o),!1):(i.set(e=z(I(x/g))),!0)}),s.promise}return{set:t,update:(o,l)=>t(o(n,e),l),subscribe:i.subscribe}}function qa(e){let a,i,s,n,t=Math.round(e[1])+"",o,l,_,m,f,g,I,C,y,z,M,x=Math.round(e[2])+"",E;return{c(){a=p("div"),i=p("div"),s=p("p"),n=p("span"),o=he(t),_=b(),m=p("div"),f=p("p"),g=p("span"),I=he(e[0]),C=b(),y=p("div"),z=p("p"),M=p("span"),E=he(x),c(n,"class","svelte-1uhcm16"),c(s,"class",l=Ze(e[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16"),c(i,"class","lv_contPiece svelte-1uhcm16"),c(g,"class","svelte-1uhcm16"),c(f,"class","svelte-1uhcm16"),c(m,"class","lv_contPiece svelte-1uhcm16"),c(M,"class","svelte-1uhcm16"),c(z,"class","svelte-1uhcm16"),c(y,"class","lv_contPiece svelte-1uhcm16"),c(a,"class","lv_contP")},m(w,d){D(w,a,d),r(a,i),r(i,s),r(s,n),r(n,o),r(a,_),r(a,m),r(m,f),r(f,g),r(g,I),r(a,C),r(a,y),r(y,z),r(z,M),r(M,E)},p(w,[d]){d&2&&t!==(t=Math.round(w[1])+"")&&we(o,t),d&2&&l!==(l=Ze(w[1]?"lv_pNorm":"lv_pExt")+" svelte-1uhcm16")&&c(s,"class",l),d&1&&we(I,w[0]),d&4&&x!==(x=Math.round(w[2])+"")&&we(E,x)},i:v,o:v,d(w){w&&q(a)}}}function Ta(e,a,i){let s,n,{lv_day:t=0}=a,{lv_month:o}=a,{lv_year:l}=a;const _=ea(t,{duration:1500,delay:0,easing:aa});Qe(e,_,g=>i(1,s=g));const m=ea(l,{duration:1500,delay:0,easing:ja});Qe(e,m,g=>i(2,n=g));const f=function(){_.set(t),m.set(l)};return e.$$set=g=>{"lv_day"in g&&i(5,t=g.lv_day),"lv_month"in g&&i(0,o=g.lv_month),"lv_year"in g&&i(6,l=g.lv_year)},e.$$.update=()=>{e.$$.dirty&32&&f(),e.$$.dirty&64&&f()},[o,s,n,_,m,t,l]}class Oa extends B{constructor(a){super(),L(this,a,Ta,qa,j,{lv_day:5,lv_month:0,lv_year:6})}}function ka(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_OperacionDatil11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_OperacionDatil11M/20240225_OperacionDatil11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_OperacionDatil11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Da extends B{constructor(a){super(),L(this,a,null,ka,j,{})}}function La(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Casablanca11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Casablanca11M/20240225_Casablanca11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_Casablanca11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Ba extends B{constructor(a){super(),L(this,a,null,La,j,{})}}function Ua(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BinLaden11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BinLaden11M/20240225_BinLaden11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_BinLaden11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Aa extends B{constructor(a){super(),L(this,a,null,Ua,j,{})}}function Pa(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_CNI11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_CNI11M/20240225_CNI11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_CNI11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Na extends B{constructor(a){super(),L(this,a,null,Pa,j,{})}}function Sa(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_IrakEmboscada11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_IrakEmboscada11M/20240225_IrakEmboscada11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_IrakEmboscada11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Ya extends B{constructor(a){super(),L(this,a,null,Sa,j,{})}}function Ha(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_Convoy11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_Convoy11M/20240225_Convoy11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_Convoy11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Fa extends B{constructor(a){super(),L(this,a,null,Ha,j,{})}}function Ga(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_UCIEvsUDYCO11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_UCIEvsUDYCO11M/20240225_UCIEvsUDYCO11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_UCIEvsUDYCO11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Va extends B{constructor(a){super(),L(this,a,null,Ga,j,{})}}function Ja(e){let a;return{c(){a=p("div"),a.innerHTML=`<style type="text/css" media="screen,print">#g-20240225_BerrajTurquia11M-box .g-artboard {
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
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20240225_BerrajTurquia11M/20240225_BerrajTurquia11M-escritorio1200.jpg"/></div>`,c(a,"id","g-20240225_BerrajTurquia11M-box"),c(a,"class","ai2html")},m(i,s){D(i,a,s)},p:v,i:v,o:v,d(i){i&&q(a)}}}class Ra extends B{constructor(a){super(),L(this,a,null,Ja,j,{})}}function Qa(e){let a=!1,i=()=>{a=!1},s,n,t,o,l,_,m,f,g,I,C,y,z,M,x,E,w,d,te,N,Ee,se,ze,u,re,je,S,qe,oe,Te,Y,Oe,le,ke,H,De,ne,Le,F,Be,de,Ue,G,Ae,ce,Pe,V,Ne,me,Se,J,Ye,pe,He,R,Fe,ge,Ge,fe,ue,ye,Ve;return ae(e[6]),ae(e[7]),N=new Oa({props:{lv_day:e[1],lv_month:e[2],lv_year:e[3]}}),S=new Da({}),Y=new Ba({}),H=new Aa({}),F=new Na({}),G=new Ya({}),V=new Fa({}),J=new Va({}),R=new Ra({}),{c(){n=p("main"),t=p("div"),o=p("div"),l=b(),_=p("div"),m=p("div"),f=p("div"),g=p("div"),g.innerHTML=`<img src="${Ca}" alt="tren 11-M" class="svelte-1ezlccr"/>`,I=b(),C=p("div"),y=p("div"),y.innerHTML="",z=b(),M=p("div"),M.innerHTML='<div class="lv_Titular lv_tit svelte-1ezlccr"><h1 class="svelte-1ezlccr">La docena de señales del 11-M que España no supo ver</h1></div> <div class="lv_Subti lv_tit svelte-1ezlccr"><h3 class="svelte-1ezlccr">Así se gestó la mayor matanza terrorista en suelo europeo</h3></div> <div class="lv_Author lv_tit svelte-1ezlccr"><p class="lv_auth svelte-1ezlccr">Por Laura Aragó, Begoña M. Goitia, Clara Penín e Ignacio Orovio</p></div> <div class="lv_titExtra lv_tit svelte-1ezlccr"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',x=b(),E=p("div"),w=p("div"),d=p("div"),te=p("div"),A(N.$$.fragment),Ee=b(),se=p("div"),ze=b(),u=p("div"),re=p("div"),re.innerHTML=`<p class="lv_Par svelte-1ezlccr">11 de marzo de 2004. En tres minutos, a partir de las 7.37 de la mañana, diez bombas estallan en cuatro trenes de Cercanías de Madrid, causando una matanza indiscriminada. Los vecinos de las zonas donde han explotado los vagones acuden rápidamente a ayudar a los heridos, convirtiendo las vías de tren en un hormiguero. Agua, mantas, sábanas... El caos es absoluto.</p> <div class="lv_inVideo svelte-1ezlccr"><div class="lv_videoWrapper svelte-1ezlccr"><video class="lv_videoItem svelte-1ezlccr" preload="auto" muted="" autoplay="" loop="" playsinline="" poster="${Ea}"><source src="${Ia}" type="video/mp4"/></video></div></div> <p class="lv_Par svelte-1ezlccr">De aquellos brutales atentados se cumplen ahora 20 años. Acabaron con la vida de 193 personas. 191 de ellas en las explosiones de aquellos tres minutos salvajes y otra -un GEO de la Policía Nacional- cuando los terroristas se inmolaron en un piso franco que tenían en Leganés, el 3 de abril siguiente, al verse rodeados por la policía. En 2014 murió una mujer que estuvo diez años en coma, con lo que las víctimas son 193.</p> <p class="lv_Par svelte-1ezlccr">El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los de Estados Unidos.</p> <p class="lv_Par svelte-1ezlccr">Entre ambos atentados hay conexiones que van más allá del número: en España hubo reuniones clave previas al 11-S y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror. Visto a posteriori, existen al menos una docena de señales que permitían intuir lo que se estaba preparando entre los radicales islamistas en España.</p> <p id="io_sect1" class="lv_Par io_bird svelte-1ezlccr">El 11m emerge de los cabos sueltos de la operación Dátil. En noviembre de 2001, el juez Baltasar Garzón ordena actuar contra una célula de Al Qaeda, capitaneada por Imad Edin Barakat, alias <span>Abu Dadah, ciudadano sirio y líder de la formación yihadista en España</span>.</p> <p class="lv_Par svelte-1ezlccr">Algunos presuntos miembros de la célula logran huir. Entre ellos, cuatro sujetos que no solo mantuvieron vivo el núcleo de Al Qaeda en España, sino que son el hilo que lleva al 11-M: <span id="subr2" class="io_bird">Amer Azizi, ciudadano marroquí entrenado en Afganistán, encargado de llevar la Yihad a Europa e ideólogo del 11m; Serhane ben Abdelmajid (&#39;El Tunecino&#39;), líder del 11-M; Said Berraj también entrenado en Afganistán y miembro de la célula del 11-M y Jamal Zougam, que fue condenado como autor material de los atentados.</span></p>`,je=b(),A(S.$$.fragment),qe=b(),oe=p("div"),oe.innerHTML='<p id="io_sect2" class="lv_Par io_bird svelte-1ezlccr">La Policía Nacional interviene el teléfono del Tunecino. A partir de sus llamadas, se conoce con quién se relaciona, y que su grupo empieza a frecuentar una casa al sur de Madrid, en Morata de Tajuña, que es propiedad de otro detenido en la operación Dátil que está en prisión. Aquí celebraran fiestas y comidas. En esta casa se prepararán dos años después las bombas del 11-M.</p> <p id="io_sect3" class="lv_Par io_bird svelte-1ezlccr">El yihadista argelino <span>Allekema Lamari, detenido en 1997, condenado por su radicalismo y miembro clave del 11-M,</span>  es liberado por un error judicial. Incumple desde el primer momento la obligatoriedad de presentarse periódicamente en un juzgado, pero nunca se le detendrá.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect4" class="lv_Par io_bird svelte-1ezlccr">La Unidad Central de Información Exterior, la sección antiyihadista, pincha dos teléfonos del locutorio de Jamal Zougam, uno de los cabos sueltos de la operación Dátil.</p> <p class="lv_Par svelte-1ezlccr">En ese momento, en Asturias, la Guardia Civil recibe la información de que un traficante de drogas vende ilegalmente dinamita de la Mina Conchita. Consiguen una muestra de esa dinamita que analizan y destruyen sin realizar más pesquisas. De esta mina saldrá el explosivo del 11-M</p> <hr class="svelte-1ezlccr"/> <p id="io_sect5" class="lv_Par io_bird svelte-1ezlccr">Invasión de Irak. España apoya a EEUU y Gran Bretaña en la operación, argumentada por la supuesta posesión de armas de destrucción masiva por parte del régimen iraquí. El pacto entre EE.UU., Reino Unido y España se gesta en un encuentro en las islas portuguesas de las Azores, donde sus tres máximos dirigentes se hicieron una histórica fotografía.</p> <p class="lv_Par svelte-1ezlccr">El mismo día, los servicios de seguridad identifican a Said Berraj, vinculado a la operación Dátil, observando con atención el edificio de la embajada de Estados Unidos en Madrid.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect6" class="lv_Par io_bird svelte-1ezlccr">Ataque terrorista en Casablanca (Marruecos). Entre otros objetivos está la Casa de España. Mueren 43 personas en cinco ataques distintos. El cuñado del Tunecino será detenido por este atentado. El atentado sitúa España como un claro objetivo.</p>',Te=b(),A(Y.$$.fragment),Oe=b(),le=p("div"),le.innerHTML='<p id="io_sect7" class="lv_Par io_bird svelte-1ezlccr">Uno de los líderes del 11-m, <span>Jamal Ahmidan (&#39;El Chino&#39;), narcotraficante y persona clave en la preparacion del 11m</span> sale de la prision de Tetuán, donde cumplia una condena por asesinato. Regresa a Madrid y contacta con El Tunecino, líder de la celula en España.</p> <p class="lv_Par svelte-1ezlccr">El mismo mes, un amigo íntimo del Tunecino empieza a visitar regularmente a Abu Dadah, el líder de Al Qaeda en España, en la cárcel. El último encuentro se produce cinco días antes de los atentados. Se sospecha que el Tunecino enviaba a su amigo para no levantar sospechas.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect8" class="lv_Par io_bird svelte-1ezlccr">El líder de Al Qaeda Osama Bin Laden emite desde Afganistán un discurso en el que cita a España como enemigo. Es una señal obvia de que este país se ha convertido en objetivo terrorista prioritario, que alerta a los servicios de inteligencia.</p>',ke=b(),A(H.$$.fragment),De=b(),ne=p("div"),ne.innerHTML='<p id="io_sect9" class="lv_Par io_bird svelte-1ezlccr">Jamal Ahmidan, el Chino, se encuentra en un McDonalds con el ex minero asturiano y traficante de dinamita Emilio Suárez Trashorras. Pactan enviar 60 kg de explosivo a Madrid. En su defensa, Suárez Trashorras alegará que nunca pensó que fueran para atentar en España, sino en Marruecos, y para ser empleados en atracos a joyerías.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect10" class="lv_Par io_bird svelte-1ezlccr">A cuatro meses de los atentados, el CNI envía un informe al Secretario de Estado de Seguridad alertando de la peligrosidad de Allekema Lamari, radical convicto, huido de la justicia en ese momento. El CNI indica que está en Madrid e informa de qué cabinas de teléfono ha utilizado en las semanas previas, así como el coche que usa, la matrícula y copia de su documentación falsa. Lamari lleva meses diciendo en su entorno que va a atentar en España con grandes incendios o coches bomba.</p> <p class="lv_Par svelte-1ezlccr">El director del CNI dirá posteriormente que la Policía “nunca” dio al asunto “credibilidad suficiente, privilegiando sus líneas de investigación propias”.</p>',Le=b(),A(F.$$.fragment),Be=b(),de=p("div"),de.innerHTML='<p id="io_sect11" class="lv_Par io_bird svelte-1ezlccr">En una emboscada con armas de fuego y granadas, 7 miembros del CNI español son asesinados en Irak. Es una señal clave que marca a España como objetivo prioritario.</p>',Ue=b(),A(G.$$.fragment),Ae=b(),ce=p("div"),ce.innerHTML='<p id="io_sect12" class="lv_Par io_bird svelte-1ezlccr">Un confidente de la Unidad de Drogas y Crimen Organizado (UDYCO) que coincidió en el pasado en una cárcel con el cuñado del minero Suárez Trashorras informa de que existe un grupo de marroquíes que trafica con hachís y habla de atentar en trenes.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect13" class="lv_Par io_bird svelte-1ezlccr">En una investigación sobre células argelinas, la Dirección General de la Policía francesa pide a España que controle a Allekema Lamari por su peligrosidad. En 2001 ya lo habían pedido sobre Jamal Zougam, el dueño del locutorio: se registró su casa y se hallaron pruebas de su relación con Abu Dadah, el líder de Al Qaeda encarcelado, y Amer Azizi, el vínculo con la cúpula de Al Qaeda en Afganistán.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect14" class="lv_Par io_bird svelte-1ezlccr">La UDYCO (unidad antidrogas) interviene el teléfono del Chino y su ayudante por sus negocios de narcotráfico. La autorización de escuchas del primero acabará seis días antes del atentado y la del segundo el mismo día de la matanza.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect15" class="lv_Par io_bird svelte-1ezlccr">La UCIE pincha el teléfono de Said Berraj, uno de los hombres clave del comando, con experiencia en Afganistán. Berraj había sido detenido previamente en Estambul en tránsito hacia aquel país, donde al parecer recibió instrucción militar. Este hombre respondía al alias de Said el Mensajero por un trabajo que tuvo en Madrid.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect16" class="lv_Par io_bird svelte-1ezlccr">Entre los días 5 y 9 de enero cuatro jóvenes asturianos transportan desde Asturias a Madrid dos cargamentos de explosivos en autobuses de línea. A finales de enero llega un tercer cargamento, también en autobús.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect17" class="lv_Par io_bird svelte-1ezlccr">El Chino alquila la misma casa de Morata de Tajuña que la policía sabía que el Tunecino y su entorno frecuentaba desde junio de 2002. En este casa, el grupo yihadista fabricará las bombas. La casa pertenece a uno de los detenidos en 2001 en la Operación Dátil.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect18" class="lv_Par io_bird svelte-1ezlccr">El comando habilita la casa de Morata de Tajuña para sus fines. Diversos miembros del comando construyen un zulo impermeabilizado donde almacenar la dinamita que va llegando desde Asturias. Aquí se guardan también los macutos en los que se colocarán las bombas.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect19" class="lv_Par io_bird svelte-1ezlccr">El locutorio de Jamal Zougam, en Lavapiés, suministra un paquete de 30 tarjetas SIM. Diez de ellas serán usadas por miembros del comando y las otras 20 se desconoce dónde van a parar. <span>Jamal Zougam sería condenado a 42.917 años de cárcel -40 de cumplimiento efectivo- como autor material del atentado: fue reconocido por los viajeros de los trenes.</span></p> <hr class="svelte-1ezlccr"/> <p id="io_sect20" class="lv_Par io_bird svelte-1ezlccr">Jamal Ahmidan, El Chino, y otros dos miembros de la célula terrorista viajan a Asturias en dos coches y pasan una noche entera robando dinamita de Mina Conchita, siguiendo las indicaciones de Suárez Trashorras. Hacen varios viajes.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect21" class="lv_Par io_bird svelte-1ezlccr">El convoy vuelve con la dinamita a Madrid. El Chino viaja delante en un Toyota Corolla mientras que los otros dos van detrás, en un Volkswagen. En el viaje, Ahmidan es detenido por una patrulla de la Guardia Civil de tráfico. Exhibe un pasaporte belga falso. Le denuncian por exceso de velocidad y por no tener la documentación del vehículo en regla, pero le dejan marchar.</p>',Pe=b(),A(V.$$.fragment),Ne=b(),me=p("div"),me.innerHTML='<p id="io_sect22" class="lv_Par io_bird svelte-1ezlccr">Un miembro del comando no identificado compra en la localidad de Pinto nueve teléfonos Mitsubishi Trium, que es el que se utilizará como detonador de las bombas. Otros teléfonos iguales serán adquiridos en días próximos. Este mismo modelo es el móvil que Al Qaeda emplea en los atentados de Bali de octubre de 2002, con 202 muertos.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect23" class="lv_Par io_bird svelte-1ezlccr">El comando alquila un piso en la calle Martín Gaite de Leganés, donde trasladará la dinamita desde Morata de Tajuña, y también las ametralladoras que adquieren. En este piso serán descubiertos los terroristas el 3 de abril gracias a un número de teléfono detectado en la antena telefónica de la zona.</p> <hr class="svelte-1ezlccr"/> <p id="io_sect24" class="lv_Par io_bird svelte-1ezlccr">En una reunión con la Comisaría General de Información (CGI), el CNI insiste en alertar de la peligrosidad de Allekema Lamari. La CGI desdeña la información. Lamari, con experiencia militar, es uno de los líderes del comando.</p> <p class="lv_Par svelte-1ezlccr">Tres días antes del atentado. La unidad policial antiyihadismo detecta al Tunecino en Morata de Tajuña, pero en el coche de la suegra del Chino: como éste es conocido sólo por las unidades de tráfico de drogas, no les alarma el vehículo que está empleando.</p>',Se=b(),A(J.$$.fragment),Ye=b(),pe=p("div"),pe.innerHTML='<p id="io_sect25" class="lv_Par io_bird svelte-1ezlccr">El día antes del atentado. Llega a Madrid desde Turquía, más de un año después de haber sido solicitada, la información que habría permitido detener a Said Berraj, uno de los cabos sueltos de la operación Dátil y otro miembro del comando. Éste desaparece de su casa el día 8, antes del 11m. Los investigadores creen que huye a Iraq, donde posiblemente muere luchando contra los americanos.</p>',He=b(),A(R.$$.fragment),Fe=b(),ge=p("div"),ge.innerHTML='<p class="lv_Par svelte-1ezlccr">Ese mismo día, a partir de las 2.24 de la madrugada, y durante 24 horas exactas, se conectan por primera vez todos los teléfonos que se usarán como detonadores de las bombas. Es el momento en que están montando las bombas.</p> <p id="io_sect26" class="lv_Par io_bird svelte-1ezlccr">Hacia las 6.50 de la mañana, tres terroristas de identidad desconocida estacionan la furgoneta en la calle Infantado de Alcalá y suben a diversos trenes en dirección Madrid. Otros miembros del grupo hacen lo mismo en lugares no determinados de la línea de cercanías Alcalá de Henares-Madrid Atocha.</p> <p class="lv_Par svelte-1ezlccr">A partir de las 7 de la mañana salen de Alcalá los cuatro trenes cargados con bombas. Entre las 7.37 y las 7.39 de la mañana explotan las 10 bombas. Ese día murieron 191 personas en el atentado y otras 1.857 quedaron heridas. Es el atentado más mortífero de la historia de Europa.</p> <p class="lv_Par lv_Sources svelte-1ezlccr">FUENTES: Elaboración propia, en base al sumario judicial, la sentencia del tribunal y el libro &#39;Pudo evitarse&#39;, de Fernando Reinares</p>',Ge=b(),fe=p("div"),c(o,"id","lv_preHeader"),c(g,"class","lv_obLayer lv_obLayer1 capaTren svelte-1ezlccr"),c(y,"class","lv_explWrapper svelte-1ezlccr"),_e(y,"transform",`scale(${e[5]<0?0:e[5]})`),c(C,"class","lv_obLayer lv_obLayer2 capaExpl svelte-1ezlccr"),c(f,"class","lv_obWrapper svelte-1ezlccr"),c(m,"class","lv_Obertura svelte-1ezlccr"),c(M,"class","lv_titBlock svelte-1ezlccr"),_e(M,"transform",`translate3d(0, ${e[0]*-.3}px, 0)`),c(_,"id","lv_Header"),c(te,"class","lv_cont_fecha svelte-1ezlccr"),c(d,"class","lv_migCont"),c(w,"class","lv_Contador svelte-1ezlccr"),c(se,"id","lv_Counter"),c(se,"class","io_bird lv_fakeCounter"),c(re,"class","lv_Text svelte-1ezlccr"),c(oe,"class","lv_Text svelte-1ezlccr"),c(le,"class","lv_Text svelte-1ezlccr"),c(ne,"class","lv_Text svelte-1ezlccr"),c(de,"class","lv_Text svelte-1ezlccr"),c(ce,"class","lv_Text svelte-1ezlccr"),c(me,"class","lv_Text svelte-1ezlccr"),c(pe,"class","lv_Text svelte-1ezlccr"),c(ge,"class","lv_Text svelte-1ezlccr"),c(u,"class","lv_Text_block svelte-1ezlccr"),c(E,"id","lv_Content"),c(fe,"id","lv_Footer"),c(t,"class","lv_mainContainer svelte-1ezlccr")},m(h,P){D(h,n,P),r(n,t),r(t,o),r(t,l),r(t,_),r(_,m),r(m,f),r(f,g),r(f,I),r(f,C),r(C,y),r(_,z),r(_,M),r(t,x),r(t,E),r(E,w),r(w,d),r(d,te),O(N,te,null),r(E,Ee),r(E,se),r(E,ze),r(E,u),r(u,re),r(u,je),O(S,u,null),r(u,qe),r(u,oe),r(u,Te),O(Y,u,null),r(u,Oe),r(u,le),r(u,ke),O(H,u,null),r(u,De),r(u,ne),r(u,Le),O(F,u,null),r(u,Be),r(u,de),r(u,Ue),O(G,u,null),r(u,Ae),r(u,ce),r(u,Pe),O(V,u,null),r(u,Ne),r(u,me),r(u,Se),O(J,u,null),r(u,Ye),r(u,pe),r(u,He),O(R,u,null),r(u,Fe),r(u,ge),r(t,Ge),r(t,fe),ue=!0,ye||(Ve=[We(window,"scroll",()=>{a=!0,clearTimeout(s),s=setTimeout(i,100),e[6]()}),We(window,"resize",e[7])],ye=!0)},p(h,[P]){P&1&&!a&&(a=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[0]),s=setTimeout(i,100)),P&32&&_e(y,"transform",`scale(${h[5]<0?0:h[5]})`),P&1&&_e(M,"transform",`translate3d(0, ${h[0]*-.3}px, 0)`);const ve={};P&2&&(ve.lv_day=h[1]),P&4&&(ve.lv_month=h[2]),P&8&&(ve.lv_year=h[3]),N.$set(ve)},i(h){ue||(T(N.$$.fragment,h),T(S.$$.fragment,h),T(Y.$$.fragment,h),T(H.$$.fragment,h),T(F.$$.fragment,h),T(G.$$.fragment,h),T(V.$$.fragment,h),T(J.$$.fragment,h),T(R.$$.fragment,h),ue=!0)},o(h){U(N.$$.fragment,h),U(S.$$.fragment,h),U(Y.$$.fragment,h),U(H.$$.fragment,h),U(F.$$.fragment,h),U(G.$$.fragment,h),U(V.$$.fragment,h),U(J.$$.fragment,h),U(R.$$.fragment,h),ue=!1},d(h){h&&q(n),k(N),k(S),k(Y),k(H),k(F),k(G),k(V),k(J),k(R),ye=!1,ie(Ve)}}}function Za(e,a,i){let s;const n=new Date;let t=n.getDate(),o=n.toLocaleString("es-ES",{month:"short"}),l=n.getFullYear();_a(_);function _(){document.querySelector(".lv_Contador"),document.querySelector(".lv_cont_fecha");const C={root:null,rootMargin:"0px 0px -40% 0px",threshold:.9};function y(x,E){let w=null;x.forEach(d=>{d.isIntersecting&&(d.target.classList.add("lv_pActive"),w=d.target.id)}),M.forEach(d=>{d.id!==w&&d.classList.remove("lv_pActive")}),x.forEach(d=>{d.isIntersecting&&(d.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),i(1,t=11),i(2,o="MAR"),i(3,l=2004)):d.target.id==="io_sect1"?(i(1,t=0),i(2,o="NOV"),i(3,l=2001),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="subr2"?d.target.classList.add("lv_Highlight","lv_Highlight_slow"):d.target.id==="io_sect2"?(i(1,t=0),i(2,o="JUN"),i(3,l=2002)):d.target.id==="io_sect3"?(i(1,t=29),i(2,o="JUN"),i(3,l=2002),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect4"?(i(1,t=0),i(2,o="ENE"),i(3,l=2003)):d.target.id==="io_sect5"?(i(1,t=20),i(2,o="MAR"),i(3,l=2003)):d.target.id==="io_sect6"?(i(1,t=16),i(2,o="MAY"),i(3,l=2003)):d.target.id==="io_sect7"?(i(1,t=0),i(2,o="JUN"),i(3,l=2003),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect8"?(i(1,t=18),i(2,o="OCT"),i(3,l=2003)):d.target.id==="io_sect9"?(i(1,t=28),i(2,o="OCT"),i(3,l=2003)):d.target.id==="io_sect10"?(i(1,t=6),i(2,o="NOV"),i(3,l=2003)):d.target.id==="io_sect11"?(i(1,t=29),i(2,o="NOV"),i(3,l=2003)):d.target.id==="io_sect12"?(i(1,t=0),i(2,o="DIC"),i(3,l=2003)):d.target.id==="io_sect13"?(i(1,t=17),i(2,o="DIC"),i(3,l=2003)):d.target.id==="io_sect14"?(i(1,t=12),i(2,o="DIC"),i(3,l=2003)):d.target.id==="io_sect15"?(i(1,t=0),i(2,o="ENE"),i(3,l=2004)):d.target.id==="io_sect16"?(i(1,t=5),i(2,o="ENE"),i(3,l=2004)):d.target.id==="io_sect17"?(i(1,t=28),i(2,o="ENE"),i(3,l=2004)):d.target.id==="io_sect18"?(i(1,t=0),i(2,o="FEB"),i(3,l=2004)):d.target.id==="io_sect19"?(i(1,t=4),i(2,o="FEB"),i(3,l=2004),d.target.querySelector("span").classList.add("lv_Highlight","lv_Highlight_fast")):d.target.id==="io_sect20"?(i(1,t=27),i(2,o="FEB"),i(3,l=2004)):d.target.id==="io_sect21"?(i(1,t=29),i(2,o="FEB"),i(3,l=2004)):d.target.id==="io_sect22"?(i(1,t=3),i(2,o="MAR"),i(3,l=2004)):d.target.id==="io_sect23"?(i(1,t=6),i(2,o="MAR"),i(3,l=2004)):d.target.id==="io_sect24"?(i(1,t=8),i(2,o="MAR"),i(3,l=2004)):d.target.id==="io_sect25"?(i(1,t=10),i(2,o="MAR"),i(3,l=2004)):d.target.id==="io_sect26"&&(i(1,t=11),i(2,o="MAR"),i(3,l=2004)))})}const z=new IntersectionObserver(y,C),M=document.querySelectorAll(".io_bird");M.forEach(x=>{z.observe(x)})}let m=0,f;function g(){i(0,m=window.pageYOffset)}function I(){i(4,f=window.innerWidth)}return e.$$.update=()=>{e.$$.dirty&1&&i(5,s=1-m*.005)},[m,t,o,l,f,s,g,I]}class Wa extends B{constructor(a){super(),L(this,a,Za,Qa,j,{})}}new Wa({target:document.getElementById("app")});
