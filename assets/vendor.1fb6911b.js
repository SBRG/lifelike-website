var Rt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function $e(W){return W&&W.__esModule&&Object.prototype.hasOwnProperty.call(W,"default")?W.default:W}var Mt={exports:{}};(function(W,Se){(function(st,ut){ut(Se)})(Rt,function(st){function ut(u,r){return r=r||{},new Promise(function(e,a){var o=new XMLHttpRequest,c=[],g=[],v={},p=function(){return{ok:(o.status/100|0)==2,statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:p,headers:{keys:function(){return c},entries:function(){return g},get:function(y){return v[y.toLowerCase()]},has:function(y){return y.toLowerCase()in v}}}};for(var l in o.open(r.method||"get",u,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(y,b,h){c.push(b=b.toLowerCase()),g.push([b,h]),v[b]=v[b]?v[b]+","+h:h}),e(p())},o.onerror=a,o.withCredentials=r.credentials=="include",r.headers)o.setRequestHeader(l,r.headers[l]);o.send(r.body||null)})}var lt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof Rt!="undefined"?Rt:typeof self!="undefined"?self:{},Ut={},St={exports:{}};(function(u,r){var e="__lodash_hash_undefined__",a=9007199254740991,o="[object Arguments]",c="[object Function]",g="[object Object]",v=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[o]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l[c]=l["[object Map]"]=l["[object Number]"]=l[g]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1;var y=typeof lt=="object"&&lt&&lt.Object===Object&&lt,b=typeof self=="object"&&self&&self.Object===Object&&self,h=y||b||Function("return this")(),x=r&&!r.nodeType&&r,N=x&&u&&!u.nodeType&&u,$=N&&N.exports===x,z=$&&y.process,B=function(){try{var t=N&&N.require&&N.require("util").types;return t||z&&z.binding&&z.binding("util")}catch{}}(),D=B&&B.isTypedArray;function T(t,n,i){switch(i.length){case 0:return t.call(n);case 1:return t.call(n,i[0]);case 2:return t.call(n,i[0],i[1]);case 3:return t.call(n,i[0],i[1],i[2])}return t.apply(n,i)}var R,S,L,J=Array.prototype,Ot=Function.prototype,ft=Object.prototype,It=h["__core-js_shared__"],ht=Ot.toString,M=ft.hasOwnProperty,Qt=(R=/[^.]+$/.exec(It&&It.keys&&It.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"",Yt=ft.toString,Ie=ht.call(Object),Fe=RegExp("^"+ht.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gt=$?h.Buffer:void 0,Zt=h.Symbol,te=h.Uint8Array,ee=gt?gt.allocUnsafe:void 0,ne=(S=Object.getPrototypeOf,L=Object,function(t){return S(L(t))}),re=Object.create,Ae=ft.propertyIsEnumerable,Ee=J.splice,H=Zt?Zt.toStringTag:void 0,vt=function(){try{var t=Et(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Te=gt?gt.isBuffer:void 0,ie=Math.max,Pe=Date.now,oe=Et(h,"Map"),et=Et(Object,"create"),Ne=function(){function t(){}return function(n){if(!K(n))return{};if(re)return re(n);t.prototype=n;var i=new t;return t.prototype=void 0,i}}();function V(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function U(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function X(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}function Q(t){var n=this.__data__=new U(t);this.size=n.size}function Ce(t,n){var i=Nt(t),s=!i&&Pt(t),f=!i&&!s&&ce(t),_=!i&&!s&&!f&&he(t),d=i||s||f||_,j=d?function(C,Jt){for(var rt=-1,Y=Array(C);++rt<C;)Y[rt]=Jt(rt);return Y}(t.length,String):[],O=j.length;for(var m in t)!n&&!M.call(t,m)||d&&(m=="length"||f&&(m=="offset"||m=="parent")||_&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||ue(m,O))||j.push(m);return j}function Ft(t,n,i){(i!==void 0&&!mt(t[n],i)||i===void 0&&!(n in t))&&At(t,n,i)}function xe(t,n,i){var s=t[n];M.call(t,n)&&mt(s,i)&&(i!==void 0||n in t)||At(t,n,i)}function pt(t,n){for(var i=t.length;i--;)if(mt(t[i][0],n))return i;return-1}function At(t,n,i){n=="__proto__"&&vt?vt(t,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[n]=i}V.prototype.clear=function(){this.__data__=et?et(null):{},this.size=0},V.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},V.prototype.get=function(t){var n=this.__data__;if(et){var i=n[t];return i===e?void 0:i}return M.call(n,t)?n[t]:void 0},V.prototype.has=function(t){var n=this.__data__;return et?n[t]!==void 0:M.call(n,t)},V.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=et&&n===void 0?e:n,this},U.prototype.clear=function(){this.__data__=[],this.size=0},U.prototype.delete=function(t){var n=this.__data__,i=pt(n,t);return!(i<0)&&(i==n.length-1?n.pop():Ee.call(n,i,1),--this.size,!0)},U.prototype.get=function(t){var n=this.__data__,i=pt(n,t);return i<0?void 0:n[i][1]},U.prototype.has=function(t){return pt(this.__data__,t)>-1},U.prototype.set=function(t,n){var i=this.__data__,s=pt(i,t);return s<0?(++this.size,i.push([t,n])):i[s][1]=n,this},X.prototype.clear=function(){this.size=0,this.__data__={hash:new V,map:new(oe||U),string:new V}},X.prototype.delete=function(t){var n=dt(this,t).delete(t);return this.size-=n?1:0,n},X.prototype.get=function(t){return dt(this,t).get(t)},X.prototype.has=function(t){return dt(this,t).has(t)},X.prototype.set=function(t,n){var i=dt(this,t),s=i.size;return i.set(t,n),this.size+=i.size==s?0:1,this},Q.prototype.clear=function(){this.__data__=new U,this.size=0},Q.prototype.delete=function(t){var n=this.__data__,i=n.delete(t);return this.size=n.size,i},Q.prototype.get=function(t){return this.__data__.get(t)},Q.prototype.has=function(t){return this.__data__.has(t)},Q.prototype.set=function(t,n){var i=this.__data__;if(i instanceof U){var s=i.__data__;if(!oe||s.length<199)return s.push([t,n]),this.size=++i.size,this;i=this.__data__=new X(s)}return i.set(t,n),this.size=i.size,this};var Le=function(t,n,i){for(var s=-1,f=Object(t),_=i(t),d=_.length;d--;){var j=_[++s];if(n(f[j],j,f)===!1)break}return t};function yt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":H&&H in Object(t)?function(n){var i=M.call(n,H),s=n[H];try{n[H]=void 0;var f=!0}catch{}var _=Yt.call(n);return f&&(i?n[H]=s:delete n[H]),_}(t):function(n){return Yt.call(n)}(t)}function ae(t){return nt(t)&&yt(t)==o}function Je(t){return!(!K(t)||function(n){return!!Qt&&Qt in n}(t))&&(xt(t)?Fe:v).test(function(n){if(n!=null){try{return ht.call(n)}catch{}try{return n+""}catch{}}return""}(t))}function ke(t){if(!K(t))return function(f){var _=[];if(f!=null)for(var d in Object(f))_.push(d);return _}(t);var n=le(t),i=[];for(var s in t)(s!="constructor"||!n&&M.call(t,s))&&i.push(s);return i}function se(t,n,i,s,f){t!==n&&Le(n,function(_,d){if(f||(f=new Q),K(_))(function(O,m,C,Jt,rt,Y,it){var k=Tt(O,C),I=Tt(m,C),pe=it.get(I);if(pe)return void Ft(O,C,pe);var P=Y?Y(k,I,C+"",O,m,it):void 0,ot=P===void 0;if(ot){var kt=Nt(I),zt=!kt&&ce(I),ye=!kt&&!zt&&he(I);P=I,kt||zt||ye?Nt(k)?P=k:nt(me=k)&&Ct(me)?P=function(w,F){var A=-1,E=w.length;for(F||(F=Array(E));++A<E;)F[A]=w[A];return F}(k):zt?(ot=!1,P=function(w,F){if(F)return w.slice();var A=w.length,E=ee?ee(A):new w.constructor(A);return w.copy(E),E}(I,!0)):ye?(ot=!1,at=I,de=(_t=at.buffer,Dt=new _t.constructor(_t.byteLength),new te(Dt).set(new te(_t)),Dt),P=new at.constructor(de,at.byteOffset,at.length)):P=[]:function(w){if(!nt(w)||yt(w)!=g)return!1;var F=ne(w);if(F===null)return!0;var A=M.call(F,"constructor")&&F.constructor;return typeof A=="function"&&A instanceof A&&ht.call(A)==Ie}(I)||Pt(I)?(P=k,Pt(k)?P=function(w){return function(F,A,E,_e){var Ue=!E;E||(E={});for(var be=-1,Ge=A.length;++be<Ge;){var Z=A[be],bt=_e?_e(E[Z],F[Z],Z,E,F):void 0;bt===void 0&&(bt=F[Z]),Ue?At(E,Z,bt):xe(E,Z,bt)}return E}(w,ge(w))}(k):K(k)&&!xt(k)||(P=function(w){return typeof w.constructor!="function"||le(w)?{}:Ne(ne(w))}(I))):ot=!1}var at,de,_t,Dt,me;ot&&(it.set(I,P),rt(P,I,Jt,Y,it),it.delete(I)),Ft(O,C,P)})(t,n,d,i,se,s,f);else{var j=s?s(Tt(t,d),_,d+"",t,n,f):void 0;j===void 0&&(j=_),Ft(t,d,j)}},ge)}function ze(t,n){return Re(function(i,s,f){return s=ie(s===void 0?i.length-1:s,0),function(){for(var _=arguments,d=-1,j=ie(_.length-s,0),O=Array(j);++d<j;)O[d]=_[s+d];d=-1;for(var m=Array(s+1);++d<s;)m[d]=_[d];return m[s]=f(O),T(i,this,m)}}(t,n,ve),t+"")}var De=vt?function(t,n){return vt(t,"toString",{configurable:!0,enumerable:!1,value:(i=n,function(){return i}),writable:!0});var i}:ve;function dt(t,n){var i,s,f=t.__data__;return((s=typeof(i=n))=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null)?f[typeof n=="string"?"string":"hash"]:f.map}function Et(t,n){var i=function(s,f){return s==null?void 0:s[f]}(t,n);return Je(i)?i:void 0}function ue(t,n){var i=typeof t;return!!(n=n==null?a:n)&&(i=="number"||i!="symbol"&&p.test(t))&&t>-1&&t%1==0&&t<n}function le(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||ft)}function Tt(t,n){if((n!=="constructor"||typeof t[n]!="function")&&n!="__proto__")return t[n]}var Re=function(t){var n=0,i=0;return function(){var s=Pe(),f=16-(s-i);if(i=s,f>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}(De);function mt(t,n){return t===n||t!=t&&n!=n}var Pt=ae(function(){return arguments}())?ae:function(t){return nt(t)&&M.call(t,"callee")&&!Ae.call(t,"callee")},Nt=Array.isArray;function Ct(t){return t!=null&&fe(t.length)&&!xt(t)}var ce=Te||function(){return!1};function xt(t){if(!K(t))return!1;var n=yt(t);return n==c||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}function fe(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=a}function K(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function nt(t){return t!=null&&typeof t=="object"}var he=D?function(t){return function(n){return t(n)}}(D):function(t){return nt(t)&&fe(t.length)&&!!l[yt(t)]};function ge(t){return Ct(t)?Ce(t,!0):ke(t)}var Lt,Me=(Lt=function(t,n,i){se(t,n,i)},ze(function(t,n){var i=-1,s=n.length,f=s>1?n[s-1]:void 0,_=s>2?n[2]:void 0;for(f=Lt.length>3&&typeof f=="function"?(s--,f):void 0,_&&function(j,O,m){if(!K(m))return!1;var C=typeof O;return!!(C=="number"?Ct(m)&&ue(O,m.length):C=="string"&&O in m)&&mt(m[O],j)}(n[0],n[1],_)&&(f=s<3?void 0:f,s=1),t=Object(t);++i<s;){var d=n[i];d&&Lt(t,d,i,f)}return t}));function ve(t){return t}u.exports=Me})(St,St.exports),Object.defineProperty(Ut,"__esModule",{value:!0});var ct,Gt=function(u,r){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return function(e,a){var o=[],c=!0,g=!1,v=void 0;try{for(var p,l=e[Symbol.iterator]();!(c=(p=l.next()).done)&&(o.push(p.value),!a||o.length!==a);c=!0);}catch(y){g=!0,v=y}finally{try{!c&&l.return&&l.return()}finally{if(g)throw v}}return o}(u,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},we=(ct=St.exports)&&ct.__esModule?ct:{default:ct},tt={getItem:function(u,r){return tt.multiGet([u]).then(function(e){return e[0][1]}).then(function(e){return r&&r(null,e),e}).catch(function(e){return r&&r(e,null),e})},setItem:function(u,r,e){return tt.multiSet([[u,r]]).then(function(a){return e&&e(null,a),a}).catch(function(a){return e&&e(a,null),a})},getAllKeys:function(u){return Promise.resolve(Object.keys(localStorage)).then(function(r){return u&&u(null,r),r}).catch(function(r){return u&&u(r,null),r})},removeItem:function(u,r){return tt.multiRemove([u]).then(function(){r&&r(null)}).catch(function(e){r&&r(e,null)})},clear:function(){return new Promise(function(u){window.localStorage.clear(),u()})},mergeItem:function(u,r){return tt.multiMerge([[u,r]])},multiGet:function(u){return new Promise(function(r){r(u.reduce(function(e,a){return e.concat([[a,localStorage.getItem(a)]])},[]))})},multiSet:function(u){return new Promise(function(r,e){var a=[];return u.forEach(function(o){var c=Gt(o,2),g=c[0],v=c[1];try{localStorage.setItem(g,v)}catch(p){a.push(p)}}),a.length>0?e(a):r()})},multiMerge:function(u){return new Promise(function(r,e){var a=[];return u.forEach(function(o){var c=Gt(o,2),g=c[0],v=c[1],p=localStorage.getItem(g);if(p)try{localStorage.setItem(g,JSON.stringify((0,we.default)(JSON.parse(p),JSON.parse(v))))}catch(l){a.push(l)}}),a.length>0?e(a):r()})},multiRemove:function(u){return new Promise(function(r){u.forEach(function(e){return window.localStorage.removeItem(e)}),r()})},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}},$t=Ut.default=tt,q=function(){return q=Object.assign||function(u){for(var r,e=1,a=arguments.length;e<a;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(u[o]=r[o]);return u},q.apply(this,arguments)};function je(u,r,e){if(e||arguments.length===2)for(var a,o=0,c=r.length;o<c;o++)!a&&o in r||(a||(a=Array.prototype.slice.call(r,0,o)),a[o]=r[o]);return u.concat(a||Array.prototype.slice.call(r))}var Bt,G,qt=function u(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var a,o,c;if(Array.isArray(r)){if((a=r.length)!=e.length)return!1;for(o=a;o--!=0;)if(!u(r[o],e[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if((a=(c=Object.keys(r)).length)!==Object.keys(e).length)return!1;for(o=a;o--!=0;)if(!Object.prototype.hasOwnProperty.call(e,c[o]))return!1;for(o=a;o--!=0;){var g=c[o];if(!u(r[g],e[g]))return!1}return!0}return r!=r&&e!=e},wt=wt!==void 0?wt:typeof window!="undefined"?window:{},Ht="BULLET_TRAIN_DB",jt="BULLET_TRAIN_EVENT",Vt="https://api.flagsmith.com/api/v1/",Kt=function(u){return"Attempted to "+u+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},Oe=function(){function u(r){var e=this;this.getJSON=function(a,o,c){var g=e,v=g.environmentID,p=g.headers,l={method:o||"GET",body:c,headers:{"x-environment-key":v}};return o&&o!=="GET"&&(l.headers["Content-Type"]="application/json; charset=utf-8"),p&&Object.assign(l.headers,p),Bt(a,l).then(function(y){return y.text().then(function(b){var h=b;try{h=JSON.parse(b)}catch{}return y.ok?h:Promise.reject(h)})})},this.getFlags=function(a,o){var c=e,g=c.onChange,v=c.onError,p=c.identity,l=c.api,y=!1,b=function(h,x){var N=h.flags,$=h.traits;e.withTraits=!1;var z={},B={};if($=$||[],(N=N||[]).forEach(function(S){z[S.feature.name.toLowerCase().replace(/ /g,"_")]={id:S.feature.id,enabled:S.enabled,value:S.feature_state_value}}),$.forEach(function(S){B[S.trait_key.toLowerCase().replace(/ /g,"_")]=S.trait_value}),e.oldFlags=q({},e.flags),x){var D={};x.map(function(S){D[S.name]=S}),e.segments=D}var T=qt(e.flags,z),R=qt(e.traits,B);e.flags=z,e.traits=B,e.updateStorage(),e.trigger&&e.trigger(),g&&g(e.oldFlags,{isFromServer:!0,flagsChanged:!T,traitsChanged:!R})};return p?Promise.all([e.withTraits?e.getJSON(l+"identities/","POST",JSON.stringify({identifier:p,traits:Object.keys(e.withTraits).map(function(h){return{trait_key:h,trait_value:e.withTraits[h]}})})):e.getJSON(l+"identities/?identifier="+encodeURIComponent(p))]).then(function(h){b(h[0],h[1]),a&&!y&&(y=!0,a())}).catch(function(h){var x=h.message;v&&v({message:x})}):Promise.all([e.getJSON(l+"flags/")]).then(function(h){b({flags:h[0]},null),a&&!y&&(y=!0,a())}).catch(function(h){o&&!y&&(y=!0,o(h)),v&&v(h)})},this.analyticsFlags=function(){var a=e.api;if(Object.getOwnPropertyNames(e.evaluationEvent).length!==0)return e.getJSON(a+"analytics/flags/","POST",JSON.stringify(e.evaluationEvent)).then(function(o){var c=e.getState();e.setState(q(q({},c),{evaluationEvent:{}})),e.updateEventStorage()}).catch(function(o){e.log("Exception fetching evaluationEvent",o)})},this.analyticsInterval=null,this.api=null,this.cacheFlags=null,this.enableAnalytics=null,this.enableLogs=null,this.environmentID=null,this.evaluationEvent=null,this.flags=null,this.getFlagInterval=null,this.headers=null,this.initialised=null,this.oldFlags=null,this.onChange=null,this.onError=null,this.trigger=null,this.identity=null,this.segments=null,this.ticks=null,this.timer=null,this.traits=null,this.withTraits=null,this.evaluateFlag=function(a){if(e.enableAnalytics){if(!e.evaluationEvent)return;e.evaluationEvent[a]===void 0&&(e.evaluationEvent[a]=0),e.evaluationEvent[a]+=1}e.updateEventStorage()},this.getValue=function(a){var o=e.flags&&e.flags[a.toLowerCase().replace(/ /g,"_")],c=null;return o&&(c=o.value),e.evaluateFlag(a),c},this.getTrait=function(a){return e.traits&&e.traits[a.toLowerCase().replace(/ /g,"_")]},this.setTrait=function(a,o){var c=e,g=c.getJSON,v=c.identity,p=c.api;if(p){var l={identity:{identifier:v},trait_key:a,trait_value:o};return g("".concat(p,"traits/"),"POST",JSON.stringify(l)).then(function(){e.initialised&&e.getFlags()})}console.error(Kt("setTrait"))},this.setTraits=function(a){var o=e,c=o.getJSON,g=o.identity,v=o.api;if(v){a&&typeof a=="object"||console.error("Expected object for flagsmith.setTraits");var p=Object.keys(a).map(function(l){return{identity:{identifier:g},trait_key:l,trait_value:a[l]}});return c("".concat(v,"traits/bulk/"),"PUT",JSON.stringify(p)).then(function(){e.initialised&&e.getFlags()})}console.error(Kt("setTraits"))},this.incrementTrait=function(a,o){var c=e,g=c.getJSON,v=c.identity,p=c.api;return g("".concat(p,"traits/increment-value/"),"POST",JSON.stringify({trait_key:a,increment_by:o,identifier:v})).then(function(){return e.getFlags()})},this.hasFeature=function(a){var o=e.flags&&e.flags[a.toLowerCase().replace(/ /g,"_")],c=!1;return o&&o.enabled&&(c=!0),e.evaluateFlag(a),c},Bt=r.fetch?r.fetch:typeof fetch!="undefined"?fetch:wt.fetch,G=r.AsyncStorage}return u.prototype.init=function(r){var e=this,a=r.environmentID,o=r.api,c=o===void 0?Vt:o,g=r.headers,v=r.onChange,p=r.cacheFlags,l=r.onError,y=r.defaultFlags,b=r.preventFetch,h=r.enableLogs,x=r.enableAnalytics,N=r.AsyncStorage,$=r.identity,z=r.traits,B=r._trigger,D=r.state;return new Promise(function(T,R){if(e.environmentID=a,e.api=c,e.headers=g,e.getFlagInterval=null,e.analyticsInterval=null,e.onChange=v,e.trigger=B,e.onError=l,e.identity=$,e.withTraits=z,e.enableLogs=h,e.enableAnalytics=x||!1,e.flags=Object.assign({},y)||{},e.initialised=!0,e.ticks=1e4,e.timer=e.enableLogs?new Date().valueOf():null,N&&(G=N),e.cacheFlags=G!==void 0&&p,e.setState(D),!a)throw R("Please specify a environment id"),"Please specify a environment id";G.getItem(jt).then(function(S){if(S)try{e.evaluationEvent=JSON.parse(S)}catch{e.evaluationEvent={}}else e.evaluationEvent={};e.analyticsInterval=setInterval(e.analyticsFlags,e.ticks)}),e.enableAnalytics&&(e.analyticsInterval&&clearInterval(e.analyticsInterval),G.getItem(jt,function(S,L){if(L){var J=JSON.parse(L);J&&(D=e.getState(),e.log("Retrieved events from cache",L),e.setState(q(q({},D),{evaluationEvent:J})))}})),p?G.getItem(Ht,function(S,L){if(L)try{var J=JSON.parse(L);J&&J.api===e.api&&J.environmentID===e.environmentID&&(e.setState(J),e.log("Retrieved flags from cache",J)),e.flags?(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,T(!0),b||e.getFlags()):b?T(!0):e.getFlags(T,R)}catch(Ot){e.log("Exception fetching cached logs",Ot)}else b?(y&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),T(!0)):e.getFlags(T,R)}):b?(y&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),T(!0)):e.getFlags(T,R)}).catch(function(T){return l&&l(T)})},u.prototype.getAllFlags=function(){return this.flags},u.prototype.identify=function(r,e){return this.identity=r,e&&(this.withTraits=e),this.initialised?this.getFlags():Promise.resolve()},u.prototype.getState=function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits,evaluationEvent:this.evaluationEvent}},u.prototype.setState=function(r){r&&(this.initialised=!0,this.api=r.api||this.api||Vt,this.environmentID=r.environmentID||this.environmentID,this.flags=r.flags||this.flags,this.identity=r.identity||this.identity,this.segments=r.segments||this.segments,this.traits=r.traits||this.traits,this.evaluationEvent=r.evaluationEvent||this.evaluationEvent)},u.prototype.log=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.enableLogs&&console.log.apply(this,je(["FLAGSMITH:",new Date().valueOf()-this.timer,"ms"],r,!0))},u.prototype.updateStorage=function(){if(this.cacheFlags){var r=JSON.stringify(this.getState());this.log("Setting storage",r),G.setItem(Ht,r)}},u.prototype.updateEventStorage=function(){if(this.enableAnalytics){var r=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",r),G.setItem(jt,r)}},u.prototype.logout=function(){return this.identity=null,this.segments=null,this.traits=null,this.initialised?this.getFlags():Promise.resolve()},u.prototype.startListening=function(r){r===void 0&&(r=1e3),this.getFlagInterval&&clearInterval(this.getFlagInterval),this.getFlagInterval=setInterval(this.getFlags,r)},u.prototype.stopListening=function(){clearInterval(this.getFlagInterval),this.getFlagInterval=null},u.prototype.getSegments=function(){},u}();function Wt(u){var r=u.fetch,e=u.AsyncStorage;return new Oe({fetch:r,AsyncStorage:e})}var Xt=Wt({AsyncStorage:$t,fetch:ut});typeof window!="undefined"&&(window.flagsmith=Xt),st.createFlagsmithInstance=function(){return Wt({AsyncStorage:$t,fetch:ut})},st.default=Xt,Object.defineProperty(st,"__esModule",{value:!0})})})(Mt,Mt.exports);var Be=$e(Mt.exports);export{Be as f};