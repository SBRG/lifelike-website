const $e=function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))X(b);new MutationObserver(b=>{for(const F of b)if(F.type==="childList")for(const Y of F.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&X(Y)}).observe(document,{childList:!0,subtree:!0});function U(b){const F={};return b.integrity&&(F.integrity=b.integrity),b.referrerpolicy&&(F.referrerPolicy=b.referrerpolicy),b.crossorigin==="use-credentials"?F.credentials="include":b.crossorigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function X(b){if(b.ep)return;b.ep=!0;const F=U(b);fetch(b.href,F)}};$e();var qt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ve(j){return j&&j.__esModule&&Object.prototype.hasOwnProperty.call(j,"default")?j.default:j}var Bt={exports:{}};(function(j,I){(function(U,X){X(I)})(qt,function(U){function X(u,r){return r=r||{},new Promise(function(e,a){var o=new XMLHttpRequest,c=[],h=[],v={},p=function(){return{ok:(o.status/100|0)==2,statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:p,headers:{keys:function(){return c},entries:function(){return h},get:function(d){return v[d.toLowerCase()]},has:function(d){return d.toLowerCase()in v}}}};for(var l in o.open(r.method||"get",u,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(d,S,g){c.push(S=S.toLowerCase()),h.push([S,g]),v[S]=v[S]?v[S]+","+g:g}),e(p())},o.onerror=a,o.withCredentials=r.credentials=="include",r.headers)o.setRequestHeader(l,r.headers[l]);o.send(r.body||null)})}var b=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof qt!="undefined"?qt:typeof self!="undefined"?self:{},F={},Y={exports:{}};(function(u,r){var e="__lodash_hash_undefined__",a=9007199254740991,o="[object Arguments]",c="[object Function]",h="[object Object]",v=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[o]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l[c]=l["[object Map]"]=l["[object Number]"]=l[h]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1;var d=typeof b=="object"&&b&&b.Object===Object&&b,S=typeof self=="object"&&self&&self.Object===Object&&self,g=d||S||Function("return this")(),z=r&&!r.nodeType&&r,x=z&&u&&!u.nodeType&&u,K=x&&x.exports===z,q=K&&d.process,W=function(){try{var t=x&&x.require&&x.require("util").types;return t||q&&q.binding&&q.binding("util")}catch{}}(),B=W&&W.isTypedArray;function C(t,n,i){switch(i.length){case 0:return t.call(n);case 1:return t.call(n,i[0]);case 2:return t.call(n,i[0],i[1]);case 3:return t.call(n,i[0],i[1],i[2])}return t.apply(n,i)}var G,w,D,R=Array.prototype,Ft=Function.prototype,pt=Object.prototype,At=g["__core-js_shared__"],dt=Ft.toString,$=pt.hasOwnProperty,Zt=(G=/[^.]+$/.exec(At&&At.keys&&At.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",te=pt.toString,Fe=dt.call(Object),Ae=RegExp("^"+dt.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=K?g.Buffer:void 0,ee=g.Symbol,ne=g.Uint8Array,re=yt?yt.allocUnsafe:void 0,ie=(w=Object.getPrototypeOf,D=Object,function(t){return w(D(t))}),oe=Object.create,Te=pt.propertyIsEnumerable,Pe=R.splice,Z=ee?ee.toStringTag:void 0,mt=function(){try{var t=Lt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Le=yt?yt.isBuffer:void 0,ae=Math.max,Ne=Date.now,se=Lt(g,"Map"),st=Lt(Object,"create"),Ce=function(){function t(){}return function(n){if(!et(n))return{};if(oe)return oe(n);t.prototype=n;var i=new t;return t.prototype=void 0,i}}();function tt(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function V(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function nt(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function rt(t){var n=this.__data__=new V(t);this.size=n.size}function ke(t,n){var i=kt(t),s=!i&&Ct(t),f=!i&&!s&&ge(t),_=!i&&!s&&!f&&ve(t),y=i||s||f||_,E=y?function(J,Dt){for(var lt=-1,it=Array(J);++lt<J;)it[lt]=Dt(lt);return it}(t.length,String):[],A=E.length;for(var m in t)!n&&!$.call(t,m)||y&&(m=="length"||f&&(m=="offset"||m=="parent")||_&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||ce(m,A))||E.push(m);return E}function Tt(t,n,i){(i!==void 0&&!wt(t[n],i)||i===void 0&&!(n in t))&&Pt(t,n,i)}function xe(t,n,i){var s=t[n];$.call(t,n)&&wt(s,i)&&(i!==void 0||n in t)||Pt(t,n,i)}function _t(t,n){for(var i=t.length;i--;)if(wt(t[i][0],n))return i;return-1}function Pt(t,n,i){n=="__proto__"&&mt?mt(t,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[n]=i}tt.prototype.clear=function(){this.__data__=st?st(null):{},this.size=0},tt.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},tt.prototype.get=function(t){var n=this.__data__;if(st){var i=n[t];return i===e?void 0:i}return $.call(n,t)?n[t]:void 0},tt.prototype.has=function(t){var n=this.__data__;return st?n[t]!==void 0:$.call(n,t)},tt.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=st&&n===void 0?e:n,this},V.prototype.clear=function(){this.__data__=[],this.size=0},V.prototype.delete=function(t){var n=this.__data__,i=_t(n,t);return!(i<0)&&(i==n.length-1?n.pop():Pe.call(n,i,1),--this.size,!0)},V.prototype.get=function(t){var n=this.__data__,i=_t(n,t);return i<0?void 0:n[i][1]},V.prototype.has=function(t){return _t(this.__data__,t)>-1},V.prototype.set=function(t,n){var i=this.__data__,s=_t(i,t);return s<0?(++this.size,i.push([t,n])):i[s][1]=n,this},nt.prototype.clear=function(){this.size=0,this.__data__={hash:new tt,map:new(se||V),string:new tt}},nt.prototype.delete=function(t){var n=St(this,t).delete(t);return this.size-=n?1:0,n},nt.prototype.get=function(t){return St(this,t).get(t)},nt.prototype.has=function(t){return St(this,t).has(t)},nt.prototype.set=function(t,n){var i=St(this,t),s=i.size;return i.set(t,n),this.size+=i.size==s?0:1,this},rt.prototype.clear=function(){this.__data__=new V,this.size=0},rt.prototype.delete=function(t){var n=this.__data__,i=n.delete(t);return this.size=n.size,i},rt.prototype.get=function(t){return this.__data__.get(t)},rt.prototype.has=function(t){return this.__data__.has(t)},rt.prototype.set=function(t,n){var i=this.__data__;if(i instanceof V){var s=i.__data__;if(!se||s.length<199)return s.push([t,n]),this.size=++i.size,this;i=this.__data__=new nt(s)}return i.set(t,n),this.size=i.size,this};var Je=function(t,n,i){for(var s=-1,f=Object(t),_=i(t),y=_.length;y--;){var E=_[++s];if(n(f[E],E,f)===!1)break}return t};function bt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Z&&Z in Object(t)?function(n){var i=$.call(n,Z),s=n[Z];try{n[Z]=void 0;var f=!0}catch{}var _=te.call(n);return f&&(i?n[Z]=s:delete n[Z]),_}(t):function(n){return te.call(n)}(t)}function ue(t){return ut(t)&&bt(t)==o}function ze(t){return!(!et(t)||function(n){return!!Zt&&Zt in n}(t))&&(Jt(t)?Ae:v).test(function(n){if(n!=null){try{return dt.call(n)}catch{}try{return n+""}catch{}}return""}(t))}function De(t){if(!et(t))return function(f){var _=[];if(f!=null)for(var y in Object(f))_.push(y);return _}(t);var n=fe(t),i=[];for(var s in t)(s!="constructor"||!n&&$.call(t,s))&&i.push(s);return i}function le(t,n,i,s,f){t!==n&&Je(n,function(_,y){if(f||(f=new rt),et(_))(function(A,m,J,Dt,lt,it,ct){var M=Nt(A,J),T=Nt(m,J),ye=ct.get(T);if(ye)return void Tt(A,J,ye);var k=it?it(M,T,J+"",A,m,ct):void 0,ft=k===void 0;if(ft){var Rt=kt(T),Mt=!Rt&&ge(T),me=!Rt&&!Mt&&ve(T);k=T,Rt||Mt||me?kt(M)?k=M:ut(be=M)&&xt(be)?k=function(O,P){var L=-1,N=O.length;for(P||(P=Array(N));++L<N;)P[L]=O[L];return P}(M):Mt?(ft=!1,k=function(O,P){if(P)return O.slice();var L=O.length,N=re?re(L):new O.constructor(L);return O.copy(N),N}(T,!0)):me?(ft=!1,gt=T,_e=(Ot=gt.buffer,Ut=new Ot.constructor(Ot.byteLength),new ne(Ut).set(new ne(Ot)),Ut),k=new gt.constructor(_e,gt.byteOffset,gt.length)):k=[]:function(O){if(!ut(O)||bt(O)!=h)return!1;var P=ie(O);if(P===null)return!0;var L=$.call(P,"constructor")&&P.constructor;return typeof L=="function"&&L instanceof L&&dt.call(L)==Fe}(T)||Ct(T)?(k=M,Ct(M)?k=function(O){return function(P,L,N,Se){var Be=!N;N||(N={});for(var we=-1,Ge=L.length;++we<Ge;){var ot=L[we],jt=Se?Se(N[ot],P[ot],ot,N,P):void 0;jt===void 0&&(jt=P[ot]),Be?Pt(N,ot,jt):xe(N,ot,jt)}return N}(O,pe(O))}(M):et(M)&&!Jt(M)||(k=function(O){return typeof O.constructor!="function"||fe(O)?{}:Ce(ie(O))}(T))):ft=!1}var gt,_e,Ot,Ut,be;ft&&(ct.set(T,k),lt(k,T,Dt,it,ct),ct.delete(T)),Tt(A,J,k)})(t,n,y,i,le,s,f);else{var E=s?s(Nt(t,y),_,y+"",t,n,f):void 0;E===void 0&&(E=_),Tt(t,y,E)}},pe)}function Re(t,n){return Ue(function(i,s,f){return s=ae(s===void 0?i.length-1:s,0),function(){for(var _=arguments,y=-1,E=ae(_.length-s,0),A=Array(E);++y<E;)A[y]=_[s+y];y=-1;for(var m=Array(s+1);++y<s;)m[y]=_[y];return m[s]=f(A),C(i,this,m)}}(t,n,de),t+"")}var Me=mt?function(t,n){return mt(t,"toString",{configurable:!0,enumerable:!1,value:(i=n,function(){return i}),writable:!0});var i}:de;function St(t,n){var i,s,f=t.__data__;return((s=typeof(i=n))=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null)?f[typeof n=="string"?"string":"hash"]:f.map}function Lt(t,n){var i=function(s,f){return s==null?void 0:s[f]}(t,n);return ze(i)?i:void 0}function ce(t,n){var i=typeof t;return!!(n=n==null?a:n)&&(i=="number"||i!="symbol"&&p.test(t))&&t>-1&&t%1==0&&t<n}function fe(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||pt)}function Nt(t,n){if((n!=="constructor"||typeof t[n]!="function")&&n!="__proto__")return t[n]}var Ue=function(t){var n=0,i=0;return function(){var s=Ne(),f=16-(s-i);if(i=s,f>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}(Me);function wt(t,n){return t===n||t!=t&&n!=n}var Ct=ue(function(){return arguments}())?ue:function(t){return ut(t)&&$.call(t,"callee")&&!Te.call(t,"callee")},kt=Array.isArray;function xt(t){return t!=null&&he(t.length)&&!Jt(t)}var ge=Le||function(){return!1};function Jt(t){if(!et(t))return!1;var n=bt(t);return n==c||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}function he(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=a}function et(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function ut(t){return t!=null&&typeof t=="object"}var ve=B?function(t){return function(n){return t(n)}}(B):function(t){return ut(t)&&he(t.length)&&!!l[bt(t)]};function pe(t){return xt(t)?ke(t,!0):De(t)}var zt,qe=(zt=function(t,n,i){le(t,n,i)},Re(function(t,n){var i=-1,s=n.length,f=s>1?n[s-1]:void 0,_=s>2?n[2]:void 0;for(f=zt.length>3&&typeof f=="function"?(s--,f):void 0,_&&function(E,A,m){if(!et(m))return!1;var J=typeof A;return!!(J=="number"?xt(m)&&ce(A,m.length):J=="string"&&A in m)&&wt(m[A],E)}(n[0],n[1],_)&&(f=s<3?void 0:f,s=1),t=Object(t);++i<s;){var y=n[i];y&&zt(t,y,i,f)}return t}));function de(t){return t}u.exports=qe})(Y,Y.exports),Object.defineProperty(F,"__esModule",{value:!0});var vt,Gt=function(u,r){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return function(e,a){var o=[],c=!0,h=!1,v=void 0;try{for(var p,l=e[Symbol.iterator]();!(c=(p=l.next()).done)&&(o.push(p.value),!a||o.length!==a);c=!0);}catch(d){h=!0,v=d}finally{try{!c&&l.return&&l.return()}finally{if(h)throw v}}return o}(u,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},je=(vt=Y.exports)&&vt.__esModule?vt:{default:vt},at={getItem:function(u,r){return at.multiGet([u]).then(function(e){return e[0][1]}).then(function(e){return r&&r(null,e),e}).catch(function(e){return r&&r(e,null),e})},setItem:function(u,r,e){return at.multiSet([[u,r]]).then(function(a){return e&&e(null,a),a}).catch(function(a){return e&&e(a,null),a})},getAllKeys:function(u){return Promise.resolve(Object.keys(localStorage)).then(function(r){return u&&u(null,r),r}).catch(function(r){return u&&u(r,null),r})},removeItem:function(u,r){return at.multiRemove([u]).then(function(){r&&r(null)}).catch(function(e){r&&r(e,null)})},clear:function(){return new Promise(function(u){window.localStorage.clear(),u()})},mergeItem:function(u,r){return at.multiMerge([[u,r]])},multiGet:function(u){return new Promise(function(r){r(u.reduce(function(e,a){return e.concat([[a,localStorage.getItem(a)]])},[]))})},multiSet:function(u){return new Promise(function(r,e){var a=[];return u.forEach(function(o){var c=Gt(o,2),h=c[0],v=c[1];try{localStorage.setItem(h,v)}catch(p){a.push(p)}}),a.length>0?e(a):r()})},multiMerge:function(u){return new Promise(function(r,e){var a=[];return u.forEach(function(o){var c=Gt(o,2),h=c[0],v=c[1],p=localStorage.getItem(h);if(p)try{localStorage.setItem(h,JSON.stringify((0,je.default)(JSON.parse(p),JSON.parse(v))))}catch(l){a.push(l)}}),a.length>0?e(a):r()})},multiRemove:function(u){return new Promise(function(r){u.forEach(function(e){return window.localStorage.removeItem(e)}),r()})},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}},$t=F.default=at,Q=function(){return Q=Object.assign||function(u){for(var r,e=1,a=arguments.length;e<a;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(u[o]=r[o]);return u},Q.apply(this,arguments)};function Ie(u,r,e){if(e||arguments.length===2)for(var a,o=0,c=r.length;o<c;o++)!a&&o in r||(a||(a=Array.prototype.slice.call(r,0,o)),a[o]=r[o]);return u.concat(a||Array.prototype.slice.call(r))}var Vt,H,Ht=function u(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var a,o,c;if(Array.isArray(r)){if((a=r.length)!=e.length)return!1;for(o=a;o--!=0;)if(!u(r[o],e[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if((a=(c=Object.keys(r)).length)!==Object.keys(e).length)return!1;for(o=a;o--!=0;)if(!Object.prototype.hasOwnProperty.call(e,c[o]))return!1;for(o=a;o--!=0;){var h=c[o];if(!u(r[h],e[h]))return!1}return!0}return r!=r&&e!=e},It=It!==void 0?It:typeof window!="undefined"?window:{},Kt="BULLET_TRAIN_DB",Et="BULLET_TRAIN_EVENT",Wt="https://api.flagsmith.com/api/v1/",Xt=function(u){return"Attempted to "+u+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},Ee=function(){function u(r){var e=this;this.getJSON=function(a,o,c){var h=e,v=h.environmentID,p=h.headers,l={method:o||"GET",body:c,headers:{"x-environment-key":v}};return o&&o!=="GET"&&(l.headers["Content-Type"]="application/json; charset=utf-8"),p&&Object.assign(l.headers,p),Vt(a,l).then(function(d){return d.text().then(function(S){var g=S;try{g=JSON.parse(S)}catch{}return d.ok?g:Promise.reject(g)})})},this.getFlags=function(a,o){var c=e,h=c.onChange,v=c.onError,p=c.identity,l=c.api,d=!1,S=function(g,z){var x=g.flags,K=g.traits;e.withTraits=!1;var q={},W={};if(K=K||[],(x=x||[]).forEach(function(w){q[w.feature.name.toLowerCase().replace(/ /g,"_")]={id:w.feature.id,enabled:w.enabled,value:w.feature_state_value}}),K.forEach(function(w){W[w.trait_key.toLowerCase().replace(/ /g,"_")]=w.trait_value}),e.oldFlags=Q({},e.flags),z){var B={};z.map(function(w){B[w.name]=w}),e.segments=B}var C=Ht(e.flags,q),G=Ht(e.traits,W);e.flags=q,e.traits=W,e.updateStorage(),e.trigger&&e.trigger(),h&&h(e.oldFlags,{isFromServer:!0,flagsChanged:!C,traitsChanged:!G})};return p?Promise.all([e.withTraits?e.getJSON(l+"identities/","POST",JSON.stringify({identifier:p,traits:Object.keys(e.withTraits).map(function(g){return{trait_key:g,trait_value:e.withTraits[g]}})})):e.getJSON(l+"identities/?identifier="+encodeURIComponent(p))]).then(function(g){S(g[0],g[1]),a&&!d&&(d=!0,a())}).catch(function(g){var z=g.message;v&&v({message:z})}):Promise.all([e.getJSON(l+"flags/")]).then(function(g){S({flags:g[0]},null),a&&!d&&(d=!0,a())}).catch(function(g){o&&!d&&(d=!0,o(g)),v&&v(g)})},this.analyticsFlags=function(){var a=e.api;if(Object.getOwnPropertyNames(e.evaluationEvent).length!==0)return e.getJSON(a+"analytics/flags/","POST",JSON.stringify(e.evaluationEvent)).then(function(o){var c=e.getState();e.setState(Q(Q({},c),{evaluationEvent:{}})),e.updateEventStorage()}).catch(function(o){e.log("Exception fetching evaluationEvent",o)})},this.analyticsInterval=null,this.api=null,this.cacheFlags=null,this.enableAnalytics=null,this.enableLogs=null,this.environmentID=null,this.evaluationEvent=null,this.flags=null,this.getFlagInterval=null,this.headers=null,this.initialised=null,this.oldFlags=null,this.onChange=null,this.onError=null,this.trigger=null,this.identity=null,this.segments=null,this.ticks=null,this.timer=null,this.traits=null,this.withTraits=null,this.evaluateFlag=function(a){if(e.enableAnalytics){if(!e.evaluationEvent)return;e.evaluationEvent[a]===void 0&&(e.evaluationEvent[a]=0),e.evaluationEvent[a]+=1}e.updateEventStorage()},this.getValue=function(a){var o=e.flags&&e.flags[a.toLowerCase().replace(/ /g,"_")],c=null;return o&&(c=o.value),e.evaluateFlag(a),c},this.getTrait=function(a){return e.traits&&e.traits[a.toLowerCase().replace(/ /g,"_")]},this.setTrait=function(a,o){var c=e,h=c.getJSON,v=c.identity,p=c.api;if(p){var l={identity:{identifier:v},trait_key:a,trait_value:o};return h("".concat(p,"traits/"),"POST",JSON.stringify(l)).then(function(){e.initialised&&e.getFlags()})}console.error(Xt("setTrait"))},this.setTraits=function(a){var o=e,c=o.getJSON,h=o.identity,v=o.api;if(v){a&&typeof a=="object"||console.error("Expected object for flagsmith.setTraits");var p=Object.keys(a).map(function(l){return{identity:{identifier:h},trait_key:l,trait_value:a[l]}});return c("".concat(v,"traits/bulk/"),"PUT",JSON.stringify(p)).then(function(){e.initialised&&e.getFlags()})}console.error(Xt("setTraits"))},this.incrementTrait=function(a,o){var c=e,h=c.getJSON,v=c.identity,p=c.api;return h("".concat(p,"traits/increment-value/"),"POST",JSON.stringify({trait_key:a,increment_by:o,identifier:v})).then(function(){return e.getFlags()})},this.hasFeature=function(a){var o=e.flags&&e.flags[a.toLowerCase().replace(/ /g,"_")],c=!1;return o&&o.enabled&&(c=!0),e.evaluateFlag(a),c},Vt=r.fetch?r.fetch:typeof fetch!="undefined"?fetch:It.fetch,H=r.AsyncStorage}return u.prototype.init=function(r){var e=this,a=r.environmentID,o=r.api,c=o===void 0?Wt:o,h=r.headers,v=r.onChange,p=r.cacheFlags,l=r.onError,d=r.defaultFlags,S=r.preventFetch,g=r.enableLogs,z=r.enableAnalytics,x=r.AsyncStorage,K=r.identity,q=r.traits,W=r._trigger,B=r.state;return new Promise(function(C,G){if(e.environmentID=a,e.api=c,e.headers=h,e.getFlagInterval=null,e.analyticsInterval=null,e.onChange=v,e.trigger=W,e.onError=l,e.identity=K,e.withTraits=q,e.enableLogs=g,e.enableAnalytics=z||!1,e.flags=Object.assign({},d)||{},e.initialised=!0,e.ticks=1e4,e.timer=e.enableLogs?new Date().valueOf():null,x&&(H=x),e.cacheFlags=H!==void 0&&p,e.setState(B),!a)throw G("Please specify a environment id"),"Please specify a environment id";H.getItem(Et).then(function(w){if(w)try{e.evaluationEvent=JSON.parse(w)}catch{e.evaluationEvent={}}else e.evaluationEvent={};e.analyticsInterval=setInterval(e.analyticsFlags,e.ticks)}),e.enableAnalytics&&(e.analyticsInterval&&clearInterval(e.analyticsInterval),H.getItem(Et,function(w,D){if(D){var R=JSON.parse(D);R&&(B=e.getState(),e.log("Retrieved events from cache",D),e.setState(Q(Q({},B),{evaluationEvent:R})))}})),p?H.getItem(Kt,function(w,D){if(D)try{var R=JSON.parse(D);R&&R.api===e.api&&R.environmentID===e.environmentID&&(e.setState(R),e.log("Retrieved flags from cache",R)),e.flags?(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,C(!0),S||e.getFlags()):S?C(!0):e.getFlags(C,G)}catch(Ft){e.log("Exception fetching cached logs",Ft)}else S?(d&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),C(!0)):e.getFlags(C,G)}):S?(d&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),C(!0)):e.getFlags(C,G)}).catch(function(C){return l&&l(C)})},u.prototype.getAllFlags=function(){return this.flags},u.prototype.identify=function(r,e){return this.identity=r,e&&(this.withTraits=e),this.initialised?this.getFlags():Promise.resolve()},u.prototype.getState=function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits,evaluationEvent:this.evaluationEvent}},u.prototype.setState=function(r){r&&(this.initialised=!0,this.api=r.api||this.api||Wt,this.environmentID=r.environmentID||this.environmentID,this.flags=r.flags||this.flags,this.identity=r.identity||this.identity,this.segments=r.segments||this.segments,this.traits=r.traits||this.traits,this.evaluationEvent=r.evaluationEvent||this.evaluationEvent)},u.prototype.log=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.enableLogs&&console.log.apply(this,Ie(["FLAGSMITH:",new Date().valueOf()-this.timer,"ms"],r,!0))},u.prototype.updateStorage=function(){if(this.cacheFlags){var r=JSON.stringify(this.getState());this.log("Setting storage",r),H.setItem(Kt,r)}},u.prototype.updateEventStorage=function(){if(this.enableAnalytics){var r=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",r),H.setItem(Et,r)}},u.prototype.logout=function(){return this.identity=null,this.segments=null,this.traits=null,this.initialised?this.getFlags():Promise.resolve()},u.prototype.startListening=function(r){r===void 0&&(r=1e3),this.getFlagInterval&&clearInterval(this.getFlagInterval),this.getFlagInterval=setInterval(this.getFlags,r)},u.prototype.stopListening=function(){clearInterval(this.getFlagInterval),this.getFlagInterval=null},u.prototype.getSegments=function(){},u}();function Yt(u){var r=u.fetch,e=u.AsyncStorage;return new Ee({fetch:r,AsyncStorage:e})}var Qt=Yt({AsyncStorage:$t,fetch:X});typeof window!="undefined"&&(window.flagsmith=Qt),U.createFlagsmithInstance=function(){return Yt({AsyncStorage:$t,fetch:X})},U.default=Qt,Object.defineProperty(U,"__esModule",{value:!0})})})(Bt,Bt.exports);var ht=Ve(Bt.exports);const He="2w3znEmvoB9e9YMcFjDef3",Ke="https://flagsmith.apps.lifelike.cloud/api/v1/";var Oe;const We=!!((Oe={}.VITE_FLAGSMITH_CACHE_FLAGS)==null||Oe);ht.init({environmentID:He,api:Ke,cacheFlags:We,onChange:()=>{Xe(),Qe(),Ye()}});const Xe=()=>{const j=ht.getValue("login_url"),I=document.getElementById("login-nav-item");I.classList.toggle("d-none",!j),j&&(I.querySelector("a").href=j)},Ye=()=>{const j=ht.hasFeature("opensource_released"),I=ht.getValue("github_url"),U=document.getElementById("github-nav-item");U.classList.toggle("d-none",!j||!I),I&&(U.querySelector("a").href=I)},Qe=()=>{const j=ht.getValue("contact_email"),I=document.getElementById("demo-request-link");I.classList.toggle("d-none",!j),j&&(I.href=`mailto:${j}?body=${encodeURIComponent("I am interested in demoing Lifelike.")}`)};