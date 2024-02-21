var Ut=Object.defineProperty;var Dt=(t,i,e)=>i in t?Ut(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var dt=(t,i,e)=>(Dt(t,typeof i!="symbol"?i+"":i,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function _(){}const Ht=t=>t;function Tt(t,i){for(const e in i)t[e]=i[e];return t}function Mt(t){return t()}function qt(){return Object.create(null)}function at(t){t.forEach(Mt)}function Ot(t){return typeof t=="function"}function $(t,i){return t!=t?i==i:t!==i||t&&typeof t=="object"||typeof t=="function"}function Ft(t){return Object.keys(t).length===0}function Nt(t,...i){if(t==null){for(const a of i)a(void 0);return _}const e=t.subscribe(...i);return e.unsubscribe?()=>e.unsubscribe():e}function kt(t,i,e){t.$$.on_destroy.push(Nt(i,e))}const zt=typeof window<"u";let Rt=zt?()=>window.performance.now():()=>Date.now(),St=zt?t=>requestAnimationFrame(t):_;const M=new Set;function $t(t){M.forEach(i=>{i.c(t)||(M.delete(i),i.f())}),M.size!==0&&St($t)}function Vt(t){let i;return M.size===0&&St($t),{promise:new Promise(e=>{M.add(i={c:t,f:e})}),abort(){M.delete(i)}}}function n(t,i){t.appendChild(i)}function st(t,i,e){t.insertBefore(i,e||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function w(){return K(" ")}function Xt(t,i,e,a){return t.addEventListener(i,e,a),()=>t.removeEventListener(i,e,a)}function p(t,i,e){e==null?t.removeAttribute(i):t.getAttribute(i)!==e&&t.setAttribute(i,e)}function Yt(t){return Array.from(t.childNodes)}function pt(t,i){i=""+i,t.data!==i&&(t.data=i)}function Z(t,i,e,a){e==null?t.style.removeProperty(i):t.style.setProperty(i,e,a?"important":"")}let S;function z(t){S=t}function Wt(){if(!S)throw new Error("Function called outside component initialization");return S}function Zt(t){Wt().$$.on_mount.push(t)}const I=[],Et=[];let O=[];const Lt=[],Kt=Promise.resolve();let ut=!1;function Qt(){ut||(ut=!0,Kt.then(Bt))}function et(t){O.push(t)}const ct=new Set;let j=0;function Bt(){if(j!==0)return;const t=S;do{try{for(;j<I.length;){const i=I[j];j++,z(i),Jt(i.$$)}}catch(i){throw I.length=0,j=0,i}for(z(null),I.length=0,j=0;Et.length;)Et.pop()();for(let i=0;i<O.length;i+=1){const e=O[i];ct.has(e)||(ct.add(e),e())}O.length=0}while(I.length);for(;Lt.length;)Lt.pop()();ut=!1,ct.clear(),z(t)}function Jt(t){if(t.fragment!==null){t.update(),at(t.before_update);const i=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,i),t.after_update.forEach(et)}}function ti(t){const i=[],e=[];O.forEach(a=>t.indexOf(a)===-1?i.push(a):e.push(a)),e.forEach(a=>a()),O=i}const Q=new Set;let ii;function J(t,i){t&&t.i&&(Q.delete(t),t.i(i))}function gt(t,i,e,a){if(t&&t.o){if(Q.has(t))return;Q.add(t),ii.c.push(()=>{Q.delete(t),a&&(e&&t.d(1),a())}),t.o(i)}else a&&a()}function mt(t){t&&t.c()}function tt(t,i,e){const{fragment:a,after_update:r}=t.$$;a&&a.m(i,e),et(()=>{const s=t.$$.on_mount.map(Mt).filter(Ot);t.$$.on_destroy?t.$$.on_destroy.push(...s):at(s),t.$$.on_mount=[]}),r.forEach(et)}function it(t,i){const e=t.$$;e.fragment!==null&&(ti(e.after_update),at(e.on_destroy),e.fragment&&e.fragment.d(i),e.on_destroy=e.fragment=null,e.ctx=[])}function ei(t,i){t.$$.dirty[0]===-1&&(I.push(t),Qt(),t.$$.dirty.fill(0)),t.$$.dirty[i/31|0]|=1<<i%31}function rt(t,i,e,a,r,s,l=null,g=[-1]){const m=S;z(t);const o=t.$$={fragment:null,ctx:[],props:s,update:_,not_equal:r,bound:qt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(m?m.$$.context:[])),callbacks:qt(),dirty:g,skip_bound:!1,root:i.target||m.$$.root};l&&l(o.root);let u=!1;if(o.ctx=e?e(t,i.props||{},(d,P,...b)=>{const v=b.length?b[0]:P;return o.ctx&&r(o.ctx[d],o.ctx[d]=v)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](v),u&&ei(t,d)),P}):[],o.update(),u=!0,at(o.before_update),o.fragment=a?a(o.ctx):!1,i.target){if(i.hydrate){const d=Yt(i.target);o.fragment&&o.fragment.l(d),d.forEach(B)}else o.fragment&&o.fragment.c();i.intro&&J(t.$$.fragment),tt(t,i.target,i.anchor),Bt()}z(m)}class ot{constructor(){dt(this,"$$");dt(this,"$$set")}$destroy(){it(this,1),this.$destroy=_}$on(i,e){if(!Ot(e))return _;const a=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return a.push(e),()=>{const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}$set(i){this.$$set&&!Ft(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}const ai="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ai);const si="/assets/trenII-DaZpweGS.png",ri="/assets/prueba-BPfI_YNn.mp4",C=[];function oi(t,i=_){let e;const a=new Set;function r(g){if($(t,g)&&(t=g,e)){const m=!C.length;for(const o of a)o[1](),C.push(o,t);if(m){for(let o=0;o<C.length;o+=2)C[o][0](C[o+1]);C.length=0}}}function s(g){r(g(t))}function l(g,m=_){const o=[g,m];return a.add(o),a.size===1&&(e=i(r,s)||_),g(t),()=>{a.delete(o),a.size===0&&e&&(e(),e=null)}}return{set:r,update:s,subscribe:l}}function jt(t){return Object.prototype.toString.call(t)==="[object Date]"}function Ct(t){const i=t-1;return i*i*i+1}function vt(t,i){if(t===i||t!==t)return()=>t;const e=typeof t;if(e!==typeof i||Array.isArray(t)!==Array.isArray(i))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const a=i.map((r,s)=>vt(t[s],r));return r=>a.map(s=>s(r))}if(e==="object"){if(!t||!i)throw new Error("Object cannot be null");if(jt(t)&&jt(i)){t=t.getTime(),i=i.getTime();const s=i-t;return l=>new Date(t+l*s)}const a=Object.keys(i),r={};return a.forEach(s=>{r[s]=vt(t[s],i[s])}),s=>{const l={};return a.forEach(g=>{l[g]=r[g](s)}),l}}if(e==="number"){const a=i-t;return r=>t+r*a}throw new Error(`Cannot interpolate ${e} values`)}function It(t,i={}){const e=oi(t);let a,r=t;function s(l,g){if(t==null)return e.set(t=l),Promise.resolve();r=l;let m=a,o=!1,{delay:u=0,duration:d=400,easing:P=Ht,interpolate:b=vt}=Tt(Tt({},i),g);if(d===0)return m&&(m.abort(),m=null),e.set(t=r),Promise.resolve();const v=Rt()+u;let T;return a=Vt(x=>{if(x<v)return!0;o||(T=b(t,l),typeof d=="function"&&(d=d(t,l)),o=!0),m&&(m.abort(),m=null);const G=x-v;return G>d?(e.set(t=l),!1):(e.set(t=T(P(G/d))),!0)}),a.promise}return{set:s,update:(l,g)=>s(l(r,t),g),subscribe:e.subscribe}}function ni(t){let i,e,a,r,s=Math.round(t[1])+"",l,g,m,o,u,d,P,b,v,T,x=Math.round(t[2])+"",G;return{c(){i=c("div"),e=c("div"),a=c("p"),r=c("span"),l=K(s),g=w(),m=c("div"),o=c("p"),u=c("span"),d=K(t[0]),P=w(),b=c("div"),v=c("p"),T=c("span"),G=K(x),p(r,"class","svelte-slisg3"),p(a,"class","svelte-slisg3"),p(e,"class","lv_contPiece svelte-slisg3"),p(u,"class","svelte-slisg3"),p(o,"class","svelte-slisg3"),p(m,"class","lv_contPiece svelte-slisg3"),p(T,"class","svelte-slisg3"),p(v,"class","svelte-slisg3"),p(b,"class","lv_contPiece svelte-slisg3"),p(i,"class","lv_contP")},m(f,y){st(f,i,y),n(i,e),n(e,a),n(a,r),n(r,l),n(i,g),n(i,m),n(m,o),n(o,u),n(u,d),n(i,P),n(i,b),n(b,v),n(v,T),n(T,G)},p(f,[y]){y&2&&s!==(s=Math.round(f[1])+"")&&pt(l,s),y&1&&pt(d,f[0]),y&4&&x!==(x=Math.round(f[2])+"")&&pt(G,x)},i:_,o:_,d(f){f&&B(i)}}}function li(t,i,e){let a,r,{lv_day:s=0}=i,{lv_month:l}=i,{lv_year:g}=i;const m=It(s,{duration:1500,delay:0,easing:Ct});kt(t,m,d=>e(1,a=d));const o=It(g,{duration:1500,delay:0,easing:Ct});kt(t,o,d=>e(2,r=d));const u=function(){m.set(s),o.set(g)};return t.$$set=d=>{"lv_day"in d&&e(5,s=d.lv_day),"lv_month"in d&&e(0,l=d.lv_month),"lv_year"in d&&e(6,g=d.lv_year)},t.$$.update=()=>{t.$$.dirty&32&&u(),t.$$.dirty&64&&u()},[l,a,r,m,o,s,g]}class di extends ot{constructor(i){super(),rt(this,i,li,ni,$,{lv_day:5,lv_month:0,lv_year:6})}}function pi(t){let i;return{c(){i=c("div"),i.innerHTML=`<style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-box .g-artboard {
			margin:0 auto;
		}
		#g-20231231_imagenGuitarraApertura-box .g-artboard p {
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
				#g-20231231_imagenGuitarraApertura-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20231231_imagenGuitarraApertura-escritorio1200,
		#g-20231231_imagenGuitarraApertura-escritorio,
		#g-20231231_imagenGuitarraApertura-tableta,
		#g-20231231_imagenGuitarraApertura-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20231231_imagenGuitarraApertura-movil{
				display: none;
			}
			#g-20231231_imagenGuitarraApertura-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20231231_imagenGuitarraApertura-movil{
				display: none;
			}
			#g-20231231_imagenGuitarraApertura-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20231231_imagenGuitarraApertura-movil2{
				display: none;
			}
			#g-20231231_imagenGuitarraApertura-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20231231_imagenGuitarraApertura-tableta{
				display: none;
			}
			#g-20231231_imagenGuitarraApertura-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20231231_imagenGuitarraApertura-escritorio{
				display: none;
			}
			#g-20231231_imagenGuitarraApertura-escritorio1200{
				display:block;	
			}
			#g-20231231_imagenGuitarraApertura-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20231231_imagenGuitarraApertura-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_imagenGuitarraApertura/20231231_imagenGuitarraApertura-movil.jpg"/></div> <div id="g-20231231_imagenGuitarraApertura-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_imagenGuitarraApertura/20231231_imagenGuitarraApertura-movil2.jpg"/></div> <div id="g-20231231_imagenGuitarraApertura-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_imagenGuitarraApertura/20231231_imagenGuitarraApertura-tableta.jpg"/></div> <div id="g-20231231_imagenGuitarraApertura-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_imagenGuitarraApertura/20231231_imagenGuitarraApertura-escritorio.jpg"/></div> <div id="g-20231231_imagenGuitarraApertura-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20231231_imagenGuitarraApertura-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_imagenGuitarraApertura/20231231_imagenGuitarraApertura-escritorio1200.jpg"/></div>`,p(i,"id","g-20231231_imagenGuitarraApertura-box"),p(i,"class","ai2html")},m(e,a){st(e,i,a)},p:_,i:_,o:_,d(e){e&&B(i)}}}class ci extends ot{constructor(i){super(),rt(this,i,null,pi,$,{})}}function gi(t){let i;return{c(){i=c("div"),i.innerHTML=`<style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-box .g-artboard {
			margin:0 auto;
		}
		#g-20231231_sonidoGuitarra-box .g-artboard p {
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
				#g-20231231_sonidoGuitarra-movil {
			display:block;
			max-width: 300px !important;
		}
		#g-20231231_sonidoGuitarra-escritorio1200,
		#g-20231231_sonidoGuitarra-escritorio,
		#g-20231231_sonidoGuitarra-tableta,
		#g-20231231_sonidoGuitarra-movil2{ 
			display:none;
			}
		@media (min-width:375px) {
			#g-20231231_sonidoGuitarra-movil{
				display: none;
			}
			#g-20231231_sonidoGuitarra-movil2{
				display:block;
				width: 100% !important;
			}
		}
		@media (min-width:414px) {
			#g-20231231_sonidoGuitarra-movil{
				display: none;
			}
			#g-20231231_sonidoGuitarra-movil2{
				display:block;
				max-width: 375px !important;
			}
		}
		@media (min-width:566px) {
			#g-20231231_sonidoGuitarra-movil2{
				display: none;
			}
			#g-20231231_sonidoGuitarra-tableta{
				display:block;
			}
		}
		@media (min-width:833px) {
			#g-20231231_sonidoGuitarra-tableta{
				display: none;
			}
			#g-20231231_sonidoGuitarra-escritorio{
				display:block;
			}
		}
		@media (min-width:1200px) {
			#g-20231231_sonidoGuitarra-escritorio{
				display: none;
			}
			#g-20231231_sonidoGuitarra-escritorio1200{
				display:block;	
			}
			#g-20231231_sonidoGuitarra-box {
				margin-left: 0;
				margin-right: 0;
			}
		}</style> <div id="g-20231231_sonidoGuitarra-movil" class="g-artboard g-artboard-v3" data-min-width="289" data-max-width="344"><style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-movil {
				position:relative;
				overflow:hidden;
				width:289px;
			}
			#g-20231231_sonidoGuitarra-movil p {
				font-family:Roboto,sans-serif;
				font-weight:400;
				font-size:12px;
				line-height:15px;
				filter:alpha(opacity=100);
				-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
				opacity:1;
				letter-spacing:0em;
				text-align:left;
				color:rgb(0,0,0);
				text-transform:none;
				padding-bottom:0;
				padding-top:0;
				mix-blend-mode:normal;
				font-style:normal;
			}
			#g-20231231_sonidoGuitarra-movil .g-pstyle0 {
				font-weight:700;
				font-size:16px;
				line-height:20px;
			}
			#g-20231231_sonidoGuitarra-movil .g-pstyle1 {
				font-weight:700;
			}
			#g-20231231_sonidoGuitarra-movil .g-pstyle2 {
				color:rgb(242,242,242);
			}
			#g-20231231_sonidoGuitarra-movil .g-cstyle0 {
				color:rgb(240,182,70);
			}</style> <img id="g-ai0-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_sonidoGuitarra/20231231_sonidoGuitarra-movil.jpg"/> <div id="g-ai0-1" class="g-ai2html-settings g-aiAbs" style="top:7.1895%;left:0.9204%;width:73.3564%;"><p class="g-pstyle0">Cómo se genera el <span class="g-cstyle0">sonido</span></p></div> <div id="g-ai0-2" class="g-ai2html-settings g-aiAbs" style="top:11.2977%;left:0.9204%;width:70.2422%;"><p>El sonido de una guitarra se genera a través de la vibración de las cuerdas al ser pulsadas. La caja de resonancia y sus materiales son los encargados de amplificar y matizar el sonido</p></div> <div id="g-ai0-3" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:30.2019%;margin-top:-8.2px;left:0.6126%;width:12px;"><p class="g-pstyle1">1.</p></div> <div id="g-ai0-4" class="g-ai2html-settings g-aiAbs" style="top:29.143%;left:5.7568%;width:54.3253%;"><p>Al tocar (pulsar) las cuerdas, entran en movimiento</p></div> <div id="g-ai0-5" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:37.263%;margin-top:-8.2px;left:0.6235%;width:12px;"><p class="g-pstyle1">2.</p></div> <div id="g-ai0-6" class="g-ai2html-settings g-aiAbs" style="top:36.2041%;left:5.7677%;width:35.2941%;"><p>Esas vibraciones se transmiten a través del puente, a la tapa armónica</p></div> <div id="g-ai0-7" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:48.3039%;margin-top:-8.2px;left:44.8889%;width:29px;"><p class="g-pstyle2">Boca</p></div> <div id="g-ai0-8" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:48.6891%;margin-top:-8.2px;left:66.3479%;width:12px;"><p class="g-pstyle1">4.</p></div> <div id="g-ai0-9" class="g-ai2html-settings g-aiAbs" style="top:47.6302%;left:71.492%;width:29.4118%;"><p>El sonido sale por la boca de la caja</p></div> <div id="g-ai0-10" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:81.6836%;margin-top:-8.2px;left:58.8162%;width:36px;"><p class="g-pstyle2">Fondo</p></div> <div id="g-ai0-11" class="g-ai2html-settings g-aiAbs" style="top:90.5102%;left:52.5103%;width:49.1349%;"><p>La caja de resonancia amplifica y matiza el sonido gracias al varetaje</p></div> <div id="g-ai0-12" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:91.5691%;margin-top:-8.2px;left:47.3663%;width:12px;"><p class="g-pstyle1">3.</p></div></div> <div id="g-20231231_sonidoGuitarra-movil2" class="g-artboard g-artboard-v3" data-min-width="345" data-max-width="565"><style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-movil2 {
				position:relative;
				overflow:hidden;
				width:345px;
			}
			#g-20231231_sonidoGuitarra-movil2 p {
				font-family:Roboto,sans-serif;
				font-weight:400;
				font-size:14px;
				line-height:17px;
				filter:alpha(opacity=100);
				-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
				opacity:1;
				letter-spacing:0em;
				text-align:left;
				color:rgb(0,0,0);
				text-transform:none;
				padding-bottom:0;
				padding-top:0;
				mix-blend-mode:normal;
				font-style:normal;
			}
			#g-20231231_sonidoGuitarra-movil2 .g-pstyle0 {
				font-weight:700;
				font-size:19px;
				line-height:23px;
			}
			#g-20231231_sonidoGuitarra-movil2 .g-pstyle1 {
				font-weight:700;
			}
			#g-20231231_sonidoGuitarra-movil2 .g-pstyle2 {
				color:rgb(242,242,242);
			}
			#g-20231231_sonidoGuitarra-movil2 .g-cstyle0 {
				color:rgb(240,182,70);
			}</style> <img id="g-ai1-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_sonidoGuitarra/20231231_sonidoGuitarra-movil2.jpg"/> <div id="g-ai1-1" class="g-ai2html-settings g-aiAbs" style="top:5.9978%;left:1.3102%;width:71.8841%;"><p class="g-pstyle0">Cómo se genera el <span class="g-cstyle0">sonido</span></p></div> <div id="g-ai1-2" class="g-ai2html-settings g-aiAbs" style="top:10.1075%;left:1.3102%;width:68.6957%;"><p>El sonido de una guitarra se genera a través de la vibración de las cuerdas al ser pulsadas. La caja de resonancia y sus materiales son los encargados de amplificar y matizar el sonido</p></div> <div id="g-ai1-3" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:29.2545%;margin-top:-9.4px;left:1.0091%;width:14px;"><p class="g-pstyle1">1.</p></div> <div id="g-ai1-4" class="g-ai2html-settings g-aiAbs" style="top:28.2121%;left:6.0445%;width:53.3333%;"><p>Al tocar (pulsar) las cuerdas, entran en movimiento</p></div> <div id="g-ai1-5" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:36.3631%;margin-top:-9.4px;left:1.0197%;width:14px;"><p class="g-pstyle1">2.</p></div> <div id="g-ai1-6" class="g-ai2html-settings g-aiAbs" style="top:35.3207%;left:6.0552%;width:34.4928%;"><p>Esas vibraciones se transmiten a través del puente, a la tapa armónica</p></div> <div id="g-ai1-7" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:47.4702%;margin-top:-9.4px;left:44.3506%;width:34px;"><p class="g-pstyle2">Boca</p></div> <div id="g-ai1-8" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:48.0256%;margin-top:-9.4px;left:65.3566%;width:14px;"><p class="g-pstyle1">4.</p></div> <div id="g-ai1-9" class="g-ai2html-settings g-aiAbs" style="top:46.9831%;left:70.3922%;width:28.9855%;"><p>El sonido sale por la boca de la caja</p></div> <div id="g-ai1-10" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:81.347%;margin-top:-9.4px;left:57.9841%;width:41px;"><p class="g-pstyle2">Fondo</p></div> <div id="g-ai1-11" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:91.3434%;margin-top:-9.4px;left:46.7756%;width:14px;"><p class="g-pstyle1">3.</p></div> <div id="g-ai1-12" class="g-ai2html-settings g-aiAbs" style="top:90.3009%;left:51.8112%;width:48.1159%;"><p>La caja de resonancia amplifica y matiza el sonido gracias al varetaje</p></div></div> <div id="g-20231231_sonidoGuitarra-tableta" class="g-artboard g-artboard-v3" data-min-width="566" data-max-width="832"><style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-tableta {
				position:relative;
				overflow:hidden;
				width:566px;
			}
			#g-20231231_sonidoGuitarra-tableta p {
				font-family:Roboto,sans-serif;
				font-weight:400;
				font-size:14px;
				line-height:17px;
				filter:alpha(opacity=100);
				-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
				opacity:1;
				letter-spacing:0em;
				text-align:left;
				color:rgb(0,0,0);
				text-transform:none;
				padding-bottom:0;
				padding-top:0;
				mix-blend-mode:normal;
				font-style:normal;
			}
			#g-20231231_sonidoGuitarra-tableta .g-pstyle0 {
				font-weight:700;
				font-size:19px;
				line-height:23px;
			}
			#g-20231231_sonidoGuitarra-tableta .g-pstyle1 {
				font-weight:700;
			}
			#g-20231231_sonidoGuitarra-tableta .g-pstyle2 {
				color:rgb(242,242,242);
			}
			#g-20231231_sonidoGuitarra-tableta .g-cstyle0 {
				color:rgb(240,182,70);
			}</style> <img id="g-ai2-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_sonidoGuitarra/20231231_sonidoGuitarra-tableta.jpg"/> <div id="g-ai2-1" class="g-ai2html-settings g-aiAbs" style="top:3.2763%;left:51.4932%;width:43.8163%;"><p class="g-pstyle0">Cómo se genera el <span class="g-cstyle0">sonido</span></p></div> <div id="g-ai2-2" class="g-ai2html-settings g-aiAbs" style="top:7.0646%;left:51.4932%;width:42.0495%;"><p>El sonido de una guitarra se genera a través de la vibración de las cuerdas al ser pulsadas. La caja de resonancia y sus materiales son los encargados de amplificar y matizar el sonido</p></div> <div id="g-ai2-3" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:21.5403%;margin-top:-9.4px;left:51.1329%;width:14px;"><p class="g-pstyle1">1.</p></div> <div id="g-ai2-4" class="g-ai2html-settings g-aiAbs" style="top:20.5794%;left:54.2023%;width:21.3781%;"><p>Al tocar (pulsar) las cuerdas, entran en movimiento</p></div> <div id="g-ai2-5" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:30.4478%;margin-top:-9.4px;left:59.2601%;width:14px;"><p class="g-pstyle1">4.</p></div> <div id="g-ai2-6" class="g-ai2html-settings g-aiAbs" style="top:29.4869%;left:62.3295%;width:15.5477%;"><p>El sonido sale por la boca de la caja</p></div> <div id="g-ai2-7" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:39.7648%;margin-top:-9.4px;left:25.1678%;width:14px;"><p class="g-pstyle1">2.</p></div> <div id="g-ai2-8" class="g-ai2html-settings g-aiAbs" style="top:38.8039%;left:28.2371%;width:21.0247%;"><p>Esas vibraciones se transmiten a través del puente, a la tapa armónica</p></div> <div id="g-ai2-9" class="g-ai2html-settings g-aiAbs" style="top:38.8039%;left:0.7241%;width:21.7314%;"><p>La tapa armónica suele construirse en cedro o abeto, con las vetas de la madera en la misma dirección que las cuerdas...</p></div> <div id="g-ai2-10" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:50.0033%;margin-top:-9.4px;left:60.9446%;width:34px;"><p class="g-pstyle2">Boca</p></div> <div id="g-ai2-11" class="g-ai2html-settings g-aiAbs" style="top:55.1855%;left:0.7241%;width:20.318%;"><p>...ya que las vibraciones se transmiten mejor y con un mayor recorrido a lo largo de la veta</p></div> <div id="g-ai2-12" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:84.507%;margin-top:-9.4px;left:0.5178%;width:42px;"><p>Culata</p></div> <div id="g-ai2-13" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:85.3261%;margin-top:-9.4px;left:79.8528%;width:14px;"><p class="g-pstyle1">3.</p></div> <div id="g-ai2-14" class="g-ai2html-settings g-aiAbs" style="top:84.3652%;left:82.9223%;width:16.9611%;"><p>La caja de resonancia amplifica y matiza el sonido gracias al varetaje</p></div> <div id="g-ai2-15" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:89.6262%;margin-top:-9.4px;left:50.0561%;width:41px;"><p class="g-pstyle2">Fondo</p></div></div> <div id="g-20231231_sonidoGuitarra-escritorio" class="g-artboard g-artboard-v3" data-min-width="833" data-max-width="1199"><style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-escritorio {
				position:relative;
				overflow:hidden;
				width:833px;
			}
			#g-20231231_sonidoGuitarra-escritorio p {
				font-family:Roboto,sans-serif;
				font-weight:400;
				font-size:14px;
				line-height:17px;
				filter:alpha(opacity=100);
				-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
				opacity:1;
				letter-spacing:0em;
				text-align:left;
				color:rgb(0,0,0);
				text-transform:none;
				padding-bottom:0;
				padding-top:0;
				mix-blend-mode:normal;
				font-style:normal;
			}
			#g-20231231_sonidoGuitarra-escritorio .g-pstyle0 {
				font-weight:700;
				font-size:19px;
				line-height:23px;
			}
			#g-20231231_sonidoGuitarra-escritorio .g-pstyle1 {
				font-weight:700;
			}
			#g-20231231_sonidoGuitarra-escritorio .g-pstyle2 {
				color:rgb(242,242,242);
			}
			#g-20231231_sonidoGuitarra-escritorio .g-cstyle0 {
				color:rgb(240,182,70);
			}</style> <img id="g-ai3-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_sonidoGuitarra/20231231_sonidoGuitarra-escritorio.jpg"/> <div id="g-ai3-1" class="g-ai2html-settings g-aiAbs" style="top:3.5321%;left:51.4778%;width:29.7719%;"><p class="g-pstyle0">Cómo se genera el <span class="g-cstyle0">sonido</span></p></div> <div id="g-ai3-2" class="g-ai2html-settings g-aiAbs" style="top:6.8876%;left:51.4778%;width:28.5714%;"><p>El sonido de una guitarra se genera a través de la vibración de las cuerdas al ser pulsadas. La caja de resonancia y sus materiales son los encargados de amplificar y matizar el sonido</p></div> <div id="g-ai3-3" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:19.9903%;margin-top:-9.4px;left:51.233%;width:14px;"><p class="g-pstyle1">1.</p></div> <div id="g-ai3-4" class="g-ai2html-settings g-aiAbs" style="top:19.1616%;left:53.3185%;width:14.5258%;"><p>Al tocar (pulsar) las cuerdas, entran en movimiento</p></div> <div id="g-ai3-5" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:28.2024%;margin-top:-9.4px;left:62.3574%;width:14px;"><p class="g-pstyle1">4.</p></div> <div id="g-ai3-6" class="g-ai2html-settings g-aiAbs" style="top:27.3736%;left:64.4429%;width:10.5642%;"><p>El sonido sale por la boca de la caja</p></div> <div id="g-ai3-7" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:35.0899%;margin-top:-9.4px;left:26.4675%;width:14px;"><p class="g-pstyle1">2.</p></div> <div id="g-ai3-8" class="g-ai2html-settings g-aiAbs" style="top:34.2612%;left:28.5531%;width:14.2857%;"><p>Esas vibraciones se transmiten a través del puente, a la tapa armónica</p></div> <div id="g-ai3-9" class="g-ai2html-settings g-aiAbs" style="top:34.2612%;left:1.3754%;width:14.7659%;"><p>La tapa armónica suele construirse en cedro o abeto, con las vetas de la madera en la misma dirección que las cuerdas...</p></div> <div id="g-ai3-10" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:43.8318%;margin-top:-9.4px;left:63.7761%;width:34px;"><p class="g-pstyle2">Boca</p></div> <div id="g-ai3-11" class="g-ai2html-settings g-aiAbs" style="top:48.3012%;left:1.3754%;width:13.8055%;"><p>...ya que las vibraciones se transmiten mejor y con un mayor recorrido a lo largo de la veta</p></div> <div id="g-ai3-12" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:53.6334%;margin-top:-9.4px;left:31.2125%;width:44px;"><p>Selleta</p></div> <div id="g-ai3-13" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:65.2893%;margin-top:-9.4px;left:40.9352%;width:46px;"><p class="g-pstyle2">Puente</p></div> <div id="g-ai3-14" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:75.6206%;margin-top:-9.4px;left:76.9099%;width:14px;"><p class="g-pstyle1">3.</p></div> <div id="g-ai3-15" class="g-ai2html-settings g-aiAbs" style="top:74.7919%;left:78.9954%;width:19.6879%;"><p>La caja de resonancia amplifica y matiza el sonido gracias al varetaje</p></div> <div id="g-ai3-16" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:78.6229%;margin-top:-9.4px;left:0.8707%;width:42px;"><p>Culata</p></div> <div id="g-ai3-17" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:88.5127%;margin-top:-9.4px;left:44.3435%;width:41px;"><p class="g-pstyle2">Fondo</p></div></div> <div id="g-20231231_sonidoGuitarra-escritorio1200" class="g-artboard g-artboard-v3" data-min-width="1200"><style type="text/css" media="screen,print">#g-20231231_sonidoGuitarra-escritorio1200 {
				position:relative;
				overflow:hidden;
				width:1200px;
			}
			#g-20231231_sonidoGuitarra-escritorio1200 p {
				font-family:Roboto,sans-serif;
				font-weight:400;
				font-size:14px;
				line-height:17px;
				filter:alpha(opacity=100);
				-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
				opacity:1;
				letter-spacing:0em;
				text-align:left;
				color:rgb(0,0,0);
				text-transform:none;
				padding-bottom:0;
				padding-top:0;
				mix-blend-mode:normal;
				font-style:normal;
			}
			#g-20231231_sonidoGuitarra-escritorio1200 .g-pstyle0 {
				font-weight:700;
				font-size:19px;
				line-height:23px;
			}
			#g-20231231_sonidoGuitarra-escritorio1200 .g-pstyle1 {
				font-weight:700;
			}
			#g-20231231_sonidoGuitarra-escritorio1200 .g-pstyle2 {
				color:rgb(242,242,242);
			}
			#g-20231231_sonidoGuitarra-escritorio1200 .g-cstyle0 {
				color:rgb(240,182,70);
			}</style> <img id="g-ai4-0" class="g-aiImg" src="https://visuals.lavanguardia.com/ai2html/20231231_sonidoGuitarra/20231231_sonidoGuitarra-escritorio1200.jpg"/> <div id="g-ai4-1" class="g-ai2html-settings g-aiAbs" style="top:5.526%;left:50.7523%;width:20.6667%;"><p class="g-pstyle0">Cómo se genera el <span class="g-cstyle0">sonido</span></p></div> <div id="g-ai4-2" class="g-ai2html-settings g-aiAbs" style="top:8.6239%;left:50.7523%;width:19.8333%;"><p>El sonido de una guitarra se genera a través de la vibración de las cuerdas al ser pulsadas. La caja de resonancia y sus materiales son los encargados de amplificar y matizar el sonido</p></div> <div id="g-ai4-3" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:24.5644%;margin-top:-9.4px;left:39.1657%;width:14px;"><p class="g-pstyle1">1.</p></div> <div id="g-ai4-4" class="g-ai2html-settings g-aiAbs" style="top:23.7786%;left:40.6134%;width:10.0833%;"><p>Al tocar (pulsar) las cuerdas, entran en movimiento</p></div> <div id="g-ai4-5" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:32.2673%;margin-top:-9.4px;left:43.5546%;width:14px;"><p class="g-pstyle1">4.</p></div> <div id="g-ai4-6" class="g-ai2html-settings g-aiAbs" style="top:31.4815%;left:45.0023%;width:7.3333%;"><p>El sonido sale por la boca de la caja</p></div> <div id="g-ai4-7" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:38.798%;margin-top:-9.4px;left:18.6411%;width:14px;"><p class="g-pstyle1">2.</p></div> <div id="g-ai4-8" class="g-ai2html-settings g-aiAbs" style="top:38.0122%;left:20.0888%;width:9.9167%;"><p>Esas vibraciones se transmiten a través del puente, a la tapa armónica</p></div> <div id="g-ai4-9" class="g-ai2html-settings g-aiAbs" style="top:38.0122%;left:1.2229%;width:10.25%;"><p>La tapa armónica suele construirse en cedro o abeto, con las vetas de la madera en la misma dirección que las cuerdas...</p></div> <div id="g-ai4-10" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:47.1707%;margin-top:-9.4px;left:44.5394%;width:34px;"><p class="g-pstyle2">Boca</p></div> <div id="g-ai4-11" class="g-ai2html-settings g-aiAbs" style="top:51.4086%;left:1.2229%;width:9.5833%;"><p>...ya que las vibraciones se transmiten mejor y con un mayor recorrido a lo largo de la veta</p></div> <div id="g-ai4-12" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:56.4645%;margin-top:-9.4px;left:21.9349%;width:44px;"><p>Selleta</p></div> <div id="g-ai4-13" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:67.4328%;margin-top:-9.4px;left:28.684%;width:46px;"><p class="g-pstyle2">Puente</p></div> <div id="g-ai4-14" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:75.3869%;margin-top:-9.4px;left:56.9064%;width:14px;"><p class="g-pstyle1">3.</p></div> <div id="g-ai4-15" class="g-ai2html-settings g-aiAbs" style="top:74.6011%;left:58.3541%;width:13.6667%;"><p>La caja de resonancia amplifica y matiza el sonido gracias al varetaje</p></div> <div id="g-ai4-16" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:80.1593%;margin-top:-9.4px;left:0.8726%;width:42px;"><p>Culata</p></div> <div id="g-ai4-17" class="g-ai2html-settings g-aiAbs g-aiPointText" style="top:89.5367%;margin-top:-9.4px;left:31.0499%;width:41px;"><p class="g-pstyle2">Fondo</p></div></div>`,p(i,"id","g-20231231_sonidoGuitarra-box"),p(i,"class","ai2html")},m(e,a){st(e,i,a)},p:_,i:_,o:_,d(e){e&&B(i)}}}class mi extends ot{constructor(i){super(),rt(this,i,null,gi,$,{})}}function ui(t){let i=!1,e=()=>{i=!1},a,r,s,l,g,m,o,u,d,P,b,v,T,x,G,f,y,U,D,k,ft,H,ht,F,yt,A,N,bt,E,_t,R,xt,V,wt,L,At,X,Gt,nt,Y,lt,Pt;return et(t[5]),k=new di({props:{lv_day:t[1],lv_month:t[2],lv_year:t[3]}}),E=new ci({}),L=new mi({}),{c(){r=c("main"),s=c("div"),l=c("div"),g=w(),m=c("div"),o=c("div"),u=c("div"),d=c("div"),d.innerHTML=`<img src="${si}" alt="tren 11-M" class="svelte-oky4ii"/>`,P=w(),b=c("div"),v=c("div"),v.innerHTML="",T=w(),x=c("div"),x.innerHTML='<div class="lv_Titular lv_tit svelte-oky4ii"><h1 class="svelte-oky4ii">11-M: las señales que España no vio</h1></div> <div class="lv_Subti lv_tit svelte-oky4ii"><h3 class="svelte-oky4ii">Cómo se gestó el atentado más mortífero de Europa</h3></div> <div class="lv_Author lv_tit svelte-oky4ii"><p class="lv_auth svelte-oky4ii">Por Ignacio Orovio, Clara Penín, Laura Aragó y Begoña M. Goitia</p></div> <div class="lv_titExtra lv_tit svelte-oky4ii"><span><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"></path></svg></span></div>',G=w(),f=c("div"),y=c("div"),U=c("div"),D=c("div"),mt(k.$$.fragment),ft=w(),H=c("div"),ht=w(),F=c("div"),F.innerHTML=`<div class="lv_videoWrapper svelte-oky4ii"><video loop="" muted="" autoplay="" class="svelte-oky4ii"><source src="${ri}" type="video/mp4"/></video></div>`,yt=w(),A=c("div"),N=c("div"),N.innerHTML='<p class="lv_Par svelte-oky4ii">El once de marzo de 2011 a las siete y 38 minutos de la mañana explotaban dos bombas en la estación del Pozo. Fue el último aviso que recibieron los servicios de emergencia. A los pocos minutos, las vías del tren eran un hormiguero. Centenares de vecinos de vecinos de Puente de Vallecas se convirtieron en las manos que le faltaban a los equipos de rescate. Las imágenes llenaron los telediarios. Un señor empujaba a toda prisa un carro de la compra repleto de botellines de agua. Otros salían de sus casas cargados con mantas y sábanas. Grupos de vecinos, algunos todavía en pijama y otros vestidos con traje y corbata, trasladaban a los heridos con camillas improvisadas con mantas.</p> <p class="lv_Par svelte-oky4ii">Ese día 191 personas perdieron la vida en las vías del tren. El peor atentado terrorista en la historia de Europa.</p> <p id="io_sect1" class="lv_Par io_bird svelte-oky4ii">Este marzo se cumplen 20 años de aquel jueves negro. El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los atentados de Estados Unidos. Entre ambos atentados hay conexiones que van más allá del número: <span class="lv_Highlight">en España hubo reuniones clave previas al 11-S</span> y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror.</p>',bt=w(),mt(E.$$.fragment),_t=w(),R=c("div"),R.innerHTML='<p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p id="io_sect2" class="lv_Par io_bird svelte-oky4ii">SEGUNDO CAMBIO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>',xt=w(),V=c("div"),V.innerHTML='<p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p id="io_sect3" class="lv_Par io_bird svelte-oky4ii">TERCER CAMBIO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>',wt=w(),mt(L.$$.fragment),At=w(),X=c("div"),X.innerHTML='<p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p> <p class="lv_Par svelte-oky4ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>',Gt=w(),nt=c("div"),p(l,"id","lv_preHeader"),p(d,"class","lv_obLayer lv_obLayer1 capaTren svelte-oky4ii"),p(v,"class","lv_explWrapper svelte-oky4ii"),Z(v,"transform",`scale(${t[4]<0?0:t[4]})`),p(b,"class","lv_obLayer lv_obLayer2 capaExpl svelte-oky4ii"),p(u,"class","lv_obWrapper svelte-oky4ii"),p(o,"class","lv_Obertura svelte-oky4ii"),p(x,"class","lv_titBlock svelte-oky4ii"),Z(x,"transform",`translate3d(0, ${t[0]*-.3}px, 0)`),p(m,"id","lv_Header"),p(D,"class","lv_cont_fecha svelte-oky4ii"),p(U,"class","lv_migCont"),p(y,"class","lv_Contador svelte-oky4ii"),p(H,"id","lv_Counter"),p(H,"class","io_bird lv_fakeCounter"),p(F,"class","lv_inVideo svelte-oky4ii"),p(N,"class","lv_Text svelte-oky4ii"),p(R,"class","lv_Text svelte-oky4ii"),p(V,"class","lv_Text svelte-oky4ii"),p(X,"class","lv_Text svelte-oky4ii"),p(A,"class","lv_Text_block svelte-oky4ii"),p(f,"id","lv_Content"),p(nt,"id","lv_Footer"),p(s,"class","lv_mainContainer svelte-oky4ii")},m(h,q){st(h,r,q),n(r,s),n(s,l),n(s,g),n(s,m),n(m,o),n(o,u),n(u,d),n(u,P),n(u,b),n(b,v),n(m,T),n(m,x),n(s,G),n(s,f),n(f,y),n(y,U),n(U,D),tt(k,D,null),n(f,ft),n(f,H),n(f,ht),n(f,F),n(f,yt),n(f,A),n(A,N),n(A,bt),tt(E,A,null),n(A,_t),n(A,R),n(A,xt),n(A,V),n(A,wt),tt(L,A,null),n(A,At),n(A,X),n(s,Gt),n(s,nt),Y=!0,lt||(Pt=Xt(window,"scroll",()=>{i=!0,clearTimeout(a),a=setTimeout(e,100),t[5]()}),lt=!0)},p(h,[q]){q&1&&!i&&(i=!0,clearTimeout(a),scrollTo(window.pageXOffset,h[0]),a=setTimeout(e,100)),q&16&&Z(v,"transform",`scale(${h[4]<0?0:h[4]})`),q&1&&Z(x,"transform",`translate3d(0, ${h[0]*-.3}px, 0)`);const W={};q&2&&(W.lv_day=h[1]),q&4&&(W.lv_month=h[2]),q&8&&(W.lv_year=h[3]),k.$set(W)},i(h){Y||(J(k.$$.fragment,h),J(E.$$.fragment,h),J(L.$$.fragment,h),Y=!0)},o(h){gt(k.$$.fragment,h),gt(E.$$.fragment,h),gt(L.$$.fragment,h),Y=!1},d(h){h&&B(r),it(k),it(E),it(L),lt=!1,Pt()}}}function vi(t,i,e){let a;const r=new Date;let s=r.getDate(),l=r.toLocaleString("es-ES",{month:"short"}),g=r.getFullYear();Zt(m);function m(){let d=document.querySelector(".lv_Contador"),P=document.querySelector(".lv_cont_fecha");const b={root:null,rootMargin:"0px 0px -30% 0px",threshold:.2};function v(G,f){G.forEach(y=>{y.isIntersecting&&(y.target.id==="lv_Counter"?(console.log("entra el counter por 1a vez"),e(1,s=11),e(2,l="MAR"),e(3,g=2004)):y.target.id==="io_sect1"?(P.classList.add("lv_peq"),d.classList.add("lv_upTop"),console.log("2º cambio del counter"),e(1,s=30),e(2,l="AGO"),e(3,g=2001),y.target.querySelector(".lv_Highlight").classList.add("prova")):y.target.id==="io_sect2"?(console.log("3er cambio del counter"),e(1,s=5),e(2,l="SEPT"),e(3,g=2002)):y.target.id==="io_sect3"&&(console.log("4º cambio del counter"),e(1,s=29),e(2,l="DIC"),e(3,g=2003)))})}const T=new IntersectionObserver(v,b);document.querySelectorAll(".io_bird").forEach(G=>{T.observe(G)})}let o=0;function u(){e(0,o=window.pageYOffset)}return t.$$.update=()=>{t.$$.dirty&1&&e(4,a=1-o*.005)},[o,s,l,g,a,u]}class fi extends ot{constructor(i){super(),rt(this,i,vi,ui,$,{})}}new fi({target:document.getElementById("app")});
