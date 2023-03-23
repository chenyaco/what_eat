(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pl(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function gl(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=we(s)?Cp(s):gl(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(we(e))return e;if(ae(e))return e}}const yp=/;(?![^(]*\))/g,vp=/:([^]+)/,Ep=/\/\*.*?\*\//gs;function Cp(e){const t={};return e.replace(Ep,"").split(yp).forEach(n=>{if(n){const s=n.split(vp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ut(e){let t="";if(we(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=Ut(e[n]);s&&(t+=s+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bp=pl(wp);function xh(e){return!!e||e===""}function Ip(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=hr(e[s],t[s]);return n}function hr(e,t){if(e===t)return!0;let n=Wc(e),s=Wc(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=As(e),s=As(t),n||s)return e===t;if(n=M(e),s=M(t),n||s)return n&&s?Ip(e,t):!1;if(n=ae(e),s=ae(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!hr(e[o],t[o]))return!1}}return String(e)===String(t)}function Ah(e,t){return e.findIndex(n=>hr(n,t))}const mn=e=>we(e)?e:e==null?"":M(e)||ae(e)&&(e.toString===Ph||!W(e.toString))?JSON.stringify(e,Nh,2):String(e),Nh=(e,t)=>t&&t.__v_isRef?Nh(e,t.value):Mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:fr(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!M(t)&&!Dh(t)?String(t):t,ce={},kn=[],ut=()=>{},Tp=()=>!1,Sp=/^on[^a-z]/,ur=e=>Sp.test(e),_l=e=>e.startsWith("onUpdate:"),Me=Object.assign,ml=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xp=Object.prototype.hasOwnProperty,X=(e,t)=>xp.call(e,t),M=Array.isArray,Mn=e=>Zs(e)==="[object Map]",fr=e=>Zs(e)==="[object Set]",Wc=e=>Zs(e)==="[object Date]",W=e=>typeof e=="function",we=e=>typeof e=="string",As=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Rh=e=>ae(e)&&W(e.then)&&W(e.catch),Ph=Object.prototype.toString,Zs=e=>Ph.call(e),Ap=e=>Zs(e).slice(8,-1),Dh=e=>Zs(e)==="[object Object]",yl=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ai=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Np=/-(\w)/g,jn=dr(e=>e.replace(Np,(t,n)=>n?n.toUpperCase():"")),Rp=/\B([A-Z])/g,Xn=dr(e=>e.replace(Rp,"-$1").toLowerCase()),Oh=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qr=dr(e=>e?`on${Oh(e)}`:""),Ns=(e,t)=>!Object.is(e,t),Ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Oi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Io=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Vc;const Pp=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class kh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Mh(e){return new kh(e)}function Dp(e,t=Ye){t&&t.active&&t.effects.push(e)}function Lh(){return Ye}function Op(e){Ye&&Ye.cleanups.push(e)}const vl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fh=e=>(e.w&qt)>0,Uh=e=>(e.n&qt)>0,kp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Mp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Fh(i)&&!Uh(i)?i.delete(e):t[n++]=i,i.w&=~qt,i.n&=~qt}t.length=n}},ki=new WeakMap;let gs=0,qt=1;const To=30;let ot;const yn=Symbol(""),So=Symbol("");class El{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dp(this,s)}run(){if(!this.active)return this.fn();let t=ot,n=Bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ot,ot=this,Bt=!0,qt=1<<++gs,gs<=To?kp(this):Kc(this),this.fn()}finally{gs<=To&&Mp(this),qt=1<<--gs,ot=this.parent,Bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Kc(this),this.onStop&&this.onStop(),this.active=!1)}}function Kc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Bt=!0;const Bh=[];function Qn(){Bh.push(Bt),Bt=!1}function Jn(){const e=Bh.pop();Bt=e===void 0?!0:e}function qe(e,t,n){if(Bt&&ot){let s=ki.get(e);s||ki.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=vl()),Hh(i)}}function Hh(e,t){let n=!1;gs<=To?Uh(e)||(e.n|=qt,n=!Fh(e)):n=!e.has(ot),n&&(e.add(ot),ot.deps.push(e))}function Nt(e,t,n,s,i,r){const o=ki.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&M(e)){const c=Number(s);o.forEach((a,h)=>{(h==="length"||h>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":M(e)?yl(n)&&l.push(o.get("length")):(l.push(o.get(yn)),Mn(e)&&l.push(o.get(So)));break;case"delete":M(e)||(l.push(o.get(yn)),Mn(e)&&l.push(o.get(So)));break;case"set":Mn(e)&&l.push(o.get(yn));break}if(l.length===1)l[0]&&xo(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);xo(vl(c))}}function xo(e,t){const n=M(e)?e:[...e];for(const s of n)s.computed&&qc(s);for(const s of n)s.computed||qc(s)}function qc(e,t){(e!==ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Lp(e,t){var n;return(n=ki.get(e))===null||n===void 0?void 0:n.get(t)}const Fp=pl("__proto__,__v_isRef,__isVue"),jh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(As)),Up=Cl(),Bp=Cl(!1,!0),Hp=Cl(!0),zc=jp();function jp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=G(this);for(let r=0,o=this.length;r<o;r++)qe(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qn();const s=G(this)[t].apply(this,n);return Jn(),s}}),e}function $p(e){const t=G(this);return qe(t,"has",e),t.hasOwnProperty(e)}function Cl(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?ig:qh:t?Kh:Vh).get(s))return s;const o=M(s);if(!e){if(o&&X(zc,i))return Reflect.get(zc,i,r);if(i==="hasOwnProperty")return $p}const l=Reflect.get(s,i,r);return(As(i)?jh.has(i):Fp(i))||(e||qe(s,"get",i),t)?l:pe(l)?o&&yl(i)?l:l.value:ae(l)?e?zh(l):vn(l):l}}const Wp=$h(),Vp=$h(!0);function $h(e=!1){return function(n,s,i,r){let o=n[s];if($n(o)&&pe(o)&&!pe(i))return!1;if(!e&&(!Mi(i)&&!$n(i)&&(o=G(o),i=G(i)),!M(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=M(n)&&yl(s)?Number(s)<n.length:X(n,s),c=Reflect.set(n,s,i,r);return n===G(r)&&(l?Ns(i,o)&&Nt(n,"set",s,i):Nt(n,"add",s,i)),c}}function Kp(e,t){const n=X(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Nt(e,"delete",t,void 0),s}function qp(e,t){const n=Reflect.has(e,t);return(!As(t)||!jh.has(t))&&qe(e,"has",t),n}function zp(e){return qe(e,"iterate",M(e)?"length":yn),Reflect.ownKeys(e)}const Wh={get:Up,set:Wp,deleteProperty:Kp,has:qp,ownKeys:zp},Gp={get:Hp,set(e,t){return!0},deleteProperty(e,t){return!0}},Yp=Me({},Wh,{get:Bp,set:Vp}),wl=e=>e,pr=e=>Reflect.getPrototypeOf(e);function mi(e,t,n=!1,s=!1){e=e.__v_raw;const i=G(e),r=G(t);n||(t!==r&&qe(i,"get",t),qe(i,"get",r));const{has:o}=pr(i),l=s?wl:n?Tl:Rs;if(o.call(i,t))return l(e.get(t));if(o.call(i,r))return l(e.get(r));e!==i&&e.get(t)}function yi(e,t=!1){const n=this.__v_raw,s=G(n),i=G(e);return t||(e!==i&&qe(s,"has",e),qe(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function vi(e,t=!1){return e=e.__v_raw,!t&&qe(G(e),"iterate",yn),Reflect.get(e,"size",e)}function Gc(e){e=G(e);const t=G(this);return pr(t).has.call(t,e)||(t.add(e),Nt(t,"add",e,e)),this}function Yc(e,t){t=G(t);const n=G(this),{has:s,get:i}=pr(n);let r=s.call(n,e);r||(e=G(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?Ns(t,o)&&Nt(n,"set",e,t):Nt(n,"add",e,t),this}function Xc(e){const t=G(this),{has:n,get:s}=pr(t);let i=n.call(t,e);i||(e=G(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&Nt(t,"delete",e,void 0),r}function Qc(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Nt(e,"clear",void 0,void 0),n}function Ei(e,t){return function(s,i){const r=this,o=r.__v_raw,l=G(o),c=t?wl:e?Tl:Rs;return!e&&qe(l,"iterate",yn),o.forEach((a,h)=>s.call(i,c(a),c(h),r))}}function Ci(e,t,n){return function(...s){const i=this.__v_raw,r=G(i),o=Mn(r),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,a=i[e](...s),h=n?wl:t?Tl:Rs;return!t&&qe(r,"iterate",c?So:yn),{next(){const{value:u,done:d}=a.next();return d?{value:u,done:d}:{value:l?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Mt(e){return function(...t){return e==="delete"?!1:this}}function Xp(){const e={get(r){return mi(this,r)},get size(){return vi(this)},has:yi,add:Gc,set:Yc,delete:Xc,clear:Qc,forEach:Ei(!1,!1)},t={get(r){return mi(this,r,!1,!0)},get size(){return vi(this)},has:yi,add:Gc,set:Yc,delete:Xc,clear:Qc,forEach:Ei(!1,!0)},n={get(r){return mi(this,r,!0)},get size(){return vi(this,!0)},has(r){return yi.call(this,r,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:Ei(!0,!1)},s={get(r){return mi(this,r,!0,!0)},get size(){return vi(this,!0)},has(r){return yi.call(this,r,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:Ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ci(r,!1,!1),n[r]=Ci(r,!0,!1),t[r]=Ci(r,!1,!0),s[r]=Ci(r,!0,!0)}),[e,n,t,s]}const[Qp,Jp,Zp,eg]=Xp();function bl(e,t){const n=t?e?eg:Zp:e?Jp:Qp;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const tg={get:bl(!1,!1)},ng={get:bl(!1,!0)},sg={get:bl(!0,!1)},Vh=new WeakMap,Kh=new WeakMap,qh=new WeakMap,ig=new WeakMap;function rg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function og(e){return e.__v_skip||!Object.isExtensible(e)?0:rg(Ap(e))}function vn(e){return $n(e)?e:Il(e,!1,Wh,tg,Vh)}function lg(e){return Il(e,!1,Yp,ng,Kh)}function zh(e){return Il(e,!0,Gp,sg,qh)}function Il(e,t,n,s,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=og(e);if(o===0)return e;const l=new Proxy(e,o===2?s:n);return i.set(e,l),l}function xt(e){return $n(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function $n(e){return!!(e&&e.__v_isReadonly)}function Mi(e){return!!(e&&e.__v_isShallow)}function Gh(e){return xt(e)||$n(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Wn(e){return Oi(e,"__v_skip",!0),e}const Rs=e=>ae(e)?vn(e):e,Tl=e=>ae(e)?zh(e):e;function Yh(e){Bt&&ot&&(e=G(e),Hh(e.dep||(e.dep=vl())))}function Xh(e,t){e=G(e);const n=e.dep;n&&xo(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function ln(e){return cg(e,!1)}function cg(e,t){return pe(e)?e:new ag(e,t)}class ag{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:Rs(t)}get value(){return Yh(this),this._value}set value(t){const n=this.__v_isShallow||Mi(t)||$n(t);t=n?t:G(t),Ns(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Rs(t),Xh(this))}}function B(e){return pe(e)?e.value:e}const hg={get:(e,t,n)=>B(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Qh(e){return xt(e)?e:new Proxy(e,hg)}function ug(e){const t=M(e)?new Array(e.length):{};for(const n in e)t[n]=Jh(e,n);return t}class fg{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Lp(G(this._object),this._key)}}function Jh(e,t,n){const s=e[t];return pe(s)?s:new fg(e,t,n)}var Zh;class dg{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zh]=!1,this._dirty=!0,this.effect=new El(t,()=>{this._dirty||(this._dirty=!0,Xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=G(this);return Yh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zh="__v_isReadonly";function pg(e,t,n=!1){let s,i;const r=W(e);return r?(s=e,i=ut):(s=e.get,i=e.set),new dg(s,i,r||!i,n)}function Ht(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){gr(r,t,n)}return i}function tt(e,t,n,s){if(W(e)){const r=Ht(e,t,n,s);return r&&Rh(r)&&r.catch(o=>{gr(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(tt(e[r],t,n,s));return i}function gr(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](e,o,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ht(c,null,10,[e,o,l]);return}}gg(e,n,i,s)}function gg(e,t,n,s=!0){console.error(e)}let Ps=!1,Ao=!1;const De=[];let yt=0;const Ln=[];let It=null,cn=0;const eu=Promise.resolve();let Sl=null;function tu(e){const t=Sl||eu;return e?t.then(this?e.bind(this):e):t}function _g(e){let t=yt+1,n=De.length;for(;t<n;){const s=t+n>>>1;Ds(De[s])<e?t=s+1:n=s}return t}function xl(e){(!De.length||!De.includes(e,Ps&&e.allowRecurse?yt+1:yt))&&(e.id==null?De.push(e):De.splice(_g(e.id),0,e),nu())}function nu(){!Ps&&!Ao&&(Ao=!0,Sl=eu.then(iu))}function mg(e){const t=De.indexOf(e);t>yt&&De.splice(t,1)}function yg(e){M(e)?Ln.push(...e):(!It||!It.includes(e,e.allowRecurse?cn+1:cn))&&Ln.push(e),nu()}function Jc(e,t=Ps?yt+1:0){for(;t<De.length;t++){const n=De[t];n&&n.pre&&(De.splice(t,1),t--,n())}}function su(e){if(Ln.length){const t=[...new Set(Ln)];if(Ln.length=0,It){It.push(...t);return}for(It=t,It.sort((n,s)=>Ds(n)-Ds(s)),cn=0;cn<It.length;cn++)It[cn]();It=null,cn=0}}const Ds=e=>e.id==null?1/0:e.id,vg=(e,t)=>{const n=Ds(e)-Ds(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function iu(e){Ao=!1,Ps=!0,De.sort(vg);const t=ut;try{for(yt=0;yt<De.length;yt++){const n=De[yt];n&&n.active!==!1&&Ht(n,null,14)}}finally{yt=0,De.length=0,su(),Ps=!1,Sl=null,(De.length||Ln.length)&&iu()}}function Eg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||ce;d&&(i=n.map(g=>we(g)?g.trim():g)),u&&(i=n.map(Io))}let l,c=s[l=Qr(t)]||s[l=Qr(jn(t))];!c&&r&&(c=s[l=Qr(Xn(t))]),c&&tt(c,e,6,i);const a=s[l+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(a,e,6,i)}}function ru(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},l=!1;if(!W(e)){const c=a=>{const h=ru(a,t,!0);h&&(l=!0,Me(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ae(e)&&s.set(e,null),null):(M(r)?r.forEach(c=>o[c]=null):Me(o,r),ae(e)&&s.set(e,o),o)}function _r(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Xn(t))||X(e,t))}let et=null,ou=null;function Li(e){const t=et;return et=e,ou=e&&e.type.__scopeId||null,t}function Cg(e,t=et,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&la(-1);const r=Li(t);let o;try{o=e(...i)}finally{Li(r),s._d&&la(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Jr(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:h,renderCache:u,data:d,setupState:g,ctx:v,inheritAttrs:C}=e;let H,j;const fe=Li(e);try{if(n.shapeFlag&4){const k=i||s;H=mt(h.call(k,k,u,r,g,d,v)),j=c}else{const k=t;H=mt(k.length>1?k(r,{attrs:c,slots:l,emit:a}):k(r,null)),j=t.props?c:wg(c)}}catch(k){Es.length=0,gr(k,e,1),H=Xe(ft)}let L=H;if(j&&C!==!1){const k=Object.keys(j),{shapeFlag:D}=L;k.length&&D&7&&(o&&k.some(_l)&&(j=bg(j,o)),L=zt(L,j))}return n.dirs&&(L=zt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),H=L,Li(fe),H}const wg=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},bg=(e,t)=>{const n={};for(const s in e)(!_l(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ig(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:l,patchFlag:c}=t,a=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zc(s,o,a):!!o;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!_r(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Zc(s,o,a):!0:!!o;return!1}function Zc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!_r(n,r))return!0}return!1}function Tg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Sg=e=>e.__isSuspense;function xg(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):yg(e)}function Ag(e,t){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[e]=t}}function ys(e,t,n=!1){const s=ye||et;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(s.proxy):t}}const wi={};function Ri(e,t,n){return lu(e,t,n)}function lu(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=Lh()===(ye==null?void 0:ye.scope)?ye:null;let c,a=!1,h=!1;if(pe(e)?(c=()=>e.value,a=Mi(e)):xt(e)?(c=()=>e,s=!0):M(e)?(h=!0,a=e.some(L=>xt(L)||Mi(L)),c=()=>e.map(L=>{if(pe(L))return L.value;if(xt(L))return fn(L);if(W(L))return Ht(L,l,2)})):W(e)?t?c=()=>Ht(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return u&&u(),tt(e,l,3,[d])}:c=ut,t&&s){const L=c;c=()=>fn(L())}let u,d=L=>{u=j.onStop=()=>{Ht(L,l,4)}},g;if(Ms)if(d=ut,t?n&&tt(t,l,3,[c(),h?[]:void 0,d]):c(),i==="sync"){const L=w_();g=L.__watcherHandles||(L.__watcherHandles=[])}else return ut;let v=h?new Array(e.length).fill(wi):wi;const C=()=>{if(j.active)if(t){const L=j.run();(s||a||(h?L.some((k,D)=>Ns(k,v[D])):Ns(L,v)))&&(u&&u(),tt(t,l,3,[L,v===wi?void 0:h&&v[0]===wi?[]:v,d]),v=L)}else j.run()};C.allowRecurse=!!t;let H;i==="sync"?H=C:i==="post"?H=()=>$e(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),H=()=>xl(C));const j=new El(c,H);t?n?C():v=j.run():i==="post"?$e(j.run.bind(j),l&&l.suspense):j.run();const fe=()=>{j.stop(),l&&l.scope&&ml(l.scope.effects,j)};return g&&g.push(fe),fe}function Ng(e,t,n){const s=this.proxy,i=we(e)?e.includes(".")?cu(s,e):()=>s[e]:e.bind(s,s);let r;W(t)?r=t:(r=t.handler,n=t);const o=ye;Vn(this);const l=lu(i,r.bind(s),n);return o?Vn(o):En(),l}function cu(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fn(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))fn(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)fn(e[n],t);else if(fr(e)||Mn(e))e.forEach(n=>{fn(n,t)});else if(Dh(e))for(const n in e)fn(e[n],t);return e}function Rg(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Al(()=>{e.isMounted=!0}),fu(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],Pg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},setup(e,{slots:t}){const n=Su(),s=Rg();let i;return()=>{const r=t.default&&hu(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==ft){o=C;break}}const l=G(e),{mode:c}=l;if(s.isLeaving)return Zr(o);const a=ea(o);if(!a)return Zr(o);const h=No(a,l,s,n);Ro(a,h);const u=n.subTree,d=u&&ea(u);let g=!1;const{getTransitionKey:v}=a.type;if(v){const C=v();i===void 0?i=C:C!==i&&(i=C,g=!0)}if(d&&d.type!==ft&&(!an(a,d)||g)){const C=No(d,l,s,n);if(Ro(d,C),c==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Zr(o);c==="in-out"&&a.type!==ft&&(C.delayLeave=(H,j,fe)=>{const L=au(s,d);L[String(d.key)]=d,H._leaveCb=()=>{j(),H._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=fe})}return o}}},Dg=Pg;function au(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function No(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:C,onAppear:H,onAfterAppear:j,onAppearCancelled:fe}=t,L=String(e.key),k=au(n,e),D=(x,ee)=>{x&&tt(x,s,9,ee)},he=(x,ee)=>{const J=ee[1];D(x,ee),M(x)?x.every(ve=>ve.length<=1)&&J():x.length<=1&&J()},$={mode:r,persisted:o,beforeEnter(x){let ee=l;if(!n.isMounted)if(i)ee=C||l;else return;x._leaveCb&&x._leaveCb(!0);const J=k[L];J&&an(e,J)&&J.el._leaveCb&&J.el._leaveCb(),D(ee,[x])},enter(x){let ee=c,J=a,ve=h;if(!n.isMounted)if(i)ee=H||c,J=j||a,ve=fe||h;else return;let Je=!1;const st=x._enterCb=it=>{Je||(Je=!0,it?D(ve,[x]):D(J,[x]),$.delayedLeave&&$.delayedLeave(),x._enterCb=void 0)};ee?he(ee,[x,st]):st()},leave(x,ee){const J=String(e.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return ee();D(u,[x]);let ve=!1;const Je=x._leaveCb=st=>{ve||(ve=!0,ee(),st?D(v,[x]):D(g,[x]),x._leaveCb=void 0,k[J]===e&&delete k[J])};k[J]=e,d?he(d,[x,Je]):Je()},clone(x){return No(x,t,n,s)}};return $}function Zr(e){if(mr(e))return e=zt(e),e.children=null,e}function ea(e){return mr(e)?e.children?e.children[0]:void 0:e}function Ro(e,t){e.shapeFlag&6&&e.component?Ro(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hu(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&i++,s=s.concat(hu(o.children,t,l))):(t||o.type!==ft)&&s.push(l!=null?zt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Pi=e=>!!e.type.__asyncLoader,mr=e=>e.type.__isKeepAlive;function Og(e,t){uu(e,"a",t)}function kg(e,t){uu(e,"da",t)}function uu(e,t,n=ye){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(yr(t,s,n),n){let i=n.parent;for(;i&&i.parent;)mr(i.parent.vnode)&&Mg(s,t,n,i),i=i.parent}}function Mg(e,t,n,s){const i=yr(t,e,s,!0);du(()=>{ml(s[t],i)},n)}function yr(e,t,n=ye,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Qn(),Vn(n);const l=tt(t,n,e,o);return En(),Jn(),l});return s?i.unshift(r):i.push(r),r}}const Dt=e=>(t,n=ye)=>(!Ms||e==="sp")&&yr(e,(...s)=>t(...s),n),Lg=Dt("bm"),Al=Dt("m"),Fg=Dt("bu"),Ug=Dt("u"),fu=Dt("bum"),du=Dt("um"),Bg=Dt("sp"),Hg=Dt("rtg"),jg=Dt("rtc");function $g(e,t=ye){yr("ec",e,t)}function Os(e,t){const n=et;if(n===null)return e;const s=Cr(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,l,c,a=ce]=t[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&fn(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return e}function tn(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Qn(),tt(c,n,8,[e.el,l,e,t]),Jn())}}const Wg=Symbol();function Nl(e,t,n,s){let i;const r=n&&n[s];if(M(e)||we(e)){i=new Array(e.length);for(let o=0,l=e.length;o<l;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(ae(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,r&&r[l]));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=t(e[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Po=e=>e?xu(e)?Cr(e)||e.proxy:Po(e.parent):null,vs=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Po(e.parent),$root:e=>Po(e.root),$emit:e=>e.emit,$options:e=>Rl(e),$forceUpdate:e=>e.f||(e.f=()=>xl(e.update)),$nextTick:e=>e.n||(e.n=tu.bind(e.proxy)),$watch:e=>Ng.bind(e)}),eo=(e,t)=>e!==ce&&!e.__isScriptSetup&&X(e,t),Vg={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=e;let a;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(eo(s,t))return o[t]=1,s[t];if(i!==ce&&X(i,t))return o[t]=2,i[t];if((a=e.propsOptions[0])&&X(a,t))return o[t]=3,r[t];if(n!==ce&&X(n,t))return o[t]=4,n[t];Do&&(o[t]=0)}}const h=vs[t];let u,d;if(h)return t==="$attrs"&&qe(e,"get",t),h(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==ce&&X(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,X(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return eo(i,t)?(i[t]=n,!0):s!==ce&&X(s,t)?(s[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||e!==ce&&X(e,o)||eo(t,o)||(l=r[0])&&X(l,o)||X(s,o)||X(vs,o)||X(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Do=!0;function Kg(e){const t=Rl(e),n=e.proxy,s=e.ctx;Do=!1,t.beforeCreate&&ta(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:u,mounted:d,beforeUpdate:g,updated:v,activated:C,deactivated:H,beforeDestroy:j,beforeUnmount:fe,destroyed:L,unmounted:k,render:D,renderTracked:he,renderTriggered:$,errorCaptured:x,serverPrefetch:ee,expose:J,inheritAttrs:ve,components:Je,directives:st,filters:it}=t;if(a&&qg(a,s,null,e.appContext.config.unwrapInjectedRef),o)for(const de in o){const ie=o[de];W(ie)&&(s[de]=ie.bind(n))}if(i){const de=i.call(n,n);ae(de)&&(e.data=vn(de))}if(Do=!0,r)for(const de in r){const ie=r[de],Zt=W(ie)?ie.bind(n,n):W(ie.get)?ie.get.bind(n,n):ut,gi=!W(ie)&&W(ie.set)?ie.set.bind(n):ut,en=Cs({get:Zt,set:gi});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>en.value,set:pt=>en.value=pt})}if(l)for(const de in l)pu(l[de],s,n,de);if(c){const de=W(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ie=>{Ag(ie,de[ie])})}h&&ta(h,e,"c");function Fe(de,ie){M(ie)?ie.forEach(Zt=>de(Zt.bind(n))):ie&&de(ie.bind(n))}if(Fe(Lg,u),Fe(Al,d),Fe(Fg,g),Fe(Ug,v),Fe(Og,C),Fe(kg,H),Fe($g,x),Fe(jg,he),Fe(Hg,$),Fe(fu,fe),Fe(du,k),Fe(Bg,ee),M(J))if(J.length){const de=e.exposed||(e.exposed={});J.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>n[ie],set:Zt=>n[ie]=Zt})})}else e.exposed||(e.exposed={});D&&e.render===ut&&(e.render=D),ve!=null&&(e.inheritAttrs=ve),Je&&(e.components=Je),st&&(e.directives=st)}function qg(e,t,n=ut,s=!1){M(e)&&(e=Oo(e));for(const i in e){const r=e[i];let o;ae(r)?"default"in r?o=ys(r.from||i,r.default,!0):o=ys(r.from||i):o=ys(r),pe(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[i]=o}}function ta(e,t,n){tt(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function pu(e,t,n,s){const i=s.includes(".")?cu(n,s):()=>n[s];if(we(e)){const r=t[e];W(r)&&Ri(i,r)}else if(W(e))Ri(i,e.bind(n));else if(ae(e))if(M(e))e.forEach(r=>pu(r,t,n,s));else{const r=W(e.handler)?e.handler.bind(n):t[e.handler];W(r)&&Ri(i,r,e)}}function Rl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let c;return l?c=l:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(a=>Fi(c,a,o,!0)),Fi(c,t,o)),ae(t)&&r.set(t,c),c}function Fi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Fi(e,r,n,!0),i&&i.forEach(o=>Fi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=zg[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const zg={data:na,props:sn,emits:sn,methods:sn,computed:sn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:sn,directives:sn,watch:Yg,provide:na,inject:Gg};function na(e,t){return t?e?function(){return Me(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Gg(e,t){return sn(Oo(e),Oo(t))}function Oo(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function sn(e,t){return e?Me(Me(Object.create(null),e),t):t}function Yg(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const s in t)n[s]=Ue(e[s],t[s]);return n}function Xg(e,t,n,s=!1){const i={},r={};Oi(r,Er,1),e.propsDefaults=Object.create(null),gu(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:lg(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Qg(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,l=G(i),[c]=e.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(_r(e.emitsOptions,d))continue;const g=t[d];if(c)if(X(r,d))g!==r[d]&&(r[d]=g,a=!0);else{const v=jn(d);i[v]=ko(c,l,v,g,e,!1)}else g!==r[d]&&(r[d]=g,a=!0)}}}else{gu(e,t,i,r)&&(a=!0);let h;for(const u in l)(!t||!X(t,u)&&((h=Xn(u))===u||!X(t,h)))&&(c?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=ko(c,l,u,void 0,e,!0)):delete i[u]);if(r!==l)for(const u in r)(!t||!X(t,u))&&(delete r[u],a=!0)}a&&Nt(e,"set","$attrs")}function gu(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(Ai(c))continue;const a=t[c];let h;i&&X(i,h=jn(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:_r(e.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=G(n),a=l||ce;for(let h=0;h<r.length;h++){const u=r[h];n[u]=ko(i,c,u,a[u],e,!X(a,u))}}return o}function ko(e,t,n,s,i,r){const o=e[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(Vn(i),s=a[n]=c.call(null,t),En())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xn(n))&&(s=!0))}return s}function _u(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},l=[];let c=!1;if(!W(e)){const h=u=>{c=!0;const[d,g]=_u(u,t,!0);Me(o,d),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return ae(e)&&s.set(e,kn),kn;if(M(r))for(let h=0;h<r.length;h++){const u=jn(r[h]);sa(u)&&(o[u]=ce)}else if(r)for(const h in r){const u=jn(h);if(sa(u)){const d=r[h],g=o[u]=M(d)||W(d)?{type:d}:Object.assign({},d);if(g){const v=oa(Boolean,g.type),C=oa(String,g.type);g[0]=v>-1,g[1]=C<0||v<C,(v>-1||X(g,"default"))&&l.push(u)}}}const a=[o,l];return ae(e)&&s.set(e,a),a}function sa(e){return e[0]!=="$"}function ia(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ra(e,t){return ia(e)===ia(t)}function oa(e,t){return M(t)?t.findIndex(n=>ra(n,e)):W(t)&&ra(t,e)?0:-1}const mu=e=>e[0]==="_"||e==="$stable",Pl=e=>M(e)?e.map(mt):[mt(e)],Jg=(e,t,n)=>{if(t._n)return t;const s=Cg((...i)=>Pl(t(...i)),n);return s._c=!1,s},yu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(mu(i))continue;const r=e[i];if(W(r))t[i]=Jg(i,r,s);else if(r!=null){const o=Pl(r);t[i]=()=>o}}},vu=(e,t)=>{const n=Pl(t);e.slots.default=()=>n},Zg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Oi(t,"_",n)):yu(t,e.slots={})}else e.slots={},t&&vu(e,t);Oi(e.slots,Er,1)},e_=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ce;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(Me(i,t),!n&&l===1&&delete i._):(r=!t.$stable,yu(t,i)),o=t}else t&&(vu(e,t),o={default:1});if(r)for(const l in i)!mu(l)&&!(l in o)&&delete i[l]};function Eu(){return{app:null,config:{isNativeTag:Tp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t_=0;function n_(e,t){return function(s,i=null){W(s)||(s=Object.assign({},s)),i!=null&&!ae(i)&&(i=null);const r=Eu(),o=new Set;let l=!1;const c=r.app={_uid:t_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:b_,get config(){return r.config},set config(a){},use(a,...h){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(c,...h)):W(a)&&(o.add(a),a(c,...h))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,h){return h?(r.components[a]=h,c):r.components[a]},directive(a,h){return h?(r.directives[a]=h,c):r.directives[a]},mount(a,h,u){if(!l){const d=Xe(s,i);return d.appContext=r,h&&t?t(d,a):e(d,a,u),l=!0,c._container=a,a.__vue_app__=c,Cr(d.component)||d.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(a,h){return r.provides[a]=h,c}};return c}}function Mo(e,t,n,s,i=!1){if(M(e)){e.forEach((d,g)=>Mo(d,t&&(M(t)?t[g]:t),n,s,i));return}if(Pi(s)&&!i)return;const r=s.shapeFlag&4?Cr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=e,a=t&&t.r,h=l.refs===ce?l.refs={}:l.refs,u=l.setupState;if(a!=null&&a!==c&&(we(a)?(h[a]=null,X(u,a)&&(u[a]=null)):pe(a)&&(a.value=null)),W(c))Ht(c,l,12,[o,h]);else{const d=we(c),g=pe(c);if(d||g){const v=()=>{if(e.f){const C=d?X(u,c)?u[c]:h[c]:c.value;i?M(C)&&ml(C,r):M(C)?C.includes(r)||C.push(r):d?(h[c]=[r],X(u,c)&&(u[c]=h[c])):(c.value=[r],e.k&&(h[e.k]=c.value))}else d?(h[c]=o,X(u,c)&&(u[c]=o)):g&&(c.value=o,e.k&&(h[e.k]=o))};o?(v.id=-1,$e(v,n)):v()}}}const $e=xg;function s_(e){return i_(e)}function i_(e,t){const n=Pp();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:u,nextSibling:d,setScopeId:g=ut,insertStaticContent:v}=e,C=(f,p,_,y=null,m=null,I=null,S=!1,w=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!an(f,p)&&(y=_i(f),pt(f,m,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:R,shapeFlag:A}=p;switch(E){case vr:H(f,p,_,y);break;case ft:j(f,p,_,y);break;case to:f==null&&fe(p,_,y,S);break;case Be:Je(f,p,_,y,m,I,S,w,T);break;default:A&1?D(f,p,_,y,m,I,S,w,T):A&6?st(f,p,_,y,m,I,S,w,T):(A&64||A&128)&&E.process(f,p,_,y,m,I,S,w,T,An)}R!=null&&m&&Mo(R,f&&f.ref,I,p||f,!p)},H=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&a(m,p.children)}},j=(f,p,_,y)=>{f==null?s(p.el=c(p.children||""),_,y):p.el=f.el},fe=(f,p,_,y)=>{[f.el,f.anchor]=v(f.children,p,_,y,f.el,f.anchor)},L=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},k=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},D=(f,p,_,y,m,I,S,w,T)=>{S=S||p.type==="svg",f==null?he(p,_,y,m,I,S,w,T):ee(f,p,m,I,S,w,T)},he=(f,p,_,y,m,I,S,w)=>{let T,E;const{type:R,props:A,shapeFlag:P,transition:U,dirs:q}=f;if(T=f.el=o(f.type,I,A&&A.is,A),P&8?h(T,f.children):P&16&&x(f.children,T,null,y,m,I&&R!=="foreignObject",S,w),q&&tn(f,null,y,"created"),$(T,f,f.scopeId,S,y),A){for(const te in A)te!=="value"&&!Ai(te)&&r(T,te,null,A[te],I,f.children,y,m,bt);"value"in A&&r(T,"value",null,A.value),(E=A.onVnodeBeforeMount)&&_t(E,y,f)}q&&tn(f,null,y,"beforeMount");const re=(!m||m&&!m.pendingBranch)&&U&&!U.persisted;re&&U.beforeEnter(T),s(T,p,_),((E=A&&A.onVnodeMounted)||re||q)&&$e(()=>{E&&_t(E,y,f),re&&U.enter(T),q&&tn(f,null,y,"mounted")},m)},$=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let I=0;I<y.length;I++)g(f,y[I]);if(m){let I=m.subTree;if(p===I){const S=m.vnode;$(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},x=(f,p,_,y,m,I,S,w,T=0)=>{for(let E=T;E<f.length;E++){const R=f[E]=w?Ft(f[E]):mt(f[E]);C(null,R,p,_,y,m,I,S,w)}},ee=(f,p,_,y,m,I,S)=>{const w=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:R}=p;T|=f.patchFlag&16;const A=f.props||ce,P=p.props||ce;let U;_&&nn(_,!1),(U=P.onVnodeBeforeUpdate)&&_t(U,_,p,f),R&&tn(p,f,_,"beforeUpdate"),_&&nn(_,!0);const q=m&&p.type!=="foreignObject";if(E?J(f.dynamicChildren,E,w,_,y,q,I):S||ie(f,p,w,null,_,y,q,I,!1),T>0){if(T&16)ve(w,p,A,P,_,y,m);else if(T&2&&A.class!==P.class&&r(w,"class",null,P.class,m),T&4&&r(w,"style",A.style,P.style,m),T&8){const re=p.dynamicProps;for(let te=0;te<re.length;te++){const me=re[te],rt=A[me],Nn=P[me];(Nn!==rt||me==="value")&&r(w,me,rt,Nn,m,f.children,_,y,bt)}}T&1&&f.children!==p.children&&h(w,p.children)}else!S&&E==null&&ve(w,p,A,P,_,y,m);((U=P.onVnodeUpdated)||R)&&$e(()=>{U&&_t(U,_,p,f),R&&tn(p,f,_,"updated")},y)},J=(f,p,_,y,m,I,S)=>{for(let w=0;w<p.length;w++){const T=f[w],E=p[w],R=T.el&&(T.type===Be||!an(T,E)||T.shapeFlag&70)?u(T.el):_;C(T,E,R,null,y,m,I,S,!0)}},ve=(f,p,_,y,m,I,S)=>{if(_!==y){if(_!==ce)for(const w in _)!Ai(w)&&!(w in y)&&r(f,w,_[w],null,S,p.children,m,I,bt);for(const w in y){if(Ai(w))continue;const T=y[w],E=_[w];T!==E&&w!=="value"&&r(f,w,E,T,S,p.children,m,I,bt)}"value"in y&&r(f,"value",_.value,y.value)}},Je=(f,p,_,y,m,I,S,w,T)=>{const E=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:A,dynamicChildren:P,slotScopeIds:U}=p;U&&(w=w?w.concat(U):U),f==null?(s(E,_,y),s(R,_,y),x(p.children,_,R,m,I,S,w,T)):A>0&&A&64&&P&&f.dynamicChildren?(J(f.dynamicChildren,P,_,m,I,S,w),(p.key!=null||m&&p===m.subTree)&&Cu(f,p,!0)):ie(f,p,_,R,m,I,S,w,T)},st=(f,p,_,y,m,I,S,w,T)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,T):it(p,_,y,m,I,S,T):Le(f,p,T)},it=(f,p,_,y,m,I,S)=>{const w=f.component=g_(f,y,m);if(mr(f)&&(w.ctx.renderer=An),__(w),w.asyncDep){if(m&&m.registerDep(w,Fe),!f.el){const T=w.subTree=Xe(ft);j(null,T,p,_)}return}Fe(w,f,p,_,m,I,S)},Le=(f,p,_)=>{const y=p.component=f.component;if(Ig(f,p,_))if(y.asyncDep&&!y.asyncResolved){de(y,p,_);return}else y.next=p,mg(y.update),y.update();else p.el=f.el,y.vnode=p},Fe=(f,p,_,y,m,I,S)=>{const w=()=>{if(f.isMounted){let{next:R,bu:A,u:P,parent:U,vnode:q}=f,re=R,te;nn(f,!1),R?(R.el=q.el,de(f,R,S)):R=q,A&&Ni(A),(te=R.props&&R.props.onVnodeBeforeUpdate)&&_t(te,U,R,q),nn(f,!0);const me=Jr(f),rt=f.subTree;f.subTree=me,C(rt,me,u(rt.el),_i(rt),f,m,I),R.el=me.el,re===null&&Tg(f,me.el),P&&$e(P,m),(te=R.props&&R.props.onVnodeUpdated)&&$e(()=>_t(te,U,R,q),m)}else{let R;const{el:A,props:P}=p,{bm:U,m:q,parent:re}=f,te=Pi(p);if(nn(f,!1),U&&Ni(U),!te&&(R=P&&P.onVnodeBeforeMount)&&_t(R,re,p),nn(f,!0),A&&Xr){const me=()=>{f.subTree=Jr(f),Xr(A,f.subTree,f,m,null)};te?p.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=Jr(f);C(null,me,_,y,f,m,I),p.el=me.el}if(q&&$e(q,m),!te&&(R=P&&P.onVnodeMounted)){const me=p;$e(()=>_t(R,re,me),m)}(p.shapeFlag&256||re&&Pi(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&$e(f.a,m),f.isMounted=!0,p=_=y=null}},T=f.effect=new El(w,()=>xl(E),f.scope),E=f.update=()=>T.run();E.id=f.uid,nn(f,!0),E()},de=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Qg(f,p.props,y,_),e_(f,p.children,_),Qn(),Jc(),Jn()},ie=(f,p,_,y,m,I,S,w,T=!1)=>{const E=f&&f.children,R=f?f.shapeFlag:0,A=p.children,{patchFlag:P,shapeFlag:U}=p;if(P>0){if(P&128){gi(E,A,_,y,m,I,S,w,T);return}else if(P&256){Zt(E,A,_,y,m,I,S,w,T);return}}U&8?(R&16&&bt(E,m,I),A!==E&&h(_,A)):R&16?U&16?gi(E,A,_,y,m,I,S,w,T):bt(E,m,I,!0):(R&8&&h(_,""),U&16&&x(A,_,y,m,I,S,w,T))},Zt=(f,p,_,y,m,I,S,w,T)=>{f=f||kn,p=p||kn;const E=f.length,R=p.length,A=Math.min(E,R);let P;for(P=0;P<A;P++){const U=p[P]=T?Ft(p[P]):mt(p[P]);C(f[P],U,_,null,m,I,S,w,T)}E>R?bt(f,m,I,!0,!1,A):x(p,_,y,m,I,S,w,T,A)},gi=(f,p,_,y,m,I,S,w,T)=>{let E=0;const R=p.length;let A=f.length-1,P=R-1;for(;E<=A&&E<=P;){const U=f[E],q=p[E]=T?Ft(p[E]):mt(p[E]);if(an(U,q))C(U,q,_,null,m,I,S,w,T);else break;E++}for(;E<=A&&E<=P;){const U=f[A],q=p[P]=T?Ft(p[P]):mt(p[P]);if(an(U,q))C(U,q,_,null,m,I,S,w,T);else break;A--,P--}if(E>A){if(E<=P){const U=P+1,q=U<R?p[U].el:y;for(;E<=P;)C(null,p[E]=T?Ft(p[E]):mt(p[E]),_,q,m,I,S,w,T),E++}}else if(E>P)for(;E<=A;)pt(f[E],m,I,!0),E++;else{const U=E,q=E,re=new Map;for(E=q;E<=P;E++){const Ge=p[E]=T?Ft(p[E]):mt(p[E]);Ge.key!=null&&re.set(Ge.key,E)}let te,me=0;const rt=P-q+1;let Nn=!1,Hc=0;const cs=new Array(rt);for(E=0;E<rt;E++)cs[E]=0;for(E=U;E<=A;E++){const Ge=f[E];if(me>=rt){pt(Ge,m,I,!0);continue}let gt;if(Ge.key!=null)gt=re.get(Ge.key);else for(te=q;te<=P;te++)if(cs[te-q]===0&&an(Ge,p[te])){gt=te;break}gt===void 0?pt(Ge,m,I,!0):(cs[gt-q]=E+1,gt>=Hc?Hc=gt:Nn=!0,C(Ge,p[gt],_,null,m,I,S,w,T),me++)}const jc=Nn?r_(cs):kn;for(te=jc.length-1,E=rt-1;E>=0;E--){const Ge=q+E,gt=p[Ge],$c=Ge+1<R?p[Ge+1].el:y;cs[E]===0?C(null,gt,_,$c,m,I,S,w,T):Nn&&(te<0||E!==jc[te]?en(gt,_,$c,2):te--)}}},en=(f,p,_,y,m=null)=>{const{el:I,type:S,transition:w,children:T,shapeFlag:E}=f;if(E&6){en(f.component.subTree,p,_,y);return}if(E&128){f.suspense.move(p,_,y);return}if(E&64){S.move(f,p,_,An);return}if(S===Be){s(I,p,_);for(let A=0;A<T.length;A++)en(T[A],p,_,y);s(f.anchor,p,_);return}if(S===to){L(f,p,_);return}if(y!==2&&E&1&&w)if(y===0)w.beforeEnter(I),s(I,p,_),$e(()=>w.enter(I),m);else{const{leave:A,delayLeave:P,afterLeave:U}=w,q=()=>s(I,p,_),re=()=>{A(I,()=>{q(),U&&U()})};P?P(I,q,re):re()}else s(I,p,_)},pt=(f,p,_,y=!1,m=!1)=>{const{type:I,props:S,ref:w,children:T,dynamicChildren:E,shapeFlag:R,patchFlag:A,dirs:P}=f;if(w!=null&&Mo(w,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const U=R&1&&P,q=!Pi(f);let re;if(q&&(re=S&&S.onVnodeBeforeUnmount)&&_t(re,p,f),R&6)mp(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}U&&tn(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,An,y):E&&(I!==Be||A>0&&A&64)?bt(E,p,_,!1,!0):(I===Be&&A&384||!m&&R&16)&&bt(T,p,_),y&&Uc(f)}(q&&(re=S&&S.onVnodeUnmounted)||U)&&$e(()=>{re&&_t(re,p,f),U&&tn(f,null,p,"unmounted")},_)},Uc=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===Be){_p(_,y);return}if(p===to){k(f);return}const I=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:w}=m,T=()=>S(_,I);w?w(f.el,I,T):T()}else I()},_p=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},mp=(f,p,_)=>{const{bum:y,scope:m,update:I,subTree:S,um:w}=f;y&&Ni(y),m.stop(),I&&(I.active=!1,pt(S,f,p,_)),w&&$e(w,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},bt=(f,p,_,y=!1,m=!1,I=0)=>{for(let S=I;S<f.length;S++)pt(f[S],p,_,y,m)},_i=f=>f.shapeFlag&6?_i(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Bc=(f,p,_)=>{f==null?p._vnode&&pt(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,_),Jc(),su(),p._vnode=f},An={p:C,um:pt,m:en,r:Uc,mt:it,mc:x,pc:ie,pbc:J,n:_i,o:e};let Yr,Xr;return t&&([Yr,Xr]=t(An)),{render:Bc,hydrate:Yr,createApp:n_(Bc,Yr)}}function nn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cu(e,t,n=!1){const s=e.children,i=t.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ft(i[r]),l.el=o.el),n||Cu(o,l)),l.type===vr&&(l.el=o.el)}}function r_(e){const t=e.slice(),n=[0];let s,i,r,o,l;const c=e.length;for(s=0;s<c;s++){const a=e[s];if(a!==0){if(i=n[n.length-1],e[i]<a){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<a?r=l+1:o=l;a<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const o_=e=>e.__isTeleport,Be=Symbol(void 0),vr=Symbol(void 0),ft=Symbol(void 0),to=Symbol(void 0),Es=[];let ct=null;function Te(e=!1){Es.push(ct=e?null:[])}function l_(){Es.pop(),ct=Es[Es.length-1]||null}let ks=1;function la(e){ks+=e}function wu(e){return e.dynamicChildren=ks>0?ct||kn:null,l_(),ks>0&&ct&&ct.push(e),e}function Ae(e,t,n,s,i,r){return wu(Z(e,t,n,s,i,r,!0))}function c_(e,t,n,s,i){return wu(Xe(e,t,n,s,i,!0))}function a_(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Er="__vInternal",bu=({key:e})=>e??null,Di=({ref:e,ref_key:t,ref_for:n})=>e!=null?we(e)||pe(e)||W(e)?{i:et,r:e,k:t,f:!!n}:e:null;function Z(e,t=null,n=null,s=0,i=null,r=e===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bu(t),ref:t&&Di(t),scopeId:ou,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return l?(Dl(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),ks>0&&!o&&ct&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ct.push(c),c}const Xe=h_;function h_(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Wg)&&(e=ft),a_(e)){const l=zt(e,t,!0);return n&&Dl(l,n),ks>0&&!r&&ct&&(l.shapeFlag&6?ct[ct.indexOf(e)]=l:ct.push(l)),l.patchFlag|=-2,l}if(E_(e)&&(e=e.__vccOpts),t){t=u_(t);let{class:l,style:c}=t;l&&!we(l)&&(t.class=Ut(l)),ae(c)&&(Gh(c)&&!M(c)&&(c=Me({},c)),t.style=gl(c))}const o=we(e)?1:Sg(e)?128:o_(e)?64:ae(e)?4:W(e)?2:0;return Z(e,t,n,s,i,o,r,!0)}function u_(e){return e?Gh(e)||Er in e?Me({},e):e:null}function zt(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,l=t?f_(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&bu(l),ref:t&&t.ref?n&&i?M(i)?i.concat(Di(t)):[i,Di(t)]:Di(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Iu(e=" ",t=0){return Xe(vr,null,e,t)}function Tu(e="",t=!1){return t?(Te(),c_(ft,null,e)):Xe(ft,null,e)}function mt(e){return e==null||typeof e=="boolean"?Xe(ft):M(e)?Xe(Be,null,e.slice()):typeof e=="object"?Ft(e):Xe(vr,null,String(e))}function Ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Dl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Dl(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Er in t)?t._ctx=et:i===3&&et&&(et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:et},n=32):(t=String(t),s&64?(n=16,t=[Iu(t)]):n=8);e.children=t,e.shapeFlag|=n}function f_(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Ut([t.class,s.class]));else if(i==="style")t.style=gl([t.style,s.style]);else if(ur(i)){const r=t[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function _t(e,t,n,s=null){tt(e,t,7,[n,s])}const d_=Eu();let p_=0;function g_(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||d_,r={uid:p_++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_u(s,i),emitsOptions:ru(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Eg.bind(null,r),e.ce&&e.ce(r),r}let ye=null;const Su=()=>ye||et,Vn=e=>{ye=e,e.scope.on()},En=()=>{ye&&ye.scope.off(),ye=null};function xu(e){return e.vnode.shapeFlag&4}let Ms=!1;function __(e,t=!1){Ms=t;const{props:n,children:s}=e.vnode,i=xu(e);Xg(e,n,i,t),Zg(e,s);const r=i?m_(e,t):void 0;return Ms=!1,r}function m_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wn(new Proxy(e.ctx,Vg));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?v_(e):null;Vn(e),Qn();const r=Ht(s,e,0,[e.props,i]);if(Jn(),En(),Rh(r)){if(r.then(En,En),t)return r.then(o=>{ca(e,o,t)}).catch(o=>{gr(o,e,0)});e.asyncDep=r}else ca(e,r,t)}else Au(e,t)}function ca(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Qh(t)),Au(e,n)}let aa;function Au(e,t,n){const s=e.type;if(!e.render){if(!t&&aa&&!s.render){const i=s.template||Rl(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Me(Me({isCustomElement:r,delimiters:l},o),c);s.render=aa(i,a)}}e.render=s.render||ut}Vn(e),Qn(),Kg(e),Jn(),En()}function y_(e){return new Proxy(e.attrs,{get(t,n){return qe(e,"get","$attrs"),t[n]}})}function v_(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=y_(e))},slots:e.slots,emit:e.emit,expose:t}}function Cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qh(Wn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vs)return vs[n](e)},has(t,n){return n in t||n in vs}}))}function E_(e){return W(e)&&"__vccOpts"in e}const Cs=(e,t)=>pg(e,t,Ms),C_=Symbol(""),w_=()=>ys(C_),b_="3.2.47",I_="http://www.w3.org/2000/svg",hn=typeof document<"u"?document:null,ha=hn&&hn.createElement("template"),T_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?hn.createElementNS(I_,e):hn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>hn.createTextNode(e),createComment:e=>hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ha.innerHTML=s?`<svg>${e}</svg>`:e;const l=ha.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function S_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function x_(e,t,n){const s=e.style,i=we(n);if(n&&!i){if(t&&!we(t))for(const r in t)n[r]==null&&Lo(s,r,"");for(const r in n)Lo(s,r,n[r])}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const ua=/\s*!important$/;function Lo(e,t,n){if(M(n))n.forEach(s=>Lo(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=A_(e,t);ua.test(n)?e.setProperty(Xn(s),n.replace(ua,""),"important"):e[s]=n}}const fa=["Webkit","Moz","ms"],no={};function A_(e,t){const n=no[t];if(n)return n;let s=jn(t);if(s!=="filter"&&s in e)return no[t]=s;s=Oh(s);for(let i=0;i<fa.length;i++){const r=fa[i]+s;if(r in e)return no[t]=r}return t}const da="http://www.w3.org/1999/xlink";function N_(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(da,t.slice(6,t.length)):e.setAttributeNS(da,t,n);else{const r=bp(t);n==null||r&&!xh(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function R_(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=xh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function un(e,t,n,s){e.addEventListener(t,n,s)}function P_(e,t,n,s){e.removeEventListener(t,n,s)}function D_(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[l,c]=O_(t);if(s){const a=r[t]=L_(s,i);un(e,l,a,c)}else o&&(P_(e,l,o,c),r[t]=void 0)}}const pa=/(?:Once|Passive|Capture)$/;function O_(e){let t;if(pa.test(e)){t={};let s;for(;s=e.match(pa);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xn(e.slice(2)),t]}let so=0;const k_=Promise.resolve(),M_=()=>so||(k_.then(()=>so=0),so=Date.now());function L_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(F_(s,n.value),t,5,[s])};return n.value=e,n.attached=M_(),n}function F_(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const ga=/^on[a-z]/,U_=(e,t,n,s,i=!1,r,o,l,c)=>{t==="class"?S_(e,s,i):t==="style"?x_(e,n,s):ur(t)?_l(t)||D_(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):B_(e,t,s,i))?R_(e,t,s,r,o,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),N_(e,t,s,i))};function B_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ga.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ga.test(t)&&we(n)?!1:t in e}const H_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dg.props;const Ui=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>Ni(t,n):t};function j_(e){e.target.composing=!0}function _a(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ma={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Ui(i);const r=s||i.props&&i.props.type==="number";un(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=Io(l)),e._assign(l)}),n&&un(e,"change",()=>{e.value=e.value.trim()}),t||(un(e,"compositionstart",j_),un(e,"compositionend",_a),un(e,"change",_a))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},r){if(e._assign=Ui(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Io(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},$_={deep:!0,created(e,t,n){e._assign=Ui(n),un(e,"change",()=>{const s=e._modelValue,i=W_(e),r=e.checked,o=e._assign;if(M(s)){const l=Ah(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const a=[...s];a.splice(l,1),o(a)}}else if(fr(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(Nu(e,r))})},mounted:ya,beforeUpdate(e,t,n){e._assign=Ui(n),ya(e,t,n)}};function ya(e,{value:t,oldValue:n},s){e._modelValue=t,M(t)?e.checked=Ah(t,s.props.value)>-1:fr(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=hr(t,Nu(e,!0)))}function W_(e){return"_value"in e?e._value:e.value}function Nu(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const va={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):as(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),as(e,!0),s.enter(e)):s.leave(e,()=>{as(e,!1)}):as(e,t))},beforeUnmount(e,{value:t}){as(e,t)}};function as(e,t){e.style.display=t?e._vod:"none"}const V_=Me({patchProp:U_},T_);let Ea;function K_(){return Ea||(Ea=s_(V_))}const q_=(...e)=>{const t=K_().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=z_(s);if(!i)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function z_(e){return we(e)?document.querySelector(e):e}var G_=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ru;const wr=e=>Ru=e,Pu=Symbol();function Fo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ws;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ws||(ws={}));function Y_(){const e=Mh(!0),t=e.run(()=>ln({}));let n=[],s=[];const i=Wn({install(r){wr(i),i._a=r,r.provide(Pu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!G_?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Du=()=>{};function Ca(e,t,n,s=Du){e.push(t);const i=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&Lh()&&Op(i),i}function Rn(e,...t){e.slice().forEach(n=>{n(...t)})}function Uo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];Fo(i)&&Fo(s)&&e.hasOwnProperty(n)&&!pe(s)&&!xt(s)?e[n]=Uo(i,s):e[n]=s}return e}const X_=Symbol();function Q_(e){return!Fo(e)||!e.hasOwnProperty(X_)}const{assign:Lt}=Object;function J_(e){return!!(pe(e)&&e.effect)}function Z_(e,t,n,s){const{state:i,actions:r,getters:o}=t,l=n.state.value[e];let c;function a(){l||(n.state.value[e]=i?i():{});const h=ug(n.state.value[e]);return Lt(h,r,Object.keys(o||{}).reduce((u,d)=>(u[d]=Wn(Cs(()=>{wr(n);const g=n._s.get(e);return o[d].call(g,g)})),u),{}))}return c=Ou(e,a,t,n,s,!0),c}function Ou(e,t,n={},s,i,r){let o;const l=Lt({actions:{}},n),c={deep:!0};let a,h,u=Wn([]),d=Wn([]),g;const v=s.state.value[e];!r&&!v&&(s.state.value[e]={}),ln({});let C;function H($){let x;a=h=!1,typeof $=="function"?($(s.state.value[e]),x={type:ws.patchFunction,storeId:e,events:g}):(Uo(s.state.value[e],$),x={type:ws.patchObject,payload:$,storeId:e,events:g});const ee=C=Symbol();tu().then(()=>{C===ee&&(a=!0)}),h=!0,Rn(u,x,s.state.value[e])}const j=r?function(){const{state:x}=n,ee=x?x():{};this.$patch(J=>{Lt(J,ee)})}:Du;function fe(){o.stop(),u=[],d=[],s._s.delete(e)}function L($,x){return function(){wr(s);const ee=Array.from(arguments),J=[],ve=[];function Je(Le){J.push(Le)}function st(Le){ve.push(Le)}Rn(d,{args:ee,name:$,store:D,after:Je,onError:st});let it;try{it=x.apply(this&&this.$id===e?this:D,ee)}catch(Le){throw Rn(ve,Le),Le}return it instanceof Promise?it.then(Le=>(Rn(J,Le),Le)).catch(Le=>(Rn(ve,Le),Promise.reject(Le))):(Rn(J,it),it)}}const k={_p:s,$id:e,$onAction:Ca.bind(null,d),$patch:H,$reset:j,$subscribe($,x={}){const ee=Ca(u,$,x.detached,()=>J()),J=o.run(()=>Ri(()=>s.state.value[e],ve=>{(x.flush==="sync"?h:a)&&$({storeId:e,type:ws.direct,events:g},ve)},Lt({},c,x)));return ee},$dispose:fe},D=vn(k);s._s.set(e,D);const he=s._e.run(()=>(o=Mh(),o.run(()=>t())));for(const $ in he){const x=he[$];if(pe(x)&&!J_(x)||xt(x))r||(v&&Q_(x)&&(pe(x)?x.value=v[$]:Uo(x,v[$])),s.state.value[e][$]=x);else if(typeof x=="function"){const ee=L($,x);he[$]=ee,l.actions[$]=x}}return Lt(D,he),Lt(G(D),he),Object.defineProperty(D,"$state",{get:()=>s.state.value[e],set:$=>{H(x=>{Lt(x,$)})}}),s._p.forEach($=>{Lt(D,o.run(()=>$({store:D,app:s._a,pinia:s,options:l})))}),v&&r&&n.hydrate&&n.hydrate(D.$state,v),a=!0,h=!0,D}function em(e,t,n){let s,i;const r=typeof t=="function";typeof e=="string"?(s=e,i=r?n:t):(i=e,s=e.id);function o(l,c){const a=Su();return l=l||a&&ys(Pu,null),l&&wr(l),l=Ru,l._s.has(s)||(r?Ou(s,t,i,l):Z_(s,i,l)),l._s.get(s)}return o.$id=s,o}function Ol(e){{e=G(e);const t={};for(const n in e){const s=e[n];(pe(s)||xt(s))&&(t[n]=Jh(e,n))}return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(e,t){if(!e)throw Zn(t)},Zn=function(e){return new Error("Firebase Database ("+ku.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tm=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],l=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,l=o?e[i+1]:0,c=i+2<e.length,a=c?e[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,g=a&63;c||(g=64,o||(d=64)),s.push(n[h],n[u],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||l==null||a==null||u==null)throw new nm;const d=r<<2|l>>4;if(s.push(d),a!==64){const g=l<<4&240|a>>2;if(s.push(g),u!==64){const v=a<<6&192|u;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(e){const t=Mu(e);return kl.encodeByteArray(t,!0)},Bi=function(e){return Lu(e).replace(/\./g,"")},Bo=function(e){try{return kl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(e){return Fu(void 0,e)}function Fu(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!im(n)||(e[n]=Fu(e[n],t[n]));return e}function im(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=()=>rm().__FIREBASE_DEFAULTS__,lm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Bo(e[1]);return t&&JSON.parse(t)},Uu=()=>{try{return om()||lm()||cm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},am=e=>{var t,n;return(n=(t=Uu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hm=e=>{const t=am(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},um=()=>{var e;return(e=Uu())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[Bi(JSON.stringify(n)),Bi(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dm())}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hu(){return ku.NODE_ADMIN===!0}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function _m(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="FirebaseError";class es extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=mm,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ju.prototype.create)}}class ju{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?ym(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new es(i,l,s)}}function ym(e,t){return e.replace(vm,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const vm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){return JSON.parse(e)}function Ee(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=function(e){let t={},n={},s={},i="";try{const r=e.split(".");t=Ls(Bo(r[0])||""),n=Ls(Bo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:s,signature:i}},Em=function(e){const t=$u(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cm=function(e){const t=$u(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Kn(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function wa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hi(e,t,n){const s={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=t.call(n,e[i],i,e));return s}function Ho(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(ba(r)&&ba(o)){if(!Ho(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ba(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const s=this.W_;if(typeof t=="string")for(let u=0;u<16;u++)s[u]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let u=0;u<80;u++){u<40?u<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):u<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+a+c+h+s[u]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(r[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=t[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)t[s]=this.chain_[i]>>r&255,++s;return t}}function Ml(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ir=function(e){let t=0;for(let n=0;n<e.length;n++){const s=e.charCodeAt(n);s<128?t++:s<2048?t+=2:s>=55296&&s<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return e&&e._delegate?e._delegate:e}class qn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new br;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xm(t))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rn){return this.instances.has(t)}getOptions(t=rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=rn){return this.component?this.component.multipleInstances?t:rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(e){return e===rn?void 0:e}function xm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const Nm={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Rm=ne.INFO,Pm={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Dm=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Pm[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ll{constructor(t){this.name=t,this._logLevel=Rm,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const Om=(e,t)=>t.some(n=>e instanceof n);let Ia,Ta;function km(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mm(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,jo=new WeakMap,Vu=new WeakMap,io=new WeakMap,Fl=new WeakMap;function Lm(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(jt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wu.set(n,e)}).catch(()=>{}),Fl.set(t,e),t}function Fm(e){if(jo.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});jo.set(e,t)}let $o={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return jo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Um(e){$o=e($o)}function Bm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ro(this),t,...n);return Vu.set(s,t.sort?t.sort():[t]),jt(s)}:Mm().includes(e)?function(...t){return e.apply(ro(this),t),jt(Wu.get(this))}:function(...t){return jt(e.apply(ro(this),t))}}function Hm(e){return typeof e=="function"?Bm(e):(e instanceof IDBTransaction&&Fm(e),Om(e,km())?new Proxy(e,$o):e)}function jt(e){if(e instanceof IDBRequest)return Lm(e);if(io.has(e))return io.get(e);const t=Hm(e);return t!==e&&(io.set(e,t),Fl.set(t,e)),t}const ro=e=>Fl.get(e);function jm(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),l=jt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const $m=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],oo=new Map;function Sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oo.get(t))return oo.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Wm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$m.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return oo.set(t,r),r}Um(e=>({...e,get:(t,n,s)=>Sa(t,n)||e.get(t,n,s),has:(t,n)=>!!Sa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Km(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Km(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wo="@firebase/app",xa="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Ll("@firebase/app"),qm="@firebase/app-compat",zm="@firebase/analytics-compat",Gm="@firebase/analytics",Ym="@firebase/app-check-compat",Xm="@firebase/app-check",Qm="@firebase/auth",Jm="@firebase/auth-compat",Zm="@firebase/database",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",ry="@firebase/messaging",oy="@firebase/messaging-compat",ly="@firebase/performance",cy="@firebase/performance-compat",ay="@firebase/remote-config",hy="@firebase/remote-config-compat",uy="@firebase/storage",fy="@firebase/storage-compat",dy="@firebase/firestore",py="@firebase/firestore-compat",gy="firebase",_y="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="[DEFAULT]",my={[Wo]:"fire-core",[qm]:"fire-core-compat",[Gm]:"fire-analytics",[zm]:"fire-analytics-compat",[Xm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Qm]:"fire-auth",[Jm]:"fire-auth-compat",[Zm]:"fire-rtdb",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[ry]:"fire-fcm",[oy]:"fire-fcm-compat",[ly]:"fire-perf",[cy]:"fire-perf-compat",[ay]:"fire-rc",[hy]:"fire-rc-compat",[uy]:"fire-gcs",[fy]:"fire-gcs-compat",[dy]:"fire-fst",[py]:"fire-fst-compat","fire-js":"fire-js",[gy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map,Ko=new Map;function yy(e,t){try{e.container.addComponent(t)}catch(n){bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fs(e){const t=e.name;if(Ko.has(t))return bn.debug(`There were multiple attempts to register component ${t}.`),!1;Ko.set(t,e);for(const n of ji.values())yy(n,e);return!0}function vy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new ju("app","Firebase",Ey);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=_y;function qu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Vo,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=um()),!n)throw $t.create("no-options");const r=ji.get(i);if(r){if(Ho(n,r.options)&&Ho(s,r.config))return r;throw $t.create("duplicate-app",{appName:i})}const o=new Am(i);for(const c of Ko.values())o.addComponent(c);const l=new Cy(n,s,o);return ji.set(i,l),l}function wy(e=Vo){const t=ji.get(e);if(!t&&e===Vo)return qu();if(!t)throw $t.create("no-app",{appName:e});return t}function Wt(e,t,n){var s;let i=(s=my[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${t}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}Fs(new qn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="firebase-heartbeat-database",Iy=1,Us="firebase-heartbeat-store";let lo=null;function zu(){return lo||(lo=jm(by,Iy,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Us)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),lo}async function Ty(e){try{return(await zu()).transaction(Us).objectStore(Us).get(Gu(e))}catch(t){if(t instanceof es)bn.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bn.warn(n.message)}}}async function Aa(e,t){try{const s=(await zu()).transaction(Us,"readwrite");return await s.objectStore(Us).put(t,Gu(e)),s.done}catch(n){if(n instanceof es)bn.warn(n.message);else{const s=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(s.message)}}}function Gu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=1024,xy=30*24*60*60*1e3;class Ay{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ry(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Na();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=xy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Na(),{heartbeatsToSend:n,unsentEntries:s}=Ny(this._heartbeatsCache.heartbeats),i=Bi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Na(){return new Date().toISOString().substring(0,10)}function Ny(e,t=Sy){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ra(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ra(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ry{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?_m().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ty(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ra(e){return Bi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(e){Fs(new qn("platform-logger",t=>new Vm(t),"PRIVATE")),Fs(new qn("heartbeat",t=>new Ay(t),"PRIVATE")),Wt(Wo,xa,e),Wt(Wo,xa,"esm2017"),Wt("fire-js","")}Py("");var Dy="firebase",Oy="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(Dy,Oy,"app");var ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Ul=Ul||{},F=ky||self;function $i(){}function Tr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ei(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function My(e){return Object.prototype.hasOwnProperty.call(e,co)&&e[co]||(e[co]=++Ly)}var co="closure_uid_"+(1e9*Math.random()>>>0),Ly=0;function Fy(e,t,n){return e.call.apply(e.bind,arguments)}function Uy(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Oe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=Fy:Oe=Uy,Oe.apply(null,arguments)}function bi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Re(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var By=0;Qt.prototype.s=!1;Qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),By!=0)&&My(this)};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Bl(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Pa(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Tr(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function ke(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Hy=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{F.addEventListener("test",$i,t),F.removeEventListener("test",$i,t)}catch{}return e}();function Wi(e){return/^[\s\xa0]*$/.test(e)}var Da=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ao(e,t){return e<t?-1:e>t?1:0}function Sr(){var e=F.navigator;return e&&(e=e.userAgent)?e:""}function vt(e){return Sr().indexOf(e)!=-1}function Hl(e){return Hl[" "](e),e}Hl[" "]=$i;function jy(e){var t=Vy;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var $y=vt("Opera"),Bs=vt("Trident")||vt("MSIE"),Xu=vt("Edge"),qo=Xu||Bs,Qu=vt("Gecko")&&!(Sr().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge"))&&!(vt("Trident")||vt("MSIE"))&&!vt("Edge"),Wy=Sr().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge");function Ju(){var e=F.document;return e?e.documentMode:void 0}var zo;e:{var ho="",uo=function(){var e=Sr();if(Qu)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xu)return/Edge\/([\d\.]+)/.exec(e);if(Bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Wy)return/WebKit\/(\S+)/.exec(e);if($y)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(uo&&(ho=uo?uo[1]:""),Bs){var fo=Ju();if(fo!=null&&fo>parseFloat(ho)){zo=String(fo);break e}}zo=ho}var Vy={};function Ky(){return jy(function(){let e=0;const t=Da(String(zo)).split("."),n=Da("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ao(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ao(i[2].length==0,r[2].length==0)||ao(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}F.document&&Bs&&Ju();function Hs(e,t){if(ke.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Qu){e:{try{Hl(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:qy[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Hs.X.h.call(this)}}Re(Hs,ke);var qy={2:"touch",3:"pen",4:"mouse"};Hs.prototype.h=function(){Hs.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ti="closure_listenable_"+(1e6*Math.random()|0),zy=0;function Gy(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++zy,this.ba=this.ea=!1}function xr(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function jl(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Zu(e){const t={};for(const n in e)t[n]=e[n];return t}const Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ef(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Oa.length;r++)n=Oa[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ar(e){this.src=e,this.g={},this.h=0}Ar.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Yo(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Gy(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Go(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Yu(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(xr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Yo(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var $l="closure_lm_"+(1e6*Math.random()|0),po={};function tf(e,t,n,s,i){if(s&&s.once)return sf(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)tf(e,t[r],n,s,i);return null}return n=Kl(n),e&&e[ti]?e.N(t,n,ei(s)?!!s.capture:!!s,i):nf(e,t,n,!1,s,i)}function nf(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ei(i)?!!i.capture:!!i,l=Vl(e);if(l||(e[$l]=l=new Ar(e)),n=l.add(t,n,s,o,r),n.proxy)return n;if(s=Yy(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Hy||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(of(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Yy(){function e(n){return t.call(e.src,e.listener,n)}const t=Xy;return e}function sf(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)sf(e,t[r],n,s,i);return null}return n=Kl(n),e&&e[ti]?e.O(t,n,ei(s)?!!s.capture:!!s,i):nf(e,t,n,!0,s,i)}function rf(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)rf(e,t[r],n,s,i);else s=ei(s)?!!s.capture:!!s,n=Kl(n),e&&e[ti]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Yo(r,n,s,i),-1<n&&(xr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Vl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yo(t,n,s,i)),(n=-1<e?t[e]:null)&&Wl(n))}function Wl(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ti])Go(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(of(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Vl(t))?(Go(n,e),n.h==0&&(n.src=null,t[$l]=null)):xr(e)}}}function of(e){return e in po?po[e]:po[e]="on"+e}function Xy(e,t){if(e.ba)e=!0;else{t=new Hs(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Wl(e),e=n.call(s,t)}return e}function Vl(e){return e=e[$l],e instanceof Ar?e:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(e){return typeof e=="function"?e:(e[go]||(e[go]=function(t){return e.handleEvent(t)}),e[go])}function xe(){Qt.call(this),this.i=new Ar(this),this.P=this,this.I=null}Re(xe,Qt);xe.prototype[ti]=!0;xe.prototype.removeEventListener=function(e,t,n,s){rf(this,e,t,n,s)};function Ne(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ke(t,e);else if(t instanceof ke)t.target=t.target||e;else{var i=t;t=new ke(s,e),ef(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ii(o,s,!0,t)&&i}if(o=t.g=e,i=Ii(o,s,!0,t)&&i,i=Ii(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ii(o,s,!1,t)&&i}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)xr(n[s]);delete e.g[t],e.h--}}this.I=null};xe.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};xe.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ii(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var l=o.listener,c=o.ha||o.src;o.ea&&Go(e.i,o),i=l.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ql=F.JSON.stringify;function Qy(){var e=af;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Jy{constructor(){this.h=this.g=null}add(t,n){const s=lf.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lf=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Zy,e=>e.reset());class Zy{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ev(e){F.setTimeout(()=>{throw e},0)}function cf(e,t){Xo||tv(),Qo||(Xo(),Qo=!0),af.add(e,t)}var Xo;function tv(){var e=F.Promise.resolve(void 0);Xo=function(){e.then(nv)}}var Qo=!1,af=new Jy;function nv(){for(var e;e=Qy();){try{e.h.call(e.g)}catch(n){ev(n)}var t=lf;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Qo=!1}function Nr(e,t){xe.call(this),this.h=e||1,this.g=t||F,this.j=Oe(this.lb,this),this.l=Date.now()}Re(Nr,xe);N=Nr.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ne(this,"tick"),this.ca&&(zl(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}N.M=function(){Nr.X.M.call(this),zl(this),delete this.g};function Gl(e,t,n){if(typeof e=="function")n&&(e=Oe(e,n));else if(e&&typeof e.handleEvent=="function")e=Oe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(e,t||0)}function hf(e){e.g=Gl(()=>{e.g=null,e.i&&(e.i=!1,hf(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class sv extends Qt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:hf(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(e){Qt.call(this),this.h=e,this.g={}}Re(js,Qt);var ka=[];function uf(e,t,n,s){Array.isArray(n)||(n&&(ka[0]=n.toString()),n=ka);for(var i=0;i<n.length;i++){var r=tf(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function ff(e){jl(e.g,function(t,n){this.g.hasOwnProperty(n)&&Wl(t)},e),e.g={}}js.prototype.M=function(){js.X.M.call(this),ff(this)};js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rr(){this.g=!0}Rr.prototype.Aa=function(){this.g=!1};function iv(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",l=r.split("&"),c=0;c<l.length;c++){var a=l[c].split("=");if(1<a.length){var h=a[0];a=a[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+a+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function rv(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Dn(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+lv(e,n)+(s?" "+s:"")})}function ov(e,t){e.info(function(){return"TIMEOUT: "+t})}Rr.prototype.info=function(){};function lv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ql(n)}catch{return t}}var ns={},Ma=null;function Yl(){return Ma=Ma||new xe}ns.Pa="serverreachability";function df(e){ke.call(this,ns.Pa,e)}Re(df,ke);function $s(e){const t=Yl();Ne(t,new df(t))}ns.STAT_EVENT="statevent";function pf(e,t){ke.call(this,ns.STAT_EVENT,e),this.stat=t}Re(pf,ke);function He(e){const t=Yl();Ne(t,new pf(t,e))}ns.Qa="timingevent";function gf(e,t){ke.call(this,ns.Qa,e),this.size=t}Re(gf,ke);function ni(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){e()},t)}var Xl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ql(){}Ql.prototype.h=null;function La(e){return e.h||(e.h=e.i())}function av(){}var si={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jl(){ke.call(this,"d")}Re(Jl,ke);function Zl(){ke.call(this,"c")}Re(Zl,ke);var Jo;function Pr(){}Re(Pr,Ql);Pr.prototype.g=function(){return new XMLHttpRequest};Pr.prototype.i=function(){return{}};Jo=new Pr;function ii(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new js(this),this.O=hv,e=qo?125:void 0,this.T=new Nr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _f}function _f(){this.i=null,this.g="",this.h=!1}var hv=45e3,Zo={},Vi={};N=ii.prototype;N.setTimeout=function(e){this.O=e};function el(e,t,n){e.K=1,e.v=Or(Rt(t)),e.s=n,e.P=!0,mf(e,null)}function mf(e,t){e.F=Date.now(),ri(e),e.A=Rt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Tf(n.i,"t",s),e.C=0,n=e.l.H,e.h=new _f,e.g=qf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new sv(Oe(e.La,e,e.g),e.N)),uf(e.S,e.g,"readystatechange",e.ib),t=e.H?Zu(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),$s(),iv(e.j,e.u,e.A,e.m,e.U,e.s)}N.ib=function(e){e=e.target;const t=this.L;t&&Tt(e)==3?t.l():this.La(e)};N.La=function(e){try{if(e==this.g)e:{const h=Tt(this.g);var t=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||qo||this.g&&(this.h.h||this.g.fa()||Ha(this.g)))){this.I||h!=4||t==7||(t==8||0>=u?$s(3):$s(2)),Dr(this);var n=this.g.aa();this.Y=n;t:if(yf(this)){var s=Ha(this.g);e="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),bs(this);var o="";break t}this.h.i=new F.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,rv(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wi(l)){var a=l;break t}}a=null}if(n=a)Dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tl(this,n);else{this.i=!1,this.o=3,He(12),dn(this),bs(this);break e}}this.P?(vf(this,h,o),qo&&this.i&&h==3&&(uf(this.S,this.T,"tick",this.hb),this.T.start())):(Dn(this.j,this.m,o,null),tl(this,o)),h==4&&dn(this),this.i&&!this.I&&(h==4?$f(this.l,this):(this.i=!1,ri(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),dn(this),bs(this)}}}catch{}finally{}};function yf(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function vf(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=uv(e,n),i==Vi){t==4&&(e.o=4,He(14),s=!1),Dn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Zo){e.o=4,He(15),Dn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Dn(e.j,e.m,i,null),tl(e,i);yf(e)&&i!=Vi&&i!=Zo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,He(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),oc(t),t.K=!0,He(11))):(Dn(e.j,e.m,n,"[Invalid Chunked Response]"),dn(e),bs(e))}N.hb=function(){if(this.g){var e=Tt(this.g),t=this.g.fa();this.C<t.length&&(Dr(this),vf(this,e,t),this.i&&e!=4&&ri(this))}};function uv(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Vi:(n=Number(t.substring(n,s)),isNaN(n)?Zo:(s+=1,s+n>t.length?Vi:(t=t.substr(s,n),e.C=s+n,t)))}N.cancel=function(){this.I=!0,dn(this)};function ri(e){e.V=Date.now()+e.O,Ef(e,e.O)}function Ef(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ni(Oe(e.gb,e),t)}function Dr(e){e.B&&(F.clearTimeout(e.B),e.B=null)}N.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(ov(this.j,this.A),this.K!=2&&($s(),He(17)),dn(this),this.o=2,bs(this)):Ef(this,this.V-e)};function bs(e){e.l.G==0||e.I||$f(e.l,e)}function dn(e){Dr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,zl(e.T),ff(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tl(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||nl(n.h,e))){if(!e.J&&nl(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)zi(n),Fr(n);else break e;rc(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ni(Oe(n.cb,n),6e3));if(1>=Af(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else pn(n,11)}else if((e.J||n.g==e)&&zi(n),!Wi(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],n.G==2)if(a[0]=="c"){n.I=a[1],n.ka=a[2];const h=a[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=a[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=a[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ec(r,r.h),r.h=null))}if(s.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,ue(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Kf(s,s.H?s.ka:null,s.V),o.J){Nf(s.h,o);var l=o,c=s.J;c&&l.setTimeout(c),l.B&&(Dr(l),ri(l)),s.g=o}else Hf(s);0<n.i.length&&Ur(n)}else a[0]!="stop"&&a[0]!="close"||pn(n,7);else n.G==3&&(a[0]=="stop"||a[0]=="close"?a[0]=="stop"?pn(n,7):ic(n):a[0]!="noop"&&n.l&&n.l.wa(a),n.A=0)}}$s(4)}catch{}}function fv(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Tr(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function dv(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Tr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Cf(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Tr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=dv(e),s=fv(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Cn){this.h=t!==void 0?t:e.h,Ki(this,e.j),this.s=e.s,this.g=e.g,qi(this,e.m),this.l=e.l,t=e.i;var n=new Ws;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Fa(this,n),this.o=e.o}else e&&(n=String(e).match(wf))?(this.h=!!t,Ki(this,n[1]||"",!0),this.s=_s(n[2]||""),this.g=_s(n[3]||"",!0),qi(this,n[4]),this.l=_s(n[5]||"",!0),Fa(this,n[6]||"",!0),this.o=_s(n[7]||"")):(this.h=!!t,this.i=new Ws(null,this.h))}Cn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ms(t,Ua,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ms(t,Ua,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ms(n,n.charAt(0)=="/"?mv:_v,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ms(n,vv)),e.join("")};function Rt(e){return new Cn(e)}function Ki(e,t,n){e.j=n?_s(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Fa(e,t,n){t instanceof Ws?(e.i=t,Ev(e.i,e.h)):(n||(t=ms(t,yv)),e.i=new Ws(t,e.h))}function ue(e,t,n){e.i.set(t,n)}function Or(e){return ue(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function _s(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ms(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,gv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function gv(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ua=/[#\/\?@]/g,_v=/[#\?:]/g,mv=/[#\?]/g,yv=/[#\?@]/g,vv=/#/g;function Ws(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&pv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=Ws.prototype;N.add=function(e,t){Jt(this),this.i=null,e=ss(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function bf(e,t){Jt(e),t=ss(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function If(e,t){return Jt(e),t=ss(e,t),e.g.has(t)}N.forEach=function(e,t){Jt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};N.oa=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};N.W=function(e){Jt(this);let t=[];if(typeof e=="string")If(this,e)&&(t=t.concat(this.g.get(ss(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};N.set=function(e,t){return Jt(this),this.i=null,e=ss(this,e),If(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Tf(e,t,n){bf(e,t),0<n.length&&(e.i=null,e.g.set(ss(e,t),Bl(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function ss(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ev(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(bf(this,s),Tf(this,i,n))},e)),e.j=t}var Cv=class{constructor(e,t){this.h=e,this.g=t}};function Sf(e){this.l=e||wv,F.PerformanceNavigationTiming?(e=F.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wv=10;function xf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Af(e){return e.h?1:e.g?e.g.size:0}function nl(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ec(e,t){e.g?e.g.add(t):e.h=t}function Nf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Sf.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Rf(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Bl(e.i)}function tc(){}tc.prototype.stringify=function(e){return F.JSON.stringify(e,void 0)};tc.prototype.parse=function(e){return F.JSON.parse(e,void 0)};function bv(){this.g=new tc}function Iv(e,t,n){const s=n||"";try{Cf(e,function(i,r){let o=i;ei(i)&&(o=ql(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Tv(e,t){const n=new Rr;if(F.Image){const s=new Image;s.onload=bi(Ti,n,s,"TestLoadImage: loaded",!0,t),s.onerror=bi(Ti,n,s,"TestLoadImage: error",!1,t),s.onabort=bi(Ti,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=bi(Ti,n,s,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ti(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function kr(e){this.l=e.ac||null,this.j=e.jb||!1}Re(kr,Ql);kr.prototype.g=function(){return new Mr(this.l,this.j)};kr.prototype.i=function(e){return function(){return e}}({});function Mr(e,t){xe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(Mr,xe);var nc=0;N=Mr.prototype;N.open=function(e,t){if(this.readyState!=nc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vs(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||F).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=nc};N.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pf(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Pf(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}N.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?oi(this):Vs(this),this.readyState==3&&Pf(this)}};N.Va=function(e){this.g&&(this.response=this.responseText=e,oi(this))};N.Ua=function(e){this.g&&(this.response=e,oi(this))};N.ga=function(){this.g&&oi(this)};function oi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vs(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Vs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Sv=F.JSON.parse;function _e(e){xe.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Df,this.K=this.L=!1}Re(_e,xe);var Df="",xv=/^https?$/i,Av=["POST","PUT"];N=_e.prototype;N.Ka=function(e){this.L=e};N.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jo.g(),this.C=this.u?La(this.u):La(Jo),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ba(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=F.FormData&&e instanceof F.FormData,!(0<=Yu(Av,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mf(this),0<this.B&&((this.K=Nv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=Gl(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ba(this,r)}};function Nv(e){return Bs&&Ky()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}N.qa=function(){typeof Ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function Ba(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Of(e),Lr(e)}function Of(e){e.D||(e.D=!0,Ne(e,"complete"),Ne(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ne(this,"complete"),Ne(this,"abort"),Lr(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lr(this,!0)),_e.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?kf(this):this.fb())};N.fb=function(){kf(this)};function kf(e){if(e.h&&typeof Ul<"u"&&(!e.C[1]||Tt(e)!=4||e.aa()!=2)){if(e.v&&Tt(e)==4)Gl(e.Ha,0,e);else if(Ne(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=l===0){var i=String(e.H).match(wf)[1]||null;if(!i&&F.self&&F.self.location){var r=F.self.location.protocol;i=r.substr(0,r.length-1)}s=!xv.test(i?i.toLowerCase():"")}n=s}if(n)Ne(e,"complete"),Ne(e,"success");else{e.m=6;try{var o=2<Tt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Of(e)}}finally{Lr(e)}}}}function Lr(e,t){if(e.g){Mf(e);const n=e.g,s=e.C[0]?$i:null;e.g=null,e.C=null,t||Ne(e,"ready");try{n.onreadystatechange=s}catch{}}}function Mf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(F.clearTimeout(e.A),e.A=null)}function Tt(e){return e.g?e.g.readyState:0}N.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Sv(t)}};function Ha(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Df:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lf(e){let t="";return jl(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function sc(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Lf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ue(e,t,n))}function hs(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ff(e){this.Ca=0,this.i=[],this.j=new Rr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hs("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hs("baseRetryDelayMs",5e3,e),this.bb=hs("retryDelaySeedMs",1e4,e),this.$a=hs("forwardChannelMaxRetries",2,e),this.ta=hs("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Sf(e&&e.concurrentRequestLimit),this.Fa=new bv,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Ff.prototype;N.ma=8;N.G=1;function ic(e){if(Uf(e),e.G==3){var t=e.U++,n=Rt(e.F);ue(n,"SID",e.I),ue(n,"RID",t),ue(n,"TYPE","terminate"),li(e,n),t=new ii(e,e.j,t,void 0),t.K=2,t.v=Or(Rt(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(t.v.toString(),"")),!n&&F.Image&&(new Image().src=t.v,n=!0),n||(t.g=qf(t.l,null),t.g.da(t.v)),t.F=Date.now(),ri(t)}Vf(e)}function Fr(e){e.g&&(oc(e),e.g.cancel(),e.g=null)}function Uf(e){Fr(e),e.u&&(F.clearTimeout(e.u),e.u=null),zi(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&F.clearTimeout(e.m),e.m=null)}function Ur(e){xf(e.h)||e.m||(e.m=!0,cf(e.Ja,e),e.C=0)}function Rv(e,t){return Af(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=ni(Oe(e.Ja,e,t),Wf(e,e.C)),e.C++,!0)}N.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ii(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Zu(r),ef(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Bf(this,i,t),n=Rt(this.F),ue(n,"RID",e),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),li(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Lf(r)))+"&"+t:this.o&&sc(n,this.o,r)),ec(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",t),ue(n,"SID","null"),i.Z=!0,el(i,n,null)):el(i,n,t),this.G=2}}else this.G==3&&(e?ja(this,e):this.i.length==0||xf(this.h)||ja(this))};function ja(e,t){var n;t?n=t.m:n=e.U++;const s=Rt(e.F);ue(s,"SID",e.I),ue(s,"RID",n),ue(s,"AID",e.T),li(e,s),e.o&&e.s&&sc(s,e.o,e.s),n=new ii(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Bf(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ec(e.h,n),el(n,s,t)}function li(e,t){e.ia&&jl(e.ia,function(n,s){ue(t,s,n)}),e.l&&Cf({},function(n,s){ue(t,s,n)})}function Bf(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Oe(e.l.Ra,e.l,e):null;e:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let c=0;c<n;c++){let a=i[c].h;const h=i[c].g;if(a-=r,0>a)r=Math.max(0,i[c].h-100),l=!1;else try{Iv(h,o,"req"+a+"_")}catch{s&&s(h)}}if(l){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function Hf(e){e.g||e.u||(e.Z=1,cf(e.Ia,e),e.A=0)}function rc(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=ni(Oe(e.Ia,e),Wf(e,e.A)),e.A++,!0)}N.Ia=function(){if(this.u=null,jf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ni(Oe(this.eb,this),e)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Fr(this),jf(this))};function oc(e){e.B!=null&&(F.clearTimeout(e.B),e.B=null)}function jf(e){e.g=new ii(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Rt(e.sa);ue(t,"RID","rpc"),ue(t,"SID",e.I),ue(t,"CI",e.L?"0":"1"),ue(t,"AID",e.T),ue(t,"TYPE","xmlhttp"),li(e,t),e.o&&e.s&&sc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Or(Rt(t)),n.s=null,n.P=!0,mf(n,e)}N.cb=function(){this.v!=null&&(this.v=null,Fr(this),rc(this),He(19))};function zi(e){e.v!=null&&(F.clearTimeout(e.v),e.v=null)}function $f(e,t){var n=null;if(e.g==t){zi(e),oc(e),e.g=null;var s=2}else if(nl(e.h,t))n=t.D,Nf(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Yl(),Ne(s,new gf(s,n)),Ur(e)}else Hf(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Rv(e,t)||s==2&&rc(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:pn(e,5);break;case 4:pn(e,10);break;case 3:pn(e,6);break;default:pn(e,2)}}}function Wf(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function pn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Oe(e.kb,e);n||(n=new Cn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ki(n,"https"),Or(n)),Tv(n.toString(),s)}else He(2);e.G=0,e.l&&e.l.va(t),Vf(e),Uf(e)}N.kb=function(e){e?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Vf(e){if(e.G=0,e.la=[],e.l){const t=Rf(e.h);(t.length!=0||e.i.length!=0)&&(Pa(e.la,t),Pa(e.la,e.i),e.h.i.length=0,Bl(e.i),e.i.length=0),e.l.ua()}}function Kf(e,t,n){var s=n instanceof Cn?Rt(n):new Cn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),qi(s,s.m);else{var i=F.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Cn(null,void 0);s&&Ki(r,s),t&&(r.g=t),i&&qi(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&ue(s,n,t),ue(s,"VER",e.ma),li(e,s),s}function qf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new _e(new kr({jb:!0})):new _e(e.ra),t.Ka(e.H),t}function zf(){}N=zf.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function nt(e,t){xe.call(this),this.g=new Ff(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Wi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wi(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new is(this)}Re(nt,xe);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;He(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Kf(e,null,e.V),Ur(e)};nt.prototype.close=function(){ic(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ql(e),e=n);t.i.push(new Cv(t.ab++,e)),t.G==3&&Ur(t)};nt.prototype.M=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,nt.X.M.call(this)};function Gf(e){Jl.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Re(Gf,Jl);function Yf(){Zl.call(this),this.status=1}Re(Yf,Zl);function is(e){this.g=e}Re(is,zf);is.prototype.xa=function(){Ne(this.g,"a")};is.prototype.wa=function(e){Ne(this.g,new Gf(e))};is.prototype.va=function(e){Ne(this.g,new Yf)};is.prototype.ua=function(){Ne(this.g,"b")};nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Xl.NO_ERROR=0;Xl.TIMEOUT=8;Xl.HTTP_ERROR=6;cv.COMPLETE="complete";av.EventType=si;si.OPEN="a";si.CLOSE="b";si.ERROR="c";si.MESSAGE="d";xe.prototype.listen=xe.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Oa;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Sa;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;_e.prototype.setWithCredentials=_e.prototype.Ka;const $a="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Ll("@firebase/firestore");function Qe(e,...t){if(Gi.logLevel<=ne.DEBUG){const n=t.map(Xf);Gi.debug(`Firestore (${Br}): ${e}`,...n)}}function lc(e,...t){if(Gi.logLevel<=ne.ERROR){const n=t.map(Xf);Gi.error(`Firestore (${Br}): ${e}`,...n)}}function Xf(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(e="Unexpected state"){const t=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+e;throw lc(t),new Error(t)}function Yi(e,t){e||Qf()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ct extends es{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class Ov{constructor(t){this.t=t,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Qe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Qe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(Qe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Yi(typeof s.accessToken=="string"),new Pv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yi(t===null||typeof t=="string"),new We(t)}}class kv{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=We.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Yi(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Mv{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new kv(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fv{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&Qe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Qe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{Qe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Qe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Yi(typeof n.token=="string"),this.A=n.token,new Lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Uv(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function Jf(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(t,n,s,i,r,o,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=c}}class Xi{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wa,Y;(Y=Wa||(Wa={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";function _o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&Qe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,l=new cc(t,n,o,i,r);return l.start(s),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ct(Et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $v(e,t){if(lc("AsyncQueue",`${t}: ${e}`),Jf(e))return new Ct(Et.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=Bv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Qe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Qe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ct(Et.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$v(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}const Va=new Map;function Vv(e,t,n,s){if(t===!0&&s===!0)throw new Ct(Et.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ct(Et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ct(Et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Vv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ka({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ct(Et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ct(Et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ka(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dv;switch(n.type){case"gapi":const s=n.client;return new Mv(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ct(Et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Va.get(t);n&&(Qe("ComponentProvider","Removing Datastore"),Va.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new jv(this,"async_queue_retry"),this.Hc=()=>{const n=_o();n&&Qe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=_o();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Fn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Jf(t))throw t;Qe("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw lc("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const i=cc.createAndSchedule(this,t,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&Qf()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class zv extends Kv{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new qv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gv(this),this._firestoreClient.terminate()}}function Gv(e){var t;const n=e._freezeSettings(),s=function(i,r,o,l){return new Hv(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Wv(e._authCredentials,e._appCheckCredentials,e._queue,s)}(function(e,t=!0){(function(n){Br=n})(Ku),Fs(new qn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new zv(new Ov(n.getProvider("auth-internal")),new Fv(n.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Ct(Et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(l.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt($a,"3.9.0",e),Wt($a,"3.9.0","esm2017")})();const qa="@firebase/database",za="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf="";function Yv(e){Zf=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ee(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ls(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Ot(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Xv(t)}}catch{}return new Qv},gn=ed("localStorage"),sl=ed("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Ll("@firebase/database"),Jv=function(){let e=1;return function(){return e++}}(),td=function(e){const t=Im(e),n=new bm;n.update(t);const s=n.digest();return kl.encodeByteArray(s)},ci=function(...e){let t="";for(let n=0;n<e.length;n++){const s=e[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?t+=ci.apply(null,s):typeof s=="object"?t+=Ee(s):t+=s,t+=" "}return t};let wn=null,Ga=!0;const Zv=function(e,t){b(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Un.logLevel=ne.VERBOSE,wn=Un.log.bind(Un),t&&sl.set("logging_enabled",!0)):typeof e=="function"?wn=e:(wn=null,sl.remove("logging_enabled"))},Pe=function(...e){if(Ga===!0&&(Ga=!1,wn===null&&sl.get("logging_enabled")===!0&&Zv(!0)),wn){const t=ci.apply(null,e);wn(t)}},ai=function(e){return function(...t){Pe(e,...t)}},il=function(...e){const t="FIREBASE INTERNAL ERROR: "+ci(...e);Un.error(t)},Pt=function(...e){const t=`FIREBASE FATAL ERROR: ${ci(...e)}`;throw Un.error(t),new Error(t)},Ke=function(...e){const t="FIREBASE WARNING: "+ci(...e);Un.warn(t)},eE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nd=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tE=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",In="[MAX_NAME]",rs=function(e,t){if(e===t)return 0;if(e===zn||t===In)return-1;if(t===zn||e===In)return 1;{const n=Ya(e),s=Ya(t);return n!==null?s!==null?n-s===0?e.length-t.length:n-s:-1:s!==null?1:e<t?-1:1}},nE=function(e,t){return e===t?0:e<t?-1:1},us=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ee(t))},ac=function(e){if(typeof e!="object"||e===null)return Ee(e);const t=[];for(const s in e)t.push(s);t.sort();let n="{";for(let s=0;s<t.length;s++)s!==0&&(n+=","),n+=Ee(t[s]),n+=":",n+=ac(e[t[s]]);return n+="}",n},sd=function(e,t){const n=e.length;if(n<=t)return[e];const s=[];for(let i=0;i<n;i+=t)i+t>n?s.push(e.substring(i,n)):s.push(e.substring(i,i+t));return s};function ze(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const id=function(e){b(!nd(e),"Invalid JSON number");const t=11,n=52,s=(1<<t-1)-1;let i,r,o,l,c;e===0?(r=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),s),r=l+s,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=t;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},sE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rE(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const s=new Error(e+" at "+t._path.toString()+": "+n);return s.code=e.toUpperCase(),s}const oE=new RegExp("^-?(0*)\\d{1,10}$"),lE=-2147483648,cE=2147483647,Ya=function(e){if(oE.test(e)){const t=Number(e);if(t>=lE&&t<=cE)return t}return null},os=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Ke("Exception was thrown by user callback.",n),t},Math.floor(0))}},aE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,s):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(t))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t,n,s){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,s):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(t)}}class Bn{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Bn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="5",rd="v",od="s",ld="r",cd="f",ad=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hd="ls",ud="p",rl="ac",fd="websocket",dd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&gn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function fE(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function gd(e,t,n){b(typeof t=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(t===fd)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===dd)s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);fE(e)&&(n.ns=e.namespace);const i=[];return ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.counters_={}}incrementCounter(t,n=1){Ot(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return sm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo={},yo={};function uc(e){const t=e.toString();return mo[t]||(mo[t]=new dE),mo[t]}function pE(e,t){const n=e.toString();return yo[n]||(yo[n]=t()),yo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&os(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="start",_E="close",mE="pLPCommand",yE="pRTLPCB",_d="id",md="pw",yd="ser",vE="cb",EE="seg",CE="ts",wE="d",bE="dframe",vd=1870,Ed=30,IE=vd-Ed,TE=25e3,SE=3e4;class On{constructor(t,n,s,i,r,o,l){this.connId=t,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ai(t),this.stats_=uc(n),this.urlFn=c=>(this.appCheckToken&&(c[rl]=this.appCheckToken),gd(n,dd,c))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gE(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SE)),tE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fc((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xa)this.id=l,this.password=c;else if(o===_E)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Xa]="t",s[yd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[rd]=hc,this.transportSessionId&&(s[od]=this.transportSessionId),this.lastSessionId&&(s[hd]=this.lastSessionId),this.applicationId&&(s[ud]=this.applicationId),this.appCheckToken&&(s[rl]=this.appCheckToken),typeof location<"u"&&location.hostname&&ad.test(location.hostname)&&(s[ld]=cd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sE()&&!iE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ee(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lu(n),i=sd(s,IE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bE]="t",s[_d]=t,s[md]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ee(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fc{constructor(t,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jv(),window[mE+this.uniqueCallbackIdentifier]=t,window[yE+this.uniqueCallbackIdentifier]=n,this.myIFrame=fc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[_d]=this.myID,t[md]=this.myPW,t[yd]=this.currentSerial;let n=this.urlFn(t),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ed+s.length<=vd;){const o=this.pendingSegs.shift();s=s+"&"+EE+i+"="+o.seg+"&"+CE+i+"="+o.ts+"&"+wE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,s){this.pendingSegs.push({seg:t,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(TE)),r=()=>{clearTimeout(i),s()};this.addTag(t,r)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=t,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=16384,AE=45e3;let Qi=null;typeof MozWebSocket<"u"?Qi=MozWebSocket:typeof WebSocket<"u"&&(Qi=WebSocket);class lt{constructor(t,n,s,i,r,o,l){this.connId=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ai(this.connId),this.stats_=uc(n),this.connURL=lt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,s,i,r){const o={};return o[rd]=hc,typeof location<"u"&&location.hostname&&ad.test(location.hostname)&&(o[ld]=cd),n&&(o[od]=n),s&&(o[hd]=s),i&&(o[rl]=i),r&&(o[ud]=r),gd(t,fd,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gn.set("previous_websocket_failure",!0);try{let s;Hu(),this.mySock=new Qi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(t=!0)}return!t&&Qi!==null&&!lt.forceDisallow_}static previouslyFailed(){return gn.isInMemoryStorage||gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){gn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ls(n);this.onMessage(s)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(b(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(t){this.resetKeepAlive();const n=Ee(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sd(n,xE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AE))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[On,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=lt&&lt.isAvailable();let s=n&&!lt.previouslyFailed();if(t.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[lt];else{const i=this.transports_=[];for(const r of Ks.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ks.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=6e4,RE=5e3,PE=10*1024,DE=100*1024,vo="t",Qa="d",OE="s",Ja="r",kE="e",Za="o",eh="a",th="n",nh="p",ME="h";class LE{constructor(t,n,s,i,r,o,l,c,a,h){this.id=t,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ai("c:"+this.id+":"),this.transportManager_=new Ks(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(vo in t){const n=t[vo];n===eh?this.upgradeIfSecondaryHealthy_():n===Ja?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Za&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=us("t",t),s=us("d",t);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:th,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=us("t",t),s=us("d",t);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=us(vo,t);if(Qa in t){const s=t[Qa];if(n===ME){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===th){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===OE?this.onConnectionShutdown_(s):n===Ja?this.onReset_(s):n===kE?il("Server Error: "+s):n===Za?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):il("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,s=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hc!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NE))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nh,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{put(t,n,s,i){}merge(t,n,s,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,s){}onDisconnectMerge(t,n,s){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.allowedEvents_=t,this.listeners_={},b(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const s=[...this.listeners_[t]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(t,n,s){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:s});const i=this.getInitialEvent(t);i&&n.apply(s,i)}off(t,n,s){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(t){b(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends wd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ji}getInitialEvent(t){return b(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=32,ih=768;class se{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Q(){return new se("")}function z(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Gt(e){return e.pieces_.length-e.pieceNum_}function oe(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new se(e.pieces_,t)}function bd(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function FE(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Id(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Td(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new se(t,0)}function Ce(e,t){const n=[];for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);if(t instanceof se)for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);else{const s=t.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function K(e){return e.pieceNum_>=e.pieces_.length}function je(e,t){const n=z(e),s=z(t);if(n===null)return t;if(n===s)return je(oe(e),oe(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Sd(e,t){if(Gt(e)!==Gt(t))return!1;for(let n=e.pieceNum_,s=t.pieceNum_;n<=e.pieces_.length;n++,s++)if(e.pieces_[n]!==t.pieces_[s])return!1;return!0}function at(e,t){let n=e.pieceNum_,s=t.pieceNum_;if(Gt(e)>Gt(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[s])return!1;++n,++s}return!0}class UE{constructor(t,n){this.errorPrefix_=n,this.parts_=Id(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ir(this.parts_[s]);xd(this)}}function BE(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ir(t),xd(e)}function HE(e){const t=e.parts_.pop();e.byteLength_-=Ir(t),e.parts_.length>0&&(e.byteLength_-=1)}function xd(e){if(e.byteLength_>ih)throw new Error(e.errorPrefix_+"has a key path longer than "+ih+" bytes ("+e.byteLength_+").");if(e.parts_.length>sh)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sh+") or object contains a cycle "+on(e))}function on(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends wd{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[t];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new dc}getInitialEvent(t){return b(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,jE=60*5*1e3,rh=30*1e3,$E=1.3,WE=3e4,VE="server_kill",oh=3;class At extends Cd{constructor(t,n,s,i,r,o,l,c){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=At.nextPersistentConnectionId_++,this.log_=ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=jE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Hu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dc.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ji.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,s){const i=++this.requestNumber_,r={r:i,a:t,b:n};this.log_(Ee(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(t){this.initConnection_();const n=new br,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(t,n,s,i){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(t){const n=t.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;At.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===t&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),t.onComplete&&t.onComplete(a,c))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Ot(t,"w")){const s=Kn(t,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Cm(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rh)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Em(t)?"auth":"gauth",s={cred:t};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,s=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(t,n){const s=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,t._queryObject,n)}sendUnlisten_(t,n,s,i){this.log_("Unlisten on "+t+" for "+n);const r={p:t},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(t,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,s):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:s})}onDisconnectMerge(t,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,s):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:s})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,s,i){this.putInternal("p",t,n,s,i)}merge(t,n,s,i){this.putInternal("m",t,n,s,i)}putInternal(t,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,s=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ee(t));const n=t.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):il("Unrecognized action received from server: "+Ee(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WE&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$E)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(u){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new LE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,s,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(VE)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ke(u),c())}}}interrupt(t){Pe("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Pe("Resuming connection for reason: "+t),delete this.interruptReasons_[t],wa(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let s;n?s=n.map(r=>ac(r)).join("$"):s="default";const i=this.removeListen_(t,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const s=new se(t).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(t,n){Pe("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oh&&(this.reconnectDelay_=rh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Pe("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Zf.replace(/\./g,"-")]=1,Bu()?t["framework.cordova"]=1:pm()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ji.getInstance().currentlyOnline();return wa(this.interruptReasons_)&&t}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new V(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const s=new V(zn,t),i=new V(zn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;class Ad extends Hr{static get __EMPTY_NODE(){return Si}static set __EMPTY_NODE(t){Si=t}compare(t,n){return rs(t.name,n.name)}isDefinedOn(t){throw Zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return V.MIN}maxPost(){return new V(In,Si)}makePost(t,n){return b(typeof t=="string","KeyIndex indexValue must always be a string."),new V(t,Si)}toString(){return".key"}}const Hn=new Ad;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?s(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ie{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??Ie.RED,this.left=i??Ve.EMPTY_NODE,this.right=r??Ve.EMPTY_NODE}copy(t,n,s,i,r){return new Ie(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let s,i;if(s=this,n(t,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(t,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class KE{copy(t,n,s,i,r){return this}insert(t,n,s){return new Ie(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(t,n=Ve.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Ve(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(t){return new Ve(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(t){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(t,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(t){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(t,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new xi(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new xi(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new xi(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new xi(this.root_,null,this.comparator_,!0,t)}}Ve.EMPTY_NODE=new KE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e,t){return rs(e.name,t.name)}function pc(e,t){return rs(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;function zE(e){ol=e}const Nd=function(e){return typeof e=="number"?"number:"+id(e):"string:"+e},Rd=function(e){if(e.isLeafNode()){const t=e.val();b(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Ot(t,".sv"),"Priority must be a string or number.")}else b(e===ol||e.isEmpty(),"priority of unexpected type.");b(e===ol||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class be{constructor(t,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rd(this.priorityNode_)}static set __childrenNodeConstructor(t){lh=t}static get __childrenNodeConstructor(){return lh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new be(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return K(t)?this:z(t)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const s=z(t);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Gt(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Nd(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=id(this.value_):t+=this.value_,this.lazyHash_=td(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===be.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof be.__childrenNodeConstructor?-1:(b(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd,Dd;function GE(e){Pd=e}function YE(e){Dd=e}class XE extends Hr{compare(t,n){const s=t.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?rs(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(In,new be("[PRIORITY-POST]",Dd))}makePost(t,n){const s=Pd(t);return new V(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new XE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=Math.log(2);class JE{constructor(t){const n=r=>parseInt(Math.log(r)/QE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=s(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Zi=function(e,t,n,s){e.sort(t);const i=function(c,a){const h=a-c;let u,d;if(h===0)return null;if(h===1)return u=e[c],d=n?n(u):u,new Ie(d,u.node,Ie.BLACK,null,null);{const g=parseInt(h/2,10)+c,v=i(c,g),C=i(g+1,a);return u=e[g],d=n?n(u):u,new Ie(d,u.node,Ie.BLACK,v,C)}},r=function(c){let a=null,h=null,u=e.length;const d=function(v,C){const H=u-v,j=u;u-=v;const fe=i(H+1,j),L=e[H],k=n?n(L):L;g(new Ie(k,L.node,C,null,fe))},g=function(v){a?(a.left=v,a=v):(h=v,a=v)};for(let v=0;v<c.count;++v){const C=c.nextBitIsOne(),H=Math.pow(2,c.count-(v+1));C?d(H,Ie.BLACK):(d(H,Ie.BLACK),d(H,Ie.RED))}return h},o=new JE(e.length),l=r(o);return new Ve(s||t,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;const Pn={};class St{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return b(Pn&&ge,"ChildrenNode.ts has not been loaded"),Eo=Eo||new St({".priority":Pn},{".priority":ge}),Eo}get(t){const n=Kn(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Ve?n:null}hasIndex(t){return Ot(this.indexSet_,t.toString())}addIndex(t,n){b(t!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||t.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Zi(s,t.getCompare()):l=Pn;const c=t.toString(),a=Object.assign({},this.indexSet_);a[c]=t;const h=Object.assign({},this.indexes_);return h[c]=l,new St(h,a)}addToIndexes(t,n){const s=Hi(this.indexes_,(i,r)=>{const o=Kn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Pn)if(o.isDefinedOn(t.node)){const l=[],c=n.getIterator(V.Wrap);let a=c.getNext();for(;a;)a.name!==t.name&&l.push(a),a=c.getNext();return l.push(t),Zi(l,o.getCompare())}else return Pn;else{const l=n.get(t.name);let c=i;return l&&(c=c.remove(new V(t.name,l))),c.insert(t,t.node)}});return new St(s,this.indexSet_)}removeFromIndexes(t,n){const s=Hi(this.indexes_,i=>{if(i===Pn)return i;{const r=n.get(t.name);return r?i.remove(new V(t.name,r)):i}});return new St(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class O{constructor(t,n,s){this.children_=t,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rd(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ds||(ds=new O(new Ve(pc),null,St.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(t){return this.children_.isEmpty()?this:new O(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ds:n}}getChild(t){const n=z(t);return n===null?this:this.getImmediateChild(n).getChild(oe(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(b(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const s=new V(t,n);let i,r;n.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ds:this.priorityNode_;return new O(i,o,r)}}updateChild(t,n){const s=z(t);if(s===null)return n;{b(z(t)!==".priority"||Gt(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(oe(t),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(t),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!t&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Nd(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":td(t)}return this.lazyHash_}getPredecessorChildName(t,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(t,n));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new V(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new V(n,this.children_.get(n)):null}forEachChild(t,n){const s=this.resolveIndex_(t);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,t)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,t)>0;)i.getNext(),r=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===hi?-1:0}withIndex(t){if(t===Hn||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Hn||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Hn?null:this.indexMap_.get(t.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZE extends O{constructor(){super(new Ve(pc),O.EMPTY_NODE,St.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return O.EMPTY_NODE}isEmpty(){return!1}}const hi=new ZE;Object.defineProperties(V,{MIN:{value:new V(zn,O.EMPTY_NODE)},MAX:{value:new V(In,hi)}});Ad.__EMPTY_NODE=O.EMPTY_NODE;be.__childrenNodeConstructor=O;zE(hi);YE(hi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=!0;function Se(e,t=null){if(e===null)return O.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),b(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new be(n,Se(t))}if(!(e instanceof Array)&&eC){const n=[];let s=!1;if(ze(e,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new V(o,c)))}}),n.length===0)return O.EMPTY_NODE;const r=Zi(n,qE,o=>o.name,pc);if(s){const o=Zi(n,ge.getCompare());return new O(r,Se(t),new St({".priority":o},{".priority":ge}))}else return new O(r,Se(t),St.Default)}else{let n=O.EMPTY_NODE;return ze(e,(s,i)=>{if(Ot(e,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(t))}}GE(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends Hr{constructor(t){super(),this.indexPath_=t,b(!K(t)&&z(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const s=this.extractChild(t.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?rs(t.name,n.name):r}makePost(t,n){const s=Se(t),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const t=O.EMPTY_NODE.updateChild(this.indexPath_,hi);return new V(In,t)}toString(){return Id(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC extends Hr{compare(t,n){const s=t.node.compareTo(n.node);return s===0?rs(t.name,n.name):s}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(t,n){const s=Se(t);return new V(n,s)}toString(){return".value"}}const sC=new nC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e){return{type:"value",snapshotNode:e}}function Gn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function qs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function zs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function iC(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.index_=t}updateChild(t,n,s,i,r,o){b(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=t.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?t.hasChild(n)?o.trackChildChange(qs(n,l)):b(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gn(n,s)):o.trackChildChange(zs(n,s,l))),t.isLeafNode()&&s.isEmpty())?t:t.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(t,n,s){return s!=null&&(t.isLeafNode()||t.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(qs(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(r)||s.trackChildChange(zs(i,r,o))}else s.trackChildChange(Gn(i,r))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?O.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this.indexedFilter_=new gc(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Gs.getStartPost_(t),this.endPost_=Gs.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,s=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&s}updateChild(t,n,s,i,r,o){return this.matches(new V(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,s,i,r,o)}updateFullNode(t,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,s)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gs(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=O.EMPTY_NODE),t.getImmediateChild(n).equals(s)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,s,i,r,o):this.fullLimitUpdateChild_(t,n,s,r,o)}updateFullNode(t,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,s)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const l=t;b(l.numChildren()===this.limit_,"");const c=new V(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,a,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(h&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(zs(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(qs(n,u));const C=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Gn(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return s.isEmpty()?t:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(qs(a.name,a.node)),r.trackChildChange(Gn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,O.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:In}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const t=new _c;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function oC(e){return e.loadsAllData()?new gc(e.getIndex()):e.hasLimit()?new rC(e):new Gs(e)}function ch(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ge?n="$priority":e.index_===sC?n="$value":e.index_===Hn?n="$key":(b(e.index_ instanceof tC,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ee(n),e.startSet_){const s=e.startAfterSet_?"startAfter":"startAt";t[s]=Ee(e.indexStartValue_),e.startNameSet_&&(t[s]+=","+Ee(e.indexStartName_))}if(e.endSet_){const s=e.endBeforeSet_?"endBefore":"endAt";t[s]=Ee(e.indexEndValue_),e.endNameSet_&&(t[s]+=","+Ee(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ah(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ge&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Cd{constructor(t,n,s,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ai("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(b(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,s,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=er.getListenId_(t,s),l={};this.listens_[o]=l;const c=ch(t._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let u=h;if(a===404&&(u=null,a=null),a===null&&this.onDataUpdate_(r,u,!1,s),Kn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(t,n){const s=er.getListenId_(t,n);delete this.listens_[s]}get(t){const n=ch(t._queryParams),s=t._path.toString(),i=new br;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+wm(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Ls(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return{value:null,children:new Map}}function kd(e,t,n){if(K(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const s=z(t);e.children.has(s)||e.children.set(s,tr());const i=e.children.get(s);t=oe(t),kd(i,t,n)}}function ll(e,t,n){e.value!==null?n(t,e.value):cC(e,(s,i)=>{const r=new se(t.toString()+"/"+s);ll(i,r,n)})}function cC(e,t){e.children.forEach((n,s)=>{t(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=10*1e3,hC=30*1e3,uC=5*60*1e3;class fC{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aC(t);const s=hh+(hC-hh)*Math.random();Is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const t=this.statsListener_.get(),n={};let s=!1;ze(t,(i,r)=>{r>0&&Ot(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*uC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function Md(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,s){this.path=t,this.affectedTree=n,this.revert=s,this.type=ht.ACK_USER_WRITE,this.source=Md()}operationForChild(t){if(K(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(t));return new nr(Q(),n,this.revert)}}else return b(z(this.path)===t,"operationForChild called for unrelated child."),new nr(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n){this.source=t,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(t){return K(this.path)?new Ys(this.source,Q()):new Ys(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,s){this.source=t,this.path=n,this.snap=s,this.type=ht.OVERWRITE}operationForChild(t){return K(this.path)?new Tn(this.source,Q(),this.snap.getImmediateChild(t)):new Tn(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n,s){this.source=t,this.path=n,this.children=s,this.type=ht.MERGE}operationForChild(t){if(K(this.path)){const n=this.children.subtree(new se(t));return n.isEmpty()?null:n.value?new Tn(this.source,Q(),n.value):new Xs(this.source,Q(),n)}else return b(z(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Xs(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n,s){this.node_=t,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(K(t))return this.isFullyInitialized()&&!this.filtered_;const n=z(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function pC(e,t,n,s){const i=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iC(o.childName,o.snapshotNode))}),ps(e,i,"child_removed",t,s,n),ps(e,i,"child_added",t,s,n),ps(e,i,"child_moved",r,s,n),ps(e,i,"child_changed",t,s,n),ps(e,i,"value",t,s,n),i}function ps(e,t,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>_C(e,l,c)),o.forEach(l=>{const c=gC(e,l,r);i.forEach(a=>{a.respondsTo(l.type)&&t.push(a.createEvent(c,e.query_))})})}function gC(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function _C(e,t,n){if(t.childName==null||n.childName==null)throw Zn("Should only compare child_ events.");const s=new V(t.childName,t.snapshotNode),i=new V(n.childName,n.snapshotNode);return e.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return{eventCache:e,serverCache:t}}function Ts(e,t,n,s){return jr(new Yt(t,n,s),e.serverCache)}function Ld(e,t,n,s){return jr(e.eventCache,new Yt(t,n,s))}function sr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Sn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;const mC=()=>(Co||(Co=new Ve(nE)),Co);class le{constructor(t,n=mC()){this.value=t,this.children=n}static fromObject(t){let n=new le(null);return ze(t,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(t))return null;{const s=z(t),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(oe(t),n);return r!=null?{path:Ce(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(K(t))return this;{const n=z(t),s=this.children.get(n);return s!==null?s.subtree(oe(t)):new le(null)}}set(t,n){if(K(t))return new le(n,this.children);{const s=z(t),r=(this.children.get(s)||new le(null)).set(oe(t),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(t){if(K(t))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=z(t),s=this.children.get(n);if(s){const i=s.remove(oe(t));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(t){if(K(t))return this.value;{const n=z(t),s=this.children.get(n);return s?s.get(oe(t)):null}}setTree(t,n){if(K(t))return n;{const s=z(t),r=(this.children.get(s)||new le(null)).setTree(oe(t),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(t){return this.fold_(Q(),t)}fold_(t,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(t,i),n)}),n(t,this.value,s)}findOnPath(t,n){return this.findOnPath_(t,Q(),n)}findOnPath_(t,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(t))return null;{const r=z(t),o=this.children.get(r);return o?o.findOnPath_(oe(t),Ce(n,r),s):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Q(),n)}foreachOnPath_(t,n,s){if(K(t))return this;{this.value&&s(n,this.value);const i=z(t),r=this.children.get(i);return r?r.foreachOnPath_(oe(t),Ce(n,i),s):new le(null)}}foreach(t){this.foreach_(Q(),t)}foreach_(t,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(t,s),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,s)=>{s.value&&t(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.writeTree_=t}static empty(){return new dt(new le(null))}}function Ss(e,t,n){if(K(t))return new dt(new le(n));{const s=e.writeTree_.findRootMostValueAndPath(t);if(s!=null){const i=s.path;let r=s.value;const o=je(i,t);return r=r.updateChild(o,n),new dt(e.writeTree_.set(i,r))}else{const i=new le(n),r=e.writeTree_.setTree(t,i);return new dt(r)}}}function uh(e,t,n){let s=e;return ze(n,(i,r)=>{s=Ss(s,Ce(t,i),r)}),s}function fh(e,t){if(K(t))return dt.empty();{const n=e.writeTree_.setTree(t,new le(null));return new dt(n)}}function cl(e,t){return xn(e,t)!=null}function xn(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(je(n.path,t)):null}function dh(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{t.push(new V(s,i))}):e.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&t.push(new V(s,i.value))}),t}function Vt(e,t){if(K(t))return e;{const n=xn(e,t);return n!=null?new dt(new le(n)):new dt(e.writeTree_.subtree(t))}}function al(e){return e.writeTree_.isEmpty()}function Yn(e,t){return Fd(Q(),e.writeTree_,t)}function Fd(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let s=null;return t.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Fd(Ce(e,i),r,n)}),!n.getChild(e).isEmpty()&&s!==null&&(n=n.updateChild(Ce(e,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t){return jd(t,e)}function yC(e,t,n,s,i){b(s>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:s,visible:i}),i&&(e.visibleWrites=Ss(e.visibleWrites,t,n)),e.lastWriteId=s}function vC(e,t){for(let n=0;n<e.allWrites.length;n++){const s=e.allWrites[n];if(s.writeId===t)return s}return null}function EC(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);b(n>=0,"removeWrite called with nonexistent writeId.");const s=e.allWrites[n];e.allWrites.splice(n,1);let i=s.visible,r=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&CC(l,s.path)?i=!1:at(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return wC(e),!0;if(s.snap)e.visibleWrites=fh(e.visibleWrites,s.path);else{const l=s.children;ze(l,c=>{e.visibleWrites=fh(e.visibleWrites,Ce(s.path,c))})}return!0}else return!1}function CC(e,t){if(e.snap)return at(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&at(Ce(e.path,n),t))return!0;return!1}function wC(e){e.visibleWrites=Ud(e.allWrites,bC,Q()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function bC(e){return e.visible}function Ud(e,t,n){let s=dt.empty();for(let i=0;i<e.length;++i){const r=e[i];if(t(r)){const o=r.path;let l;if(r.snap)at(n,o)?(l=je(n,o),s=Ss(s,l,r.snap)):at(o,n)&&(l=je(o,n),s=Ss(s,Q(),r.snap.getChild(l)));else if(r.children){if(at(n,o))l=je(n,o),s=uh(s,l,r.children);else if(at(o,n))if(l=je(o,n),K(l))s=uh(s,Q(),r.children);else{const c=Kn(r.children,z(l));if(c){const a=c.getChild(oe(l));s=Ss(s,Q(),a)}}}else throw Zn("WriteRecord should have .snap or .children")}}return s}function Bd(e,t,n,s,i){if(!s&&!i){const r=xn(e.visibleWrites,t);if(r!=null)return r;{const o=Vt(e.visibleWrites,t);if(al(o))return n;if(n==null&&!cl(o,Q()))return null;{const l=n||O.EMPTY_NODE;return Yn(o,l)}}}else{const r=Vt(e.visibleWrites,t);if(!i&&al(r))return n;if(!i&&n==null&&!cl(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(at(a.path,t)||at(t,a.path))},l=Ud(e.allWrites,o,t),c=n||O.EMPTY_NODE;return Yn(l,c)}}}function IC(e,t,n){let s=O.EMPTY_NODE;const i=xn(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vt(e.visibleWrites,t);return n.forEachChild(ge,(o,l)=>{const c=Yn(Vt(r,new se(o)),l);s=s.updateImmediateChild(o,c)}),dh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vt(e.visibleWrites,t);return dh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function TC(e,t,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(t,n);if(cl(e.visibleWrites,r))return null;{const o=Vt(e.visibleWrites,r);return al(o)?i.getChild(n):Yn(o,i.getChild(n))}}function SC(e,t,n,s){const i=Ce(t,n),r=xn(e.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vt(e.visibleWrites,i);return Yn(o,s.getNode().getImmediateChild(n))}else return null}function xC(e,t){return xn(e.visibleWrites,t)}function AC(e,t,n,s,i,r,o){let l;const c=Vt(e.visibleWrites,t),a=xn(c,Q());if(a!=null)l=a;else if(n!=null)l=Yn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&h.length<i;)u(g,s)!==0&&h.push(g),g=d.getNext();return h}else return[]}function NC(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function ir(e,t,n,s){return Bd(e.writeTree,e.treePath,t,n,s)}function vc(e,t){return IC(e.writeTree,e.treePath,t)}function ph(e,t,n,s){return TC(e.writeTree,e.treePath,t,n,s)}function rr(e,t){return xC(e.writeTree,Ce(e.treePath,t))}function RC(e,t,n,s,i,r){return AC(e.writeTree,e.treePath,t,n,s,i,r)}function Ec(e,t,n){return SC(e.writeTree,e.treePath,t,n)}function Hd(e,t){return jd(Ce(e.treePath,t),e.writeTree)}function jd(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,s=t.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zs(s,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,qs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gn(s,t.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zs(s,t.snapshotNode,i.oldSnap));else throw Zn("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(s,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{getCompleteChild(t){return null}getChildAfterChild(t,n,s){return null}}const $d=new DC;class Cc{constructor(t,n,s=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const s=this.optCompleteServerCache_!=null?new Yt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ec(this.writes_,t,s)}}getChildAfterChild(t,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sn(this.viewCache_),r=RC(this.writes_,i,n,1,s,t);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(e){return{filter:e}}function kC(e,t){b(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),b(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function MC(e,t,n,s,i){const r=new PC;let o,l;if(n.type===ht.OVERWRITE){const a=n;a.source.fromUser?o=hl(e,t,a.path,a.snap,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||t.serverCache.isFiltered()&&!K(a.path),o=or(e,t,a.path,a.snap,s,i,l,r))}else if(n.type===ht.MERGE){const a=n;a.source.fromUser?o=FC(e,t,a.path,a.children,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||t.serverCache.isFiltered(),o=ul(e,t,a.path,a.children,s,i,l,r))}else if(n.type===ht.ACK_USER_WRITE){const a=n;a.revert?o=HC(e,t,a.path,s,i,r):o=UC(e,t,a.path,a.affectedTree,s,i,r)}else if(n.type===ht.LISTEN_COMPLETE)o=BC(e,t,n.path,s,r);else throw Zn("Unknown operation type: "+n.type);const c=r.getChanges();return LC(t,o,c),{viewCache:o,changes:c}}function LC(e,t,n){const s=t.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=sr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Od(sr(t)))}}function Wd(e,t,n,s,i,r){const o=t.eventCache;if(rr(s,n)!=null)return t;{let l,c;if(K(n))if(b(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const a=Sn(t),h=a instanceof O?a:O.EMPTY_NODE,u=vc(s,h);l=e.filter.updateFullNode(t.eventCache.getNode(),u,r)}else{const a=ir(s,Sn(t));l=e.filter.updateFullNode(t.eventCache.getNode(),a,r)}else{const a=z(n);if(a===".priority"){b(Gt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=t.serverCache.getNode();const u=ph(s,n,h,c);u!=null?l=e.filter.updatePriority(h,u):l=o.getNode()}else{const h=oe(n);let u;if(o.isCompleteForChild(a)){c=t.serverCache.getNode();const d=ph(s,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(a).updateChild(h,d):u=o.getNode().getImmediateChild(a)}else u=Ec(s,a,t.serverCache);u!=null?l=e.filter.updateChild(o.getNode(),a,u,h,i,r):l=o.getNode()}}return Ts(t,l,o.isFullyInitialized()||K(n),e.filter.filtersNodes())}}function or(e,t,n,s,i,r,o,l){const c=t.serverCache;let a;const h=o?e.filter:e.filter.getIndexedFilter();if(K(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),g,null)}else{const g=z(n);if(!c.isCompleteForPath(n)&&Gt(n)>1)return t;const v=oe(n),H=c.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?a=h.updatePriority(c.getNode(),H):a=h.updateChild(c.getNode(),g,H,v,$d,null)}const u=Ld(t,a,c.isFullyInitialized()||K(n),h.filtersNodes()),d=new Cc(i,u,r);return Wd(e,u,n,i,d,l)}function hl(e,t,n,s,i,r,o){const l=t.eventCache;let c,a;const h=new Cc(i,t,r);if(K(n))a=e.filter.updateFullNode(t.eventCache.getNode(),s,o),c=Ts(t,a,!0,e.filter.filtersNodes());else{const u=z(n);if(u===".priority")a=e.filter.updatePriority(t.eventCache.getNode(),s),c=Ts(t,a,l.isFullyInitialized(),l.isFiltered());else{const d=oe(n),g=l.getNode().getImmediateChild(u);let v;if(K(d))v=s;else{const C=h.getCompleteChild(u);C!=null?bd(d)===".priority"&&C.getChild(Td(d)).isEmpty()?v=C:v=C.updateChild(d,s):v=O.EMPTY_NODE}if(g.equals(v))c=t;else{const C=e.filter.updateChild(l.getNode(),u,v,d,h,o);c=Ts(t,C,l.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function gh(e,t){return e.eventCache.isCompleteForChild(t)}function FC(e,t,n,s,i,r,o){let l=t;return s.foreach((c,a)=>{const h=Ce(n,c);gh(t,z(h))&&(l=hl(e,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=Ce(n,c);gh(t,z(h))||(l=hl(e,l,h,a,i,r,o))}),l}function _h(e,t,n){return n.foreach((s,i)=>{t=t.updateChild(s,i)}),t}function ul(e,t,n,s,i,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t,a;K(n)?a=s:a=new le(null).setTree(n,s);const h=t.serverCache.getNode();return a.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=t.serverCache.getNode().getImmediateChild(u),v=_h(e,g,d);c=or(e,c,new se(u),v,i,r,o,l)}}),a.children.inorderTraversal((u,d)=>{const g=!t.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const v=t.serverCache.getNode().getImmediateChild(u),C=_h(e,v,d);c=or(e,c,new se(u),C,i,r,o,l)}}),c}function UC(e,t,n,s,i,r,o){if(rr(i,n)!=null)return t;const l=t.serverCache.isFiltered(),c=t.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return or(e,t,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new le(null);return c.getNode().forEachChild(Hn,(h,u)=>{a=a.set(new se(h),u)}),ul(e,t,n,a,i,r,l,o)}else return t}else{let a=new le(null);return s.foreach((h,u)=>{const d=Ce(n,h);c.isCompleteForPath(d)&&(a=a.set(h,c.getNode().getChild(d)))}),ul(e,t,n,a,i,r,l,o)}}function BC(e,t,n,s,i){const r=t.serverCache,o=Ld(t,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Wd(e,o,n,s,$d,i)}function HC(e,t,n,s,i,r){let o;if(rr(s,n)!=null)return t;{const l=new Cc(s,t,i),c=t.eventCache.getNode();let a;if(K(n)||z(n)===".priority"){let h;if(t.serverCache.isFullyInitialized())h=ir(s,Sn(t));else{const u=t.serverCache.getNode();b(u instanceof O,"serverChildren would be complete if leaf node"),h=vc(s,u)}h=h,a=e.filter.updateFullNode(c,h,r)}else{const h=z(n);let u=Ec(s,h,t.serverCache);u==null&&t.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?a=e.filter.updateChild(c,h,u,oe(n),l,r):t.eventCache.getNode().hasChild(h)?a=e.filter.updateChild(c,h,O.EMPTY_NODE,oe(n),l,r):a=c,a.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ir(s,Sn(t)),o.isLeafNode()&&(a=e.filter.updateFullNode(a,o,r)))}return o=t.serverCache.isFullyInitialized()||rr(s,Q())!=null,Ts(t,a,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new gc(s.getIndex()),r=oC(s);this.processor_=OC(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),h=new Yt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Yt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=jr(u,h),this.eventGenerator_=new dC(this.query_)}get query(){return this.query_}}function $C(e){return e.viewCache_.serverCache.getNode()}function WC(e){return sr(e.viewCache_)}function VC(e,t){const n=Sn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!K(t)&&!n.getImmediateChild(z(t)).isEmpty())?n.getChild(t):null}function mh(e){return e.eventRegistrations_.length===0}function KC(e,t){e.eventRegistrations_.push(t)}function yh(e,t,n){const s=[];if(n){b(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(t){let i=[];for(let r=0;r<e.eventRegistrations_.length;++r){const o=e.eventRegistrations_[r];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return s}function vh(e,t,n,s){t.type===ht.MERGE&&t.source.queryId!==null&&(b(Sn(e.viewCache_),"We should always have a full cache before handling merges"),b(sr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,r=MC(e.processor_,i,t,n,s);return kC(e.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Vd(e,r.changes,r.viewCache.eventCache.getNode(),null)}function qC(e,t){const n=e.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(Gn(r,o))}),n.isFullyInitialized()&&s.push(Od(n.getNode())),Vd(e,s,n.getNode(),t)}function Vd(e,t,n,s){const i=s?[s]:e.eventRegistrations_;return pC(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;class Kd{constructor(){this.views=new Map}}function zC(e){b(!lr,"__referenceConstructor has already been defined"),lr=e}function GC(){return b(lr,"Reference.ts has not been loaded"),lr}function YC(e){return e.views.size===0}function wc(e,t,n,s){const i=t.source.queryId;if(i!==null){const r=e.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),vh(r,t,n,s)}else{let r=[];for(const o of e.views.values())r=r.concat(vh(o,t,n,s));return r}}function qd(e,t,n,s,i){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let l=ir(n,i?s:null),c=!1;l?c=!0:s instanceof O?(l=vc(n,s),c=!1):(l=O.EMPTY_NODE,c=!1);const a=jr(new Yt(l,c,!1),new Yt(s,i,!1));return new jC(t,a)}return o}function XC(e,t,n,s,i,r){const o=qd(e,t,s,i,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),KC(o,n),qC(o,n)}function QC(e,t,n,s){const i=t._queryIdentifier,r=[];let o=[];const l=Xt(e);if(i==="default")for(const[c,a]of e.views.entries())o=o.concat(yh(a,n,s)),mh(a)&&(e.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=e.views.get(i);c&&(o=o.concat(yh(c,n,s)),mh(c)&&(e.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Xt(e)&&r.push(new(GC())(t._repo,t._path)),{removed:r,events:o}}function zd(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Kt(e,t){let n=null;for(const s of e.views.values())n=n||VC(s,t);return n}function Gd(e,t){if(t._queryParams.loadsAllData())return Wr(e);{const s=t._queryIdentifier;return e.views.get(s)}}function Yd(e,t){return Gd(e,t)!=null}function Xt(e){return Wr(e)!=null}function Wr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;function JC(e){b(!cr,"__referenceConstructor has already been defined"),cr=e}function ZC(){return b(cr,"Reference.ts has not been loaded"),cr}let ew=1;class Eh{constructor(t){this.listenProvider_=t,this.syncPointTree_=new le(null),this.pendingWriteTree_=NC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xd(e,t,n,s,i){return yC(e.pendingWriteTree_,t,n,s,i),i?fi(e,new Tn(Md(),t,n)):[]}function _n(e,t,n=!1){const s=vC(e.pendingWriteTree_,t);if(EC(e.pendingWriteTree_,t)){let r=new le(null);return s.snap!=null?r=r.set(Q(),!0):ze(s.children,o=>{r=r.set(new se(o),!0)}),fi(e,new nr(s.path,r,n))}else return[]}function ui(e,t,n){return fi(e,new Tn(mc(),t,n))}function tw(e,t,n){const s=le.fromObject(n);return fi(e,new Xs(mc(),t,s))}function nw(e,t){return fi(e,new Ys(mc(),t))}function sw(e,t,n){const s=Ic(e,n);if(s){const i=Tc(s),r=i.path,o=i.queryId,l=je(r,t),c=new Ys(yc(o),l);return Sc(e,r,c)}else return[]}function Qd(e,t,n,s,i=!1){const r=t._path,o=e.syncPointTree_.get(r);let l=[];if(o&&(t._queryIdentifier==="default"||Yd(o,t))){const c=QC(o,t,n,s);YC(o)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=e.syncPointTree_.findOnPath(r,(d,g)=>Xt(g));if(h&&!u){const d=e.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=lw(d);for(let v=0;v<g.length;++v){const C=g[v],H=C.query,j=tp(e,C);e.listenProvider_.startListening(xs(H),Qs(e,H),j.hashFn,j.onComplete)}}}!u&&a.length>0&&!s&&(h?e.listenProvider_.stopListening(xs(t),null):a.forEach(d=>{const g=e.queryToTagMap.get(Vr(d));e.listenProvider_.stopListening(xs(d),g)}))}cw(e,a)}return l}function Jd(e,t,n,s){const i=Ic(e,s);if(i!=null){const r=Tc(i),o=r.path,l=r.queryId,c=je(o,t),a=new Tn(yc(l),c,n);return Sc(e,o,a)}else return[]}function iw(e,t,n,s){const i=Ic(e,s);if(i){const r=Tc(i),o=r.path,l=r.queryId,c=je(o,t),a=le.fromObject(n),h=new Xs(yc(l),c,a);return Sc(e,o,h)}else return[]}function rw(e,t,n,s=!1){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=je(d,i);r=r||Kt(g,v),o=o||Xt(g)});let l=e.syncPointTree_.get(i);l?(o=o||Xt(l),r=r||Kt(l,Q())):(l=new Kd,e.syncPointTree_=e.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=O.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((g,v)=>{const C=Kt(v,Q());C&&(r=r.updateImmediateChild(g,C))}));const a=Yd(l,t);if(!a&&!t._queryParams.loadsAllData()){const d=Vr(t);b(!e.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=aw();e.queryToTagMap.set(d,g),e.tagToQueryMap.set(g,d)}const h=$r(e.pendingWriteTree_,i);let u=XC(l,t,n,h,r,c);if(!a&&!o&&!s){const d=Gd(l,t);u=u.concat(hw(e,t,d))}return u}function bc(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(o,l)=>{const c=je(o,t),a=Kt(l,c);if(a)return a});return Bd(i,t,r,n,!0)}function ow(e,t){const n=t._path;let s=null;e.syncPointTree_.foreachOnPath(n,(a,h)=>{const u=je(a,n);s=s||Kt(h,u)});let i=e.syncPointTree_.get(n);i?s=s||Kt(i,Q()):(i=new Kd,e.syncPointTree_=e.syncPointTree_.set(n,i));const r=s!=null,o=r?new Yt(s,!0,!1):null,l=$r(e.pendingWriteTree_,t._path),c=qd(i,t,l,r?o.getNode():O.EMPTY_NODE,r);return WC(c)}function fi(e,t){return Zd(t,e.syncPointTree_,null,$r(e.pendingWriteTree_,Q()))}function Zd(e,t,n,s){if(K(e.path))return ep(e,t,n,s);{const i=t.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];const o=z(e.path),l=e.operationForChild(o),c=t.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=Hd(s,o);r=r.concat(Zd(l,c,a,h))}return i&&(r=r.concat(wc(i,e,s,n))),r}}function ep(e,t,n,s){const i=t.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];return t.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Hd(s,o),h=e.operationForChild(o);h&&(r=r.concat(ep(h,l,c,a)))}),i&&(r=r.concat(wc(i,e,s,n))),r}function tp(e,t){const n=t.query,s=Qs(e,n);return{hashFn:()=>($C(t)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?sw(e,n._path,s):nw(e,n._path);{const r=rE(i,n);return Qd(e,n,null,r)}}}}function Qs(e,t){const n=Vr(t);return e.queryToTagMap.get(n)}function Vr(e){return e._path.toString()+"$"+e._queryIdentifier}function Ic(e,t){return e.tagToQueryMap.get(t)}function Tc(e){const t=e.indexOf("$");return b(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new se(e.substr(0,t))}}function Sc(e,t,n){const s=e.syncPointTree_.get(t);b(s,"Missing sync point for query tag that we're tracking");const i=$r(e.pendingWriteTree_,t);return wc(s,n,i,null)}function lw(e){return e.fold((t,n,s)=>{if(n&&Xt(n))return[Wr(n)];{let i=[];return n&&(i=zd(n)),ze(s,(r,o)=>{i=i.concat(o)}),i}})}function xs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ZC())(e._repo,e._path):e}function cw(e,t){for(let n=0;n<t.length;++n){const s=t[n];if(!s._queryParams.loadsAllData()){const i=Vr(s),r=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(r)}}}function aw(){return ew++}function hw(e,t,n){const s=t._path,i=Qs(e,t),r=tp(e,n),o=e.listenProvider_.startListening(xs(t),i,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(s);if(i)b(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,u)=>{if(!K(a)&&h&&Xt(h))return[Wr(h).query];{let d=[];return h&&(d=d.concat(zd(h).map(g=>g.query))),ze(u,(g,v)=>{d=d.concat(v)}),d}});for(let a=0;a<c.length;++a){const h=c[a];e.listenProvider_.stopListening(xs(h),Qs(e,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new xc(n)}node(){return this.node_}}class Ac{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Ce(this.path_,t);return new Ac(this.syncTree_,n)}node(){return bc(this.syncTree_,this.path_)}}const uw=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Ch=function(e,t,n){if(!e||typeof e!="object")return e;if(b(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return fw(e[".sv"],t,n);if(typeof e[".sv"]=="object")return dw(e[".sv"],t);b(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},fw=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+e)}},dw=function(e,t,n){e.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const s=e.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=t.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},pw=function(e,t,n,s){return Nc(t,new Ac(n,e),s)},np=function(e,t,n){return Nc(e,new xc(t),n)};function Nc(e,t,n){const s=e.getPriority().val(),i=Ch(s,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const o=e,l=Ch(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Se(i)):e}else{const o=e;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(ge,(l,c)=>{const a=Nc(c,t.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t="",n=null,s={children:{},childCount:0}){this.name=t,this.parent=n,this.node=s}}function Pc(e,t){let n=t instanceof se?t:new se(t),s=e,i=z(n);for(;i!==null;){const r=Kn(s.node.children,i)||{children:{},childCount:0};s=new Rc(i,s,r),n=oe(n),i=z(n)}return s}function ls(e){return e.node.value}function sp(e,t){e.node.value=t,fl(e)}function ip(e){return e.node.childCount>0}function gw(e){return ls(e)===void 0&&!ip(e)}function Kr(e,t){ze(e.node.children,(n,s)=>{t(new Rc(n,e,s))})}function rp(e,t,n,s){n&&!s&&t(e),Kr(e,i=>{rp(i,t,!0,s)}),n&&s&&t(e)}function _w(e,t,n){let s=n?e:e.parent;for(;s!==null;){if(t(s))return!0;s=s.parent}return!1}function di(e){return new se(e.parent===null?e.name:di(e.parent)+"/"+e.name)}function fl(e){e.parent!==null&&mw(e.parent,e.name,e)}function mw(e,t,n){const s=gw(n),i=Ot(e.node.children,t);s&&i?(delete e.node.children[t],e.node.childCount--,fl(e)):!s&&!i&&(e.node.children[t]=n.node,e.node.childCount++,fl(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/[\[\].#$\/\u0000-\u001F\u007F]/,vw=/[\[\].#$\u0000-\u001F\u007F]/,wo=10*1024*1024,op=function(e){return typeof e=="string"&&e.length!==0&&!yw.test(e)},lp=function(e){return typeof e=="string"&&e.length!==0&&!vw.test(e)},Ew=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),lp(e)},Cw=function(e,t,n,s){s&&t===void 0||Dc(Ml(e,"value"),t,n)},Dc=function(e,t,n){const s=n instanceof se?new UE(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+on(s));if(typeof t=="function")throw new Error(e+"contains a function "+on(s)+" with contents = "+t.toString());if(nd(t))throw new Error(e+"contains "+t.toString()+" "+on(s));if(typeof t=="string"&&t.length>wo/3&&Ir(t)>wo)throw new Error(e+"contains a string greater than "+wo+" utf8 bytes "+on(s)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,r=!1;if(ze(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!op(o)))throw new Error(e+" contains an invalid key ("+o+") "+on(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BE(s,o),Dc(e,l,s),HE(s)}),i&&r)throw new Error(e+' contains ".value" child '+on(s)+" in addition to actual children.")}},cp=function(e,t,n,s){if(!(s&&n===void 0)&&!lp(n))throw new Error(Ml(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ww=function(e,t,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cp(e,t,n,s)},bw=function(e,t){if(z(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Iw=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!op(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ew(n))throw new Error(Ml(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ap(e,t){let n=null;for(let s=0;s<t.length;s++){const i=t[s],r=i.getPath();n!==null&&!Sd(r,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&e.eventLists_.push(n)}function wt(e,t,n){ap(e,n),Sw(e,s=>at(s,t)||at(t,s))}function Sw(e,t){e.recursionDepth_++;let n=!0;for(let s=0;s<e.eventLists_.length;s++){const i=e.eventLists_[s];if(i){const r=i.path;t(r)?(xw(e.eventLists_[s]),e.eventLists_[s]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function xw(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const s=n.getEventRunner();wn&&Pe("event: "+n.toString()),os(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="repo_interrupt",Nw=25;class Rw{constructor(t,n,s,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tr(),this.transactionQueueTree_=new Rc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pw(e,t,n){if(e.stats_=uc(e.repoInfo_),e.forceRestClient_||aE())e.server_=new er(e.repoInfo_,(s,i,r,o)=>{wh(e,s,i,r,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>bh(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}e.persistentConnection_=new At(e.repoInfo_,t,(s,i,r,o)=>{wh(e,s,i,r,o)},s=>{bh(e,s)},s=>{Ow(e,s)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(s=>{e.server_.refreshAuthToken(s)}),e.appCheckProvider_.addTokenChangeListener(s=>{e.server_.refreshAppCheckToken(s.token)}),e.statsReporter_=pE(e.repoInfo_,()=>new fC(e.stats_,e.server_)),e.infoData_=new lC,e.infoSyncTree_=new Eh({startListening:(s,i,r,o)=>{let l=[];const c=e.infoData_.getNode(s._path);return c.isEmpty()||(l=ui(e.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),kc(e,"connected",!1),e.serverSyncTree_=new Eh({startListening:(s,i,r,o)=>(e.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);wt(e.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{e.server_.unlisten(s,i)}})}function Dw(e){const n=e.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oc(e){return uw({timestamp:Dw(e)})}function wh(e,t,n,s,i){e.dataUpdateCount++;const r=new se(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(s){const c=Hi(n,a=>Se(a));o=iw(e.serverSyncTree_,r,c,i)}else{const c=Se(n);o=Jd(e.serverSyncTree_,r,c,i)}else if(s){const c=Hi(n,a=>Se(a));o=tw(e.serverSyncTree_,r,c)}else{const c=Se(n);o=ui(e.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=zr(e,r)),wt(e.eventQueue_,l,o)}function bh(e,t){kc(e,"connected",t),t===!1&&Lw(e)}function Ow(e,t){ze(t,(n,s)=>{kc(e,n,s)})}function kc(e,t,n){const s=new se("/.info/"+t),i=Se(n);e.infoData_.updateSnapshot(s,i);const r=ui(e.infoSyncTree_,s,i);wt(e.eventQueue_,s,r)}function hp(e){return e.nextWriteId_++}function kw(e,t,n){const s=ow(e.serverSyncTree_,t);return s!=null?Promise.resolve(s):e.server_.get(t).then(i=>{const r=Se(i).withIndex(t._queryParams.getIndex());rw(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=ui(e.serverSyncTree_,t._path,r);else{const l=Qs(e.serverSyncTree_,t);o=Jd(e.serverSyncTree_,t._path,r,l)}return wt(e.eventQueue_,t._path,o),Qd(e.serverSyncTree_,t,n,null,!0),r},i=>(qr(e,"get for query "+Ee(t)+" failed: "+i),Promise.reject(new Error(i))))}function Mw(e,t,n,s,i){qr(e,"set",{path:t.toString(),value:n,priority:s});const r=Oc(e),o=Se(n,s),l=bc(e.serverSyncTree_,t),c=np(o,l,r),a=hp(e),h=Xd(e.serverSyncTree_,t,c,a,!0);ap(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||Ke("set at "+t+" failed: "+d);const C=_n(e.serverSyncTree_,a,!v);wt(e.eventQueue_,t,C),Uw(e,i,d,g)});const u=gp(e,t);zr(e,u),wt(e.eventQueue_,u,[])}function Lw(e){qr(e,"onDisconnectEvents");const t=Oc(e),n=tr();ll(e.onDisconnect_,Q(),(i,r)=>{const o=pw(i,r,e.serverSyncTree_,t);kd(n,i,o)});let s=[];ll(n,Q(),(i,r)=>{s=s.concat(ui(e.serverSyncTree_,i,r));const o=gp(e,i);zr(e,o)}),e.onDisconnect_=tr(),wt(e.eventQueue_,Q(),s)}function Fw(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Aw)}function qr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Pe(n,...t)}function Uw(e,t,n,s){t&&os(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,t(o)}})}function up(e,t,n){return bc(e.serverSyncTree_,t,n)||O.EMPTY_NODE}function Mc(e,t=e.transactionQueueTree_){if(t||Gr(e,t),ls(t)){const n=dp(e,t);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Bw(e,di(t),n)}else ip(t)&&Kr(t,n=>{Mc(e,n)})}function Bw(e,t,n){const s=n.map(a=>a.currentWriteId),i=up(e,t,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=je(t,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=t;e.server_.put(c.toString(),l,a=>{qr(e,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(_n(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Gr(e,Pc(e.transactionQueueTree_,t)),Mc(e,e.transactionQueueTree_),wt(e.eventQueue_,t,h);for(let d=0;d<u.length;d++)os(u[d])}else{if(a==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ke("transaction at "+c.toString()+" failed: "+a);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=a}zr(e,t)}},o)}function zr(e,t){const n=fp(e,t),s=di(n),i=dp(e,n);return Hw(e,i,s),s}function Hw(e,t,n){if(t.length===0)return;const s=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const c=t[l],a=je(n,c.path);let h=!1,u;if(b(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(_n(e.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Nw)h=!0,u="maxretry",i=i.concat(_n(e.serverSyncTree_,c.currentWriteId,!0));else{const d=up(e,c.path,o);c.currentInputSnapshot=d;const g=t[l].update(d.val());if(g!==void 0){Dc("transaction failed: Data returned ",g,c.path);let v=Se(g);typeof g=="object"&&g!=null&&Ot(g,".priority")||(v=v.updatePriority(d.getPriority()));const H=c.currentWriteId,j=Oc(e),fe=np(v,d,j);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=fe,c.currentWriteId=hp(e),o.splice(o.indexOf(H),1),i=i.concat(Xd(e.serverSyncTree_,c.path,fe,c.currentWriteId,c.applyLocally)),i=i.concat(_n(e.serverSyncTree_,H,!0))}else h=!0,u="nodata",i=i.concat(_n(e.serverSyncTree_,c.currentWriteId,!0))}wt(e.eventQueue_,n,i),i=[],h&&(t[l].status=2,function(d){setTimeout(d,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(u==="nodata"?s.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):s.push(()=>t[l].onComplete(new Error(u),!1,null))))}Gr(e,e.transactionQueueTree_);for(let l=0;l<s.length;l++)os(s[l]);Mc(e,e.transactionQueueTree_)}function fp(e,t){let n,s=e.transactionQueueTree_;for(n=z(t);n!==null&&ls(s)===void 0;)s=Pc(s,n),t=oe(t),n=z(t);return s}function dp(e,t){const n=[];return pp(e,t,n),n.sort((s,i)=>s.order-i.order),n}function pp(e,t,n){const s=ls(t);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Kr(t,i=>{pp(e,i,n)})}function Gr(e,t){const n=ls(t);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,sp(t,n.length>0?n:void 0)}Kr(t,s=>{Gr(e,s)})}function gp(e,t){const n=di(fp(e,t)),s=Pc(e.transactionQueueTree_,t);return _w(s,i=>{bo(e,i)}),bo(e,s),rp(s,i=>{bo(e,i)}),n}function bo(e,t){const n=ls(t);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sp(t,void 0):n.length=r+1,wt(e.eventQueue_,di(t),i);for(let o=0;o<s.length;o++)os(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function $w(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?t[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ih=function(e,t){const n=Ww(e),s=n.namespace;n.domain==="firebase.com"&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pd(n.host,n.secure,s,i,t,"",s!==n.subdomain),path:new se(n.pathString)}},Ww=function(e){let t="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof e=="string"){let a=e.indexOf("//");a>=0&&(l=e.substring(0,a-1),e=e.substring(a+2));let h=e.indexOf("/");h===-1&&(h=e.length);let u=e.indexOf("?");u===-1&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(i=jw(e.substring(h,u)));const d=$w(e.substring(Math.min(e.length,u)));a=t.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(t.substring(a+1),10)):a=t.length;const g=t.slice(0,a);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=t.indexOf(".");s=t.substring(0,v).toLowerCase(),n=t.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n,s,i){this.eventType=t,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Kw{constructor(t,n,s){this.eventRegistration=t,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,n,s,i){this._repo=t,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bd(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const t=ah(this._queryParams),n=ac(t);return n==="{}"?"default":n}get _queryObject(){return ah(this._queryParams)}isEqual(t){if(t=ts(t),!(t instanceof Lc))return!1;const n=this._repo===t._repo,s=Sd(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FE(this._path)}}class kt extends Lc{constructor(t,n){super(t,n,new _c,!1)}get parent(){const t=Td(this._path);return t===null?null:new kt(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Js{constructor(t,n,s){this._node=t,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new se(t),s=ar(this.ref,t);return new Js(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>t(new Js(i,ar(this.ref,s),ge)))}hasChild(t){const n=new se(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Th(e,t){return e=ts(e),e._checkNotDeleted("ref"),t!==void 0?ar(e._root,t):e._root}function ar(e,t){return e=ts(e),z(e._path)===null?ww("child","path",t,!1):cp("child","path",t,!1),new kt(e._repo,Ce(e._path,t))}function zw(e,t){e=ts(e),bw("set",e._path),Cw("set",t,e._path,!1);const n=new br;return Mw(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Gw(e){e=ts(e);const t=new qw(()=>{}),n=new Fc(t);return kw(e._repo,e,n).then(s=>new Js(s,new kt(e._repo,e._path),e._queryParams.getIndex()))}class Fc{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const s=n._queryParams.getIndex();return new Vw("value",this,new Js(t.snapshotNode,new kt(n._repo,n._path),s))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Kw(this,t,n):null}matches(t){return t instanceof Fc?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}zC(kt);JC(kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="FIREBASE_DATABASE_EMULATOR_HOST",dl={};let Xw=!1;function Qw(e,t,n,s){e.repoInfo_=new pd(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),s&&(e.authTokenProvider_=s)}function Jw(e,t,n,s,i){let r=s||e.options.databaseURL;r===void 0&&(e.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Ih(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[Yw]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=Ih(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const h=i&&c?new Bn(Bn.OWNER):new uE(e.name,e.options,t);Iw("Invalid Firebase Database URL",o),K(o.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=eb(l,e,h,new hE(e.name,n));return new tb(u,e)}function Zw(e,t){const n=dl[t];(!n||n[e.key]!==e)&&Pt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Fw(e),delete n[e.key]}function eb(e,t,n,s){let i=dl[t.name];i||(i={},dl[t.name]=i);let r=i[e.toURLString()];return r&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Rw(e,Xw,n,s),i[e.toURLString()]=r,r}class tb{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Pt("Cannot call "+t+" on a deleted database.")}}function Sh(e=wy(),t){const n=vy(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const s=hm("database");s&&nb(n,...s)}return n}function nb(e,t,n,s={}){e=ts(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Pt("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Bn(Bn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fm(s.mockUserToken,e.app.options.projectId);r=new Bn(o)}Qw(i,t,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(e){Yv(Ku),Fs(new qn("database",(t,{instanceIdentifier:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return Jw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Wt(qa,za,e),Wt(qa,za,"esm2017")}At.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};At.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};sb();const ib={apiKey:"AIzaSyCRT5wy2QOVle0dZ9QHjHEDiuL88QKIBdE",authDomain:"testfirebase-f0c43.firebaseapp.com",projectId:"testfirebase-f0c43",storageBucket:"testfirebase-f0c43.appspot.com",messagingSenderId:"727480970113",appId:"1:727480970113:web:fb7417042bb530ae7c9680",measurementId:"G-01QTT64E1Z",databaseURL:"https://testfirebase-f0c43-default-rtdb.asia-southeast1.firebasedatabase.app"};qu(ib);const pi=em("main",()=>{const e=vn([{name:"士林區",en:"shilin"},{name:"北投區",en:"beitou"},{name:"大同區",en:"datong"},{name:"中山區",en:"zhongshan"},{name:"淡水區",en:"tamsui"}]);let t=vn({item:[]});const n=ln(!1),s=ln(!1);let i=ln([]),r=vn({name:null,addr:null}),o=[],l=[];const c=ln(!1),a=ln(null),h=Cs(()=>{var D,he;let k;return((D=t.item)==null?void 0:D.length)>=1||((he=t.item)==null?void 0:he.length)===e.length?k="取消選取":k="選擇全部",k}),u=Cs(()=>{let k=i.value,D=[],he;for(const $ in k)he={name:k[$].name,addr:k[$].addr,key:[$][0]},D.push(he);return D}),d=()=>{const k=[];return e.forEach(D=>k.push(D.name)),t.item=[...new Set(k)],t.item},g=()=>t.item=[],v=k=>{setTimeout(()=>{var D;(D=document.querySelector(k))==null||D.scrollIntoView({behavior:"smooth",block:"start"})},100)},C=async(k,D)=>{let he=new Date().getTime();const $=Sh();await zw(Th($,"shops/"+he),{name:k,addr:D}).then(()=>{r={name:null,addr:null}})},H=async()=>{const k=Th(Sh());await Gw(ar(k,"shops/")).then(D=>{D.exists()&&(i.value=D.val())})},j=Cs(()=>{o=[],t.item.forEach(D=>{let he=u.value.filter($=>$.addr.indexOf(D)>-1);o.push(he)});let k=t.item.length;if(k===0)l=JSON.parse(JSON.stringify(u.value));else if(k<=1)l=o[0];else{let D=[].concat.apply([],o);l=[...new Set(D)]}return l}),fe=()=>{c.value=!0;const k=j.value.length-1,D=0,he=Math.floor(Math.random()*(k-D+1))+D;setTimeout(()=>{c.value=!1,a.value=j.value[he]},2e3)};return{districts:e,selected:t,addTrigger:n,shopTrigger:s,selectText:h,additem:r,shopList:u,selectAll:d,clearSelect:g,moveTo:v,sendData:C,getData:H,playList:j,playTrigger:c,playStart:fe,playAgain:()=>{a.value=null,fe()},playResult:a}});const rb=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},ob={class:"play-wrap mt-4 mb-6"},lb={class:"play-item"},cb={key:1,class:"play-item play-result"},ab={class:"flex flex-col items-center space-y-4"},hb={__name:"Play",setup(e){const t=pi(),{playList:n,playTrigger:s,playResult:i}=Ol(t),{playStart:r,playAgain:o}=t;return(l,c)=>(Te(),Ae(Be,null,[Z("div",ob,[Z("div",{class:Ut(["play-content",{"is-play":B(s)}]),id:"play"},[B(i)===null?(Te(),Ae(Be,{key:0},[Os(Z("div",lb,"決定命運時刻",512),[[va,!B(s)]]),(Te(!0),Ae(Be,null,Nl(B(n),(a,h)=>Os((Te(),Ae("div",{class:"play-item",key:a.key},mn(a.name),1)),[[va,B(s)]])),128))],64)):(Te(),Ae("div",cb,mn(B(i).name),1))],2)]),Z("div",ab,[B(i)===null&&!B(s)?(Te(),Ae("a",{key:0,class:Ut(["play-btn border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",{"bg-black":B(s),"text-white":B(s)}]),onClick:c[0]||(c[0]=(...a)=>B(r)&&B(r)(...a))},"點擊開始 ",2)):(Te(),Ae("a",{key:1,class:Ut(["play-btn border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",{"bg-black":B(s),"text-white":B(s)}]),onClick:c[1]||(c[1]=(...a)=>B(o)&&B(o)(...a))},"再來一次 ",2))])],64))}},ub=rb(hb,[["__scopeId","data-v-c73765dd"]]),fb={key:0,class:"additem-wrap mt-4"},db=Z("div",{class:"flex items-center font-medium"},[Z("p",{class:"text-xl"},"新增店家")],-1),pb={class:"flex justify-between items-center"},gb={__name:"AddItem",setup(e){const t=pi(),{additem:n,sendData:s}=t;return(i,r)=>B(t).addTrigger?(Te(),Ae("div",fb,[db,Z("div",pb,[Os(Z("input",{class:"border-0 border-b bg-transparent px-1 outline-none","onUpdate:modelValue":r[0]||(r[0]=o=>B(n).name=o),type:"text",placeholder:"店名"},null,512),[[ma,B(n).name]]),Os(Z("input",{class:"border-0 border-b bg-transparent px-1 outline-none grow w-full mx-4","onUpdate:modelValue":r[1]||(r[1]=o=>B(n).addr=o),type:"text",placeholder:"地址"},null,512),[[ma,B(n).addr]]),Z("a",{class:"cursor-pointer border text-xs p-2 whitespace-nowrap 768:mt-2 hover:bg-black hover:text-white",onClick:r[2]||(r[2]=o=>B(s)(B(n).name,B(n).addr))},"送  出")])])):Tu("",!0)}},_b={key:0,class:"shoplist-wrap mt-4 mb-10"},mb=Z("div",{class:"flex items-center font-medium"},[Z("p",{class:"text-xl"},"店家列表")],-1),yb={class:"mt-4"},vb=Z("li",{class:"list flex flex-wrap font-medium py-2 border-b"},[Z("p",{class:"w-1/3"},"名稱"),Z("p",{class:"w-2/3"},"地址")],-1),Eb={class:"w-1/3"},Cb={class:"w-2/3"},wb={__name:"ShopList",setup(e){const t=pi(),{shopTrigger:n,shopList:s}=Ol(t);return(i,r)=>B(n)?(Te(),Ae("div",_b,[mb,Z("ul",yb,[vb,(Te(!0),Ae(Be,null,Nl(B(s),(o,l)=>(Te(),Ae("li",{class:"list flex flex-wrap py-2 border-b",key:o.key},[Z("p",Eb,mn(o.name),1),Z("p",Cb,mn(o.addr),1)]))),128))])])):Tu("",!0)}},bb={class:"district-wrap"},Ib={class:"flex items-center"},Tb=Z("p",{class:"mr-auto text-xl font-medium"},"選擇區域(可複選)",-1),Sb={class:"w-max-content mr-2 text-xs"},xb={class:"w-max-content text-xs space-x-2"},Ab={class:"flex items-center flex-wrap"},Nb=["for"],Rb=["id","value","onUpdate:modelValue"],Pb={__name:"District",setup(e){const t=pi(),{addTrigger:n,shopTrigger:s,selectText:i}=Ol(t),{districts:r,selectAll:o,moveTo:l,clearSelect:c,selected:a,getData:h}=t;return(u,d)=>(Te(),Ae("div",bb,[Z("div",Ib,[Tb,Z("div",Sb,[B(i)==="選擇全部"?(Te(),Ae("a",{key:0,class:"border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",onClick:d[0]||(d[0]=(...g)=>B(o)&&B(o)(...g))},mn(B(i)),1)):(Te(),Ae("a",{key:1,class:"border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",onClick:d[1]||(d[1]=(...g)=>B(c)&&B(c)(...g))},mn(B(i)),1))]),Z("div",xb,[Z("a",{class:Ut(["border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",{"bg-black":B(s),"text-white":B(s)}]),onClick:d[2]||(d[2]=g=>s.value=!B(s))},"店家列表",2),Z("a",{class:Ut(["border text-center p-2 cursor-pointer transition-5s hover:bg-black hover:text-white",{"bg-black":B(n),"text-white":B(n)}]),onClick:d[3]||(d[3]=g=>(n.value=!B(n),B(l)(".additem-wrap")))},"新增店家",2)])]),Z("div",Ab,[(Te(!0),Ae(Be,null,Nl(B(r),(g,v)=>(Te(),Ae("label",{class:"text-lg p-4",for:g.name},[Os(Z("input",{class:"mr-1",id:g.en,type:"checkbox",value:g.name,"onUpdate:modelValue":C=>B(a).item=C},null,8,Rb),[[$_,B(a).item]]),Iu(mn(g.name),1)],8,Nb))),256))])]))}},Db={class:"max-w-1200 mx-auto 768:px-4",id:"index"},Ob=Z("h1",null,"What Eat?",-1),kb={class:"max-w-3xl mx-auto mt-20"},Mb={__name:"App",setup(e){const t=pi(),{getData:n}=t;return Al(async()=>{await n()}),(s,i)=>{const r=Pb,o=wb,l=gb,c=ub;return Te(),Ae("div",Db,[Ob,Z("div",kb,[Xe(r),Xe(o),Xe(l),Xe(c)])])}}};const Lb=Y_();q_(Mb).use(Lb).mount("#app");
