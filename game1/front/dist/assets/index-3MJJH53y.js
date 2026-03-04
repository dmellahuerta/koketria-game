(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const tf="183",Tx=0,Cp=1,wx=2,Kl=1,Ax=2,aa=3,as=0,pn=1,sn=2,$i=0,Jr=1,wi=2,Pp=3,Ip=4,Rx=5,ir=100,Cx=101,Px=102,Ix=103,Lx=104,Nx=200,Dx=201,Fx=202,Ux=203,wd=204,Ad=205,Ox=206,Bx=207,kx=208,zx=209,Vx=210,Hx=211,Gx=212,Wx=213,Xx=214,Rd=0,Cd=1,Pd=2,fo=3,Id=4,Ld=5,Nd=6,Dd=7,n0=0,qx=1,jx=2,xi=0,i0=1,s0=2,r0=3,o0=4,a0=5,l0=6,c0=7,Lp="attached",Kx="detached",u0=300,_r=301,po=302,uu=303,du=304,Oc=306,mo=1e3,fi=1001,fc=1002,Bt=1003,d0=1004,la=1005,Pt=1006,Yl=1007,Vi=1008,Sn=1009,h0=1010,f0=1011,Ra=1012,nf=1013,Ai=1014,Ln=1015,ls=1016,sf=1017,rf=1018,Ca=1020,p0=35902,m0=35899,g0=1021,_0=1022,Nn=1023,cs=1026,or=1027,of=1028,af=1029,go=1030,lf=1031,cf=1033,$l=33776,Zl=33777,Jl=33778,Ql=33779,Fd=35840,Ud=35841,Od=35842,Bd=35843,kd=36196,zd=37492,Vd=37496,Hd=37488,Gd=37489,Wd=37490,Xd=37491,qd=37808,jd=37809,Kd=37810,Yd=37811,$d=37812,Zd=37813,Jd=37814,Qd=37815,eh=37816,th=37817,nh=37818,ih=37819,sh=37820,rh=37821,oh=36492,ah=36494,lh=36495,ch=36283,uh=36284,dh=36285,hh=36286,uf=2200,Xa=2201,Yx=2202,Pa=2300,Ia=2301,hu=2302,Np=2303,Kr=2400,Yr=2401,pc=2402,df=2500,$x=2501,Zx=0,x0=1,fh=2,Jx=3200,v0=0,Qx=1,As="",Yt="srgb",un="srgb-linear",mc="linear",dt="srgb",Cr=7680,Dp=519,ev=512,tv=513,nv=514,hf=515,iv=516,sv=517,ff=518,rv=519,ph=35044,Fp="300 es",pi=2e3,La=2001;function ov(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function av(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lv(){const i=Na("canvas");return i.style.display="block",i}const Up={};function gc(...i){const e="THREE."+i.shift();console.log(e,...i)}function y0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _c(...i){const e=i.join(" ");e in Up||(Up[e]=!0,Re(...i))}function cv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const uv={[Rd]:Cd,[Pd]:Nd,[Id]:Dd,[fo]:Ld,[Cd]:Rd,[Nd]:Pd,[Dd]:Id,[Ld]:fo};class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Op=1234567;const ma=Math.PI/180,_o=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function pf(i,e){return(i%e+e)%e}function dv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hv(i,e,t){return i!==e?(t-i)/(e-i):0}function ga(i,e,t){return(1-t)*i+t*e}function fv(i,e,t,n){return ga(i,e,1-Math.exp(-t*n))}function pv(i,e=1){return e-Math.abs(pf(i,e*2)-e)}function mv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _v(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xv(i,e){return i+Math.random()*(e-i)}function vv(i){return i*(.5-Math.random())}function yv(i){i!==void 0&&(Op=i);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mv(i){return i*ma}function Sv(i){return i*_o}function bv(i){return(i&i-1)===0&&i!==0}function Ev(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wv(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const M0={DEG2RAD:ma,RAD2DEG:_o,generateUUID:Zn,clamp:et,euclideanModulo:pf,mapLinear:dv,inverseLerp:hv,lerp:ga,damp:fv,pingpong:pv,smoothstep:mv,smootherstep:gv,randInt:_v,randFloat:xv,randFloatSpread:vv,seededRandom:yv,degToRad:Mv,radToDeg:Sv,isPowerOfTwo:bv,ceilPowerOfTwo:Ev,floorPowerOfTwo:Tv,setQuaternionFromProperEuler:wv,normalize:ht,denormalize:Wn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);p=Math.sin(p*v)/b,a=Math.sin(a*v)/b,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new P,Bp=new mn;class We{constructor(e,t,n,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],b=s[4],S=s[7],T=s[2],w=s[5],C=s[8];return r[0]=o*_+a*v+l*T,r[3]=o*m+a*b+l*w,r[6]=o*p+a*S+l*C,r[1]=c*_+u*v+d*T,r[4]=c*m+u*b+d*w,r[7]=c*p+u*S+d*C,r[2]=h*_+f*v+g*T,r[5]=h*m+f*b+g*w,r[8]=h*p+f*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pu.makeScale(e,t)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new We,kp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const i={enabled:!0,workingColorSpace:un,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Qr(s.r),s.g=Qr(s.g),s.b=Qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===As?mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _c("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _c("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[un]:{primaries:e,whitePoint:n,transfer:mc,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const tt=Av();function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pr;class Rv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=Na("canvas")),Pr.width=e.width,Pr.height=e.height;const s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cv=0;class mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mu(s[o].image)):r.push(mu(s[o]))}else r=mu(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function mu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Pv=0;const gu=new P;class kt extends br{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=fi,s=fi,r=Pt,o=Vi,a=Nn,l=Sn,c=kt.DEFAULT_ANISOTROPY,u=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Zn(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=u0;kt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(f+1)/2,T=(p+1)/2,w=(u+h)/4,C=(d+_)/4,x=(g+m)/4;return b>S&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=C/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iv extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Iv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class S0 extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lv extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,g,_,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ir.setFromMatrixColumn(e,0).length(),r=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Dv)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_s.crossVectors(n,vn),_s.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_s.crossVectors(n,vn)),_s.normalize(),rl.crossVectors(vn,_s),s[0]=_s.x,s[4]=rl.x,s[8]=vn.x,s[1]=_s.y,s[5]=rl.y,s[9]=vn.y,s[2]=_s.z,s[6]=rl.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],b=n[7],S=n[11],T=n[15],w=s[0],C=s[4],x=s[8],M=s[12],D=s[1],I=s[5],F=s[9],k=s[13],W=s[2],z=s[6],G=s[10],B=s[14],ne=s[3],Q=s[7],he=s[11],xe=s[15];return r[0]=o*w+a*D+l*W+c*ne,r[4]=o*C+a*I+l*z+c*Q,r[8]=o*x+a*F+l*G+c*he,r[12]=o*M+a*k+l*B+c*xe,r[1]=u*w+d*D+h*W+f*ne,r[5]=u*C+d*I+h*z+f*Q,r[9]=u*x+d*F+h*G+f*he,r[13]=u*M+d*k+h*B+f*xe,r[2]=g*w+_*D+m*W+p*ne,r[6]=g*C+_*I+m*z+p*Q,r[10]=g*x+_*F+m*G+p*he,r[14]=g*M+_*k+m*B+p*xe,r[3]=v*w+b*D+S*W+T*ne,r[7]=v*C+b*I+S*z+T*Q,r[11]=v*x+b*F+S*G+T*he,r[15]=v*M+b*k+S*B+T*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*f-c*h,b=a*f-c*d,S=a*h-l*d,T=o*f-c*u,w=o*h-l*u,C=o*d-a*u;return t*(_*v-m*b+p*S)-n*(g*v-m*T+p*w)+s*(g*b-_*T+p*C)-r*(g*S-_*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*a-n*o,b=t*l-s*o,S=t*c-r*o,T=n*l-s*a,w=n*c-r*a,C=s*c-r*l,x=u*_-d*g,M=u*m-h*g,D=u*p-f*g,I=d*m-h*_,F=d*p-f*_,k=h*p-f*m,W=v*k-b*F+S*I+T*D-w*M+C*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return e[0]=(a*k-l*F+c*I)*z,e[1]=(s*F-n*k-r*I)*z,e[2]=(_*C-m*w+p*T)*z,e[3]=(h*w-d*C-f*T)*z,e[4]=(l*D-o*k-c*M)*z,e[5]=(t*k-s*D+r*M)*z,e[6]=(m*S-g*C-p*b)*z,e[7]=(u*C-h*S+f*b)*z,e[8]=(o*F-a*D+c*x)*z,e[9]=(n*D-t*F-r*x)*z,e[10]=(g*w-_*S+p*v)*z,e[11]=(d*S-u*w-f*v)*z,e[12]=(a*M-o*I-l*x)*z,e[13]=(t*I-n*M+s*x)*z,e[14]=(_*b-g*T-m*v)*z,e[15]=(u*T-d*b+h*v)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,v=l*c,b=l*u,S=l*d,T=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+S)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(h+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+b)*C,s[9]=(m-v)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ir.set(s[0],s[1],s[2]).length();const a=Ir.set(s[4],s[5],s[6]).length(),l=Ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,u=1/a,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=pi,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===pi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===La)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===pi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===La)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new P,On=new qe,Nv=new P(0,0,0),Dv=new P(1,1,1),_s=new P,rl=new P,vn=new P,Vp=new qe,Hp=new mn;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const Gp=new P,Lr=new mn,Ni=new qe,ol=new P,Wo=new P,Uv=new P,Ov=new mn,Wp=new P(1,0,0),Xp=new P(0,1,0),qp=new P(0,0,1),jp={type:"added"},Bv={type:"removed"},Nr={type:"childadded",child:null},_u={type:"childremoved",child:null};class Et extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new P,t=new Qn,n=new mn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new We}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ol.copy(e):ol.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Wo,ol,this.up):Ni.lookAt(ol,Wo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(Ni),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bv),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},al={h:0,s:0,l:0};function vu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=pf(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vu(o,r,e+1/3),this.g=vu(o,r,e),this.b=vu(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=b0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return tt.workingToColorSpace(tn.copy(this),e),Math.round(et(tn.r*255,0,255))*65536+Math.round(et(tn.g*255,0,255))*256+Math.round(et(tn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(tn.copy(this),t);const n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Yt){tt.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,s=tn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(al);const n=ga(xs.h,al.h,t),s=ga(xs.s,al.s,t),r=ga(xs.l,al.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ie;Ie.NAMES=b0;class _f{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new _f(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xf extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bn=new P,Di=new P,yu=new P,Fi=new P,Dr=new P,Fr=new P,Kp=new P,Mu=new P,Su=new P,bu=new P,Eu=new St,Tu=new St,wu=new St;class Xn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),Di.subVectors(n,t),yu.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(Di),l=Bn.dot(yu),c=Di.dot(Di),u=Di.dot(yu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Eu.setScalar(0),Tu.setScalar(0),wu.setScalar(0),Eu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,n),wu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Eu,r.x),o.addScaledVector(Tu,r.y),o.addScaledVector(wu,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),Di.subVectors(e,t),Bn.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Bn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Dr.subVectors(s,n),Fr.subVectors(r,n),Mu.subVectors(e,n);const l=Dr.dot(Mu),c=Fr.dot(Mu);if(l<=0&&c<=0)return t.copy(n);Su.subVectors(e,s);const u=Dr.dot(Su),d=Fr.dot(Su);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Dr,o);bu.subVectors(e,r);const f=Dr.dot(bu),g=Fr.dot(bu);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fr,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Kp.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Kp,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Dr,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Tn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),cl.subVectors(this.max,Xo),Ur.subVectors(e.a,Xo),Or.subVectors(e.b,Xo),Br.subVectors(e.c,Xo),vs.subVectors(Or,Ur),ys.subVectors(Br,Or),js.subVectors(Ur,Br);let t=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-js.z,js.y,vs.z,0,-vs.x,ys.z,0,-ys.x,js.z,0,-js.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-js.y,js.x,0];return!Au(t,Ur,Or,Br,cl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,Ur,Or,Br,cl))?!1:(ul.crossVectors(vs,ys),t=[ul.x,ul.y,ul.z],Au(t,Ur,Or,Br,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new P,new P,new P,new P,new P,new P,new P,new P],kn=new P,ll=new Tn,Ur=new P,Or=new P,Br=new P,vs=new P,ys=new P,js=new P,Xo=new P,cl=new P,ul=new P,Ks=new P;function Au(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ks.fromArray(i,r);const a=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),l=e.dot(Ks),c=t.dot(Ks),u=n.dot(Ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ut=new P,dl=new Ke;let zv=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class E0 extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class T0 extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vv=new Tn,qo=new P,Ru=new P;class Ci{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Ru)),this.expandByPoint(qo.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hv=0;const An=new qe,Cu=new Et,kr=new P,yn=new Tn,jo=new Tn,qt=new P;class At extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?T0:E0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(yn.min,jo.min),yn.expandByPoint(qt),qt.addVectors(yn.max,jo.max),yn.expandByPoint(qt)):(yn.expandByPoint(jo.min),yn.expandByPoint(jo.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),qt.add(kr)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new Ke,f=new Ke,g=new Ke,_=new P,m=new P;function p(x,M,D){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,D),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(_),a[M].add(_),a[D].add(_),l[x].add(m),l[M].add(m),l[D].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,M=v.length;x<M;++x){const D=v[x],I=D.start,F=D.count;for(let k=I,W=I+F;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new P,S=new P,T=new P,w=new P;function C(x){T.fromBufferAttribute(s,x),w.copy(T);const M=a[x];b.copy(M),b.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(w,M);const I=S.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,M=v.length;x<M;++x){const D=v[x],I=D.start,F=D.count;for(let k=I,W=I+F;k<W;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new zt(h,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class vf{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){gc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Wv=0;class yi extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Jr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Ad,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wd&&(n.blendSrc=this.blendSrc),this.blendDst!==Ad&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new P,Pu=new P,hl=new P,Ms=new P,Iu=new P,fl=new P,Lu=new P;class qa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pu.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(Pu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hl),a=Ms.dot(this.direction),l=-Ms.dot(hl),c=Ms.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pu).addScaledVector(hl,h),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){Iu.subVectors(t,e),fl.subVectors(n,e),Lu.crossVectors(Iu,fl);let o=this.direction.dot(Lu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);const l=a*this.direction.dot(fl.crossVectors(Ms,fl));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(Ms));if(c<0||l+c>o)return null;const u=-a*Ms.dot(Lu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yp=new qe,Ys=new qa,pl=new Ci,$p=new P,ml=new P,gl=new P,_l=new P,Nu=new P,xl=new P,Zp=new P,vl=new P;class Xe extends Et{constructor(e=new At,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Nu.fromBufferAttribute(d,e),o?xl.addScaledVector(Nu,u):xl.addScaledVector(Nu.sub(t),u))}t.add(xl)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(pl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(pl,$p)===null||Ys.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Yp.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Yp),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=b;S<T;S+=3){const w=a.getX(S),C=a.getX(S+1),x=a.getX(S+2);s=yl(this,p,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=yl(this,o,e,n,c,u,d,v,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=b;S<T;S+=3){const w=S,C=S+1,x=S+2;s=yl(this,p,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,b=m+1,S=m+2;s=yl(this,o,e,n,c,u,d,v,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xv(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===as,a),l===null)return null;vl.copy(a),vl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:i}}function yl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ml),i.getVertexPosition(l,gl),i.getVertexPosition(c,_l);const u=Xv(i,e,t,n,ml,gl,_l,Zp);if(u){const d=new P;Xn.getBarycoord(Zp,ml,gl,_l,d),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,l,c,d,new Ke)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,l,c,d,new Ke)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};Xn.getNormal(ml,gl,_l,h.normal),u.face=h,u.barycoord=d}return u}const Jp=new P,Qp=new St,em=new St,qv=new P,tm=new qe,Ml=new P,Du=new Ci,nm=new qe,Fu=new qa;class jv extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ml),this.boundingBox.expandByPoint(Ml)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ml),this.boundingSphere.expandByPoint(Ml)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Du.copy(this.boundingSphere),Du.applyMatrix4(s),e.ray.intersectsSphere(Du)!==!1&&(nm.copy(s).invert(),Fu.copy(e.ray).applyMatrix4(nm),!(this.boundingBox!==null&&Fu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Qp.fromBufferAttribute(s.attributes.skinIndex,e),em.fromBufferAttribute(s.attributes.skinWeight,e),Jp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=em.getComponent(r);if(o!==0){const a=Qp.getComponent(r);tm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qv.copy(Jp).applyMatrix4(tm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class w0 extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yf extends kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Bt,u=Bt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const im=new qe,Kv=new qe;class Mf{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Kv;im.multiplyMatrices(a,t[r]),im.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Mf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yf(t,e,e,Nn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Re("Skeleton: No bone found with UUID:",r),o=new w0),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class mh extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new qe,sm=new qe,Sl=[],rm=new Tn,Yv=new qe,Ko=new Xe,Yo=new Ci;class $v extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),rm.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(rm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Yo.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(n),e.ray.intersectsSphere(Yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),sm.multiplyMatrices(n,zr),Ko.matrixWorld=sm,Ko.raycast(e,Sl);for(let o=0,a=Sl.length;o<a;o++){const l=Sl[o];l.instanceId=r,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yf(new Float32Array(s*this.count),s,this.count,of,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uu=new P,Zv=new P,Jv=new We;class nr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uu.subVectors(n,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jv.getNormalMatrix(e),s=this.coplanarPoint(Uu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Ci,Qv=new Ke(.5,.5),bl=new P;class Sf{constructor(e=new nr,t=new nr,n=new nr,s=new nr,r=new nr,o=new nr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],b=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,p-g,T-v).normalize(),s[1].setComponents(c+o,f+u,p+g,T+v).normalize(),s[2].setComponents(c+a,f+d,p+_,T+b).normalize(),s[3].setComponents(c-a,f-d,p-_,T-b).normalize(),n)s[4].setComponents(l,h,m,S).normalize(),s[5].setComponents(c-l,f-h,p-m,T-S).normalize();else if(s[4].setComponents(c-l,f-h,p-m,T-S).normalize(),t===pi)s[5].setComponents(c+l,f+h,p+m,T+S).normalize();else if(t===La)s[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);const t=Qv.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bl.x=s.normal.x>0?e.max.x:e.min.x,bl.y=s.normal.y>0?e.max.y:e.min.y,bl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new P,vc=new P,om=new qe,$o=new qa,El=new Ci,Ou=new P,am=new P;class Ef extends Et{constructor(e=new At,t=new bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new mt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;om.copy(s).invert(),$o.copy(e.ray).applyMatrix4(om);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),b=Tl(this,e,$o,l,p,v,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Tl(this,e,$o,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Tl(this,e,$o,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Tl(this,e,$o,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(xc.fromBufferAttribute(a,s),vc.fromBufferAttribute(a,r),t.distanceSqToSegment(xc,vc,Ou,am)>n)return;Ou.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ou);if(!(c<e.near||c>e.far))return{distance:c,point:am.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const lm=new P,cm=new P;class A0 extends Ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lm.fromBufferAttribute(t,s),cm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lm.distanceTo(cm);e.setAttribute("lineDistance",new mt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ey extends Ef{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lo extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new qe,gh=new qa,wl=new Ci,Al=new P;class ja extends Et{constructor(e=new At,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;um.copy(s).invert(),gh.copy(e.ray).applyMatrix4(um);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Al.fromBufferAttribute(d,m),dm(Al,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Al.fromBufferAttribute(d,g),dm(Al,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dm(i,e,t,n,s,r,o){const a=gh.distanceSqToPoint(i);if(a<t){const l=new P;gh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class R0 extends kt{constructor(e=[],t=_r,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ty extends kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Da extends kt{constructor(e,t,n=Ai,s,r,o,a=Bt,l=Bt,c,u=cs,d=1){if(u!==cs&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ny extends Da{constructor(e,t=Ai,n=_r,s,r,o=Bt,a=Bt,l,c=cs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class C0 extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qn extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function g(_,m,p,v,b,S,T,w,C,x,M){const D=S/C,I=T/x,F=S/2,k=T/2,W=w/2,z=C+1,G=x+1;let B=0,ne=0;const Q=new P;for(let he=0;he<G;he++){const xe=he*I-k;for(let fe=0;fe<z;fe++){const ke=fe*D-F;Q[_]=ke*v,Q[m]=xe*b,Q[p]=W,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(fe/C),d.push(1-he/x),B+=1}}for(let he=0;he<x;he++)for(let xe=0;xe<C;xe++){const fe=h+xe+z*he,ke=h+xe+z*(he+1),vt=h+(xe+1)+z*(he+1),gt=h+(xe+1)+z*he;l.push(fe,ke,gt),l.push(ke,vt,gt),ne+=6}a.addGroup(f,ne,M),f+=ne,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bc extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=n*2+r,_=s+1,m=new P,p=new P;for(let v=0;v<=g;v++){let b=0,S=0,T=0,w=0;if(v<=n){const M=v/n,D=M*Math.PI/2;S=-u-e*Math.cos(D),T=e*Math.sin(D),w=-e*Math.cos(D),b=M*d}else if(v<=n+r){const M=(v-n)/r;S=-u+M*t,T=e,w=0,b=d+M*h}else{const M=(v-n-r)/n,D=M*Math.PI/2;S=u+e*Math.sin(D),T=e*Math.cos(D),w=e*Math.sin(D),b=d+h+M*d}const C=Math.max(0,Math.min(1,b/f));let x=0;v===0?x=.5/s:v===g&&(x=-.5/s);for(let M=0;M<=s;M++){const D=M/s,I=D*Math.PI*2,F=Math.sin(I),k=Math.cos(I);p.x=-T*k,p.y=S,p.z=T*F,a.push(p.x,p.y,p.z),m.set(-T*k,w,T*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+x,C)}if(v>0){const M=(v-1)*_;for(let D=0;D<s;D++){const I=M+D,F=M+D+1,k=v*_+D,W=v*_+D+1;o.push(I,F,k),o.push(F,W,k)}}}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class kc extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function v(){const S=new P,T=new P;let w=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const M=[],D=x/r,I=D*(t-e)+e;for(let F=0;F<=s;F++){const k=F/s,W=k*l+a,z=Math.sin(W),G=Math.cos(W);T.x=I*z,T.y=-D*n+m,T.z=I*G,d.push(T.x,T.y,T.z),S.set(z,C,G).normalize(),h.push(S.x,S.y,S.z),f.push(k,1-D),M.push(g++)}_.push(M)}for(let x=0;x<s;x++)for(let M=0;M<r;M++){const D=_[M][x],I=_[M+1][x],F=_[M+1][x+1],k=_[M][x+1];(e>0||M!==0)&&(u.push(D,I,k),w+=3),(t>0||M!==r-1)&&(u.push(I,F,k),w+=3)}c.addGroup(p,w,0),p+=w}function b(S){const T=g,w=new Ke,C=new P;let x=0;const M=S===!0?e:t,D=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*D,0),h.push(0,D,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const W=F/s*l+a,z=Math.cos(W),G=Math.sin(W);C.x=M*G,C.y=m*D,C.z=M*z,d.push(C.x,C.y,C.z),h.push(0,D,0),w.x=z*.5+.5,w.y=G*.5*D+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const k=T+F,W=I+F;S===!0?u.push(W,W+1,k):u.push(W+1,W,k),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new P,S=new P,T=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],S),f(t[w+2],T),l(b,S,T,v)}function l(v,b,S,T){const w=T+1,C=[];for(let x=0;x<=w;x++){C[x]=[];const M=v.clone().lerp(S,x/w),D=b.clone().lerp(S,x/w),I=w-x;for(let F=0;F<=I;F++)F===0&&x===w?C[x][F]=M:C[x][F]=M.clone().lerp(D,F/I)}for(let x=0;x<w;x++)for(let M=0;M<2*(w-x)-1;M++){const D=Math.floor(M/2);M%2===0?(h(C[x][D+1]),h(C[x+1][D]),h(C[x][D])):(h(C[x][D+1]),h(C[x+1][D+1]),h(C[x+1][D]))}}function c(v){const b=new P;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(v),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function u(){const v=new P;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const S=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(S,1-T)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const b=o[v+0],S=o[v+2],T=o[v+4],w=Math.max(b,S,T),C=Math.min(b,S,T);w>.9&&C<.1&&(b<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,b){const S=v*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function g(){const v=new P,b=new P,S=new P,T=new P,w=new Ke,C=new Ke,x=new Ke;for(let M=0,D=0;M<r.length;M+=9,D+=6){v.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),w.set(o[D+0],o[D+1]),C.set(o[D+2],o[D+3]),x.set(o[D+4],o[D+5]),T.copy(v).add(b).add(S).divideScalar(3);const I=m(T);_(w,D+0,v,I),_(C,D+2,b,I),_(x,D+4,S,I)}}function _(v,b,S,T){T<0&&v.x===1&&(o[b]=v.x-1),S.x===0&&S.z===0&&(o[b]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.vertices,e.indices,e.radius,e.detail)}}class Tf extends zc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tf(e.radius,e.detail)}}class wf extends zc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wf(e.radius,e.detail)}}class hi extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let b=0;b<c;b++){const S=b*d-r;g.push(S,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const b=v+c*p,S=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;f.push(b,S,w),f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Af extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new P,g=new Ke;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,b=v,S=v+n+1,T=v+n+2,w=v+1;a.push(b,S,w),a.push(S,T,w)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ei extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],b=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(s+w*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+w*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+S,1-b),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const b=u[p][v+1],S=u[p][v],T=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(b,S,w),(p!==n-1||l<Math.PI)&&f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=xo(i[t]);for(const s in n)e[s]=n[s]}return e}function iy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function P0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const sy={clone:xo,merge:ln};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ay extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ti extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v0,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ly extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Rl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uy(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hm(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function I0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class No{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dy extends No{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kr,endingEnd:Kr}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yr:r=e,a=2*t-n;break;case pc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yr:o=e,l=2*n-t;break;case pc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+v*o[c+T]+b*o[l+T]+S*o[d+T];return r}}class L0 extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class hy extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class fy extends No{interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(n-t)/(s-t),m=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*_;return r}const f=a*2,g=e-1;for(let _=0;_!==a;++_){const m=o[c+_],p=o[l+_],v=g*f+_*2,b=h[v],S=h[v+1],T=e*f+_*2,w=d[T],C=d[T+1];let x=(n-t)/(s-t),M,D,I,F,k;for(let W=0;W<8;W++){M=x*x,D=M*x,I=1-x,F=I*I,k=F*I;const G=k*t+3*F*x*b+3*I*M*w+D*s-n;if(Math.abs(G)<1e-10)break;const B=3*F*(b-t)+6*I*x*(w-b)+3*M*(s-w);if(Math.abs(B)<1e-10)break;x=x-G/B,x=Math.max(0,Math.min(1,x))}r[_]=k*m+3*F*x*S+3*I*M*C+D*p}return r}}class ni{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rl(t,this.TimeBufferType),this.values=Rl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rl(e.times,Array),values:Rl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new fy(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case hu:t=this.InterpolantFactoryMethodSmooth;break;case Np:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return hu;case this.InterpolantFactoryMethodBezier:return Np}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ue("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&av(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ia;class Do extends ni{constructor(e,t,n){super(e,t,n)}}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Pa;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class N0 extends ni{constructor(e,t,n,s){super(e,t,n,s)}}N0.prototype.ValueTypeName="color";class vo extends ni{constructor(e,t,n,s){super(e,t,n,s)}}vo.prototype.ValueTypeName="number";class py extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yo extends ni{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new py(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends ni{constructor(e,t,n){super(e,t,n)}}Fo.prototype.ValueTypeName="string";Fo.prototype.ValueBufferType=Array;Fo.prototype.DefaultInterpolation=Pa;Fo.prototype.InterpolantFactoryMethodLinear=void 0;Fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends ni{constructor(e,t,n,s){super(e,t,n,s)}}Mo.prototype.ValueTypeName="vector";class _h{constructor(e="",t=-1,n=[],s=df){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ni.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=uy(l);l=hm(l,1,u),c=hm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ue("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];I0(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const b=h[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new vo(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Mo,f+".position",h,"pos",s),n(yo,f+".quaternion",h,"rot",s),n(Mo,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function my(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return N0;case"quaternion":return yo;case"bool":case"boolean":return Do;case"string":return Fo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=my(i.type);if(i.times===void 0){const t=[],n=[];I0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fm(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _y{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xy=new _y;class Uo{constructor(e){this.manager=e!==void 0?e:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class vy extends Error{constructor(e,t){super(e),this.response=t}}class D0 extends Uo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:b,value:S})=>{if(b)p.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,C=u.length;w<C;w++){const x=u[w];x.onProgress&&x.onProgress(T)}p.enqueue(S),v()}},b=>{p.error(b)})}}});return new Response(m)}else throw new vy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Hi.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vr=new WeakMap;class yy extends Uo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Vr.get(o);d===void 0&&(d=[],Vr.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Na("img");function l(){u(),t&&t(this);const d=Vr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Vr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Hi.remove(`image:${e}`);const h=Vr.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class My extends Uo{constructor(e){super(e)}load(e,t,n,s){const r=new kt,o=new yy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ka extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class F0 extends Ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bu=new qe,pm=new P,mm=new P;class Rf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sf,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===La||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new P,Pl=new mn,si=new P;class U0 extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Pl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,si.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Cl,Pl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new P,gm=new Ke,_m=new Ke;class jt extends U0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,gm,_m),t.subVectors(_m,gm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sy extends Rf{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=_o*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class by extends Ka{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ey extends Rf{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class O0 extends Ka{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vc extends U0{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ty extends Rf{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hc extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Ty}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wy extends Ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _a{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ku=new WeakMap;class Ay extends Uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(ku.has(o)===!0)s&&s(ku.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ku.set(l,c),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hr=-90,Gr=1;class Ry extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Hr,Gr,e,t);s.layers=this.layers,this.add(s);const r=new jt(Hr,Gr,e,t);r.layers=this.layers,this.add(r);const o=new jt(Hr,Gr,e,t);o.layers=this.layers,this.add(o);const a=new jt(Hr,Gr,e,t);a.layers=this.layers,this.add(a);const l=new jt(Hr,Gr,e,t);l.layers=this.layers,this.add(l);const c=new jt(Hr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cy extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Py{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){mn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Cf="\\[\\]\\.:\\/",Iy=new RegExp("["+Cf+"]","g"),Pf="[^"+Cf+"]",Ly="[^"+Cf.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Pf),Dy=/(WCOD+)?/.source.replace("WCOD",Ly),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),Oy=new RegExp("^"+Ny+Dy+Fy+Uy+"$"),By=["material","materials","bones","map"];class ky{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(e){const t=Oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);By.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=ky;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zy{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Kr,endingEnd:Kr};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $x:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case df:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===Yx;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===uf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Yr,s.endingEnd=Yr):(e?s.endingStart=this.zeroSlopeAtStart?Yr:Kr:s.endingStart=pc,t?s.endingEnd=this.zeroSlopeAtEnd?Yr:Kr:s.endingEnd=pc)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Vy=new Float32Array(1);class If extends br{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new Py(ot.create(n,f,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new L0(new Float32Array(2),new Float32Array(2),1,Vy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?_h.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=df),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new zy(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?_h.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const xm=new qe;class Hy{constructor(e,t,n=0,s=1/0){this.ray=new qa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xm),this}intersectObject(e,t=!0,n=[]){return xh(e,this,n,t),n.sort(vm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,n,t);return n.sort(vm),n}}function vm(i,e){return i.distance-e.distance}function xh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xh(r[o],e,t,!0)}}class Gy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Wy extends A0{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ie(n),s=new Ie(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new At;u.setAttribute("position",new mt(l,3)),u.setAttribute("color",new mt(c,3));const d=new bf({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ym(i,e,t,n){const s=Xy(n);switch(t){case g0:return i*e;case of:return i*e/s.components*s.byteLength;case af:return i*e/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case lf:return i*e*2/s.components*s.byteLength;case _0:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case cf:return i*e*4/s.components*s.byteLength;case $l:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Bd:return Math.max(i,16)*Math.max(e,8)/4;case Fd:case Od:return Math.max(i,8)*Math.max(e,8)/2;case kd:case zd:case Hd:case Gd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vd:case Wd:case Xd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oh:case ah:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dh:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xy(i){switch(i){case Sn:case h0:return{byteLength:1,components:1};case Ra:case f0:case ls:return{byteLength:2,components:1};case sf:case rf:return{byteLength:2,components:4};case Ai:case nf:case Ln:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);function B0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qy(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
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
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,aM=`#ifdef USE_BUMPMAP
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gM=`#define PI 3.141592653589793
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
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,XM=`uniform sampler2D dfgLUT;
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
}`,qM=`
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
#endif`,jM=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nS=`#if defined( USE_POINTS_UV )
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
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
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
#endif`,cS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mS=`#ifdef USE_NORMALMAP
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
#endif`,gS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IS=`float getShadowMask() {
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
}`,LS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,QS=`#if DEPTH_PACKING == 3200
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
}`,eb=`#define DISTANCE
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
}`,tb=`#define DISTANCE
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,ab=`uniform vec3 diffuse;
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
}`,lb=`#define LAMBERT
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
}`,cb=`#define LAMBERT
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
}`,ub=`#define MATCAP
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
}`,db=`#define MATCAP
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
}`,hb=`#define NORMAL
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
}`,fb=`#define NORMAL
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
}`,pb=`#define PHONG
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
}`,mb=`#define PHONG
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
}`,gb=`#define STANDARD
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
}`,_b=`#define STANDARD
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
}`,xb=`#define TOON
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
}`,vb=`#define TOON
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
}`,yb=`uniform float size;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Eb=`uniform float rotation;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:jy,alphahash_pars_fragment:Ky,alphamap_fragment:Yy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Jy,aomap_fragment:Qy,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:sM,bsdfs:rM,iridescence_fragment:oM,bumpmap_pars_fragment:aM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:fM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:xM,displacementmap_pars_vertex:vM,displacementmap_vertex:yM,emissivemap_fragment:MM,emissivemap_pars_fragment:SM,colorspace_fragment:bM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:wM,envmap_pars_fragment:AM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:PM,fog_pars_vertex:IM,fog_fragment:LM,fog_pars_fragment:NM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:FM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:OM,lights_pars_begin:BM,lights_toon_fragment:zM,lights_toon_pars_fragment:VM,lights_phong_fragment:HM,lights_phong_pars_fragment:GM,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:qM,lights_fragment_maps:jM,lights_fragment_end:KM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:JM,map_fragment:QM,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:sS,morphinstance_vertex:rS,morphcolor_vertex:oS,morphnormal_vertex:aS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:dS,normal_pars_fragment:hS,normal_pars_vertex:fS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:xS,iridescence_pars_fragment:vS,opaque_fragment:yS,packing:MS,premultiplied_alpha_fragment:SS,project_vertex:bS,dithering_fragment:ES,dithering_pars_fragment:TS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:CS,shadowmap_vertex:PS,shadowmask_pars_fragment:IS,skinbase_vertex:LS,skinning_pars_vertex:NS,skinning_vertex:DS,skinnormal_vertex:FS,specularmap_fragment:US,specularmap_pars_fragment:OS,tonemapping_fragment:BS,tonemapping_pars_fragment:kS,transmission_fragment:zS,transmission_pars_fragment:VS,uv_pars_fragment:HS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:XS,background_vert:qS,background_frag:jS,backgroundCube_vert:KS,backgroundCube_frag:YS,cube_vert:$S,cube_frag:ZS,depth_vert:JS,depth_frag:QS,distance_vert:eb,distance_frag:tb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:ab,meshlambert_vert:lb,meshlambert_frag:cb,meshmatcap_vert:ub,meshmatcap_frag:db,meshnormal_vert:hb,meshnormal_frag:fb,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:_b,meshtoon_vert:xb,meshtoon_frag:vb,points_vert:yb,points_frag:Mb,shadow_vert:Sb,shadow_frag:bb,sprite_vert:Eb,sprite_frag:Tb},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ci={basic:{uniforms:ln([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ln([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ln([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ln([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ln([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ln([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ln([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ln([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ln([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ln([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ln([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:ln([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:ln([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Il={r:0,b:0,g:0},Zs=new Qn,wb=new qe;function Ab(i,e,t,n,s,r){const o=new Ie(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function g(v){let b=!1;const S=f(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){const S=f(b);S&&(S.isCubeTexture||S.mapping===Oc)?(c===void 0&&(c=new Xe(new qn(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:xo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Zs.copy(b.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(Zs)),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xe(new hi(2,2),new Ri({name:"BackgroundMaterial",uniforms:xo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Il,P0(i)),t.buffers.color.setClear(Il.r,Il.g,Il.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Rb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(I,F,k,W,z){let G=!1;const B=d(I,W,k,F);r!==B&&(r=B,c(r.object)),G=f(I,W,k,z),G&&g(I,W,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(I,F,k,W),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,F,k,W){const z=W.wireframe===!0;let G=n[F.id];G===void 0&&(G={},n[F.id]=G);const B=I.isInstancedMesh===!0?I.id:0;let ne=G[B];ne===void 0&&(ne={},G[B]=ne);let Q=ne[k.id];Q===void 0&&(Q={},ne[k.id]=Q);let he=Q[z];return he===void 0&&(he=h(l()),Q[z]=he),he}function h(I){const F=[],k=[],W=[];for(let z=0;z<t;z++)F[z]=0,k[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:W,object:I,attributes:{},index:null}}function f(I,F,k,W){const z=r.attributes,G=F.attributes;let B=0;const ne=k.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const xe=z[Q];let fe=G[Q];if(fe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),xe===void 0||xe.attribute!==fe||fe&&xe.data!==fe.data)return!0;B++}return r.attributesNum!==B||r.index!==W}function g(I,F,k,W){const z={},G=F.attributes;let B=0;const ne=k.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let xe=G[Q];xe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor));const fe={};fe.attribute=xe,xe&&xe.data&&(fe.data=xe.data),z[Q]=fe,B++}r.attributes=z,r.attributesNum=B,r.index=W}function _(){const I=r.newAttributes;for(let F=0,k=I.length;F<k;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const k=r.newAttributes,W=r.enabledAttributes,z=r.attributeDivisors;k[I]=1,W[I]===0&&(i.enableVertexAttribArray(I),W[I]=1),z[I]!==F&&(i.vertexAttribDivisor(I,F),z[I]=F)}function v(){const I=r.newAttributes,F=r.enabledAttributes;for(let k=0,W=F.length;k<W;k++)F[k]!==I[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function b(I,F,k,W,z,G,B){B===!0?i.vertexAttribIPointer(I,F,k,z,G):i.vertexAttribPointer(I,F,k,W,z,G)}function S(I,F,k,W){_();const z=W.attributes,G=k.getAttributes(),B=F.defaultAttributeValues;for(const ne in G){const Q=G[ne];if(Q.location>=0){let he=z[ne];if(he===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){const xe=he.normalized,fe=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const vt=ke.buffer,gt=ke.type,Y=ke.bytesPerElement,re=gt===i.INT||gt===i.UNSIGNED_INT||he.gpuType===nf;if(he.isInterleavedBufferAttribute){const le=he.data,Ge=le.stride,Fe=he.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<Q.locationSize;Be++)p(Q.location+Be,le.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<Q.locationSize;Be++)m(Q.location+Be);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Be=0;Be<Q.locationSize;Be++)b(Q.location+Be,fe/Q.locationSize,gt,xe,Ge*Y,(Fe+fe/Q.locationSize*Be)*Y,re)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<Q.locationSize;le++)p(Q.location+le,he.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<Q.locationSize;le++)m(Q.location+le);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let le=0;le<Q.locationSize;le++)b(Q.location+le,fe/Q.locationSize,gt,xe,fe*Y,fe/Q.locationSize*le*Y,re)}}else if(B!==void 0){const xe=B[ne];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Q.location,xe);break;case 3:i.vertexAttrib3fv(Q.location,xe);break;case 4:i.vertexAttrib4fv(Q.location,xe);break;default:i.vertexAttrib1fv(Q.location,xe)}}}}v()}function T(){M();for(const I in n){const F=n[I];for(const k in F){const W=F[k];for(const z in W){const G=W[z];for(const B in G)u(G[B].object),delete G[B];delete W[z]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const k in F){const W=F[k];for(const z in W){const G=W[z];for(const B in G)u(G[B].object),delete G[B];delete W[z]}}delete n[I.id]}function C(I){for(const F in n){const k=n[F];for(const W in k){const z=k[W];if(z[I.id]===void 0)continue;const G=z[I.id];for(const B in G)u(G[B].object),delete G[B];delete z[I.id]}}}function x(I){for(const F in n){const k=n[F],W=I.isInstancedMesh===!0?I.id:0,z=k[W];if(z!==void 0){for(const G in z){const B=z[G];for(const ne in B)u(B[ne].object),delete B[ne];delete z[G]}delete k[W],Object.keys(k).length===0&&delete n[F]}}}function M(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Cb(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:w}}function Ib(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new nr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,b=v*4;let S=p.clippingState||null;l.value=S,S=u(g,h,b,f);for(let T=0;T!==b;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==_;++b,S+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Is=4,Mm=[.125,.215,.35,.446,.526,.582],sr=20,Lb=256,Zo=new Vc,Sm=new Ie;let zu=null,Vu=0,Hu=0,Gu=!1;const Nb=new P;class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Nb}=r;zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Vu,Hu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:ls,format:Nn,colorSpace:un,depthBuffer:!1},s=Em(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Db(r)),this._blurMaterial=Ub(r,e,t),this._ggxMaterial=Fb(r,e,t)}return s}_compileMaterial(e){const t=new Xe(new At,e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,s,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Sm),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new qn,new bt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Sm),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const T=this._cubeSize;Wr(s,S*T,b>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_r||e.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Is?n-g+Is:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Wr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Zo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Wr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Zo)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*sr-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):sr;m>sr&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const p=[];let v=0;for(let C=0;C<sr;++C){const x=C/_,M=Math.exp(-x*x/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const S=this._sizeLods[s],T=3*S*(s>b-Is?s-b+Is:0),w=4*(this._cubeSize-S);Wr(t,T,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Zo)}}function Db(i){const e=[],t=[],n=[];let s=i;const r=i-Is+1+Mm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Is?l=Mm[o-i+Is-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,x=w>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(M,_*g*w),b.set(h,m*g*w);const D=[w,w,w,w,w,w];S.set(D,p*g*w)}const T=new At;T.setAttribute("position",new zt(v,_)),T.setAttribute("uv",new zt(b,m)),T.setAttribute("faceIndex",new zt(S,p)),n.push(new Xe(T,null)),s>Is&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Em(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fb(i,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ub(i,e,t){const n=new Float32Array(sr),s=new P(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Tm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function wm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}class k0 extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new R0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:$i});r.uniforms.tEquirect.value=t;const o=new Xe(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Pt),new Ry(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function Ob(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===uu||f===du)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new k0(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===uu||f===du,_=f===_r||f===po;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new bm(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new bm(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===uu?h.mapping=_r:f===du&&(h.mapping=po),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_c("WebGLRenderer: "+n+" extension not supported."),s}}}function kb(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let b=0,S=v.length;b<S;b+=3){const T=v[b+0],w=v[b+1],C=v[b+2];h.push(T,w,w,C,C,T)}}else{const v=g.array;_=g.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const T=b+0,w=b+1,C=b+2;h.push(T,w,w,C,C,T)}}const m=new(g.count>=65535?T0:E0)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function zb(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hb(i,e,t){const n=new WeakMap,s=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let D=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",D)};var f=D;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*d),x=new S0(C,T,w,d);x.type=Ln,x.needsUpdate=!0;const M=S*4;for(let I=0;I<d;I++){const F=p[I],k=v[I],W=b[I],z=T*w*4*I;for(let G=0;G<F.count;G++){const B=G*M;g===!0&&(s.fromBufferAttribute(F,G),C[z+B+0]=s.x,C[z+B+1]=s.y,C[z+B+2]=s.z,C[z+B+3]=0),_===!0&&(s.fromBufferAttribute(k,G),C[z+B+4]=s.x,C[z+B+5]=s.y,C[z+B+6]=s.z,C[z+B+7]=0),m===!0&&(s.fromBufferAttribute(W,G),C[z+B+8]=s.x,C[z+B+9]=s.y,C[z+B+10]=s.z,C[z+B+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Ke(T,w)},n.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Gb(i,e,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Wb={[i0]:"LINEAR_TONE_MAPPING",[s0]:"REINHARD_TONE_MAPPING",[r0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[c0]:"NEUTRAL_TONE_MAPPING",[a0]:"CUSTOM_TONE_MAPPING"};function Xb(i,e,t,n,s){const r=new vi(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new vi(e,t,{type:ls,depthBuffer:!1,stencilBuffer:!1}),a=new At;a.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mt([0,2,0,0,2,0],2));const l=new ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xe(a,l),u=new Vc(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(v,b){r.setSize(v,b),o.setSize(v,b);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,S=r.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(b,S)}},this.begin=function(v,b){if(f||v.toneMapping===xi&&m.length===0)return!1;if(_=b,b!==null){const S=b.width,T=b.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return p===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=xi,!0},this.hasRenderPass=function(){return p},this.end=function(v,b){v.toneMapping=g,f=!0;let S=r,T=o;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(v,T,S,b),C.needsSwap!==!1)){const x=S;S=T,T=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},tt.getTransfer(d)===dt&&(l.defines.SRGB_TRANSFER="");const w=Wb[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const z0=new kt,vh=new Da(1,1),V0=new S0,H0=new Lv,G0=new R0,Am=[],Rm=[],Cm=new Float32Array(16),Pm=new Float32Array(9),Im=new Float32Array(4);function Oo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Am[s];if(r===void 0&&(r=new Float32Array(s),Am[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wc(i,e){let t=Rm[e];t===void 0&&(t=new Int32Array(e),Rm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function $b(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Im.set(n),i.uniformMatrix2fv(this.addr,!1,Im),Ht(t,n)}}function Zb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Pm.set(n),i.uniformMatrix3fv(this.addr,!1,Pm),Ht(t,n)}}function Jb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Cm.set(n),i.uniformMatrix4fv(this.addr,!1,Cm),Ht(t,n)}}function Qb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function tE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function nE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function iE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function rE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function oE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function aE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=t.isReversedDepthBuffer()?ff:hf,r=vh):r=z0,t.setTexture2D(e||r,s)}function lE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||H0,s)}function cE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||G0,s)}function uE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||V0,s)}function dE(i){switch(i){case 5126:return qb;case 35664:return jb;case 35665:return Kb;case 35666:return Yb;case 35674:return $b;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return sE;case 36295:return rE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}function hE(i,e){i.uniform1fv(this.addr,e)}function fE(i,e){const t=Oo(e,this.size,2);i.uniform2fv(this.addr,t)}function pE(i,e){const t=Oo(e,this.size,3);i.uniform3fv(this.addr,t)}function mE(i,e){const t=Oo(e,this.size,4);i.uniform4fv(this.addr,t)}function gE(i,e){const t=Oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _E(i,e){const t=Oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xE(i,e){const t=Oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vE(i,e){i.uniform1iv(this.addr,e)}function yE(i,e){i.uniform2iv(this.addr,e)}function ME(i,e){i.uniform3iv(this.addr,e)}function SE(i,e){i.uniform4iv(this.addr,e)}function bE(i,e){i.uniform1uiv(this.addr,e)}function EE(i,e){i.uniform2uiv(this.addr,e)}function TE(i,e){i.uniform3uiv(this.addr,e)}function wE(i,e){i.uniform4uiv(this.addr,e)}function AE(i,e,t){const n=this.cache,s=e.length,r=Wc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vh:o=z0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function RE(i,e,t){const n=this.cache,s=e.length,r=Wc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||H0,r[o])}function CE(i,e,t){const n=this.cache,s=e.length,r=Wc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||G0,r[o])}function PE(i,e,t){const n=this.cache,s=e.length,r=Wc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||V0,r[o])}function IE(i){switch(i){case 5126:return hE;case 35664:return fE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return _E;case 35676:return xE;case 5124:case 35670:return vE;case 35667:case 35671:return yE;case 35668:case 35672:return ME;case 35669:case 35673:return SE;case 5125:return bE;case 36294:return EE;case 36295:return TE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}class LE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dE(t.type)}}class NE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IE(t.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Lm(i,e){i.seq.push(e),i.map[e.id]=e}function FE(i,e,t){const n=i.name,s=n.length;for(Wu.lastIndex=0;;){const r=Wu.exec(n),o=Wu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lm(t,c===void 0?new LE(a,i,e):new NE(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new DE(a),Lm(t,d)),t=d}}}class ec{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);FE(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Nm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const UE=37297;let OE=0;function BE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Dm=new We;function kE(i){tt._getMatrix(Dm,tt.workingColorSpace,i);const e=`mat3( ${Dm.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case mc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+BE(i.getShaderSource(e),a)}else return r}function zE(i,e){const t=kE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const VE={[i0]:"Linear",[s0]:"Reinhard",[r0]:"Cineon",[o0]:"ACESFilmic",[l0]:"AgX",[c0]:"Neutral",[a0]:"Custom"};function HE(i,e){const t=VE[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ll=new P;function GE(){tt.getLuminanceCoefficients(Ll);const i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function XE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ca(i){return i!==""}function Um(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(jE,YE)}const KE=new Map;function YE(i,e){let t=je[e];if(t===void 0){const n=KE.get(e);if(n!==void 0)t=je[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(i){return i.replace($E,ZE)}function ZE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function km(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const JE={[Kl]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function QE(i){return JE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eT={[_r]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function tT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":eT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nT={[po]:"ENVMAP_MODE_REFRACTION"};function iT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sT={[n0]:"ENVMAP_BLENDING_MULTIPLY",[qx]:"ENVMAP_BLENDING_MIX",[jx]:"ENVMAP_BLENDING_ADD"};function rT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sT[i.combine]||"ENVMAP_BLENDING_NONE"}function oT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aT(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QE(t),c=tT(t),u=iT(t),d=rT(t),h=oT(t),f=WE(t),g=XE(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?je.tonemapping_pars_fragment:"",t.toneMapping!==xi?HE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zE("linearToOutputTexel",t.outputColorSpace),GE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),o=yh(o),o=Um(o,t),o=Om(o,t),a=yh(a),a=Um(a,t),a=Om(a,t),o=Bm(o),a=Bm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+o,S=v+p+a,T=Nm(s,s.VERTEX_SHADER,b),w=Nm(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(w)||"",z=F.trim(),G=k.trim(),B=W.trim();let ne=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const he=Fm(s,T,"vertex"),xe=Fm(s,w,"fragment");Ue("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+he+`
`+xe)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(G===""||B==="")&&(Q=!1);Q&&(I.diagnostics={runnable:ne,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(w),x=new ec(s,_),M=qE(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,UE)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uT(e),t.set(e,n)),n}}class uT{constructor(e){this.id=lT++,this.code=e,this.usedTimes=0}}function dT(i,e,t,n,s,r){const o=new gf,a=new cT,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,D,I,F){const k=I.fog,W=F.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||z,G),ne=B&&B.mapping===Oc?B.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=he!==void 0?he.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let ke,vt,gt,Y;if(Q){const ut=ci[Q];ke=ut.vertexShader,vt=ut.fragmentShader}else ke=x.vertexShader,vt=x.fragmentShader,a.update(x),gt=a.getVertexShaderID(x),Y=a.getFragmentShaderID(x);const re=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,Be=!!x.map,Wt=!!x.matcap,nt=!!B,ct=!!x.aoMap,_t=!!x.lightMap,Ye=!!x.bumpMap,Rt=!!x.normalMap,L=!!x.displacementMap,Ft=!!x.emissiveMap,rt=!!x.metalnessMap,yt=!!x.roughnessMap,Te=x.anisotropy>0,A=x.clearcoat>0,y=x.dispersion>0,U=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,j=Te&&!!x.anisotropyMap,ye=A&&!!x.clearcoatMap,oe=A&&!!x.clearcoatNormalMap,Le=A&&!!x.clearcoatRoughnessMap,Oe=U&&!!x.iridescenceMap,ee=U&&!!x.iridescenceThicknessMap,ie=K&&!!x.sheenColorMap,Me=K&&!!x.sheenRoughnessMap,be=!!x.specularMap,pe=!!x.specularColorMap,$e=!!x.specularIntensityMap,N=J&&!!x.transmissionMap,ae=J&&!!x.thicknessMap,se=!!x.gradientMap,_e=!!x.alphaMap,te=x.alphaTest>0,q=!!x.alphaHash,Se=!!x.extensions;let ze=xi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Mt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:vt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:un,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Wt,envMap:nt,envMapMode:nt&&B.mapping,envMapCubeUVHeight:ne,aoMap:ct,lightMap:_t,bumpMap:Ye,normalMap:Rt,displacementMap:L,emissiveMap:Ft,normalMapObjectSpace:Rt&&x.normalMapType===Qx,normalMapTangentSpace:Rt&&x.normalMapType===v0,metalnessMap:rt,roughnessMap:yt,anisotropy:Te,anisotropyMap:j,clearcoat:A,clearcoatMap:ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:Le,dispersion:y,iridescence:U,iridescenceMap:Oe,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:ie,sheenRoughnessMap:Me,specularMap:be,specularColorMap:pe,specularIntensityMap:$e,transmission:J,transmissionMap:N,thicknessMap:ae,gradientMap:se,opaque:x.transparent===!1&&x.blending===Jr&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:q,combine:x.combine,mapUv:Be&&g(x.map.channel),aoMapUv:ct&&g(x.aoMap.channel),lightMapUv:_t&&g(x.lightMap.channel),bumpMapUv:Ye&&g(x.bumpMap.channel),normalMapUv:Rt&&g(x.normalMap.channel),displacementMapUv:L&&g(x.displacementMap.channel),emissiveMapUv:Ft&&g(x.emissiveMap.channel),metalnessMapUv:rt&&g(x.metalnessMap.channel),roughnessMapUv:yt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:pe&&g(x.specularColorMap.channel),specularIntensityMapUv:$e&&g(x.specularIntensityMap.channel),transmissionMapUv:N&&g(x.transmissionMap.channel),thicknessMapUv:ae&&g(x.thicknessMap.channel),alphaMapUv:_e&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||Te),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Be||_e),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(M,x),v(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const M=f[x.type];let D;if(M){const I=ci[M];D=sy.clone(I.uniforms)}else D=x.uniforms;return D}function S(x,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new aT(i,M,x,s),c.push(D),u.set(M,D)),D}function T(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function hT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vm(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=o(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function l(h,f,g,_,m,p){const v=a(h,f,g,_,m,p);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(h,f,g,_,m,p){const v=a(h,f,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||fT),n.length>1&&n.sort(f||zm),s.length>1&&s.sort(f||zm)}function d(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function pT(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Vm,i.set(n,[o])):s>=r.length?(o=new Vm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function gT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _T=0;function xT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vT(i){const e=new mT,t=gT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new qe,o=new qe;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,b=0,S=0,T=0,w=0,C=0;c.sort(xT);for(let M=0,D=c.length;M<D;M++){const I=c[M],F=I.color,k=I.intensity,W=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===go?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*k,d+=F.g*k,h+=F.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);C++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,ne=t.get(I);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;const B=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,B.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,I.castShadow){const ne=t.get(I);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=z,S++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const B=I.shadow,ne=t.get(I);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,ne.shadowCameraNear=B.camera.near,ne.shadowCameraFar=B.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==S||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=S,x.numSpotMaps=T,x.numLightProbes=C,n.version=_T++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Hm(i){const e=new vT(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yT(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hm(i),e.set(s,[a])):r>=o.length?(a=new Hm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const MT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
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
}`,bT=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],ET=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Gm=new qe,Jo=new P,Xu=new P;function TT(i,e,t){let n=new Sf;const s=new Ke,r=new Ke,o=new St,a=new ly,l=new cy,c={},u=t.maxTextureSize,d={[as]:pn,[pn]:as,[sn]:sn},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:MT,fragmentShader:ST}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let p=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Ax&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kl);const M=i.getRenderTarget(),D=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==this.type;k&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=w.length;W<z;W++){const G=w[W],B=G.shadow;if(B===void 0){Re("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ne=B.getFrameExtents();s.multiply(ne),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,B.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===aa){if(G.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vi(s.x,s.y,{format:go,type:ls,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new Da(s.x,s.y,Ln),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=cs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else G.isPointLight?(B.map=new k0(s.x),B.map.depthTexture=new ny(s.x,Ai)):(B.map=new vi(s.x,s.y),B.map.depthTexture=new Da(s.x,s.y,Ai)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=cs,this.type===Kl?(B.map.depthTexture.compareFunction=Q?ff:hf,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}const he=B.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<he;xe++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(B.map),i.clear());const fe=B.getViewport(xe);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),F.viewport(o)}if(G.isPointLight){const fe=B.camera,ke=B.matrix,vt=G.distance||fe.far;vt!==fe.far&&(fe.far=vt,fe.updateProjectionMatrix()),Jo.setFromMatrixPosition(G.matrixWorld),fe.position.copy(Jo),Xu.copy(fe.position),Xu.add(bT[xe]),fe.up.copy(ET[xe]),fe.lookAt(Xu),fe.updateMatrixWorld(),ke.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Gm.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gm,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(G);n=B.getFrustum(),S(C,x,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===aa&&v(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,D,I)};function v(w,C){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vi(s.x,s.y,{format:go,type:ls})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,f,_,null)}function b(w,C,x,M){let D=null;const I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)D=I;else if(D=x.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=D.uuid,k=C.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let z=W[k];z===void 0&&(z=D.clone(),W[k]=z,C.addEventListener("dispose",T)),D=z}if(D.visible=C.visible,D.wireframe=C.wireframe,M===aa?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=i.properties.get(D);F.light=x}return D}function S(w,C,x,M,D){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===aa)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const z=k.groups;for(let G=0,B=z.length;G<B;G++){const ne=z[G],Q=W[ne.materialIndex];if(Q&&Q.visible){const he=b(w,Q,M,D);w.onBeforeShadow(i,w,C,x,k,he,ne),i.renderBufferDirect(x,null,k,he,w,ne),w.onAfterShadow(i,w,C,x,k,he,ne)}}}else if(W.visible){const z=b(w,W,M,D);w.onBeforeShadow(i,w,C,x,k,z,null),i.renderBufferDirect(x,null,k,z,w,null),w.onAfterShadow(i,w,C,x,k,z,null)}}const F=w.children;for(let k=0,W=F.length;k<W;k++)S(F[k],C,x,M,D)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const M=c[x],D=w.target.uuid;D in M&&(M[D].dispose(),delete M[D])}}}function wT(i,e){function t(){let N=!1;const ae=new St;let se=null;const _e=new St(0,0,0,0);return{setMask:function(te){se!==te&&!N&&(i.colorMask(te,te,te,te),se=te)},setLocked:function(te){N=te},setClear:function(te,q,Se,ze,Mt){Mt===!0&&(te*=ze,q*=ze,Se*=ze),ae.set(te,q,Se,ze),_e.equals(ae)===!1&&(i.clearColor(te,q,Se,ze),_e.copy(ae))},reset:function(){N=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,se=null,_e=null,te=null;return{setReversed:function(q){if(ae!==q){const Se=e.get("EXT_clip_control");q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ae=q;const ze=te;te=null,this.setClear(ze)}},getReversed:function(){return ae},setTest:function(q){q?re(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(q){se!==q&&!N&&(i.depthMask(q),se=q)},setFunc:function(q){if(ae&&(q=uv[q]),_e!==q){switch(q){case Rd:i.depthFunc(i.NEVER);break;case Cd:i.depthFunc(i.ALWAYS);break;case Pd:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case Id:i.depthFunc(i.EQUAL);break;case Ld:i.depthFunc(i.GEQUAL);break;case Nd:i.depthFunc(i.GREATER);break;case Dd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=q}},setLocked:function(q){N=q},setClear:function(q){te!==q&&(te=q,ae&&(q=1-q),i.clearDepth(q))},reset:function(){N=!1,se=null,_e=null,te=null,ae=!1}}}function s(){let N=!1,ae=null,se=null,_e=null,te=null,q=null,Se=null,ze=null,Mt=null;return{setTest:function(ut){N||(ut?re(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(ut){ae!==ut&&!N&&(i.stencilMask(ut),ae=ut)},setFunc:function(ut,Ii,Li){(se!==ut||_e!==Ii||te!==Li)&&(i.stencilFunc(ut,Ii,Li),se=ut,_e=Ii,te=Li)},setOp:function(ut,Ii,Li){(q!==ut||Se!==Ii||ze!==Li)&&(i.stencilOp(ut,Ii,Li),q=ut,Se=Ii,ze=Li)},setLocked:function(ut){N=ut},setClear:function(ut){Mt!==ut&&(i.clearStencil(ut),Mt=ut)},reset:function(){N=!1,ae=null,se=null,_e=null,te=null,q=null,Se=null,ze=null,Mt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,b=null,S=null,T=null,w=null,C=new Ie(0,0,0),x=0,M=!1,D=null,I=null,F=null,k=null,W=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=B>=1):ne.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=B>=2);let Q=null,he={};const xe=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),ke=new St().fromArray(xe),vt=new St().fromArray(fe);function gt(N,ae,se,_e){const te=new Uint8Array(4),q=i.createTexture();i.bindTexture(N,q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<se;Se++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ae+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return q}const Y={};Y[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(fo),Ye(!1),Rt(Cp),re(i.CULL_FACE),ct($i);function re(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ge(N,ae){return d[N]!==ae?(i.bindFramebuffer(N,ae),d[N]=ae,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Fe(N,ae){let se=f,_e=!1;if(N){se=h.get(ae),se===void 0&&(se=[],h.set(ae,se));const te=N.textures;if(se.length!==te.length||se[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Se=te.length;q<Se;q++)se[q]=i.COLOR_ATTACHMENT0+q;se.length=te.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function Be(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Wt={[ir]:i.FUNC_ADD,[Cx]:i.FUNC_SUBTRACT,[Px]:i.FUNC_REVERSE_SUBTRACT};Wt[Ix]=i.MIN,Wt[Lx]=i.MAX;const nt={[Nx]:i.ZERO,[Dx]:i.ONE,[Fx]:i.SRC_COLOR,[wd]:i.SRC_ALPHA,[Vx]:i.SRC_ALPHA_SATURATE,[kx]:i.DST_COLOR,[Ox]:i.DST_ALPHA,[Ux]:i.ONE_MINUS_SRC_COLOR,[Ad]:i.ONE_MINUS_SRC_ALPHA,[zx]:i.ONE_MINUS_DST_COLOR,[Bx]:i.ONE_MINUS_DST_ALPHA,[Hx]:i.CONSTANT_COLOR,[Gx]:i.ONE_MINUS_CONSTANT_COLOR,[Wx]:i.CONSTANT_ALPHA,[Xx]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(N,ae,se,_e,te,q,Se,ze,Mt,ut){if(N===$i){_===!0&&(le(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),N!==Rx){if(N!==m||ut!==M){if((p!==ir||S!==ir)&&(i.blendEquation(i.FUNC_ADD),p=ir,S=ir),ut)switch(N){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.ONE,i.ONE);break;case Pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ip:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",N);break}else switch(N){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pp:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ip:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",N);break}v=null,b=null,T=null,w=null,C.set(0,0,0),x=0,m=N,M=ut}return}te=te||ae,q=q||se,Se=Se||_e,(ae!==p||te!==S)&&(i.blendEquationSeparate(Wt[ae],Wt[te]),p=ae,S=te),(se!==v||_e!==b||q!==T||Se!==w)&&(i.blendFuncSeparate(nt[se],nt[_e],nt[q],nt[Se]),v=se,b=_e,T=q,w=Se),(ze.equals(C)===!1||Mt!==x)&&(i.blendColor(ze.r,ze.g,ze.b,Mt),C.copy(ze),x=Mt),m=N,M=!1}function _t(N,ae){N.side===sn?le(i.CULL_FACE):re(i.CULL_FACE);let se=N.side===pn;ae&&(se=!se),Ye(se),N.blending===Jr&&N.transparent===!1?ct($i):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function Rt(N){N!==Tx?(re(i.CULL_FACE),N!==I&&(N===Cp?i.cullFace(i.BACK):N===wx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),I=N}function L(N){N!==F&&(G&&i.lineWidth(N),F=N)}function Ft(N,ae,se){N?(re(i.POLYGON_OFFSET_FILL),(k!==ae||W!==se)&&(k=ae,W=se,o.getReversed()&&(ae=-ae),i.polygonOffset(ae,se))):le(i.POLYGON_OFFSET_FILL)}function rt(N){N?re(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function yt(N){N===void 0&&(N=i.TEXTURE0+z-1),Q!==N&&(i.activeTexture(N),Q=N)}function Te(N,ae,se){se===void 0&&(Q===null?se=i.TEXTURE0+z-1:se=Q);let _e=he[se];_e===void 0&&(_e={type:void 0,texture:void 0},he[se]=_e),(_e.type!==N||_e.texture!==ae)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(N,ae||Y[N]),_e.type=N,_e.texture=ae)}function A(){const N=he[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function K(){try{i.texSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function J(){try{i.texSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function oe(){try{i.texStorage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Le(){try{i.texStorage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Oe(){try{i.texImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function ee(){try{i.texImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function ie(N){ke.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function Me(N){vt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),vt.copy(N))}function be(N,ae){let se=c.get(ae);se===void 0&&(se=new WeakMap,c.set(ae,se));let _e=se.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(ae,N.name),se.set(N,_e))}function pe(N,ae){const _e=c.get(ae).get(N);l.get(ae)!==_e&&(i.uniformBlockBinding(ae,_e,N.__bindingPointIndex),l.set(ae,_e))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,he={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,b=null,S=null,T=null,w=null,C=new Ie(0,0,0),x=0,M=!1,D=null,I=null,F=null,k=null,W=null,ke.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:le,bindFramebuffer:Ge,drawBuffers:Fe,useProgram:Be,setBlending:ct,setMaterial:_t,setFlipSided:Ye,setCullFace:Rt,setLineWidth:L,setPolygonOffset:Ft,setScissorTest:rt,activeTexture:yt,bindTexture:Te,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:Oe,texImage3D:ee,updateUBOMapping:be,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:Le,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:ye,scissor:ie,viewport:Me,reset:$e}}function AT(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):Na("canvas")}function _(A,y,U){let K=1;const J=Te(A);if((J.width>U||J.height>U)&&(K=U/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*J.width),ye=Math.floor(K*J.height);d===void 0&&(d=g(j,ye));const oe=y?g(j,ye):d;return oe.width=j,oe.height=ye,oe.getContext("2d").drawImage(A,0,0,j,ye),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+ye+")."),oe}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,y,U,K,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),y===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const ye=J?mc:tt.getTransfer(K);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=ye===dt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(A,y){let U;return A?y===null||y===Ai||y===Ca?U=i.DEPTH24_STENCIL8:y===Ln?U=i.DEPTH32F_STENCIL8:y===Ra&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ai||y===Ca?U=i.DEPTH_COMPONENT24:y===Ln?U=i.DEPTH_COMPONENT32F:y===Ra&&(U=i.DEPTH_COMPONENT16),U}function T(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Pt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){const y=A.target;y.removeEventListener("dispose",w),x(y),y.isVideoTexture&&u.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),D(y)}function x(A){const y=n.get(A);if(y.__webglInit===void 0)return;const U=A.source,K=h.get(U);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(K).length===0&&h.delete(U)}n.remove(A)}function M(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const U=A.source,K=h.get(U);delete K[y.__cacheKey],o.memory.textures--}function D(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[K][J]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=A.textures;for(let K=0,J=U.length;K<J;K++){const j=n.get(U[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(U[K])}n.remove(A)}let I=0;function F(){I=0}function k(){const A=I;return A>=s.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function z(A,y){const U=n.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const K=A.image;if(K===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,A,y);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+y)}function G(A,y){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,y);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+y)}function B(A,y){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,y);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+y)}function ne(A,y){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){re(U,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+y)}const Q={[mo]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},he={[Bt]:i.NEAREST,[d0]:i.NEAREST_MIPMAP_NEAREST,[la]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},xe={[ev]:i.NEVER,[rv]:i.ALWAYS,[tv]:i.LESS,[hf]:i.LEQUAL,[nv]:i.EQUAL,[ff]:i.GEQUAL,[iv]:i.GREATER,[sv]:i.NOTEQUAL};function fe(A,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pt||y.magFilter===Yl||y.magFilter===la||y.magFilter===Vi||y.minFilter===Pt||y.minFilter===Yl||y.minFilter===la||y.minFilter===Vi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Q[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bt||y.minFilter!==la&&y.minFilter!==Vi||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ke(A,y){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));const K=y.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const j=W(y);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[j].usedTimes++;const ye=J[A.__cacheKey];ye!==void 0&&(J[A.__cacheKey].usedTimes--,ye.usedTimes===0&&M(y)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return U}function vt(A,y,U){return Math.floor(Math.floor(A/U)/y)}function gt(A,y,U,K){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,U,K,y.data);else{j.sort((ee,ie)=>ee.start-ie.start);let ye=0;for(let ee=1;ee<j.length;ee++){const ie=j[ye],Me=j[ee],be=ie.start+ie.count,pe=vt(Me.start,y.width,4),$e=vt(ie.start,y.width,4);Me.start<=be+1&&pe===$e&&vt(Me.start+Me.count-1,y.width,4)===pe?ie.count=Math.max(ie.count,Me.start+Me.count-ie.start):(++ye,j[ye]=Me)}j.length=ye+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ee=0,ie=j.length;ee<ie;ee++){const Me=j[ee],be=Math.floor(Me.start/4),pe=Math.ceil(Me.count/4),$e=be%y.width,N=Math.floor(be/y.width),ae=pe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,$e,N,ae,se,U,K,y.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function Y(A,y,U){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const J=ke(A,y),j=y.source;t.bindTexture(K,A.__webglTexture,i.TEXTURE0+U);const ye=n.get(j);if(j.version!==ye.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const oe=tt.getPrimaries(tt.workingColorSpace),Le=y.colorSpace===As?null:tt.getPrimaries(y.colorSpace),Oe=y.colorSpace===As||oe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ee=_(y.image,!1,s.maxTextureSize);ee=yt(y,ee);const ie=r.convert(y.format,y.colorSpace),Me=r.convert(y.type);let be=b(y.internalFormat,ie,Me,y.colorSpace,y.isVideoTexture);fe(K,y);let pe;const $e=y.mipmaps,N=y.isVideoTexture!==!0,ae=ye.__version===void 0||J===!0,se=j.dataReady,_e=T(y,ee);if(y.isDepthTexture)be=S(y.format===or,y.type),ae&&(N?t.texStorage2D(i.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,Me,null));else if(y.isDataTexture)if($e.length>0){N&&ae&&t.texStorage2D(i.TEXTURE_2D,_e,be,$e[0].width,$e[0].height);for(let te=0,q=$e.length;te<q;te++)pe=$e[te],N?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,Me,pe.data):t.texImage2D(i.TEXTURE_2D,te,be,pe.width,pe.height,0,ie,Me,pe.data);y.generateMipmaps=!1}else N?(ae&&t.texStorage2D(i.TEXTURE_2D,_e,be,ee.width,ee.height),se&&gt(y,ee,ie,Me)):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,Me,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,be,$e[0].width,$e[0].height,ee.depth);for(let te=0,q=$e.length;te<q;te++)if(pe=$e[te],y.format!==Nn)if(ie!==null)if(N){if(se)if(y.layerUpdates.size>0){const Se=ym(pe.width,pe.height,y.format,y.type);for(const ze of y.layerUpdates){const Mt=pe.data.subarray(ze*Se/pe.data.BYTES_PER_ELEMENT,(ze+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ze,pe.width,pe.height,1,ie,Mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,be,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,Me,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,be,pe.width,pe.height,ee.depth,0,ie,Me,pe.data)}else{N&&ae&&t.texStorage2D(i.TEXTURE_2D,_e,be,$e[0].width,$e[0].height);for(let te=0,q=$e.length;te<q;te++)pe=$e[te],y.format!==Nn?ie!==null?N?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,be,pe.width,pe.height,0,pe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,Me,pe.data):t.texImage2D(i.TEXTURE_2D,te,be,pe.width,pe.height,0,ie,Me,pe.data)}else if(y.isDataArrayTexture)if(N){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,be,ee.width,ee.height,ee.depth),se)if(y.layerUpdates.size>0){const te=ym(ee.width,ee.height,y.format,y.type);for(const q of y.layerUpdates){const Se=ee.data.subarray(q*te/ee.data.BYTES_PER_ELEMENT,(q+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ie,Me,Se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Me,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,ie,Me,ee.data);else if(y.isData3DTexture)N?(ae&&t.texStorage3D(i.TEXTURE_3D,_e,be,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Me,ee.data)):t.texImage3D(i.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,ie,Me,ee.data);else if(y.isFramebufferTexture){if(ae)if(N)t.texStorage2D(i.TEXTURE_2D,_e,be,ee.width,ee.height);else{let te=ee.width,q=ee.height;for(let Se=0;Se<_e;Se++)t.texImage2D(i.TEXTURE_2D,Se,be,te,q,0,ie,Me,null),te>>=1,q>>=1}}else if($e.length>0){if(N&&ae){const te=Te($e[0]);t.texStorage2D(i.TEXTURE_2D,_e,be,te.width,te.height)}for(let te=0,q=$e.length;te<q;te++)pe=$e[te],N?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ie,Me,pe):t.texImage2D(i.TEXTURE_2D,te,be,ie,Me,pe);y.generateMipmaps=!1}else if(N){if(ae){const te=Te(ee);t.texStorage2D(i.TEXTURE_2D,_e,be,te.width,te.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Me,ee)}else t.texImage2D(i.TEXTURE_2D,0,be,ie,Me,ee);m(y)&&p(K),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function re(A,y,U){if(y.image.length!==6)return;const K=ke(A,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const j=n.get(J);if(J.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const ye=tt.getPrimaries(tt.workingColorSpace),oe=y.colorSpace===As?null:tt.getPrimaries(y.colorSpace),Le=y.colorSpace===As||ye===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!Oe&&!ee?ie[q]=_(y.image[q],!0,s.maxCubemapSize):ie[q]=ee?y.image[q].image:y.image[q],ie[q]=yt(y,ie[q]);const Me=ie[0],be=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),$e=b(y.internalFormat,be,pe,y.colorSpace),N=y.isVideoTexture!==!0,ae=j.__version===void 0||K===!0,se=J.dataReady;let _e=T(y,Me);fe(i.TEXTURE_CUBE_MAP,y);let te;if(Oe){N&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,Me.width,Me.height);for(let q=0;q<6;q++){te=ie[q].mipmaps;for(let Se=0;Se<te.length;Se++){const ze=te[Se];y.format!==Nn?be!==null?N?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,ze.width,ze.height,be,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,$e,ze.width,ze.height,0,ze.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,ze.width,ze.height,be,pe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,$e,ze.width,ze.height,0,be,pe,ze.data)}}}else{if(te=y.mipmaps,N&&ae){te.length>0&&_e++;const q=Te(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,q.width,q.height)}for(let q=0;q<6;q++)if(ee){N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,be,pe,ie[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,$e,ie[q].width,ie[q].height,0,be,pe,ie[q].data);for(let Se=0;Se<te.length;Se++){const Mt=te[Se].image[q].image;N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,Mt.width,Mt.height,be,pe,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,$e,Mt.width,Mt.height,0,be,pe,Mt.data)}}else{N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be,pe,ie[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,$e,be,pe,ie[q]);for(let Se=0;Se<te.length;Se++){const ze=te[Se];N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,be,pe,ze.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,$e,be,pe,ze.image[q])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function le(A,y,U,K,J,j){const ye=r.convert(U.format,U.colorSpace),oe=r.convert(U.type),Le=b(U.internalFormat,ye,oe,U.colorSpace),Oe=n.get(y),ee=n.get(U);if(ee.__renderTarget=y,!Oe.__hasExternalTextures){const ie=Math.max(1,y.width>>j),Me=Math.max(1,y.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Le,ie,Me,y.depth,0,ye,oe,null):t.texImage2D(J,j,Le,ie,Me,0,ye,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,ee.__webglTexture,0,L(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,ee.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(A,y,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,j=S(y.stencilBuffer,J),ye=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(y),j,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,A)}else{const K=y.textures;for(let J=0;J<K.length;J++){const j=K[J],ye=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),Le=b(j.internalFormat,ye,oe,j.colorSpace);Ft(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(y),Le,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(y),Le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Le,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(A,y,U){const K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),fe(i.TEXTURE_CUBE_MAP,y.depthTexture);const Oe=r.convert(y.depthTexture.format),ee=r.convert(y.depthTexture.type);let ie;y.depthTexture.format===cs?ie=i.DEPTH_COMPONENT24:y.depthTexture.format===or&&(ie=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,y.width,y.height,0,Oe,ee,null)}}else z(y.depthTexture,0);const j=J.__webglTexture,ye=L(y),oe=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Le=y.depthTexture.format===or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===cs)Ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,oe,j,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,Le,oe,j,0);else if(y.depthTexture.format===or)Ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,oe,j,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,Le,oe,j,0);else throw new Error("Unknown depthTexture format")}function Be(A){const y=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Fe(y.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?Fe(y.__webglFramebuffer[0],A,0):Fe(y.__webglFramebuffer,A,0)}else if(U){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),Ge(y.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ge(y.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,y,U){const K=n.get(A);y!==void 0&&le(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Be(A)}function nt(A){const y=A.texture,U=n.get(A),K=n.get(y);A.addEventListener("dispose",C);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let Le=0;Le<y.mipmaps.length;Le++)U.__webglFramebuffer[oe][Le]=i.createFramebuffer()}else U.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ye)for(let oe=0,Le=J.length;oe<Le;oe++){const Oe=n.get(J[oe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ft(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Le=J[oe];U.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Oe=r.convert(Le.format,Le.colorSpace),ee=r.convert(Le.type),ie=b(Le.internalFormat,Oe,ee,Le.colorSpace,A.isXRRenderTarget===!0),Me=L(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),fe(i.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)le(U.__webglFramebuffer[oe][Le],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le);else le(U.__webglFramebuffer[oe],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,Le=J.length;oe<Le;oe++){const Oe=J[oe],ee=n.get(Oe);let ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),fe(ie,Oe),le(U.__webglFramebuffer,A,Oe,i.COLOR_ATTACHMENT0+oe,ie,0),m(Oe)&&p(ie)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),fe(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)le(U.__webglFramebuffer[Le],A,y,i.COLOR_ATTACHMENT0,oe,Le);else le(U.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}A.depthBuffer&&Be(A)}function ct(A){const y=A.textures;for(let U=0,K=y.length;U<K;U++){const J=y[U];if(m(J)){const j=v(A),ye=n.get(J).__webglTexture;t.bindTexture(j,ye),p(j),t.unbindTexture()}}}const _t=[],Ye=[];function Rt(A){if(A.samples>0){if(Ft(A)===!1){const y=A.textures,U=A.width,K=A.height;let J=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(A),oe=y.length>1;if(oe)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Le=A.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Oe]);const ee=n.get(y[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,K,0,0,U,K,J,i.NEAREST),l===!0&&(_t.length=0,Ye.length=0,_t.push(i.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(_t.push(j),Ye.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Oe]);const ee=n.get(y[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function L(A){return Math.min(s.maxSamples,A.samples)}function Ft(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function rt(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function yt(A,y){const U=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==un&&U!==As&&(tt.getTransfer(U)===dt?(K!==Nn||J!==Sn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",U)),y}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=ne,this.rebindTextures=Wt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RT(i,e){function t(n,s=As){let r;const o=tt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===p0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===m0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===h0)return i.BYTE;if(n===f0)return i.SHORT;if(n===Ra)return i.UNSIGNED_SHORT;if(n===nf)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===g0)return i.ALPHA;if(n===_0)return i.RGB;if(n===Nn)return i.RGBA;if(n===cs)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===of)return i.RED;if(n===af)return i.RED_INTEGER;if(n===go)return i.RG;if(n===lf)return i.RG_INTEGER;if(n===cf)return i.RGBA_INTEGER;if(n===$l||n===Zl||n===Jl||n===Ql)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fd||n===Ud||n===Od||n===Bd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ud)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Od)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kd||n===zd||n===Vd||n===Hd||n===Gd||n===Wd||n===Xd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kd||n===zd)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hd)return r.COMPRESSED_R11_EAC;if(n===Gd)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wd)return r.COMPRESSED_RG11_EAC;if(n===Xd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qd||n===jd||n===Kd||n===Yd||n===$d||n===Zd||n===Jd||n===Qd||n===eh||n===th||n===nh||n===ih||n===sh||n===rh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$d)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===th)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ih)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===ah||n===lh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oh)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===uh||n===dh||n===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ch)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PT=`
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

}`;class IT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new C0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:CT,fragmentShader:PT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LT extends br{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new IT,p={},v=t.getContextAttributes();let b=null,S=null;const T=[],w=[],C=new Ke;let x=null;const M=new jt;M.viewport=new St;const D=new jt;D.viewport=new St;const I=[M,D],F=new Cy;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=T[Y];return re===void 0&&(re=new xu,T[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=T[Y];return re===void 0&&(re=new xu,T[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=T[Y];return re===void 0&&(re=new xu,T[Y]=re),re.getHandSpace()};function z(Y){const re=w.indexOf(Y.inputSource);if(re===-1)return;const le=T[re];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<T.length;Y++){const re=w[Y];re!==null&&(w[Y]=null,T[Y].disconnect(re))}k=null,W=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(b),f=null,h=null,d=null,s=null,S=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ge=null,Fe=null;v.depth&&(Fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?or:cs,Ge=v.stencil?Ca:Ai);const Be={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new vi(h.textureWidth,h.textureHeight,{format:Nn,type:Sn,depthTexture:new Da(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new vi(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Y){for(let re=0;re<Y.removed.length;re++){const le=Y.removed[re],Ge=w.indexOf(le);Ge>=0&&(w[Ge]=null,T[Ge].disconnect(le))}for(let re=0;re<Y.added.length;re++){const le=Y.added[re];let Ge=w.indexOf(le);if(Ge===-1){for(let Be=0;Be<T.length;Be++)if(Be>=w.length){w.push(le),Ge=Be;break}else if(w[Be]===null){w[Be]=le,Ge=Be;break}if(Ge===-1)break}const Fe=T[Ge];Fe&&Fe.connect(le)}}const ne=new P,Q=new P;function he(Y,re,le){ne.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);const Ge=ne.distanceTo(Q),Fe=re.projectionMatrix.elements,Be=le.projectionMatrix.elements,Wt=Fe[14]/(Fe[10]-1),nt=Fe[14]/(Fe[10]+1),ct=(Fe[9]+1)/Fe[5],_t=(Fe[9]-1)/Fe[5],Ye=(Fe[8]-1)/Fe[0],Rt=(Be[8]+1)/Be[0],L=Wt*Ye,Ft=Wt*Rt,rt=Ge/(-Ye+Rt),yt=rt*-Ye;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Fe[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Te=Wt+rt,A=nt+rt,y=L-yt,U=Ft+(Ge-yt),K=ct*nt/A*Te,J=_t*nt/A*Te;Y.projectionMatrix.makePerspective(y,U,K,J,Te,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let re=Y.near,le=Y.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(le=m.depthFar)),F.near=D.near=M.near=re,F.far=D.far=M.far=le,(k!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Ge=Y.parent,Fe=F.cameras;xe(F,Ge);for(let Be=0;Be<Fe.length;Be++)xe(Fe[Be],Ge);Fe.length===2?he(F,M,D):F.projectionMatrix.copy(M.projectionMatrix),fe(Y,F,Ge)};function fe(Y,re,le){le===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_o*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let ke=null;function vt(Y,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ge=!1;le.length!==F.cameras.length&&(F.cameras.length=0,Ge=!0);for(let nt=0;nt<le.length;nt++){const ct=le[nt];let _t=null;if(f!==null)_t=f.getViewport(ct);else{const Rt=d.getViewSubImage(h,ct);_t=Rt.viewport,nt===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let Ye=I[nt];Ye===void 0&&(Ye=new jt,Ye.layers.enable(nt),Ye.viewport=new St,I[nt]=Ye),Ye.matrix.fromArray(ct.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ct.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(_t.x,_t.y,_t.width,_t.height),nt===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ge===!0&&F.cameras.push(Ye)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const nt=d.getDepthInformation(le[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Fe&&Fe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<le.length;nt++){const ct=le[nt].camera;if(ct){let _t=p[ct];_t||(_t=new C0,p[ct]=_t);const Ye=d.getCameraImage(ct);_t.sourceTexture=Ye}}}}for(let le=0;le<T.length;le++){const Ge=w[le],Fe=T[le];Ge!==null&&Fe!==void 0&&Fe.update(Ge,re,c||o)}ke&&ke(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const gt=new B0;gt.setAnimationLoop(vt),this.setAnimationLoop=function(Y){ke=Y},this.dispose=function(){}}}const Js=new Qn,NT=new qe;function DT(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,P0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,b,S){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),b=v.envMap,S=v.envMapRotation;b&&(m.envMap.value=b,Js.copy(S),Js.x*=-1,Js.y*=-1,Js.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(NT.makeRotationFromEuler(Js)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function FT(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=s[v.id];S===void 0&&(g(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",m));const T=b.program;n.updateUBOMapping(v,T);const w=e.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const b=d();v.__bindingPointIndex=b;const S=i.createBuffer(),T=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],S=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,C=S.length;w<C;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,D=x.length;M<D;M++){const I=x[M];if(f(I,w,M,T)===!0){const F=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let z=0;z<k.length;z++){const G=k[z],B=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+W,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,S,T){const w=v.value,C=b+"_"+S;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const x=T[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[C]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function g(v){const b=v.uniforms;let S=0;const T=16;for(let C=0,x=b.length;C<x;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let D=0,I=M.length;D<I;D++){const F=M[D],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,z=k.length;W<z;W++){const G=k[W],B=_(G),ne=S%T,Q=ne%B.boundary,he=ne+Q;S+=Q,he!==0&&T-he<B.storage&&(S+=T-he),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=B.storage}}}const w=S%T;return w>0&&(S+=T-w),v.__size=S,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const UT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function OT(){return ri===null&&(ri=new yf(UT,16,16,go,ls),ri.name="DFG_LUT",ri.minFilter=Pt,ri.magFilter=Pt,ri.wrapS=fi,ri.wrapT=fi,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Lf{constructor(e={}){const{canvas:t=lv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,m=new Set([cf,lf,af]),p=new Set([Sn,Ai,Ra,Ca,sf,rf]),v=new Uint32Array(4),b=new Int32Array(4);let S=null,T=null;const w=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=Yt;let I=0,F=0,k=null,W=-1,z=null;const G=new St,B=new St;let ne=null;const Q=new Ie(0);let he=0,xe=t.width,fe=t.height,ke=1,vt=null,gt=null;const Y=new St(0,0,xe,fe),re=new St(0,0,xe,fe);let le=!1;const Ge=new Sf;let Fe=!1,Be=!1;const Wt=new qe,nt=new P,ct=new St,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Rt(){return k===null?ke:1}let L=n;function Ft(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tf}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),L===null){const O="webgl2";if(L=Ft(O,E),L===null)throw Ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ue("WebGLRenderer: "+E.message),E}let rt,yt,Te,A,y,U,K,J,j,ye,oe,Le,Oe,ee,ie,Me,be,pe,$e,N,ae,se,_e;function te(){rt=new Bb(L),rt.init(),ae=new RT(L,rt),yt=new Pb(L,rt,e,ae),Te=new wT(L,rt),yt.reversedDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),A=new Vb(L),y=new hT,U=new AT(L,rt,Te,y,yt,ae,A),K=new Ob(M),J=new qy(L),se=new Rb(L,J),j=new kb(L,J,A,se),ye=new Gb(L,j,J,se,A),pe=new Hb(L,yt,U),ie=new Ib(y),oe=new dT(M,K,rt,yt,se,ie),Le=new DT(M,y),Oe=new pT,ee=new yT(rt),be=new Ab(M,K,Te,ye,g,l),Me=new TT(M,ye,yt),_e=new FT(L,A,yt,Te),$e=new Cb(L,rt,A),N=new zb(L,rt,A),A.programs=oe.programs,M.capabilities=yt,M.extensions=rt,M.properties=y,M.renderLists=Oe,M.shadowMap=Me,M.state=Te,M.info=A}te(),_!==Sn&&(x=new Xb(_,t.width,t.height,s,r));const q=new LT(M,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(E){E!==void 0&&(ke=E,this.setSize(xe,fe,!1))},this.getSize=function(E){return E.set(xe,fe)},this.setSize=function(E,O,X=!0){if(q.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=E,fe=O,t.width=Math.floor(E*ke),t.height=Math.floor(O*ke),X===!0&&(t.style.width=E+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(xe*ke,fe*ke).floor()},this.setDrawingBufferSize=function(E,O,X){xe=E,fe=O,ke=X,t.width=Math.floor(E*X),t.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,O,X,H){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,X,H),Te.viewport(G.copy(Y).multiplyScalar(ke).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,O,X,H){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,O,X,H),Te.scissor(B.copy(re).multiplyScalar(ke).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){Te.setScissorTest(le=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let H=0;if(E){let V=!1;if(k!==null){const ue=k.texture.format;V=m.has(ue)}if(V){const ue=k.texture.type,ge=p.has(ue),de=be.getClearColor(),Ee=be.getClearAlpha(),Ae=de.r,Ve=de.g,Ze=de.b;ge?(v[0]=Ae,v[1]=Ve,v[2]=Ze,v[3]=Ee,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=Ae,b[1]=Ve,b[2]=Ze,b[3]=Ee,L.clearBufferiv(L.COLOR,0,b))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),X&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),be.dispose(),Oe.dispose(),ee.dispose(),y.dispose(),K.dispose(),ye.dispose(),se.dispose(),_e.dispose(),oe.dispose(),q.dispose(),q.removeEventListener("sessionstart",Mp),q.removeEventListener("sessionend",Sp),Xs.stop()};function Se(E){E.preventDefault(),gc("WebGLRenderer: Context Lost."),D=!0}function ze(){gc("WebGLRenderer: Context Restored."),D=!1;const E=A.autoReset,O=Me.enabled,X=Me.autoUpdate,H=Me.needsUpdate,V=Me.type;te(),A.autoReset=E,Me.enabled=O,Me.autoUpdate=X,Me.needsUpdate=H,Me.type=V}function Mt(E){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ut(E){const O=E.target;O.removeEventListener("dispose",ut),Ii(O)}function Ii(E){Li(E),y.remove(E)}function Li(E){const O=y.get(E).programs;O!==void 0&&(O.forEach(function(X){oe.releaseProgram(X)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,H,V,ue){O===null&&(O=_t);const ge=V.isMesh&&V.matrixWorld.determinant()<0,de=vx(E,O,X,H,V);Te.setMaterial(H,ge);let Ee=X.index,Ae=1;if(H.wireframe===!0){if(Ee=j.getWireframeAttribute(X),Ee===void 0)return;Ae=2}const Ve=X.drawRange,Ze=X.attributes.position;let Ce=Ve.start*Ae,ft=(Ve.start+Ve.count)*Ae;ue!==null&&(Ce=Math.max(Ce,ue.start*Ae),ft=Math.min(ft,(ue.start+ue.count)*Ae)),Ee!==null?(Ce=Math.max(Ce,0),ft=Math.min(ft,Ee.count)):Ze!=null&&(Ce=Math.max(Ce,0),ft=Math.min(ft,Ze.count));const Ct=ft-Ce;if(Ct<0||Ct===1/0)return;se.setup(V,H,de,X,Ee);let Tt,pt=$e;if(Ee!==null&&(Tt=J.get(Ee),pt=N,pt.setIndex(Tt)),V.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Rt()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(V.isLine){let Qt=H.linewidth;Qt===void 0&&(Qt=1),Te.setLineWidth(Qt*Rt()),V.isLineSegments?pt.setMode(L.LINES):V.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else V.isPoints?pt.setMode(L.POINTS):V.isSprite&&pt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)_c("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Qt=V._multiDrawStarts,we=V._multiDrawCounts,xn=V._multiDrawCount,it=Ee?J.get(Ee).bytesPerElement:1,Un=y.get(H).currentProgram.getUniforms();for(let ii=0;ii<xn;ii++)Un.setValue(L,"_gl_DrawID",ii),pt.render(Qt[ii]/it,we[ii])}else if(V.isInstancedMesh)pt.renderInstances(Ce,Ct,V.count);else if(X.isInstancedBufferGeometry){const Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,Qt);pt.renderInstances(Ce,Ct,we)}else pt.render(Ce,Ct)};function yp(E,O,X){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,sl(E,O,X),E.side=as,E.needsUpdate=!0,sl(E,O,X),E.side=sn):sl(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),T=ee.get(X),T.init(O),C.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const de=ue[ge];yp(de,X,V),H.add(de)}else yp(ue,X,V),H.add(ue)}),T=C.pop(),H},this.compileAsync=function(E,O,X=null){const H=this.compile(E,O,X);return new Promise(V=>{function ue(){if(H.forEach(function(ge){y.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){V(E);return}setTimeout(ue,10)}rt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let lu=null;function xx(E){lu&&lu(E)}function Mp(){Xs.stop()}function Sp(){Xs.start()}const Xs=new B0;Xs.setAnimationLoop(xx),typeof self<"u"&&Xs.setContext(self),this.setAnimationLoop=function(E){lu=E,q.setAnimationLoop(E),E===null?Xs.stop():Xs.start()},q.addEventListener("sessionstart",Mp),q.addEventListener("sessionend",Sp),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,H=x!==null&&(k===null||X)&&x.begin(M,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,k),T=ee.get(E,C.length),T.init(O),C.push(T),Wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(Wt,pi,O.reversedDepth),Be=this.localClippingEnabled,Fe=ie.init(this.clippingPlanes,Be),S=Oe.get(E,w.length),S.init(),w.push(S),q.enabled===!0&&q.isPresenting===!0){const ge=M.xr.getDepthSensingMesh();ge!==null&&cu(ge,O,-1/0,M.sortObjects)}cu(E,O,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(vt,gt),Ye=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ye&&be.addToRenderList(S,E),this.info.render.frame++,Fe===!0&&ie.beginShadows();const V=T.state.shadowsArray;if(Me.render(V,E,O),Fe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const ge=S.opaque,de=S.transmissive;if(T.setupLights(),O.isArrayCamera){const Ee=O.cameras;if(de.length>0)for(let Ae=0,Ve=Ee.length;Ae<Ve;Ae++){const Ze=Ee[Ae];Ep(ge,de,E,Ze)}Ye&&be.render(E);for(let Ae=0,Ve=Ee.length;Ae<Ve;Ae++){const Ze=Ee[Ae];bp(S,E,Ze,Ze.viewport)}}else de.length>0&&Ep(ge,de,E,O),Ye&&be.render(E),bp(S,E,O)}k!==null&&F===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),H&&x.end(M),E.isScene===!0&&E.onAfterRender(M,E,O),se.resetDefaultState(),W=-1,z=null,C.pop(),C.length>0?(T=C[C.length-1],Fe===!0&&ie.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function cu(E,O,X,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ge.intersectsSprite(E)){H&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Wt);const ge=ye.update(E),de=E.material;de.visible&&S.push(E,ge,de,X,ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ge.intersectsObject(E))){const ge=ye.update(E),de=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ct.copy(ge.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(Wt)),Array.isArray(de)){const Ee=ge.groups;for(let Ae=0,Ve=Ee.length;Ae<Ve;Ae++){const Ze=Ee[Ae],Ce=de[Ze.materialIndex];Ce&&Ce.visible&&S.push(E,ge,Ce,X,ct.z,Ze)}}else de.visible&&S.push(E,ge,de,X,ct.z,null)}}const ue=E.children;for(let ge=0,de=ue.length;ge<de;ge++)cu(ue[ge],O,X,H)}function bp(E,O,X,H){const{opaque:V,transmissive:ue,transparent:ge}=E;T.setupLightsView(X),Fe===!0&&ie.setGlobalState(M.clippingPlanes,X),H&&Te.viewport(G.copy(H)),V.length>0&&il(V,O,X),ue.length>0&&il(ue,O,X),ge.length>0&&il(ge,O,X),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ep(E,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ce=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new vi(1,1,{generateMipmaps:!0,type:Ce?ls:Sn,minFilter:Vi,samples:yt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ue=T.state.transmissionRenderTarget[H.id],ge=H.viewport||G;ue.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),Ee=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(ue),M.getClearColor(Q),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&be.render(X);const Ve=M.toneMapping;M.toneMapping=xi;const Ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Fe===!0&&ie.setGlobalState(M.clippingPlanes,H),il(E,X,H),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ft=0,Ct=O.length;ft<Ct;ft++){const Tt=O[ft],{object:pt,geometry:Qt,material:we,group:xn}=Tt;if(we.side===sn&&pt.layers.test(H.layers)){const it=we.side;we.side=pn,we.needsUpdate=!0,Tp(pt,X,H,Qt,we,xn),we.side=it,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}M.setRenderTarget(de,Ee,Ae),M.setClearColor(Q,he),Ze!==void 0&&(H.viewport=Ze),M.toneMapping=Ve}function il(E,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ue=E.length;V<ue;V++){const ge=E[V],{object:de,geometry:Ee,group:Ae}=ge;let Ve=ge.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),de.layers.test(X.layers)&&Tp(de,O,X,Ee,Ve,Ae)}}function Tp(E,O,X,H,V,ue){E.onBeforeRender(M,O,X,H,V,ue),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(M,O,X,H,E,ue),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,M.renderBufferDirect(X,O,H,V,E,ue),V.side=as,V.needsUpdate=!0,M.renderBufferDirect(X,O,H,V,E,ue),V.side=sn):M.renderBufferDirect(X,O,H,V,E,ue),E.onAfterRender(M,O,X,H,V,ue)}function sl(E,O,X){O.isScene!==!0&&(O=_t);const H=y.get(E),V=T.state.lights,ue=T.state.shadowsArray,ge=V.state.version,de=oe.getParameters(E,V.state,ue,O,X),Ee=oe.getProgramCacheKey(de);let Ae=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=K.get(E.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ut),Ae=new Map,H.programs=Ae);let Ze=Ae.get(Ee);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===ge)return Ap(E,de),Ze}else de.uniforms=oe.getUniforms(E),E.onBeforeCompile(de,M),Ze=oe.acquireProgram(de,Ee),Ae.set(Ee,Ze),H.uniforms=de.uniforms;const Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Ap(E,de),H.needsLights=Mx(E),H.lightsStateVersion=ge,H.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=Ze,H.uniformsList=null,Ze}function wp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ec.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ap(E,O){const X=y.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function vx(E,O,X,H,V){O.isScene!==!0&&(O=_t),U.resetTextureUnits();const ue=O.fog,ge=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,de=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:un,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=K.get(H.envMap||ge,Ee),Ve=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let Tt=xi;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=M.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=pt!==void 0?pt.length:0,we=y.get(H),xn=T.state.lights;if(Fe===!0&&(Be===!0||E!==z)){const Xt=E===z&&H.id===W;ie.setState(H,E,Xt)}let it=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xn.state.version||we.outputColorSpace!==de||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ae||H.fog===!0&&we.fog!==ue||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ve||we.vertexTangents!==Ze||we.morphTargets!==Ce||we.morphNormals!==ft||we.morphColors!==Ct||we.toneMapping!==Tt||we.morphTargetsCount!==Qt)&&(it=!0):(it=!0,we.__version=H.version);let Un=we.currentProgram;it===!0&&(Un=sl(H,O,V));let ii=!1,qs=!1,Ar=!1;const xt=Un.getUniforms(),Kt=we.uniforms;if(Te.useProgram(Un.program)&&(ii=!0,qs=!0,Ar=!0),H.id!==W&&(W=H.id,qs=!0),ii||z!==E){Te.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",E.projectionMatrix),xt.setValue(L,"viewMatrix",E.matrixWorldInverse);const gs=xt.map.cameraPosition;gs!==void 0&&gs.setValue(L,nt.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,qs=!0,Ar=!0)}if(we.needsLights&&(xn.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,U),xn.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",xn.state.spotShadowMap,U),xn.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",xn.state.pointShadowMap,U)),V.isSkinnedMesh){xt.setOptional(L,V,"bindMatrix"),xt.setOptional(L,V,"bindMatrixInverse");const Xt=V.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),xt.setValue(L,"boneTexture",Xt.boneTexture,U))}V.isBatchedMesh&&(xt.setOptional(L,V,"batchingTexture"),xt.setValue(L,"batchingTexture",V._matricesTexture,U),xt.setOptional(L,V,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",V._indirectTexture,U),xt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",V._colorsTexture,U));const ms=X.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&pe.update(V,X,Un),(qs||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,xt.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Kt.envMapIntensity.value=O.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=OT()),qs&&(xt.setValue(L,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&yx(Kt,Ar),ue&&H.fog===!0&&Le.refreshFogUniforms(Kt,ue),Le.refreshMaterialUniforms(Kt,H,ke,fe,T.state.transmissionRenderTarget[E.id]),ec.upload(L,wp(we),Kt,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ec.upload(L,wp(we),Kt,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(L,"center",V.center),xt.setValue(L,"modelViewMatrix",V.modelViewMatrix),xt.setValue(L,"normalMatrix",V.normalMatrix),xt.setValue(L,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xt=H.uniformsGroups;for(let gs=0,Rr=Xt.length;gs<Rr;gs++){const Rp=Xt[gs];_e.update(Rp,Un),_e.bind(Rp,Un)}}return Un}function yx(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Mx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,O,X){const H=y.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=O,y.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const X=y.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Sx=L.createFramebuffer();this.setRenderTarget=function(E,O=0,X=0){k=E,I=O,F=X;let H=null,V=!1,ue=!1;if(E){const de=y.get(E);if(de.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(L.FRAMEBUFFER,de.__webglFramebuffer),G.copy(E.viewport),B.copy(E.scissor),ne=E.scissorTest,Te.viewport(G),Te.scissor(B),Te.setScissorTest(ne),W=-1;return}else if(de.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(de.__hasExternalTextures)U.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(de.__boundDepthTexture!==Ve){if(Ve!==null&&y.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ue=!0);const Ae=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?H=Ae[O][X]:H=Ae[O],V=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?H=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,G.copy(E.viewport),B.copy(E.scissor),ne=E.scissorTest}else G.copy(Y).multiplyScalar(ke).floor(),B.copy(re).multiplyScalar(ke).floor(),ne=le;if(X!==0&&(H=Sx),Te.bindFramebuffer(L.FRAMEBUFFER,H)&&Te.drawBuffers(E,H),Te.viewport(G),Te.scissor(B),Te.setScissorTest(ne),V){const de=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,X)}else if(ue){const de=O;for(let Ee=0;Ee<E.textures.length;Ee++){const Ae=y.get(E.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,de)}}else if(E!==null&&X!==0){const de=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(E,O,X,H,V,ue,ge,de=0){if(!(E&&E.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ae=E.textures[de],Ve=Ae.format,Ze=Ae.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),!yt.textureFormatReadable(Ve)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ze)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&X>=0&&X<=E.height-V&&L.readPixels(O,X,H,V,ae.convert(Ve),ae.convert(Ze),ue)}finally{const Ae=k!==null?y.get(k).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,H,V,ue,ge,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(O>=0&&O<=E.width-H&&X>=0&&X<=E.height-V){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ae=E.textures[de],Ve=Ae.format,Ze=Ae.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),!yt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(O,X,H,V,ae.convert(Ve),ae.convert(Ze),0);const ft=k!==null?y.get(k).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,ft);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await cv(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ce),L.deleteSync(Ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){const H=Math.pow(2,-X),V=Math.floor(E.image.width*H),ue=Math.floor(E.image.height*H),ge=O!==null?O.x:0,de=O!==null?O.y:0;U.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ge,de,V,ue),Te.unbindTexture()};const bx=L.createFramebuffer(),Ex=L.createFramebuffer();this.copyTextureToTexture=function(E,O,X=null,H=null,V=0,ue=0){let ge,de,Ee,Ae,Ve,Ze,Ce,ft,Ct;const Tt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(X!==null)ge=X.max.x-X.min.x,de=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Ve=X.min.y,Ze=X.isBox3?X.min.z:0;else{const Kt=Math.pow(2,-V);ge=Math.floor(Tt.width*Kt),de=Math.floor(Tt.height*Kt),E.isDataArrayTexture?Ee=Tt.depth:E.isData3DTexture?Ee=Math.floor(Tt.depth*Kt):Ee=1,Ae=0,Ve=0,Ze=0}H!==null?(Ce=H.x,ft=H.y,Ct=H.z):(Ce=0,ft=0,Ct=0);const pt=ae.convert(O.format),Qt=ae.convert(O.type);let we;O.isData3DTexture?(U.setTexture3D(O,0),we=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),we=L.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),we=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const xn=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),ii=L.getParameter(L.UNPACK_SKIP_ROWS),qs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const Ar=E.isDataArrayTexture||E.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Kt=y.get(E),ms=y.get(O),Xt=y.get(Kt.__renderTarget),gs=y.get(ms.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let Rr=0;Rr<Ee;Rr++)Ar&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(E).__webglTexture,V,Ze+Rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(O).__webglTexture,ue,Ct+Rr)),L.blitFramebuffer(Ae,Ve,ge,de,Ce,ft,ge,de,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||y.has(E)){const Kt=y.get(E),ms=y.get(O);Te.bindFramebuffer(L.READ_FRAMEBUFFER,bx),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ex);for(let Xt=0;Xt<Ee;Xt++)Ar?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,V,Ze+Xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,V),xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ms.__webglTexture,ue,Ct+Xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ms.__webglTexture,ue),V!==0?L.blitFramebuffer(Ae,Ve,ge,de,Ce,ft,ge,de,L.COLOR_BUFFER_BIT,L.NEAREST):xt?L.copyTexSubImage3D(we,ue,Ce,ft,Ct+Xt,Ae,Ve,ge,de):L.copyTexSubImage2D(we,ue,Ce,ft,Ae,Ve,ge,de);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,ue,Ce,ft,Ct,ge,de,Ee,pt,Qt,Tt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(we,ue,Ce,ft,Ct,ge,de,Ee,pt,Tt.data):L.texSubImage3D(we,ue,Ce,ft,Ct,ge,de,Ee,pt,Qt,Tt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ce,ft,ge,de,pt,Qt,Tt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ce,ft,Tt.width,Tt.height,pt,Tt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ce,ft,ge,de,pt,Qt,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,ii),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qs),ue===0&&O.generateMipmaps&&L.generateMipmap(we),Te.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){I=0,F=0,k=null,Te.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function Wm(i,e){if(e===Zx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fh||e===x0){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===fh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Xc(i){const e=new Map,t=new Map,n=i.clone();return W0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function W0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)W0(i.children[n],e.children[n],t)}class BT extends Uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new QT(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new JT(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new Xm(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xm(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nw(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=_a.extractUrlBase(e);o=_a.resolveURL(c,this.path)}else o=_a.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new D0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===X0){try{o[Qe.KHR_BINARY_GLTF]=new iw(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:o[d]=new VT;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new sw(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[d]=new rw;break;case Qe.KHR_MESH_QUANTIZATION:o[d]=new ow;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function kT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Dt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zT{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],un);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new O0(u),c.distance=d;break;case"spot":c=new by(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class VT{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return bt}extendParams(e,t,n){const s=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(s)}}class HT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class GT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(r,r)}return Promise.all(s)}}class WT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class XT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class qT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class jT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class KT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],un),Promise.all(s)}}class YT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class $T{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],un),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Yt)),Promise.all(s)}}class ZT{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class JT{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class QT{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ew{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class tw{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Xm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class nw{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new qe,m=new P,p=new mn,v=new P(1,1,1),b=new $v(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),b.setMatrixAt(S,_.compose(m,p,v));for(const S in l)if(S==="_COLOR_0"){const T=l[S];b.instanceColor=new mh(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Et.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const X0="glTF",Qo=12,qm={JSON:1313821514,BIN:5130562};class iw{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==X0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qo,r=new DataView(e,Qo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qm.JSON){const c=new Uint8Array(e,Qo+o,a);this.content=n.decode(c)}else if(l===qm.BIN){const c=Qo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Mh[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Mh[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=eo[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},a,c,un,h)})})}}class rw{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ow{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class q0 extends No{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,v=1-m,b=p-h+d;for(let S=0;S!==a;S++){const T=o[_+S+a],w=o[_+S+l]*u,C=o[g+S+a],x=o[g+S]*u;r[S]=v*T+b*w+m*C+p*x}return r}}const aw=new mn;class lw extends q0{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return aw.fromArray(r).normalize().toArray(r),r}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jm={9728:Bt,9729:Pt,9984:d0,9985:Yl,9986:la,9987:Vi},Km={33071:fi,33648:fc,10497:mo},qu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cw={CUBICSPLINE:void 0,LINEAR:Ia,STEP:Pa},ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:as})),i.DefaultMaterial}function Qs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dw(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function hw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fw(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ku(t.attributes):e=i.indices+":"+Ku(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ku(i.targets[n]);return e}function Ku(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mw=new qe;class gw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new My(this.options.manager):this.textureLoader=new Ay(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new D0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Qs(r,a,s),ai(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(_a.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=qu[s.type],a=eo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new zt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=qu[s.type],c=eo[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(v);b||(_=new c(a,p*f,s.count*f/u),b=new Gv(_,f/u),t.cache.add(v,b)),m=new vf(b,l,h%f/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new zt(_,l,g);if(s.sparse!==void 0){const p=qu.SCALAR,v=eo[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new v(o[1],b,s.sparse.count*p),w=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=T.length;C<x;C++){const M=T[C];if(m.setX(M,w[C*l]),l>=2&&m.setY(M,w[C*l+1]),l>=3&&m.setZ(M,w[C*l+2]),l>=4&&m.setW(M,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=jm[h.magFilter]||Pt,u.minFilter=jm[h.minFilter]||Vi,u.wrapS=Km[h.wrapS]||mo,u.wrapT=Km[h.wrapT]||mo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==Pt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new kt(_);m.needsUpdate=!0,h(m)}),t.load(_a.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),ai(d,o),d.userData.mimeType=o.mimeType||pw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lo,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new bf,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ti}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const d=s[Qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],un),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Yt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);const u=r.alphaMode||ju.OPAQUE;if(u===ju.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ju.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bt){const d=r.emissiveFactor;a.emissive=new Ie().setRGB(d[0],d[1],d[2],un)}return r.emissiveTexture!==void 0&&o!==bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),ai(d,r),t.associations.set(d,{materials:e}),r.extensions&&Qs(s,d,r),d})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ym(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=fw(c),d=s[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ym(new At,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?uw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const v=c[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new jv(_,v):new Xe(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=Wm(p.geometry,x0):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=Wm(p.geometry,fh));else if(m.mode===Rn.LINES)p=new A0(_,v);else if(m.mode===Rn.LINE_STRIP)p=new Ef(_,v);else if(m.mode===Rn.LINE_LOOP)p=new ey(_,v);else if(m.mode===Rn.POINTS)p=new ja(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&Qs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Qs(s,d[0],r),d[0];const h=new fn;r.extensions&&Qs(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(M0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new qe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mf(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let b=0,S=h.length;b<S;b++){const T=h[b],w=f[b],C=g[b],x=_[b],M=m[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const D=n._createAnimationTracks(T,w,C,x,M);if(D)for(let I=0;I<D.length;I++)p.push(D[I])}const v=new _h(r,void 0,p);return ai(v,s),v})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,mw)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new P().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new w0:c.length>1?u=new fn:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&Qs(n,u,r),r.matrix!==void 0){const d=new qe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new fn;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&Qs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?r.add(Xc(h)):r.add(h)}const c=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof yi||h instanceof kt)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];bs[r.path]===bs.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(bs[r.path]){case bs.weights:c=vo;break;case bs.rotation:c=yo;break;case bs.translation:case bs.scale:c=Mo;break;default:n.itemSize===1?c=vo:c=Mo;break}const u=s.interpolation!==void 0?cw[s.interpolation]:Ia,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+bs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof yo?lw:q0;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _w(i,e,t){const n=e.attributes,s=new Tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Sh(eo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=Sh(eo[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ci;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ym(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Mh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return tt.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),ai(i,e),_w(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dw(i,e.targets,t):i})}const xw="serviceWorker"in navigator&&window.isSecureContext;xw&&window.addEventListener("load",()=>{let i=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{i||(i=!0,window.location.reload())}),navigator.serviceWorker.register("/sw.js").then(e=>{e.update().catch(()=>{})}).catch(()=>{})});const us=document.querySelector("#app");us.innerHTML=`
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
  <div id="lobbyMatrixBackdrop" aria-hidden="true"></div>

  <section id="nameGate" class="hidden">
    <div class="name-gate-card">
      <h1>Koketria Game</h1>
      <p>Ingresa tu nombre para entrar al lobby</p>
      <label>
        Nombre de jugador
        <input id="nameGateInput" maxlength="24" placeholder="Neo" autocomplete="off" />
      </label>
      <button id="nameGateSubmitBtn" type="button">Entrar al Lobby</button>
      <p id="nameGateError" class="error hidden"></p>
    </div>
  </section>

  <section id="lobby" class="hidden">
    <div class="lobby-layout">
      <aside class="lobby-side lobby-left-side">
        <h3>Conectados en Lobby</h3>
        <div id="lobbyUsersList" class="lobby-users-list"></div>
        <h3>Chat Lobby</h3>
        <div id="lobbyChatLog" class="lobby-chat-log"></div>
        <div class="lobby-chat-input">
          <input id="lobbyChatInput" type="text" maxlength="180" placeholder="Escribe para el lobby..." autocomplete="off" />
          <button id="lobbyChatSendBtn" type="button">Enviar</button>
        </div>
      </aside>
      <div class="lobby-main">
        <h1>Koketria Game</h1>
        <p id="connectionStatus">Conectando al backend...</p>
        <input id="playerName" type="hidden" />
        <p id="playerNameBadge" class="player-name-badge">Jugador: -</p>
        <label>
          Personaje
          <select id="characterSelect">
            <option value="">Cargando...</option>
          </select>
        </label>
        <div id="characterPreview" class="character-preview"></div>
        <div class="lobby-actions">
          <button id="refreshRoomsBtn" type="button">Refrescar</button>
          <button id="createVersusBtn" type="button">Crear Versusmatch</button>
          <button id="profileLogoutBtn" type="button">Salir</button>
          <a id="mainPortalLink" class="lobby-link-btn" href="https://misterrii.com">Web principal</a>
        </div>
        <div class="lobby-music-row">
          <label for="lobbyMusicVolume">Volumen música lobby</label>
          <input id="lobbyMusicVolume" type="range" min="0" max="1" step="0.01" />
          <span id="lobbyMusicVolumeValue">100%</span>
        </div>
        <p id="lobbyError" class="error hidden"></p>
      </div>
      <aside class="lobby-side lobby-right-side">
        <h3>Salas activas</h3>
        <div id="roomList" class="room-list"></div>
      </aside>
    </div>
  </section>

  <section id="versusLobby" class="hidden">
    <div class="versus-card">
      <div class="versus-layout">
        <div class="versus-main">
          <h2>Lobby 2 - Versusmatch</h2>
          <p id="versusRoomInfo">Sala: -</p>
          <label>
            Modalidad
            <select id="versusTypeSelect">
              <option value="">Selecciona tipo...</option>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
            </select>
          </label>
          <p id="versusWaitingInfo">Esperando jugadores...</p>
          <div id="versusTeams" class="versus-teams">
            <div class="versus-team team-red">
              <h3>Equipo Rojo</h3>
              <div id="versusLeftPlayers" class="versus-players"></div>
            </div>
            <div class="versus-team team-blue">
              <h3>Equipo Azul</h3>
              <div id="versusRightPlayers" class="versus-players"></div>
            </div>
          </div>
          <div class="versus-bottom-bar">
            <div class="lobby-actions versus-actions">
              <button id="versusReadyBtn" type="button">Ready: OFF</button>
              <button id="versusStartBtn" type="button">Iniciar partida</button>
              <button id="versusLeaveBtn" type="button">Volver al lobby</button>
            </div>
            <div class="versus-chat-box">
              <div class="versus-chat-input">
                <input id="versusChatInput" type="text" maxlength="180" placeholder="Escribe para el lobby 2..." autocomplete="off" />
                <button id="versusChatSendBtn" type="button">Enviar</button>
              </div>
            </div>
          </div>
          <div class="lobby-music-row versus-music-row">
            <label for="versusLobbyMusicVolume">Volumen música lobby1</label>
            <input id="versusLobbyMusicVolume" type="range" min="0" max="1" step="0.01" />
            <span id="versusLobbyMusicVolumeValue">100%</span>
          </div>
          <p id="versusHint">Las partidas versus aparecen en estado waiting hasta completar jugadores.</p>
        </div>
        <div class="versus-chat-side">
          <h3>Chat Lobby 2</h3>
          <div id="versusChatLog" class="versus-chat-log"></div>
        </div>
      </div>
    </div>
  </section>

  <div id="hud">
    <div id="teamScoreHud" class="team-score-hud hidden">
      <span id="teamScoreRed" class="team-score red">ROJO 0</span>
      <span id="teamScoreBlue" class="team-score blue">AZUL 0</span>
      <span id="teamScoreTarget" class="team-score-target">META 10</span>
    </div>

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
      <p>Frame ms avg/p95: <span id="frameMsValue">0.0 / 0.0</span></p>
      <p>Latencia: <span id="latencyValue">--</span></p>
      <p>ACK RTT avg/p95: <span id="ackRttValue">0.0 / 0.0</span></p>
      <p>Shot ACK avg/p95 pend/s: <span id="shotAckValue">0.0 / 0.0 / 0 / 0.0</span></p>
      <p>WS out msg/s kb/s: <span id="wsOutValue">0.0 / 0.0</span></p>
      <p>Move send/s pendientes: <span id="moveFlowValue">0.0 / 0</span></p>
      <p>Draw calls: <span id="drawCallsValue">0</span></p>
      <p>Triángulos: <span id="trianglesValue">0</span></p>
      <p>Geometrías: <span id="geometriesValue">0</span></p>
      <p>Texturas: <span id="texturesValue">0</span></p>
      <p>VFX activos: <span id="vfxValue">0</span></p>
      <p>Pred err avg/p95: <span id="predErrValue">0.00 / 0.00</span></p>
      <p>Correcciones/s: <span id="corrRateValue">0.00</span></p>
      <p>Corr soft/hard s: <span id="corrSplitValue">0.00 / 0.00</span></p>
      <p>Late ACK/s: <span id="lateAckRateValue">0.00</span></p>
      <p>Remote interp/extrap ms: <span id="remoteNetWindowValue">0 / 0</span></p>
      <p>Streak corr max: <span id="corrStreakValue">0 / 0</span></p>
      <p>Velocidad local: <span id="localSpeedValue">0.00</span></p>
      <p>Bypass colisión ms: <span id="collisionBypassValue">0</span></p>
      <p>Map sync: <span id="mapSyncValue">-</span></p>
      <p>Objetivo comp: <span id="perfGoalValue">-</span></p>
      <p>Runtime: <span id="runtimeHealthValue">OK</span></p>
    </div>
  </div>

  <div id="respawnScreen" class="hidden">
    <div class="respawn-card">
      <h2>Eliminado</h2>
      <p>Respawn en <strong id="respawnCounter">5</strong>s</p>
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

  <div id="mobileControls" class="mobile-controls hidden">
    <div id="mobileLookZone" class="mobile-look-zone"></div>
    <button id="mobileOptionsBtn" type="button" class="mobile-menu-btn">ESC</button>
    <div class="mobile-left">
      <div id="mobileJoystick" class="mobile-joystick">
        <div class="mobile-joystick-base"></div>
        <div id="mobileJoystickThumb" class="mobile-joystick-thumb"></div>
      </div>
    </div>
    <div class="mobile-right">
      <button id="mobileJumpBtn" type="button" class="mobile-btn jump">Saltar</button>
      <button id="mobileSpecialBtn" type="button" class="mobile-btn special">Especial</button>
      <button id="mobileFireBtn" type="button" class="mobile-btn fire">Ataque</button>
    </div>
  </div>
  <div id="mobileFullscreenPrompt" class="mobile-fullscreen-prompt hidden">
    <div class="mobile-fullscreen-card">
      <h3>Modo Pantalla Completa</h3>
      <p>Para jugar mejor en celular, activa pantalla completa en horizontal.</p>
      <div class="mobile-fullscreen-actions">
        <button id="mobileFsAcceptBtn" type="button">Pantalla completa</button>
        <button id="mobileFsSkipBtn" type="button" class="secondary">Ahora no</button>
      </div>
    </div>
  </div>

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
  <div id="killFeed" class="kill-feed"></div>

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
`;const mi=document.querySelector("#bootLoader"),$m=document.querySelector("#bootLoaderText"),Zm=document.querySelector("#bootLoaderFill"),Jm=document.querySelector("#bootLoaderPercent"),Qm=document.querySelector("#nameGate"),gi=document.querySelector("#nameGateInput"),vw=document.querySelector("#nameGateSubmitBtn"),ea=document.querySelector("#nameGateError"),Ji=document.querySelector("#lobby"),Yu=document.querySelector("#connectionStatus"),Qi=document.querySelector("#playerName"),eg=document.querySelector("#playerNameBadge"),$t=document.querySelector("#characterSelect"),$r=document.querySelector("#characterPreview"),yw=document.querySelector("#refreshRoomsBtn"),Mw=document.querySelector("#createVersusBtn"),Sw=document.querySelector("#profileLogoutBtn"),tg=document.querySelector("#mainPortalLink"),yc=document.querySelector("#lobbyMusicVolume"),ng=document.querySelector("#lobbyMusicVolumeValue"),$u=document.querySelector("#roomList"),Nl=document.querySelector("#lobbyError"),Zu=document.querySelector("#lobbyUsersList"),Dl=document.querySelector("#lobbyChatLog"),to=document.querySelector("#lobbyChatInput"),bw=document.querySelector("#lobbyChatSendBtn"),ur=document.querySelector("#versusLobby"),Mc=document.querySelector("#versusLobbyMusicVolume"),ig=document.querySelector("#versusLobbyMusicVolumeValue"),Ew=document.querySelector("#versusRoomInfo"),Sc=document.querySelector("#versusTypeSelect"),Tw=document.querySelector("#versusWaitingInfo"),Ju=document.querySelector("#versusLeftPlayers"),Qu=document.querySelector("#versusRightPlayers"),Fl=document.querySelector("#versusHint"),bh=document.querySelector("#versusReadyBtn"),j0=document.querySelector("#versusStartBtn"),ww=document.querySelector("#versusLeaveBtn"),Ul=document.querySelector("#versusChatLog"),no=document.querySelector("#versusChatInput"),Aw=document.querySelector("#versusChatSendBtn"),sg=document.querySelector("#matchInfo"),rg=document.querySelector("#respawnScreen"),Rw=document.querySelector("#respawnCounter"),K0=document.querySelector("#winnerScreen"),ed=document.querySelector("#winnerText"),Eh=document.querySelector("#winnerCounter"),td=document.querySelector("#damageOverlay"),Ol=document.querySelector("#damageIndicator"),og=document.querySelector("#scoreboard"),ag=document.querySelector("#scoreboardBody"),Cw=document.querySelector("#healthStat"),Pw=document.querySelector("#shieldStat"),Iw=document.querySelector("#ammoStat"),nd=document.querySelector("#specialStat"),Lw=document.querySelector("#healthSideLabel"),Nw=document.querySelector("#shieldSideLabel"),Dw=document.querySelector("#ammoSideLabel"),ta=document.querySelector("#abilityHud"),lg=document.querySelector("#abilityCooldownText"),cg=document.querySelector("#abilityCooldownFill"),Fw=document.querySelector("#healthBarFill"),Uw=document.querySelector("#shieldBarFill"),Ow=document.querySelector("#ammoBarFill"),xa=document.querySelector("#teamScoreHud"),ug=document.querySelector("#teamScoreRed"),dg=document.querySelector("#teamScoreBlue"),hg=document.querySelector("#teamScoreTarget"),Bw=document.querySelector("#stats"),fg=document.querySelector("#roomHud"),pg=document.querySelector("#stateHud"),mg=document.querySelector("#weatherHud"),gg=document.querySelector("#playersHud"),_g=document.querySelector("#perfPanel"),kw=document.querySelector("#fpsValue"),zw=document.querySelector("#frameMsValue"),Vw=document.querySelector("#latencyValue"),Hw=document.querySelector("#ackRttValue"),Gw=document.querySelector("#shotAckValue"),Ww=document.querySelector("#wsOutValue"),Xw=document.querySelector("#moveFlowValue"),qw=document.querySelector("#drawCallsValue"),jw=document.querySelector("#trianglesValue"),Kw=document.querySelector("#geometriesValue"),Yw=document.querySelector("#texturesValue"),$w=document.querySelector("#vfxValue"),Zw=document.querySelector("#predErrValue"),Jw=document.querySelector("#corrRateValue"),Qw=document.querySelector("#corrSplitValue"),eA=document.querySelector("#lateAckRateValue"),tA=document.querySelector("#remoteNetWindowValue"),nA=document.querySelector("#corrStreakValue"),iA=document.querySelector("#localSpeedValue"),sA=document.querySelector("#collisionBypassValue"),xg=document.querySelector("#mapSyncValue"),rA=document.querySelector("#perfGoalValue"),oA=document.querySelector("#runtimeHealthValue"),id=document.querySelector("#hostControls"),Y0=document.querySelector("#startGameBtn"),$0=document.querySelector("#endGameBtn"),aA=document.querySelector("#leaveRoomHudBtn"),Nf=document.querySelector("#chatFeed"),Z0=document.querySelector("#chatPanel"),Bl=document.querySelector("#chatLog"),na=document.querySelector("#killFeed"),J0=document.querySelector("#chatInputWrap"),bc=document.querySelector("#chatInput"),ia=document.querySelector("#crosshair"),Th=document.querySelector("#mobileControls"),ki=document.querySelector("#mobileLookZone"),zn=document.querySelector("#mobileJoystick"),Ls=document.querySelector("#mobileJoystickThumb"),er=document.querySelector("#mobileFireBtn"),vg=document.querySelector("#mobileSpecialBtn"),yg=document.querySelector("#mobileJumpBtn"),Mg=document.querySelector("#mobileOptionsBtn"),Ec=document.querySelector("#mobileFullscreenPrompt"),Df=document.querySelector("#mobileFsAcceptBtn"),Ff=document.querySelector("#mobileFsSkipBtn");document.querySelector("#teamAimIndicator");document.querySelector("#teamMiniMap");const Q0=document.querySelector("#optionsScreen"),wh=document.querySelector("#optMouseSensitivity"),e_=document.querySelector("#optMouseSensitivityValue"),Ah=document.querySelector("#optMasterVolume"),t_=document.querySelector("#optMasterVolumeValue"),Rh=document.querySelector("#optMusicVolume"),n_=document.querySelector("#optMusicVolumeValue"),Ch=document.querySelector("#optSfxVolume"),i_=document.querySelector("#optSfxVolumeValue"),Ph=document.querySelector("#optFov"),s_=document.querySelector("#optFovValue"),Ih=document.querySelector("#optShowPerf"),lA=document.querySelector("#optResumeBtn"),cA=document.querySelector("#optLeaveLobbyBtn"),R={ws:null,self:null,rooms:[],joinedRoom:null,profileReady:!1,lobbyUsers:[],remotePlayers:new Map,lastStateSentAt:0,showMatchInfo:!1,showScoreboard:!1,showPerf:!1,showHitboxDebug:!1,fps:0,latencyMs:null},Ot={drawCalls:0,triangles:0,geometries:0,textures:0,vfx:0},$={frameMsSamples:[],ackRttSamples:[],shotAckSamples:[],shotAcksInWindow:0,shotAcksPerSec:0,wsOutMsgsInWindow:0,wsOutBytesInWindow:0,wsOutMsgsPerSec:0,wsOutKbps:0,moveMsgsInWindow:0,moveMsgsPerSec:0,softCorrectionsInWindow:0,softCorrectionsPerSec:0,hardCorrectionsInWindow:0,hardCorrectionsPerSec:0,correctionStreak:0,correctionStreakMax:0,lastCorrectionAt:0,lastFrameAt:performance.now(),localSpeed:0,freezeEventsInWindow:0,freezeEventsPerSec:0},Sg={maxCorrectionsPerSec:6,maxPredErrP95:2},hn={animateErrors:0,lastAnimateErrorAt:0,lastLoggedAt:0,webglContextLosses:0,freezeWarnUntil:0,freezeSample:{at:0,x:0,z:0}},jn=[],bg=40,uA=8e3,Kn=[],Eg=8,dA=7e3,ua=[],Tg=80,Gi=[],wg=60;let es=!1,Er=!1;const r_="koketria_settings_v1",Uf="koketria_player_name_v1",Pe={mouseSensitivity:1,masterVolume:1,musicVolume:1,sfxVolume:1,fov:75,showPerfByDefault:!1},sd=["battle1","battle2","battle3"],ve={enabled:!1,active:!1,moveTouchId:null,lookTouchId:null,movePointerId:null,lookPointerId:null,moveX:0,moveY:0,lookLastX:0,lookLastY:0};let qc=!1,Ag=0;const o_=()=>{De.KeyW=!1,De.KeyA=!1,De.KeyS=!1,De.KeyD=!1,De.Space=!1},a_=()=>{ve.moveTouchId=null,ve.lookTouchId=null,ve.movePointerId=null,ve.lookPointerId=null,ve.moveX=0,ve.moveY=0,_n=!1,De.KeyW=!1,De.KeyA=!1,De.KeyS=!1,De.KeyD=!1,Ls&&(Ls.style.transform="translate(-50%, -50%)")},hA=()=>{const i=String(navigator.userAgent||""),e=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(any-pointer: coarse)").matches,t=window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=/android|iphone|ipad|ipod|mobile/i.test(i),s=Number(navigator.maxTouchPoints||navigator.msMaxTouchPoints||0),r=Math.min(window.innerWidth,window.innerHeight)<=1024;return n?!0:!t&&r&&(e||s>0)},l_=()=>{const i=String(navigator.userAgent||""),e=/android/i.test(i),t=/chrome\//i.test(i),n=/edga|opr|samsungbrowser|ucbrowser|yabrowser|duckduckgo|firefox|fxios/i.test(i);return e&&t&&!n},c_=()=>!!(document.fullscreenElement||document.webkitFullscreenElement),Of=()=>{Ec&&Ec.classList.add("hidden")},Rg=async()=>{try{screen.orientation?.lock&&await screen.orientation.lock("landscape")}catch{}},fA=async()=>{if(!l_())return!1;if(c_())return await Rg(),!0;const i=[document.documentElement,us,Jt?.domElement].filter(Boolean);for(let e=0;e<i.length;e+=1){const t=i[e];try{if(typeof t.requestFullscreen=="function")await t.requestFullscreen({navigationUI:"hide"});else if(typeof t.webkitRequestFullscreen=="function")t.webkitRequestFullscreen();else continue;return await Rg(),!0}catch{}}return!1},u_=()=>{if(!Ec)return;const i=!!(R.joinedRoom&&R.joinedRoom.room&&R.joinedRoom.room.status==="in_game"&&us.classList.contains("in-room")),e=ve.enabled&&l_()&&i&&!wn()&&!c_()&&!qc;Ec.classList.toggle("hidden",!e)},Ws=()=>{const i=ve.active;ve.enabled=hA();const e=ve.enabled&&!!R.joinedRoom&&us.classList.contains("in-room")&&!wn()&&!Er;ve.active=e,Th&&(Th.classList.toggle("hidden",!e),us.classList.toggle("mobile-input",e),!e&&i&&a_(),u_())},Bf=()=>{if(!Bl)return;const i=Date.now();for(let t=jn.length-1;t>=0;t-=1)i-jn[t].ts>uA&&jn.splice(t,1);Nf.classList.toggle("open",jn.length>0);const e=jn.slice(-8);Bl.innerHTML=e.map(t=>{const n=t.isSelf?" (Tú)":"";return`<p><strong>${t.playerName}${n}:</strong> ${t.text}</p>`}).join(""),Bl.scrollTop=Bl.scrollHeight},Cg=i=>{const e=String(i||"").trim();if(!e)return"Player";if(R.self&&String(R.self.id||"")===e)return gn(R.self.name||"Tú")||"Tú";const t=R.remotePlayers.get(e);if(t&&t.name)return gn(t.name)||"Player";const n=R.joinedRoom?.room?.players;if(Array.isArray(n)){const s=n.find(r=>String(r?.id||"")===e);if(s&&s.name)return gn(s.name)||"Player"}return"Player"},kf=()=>{if(!na)return;const i=Date.now();for(let e=Kn.length-1;e>=0;e-=1)i-Kn[e].ts>dA&&Kn.splice(e,1);if(Kn.length<=0){na.innerHTML="",na.classList.remove("open");return}na.classList.add("open"),na.innerHTML=Kn.map(e=>{const t=e.killerId&&R.self&&e.killerId===R.self.id?" (Tú)":"",n=e.victimId&&R.self&&e.victimId===R.self.id?" (Tú)":"";return`<p><strong>${e.killerName}${t}</strong> eliminó a <strong>${e.victimName}${n}</strong></p>`}).join("")},pA=(i,e)=>{const t=String(i||"").trim(),n=String(e||"").trim();if(!n)return;const s=Cg(t),r=Cg(n);Kn.push({killerId:t,victimId:n,killerName:s,victimName:r,ts:Date.now()}),Kn.length>Eg&&Kn.splice(0,Kn.length-Eg),kf()},mA=(i,e)=>{if(!e)return;const t=!!(R.self&&String(i||"")===String(R.self.name||""));jn.push({playerName:String(i||"Player"),text:String(e||""),isSelf:t,ts:Date.now()}),jn.length>bg&&jn.splice(0,jn.length-bg),Bf()},Fa=()=>{if(!Ul)return;const i=Gi.slice(-12);Ul.innerHTML=i.map(e=>{const t=e.isSelf?" (Tú)":"";return`<p><strong>${e.playerName}${t}:</strong> ${e.text}</p>`}).join(""),Ul.scrollTop=Ul.scrollHeight},gA=(i,e)=>{if(!e)return;const t=!!(R.self&&String(i||"")===String(R.self.name||""));Gi.push({playerName:String(i||"Player"),text:String(e||""),isSelf:t,ts:Date.now()}),Gi.length>wg&&Gi.splice(0,Gi.length-wg),Fa()};setInterval(()=>{jn.length>0&&!es&&Bf(),Kn.length>0&&kf()},500);const _A=()=>{R.joinedRoom&&(es=!0,o_(),_n=!1,Z0.classList.add("open"),J0.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),bc.value="",bc.focus())},Lh=()=>{es=!1,Z0.classList.remove("open"),J0.classList.add("hidden"),bc.blur()},ar=(i="")=>{if(!i){Nl.classList.add("hidden"),Nl.textContent="";return}Nl.classList.remove("hidden"),Nl.textContent=i},So=(i="")=>{if(ea){if(!i){ea.classList.add("hidden"),ea.textContent="";return}ea.classList.remove("hidden"),ea.textContent=i}},gn=i=>String(i||"").trim().replace(/\s+/g," ").slice(0,24),d_=()=>gn(localStorage.getItem(Uf)||""),bo=()=>{if(!eg)return;const i=gn(Qi?.value||""),e=gn(R.self?.name||i||"Sin nombre");eg.textContent=`Jugador: ${e}`},va=()=>{if(!Zu)return;const i=Array.isArray(R.lobbyUsers)?R.lobbyUsers:[];if(i.length===0){Zu.innerHTML='<p class="room-empty">No hay jugadores esperando.</p>';return}Zu.innerHTML=i.map(e=>{const t=gn(e?.name||"Player"),n=R.self&&String(e?.id||"")===String(R.self.id||"")?" (Tú)":"";return`<p><strong>${t}${n}</strong></p>`}).join("")},jc=()=>{if(!Dl)return;const i=ua.slice(-18);Dl.innerHTML=i.map(e=>{const t=e.isSelf?" (Tú)":"";return`<p><strong>${e.playerName}${t}:</strong> ${e.text}</p>`}).join(""),Dl.scrollTop=Dl.scrollHeight},xA=(i,e)=>{const t=String(e||"").trim();if(!t)return;const n=gn(i||"Player"),s=!!(R.self&&n===gn(R.self.name||""));ua.push({playerName:n,text:t.slice(0,180),isSelf:s,ts:Date.now()}),ua.length>Tg&&ua.splice(0,ua.length-Tg),jc()},Bo=i=>{R.profileReady=!!i,Ns()},vA=()=>{localStorage.removeItem(Uf),Bo(!1),gi&&(gi.value=""),Qi&&(Qi.value=""),to&&(to.value=""),So(),bo(),gi&&gi.focus()},Kc=()=>gn(Qi?.value||R.self?.name||""),h_=()=>Kc().length>=2,Pn=(i,e,t,n)=>{const s=Number(i);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):n},yA=()=>{try{const i=localStorage.getItem(r_);if(!i)return;const e=JSON.parse(i);Pe.mouseSensitivity=Pn(e.mouseSensitivity,.4,2.5,Pe.mouseSensitivity),Pe.masterVolume=Pn(e.masterVolume,0,1,Pe.masterVolume),Pe.musicVolume=Pn(e.musicVolume,0,1,Pe.musicVolume),Pe.sfxVolume=Pn(e.sfxVolume,0,1,Pe.sfxVolume),Pe.fov=Pn(e.fov,60,100,Pe.fov),Pe.showPerfByDefault=!!e.showPerfByDefault}catch{}},Tr=()=>{localStorage.setItem(r_,JSON.stringify(Pe))},MA=i=>{const e=[...i];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e},ya=i=>{us.classList.toggle("in-room",i),ss(),!i&&document.pointerLockElement&&document.exitPointerLock(),i||(Qc(),jn.length=0,Bf(),Lh(),Nf.classList.remove("open"),a_(),qc=!1,Of()),Ws()},f_=()=>{R.showMatchInfo&&R.joinedRoom?sg.classList.add("visible"):sg.classList.remove("visible")},zf=()=>{if(!R.joinedRoom||!R.showScoreboard){og.classList.add("hidden");return}const i=[...R.joinedRoom.players].sort((s,r)=>(r.kills||0)!==(s.kills||0)?(r.kills||0)-(s.kills||0):(s.deaths||0)-(r.deaths||0)),e=s=>{const r=R.self&&s.id===R.self.id?" (Tú)":"";return`<tr><td>${s.name}${r}</td><td>${s.kills||0}</td><td>${s.deaths||0}</td></tr>`},t=R.joinedRoom.room||{};if(ko(t)&&String(t.versusType||"").toLowerCase()==="2v2"){const s=i.filter(c=>wt(c.team)==="red"),r=i.filter(c=>wt(c.team)==="blue"),o=i.filter(c=>!wt(c.team)),a=(c,u,d)=>{const h=[];if(h.push(`<tr class="scoreboard-team-row ${c}"><td colspan="3">${u}</td></tr>`),d.length<=0)h.push('<tr class="scoreboard-empty-row"><td colspan="3">Esperando jugador...</td></tr>');else for(let f=0;f<d.length;f+=1)h.push(e(d[f]));return h.join("")},l=[a("team-red","Equipo Rojo",s),a("team-blue","Equipo Azul",r)];if(o.length>0){l.push('<tr class="scoreboard-team-row team-unknown"><td colspan="3">Sin equipo</td></tr>');for(let c=0;c<o.length;c+=1)l.push(e(o[c]))}ag.innerHTML=l.join("")}else ag.innerHTML=i.map(e).join("");og.classList.remove("hidden")},xr=()=>{if(!R.joinedRoom||!R.showPerf){_g.classList.add("hidden");return}kw.textContent=String(R.fps);const i=$.frameMsSamples.length>0?$.frameMsSamples.reduce((p,v)=>p+v,0)/$.frameMsSamples.length:0,e=Us($.frameMsSamples,.95);zw.textContent=`${i.toFixed(1)} / ${e.toFixed(1)}`,Vw.textContent=Number.isFinite(R.latencyMs)?`${Math.round(R.latencyMs)} ms`:"--";const t=$.ackRttSamples.length>0?$.ackRttSamples.reduce((p,v)=>p+v,0)/$.ackRttSamples.length:0,n=Us($.ackRttSamples,.95),s=$.shotAckSamples.length>0?$.shotAckSamples.reduce((p,v)=>p+v,0)/$.shotAckSamples.length:0,r=Us($.shotAckSamples,.95);Hw.textContent=`${t.toFixed(1)} / ${n.toFixed(1)}`,Gw.textContent=`${s.toFixed(1)} / ${r.toFixed(1)} / ${os.size} / ${$.shotAcksPerSec.toFixed(1)}`,Ww.textContent=`${$.wsOutMsgsPerSec.toFixed(1)} / ${$.wsOutKbps.toFixed(1)}`,Xw.textContent=`${$.moveMsgsPerSec.toFixed(1)} / ${cn.length}`,qw.textContent=String(Math.round(Ot.drawCalls)),jw.textContent=String(Math.round(Ot.triangles)),Kw.textContent=String(Math.round(Ot.geometries)),Yw.textContent=String(Math.round(Ot.textures)),$w.textContent=String(Math.round(Ot.vfx));const o=at.errorSamples,a=o.length>0?o.reduce((p,v)=>p+v,0)/o.length:0,l=Us(o,.95);Zw.textContent=`${a.toFixed(2)} / ${l.toFixed(2)}`,Jw.textContent=at.correctionsPerSec.toFixed(2),Qw.textContent=`${$.softCorrectionsPerSec.toFixed(2)} / ${$.hardCorrectionsPerSec.toFixed(2)}`,eA.textContent=at.lateAcksPerSec.toFixed(2),tA.textContent=`${Math.round(Va)} / ${Math.round(Ro)}`,nA.textContent=`${$.correctionStreak} / ${$.correctionStreakMax}`,iA.textContent=$.localSpeed.toFixed(2),sA.textContent=String(Math.max(0,Math.ceil(nu-performance.now())));const c=Number.isFinite(Number(R.joinedRoom?.room?.mapSeed))?Number(R.joinedRoom.room.mapSeed):null,u=c!==null&&Number.isFinite(Wi)&&Number(Wi)===c,d=!!ts,h=d&&hr===ts;d?xg.textContent=u&&h?`OK (${String(ts).slice(0,8)})`:`MISMATCH seed:${u?"ok":"bad"} hash:${h?"ok":"bad"}`:xg.textContent=u?"SEED OK / HASH N/A":"SEED MISMATCH";const f=at.correctionsPerSec<Sg.maxCorrectionsPerSec,g=l<Sg.maxPredErrP95,_=$.freezeEventsPerSec<.1&&performance.now()>=hn.freezeWarnUntil;rA.textContent=f&&g&&_?"OK":`WARN corr:${f?"ok":"bad"} pred:${g?"ok":"bad"} freeze:${_?"ok":"bad"}`;const m=hn.animateErrors<=0&&hn.webglContextLosses<=0;oA.textContent=m?"OK":`WARN errors:${hn.animateErrors} contextLost:${hn.webglContextLosses}`,_g.classList.remove("hidden")},p_=()=>!!(R.joinedRoom&&R.self&&R.joinedRoom.room.hostId===R.self.id),Gt=()=>!!(R.joinedRoom&&R.joinedRoom.room.status==="in_game"&&!Nt&&!Ao),Eo=()=>!!(R.joinedRoom&&R.joinedRoom.room.status==="in_game"),SA=i=>i==="rainy"?"Lluvioso":i==="sunny"?"Soleado":i==="night"?"Noche":i==="snow"?"Nieve":i||"-",io=i=>{const e=i||"night";Hf=e,Xf.visible=e==="rainy",jf.visible=e==="snow",S_.visible=e==="night"||e==="snow",E_.visible=!1,Kf.visible=!1,Yf.visible=!1,e==="sunny"?(me.background=new Ie(12050431),me.fog.color.set(12050431),me.fog.near=90,me.fog.far=400,ha.intensity=.74,li.intensity=1.2,li.color.set(16773826),fa.opacity=.35):e==="rainy"?(me.background=new Ie(599e4),me.fog.color.set(599e4),me.fog.near=10,me.fog.far=95,ha.intensity=.26,li.intensity=.42,li.color.set(9156567),fa.opacity=.25):e==="snow"?(me.background=new Ie(14215668),me.fog.color.set(14215668),me.fog.near=26,me.fog.far=200,ha.intensity=.65,li.intensity=.9,li.color.set(15202047),fa.opacity=.42):(me.background=new Ie(461588),me.fog.color.set(461588),me.fog.near=16,me.fog.far=140,ha.intensity=.26,li.intensity=.38,li.color.set(8354248),fa.opacity=.6)},lt=i=>{if(!R.ws||R.ws.readyState!==WebSocket.OPEN){ar("WebSocket no conectado");return}const e=JSON.stringify(i);$.wsOutMsgsInWindow+=1,$.wsOutBytesInWindow+=e.length,i?.type==="player_move"&&($.moveMsgsInWindow+=1),R.ws.send(e)};let Xr=null,rd=0,Pg=performance.now(),In=1;const bA=()=>{const i=performance.now();if(os.size>0)for(const[r,o]of os.entries())i-o>3e3&&os.delete(r);const e=Math.max(0,Math.min(250,i-$.lastFrameAt));$.lastFrameAt=i,e>0&&($.frameMsSamples.push(e),$.frameMsSamples.length>240&&$.frameMsSamples.splice(0,$.frameMsSamples.length-240)),$.localSpeed=Math.sqrt(st.x*st.x+st.z*st.z);const t=!!(De.KeyW||De.KeyA||De.KeyS||De.KeyD),n=hn.freezeSample;n.at<=0?(n.at=i,n.x=Z.position.x,n.z=Z.position.z):t&&Gt()?i-n.at>=300&&(Math.hypot(Z.position.x-n.x,Z.position.z-n.z)<.03&&$.localSpeed>6.5&&i>=nu&&($.freezeEventsInWindow+=1,hn.freezeWarnUntil=i+1800),n.at=i,n.x=Z.position.x,n.z=Z.position.z):(n.at=i,n.x=Z.position.x,n.z=Z.position.z),$.lastCorrectionAt>0&&i-$.lastCorrectionAt>900&&($.correctionStreak=0),rd+=1;const s=i-Pg;if(s>=500){R.fps=Math.max(0,Math.round(rd*1e3/s)),at.correctionsPerSec=at.correctionsInWindow*1e3/s,at.lateAcksPerSec=at.lateAcksInWindow*1e3/s,$.wsOutMsgsPerSec=$.wsOutMsgsInWindow*1e3/s,$.wsOutKbps=$.wsOutBytesInWindow*8/s,$.moveMsgsPerSec=$.moveMsgsInWindow*1e3/s,$.shotAcksPerSec=$.shotAcksInWindow*1e3/s,$.softCorrectionsPerSec=$.softCorrectionsInWindow*1e3/s,$.hardCorrectionsPerSec=$.hardCorrectionsInWindow*1e3/s,$.freezeEventsPerSec=$.freezeEventsInWindow*1e3/s,at.correctionsInWindow=0,at.lateAcksInWindow=0,$.wsOutMsgsInWindow=0,$.wsOutBytesInWindow=0,$.moveMsgsInWindow=0,$.shotAcksInWindow=0,$.softCorrectionsInWindow=0,$.hardCorrectionsInWindow=0,$.freezeEventsInWindow=0;const r=R.fps;r>=58?In=1:r>=48?In=.82:r>=38?In=.62:r>=30?In=.48:In=.34,rd=0,Pg=i,R.showPerf&&R.joinedRoom&&xr()}},ko=i=>String(i?.mode||"").toLowerCase()==="versusmatch",wt=i=>{const e=String(i||"").trim().toLowerCase();return e==="red"||e==="blue"?e:null},m_=()=>!1,Vf=i=>{const e=wt(i);return e==="red"?{tracer:16739179,impactA:16751772,impactB:16739179,label:"Aliado"}:e==="blue"?{tracer:6726911,impactA:11061503,impactB:6726911,label:"Enemigo"}:{tracer:10682286,impactA:12579839,impactB:8257426,label:"-"}},vr=(i,e=null)=>{const t=String(i||"").toLowerCase();return t==="holy"?{tracer:16774082,impactA:16775131,impactB:10479615}:t==="hammer"?{tracer:16766842,impactA:16773308,impactB:9428991}:t==="poison"?{tracer:6487930,impactA:10354608,impactB:3067735}:t==="lunar"?{tracer:10475775,impactA:15792639,impactB:9431551}:Vf(e)},da=i=>{const e=String(i||"");if(!e)return null;if(R.self&&e===R.self.id)return wt(Ne.team);const t=R.remotePlayers.get(e);return wt(t?.team)},EA=i=>{const e=String(i?.versusType||"").trim().toLowerCase();return e==="1v1"?5:20},Hs=()=>R.joinedRoom&&ko(R.joinedRoom.room)?3:5,Ig=()=>{if(!xa||!ug||!dg||!hg)return;const i=R.joinedRoom?.room,e=String(i?.versusType||"").toLowerCase(),t=e==="1v1"||e==="2v2";if(!R.joinedRoom||!ko(i)||!t||i.status!=="in_game"){xa.classList.add("hidden");return}let n=0,s=0;const r=Array.isArray(R.joinedRoom.players)?R.joinedRoom.players:[];for(let a=0;a<r.length;a+=1){const l=r[a],c=Math.max(0,Number(l.kills||0)),u=wt(l.team);u==="red"?n+=c:u==="blue"&&(s+=c)}const o=EA(i);ug.textContent=`ROJO ${n}`,dg.textContent=`AZUL ${s}`,hg.textContent=`META ${o}`,xa.classList.remove("hidden")},g_=i=>{if(!i)return;String(i.mode||"freeforall").toLowerCase()!=="versusmatch"&&xa&&xa.classList.add("hidden")},tc=()=>{const i=R.joinedRoom?.room,e=!!(i&&ko(i));us.classList.toggle("versus-mode",e)},wn=()=>!!(R.joinedRoom&&ko(R.joinedRoom.room)&&R.joinedRoom.room.status==="waiting"),Ns=()=>{const e=(!mi||mi.classList.contains("hidden"))&&!R.profileReady&&!R.joinedRoom,t=wn();Qm&&Qm.classList.toggle("hidden",!e),ur&&ur.classList.toggle("hidden",!t),Ji&&(e||t?Ji.classList.add("hidden"):Ji.classList.remove("hidden"))},TA=()=>{const i=document.querySelectorAll(".versus-player-model[data-preview-key]"),e=new Set;i.forEach(n=>{const s=String(n.dataset.previewKey||"").trim(),r=String(n.dataset.character||"").trim();if(!s)return;e.add(s);const o=Yn.get(s);if(o&&o.characterId===r&&o.renderer?.domElement?.parentElement===n)return;o&&Rc(s);const a=new xf,l=new jt(40,1,.1,100),c=new Lf({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,1.8));const u=Math.max(60,n.clientWidth||92),d=Math.max(60,n.clientHeight||92);c.setSize(u,d,!1),n.innerHTML="",n.appendChild(c.domElement);const h=new F0(13172706,1056784,.95);a.add(h);const f=new Hc(16777215,.85);f.position.set(2.8,4.8,3.4),a.add(f);const g={key:s,characterId:r,node:n,renderer:c,scene:a,camera:l,mixer:null,model:null,rotateSpeed:.32+Math.random()*.2};if(Yn.set(s,g),!r)return;const _=p=>{if(!p?.loaded||!p.scene||!Yn.has(s))return;const v=Yn.get(s);if(!v||v.characterId!==r)return;const b=Xc(p.scene),S=new Tn().setFromObject(b),T=S.getCenter(new P),w=S.getSize(new P);b.position.set(-T.x,-S.min.y,-T.z),v.scene.add(b),v.model=b,v.camera.position.set(0,Math.max(.95,w.y*.62),Math.max(1.45,w.y*.9)),v.camera.lookAt(0,Math.max(.72,w.y*.45),0);const C=p.animationSet?.running||p.animationSet?.idle||p.animationSet?.funny||p.animationSet?.dead||ws(p.animations||[],"running",["running","idle","funny","dead"]);if(C){const x=new If(b),M=x.clipAction(C);M.reset(),M.setLoop(Xa,1/0),M.play(),v.mixer=x}},m=Ac.get(r);m?.loaded&&m.scene?_(m):wr(r).then(p=>{_(p)})});const t=[...Yn.keys()];for(let n=0;n<t.length;n+=1)e.has(t[n])||Rc(t[n])},Lg=(i,e,t,n,s={})=>{if(!i)return!1;const{showOnlyActualPlayers:r=!1}=s,o=Array.isArray(e)?e:[],a=Math.max(1,o.length);i.style.setProperty("--team-count",String(a));const l=r?o.length:Math.max(1,Number(t)||1),c=[String(n||""),String(l)],u=r?o.length:l;for(let g=0;g<u;g+=1){const _=o[g];_?c.push(`${_.id}|${_.name}|${_.character||""}|${wt(_.team)||""}|${!!_.ready}`):c.push("empty")}const d=c.join("::");if(i.dataset.renderKey===d)return!1;const h=[];for(let g=0;g<l;g+=1){const _=o[g];if(_){const m=String(_.name||`Player ${g+1}`),p=Ba(_.character||"-"),v=!!_.ready,b=R.self&&_.id===R.self.id,T=wt(_.team)==="red"?"Cambiar a Azul":"Cambiar a Rojo";h.push(`
        <div class="versus-player">
          <div class="versus-player-model" data-preview-key="${i.id}-${g}" data-character="${String(_.character||"")}"></div>
          <strong>${m}</strong>
          <span>${p}</span>
          <span class="versus-ready ${v?"on":"off"}">${v?"Ready":"No Ready"}</span>
          ${b?`<button class="versus-team-switch-btn" type="button" data-action="switch-team" data-player-id="${_.id}">${T}</button>`:""}
        </div>
      `)}else r||h.push(`
        <div class="versus-player empty">
          <div class="versus-player-model placeholder"></div>
          <strong>Esperando...</strong>
          <span>Slot libre</span>
        </div>
      `)}return i.innerHTML=h.join(""),i.dataset.renderKey=d,i.querySelectorAll('[data-action="switch-team"]').forEach(g=>{g.addEventListener("click",()=>{lt({type:"versus_switch_team"})})}),!0},Ma=()=>{if(!ur)return;if(!wn()){R.joinedRoom?.room?.mode==="versusmatch"&&R.joinedRoom?.room?.status==="in_game"&&Gi.length>0&&(Gi.length=0,Fa()),ur.classList.add("hidden"),HA();return}const i=R.joinedRoom.room,e=Number(R.joinedRoom.players?.length||0),t=Number(i.requiredPlayers||0),n=Number(i.maxPlayers||4),s=String(i.versusType||""),r=p_(),o=s==="1v1"||s==="2v2",a=Array.isArray(R.joinedRoom.players)?[...R.joinedRoom.players]:[];a.sort((M,D)=>M.id===R.self?.id?-1:D.id===R.self?.id?1:String(M.name||"").localeCompare(String(D.name||"")));const l=o?s==="2v2"?2:1:Math.max(1,Math.ceil(n/2));let c=a.filter(M=>wt(M.team)==="red"),u=a.filter(M=>wt(M.team)==="blue");c.length===0&&u.length===0&&(c=a.slice(0,l),u=a.slice(l,l*2));const d=c.length,h=u.length,f=`${s}|${l}|${c.map(M=>`${M.id}:${M.character||""}:${wt(M.team)||"-"}`).join(",")}|${u.map(M=>`${M.id}:${M.character||""}:${wt(M.team)||"-"}`).join(",")}`,g=o&&t>0&&e===t,_=o?s==="2v2"?2:1:0,m=a.filter(M=>wt(M.team)==="red").length,p=a.filter(M=>wt(M.team)==="blue").length,v=o&&m===_&&p===_,b=a.filter(M=>!!M.ready).length,S=g&&a.every(M=>!!M.ready),T=R.self?a.find(M=>M.id===R.self.id):null,w=!!T?.ready;ur.classList.remove("hidden"),Ew.textContent=`Sala: ${i.name} (${i.id})`,Sc.value=o?s:"",Sc.disabled=!r,Tw.textContent=o?`Esperando: ${e}/${t} (${s}) | Equipos: Rojo ${m}/${_} - Azul ${p}/${_} | Ready: ${b}/${t}`:`Esperando selección de modalidad (${e}/${n})`;const C=Lg(Ju,c,l,"left",{showOnlyActualPlayers:!0}),x=Lg(Qu,u,l,"right",{showOnlyActualPlayers:!0});Ju.classList.toggle("empty-team",d===0),Qu.classList.toggle("empty-team",h===0),d===0&&(Ju.innerHTML=`
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Rojo</span>
      </div>
    `),h===0&&(Qu.innerHTML=`
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Azul</span>
      </div>
    `),(C||x||f!==Oh||Yn.size===0)&&(TA(),Oh=f),bh.disabled=!T,bh.textContent=w?"Ready: ON":"Ready: OFF",j0.disabled=!r||!S||!v,g&&!v?Fl.textContent=`Equipos desbalanceados. Deben quedar ${_} en Rojo y ${_} en Azul.`:g&&!S?Fl.textContent="Faltan jugadores por marcar Ready para iniciar.":S?Fl.textContent="Todos listos. El host puede iniciar la partida.":Fl.textContent="Las partidas versus aparecen en estado waiting hasta completar jugadores.",Fa()},Nh=()=>{if($u.innerHTML="",R.rooms.length===0){const i=document.createElement("p");i.className="room-empty",i.textContent="No hay salas activas.",$u.appendChild(i);return}R.rooms.forEach(i=>{const e=ko(i)?"versusmatch":"freeforall",t=i.versusType?` (${i.versusType})`:"",n=Number(i.maxPlayers)>0?Number(i.maxPlayers):5,s=document.createElement("article");s.className="room-card",s.innerHTML=`
      <div>
        <strong>${i.name}</strong>
        <p>ID: ${i.id}</p>
        <p>Modo: ${e}${t}</p>
        <p>Jugadores: ${i.players}/${n}</p>
        <p>Estado: ${i.status}</p>
      </div>
      <button type="button">Unirse</button>
    `,s.querySelector("button").addEventListener("click",()=>{if(!h_()){So("Define tu nombre para unirte a una sala."),Bo(!1);return}ar(),lt({type:"join_room",roomId:i.id,playerName:Kc(),character:$t.value||He})}),$u.appendChild(s)}),Ma()},wA=()=>`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`,AA=()=>`${window.location.protocol}//${window.location.host}`,me=new xf;me.background=new Ie(66817);me.fog=new _f(66817,18,160);let Hf="night";const Z=new jt(75,window.innerWidth/window.innerHeight,.1,500);Z.position.set(0,1.7,10);const yr=new jt(75,window.innerWidth/window.innerHeight,.1,500);let dr=!1;const RA=1.25,CA=.7,PA=.18,Ng=new P,kl=new P,Dg=new P,Fg=new P,zl=new P,Jt=new Lf({antialias:!0});Jt.setSize(window.innerWidth,window.innerHeight);Jt.setPixelRatio(Math.min(window.devicePixelRatio,2));Jt.domElement.classList.add("game-render-canvas");us.appendChild(Jt.domElement);let Tc=!1;Jt.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),Tc=!0,hn.webglContextLosses+=1});Jt.domElement.addEventListener("webglcontextrestored",()=>{Tc=!1,Jt.setSize(window.innerWidth,window.innerHeight),io(Hf||"night")});const ha=new wy(6750088,.3);me.add(ha);const li=new Hc(4849523,.8);li.position.set(15,30,10);me.add(li);const Ua=new O0(10026904,0,8,2);Z.add(Ua);Ua.position.set(.2,-.18,-.6);me.add(Z);const Oa=new Xe(new hi(320,320),new ti({color:135426,roughness:1}));Oa.rotation.x=-Math.PI/2;me.add(Oa);const __=new Wy(320,80,4194150,1002015);__.position.y=.01;me.add(__);const IA=new ti({color:5984868,emissive:2762034,emissiveIntensity:.18,metalness:.06,roughness:.9}),LA=new ti({color:8089476,emissive:2893110,emissiveIntensity:.14,metalness:.04,roughness:.92});new ti({color:9401999,emissive:3417405,emissiveIntensity:.11,metalness:.04,roughness:.9});const dn=[];dn.push(Oa);const Os=[],Gf=.55,x_=.82,NA=118,DA=96,FA=156,Yc=FA-6,Es=5.2,tr=1.6,To=Gf*.2;let Wi=null,Ug=null,hr=null,ts=null,jr="none",Dh=0;const $c=5600,Hn=new Float32Array($c*3),Fh=new Float32Array($c);for(let i=0;i<$c;i+=1)Hn[i*3]=(Math.random()-.5)*260,Hn[i*3+1]=Math.random()*120+6,Hn[i*3+2]=(Math.random()-.5)*260,Fh[i]=22+Math.random()*26;const Wf=new At;Wf.setAttribute("position",new zt(Hn,3));const UA=new Lo({color:6750054,size:.26,transparent:!0,opacity:.98,sizeAttenuation:!0}),Xf=new ja(Wf,UA);me.add(Xf);const Zc=1700,Gn=new Float32Array(Zc*3),v_=new Float32Array(Zc);for(let i=0;i<Zc;i+=1)Gn[i*3]=(Math.random()-.5)*260,Gn[i*3+1]=Math.random()*120+6,Gn[i*3+2]=(Math.random()-.5)*260,v_[i]=1.6+Math.random()*2.7;const qf=new At;qf.setAttribute("position",new zt(Gn,3));const OA=new Lo({color:16777215,size:.22,transparent:!0,opacity:.85,sizeAttenuation:!0}),jf=new ja(qf,OA);me.add(jf);const y_=1200,nc=new Float32Array(y_*3);for(let i=0;i<y_;i+=1)nc[i*3]=(Math.random()-.5)*420,nc[i*3+1]=70+Math.random()*80,nc[i*3+2]=(Math.random()-.5)*420;const M_=new At;M_.setAttribute("position",new zt(nc,3));const BA=new Lo({color:12572927,size:.36,transparent:!0,opacity:.78,sizeAttenuation:!0}),S_=new ja(M_,BA);me.add(S_);const Jc=900,ic=new Float32Array(Jc*3),b_=new Float32Array(Jc);for(let i=0;i<Jc;i+=1)ic[i*3]=(Math.random()-.5)*300,ic[i*3+1]=8+Math.random()*34,ic[i*3+2]=(Math.random()-.5)*300,b_[i]=.4+Math.random()*.9;const wc=new At;wc.setAttribute("position",new zt(ic,3));const fa=new Lo({color:16773311,size:.18,transparent:!0,opacity:.62,sizeAttenuation:!0,depthWrite:!1}),E_=new ja(wc,fa);me.add(E_);const Kf=new Xe(new ei(8.5,24,24),new bt({color:15331839,transparent:!0,opacity:.9}));Kf.position.set(78,95,-124);me.add(Kf);const Yf=new Xe(new ei(4.2,18,18),new bt({color:16373920,transparent:!0,opacity:.74}));Yf.position.set(-104,76,-112);me.add(Yf);const od=[],Uh=[];let Sa=0;const kA=new P,T_=new BT,Ac=new Map,Mn=[];let He="";const zA=["attack","dead","running","idle","jump","funny"],Je={renderer:null,scene:null,camera:null,mixer:null,model:null,lastWidth:0,lastHeight:0},Yn=new Map;let Oh="";const Ne={group:null,mixer:null,actions:null,currentAnimation:"",shootUntil:0,loadingKey:"",funnyUntil:0,team:null,teamOutline:null},Ya=i=>{const e=String(i||"").trim();return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"")==="pezunalunar"?"pezunalunar":e:""},VA=(i,e)=>`/characters/${encodeURIComponent(Ya(i))}/${encodeURIComponent(e)}`,Ba=i=>Ya(i)==="pezunalunar"?"pezuñalunar":i,Rc=i=>{const e=Yn.get(i);e&&(e.model&&e.scene&&e.scene.remove(e.model),e.renderer&&e.renderer.domElement?.parentElement&&e.renderer.domElement.parentElement.removeChild(e.renderer.domElement),e.renderer?.dispose(),Yn.delete(i))},HA=()=>{const i=[...Yn.keys()];for(let e=0;e<i.length;e+=1)Rc(i[e]);Oh=""},GA=i=>/\.(glb|gltf)$/i.test(String(i||"").trim()),WA=i=>{const e=String(i||"").trim();if(!e)return[];const t=Ya(e);return t===e?[e]:[t,e]},XA=i=>new Promise(e=>{const t=n=>{if(n>=i.length){e(null);return}T_.load(i[n],s=>e(s),void 0,()=>t(n+1))};t(0)}),Og={mana:{url:"/items/mana.glb",targetHeight:.62},defensa:{url:"/items/defensa.glb",targetHeight:.7},vida:{url:"/items/vida.glb",targetHeight:.68}},sa=new Map,Vl=new Map,qA=(i,e)=>{const t=new Tn().setFromObject(i),n=t.getSize(new P);if(Number.isFinite(n.y)&&n.y>1e-4){const o=e/n.y;i.scale.setScalar(o),t.setFromObject(i)}const s=t.getCenter(new P),r=Number.isFinite(t.min.y)?t.min.y:0;return i.position.set(-s.x,-r,-s.z),i.traverse(o=>{o.isMesh&&(o.frustumCulled=!0)}),i},sc=async i=>{const e=String(i||"").trim();if(!e||!Og[e])return null;if(sa.has(e))return sa.get(e);if(Vl.has(e))return Vl.get(e);const{url:t,targetHeight:n}=Og[e],s=new Promise(r=>{T_.load(t,o=>{const a=o?.scene?o.scene.clone(!0):null;if(!a){sa.set(e,null),r(null);return}const l=qA(a,n);sa.set(e,l),r(l)},void 0,()=>{sa.set(e,null),r(null)})}).finally(()=>{Vl.delete(e)});return Vl.set(e,s),s},ad=(i,e)=>{const t=new fn,n=new fn;t.add(n);const s=e();return s.name="__pickup_fallback__",n.add(s),sc(i).then(r=>{if(!r||!t.parent)return;for(;n.children.length>0;)n.remove(n.children[0]);const o=r.clone(!0);o.name=`pickup_${i}`,n.add(o),t.userData.modelLoaded=!0}),t},qr=(i,e)=>{if(!i?.animations||i.animations.length===0)return null;const t=i.animations[0].clone();return t.name=e,t},wr=async i=>{if(!i)return null;const e=Ac.get(i);if(e?.loaded)return e;if(e?.loadingPromise)return e.loadingPromise;const t=e||{loaded:!1,scene:null,animations:[],animationSet:{},loadingPromise:null};return Ac.set(i,t),t.loadingPromise=new Promise(n=>{const s=WA(i);if(s.length===0){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}Promise.all(zA.map(async r=>{const o=GA(r)?[r]:[r,`${r}.glb`,`${r}.gltf`],a=s.flatMap(c=>o.map(u=>VA(c,u))),l=await XA(a);return{actionName:r,gltf:l}})).then(r=>{const o=r.find(_=>_.actionName==="dead"&&_.gltf?.scene)?.gltf,a=r.find(_=>_.actionName==="idle"&&_.gltf?.scene)?.gltf,l=r.find(_=>_.actionName==="running"&&_.gltf?.scene)?.gltf,c=r.find(_=>_.actionName==="jump"&&_.gltf?.scene)?.gltf,u=r.find(_=>_.actionName==="funny"&&_.gltf?.scene)?.gltf,d=r.find(_=>_.actionName==="attack"&&_.gltf?.scene)?.gltf,h=a||l||c||u||o||d;if(!h?.scene){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}const f={attack:qr(d,"attack"),dead:qr(o,"dead"),running:qr(l,"running"),idle:qr(a,"idle"),jump:qr(c,"jump"),funny:qr(u,"funny")},g=Object.values(f).filter(Boolean);t.loaded=!0,t.scene=h.scene,t.animations=g,t.animationSet=f,t.loadingPromise=null,n(t)})}),t.loadingPromise},w_=i=>{const e=$t.value||He;if($t.innerHTML="",Mn.length=0,MA(i).forEach(n=>Mn.push(n)),Mn.length===0){const n=document.createElement("option");n.value="",n.textContent="Sin personajes",$t.appendChild(n),$t.disabled=!0,He="";return}$t.disabled=!1,Mn.forEach(n=>{const s=document.createElement("option");s.value=n,s.textContent=Ba(n),$t.appendChild(s)}),He=Mn.includes(e)?e:Mn[0],$t.value=He},Hl=(i,e,t="")=>{const n=Math.max(1,e),s=Math.max(0,Math.min(1,i/n)),r=Math.round(s*100);Zm&&(Zm.style.width=`${r}%`),Jm&&(Jm.textContent=`${r}%`),$m&&t&&($m.textContent=t)},A_=async()=>{const i=AA();try{const t=await(await fetch(`${i}/characters`)).json();if(t?.ok&&Array.isArray(t.data)&&t.data.length>0)return t.data}catch{}return["silentman","pumori","neoorphen","pezunalunar"]},jA=()=>{const i=String(window.location.hostname||"").toLowerCase();return!i||i==="localhost"||i==="127.0.0.1"||i.endsWith(".local")?"http://localhost":i==="koketria.misterrii.com"?"https://misterrii.com":i.startsWith("koketria.")?`https://${i.slice(9)}`:"https://misterrii.com"},Bh=new Set,rr=(i,e=6e3)=>new Promise(t=>{if(!i){t(!1);return}if(Bh.has(i)){t(!0);return}const n=new Audio;let s=!1;const r=l=>{s||(s=!0,n.removeEventListener("canplaythrough",o),n.removeEventListener("loadedmetadata",o),n.removeEventListener("error",a),l&&Bh.add(i),t(l))},o=()=>r(!0),a=()=>r(!1);n.preload="auto",n.addEventListener("canplaythrough",o,{once:!0}),n.addEventListener("loadedmetadata",o,{once:!0}),n.addEventListener("error",a,{once:!0}),n.src=i,n.load(),setTimeout(()=>r(!1),e)}),KA=async i=>{const e=await eu(i);return await rr(e,6e3)?!0:rr(e,1e4)},YA=async()=>{mi&&mi.classList.remove("hidden"),Ji&&Ji.classList.add("hidden");const i=await A_();w_(i),tu(He);const e=[...Mn],t=2+e.length*2+1+sd.length+2+3+1,n=[];let s=0;const r=a=>{s+=1,Hl(s,t,a)},o=a=>{n.push(a),console.warn("[boot-loader][warn]",a)};Hl(0,t,"Cargando tema pre-lobby..."),await rr(kh,1e4)||o(`audio: ${kh}`),r("Tema pre-lobby cargado"),ss(),Hl(s,t,"Preparando catalogo..."),R_(),r("Catalogo listo");for(let a=0;a<e.length;a+=1){const l=e[a];await wr(l),r(`Modelo: ${Ba(l)}`)}for(let a=0;a<e.length;a+=1){const l=e[a];await KA(l);const c=await eu(l);Bh.has(c)||o(`attack_sound: ${l}`),r(`Audio ataque: ${Ba(l)}`)}await rr(Xi,6e3)||o(`audio: ${Xi}`),r("Audio base cargado");for(let a=0;a<sd.length;a+=1){const l=sd[a],c=$f(l);await rr(c,1e4)||o(`audio: ${c}`),r(`Tema batalla: ${l}`)}await rr(Cc,1e4)||o(`audio: ${Cc}`),r("Audio lobby cargado"),await rr(zh,1e4)||o(`audio: ${zh}`),r("Audio lobby2 cargado"),await sc("mana")||o("item: mana.glb"),r("Item mana cargado"),await sc("defensa")||o("item: defensa.glb"),r("Item defensa cargado"),await sc("vida")||o("item: vida.glb"),r("Item vida cargado"),await dp(),zo();for(const a of R.remotePlayers.values())Ga(a);r("Lobby listo"),mi&&mi.classList.add("hidden"),Ns(),bo(),va(),jc(),n.length>0&&Hl(s,t,`Cargado con advertencias (${n.length})`),ss()},$A=async()=>{const i=await A_();w_(i),tu(He),await wr(He),await dp(),zo();for(const e of R.remotePlayers.values())Ga(e)},zo=()=>{if(!Je.scene)return;const i=$t.value||He;if(!i)return;Je.model&&(Je.scene.remove(Je.model),Je.model=null,Je.mixer=null);const e=Ac.get(i);if(!e?.loaded||!e.scene){wr(i).then(a=>{a?.loaded&&($t.value||He)===i&&zo()});return}const t=Xc(e.scene),n=new Tn().setFromObject(t),s=n.getCenter(new P),r=n.getSize(new P);t.position.set(-s.x,-n.min.y,-s.z),Je.scene.add(t),Je.model=t,Je.camera.position.set(0,Math.max(1.2,r.y*.55),Math.max(2.3,r.y*.95)),Je.camera.lookAt(0,Math.max(.9,r.y*.45),0);const o=e.animationSet?.running||ws(e.animations||[],"running",["running"]);if(o){const a=new If(t),l=a.clipAction(o);l.reset(),l.setLoop(Xa,1/0),l.play(),Je.mixer=a}},R_=()=>{if(!$r||Je.renderer)return;const i=new xf,e=new jt(40,1,.1,100),t=new Lf({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=$r.clientWidth||280,s=$r.clientHeight||220;t.setSize(n,s,!1),$r.appendChild(t.domElement);const r=new F0(12514815,1975838,.95);i.add(r);const o=new Hc(16777215,1);o.position.set(3.5,5,4),i.add(o),Je.scene=i,Je.camera=e,Je.renderer=t,Je.lastWidth=n,Je.lastHeight=s,zo()},C_=()=>{if(!Je.renderer||!Je.camera)return;const i=$r.clientWidth||280,e=$r.clientHeight||220;i===Je.lastWidth&&e===Je.lastHeight||(Je.lastWidth=i,Je.lastHeight=e,Je.camera.aspect=i/e,Je.camera.updateProjectionMatrix(),Je.renderer.setSize(i,e,!1))},ns=new Audio("/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3");ns.preload="auto";ns.loop=!1;ns.volume=.24;const ra=[],ZA=8,kh="/themes/pre-lobby.mp3",Cc="/themes/lobby.mp3",zh="/lobby/2.mp3",Vh={battle1:"/themes/battle1.mp3",battle2:"/themes/battle2.mp3",battle3:"/themes/battle3.mp3"},$f=i=>Vh[i]||Vh.battle1,Mi=new Audio(kh);Mi.preload="auto";Mi.loop=!1;Mi.volume=.28;const Si=new Audio(Cc);Si.preload="auto";Si.loop=!0;Si.volume=.34;const is=new Audio($f("battle1"));is.preload="auto";is.loop=!0;is.volume=.38;let ka=!1,fr=!1,so=!1,ro=!1,Rs=!1,ld="battle1";const Xi="/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3",JA=[".ogg",".mp3",".wav",".m4a",""],cd=new Map,ud=new Map,QA=15e3;let dd="";const Bg=140,hd=6,Cs=[],e1=24,t1=3e4,n1=5e3;let Pc=0,pa=null;const P_=(i,e,t)=>{(i.getAttribute(t)||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute(t,e),i.load())},I_=()=>!R.joinedRoom&&mi&&!mi.classList.contains("hidden"),L_=()=>!R.joinedRoom&&Ji&&!Ji.classList.contains("hidden")&&(!mi||mi.classList.contains("hidden"))||wn(),i1=()=>wn()?zh:Cc,N_=()=>!!(R.joinedRoom&&R.joinedRoom.room?.status==="in_game"),fd=()=>{!fr&&Mi.paused||(Mi.pause(),Mi.currentTime=0,fr=!1,Rs=!1)},Gl=()=>{!so&&Si.paused||(Si.pause(),Si.currentTime=0,so=!1)},pd=()=>{!ro&&is.paused||(is.pause(),is.currentTime=0,ro=!1)},s1=()=>{if(!ka||fr||!I_())return;fr=!0;const i=Mi.play();i&&typeof i.catch=="function"&&i.catch(()=>{fr=!1})},r1=()=>{if(!ka||so||!L_())return;so=!0;const i=Si.play();i&&typeof i.catch=="function"&&i.catch(()=>{so=!1})},o1=()=>{if(!ka||ro||!N_())return;ro=!0;const i=is.play();i&&typeof i.catch=="function"&&i.catch(()=>{ro=!1})},ss=()=>{if(N_()){Rs=!1,fd(),Gl(),o1();return}if(I_()){Rs=!1,pd(),Gl(),s1();return}if(L_()){const i=i1();if((Si.getAttribute("data-lobby-src")||"")!==i&&(P_(Si,i,"data-lobby-src"),so=!1),pd(),fr&&!Mi.ended){Rs=!0,Gl();return}Rs=!1,fd(),r1();return}Rs=!1,pd(),fd(),Gl()},rc=i=>{const e=String(i||"").trim(),t=Vh[e]?e:"battle1";t!==ld&&(ld=t,P_(is,$f(ld),"data-bgm-src"),ro=!1,ss())},Vo=()=>{const i=Math.max(0,Math.min(1,Pe.masterVolume));ns.volume=.24*i*Pe.sfxVolume,Mi.volume=.28*i*Pe.musicVolume,Si.volume=.34*i*Pe.musicVolume,is.volume=.38*i*Pe.musicVolume,Z.fov=Pe.fov,Z.updateProjectionMatrix(),yr.fov=Pe.fov,yr.updateProjectionMatrix(),R.showPerf=Pe.showPerfByDefault||R.showPerf,xr()},D_=()=>{const i=Pn(Pe.musicVolume,0,1,1),e=`${Math.round(i*100)}%`;yc&&(yc.value=String(i)),ng&&(ng.textContent=e),Mc&&(Mc.value=String(i)),ig&&(ig.textContent=e)},F_=()=>{wh.value=String(Pe.mouseSensitivity),e_.textContent=Pe.mouseSensitivity.toFixed(2),Ah.value=String(Pe.masterVolume),t_.textContent=`${Math.round(Pe.masterVolume*100)}%`,Rh.value=String(Pe.musicVolume),n_.textContent=`${Math.round(Pe.musicVolume*100)}%`,Ch.value=String(Pe.sfxVolume),i_.textContent=`${Math.round(Pe.sfxVolume*100)}%`,Ph.value=String(Math.round(Pe.fov)),s_.textContent=String(Math.round(Pe.fov)),Ih.checked=!!Pe.showPerfByDefault,D_()},Qc=()=>{Er=!1,Q0.classList.add("hidden"),Ws()},U_=()=>{R.joinedRoom&&(Er=!0,_n=!1,o_(),Q0.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),Ws())},O_=()=>{Er?Qc():U_()},a1=i=>{const e=Ya(i);return e?JA.map(t=>`/characters/${encodeURIComponent(e)}/attack_sound${t}`):[]},l1=i=>new Promise(e=>{const t=new Audio;let n=!1;const s=a=>{n||(n=!0,t.removeEventListener("canplaythrough",r),t.removeEventListener("loadedmetadata",r),t.removeEventListener("error",o),e(a))},r=()=>s(!0),o=()=>s(!1);t.preload="metadata",t.addEventListener("canplaythrough",r,{once:!0}),t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",o,{once:!0}),t.src=i,t.load(),setTimeout(()=>s(!1),900)}),eu=async i=>{const e=Ya(i);if(!e)return Xi;if(cd.has(e)){const s=cd.get(e);if(s&&s!==Xi)return s}if(Number(ud.get(e)||0)>Date.now())return Xi;const n=a1(e);for(let s=0;s<n.length;s+=1){const r=n[s];if(await l1(r))return cd.set(e,r),ud.delete(e),r}return ud.set(e,Date.now()+QA),Xi},c1=(i,e)=>{(i.getAttribute("data-attack-src")||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute("data-attack-src",e),i.removeAttribute("data-fallback-applied"),i.load())},tu=async i=>{const e=String(i||"").trim();if(e===dd&&ns.getAttribute("data-attack-src"))return;dd=e;const t=await eu(e);e===dd&&c1(ns,t)},Zf=()=>{ka||(ka=!0,ss())};window.addEventListener("pointerdown",Zf,{once:!0});window.addEventListener("keydown",Zf,{once:!0});window.addEventListener("touchstart",Zf,{once:!0,passive:!0});Mi.addEventListener("ended",()=>{fr=!1,Rs&&(Rs=!1,ss())});const u1=()=>{const i=ns.getAttribute("data-attack-src")||ns.src||Xi,e=new Audio(i);if(e.preload="auto",e.loop=!1,e.volume=ns.volume,ra.length>=ZA){const s=ra.shift();s&&(s.pause(),s.currentTime=0)}ra.push(e);const t=()=>{const s=ra.indexOf(e);s>=0&&ra.splice(s,1)};e.addEventListener("ended",t,{once:!0}),e.addEventListener("pause",t,{once:!0});const n=e.play();n&&typeof n.catch=="function"&&n.catch(()=>{t()})},d1=i=>{const e=i.distanceTo(Z.position);if(e>=Bg)return 0;const n=1-(Math.max(hd,e)-hd)/(Bg-hd);return .02+Math.pow(Math.max(0,n),1.6)*.2},kg=()=>{for(let i=0;i<Cs.length;i+=1){const e=Cs[i];e.pause(),e.currentTime=0}Cs.length=0},zg=async(i,e="")=>{const t=d1(i);if(t<=.02)return;let n=Xi;e&&(n=await eu(e));const s=new Audio(n||Xi);if(s.preload="auto",s.loop=!1,s.volume=t*Pe.masterVolume*Pe.sfxVolume,Cs.length>=e1){const a=Cs.shift();a&&(a.pause(),a.currentTime=0)}Cs.push(s);const r=()=>{const a=Cs.indexOf(s);a>=0&&Cs.splice(a,1)};s.addEventListener("ended",r,{once:!0}),s.addEventListener("pause",r,{once:!0});const o=s.play();o&&typeof o.catch=="function"&&o.catch(()=>{r()})},h1=()=>{},oo=new Hy;new Ke(0,0);const f1=new kc(.028,.028,1,10,1,!0),p1=new bt({color:10682286,transparent:!0,opacity:1,blending:wi,depthWrite:!1}),m1=new ei(.11,8,8),g1=new bt({color:8257426,transparent:!0,opacity:.9}),_1=new Af(.16,.24,28),x1=new bt({color:10485686,transparent:!0,opacity:.9,blending:wi,depthWrite:!1,side:sn}),pr=[],ao=[],lo=[],ba=[],Ea=[],Ta=[],wa=[],bi=[],v1=24,y1=new ei(.045,6,6),mr=[],M1=420,S1=680,b1=980,E1=.04,T1=.9,w1=.2,A1=5.8,md=35,Vg=165,oa=new P,Hg=new P,oc=new P,lr=new P,Gg=new P,Wl=new P,R1=new P(0,1,0),gd=new mn,_d=new mn,Xl=()=>{let i=1;const e=Ot.drawCalls||0,t=Ot.vfx||0,n=R.fps||0;return e>520&&(i*=.88),e>620&&(i*=.78),t>680&&(i*=.82),t>820&&(i*=.68),n>0&&n<50&&(i*=.9),n>0&&n<40&&(i*=.78),Math.max(.32,Math.min(1,i))},Jf=i=>{const e=Aa();if(!e||!i)return In*Xl();const t=i.x-e.position.x,n=i.y-e.position.y,s=i.z-e.position.z,r=Math.sqrt(t*t+n*n+s*s);if(r<=md)return In*Xl();if(r>=Vg)return In*.35*Xl();const o=(r-md)/(Vg-md);return In*(1-o*.65)*Xl()},C1=()=>{const i=Ot.drawCalls||0,e=i>620?.68:i>520?.82:1;return Math.max(96,Math.round(M1*(.45+In*.55)*e))},B_=()=>{const i=Ot.drawCalls||0,e=i>620?.68:i>520?.82:1;return Math.max(140,Math.round(S1*(.4+In*.6)*e))},De={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,Space:!1},Hh="production".toLowerCase(),P1=Hh==="prod"||Hh==="production",I1=Hh==="test",ql=()=>!P1&&(I1||window.__KOKETRIA_TEST_CONTROLS__===!0||new URLSearchParams(window.location.search).get("testControls")==="1");let gr=!1,bn=0,En=0;const Qf=9,L1=24,N1=18,D1=.45,F1=.92,rn=1.7,k_=6.8,U1=18;let _n=!1,xd=0;const O1=8,B1=1,Gh=55,k1=19,Wg=260,z1=.018,V1=.008,H1=1.2,G1=2.25,Zt=100,Ds=25,$a=0,Gs=30,wo=120,Dn=100,W1=Math.ceil(Dn/3),X1=50,q1=30,j1=20,ep=.62,tp=1.15,np=1.02,z_=.18,Ic=-.45,V_=rn+z_,H_=rn+Ic,G_=rn+Ic*.45,ac=2.45,Lc=.9,Wh=.09,Nc=Lc,Dc=.04,Xg=ac-(Wh+Dc)*.5,K1=Dc,Y1=320;let ip=0,$n=Zt,Bs=$a,ds=Gs,hs=wo-Gs,Mr=Dn,ks=0,rs=!1,It=!1,qi=0,Nt=!1,fs=0,Jn=Hs(),Ei=!1,Ti=0;const $1=700;let Ao=!1,sp=0,co=0,vd=0,Zr=0,za=0,uo=0,W_=0,X_=0,rp=0,op=0,q_=0;const qg=new Qn(0,0,0,"YXZ"),zi=new P,yd=new P,oi=new P,st=new P,jg=new P,Z1=new Gy,ap=Math.PI,Md={head:16731469,body:5104383,torso:11701503},j_=235,J1=180,Q1=380,eR=.52,tR=120,K_=125,nR=75,iR=190,sR=.2,rR=42,oR=10.8,aR=.72,lR=2.4,cR=6.2,uR=3.1,dR=11.5,hR=.55,fR=.32,pR=140,Y_=220,Xh=.12,mR=3.2,gR=7.5,_R=320,Kg=180;let lc=0,qh=!1,Va=j_,Ro=K_,ui=null,Fs=0,nu=0,cc=0;const cn=[];let jh=0;const os=new Map,at={errorSamples:[],correctionsInWindow:0,correctionsPerSec:0,lateAcksInWindow:0,lateAcksPerSec:0},iu=()=>Date.now()+(qh?lc:0),Sd=i=>{const e=Number(i);if(!Number.isFinite(e))return;const t=e-Date.now();if(!qh){lc=t,qh=!0;return}const n=t-lc,s=Math.max(-30,Math.min(30,n));lc+=s*.35},xR=i=>{const e=Number.isFinite(R.latencyMs)?Math.max(0,R.latencyMs):0,t=Number.isFinite(at.correctionsPerSec)?Math.max(0,at.correctionsPerSec):0,n=Math.max(0,Math.min(1,(t-4)/14)),s=Math.max(J1,Math.min(Q1,j_+e*eR+n*tR)),r=Math.max(nR,Math.min(iR,K_+e*sR-n*rR)),o=Math.max(.01,Math.min(1,i*lR));Va+=(s-Va)*o,Ro+=(r-Ro)*o},vR=new Bc(.2,.18,4,8),yR=new ti({color:5082623,emissive:1719696,emissiveIntensity:.85,roughness:.35,metalness:.4}),ji=[],MR=new Tf(.32,0),SR=new ti({color:4584703,emissive:1006976,emissiveIntensity:.9,roughness:.25,metalness:.3}),Ki=[],Yi=[],Ts=i=>{let e=(BigInt(Number(i)>>>0)^0xD1B54A32D192ED03n)&0xFFFFFFFFFFFFFFFFn;const t=6364136223846793005n,n=1n,s=0xFFFFFFFFFFFFFFFFn,r=4294967295;return()=>(e=e*t+n&s,Number(e>>32n&0xFFFFFFFFn)/r)},bR=i=>{const e=String(i||"");let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0||1},ER=0xcbf29ce484222325n,TR=0x100000001b3n,wR=0xFFFFFFFFFFFFFFFFn,nn=(i,e)=>{let t=BigInt.asUintN(64,i);const n=BigInt.asUintN(64,BigInt(e));for(let s=0n;s<8n;s+=1n){const r=n>>s*8n&0xFFn;t^=r,t=t*TR&wR}return t},an=i=>BigInt(Math.round(Number(i)*1e3)),AR=(i,e)=>{if(!i||!Array.isArray(e))return"";let t=ER;t=nn(t,BigInt(e.length)),t=nn(t,an(i.axisX)),t=nn(t,an(i.axisZ)),t=nn(t,an(i.amp1)),t=nn(t,an(i.amp2)),t=nn(t,an(i.amp3)),t=nn(t,an(i.freq1)),t=nn(t,an(i.freq2)),t=nn(t,an(i.freq3)),t=nn(t,an(i.phase1)),t=nn(t,an(i.phase2)),t=nn(t,an(i.phase3));for(let n=0;n<e.length;n+=1){const s=e[n];t=nn(t,an(s.minX)),t=nn(t,an(s.maxX)),t=nn(t,an(s.minZ)),t=nn(t,an(s.maxZ))}return t.toString(16).padStart(16,"0")},RR=i=>{const e=Ts((Number(i)^1597334677)>>>0);return{axisX:NA*(.94+e()*.1),axisZ:DA*(.94+e()*.1),amp1:.1+e()*.09,amp2:.07+e()*.07,amp3:.05+e()*.06,freq1:2+Math.floor(e()*3),freq2:3+Math.floor(e()*3),freq3:5+Math.floor(e()*4),phase1:e()*Math.PI*2,phase2:e()*Math.PI*2,phase3:e()*Math.PI*2,terrainPhase:e()*Math.PI*2,terrainPhaseB:e()*Math.PI*2,terrainPhaseC:e()*Math.PI*2}},$_=(i,e,t=0)=>{const n=Math.max(8,Yc-Math.max(0,t));return Math.abs(i)<=n&&Math.abs(e)<=n},CR=(i,e,t=0)=>{const n=Math.max(8,Yc-Math.max(0,t));return Math.min(n-Math.abs(i),n-Math.abs(e))},Kh=(i,e,t=0)=>{const n=Math.max(8,Yc-Math.max(0,t));return{x:Math.max(-n,Math.min(n,i)),z:Math.max(-n,Math.min(n,e))}},PR=()=>{for(let i=od.length-1;i>=0;i-=1){const e=od[i];e&&(me.remove(e),e.traverse(t=>{t.isMesh&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>s.dispose()))}))}od.length=0,Uh.length=0},di=i=>{Sa=Math.min(1,Sa+.5),i&&kA.copy(i)},Z_=(i,e=!1)=>{const t=Number(i);if(!Number.isFinite(t)||Wi===t&&!e)return;Wi=t,Ug=RR(t);for(let m=dn.length-1;m>=0;m-=1){const p=dn[m];p!==Oa&&(me.remove(p),p.geometry.dispose(),p.material.dispose())}dn.length=0,dn.push(Oa),Os.length=0,PR();for(let m=ji.length-1;m>=0;m-=1)me.remove(ji[m].mesh);ji.length=0;for(let m=Ki.length-1;m>=0;m-=1)me.remove(Ki[m].mesh);Ki.length=0;for(let m=Yi.length-1;m>=0;m-=1)me.remove(Yi[m].mesh);Yi.length=0;const n=Ts(t^2654435769);for(let m=0;m<220;m+=1){const p=1+n()*3,v=1+n()*3,b=3+n()*24,S=new Xe(new qn(p,b,v),IA.clone());S.position.set((n()-.5)*220,b/2,(n()-.5)*220),S.userData.hp=1,me.add(S),dn.push(S),Os.push({minX:S.position.x-p/2,maxX:S.position.x+p/2,minZ:S.position.z-v/2,maxZ:S.position.z+v/2})}const s=Math.max(12,Yc+tr*.5),r=LA.clone();r.emissiveIntensity=.2;const o=new Xe(new qn(s*2+tr*2,Es,tr),r.clone());o.position.set(0,Es*.5,s),me.add(o),dn.push(o);const a=new Xe(new qn(s*2+tr*2,Es,tr),r.clone());a.position.set(0,Es*.5,-s),me.add(a),dn.push(a);const l=new Xe(new qn(tr,Es,s*2),r.clone());l.position.set(s,Es*.5,0),me.add(l),dn.push(l);const c=new Xe(new qn(tr,Es,s*2),r.clone());c.position.set(-s,Es*.5,0),me.add(c),dn.push(c);const u=Ts(t^2246822507),d=Ts(t^2698190635);for(let m=0;m<X1;m+=1){const p=ad("mana",()=>new Xe(vR,yR.clone())),v=(u()-.5)*180,b=(u()-.5)*180,S=.35;p.position.set(v,S,b),me.add(p),ji.push({index:m,mesh:p,baseY:S,phase:d()*Math.PI*2,active:!0,respawnAtMs:0,pendingRequestUntil:0})}const h=Ts(t^3266489909),f=Ts(t^3532564665);for(let m=0;m<q1;m+=1){const p=ad("defensa",()=>new Xe(MR,SR.clone())),v=(h()-.5)*180,b=(h()-.5)*180,S=.6;p.position.set(v,S,b),me.add(p),Ki.push({index:m,mesh:p,baseY:S,phase:f()*Math.PI*2,active:!0,respawnAtMs:0,pendingRequestUntil:0})}const g=Ts(t^668265263),_=Ts(t^348517143);for(let m=0;m<j1;m+=1){const p=ad("vida",()=>new Xe(new wf(.34,0),new ti({color:9502623,emissive:2985794,emissiveIntensity:.8,roughness:.32,metalness:.25}))),v=(g()-.5)*180,b=(g()-.5)*180,S=.55;p.position.set(v,S,b),me.add(p),Yi.push({index:m,mesh:p,baseY:S,phase:_()*Math.PI*2,active:!0,respawnAtMs:0,pendingRequestUntil:0})}hr=AR(Ug,Os)},su=i=>String(i||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,""),Ho=i=>{const e=su(i);return e==="silentman"||e==="silenmant"},Za=i=>su(i)==="pumori",Ja=i=>su(i)==="neoorphen",Qa=i=>{const e=su(i);return e==="pezunalunar"||e==="pezuanalunar"},J_=i=>Ho(i)||Ja(i)||Qa(i)||Za(i),Co=i=>Ho(i)||Za(i)||Ja(i)||Qa(i),IR=()=>Co(He)?B1:1/O1,Q_=()=>Math.max(0,Pc-performance.now()),ex=i=>{const e=Number(i);if(!Number.isFinite(e)||e<=0){Pc=0;return}Pc=performance.now()+e},lp=(i=!1)=>{if(!nd)return;const e=!!R.joinedRoom;if(!J_(He)){(i||pa!==-1)&&(nd.textContent="Especial R: -",pa=-1),ta&&ta.classList.add("hidden");return}const t=Q_(),n=t>0?Math.ceil(t/1e3):0;if(!(!i&&pa===n)&&(pa=n,nd.textContent=n>0?`Especial R: ${n}s`:"Especial R: LISTO",ta&&(e?ta.classList.remove("hidden"):ta.classList.add("hidden")),lg&&(lg.textContent=n>0?`${n}s`:"LISTO"),cg)){const s=Ho(He)?n1:t1,r=Math.max(0,Math.min(1,t/s));cg.style.width=`${Math.round((1-r)*100)}%`}};Z_(1);const Cn=()=>{const i=Co(He),e=i?Math.round(Mr):ds,t=i?Dn:hs,n=i?"Mana":"Balas",s=Math.round($n),r=Math.round(Bs);if(Cw.textContent=`Vida: ${s}`,Pw.textContent=`Escudo: ${r}`,Iw.textContent=`${n}: ${e} / ${t}${!i&&rs?" (recargando...)":""}`,lp(!0),Bw.textContent=`Kills: ${ip}`,Lw.textContent=`${s}`,Nw.textContent=`${r}`,Dw.textContent=`${e} / ${t}`,Fw.style.width=`${Math.max(0,Math.min(100,$n/Zt*100))}%`,Uw.style.width=`${Math.max(0,Math.min(100,Bs/Ds*100))}%`,Ow.style.height=`${Math.max(0,Math.min(100,e/t*100))}%`,!R.joinedRoom){fg.textContent="Sala: -",pg.textContent="Estado: waiting",mg.textContent="Clima: -",gg.textContent="Jugadores: -",id.classList.add("hidden"),Ig();return}const o=R.joinedRoom.room,a=R.joinedRoom.players.map(l=>l.name).join(", ");if(fg.textContent=`Sala: ${o.name} (${o.id})`,pg.textContent=`Estado: ${o.status}`,mg.textContent=`Clima: ${SA(o.weather)}`,gg.textContent=`Jugadores: ${a||"-"}`,p_()){id.classList.remove("hidden");const l=Number(R.joinedRoom.players?.length||0),c=String(o.mode||"freeforall").toLowerCase(),u=Number(o.requiredPlayers||0),d=c!=="versusmatch"||u>0&&l===u;Y0.disabled=o.status==="in_game"||!d,$0.disabled=o.status!=="in_game"}else id.classList.add("hidden");f_(),zf(),xr(),tx(),Ig()},ps=()=>{if(!Nt||!R.joinedRoom||!Eo()){rg.classList.add("hidden");return}Rw.textContent=String(Jn),rg.classList.remove("hidden")},cr=()=>{Ao=!1,sp=0,co=0,K0.classList.add("hidden")},LR=(i,e)=>{const t=String(i?.name||"Desconocido"),n=String(i?.character||"Sin personaje"),s=wt(i?.team),r=Math.max(1,Number(e)||10);Ao=!0,sp=performance.now()+r*1e3,co=r,s==="red"?ed.textContent="Ganador: Equipo Rojo":s==="blue"?ed.textContent="Ganador: Equipo Azul":ed.textContent=`Ganador: ${t} (${n})`,Eh.textContent=String(co),K0.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),_n=!1,Nt&&(Nt=!1,Ei=!1,Ti=0,fs=0,Jn=Hs(),ps())},tx=(i=0)=>{if(!td)return;const e=!!(R.joinedRoom&&R.joinedRoom.room.status==="in_game"),n=1-Math.max(0,Math.min(1,$n/Zt));let s=e&&!Nt?n*.62:0;e||(Zr=0);const r=i>0?Math.min(1,i*4.8):1;vd+=(s-vd)*r,Zr=Math.max(0,Zr-(i>0?i*1.7:0));const o=e&&!Nt?(Math.sin(performance.now()*.01)+1)*.5*n*.22:0,a=Math.max(0,Math.min(.92,vd+o+Zr));td.style.opacity=a.toFixed(3),td.style.setProperty("--bleed-inner",`${20+n*24}%`)},NR=(i=!1)=>{const e=performance.now();W_=e+140,i&&(X_=e+220)},DR=()=>{rp=performance.now()+320},FR=i=>{if(!i||!R.remotePlayers.has(i))return;const e=R.remotePlayers.get(i);if(!e?.group)return;const t=e.group.position.x-Z.position.x,n=e.group.position.z-Z.position.z;q_=(Math.atan2(t,-n)-bn)*180/Math.PI,op=performance.now()+520},UR=()=>{if(!ia)return;const i=performance.now(),e=Math.sqrt(st.x*st.x+st.z*st.z),t=Math.min(1,e/Math.max(.001,Qf)),n=It?.85:0,s=5+t*7.5+n*6+za*10+uo*6.5;ia.style.setProperty("--crosshair-gap",`${s.toFixed(2)}px`),ia.classList.toggle("hit",i<=W_),ia.classList.toggle("headshot",i<=X_),ia.classList.toggle("kill",i<=rp)},OR=()=>{if(!Ol)return;if(!(performance.now()<=op)){Ol.classList.remove("visible");return}Ol.classList.add("visible"),Ol.style.setProperty("--damage-angle",`${q_.toFixed(1)}deg`)},uc=()=>{WR(),$n=Zt,Bs=$a,ds=Gs,hs=wo-Gs,Mr=Dn,ks=0,Pc=0,pa=null,rs=!1,It=!1,qi=0,ip=0,Nt=!1,Ei=!1,Ti=0,Jn=Hs(),fs=0,cr(),_n=!1,rp=0,op=0,ps(),Cn()},cp=()=>{Co(He)||rs||ds>=Gs||hs<=0||!Gt()||lt({type:"player_reload"})},Yh=()=>!Gt()||!J_(He)?!1:Q_()>0?(lp(!0),!0):Qa(He)?(lt({type:"player_special_lunar_rain"}),!0):Ho(He)?(lt({type:"player_special_silent_cone"}),!0):Ja(He)?(lt({type:"player_special_neoorphen_meteor"}),!0):(Za(He)&&lt({type:"player_special_pumori_orbit"}),!0),Yg=()=>{zs(),Gt()&&!It&&Z.position.y<=rn+.001&&(It=!0,qi=k_,Sr(!0))},BR=()=>{if(!Nt||!Eo())return;const i=performance.now();Ei&&i-Ti<$1||(Ei=!0,Ti=i,lt({type:"player_respawn"}))},nx=(i=null)=>{if(!Eo())return;Nt=!0,Ei=!1,Ti=0,_n=!1,It=!1,qi=0;const e=iu(),t=Number(i);if(Number.isFinite(t)&&t>e){const n=Math.max(200,t-e);fs=performance.now()+n,Jn=Math.max(1,Math.ceil(n/1e3))}else{const n=Hs();fs=performance.now()+n*1e3,Jn=n}document.pointerLockElement&&document.exitPointerLock(),ps()},$g=(i,e,t)=>{const n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return i+n*t},ws=(i,e,t)=>{const n=i.find(s=>s.name===e);return n||i.find(s=>{const r=String(s.name||"").toLowerCase();return t.some(o=>r.includes(o))})},up=i=>{const e=String(i||"").trim();if(!e)return Mn[0]||He||"silentman";if(Mn.includes(e))return e;const t=e.toLowerCase(),n=Mn.find(s=>Ba(s).toLowerCase()===t);return n||e},_i=(i,e)=>{if(!i.actions)return;const t=i.actions[e]||i.actions.move||null;t&&i.currentAnimation!==e&&(Object.values(i.actions).forEach(n=>{!n||n===t||n.fadeOut(.12)}),e==="death"?(t.reset(),t.setLoop(uf,1),t.clampWhenFinished=!0,t.fadeIn(.08).play()):(t.reset(),t.setLoop(Xa,1/0),t.clampWhenFinished=!1,t.fadeIn(.1).play()),i.currentAnimation=e)},Ha=i=>{i.actions&&_i(i,"idle")},Ps=i=>{if(!Ne.actions)return;const e=Ne.actions[i]||Ne.actions.move||null;e&&Ne.currentAnimation!==i&&(Object.values(Ne.actions).forEach(t=>{!t||t===e||t.fadeOut(.1)}),i==="death"||i==="funny"?(e.reset(),e.setLoop(uf,1),e.clampWhenFinished=!0,e.fadeIn(.08).play()):(e.reset(),e.setLoop(Xa,1/0),e.clampWhenFinished=!1,e.fadeIn(.08).play()),Ne.currentAnimation=i)},zs=()=>{Ne.funnyUntil<=0||(Ne.funnyUntil=0,Ne.currentAnimation==="funny"&&Ps("idle"))},ix=i=>{const e=new fn,t=Xc(i.scene),n=new Tn().setFromObject(t),s=Number.isFinite(n.min.y)?n.min.y:0;t.position.y-=s,e.add(t);const r=new If(t),o=i.animations||[],a=i.animationSet?.idle||ws(o,"idle",["idle"]),l=i.animationSet?.running||ws(o,"running",["running"]),c=i.animationSet?.jump||ws(o,"jump",["jump"]),u=i.animationSet?.funny||ws(o,"funny",["funny"]),d=i.animationSet?.attack||ws(o,"attack",["attack"]),h=i.animationSet?.dead||ws(o,"dead",["dead"]),f={idle:a?r.clipAction(a):null,move:l?r.clipAction(l):null,jump:c?r.clipAction(c):null,funny:u?r.clipAction(u):null,shoot:d?r.clipAction(d):null,death:h?r.clipAction(h):null};return me.add(e),{group:e,avatarRoot:t,mixer:r,actions:f,body:null,head:null}},kR=()=>{Ne.teamOutline&&au(Ne.teamOutline),Ne.group&&me.remove(Ne.group),Ne.group=null,Ne.mixer=null,Ne.actions=null,Ne.currentAnimation="",Ne.funnyUntil=0,Ne.teamOutline=null},dp=async()=>{const i=$t.value||He;if(!i)return;const e=`${i}`;Ne.loadingKey=e;const t=await wr(i);if(!t?.loaded||Ne.loadingKey!==e)return;kR();const n=ix(t);Ne.group=n.group,Ne.mixer=n.mixer,Ne.actions=n.actions,Ne.currentAnimation="",Ne.shootUntil=0,Ne.funnyUntil=0,Wa(),Ps("idle")},zR=i=>{if(!Ne.group)return;Ne.teamOutline&&(Ne.teamOutline.visible=m_());const e=!!(R.joinedRoom&&dr&&!Nt);if(Ne.group.visible=e,!e)return;Ne.group.position.set(Z.position.x,Z.position.y-rn,Z.position.z),Ne.group.rotation.y=bn+ap;const t=performance.now(),n=De.KeyW||De.KeyA||De.KeyS||De.KeyD;Ne.funnyUntil>t?Ps("funny"):It?Ps("jump"):Ne.shootUntil>t?Ps("shoot"):Ps(n?"move":"idle"),Ne.mixer&&Ne.mixer.update(i)},VR=i=>{const e=new fn,t=new ti({color:i?4835839:6815591,emissive:i?731702:1003290,emissiveIntensity:.6,roughness:.6}),n=t.clone(),s=new Xe(new Bc(.35,.9,4,8),t),r=new Xe(new ei(.22,12,12),n);return s.position.y=1.15,r.position.y=1.95,e.add(s),e.add(r),me.add(e),{group:e,avatarRoot:e,body:s,head:r,mixer:null,actions:null}},Ga=async i=>{const e=up(i.character);if(!e)return;const t=await wr(e);if(!t?.loaded||!R.remotePlayers.has(i.id))return;const n=R.remotePlayers.get(i.id);if(!n)return;n.character=e;const s=n.group.position.clone(),r=n.group.rotation.y;ru(n);const o=ix(t);o.group.position.copy(s),o.group.rotation.y=r,n.group=o.group,n.avatarRoot=o.avatarRoot,n.body=o.body,n.head=o.head,n.mixer=o.mixer,n.actions=o.actions,n.currentAnimation=null,n.animationUntil=0,n.isDead=!1,n.isJumping=!1,n.deadAt=0,gp(n);const a=px();n.group.add(a.holder),n.healthBar=a,Vs(n),mp(n),Ha(n)},ru=i=>{YR(i),i.teamOutline&&(au(i.teamOutline),i.teamOutline=null),i.healthBar&&(i.healthBar.holder?.parent&&i.healthBar.holder.parent.remove(i.healthBar.holder),i.healthBar.bg&&(i.healthBar.bg.geometry.dispose(),i.healthBar.bg.material.dispose()),i.healthBar.fill&&(i.healthBar.fill.geometry.dispose(),i.healthBar.fill.material.dispose()),i.healthBar.shieldBg&&(i.healthBar.shieldBg.geometry.dispose(),i.healthBar.shieldBg.material.dispose()),i.healthBar.shieldFill&&(i.healthBar.shieldFill.geometry.dispose(),i.healthBar.shieldFill.material.dispose()),i.healthBar.manaBg&&(i.healthBar.manaBg.geometry.dispose(),i.healthBar.manaBg.material.dispose()),i.healthBar.manaFill&&(i.healthBar.manaFill.geometry.dispose(),i.healthBar.manaFill.material.dispose()),i.healthBar.text&&(i.healthBar.text.geometry.dispose(),i.healthBar.text.material.dispose()),i.healthBar.textTexture&&i.healthBar.textTexture.dispose(),i.healthBar=null),me.remove(i.group),i.body&&(i.body.geometry.dispose(),i.body.material.dispose()),i.head&&(i.head.geometry.dispose(),i.head.material.dispose())},HR=(i,e,t)=>{const n=VR(e),s=up(t);R.remotePlayers.set(i,{id:i,name:"Player",character:s,group:n.group,avatarRoot:n.avatarRoot,body:n.body,head:n.head,mixer:n.mixer,actions:n.actions,currentAnimation:null,animationUntil:0,isDead:!1,health:Zt,shield:$a,mana:Dn,isJumping:!1,deadAt:0,targetPosition:new P(0,0,0),targetYaw:0,targetPitch:0,netSnapshots:[],netInitialized:!1,smoothedMoveSpeed:0,movingUntil:0,lastAnimationAt:0,healthBar:null,team:null,teamOutline:null,hitboxDebug:null});const r=R.remotePlayers.get(i),o=px();r.group.add(o.holder),r.healthBar=o,Vs(r),r.character||(r.character=Mn[0]||He||"silentman"),gp(r),mp(r),Ga(r)},$h=i=>{if(R.self&&i.id===R.self.id)return;R.remotePlayers.has(i.id)||HR(i.id,R.joinedRoom?.room?.hostId===i.id,i.character);const e=R.remotePlayers.get(i.id);i.name&&(e.name=String(i.name)),e.team=wt(i.team),gp(e);const n=typeof i.character=="string"&&i.character.length>0?up(i.character):e.character;n!==e.character&&(e.character=n||e.character,Ga(e)),e.mixer||(e.character||(e.character=Mn[0]||He||"silentman"),e.character&&Ga(e));const s=i.state?.position||{x:0,y:rn,z:0},r=i.state?.rotation||{yaw:0,pitch:0},o=!!i.state?.moving,a=Number.isFinite(Number(i.ts))?Number(i.ts):Date.now();e.isJumping=!!i.state?.jumping,o&&(e.movingUntil=Math.max(Number(e.movingUntil||0),performance.now()+Y_));let l=!1;Number.isFinite(Number(i.health))&&(e.health=Math.max(0,Math.min(Zt,Math.round(Number(i.health)))),l=!0),Number.isFinite(Number(i.shield))&&(e.shield=Math.max(0,Math.min(Ds,Math.round(Number(i.shield)))),l=!0),Number.isFinite(Number(i.mana))&&(e.mana=Math.max(0,Math.min(Dn,Math.round(Number(i.mana)))),l=!0),l&&Vs(e),typeof i.alive=="boolean"&&(!i.alive&&!e.isDead?(e.isDead=!0,e.deadAt=performance.now(),e.animationUntil=0,_i(e,"death"),Vs(e)):i.alive&&e.isDead&&(e.isDead=!1,e.deadAt=0,e.animationUntil=0,Ha(e),Number.isFinite(Number(i.health))||(e.health=Zt),Vs(e)));const u={ts:a,x:s.x,y:s.y-rn,z:s.z,yaw:r.yaw,pitch:r.pitch,jumping:!!i.state?.jumping,moving:o},d=e.netSnapshots.length>0?e.netSnapshots[e.netSnapshots.length-1]:null;d&&u.ts<=Number(d.ts)||(e.netSnapshots.push(u),e.netSnapshots.length>32&&e.netSnapshots.splice(0,e.netSnapshots.length-32),e.netInitialized||(e.group.position.set(u.x,u.y,u.z),e.targetPosition.set(u.x,u.y,u.z),e.group.rotation.y=u.yaw+ap,e.targetYaw=u.yaw,e.targetPitch=u.pitch,e.smoothedMoveSpeed=0,e.netInitialized=!0))},GR=i=>{const e=new Set;i.players.forEach(t=>{R.self&&t.id===R.self.id||(e.add(t.id),$h(t))});for(const[t,n]of R.remotePlayers.entries())e.has(t)||(ru(n),R.remotePlayers.delete(t))},Zg=()=>{for(const i of R.remotePlayers.values())ru(i);R.remotePlayers.clear()},Fn=(i,e,t=10682286,n={})=>{lr.subVectors(e,i);const s=lr.length();if(s<=1e-4)return;const r=oc.copy(i).add(e).multiplyScalar(.5),o=Jf(r);if(o<.999&&Math.random()>o)return;const a=Number.isFinite(n.radiusScale)?n.radiusScale:1,l=Number.isFinite(n.life)?n.life:.14,c=Number.isFinite(n.opacity)?n.opacity:1,u=p1.clone();u.color=new Ie(t),u.opacity=c;const d=new Xe(f1,u);if(d.position.copy(r),d.quaternion.setFromUnitVectors(R1,lr.multiplyScalar(1/s)),d.scale.set(a,s,a),d.userData.life=l,me.add(d),pr.push(d),pr.length>C1()){const h=pr.shift();h&&(me.remove(h),h.material.dispose())}},Zh=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new P().crossVectors(r,new P(0,1,0));o.lengthSq()<1e-4?o=new P(1,0,0):o.normalize();const a=new P().crossVectors(o,r).normalize(),l=t.palette||vr("holy",t.team),c=new Xe(new ei(.22,14,14),new bt({color:l.impactA,transparent:!0,opacity:.96,blending:wi,depthWrite:!1}));c.position.copy(i),me.add(c),ba.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:85,phase:Math.random()*Math.PI*2,spin:Math.PI*15+Math.random()*Math.PI*6,radius:.72,radiusFalloff:.22,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:l.impactA,b:l.impactB,tracer:l.tracer}})},sx=(i=1,e=1,t=null)=>{const n=vr("hammer",t),s=new fn,r=new Xe(new qn(.46*i,.26*i,.22*i),new bt({color:n.impactA,transparent:!0,opacity:Math.max(.1,Math.min(1,.98*e)),blending:wi,depthWrite:!1})),o=new Xe(new kc(.05*i,.05*i,.7*i,10),new bt({color:n.tracer,transparent:!0,opacity:Math.max(.1,Math.min(1,.95*e)),blending:wi,depthWrite:!1}));return o.rotation.z=Math.PI/2,s.add(r),s.add(o),s},rx=(i,e,t={})=>{const n=e.clone().sub(i);if(n.length()<=1e-4)return;const r=n.clone().normalize();let o=new P().crossVectors(r,new P(0,1,0));o.lengthSq()<1e-4?o=new P(1,0,0):o.normalize();const a=new P().crossVectors(o,r).normalize(),l=t.palette||vr("hammer",t.team),c=sx(1,1,t.team);c.position.copy(i),me.add(c),Ea.push({mesh:c,prevPos:i.clone(),pos:i.clone(),velocity:r.clone().multiplyScalar(34).add(a.clone().multiplyScalar(7.2)),origin:i.clone(),right:o,up:a,traveledDistance:0,spin:(Math.random()>.5?1:-1)*(Math.PI*6.5+Math.random()),phase:Math.random()*Math.PI*2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:l.impactA,b:l.impactB,tracer:l.tracer}})},Po=i=>{const e=String(i||"");for(let t=bi.length-1;t>=0;t-=1){const n=bi[t];if(n.ownerId===e){for(let s=0;s<n.hammers.length;s+=1){const r=n.hammers[s],o=r?.mesh;o&&(r.disposed||(me.remove(o),o.traverse(a=>{a.isMesh&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),r.disposed=!0))}bi.splice(t,1)}}},WR=()=>{for(let i=bi.length-1;i>=0;i-=1)Po(bi[i]?.ownerId)},ox=i=>{const e=String(i||"");if(!e)return null;if(R.self&&e===R.self.id)return Z.position.clone();const t=R.remotePlayers.get(e);return t?.group?t.group.position.clone():null},XR=(i,e,t=0,n=null)=>{const s=String(i||"");if(!s)return;Po(s);const r=ox(s)||(n instanceof P?n.clone():null),o=performance.now(),a=Math.max(0,Number(t)||0),l=o-a,c=[],u=Math.max(500,Number(e)||1e4),d=da(s);bi.push({ownerId:s,team:d,hammers:c,createdAt:l,endAt:l+u,spawnIntervalMs:220,nextSpawnAt:l,spawnCount:0,maxOrbitRadius:22,maxActiveHammers:28,phase:Math.random()*Math.PI*2,waitingOwnerUntil:r?0:o+1e4})},qR=(i,e=null)=>{if(!i?.mesh||i.disposed)return;const t=i.mesh;if(me.remove(t),t.traverse(n=>{n.isMesh&&(n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose())}),i.disposed=!0,t.visible=!1,e){const n=Lt(e,16773830),s=Lt(e,10154239);n&&(n.scale.setScalar(1.9),n.userData.life=.28),s&&(s.scale.setScalar(1.45),s.userData.life=.24)}},Jh=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new P().crossVectors(r,new P(0,1,0));o.lengthSq()<1e-4?o=new P(1,0,0):o.normalize();const a=new P().crossVectors(o,r).normalize(),l=t.palette||vr("poison",t.team),c=new Xe(new ei(.3,16,16),new bt({color:l.tracer,transparent:!0,opacity:.9,blending:wi,depthWrite:!1}));c.position.copy(i),me.add(c),Ta.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:60,phase:Math.random()*Math.PI*2,spin:Math.PI*9+Math.random()*Math.PI*3,waveAmpA:1.05,waveAmpB:.42,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:l.impactA,b:l.impactB,tracer:l.tracer}})},Qh=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new P().crossVectors(r,new P(0,1,0));o.lengthSq()<1e-4?o=new P(1,0,0):o.normalize();const a=new P().crossVectors(o,r).normalize(),l=t.palette||vr("lunar",t.team),c=new Xe(new ei(.22,16,16),new bt({color:l.impactA,transparent:!0,opacity:.96,blending:wi,depthWrite:!1}));c.position.copy(i),me.add(c),wa.push({mesh:c,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:80,phase:Math.random()*Math.PI*2,spin:Math.PI*10+Math.random()*Math.PI*4,waveAmpA:.4,waveAmpB:.2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:l.impactA,b:l.impactB,tracer:l.tracer}})},Lt=(i,e=8257426)=>{const t=Jf(i);if(t<.999&&Math.random()>t||ao.length>=B_())return null;const n=new Xe(m1,g1.clone());return n.material.color=new Ie(e),n.position.copy(i),n.userData.life=.26,me.add(n),ao.push(n),n},Go=(i,e=10485686)=>{if(!i)return null;const t=Jf(i);if(t<.999&&Math.random()>t||lo.length>=B_())return null;const n=new Xe(_1,x1.clone());return n.material.color=new Ie(e),n.position.copy(i),n.position.y+=E1,n.rotation.x=-Math.PI/2,n.scale.setScalar(T1),n.userData.life=w1,n.userData.expand=A1,me.add(n),lo.push(n),n},ho=(i,e,t,n)=>{oa.subVectors(e,i);const s=oa.length();if(s<=1e-4)return null;oa.multiplyScalar(1/s),Hg.subVectors(t,i);const r=Hg.dot(oa);return r<0||r>s?null:(oc.copy(oa).multiplyScalar(r).add(i),oc.distanceToSquared(t)<=n*n?oc.clone():null)},el=(i,e,t=.2)=>{lr.subVectors(e,i);const n=lr.length();if(n<=1e-4)return null;lr.multiplyScalar(1/n),oo.set(i,lr),oo.far=n+t;const s=oo.intersectObjects(dn,!1),r=s.length>0?s[0].point.clone():null,o=e.y-i.y;let a=null;if(Math.abs(o)>1e-6){const l=(.2-i.y)/o;l>=0&&l<=1&&(a=new P(i.x+(e.x-i.x)*l,.2,i.z+(e.z-i.z)*l))}return r?a&&i.distanceToSquared(a)<i.distanceToSquared(r)?a:r:a},tl=(i,e)=>{Gg.set(Z.position.x,Z.position.y+z_,Z.position.z),Wl.set(Z.position.x,Z.position.y+Ic,Z.position.z);const t=ho(i,e,Gg,ep);if(t)return{point:t,headshot:!0};const n=ho(i,e,Wl,tp);if(n)return{point:n,headshot:!1};Wl.set(Z.position.x,Z.position.y+Ic*.45,Z.position.z);const s=ho(i,e,Wl,np);return s?{point:s,headshot:!1}:null},ax=(i,e,t)=>{if(!i?.group||i.isDead)return null;const n=new P(i.group.position.x,i.group.position.y+V_,i.group.position.z),s=new P(i.group.position.x,i.group.position.y+H_,i.group.position.z),r=new P(i.group.position.x,i.group.position.y+G_,i.group.position.z);return ho(e,t,n,ep)||ho(e,t,s,tp)||ho(e,t,r,np)},ou=(i,e)=>{},jR=i=>{if(!R.self)return;const e=i.players.find(s=>s.id===R.self.id);if(!e)return;Ne.team=wt(e.team),Wa();const t=e.state?.position,n=e.state?.rotation;t&&(Z.position.set(t.x,t.y,t.z),Fc(),dc(),It=!!e.state?.jumping,!It&&Z.position.y<=rn+.001&&(qi=0)),n&&(bn=n.yaw,En=n.pitch,nl()),ip=Number.isFinite(e.kills)?e.kills:0,Number.isFinite(e.health)&&($n=Math.max(0,Math.min(Zt,Number(e.health)))),Number.isFinite(e.shield)&&(Bs=Math.max(0,Math.min(Ds,Math.round(e.shield)))),Number.isFinite(e.mana)&&(Mr=Math.max(0,Math.min(Dn,Math.round(e.mana)))),Number.isFinite(Number(e.ammoInMag))&&(ds=Math.max(0,Math.min(Gs,Math.round(Number(e.ammoInMag))))),Number.isFinite(Number(e.ammoReserve))&&(hs=Math.max(0,Math.min(wo,Math.round(Number(e.ammoReserve))))),typeof e.isReloading=="boolean"&&(rs=!!e.isReloading),Number.isFinite(Number(e.reloadRemainingMs))&&Math.max(0,Number(e.reloadRemainingMs)/1e3),Number.isFinite(Number(e.pendingHealthRegen))&&(ks=Math.max(0,Number(e.pendingHealthRegen))),Number.isFinite(Number(e.lunarRainCooldownMs))&&ex(Number(e.lunarRainCooldownMs)),ef(),e.alive===!1&&!Nt&&Eo()&&nx(e.respawnAvailableAtMs),e.alive===!0&&Nt&&(Nt=!1,Ei=!1,Ti=0,fs=0,Jn=Hs(),ps())},KR=i=>{if(!R.self||!i?.players)return;const e=i.players.find(t=>t.id===R.self.id);e&&(Ne.team=wt(e.team),Wa())},Jg=(i,e={})=>{const t=!R.joinedRoom;t&&uc(),R.joinedRoom=i;const n=Number.isFinite(i.room?.mapSeed)?i.room.mapSeed:bR(i.room?.id);ts=String(i.room?.mapCollisionHash||"").trim().toLowerCase()||null;const r=!!(ts&&Wi===Number(n)&&hr&&hr!==ts);Z_(n,r),cC(i.room?.pickups),GR(i),KR(i),io(i.room?.weather),rc(i.room?.battleTheme),(e.applyOwnState||t)&&jR(i);const o=i.room.status==="in_game"||i.room.status==="cooldown";ya(o),tc(),g_(i.room),Ns(),i.room.status!=="cooldown"&&cr(),Ma(),Cn()},lx=()=>{const i=wA(),e=new WebSocket(i);R.ws=e,Yu.textContent=`Conectando a ${i}`,e.addEventListener("open",()=>{Yu.textContent="Conectado",ar(),lt({type:"list_rooms"})}),e.addEventListener("message",t=>{let n;try{n=JSON.parse(t.data)}catch{ar("Respuesta invalida del servidor");return}if(n.ok===!1&&n.error){ar(n.error.message||"Error del servidor");return}if(n.type==="connected"){R.self=n.data.player;const s=d_(),r=s||gn(R.self.name||"");Qi.value=r,gi&&(gi.value=r),!R.profileReady&&s.length>=2&&Bo(!0),R.lobbyUsers=Array.isArray(n.data?.lobby?.players)?n.data.lobby.players:[],R.self.character&&Mn.includes(R.self.character)&&(He=R.self.character,$t.value=R.self.character),tu(R.self.character||He),R.rooms=n.data.rooms||[],bo(),va(),jc(),zo(),Nh(),Ns(),R.profileReady&&lt({type:"set_profile",playerName:gn(Qi.value),character:$t.value||He});return}if(n.type==="rooms_list"){R.rooms=n.data||[],Nh();return}if(n.type==="lobby_presence"){R.lobbyUsers=Array.isArray(n.data?.players)?n.data.players:[],va();return}if(n.type==="lobby_chat_message"){const s=n.data||{},r=String(s.playerName||"Player"),o=String(s.text||"");xA(r,o);return}if(n.type==="profile_updated"){const s=gn(n.data?.player?.name||"");s&&(R.self&&(R.self.name=s),Qi.value=s,bo());return}if(n.type==="room_joined"){dc(),Jg(n.data,{applyOwnState:!0});return}if(n.type==="room_state"){Jg(n.data);return}if(n.type==="left_room"){dc(),R.joinedRoom=null,R.showScoreboard=!1,Xr=null,R.latencyMs=null,Zg(),ya(!1),tc(),kg(),io("night"),rc("battle1"),uc(),Ei=!1,Ti=0,cr(),Ne.team=null,Wa(),Gi.length=0,Kn.length=0,kf(),Fa(),Cn(),Ns(),Ma(),ss();return}if(n.type==="pong"){const s=String(n.data?.probeId||"");Sd(n.data?.serverTs),Xr&&s===Xr.id&&(R.latencyMs=performance.now()-Xr.sentAt,Xr=null,xr());return}if(n.type==="ping"){const s=n.data?.probeId;Sd(n.data?.serverTs),Number.isFinite(Number(s))&&lt({type:"pong",probeId:Number(s),clientTs:Date.now()});return}if(n.type==="latency_update"){const s=Number(n.data?.latencyMs);Number.isFinite(s)&&s>=0&&(R.latencyMs=s,xr()),Sd(n.data?.serverTs);return}if(n.type==="player_move_ack"){const s=n.data?.position;if(s&&Number.isFinite(Number(s.x))&&Number.isFinite(Number(s.y))&&Number.isFinite(Number(s.z))){const r=new P(Number(s.x),Number(s.y),Number(s.z)),o=Number(n.data?.inputSeq);let a=Z.position.x,l=Z.position.y,c=Z.position.z;if(Number.isFinite(o)&&o>0){const _=cn.findIndex(m=>m.seq===o);if(_>=0){const m=cn[_].predictedPosition,p=Number(cn[_].sentAt);Number.isFinite(p)&&p>0&&JR(performance.now()-p),m&&(a=m.x,l=m.y,c=m.z),cn.splice(0,_+1)}else if(cn.length>0){at.lateAcksInWindow+=1;const m=cn.findIndex(p=>p.seq>o);m>0&&cn.splice(0,m)}}const u=r.x-a,d=r.y-l,h=r.z-c,f=Math.sqrt(u*u+d*d+h*h);ZR(f);const g=Z.position.clone().add(new P(u,d,h));f>=mR?(at.correctionsInWindow+=1,Qg("hard"),Z.position.copy(g),Fc(),ui=null,Fs=0):f>=Xh&&(at.correctionsInWindow+=1,Qg("soft"),ui=g,Fs=performance.now()+_R)}return}if(n.type==="player_joined"){n.data?.player&&$h(n.data.player);return}if(n.type==="player_left"){const s=n.data?.playerId;Po(s),s&&R.remotePlayers.has(s)&&(ru(R.remotePlayers.get(s)),R.remotePlayers.delete(s));return}if(n.type==="player_move"){const{playerId:s,position:r,rotation:o,character:a,jumping:l,moving:c,ts:u,health:d,shield:h,mana:f}=n.data||{};if(!s||R.self&&s===R.self.id)return;$h({id:s,ts:u,character:a,health:d,shield:h,mana:f,state:{position:r,rotation:o,jumping:l,moving:c}});return}if(n.type==="player_shoot"){const s=n.data;if(!s)return;const r=s.playerId?R.remotePlayers.get(s.playerId):null,o=s.character||r?.character||"",a=wt(r?.team||da(s.playerId)),l=Vf(a),c=Ho(o),u=Za(o),d=Ja(o),h=Qa(o);if(s.playerId&&R.remotePlayers.has(s.playerId)){const v=R.remotePlayers.get(s.playerId);v.isDead||(_i(v,"shoot"),v.animationUntil=performance.now()+420)}const f=new P(s.origin.x,s.origin.y,s.origin.z),g=new P(s.direction.x,s.direction.y,s.direction.z).normalize(),_=s.distance||100,p=f.clone().add(g.clone().multiplyScalar(_)).clone();c?(Zh(f,p,{source:"remote",ownerId:s.playerId,team:a}),di(f)):u?(rx(f,p,{source:"remote",ownerId:s.playerId,team:a}),di(f)):d?(Jh(f,p,{source:"remote",ownerId:s.playerId,team:a}),di(f)):h?(Qh(f,p,{source:"remote",ownerId:s.playerId,team:a}),di(f)):(Fn(f,p,l.tracer),Lt(p,l.impactB),Go(p,l.impactA)),zg(f,o);return}if(n.type==="player_shot_ack"){const s=Number(n.data?.shotId);if(Number.isFinite(s)){const r=os.get(s);Number.isFinite(r)&&(QR(performance.now()-r),os.delete(s))}Ne.shootUntil=performance.now()+420,u1();return}if(n.type==="special_lunar_rain_wave"){const s=n.data||{},r=String(s.playerId||""),o=da(r),a=vr("lunar",o),l=Array.isArray(s.strikes)?s.strikes:[];for(let c=0;c<l.length;c+=1){const u=l[c]||{},d=u.start||{},h=u.impact||{};if(!Number.isFinite(Number(d.x))||!Number.isFinite(Number(d.y))||!Number.isFinite(Number(d.z))||!Number.isFinite(Number(h.x))||!Number.isFinite(Number(h.y))||!Number.isFinite(Number(h.z)))continue;const f=new P(Number(d.x),Number(d.y),Number(d.z)),g=new P(Number(h.x),Number(h.y),Number(h.z));Qh(f,g,{source:"local",ownerId:r,team:o}),Lt(g,Math.random()>.5?a.impactA:a.impactB)}return}if(n.type==="special_silent_cone"){const s=n.data||{},r=String(s.playerId||""),o=s.origin||{},a=Array.isArray(s.rays)?s.rays:[];if(!r||!Number.isFinite(Number(o.x))||!Number.isFinite(Number(o.y))||!Number.isFinite(Number(o.z)))return;const l=new P(Number(o.x),Number(o.y),Number(o.z)),c=R.remotePlayers.get(r),u=da(r),d=s.character||c?.character||"silentman";r!==R.self?.id&&c&&!c.isDead&&(_i(c,"shoot"),c.animationUntil=performance.now()+420);const h=Math.max(1,Math.ceil(a.length/v1));for(let f=0;f<a.length;f+=h){const g=a[f]||{},_=g.direction||{},m=Number(g.distance||0);if(!Number.isFinite(Number(_.x))||!Number.isFinite(Number(_.y))||!Number.isFinite(Number(_.z))||!Number.isFinite(m)||m<=0)continue;const p=new P(Number(_.x),Number(_.y),Number(_.z)).normalize(),v=l.clone().add(p.multiplyScalar(m));Zh(l.clone(),v,{source:"local",ownerId:r,team:u})}di(l),r!==R.self?.id&&zg(l,d);return}if(n.type==="special_neoorphen_meteor_wave"){const s=n.data||{},r=String(s.playerId||""),o=da(r),a=vr("poison",o),l=Array.isArray(s.strikes)?s.strikes:[];let c=null;for(let u=0;u<l.length;u+=1){const d=l[u]||{},h=d.start||{},f=d.impact||{};if(!Number.isFinite(Number(h.x))||!Number.isFinite(Number(h.y))||!Number.isFinite(Number(h.z))||!Number.isFinite(Number(f.x))||!Number.isFinite(Number(f.y))||!Number.isFinite(Number(f.z)))continue;const g=new P(Number(h.x),Number(h.y),Number(h.z)),_=new P(Number(f.x),Number(f.y),Number(f.z));c||(c=_.clone()),Jh(g,_,{source:"local",ownerId:r,team:o}),Fn(g,_,a.tracer,{radiusScale:1.6,life:.52,opacity:.98});const m=Lt(_,a.tracer),p=Lt(_,a.impactB);m&&(m.scale.setScalar(2.6),m.userData.life=.48),p&&(p.scale.setScalar(2.1),p.userData.life=.42)}c&&di(c);return}if(n.type==="special_pumori_orbit_start"){const s=String(n.data?.playerId||""),r=Number(n.data?.durationMs||1e4),o=Number(n.data?.ts),a=n.data?.origin||{};if(!s)return;let l=null;Number.isFinite(Number(a.x))&&Number.isFinite(Number(a.y))&&Number.isFinite(Number(a.z))&&(l=new P(Number(a.x),Number(a.y),Number(a.z)));const c=Number.isFinite(o)?Math.max(0,iu()-o):0;XR(s,r,c,l);return}if(n.type==="player_damage"){if(!R.self||!Gt())return;const s=Number(n.data?.health),r=Number(n.data?.shield),o=!!n.data?.headshot;Number.isFinite(s)&&($n=Math.max(0,Math.min(Zt,s))),Number.isFinite(r)&&(Bs=Math.max(0,Math.min(Ds,Math.round(r)))),ef(),Zr=Math.min(.45,Zr+(o?.35:.2)),FR(n.data?.fromPlayerId),Cn();return}if(n.type==="hit_confirm"){NR(!!n.data?.headshot);return}if(n.type==="player_resources"){const s=Number(n.data?.mana),r=Number(n.data?.health),o=Number(n.data?.shield),a=Number(n.data?.ammoInMag),l=Number(n.data?.ammoReserve),c=Number(n.data?.pendingHealthRegen),u=Number(n.data?.lunarRainCooldownMs),d=n.data?.isReloading,h=Number(n.data?.reloadRemainingMs);let f=!1;Number.isFinite(s)&&(Mr=Math.max(0,Math.min(Dn,Math.round(s))),f=!0),Number.isFinite(r)&&($n=Math.max(0,Math.min(Zt,r)),f=!0),Number.isFinite(o)&&(Bs=Math.max(0,Math.min(Ds,Math.round(o))),f=!0),Number.isFinite(a)&&(ds=Math.max(0,Math.min(Gs,Math.round(a))),f=!0),Number.isFinite(l)&&(hs=Math.max(0,Math.min(wo,Math.round(l))),f=!0),Number.isFinite(c)&&(ks=Math.max(0,c)),Number.isFinite(u)&&ex(u),typeof d=="boolean"&&(rs=!!d,f=!0),Number.isFinite(h)&&(f=!0),ef(),f&&Cn();return}if(n.type==="player_resources_public"){const s=String(n.data?.playerId||"");if(!s||R.self&&s===R.self.id)return;const r=R.remotePlayers.get(s);if(!r)return;const o=Number(n.data?.health),a=Number(n.data?.shield),l=Number(n.data?.mana);let c=!1;Number.isFinite(o)&&(r.health=Math.max(0,Math.min(Zt,Math.round(o))),c=!0),Number.isFinite(a)&&(r.shield=Math.max(0,Math.min(Ds,Math.round(a))),c=!0),Number.isFinite(l)&&(r.mana=Math.max(0,Math.min(Dn,Math.round(l))),c=!0),c&&Vs(r);return}if(n.type==="pickup_state"){const s=String(n.data?.kind||"").trim().toLowerCase(),r=Number(n.data?.index),o=!!n.data?.active,a=Number(n.data?.respawnAtMs||0);if(!Number.isFinite(r)||!s)return;s==="mana"?hc(ji,r,o,a):s==="shield"?hc(Ki,r,o,a):s==="health"&&hc(Yi,r,o,a);return}if(n.type==="player_death"){const s=n.data?.playerId;if(!s)return;if(pA(n.data?.killerId,s),Po(s),R.self&&n.data?.killerId===R.self.id&&s!==R.self.id&&DR(),R.self&&s===R.self.id){$n=0,ks=0,Cn(),nx(n.data?.respawnAvailableAtMs);return}if(!R.remotePlayers.has(s))return;const r=R.remotePlayers.get(s);r.isDead=!0,r.health=0,r.isJumping=!1,r.deadAt=performance.now(),_i(r,"death"),r.animationUntil=0,Vs(r);return}if(n.type==="player_respawned"){const s=n.data?.playerId;if(!s)return;if(R.self&&s===R.self.id){const a=n.data?.position;a&&Number.isFinite(Number(a.x))&&Number.isFinite(Number(a.y))&&Number.isFinite(Number(a.z))&&(Z.position.set(Number(a.x),Number(a.y),Number(a.z)),Fc(),dc()),$n=Number.isFinite(n.data?.health)?Number(n.data.health):Zt,Bs=Number.isFinite(n.data?.shield)?Math.round(n.data.shield):$a,Number.isFinite(n.data?.mana)&&(Mr=Math.round(n.data.mana)),Number.isFinite(Number(n.data?.ammoInMag))&&(ds=Math.max(0,Math.min(Gs,Math.round(Number(n.data.ammoInMag))))),Number.isFinite(Number(n.data?.ammoReserve))&&(hs=Math.max(0,Math.min(wo,Math.round(Number(n.data.ammoReserve))))),rs=!!n.data?.isReloading,Number.isFinite(Number(n.data?.reloadRemainingMs))&&Math.max(0,Number(n.data.reloadRemainingMs)/1e3),ks=0,Nt=!1,Ei=!1,Ti=0,fs=0,Jn=Hs(),ps(),Cn();return}const r=R.remotePlayers.get(s);if(!r)return;r.isDead=!1,r.deadAt=0,r.health=Number.isFinite(Number(n.data?.health))?Math.max(0,Math.min(Zt,Math.round(Number(n.data.health)))):Zt,Number.isFinite(Number(n.data?.shield))&&(r.shield=Math.max(0,Math.min(Ds,Math.round(Number(n.data.shield))))),Number.isFinite(Number(n.data?.mana))&&(r.mana=Math.max(0,Math.min(Dn,Math.round(Number(n.data.mana))))),r.animationUntil=0,Ha(r);const o=n.data?.position;if(o&&Number.isFinite(Number(o.x))&&Number.isFinite(Number(o.y))&&Number.isFinite(Number(o.z))){const a=Number(o.x),l=Number(o.y)-rn,c=Number(o.z);r.group.position.set(a,l,c),r.targetPosition.set(a,l,c)}Vs(r);return}if(n.type==="chat_message"){const s=n.data||{},r=String(s.playerName||"Player"),o=String(s.text||"").trim();if(!o)return;mA(r,o),gA(r,o),Nf.classList.add("open");return}if(n.type==="player_funny"){const s=n.data?.playerId;if(!s||!R.remotePlayers.has(s))return;const r=R.remotePlayers.get(s);if(r.isDead)return;r.currentAnimation==="funny"&&(r.currentAnimation=""),_i(r,"funny");const o=r.actions?.funny,a=Math.max(500,Math.round((o?.getClip()?.duration||1)*1e3));r.animationUntil=performance.now()+a;return}if(n.type==="game_state"){if(R.joinedRoom&&R.joinedRoom.room.id===n.data.roomId){R.joinedRoom.room.status=n.data.status,R.joinedRoom.room.hostId=n.data.hostId,n.data.mode&&(R.joinedRoom.room.mode=n.data.mode),Object.prototype.hasOwnProperty.call(n.data,"versusType")&&(R.joinedRoom.room.versusType=n.data.versusType),Number.isFinite(Number(n.data.requiredPlayers))&&(R.joinedRoom.room.requiredPlayers=Number(n.data.requiredPlayers)),Number.isFinite(Number(n.data.maxPlayers))&&(R.joinedRoom.room.maxPlayers=Number(n.data.maxPlayers)),n.data.weather&&(R.joinedRoom.room.weather=n.data.weather,io(n.data.weather)),n.data.battleTheme&&(R.joinedRoom.room.battleTheme=n.data.battleTheme,rc(n.data.battleTheme)),n.data.status!=="in_game"&&Nt&&(Nt=!1,Ei=!1,Ti=0,fs=0,Jn=Hs(),ps()),n.data.status!=="cooldown"&&cr();const s=n.data.status==="in_game"||n.data.status==="cooldown";ya(s),tc(),g_(R.joinedRoom.room),Ns(),Ma(),Cn(),ss()}return}if(n.type==="match_winner"){if(!R.joinedRoom)return;const s=n.data?.winner||{};n.data?.winnerTeam&&(s.team=n.data.winnerTeam),LR(s,n.data?.countdownSeconds);return}if(n.type==="match_reset"){cr(),uc(),Cn();return}}),e.addEventListener("close",()=>{Yu.textContent="Desconectado. Reintentando...",R.joinedRoom=null,R.showScoreboard=!1,Xr=null,R.latencyMs=null,Zg(),ya(!1),tc(),kg(),io("night"),rc("battle1"),uc(),cr(),Ne.team=null,Wa(),Gi.length=0,R.lobbyUsers=[],va(),Fa(),Cn(),Ns(),Ma(),ss(),setTimeout(lx,1200)}),e.addEventListener("error",()=>{ar("No se pudo conectar al WebSocket")})};$t.addEventListener("change",()=>{He=$t.value||He,R.self&&(R.self.character=He),tu(He),wr(He),dp(),zo(),R.profileReady&&lt({type:"set_profile",playerName:Kc(),character:He}),Cn()});const cx=()=>{const i=gn(gi?.value||"");if(i.length<2){So("Ingresa un nombre de al menos 2 caracteres.");return}So(),Qi.value=i,R.self&&(R.self.name=i),localStorage.setItem(Uf,i),bo(),Bo(!0),lt({type:"set_profile",playerName:i,character:$t.value||He})};vw?.addEventListener("click",()=>{cx()});gi?.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),cx())});yw.addEventListener("click",()=>{if(!R.profileReady){So("Define tu nombre para entrar al lobby.");return}lt({type:"list_rooms"}),$A()});Mw.addEventListener("click",()=>{if(!h_()){So("Define tu nombre para crear una sala."),Bo(!1);return}ar(),lt({type:"create_room",mode:"versusmatch",playerName:Kc(),character:$t.value||He})});Sw?.addEventListener("click",()=>{vA()});const ux=()=>{if(!R.profileReady||R.joinedRoom)return;const i=String(to?.value||"").trim();i&&(lt({type:"chat_message",text:i}),to.value="",to.focus())};bw?.addEventListener("click",()=>{ux()});to?.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),ux())});Sc.addEventListener("change",()=>{if(!wn())return;const i=Sc.value;i&&lt({type:"room_set_versus_type",versusType:i})});bh.addEventListener("click",()=>{if(!wn()||!R.self||!R.joinedRoom)return;const e=!(R.joinedRoom.players||[]).find(t=>t.id===R.self.id)?.ready;lt({type:"versus_set_ready",ready:e})});j0.addEventListener("click",()=>{wn()&&lt({type:"start_game"})});ww.addEventListener("click",()=>{lt({type:"leave_room"})});const hp=()=>{if(!wn())return;const i=String(no.value||"").trim();i&&(lt({type:"chat_message",text:i}),no.value="",no.focus())};Aw.addEventListener("click",()=>{hp()});no.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),hp())});aA.addEventListener("click",()=>{lt({type:"leave_room"})});Y0.addEventListener("click",()=>{lt({type:"start_game"})});$0.addEventListener("click",()=>{lt({type:"end_game"})});lA.addEventListener("click",()=>{Qc()});cA.addEventListener("click",()=>{Qc(),lt({type:"leave_room"})});const dx=i=>e=>{e&&(e.preventDefault(),e.stopPropagation());const t=performance.now();t<Ag||(Ag=t+450,i())},fp=dx(async()=>{qc=!0,Of(),await fA()}),pp=dx(()=>{qc=!0,Of()});Df?.addEventListener("click",fp);Df?.addEventListener("touchstart",fp,{passive:!1});Df?.addEventListener("pointerdown",fp);Ff?.addEventListener("click",pp);Ff?.addEventListener("touchstart",pp,{passive:!1});Ff?.addEventListener("pointerdown",pp);wh.addEventListener("input",()=>{Pe.mouseSensitivity=Pn(wh.value,.4,2.5,Pe.mouseSensitivity),e_.textContent=Pe.mouseSensitivity.toFixed(2),Tr()});Ah.addEventListener("input",()=>{Pe.masterVolume=Pn(Ah.value,0,1,Pe.masterVolume),t_.textContent=`${Math.round(Pe.masterVolume*100)}%`,Vo(),Tr()});Rh.addEventListener("input",()=>{Pe.musicVolume=Pn(Rh.value,0,1,Pe.musicVolume),n_.textContent=`${Math.round(Pe.musicVolume*100)}%`,Vo(),D_(),Tr()});const hx=i=>{Pe.musicVolume=Pn(i,0,1,Pe.musicVolume),Vo(),F_(),Tr()};yc?.addEventListener("input",()=>{hx(yc.value)});Mc?.addEventListener("input",()=>{hx(Mc.value)});Ch.addEventListener("input",()=>{Pe.sfxVolume=Pn(Ch.value,0,1,Pe.sfxVolume),i_.textContent=`${Math.round(Pe.sfxVolume*100)}%`,Vo(),Tr()});Ph.addEventListener("input",()=>{Pe.fov=Pn(Ph.value,60,100,Pe.fov),s_.textContent=String(Math.round(Pe.fov)),Vo(),Tr()});Ih.addEventListener("change",()=>{Pe.showPerfByDefault=!!Ih.checked,!R.showPerf&&Pe.showPerfByDefault&&(R.showPerf=!0),xr(),Tr()});const nl=()=>{qg.set(En,bn,0),Z.quaternion.setFromEuler(qg)},fx=()=>{if(!dr)return;Ng.copy(Z.position),Z.getWorldDirection(zl),zl.normalize();const i=Ng.clone().add(zl.clone().multiplyScalar(18));Dg.set(-Math.sin(bn),0,-Math.cos(bn)).normalize(),Fg.set(Math.cos(bn),0,-Math.sin(bn)).normalize(),kl.copy(Z.position).addScaledVector(zl,-.8).add(new P(0,RA,0)).addScaledVector(Dg,-4.6).addScaledVector(Fg,CA),kl.y=Math.max(rn+.6,kl.y),yr.position.lerp(kl,PA),yr.lookAt(i)},Aa=()=>dr?yr:Z,px=()=>{const i=new fn,e=new Xe(new hi(Lc,Wh),new bt({color:1776411,transparent:!0,opacity:.78,depthWrite:!1,depthTest:!1,side:sn,toneMapped:!1}));e.renderOrder=999,e.position.set(0,ac,0),i.add(e);const t=new Xe(new hi(Lc-.02,Wh-.02),new bt({color:5701485,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:sn,toneMapped:!1}));t.renderOrder=1e3,t.position.set(0,ac,.001),i.add(t);const n=(u,d)=>{const h=new Xe(new hi(Nc,Dc),new bt({color:1381653,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1,side:sn,toneMapped:!1}));h.renderOrder=999,h.position.set(0,u,0),i.add(h);const f=new Xe(new hi(Nc-.012,Dc-.012),new bt({color:d,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,side:sn,toneMapped:!1}));return f.renderOrder=1e3,f.position.set(0,u,.001),i.add(f),{bg:h,fill:f}},s=n(Xg,6262271),r=n(Xg-K1,6804991),o=document.createElement("canvas");o.width=256,o.height=64;const a=o.getContext("2d"),l=new ty(o);l.minFilter=Pt,l.magFilter=Pt,l.generateMipmaps=!1;const c=new Xe(new hi(1.05,.18),new bt({map:l,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:sn,toneMapped:!1}));return c.renderOrder=1001,c.position.set(0,ac+.16,.001),i.add(c),{holder:i,bg:e,fill:t,shieldBg:r.bg,shieldFill:r.fill,manaBg:s.bg,manaFill:s.fill,text:c,textCanvas:o,textCtx:a,textTexture:l,lastText:""}},au=i=>{i&&(i.parent&&i.parent.remove(i),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose())},YR=i=>{if(!i?.hitboxDebug)return;i.hitboxDebug.group?.parent&&i.hitboxDebug.group.parent.remove(i.hitboxDebug.group);const e=Array.isArray(i.hitboxDebug.meshes)?i.hitboxDebug.meshes:[];for(let t=0;t<e.length;t+=1){const n=e[t];n&&(n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose())}i.hitboxDebug=null},mp=i=>{if(i?.group){if(i.hitboxDebug)i.hitboxDebug.group.parent!==i.group&&i.group.add(i.hitboxDebug.group);else{const e=new fn,t=(o,a,l)=>{const c=new Xe(new ei(o,14,10),new bt({color:l,wireframe:!0,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}));return c.position.set(0,a,0),c},n=t(ep,V_,Md.head),s=t(tp,H_,Md.body),r=t(np,G_,Md.torso);e.add(n),e.add(s),e.add(r),e.visible=!1,e.renderOrder=1800,i.group.add(e),i.hitboxDebug={group:e,meshes:[n,s,r]}}i.hitboxDebug.group.visible=!!R.showHitboxDebug}},$R=()=>{for(const i of R.remotePlayers.values())mp(i)},Wa=()=>{Ne.teamOutline&&(au(Ne.teamOutline),Ne.teamOutline=null)},gp=i=>{i?.teamOutline&&(au(i.teamOutline),i.teamOutline=null)},Vs=i=>{if(!i?.healthBar?.fill)return;const e=Number.isFinite(Number(i.health))?Number(i.health):Zt,t=Number.isFinite(Number(i.shield))?Number(i.shield):$a,n=Number.isFinite(Number(i.mana))?Number(i.mana):Dn,s=Math.max(0,Math.min(1,e/Zt)),r=Math.max(0,Math.min(1,t/Ds)),o=Math.max(0,Math.min(1,n/Dn));i.healthBar.fill.scale.x=Math.max(.001,s),i.healthBar.fill.position.x=(s-1)*(Lc-.02)*.5,s>.66?i.healthBar.fill.material.color.set(5701485):s>.33?i.healthBar.fill.material.color.set(16769898):i.healthBar.fill.material.color.set(16738151),i.healthBar.shieldFill&&(i.healthBar.shieldFill.scale.x=Math.max(.001,r),i.healthBar.shieldFill.position.x=(r-1)*(Nc-.012)*.5),i.healthBar.manaFill&&(i.healthBar.manaFill.scale.x=Math.max(.001,o),i.healthBar.manaFill.position.x=(o-1)*(Nc-.012)*.5);const a=wt(i.team),l=`${String(i.name||"Player")} ${Math.round(e)}`,c=`${a||"none"}:${l}`;if(i.healthBar.lastText!==c&&i.healthBar.textCtx){const u=i.healthBar.textCtx;u.clearRect(0,0,i.healthBar.textCanvas.width,i.healthBar.textCanvas.height),u.font="bold 24px Courier New, monospace",u.textAlign="center",u.textBaseline="middle",u.strokeStyle="rgba(0, 0, 0, 0.75)",u.lineWidth=6,u.strokeText(l,i.healthBar.textCanvas.width/2,32),a==="red"?u.fillStyle="#ffb6b6":a==="blue"?u.fillStyle="#b9d2ff":u.fillStyle="#d8ffd8",u.fillText(l,i.healthBar.textCanvas.width/2,32),i.healthBar.textTexture.needsUpdate=!0,i.healthBar.lastText=c}i.healthBar.holder.visible=!i.isDead},dc=()=>{cn.length=0,os.clear(),cc=0,jh=0,ui=null,Fs=0,nu=0,at.errorSamples.length=0,at.correctionsInWindow=0,at.correctionsPerSec=0,at.lateAcksInWindow=0,at.lateAcksPerSec=0,$.frameMsSamples.length=0,$.ackRttSamples.length=0,$.shotAckSamples.length=0,$.shotAcksInWindow=0,$.shotAcksPerSec=0,$.wsOutMsgsInWindow=0,$.wsOutBytesInWindow=0,$.wsOutMsgsPerSec=0,$.wsOutKbps=0,$.moveMsgsInWindow=0,$.moveMsgsPerSec=0,$.softCorrectionsInWindow=0,$.softCorrectionsPerSec=0,$.hardCorrectionsInWindow=0,$.hardCorrectionsPerSec=0,$.correctionStreak=0,$.correctionStreakMax=0,$.lastCorrectionAt=0},ZR=i=>{!Number.isFinite(i)||i<0||(at.errorSamples.push(i),at.errorSamples.length>140&&at.errorSamples.splice(0,at.errorSamples.length-140))},JR=i=>{!Number.isFinite(i)||i<0||($.ackRttSamples.push(Math.min(1e3,i)),$.ackRttSamples.length>180&&$.ackRttSamples.splice(0,$.ackRttSamples.length-180))},QR=i=>{!Number.isFinite(i)||i<0||($.shotAckSamples.push(Math.min(2e3,i)),$.shotAckSamples.length>180&&$.shotAckSamples.splice(0,$.shotAckSamples.length-180),$.shotAcksInWindow+=1)},Qg=i=>{const e=performance.now();if(e-$.lastCorrectionAt>900&&($.correctionStreak=0),$.correctionStreak+=1,$.correctionStreak>$.correctionStreakMax&&($.correctionStreakMax=$.correctionStreak),$.lastCorrectionAt=e,i==="hard"){$.hardCorrectionsInWindow+=1;return}$.softCorrectionsInWindow+=1},Us=(i,e)=>{if(!Array.isArray(i)||i.length<=0)return 0;const t=i.slice().sort((s,r)=>s-r),n=Math.max(0,Math.min(t.length-1,Math.floor((t.length-1)*e)));return t[n]},eC=()=>{const i=performance.now(),e=$.frameMsSamples.length>0?$.frameMsSamples.reduce((m,p)=>m+p,0)/$.frameMsSamples.length:0,t=Us($.frameMsSamples,.95),n=$.ackRttSamples.length>0?$.ackRttSamples.reduce((m,p)=>m+p,0)/$.ackRttSamples.length:0,s=Us($.ackRttSamples,.95),r=$.shotAckSamples.length>0?$.shotAckSamples.reduce((m,p)=>m+p,0)/$.shotAckSamples.length:0,o=Us($.shotAckSamples,.95),a=at.errorSamples.length>0?at.errorSamples.reduce((m,p)=>m+p,0)/at.errorSamples.length:0,l=Us(at.errorSamples,.95),c=cn.slice(-8).map(m=>Math.max(0,i-Number(m.sentAt||i))),u=Number.isFinite(Number(R.joinedRoom?.room?.mapSeed))?Number(R.joinedRoom.room.mapSeed):null,d=u!==null&&Number.isFinite(Wi)&&Number(Wi)===u,h=!!ts&&!!hr&&hr===ts,f=CR(Z.position.x,Z.position.z,To),g=nC(Z.position.x,Z.position.z),_={at:new Date().toISOString(),room:{id:R.joinedRoom?.room?.id||null,mode:R.joinedRoom?.room?.mode||null,status:R.joinedRoom?.room?.status||null,weather:R.joinedRoom?.room?.weather||null,players:Array.isArray(R.joinedRoom?.room?.players)?R.joinedRoom.room.players.length:null},net:{latencyMs:Number.isFinite(R.latencyMs)?Number(R.latencyMs.toFixed(2)):null,ackRttAvgMs:Number(n.toFixed(2)),ackRttP95Ms:Number(s.toFixed(2)),remoteInterpMs:Number(Va.toFixed(1)),remoteExtrapMs:Number(Ro.toFixed(1)),shotAckAvgMs:Number(r.toFixed(2)),shotAckP95Ms:Number(o.toFixed(2)),shotAckPerSec:Number($.shotAcksPerSec.toFixed(2)),pendingShotAcks:os.size,wsOutMsgPerSec:Number($.wsOutMsgsPerSec.toFixed(2)),wsOutKbps:Number($.wsOutKbps.toFixed(2)),moveSendPerSec:Number($.moveMsgsPerSec.toFixed(2)),pendingInputs:cn.length,pendingInputAgesMs:c.map(m=>Number(m.toFixed(1))),lateAckPerSec:Number(at.lateAcksPerSec.toFixed(2))},reconcile:{predErrAvg:Number(a.toFixed(3)),predErrP95:Number(l.toFixed(3)),correctionsPerSec:Number(at.correctionsPerSec.toFixed(2)),softPerSec:Number($.softCorrectionsPerSec.toFixed(2)),hardPerSec:Number($.hardCorrectionsPerSec.toFixed(2)),streak:$.correctionStreak,streakMax:$.correctionStreakMax,hasTarget:!!ui,targetExpiresInMs:Math.max(0,Math.ceil(Fs-i)),collisionBypassMs:Math.max(0,Math.ceil(nu-i))},movement:{canPlay:Gt(),pos:{x:Number(Z.position.x.toFixed(3)),y:Number(Z.position.y.toFixed(3)),z:Number(Z.position.z.toFixed(3))},velocity:{x:Number(st.x.toFixed(3)),z:Number(st.z.toFixed(3)),speed:Number($.localSpeed.toFixed(3))},keys:{...De},isJumping:It,isFiring:_n,isThirdPerson:dr},collisionDebug:{lastBlockReason:jr,lastBlockAgoMs:Dh>0?Math.max(0,Math.round(i-Dh)):null,mapEdgeMargin:Number.isFinite(f)?Number(f.toFixed(3)):null,nearestPillarDist:Number.isFinite(g)?Number(g.toFixed(3)):null},mapSync:{seedClient:Number.isFinite(Wi)?Number(Wi):null,seedServer:u,seedMatch:d,collisionHashClient:hr||null,collisionHashServer:ts||null,collisionHashMatch:h},render:{fps:R.fps,frameMsAvg:Number(e.toFixed(2)),frameMsP95:Number(t.toFixed(2)),drawCalls:Ot.drawCalls,triangles:Ot.triangles,geometries:Ot.geometries,textures:Ot.textures,vfx:Ot.vfx,vfxQuality:Number(In.toFixed(2))}};window.__koketriaLastSnapshot=_,console.groupCollapsed("[koketria][snapshot:J]",_.at),console.log(_),console.groupEnd()},Sr=(i=!1)=>{if(!R.joinedRoom)return;const e=performance.now();if(!i&&e-R.lastStateSentAt<55)return;R.lastStateSentAt=e,cc+=1;const t=De.KeyW||De.KeyA||De.KeyS||De.KeyD||st.lengthSq()>.5,n=new P(Z.position.x,Z.position.y,Z.position.z);cn.push({seq:cc,predictedPosition:n,sentAt:e}),cn.length>Kg&&cn.splice(0,cn.length-Kg),lt({type:"player_move",position:{x:Z.position.x,y:Z.position.y,z:Z.position.z},rotation:{yaw:bn,pitch:En},jumping:It,moving:t,inputSeq:cc})},tC=(i,e)=>{const t=Gf*x_;for(let n=0;n<Os.length;n+=1){const s=Os[n];if(i+t>s.minX&&i-t<s.maxX&&e+t>s.minZ&&e-t<s.maxZ)return!0}return!1},nC=(i,e)=>{if(Os.length<=0)return Number.POSITIVE_INFINITY;const t=Gf*x_;let n=Number.POSITIVE_INFINITY;for(let s=0;s<Os.length;s+=1){const r=Os[s],o=r.minX-t,a=r.maxX+t,l=r.minZ-t,c=r.maxZ+t,u=i<o?o-i:i>a?i-a:0,d=e<l?l-e:e>c?e-c:0,h=Math.hypot(u,d);h<n&&(n=h)}return n},mx=(i,e)=>{const t=$_(i,e,To),n=tC(i,e);return{insideMap:t,pillarHit:n,walkable:t&&!n}},Vn=(i,e)=>mx(i,e).walkable,iC=(i,e)=>{const t=Kh(i,e,To);if(Vn(t.x,t.z))return t;const n=14;for(let s=.6;s<=n;s+=.6)for(let o=0;o<24;o+=1){const a=o/24*Math.PI*2,l=Kh(t.x+Math.cos(a)*s,t.z+Math.sin(a)*s,To);if(Vn(l.x,l.z))return l}return t},gx=(i,e)=>{const t=Z.position.x,n=Z.position.z,s=$_(i,e,To),r=Kh(i,e,To),o=r.x,a=r.z,l=mx(o,a);if(!s||!l.walkable?(!s&&l.pillarHit?jr="map+pillar":!s||!l.insideMap?jr="map":l.pillarHit?jr="pillar":jr="unknown",Dh=performance.now()):jr="none",l.walkable)return{x:o,z:a};if(Vn(o,n))return{x:o,z:n};if(Vn(t,a))return{x:t,z:a};if(Vn(t,n))return{x:t,z:n};let c=t;for(let f=1;f<=10;f+=1){const g=f/10,_=t+(o-t)*g;if(Vn(_,n))c=_;else break}if(Vn(c,n))return{x:c,z:n};let u=n;for(let f=1;f<=10;f+=1){const g=f/10,_=n+(a-n)*g;if(Vn(t,_))u=_;else break}if(Vn(t,u))return{x:t,z:u};let d=t,h=n;for(let f=1;f<=10;f+=1){const g=f/10,_=t+(o-t)*g,m=n+(a-n)*g;if(Vn(_,m))d=_,h=m;else break}return{x:d,z:h}},Fc=()=>{if(!Vn(Z.position.x,Z.position.z)){const e=iC(Z.position.x,Z.position.z);Z.position.x=e.x,Z.position.z=e.z}const i=gx(Z.position.x,Z.position.z);Z.position.x=i.x,Z.position.z=i.z,Z.position.y=Math.max(rn,Z.position.y)};Jt.domElement.addEventListener("click",()=>{!ve.enabled&&!gr&&R.joinedRoom&&Jt.domElement.requestPointerLock()});document.addEventListener("pointerlockchange",()=>{gr=document.pointerLockElement===Jt.domElement,us.classList.toggle("locked",gr),gr||(_n=!1,R.joinedRoom&&!Er&&!Nt&&!Ao&&!es&&U_()),Ws()});document.addEventListener("mousemove",i=>{if(!gr||!Gt())return;const e=.0021*Pe.mouseSensitivity;bn-=i.movementX*e,En-=i.movementY*e,En=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,En)),nl(),Sr()});window.addEventListener("mousedown",i=>{i.button===0&&gr&&Gt()&&(zs(),_n=!0)});window.addEventListener("mouseup",i=>{i.button===0&&(_n=!1)});const e0=(i,e)=>{if(!ve.active||!Gt())return;const t=.0024*Pe.mouseSensitivity;bn-=i*t,En-=e*t,En=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,En)),nl(),Sr()},jl=i=>{if(!zn||!Ls||!i)return;const e=zn.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2,s=i.clientX-t,r=i.clientY-n,o=Math.max(28,Math.min(e.width,e.height)*.36),a=Math.sqrt(s*s+r*r),l=a>o&&a>0?{x:s/a*o,y:r/a*o}:{x:s,y:r};ve.moveX=o>0?l.x/o:0,ve.moveY=o>0?l.y/o:0,Ls.style.transform=`translate(calc(-50% + ${l.x}px), calc(-50% + ${l.y}px))`},sC=()=>{if(!Th||!zn||!ki)return;const i=()=>ve.active&&Gt();let e=0;zn.addEventListener("touchstart",c=>{if(!i()||ve.moveTouchId!==null)return;const u=c.changedTouches[0];u&&(ve.moveTouchId=u.identifier,jl(u),c.preventDefault())},{passive:!1}),zn.addEventListener("touchmove",c=>{if(!(!i()||ve.moveTouchId===null))for(let u=0;u<c.changedTouches.length;u+=1){const d=c.changedTouches[u];if(d.identifier===ve.moveTouchId){jl(d),c.preventDefault();break}}},{passive:!1});const t=c=>{if(ve.moveTouchId!==null){for(let u=0;u<c.changedTouches.length;u+=1)if(c.changedTouches[u].identifier===ve.moveTouchId){ve.moveTouchId=null,ve.moveX=0,ve.moveY=0,Ls&&(Ls.style.transform="translate(-50%, -50%)"),c.preventDefault();break}}};zn.addEventListener("touchend",t,{passive:!1}),zn.addEventListener("touchcancel",t,{passive:!1}),ki.addEventListener("touchstart",c=>{if(!i()||ve.lookTouchId!==null)return;const u=c.changedTouches[0];u&&(ve.lookTouchId=u.identifier,ve.lookLastX=u.clientX,ve.lookLastY=u.clientY,c.preventDefault())},{passive:!1}),ki.addEventListener("touchmove",c=>{if(!(!i()||ve.lookTouchId===null))for(let u=0;u<c.changedTouches.length;u+=1){const d=c.changedTouches[u];if(d.identifier===ve.lookTouchId){const h=d.clientX-ve.lookLastX,f=d.clientY-ve.lookLastY;ve.lookLastX=d.clientX,ve.lookLastY=d.clientY,e0(h,f),c.preventDefault();break}}},{passive:!1});const n=c=>{if(ve.lookTouchId!==null){for(let u=0;u<c.changedTouches.length;u+=1)if(c.changedTouches[u].identifier===ve.lookTouchId){ve.lookTouchId=null,c.preventDefault();break}}};ki.addEventListener("touchend",n,{passive:!1}),ki.addEventListener("touchcancel",n,{passive:!1});const s=c=>{i()&&(zs(),_n=!0,c.preventDefault())},r=c=>{_n=!1,c.preventDefault()};er?.addEventListener("touchstart",s,{passive:!1}),er?.addEventListener("touchend",r,{passive:!1}),er?.addEventListener("touchcancel",r,{passive:!1}),vg?.addEventListener("touchstart",c=>{i()&&(zs(),Yh(),c.preventDefault())},{passive:!1}),yg?.addEventListener("touchstart",c=>{i()&&(Yg(),c.preventDefault())},{passive:!1});const o=c=>{if(c&&(c.preventDefault(),c.stopPropagation()),!ve.enabled||!R.joinedRoom||wn())return;const u=performance.now();u<e||(e=u+350,O_())};Mg?.addEventListener("touchstart",o,{passive:!1}),zn.addEventListener("pointerdown",c=>{!i()||ve.movePointerId!==null||(ve.movePointerId=c.pointerId,jl(c),c.preventDefault())}),zn.addEventListener("pointermove",c=>{!i()||ve.movePointerId!==c.pointerId||(jl(c),c.preventDefault())});const a=c=>{ve.movePointerId===c.pointerId&&(ve.movePointerId=null,ve.moveX=0,ve.moveY=0,Ls&&(Ls.style.transform="translate(-50%, -50%)"),c.preventDefault())};zn.addEventListener("pointerup",a),zn.addEventListener("pointercancel",a),ki.addEventListener("pointerdown",c=>{!i()||ve.lookPointerId!==null||(ve.lookPointerId=c.pointerId,ve.lookLastX=c.clientX,ve.lookLastY=c.clientY,c.preventDefault())}),ki.addEventListener("pointermove",c=>{if(!i()||ve.lookPointerId!==c.pointerId)return;const u=c.clientX-ve.lookLastX,d=c.clientY-ve.lookLastY;ve.lookLastX=c.clientX,ve.lookLastY=c.clientY,e0(u,d),c.preventDefault()});const l=c=>{ve.lookPointerId===c.pointerId&&(ve.lookPointerId=null,c.preventDefault())};ki.addEventListener("pointerup",l),ki.addEventListener("pointercancel",l),er?.addEventListener("pointerdown",s),er?.addEventListener("pointerup",r),er?.addEventListener("pointercancel",r),er?.addEventListener("pointerleave",r),vg?.addEventListener("pointerdown",c=>{i()&&(zs(),Yh(),c.preventDefault())}),yg?.addEventListener("pointerdown",c=>{i()&&(Yg(),c.preventDefault())}),Mg?.addEventListener("pointerdown",o)};window.addEventListener("keydown",i=>{i.code==="ArrowUp"?(De.KeyW=!0,i.preventDefault()):i.code==="ArrowDown"?(De.KeyS=!0,i.preventDefault()):i.code==="ArrowLeft"?(De.KeyA=!0,i.preventDefault()):i.code==="ArrowRight"&&(De.KeyD=!0,i.preventDefault());const e=document.activeElement,t=!!(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable));if(i.code==="Escape"&&!es){i.preventDefault(),O_();return}if(i.code==="Enter"){if(i.preventDefault(),!R.joinedRoom)return;if(wn()){document.activeElement===no?hp():no.focus();return}if(!es){_A();return}const n=bc.value.trim();n&&lt({type:"chat_message",text:n}),Lh();return}if(!t){if(es){i.code==="Escape"&&(i.preventDefault(),Lh());return}if(ql()&&i.code==="KeyB"){i.preventDefault();return}if(ql()&&i.code==="KeyN"){i.preventDefault();return}if(ql()&&i.code==="KeyV"){i.preventDefault();return}if(ql()&&i.code==="KeyH"){i.preventDefault();return}if(i.code==="Tab"&&(i.preventDefault(),R.joinedRoom&&(R.showScoreboard=!0,zf())),i.code==="KeyI"&&(R.showMatchInfo=!R.showMatchInfo,f_()),i.code==="KeyP"&&(R.showPerf=!R.showPerf,xr()),i.code==="KeyJ"){i.preventDefault(),eC();return}if(i.code==="F9"){i.preventDefault(),R.showHitboxDebug=!R.showHitboxDebug,$R();return}if(i.code==="KeyF"){if(i.preventDefault(),R.joinedRoom&&Ne.actions?.funny){const n=Ne.actions.funny.getClip(),s=Math.max(500,Math.round((n?.duration||1)*1e3));Ne.funnyUntil=performance.now()+s,Ps("funny"),lt({type:"player_funny"})}return}i.code==="KeyC"&&(dr=!dr,dr&&fx()),i.code==="Space"&&(i.preventDefault(),zs(),Gt()&&!It&&Z.position.y<=rn+.001&&(It=!0,qi=k_,Sr(!0))),i.code==="KeyR"&&(zs(),Yh()||cp()),i.code in De&&((i.code==="KeyW"||i.code==="KeyA"||i.code==="KeyS"||i.code==="KeyD")&&zs(),De[i.code]=!0)}});window.addEventListener("keyup",i=>{i.code==="ArrowUp"?(De.KeyW=!1,i.preventDefault()):i.code==="ArrowDown"?(De.KeyS=!1,i.preventDefault()):i.code==="ArrowLeft"?(De.KeyA=!1,i.preventDefault()):i.code==="ArrowRight"&&(De.KeyD=!1,i.preventDefault());const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||es||(i.code==="Space"&&i.preventDefault(),i.code==="Tab"&&(R.showScoreboard=!1,zf()),i.code in De&&(De[i.code]=!1))});const rC=()=>{if(!ve.active||!Gt()||es){ve.active&&(De.KeyW=!1,De.KeyA=!1,De.KeyS=!1,De.KeyD=!1);return}const i=.18;De.KeyW=ve.moveY<-i,De.KeyS=ve.moveY>i,De.KeyA=ve.moveX<-i,De.KeyD=ve.moveX>i},oC=()=>{const i=Ho(He),e=Za(He),t=Ja(He),n=Qa(He),s=i||e||t||n,r=wt(Ne.team),o=Vf(r);if(s&&Mr<W1)return;if(!s&&ds<=0){cp();return}Z.getWorldDirection(jg);const a=jg.clone().normalize(),l=Z.position.clone().add(a.clone().multiplyScalar(.55)),c=Math.sqrt(st.x*st.x+st.z*st.z),u=Math.min(1,c/Math.max(.001,Qf)),d=!s,h=d?(.0018+u*.0032+(It?.0055:0)+uo*.0048)*(1/Pe.mouseSensitivity):0,f=a.clone();if(h>0){const v=new P().crossVectors(f,Z.up).normalize(),b=new P().crossVectors(v,f).normalize(),S=(Math.random()*2-1)*h,T=(Math.random()*2-1)*h;f.add(v.multiplyScalar(S)).add(b.multiplyScalar(T)).normalize()}oo.set(l,f),oo.far=220;const g=oo.intersectObjects(dn,!1);let _=g.length>0?g[0].point:l.clone().add(f.clone().multiplyScalar(120));e&&l.distanceTo(_)>Gh&&(_=l.clone().add(f.clone().multiplyScalar(Gh)));const m=l.distanceTo(_);i?(Zh(l,_,{source:"local",ownerId:R.self?.id,team:r}),di(l)):e?(rx(l,_,{source:"local",ownerId:R.self?.id,team:r}),di(l)):t?(Jh(l,_,{source:"local",ownerId:R.self?.id,team:r}),di(l)):n?(Qh(l,_,{source:"local",ownerId:R.self?.id,team:r}),di(l)):(Fn(l,_,o.tracer),Lt(_,o.impactB),Go(_,o.impactA)),jh+=1;const p=jh;if(os.set(p,performance.now()),lt({type:"player_shoot",shotId:p,origin:{x:l.x,y:l.y,z:l.z},direction:{x:f.x,y:f.y,z:f.z},distance:m,shotTs:Math.round(iu())}),Ua.intensity=2.3,za=Math.min(1.3,za+.52+u*.14+(It?.18:0)),uo=Math.min(H1,uo+(d?.22+u*.18+(It?.24:0):.08)),En+=(Math.random()*.5+.5)*z1,bn+=(Math.random()-.5)*V1,En=Math.min(En,Math.PI/2-.01),nl(),g.length>0){const v=g[0].object;v.material.emissiveIntensity=1.3}},aC=300,t0=1.35,_p=t0*t0,Uc=(i,e)=>{if(!i||!Number.isFinite(Number(i.index)))return;const t=Date.now();t<Number(i.pendingRequestUntil||0)||(i.pendingRequestUntil=t+aC,lt({type:e,index:Number(i.index),position:{x:Number(Z.position.x||0),z:Number(Z.position.z||0)}}))},lC=()=>{},hc=(i,e,t,n=0)=>{if(!Array.isArray(i)||!Number.isFinite(Number(e)))return;const s=i[Number(e)];s?.mesh&&(s.active=!!t,s.respawnAtMs=s.active?0:Math.max(0,Number(n)||0),s.pendingRequestUntil=0,s.mesh.visible=s.active)},cC=i=>{if(!i||typeof i!="object")return;const e=(t,n)=>{const s=i[t];if(Array.isArray(s))for(let r=0;r<s.length;r+=1){const o=s[r]||{},a=Number(o.index);Number.isFinite(a)&&hc(n,a,!!o.active,Number(o.respawnAtMs)||0)}};e("mana",ji),e("shield",Ki),e("health",Yi)},uC=i=>{},ef=()=>{const i=Math.max(0,Zt-$n);ks=Math.max(0,Math.min(ks,i))},xp=2.2,vp=.1,Io=(i,e)=>{if(!i?.mesh||!i.active||!i.mesh.visible)return;if(mr.length>=b1){const a=mr.shift();a&&(me.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose())}const t=new bt({color:e,transparent:!0,opacity:.55+Math.random()*.25,blending:wi,depthWrite:!1}),n=new Xe(y1,t),s=Math.random()*Math.PI*2,r=.11+Math.random()*.28;n.position.set(i.mesh.position.x+Math.cos(s)*r,i.mesh.position.y+.08+Math.random()*.32,i.mesh.position.z+Math.sin(s)*r),me.add(n);const o=.95+Math.random()*.85;mr.push({mesh:n,life:o,initialLife:o,velocity:new P((Math.random()-.5)*.16,1.6+Math.random()*1.25,(Math.random()-.5)*.16)})},dC=i=>{for(let e=mr.length-1;e>=0;e-=1){const t=mr[e];t.life-=i,t.mesh.position.addScaledVector(t.velocity,i),t.velocity.y+=i*.55,t.mesh.scale.multiplyScalar(1+i*1.45);const n=Math.max(0,t.life/t.initialLife);t.mesh.material.opacity=n*.75,t.life<=0&&(me.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),mr.splice(e,1))}},hC=i=>{if(!Gt()||Er){st.multiplyScalar(Math.max(0,1-i*10));return}oi.set(0,0,0),Z.getWorldDirection(zi),zi.y=0,zi.normalize(),yd.crossVectors(zi,Z.up).normalize(),De.KeyW&&oi.add(zi),De.KeyS&&oi.sub(zi),De.KeyA&&oi.sub(yd),De.KeyD&&oi.add(yd);const e=oi.lengthSq()>0;e&&(oi.normalize().multiplyScalar(Qf),(De.KeyA||De.KeyD)&&!(De.KeyW||De.KeyS)&&oi.multiplyScalar(F1));const n=1-Math.exp(-((e?L1:N1)*(It?D1:1))*i);if(st.x+=((e?oi.x:0)-st.x)*n,st.z+=((e?oi.z:0)-st.z)*n,Math.abs(st.x)<1e-4&&(st.x=0),Math.abs(st.z)<1e-4&&(st.z=0),st.lengthSq()>0){const s=st.x*i,r=st.z*i,o=Math.sqrt(s*s+r*r),a=Math.max(1,Math.min(6,Math.ceil(o/.35))),l=s/a,c=r/a;let u=!1;for(let d=0;d<a;d+=1){const h=Z.position.x,f=Z.position.z,g=h+l,_=f+c,m=gx(g,_),p=Math.abs(m.x-h)>1e-4,v=Math.abs(m.z-f)>1e-4;if(!p&&!v){st.x=0,st.z=0;break}p||(st.x=0),v||(st.z=0),Z.position.x=m.x,Z.position.z=m.z,u=!0}Z.position.y=Math.max(rn,Z.position.y),u&&Sr()}},fC=i=>{if(!ui)return;if(!Gt()){ui=null,Fs=0;return}if(performance.now()>Fs){ui=null,Fs=0;return}const t=Math.max(.01,Math.min(1,i*gR));Z.position.lerp(ui,t),Fc(),Z.position.distanceToSquared(ui)<=Xh*Xh&&(ui=null,Fs=0)},pC=i=>{!It&&Z.position.y<=rn+.001&&qi<=0||(qi-=U1*i,Z.position.y+=qi*i,Z.position.y<=rn?(Z.position.y=rn,qi=0,It&&(It=!1,Sr(!0))):It=!0,Sr())},mC=i=>{const e=Date.now(),t=performance.now()/1e3;for(let n=0;n<ji.length;n+=1){const s=ji[n];if(!s.active)if(e>=Number(s.respawnAtMs||0))s.active=!0,s.respawnAtMs=0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*2.2,s.mesh.position.y=s.baseY+Math.sin(t*xp+s.phase)*vp,Math.random()<i*2.9&&(Io(s,9421823),Math.random()<.72&&Io(s,9421823)),!Gt()||!Co(He)&&hs>=wo)continue;const r=Z.position.x-s.mesh.position.x,o=Z.position.z-s.mesh.position.z;r*r+o*o<=_p&&(Co(He)?Uc(s,"player_pickup_mana"):Uc(s,"player_pickup_ammo"))}},gC=i=>{const e=Date.now(),t=performance.now()/1e3;for(let n=0;n<Ki.length;n+=1){const s=Ki[n];if(!s.active)if(e>=Number(s.respawnAtMs||0))s.active=!0,s.respawnAtMs=0,s.mesh.visible=!0;else continue;if(s.mesh.position.y=s.baseY+Math.sin(t*xp+s.phase)*vp,Math.random()<i*3.1&&(Io(s,9435135),Math.random()<.75&&Io(s,9435135)),!Gt())continue;const r=Z.position.x-s.mesh.position.x,o=Z.position.z-s.mesh.position.z;r*r+o*o<=_p&&Uc(s,"player_pickup_shield")}},_C=i=>{const e=Date.now(),t=performance.now()/1e3;for(let n=0;n<Yi.length;n+=1){const s=Yi[n];if(!s.active)if(e>=Number(s.respawnAtMs||0))s.active=!0,s.respawnAtMs=0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*1.9,s.mesh.position.y=s.baseY+Math.sin(t*xp+s.phase)*vp,Math.random()<i*3.5&&(Io(s,10878896),Math.random()<.82&&Io(s,10878896)),!Gt()||Nt)continue;const r=Z.position.x-s.mesh.position.x,o=Z.position.z-s.mesh.position.z;r*r+o*o<=_p&&Uc(s,"player_pickup_health")}},xC=i=>{if(!Xf.visible)return;const e=.15+Math.sin(performance.now()*.0024)*.2;for(let t=0;t<$c;t+=1){const n=t*3,s=t*3+1,r=t*3+2;Hn[s]-=Fh[t]*i,Hn[n]+=e*i*Fh[t]*.35,Hn[r]+=Math.sin(performance.now()*.0015+t)*.015,Hn[s]<.2&&(Hn[s]=Math.random()*120+25,Hn[n]=Z.position.x+(Math.random()-.5)*220,Hn[r]=Z.position.z+(Math.random()-.5)*220)}Wf.attributes.position.needsUpdate=!0},vC=i=>{if(jf.visible){for(let e=0;e<Zc;e+=1){const t=e*3,n=t+1,s=t+2;Gn[n]-=v_[e]*i,Gn[t]+=Math.sin(performance.now()*9e-4+e)*.02,Gn[s]+=Math.cos(performance.now()*7e-4+e)*.02,Gn[n]<.2&&(Gn[n]=Math.random()*120+25,Gn[t]=Z.position.x+(Math.random()-.5)*180,Gn[s]=Z.position.z+(Math.random()-.5)*180)}qf.attributes.position.needsUpdate=!0}},yC=i=>{Sa=Math.max(0,Sa-i*(Hf==="night"?.35:.55));const t=performance.now()*.001,n=wc.attributes.position.array;for(let r=0;r<Jc;r+=1){const o=r*3;n[o+1]+=Math.sin(t*b_[r]+r)*.003,n[o]+=Math.cos(t*.7+r)*.0025,n[o+2]+=Math.sin(t*.5+r)*.0025}wc.attributes.position.needsUpdate=!0;const s=Sa*.95;for(let r=0;r<Uh.length;r+=1){const o=Uh[r],a=(Math.sin(t*1.6+o.phase)+1)*.035;o.material.emissiveIntensity=o.base+a+s,o.material.color&&s>.08&&o.material.color.offsetHSL(Math.sin(t+o.phase)*3e-4,4e-4,3e-4)}},MC=i=>{xR(i);const e=Math.min(1,i*8),t=performance.now(),n=iu()-Va;for(const s of R.remotePlayers.values()){const r=s.netSnapshots||[];if(r.length>0){const w=n-1e3;for(;r.length>2&&r[0].ts<w;)r.shift();let C=r[r.length-1];for(let x=1;x<r.length;x+=1){const M=r[x-1],D=r[x];if(n<M.ts||n>D.ts)continue;const I=Math.max(1,D.ts-M.ts),F=Math.max(0,Math.min(1,(n-M.ts)/I));C={x:M.x+(D.x-M.x)*F,y:M.y+(D.y-M.y)*F,z:M.z+(D.z-M.z)*F,yaw:M.yaw+((D.yaw-M.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)*F,pitch:M.pitch+(D.pitch-M.pitch)*F,jumping:M.jumping||D.jumping,moving:M.moving||D.moving,ts:n};break}if(r.length>=2&&n>r[r.length-1].ts){const x=r[r.length-1],M=r[r.length-2],D=n-x.ts;if(D<=Ro){const F=Math.max(1,x.ts-M.ts)/1e3,k=(x.x-M.x)/F,W=(x.y-M.y)/F,z=(x.z-M.z)/F,G=Math.hypot(k,W,z),B=G>0?Math.min(1,oR/G):1,ne=Math.max(0,Math.min(1,1-D/Math.max(1,Ro))),Q=aR*ne,he=k*B*Q,xe=W*B*Q,fe=z*B*Q,ke=D/1e3,vt=x.x+he*ke,gt=x.y+xe*ke,Y=x.z+fe*ke;C={x:x.moving?vt:x.x,y:x.moving?gt:x.y,z:x.moving?Y:x.z,yaw:x.yaw,pitch:x.pitch,jumping:x.jumping,moving:x.moving,ts:n}}else C=x}s.targetPosition.set(C.x,C.y,C.z),s.targetYaw=C.yaw,s.targetPitch=C.pitch,s.isJumping=!!C.jumping,C.moving&&(s.movingUntil=Math.max(Number(s.movingUntil||0),t+Y_))}const o=s.group.position.distanceTo(s.targetPosition);let a=e;o>cR?a=Math.max(a,Math.min(1,i*12)):o>uR&&(a=Math.max(a,Math.min(1,i*10)));const l=s.group.position.x,c=s.group.position.y,u=s.group.position.z;o>dR?s.group.position.copy(s.targetPosition):s.group.position.lerp(s.targetPosition,a),s.group.rotation.y=$g(s.group.rotation.y,s.targetYaw+ap,a);const d=s.group.position.x-l,h=s.group.position.y-c,f=s.group.position.z-u,g=Math.sqrt(d*d+h*h+f*f),_=i>0?g/i:0,m=Math.min(1,i*10);s.smoothedMoveSpeed=M0.lerp(Number(s.smoothedMoveSpeed||0),_,m);const p=s.currentAnimation==="move"?s.smoothedMoveSpeed>fR:s.smoothedMoveSpeed>hR,b=t<Number(s.movingUntil||0)||p,S=s.isJumping||s.targetPosition.y>.08||s.group.position.y>.08,T=t-Number(s.lastAnimationAt||0)>=pR;if(s.head&&(s.head.rotation.x=$g(s.head.rotation.x,s.targetPitch,a)),s.healthBar?.holder){const w=Aa(),C=s.healthBar.holder;w.getWorldQuaternion(gd),C.parent?(C.parent.getWorldQuaternion(_d),_d.invert(),C.quaternion.copy(_d.multiply(gd))):C.quaternion.copy(gd);const x=s.group.position.distanceTo(Aa().position),M=x<=Y1,D=Math.max(.74,Math.min(1.06,1.12-x/170));C.scale.setScalar(D),C.visible=!s.isDead&&M}s.teamOutline&&(s.group.position.distanceTo(Aa().position),s.teamOutline.visible=m_()),s.mixer&&s.mixer.update(i),s.animationUntil>0&&t>=s.animationUntil&&(s.isDead&&(s.isDead=!1),S?(_i(s,"jump"),s.lastAnimationAt=t):b?(_i(s,"move"),s.lastAnimationAt=t):(Ha(s),s.lastAnimationAt=t),s.animationUntil=0),!s.isDead&&s.animationUntil<=0&&(S?s.currentAnimation!=="jump"&&(_i(s,"jump"),s.lastAnimationAt=t):b?s.currentAnimation!=="move"&&T&&(_i(s,"move"),s.lastAnimationAt=t):s.currentAnimation!=="idle"&&T&&(Ha(s),s.lastAnimationAt=t))}},SC=i=>{Ua.intensity=Math.max(0,Ua.intensity-20*i),za=Math.max(0,za-i*4.8),uo=Math.max(0,uo-i*G1),dC(i);for(let e=pr.length-1;e>=0;e-=1){const t=pr[e];t.userData.life-=i,t.material.opacity=Math.max(0,t.userData.life*7.5),t.userData.life<=0&&(me.remove(t),t.material.dispose(),pr.splice(e,1))}for(let e=ao.length-1;e>=0;e-=1){const t=ao[e];t.userData.life-=i,t.scale.multiplyScalar(1+7*i),t.material.opacity=Math.max(0,t.userData.life*5),t.userData.life<=0&&(me.remove(t),t.material.dispose(),ao.splice(e,1))}for(let e=lo.length-1;e>=0;e-=1){const t=lo[e];t.userData.life-=i,t.scale.multiplyScalar(1+t.userData.expand*i),t.material.opacity=Math.max(0,t.userData.life*6),t.userData.life<=0&&(me.remove(t),t.material.dispose(),lo.splice(e,1))}for(let e=0;e<dn.length;e+=1){const t=dn[e];t.material.emissiveIntensity>.5&&(t.material.emissiveIntensity=Math.max(.5,t.material.emissiveIntensity-3*i))}},bC=i=>{for(let e=ba.length-1;e>=0;e-=1){const t=ba[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.max(0,t.radius*(1-n*t.radiusFalloff)),o=Math.cos(s)*r,a=Math.sin(s)*r,c=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(o)).add(t.up.clone().multiplyScalar(a));t.pos.copy(c),t.mesh.position.copy(c),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.02)*.24),t.trailTimer+=i;const u=t.source==="remote"?.028:.012;if(t.trailTimer>=u){t.trailTimer=0;const h=Lt(c,Math.random()>.5?t.colors.a:t.colors.b);h&&(h.scale.setScalar(1.35+Math.random()*.95),h.userData.life=.3+Math.random()*.18)}let d=null;if(t.source==="remote"){const h=tl(t.prevPos,t.pos);h&&(d=h.point,h.headshot)}if(d||(d=el(t.prevPos,t.pos,.22)),d||n>=1){me.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),ba.splice(e,1);const h=d?d.clone():t.end.clone();d&&t.source==="remote"&&ou({},t.ownerId);const f=Lt(h,t.colors.a);f&&(f.scale.setScalar(2.3),f.userData.life=.42);const g=Lt(h,t.colors.b);g&&(g.scale.setScalar(1.7),g.userData.life=.36),Go(h,t.colors.tracer),Fn(h.clone().add(t.up.clone().multiplyScalar(1.05)),h.clone().add(t.up.clone().multiplyScalar(-1.05)),t.colors.a,{radiusScale:2.2,life:.34,opacity:1}),Fn(h.clone().add(t.right.clone().multiplyScalar(.7)),h.clone().add(t.right.clone().multiplyScalar(-.7)),t.colors.tracer,{radiusScale:1.9,life:.34,opacity:1})}}},EC=i=>{for(let e=Ea.length-1;e>=0;e-=1){const t=Ea[e];t.prevPos.copy(t.pos),t.velocity.y-=k1*i,t.pos.add(t.velocity.clone().multiplyScalar(i)),t.mesh.position.copy(t.pos);const n=t.pos.distanceTo(t.prevPos);t.traveledDistance+=n;const s=Math.max(0,Math.min(1,t.traveledDistance/Gh)),r=t.phase+s*t.spin;t.mesh.rotation.set(r*.9,r*1.1,r*.75),t.trailTimer+=i;const o=t.source==="remote"?.032:.018;if(t.trailTimer>=o){t.trailTimer=0;const l=Lt(t.pos,Math.random()>.5?t.colors.a:t.colors.b);l&&(l.scale.setScalar(1+Math.random()*.9),l.userData.life=.22+Math.random()*.16)}let a=null;if(t.pos.y<=.2&&(a=t.pos.clone(),a.y=.2),!a&&n>1e-4&&(a=el(t.prevPos,t.pos,.4)),!a){if(t.source==="local"){for(const l of R.remotePlayers.values())if(a=ax(l,t.prevPos,t.pos),a)break}else if(t.source==="remote"){const l=tl(t.prevPos,t.pos);l&&(a=l.point,l.headshot)}}if(!a&&t.traveledDistance>=Wg&&(a=null),(a||t.traveledDistance>=Wg)&&(me.remove(t.mesh),t.mesh.traverse(l=>{l.isMesh&&(l.geometry.dispose(),l.material.dispose())}),Ea.splice(e,1),a)){const l=a.clone();t.source==="remote"&&ou({},t.ownerId);const c=Lt(l,t.colors.a),u=Lt(l,t.colors.b);c&&(c.scale.setScalar(2.5),c.userData.life=.42),u&&(u.scale.setScalar(1.9),u.userData.life=.35),Go(l,t.colors.tracer),Fn(l.clone().add(t.up.clone().multiplyScalar(1.15)),l.clone().add(t.up.clone().multiplyScalar(-1.15)),t.colors.a,{radiusScale:2.3,life:.34,opacity:1}),Fn(l.clone().add(t.right.clone().multiplyScalar(.8)),l.clone().add(t.right.clone().multiplyScalar(-.8)),t.colors.tracer,{radiusScale:2,life:.34,opacity:1})}}},TC=i=>{for(let e=Ta.length-1;e>=0;e-=1){const t=Ta[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA*(1-n*.22),o=Math.sin(s*.5+Math.PI*.35)*t.waveAmpB,l=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(o));t.pos.copy(l),t.mesh.position.copy(l),t.mesh.scale.setScalar(1.12+Math.sin(performance.now()*.02)*.28),t.trailTimer+=i;const c=t.source==="remote"?.016:.007;if(t.trailTimer>=c){t.trailTimer=0;const d=Math.random()>.5?t.colors.tracer:t.colors.a,h=Math.random()>.5?t.colors.tracer:t.colors.b,f=Lt(l,d),g=Lt(l.clone().add(t.right.clone().multiplyScalar((Math.random()-.5)*.12)),h);f&&(f.scale.setScalar(.72+Math.random()*.35),f.userData.life=.22+Math.random()*.08),g&&(g.scale.setScalar(.62+Math.random()*.28),g.userData.life=.18+Math.random()*.08)}let u=null;if(t.source==="remote"){const d=tl(t.prevPos,t.pos);d&&(u=d.point,d.headshot)}if(u||(u=el(t.prevPos,t.pos,.22)),u||n>=1){me.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Ta.splice(e,1);const d=u?u.clone():t.end.clone();u&&t.source==="remote"&&ou({},t.ownerId);const h=Lt(d,t.colors.tracer);h&&(h.scale.setScalar(2.45),h.userData.life=.45);const f=Lt(d,t.colors.b);f&&(f.scale.setScalar(1.9),f.userData.life=.38),Go(d,t.colors.tracer),Fn(d.clone().add(t.up.clone().multiplyScalar(.95)),d.clone().add(t.up.clone().multiplyScalar(-.95)),t.colors.tracer,{radiusScale:2,life:.28,opacity:1}),Fn(d.clone().add(t.right.clone().multiplyScalar(.75)),d.clone().add(t.right.clone().multiplyScalar(-.75)),t.colors.a,{radiusScale:1.75,life:.28,opacity:.95})}}},wC=i=>{for(let e=wa.length-1;e>=0;e-=1){const t=wa[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA,o=Math.cos(s*.7+Math.PI*.3)*t.waveAmpB,l=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(o));t.pos.copy(l),t.mesh.position.copy(l),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.03)*.18),t.trailTimer+=i;const c=t.source==="remote"?.012:.005;if(t.trailTimer>=c){t.trailTimer=0;const d=2.9+Math.random()*1.4,h=l.clone().add(t.dir.clone().multiplyScalar(-d)),f=Math.random()>.5?t.colors.a:t.colors.tracer;Fn(l,h,f,{radiusScale:1.8,life:.36,opacity:.92});const g=Lt(h,Math.random()>.5?t.colors.a:t.colors.b);g&&(g.scale.setScalar(.7+Math.random()*.3),g.userData.life=.22+Math.random()*.08)}let u=null;if(t.source==="remote"){const d=tl(t.prevPos,t.pos);d&&(u=d.point,d.headshot)}if(u||(u=el(t.prevPos,t.pos,.24)),u||n>=1){me.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),wa.splice(e,1);const d=u?u.clone():t.end.clone();u&&t.source==="remote"&&ou({},t.ownerId);const h=Lt(d,t.colors.a),f=Lt(d,t.colors.b);h&&(h.scale.setScalar(2.2),h.userData.life=.4),f&&(f.scale.setScalar(2.8),f.userData.life=.46),Go(d,t.colors.tracer),Fn(d.clone().add(t.up.clone().multiplyScalar(1.35)),d.clone().add(t.up.clone().multiplyScalar(-1.35)),t.colors.a,{radiusScale:2.35,life:.36,opacity:1}),Fn(d.clone().add(t.right.clone().multiplyScalar(1.05)),d.clone().add(t.right.clone().multiplyScalar(-1.05)),t.colors.tracer,{radiusScale:2.15,life:.36,opacity:.98})}}},AC=i=>{const e=performance.now();for(let t=bi.length-1;t>=0;t-=1){const n=bi[t];if(!n||e>=n.endAt){Po(n?.ownerId);continue}const s=ox(n.ownerId);if(!s){e>(n.waitingOwnerUntil||0)&&Po(n.ownerId);continue}if(n.hammers.length>0){let c=0;for(let u=0;u<n.hammers.length;u+=1){const d=n.hammers[u];d?.disposed||(n.hammers[c]=d,c+=1)}n.hammers.length=c}for(;n.nextSpawnAt<=e&&n.nextSpawnAt<n.endAt;){if(n.hammers.length<n.maxActiveHammers){const c=sx(.82,.95,n.team);c.position.copy(s),c.visible=!0,me.add(c);const u=Math.max(0,Math.min(1,(n.nextSpawnAt-n.createdAt)/Math.max(1,n.endAt-n.createdAt)));n.hammers.push({mesh:c,spawnAt:n.nextSpawnAt,baseAngle:Math.random()*Math.PI*2+n.spawnCount%4*(Math.PI*.5),maxRadius:Math.max(2.2,n.maxOrbitRadius*(.22+u*.78)),prevPos:s.clone(),disposed:!1})}n.spawnCount+=1,n.nextSpawnAt+=n.spawnIntervalMs}const r=(e-n.createdAt)/1e3,o=Math.max(0,Math.min(1,(e-n.createdAt)/Math.max(1,n.endAt-n.createdAt))),a=.2+Math.sin(r*5.5)*.1,l=!!(R.self&&n.ownerId===R.self.id);for(let c=0;c<n.hammers.length;c+=1){const u=n.hammers[c],d=u.mesh;if(!d||u.disposed)continue;d.visible=!0;const h=Math.max(0,Math.min(1,(e-u.spawnAt)/1200)),f=u.maxRadius*(.25+.75*o*h),g=n.phase+r*5.4+u.baseAngle+c*.11,_=f+Math.sin(r*3.4+c)*.12;u.prevPos.copy(d.position),d.position.set(s.x+Math.cos(g)*_,s.y+a+Math.sin(r*3.1+c)*.18,s.z+Math.sin(g)*_),d.rotation.set(r*5.8+c,r*6.5+c*.7,r*4.9+c);let m=null;if(d.position.y<=.22&&(m=d.position.clone(),m.y=.22),m||(m=el(u.prevPos,d.position,.34)),!m)if(l){for(const p of R.remotePlayers.values())if(m=ax(p,u.prevPos,d.position),m)break}else{const p=tl(u.prevPos,d.position);p&&(m=p.point)}if(m){qR(u,m);continue}if(Math.random()<.45){const p=Lt(d.position,Math.random()>.5?16773830:10154239);p&&(p.scale.setScalar(.45+Math.random()*.35),p.userData.life=.1+Math.random()*.1)}}}},RC=()=>{let i=0;for(let e=0;e<bi.length;e+=1){const t=bi[e];if(t?.hammers)for(let n=0;n<t.hammers.length;n+=1)t.hammers[n]?.mesh?.visible&&!t.hammers[n]?.disposed&&(i+=1)}return i},CC=i=>{const e=Co(He);if(Gt()){if(e&&rs&&(rs=!1),xd-=i,Er){_n=!1;return}(gr||ve.active)&&_n&&xd<=0&&!rs&&(oC(),xd=IR(),!e&&ds<=0&&hs>0&&cp())}},PC=()=>{if(!Nt||!R.joinedRoom||!Eo()){Nt&&!Eo()&&(Nt=!1,Ei=!1,Ti=0,fs=0,Jn=Hs(),ps());return}const i=Math.max(0,fs-performance.now()),e=Math.ceil(i/1e3);e!==Jn&&(Jn=e,ps()),i<=0&&BR()},IC=()=>{if(!Ao||!R.joinedRoom||R.joinedRoom.room.status!=="cooldown"){Ao&&cr();return}const i=Math.max(0,sp-performance.now()),e=Math.ceil(i/1e3);e!==co&&(co=e,Eh.textContent=String(co)),i<=0&&(Eh.textContent="0")},LC=()=>{},bd=i=>{if(!Array.isArray(i)||i.length===0)return{active:0,nearestDistance:null,nearestIndex:null,nearestPosition:null,nearestDelta:null};let e=0,t=Number.POSITIVE_INFINITY,n=null,s=null;for(let a=0;a<i.length;a+=1){const l=i[a];if(!l?.active||!l.mesh?.visible)continue;e+=1;const c=Number(Z.position.x)-Number(l.mesh.position.x),u=Number(Z.position.z)-Number(l.mesh.position.z),d=c*c+u*u;d<t&&(t=d,n=Number.isFinite(Number(l.index))?Number(l.index):a,s={x:Number(l.mesh.position.x.toFixed(3)),y:Number(l.mesh.position.y.toFixed(3)),z:Number(l.mesh.position.z.toFixed(3))})}const r=Number.isFinite(t)?Math.sqrt(t):null;let o=null;return s&&(o={x:Number((s.x-Number(Z.position.x)).toFixed(3)),z:Number((s.z-Number(Z.position.z)).toFixed(3))}),{active:e,nearestDistance:r==null?null:Number(r.toFixed(3)),nearestIndex:n,nearestPosition:s,nearestDelta:o}},NC=()=>{const i=R.joinedRoom?.room||null,e=bd(ji),t=bd(Ki),n=bd(Yi);Z.getWorldDirection(zi);const s={note:"coords: x derecha(+), z adelante(+), y arriba(+)",mode:i?.mode||"lobby",room:i?{id:i.id||null,status:i.status||null,weather:i.weather||null}:null,player:{x:Number(Z.position.x.toFixed(3)),y:Number(Z.position.y.toFixed(3)),z:Number(Z.position.z.toFixed(3)),yaw:Number(bn.toFixed(4)),pitch:Number(En.toFixed(4)),forward:{x:Number(zi.x.toFixed(4)),z:Number(zi.z.toFixed(4))},isJumping:!!It,canPlay:!!Gt()},resources:{health:Math.round($n),shield:Math.round(Bs),mana:Math.round(Mr),ammoInMag:Math.round(ds),ammoReserve:Math.round(hs),pendingHealthRegen:Number(ks.toFixed(3))},pickups:{mana:e,shield:t,health:n},timing:{nowMs:Date.now()}};return JSON.stringify(s)};window.render_game_to_text=NC;const Ed=()=>!R.joinedRoom&&Ji&&!Ji.classList.contains("hidden"),DC=()=>wn()&&ur&&!ur.classList.contains("hidden"),_x=()=>{if(requestAnimationFrame(_x),!Tc)try{const i=Math.min(Z1.getDelta(),.05);if(Ws(),bA(),rC(),hC(i),pC(i),fC(i),uC(i),zR(i),fx(),mC(i),gC(i),_C(i),lC(),xC(i),vC(i),yC(i),MC(i),bC(i),EC(i),TC(i),wC(i),AC(i),CC(i),LC(),PC(),IC(),SC(i),UR(),OR(),lp(!1),h1(i),tx(i),Ed()&&Je.mixer&&Je.mixer.update(i),Ed()&&Je.model&&(Je.model.rotation.y+=i*.45),Ed()&&Je.renderer&&Je.scene&&Je.camera&&(C_(),Je.renderer.render(Je.scene,Je.camera)),DC()&&Yn.size>0)for(const e of Yn.values()){if(!e.renderer||!e.scene||!e.camera||!e.node?.isConnected)continue;const t=Math.max(60,e.node.clientWidth||92),n=Math.max(60,e.node.clientHeight||92),s=e.renderer.domElement;s&&(s.width!==t||s.height!==n)&&e.renderer.setSize(t,n,!1),e.camera.aspect=t/n,e.camera.updateProjectionMatrix(),e.mixer&&e.mixer.update(i),e.model&&(e.model.rotation.y+=i*e.rotateSpeed);try{e.renderer.render(e.scene,e.camera)}catch{Rc(e.key)}}try{Jt.render(me,Aa())}catch{Tc=!0;return}Ot.drawCalls=Jt.info.render.calls||0,Ot.triangles=Jt.info.render.triangles||0,Ot.geometries=Jt.info.memory.geometries||0,Ot.textures=Jt.info.memory.textures||0,Ot.vfx=pr.length+ao.length+lo.length+mr.length+ba.length+Ea.length+Ta.length+wa.length+RC()}catch(i){hn.animateErrors+=1,hn.lastAnimateErrorAt=performance.now(),hn.lastLoggedAt+1e3<hn.lastAnimateErrorAt&&(hn.lastLoggedAt=hn.lastAnimateErrorAt,console.error("[koketria][animate]",i))}};window.addEventListener("resize",()=>{Z.aspect=window.innerWidth/window.innerHeight,Z.updateProjectionMatrix(),yr.aspect=window.innerWidth/window.innerHeight,yr.updateProjectionMatrix(),Jt.setSize(window.innerWidth,window.innerHeight),Je.renderer&&Je.camera&&C_(),Ws()});window.addEventListener("orientationchange",Ws);document.addEventListener("fullscreenchange",u_);yA();F_();Vo();const Td=d_();Td&&gi&&(gi.value=Td,Qi.value=Td,Bo(!0));ya(!1);io("night");R_();sC();Ws();ps();Cn();Nh();va();jc();bo();Ns();tg&&(tg.href=jA());nl();_x();lx();YA();
