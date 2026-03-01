(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const eh="183",Mg=0,ld=1,yg=2,No=1,Sg=2,sa=3,Ni=0,nn=1,cn=2,wi=0,or=1,Ui=2,ud=3,hd=4,bg=5,xs=100,Eg=101,Tg=102,Ag=103,wg=104,Rg=200,Cg=201,Pg=202,Ig=203,Ul=204,Fl=205,Lg=206,Dg=207,Ng=208,Ug=209,Fg=210,Og=211,Bg=212,zg=213,kg=214,Ol=0,Bl=1,zl=2,_r=3,kl=4,Vl=5,Hl=6,Gl=7,gp=0,Vg=1,Hg=2,Qn=0,_p=1,xp=2,vp=3,Mp=4,yp=5,Sp=6,bp=7,dd="attached",Gg="detached",Ep=300,Rs=301,xr=302,Cc=303,Pc=304,cc=306,vr=1e3,$n=1001,Yo=1002,Nt=1003,Tp=1004,ra=1005,Tt=1006,Uo=1007,Ei=1008,ln=1009,Ap=1010,wp=1011,Ma=1012,th=1013,ai=1014,gn=1015,Fi=1016,nh=1017,ih=1018,ya=1020,Rp=35902,Cp=35899,Pp=1021,Ip=1022,_n=1023,Oi=1026,Ms=1027,sh=1028,rh=1029,Mr=1030,ah=1031,oh=1033,Fo=33776,Oo=33777,Bo=33778,zo=33779,Wl=35840,Xl=35841,ql=35842,jl=35843,Yl=36196,Kl=37492,$l=37496,Zl=37488,Jl=37489,Ql=37490,eu=37491,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,au=37813,ou=37814,cu=37815,lu=37816,uu=37817,hu=37818,du=37819,fu=37820,pu=37821,mu=36492,gu=36494,_u=36495,xu=36283,vu=36284,Mu=36285,yu=36286,ch=2200,lc=2201,Wg=2202,Sa=2300,ba=2301,Ic=2302,fd=2303,Js=2400,Qs=2401,Ko=2402,lh=2500,Xg=2501,qg=0,Lp=1,Su=2,jg=3200,Dp=0,Yg=1,Yi="",qt="srgb",en="srgb-linear",$o="linear",rt="srgb",Ns=7680,pd=519,Kg=512,$g=513,Zg=514,uh=515,Jg=516,Qg=517,hh=518,e0=519,bu=35044,md="300 es",Zn=2e3,Ea=2001;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function n0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i0(){const i=Ta("canvas");return i.style.display="block",i}const gd={};function Zo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Np(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=Np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Jo(...i){const e=i.join(" ");e in gd||(gd[e]=!0,Ae(...i))}function s0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const r0={[Ol]:Bl,[zl]:Hl,[kl]:Gl,[_r]:Vl,[Bl]:Ol,[Hl]:zl,[Gl]:kl,[Vl]:_r};class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _d=1234567;const ua=Math.PI/180,yr=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function a0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function c0(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function l0(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f0(i,e){return i+Math.random()*(e-i)}function p0(i){return i*(.5-Math.random())}function m0(i){i!==void 0&&(_d=i);let e=_d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(i){return i*ua}function _0(i){return i*yr}function x0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function M0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Up={DEG2RAD:ua,RAD2DEG:yr,generateUUID:Nn,clamp:Ke,euclideanModulo:dh,mapLinear:a0,inverseLerp:o0,lerp:ha,damp:c0,pingpong:l0,smoothstep:u0,smootherstep:h0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:y0,normalize:at,denormalize:Cn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+x*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+x*o;const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new C,xd=new xn;class Be{constructor(e,t,n,s,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],E=s[4],S=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*x+o*M+c*w,r[3]=a*m+o*E+c*A,r[6]=a*p+o*S+c*R,r[1]=l*x+u*M+h*w,r[4]=l*m+u*E+h*A,r[7]=l*p+u*S+h*R,r[2]=d*x+f*M+g*w,r[5]=d*m+f*E+g*A,r[8]=d*p+f*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Be,vd=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){const i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const Ze=S0();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class b0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Ta("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let T0=0;const Uc=new C;class Ft extends Ps{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=$n,s=$n,r=Tt,a=Ei,o=_n,c=ln,l=Ft.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Nn(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ep;Ft.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,w=(p+1)/2,A=(u+d)/4,R=(h+x)/4,_=(g+m)/4;return E>S&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends Ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ft(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends A0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fp extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w0 extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ze{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Vi.crossVectors(n,rn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Vi.crossVectors(n,rn)),Vi.normalize(),$a.crossVectors(rn,Vi),s[0]=Vi.x,s[4]=$a.x,s[8]=rn.x,s[1]=Vi.y,s[5]=$a.y,s[9]=rn.y,s[2]=Vi.z,s[6]=$a.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],E=n[7],S=n[11],w=n[15],A=s[0],R=s[4],_=s[8],y=s[12],N=s[1],P=s[5],D=s[9],B=s[13],X=s[2],V=s[6],G=s[10],O=s[14],ee=s[3],Z=s[7],he=s[11],ge=s[15];return r[0]=a*A+o*N+c*X+l*ee,r[4]=a*R+o*P+c*V+l*Z,r[8]=a*_+o*D+c*G+l*he,r[12]=a*y+o*B+c*O+l*ge,r[1]=u*A+h*N+d*X+f*ee,r[5]=u*R+h*P+d*V+f*Z,r[9]=u*_+h*D+d*G+f*he,r[13]=u*y+h*B+d*O+f*ge,r[2]=g*A+x*N+m*X+p*ee,r[6]=g*R+x*P+m*V+p*Z,r[10]=g*_+x*D+m*G+p*he,r[14]=g*y+x*B+m*O+p*ge,r[3]=M*A+E*N+S*X+w*ee,r[7]=M*R+E*P+S*V+w*Z,r[11]=M*_+E*D+S*G+w*he,r[15]=M*y+E*B+S*O+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=c*f-l*d,E=o*f-l*h,S=o*d-c*h,w=a*f-l*u,A=a*d-c*u,R=a*h-o*u;return t*(x*M-m*E+p*S)-n*(g*M-m*w+p*A)+s*(g*E-x*w+p*R)-r*(g*S-x*A+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*o-n*a,E=t*c-s*a,S=t*l-r*a,w=n*c-s*o,A=n*l-r*o,R=s*l-r*c,_=u*x-h*g,y=u*m-d*g,N=u*p-f*g,P=h*m-d*x,D=h*p-f*x,B=d*p-f*m,X=M*B-E*D+S*P+w*N-A*y+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/X;return e[0]=(o*B-c*D+l*P)*V,e[1]=(s*D-n*B-r*P)*V,e[2]=(x*R-m*A+p*w)*V,e[3]=(d*A-h*R-f*w)*V,e[4]=(c*N-a*B-l*y)*V,e[5]=(t*B-s*N+r*y)*V,e[6]=(m*S-g*R-p*E)*V,e[7]=(u*R-d*S+f*E)*V,e[8]=(a*D-o*N+l*_)*V,e[9]=(n*N-t*D-r*_)*V,e[10]=(g*A-x*S+p*M)*V,e[11]=(h*S-u*A-f*M)*V,e[12]=(o*y-a*P-c*_)*V,e[13]=(t*P-n*y+s*_)*V,e[14]=(x*E-g*w-m*M)*V,e[15]=(u*w-h*E+d*M)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,M=c*l,E=c*u,S=c*h,w=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+S)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(d+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+E)*R,s[9]=(m-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fs.set(s[0],s[1],s[2]).length();const o=Fs.set(s[4],s[5],s[6]).length(),c=Fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const l=1/a,u=1/o,h=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Zn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ea)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Zn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ea)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fs=new C,En=new ze,R0=new C(0,0,0),C0=new C(1,1,1),Vi=new C,$a=new C,rn=new C,yd=new ze,Sd=new xn;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const bd=new C,Os=new xn,_i=new ze,Za=new C,Gr=new C,I0=new C,L0=new xn,Ed=new C(1,0,0),Td=new C(0,1,0),Ad=new C(0,0,1),wd={type:"added"},D0={type:"removed"},Bs={type:"childadded",child:null},Fc={type:"childremoved",child:null};class xt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new C,t=new Fn,n=new xn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Be}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Ed,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ed,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Gr,Za,this.up):_i.lookAt(Za,Gr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(_i),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}xt.DEFAULT_UP=new C(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class un extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=dh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bc(a,r,e+1/3),this.g=Bc(a,r,e),this.b=Bc(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ze.workingToColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=qt){Ze.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ja);const n=ha(Hi.h,Ja.h,t),s=ha(Hi.s,Ja.s,t),r=ha(Hi.l,Ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ce;Ce.NAMES=Op;class mh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bp extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tn=new C,xi=new C,zc=new C,vi=new C,zs=new C,ks=new C,Rd=new C,kc=new C,Vc=new C,Hc=new C,Gc=new mt,Wc=new mt,Xc=new mt;class Pn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),xi.subVectors(n,t),zc.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(xi),c=Tn.dot(zc),l=xi.dot(xi),u=xi.dot(zc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector(Xc,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),xi.subVectors(e,t),Tn.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Tn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;zs.subVectors(s,n),ks.subVectors(r,n),kc.subVectors(e,n);const c=zs.dot(kc),l=ks.dot(kc);if(c<=0&&l<=0)return t.copy(n);Vc.subVectors(e,s);const u=zs.dot(Vc),h=ks.dot(Vc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(zs,a);Hc.subVectors(e,r);const f=zs.dot(Hc),g=ks.dot(Hc);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ks,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Rd.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Rd,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(zs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),eo.subVectors(this.max,Wr),Vs.subVectors(e.a,Wr),Hs.subVectors(e.b,Wr),Gs.subVectors(e.c,Wr),Gi.subVectors(Hs,Vs),Wi.subVectors(Gs,Hs),ls.subVectors(Vs,Gs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ls.z,ls.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ls.z,0,-ls.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ls.y,ls.x,0];return!qc(t,Vs,Hs,Gs,eo)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Vs,Hs,Gs,eo))?!1:(to.crossVectors(Gi,Wi),t=[to.x,to.y,to.z],qc(t,Vs,Hs,Gs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Qa=new yn,Vs=new C,Hs=new C,Gs=new C,Gi=new C,Wi=new C,ls=new C,Wr=new C,eo=new C,to=new C,us=new C;function qc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);const o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pt=new C,no=new Xe;let U0=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),e}}class zp extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kp extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}const F0=new yn,Xr=new C,jc=new C;class di{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(jc)),this.expandByPoint(Xr.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let O0=0;const dn=new ze,Yc=new xt,Ws=new C,an=new yn,qr=new yn,Ht=new C;class Rt extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?kp:zp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(an.min,qr.min),an.expandByPoint(Ht),Ht.addVectors(an.max,qr.max),an.expandByPoint(Ht)):(an.expandByPoint(qr.min),an.expandByPoint(qr.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(Ws.fromBufferAttribute(e,l),Ht.add(Ws)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new C,c[_]=new C;const l=new C,u=new C,h=new C,d=new Xe,f=new Xe,g=new Xe,x=new C,m=new C;function p(_,y,N){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,N),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,N),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[_].add(x),o[y].add(x),o[N].add(x),c[_].add(m),c[y].add(m),c[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,y=M.length;_<y;++_){const N=M[_],P=N.start,D=N.count;for(let B=P,X=P+D;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new C,S=new C,w=new C,A=new C;function R(_){w.fromBufferAttribute(s,_),A.copy(w);const y=o[_];E.copy(y),E.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(A,y);const P=S.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,P)}for(let _=0,y=M.length;_<y;++_){const N=M[_],P=N.start,D=N.count;for(let B=P,X=P+D;B<X;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ot(d,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class B0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new C;class gh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let z0=0;class ti extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=or,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new C,Kc=new C,io=new C,Xi=new C,$c=new C,so=new C,Zc=new C;class Na{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kc.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Kc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=Xi.dot(this.direction),c=-Xi.dot(io),l=Xi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Kc).addScaledVector(io,d),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){$c.subVectors(t,e),so.subVectors(n,e),Zc.crossVectors($c,so);let a=this.direction.dot(Zc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const c=o*this.direction.dot(so.crossVectors(Xi,so));if(c<0)return null;const l=o*this.direction.dot($c.cross(Xi));if(l<0||c+l>a)return null;const u=-o*Xi.dot(Zc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cd=new ze,hs=new Na,ro=new di,Pd=new C,ao=new C,oo=new C,co=new C,Jc=new C,lo=new C,Id=new C,uo=new C;class Qe extends xt{constructor(e=new Rt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Jc.fromBufferAttribute(h,e),a?lo.addScaledVector(Jc,u):lo.addScaledVector(Jc.sub(t),u))}t.add(lo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(ro.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ro,Pd)===null||hs.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Cd.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,w=E;S<w;S+=3){const A=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);s=ho(this,p,e,n,l,u,h,A,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=ho(this,a,e,n,l,u,h,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,w=E;S<w;S+=3){const A=S,R=S+1,_=S+2;s=ho(this,p,e,n,l,u,h,A,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,E=m+1,S=m+2;s=ho(this,a,e,n,l,u,h,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function k0(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ni,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(uo);return l<t.near||l>t.far?null:{distance:l,point:uo.clone(),object:i}}function ho(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ao),i.getVertexPosition(c,oo),i.getVertexPosition(l,co);const u=k0(i,e,t,n,ao,oo,co,Id);if(u){const h=new C;Pn.getBarycoord(Id,ao,oo,co,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,h,new Xe)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,h,new Xe)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Pn.getNormal(ao,oo,co,d.normal),u.face=d,u.barycoord=h}return u}const Ld=new C,Dd=new mt,Nd=new mt,V0=new C,Ud=new ze,fo=new C,Qc=new di,Fd=new ze,el=new Na;class H0 extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dd,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qc.copy(this.boundingSphere),Qc.applyMatrix4(s),e.ray.intersectsSphere(Qc)!==!1&&(Fd.copy(s).invert(),el.copy(e.ray).applyMatrix4(Fd),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Dd.fromBufferAttribute(s.attributes.skinIndex,e),Nd.fromBufferAttribute(s.attributes.skinWeight,e),Ld.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Nd.getComponent(r);if(a!==0){const o=Dd.getComponent(r);Ud.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(V0.copy(Ld).applyMatrix4(Ud),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vp extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _h extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,u=Nt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new ze,G0=new ze;class xh{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:G0;Od.multiplyMatrices(o,t[r]),Od.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _h(t,e,e,_n,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new Vp),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Eu extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new ze,Bd=new ze,po=[],zd=new yn,W0=new ze,jr=new Qe,Yr=new di;class X0 extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eu(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),zd.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Yr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Bd.multiplyMatrices(n,Xs),jr.matrixWorld=Bd,jr.raycast(e,po);for(let a=0,o=po.length;a<o;a++){const c=po[a];c.instanceId=r,c.object=this,t.push(c)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(s*this.count),s,this.count,sh,gn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tl=new C,q0=new C,j0=new Be;class gs{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tl.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||j0.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new di,Y0=new Xe(.5,.5),mo=new C;class vh{constructor(e=new gs,t=new gs,n=new gs,s=new gs,r=new gs,a=new gs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],E=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,p-g,w-M).normalize(),s[1].setComponents(l+a,f+u,p+g,w+M).normalize(),s[2].setComponents(l+o,f+h,p+x,w+E).normalize(),s[3].setComponents(l-o,f-h,p-x,w-E).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,f-d,p-m,w-S).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-S).normalize(),t===Zn)s[5].setComponents(l+c,f+d,p+m,w+S).normalize();else if(t===Ea)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=Y0.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mh extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new C,ec=new C,kd=new ze,Kr=new Na,go=new di,nl=new C,Vd=new C;class yh extends xt{constructor(e=new Rt,t=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),ec.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qo.distanceTo(ec);e.setAttribute("lineDistance",new gt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;kd.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(kd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),M=u.getX(x+1),E=_o(this,e,Kr,c,p,M,x);E&&t.push(E)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=_o(this,e,Kr,c,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=_o(this,e,Kr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=_o(this,e,Kr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _o(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Qo.fromBufferAttribute(o,s),ec.fromBufferAttribute(o,r),t.distanceSqToSegment(Qo,ec,nl,Vd)>n)return;nl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(nl);if(!(l<e.near||l>e.far))return{distance:l,point:Vd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Hd=new C,Gd=new C;class Hp extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hd.fromBufferAttribute(t,s),Gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hd.distanceTo(Gd);e.setAttribute("lineDistance",new gt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K0 extends yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pr extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wd=new ze,Tu=new Na,xo=new di,vo=new C;class Ua extends xt{constructor(e=new Rt,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Wd.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(Wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);vo.fromBufferAttribute(h,m),Xd(vo,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)vo.fromBufferAttribute(h,g),Xd(vo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xd(i,e,t,n,s,r,a){const o=Tu.distanceSqToPoint(i);if(o<t){const c=new C;Tu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gp extends Ft{constructor(e=[],t=Rs,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Aa extends Ft{constructor(e,t,n=ai,s,r,a,o=Nt,c=Nt,l,u=Oi,h=1){if(u!==Oi&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z0 extends Aa{constructor(e,t=ai,n=Rs,s,r,a=Nt,o=Nt,c,l=Oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wp extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Is extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function g(x,m,p,M,E,S,w,A,R,_,y){const N=S/R,P=w/_,D=S/2,B=w/2,X=A/2,V=R+1,G=_+1;let O=0,ee=0;const Z=new C;for(let he=0;he<G;he++){const ge=he*P-B;for(let fe=0;fe<V;fe++){const ke=fe*N-D;Z[x]=ke*M,Z[m]=ge*E,Z[p]=X,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(fe/R),h.push(1-he/_),O+=1}}for(let he=0;he<_;he++)for(let ge=0;ge<R;ge++){const fe=d+ge+V*he,ke=d+ge+V*(he+1),_t=d+(ge+1)+V*(he+1),ft=d+(ge+1)+V*he;c.push(fe,ke,ft),c.push(ke,_t,ft),ee+=6}o.addGroup(f,ee,y),f+=ee,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=s+1,m=new C,p=new C;for(let M=0;M<=g;M++){let E=0,S=0,w=0,A=0;if(M<=n){const y=M/n,N=y*Math.PI/2;S=-u-e*Math.cos(N),w=e*Math.sin(N),A=-e*Math.cos(N),E=y*h}else if(M<=n+r){const y=(M-n)/r;S=-u+y*t,w=e,A=0,E=h+y*d}else{const y=(M-n-r)/n,N=y*Math.PI/2;S=u+e*Math.sin(N),w=e*Math.cos(N),A=e*Math.sin(N),E=h+d+y*h}const R=Math.max(0,Math.min(1,E/f));let _=0;M===0?_=.5/s:M===g&&(_=-.5/s);for(let y=0;y<=s;y++){const N=y/s,P=N*Math.PI*2,D=Math.sin(P),B=Math.cos(P);p.x=-w*B,p.y=S,p.z=w*D,o.push(p.x,p.y,p.z),m.set(-w*B,A,w*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(N+_,R)}if(M>0){const y=(M-1)*x;for(let N=0;N<s;N++){const P=y+N,D=y+N+1,B=M*x+N,X=M*x+N+1;a.push(P,D,B),a.push(D,X,B)}}}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class hc extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function M(){const S=new C,w=new C;let A=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const y=[],N=_/r,P=N*(t-e)+e;for(let D=0;D<=s;D++){const B=D/s,X=B*c+o,V=Math.sin(X),G=Math.cos(X);w.x=P*V,w.y=-N*n+m,w.z=P*G,h.push(w.x,w.y,w.z),S.set(V,R,G).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-N),y.push(g++)}x.push(y)}for(let _=0;_<s;_++)for(let y=0;y<r;y++){const N=x[y][_],P=x[y+1][_],D=x[y+1][_+1],B=x[y][_+1];(e>0||y!==0)&&(u.push(N,P,B),A+=3),(t>0||y!==r-1)&&(u.push(P,D,B),A+=3)}l.addGroup(p,A,0),p+=A}function E(S){const w=g,A=new Xe,R=new C;let _=0;const y=S===!0?e:t,N=S===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*N,0),d.push(0,N,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const X=D/s*c+o,V=Math.cos(X),G=Math.sin(X);R.x=y*G,R.y=m*N,R.z=y*V,h.push(R.x,R.y,R.z),d.push(0,N,0),A.x=V*.5+.5,A.y=G*.5*N+.5,f.push(A.x,A.y),g++}for(let D=0;D<s;D++){const B=w+D,X=P+D;S===!0?u.push(X,X+1,B):u.push(X+1,X,B),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dc extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new C,S=new C,w=new C;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],S),f(t[A+2],w),c(E,S,w,M)}function c(M,E,S,w){const A=w+1,R=[];for(let _=0;_<=A;_++){R[_]=[];const y=M.clone().lerp(S,_/A),N=E.clone().lerp(S,_/A),P=A-_;for(let D=0;D<=P;D++)D===0&&_===A?R[_][D]=y:R[_][D]=y.clone().lerp(N,D/P)}for(let _=0;_<A;_++)for(let y=0;y<2*(A-_)-1;y++){const N=Math.floor(y/2);y%2===0?(d(R[_][N+1]),d(R[_+1][N]),d(R[_][N])):(d(R[_][N+1]),d(R[_+1][N+1]),d(R[_+1][N]))}}function l(M){const E=new C;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(M),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function u(){const M=new C;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const S=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(S,1-w)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const E=a[M+0],S=a[M+2],w=a[M+4],A=Math.max(E,S,w),R=Math.min(E,S,w);A>.9&&R<.1&&(E<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,E){const S=M*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function g(){const M=new C,E=new C,S=new C,w=new C,A=new Xe,R=new Xe,_=new Xe;for(let y=0,N=0;y<r.length;y+=9,N+=6){M.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),A.set(a[N+0],a[N+1]),R.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),w.copy(M).add(E).add(S).divideScalar(3);const P=m(w);x(A,N+0,M,P),x(R,N+2,E,P),x(_,N+4,S,P)}}function x(M,E,S,w){w<0&&M.x===1&&(a[E]=M.x-1),S.x===0&&S.z===0&&(a[E]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.vertices,e.indices,e.radius,e.detail)}}class Sh extends dc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sh(e.radius,e.detail)}}class bh extends dc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bh(e.radius,e.detail)}}class is extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let E=0;E<l;E++){const S=E*h-r;g.push(S,-M,0),x.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const E=M+l*p,S=M+l*(p+1),w=M+1+l*(p+1),A=M+1+l*p;f.push(E,S,A),f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class fi extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+S,1-E),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const E=u[p][M+1],S=u[p][M],w=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&f.push(E,S,A),(p!==n-1||c<Math.PI)&&f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const s in n)e[s]=n[s]}return e}function J0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Q0={clone:Sr,merge:Qt};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class n_ extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class On extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends On{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class i_ extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function r_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function qp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ir{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a_ extends Ir{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Js,endingEnd:Js}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qs:r=e,o=2*t-n;break;case Ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qs:a=e,c=2*n-t;break;case Ko:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*x+.5*g,S=f*m-f*x;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+M*a[l+w]+E*a[c+w]+S*a[h+w];return r}}class jp extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class o_ extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class c_ extends Ir{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const x=(n-t)/(s-t),m=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*m+a[c+p]*x;return r}const f=o*2,g=e-1;for(let x=0;x!==o;++x){const m=a[l+x],p=a[c+x],M=g*f+x*2,E=d[M],S=d[M+1],w=e*f+x*2,A=h[w],R=h[w+1];let _=(n-t)/(s-t),y,N,P,D,B;for(let X=0;X<8;X++){y=_*_,N=y*_,P=1-_,D=P*P,B=D*P;const G=B*t+3*D*_*E+3*P*y*A+N*s-n;if(Math.abs(G)<1e-10)break;const O=3*D*(E-t)+6*P*_*(A-E)+3*y*(s-A);if(Math.abs(O)<1e-10)break;_=_-G/O,_=Math.max(0,Math.min(1,_))}r[x]=B*m+3*D*_*S+3*P*y*R+N*p}return r}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new o_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new a_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new c_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break;case fd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Ic;case this.InterpolantFactoryMethodBezier:return fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&n0(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=ba;class Lr extends Bn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Sa;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yp extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}Yp.prototype.ValueTypeName="color";class br extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}br.prototype.ValueTypeName="number";class l_ extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)xn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Er extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new l_(this.times,this.values,this.getValueSize(),e)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Bn{constructor(e,t,n){super(e,t,n)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Sa;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}Tr.prototype.ValueTypeName="vector";class Au{constructor(e="",t=-1,n=[],s=lh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(h_(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=r_(c);c=qd(c,1,u),l=qd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new br(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Le("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];qp(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const E=d[g];m.push(E.time),p.push(E.morphTarget===x?1:0)}s.push(new br(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Tr,f+".position",d,"pos",s),n(Er,f+".quaternion",d,"rot",s),n(Tr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function u_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Yp;case"quaternion":return Er;case"bool":case"boolean":return Lr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function h_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=u_(i.type);if(i.times===void 0){const t=[],n=[];qp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class d_{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const f_=new d_;class Nr{constructor(e){this.manager=e!==void 0?e:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class p_ extends Error{constructor(e,t){super(e),this.response=t}}class Kp extends Nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Si[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:E,value:S})=>{if(E)p.close();else{x+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=u.length;A<R;A++){const _=u[A];_.onProgress&&_.onProgress(w)}p.enqueue(S),M()}},E=>{p.error(E)})}}});return new Response(m)}else throw new p_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ti.add(`file:${e}`,l);const u=Si[e];delete Si[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class m_ extends Nr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=qs.get(a);h===void 0&&(h=[],qs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Ta("img");function c(){u(),t&&t(this);const h=qs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ti.remove(`image:${e}`);const d=qs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class g_ extends Nr{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,a=new m_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Fa extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class __ extends Fa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const il=new ze,Yd=new C,Kd=new C;class Eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ea||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new C,So=new xn,kn=new C;class $p extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,So,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,So,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yo,So,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,So,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new C,$d=new Xe,Zd=new Xe;class jt extends $p{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Zd),t.subVectors(Zd,$d)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class x_ extends Eh{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class v_ extends Fa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new x_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class M_ extends Eh{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Zp extends Fa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new M_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fc extends $p{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y_ extends Eh{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new y_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class S_ extends Fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class da{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const sl=new WeakMap;class b_ extends Nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(sl.has(a)===!0)s&&s(sl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),sl.set(c,l),Ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const js=-90,Ys=1;class E_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(js,Ys,e,t);s.layers=this.layers,this.add(s);const r=new jt(js,Ys,e,t);r.layers=this.layers,this.add(r);const a=new jt(js,Ys,e,t);a.layers=this.layers,this.add(a);const o=new jt(js,Ys,e,t);o.layers=this.layers,this.add(o);const c=new jt(js,Ys,e,t);c.layers=this.layers,this.add(c);const l=new jt(js,Ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class T_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class A_{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){xn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;xn.multiplyQuaternionsFlat(e,a,e,t,e,n),xn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const Ah="\\[\\]\\.:\\/",w_=new RegExp("["+Ah+"]","g"),wh="[^"+Ah+"]",R_="[^"+Ah.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",wh),P_=/(WCOD+)?/.source.replace("WCOD",R_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),D_=new RegExp("^"+C_+P_+I_+L_+"$"),N_=["material","materials","bones","map"];class U_{constructor(e,t,n){const s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(e){const t=D_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=U_;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class F_{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Js,endingEnd:Js};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xg:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case lh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Wg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===ch){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Qs,s.endingEnd=Qs):(e?s.endingStart=this.zeroSlopeAtStart?Qs:Js:s.endingStart=Ko,t?s.endingEnd=this.zeroSlopeAtEnd?Qs:Js:s.endingEnd=Ko)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const O_=new Float32Array(1);class Jp extends Ps{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new A_(nt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jp(new Float32Array(2),new Float32Array(2),1,O_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Au.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=lh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new F_(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Au.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Jd=new ze;class B_{constructor(e,t,n=0,s=1/0){this.ray=new Na(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jd),this}intersectObject(e,t=!0,n=[]){return wu(e,this,n,t),n.sort(Qd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wu(e[s],this,n,t);return n.sort(Qd),n}}function Qd(i,e){return i.distance-e.distance}function wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)wu(r[a],e,t,!0)}}class z_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class k_ extends Hp{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ce(n),s=new Ce(s);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const x=d===r?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new Rt;u.setAttribute("position",new gt(c,3)),u.setAttribute("color",new gt(l,3));const h=new Mh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ef(i,e,t,n){const s=V_(n);switch(t){case Pp:return i*e;case sh:return i*e/s.components*s.byteLength;case rh:return i*e/s.components*s.byteLength;case Mr:return i*e*2/s.components*s.byteLength;case ah:return i*e*2/s.components*s.byteLength;case Ip:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case oh:return i*e*4/s.components*s.byteLength;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case jl:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(e,8)/2;case Yl:case Kl:case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:case Ql:case eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mu:case gu:case _u:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mu:case yu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V_(i){switch(i){case ln:case Ap:return{byteLength:1,components:1};case Ma:case wp:case Fi:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case ai:case th:case gn:return{byteLength:4,components:1};case Rp:case Cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);function Qp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function H_(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,J_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:G_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:q_,alphatest_fragment:j_,alphatest_pars_fragment:Y_,aomap_fragment:K_,aomap_pars_fragment:$_,batching_pars_vertex:Z_,batching_vertex:J_,begin_vertex:Q_,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:sx,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:cx,color_pars_fragment:lx,color_pars_vertex:ux,color_vertex:hx,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:_x,emissivemap_pars_fragment:xx,colorspace_fragment:vx,colorspace_pars_fragment:Mx,envmap_fragment:yx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:bx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Ux,envmap_vertex:Tx,fog_vertex:Ax,fog_pars_vertex:wx,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Ix,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Nx,lights_toon_fragment:Fx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Bx,lights_phong_pars_fragment:zx,lights_physical_fragment:kx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Hx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Yx,map_fragment:Kx,map_pars_fragment:$x,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ev,morphinstance_vertex:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:sv,morphtarget_vertex:rv,normal_fragment_begin:av,normal_fragment_maps:ov,normal_pars_fragment:cv,normal_pars_vertex:lv,normal_vertex:uv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,opaque_fragment:gv,packing:_v,premultiplied_alpha_fragment:xv,project_vertex:vv,dithering_fragment:Mv,dithering_pars_fragment:yv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:Ev,shadowmap_pars_vertex:Tv,shadowmap_vertex:Av,shadowmask_pars_fragment:wv,skinbase_vertex:Rv,skinning_pars_vertex:Cv,skinning_vertex:Pv,skinnormal_vertex:Iv,specularmap_fragment:Lv,specularmap_pars_fragment:Dv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Uv,transmission_fragment:Fv,transmission_pars_fragment:Ov,uv_pars_fragment:Bv,uv_pars_vertex:zv,uv_vertex:kv,worldpos_vertex:Vv,background_vert:Hv,background_frag:Gv,backgroundCube_vert:Wv,backgroundCube_frag:Xv,cube_vert:qv,cube_frag:jv,depth_vert:Yv,depth_frag:Kv,distance_vert:$v,distance_frag:Zv,equirect_vert:Jv,equirect_frag:Qv,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:cM,meshnormal_frag:lM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:xM,shadow_frag:vM,sprite_vert:MM,sprite_frag:yM},oe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Xn={basic:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Qt([oe.points,oe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Qt([oe.common,oe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Qt([oe.sprite,oe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Qt([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Qt([oe.lights,oe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Xn.physical={uniforms:Qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const bo={r:0,b:0,g:0},fs=new Fn,SM=new ze;function bM(i,e,t,n,s,r){const a=new Ce(0);let o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(M){let E=!1;const S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,E){const S=f(E);S&&(S.isCubeTexture||S.mapping===cc)?(l===void 0&&(l=new Qe(new Is(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Sr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),fs.copy(E.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(fs)),l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,(u!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qe(new is(2,2),new oi({name:"BackgroundMaterial",uniforms:Sr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(bo,Xp(i)),t.buffers.color.setClear(bo.r,bo.g,bo.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:p}}function EM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(P,D,B,X,V){let G=!1;const O=h(P,X,B,D);r!==O&&(r=O,l(r.object)),G=f(P,X,B,V),G&&g(P,X,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(P,D,B,X),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,D,B,X){const V=X.wireframe===!0;let G=n[D.id];G===void 0&&(G={},n[D.id]=G);const O=P.isInstancedMesh===!0?P.id:0;let ee=G[O];ee===void 0&&(ee={},G[O]=ee);let Z=ee[B.id];Z===void 0&&(Z={},ee[B.id]=Z);let he=Z[V];return he===void 0&&(he=d(c()),Z[V]=he),he}function d(P){const D=[],B=[],X=[];for(let V=0;V<t;V++)D[V]=0,B[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:X,object:P,attributes:{},index:null}}function f(P,D,B,X){const V=r.attributes,G=D.attributes;let O=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const ge=V[Z];let fe=G[Z];if(fe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),ge===void 0||ge.attribute!==fe||fe&&ge.data!==fe.data)return!0;O++}return r.attributesNum!==O||r.index!==X}function g(P,D,B,X){const V={},G=D.attributes;let O=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let ge=G[Z];ge===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));const fe={};fe.attribute=ge,ge&&ge.data&&(fe.data=ge.data),V[Z]=fe,O++}r.attributes=V,r.attributesNum=O,r.index=X}function x(){const P=r.newAttributes;for(let D=0,B=P.length;D<B;D++)P[D]=0}function m(P){p(P,0)}function p(P,D){const B=r.newAttributes,X=r.enabledAttributes,V=r.attributeDivisors;B[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),V[P]!==D&&(i.vertexAttribDivisor(P,D),V[P]=D)}function M(){const P=r.newAttributes,D=r.enabledAttributes;for(let B=0,X=D.length;B<X;B++)D[B]!==P[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function E(P,D,B,X,V,G,O){O===!0?i.vertexAttribIPointer(P,D,B,V,G):i.vertexAttribPointer(P,D,B,X,V,G)}function S(P,D,B,X){x();const V=X.attributes,G=B.getAttributes(),O=D.defaultAttributeValues;for(const ee in G){const Z=G[ee];if(Z.location>=0){let he=V[ee];if(he===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),he!==void 0){const ge=he.normalized,fe=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const _t=ke.buffer,ft=ke.type,K=ke.bytesPerElement,ie=ft===i.INT||ft===i.UNSIGNED_INT||he.gpuType===th;if(he.isInterleavedBufferAttribute){const ae=he.data,Oe=ae.stride,Ie=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Z.locationSize;Ne++)p(Z.location+Ne,ae.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)m(Z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Ne=0;Ne<Z.locationSize;Ne++)E(Z.location+Ne,fe/Z.locationSize,ft,ge,Oe*K,(Ie+fe/Z.locationSize*Ne)*K,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae,he.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ae=0;ae<Z.locationSize;ae++)E(Z.location+ae,fe/Z.locationSize,ft,ge,fe*K,fe/Z.locationSize*ae*K,ie)}}else if(O!==void 0){const ge=O[ee];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(Z.location,ge);break;case 3:i.vertexAttrib3fv(Z.location,ge);break;case 4:i.vertexAttrib4fv(Z.location,ge);break;default:i.vertexAttrib1fv(Z.location,ge)}}}}M()}function w(){y();for(const P in n){const D=n[P];for(const B in D){const X=D[B];for(const V in X){const G=X[V];for(const O in G)u(G[O].object),delete G[O];delete X[V]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const B in D){const X=D[B];for(const V in X){const G=X[V];for(const O in G)u(G[O].object),delete G[O];delete X[V]}}delete n[P.id]}function R(P){for(const D in n){const B=n[D];for(const X in B){const V=B[X];if(V[P.id]===void 0)continue;const G=V[P.id];for(const O in G)u(G[O].object),delete G[O];delete V[P.id]}}}function _(P){for(const D in n){const B=n[D],X=P.isInstancedMesh===!0?P.id:0,V=B[X];if(V!==void 0){for(const G in V){const O=V[G];for(const ee in O)u(O[ee].object),delete O[ee];delete V[G]}delete B[X],Object.keys(B).length===0&&delete n[D]}}}function y(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function TM(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function AM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gn&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:w,samples:A}}function wM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new gs,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,E=M*4;let S=p.clippingState||null;c.value=S,S=u(g,d,E,f);for(let w=0;w!==E;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==x;++E,S+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ji=4,tf=[.125,.215,.35,.446,.526,.582],vs=20,RM=256,$r=new fc,nf=new Ce;let rl=null,al=0,ol=0,cl=!1;const CM=new C;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=CM}=r;rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,al,ol),this._renderer.xr.enabled=cl,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Fi,format:_n,colorSpace:en,depthBuffer:!1},s=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PM(r)),this._blurMaterial=LM(r,e,t),this._ggxMaterial=IM(r,e,t)}return s}_compileMaterial(e){const t=new Qe(new Rt,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nf),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new Is,new Lt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(nf),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;Ks(s,S*w,E>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Rs||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ks(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ji?n-g+Ji:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ks(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,$r),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ks(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,$r)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):vs;m>vs&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let M=0;for(let R=0;R<vs;++R){const _=R/x,y=Math.exp(-_*_/2);p.push(y),R===0?M+=y:R<m&&(M+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[s],w=3*S*(s>E-Ji?s-E+Ji:0),A=4*(this._cubeSize-S);Ks(t,w,A,3*S,2*S),c.setRenderTarget(t),c.render(h,$r)}}function PM(i){const e=[],t=[],n=[];let s=i;const r=i-Ji+1+tf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ji?c=tf[a-i+Ji-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),E=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,_=A>2?0:-1,y=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(y,x*g*A),E.set(d,m*g*A);const N=[A,A,A,A,A,A];S.set(N,p*g*A)}const w=new Rt;w.setAttribute("position",new Ot(M,x)),w.setAttribute("uv",new Ot(E,m)),w.setAttribute("faceIndex",new Ot(S,p)),n.push(new Qe(w,null)),s>Ji&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rf(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function IM(i,e,t){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function LM(i,e,t){const n=new Float32Array(vs),s=new C(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function af(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function of(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class em extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Is(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:wi});r.uniforms.tEquirect.value=t;const a=new Qe(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Tt),new E_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function DM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Cc||f===Pc)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new em(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Cc||f===Pc,x=f===Rs||f===xr;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new sf(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new sf(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Cc?d.mapping=Rs:f===Pc&&(d.mapping=xr),d}function c(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function NM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Jo("WebGLRenderer: "+n+" extension not supported."),s}}}function UM(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const M=f.array;x=f.version;for(let E=0,S=M.length;E<S;E+=3){const w=M[E+0],A=M[E+1],R=M[E+2];d.push(w,A,A,R,R,w)}}else{const M=g.array;x=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const w=E+0,A=E+1,R=E+2;d.push(w,A,A,R,R,w)}}const m=new(g.count>=65535?kp:zp)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function FM(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function BM(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var f=N;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*h),_=new Fp(R,w,A,h);_.type=gn,_.needsUpdate=!0;const y=S*4;for(let P=0;P<h;P++){const D=p[P],B=M[P],X=E[P],V=w*A*4*P;for(let G=0;G<D.count;G++){const O=G*y;g===!0&&(s.fromBufferAttribute(D,G),R[V+O+0]=s.x,R[V+O+1]=s.y,R[V+O+2]=s.z,R[V+O+3]=0),x===!0&&(s.fromBufferAttribute(B,G),R[V+O+4]=s.x,R[V+O+5]=s.y,R[V+O+6]=s.z,R[V+O+7]=0),m===!0&&(s.fromBufferAttribute(X,G),R[V+O+8]=s.x,R[V+O+9]=s.y,R[V+O+10]=s.z,R[V+O+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new Xe(w,A)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zM(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const kM={[_p]:"LINEAR_TONE_MAPPING",[xp]:"REINHARD_TONE_MAPPING",[vp]:"CINEON_TONE_MAPPING",[Mp]:"ACES_FILMIC_TONE_MAPPING",[Sp]:"AGX_TONE_MAPPING",[bp]:"NEUTRAL_TONE_MAPPING",[yp]:"CUSTOM_TONE_MAPPING"};function VM(i,e,t,n,s){const r=new ei(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new ei(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Rt;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new n_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Qe(o,c),u=new fc(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(M,E){r.setSize(M,E),a.setSize(M,E);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(M,E)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,S=r.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(E,S)}},this.begin=function(M,E){if(f||M.toneMapping===Qn&&m.length===0)return!1;if(x=E,E!==null){const S=E.width,w=E.height;(r.width!==S||r.height!==w)&&this.setSize(S,w)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Qn,!0},this.hasRenderPass=function(){return p},this.end=function(M,E){M.toneMapping=g,f=!0;let S=r,w=a;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(M,w,S,E),R.needsSwap!==!1)){const _=S;S=w,w=_}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},Ze.getTransfer(h)===rt&&(c.defines.SRGB_TRANSFER="");const A=kM[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(x),M.render(l,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const tm=new Ft,Ru=new Aa(1,1),nm=new Fp,im=new w0,sm=new Gp,cf=[],lf=[],uf=new Float32Array(16),hf=new Float32Array(9),df=new Float32Array(4);function Ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function WM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function XM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function qM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),zt(t,n)}}function jM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;hf.set(n),i.uniformMatrix3fv(this.addr,!1,hf),zt(t,n)}}function YM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;uf.set(n),i.uniformMatrix4fv(this.addr,!1,uf),zt(t,n)}}function KM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function ZM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function JM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function QM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function iy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ru.compareFunction=t.isReversedDepthBuffer()?hh:uh,r=Ru):r=tm,t.setTexture2D(e||r,s)}function sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||im,s)}function ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sm,s)}function ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nm,s)}function oy(i){switch(i){case 5126:return HM;case 35664:return GM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return jM;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return $M;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function cy(i,e){i.uniform1fv(this.addr,e)}function ly(i,e){const t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){const t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function hy(i,e){const t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){const t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){const t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){const t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function _y(i,e){i.uniform3iv(this.addr,e)}function xy(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function My(i,e){i.uniform2uiv(this.addr,e)}function yy(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){const n=this.cache,s=e.length,r=mc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ru:a=tm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ey(i,e,t){const n=this.cache,s=e.length,r=mc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||im,r[a])}function Ty(i,e,t){const n=this.cache,s=e.length,r=mc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sm,r[a])}function Ay(i,e,t){const n=this.cache,s=e.length,r=mc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nm,r[a])}function wy(i){switch(i){case 5126:return cy;case 35664:return ly;case 35665:return uy;case 35666:return hy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return vy;case 36294:return My;case 36295:return yy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}}class Cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}}class Py{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function ff(i,e){i.seq.push(e),i.map[e.id]=e}function Iy(i,e,t){const n=i.name,s=n.length;for(ll.lastIndex=0;;){const r=ll.exec(n),a=ll.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ff(t,l===void 0?new Ry(o,i,e):new Cy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Py(o),ff(t,h)),t=h}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Iy(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function pf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ly=37297;let Dy=0;function Ny(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const mf=new Be;function Uy(i){Ze._getMatrix(mf,Ze.workingColorSpace,i);const e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case $o:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ny(i.getShaderSource(e),o)}else return r}function Fy(i,e){const t=Uy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Oy={[_p]:"Linear",[xp]:"Reinhard",[vp]:"Cineon",[Mp]:"ACESFilmic",[Sp]:"AgX",[bp]:"Neutral",[yp]:"Custom"};function By(i,e){const t=Oy[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new C;function zy(){Ze.getLuminanceCoefficients(Eo);const i=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ky(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Vy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function aa(i){return i!==""}function _f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(i){return i.replace(Gy,Xy)}const Wy=new Map;function Xy(i,e){let t=Ve[e];if(t===void 0){const n=Wy.get(e);if(n!==void 0)t=Ve[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cu(t)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(qy,jy)}function jy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yy={[No]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function Ky(i){return Yy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $y={[Rs]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function Zy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$y[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jy={[xr]:"ENVMAP_MODE_REFRACTION"};function Qy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eS={[gp]:"ENVMAP_BLENDING_MULTIPLY",[Vg]:"ENVMAP_BLENDING_MIX",[Hg]:"ENVMAP_BLENDING_ADD"};function tS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eS[i.combine]||"ENVMAP_BLENDING_NONE"}function nS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ky(t),l=Zy(t),u=Qy(t),h=tS(t),d=nS(t),f=ky(t),g=Vy(r),x=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Qn?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Fy("linearToOutputTexel",t.outputColorSpace),zy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=Cu(a),a=_f(a,t),a=xf(a,t),o=Cu(o),o=_f(o,t),o=xf(o,t),a=vf(a),o=vf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,S=M+p+o,w=pf(s,s.VERTEX_SHADER,E),A=pf(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",V=D.trim(),G=B.trim(),O=X.trim();let ee=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const he=gf(s,w,"vertex"),ge=gf(s,A,"fragment");Le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+he+`
`+ge)}else V!==""?Ae("WebGLProgram: Program Info Log:",V):(G===""||O==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ee,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(w),s.deleteShader(A),_=new ko(s,x),y=Hy(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,Ly)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let sS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aS(e),t.set(e,n)),n}}class aS{constructor(e){this.id=sS++,this.code=e,this.usedTimes=0}}function oS(i,e,t,n,s,r){const a=new ph,o=new rS,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,y,N,P,D){const B=P.fog,X=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||V,G),ee=O&&O.mapping===cc?O.image.height:null,Z=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=he!==void 0?he.length:0;let fe=0;X.morphAttributes.position!==void 0&&(fe=1),X.morphAttributes.normal!==void 0&&(fe=2),X.morphAttributes.color!==void 0&&(fe=3);let ke,_t,ft,K;if(Z){const st=Xn[Z];ke=st.vertexShader,_t=st.fragmentShader}else ke=_.vertexShader,_t=_.fragmentShader,o.update(_),ft=o.getVertexShaderID(_),K=o.getFragmentShaderID(_);const ie=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Ne=!!_.map,kt=!!_.matcap,Je=!!O,it=!!_.aoMap,lt=!!_.lightMap,He=!!_.bumpMap,St=!!_.normalMap,I=!!_.displacementMap,Ct=!!_.emissiveMap,tt=!!_.metalnessMap,ht=!!_.roughnessMap,be=_.anisotropy>0,T=_.clearcoat>0,v=_.dispersion>0,U=_.iridescence>0,Y=_.sheen>0,$=_.transmission>0,j=be&&!!_.anisotropyMap,xe=T&&!!_.clearcoatMap,se=T&&!!_.clearcoatNormalMap,Re=T&&!!_.clearcoatRoughnessMap,De=U&&!!_.iridescenceMap,J=U&&!!_.iridescenceThicknessMap,te=Y&&!!_.sheenColorMap,ve=Y&&!!_.sheenRoughnessMap,ye=!!_.specularMap,de=!!_.specularColorMap,Ge=!!_.specularIntensityMap,L=$&&!!_.transmissionMap,re=$&&!!_.thicknessMap,ne=!!_.gradientMap,me=!!_.alphaMap,Q=_.alphaTest>0,q=!!_.alphaHash,Me=!!_.extensions;let Ue=Qn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const dt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:ke,fragmentShader:_t,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:en,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:kt,envMap:Je,envMapMode:Je&&O.mapping,envMapCubeUVHeight:ee,aoMap:it,lightMap:lt,bumpMap:He,normalMap:St,displacementMap:I,emissiveMap:Ct,normalMapObjectSpace:St&&_.normalMapType===Yg,normalMapTangentSpace:St&&_.normalMapType===Dp,metalnessMap:tt,roughnessMap:ht,anisotropy:be,anisotropyMap:j,clearcoat:T,clearcoatMap:xe,clearcoatNormalMap:se,clearcoatRoughnessMap:Re,dispersion:v,iridescence:U,iridescenceMap:De,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:te,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:de,specularIntensityMap:Ge,transmission:$,transmissionMap:L,thicknessMap:re,gradientMap:ne,opaque:_.transparent===!1&&_.blending===or&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:q,combine:_.combine,mapUv:Ne&&g(_.map.channel),aoMapUv:it&&g(_.aoMap.channel),lightMapUv:lt&&g(_.lightMap.channel),bumpMapUv:He&&g(_.bumpMap.channel),normalMapUv:St&&g(_.normalMap.channel),displacementMapUv:I&&g(_.displacementMap.channel),emissiveMapUv:Ct&&g(_.emissiveMap.channel),metalnessMapUv:tt&&g(_.metalnessMap.channel),roughnessMapUv:ht&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:xe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:ye&&g(_.specularMap.channel),specularColorMapUv:de&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:L&&g(_.transmissionMap.channel),thicknessMapUv:re&&g(_.thicknessMap.channel),alphaMapUv:me&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||be),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(Ne||me),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function m(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)y.push(N),y.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function E(_){const y=f[_.type];let N;if(y){const P=Xn[y];N=Q0.clone(P.uniforms)}else N=_.uniforms;return N}function S(_,y){let N=u.get(y);return N!==void 0?++N.usedTimes:(N=new iS(i,y,_,s),l.push(N),u.set(y,N)),N}function w(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:R}}function cS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function c(d,f,g,x,m,p){const M=o(d,f,g,x,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,x,m,p){const M=o(d,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||lS),n.length>1&&n.sort(f||yf),s.length>1&&s.sort(f||yf)}function h(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function uS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Sf,i.set(n,[a])):s>=r.length?(a=new Sf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function dS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fS=0;function pS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mS(i){const e=new hS,t=dS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new ze,a=new ze;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,E=0,S=0,w=0,A=0,R=0;l.sort(pS);for(let y=0,N=l.length;y<N;y++){const P=l[y],D=P.color,B=P.intensity,X=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Mr?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*B,h+=D.g*B,d+=D.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,ee=t.get(P);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(D).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[x]=G;const O=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=O.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=V,S++}x++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(D).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const O=P.shadow,ee=t.get(P);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==E||_.numSpotShadows!==S||_.numSpotMaps!==w||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=E,_.numSpotShadows=S,_.numSpotMaps=w,_.numLightProbes=R,n.version=fS++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const E=l[p];if(E.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function bf(i){const e=new mS(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bf(i),e.set(s,[o])):r>=a.length?(o=new bf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],MS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ef=new ze,Zr=new C,ul=new C;function yS(i,e,t){let n=new vh;const s=new Xe,r=new Xe,a=new mt,o=new i_,c=new s_,l={},u=t.maxTextureSize,h={[Ni]:nn,[nn]:Ni,[cn]:cn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:_S,fragmentShader:xS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let p=this.type;this.render=function(A,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Sg&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=No);const y=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=A.length;X<V;X++){const G=A[X],O=G.shadow;if(O===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ee=O.getFrameExtents();s.multiply(ee),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,O.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sa){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ei(s.x,s.y,{format:Mr,type:Fi,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Aa(s.x,s.y,gn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Oi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt}else G.isPointLight?(O.map=new em(s.x),O.map.depthTexture=new Z0(s.x,ai)):(O.map=new ei(s.x,s.y),O.map.depthTexture=new Aa(s.x,s.y,ai)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Oi,this.type===No?(O.map.depthTexture.compareFunction=Z?hh:uh,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(O.map),i.clear());const fe=O.getViewport(ge);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),D.viewport(a)}if(G.isPointLight){const fe=O.camera,ke=O.matrix,_t=G.distance||fe.far;_t!==fe.far&&(fe.far=_t,fe.updateProjectionMatrix()),Zr.setFromMatrixPosition(G.matrixWorld),fe.position.copy(Zr),ul.copy(fe.position),ul.add(vS[ge]),fe.up.copy(MS[ge]),fe.lookAt(ul),fe.updateMatrixWorld(),ke.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Ef.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ef,fe.coordinateSystem,fe.reversedDepth)}else O.updateMatrices(G);n=O.getFrustum(),S(R,_,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===sa&&M(O,_),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,N,P)};function M(A,R){const _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ei(s.x,s.y,{format:Mr,type:Fi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,_,f,x,null)}function E(A,R,_,y){let N=null;const P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)N=P;else if(N=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=N.uuid,B=R.uuid;let X=l[D];X===void 0&&(X={},l[D]=X);let V=X[B];V===void 0&&(V=N.clone(),X[B]=V,R.addEventListener("dispose",w)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,y===sa?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=i.properties.get(N);D.light=_}return N}function S(A,R,_,y,N){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===sa)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const V=B.groups;for(let G=0,O=V.length;G<O;G++){const ee=V[G],Z=X[ee.materialIndex];if(Z&&Z.visible){const he=E(A,Z,y,N);A.onBeforeShadow(i,A,R,_,B,he,ee),i.renderBufferDirect(_,null,B,he,A,ee),A.onAfterShadow(i,A,R,_,B,he,ee)}}}else if(X.visible){const V=E(A,X,y,N);A.onBeforeShadow(i,A,R,_,B,V,null),i.renderBufferDirect(_,null,B,V,A,null),A.onAfterShadow(i,A,R,_,B,V,null)}}const D=A.children;for(let B=0,X=D.length;B<X;B++)S(D[B],R,_,y,N)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in l){const y=l[_],N=A.target.uuid;N in y&&(y[N].dispose(),delete y[N])}}}function SS(i,e){function t(){let L=!1;const re=new mt;let ne=null;const me=new mt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){L=Q},setClear:function(Q,q,Me,Ue,dt){dt===!0&&(Q*=Ue,q*=Ue,Me*=Ue),re.set(Q,q,Me,Ue),me.equals(re)===!1&&(i.clearColor(Q,q,Me,Ue),me.copy(re))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,ne=null,me=null,Q=null;return{setReversed:function(q){if(re!==q){const Me=e.get("EXT_clip_control");q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=q;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return re},setTest:function(q){q?ie(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(q){ne!==q&&!L&&(i.depthMask(q),ne=q)},setFunc:function(q){if(re&&(q=r0[q]),me!==q){switch(q){case Ol:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=q}},setLocked:function(q){L=q},setClear:function(q){Q!==q&&(Q=q,re&&(q=1-q),i.clearDepth(q))},reset:function(){L=!1,ne=null,me=null,Q=null,re=!1}}}function s(){let L=!1,re=null,ne=null,me=null,Q=null,q=null,Me=null,Ue=null,dt=null;return{setTest:function(st){L||(st?ie(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(st){re!==st&&!L&&(i.stencilMask(st),re=st)},setFunc:function(st,mi,gi){(ne!==st||me!==mi||Q!==gi)&&(i.stencilFunc(st,mi,gi),ne=st,me=mi,Q=gi)},setOp:function(st,mi,gi){(q!==st||Me!==mi||Ue!==gi)&&(i.stencilOp(st,mi,gi),q=st,Me=mi,Ue=gi)},setLocked:function(st){L=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){L=!1,re=null,ne=null,me=null,Q=null,q=null,Me=null,Ue=null,dt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,E=null,S=null,w=null,A=null,R=new Ce(0,0,0),_=0,y=!1,N=null,P=null,D=null,B=null,X=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),G=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),G=O>=2);let Z=null,he={};const ge=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),ke=new mt().fromArray(ge),_t=new mt().fromArray(fe);function ft(L,re,ne,me){const Q=new Uint8Array(4),q=i.createTexture();i.bindTexture(L,q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ne;Me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(re+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return q}const K={};K[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(_r),He(!1),St(ld),ie(i.CULL_FACE),it(wi);function ie(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Oe(L,re){return h[L]!==re?(i.bindFramebuffer(L,re),h[L]=re,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(L,re){let ne=f,me=!1;if(L){ne=d.get(re),ne===void 0&&(ne=[],d.set(re,ne));const Q=L.textures;if(ne.length!==Q.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Me=Q.length;q<Me;q++)ne[q]=i.COLOR_ATTACHMENT0+q;ne.length=Q.length,me=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,me=!0);me&&i.drawBuffers(ne)}function Ne(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const kt={[xs]:i.FUNC_ADD,[Eg]:i.FUNC_SUBTRACT,[Tg]:i.FUNC_REVERSE_SUBTRACT};kt[Ag]=i.MIN,kt[wg]=i.MAX;const Je={[Rg]:i.ZERO,[Cg]:i.ONE,[Pg]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[Fg]:i.SRC_ALPHA_SATURATE,[Ng]:i.DST_COLOR,[Lg]:i.DST_ALPHA,[Ig]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[Ug]:i.ONE_MINUS_DST_COLOR,[Dg]:i.ONE_MINUS_DST_ALPHA,[Og]:i.CONSTANT_COLOR,[Bg]:i.ONE_MINUS_CONSTANT_COLOR,[zg]:i.CONSTANT_ALPHA,[kg]:i.ONE_MINUS_CONSTANT_ALPHA};function it(L,re,ne,me,Q,q,Me,Ue,dt,st){if(L===wi){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),L!==bg){if(L!==m||st!==y){if((p!==xs||S!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,S=xs),st)switch(L){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",L);break}else switch(L){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ud:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hd:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",L);break}M=null,E=null,w=null,A=null,R.set(0,0,0),_=0,m=L,y=st}return}Q=Q||re,q=q||ne,Me=Me||me,(re!==p||Q!==S)&&(i.blendEquationSeparate(kt[re],kt[Q]),p=re,S=Q),(ne!==M||me!==E||q!==w||Me!==A)&&(i.blendFuncSeparate(Je[ne],Je[me],Je[q],Je[Me]),M=ne,E=me,w=q,A=Me),(Ue.equals(R)===!1||dt!==_)&&(i.blendColor(Ue.r,Ue.g,Ue.b,dt),R.copy(Ue),_=dt),m=L,y=!1}function lt(L,re){L.side===cn?ae(i.CULL_FACE):ie(i.CULL_FACE);let ne=L.side===nn;re&&(ne=!ne),He(ne),L.blending===or&&L.transparent===!1?it(wi):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function St(L){L!==Mg?(ie(i.CULL_FACE),L!==P&&(L===ld?i.cullFace(i.BACK):L===yg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),P=L}function I(L){L!==D&&(G&&i.lineWidth(L),D=L)}function Ct(L,re,ne){L?(ie(i.POLYGON_OFFSET_FILL),(B!==re||X!==ne)&&(B=re,X=ne,a.getReversed()&&(re=-re),i.polygonOffset(re,ne))):ae(i.POLYGON_OFFSET_FILL)}function tt(L){L?ie(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ht(L){L===void 0&&(L=i.TEXTURE0+V-1),Z!==L&&(i.activeTexture(L),Z=L)}function be(L,re,ne){ne===void 0&&(Z===null?ne=i.TEXTURE0+V-1:ne=Z);let me=he[ne];me===void 0&&(me={type:void 0,texture:void 0},he[ne]=me),(me.type!==L||me.texture!==re)&&(Z!==ne&&(i.activeTexture(ne),Z=ne),i.bindTexture(L,re||K[L]),me.type=L,me.texture=re)}function T(){const L=he[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function $(){try{i.texSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function Re(){try{i.texStorage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function De(){try{i.texImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function J(){try{i.texImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function te(L){ke.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function ve(L){_t.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_t.copy(L))}function ye(L,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let me=ne.get(L);me===void 0&&(me=i.getUniformBlockIndex(re,L.name),ne.set(L,me))}function de(L,re){const me=l.get(re).get(L);c.get(re)!==me&&(i.uniformBlockBinding(re,me,L.__bindingPointIndex),c.set(re,me))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,he={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,E=null,S=null,w=null,A=null,R=new Ce(0,0,0),_=0,y=!1,N=null,P=null,D=null,B=null,X=null,ke.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ne,setBlending:it,setMaterial:lt,setFlipSided:He,setCullFace:St,setLineWidth:I,setPolygonOffset:Ct,setScissorTest:tt,activeTexture:ht,bindTexture:be,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:De,texImage3D:J,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:se,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:xe,scissor:te,viewport:ve,reset:Ge}}function bS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Ta("canvas")}function x(T,v,U){let Y=1;const $=be(T);if(($.width>U||$.height>U)&&(Y=U/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Y*$.width),xe=Math.floor(Y*$.height);h===void 0&&(h=g(j,xe));const se=v?g(j,xe):h;return se.width=j,se.height=xe,se.getContext("2d").drawImage(T,0,0,j,xe),Ae("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+xe+")."),se}else return"data"in T&&Ae("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,U,Y,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),v===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const xe=$?$o:Ze.getTransfer(Y);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=xe===rt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(T,v){let U;return T?v===null||v===ai||v===ya?U=i.DEPTH24_STENCIL8:v===gn?U=i.DEPTH32F_STENCIL8:v===Ma&&(U=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ai||v===ya?U=i.DEPTH_COMPONENT24:v===gn?U=i.DEPTH_COMPONENT32F:v===Ma&&(U=i.DEPTH_COMPONENT16),U}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),N(v)}function _(T){const v=n.get(T);if(v.__webglInit===void 0)return;const U=T.source,Y=d.get(U);if(Y){const $=Y[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(Y).length===0&&d.delete(U)}n.remove(T)}function y(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const U=T.source,Y=d.get(U);delete Y[v.__cacheKey],a.memory.textures--}function N(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let $=0;$<v.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=T.textures;for(let Y=0,$=U.length;Y<$;Y++){const j=n.get(U[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(T)}let P=0;function D(){P=0}function B(){const T=P;return T>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function X(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function V(T,v){const U=n.get(T);if(T.isVideoTexture&&tt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const Y=T.image;if(Y===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,T,v);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function G(T,v){const U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){K(U,T,v);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function O(T,v){const U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){K(U,T,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function ee(T,v){const U=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){ie(U,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const Z={[vr]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},he={[Nt]:i.NEAREST,[Tp]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ge={[Kg]:i.NEVER,[e0]:i.ALWAYS,[$g]:i.LESS,[uh]:i.LEQUAL,[Zg]:i.EQUAL,[hh]:i.GEQUAL,[Jg]:i.GREATER,[Qg]:i.NOTEQUAL};function fe(T,v){if(v.type===gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Uo||v.magFilter===ra||v.magFilter===Ei||v.minFilter===Tt||v.minFilter===Uo||v.minFilter===ra||v.minFilter===Ei)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Z[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==ra&&v.minFilter!==Ei||v.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const j=X(v);if(j!==T.__cacheKey){$[j]===void 0&&($[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[j].usedTimes++;const xe=$[T.__cacheKey];xe!==void 0&&($[T.__cacheKey].usedTimes--,xe.usedTimes===0&&y(v)),T.__cacheKey=j,T.__webglTexture=$[j].texture}return U}function _t(T,v,U){return Math.floor(Math.floor(T/U)/v)}function ft(T,v,U,Y){const j=T.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,Y,v.data);else{j.sort((J,te)=>J.start-te.start);let xe=0;for(let J=1;J<j.length;J++){const te=j[xe],ve=j[J],ye=te.start+te.count,de=_t(ve.start,v.width,4),Ge=_t(te.start,v.width,4);ve.start<=ye+1&&de===Ge&&_t(ve.start+ve.count-1,v.width,4)===de?te.count=Math.max(te.count,ve.start+ve.count-te.start):(++xe,j[xe]=ve)}j.length=xe+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let J=0,te=j.length;J<te;J++){const ve=j[J],ye=Math.floor(ve.start/4),de=Math.ceil(ve.count/4),Ge=ye%v.width,L=Math.floor(ye/v.width),re=de,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ge,L,re,ne,U,Y,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function K(T,v,U){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const $=ke(T,v),j=v.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+U);const xe=n.get(j);if(j.version!==xe.__version||$===!0){t.activeTexture(i.TEXTURE0+U);const se=Ze.getPrimaries(Ze.workingColorSpace),Re=v.colorSpace===Yi?null:Ze.getPrimaries(v.colorSpace),De=v.colorSpace===Yi||se===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let J=x(v.image,!1,s.maxTextureSize);J=ht(v,J);const te=r.convert(v.format,v.colorSpace),ve=r.convert(v.type);let ye=E(v.internalFormat,te,ve,v.colorSpace,v.isVideoTexture);fe(Y,v);let de;const Ge=v.mipmaps,L=v.isVideoTexture!==!0,re=xe.__version===void 0||$===!0,ne=j.dataReady,me=w(v,J);if(v.isDepthTexture)ye=S(v.format===Ms,v.type),re&&(L?t.texStorage2D(i.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ye,J.width,J.height,0,te,ve,null));else if(v.isDataTexture)if(Ge.length>0){L&&re&&t.texStorage2D(i.TEXTURE_2D,me,ye,Ge[0].width,Ge[0].height);for(let Q=0,q=Ge.length;Q<q;Q++)de=Ge[Q],L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,te,ve,de.data):t.texImage2D(i.TEXTURE_2D,Q,ye,de.width,de.height,0,te,ve,de.data);v.generateMipmaps=!1}else L?(re&&t.texStorage2D(i.TEXTURE_2D,me,ye,J.width,J.height),ne&&ft(v,J,te,ve)):t.texImage2D(i.TEXTURE_2D,0,ye,J.width,J.height,0,te,ve,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ye,Ge[0].width,Ge[0].height,J.depth);for(let Q=0,q=Ge.length;Q<q;Q++)if(de=Ge[Q],v.format!==_n)if(te!==null)if(L){if(ne)if(v.layerUpdates.size>0){const Me=ef(de.width,de.height,v.format,v.type);for(const Ue of v.layerUpdates){const dt=de.data.subarray(Ue*Me/de.data.BYTES_PER_ELEMENT,(Ue+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ue,de.width,de.height,1,te,dt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,de.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,ve,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,te,ve,de.data)}else{L&&re&&t.texStorage2D(i.TEXTURE_2D,me,ye,Ge[0].width,Ge[0].height);for(let Q=0,q=Ge.length;Q<q;Q++)de=Ge[Q],v.format!==_n?te!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ye,de.width,de.height,0,de.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,te,ve,de.data):t.texImage2D(i.TEXTURE_2D,Q,ye,de.width,de.height,0,te,ve,de.data)}else if(v.isDataArrayTexture)if(L){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ye,J.width,J.height,J.depth),ne)if(v.layerUpdates.size>0){const Q=ef(J.width,J.height,v.format,v.type);for(const q of v.layerUpdates){const Me=J.data.subarray(q*Q/J.data.BYTES_PER_ELEMENT,(q+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,te,ve,Me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,ve,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,te,ve,J.data);else if(v.isData3DTexture)L?(re&&t.texStorage3D(i.TEXTURE_3D,me,ye,J.width,J.height,J.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,ve,J.data)):t.texImage3D(i.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,te,ve,J.data);else if(v.isFramebufferTexture){if(re)if(L)t.texStorage2D(i.TEXTURE_2D,me,ye,J.width,J.height);else{let Q=J.width,q=J.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,ye,Q,q,0,te,ve,null),Q>>=1,q>>=1}}else if(Ge.length>0){if(L&&re){const Q=be(Ge[0]);t.texStorage2D(i.TEXTURE_2D,me,ye,Q.width,Q.height)}for(let Q=0,q=Ge.length;Q<q;Q++)de=Ge[Q],L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,te,ve,de):t.texImage2D(i.TEXTURE_2D,Q,ye,te,ve,de);v.generateMipmaps=!1}else if(L){if(re){const Q=be(J);t.texStorage2D(i.TEXTURE_2D,me,ye,Q.width,Q.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,ve,J)}else t.texImage2D(i.TEXTURE_2D,0,ye,te,ve,J);m(v)&&p(Y),xe.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ie(T,v,U){if(v.image.length!==6)return;const Y=ke(T,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);const j=n.get($);if($.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const xe=Ze.getPrimaries(Ze.workingColorSpace),se=v.colorSpace===Yi?null:Ze.getPrimaries(v.colorSpace),Re=v.colorSpace===Yi||xe===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!De&&!J?te[q]=x(v.image[q],!0,s.maxCubemapSize):te[q]=J?v.image[q].image:v.image[q],te[q]=ht(v,te[q]);const ve=te[0],ye=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Ge=E(v.internalFormat,ye,de,v.colorSpace),L=v.isVideoTexture!==!0,re=j.__version===void 0||Y===!0,ne=$.dataReady;let me=w(v,ve);fe(i.TEXTURE_CUBE_MAP,v);let Q;if(De){L&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ge,ve.width,ve.height);for(let q=0;q<6;q++){Q=te[q].mipmaps;for(let Me=0;Me<Q.length;Me++){const Ue=Q[Me];v.format!==_n?ye!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Ge,Ue.width,Ue.height,0,Ue.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Ue.width,Ue.height,ye,de,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Ge,Ue.width,Ue.height,0,ye,de,Ue.data)}}}else{if(Q=v.mipmaps,L&&re){Q.length>0&&me++;const q=be(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ge,q.width,q.height)}for(let q=0;q<6;q++)if(J){L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,ye,de,te[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,te[q].width,te[q].height,0,ye,de,te[q].data);for(let Me=0;Me<Q.length;Me++){const dt=Q[Me].image[q].image;L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,dt.width,dt.height,ye,de,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Ge,dt.width,dt.height,0,ye,de,dt.data)}}else{L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,de,te[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,ye,de,te[q]);for(let Me=0;Me<Q.length;Me++){const Ue=Q[Me];L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,ye,de,Ue.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Ge,ye,de,Ue.image[q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ae(T,v,U,Y,$,j){const xe=r.convert(U.format,U.colorSpace),se=r.convert(U.type),Re=E(U.internalFormat,xe,se,U.colorSpace),De=n.get(v),J=n.get(U);if(J.__renderTarget=v,!De.__hasExternalTextures){const te=Math.max(1,v.width>>j),ve=Math.max(1,v.height>>j);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,j,Re,te,ve,v.depth,0,xe,se,null):t.texImage2D($,j,Re,te,ve,0,xe,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,J.__webglTexture,0,I(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,J.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(T,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,j=S(v.stencilBuffer,$),xe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(v),j,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let $=0;$<Y.length;$++){const j=Y[$],xe=r.convert(j.format,j.colorSpace),se=r.convert(j.type),Re=E(j.internalFormat,xe,se,j.colorSpace);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(v),Re,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(v),Re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(T,v,U){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v.depthTexture);const De=r.convert(v.depthTexture.format),J=r.convert(v.depthTexture.type);let te;v.depthTexture.format===Oi?te=i.DEPTH_COMPONENT24:v.depthTexture.format===Ms&&(te=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,te,v.width,v.height,0,De,J,null)}}else V(v.depthTexture,0);const j=$.__webglTexture,xe=I(v),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Re=v.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Oi)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,se,j,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Re,se,j,0);else if(v.depthTexture.format===Ms)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,se,j,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Re,se,j,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const v=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Ie(v.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Ie(v.__webglFramebuffer[0],T,0):Ie(v.__webglFramebuffer,T,0)}else if(U){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),Oe(v.__webglDepthbuffer[Y],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Oe(v.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,v,U){const Y=n.get(T);v!==void 0&&ae(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ne(T)}function Je(T){const v=T.texture,U=n.get(T),Y=n.get(v);T.addEventListener("dispose",R);const $=T.textures,j=T.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let Re=0;Re<v.mipmaps.length;Re++)U.__webglFramebuffer[se][Re]=i.createFramebuffer()}else U.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)U.__webglFramebuffer[se]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)for(let se=0,Re=$.length;se<Re;se++){const De=n.get($[se]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ct(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Re=$[se];U.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const De=r.convert(Re.format,Re.colorSpace),J=r.convert(Re.type),te=E(Re.internalFormat,De,J,Re.colorSpace,T.isXRRenderTarget===!0),ve=I(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,U.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)ae(U.__webglFramebuffer[se][Re],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re);else ae(U.__webglFramebuffer[se],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,Re=$.length;se<Re;se++){const De=$[se],J=n.get(De);let te=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),fe(te,De),ae(U.__webglFramebuffer,T,De,i.COLOR_ATTACHMENT0+se,te,0),m(De)&&p(te)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),fe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)ae(U.__webglFramebuffer[Re],T,v,i.COLOR_ATTACHMENT0,se,Re);else ae(U.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}T.depthBuffer&&Ne(T)}function it(T){const v=T.textures;for(let U=0,Y=v.length;U<Y;U++){const $=v[U];if(m($)){const j=M(T),xe=n.get($).__webglTexture;t.bindTexture(j,xe),p(j),t.unbindTexture()}}}const lt=[],He=[];function St(T){if(T.samples>0){if(Ct(T)===!1){const v=T.textures,U=T.width,Y=T.height;let $=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(T),se=v.length>1;if(se)for(let De=0;De<v.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Re=T.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<v.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const J=n.get(v[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,$,i.NEAREST),c===!0&&(lt.length=0,He.length=0,lt.push(i.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(lt.push(j),He.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let De=0;De<v.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const J=n.get(v[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function I(T){return Math.min(s.maxSamples,T.samples)}function Ct(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function tt(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ht(T,v){const U=T.colorSpace,Y=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==en&&U!==Yi&&(Ze.getTransfer(U)===rt?(Y!==_n||$!==ln)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",U)),v}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=kt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ES(i,e){function t(n,s=Yi){let r;const a=Ze.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ap)return i.BYTE;if(n===wp)return i.SHORT;if(n===Ma)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Pp)return i.ALPHA;if(n===Ip)return i.RGB;if(n===_n)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===sh)return i.RED;if(n===rh)return i.RED_INTEGER;if(n===Mr)return i.RG;if(n===ah)return i.RG_INTEGER;if(n===oh)return i.RGBA_INTEGER;if(n===Fo||n===Oo||n===Bo||n===zo)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Kl||n===$l||n===Zl||n===Jl||n===Ql||n===eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Kl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ql)return r.COMPRESSED_RG11_EAC;if(n===eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tu||n===nu||n===iu||n===su||n===ru||n===au||n===ou||n===cu||n===lu||n===uu||n===hu||n===du||n===fu||n===pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===au)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===du)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mu||n===gu||n===_u)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mu)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xu||n===vu||n===Mu||n===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const TS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:TS,fragmentShader:AS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RS extends Ps{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new wS,p={},M=t.getContextAttributes();let E=null,S=null;const w=[],A=[],R=new Xe;let _=null;const y=new jt;y.viewport=new mt;const N=new jt;N.viewport=new mt;const P=[y,N],D=new T_;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=w[K];return ie===void 0&&(ie=new Oc,w[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=w[K];return ie===void 0&&(ie=new Oc,w[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=w[K];return ie===void 0&&(ie=new Oc,w[K]=ie),ie.getHandSpace()};function V(K){const ie=A.indexOf(K.inputSource);if(ie===-1)return;const ae=w[ie];ae!==void 0&&(ae.update(K.inputSource,K.frame,l||a),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let K=0;K<w.length;K++){const ie=A[K];ie!==null&&(A[K]=null,w[K].disconnect(ie))}B=null,X=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(E),f=null,d=null,h=null,s=null,S=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Oe=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?Ms:Oi,Oe=M.stencil?ya:ai);const Ne={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ei(d.textureWidth,d.textureHeight,{format:_n,type:ln,depthTexture:new Aa(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ei(f.framebufferWidth,f.framebufferHeight,{format:_n,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let ie=0;ie<K.removed.length;ie++){const ae=K.removed[ie],Oe=A.indexOf(ae);Oe>=0&&(A[Oe]=null,w[Oe].disconnect(ae))}for(let ie=0;ie<K.added.length;ie++){const ae=K.added[ie];let Oe=A.indexOf(ae);if(Oe===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=A.length){A.push(ae),Oe=Ne;break}else if(A[Ne]===null){A[Ne]=ae,Oe=Ne;break}if(Oe===-1)break}const Ie=w[Oe];Ie&&Ie.connect(ae)}}const ee=new C,Z=new C;function he(K,ie,ae){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Oe=ee.distanceTo(Z),Ie=ie.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,kt=Ie[14]/(Ie[10]-1),Je=Ie[14]/(Ie[10]+1),it=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],He=(Ie[8]-1)/Ie[0],St=(Ne[8]+1)/Ne[0],I=kt*He,Ct=kt*St,tt=Oe/(-He+St),ht=tt*-He;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ht),K.translateZ(tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const be=kt+tt,T=Je+tt,v=I-ht,U=Ct+(Oe-ht),Y=it*Je/T*be,$=lt*Je/T*be;K.projectionMatrix.makePerspective(v,U,Y,$,be,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,ae=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),D.near=N.near=y.near=ie,D.far=N.far=y.far=ae,(B!==D.near||X!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,X=D.far),D.layers.mask=K.layers.mask|6,y.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const Oe=K.parent,Ie=D.cameras;ge(D,Oe);for(let Ne=0;Ne<Ie.length;Ne++)ge(Ie[Ne],Oe);Ie.length===2?he(D,y,N):D.projectionMatrix.copy(y.projectionMatrix),fe(K,D,Oe)};function fe(K,ie,ae){ae===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let ke=null;function _t(K,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Oe=!1;ae.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let Je=0;Je<ae.length;Je++){const it=ae[Je];let lt=null;if(f!==null)lt=f.getViewport(it);else{const St=h.getViewSubImage(d,it);lt=St.viewport,Je===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let He=P[Je];He===void 0&&(He=new jt,He.layers.enable(Je),He.viewport=new mt,P[Je]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(lt.x,lt.y,lt.width,lt.height),Je===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(He)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Je=h.getDepthInformation(ae[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,s.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Je=0;Je<ae.length;Je++){const it=ae[Je].camera;if(it){let lt=p[it];lt||(lt=new Wp,p[it]=lt);const He=h.getCameraImage(it);lt.sourceTexture=He}}}}for(let ae=0;ae<w.length;ae++){const Oe=A[ae],Ie=w[ae];Oe!==null&&Ie!==void 0&&Ie.update(Oe,ie,l||a)}ke&&ke(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const ft=new Qp;ft.setAnimationLoop(_t),this.setAnimationLoop=function(K){ke=K},this.dispose=function(){}}}const ps=new Fn,CS=new ze;function PS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,S){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,ps.copy(S),ps.x*=-1,ps.y*=-1,ps.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(CS.makeRotationFromEuler(ps)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){const S=E.program;n.uniformBlockBinding(M,S)}function l(M,E){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const E=h();M.__bindingPointIndex=E;const S=i.createBuffer(),w=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=S.length;A<R;A++){const _=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,N=_.length;y<N;y++){const P=_[y];if(f(P,A,y,w)===!0){const D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let V=0;V<B.length;V++){const G=B[V],O=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,E,S,w){const A=M.value,R=E+"_"+S;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const _=w[R];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return w[R]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function g(M){const E=M.uniforms;let S=0;const w=16;for(let R=0,_=E.length;R<_;R++){const y=Array.isArray(E[R])?E[R]:[E[R]];for(let N=0,P=y.length;N<P;N++){const D=y[N],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,V=B.length;X<V;X++){const G=B[X],O=x(G),ee=S%w,Z=ee%O.boundary,he=ee+Z;S+=Z,he!==0&&w-he<O.storage&&(S+=w-he),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=O.storage}}}const A=S%w;return A>0&&(S+=w-A),M.__size=S,M.__cache={},this}function x(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const LS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function DS(){return Vn===null&&(Vn=new _h(LS,16,16,Mr,Fi),Vn.name="DFG_LUT",Vn.minFilter=Tt,Vn.magFilter=Tt,Vn.wrapS=$n,Vn.wrapT=$n,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class rm{constructor(e={}){const{canvas:t=i0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([oh,ah,rh]),p=new Set([ln,ai,Ma,ya,nh,ih]),M=new Uint32Array(4),E=new Int32Array(4);let S=null,w=null;const A=[],R=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let N=!1;this._outputColorSpace=qt;let P=0,D=0,B=null,X=-1,V=null;const G=new mt,O=new mt;let ee=null;const Z=new Ce(0);let he=0,ge=t.width,fe=t.height,ke=1,_t=null,ft=null;const K=new mt(0,0,ge,fe),ie=new mt(0,0,ge,fe);let ae=!1;const Oe=new vh;let Ie=!1,Ne=!1;const kt=new ze,Je=new C,it=new mt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function St(){return B===null?ke:1}let I=n;function Ct(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eh}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",dt,!1),I===null){const F="webgl2";if(I=Ct(F,b),I===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Le("WebGLRenderer: "+b.message),b}let tt,ht,be,T,v,U,Y,$,j,xe,se,Re,De,J,te,ve,ye,de,Ge,L,re,ne,me;function Q(){tt=new NM(I),tt.init(),re=new ES(I,tt),ht=new AM(I,tt,e,re),be=new SS(I,tt),ht.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),T=new OM(I),v=new cS,U=new bS(I,tt,be,v,ht,re,T),Y=new DM(y),$=new H_(I),ne=new EM(I,$),j=new UM(I,$,T,ne),xe=new zM(I,j,$,ne,T),de=new BM(I,ht,U),te=new wM(v),se=new oS(y,Y,tt,ht,ne,te),Re=new PS(y,v),De=new uS,J=new gS(tt),ye=new bM(y,Y,be,xe,g,c),ve=new yS(y,xe,ht),me=new IS(I,T,ht,be),Ge=new TM(I,tt,T),L=new FM(I,tt,T),T.programs=se.programs,y.capabilities=ht,y.extensions=tt,y.properties=v,y.renderLists=De,y.shadowMap=ve,y.state=be,y.info=T}Q(),x!==ln&&(_=new VM(x,t.width,t.height,s,r));const q=new RS(y,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(b){b!==void 0&&(ke=b,this.setSize(ge,fe,!1))},this.getSize=function(b){return b.set(ge,fe)},this.setSize=function(b,F,W=!0){if(q.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=b,fe=F,t.width=Math.floor(b*ke),t.height=Math.floor(F*ke),W===!0&&(t.style.width=b+"px",t.style.height=F+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(ge*ke,fe*ke).floor()},this.setDrawingBufferSize=function(b,F,W){ge=b,fe=F,ke=W,t.width=Math.floor(b*W),t.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(x===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,F,W,H){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,F,W,H),be.viewport(G.copy(K).multiplyScalar(ke).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,F,W,H){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,F,W,H),be.scissor(O.copy(ie).multiplyScalar(ke).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){be.setScissorTest(ae=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let H=0;if(b){let k=!1;if(B!==null){const ce=B.texture.format;k=m.has(ce)}if(k){const ce=B.texture.type,pe=p.has(ce),le=ye.getClearColor(),Se=ye.getClearAlpha(),Te=le.r,Fe=le.g,We=le.b;pe?(M[0]=Te,M[1]=Fe,M[2]=We,M[3]=Se,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Te,E[1]=Fe,E[2]=We,E[3]=Se,I.clearBufferiv(I.COLOR,0,E))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ye.dispose(),De.dispose(),J.dispose(),v.dispose(),Y.dispose(),xe.dispose(),ne.dispose(),me.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",td),q.removeEventListener("sessionend",nd),os.stop()};function Me(b){b.preventDefault(),Zo("WebGLRenderer: Context Lost."),N=!0}function Ue(){Zo("WebGLRenderer: Context Restored."),N=!1;const b=T.autoReset,F=ve.enabled,W=ve.autoUpdate,H=ve.needsUpdate,k=ve.type;Q(),T.autoReset=b,ve.enabled=F,ve.autoUpdate=W,ve.needsUpdate=H,ve.type=k}function dt(b){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const F=b.target;F.removeEventListener("dispose",st),mi(F)}function mi(b){gi(b),v.remove(b)}function gi(b){const F=v.get(b).programs;F!==void 0&&(F.forEach(function(W){se.releaseProgram(W)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,H,k,ce){F===null&&(F=lt);const pe=k.isMesh&&k.matrixWorld.determinant()<0,le=pg(b,F,W,H,k);be.setMaterial(H,pe);let Se=W.index,Te=1;if(H.wireframe===!0){if(Se=j.getWireframeAttribute(W),Se===void 0)return;Te=2}const Fe=W.drawRange,We=W.attributes.position;let we=Fe.start*Te,ot=(Fe.start+Fe.count)*Te;ce!==null&&(we=Math.max(we,ce.start*Te),ot=Math.min(ot,(ce.start+ce.count)*Te)),Se!==null?(we=Math.max(we,0),ot=Math.min(ot,Se.count)):We!=null&&(we=Math.max(we,0),ot=Math.min(ot,We.count));const bt=ot-we;if(bt<0||bt===1/0)return;ne.setup(k,H,le,W,Se);let Mt,ct=Ge;if(Se!==null&&(Mt=$.get(Se),ct=L,ct.setIndex(Mt)),k.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*St()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(k.isLine){let Yt=H.linewidth;Yt===void 0&&(Yt=1),be.setLineWidth(Yt*St()),k.isLineSegments?ct.setMode(I.LINES):k.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else k.isPoints?ct.setMode(I.POINTS):k.isSprite&&ct.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Yt=k._multiDrawStarts,Ee=k._multiDrawCounts,sn=k._multiDrawCount,et=Se?$.get(Se).bytesPerElement:1,bn=v.get(H).currentProgram.getUniforms();for(let zn=0;zn<sn;zn++)bn.setValue(I,"_gl_DrawID",zn),ct.render(Yt[zn]/et,Ee[zn])}else if(k.isInstancedMesh)ct.renderInstances(we,bt,k.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Yt);ct.renderInstances(we,bt,Ee)}else ct.render(we,bt)};function ed(b,F,W){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,Ka(b,F,W),b.side=Ni,b.needsUpdate=!0,Ka(b,F,W),b.side=cn):Ka(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),w=J.get(W),w.init(F),R.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const H=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const le=ce[pe];ed(le,W,k),H.add(le)}else ed(ce,W,k),H.add(ce)}),w=R.pop(),H},this.compileAsync=function(b,F,W=null){const H=this.compile(b,F,W);return new Promise(k=>{function ce(){if(H.forEach(function(pe){v.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){k(b);return}setTimeout(ce,10)}tt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let wc=null;function fg(b){wc&&wc(b)}function td(){os.stop()}function nd(){os.start()}const os=new Qp;os.setAnimationLoop(fg),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(b){wc=b,q.setAnimationLoop(b),b===null?os.stop():os.start()},q.addEventListener("sessionstart",td),q.addEventListener("sessionend",nd),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=_!==null&&(B===null||W)&&_.begin(y,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,B),w=J.get(b,R.length),w.init(F),R.push(w),kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(kt,Zn,F.reversedDepth),Ne=this.localClippingEnabled,Ie=te.init(this.clippingPlanes,Ne),S=De.get(b,A.length),S.init(),A.push(S),q.enabled===!0&&q.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Rc(pe,F,-1/0,y.sortObjects)}Rc(b,F,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(_t,ft),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&ye.addToRenderList(S,b),this.info.render.frame++,Ie===!0&&te.beginShadows();const k=w.state.shadowsArray;if(ve.render(k,b,F),Ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&_.hasRenderPass())===!1){const pe=S.opaque,le=S.transmissive;if(w.setupLights(),F.isArrayCamera){const Se=F.cameras;if(le.length>0)for(let Te=0,Fe=Se.length;Te<Fe;Te++){const We=Se[Te];sd(pe,le,b,We)}He&&ye.render(b);for(let Te=0,Fe=Se.length;Te<Fe;Te++){const We=Se[Te];id(S,b,We,We.viewport)}}else le.length>0&&sd(pe,le,b,F),He&&ye.render(b),id(S,b,F)}B!==null&&D===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),H&&_.end(y),b.isScene===!0&&b.onAfterRender(y,b,F),ne.resetDefaultState(),X=-1,V=null,R.pop(),R.length>0?(w=R[R.length-1],Ie===!0&&te.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Rc(b,F,W,H){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){H&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(kt);const pe=xe.update(b),le=b.material;le.visible&&S.push(b,pe,le,W,it.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const pe=xe.update(b),le=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),it.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),it.copy(pe.boundingSphere.center)),it.applyMatrix4(b.matrixWorld).applyMatrix4(kt)),Array.isArray(le)){const Se=pe.groups;for(let Te=0,Fe=Se.length;Te<Fe;Te++){const We=Se[Te],we=le[We.materialIndex];we&&we.visible&&S.push(b,pe,we,W,it.z,We)}}else le.visible&&S.push(b,pe,le,W,it.z,null)}}const ce=b.children;for(let pe=0,le=ce.length;pe<le;pe++)Rc(ce[pe],F,W,H)}function id(b,F,W,H){const{opaque:k,transmissive:ce,transparent:pe}=b;w.setupLightsView(W),Ie===!0&&te.setGlobalState(y.clippingPlanes,W),H&&be.viewport(G.copy(H)),k.length>0&&Ya(k,F,W),ce.length>0&&Ya(ce,F,W),pe.length>0&&Ya(pe,F,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function sd(b,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const we=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:we?Fi:ln,minFilter:Ei,samples:ht.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ce=w.state.transmissionRenderTarget[H.id],pe=H.viewport||G;ce.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),Se=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(Z),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),He&&ye.render(W);const Fe=y.toneMapping;y.toneMapping=Qn;const We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ie===!0&&te.setGlobalState(y.clippingPlanes,H),Ya(b,W,H),U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce),tt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ot=0,bt=F.length;ot<bt;ot++){const Mt=F[ot],{object:ct,geometry:Yt,material:Ee,group:sn}=Mt;if(Ee.side===cn&&ct.layers.test(H.layers)){const et=Ee.side;Ee.side=nn,Ee.needsUpdate=!0,rd(ct,W,H,Yt,Ee,sn),Ee.side=et,Ee.needsUpdate=!0,we=!0}}we===!0&&(U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce))}y.setRenderTarget(le,Se,Te),y.setClearColor(Z,he),We!==void 0&&(H.viewport=We),y.toneMapping=Fe}function Ya(b,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ce=b.length;k<ce;k++){const pe=b[k],{object:le,geometry:Se,group:Te}=pe;let Fe=pe.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),le.layers.test(W.layers)&&rd(le,F,W,Se,Fe,Te)}}function rd(b,F,W,H,k,ce){b.onBeforeRender(y,F,W,H,k,ce),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(y,F,W,H,b,ce),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,y.renderBufferDirect(W,F,H,k,b,ce),k.side=Ni,k.needsUpdate=!0,y.renderBufferDirect(W,F,H,k,b,ce),k.side=cn):y.renderBufferDirect(W,F,H,k,b,ce),b.onAfterRender(y,F,W,H,k,ce)}function Ka(b,F,W){F.isScene!==!0&&(F=lt);const H=v.get(b),k=w.state.lights,ce=w.state.shadowsArray,pe=k.state.version,le=se.getParameters(b,k.state,ce,F,W),Se=se.getProgramCacheKey(le);let Te=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=Y.get(b.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",st),Te=new Map,H.programs=Te);let We=Te.get(Se);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===pe)return od(b,le),We}else le.uniforms=se.getUniforms(b),b.onBeforeCompile(le,y),We=se.acquireProgram(le,Se),Te.set(Se,We),H.uniforms=le.uniforms;const we=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=te.uniform),od(b,le),H.needsLights=gg(b),H.lightsStateVersion=pe,H.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function ad(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=ko.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function od(b,F){const W=v.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function pg(b,F,W,H,k){F.isScene!==!0&&(F=lt),U.resetTextureUnits();const ce=F.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,le=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:en,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=Y.get(H.envMap||pe,Se),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let Mt=Qn;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ct!==void 0?ct.length:0,Ee=v.get(H),sn=w.state.lights;if(Ie===!0&&(Ne===!0||b!==V)){const Vt=b===V&&H.id===X;te.setState(H,b,Vt)}let et=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==sn.state.version||Ee.outputColorSpace!==le||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Te||H.fog===!0&&Ee.fog!==ce||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==We||Ee.morphTargets!==we||Ee.morphNormals!==ot||Ee.morphColors!==bt||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==Yt)&&(et=!0):(et=!0,Ee.__version=H.version);let bn=Ee.currentProgram;et===!0&&(bn=Ka(H,F,k));let zn=!1,cs=!1,Ls=!1;const ut=bn.getUniforms(),Xt=Ee.uniforms;if(be.useProgram(bn.program)&&(zn=!0,cs=!0,Ls=!0),H.id!==X&&(X=H.id,cs=!0),zn||V!==b){be.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(I,"projectionMatrix",b.projectionMatrix),ut.setValue(I,"viewMatrix",b.matrixWorldInverse);const ki=ut.map.cameraPosition;ki!==void 0&&ki.setValue(I,Je.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,cs=!0,Ls=!0)}if(Ee.needsLights&&(sn.state.directionalShadowMap.length>0&&ut.setValue(I,"directionalShadowMap",sn.state.directionalShadowMap,U),sn.state.spotShadowMap.length>0&&ut.setValue(I,"spotShadowMap",sn.state.spotShadowMap,U),sn.state.pointShadowMap.length>0&&ut.setValue(I,"pointShadowMap",sn.state.pointShadowMap,U)),k.isSkinnedMesh){ut.setOptional(I,k,"bindMatrix"),ut.setOptional(I,k,"bindMatrixInverse");const Vt=k.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ut.setValue(I,"boneTexture",Vt.boneTexture,U))}k.isBatchedMesh&&(ut.setOptional(I,k,"batchingTexture"),ut.setValue(I,"batchingTexture",k._matricesTexture,U),ut.setOptional(I,k,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",k._indirectTexture,U),ut.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",k._colorsTexture,U));const zi=W.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&de.update(k,W,bn),(cs||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,ut.setValue(I,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=DS()),cs&&(ut.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&mg(Xt,Ls),ce&&H.fog===!0&&Re.refreshFogUniforms(Xt,ce),Re.refreshMaterialUniforms(Xt,H,ke,fe,w.state.transmissionRenderTarget[b.id]),ko.upload(I,ad(Ee),Xt,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ko.upload(I,ad(Ee),Xt,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(I,"center",k.center),ut.setValue(I,"modelViewMatrix",k.modelViewMatrix),ut.setValue(I,"normalMatrix",k.normalMatrix),ut.setValue(I,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vt=H.uniformsGroups;for(let ki=0,Ds=Vt.length;ki<Ds;ki++){const cd=Vt[ki];me.update(cd,bn),me.bind(cd,bn)}}return bn}function mg(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function gg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,F,W){const H=v.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=F,v.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const W=v.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const _g=I.createFramebuffer();this.setRenderTarget=function(b,F=0,W=0){B=b,P=F,D=W;let H=null,k=!1,ce=!1;if(b){const le=v.get(b);if(le.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(I.FRAMEBUFFER,le.__webglFramebuffer),G.copy(b.viewport),O.copy(b.scissor),ee=b.scissorTest,be.viewport(G),be.scissor(O),be.setScissorTest(ee),X=-1;return}else if(le.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(le.__hasExternalTextures)U.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(le.__boundDepthTexture!==Fe){if(Fe!==null&&v.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ce=!0);const Te=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?H=Te[F][W]:H=Te[F],k=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?H=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[W]:H=Te,G.copy(b.viewport),O.copy(b.scissor),ee=b.scissorTest}else G.copy(K).multiplyScalar(ke).floor(),O.copy(ie).multiplyScalar(ke).floor(),ee=ae;if(W!==0&&(H=_g),be.bindFramebuffer(I.FRAMEBUFFER,H)&&be.drawBuffers(b,H),be.viewport(G),be.scissor(O),be.setScissorTest(ee),k){const le=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,le.__webglTexture,W)}else if(ce){const le=F;for(let Se=0;Se<b.textures.length;Se++){const Te=v.get(b.textures[Se]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Se,Te.__webglTexture,W,le)}}else if(b!==null&&W!==0){const le=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,le.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,F,W,H,k,ce,pe,le=0){if(!(b&&b.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){be.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Te=b.textures[le],Fe=Te.format,We=Te.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le),!ht.textureFormatReadable(Fe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(We)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-H&&W>=0&&W<=b.height-k&&I.readPixels(F,W,H,k,re.convert(Fe),re.convert(We),ce)}finally{const Te=B!==null?v.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,H,k,ce,pe,le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se)if(F>=0&&F<=b.width-H&&W>=0&&W<=b.height-k){be.bindFramebuffer(I.FRAMEBUFFER,Se);const Te=b.textures[le],Fe=Te.format,We=Te.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le),!ht.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(F,W,H,k,re.convert(Fe),re.convert(We),0);const ot=B!==null?v.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ot);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await s0(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(we),I.deleteSync(bt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){const H=Math.pow(2,-W),k=Math.floor(b.image.width*H),ce=Math.floor(b.image.height*H),pe=F!==null?F.x:0,le=F!==null?F.y:0;U.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,pe,le,k,ce),be.unbindTexture()};const xg=I.createFramebuffer(),vg=I.createFramebuffer();this.copyTextureToTexture=function(b,F,W=null,H=null,k=0,ce=0){let pe,le,Se,Te,Fe,We,we,ot,bt;const Mt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(W!==null)pe=W.max.x-W.min.x,le=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Fe=W.min.y,We=W.isBox3?W.min.z:0;else{const Xt=Math.pow(2,-k);pe=Math.floor(Mt.width*Xt),le=Math.floor(Mt.height*Xt),b.isDataArrayTexture?Se=Mt.depth:b.isData3DTexture?Se=Math.floor(Mt.depth*Xt):Se=1,Te=0,Fe=0,We=0}H!==null?(we=H.x,ot=H.y,bt=H.z):(we=0,ot=0,bt=0);const ct=re.convert(F.format),Yt=re.convert(F.type);let Ee;F.isData3DTexture?(U.setTexture3D(F,0),Ee=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Ee=I.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const sn=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=I.getParameter(I.UNPACK_SKIP_PIXELS),zn=I.getParameter(I.UNPACK_SKIP_ROWS),cs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Ls=b.isDataArrayTexture||b.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Xt=v.get(b),zi=v.get(F),Vt=v.get(Xt.__renderTarget),ki=v.get(zi.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ds=0;Ds<Se;Ds++)Ls&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(b).__webglTexture,k,We+Ds),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(F).__webglTexture,ce,bt+Ds)),I.blitFramebuffer(Te,Fe,pe,le,we,ot,pe,le,I.DEPTH_BUFFER_BIT,I.NEAREST);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||v.has(b)){const Xt=v.get(b),zi=v.get(F);be.bindFramebuffer(I.READ_FRAMEBUFFER,xg),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,vg);for(let Vt=0;Vt<Se;Vt++)Ls?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,k,We+Vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,k),ut?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zi.__webglTexture,ce,bt+Vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zi.__webglTexture,ce),k!==0?I.blitFramebuffer(Te,Fe,pe,le,we,ot,pe,le,I.COLOR_BUFFER_BIT,I.NEAREST):ut?I.copyTexSubImage3D(Ee,ce,we,ot,bt+Vt,Te,Fe,pe,le):I.copyTexSubImage2D(Ee,ce,we,ot,Te,Fe,pe,le);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ee,ce,we,ot,bt,pe,le,Se,ct,Yt,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,ce,we,ot,bt,pe,le,Se,ct,Mt.data):I.texSubImage3D(Ee,ce,we,ot,bt,pe,le,Se,ct,Yt,Mt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ce,we,ot,pe,le,ct,Yt,Mt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ce,we,ot,Mt.width,Mt.height,ct,Mt.data):I.texSubImage2D(I.TEXTURE_2D,ce,we,ot,pe,le,ct,Yt,Mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,sn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,zn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cs),ce===0&&F.generateMipmaps&&I.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){P=0,D=0,B=null,be.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Tf(i,e){if(e===qg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Su||e===Lp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Su)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Rh(i){const e=new Map,t=new Map,n=i.clone();return am(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function am(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)am(i.children[n],e.children[n],t)}class NS extends Nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new Af(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Af(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new JS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=da.extractUrlBase(e);a=da.resolveURL(l,this.path)}else a=da.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===om){try{a[je.KHR_BINARY_GLTF]=new QS(e)}catch(h){s&&s(h);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new db(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:a[h]=new OS;break;case je.KHR_DRACO_MESH_COMPRESSION:a[h]=new eb(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[h]=new tb;break;case je.KHR_MESH_QUANTIZATION:a[h]=new nb;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function US(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function wt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FS{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ce(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],en);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Th(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zp(u),l.distance=h;break;case"spot":l=new v_(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class OS{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const s=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(s)}}class BS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(r,r)}return Promise.all(s)}}class kS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class VS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class HS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],en)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class GS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class WS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],en),Promise.all(s)}}class XS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class qS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],en),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(s)}}class jS{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class YS{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class KS{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $S{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class ZS{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Af{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class JS{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==fn.TRIANGLES&&l.mode!==fn.TRIANGLE_STRIP&&l.mode!==fn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const x=new ze,m=new C,p=new xn,M=new C(1,1,1),E=new X0(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,x.compose(m,p,M));for(const S in c)if(S==="_COLOR_0"){const w=c[S];E.instanceColor=new Eu(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);xt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const om="glTF",Jr=12,wf={JSON:1313821514,BIN:5130562};class QS{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Jr,r=new DataView(e,Jr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===wf.JSON){const l=new Uint8Array(e,Jr+a,o);this.content=n.decode(l)}else if(c===wf.BIN){const l=Jr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Pu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Pu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=lr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},o,l,en,d)})})}}class tb{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nb{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class cm extends Ir{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,M=1-m,E=p-d+h;for(let S=0;S!==o;S++){const w=a[x+S+o],A=a[x+S+c]*u,R=a[g+S+o],_=a[g+S]*u;r[S]=M*w+E*A+m*R+p*_}return r}}const ib=new xn;class sb extends cm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ib.fromArray(r).normalize().toArray(r),r}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:Nt,9729:Tt,9984:Tp,9985:Uo,9986:ra,9987:Ei},Cf={33071:$n,33648:Yo,10497:vr},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rb={CUBICSPLINE:void 0,LINEAR:ba,STEP:Sa},dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ab(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),i.DefaultMaterial}function ms(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ob(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function cb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lb(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fl(t.attributes):e=i.indices+":"+fl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fl(i.targets[n]);return e}function fl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Iu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ub(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hb=new ze;class db{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new US,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new g_(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ms(r,o,s),Gn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(da.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=hl[s.type],o=lr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ot(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=hl[s.type],l=lr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(M);E||(x=new l(o,p*f,s.count*f/u),E=new B0(x,f/u),t.cache.add(M,E)),m=new gh(E,c,d%f/u,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new Ot(x,c,g);if(s.sparse!==void 0){const p=hl.SCALAR,M=lr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,w=new M(a[1],E,s.sparse.count*p),A=new l(a[2],S,s.sparse.count*c);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=w.length;R<_;R++){const y=w[R];if(m.setX(y,A[R*c]),c>=2&&m.setY(y,A[R*c+1]),c>=3&&m.setZ(y,A[R*c+2]),c>=4&&m.setW(y,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Rf[d.magFilter]||Tt,u.minFilter=Rf[d.minFilter]||Ei,u.wrapS=Cf[d.wrapS]||vr,u.wrapT=Cf[d.wrapT]||vr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nt&&u.minFilter!==Tt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ft(x);m.needsUpdate=!0,d(m)}),t.load(da.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Gn(h,a),h.userData.mimeType=a.mimeType||ub(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pr,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Mh,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return On}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const h=s[je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],en),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,qt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);const u=r.alphaMode||dl.OPAQUE;if(u===dl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===dl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Lt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Lt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Lt){const h=r.emissiveFactor;o.emissive=new Ce().setRGB(h[0],h[1],h[2],en)}return r.emissiveTexture!==void 0&&a!==Lt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Gn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ms(s,h,r),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Pf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=lb(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Pf(new Rt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?ab(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=a[f];let p;const M=l[f];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new H0(x,M):new Qe(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?p.geometry=Tf(p.geometry,Lp):m.mode===fn.TRIANGLE_FAN&&(p.geometry=Tf(p.geometry,Su));else if(m.mode===fn.LINES)p=new Hp(x,M);else if(m.mode===fn.LINE_STRIP)p=new yh(x,M);else if(m.mode===fn.LINE_LOOP)p=new K0(x,M);else if(m.mode===fn.POINTS)p=new Ua(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&ms(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ms(s,h[0],r),h[0];const d=new un;r.extensions&&ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Up.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new fc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xh(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let E=0,S=d.length;E<S;E++){const w=d[E],A=f[E],R=g[E],_=x[E],y=m[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const N=n._createAnimationTracks(w,A,R,_,y);if(N)for(let P=0;P<N.length;P++)p.push(N[P])}const M=new Au(r,void 0,p);return Gn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,hb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new C().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Vp:l.length>1?u=new un:l.length===1?u=l[0]:u=new xt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Gn(u,r),r.extensions&&ms(n,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new un;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&ms(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){const d=c[u];d.parent!==null?r.add(Rh(d)):r.add(d)}const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof ti||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ji[r.path]){case ji.weights:l=br;break;case ji.rotation:l=Er;break;case ji.translation:case ji.scale:l=Tr;break;default:n.itemSize===1?l=br:l=Tr;break}const u=s.interpolation!==void 0?rb[s.interpolation]:ba,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Iu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Er?sb:cm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fb(i,e,t){const n=e.attributes,s=new yn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const u=Iu(lr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Iu(lr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new di;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Pf(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Pu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Gn(i,e),fb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ob(i,e.targets,t):i})}const gc=document.querySelector("#app");gc.innerHTML=`
  <section id="bootLoader">
    <div class="boot-card">
      <h1>Cargando Assets</h1>
      <p id="bootLoaderText">Inicializando...</p>
      <div class="boot-track">
        <div id="bootLoaderFill" class="boot-fill"></div>
      </div>
      <p id="bootLoaderPercent">0%</p>
    </div>
  </section>

  <section id="lobby" class="hidden">
    <div class="lobby-layout">
      <div class="lobby-main">
        <h1>Koketria Game</h1>
        <p id="connectionStatus">Conectando al backend...</p>
        <label>
          Nombre de jugador
          <input id="playerName" maxlength="24" placeholder="Neo" />
        </label>
        <label>
          Personaje
          <select id="characterSelect">
            <option value="">Cargando...</option>
          </select>
        </label>
        <div id="characterPreview" class="character-preview"></div>
        <div class="lobby-actions">
          <button id="refreshRoomsBtn" type="button">Refrescar</button>
        </div>
        <h2>Salas activas</h2>
        <div id="roomList" class="room-list"></div>
        <p id="lobbyError" class="error hidden"></p>
      </div>
    </div>
  </section>

  <div id="hud">
    <div id="ammoBarWrap" class="side-bar left">
      <span id="ammoSideLabel">30 / 90</span>
      <div class="bar-track"><div id="ammoBarFill" class="bar-fill ammo"></div></div>
    </div>

    <div id="healthBarWrap" class="side-bar right right-top">
      <span id="healthSideLabel">100</span>
      <div class="bar-track"><div id="healthBarFill" class="bar-fill health"></div></div>
    </div>

    <div id="shieldBarWrap" class="side-bar right right-bottom">
      <span id="shieldSideLabel">0</span>
      <div class="bar-track"><div id="shieldBarFill" class="bar-fill shield"></div></div>
    </div>

    <div id="abilityHud" class="ability-hud hidden">
      <p class="ability-title">Especial R</p>
      <p id="abilityCooldownText" class="ability-value">-</p>
      <div class="ability-track"><div id="abilityCooldownFill" class="ability-fill"></div></div>
    </div>

    <div id="matchInfo">
      <h2>Panel (I)</h2>
      <p><strong>Movimiento:</strong> W A S D</p>
      <p><strong>Saltar:</strong> Space</p>
      <p>Click para capturar el mouse</p>
      <p>Disparar: Mouse izquierdo</p>
      <p>Recargar: R</p>
      <p>Animación Funny: F</p>
      <p>Cambiar cámara: C</p>
      <p>Panel: I</p>
      <p>Marcador: Tab</p>
      <p>FPS + Latencia: P</p>
      <p>Salir: ESC</p>
      <p><strong>Habilidades:</strong> silentman, pumori, neoorphen, pezuñalunar</p>
      <p id="healthStat">Vida: 100</p>
      <p id="shieldStat">Escudo: 0</p>
      <p id="ammoStat">Balas: 30 / 90</p>
      <p id="specialStat">Especial R: -</p>
      <p id="stats">Kills: 0</p>
      <p id="roomHud">Sala: -</p>
      <p id="stateHud">Estado: waiting</p>
      <p id="weatherHud">Clima: -</p>
      <p id="playersHud">Jugadores: -</p>
      <div id="hostControls" class="host-controls hidden">
        <button id="startGameBtn" type="button">Iniciar partida</button>
        <button id="endGameBtn" type="button">Finalizar partida</button>
      </div>
      <button id="leaveRoomHudBtn" type="button">Salir de sala</button>
    </div>

    <div id="perfPanel" class="hidden">
      <p>FPS: <span id="fpsValue">0</span></p>
      <p>Latencia: <span id="latencyValue">--</span></p>
      <p>Draw calls: <span id="drawCallsValue">0</span></p>
      <p>Triángulos: <span id="trianglesValue">0</span></p>
      <p>Geometrías: <span id="geometriesValue">0</span></p>
      <p>Texturas: <span id="texturesValue">0</span></p>
      <p>VFX activos: <span id="vfxValue">0</span></p>
    </div>
  </div>

  <div id="respawnScreen" class="hidden">
    <div class="respawn-card">
      <h2>Eliminado</h2>
      <p>Respawn en <strong id="respawnCounter">10</strong>s</p>
    </div>
  </div>

  <div id="winnerScreen" class="hidden">
    <div class="winner-card">
      <h2>Fin de ronda</h2>
      <p id="winnerText">Ganador: -</p>
      <p>Reiniciando en <strong id="winnerCounter">10</strong>s</p>
    </div>
  </div>

  <div id="damageOverlay"></div>
  <div id="damageIndicator"></div>

  <div id="scoreboard" class="hidden">
    <div class="scoreboard-card">
      <h2>Jugadores conectados</h2>
      <table>
        <thead>
          <tr><th>Jugador</th><th>K</th><th>M</th></tr>
        </thead>
        <tbody id="scoreboardBody"></tbody>
      </table>
    </div>
  </div>

  <div id="crosshair" aria-hidden="true"></div>

  <div id="chatFeed" class="chat-feed">
    <div id="chatLog" class="chat-log"></div>
  </div>

  <div id="chatPanel" class="chat-panel">
    <div id="chatInputWrap" class="chat-input-wrap hidden">
      <input id="chatInput" type="text" maxlength="180" placeholder="Escribe un mensaje..." autocomplete="off" />
    </div>
  </div>

  <div id="optionsScreen" class="hidden">
    <div class="options-card">
      <h2>Opciones</h2>
      <label>
        Sensibilidad mouse
        <input id="optMouseSensitivity" type="range" min="0.4" max="2.5" step="0.05" />
        <span id="optMouseSensitivityValue">1.00</span>
      </label>
      <label>
        Volumen maestro
        <input id="optMasterVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optMasterVolumeValue">100%</span>
      </label>
      <label>
        Volumen musica
        <input id="optMusicVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optMusicVolumeValue">100%</span>
      </label>
      <label>
        Volumen efectos
        <input id="optSfxVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optSfxVolumeValue">100%</span>
      </label>
      <label>
        FOV
        <input id="optFov" type="range" min="60" max="100" step="1" />
        <span id="optFovValue">75</span>
      </label>
      <label class="checkbox-line">
        <input id="optShowPerf" type="checkbox" />
        Mostrar panel FPS/latencia por defecto
      </label>
      <div class="options-actions">
        <button id="optResumeBtn" type="button">Volver al juego</button>
        <button id="optLeaveLobbyBtn" type="button">Volver al lobby</button>
      </div>
      <p class="options-hint">ESC: abrir/cerrar opciones</p>
    </div>
  </div>
`;const Qi=document.querySelector("#bootLoader"),If=document.querySelector("#bootLoaderText"),Lf=document.querySelector("#bootLoaderFill"),Df=document.querySelector("#bootLoaderPercent"),es=document.querySelector("#lobby"),pl=document.querySelector("#connectionStatus"),lm=document.querySelector("#playerName"),tn=document.querySelector("#characterSelect"),er=document.querySelector("#characterPreview"),pb=document.querySelector("#refreshRoomsBtn"),ml=document.querySelector("#roomList"),To=document.querySelector("#lobbyError"),Nf=document.querySelector("#matchInfo"),Uf=document.querySelector("#respawnScreen"),mb=document.querySelector("#respawnCounter"),um=document.querySelector("#winnerScreen"),gb=document.querySelector("#winnerText"),Lu=document.querySelector("#winnerCounter"),gl=document.querySelector("#damageOverlay"),Ao=document.querySelector("#damageIndicator"),Ff=document.querySelector("#scoreboard"),_b=document.querySelector("#scoreboardBody"),xb=document.querySelector("#healthStat"),vb=document.querySelector("#shieldStat"),Mb=document.querySelector("#ammoStat"),_l=document.querySelector("#specialStat"),yb=document.querySelector("#healthSideLabel"),Sb=document.querySelector("#shieldSideLabel"),bb=document.querySelector("#ammoSideLabel"),Qr=document.querySelector("#abilityHud"),Of=document.querySelector("#abilityCooldownText"),Bf=document.querySelector("#abilityCooldownFill"),Eb=document.querySelector("#healthBarFill"),Tb=document.querySelector("#shieldBarFill"),Ab=document.querySelector("#ammoBarFill"),wb=document.querySelector("#stats"),zf=document.querySelector("#roomHud"),kf=document.querySelector("#stateHud"),Vf=document.querySelector("#weatherHud"),Hf=document.querySelector("#playersHud"),Gf=document.querySelector("#perfPanel"),Rb=document.querySelector("#fpsValue"),Cb=document.querySelector("#latencyValue"),Pb=document.querySelector("#drawCallsValue"),Ib=document.querySelector("#trianglesValue"),Lb=document.querySelector("#geometriesValue"),Db=document.querySelector("#texturesValue"),Nb=document.querySelector("#vfxValue"),xl=document.querySelector("#hostControls"),hm=document.querySelector("#startGameBtn"),dm=document.querySelector("#endGameBtn"),Ub=document.querySelector("#leaveRoomHudBtn"),Ch=document.querySelector("#chatFeed"),fm=document.querySelector("#chatPanel"),wo=document.querySelector("#chatLog"),pm=document.querySelector("#chatInputWrap"),tc=document.querySelector("#chatInput"),ea=document.querySelector("#crosshair"),mm=document.querySelector("#optionsScreen"),Du=document.querySelector("#optMouseSensitivity"),gm=document.querySelector("#optMouseSensitivityValue"),Nu=document.querySelector("#optMasterVolume"),_m=document.querySelector("#optMasterVolumeValue"),Uu=document.querySelector("#optMusicVolume"),xm=document.querySelector("#optMusicVolumeValue"),Fu=document.querySelector("#optSfxVolume"),vm=document.querySelector("#optSfxVolumeValue"),Ou=document.querySelector("#optFov"),Mm=document.querySelector("#optFovValue"),Bu=document.querySelector("#optShowPerf"),Fb=document.querySelector("#optResumeBtn"),Ob=document.querySelector("#optLeaveLobbyBtn"),z={ws:null,self:null,rooms:[],joinedRoom:null,remotePlayers:new Map,lastStateSentAt:0,showMatchInfo:!1,showScoreboard:!1,showPerf:!1,fps:0,latencyMs:null},jn={drawCalls:0,triangles:0,geometries:0,textures:0,vfx:0},In=[],Wf=40,Bb=8e3;let ss=!1,Fr=!1;const ym="koketria_settings_v1",Pe={mouseSensitivity:1,masterVolume:1,musicVolume:1,sfxVolume:1,fov:75,showPerfByDefault:!1},vl=["battle1","battle2","battle3"],Sm=()=>{pt.KeyW=!1,pt.KeyA=!1,pt.KeyS=!1,pt.KeyD=!1,pt.Space=!1},Ph=()=>{if(!wo)return;const i=Date.now();for(let t=In.length-1;t>=0;t-=1)i-In[t].ts>Bb&&In.splice(t,1);Ch.classList.toggle("open",In.length>0);const e=In.slice(-8);wo.innerHTML=e.map(t=>{const n=t.isSelf?" (Tú)":"";return`<p><strong>${t.playerName}${n}:</strong> ${t.text}</p>`}).join(""),wo.scrollTop=wo.scrollHeight},zb=(i,e)=>{if(!e)return;const t=!!(z.self&&String(i||"")===String(z.self.name||""));In.push({playerName:String(i||"Player"),text:String(e||""),isSelf:t,ts:Date.now()}),In.length>Wf&&In.splice(0,In.length-Wf),Ph()};setInterval(()=>{In.length>0&&!ss&&Ph()},500);const kb=()=>{z.joinedRoom&&(ss=!0,Sm(),ci=!1,fm.classList.add("open"),pm.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),tc.value="",tc.focus())},zu=()=>{ss=!1,fm.classList.remove("open"),pm.classList.add("hidden"),tc.blur()},tr=(i="")=>{if(!i){To.classList.add("hidden"),To.textContent="";return}To.classList.remove("hidden"),To.textContent=i},Yn=(i,e,t,n)=>{const s=Number(i);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):n},Vb=()=>{try{const i=localStorage.getItem(ym);if(!i)return;const e=JSON.parse(i);Pe.mouseSensitivity=Yn(e.mouseSensitivity,.4,2.5,Pe.mouseSensitivity),Pe.masterVolume=Yn(e.masterVolume,0,1,Pe.masterVolume),Pe.musicVolume=Yn(e.musicVolume,0,1,Pe.musicVolume),Pe.sfxVolume=Yn(e.sfxVolume,0,1,Pe.sfxVolume),Pe.fov=Yn(e.fov,60,100,Pe.fov),Pe.showPerfByDefault=!!e.showPerfByDefault}catch{}},Or=()=>{localStorage.setItem(ym,JSON.stringify(Pe))},Hb=i=>{const e=[...i];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e},nc=i=>{gc.classList.toggle("in-room",i),Ii(),!i&&document.pointerLockElement&&document.exitPointerLock(),i||(Mc(),In.length=0,Ph(),zu(),Ch.classList.remove("open"))},bm=()=>{z.showMatchInfo&&z.joinedRoom?Nf.classList.add("visible"):Nf.classList.remove("visible")},Ih=()=>{if(!z.joinedRoom||!z.showScoreboard){Ff.classList.add("hidden");return}const i=[...z.joinedRoom.players].sort((e,t)=>(t.kills||0)!==(e.kills||0)?(t.kills||0)-(e.kills||0):(e.deaths||0)-(t.deaths||0));_b.innerHTML=i.map(e=>{const t=z.self&&e.id===z.self.id?" (Tú)":"";return`<tr><td>${e.name}${t}</td><td>${e.kills||0}</td><td>${e.deaths||0}</td></tr>`}).join(""),Ff.classList.remove("hidden")},Br=()=>{if(!z.joinedRoom||!z.showPerf){Gf.classList.add("hidden");return}Rb.textContent=String(z.fps),Cb.textContent=Number.isFinite(z.latencyMs)?`${Math.round(z.latencyMs)} ms`:"--",Pb.textContent=String(Math.round(jn.drawCalls)),Ib.textContent=String(Math.round(jn.triangles)),Lb.textContent=String(Math.round(jn.geometries)),Db.textContent=String(Math.round(jn.textures)),Nb.textContent=String(Math.round(jn.vfx)),Gf.classList.remove("hidden")},Em=()=>!!(z.joinedRoom&&z.self&&z.joinedRoom.room.hostId===z.self.id),Sn=()=>!!(z.joinedRoom&&z.joinedRoom.room.status==="in_game"&&!yt&&!Ar),wa=()=>!!(z.joinedRoom&&z.joinedRoom.room.status==="in_game"),Gb=i=>i==="rainy"?"Lluvioso":i==="sunny"?"Soleado":i==="night"?"Noche":i==="snow"?"Nieve":i||"-",fa=i=>{const e=i||"night";Tm=e,Nh.visible=e==="rainy",Fh.visible=e==="snow",Im.visible=e==="night"||e==="snow",Dm.visible=!1,Oh.visible=!1,Bh.visible=!1,e==="sunny"?(_e.background=new Ce(12050431),_e.fog.color.set(12050431),_e.fog.near=90,_e.fog.far=400,oa.intensity=.74,Wn.intensity=1.2,Wn.color.set(16773826),ca.opacity=.35):e==="rainy"?(_e.background=new Ce(599e4),_e.fog.color.set(599e4),_e.fog.near=10,_e.fog.far=95,oa.intensity=.26,Wn.intensity=.42,Wn.color.set(9156567),ca.opacity=.25):e==="snow"?(_e.background=new Ce(14215668),_e.fog.color.set(14215668),_e.fog.near=26,_e.fog.far=200,oa.intensity=.65,Wn.intensity=.9,Wn.color.set(15202047),ca.opacity=.42):(_e.background=new Ce(461588),_e.fog.color.set(461588),_e.fog.near=16,_e.fog.far=140,oa.intensity=.26,Wn.intensity=.38,Wn.color.set(8354248),ca.opacity=.6)},Ut=i=>{if(!z.ws||z.ws.readyState!==WebSocket.OPEN){tr("WebSocket no conectado");return}z.ws.send(JSON.stringify(i))};let Xf=0,bi=null,qf=0;const Wb=2e3;let Ml=0,jf=performance.now(),Ln=1;const Lh=(i=!1)=>{const e=performance.now();if(!z.showPerf||!z.joinedRoom||!z.ws||z.ws.readyState!==WebSocket.OPEN||bi&&e-bi.sentAt<5e3||!i&&e-qf<Wb)return;const t=`${Date.now()}-${Xf}`;Xf+=1,bi={id:t,sentAt:e},qf=e,Ut({type:"ping",probeId:t,clientTs:Date.now(),rttMs:Number.isFinite(z.latencyMs)?Math.round(z.latencyMs):void 0})},Xb=()=>{const i=performance.now();Ml+=1;const e=i-jf;if(e>=500){z.fps=Math.max(0,Math.round(Ml*1e3/e));const t=z.fps;t>=58?Ln=1:t>=48?Ln=.82:t>=38?Ln=.62:t>=30?Ln=.48:Ln=.34,Ml=0,jf=i,z.showPerf&&z.joinedRoom&&Br()}Lh()},ku=()=>{if(ml.innerHTML="",z.rooms.length===0){const i=document.createElement("p");i.className="room-empty",i.textContent="No hay salas activas.",ml.appendChild(i);return}z.rooms.forEach(i=>{const e=document.createElement("article");e.className="room-card",e.innerHTML=`
      <div>
        <strong>${i.name}</strong>
        <p>ID: ${i.id}</p>
        <p>Jugadores: ${i.players}</p>
        <p>Estado: ${i.status}</p>
      </div>
      <button type="button">Unirse</button>
    `,e.querySelector("button").addEventListener("click",()=>{tr(),Ut({type:"join_room",roomId:i.id,playerName:lm.value.trim(),character:tn.value||Ye})}),ml.appendChild(e)})},qb=()=>`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`,jb=()=>`${window.location.protocol}//${window.location.host}`,_e=new Bp;_e.background=new Ce(66817);_e.fog=new mh(66817,18,160);let Tm="night";const ue=new jt(75,window.innerWidth/window.innerHeight,.1,500);ue.position.set(0,1.7,10);const Cs=new jt(75,window.innerWidth/window.innerHeight,.1,500);let ur=!1;const Yb=1.25,Kb=.7,$b=.18,Yf=new C,Ro=new C,Kf=new C,$f=new C,Co=new C,mn=new rm({antialias:!0});mn.setSize(window.innerWidth,window.innerHeight);mn.setPixelRatio(Math.min(window.devicePixelRatio,2));gc.appendChild(mn.domElement);const oa=new S_(6750088,.3);_e.add(oa);const Wn=new Th(4849523,.8);Wn.position.set(15,30,10);_e.add(Wn);const Ra=new Zp(10026904,0,8,2);ue.add(Ra);Ra.position.set(.2,-.18,-.6);_e.add(ue);const Am=new Qe(new is(320,320),new On({color:135426,roughness:1}));Am.rotation.x=-Math.PI/2;_e.add(Am);const wm=new k_(320,80,4194150,1002015);wm.position.y=.01;_e.add(wm);const Zb=new On({color:5984868,emissive:2762034,emissiveIntensity:.18,metalness:.06,roughness:.9});new On({color:8089476,emissive:2893110,emissiveIntensity:.14,metalness:.04,roughness:.92});new On({color:9401999,emissive:3417405,emissiveIntensity:.11,metalness:.04,roughness:.9});const ts=[],ic=[],ns=.55,Jb=156;let Zf=null;const _c=5600,wn=new Float32Array(_c*3),Vu=new Float32Array(_c);for(let i=0;i<_c;i+=1)wn[i*3]=(Math.random()-.5)*260,wn[i*3+1]=Math.random()*120+6,wn[i*3+2]=(Math.random()-.5)*260,Vu[i]=22+Math.random()*26;const Dh=new Rt;Dh.setAttribute("position",new Ot(wn,3));const Qb=new Pr({color:6750054,size:.26,transparent:!0,opacity:.98,sizeAttenuation:!0}),Nh=new Ua(Dh,Qb);_e.add(Nh);const xc=1700,Rn=new Float32Array(xc*3),Rm=new Float32Array(xc);for(let i=0;i<xc;i+=1)Rn[i*3]=(Math.random()-.5)*260,Rn[i*3+1]=Math.random()*120+6,Rn[i*3+2]=(Math.random()-.5)*260,Rm[i]=1.6+Math.random()*2.7;const Uh=new Rt;Uh.setAttribute("position",new Ot(Rn,3));const eE=new Pr({color:16777215,size:.22,transparent:!0,opacity:.85,sizeAttenuation:!0}),Fh=new Ua(Uh,eE);_e.add(Fh);const Cm=1200,Vo=new Float32Array(Cm*3);for(let i=0;i<Cm;i+=1)Vo[i*3]=(Math.random()-.5)*420,Vo[i*3+1]=70+Math.random()*80,Vo[i*3+2]=(Math.random()-.5)*420;const Pm=new Rt;Pm.setAttribute("position",new Ot(Vo,3));const tE=new Pr({color:12572927,size:.36,transparent:!0,opacity:.78,sizeAttenuation:!0}),Im=new Ua(Pm,tE);_e.add(Im);const vc=900,Ho=new Float32Array(vc*3),Lm=new Float32Array(vc);for(let i=0;i<vc;i+=1)Ho[i*3]=(Math.random()-.5)*300,Ho[i*3+1]=8+Math.random()*34,Ho[i*3+2]=(Math.random()-.5)*300,Lm[i]=.4+Math.random()*.9;const sc=new Rt;sc.setAttribute("position",new Ot(Ho,3));const ca=new Pr({color:16773311,size:.18,transparent:!0,opacity:.62,sizeAttenuation:!0,depthWrite:!1}),Dm=new Ua(sc,ca);_e.add(Dm);const Oh=new Qe(new fi(8.5,24,24),new Lt({color:15331839,transparent:!0,opacity:.9}));Oh.position.set(78,95,-124);_e.add(Oh);const Bh=new Qe(new fi(4.2,18,18),new Lt({color:16373920,transparent:!0,opacity:.74}));Bh.position.set(-104,76,-112);_e.add(Bh);const yl=[],Hu=[];let pa=0;const nE=new C,Nm=new NS,Gu=new Map,on=[];let Ye="";const iE=["attack","dead","running","idle","jump","funny"],qe={renderer:null,scene:null,camera:null,mixer:null,model:null,lastWidth:0,lastHeight:0},$e={group:null,mixer:null,actions:null,currentAnimation:"",shootUntil:0,loadingKey:"",funnyUntil:0},Oa=i=>{const e=String(i||"").trim();return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"")==="pezunalunar"?"pezunalunar":e:""},sE=(i,e)=>`/characters/${encodeURIComponent(Oa(i))}/${encodeURIComponent(e)}`,rc=i=>Oa(i)==="pezunalunar"?"pezuñalunar":i,rE=i=>/\.(glb|gltf)$/i.test(String(i||"").trim()),aE=i=>{const e=String(i||"").trim();if(!e)return[];const t=Oa(e);return t===e?[e]:[t,e]},oE=i=>new Promise(e=>{const t=n=>{if(n>=i.length){e(null);return}Nm.load(i[n],s=>e(s),void 0,()=>t(n+1))};t(0)}),Jf={mana:{url:"/items/mana.glb",targetHeight:.62},defensa:{url:"/items/defensa.glb",targetHeight:.7},vida:{url:"/items/vida.glb",targetHeight:.68}},ta=new Map,Po=new Map,cE=(i,e)=>{const t=new yn().setFromObject(i),n=t.getSize(new C);if(Number.isFinite(n.y)&&n.y>1e-4){const a=e/n.y;i.scale.setScalar(a),t.setFromObject(i)}const s=t.getCenter(new C),r=Number.isFinite(t.min.y)?t.min.y:0;return i.position.set(-s.x,-r,-s.z),i.traverse(a=>{a.isMesh&&(a.frustumCulled=!0)}),i},Go=async i=>{const e=String(i||"").trim();if(!e||!Jf[e])return null;if(ta.has(e))return ta.get(e);if(Po.has(e))return Po.get(e);const{url:t,targetHeight:n}=Jf[e],s=new Promise(r=>{Nm.load(t,a=>{const o=a?.scene?a.scene.clone(!0):null;if(!o){ta.set(e,null),r(null);return}const c=cE(o,n);ta.set(e,c),r(c)},void 0,()=>{ta.set(e,null),r(null)})}).finally(()=>{Po.delete(e)});return Po.set(e,s),s},Sl=(i,e)=>{const t=new un,n=new un;t.add(n);const s=e();return s.name="__pickup_fallback__",n.add(s),Go(i).then(r=>{if(!r||!t.parent)return;for(;n.children.length>0;)n.remove(n.children[0]);const a=r.clone(!0);a.name=`pickup_${i}`,n.add(a),t.userData.modelLoaded=!0}),t},$s=(i,e)=>{if(!i?.animations||i.animations.length===0)return null;const t=i.animations[0].clone();return t.name=e,t},zr=async i=>{if(!i)return null;const e=Gu.get(i);if(e?.loaded)return e;if(e?.loadingPromise)return e.loadingPromise;const t=e||{loaded:!1,scene:null,animations:[],animationSet:{},loadingPromise:null};return Gu.set(i,t),t.loadingPromise=new Promise(n=>{const s=aE(i);if(s.length===0){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}Promise.all(iE.map(async r=>{const a=rE(r)?[r]:[r,`${r}.glb`,`${r}.gltf`],o=s.flatMap(l=>a.map(u=>sE(l,u))),c=await oE(o);return{actionName:r,gltf:c}})).then(r=>{const a=r.find(x=>x.actionName==="dead"&&x.gltf?.scene)?.gltf,o=r.find(x=>x.actionName==="idle"&&x.gltf?.scene)?.gltf,c=r.find(x=>x.actionName==="running"&&x.gltf?.scene)?.gltf,l=r.find(x=>x.actionName==="jump"&&x.gltf?.scene)?.gltf,u=r.find(x=>x.actionName==="funny"&&x.gltf?.scene)?.gltf,h=r.find(x=>x.actionName==="attack"&&x.gltf?.scene)?.gltf,d=o||c||l||u||a||h;if(!d?.scene){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}const f={attack:$s(h,"attack"),dead:$s(a,"dead"),running:$s(c,"running"),idle:$s(o,"idle"),jump:$s(l,"jump"),funny:$s(u,"funny")},g=Object.values(f).filter(Boolean);t.loaded=!0,t.scene=d.scene,t.animations=g,t.animationSet=f,t.loadingPromise=null,n(t)})}),t.loadingPromise},Um=i=>{const e=tn.value||Ye;if(tn.innerHTML="",on.length=0,Hb(i).forEach(n=>on.push(n)),on.length===0){const n=document.createElement("option");n.value="",n.textContent="Sin personajes",tn.appendChild(n),tn.disabled=!0,Ye="";return}tn.disabled=!1,on.forEach(n=>{const s=document.createElement("option");s.value=n,s.textContent=rc(n),tn.appendChild(s)}),Ye=on.includes(e)?e:on[0],tn.value=Ye},bl=(i,e,t="")=>{const n=Math.max(1,e),s=Math.max(0,Math.min(1,i/n)),r=Math.round(s*100);Lf&&(Lf.style.width=`${r}%`),Df&&(Df.textContent=`${r}%`),If&&t&&(If.textContent=t)},Fm=async()=>{const i=jb();try{const t=await(await fetch(`${i}/characters`)).json();if(t?.ok&&Array.isArray(t.data)&&t.data.length>0)return t.data}catch{}return["silentman","pumori","neoorphen","pezunalunar"]},Qf=new Set,nr=(i,e=6e3)=>new Promise(t=>{if(!i){t(!1);return}if(Qf.has(i)){t(!0);return}const n=new Audio;let s=!1;const r=c=>{s||(s=!0,n.removeEventListener("canplaythrough",a),n.removeEventListener("loadedmetadata",a),n.removeEventListener("error",o),c&&Qf.add(i),t(c))},a=()=>r(!0),o=()=>r(!1);n.preload="auto",n.addEventListener("canplaythrough",a,{once:!0}),n.addEventListener("loadedmetadata",a,{once:!0}),n.addEventListener("error",o,{once:!0}),n.src=i,n.load(),setTimeout(()=>r(!1),e)}),lE=async i=>{const e=await kh(i);return await nr(e,6e3)?!0:nr(e,1e4)},uE=async()=>{Qi&&Qi.classList.remove("hidden"),es&&es.classList.add("hidden");const i=await Fm();Um(i),yc(Ye);const e=[...on],t=2+e.length*2+1+vl.length+1+3+1;let n=0;const s=r=>{n+=1,bl(n,t,r)};bl(0,t,"Cargando tema pre-lobby..."),await nr(zm,1e4),s("Tema pre-lobby cargado"),Ii(),bl(n,t,"Preparando catalogo..."),Om(),s("Catalogo listo");for(let r=0;r<e.length;r+=1){const a=e[r];await zr(a),s(`Modelo: ${rc(a)}`)}for(let r=0;r<e.length;r+=1){const a=e[r];await lE(a),s(`Audio ataque: ${rc(a)}`)}await nr(Pi,6e3),s("Audio base cargado");for(let r=0;r<vl.length;r+=1){const a=vl[r];await nr(zh(a),1e4),s(`Tema batalla: ${a}`)}await nr(km,1e4),s("Audio lobby cargado"),await Go("mana"),s("Item mana cargado"),await Go("defensa"),s("Item defensa cargado"),await Go("vida"),s("Item vida cargado"),await Zh(),kr();for(const r of z.remotePlayers.values())La(r);s("Lobby listo"),Qi&&Qi.classList.add("hidden"),es&&es.classList.remove("hidden"),Ii()},hE=async()=>{const i=await Fm();Um(i),yc(Ye),await zr(Ye),await Zh(),kr();for(const e of z.remotePlayers.values())La(e)},kr=()=>{if(!qe.scene)return;const i=tn.value||Ye;if(!i)return;qe.model&&(qe.scene.remove(qe.model),qe.model=null,qe.mixer=null);const e=Gu.get(i);if(!e?.loaded||!e.scene){zr(i).then(o=>{o?.loaded&&(tn.value||Ye)===i&&kr()});return}const t=Rh(e.scene),n=new yn().setFromObject(t),s=n.getCenter(new C),r=n.getSize(new C);t.position.set(-s.x,-n.min.y,-s.z),qe.scene.add(t),qe.model=t,qe.camera.position.set(0,Math.max(1.2,r.y*.55),Math.max(2.3,r.y*.95)),qe.camera.lookAt(0,Math.max(.9,r.y*.45),0);const a=e.animationSet?.running||_s(e.animations||[],"running",["running"]);if(a){const o=new Jp(t),c=o.clipAction(a);c.reset(),c.setLoop(lc,1/0),c.play(),qe.mixer=o}},Om=()=>{if(!er||qe.renderer)return;const i=new Bp,e=new jt(40,1,.1,100),t=new rm({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=er.clientWidth||280,s=er.clientHeight||220;t.setSize(n,s,!1),er.appendChild(t.domElement);const r=new __(12514815,1975838,.95);i.add(r);const a=new Th(16777215,1);a.position.set(3.5,5,4),i.add(a),qe.scene=i,qe.camera=e,qe.renderer=t,qe.lastWidth=n,qe.lastHeight=s,kr()},Bm=()=>{if(!qe.renderer||!qe.camera)return;const i=er.clientWidth||280,e=er.clientHeight||220;i===qe.lastWidth&&e===qe.lastHeight||(qe.lastWidth=i,qe.lastHeight=e,qe.camera.aspect=i/e,qe.camera.updateProjectionMatrix(),qe.renderer.setSize(i,e,!1))},pn=new Audio("/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3");pn.preload="auto";pn.loop=!1;pn.volume=.24;const na=[],dE=8,zm="/themes/pre-lobby.mp3",km="/themes/lobby.mp3",Wu={battle1:"/themes/battle1.mp3",battle2:"/themes/battle2.mp3",battle3:"/themes/battle3.mp3"},zh=i=>Wu[i]||Wu.battle1,ni=new Audio(zm);ni.preload="auto";ni.loop=!1;ni.volume=.28;const rs=new Audio(km);rs.preload="auto";rs.loop=!0;rs.volume=.34;const Ci=new Audio(zh("battle1"));Ci.preload="auto";Ci.loop=!0;Ci.volume=.38;let Ca=!1,bs=!1,ma=!1,hr=!1,Ki=!1,El="battle1";const Pi="/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3",fE=[".ogg",".mp3",".wav",".m4a",""],Io=new Map;let Tl="";const ep=140,Al=6,$i=[],pE=24,mE=3e4,gE=15e3;let ac=0,la=null;const _E=(i,e,t)=>{(i.getAttribute(t)||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute(t,e),i.load())},Vm=()=>!z.joinedRoom&&Qi&&!Qi.classList.contains("hidden"),Hm=()=>!z.joinedRoom&&es&&!es.classList.contains("hidden")&&(!Qi||Qi.classList.contains("hidden")),Gm=()=>!!(z.joinedRoom&&z.joinedRoom.room?.status==="in_game"),wl=()=>{!bs&&ni.paused||(ni.pause(),ni.currentTime=0,bs=!1,Ki=!1)},Lo=()=>{!ma&&rs.paused||(rs.pause(),rs.currentTime=0,ma=!1)},Rl=()=>{!hr&&Ci.paused||(Ci.pause(),Ci.currentTime=0,hr=!1)},xE=()=>{if(!Ca||bs||!Vm())return;bs=!0;const i=ni.play();i&&typeof i.catch=="function"&&i.catch(()=>{bs=!1})},vE=()=>{if(!Ca||ma||!Hm())return;ma=!0;const i=rs.play();i&&typeof i.catch=="function"&&i.catch(()=>{ma=!1})},ME=()=>{if(!Ca||hr||!Gm())return;hr=!0;const i=Ci.play();i&&typeof i.catch=="function"&&i.catch(()=>{hr=!1})},Ii=()=>{if(Gm()){Ki=!1,wl(),Lo(),ME();return}if(Vm()){Ki=!1,Rl(),Lo(),xE();return}if(Hm()){if(Rl(),bs&&!ni.ended){Ki=!0,Lo();return}Ki=!1,wl(),vE();return}Ki=!1,Rl(),wl(),Lo()},Wo=i=>{const e=String(i||"").trim(),t=Wu[e]?e:"battle1";t!==El&&(El=t,_E(Ci,zh(El),"data-bgm-src"),hr=!1,Ii())},Ba=()=>{const i=Math.max(0,Math.min(1,Pe.masterVolume));pn.volume=.24*i*Pe.sfxVolume,ni.volume=.28*i*Pe.musicVolume,rs.volume=.34*i*Pe.musicVolume,Ci.volume=.38*i*Pe.musicVolume,ue.fov=Pe.fov,ue.updateProjectionMatrix(),Cs.fov=Pe.fov,Cs.updateProjectionMatrix(),z.showPerf=Pe.showPerfByDefault||z.showPerf,Br()},yE=()=>{Du.value=String(Pe.mouseSensitivity),gm.textContent=Pe.mouseSensitivity.toFixed(2),Nu.value=String(Pe.masterVolume),_m.textContent=`${Math.round(Pe.masterVolume*100)}%`,Uu.value=String(Pe.musicVolume),xm.textContent=`${Math.round(Pe.musicVolume*100)}%`,Fu.value=String(Pe.sfxVolume),vm.textContent=`${Math.round(Pe.sfxVolume*100)}%`,Ou.value=String(Math.round(Pe.fov)),Mm.textContent=String(Math.round(Pe.fov)),Bu.checked=!!Pe.showPerfByDefault},Mc=()=>{Fr=!1,mm.classList.add("hidden")},Wm=()=>{z.joinedRoom&&(Fr=!0,ci=!1,Sm(),mm.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock())},SE=()=>{Fr?Mc():Wm()},bE=i=>{const e=Oa(i);return e?fE.map(t=>`/characters/${encodeURIComponent(e)}/attack_sound${t}`):[]},EE=i=>new Promise(e=>{const t=new Audio;let n=!1;const s=o=>{n||(n=!0,t.removeEventListener("canplaythrough",r),t.removeEventListener("loadedmetadata",r),t.removeEventListener("error",a),e(o))},r=()=>s(!0),a=()=>s(!1);t.preload="metadata",t.addEventListener("canplaythrough",r,{once:!0}),t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",a,{once:!0}),t.src=i,t.load(),setTimeout(()=>s(!1),900)}),kh=async i=>{const e=Oa(i);if(!e)return Pi;if(Io.has(e))return Io.get(e);const t=bE(e);for(let n=0;n<t.length;n+=1){const s=t[n];if(await EE(s))return Io.set(e,s),s}return Io.set(e,Pi),Pi},Xm=(i,e)=>{(i.getAttribute("data-attack-src")||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute("data-attack-src",e),i.removeAttribute("data-fallback-applied"),i.load())},yc=async i=>{const e=String(i||"").trim();if(e===Tl&&pn.getAttribute("data-attack-src"))return;Tl=e;const t=await kh(e);e===Tl&&Xm(pn,t)},Vh=()=>{Ca||(Ca=!0,Ii())};window.addEventListener("pointerdown",Vh,{once:!0});window.addEventListener("keydown",Vh,{once:!0});window.addEventListener("touchstart",Vh,{once:!0,passive:!0});ni.addEventListener("ended",()=>{bs=!1,Ki&&(Ki=!1,Ii())});const TE=()=>{const i=pn.getAttribute("data-attack-src")||pn.src||Pi,e=new Audio(i);if(e.preload="auto",e.loop=!1,e.volume=pn.volume,na.length>=dE){const s=na.shift();s&&(s.pause(),s.currentTime=0)}na.push(e);const t=()=>{const s=na.indexOf(e);s>=0&&na.splice(s,1)};e.addEventListener("ended",t,{once:!0}),e.addEventListener("pause",t,{once:!0});const n=e.play();n&&typeof n.catch=="function"&&n.catch(()=>{t();const s=pn.getAttribute("data-fallback-applied")==="1";i!==Pi&&!s&&(pn.setAttribute("data-fallback-applied","1"),Xm(pn,Pi))})},AE=i=>{const e=i.distanceTo(ue.position);if(e>=ep)return 0;const n=1-(Math.max(Al,e)-Al)/(ep-Al);return .02+Math.pow(Math.max(0,n),1.6)*.2},tp=()=>{for(let i=0;i<$i.length;i+=1){const e=$i[i];e.pause(),e.currentTime=0}$i.length=0},np=async(i,e="")=>{const t=AE(i);if(t<=.02)return;let n=Pi;e&&(n=await kh(e));const s=new Audio(n||Pi);if(s.preload="auto",s.loop=!1,s.volume=t*Pe.masterVolume*Pe.sfxVolume,$i.length>=pE){const o=$i.shift();o&&(o.pause(),o.currentTime=0)}$i.push(s);const r=()=>{const o=$i.indexOf(s);o>=0&&$i.splice(o,1)};s.addEventListener("ended",r,{once:!0}),s.addEventListener("pause",r,{once:!0});const a=s.play();a&&typeof a.catch=="function"&&a.catch(()=>{r()})},dr=new B_;new Xe(0,0);const wE=new hc(.028,.028,1,10,1,!0),RE=new Lt({color:10682286,transparent:!0,opacity:1,blending:Ui,depthWrite:!1}),CE=new fi(.11,8,8),PE=new Lt({color:8257426,transparent:!0,opacity:.9}),Es=[],fr=[],ga=[],_a=[],xa=[],va=[],ii=[],IE=24,LE=new fi(.045,6,6),Ts=[],DE=420,NE=680,UE=980,Cl=35,ip=165,ia=new C,sp=new C,Xo=new C,ys=new C,rp=new C,ap=new C,FE=new C(0,1,0),qm=i=>{const e=oc();if(!e||!i)return Ln;const t=i.x-e.position.x,n=i.y-e.position.y,s=i.z-e.position.z,r=Math.sqrt(t*t+n*n+s*s);if(r<=Cl)return Ln;if(r>=ip)return Ln*.35;const a=(r-Cl)/(ip-Cl);return Ln*(1-a*.65)},OE=()=>Math.max(120,Math.round(DE*(.45+Ln*.55))),BE=()=>Math.max(180,Math.round(NE*(.4+Ln*.6))),pt={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,Space:!1};let As=!1,Dn=0,Li=0;const Hh=9,zE=24,kE=18,VE=.45,HE=.92,vn=1.7,GE=6.8,WE=18;let ci=!1,Pl=0;const XE=8,qE=1,Xu=55,jE=19,op=260,YE=.018,KE=.008,$E=1.2,ZE=2.25,JE=1.2,li=10,Et=100,za=100,Sc=0,as=30,ka=120,hn=100,cp=Math.ceil(hn/3),QE=12,eT=50,tT=6e4,nT=12,iT=20,sT=30,rT=6e4,aT=25,oT=20,cT=6e4,lT=Et/3,uT=18,Va=.5,Ha=.92,hT=.18,dT=-.45,Il=2.45,qu=.9,lp=.09,fT=320;let Gh=0,Gt=Et,ui=Sc,Di=as,si=ka-as,Dt=hn,ri=Math.round(hn),Zt=0,Kn=!1,pr=0,Wt=!1,Ai=0,yt=!1,Bi=0,Un=li,Ar=!1,Wh=0,mr=0,Ll=0,ir=0,Pa=0,gr=0,jm=0,Ym=0,Xh=0,qh=0,Km=0;const up=new Fn(0,0,0,"YXZ"),Zs=new C,Dl=new C,Hn=new C,vt=new C,hp=new C,pT=new z_,jh=Math.PI,mT=170,gT=160,_T=4.8,xT=2.4,vT=9.5,MT=.55,yT=.32,ST=140,$m=220,bT=()=>Date.now(),ET=new uc(.2,.18,4,8),TT=new On({color:5082623,emissive:1719696,emissiveIntensity:.85,roughness:.35,metalness:.4}),sr=[],AT=new Sh(.32,0),wT=new On({color:4584703,emissive:1006976,emissiveIntensity:.9,roughness:.25,metalness:.3}),rr=[],ar=[],Do=i=>{let e=Number(i)>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}},RT=i=>{const e=String(i||"");let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0||1},CT=(i,e,t=0)=>!0,dp=(i,e,t=0)=>({x:i,z:e}),PT=()=>{for(let i=yl.length-1;i>=0;i-=1){const e=yl[i];e&&(_e.remove(e),e.traverse(t=>{t.isMesh&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>s.dispose()))}))}yl.length=0,Hu.length=0},qn=i=>{pa=Math.min(1,pa+.5),i&&nE.copy(i)},Zm=i=>{const e=Number(i);if(!Number.isFinite(e)||Zf===e)return;Zf=e;for(let a=ts.length-1;a>=0;a-=1){const o=ts[a];_e.remove(o),o.geometry.dispose(),o.material.dispose()}ts.length=0,ic.length=0,PT();for(let a=sr.length-1;a>=0;a-=1)_e.remove(sr[a].mesh);sr.length=0;for(let a=rr.length-1;a>=0;a-=1)_e.remove(rr[a].mesh);rr.length=0;for(let a=ar.length-1;a>=0;a-=1)_e.remove(ar[a].mesh);ar.length=0;const t=Do(e^2654435769);for(let a=0;a<220;a+=1){const o=1+t()*3,c=1+t()*3,l=3+t()*24,u=new Qe(new Is(o,l,c),Zb.clone());u.position.set((t()-.5)*220,l/2,(t()-.5)*220),u.userData.hp=1+Math.floor(t()*3),_e.add(u),ts.push(u),ic.push({minX:u.position.x-o/2,maxX:u.position.x+o/2,minZ:u.position.z-c/2,maxZ:u.position.z+c/2})}const n=Do(e^2246822507);for(let a=0;a<eT;a+=1){const o=Sl("mana",()=>new Qe(ET,TT.clone())),c=(n()-.5)*180,l=(n()-.5)*180,u=.35;o.position.set(c,u,l),_e.add(o),sr.push({mesh:o,baseY:u,phase:n()*Math.PI*2,active:!0,respawnAt:0})}const s=Do(e^3266489909);for(let a=0;a<sT;a+=1){const o=Sl("defensa",()=>new Qe(AT,wT.clone())),c=(s()-.5)*180,l=(s()-.5)*180,u=.6;o.position.set(c,u,l),_e.add(o),rr.push({mesh:o,baseY:u,phase:s()*Math.PI*2,active:!0,respawnAt:0})}const r=Do(e^668265263);for(let a=0;a<oT;a+=1){const o=Sl("vida",()=>new Qe(new bh(.34,0),new On({color:9502623,emissive:2985794,emissiveIntensity:.8,roughness:.32,metalness:.25}))),c=(r()-.5)*180,l=(r()-.5)*180,u=.55;o.position.set(c,u,l),_e.add(o),ar.push({mesh:o,baseY:u,phase:r()*Math.PI*2,active:!0,respawnAt:0})}},bc=i=>String(i||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,""),Vr=i=>{const e=bc(i);return e==="silentman"||e==="silenmant"},Ga=i=>bc(i)==="pumori",Wa=i=>bc(i)==="neoorphen",Xa=i=>{const e=bc(i);return e==="pezunalunar"||e==="pezuanalunar"},Jm=i=>Vr(i)||Wa(i)||Xa(i)||Ga(i),Hr=i=>Vr(i)||Ga(i)||Wa(i)||Xa(i),IT=()=>Hr(Ye)?qE:1/XE,Qm=()=>Math.max(0,ac-performance.now()),eg=i=>{const e=Number(i);if(!Number.isFinite(e)||e<=0){ac=0;return}ac=performance.now()+e},Yh=(i=!1)=>{if(!_l)return;const e=!!z.joinedRoom;if(!Jm(Ye)){(i||la!==-1)&&(_l.textContent="Especial R: -",la=-1),Qr&&Qr.classList.add("hidden");return}const t=Qm(),n=t>0?Math.ceil(t/1e3):0;if(!(!i&&la===n)&&(la=n,_l.textContent=n>0?`Especial R: ${n}s`:"Especial R: LISTO",Qr&&(e?Qr.classList.remove("hidden"):Qr.classList.add("hidden")),Of&&(Of.textContent=n>0?`${n}s`:"LISTO"),Bf)){const s=Vr(Ye)?gE:mE,r=Math.max(0,Math.min(1,t/s));Bf.style.width=`${Math.round((1-r)*100)}%`}};Zm(1);const It=()=>{const i=Hr(Ye),e=i?Math.round(Dt):Di,t=i?hn:si,n=i?"Mana":"Balas",s=Math.round(Gt),r=Math.round(ui);if(xb.textContent=`Vida: ${s}`,vb.textContent=`Escudo: ${r}`,Mb.textContent=`${n}: ${e} / ${t}${!i&&Kn?" (recargando...)":""}`,Yh(!0),wb.textContent=`Kills: ${Gh}`,yb.textContent=`${s}`,Sb.textContent=`${r}`,bb.textContent=`${e} / ${t}`,Eb.style.width=`${Math.max(0,Math.min(100,Gt/Et*100))}%`,Tb.style.width=`${Math.max(0,Math.min(100,ui/za*100))}%`,Ab.style.height=`${Math.max(0,Math.min(100,e/t*100))}%`,!z.joinedRoom){zf.textContent="Sala: -",kf.textContent="Estado: waiting",Vf.textContent="Clima: -",Hf.textContent="Jugadores: -",xl.classList.add("hidden");return}const a=z.joinedRoom.room,o=z.joinedRoom.players.map(c=>c.name).join(", ");zf.textContent=`Sala: ${a.name} (${a.id})`,kf.textContent=`Estado: ${a.status}`,Vf.textContent=`Clima: ${Gb(a.weather)}`,Hf.textContent=`Jugadores: ${o||"-"}`,Em()?(xl.classList.remove("hidden"),hm.disabled=a.status==="in_game",dm.disabled=a.status!=="in_game"):xl.classList.add("hidden"),bm(),Ih(),Br(),tg()},hi=()=>{if(!yt||!z.joinedRoom||!wa()){Uf.classList.add("hidden");return}mb.textContent=String(Un),Uf.classList.remove("hidden")},Ss=()=>{Ar=!1,Wh=0,mr=0,um.classList.add("hidden")},LT=(i,e)=>{const t=String(i?.name||"Desconocido"),n=String(i?.character||"Sin personaje"),s=Math.max(1,Number(e)||10);Ar=!0,Wh=performance.now()+s*1e3,mr=s,gb.textContent=`Ganador: ${t} (${n})`,Lu.textContent=String(mr),um.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),ci=!1,yt&&(yt=!1,Bi=0,Un=li,hi())},tg=(i=0)=>{if(!gl)return;const e=!!(z.joinedRoom&&z.joinedRoom.room.status==="in_game"),n=1-Math.max(0,Math.min(1,Gt/Et));let s=e&&!yt?n*.62:0;e||(ir=0);const r=i>0?Math.min(1,i*4.8):1;Ll+=(s-Ll)*r,ir=Math.max(0,ir-(i>0?i*1.7:0));const a=e&&!yt?(Math.sin(performance.now()*.01)+1)*.5*n*.22:0,o=Math.max(0,Math.min(.92,Ll+a+ir));gl.style.opacity=o.toFixed(3),gl.style.setProperty("--bleed-inner",`${20+n*24}%`)},DT=(i=!1)=>{const e=performance.now();jm=e+140,i&&(Ym=e+220)},NT=()=>{Xh=performance.now()+320},UT=i=>{if(!i||!z.remotePlayers.has(i))return;const e=z.remotePlayers.get(i);if(!e?.group)return;const t=e.group.position.x-ue.position.x,n=e.group.position.z-ue.position.z;Km=(Math.atan2(t,-n)-Dn)*180/Math.PI,qh=performance.now()+520},FT=()=>{if(!ea)return;const i=performance.now(),e=Math.sqrt(vt.x*vt.x+vt.z*vt.z),t=Math.min(1,e/Math.max(.001,Hh)),n=Wt?.85:0,s=5+t*7.5+n*6+Pa*10+gr*6.5;ea.style.setProperty("--crosshair-gap",`${s.toFixed(2)}px`),ea.classList.toggle("hit",i<=jm),ea.classList.toggle("headshot",i<=Ym),ea.classList.toggle("kill",i<=Xh)},OT=()=>{if(!Ao)return;if(!(performance.now()<=qh)){Ao.classList.remove("visible");return}Ao.classList.add("visible"),Ao.style.setProperty("--damage-angle",`${Km.toFixed(1)}deg`)},qo=()=>{XT(),Gt=Et,ui=Sc,Di=as,si=ka-as,Dt=hn,ri=Math.round(hn),Zt=0,ac=0,la=null,Kn=!1,pr=0,Wt=!1,Ai=0,Gh=0,yt=!1,Un=li,Bi=0,Ss(),ci=!1,Xh=0,qh=0,hi(),It()},Kh=()=>{Hr(Ye)||Kn||Di>=as||si<=0||!Sn()||(Kn=!0,pr=JE,It())},BT=()=>!Sn()||!Jm(Ye)?!1:Qm()>0?(Yh(!0),!0):Xa(Ye)?(Ut({type:"player_special_lunar_rain"}),!0):Vr(Ye)?(Ut({type:"player_special_silent_cone"}),!0):Wa(Ye)?(Ut({type:"player_special_neoorphen_meteor"}),!0):(Ga(Ye)&&Ut({type:"player_special_pumori_orbit"}),!0),zT=()=>{Gt=Et,ui=Sc,Di=as,si=ka-as,Dt=hn,ri=Math.round(hn),Zt=0,Kn=!1,pr=0,Wt=!1,Ai=0,yt=!1,Un=li,Bi=0,hi(),Ut({type:"player_respawn"}),It()},ng=()=>{wa()&&(yt=!0,ci=!1,Wt=!1,Ai=0,Bi=performance.now()+li*1e3,Un=li,document.pointerLockElement&&document.exitPointerLock(),hi())},fp=(i,e,t)=>{const n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return i+n*t},_s=(i,e,t)=>{const n=i.find(s=>s.name===e);return n||i.find(s=>{const r=String(s.name||"").toLowerCase();return t.some(a=>r.includes(a))})},$h=i=>{const e=String(i||"").trim();if(!e)return on[0]||Ye||"silentman";if(on.includes(e))return e;const t=e.toLowerCase(),n=on.find(s=>rc(s).toLowerCase()===t);return n||e},Jn=(i,e)=>{if(!i.actions)return;const t=i.actions[e]||i.actions.move||null;t&&i.currentAnimation!==e&&(Object.values(i.actions).forEach(n=>{!n||n===t||n.fadeOut(.12)}),e==="death"?(t.reset(),t.setLoop(ch,1),t.clampWhenFinished=!0,t.fadeIn(.08).play()):(t.reset(),t.setLoop(lc,1/0),t.clampWhenFinished=!1,t.fadeIn(.1).play()),i.currentAnimation=e)},Ia=i=>{i.actions&&Jn(i,"idle")},Zi=i=>{if(!$e.actions)return;const e=$e.actions[i]||$e.actions.move||null;e&&$e.currentAnimation!==i&&(Object.values($e.actions).forEach(t=>{!t||t===e||t.fadeOut(.1)}),i==="death"||i==="funny"?(e.reset(),e.setLoop(ch,1),e.clampWhenFinished=!0,e.fadeIn(.08).play()):(e.reset(),e.setLoop(lc,1/0),e.clampWhenFinished=!1,e.fadeIn(.08).play()),$e.currentAnimation=i)},jo=()=>{$e.funnyUntil<=0||($e.funnyUntil=0,$e.currentAnimation==="funny"&&Zi("idle"))},ig=i=>{const e=new un,t=Rh(i.scene),n=new yn().setFromObject(t),s=Number.isFinite(n.min.y)?n.min.y:0;t.position.y-=s,e.add(t);const r=new Jp(t),a=i.animations||[],o=i.animationSet?.idle||_s(a,"idle",["idle"]),c=i.animationSet?.running||_s(a,"running",["running"]),l=i.animationSet?.jump||_s(a,"jump",["jump"]),u=i.animationSet?.funny||_s(a,"funny",["funny"]),h=i.animationSet?.attack||_s(a,"attack",["attack"]),d=i.animationSet?.dead||_s(a,"dead",["dead"]),f={idle:o?r.clipAction(o):null,move:c?r.clipAction(c):null,jump:l?r.clipAction(l):null,funny:u?r.clipAction(u):null,shoot:h?r.clipAction(h):null,death:d?r.clipAction(d):null};return _e.add(e),{group:e,avatarRoot:t,mixer:r,actions:f,body:null,head:null}},kT=()=>{$e.group&&_e.remove($e.group),$e.group=null,$e.mixer=null,$e.actions=null,$e.currentAnimation="",$e.funnyUntil=0},Zh=async()=>{const i=tn.value||Ye;if(!i)return;const e=`${i}`;$e.loadingKey=e;const t=await zr(i);if(!t?.loaded||$e.loadingKey!==e)return;kT();const n=ig(t);$e.group=n.group,$e.mixer=n.mixer,$e.actions=n.actions,$e.currentAnimation="",$e.shootUntil=0,$e.funnyUntil=0,Zi("idle")},VT=i=>{if(!$e.group)return;const e=!!(z.joinedRoom&&ur&&!yt);if($e.group.visible=e,!e)return;$e.group.position.set(ue.position.x,ue.position.y-vn,ue.position.z),$e.group.rotation.y=Dn+jh;const t=performance.now(),n=pt.KeyW||pt.KeyA||pt.KeyS||pt.KeyD;$e.funnyUntil>t?Zi("funny"):Wt?Zi("jump"):$e.shootUntil>t?Zi("shoot"):Zi(n?"move":"idle"),$e.mixer&&$e.mixer.update(i)},HT=i=>{const e=new un,t=new On({color:i?4835839:6815591,emissive:i?731702:1003290,emissiveIntensity:.6,roughness:.6}),n=t.clone(),s=new Qe(new uc(.35,.9,4,8),t),r=new Qe(new fi(.22,12,12),n);return s.position.y=1.15,r.position.y=1.95,e.add(s),e.add(r),_e.add(e),{group:e,avatarRoot:e,body:s,head:r,mixer:null,actions:null}},La=async i=>{const e=$h(i.character);if(!e)return;const t=await zr(e);if(!t?.loaded||!z.remotePlayers.has(i.id))return;const n=z.remotePlayers.get(i.id);if(!n)return;n.character=e;const s=n.group.position.clone(),r=n.group.rotation.y;Ec(n);const a=ig(t);a.group.position.copy(s),a.group.rotation.y=r,n.group=a.group,n.avatarRoot=a.avatarRoot,n.body=a.body,n.head=a.head,n.mixer=a.mixer,n.actions=a.actions,n.currentAnimation=null,n.animationUntil=0,n.isDead=!1,n.isJumping=!1,n.deadAt=0;const o=lg();n.group.add(o.holder),n.healthBar=o,ws(n),Ia(n)},Ec=i=>{i.healthBar&&(i.healthBar.holder?.parent&&i.healthBar.holder.parent.remove(i.healthBar.holder),i.healthBar.bg&&(i.healthBar.bg.geometry.dispose(),i.healthBar.bg.material.dispose()),i.healthBar.fill&&(i.healthBar.fill.geometry.dispose(),i.healthBar.fill.material.dispose()),i.healthBar.text&&(i.healthBar.text.geometry.dispose(),i.healthBar.text.material.dispose()),i.healthBar.textTexture&&i.healthBar.textTexture.dispose(),i.healthBar=null),_e.remove(i.group),i.body&&(i.body.geometry.dispose(),i.body.material.dispose()),i.head&&(i.head.geometry.dispose(),i.head.material.dispose())},GT=(i,e,t)=>{const n=HT(e),s=$h(t);z.remotePlayers.set(i,{id:i,name:"Player",character:s,group:n.group,avatarRoot:n.avatarRoot,body:n.body,head:n.head,mixer:n.mixer,actions:n.actions,currentAnimation:null,animationUntil:0,isDead:!1,health:Et,isJumping:!1,deadAt:0,targetPosition:new C(0,0,0),targetYaw:0,targetPitch:0,netSnapshots:[],netInitialized:!1,smoothedMoveSpeed:0,movingUntil:0,lastAnimationAt:0,healthBar:null});const r=z.remotePlayers.get(i),a=lg();r.group.add(a.holder),r.healthBar=a,ws(r),r.character||(r.character=on[0]||Ye||"silentman"),La(r)},ju=i=>{if(z.self&&i.id===z.self.id)return;z.remotePlayers.has(i.id)||GT(i.id,z.joinedRoom?.room?.hostId===i.id,i.character);const e=z.remotePlayers.get(i.id);i.name&&(e.name=String(i.name));const n=typeof i.character=="string"&&i.character.length>0?$h(i.character):e.character;n!==e.character&&(e.character=n||e.character,La(e)),e.mixer||(e.character||(e.character=on[0]||Ye||"silentman"),e.character&&La(e));const s=i.state?.position||{x:0,y:vn,z:0},r=i.state?.rotation||{yaw:0,pitch:0},a=!!i.state?.moving,o=Number.isFinite(Number(i.ts))?Number(i.ts):Date.now();e.isJumping=!!i.state?.jumping,a&&(e.movingUntil=Math.max(Number(e.movingUntil||0),performance.now()+$m)),Number.isFinite(Number(i.health))&&(e.health=Math.max(0,Math.min(Et,Math.round(Number(i.health)))),ws(e)),typeof i.alive=="boolean"&&(!i.alive&&!e.isDead?(e.isDead=!0,e.deadAt=performance.now(),e.animationUntil=0,Jn(e,"death"),ws(e)):i.alive&&e.isDead&&(e.isDead=!1,e.deadAt=0,e.animationUntil=0,Ia(e),Number.isFinite(Number(i.health))||(e.health=Et),ws(e)));const l={ts:o,x:s.x,y:s.y-vn,z:s.z,yaw:r.yaw,pitch:r.pitch,jumping:!!i.state?.jumping,moving:a};e.netSnapshots.push(l),e.netSnapshots.length>32&&e.netSnapshots.splice(0,e.netSnapshots.length-32),e.netInitialized||(e.group.position.set(l.x,l.y,l.z),e.targetPosition.set(l.x,l.y,l.z),e.group.rotation.y=l.yaw+jh,e.targetYaw=l.yaw,e.targetPitch=l.pitch,e.smoothedMoveSpeed=0,e.netInitialized=!0)},WT=i=>{const e=new Set;i.players.forEach(t=>{z.self&&t.id===z.self.id||(e.add(t.id),ju(t))});for(const[t,n]of z.remotePlayers.entries())e.has(t)||(Ec(n),z.remotePlayers.delete(t))},pp=()=>{for(const i of z.remotePlayers.values())Ec(i);z.remotePlayers.clear()},Mn=(i,e,t=10682286,n={})=>{ys.subVectors(e,i);const s=ys.length();if(s<=1e-4)return;const r=Xo.copy(i).add(e).multiplyScalar(.5),a=qm(r);if(a<.999&&Math.random()>a)return;const o=Number.isFinite(n.radiusScale)?n.radiusScale:1,c=Number.isFinite(n.life)?n.life:.14,l=Number.isFinite(n.opacity)?n.opacity:1,u=RE.clone();u.color=new Ce(t),u.opacity=l;const h=new Qe(wE,u);if(h.position.copy(r),h.quaternion.setFromUnitVectors(FE,ys.multiplyScalar(1/s)),h.scale.set(o,s,o),h.userData.life=c,_e.add(h),Es.push(h),Es.length>OE()){const d=Es.shift();d&&(_e.remove(d),d.material.dispose())}},Yu=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let a=new C().crossVectors(r,new C(0,1,0));a.lengthSq()<1e-4?a=new C(1,0,0):a.normalize();const o=new C().crossVectors(a,r).normalize(),c=new Qe(new fi(.22,14,14),new Lt({color:10154239,transparent:!0,opacity:.96,blending:Ui,depthWrite:!1}));c.position.copy(i),_e.add(c),ga.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:a,up:o,distance:s,traveled:0,speed:85,phase:Math.random()*Math.PI*2,spin:Math.PI*15+Math.random()*Math.PI*6,radius:.72,radiusFalloff:.22,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||"")})},sg=(i=1,e=1)=>{const t=new un,n=new Qe(new Is(.46*i,.26*i,.22*i),new Lt({color:16773830,transparent:!0,opacity:Math.max(.1,Math.min(1,.98*e)),blending:Ui,depthWrite:!1})),s=new Qe(new hc(.05*i,.05*i,.7*i,10),new Lt({color:10154239,transparent:!0,opacity:Math.max(.1,Math.min(1,.95*e)),blending:Ui,depthWrite:!1}));return s.rotation.z=Math.PI/2,t.add(n),t.add(s),t},rg=(i,e,t={})=>{const n=e.clone().sub(i);if(n.length()<=1e-4)return;const r=n.clone().normalize();let a=new C().crossVectors(r,new C(0,1,0));a.lengthSq()<1e-4?a=new C(1,0,0):a.normalize();const o=new C().crossVectors(a,r).normalize(),c=sg(1,1);c.position.copy(i),_e.add(c),_a.push({mesh:c,prevPos:i.clone(),pos:i.clone(),velocity:r.clone().multiplyScalar(34).add(o.clone().multiplyScalar(7.2)),origin:i.clone(),right:a,up:o,traveledDistance:0,spin:(Math.random()>.5?1:-1)*(Math.PI*6.5+Math.random()),phase:Math.random()*Math.PI*2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||"")})},wr=i=>{const e=String(i||"");for(let t=ii.length-1;t>=0;t-=1){const n=ii[t];if(n.ownerId===e){for(let s=0;s<n.hammers.length;s+=1){const r=n.hammers[s],a=r?.mesh;a&&(r.disposed||(_e.remove(a),a.traverse(o=>{o.isMesh&&(o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose())}),r.disposed=!0))}ii.splice(t,1)}}},XT=()=>{for(let i=ii.length-1;i>=0;i-=1)wr(ii[i]?.ownerId)},ag=i=>{const e=String(i||"");if(!e)return null;if(z.self&&e===z.self.id)return ue.position.clone();const t=z.remotePlayers.get(e);return t?.group?t.group.position.clone():null},qT=(i,e)=>{const t=String(i||"");if(!t||(wr(t),!ag(t)))return;const s=performance.now(),r=[],a=Math.max(500,Number(e)||1e4);ii.push({ownerId:t,hammers:r,createdAt:s,endAt:s+a,spawnIntervalMs:220,nextSpawnAt:s,spawnCount:0,maxOrbitRadius:22,maxActiveHammers:28,phase:Math.random()*Math.PI*2})},jT=(i,e=null)=>{if(!i?.mesh||i.disposed)return;const t=i.mesh;if(_e.remove(t),t.traverse(n=>{n.isMesh&&(n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose())}),i.disposed=!0,t.visible=!1,e){const n=At(e,16773830),s=At(e,10154239);n&&(n.scale.setScalar(1.9),n.userData.life=.28),s&&(s.scale.setScalar(1.45),s.userData.life=.24)}},Ku=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let a=new C().crossVectors(r,new C(0,1,0));a.lengthSq()<1e-4?a=new C(1,0,0):a.normalize();const o=new C().crossVectors(a,r).normalize(),c=new Qe(new fi(.3,16,16),new Lt({color:6029158,transparent:!0,opacity:.9,blending:Ui,depthWrite:!1}));c.position.copy(i),_e.add(c),xa.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:a,up:o,distance:s,traveled:0,speed:60,phase:Math.random()*Math.PI*2,spin:Math.PI*9+Math.random()*Math.PI*3,waveAmpA:1.05,waveAmpB:.42,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||"")})},$u=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let a=new C().crossVectors(r,new C(0,1,0));a.lengthSq()<1e-4?a=new C(1,0,0):a.normalize();const o=new C().crossVectors(a,r).normalize(),c=new Qe(new fi(.22,16,16),new Lt({color:15267839,transparent:!0,opacity:.96,blending:Ui,depthWrite:!1}));c.position.copy(i),_e.add(c),va.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:a,up:o,distance:s,traveled:0,speed:80,phase:Math.random()*Math.PI*2,spin:Math.PI*10+Math.random()*Math.PI*4,waveAmpA:.4,waveAmpB:.2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||"")})},At=(i,e=8257426)=>{const t=qm(i);if(t<.999&&Math.random()>t||fr.length>=BE())return null;const n=new Qe(CE,PE.clone());return n.material.color=new Ce(e),n.position.copy(i),n.userData.life=.26,_e.add(n),fr.push(n),n},Rr=(i,e,t,n)=>{ia.subVectors(e,i);const s=ia.length();if(s<=1e-4)return null;ia.multiplyScalar(1/s),sp.subVectors(t,i);const r=sp.dot(ia);return r<0||r>s?null:(Xo.copy(ia).multiplyScalar(r).add(i),Xo.distanceToSquared(t)<=n*n?Xo.clone():null)},qa=(i,e,t=.2)=>{ys.subVectors(e,i);const n=ys.length();if(n<=1e-4)return null;ys.multiplyScalar(1/n),dr.set(i,ys),dr.far=n+t;const s=dr.intersectObjects(ts,!1);return s.length>0?s[0].point.clone():null},ja=(i,e)=>{rp.set(ue.position.x,ue.position.y+hT,ue.position.z),ap.set(ue.position.x,ue.position.y+dT,ue.position.z);const t=Rr(i,e,rp,Va);if(t)return{point:t,headshot:!0};const n=Rr(i,e,ap,Ha);return n?{point:n,headshot:!1}:null},Tc=(i,e)=>{},YT=i=>{if(!z.self)return;const e=i.players.find(s=>s.id===z.self.id);if(!e)return;const t=e.state?.position,n=e.state?.rotation;t&&(ue.position.set(t.x,t.y,t.z),hg(),Wt=!!e.state?.jumping,!Wt&&ue.position.y<=vn+.001&&(Ai=0)),n&&(Dn=n.yaw,Li=n.pitch,Ac()),Gh=Number.isFinite(e.kills)?e.kills:0,Number.isFinite(e.health)&&(Gt=Math.max(0,Math.min(Et,Number(e.health)))),Number.isFinite(e.shield)&&(ui=Math.max(0,Math.min(za,Math.round(e.shield)))),Number.isFinite(e.mana)&&(Dt=Math.max(0,Math.min(hn,Math.round(e.mana))),ri=Math.round(Dt)),Number.isFinite(Number(e.pendingHealthRegen))&&(Zt=Math.max(0,Number(e.pendingHealthRegen))),Number.isFinite(Number(e.lunarRainCooldownMs))&&eg(Number(e.lunarRainCooldownMs)),Qu(),e.alive===!1&&!yt&&wa()&&ng(),e.alive===!0&&yt&&(yt=!1,Bi=0,Un=li,hi())},mp=(i,e={})=>{const t=!z.joinedRoom;t&&qo(),z.joinedRoom=i;const n=Number.isFinite(i.room?.mapSeed)?i.room.mapSeed:RT(i.room?.id);Zm(n),WT(i),fa(i.room?.weather),Wo(i.room?.battleTheme),(e.applyOwnState||t)&&YT(i),nc(!0),Em()&&i.room.status!=="in_game"&&Ut({type:"start_game"}),i.room.status!=="cooldown"&&Ss(),It()},og=()=>{const i=qb(),e=new WebSocket(i);z.ws=e,pl.textContent=`Conectando a ${i}`,e.addEventListener("open",()=>{pl.textContent="Conectado",tr(),Ut({type:"list_rooms"})}),e.addEventListener("message",t=>{let n;try{n=JSON.parse(t.data)}catch{tr("Respuesta invalida del servidor");return}if(n.ok===!1&&n.error){tr(n.error.message||"Error del servidor");return}if(n.type==="connected"){z.self=n.data.player,lm.value=z.self.name,z.self.character&&on.includes(z.self.character)&&(Ye=z.self.character,tn.value=z.self.character),yc(z.self.character||Ye),z.rooms=n.data.rooms||[],kr(),ku();return}if(n.type==="rooms_list"){z.rooms=n.data||[],ku();return}if(n.type==="room_joined"){mp(n.data,{applyOwnState:!0});return}if(n.type==="room_state"){mp(n.data);return}if(n.type==="left_room"){z.joinedRoom=null,z.showScoreboard=!1,bi=null,z.latencyMs=null,pp(),nc(!1),tp(),fa("night"),Wo("battle1"),qo(),Ss(),It(),Ii();return}if(n.type==="pong"){const s=String(n.data?.probeId||"");bi&&s===bi.id&&(z.latencyMs=performance.now()-bi.sentAt,bi=null,Br());return}if(n.type==="player_joined"){n.data?.player&&ju(n.data.player);return}if(n.type==="player_left"){const s=n.data?.playerId;wr(s),s&&z.remotePlayers.has(s)&&(Ec(z.remotePlayers.get(s)),z.remotePlayers.delete(s));return}if(n.type==="player_move"){const{playerId:s,position:r,rotation:a,character:o,jumping:c,moving:l,ts:u}=n.data||{};if(!s||z.self&&s===z.self.id)return;ju({id:s,ts:u,character:o,state:{position:r,rotation:a,jumping:c,moving:l}});return}if(n.type==="player_shoot"){const s=n.data;if(!s)return;const r=s.playerId?z.remotePlayers.get(s.playerId):null,a=s.character||r?.character||"",o=Vr(a),c=Ga(a),l=Wa(a),u=Xa(a);if(s.playerId&&z.remotePlayers.has(s.playerId)){const m=z.remotePlayers.get(s.playerId);m.isDead||(Jn(m,"shoot"),m.animationUntil=performance.now()+420)}const h=new C(s.origin.x,s.origin.y,s.origin.z),d=new C(s.direction.x,s.direction.y,s.direction.z).normalize(),f=s.distance||100,x=h.clone().add(d.clone().multiplyScalar(f)).clone();o?(Yu(h,x,{source:"remote",ownerId:s.playerId}),qn(h)):c?(rg(h,x,{source:"remote",ownerId:s.playerId}),qn(h)):l?(Ku(h,x,{source:"remote",ownerId:s.playerId}),qn(h)):u?($u(h,x,{source:"remote",ownerId:s.playerId}),qn(h)):(Mn(h,x,5885183),At(x,5885183)),np(h,a);return}if(n.type==="special_lunar_rain_wave"){const s=n.data||{},r=String(s.playerId||""),a=Array.isArray(s.strikes)?s.strikes:[];for(let o=0;o<a.length;o+=1){const c=a[o]||{},l=c.start||{},u=c.impact||{};if(!Number.isFinite(Number(l.x))||!Number.isFinite(Number(l.y))||!Number.isFinite(Number(l.z))||!Number.isFinite(Number(u.x))||!Number.isFinite(Number(u.y))||!Number.isFinite(Number(u.z)))continue;const h=new C(Number(l.x),Number(l.y),Number(l.z)),d=new C(Number(u.x),Number(u.y),Number(u.z));$u(h,d,{source:"local",ownerId:r}),At(d,Math.random()>.5?12380671:8703999)}return}if(n.type==="special_silent_cone"){const s=n.data||{},r=String(s.playerId||""),a=s.origin||{},o=Array.isArray(s.rays)?s.rays:[];if(!r||!Number.isFinite(Number(a.x))||!Number.isFinite(Number(a.y))||!Number.isFinite(Number(a.z)))return;const c=new C(Number(a.x),Number(a.y),Number(a.z)),l=z.remotePlayers.get(r),u=s.character||l?.character||"silentman";r!==z.self?.id&&l&&!l.isDead&&(Jn(l,"shoot"),l.animationUntil=performance.now()+420);const h=Math.max(1,Math.ceil(o.length/IE));for(let d=0;d<o.length;d+=h){const f=o[d]||{},g=f.direction||{},x=Number(f.distance||0);if(!Number.isFinite(Number(g.x))||!Number.isFinite(Number(g.y))||!Number.isFinite(Number(g.z))||!Number.isFinite(x)||x<=0)continue;const m=new C(Number(g.x),Number(g.y),Number(g.z)).normalize(),p=c.clone().add(m.multiplyScalar(x));Yu(c.clone(),p,{source:"local",ownerId:r})}qn(c),r!==z.self?.id&&np(c,u);return}if(n.type==="special_neoorphen_meteor_wave"){const s=n.data||{},r=String(s.playerId||""),a=Array.isArray(s.strikes)?s.strikes:[];let o=null;for(let c=0;c<a.length;c+=1){const l=a[c]||{},u=l.start||{},h=l.impact||{};if(!Number.isFinite(Number(u.x))||!Number.isFinite(Number(u.y))||!Number.isFinite(Number(u.z))||!Number.isFinite(Number(h.x))||!Number.isFinite(Number(h.y))||!Number.isFinite(Number(h.z)))continue;const d=new C(Number(u.x),Number(u.y),Number(u.z)),f=new C(Number(h.x),Number(h.y),Number(h.z));o||(o=f.clone()),Ku(d,f,{source:"local",ownerId:r}),Mn(d,f,6750067,{radiusScale:1.6,life:.52,opacity:.98});const g=At(f,5832550),x=At(f,10354554);g&&(g.scale.setScalar(2.6),g.userData.life=.48),x&&(x.scale.setScalar(2.1),x.userData.life=.42)}o&&qn(o);return}if(n.type==="special_pumori_orbit_start"){const s=String(n.data?.playerId||""),r=Number(n.data?.durationMs||1e4);if(!s)return;qT(s,r);return}if(n.type==="player_damage"){if(!z.self||!Sn())return;const s=Number(n.data?.health),r=Number(n.data?.shield),a=!!n.data?.headshot;Number.isFinite(s)&&(Gt=Math.max(0,Math.min(Et,s))),Number.isFinite(r)&&(ui=Math.max(0,Math.min(za,Math.round(r)))),Qu(),ir=Math.min(.45,ir+(a?.35:.2)),UT(n.data?.fromPlayerId),It();return}if(n.type==="hit_confirm"){DT(!!n.data?.headshot);return}if(n.type==="player_resources"){const s=Number(n.data?.mana),r=Number(n.data?.health),a=Number(n.data?.pendingHealthRegen),o=Number(n.data?.lunarRainCooldownMs);let c=!1;Number.isFinite(s)&&(Dt=Math.max(0,Math.min(hn,Math.round(s))),ri=Math.round(Dt),c=!0),Number.isFinite(r)&&(Gt=Math.max(0,Math.min(Et,r)),c=!0),Number.isFinite(a)&&(Zt=Math.max(0,a)),Number.isFinite(o)&&eg(o),Qu(),c&&It();return}if(n.type==="player_death"){const s=n.data?.playerId;if(!s)return;if(wr(s),z.self&&n.data?.killerId===z.self.id&&s!==z.self.id&&NT(),z.self&&s===z.self.id){Gt=0,Zt=0,It(),ng();return}if(!z.remotePlayers.has(s))return;const r=z.remotePlayers.get(s);r.isDead=!0,r.health=0,r.isJumping=!1,r.deadAt=performance.now(),Jn(r,"death"),r.animationUntil=0,ws(r);return}if(n.type==="player_respawned"){const s=n.data?.playerId;if(!s)return;if(z.self&&s===z.self.id){const o=n.data?.position;o&&Number.isFinite(Number(o.x))&&Number.isFinite(Number(o.y))&&Number.isFinite(Number(o.z))&&(ue.position.set(Number(o.x),Number(o.y),Number(o.z)),hg()),Gt=Number.isFinite(n.data?.health)?Number(n.data.health):Et,ui=Number.isFinite(n.data?.shield)?Math.round(n.data.shield):Sc,Number.isFinite(n.data?.mana)&&(Dt=Math.round(n.data.mana),ri=Math.round(Dt)),Zt=0,yt=!1,Bi=0,Un=li,hi(),It();return}const r=z.remotePlayers.get(s);if(!r)return;r.isDead=!1,r.deadAt=0,r.health=Number.isFinite(Number(n.data?.health))?Math.max(0,Math.min(Et,Math.round(Number(n.data.health)))):Et,r.animationUntil=0,Ia(r);const a=n.data?.position;if(a&&Number.isFinite(Number(a.x))&&Number.isFinite(Number(a.y))&&Number.isFinite(Number(a.z))){const o=Number(a.x),c=Number(a.y)-vn,l=Number(a.z);r.group.position.set(o,c,l),r.targetPosition.set(o,c,l)}ws(r);return}if(n.type==="chat_message"){const s=n.data||{},r=String(s.playerName||"Player"),a=String(s.text||"").trim();if(!a)return;zb(r,a),Ch.classList.add("open");return}if(n.type==="player_funny"){const s=n.data?.playerId;if(!s||!z.remotePlayers.has(s))return;const r=z.remotePlayers.get(s);if(r.isDead)return;r.currentAnimation==="funny"&&(r.currentAnimation=""),Jn(r,"funny");const a=r.actions?.funny,o=Math.max(500,Math.round((a?.getClip()?.duration||1)*1e3));r.animationUntil=performance.now()+o;return}if(n.type==="game_state"){z.joinedRoom&&z.joinedRoom.room.id===n.data.roomId&&(z.joinedRoom.room.status=n.data.status,z.joinedRoom.room.hostId=n.data.hostId,n.data.weather&&(z.joinedRoom.room.weather=n.data.weather,fa(n.data.weather)),n.data.battleTheme&&(z.joinedRoom.room.battleTheme=n.data.battleTheme,Wo(n.data.battleTheme)),n.data.status!=="in_game"&&yt&&(yt=!1,Bi=0,Un=li,hi()),n.data.status!=="cooldown"&&Ss(),It(),Ii());return}if(n.type==="match_winner"){if(!z.joinedRoom)return;LT(n.data?.winner,n.data?.countdownSeconds);return}if(n.type==="match_reset"){Ss(),qo(),It();return}}),e.addEventListener("close",()=>{pl.textContent="Desconectado. Reintentando...",z.joinedRoom=null,z.showScoreboard=!1,bi=null,z.latencyMs=null,pp(),nc(!1),tp(),fa("night"),Wo("battle1"),qo(),Ss(),It(),Ii(),setTimeout(og,1200)}),e.addEventListener("error",()=>{tr("No se pudo conectar al WebSocket")})};tn.addEventListener("change",()=>{Ye=tn.value||Ye,z.self&&(z.self.character=Ye),yc(Ye),zr(Ye),Zh(),kr(),It()});pb.addEventListener("click",()=>{Ut({type:"list_rooms"}),hE()});Ub.addEventListener("click",()=>{Ut({type:"leave_room"})});hm.addEventListener("click",()=>{Ut({type:"start_game"})});dm.addEventListener("click",()=>{Ut({type:"end_game"})});Fb.addEventListener("click",()=>{Mc()});Ob.addEventListener("click",()=>{Mc(),Ut({type:"leave_room"})});Du.addEventListener("input",()=>{Pe.mouseSensitivity=Yn(Du.value,.4,2.5,Pe.mouseSensitivity),gm.textContent=Pe.mouseSensitivity.toFixed(2),Or()});Nu.addEventListener("input",()=>{Pe.masterVolume=Yn(Nu.value,0,1,Pe.masterVolume),_m.textContent=`${Math.round(Pe.masterVolume*100)}%`,Ba(),Or()});Uu.addEventListener("input",()=>{Pe.musicVolume=Yn(Uu.value,0,1,Pe.musicVolume),xm.textContent=`${Math.round(Pe.musicVolume*100)}%`,Ba(),Or()});Fu.addEventListener("input",()=>{Pe.sfxVolume=Yn(Fu.value,0,1,Pe.sfxVolume),vm.textContent=`${Math.round(Pe.sfxVolume*100)}%`,Ba(),Or()});Ou.addEventListener("input",()=>{Pe.fov=Yn(Ou.value,60,100,Pe.fov),Mm.textContent=String(Math.round(Pe.fov)),Ba(),Or()});Bu.addEventListener("change",()=>{Pe.showPerfByDefault=!!Bu.checked,!z.showPerf&&Pe.showPerfByDefault&&(z.showPerf=!0,Lh(!0)),Br(),Or()});const Ac=()=>{up.set(Li,Dn,0),ue.quaternion.setFromEuler(up)},cg=()=>{if(!ur)return;Yf.copy(ue.position),ue.getWorldDirection(Co),Co.normalize();const i=Yf.clone().add(Co.clone().multiplyScalar(18));Kf.set(-Math.sin(Dn),0,-Math.cos(Dn)).normalize(),$f.set(Math.cos(Dn),0,-Math.sin(Dn)).normalize(),Ro.copy(ue.position).addScaledVector(Co,-.8).add(new C(0,Yb,0)).addScaledVector(Kf,-4.6).addScaledVector($f,Kb),Ro.y=Math.max(vn+.6,Ro.y),Cs.position.lerp(Ro,$b),Cs.lookAt(i)},oc=()=>ur?Cs:ue,KT=(i,e,t,n={})=>{let s=t,r=null;const a=new C,o=new C,c=new C,l=Number.isFinite(n.headRadius)?n.headRadius:Va,u=Number.isFinite(n.bodyRadius)?n.bodyRadius:Ha,h=(d,f)=>{o.copy(d).sub(i);const g=o.dot(e);g<0||g>s||(c.copy(e).multiplyScalar(g).add(i),c.distanceToSquared(d)<=f*f&&(s=g,r=c.clone()))};for(const d of z.remotePlayers.values())!d?.group||d.isDead||(a.set(d.group.position.x,d.group.position.y+1.85,d.group.position.z),h(a,l),a.set(d.group.position.x,d.group.position.y+1.1,d.group.position.z),h(a,u));return r?{point:r,distance:s}:null},lg=()=>{const i=new un,e=new Qe(new is(qu,lp),new Lt({color:1776411,transparent:!0,opacity:.78,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}));e.renderOrder=999,e.position.set(0,Il,0),i.add(e);const t=new Qe(new is(qu-.02,lp-.02),new Lt({color:5701485,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}));t.renderOrder=1e3,t.position.set(0,Il,.001),i.add(t);const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d"),r=new $0(n);r.minFilter=Tt,r.magFilter=Tt,r.generateMipmaps=!1;const a=new Qe(new is(1.05,.18),new Lt({map:r,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}));return a.renderOrder=1001,a.position.set(0,Il+.16,.001),i.add(a),{holder:i,bg:e,fill:t,text:a,textCanvas:n,textCtx:s,textTexture:r,lastText:""}},ws=i=>{if(!i?.healthBar?.fill)return;const e=Number.isFinite(Number(i.health))?Number(i.health):Et,t=Math.max(0,Math.min(1,e/Et));i.healthBar.fill.scale.x=Math.max(.001,t),i.healthBar.fill.position.x=(t-1)*(qu-.02)*.5,t>.66?i.healthBar.fill.material.color.set(5701485):t>.33?i.healthBar.fill.material.color.set(16769898):i.healthBar.fill.material.color.set(16738151);const n=`${String(i.name||"Player")} ${Math.round(e)}`;if(i.healthBar.lastText!==n&&i.healthBar.textCtx){const s=i.healthBar.textCtx;s.clearRect(0,0,i.healthBar.textCanvas.width,i.healthBar.textCanvas.height),s.font="bold 24px Courier New, monospace",s.textAlign="center",s.textBaseline="middle",s.strokeStyle="rgba(0, 0, 0, 0.75)",s.lineWidth=6,s.strokeText(n,i.healthBar.textCanvas.width/2,32),s.fillStyle="#d8ffd8",s.fillText(n,i.healthBar.textCanvas.width/2,32),i.healthBar.textTexture.needsUpdate=!0,i.healthBar.lastText=n}i.healthBar.holder.visible=!i.isDead},Da=(i=!1)=>{if(!z.joinedRoom)return;const e=performance.now();if(!i&&e-z.lastStateSentAt<55)return;z.lastStateSentAt=e;const t=pt.KeyW||pt.KeyA||pt.KeyS||pt.KeyD||vt.lengthSq()>.5;Ut({type:"player_move",position:{x:ue.position.x,y:ue.position.y,z:ue.position.z},rotation:{yaw:Dn,pitch:Li},jumping:Wt,moving:t})},Zu=(i,e)=>{for(let t=0;t<ic.length;t+=1){const n=ic[t];if(i+ns>n.minX&&i-ns<n.maxX&&e+ns>n.minZ&&e-ns<n.maxZ)return!0}return!1},Ju=(i,e)=>CT(i,e,ns+.05)?!Zu(i,e):!1,$T=(i,e)=>{const t=dp(i,e,ns+.05);if(Ju(t.x,t.z))return t;const n=14;for(let s=.6;s<=n;s+=.6)for(let a=0;a<24;a+=1){const o=a/24*Math.PI*2,c=dp(t.x+Math.cos(o)*s,t.z+Math.sin(o)*s,ns+.05);if(Ju(c.x,c.z))return c}return t},ug=(i,e)=>{const t=ue.position.x,n=ue.position.z,s=Jb-ns,r=Math.max(-s,Math.min(s,i)),a=Math.max(-s,Math.min(s,e));let o=t,c=n;return Zu(r,n)||(o=r),Zu(o,a)||(c=a),{x:o,z:c}},hg=()=>{if(!Ju(ue.position.x,ue.position.z)){const e=$T(ue.position.x,ue.position.z);ue.position.x=e.x,ue.position.z=e.z}const i=ug(ue.position.x,ue.position.z);ue.position.x=i.x,ue.position.z=i.z,ue.position.y=Math.max(vn,ue.position.y)};mn.domElement.addEventListener("click",()=>{!As&&z.joinedRoom&&mn.domElement.requestPointerLock()});document.addEventListener("pointerlockchange",()=>{As=document.pointerLockElement===mn.domElement,gc.classList.toggle("locked",As),As||(ci=!1,z.joinedRoom&&!Fr&&!yt&&!Ar&&!ss&&Wm())});document.addEventListener("mousemove",i=>{if(!As||!Sn())return;const e=.0021*Pe.mouseSensitivity;Dn-=i.movementX*e,Li-=i.movementY*e,Li=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,Li)),Ac(),Da()});window.addEventListener("mousedown",i=>{i.button===0&&As&&Sn()&&(jo(),ci=!0)});window.addEventListener("mouseup",i=>{i.button===0&&(ci=!1)});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&!ss){i.preventDefault(),SE();return}if(i.code==="Enter"){if(i.preventDefault(),!z.joinedRoom)return;if(!ss){kb();return}const e=tc.value.trim();e&&Ut({type:"chat_message",text:e}),zu();return}if(ss){i.code==="Escape"&&(i.preventDefault(),zu());return}if(i.code==="Tab"&&(i.preventDefault(),z.joinedRoom&&(z.showScoreboard=!0,Ih())),i.code==="KeyI"&&(z.showMatchInfo=!z.showMatchInfo,bm()),i.code==="KeyP"&&(z.showPerf=!z.showPerf,z.showPerf&&Lh(!0),Br()),i.code==="KeyF"){if(i.preventDefault(),z.joinedRoom&&$e.actions?.funny){const e=$e.actions.funny.getClip(),t=Math.max(500,Math.round((e?.duration||1)*1e3));$e.funnyUntil=performance.now()+t,Zi("funny"),Ut({type:"player_funny"})}return}i.code==="KeyC"&&(ur=!ur,ur&&cg()),i.code==="Space"&&(i.preventDefault(),jo(),Sn()&&!Wt&&ue.position.y<=vn+.001&&(Wt=!0,Ai=GE,Da(!0))),i.code==="KeyR"&&(jo(),BT()||Kh()),i.code in pt&&((i.code==="KeyW"||i.code==="KeyA"||i.code==="KeyS"||i.code==="KeyD")&&jo(),pt[i.code]=!0)});window.addEventListener("keyup",i=>{ss||(i.code==="Space"&&i.preventDefault(),i.code==="Tab"&&(z.showScoreboard=!1,Ih()),i.code in pt&&(pt[i.code]=!1))});const ZT=()=>{const i=Vr(Ye),e=Ga(Ye),t=Wa(Ye),n=Xa(Ye),s=i||e||t||n;if(s&&Dt<cp)return;if(!s&&Di<=0){Kh();return}s?(Dt=Math.max(0,Dt-cp),ri=Math.round(Dt)):Di-=1,TE(),$e.shootUntil=performance.now()+420,It(),ue.getWorldDirection(hp);const r=hp.clone().normalize(),a=ue.position.clone().add(r.clone().multiplyScalar(.55)),o=Math.sqrt(vt.x*vt.x+vt.z*vt.z),c=Math.min(1,o/Math.max(.001,Hh)),l=!s,u=l?(.0018+c*.0032+(Wt?.0055:0)+gr*.0048)*(1/Pe.mouseSensitivity):0,h=r.clone();if(u>0){const x=new C().crossVectors(h,ue.up).normalize(),m=new C().crossVectors(x,h).normalize(),p=(Math.random()*2-1)*u,M=(Math.random()*2-1)*u;h.add(x.multiplyScalar(p)).add(m.multiplyScalar(M)).normalize()}dr.set(a,h),dr.far=220;const d=dr.intersectObjects(ts,!1);let f=d.length>0?d[0].point:a.clone().add(h.clone().multiplyScalar(120));if(s||e||t){const x=KT(a,h,a.distanceTo(f),{headRadius:Va,bodyRadius:Ha});x?.point&&f.copy(x.point)}e&&a.distanceTo(f)>Xu&&(f=a.clone().add(h.clone().multiplyScalar(Xu)));const g=a.distanceTo(f);if(i?(Yu(a,f,{source:"local",ownerId:z.self?.id}),qn(a)):e?(rg(a,f,{source:"local",ownerId:z.self?.id}),qn(a)):t?(Ku(a,f,{source:"local",ownerId:z.self?.id}),qn(a)):n?($u(a,f,{source:"local",ownerId:z.self?.id}),qn(a)):(Mn(a,f),At(f)),Ut({type:"player_shoot",origin:{x:a.x,y:a.y,z:a.z},direction:{x:h.x,y:h.y,z:h.z},distance:g}),Ra.intensity=2.3,Pa=Math.min(1.3,Pa+.52+c*.14+(Wt?.18:0)),gr=Math.min($E,gr+(l?.22+c*.18+(Wt?.24:0):.08)),Li+=(Math.random()*.5+.5)*YE,Dn+=(Math.random()-.5)*KE,Li=Math.min(Li,Math.PI/2-.01),Ac(),d.length>0){const x=d[0].object;x.material.emissiveIntensity=1.3}},JT=(i,e)=>{i.active=!1,i.respawnAt=e+tT,i.mesh.visible=!1,Hr(Ye)?(Dt=Math.min(hn,Dt+iT),ri=Math.round(Dt)):si=Math.min(ka,si+nT),It()},QT=(i,e)=>{i.active=!1,i.respawnAt=e+rT,i.mesh.visible=!1,ui=Math.min(za,ui+aT),It()},eA=(i,e)=>{i.active=!1,i.respawnAt=e+cT,i.mesh.visible=!1;const t=Math.max(0,Et-(Gt+Zt)),n=Math.min(t,lT);n<=0||(Zt+=n,Ut({type:"player_pickup_health"}))},tA=i=>{if(!Sn()||yt||Gt<=0||Zt<=0)return;const e=Math.max(0,Et-Gt);if(e<=1e-4){Zt=0;return}const t=Math.min(e,Zt,uT*i);if(t<=1e-4)return;const n=Math.round(Gt);Gt+=t,Zt=Math.max(0,Zt-t),Math.round(Gt)!==n&&It()},Qu=()=>{const i=Math.max(0,Et-Gt);Zt=Math.max(0,Math.min(Zt,i))},Jh=2.2,Qh=.1,Cr=(i,e)=>{if(!i?.mesh||!i.active||!i.mesh.visible)return;if(Ts.length>=UE){const o=Ts.shift();o&&(_e.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose())}const t=new Lt({color:e,transparent:!0,opacity:.55+Math.random()*.25,blending:Ui,depthWrite:!1}),n=new Qe(LE,t),s=Math.random()*Math.PI*2,r=.11+Math.random()*.28;n.position.set(i.mesh.position.x+Math.cos(s)*r,i.mesh.position.y+.08+Math.random()*.32,i.mesh.position.z+Math.sin(s)*r),_e.add(n);const a=.95+Math.random()*.85;Ts.push({mesh:n,life:a,initialLife:a,velocity:new C((Math.random()-.5)*.16,1.6+Math.random()*1.25,(Math.random()-.5)*.16)})},nA=i=>{for(let e=Ts.length-1;e>=0;e-=1){const t=Ts[e];t.life-=i,t.mesh.position.addScaledVector(t.velocity,i),t.velocity.y+=i*.55,t.mesh.scale.multiplyScalar(1+i*1.45);const n=Math.max(0,t.life/t.initialLife);t.mesh.material.opacity=n*.75,t.life<=0&&(_e.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Ts.splice(e,1))}},iA=i=>{if(!Sn()||Fr){vt.multiplyScalar(Math.max(0,1-i*10));return}Hn.set(0,0,0),ue.getWorldDirection(Zs),Zs.y=0,Zs.normalize(),Dl.crossVectors(Zs,ue.up).normalize(),pt.KeyW&&Hn.add(Zs),pt.KeyS&&Hn.sub(Zs),pt.KeyA&&Hn.sub(Dl),pt.KeyD&&Hn.add(Dl);const e=Hn.lengthSq()>0;e&&(Hn.normalize().multiplyScalar(Hh),(pt.KeyA||pt.KeyD)&&!(pt.KeyW||pt.KeyS)&&Hn.multiplyScalar(HE));const n=1-Math.exp(-((e?zE:kE)*(Wt?VE:1))*i);if(vt.x+=((e?Hn.x:0)-vt.x)*n,vt.z+=((e?Hn.z:0)-vt.z)*n,Math.abs(vt.x)<1e-4&&(vt.x=0),Math.abs(vt.z)<1e-4&&(vt.z=0),vt.lengthSq()>0){const s=ue.position.x+vt.x*i,r=ue.position.z+vt.z*i,a=ug(s,r),o=Math.abs(a.x-ue.position.x)>1e-4||Math.abs(a.z-ue.position.z)>1e-4;Math.abs(a.x-s)>2e-4&&(vt.x=0),Math.abs(a.z-r)>2e-4&&(vt.z=0),ue.position.x=a.x,ue.position.z=a.z,ue.position.y=Math.max(vn,ue.position.y),o&&Da()}},sA=i=>{!Wt&&ue.position.y<=vn+.001&&Ai<=0||(Ai-=WE*i,ue.position.y+=Ai*i,ue.position.y<=vn?(ue.position.y=vn,Ai=0,Wt&&(Wt=!1,Da(!0))):Wt=!0,Da())},rA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<sr.length;n+=1){const s=sr[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*2.2,s.mesh.position.y=s.baseY+Math.sin(t*Jh+s.phase)*Qh,Math.random()<i*2.9&&(Cr(s,9421823),Math.random()<.72&&Cr(s,9421823)),!Sn()||(Hr(Ye)?Dt>=hn:si>=ka))continue;const r=ue.position.x-s.mesh.position.x,a=ue.position.z-s.mesh.position.z;r*r+a*a<=1.1*1.1&&JT(s,e)}},aA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<rr.length;n+=1){const s=rr[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.position.y=s.baseY+Math.sin(t*Jh+s.phase)*Qh,Math.random()<i*3.1&&(Cr(s,9435135),Math.random()<.75&&Cr(s,9435135)),!Sn()||ui>=za)continue;const r=ue.position.x-s.mesh.position.x,a=ue.position.z-s.mesh.position.z;r*r+a*a<=1.1*1.1&&QT(s,e)}},oA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<ar.length;n+=1){const s=ar[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*1.9,s.mesh.position.y=s.baseY+Math.sin(t*Jh+s.phase)*Qh,Math.random()<i*3.5&&(Cr(s,10878896),Math.random()<.82&&Cr(s,10878896)),!Sn()||yt||Math.max(0,Et-(Gt+Zt))<=1e-4)continue;const a=ue.position.x-s.mesh.position.x,o=ue.position.z-s.mesh.position.z;a*a+o*o<=1.1*1.1&&eA(s,e)}},cA=i=>{if(!Nh.visible)return;const e=.15+Math.sin(performance.now()*.0024)*.2;for(let t=0;t<_c;t+=1){const n=t*3,s=t*3+1,r=t*3+2;wn[s]-=Vu[t]*i,wn[n]+=e*i*Vu[t]*.35,wn[r]+=Math.sin(performance.now()*.0015+t)*.015,wn[s]<.2&&(wn[s]=Math.random()*120+25,wn[n]=ue.position.x+(Math.random()-.5)*220,wn[r]=ue.position.z+(Math.random()-.5)*220)}Dh.attributes.position.needsUpdate=!0},lA=i=>{if(Fh.visible){for(let e=0;e<xc;e+=1){const t=e*3,n=t+1,s=t+2;Rn[n]-=Rm[e]*i,Rn[t]+=Math.sin(performance.now()*9e-4+e)*.02,Rn[s]+=Math.cos(performance.now()*7e-4+e)*.02,Rn[n]<.2&&(Rn[n]=Math.random()*120+25,Rn[t]=ue.position.x+(Math.random()-.5)*180,Rn[s]=ue.position.z+(Math.random()-.5)*180)}Uh.attributes.position.needsUpdate=!0}},uA=i=>{pa=Math.max(0,pa-i*(Tm==="night"?.35:.55));const t=performance.now()*.001,n=sc.attributes.position.array;for(let r=0;r<vc;r+=1){const a=r*3;n[a+1]+=Math.sin(t*Lm[r]+r)*.003,n[a]+=Math.cos(t*.7+r)*.0025,n[a+2]+=Math.sin(t*.5+r)*.0025}sc.attributes.position.needsUpdate=!0;const s=pa*.95;for(let r=0;r<Hu.length;r+=1){const a=Hu[r],o=(Math.sin(t*1.6+a.phase)+1)*.035;a.material.emissiveIntensity=a.base+o+s,a.material.color&&s>.08&&a.material.color.offsetHSL(Math.sin(t+a.phase)*3e-4,4e-4,3e-4)}},hA=i=>{const e=Math.min(1,i*8),t=performance.now(),n=bT()-mT;for(const s of z.remotePlayers.values()){const r=s.netSnapshots||[];if(r.length>0){const A=n-1e3;for(;r.length>2&&r[0].ts<A;)r.shift();let R=r[r.length-1];for(let _=1;_<r.length;_+=1){const y=r[_-1],N=r[_];if(n<y.ts||n>N.ts)continue;const P=Math.max(1,N.ts-y.ts),D=Math.max(0,Math.min(1,(n-y.ts)/P));R={x:y.x+(N.x-y.x)*D,y:y.y+(N.y-y.y)*D,z:y.z+(N.z-y.z)*D,yaw:y.yaw+((N.yaw-y.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)*D,pitch:y.pitch+(N.pitch-y.pitch)*D,jumping:y.jumping||N.jumping,moving:y.moving||N.moving,ts:n};break}if(r.length>=2&&n>r[r.length-1].ts){const _=r[r.length-1],y=r[r.length-2],N=n-_.ts;if(N<=gT){const P=Math.max(1,_.ts-y.ts),D=N/P;R={x:_.x+(_.x-y.x)*D,y:_.y+(_.y-y.y)*D,z:_.z+(_.z-y.z)*D,yaw:_.yaw,pitch:_.pitch,jumping:_.jumping,moving:_.moving,ts:n}}else R=_}s.targetPosition.set(R.x,R.y,R.z),s.targetYaw=R.yaw,s.targetPitch=R.pitch,s.isJumping=!!R.jumping,R.moving&&(s.movingUntil=Math.max(Number(s.movingUntil||0),t+$m))}const a=s.group.position.distanceTo(s.targetPosition);let o=e;a>_T?o=Math.max(o,Math.min(1,i*12)):a>xT&&(o=Math.max(o,Math.min(1,i*10)));const c=s.group.position.x,l=s.group.position.y,u=s.group.position.z;a>vT?s.group.position.copy(s.targetPosition):s.group.position.lerp(s.targetPosition,o),s.group.rotation.y=fp(s.group.rotation.y,s.targetYaw+jh,o);const h=s.group.position.x-c,d=s.group.position.y-l,f=s.group.position.z-u,g=Math.sqrt(h*h+d*d+f*f),x=i>0?g/i:0,m=Math.min(1,i*10);s.smoothedMoveSpeed=Up.lerp(Number(s.smoothedMoveSpeed||0),x,m);const p=s.currentAnimation==="move"?s.smoothedMoveSpeed>yT:s.smoothedMoveSpeed>MT,E=t<Number(s.movingUntil||0)||p,S=s.isJumping||s.targetPosition.y>.08||s.group.position.y>.08,w=t-Number(s.lastAnimationAt||0)>=ST;if(s.head&&(s.head.rotation.x=fp(s.head.rotation.x,s.targetPitch,o)),s.healthBar?.holder){s.healthBar.holder.quaternion.copy(oc().quaternion);const A=s.group.position.distanceTo(oc().position),R=A<=fT,_=Math.max(.74,Math.min(1.06,1.12-A/170));s.healthBar.holder.scale.setScalar(_),s.healthBar.holder.visible=!s.isDead&&R}s.mixer&&s.mixer.update(i),s.animationUntil>0&&t>=s.animationUntil&&(s.isDead&&(s.isDead=!1),S?(Jn(s,"jump"),s.lastAnimationAt=t):E?(Jn(s,"move"),s.lastAnimationAt=t):(Ia(s),s.lastAnimationAt=t),s.animationUntil=0),!s.isDead&&s.animationUntil<=0&&(S?s.currentAnimation!=="jump"&&(Jn(s,"jump"),s.lastAnimationAt=t):E?s.currentAnimation!=="move"&&w&&(Jn(s,"move"),s.lastAnimationAt=t):s.currentAnimation!=="idle"&&w&&(Ia(s),s.lastAnimationAt=t))}},dA=i=>{Ra.intensity=Math.max(0,Ra.intensity-20*i),Pa=Math.max(0,Pa-i*4.8),gr=Math.max(0,gr-i*ZE),nA(i);for(let e=Es.length-1;e>=0;e-=1){const t=Es[e];t.userData.life-=i,t.material.opacity=Math.max(0,t.userData.life*7.5),t.userData.life<=0&&(_e.remove(t),t.material.dispose(),Es.splice(e,1))}for(let e=fr.length-1;e>=0;e-=1){const t=fr[e];t.userData.life-=i,t.scale.multiplyScalar(1+7*i),t.material.opacity=Math.max(0,t.userData.life*5),t.userData.life<=0&&(_e.remove(t),t.material.dispose(),fr.splice(e,1))}for(let e=0;e<ts.length;e+=1){const t=ts[e];t.material.emissiveIntensity>.5&&(t.material.emissiveIntensity=Math.max(.5,t.material.emissiveIntensity-3*i))}},fA=i=>{for(let e=ga.length-1;e>=0;e-=1){const t=ga[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.max(0,t.radius*(1-n*t.radiusFalloff)),a=Math.cos(s)*r,o=Math.sin(s)*r,l=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(a)).add(t.up.clone().multiplyScalar(o));t.pos.copy(l),t.mesh.position.copy(l),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.02)*.24),t.trailTimer+=i;const u=t.source==="remote"?.028:.012;if(t.trailTimer>=u){t.trailTimer=0;const d=At(l,Math.random()>.5?16773830:10154239);d&&(d.scale.setScalar(1.35+Math.random()*.95),d.userData.life=.3+Math.random()*.18)}let h=null;if(t.source==="remote"){const d=ja(t.prevPos,t.pos);d&&(h=d.point,d.headshot)}if(h||(h=qa(t.prevPos,t.pos,.22)),h||n>=1){_e.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),ga.splice(e,1);const d=h?h.clone():t.end.clone();h&&t.source==="remote"&&Tc({},t.ownerId);const f=At(d,16775121);f&&(f.scale.setScalar(2.3),f.userData.life=.42);const g=At(d,12579839);g&&(g.scale.setScalar(1.7),g.userData.life=.36),Mn(d.clone().add(t.up.clone().multiplyScalar(1.05)),d.clone().add(t.up.clone().multiplyScalar(-1.05)),16773830,{radiusScale:2.2,life:.34,opacity:1}),Mn(d.clone().add(t.right.clone().multiplyScalar(.7)),d.clone().add(t.right.clone().multiplyScalar(-.7)),10154239,{radiusScale:1.9,life:.34,opacity:1})}}},pA=i=>{for(let e=_a.length-1;e>=0;e-=1){const t=_a[e];t.prevPos.copy(t.pos),t.velocity.y-=jE*i,t.pos.add(t.velocity.clone().multiplyScalar(i)),t.mesh.position.copy(t.pos);const n=t.pos.distanceTo(t.prevPos);t.traveledDistance+=n;const s=Math.max(0,Math.min(1,t.traveledDistance/Xu)),r=t.phase+s*t.spin;t.mesh.rotation.set(r*.9,r*1.1,r*.75),t.trailTimer+=i;const a=t.source==="remote"?.032:.018;if(t.trailTimer>=a){t.trailTimer=0;const c=At(t.pos,Math.random()>.5?16773830:10154239);c&&(c.scale.setScalar(1+Math.random()*.9),c.userData.life=.22+Math.random()*.16)}let o=null;if(t.pos.y<=.2&&(o=t.pos.clone(),o.y=.2),!o&&n>1e-4&&(o=qa(t.prevPos,t.pos,.4)),!o){if(t.source==="local")for(const c of z.remotePlayers.values()){if(!c?.group||c.isDead)continue;const l=new C(c.group.position.x,c.group.position.y+1.85,c.group.position.z),u=new C(c.group.position.x,c.group.position.y+1.1,c.group.position.z);if(o=Rr(t.prevPos,t.pos,l,Va)||Rr(t.prevPos,t.pos,u,Ha),o)break}else if(t.source==="remote"){const c=ja(t.prevPos,t.pos);c&&(o=c.point,c.headshot)}}if(!o&&t.traveledDistance>=op&&(o=null),(o||t.traveledDistance>=op)&&(_e.remove(t.mesh),t.mesh.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material.dispose())}),_a.splice(e,1),o)){const c=o.clone();t.source==="remote"&&Tc({},t.ownerId);const l=At(c,16773830),u=At(c,10154239);l&&(l.scale.setScalar(2.5),l.userData.life=.42),u&&(u.scale.setScalar(1.9),u.userData.life=.35),Mn(c.clone().add(t.up.clone().multiplyScalar(1.15)),c.clone().add(t.up.clone().multiplyScalar(-1.15)),16773830,{radiusScale:2.3,life:.34,opacity:1}),Mn(c.clone().add(t.right.clone().multiplyScalar(.8)),c.clone().add(t.right.clone().multiplyScalar(-.8)),10154239,{radiusScale:2,life:.34,opacity:1})}}},mA=i=>{for(let e=xa.length-1;e>=0;e-=1){const t=xa[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA*(1-n*.22),a=Math.sin(s*.5+Math.PI*.35)*t.waveAmpB,c=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(a));t.pos.copy(c),t.mesh.position.copy(c),t.mesh.scale.setScalar(1.12+Math.sin(performance.now()*.02)*.28),t.trailTimer+=i;const l=t.source==="remote"?.016:.007;if(t.trailTimer>=l){t.trailTimer=0;const h=Math.random()>.5?6750067:10354554,d=Math.random()>.5?6160236:9437049,f=At(c,h),g=At(c.clone().add(t.right.clone().multiplyScalar((Math.random()-.5)*.12)),d);f&&(f.scale.setScalar(.72+Math.random()*.35),f.userData.life=.22+Math.random()*.08),g&&(g.scale.setScalar(.62+Math.random()*.28),g.userData.life=.18+Math.random()*.08)}let u=null;if(t.source==="remote"){const h=ja(t.prevPos,t.pos);h&&(u=h.point,h.headshot)}if(u||(u=qa(t.prevPos,t.pos,.22)),u||n>=1){_e.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),xa.splice(e,1);const h=u?u.clone():t.end.clone();u&&t.source==="remote"&&Tc({},t.ownerId);const d=At(h,5832550);d&&(d.scale.setScalar(2.45),d.userData.life=.45);const f=At(h,11075468);f&&(f.scale.setScalar(1.9),f.userData.life=.38),Mn(h.clone().add(t.up.clone().multiplyScalar(.95)),h.clone().add(t.up.clone().multiplyScalar(-.95)),7733092,{radiusScale:2,life:.28,opacity:1}),Mn(h.clone().add(t.right.clone().multiplyScalar(.75)),h.clone().add(t.right.clone().multiplyScalar(-.75)),12124053,{radiusScale:1.75,life:.28,opacity:.95})}}},gA=i=>{for(let e=va.length-1;e>=0;e-=1){const t=va[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA,a=Math.cos(s*.7+Math.PI*.3)*t.waveAmpB,c=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(a));t.pos.copy(c),t.mesh.position.copy(c),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.03)*.18),t.trailTimer+=i;const l=t.source==="remote"?.012:.005;if(t.trailTimer>=l){t.trailTimer=0;const h=2.9+Math.random()*1.4,d=c.clone().add(t.dir.clone().multiplyScalar(-h)),f=Math.random()>.5?10148095:8309247;Mn(c,d,f,{radiusScale:1.8,life:.36,opacity:.92});const g=At(d,Math.random()>.5?12380671:8703999);g&&(g.scale.setScalar(.7+Math.random()*.3),g.userData.life=.22+Math.random()*.08)}let u=null;if(t.source==="remote"){const h=ja(t.prevPos,t.pos);h&&(u=h.point,h.headshot)}if(u||(u=qa(t.prevPos,t.pos,.24)),u||n>=1){_e.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),va.splice(e,1);const h=u?u.clone():t.end.clone();u&&t.source==="remote"&&Tc({},t.ownerId);const d=At(h,15661567),f=At(h,9359871);d&&(d.scale.setScalar(2.2),d.userData.life=.4),f&&(f.scale.setScalar(2.8),f.userData.life=.46),Mn(h.clone().add(t.up.clone().multiplyScalar(1.35)),h.clone().add(t.up.clone().multiplyScalar(-1.35)),14677759,{radiusScale:2.35,life:.36,opacity:1}),Mn(h.clone().add(t.right.clone().multiplyScalar(1.05)),h.clone().add(t.right.clone().multiplyScalar(-1.05)),9097215,{radiusScale:2.15,life:.36,opacity:.98})}}},_A=i=>{const e=performance.now();for(let t=ii.length-1;t>=0;t-=1){const n=ii[t];if(!n||e>=n.endAt){wr(n?.ownerId);continue}const s=ag(n.ownerId);if(!s){wr(n.ownerId);continue}if(n.hammers.length>0){let l=0;for(let u=0;u<n.hammers.length;u+=1){const h=n.hammers[u];h?.disposed||(n.hammers[l]=h,l+=1)}n.hammers.length=l}for(;n.nextSpawnAt<=e&&n.nextSpawnAt<n.endAt;){if(n.hammers.length<n.maxActiveHammers){const l=sg(.82,.95);l.position.copy(s),l.visible=!0,_e.add(l);const u=Math.max(0,Math.min(1,(n.nextSpawnAt-n.createdAt)/Math.max(1,n.endAt-n.createdAt)));n.hammers.push({mesh:l,spawnAt:n.nextSpawnAt,baseAngle:Math.random()*Math.PI*2+n.spawnCount%4*(Math.PI*.5),maxRadius:Math.max(2.2,n.maxOrbitRadius*(.22+u*.78)),prevPos:s.clone(),disposed:!1})}n.spawnCount+=1,n.nextSpawnAt+=n.spawnIntervalMs}const r=(e-n.createdAt)/1e3,a=Math.max(0,Math.min(1,(e-n.createdAt)/Math.max(1,n.endAt-n.createdAt))),o=1.15+Math.sin(r*5.5)*.12,c=!!(z.self&&n.ownerId===z.self.id);for(let l=0;l<n.hammers.length;l+=1){const u=n.hammers[l],h=u.mesh;if(!h||u.disposed)continue;h.visible=!0;const d=Math.max(0,Math.min(1,(e-u.spawnAt)/1200)),f=u.maxRadius*(.25+.75*a*d),g=n.phase+r*5.4+u.baseAngle+l*.11,x=f+Math.sin(r*3.4+l)*.12;u.prevPos.copy(h.position),h.position.set(s.x+Math.cos(g)*x,s.y+o+Math.sin(r*3.1+l)*.22,s.z+Math.sin(g)*x),h.rotation.set(r*5.8+l,r*6.5+l*.7,r*4.9+l);let m=null;if(h.position.y<=.22&&(m=h.position.clone(),m.y=.22),m||(m=qa(u.prevPos,h.position,.34)),!m)if(c)for(const p of z.remotePlayers.values()){if(!p?.group||p.isDead)continue;const M=new C(p.group.position.x,p.group.position.y+1.85,p.group.position.z),E=new C(p.group.position.x,p.group.position.y+1.1,p.group.position.z);if(m=Rr(u.prevPos,h.position,M,Va)||Rr(u.prevPos,h.position,E,Ha),m)break}else{const p=ja(u.prevPos,h.position);p&&(m=p.point)}if(m){jT(u,m);continue}if(Math.random()<.45){const p=At(h.position,Math.random()>.5?16773830:10154239);p&&(p.scale.setScalar(.45+Math.random()*.35),p.userData.life=.1+Math.random()*.1)}}}},xA=()=>{let i=0;for(let e=0;e<ii.length;e+=1){const t=ii[e];if(t?.hammers)for(let n=0;n<t.hammers.length;n+=1)t.hammers[n]?.mesh?.visible&&!t.hammers[n]?.disposed&&(i+=1)}return i},vA=i=>{const e=Hr(Ye);if(Sn()){if(e){const t=ri;Dt=Math.min(hn,Dt+QE*i),ri=Math.round(Dt),Kn&&(Kn=!1,pr=0),ri!==t&&It()}if(!e&&Kn&&(pr-=i,pr<=0)){const t=as-Di,n=Math.min(t,si);Di+=n,si-=n,Kn=!1,It()}if(Pl-=i,Fr){ci=!1;return}As&&ci&&Pl<=0&&!Kn&&(ZT(),Pl=IT(),!e&&Di<=0&&si>0&&Kh())}},MA=()=>{if(!yt||!z.joinedRoom||!wa()){yt&&!wa()&&(yt=!1,Bi=0,Un=li,hi());return}const i=Math.max(0,Bi-performance.now()),e=Math.ceil(i/1e3);e!==Un&&(Un=e,hi()),i<=0&&zT()},yA=()=>{if(!Ar||!z.joinedRoom||z.joinedRoom.room.status!=="cooldown"){Ar&&Ss();return}const i=Math.max(0,Wh-performance.now()),e=Math.ceil(i/1e3);e!==mr&&(mr=e,Lu.textContent=String(mr)),i<=0&&(Lu.textContent="0")},Nl=()=>!z.joinedRoom&&es&&!es.classList.contains("hidden"),dg=()=>{requestAnimationFrame(dg);const i=Math.min(pT.getDelta(),.05);Xb(),iA(i),sA(i),tA(i),VT(i),cg(),rA(i),aA(i),oA(i),cA(i),lA(i),uA(i),hA(i),fA(i),pA(i),mA(i),gA(i),_A(),vA(i),MA(),yA(),dA(i),FT(),OT(),Yh(!1),tg(i),Nl()&&qe.mixer&&qe.mixer.update(i),Nl()&&qe.model&&(qe.model.rotation.y+=i*.45),Nl()&&qe.renderer&&qe.scene&&qe.camera&&(Bm(),qe.renderer.render(qe.scene,qe.camera)),mn.render(_e,oc()),jn.drawCalls=mn.info.render.calls||0,jn.triangles=mn.info.render.triangles||0,jn.geometries=mn.info.memory.geometries||0,jn.textures=mn.info.memory.textures||0,jn.vfx=Es.length+fr.length+Ts.length+ga.length+_a.length+xa.length+va.length+xA()};window.addEventListener("resize",()=>{ue.aspect=window.innerWidth/window.innerHeight,ue.updateProjectionMatrix(),Cs.aspect=window.innerWidth/window.innerHeight,Cs.updateProjectionMatrix(),mn.setSize(window.innerWidth,window.innerHeight),qe.renderer&&qe.camera&&Bm()});Vb();yE();Ba();nc(!1);fa("night");Om();hi();It();ku();Ac();dg();og();uE();
