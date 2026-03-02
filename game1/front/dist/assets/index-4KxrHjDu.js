(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const kd="183",F0=0,rf=1,O0=2,uc=1,B0=2,bo=3,Wi=0,on=1,dn=2,Fi=0,Er=1,Xi=2,of=3,af=4,k0=5,Is=100,z0=101,V0=102,H0=103,G0=104,W0=200,X0=201,q0=202,j0=203,gu=204,_u=205,Y0=206,K0=207,$0=208,Z0=209,J0=210,Q0=211,e_=212,t_=213,n_=214,xu=0,vu=1,yu=2,Fr=3,Mu=4,Su=5,bu=6,Eu=7,Em=0,i_=1,s_=2,ci=0,Tm=1,wm=2,Am=3,Rm=4,Cm=5,Pm=6,Im=7,cf="attached",r_="detached",Lm=300,Ws=301,Or=302,ol=303,al=304,Bc=306,Br=1e3,si=1001,Ec=1002,Bt=1003,Dm=1004,Eo=1005,Rt=1006,dc=1007,Di=1008,hn=1009,Nm=1010,Um=1011,Wo=1012,zd=1013,gi=1014,bn=1015,qi=1016,Vd=1017,Hd=1018,Xo=1020,Fm=35902,Om=35899,Bm=1021,km=1022,En=1023,ji=1026,Ns=1027,Gd=1028,Wd=1029,kr=1030,Xd=1031,qd=1033,hc=33776,fc=33777,pc=33778,mc=33779,Tu=35840,wu=35841,Au=35842,Ru=35843,Cu=36196,Pu=37492,Iu=37496,Lu=37488,Du=37489,Nu=37490,Uu=37491,Fu=37808,Ou=37809,Bu=37810,ku=37811,zu=37812,Vu=37813,Hu=37814,Gu=37815,Wu=37816,Xu=37817,qu=37818,ju=37819,Yu=37820,Ku=37821,$u=36492,Zu=36494,Ju=36495,Qu=36283,ed=36284,td=36285,nd=36286,jd=2200,oa=2201,o_=2202,qo=2300,jo=2301,cl=2302,lf=2303,_r=2400,xr=2401,Tc=2402,Yd=2500,a_=2501,c_=0,zm=1,id=2,l_=3200,Vm=0,u_=1,os="",Kt="srgb",rn="srgb-linear",wc="linear",at="srgb",Qs=7680,uf=519,d_=512,h_=513,f_=514,Kd=515,p_=516,m_=517,$d=518,g_=519,sd=35044,df="300 es",ri=2e3,Yo=2001;function __(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function x_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v_(){const i=Ko("canvas");return i.style.display="block",i}const hf={};function Ac(...i){const e="THREE."+i.shift();console.log(e,...i)}function Hm(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=Hm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=Hm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rc(...i){const e=i.join(" ");e in hf||(hf[e]=!0,Ae(...i))}function y_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const M_={[xu]:vu,[yu]:bu,[Mu]:Eu,[Fr]:Su,[vu]:xu,[bu]:yu,[Eu]:Mu,[Su]:Fr};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ff=1234567;const Io=Math.PI/180,zr=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Zd(i,e){return(i%e+e)%e}function S_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function b_(i,e,t){return i!==e?(t-i)/(e-i):0}function Lo(i,e,t){return(1-t)*i+t*e}function E_(i,e,t,n){return Lo(i,e,1-Math.exp(-t*n))}function T_(i,e=1){return e-Math.abs(Zd(i,e*2)-e)}function w_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C_(i,e){return i+Math.random()*(e-i)}function P_(i){return i*(.5-Math.random())}function I_(i){i!==void 0&&(ff=i);let e=ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(i){return i*Io}function D_(i){return i*zr}function N_(i){return(i&i-1)===0&&i!==0}function U_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function F_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*u,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gm={DEG2RAD:Io,RAD2DEG:zr,generateUUID:Hn,clamp:Ze,euclideanModulo:Zd,mapLinear:S_,inverseLerp:b_,lerp:Lo,damp:E_,pingpong:T_,smoothstep:w_,smootherstep:A_,randInt:R_,randFloat:C_,randFloatSpread:P_,seededRandom:I_,degToRad:L_,radToDeg:D_,isPowerOfTwo:N_,ceilPowerOfTwo:U_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:ct,denormalize:Fn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(h!==_||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+_*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+_*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new C,pf=new wn;class ze{constructor(e,t,n,s,r,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],y=s[1],E=s[4],S=s[7],T=s[2],w=s[5],R=s[8];return r[0]=o*_+a*y+c*T,r[3]=o*g+a*E+c*w,r[6]=o*p+a*S+c*R,r[1]=l*_+u*y+h*T,r[4]=l*g+u*E+h*w,r[7]=l*p+u*S+h*R,r[2]=d*_+f*y+m*T,r[5]=d*g+f*E+m*w,r[8]=d*p+f*S+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new ze,mf=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){const i={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?wc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rn]:{primaries:e,whitePoint:n,transfer:wc,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const Qe=B_();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class k_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Ko("canvas")),er.width=e.width,er.height=e.height;const s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?k_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let V_=0;const hl=new C;class kt extends js{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=si,s=si,r=Rt,o=Di,a=En,c=hn,l=kt.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Hn(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Lm;kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,T=(p+1)/2,w=(u+d)/4,R=(h+_)/4,x=(m+g)/4;return E>S&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends H_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wm extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G_ extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ve{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,m,_,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ji.crossVectors(n,cn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ji.crossVectors(n,cn)),Ji.normalize(),Ea.crossVectors(cn,Ji),s[0]=Ji.x,s[4]=Ea.x,s[8]=cn.x,s[1]=Ji.y,s[5]=Ea.y,s[9]=cn.y,s[2]=Ji.z,s[6]=Ea.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],E=n[7],S=n[11],T=n[15],w=s[0],R=s[4],x=s[8],M=s[12],N=s[1],P=s[5],U=s[9],k=s[13],X=s[2],V=s[6],G=s[10],B=s[14],ee=s[3],Z=s[7],de=s[11],_e=s[15];return r[0]=o*w+a*N+c*X+l*ee,r[4]=o*R+a*P+c*V+l*Z,r[8]=o*x+a*U+c*G+l*de,r[12]=o*M+a*k+c*B+l*_e,r[1]=u*w+h*N+d*X+f*ee,r[5]=u*R+h*P+d*V+f*Z,r[9]=u*x+h*U+d*G+f*de,r[13]=u*M+h*k+d*B+f*_e,r[2]=m*w+_*N+g*X+p*ee,r[6]=m*R+_*P+g*V+p*Z,r[10]=m*x+_*U+g*G+p*de,r[14]=m*M+_*k+g*B+p*_e,r[3]=y*w+E*N+S*X+T*ee,r[7]=y*R+E*P+S*V+T*Z,r[11]=y*x+E*U+S*G+T*de,r[15]=y*M+E*k+S*B+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],y=c*f-l*d,E=a*f-l*h,S=a*d-c*h,T=o*f-l*u,w=o*d-c*u,R=o*h-a*u;return t*(_*y-g*E+p*S)-n*(m*y-g*T+p*w)+s*(m*E-_*T+p*R)-r*(m*S-_*w+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=t*a-n*o,E=t*c-s*o,S=t*l-r*o,T=n*c-s*a,w=n*l-r*a,R=s*l-r*c,x=u*_-h*m,M=u*g-d*m,N=u*p-f*m,P=h*g-d*_,U=h*p-f*_,k=d*p-f*g,X=y*k-E*U+S*P+T*N-w*M+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/X;return e[0]=(a*k-c*U+l*P)*V,e[1]=(s*U-n*k-r*P)*V,e[2]=(_*R-g*w+p*T)*V,e[3]=(d*w-h*R-f*T)*V,e[4]=(c*N-o*k-l*M)*V,e[5]=(t*k-s*N+r*M)*V,e[6]=(g*S-m*R-p*E)*V,e[7]=(u*R-d*S+f*E)*V,e[8]=(o*U-a*N+l*x)*V,e[9]=(n*N-t*U-r*x)*V,e[10]=(m*w-_*S+p*y)*V,e[11]=(h*S-u*w-f*y)*V,e[12]=(a*M-o*P-c*x)*V,e[13]=(t*P-n*M+s*x)*V,e[14]=(_*E-m*T-g*y)*V,e[15]=(u*T-h*E+d*y)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,y=c*l,E=c*u,S=c*h,T=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+S)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+p))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(m+E)*R,s[9]=(g-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=tr.set(s[0],s[1],s[2]).length();const a=tr.set(s[4],s[5],s[6]).length(),c=tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);const l=1/o,u=1/a,h=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=ri,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===ri)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Yo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===ri)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Yo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new C,Pn=new Ve,W_=new C(0,0,0),X_=new C(1,1,1),Ji=new C,Ea=new C,cn=new C,_f=new Ve,xf=new wn;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const vf=new C,nr=new wn,Ti=new Ve,Ta=new C,ao=new C,j_=new C,Y_=new wn,yf=new C(1,0,0),Mf=new C(0,1,0),Sf=new C(0,0,1),bf={type:"added"},K_={type:"removed"},ir={type:"childadded",child:null},fl={type:"childremoved",child:null};class yt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new C,t=new Wn,n=new wn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ze}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ao,Ta,this.up):Ti.lookAt(Ta,ao,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ti),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),ir.child=e,this.dispatchEvent(ir),ir.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K_),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new C(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Zd(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(Ze(Qt.r*255,0,255))*65536+Math.round(Ze(Qt.g*255,0,255))*256+Math.round(Ze(Qt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Kt){Qe.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,s=Qt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(wa);const n=Lo(Qi.h,wa.h,t),s=Lo(Qi.s,wa.s,t),r=Lo(Qi.l,wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Pe;Pe.NAMES=Xm;class eh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new eh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class th extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const In=new C,wi=new C,gl=new C,Ai=new C,sr=new C,rr=new C,Ef=new C,_l=new C,xl=new C,vl=new C,yl=new gt,Ml=new gt,Sl=new gt;class On{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),wi.subVectors(n,t),gl.subVectors(e,t);const o=In.dot(In),a=In.dot(wi),c=In.dot(gl),l=wi.dot(wi),u=wi.dot(gl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),wi.subVectors(e,t),In.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),In.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,n),rr.subVectors(r,n),_l.subVectors(e,n);const c=sr.dot(_l),l=rr.dot(_l);if(c<=0&&l<=0)return t.copy(n);xl.subVectors(e,s);const u=sr.dot(xl),h=rr.dot(xl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(sr,o);vl.subVectors(e,r);const f=sr.dot(vl),m=rr.dot(vl);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(rr,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Ef.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(Ef,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ra.subVectors(this.max,co),or.subVectors(e.a,co),ar.subVectors(e.b,co),cr.subVectors(e.c,co),es.subVectors(ar,or),ts.subVectors(cr,ar),Ss.subVectors(or,cr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ss.z,Ss.y,es.z,0,-es.x,ts.z,0,-ts.x,Ss.z,0,-Ss.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ss.y,Ss.x,0];return!bl(t,or,ar,cr,Ra)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,or,ar,cr,Ra))?!1:(Ca.crossVectors(es,ts),t=[Ca.x,Ca.y,Ca.z],bl(t,or,ar,cr,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new C,new C,new C,new C,new C,new C,new C,new C],Ln=new C,Aa=new xn,or=new C,ar=new C,cr=new C,es=new C,ts=new C,Ss=new C,co=new C,Ra=new C,Ca=new C,bs=new C;function bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Dt=new C,Pa=new Ye;let Z_=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}}class qm extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jm extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const J_=new xn,lo=new C,El=new C;class yi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):J_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(El)),this.expandByPoint(lo.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Q_=0;const yn=new Ve,Tl=new yt,lr=new C,ln=new xn,uo=new xn,Xt=new C;class It extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?jm:qm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(ln.min,uo.min),ln.expandByPoint(Xt),Xt.addVectors(ln.max,uo.max),ln.expandByPoint(Xt)):(ln.expandByPoint(uo.min),ln.expandByPoint(uo.max))}ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xt.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),Xt.add(lr)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new C,c[x]=new C;const l=new C,u=new C,h=new C,d=new Ye,f=new Ye,m=new Ye,_=new C,g=new C;function p(x,M,N){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,N),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,N),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[x].add(_),a[M].add(_),a[N].add(_),c[x].add(g),c[M].add(g),c[N].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,M=y.length;x<M;++x){const N=y[x],P=N.start,U=N.count;for(let k=P,X=P+U;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new C,S=new C,T=new C,w=new C;function R(x){T.fromBufferAttribute(s,x),w.copy(T);const M=a[x];E.copy(M),E.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(w,M);const P=S.dot(c[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,P)}for(let x=0,M=y.length;x<M;++x){const N=y[x],P=N.start,U=N.count;for(let k=P,X=P+U;k<X;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new zt(d,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ex{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new C;class nh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ac("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ac("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let tx=0;class ui extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Er,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==Is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new C,wl=new C,Ia=new C,ns=new C,Al=new C,La=new C,Rl=new C;class aa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(wl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=ns.dot(this.direction),c=-ns.dot(Ia),l=ns.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wl).addScaledVector(Ia,d),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),La.subVectors(n,e),Rl.crossVectors(Al,La);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const c=a*this.direction.dot(La.crossVectors(ns,La));if(c<0)return null;const l=a*this.direction.dot(Al.cross(ns));if(l<0||c+l>o)return null;const u=-a*ns.dot(Rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tf=new Ve,Es=new aa,Da=new yi,wf=new C,Na=new C,Ua=new C,Fa=new C,Cl=new C,Oa=new C,Af=new C,Ba=new C;class tt extends yt{constructor(e=new It,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Cl.fromBufferAttribute(h,e),o?Oa.addScaledVector(Cl,u):Oa.addScaledVector(Cl.sub(t),u))}t.add(Oa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Da.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Da,wf)===null||Es.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(Tf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,T=E;S<T;S+=3){const w=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);s=ka(this,p,e,n,l,u,h,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);s=ka(this,o,e,n,l,u,h,y,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,T=E;S<T;S+=3){const w=S,R=S+1,x=S+2;s=ka(this,p,e,n,l,u,h,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,E=g+1,S=g+2;s=ka(this,o,e,n,l,u,h,y,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function nx(i,e,t,n,s,r,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Wi,a),c===null)return null;Ba.copy(a),Ba.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ba);return l<t.near||l>t.far?null:{distance:l,point:Ba.clone(),object:i}}function ka(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Na),i.getVertexPosition(c,Ua),i.getVertexPosition(l,Fa);const u=nx(i,e,t,n,Na,Ua,Fa,Af);if(u){const h=new C;On.getBarycoord(Af,Na,Ua,Fa,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,c,l,h,new Ye)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,c,l,h,new Ye)),o&&(u.normal=On.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};On.getNormal(Na,Ua,Fa,d.normal),u.face=d,u.barycoord=h}return u}const Rf=new C,Cf=new gt,Pf=new gt,ix=new C,If=new Ve,za=new C,Pl=new yi,Lf=new Ve,Il=new aa;class sx extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cf,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(s),e.ray.intersectsSphere(Pl)!==!1&&(Lf.copy(s).invert(),Il.copy(e.ray).applyMatrix4(Lf),!(this.boundingBox!==null&&Il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===r_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cf.fromBufferAttribute(s.attributes.skinIndex,e),Pf.fromBufferAttribute(s.attributes.skinWeight,e),Rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Pf.getComponent(r);if(o!==0){const a=Cf.getComponent(r);If.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ix.copy(Rf).applyMatrix4(If),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ym extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ih extends kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bt,u=Bt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new Ve,rx=new Ve;class sh{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:rx;Df.multiplyMatrices(a,t[r]),Df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ih(t,e,e,En,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new Ym),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class rd extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ur=new Ve,Nf=new Ve,Va=[],Uf=new xn,ox=new Ve,ho=new tt,fo=new yi;class ax extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Uf.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Uf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),fo.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Nf.multiplyMatrices(n,ur),ho.matrixWorld=Nf,ho.raycast(e,Va);for(let o=0,a=Va.length;o<a;o++){const c=Va[o];c.instanceId=r,c.object=this,t.push(c)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ih(new Float32Array(s*this.count),s,this.count,Gd,bn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ll=new C,cx=new C,lx=new ze;class Ps{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ll.subVectors(n,t).cross(cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lx.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new yi,ux=new Ye(.5,.5),Ha=new C;class rh{constructor(e=new Ps,t=new Ps,n=new Ps,s=new Ps,r=new Ps,o=new Ps){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],E=r[13],S=r[14],T=r[15];if(s[0].setComponents(l-o,f-u,p-m,T-y).normalize(),s[1].setComponents(l+o,f+u,p+m,T+y).normalize(),s[2].setComponents(l+a,f+h,p+_,T+E).normalize(),s[3].setComponents(l-a,f-h,p-_,T-E).normalize(),n)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,f-d,p-g,T-S).normalize();else if(s[4].setComponents(l-c,f-d,p-g,T-S).normalize(),t===ri)s[5].setComponents(l+c,f+d,p+g,T+S).normalize();else if(t===Yo)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=ux.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oh extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new C,Pc=new C,Ff=new Ve,po=new aa,Ga=new yi,Dl=new C,Of=new C;class ah extends yt{constructor(e=new It,t=new oh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cc.fromBufferAttribute(t,s-1),Pc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new xt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Ff.copy(s).invert(),po.copy(e.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),y=u.getX(_+1),E=Wa(this,e,po,c,p,y,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Wa(this,e,po,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Wa(this,e,po,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Wa(this,e,po,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Cc.fromBufferAttribute(a,s),Pc.fromBufferAttribute(a,r),t.distanceSqToSegment(Cc,Pc,Dl,Of)>n)return;Dl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Dl);if(!(l<e.near||l>e.far))return{distance:l,point:Of.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Bf=new C,kf=new C;class Km extends ah{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bf.fromBufferAttribute(t,s),kf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bf.distanceTo(kf);e.setAttribute("lineDistance",new xt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dx extends ah{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kr extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zf=new Ve,od=new aa,Xa=new yi,qa=new C;class ca extends yt{constructor(e=new It,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;zf.copy(s).invert(),od.copy(e.ray).applyMatrix4(zf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);qa.fromBufferAttribute(h,g),Vf(qa,g,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)qa.fromBufferAttribute(h,m),Vf(qa,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vf(i,e,t,n,s,r,o){const a=od.distanceSqToPoint(i);if(a<t){const c=new C;od.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $m extends kt{constructor(e=[],t=Ws,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hx extends kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $o extends kt{constructor(e,t,n=gi,s,r,o,a=Bt,c=Bt,l,u=ji,h=1){if(u!==ji&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fx extends $o{constructor(e,t=gi,n=Ws,s,r,o=Bt,a=Bt,c,l=ji){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zm extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ys extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function m(_,g,p,y,E,S,T,w,R,x,M){const N=S/R,P=T/x,U=S/2,k=T/2,X=w/2,V=R+1,G=x+1;let B=0,ee=0;const Z=new C;for(let de=0;de<G;de++){const _e=de*P-k;for(let fe=0;fe<V;fe++){const He=fe*N-U;Z[_]=He*y,Z[g]=_e*E,Z[p]=X,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(fe/R),h.push(1-de/x),B+=1}}for(let de=0;de<x;de++)for(let _e=0;_e<R;_e++){const fe=d+_e+V*de,He=d+_e+V*(de+1),vt=d+(_e+1)+V*(de+1),mt=d+(_e+1)+V*de;c.push(fe,He,mt),c.push(He,vt,mt),ee+=6}a.addGroup(f,ee,M),f+=ee,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kc extends It{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+r,_=s+1,g=new C,p=new C;for(let y=0;y<=m;y++){let E=0,S=0,T=0,w=0;if(y<=n){const M=y/n,N=M*Math.PI/2;S=-u-e*Math.cos(N),T=e*Math.sin(N),w=-e*Math.cos(N),E=M*h}else if(y<=n+r){const M=(y-n)/r;S=-u+M*t,T=e,w=0,E=h+M*d}else{const M=(y-n-r)/n,N=M*Math.PI/2;S=u+e*Math.sin(N),T=e*Math.cos(N),w=e*Math.sin(N),E=h+d+M*h}const R=Math.max(0,Math.min(1,E/f));let x=0;y===0?x=.5/s:y===m&&(x=-.5/s);for(let M=0;M<=s;M++){const N=M/s,P=N*Math.PI*2,U=Math.sin(P),k=Math.cos(P);p.x=-T*k,p.y=S,p.z=T*U,a.push(p.x,p.y,p.z),g.set(-T*k,w,T*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(N+x,R)}if(y>0){const M=(y-1)*_;for(let N=0;N<s;N++){const P=M+N,U=M+N+1,k=y*_+N,X=y*_+N+1;o.push(P,U,k),o.push(U,X,k)}}}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class zc extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;y(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function y(){const S=new C,T=new C;let w=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const M=[],N=x/r,P=N*(t-e)+e;for(let U=0;U<=s;U++){const k=U/s,X=k*c+a,V=Math.sin(X),G=Math.cos(X);T.x=P*V,T.y=-N*n+g,T.z=P*G,h.push(T.x,T.y,T.z),S.set(V,R,G).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-N),M.push(m++)}_.push(M)}for(let x=0;x<s;x++)for(let M=0;M<r;M++){const N=_[M][x],P=_[M+1][x],U=_[M+1][x+1],k=_[M][x+1];(e>0||M!==0)&&(u.push(N,P,k),w+=3),(t>0||M!==r-1)&&(u.push(P,U,k),w+=3)}l.addGroup(p,w,0),p+=w}function E(S){const T=m,w=new Ye,R=new C;let x=0;const M=S===!0?e:t,N=S===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*N,0),d.push(0,N,0),f.push(.5,.5),m++;const P=m;for(let U=0;U<=s;U++){const X=U/s*c+a,V=Math.cos(X),G=Math.sin(X);R.x=M*G,R.y=g*N,R.z=M*V,h.push(R.x,R.y,R.z),d.push(0,N,0),w.x=V*.5+.5,w.y=G*.5*N+.5,f.push(w.x,w.y),m++}for(let U=0;U<s;U++){const k=T+U,X=P+U;S===!0?u.push(X,X+1,k):u.push(X+1,X,k),x+=3}l.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vc extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const E=new C,S=new C,T=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],E),f(t[w+1],S),f(t[w+2],T),c(E,S,T,y)}function c(y,E,S,T){const w=T+1,R=[];for(let x=0;x<=w;x++){R[x]=[];const M=y.clone().lerp(S,x/w),N=E.clone().lerp(S,x/w),P=w-x;for(let U=0;U<=P;U++)U===0&&x===w?R[x][U]=M:R[x][U]=M.clone().lerp(N,U/P)}for(let x=0;x<w;x++)for(let M=0;M<2*(w-x)-1;M++){const N=Math.floor(M/2);M%2===0?(d(R[x][N+1]),d(R[x+1][N]),d(R[x][N])):(d(R[x][N+1]),d(R[x+1][N+1]),d(R[x+1][N]))}}function l(y){const E=new C;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(y),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function u(){const y=new C;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const S=g(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(S,1-T)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){const E=o[y+0],S=o[y+2],T=o[y+4],w=Math.max(E,S,T),R=Math.min(E,S,T);w>.9&&R<.1&&(E<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,E){const S=y*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function m(){const y=new C,E=new C,S=new C,T=new C,w=new Ye,R=new Ye,x=new Ye;for(let M=0,N=0;M<r.length;M+=9,N+=6){y.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),w.set(o[N+0],o[N+1]),R.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),T.copy(y).add(E).add(S).divideScalar(3);const P=g(T);_(w,N+0,y,P),_(R,N+2,E,P),_(x,N+4,S,P)}}function _(y,E,S,T){T<0&&y.x===1&&(o[E]=y.x-1),S.x===0&&S.z===0&&(o[E]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.vertices,e.indices,e.radius,e.detail)}}class ch extends Vc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class lh extends Vc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lh(e.radius,e.detail)}}class ms extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*d-o;for(let E=0;E<l;E++){const S=E*h-r;m.push(S,-y,0),_.push(0,0,1),g.push(E/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const E=y+l*p,S=y+l*(p+1),T=y+1+l*(p+1),w=y+1+l*p;f.push(E,S,w),f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mi extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const w=T/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+E*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(w+S,1-E),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const E=u[p][y+1],S=u[p][y],T=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&f.push(E,S,w),(p!==n-1||c<Math.PI)&&f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const s in n)e[s]=n[s]}return e}function px(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const mx={clone:Vr,merge:nn};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xx extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xn extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vm,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Xn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vx extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yx extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ja(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Qm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class $r{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sx extends $r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_r,endingEnd:_r}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xr:r=e,a=2*t-n;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xr:o=e,c=2*n-t;break;case Tc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,E=(-1-f)*g+(1.5+f)*_+.5*m,S=f*g-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+y*o[l+T]+E*o[c+T]+S*o[h+T];return r}}class eg extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class bx extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ex extends $r{interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const _=(n-t)/(s-t),g=1-_;for(let p=0;p!==a;++p)r[p]=o[l+p]*g+o[c+p]*_;return r}const f=a*2,m=e-1;for(let _=0;_!==a;++_){const g=o[l+_],p=o[c+_],y=m*f+_*2,E=d[y],S=d[y+1],T=e*f+_*2,w=h[T],R=h[T+1];let x=(n-t)/(s-t),M,N,P,U,k;for(let X=0;X<8;X++){M=x*x,N=M*x,P=1-x,U=P*P,k=U*P;const G=k*t+3*U*x*E+3*P*M*w+N*s-n;if(Math.abs(G)<1e-10)break;const B=3*U*(E-t)+6*P*x*(w-E)+3*M*(s-w);if(Math.abs(B)<1e-10)break;x=x-G/B,x=Math.max(0,Math.min(1,x))}r[_]=k*g+3*U*x*S+3*P*M*R+N*p}return r}}class qn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ex(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qo:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break;case lf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return cl;case this.InterpolantFactoryMethodBezier:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ne("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&x_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=jo;class Zr extends qn{constructor(e,t,n){super(e,t,n)}}Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=qo;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class tg extends qn{constructor(e,t,n,s){super(e,t,n,s)}}tg.prototype.ValueTypeName="color";class Hr extends qn{constructor(e,t,n,s){super(e,t,n,s)}}Hr.prototype.ValueTypeName="number";class Tx extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)wn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Gr extends qn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tx(this.times,this.values,this.getValueSize(),e)}}Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends qn{constructor(e,t,n){super(e,t,n)}}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=qo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends qn{constructor(e,t,n,s){super(e,t,n,s)}}Wr.prototype.ValueTypeName="vector";class ad{constructor(e="",t=-1,n=[],s=Yd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ax(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Mx(c);c=Hf(c,1,u),l=Hf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ne("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];Qm(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const E=d[m];g.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new Hr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Wr,f+".position",d,"pos",s),n(Gr,f+".quaternion",d,"rot",s),n(Wr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Wr;case"color":return tg;case"quaternion":return Gr;case"bool":case"boolean":return Zr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ax(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wx(i.type);if(i.times===void 0){const t=[],n=[];Qm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gf(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Rx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cx=new Rx;class Qr{constructor(e){this.manager=e!==void 0?e:Cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class Px extends Error{constructor(e,t){super(e),this.response=t}}class ng extends Qr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Pi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){y();function y(){h.read().then(({done:E,value:S})=>{if(E)p.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,R=u.length;w<R;w++){const x=u[w];x.onProgress&&x.onProgress(T)}p.enqueue(S),y()}},E=>{p.error(E)})}}});return new Response(g)}else throw new Px(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ni.add(`file:${e}`,l);const u=Pi[e];delete Pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const dr=new WeakMap;class Ix extends Qr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=dr.get(o);h===void 0&&(h=[],dr.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Ko("img");function c(){u(),t&&t(this);const h=dr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}dr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ni.remove(`image:${e}`);const d=dr.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Lx extends Qr{constructor(e){super(e)}load(e,t,n,s){const r=new kt,o=new Ix(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class la extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ig extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Nl=new Ve,Wf=new C,Xf=new C;class uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Yo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ya=new C,Ka=new wn,Yn=new C;class sg extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Ka,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Ka,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ya,Ka,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Ka,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new C,qf=new Ye,jf=new Ye;class qt extends sg{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,qf,jf),t.subVectors(jf,qf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dx extends uh{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=zr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nx extends la{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ux extends uh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class rg extends la{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hc extends sg{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fx extends uh{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gc extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Fx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ox extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Do{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ul=new WeakMap;class Bx extends Qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Ul.has(o)===!0)s&&s(Ul.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ni.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ul.set(c,l),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=-90,fr=1;class kx extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(hr,fr,e,t);s.layers=this.layers,this.add(s);const r=new qt(hr,fr,e,t);r.layers=this.layers,this.add(r);const o=new qt(hr,fr,e,t);o.layers=this.layers,this.add(o);const a=new qt(hr,fr,e,t);a.layers=this.layers,this.add(a);const c=new qt(hr,fr,e,t);c.layers=this.layers,this.add(c);const l=new qt(hr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class zx extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vx{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){wn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;wn.multiplyQuaternionsFlat(e,o,e,t,e,n),wn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const dh="\\[\\]\\.:\\/",Hx=new RegExp("["+dh+"]","g"),hh="[^"+dh+"]",Gx="[^"+dh.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",hh),Xx=/(WCOD+)?/.source.replace("WCOD",Gx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Yx=new RegExp("^"+Wx+Xx+qx+jx+"$"),Kx=["material","materials","bones","map"];class $x{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){const t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=$x;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zx{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:_r,endingEnd:_r};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=oa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case a_:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Yd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===o_;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===jd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=xr,s.endingEnd=xr):(e?s.endingStart=this.zeroSlopeAtStart?xr:_r:s.endingStart=Tc,t?s.endingEnd=this.zeroSlopeAtEnd?xr:_r:s.endingEnd=Tc)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Jx=new Float32Array(1);class fh extends js{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new Vx(st.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new eg(new Float32Array(2),new Float32Array(2),1,Jx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ad.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Yd),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Zx(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ad.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Yf=new Ve;class Qx{constructor(e,t,n=0,s=1/0){this.ray=new aa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(e,t=!0,n=[]){return cd(e,this,n,t),n.sort(Kf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)cd(e[s],this,n,t);return n.sort(Kf),n}}function Kf(i,e){return i.distance-e.distance}function cd(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)cd(r[o],e,t,!0)}}class ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class tv extends Km{constructor(e=10,t=10,n=4473924,s=8947848){n=new Pe(n),s=new Pe(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new It;u.setAttribute("position",new xt(c,3)),u.setAttribute("color",new xt(l,3));const h=new oh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function $f(i,e,t,n){const s=nv(n);switch(t){case Bm:return i*e;case Gd:return i*e/s.components*s.byteLength;case Wd:return i*e/s.components*s.byteLength;case kr:return i*e*2/s.components*s.byteLength;case Xd:return i*e*2/s.components*s.byteLength;case km:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case qd:return i*e*4/s.components*s.byteLength;case hc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wu:case Ru:return Math.max(i,16)*Math.max(e,8)/4;case Tu:case Au:return Math.max(i,8)*Math.max(e,8)/2;case Cu:case Pu:case Lu:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Nu:case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $u:case Zu:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qu:case ed:return Math.ceil(i/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nv(i){switch(i){case hn:case Nm:return{byteLength:1,components:1};case Wo:case Um:case qi:return{byteLength:2,components:1};case Vd:case Hd:return{byteLength:2,components:4};case gi:case zd:case bn:return{byteLength:4,components:1};case Fm:case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);function og(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function iv(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
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
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hv=`#ifdef USE_BATCHING
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
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cv=`vec3 transformedNormal = objectNormal;
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
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
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
}`,qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ny=`uniform sampler2D dfgLUT;
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,yM=`#define LAMBERT
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
}`,MM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,bM=`#define NORMAL
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
}`,EM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,wM=`#define PHONG
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
}`,AM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,PM=`#define TOON
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
}`,IM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:cv,alphatest_pars_fragment:lv,aomap_fragment:uv,aomap_pars_fragment:dv,batching_pars_vertex:hv,batching_vertex:fv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Sv,color_fragment:bv,color_pars_fragment:Ev,color_pars_vertex:Tv,color_vertex:wv,common:Av,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Iv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Dv,colorspace_fragment:Nv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:$v,envmap_vertex:zv,fog_vertex:Vv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:qv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Yv,lights_pars_begin:Kv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:ly,map_fragment:uy,map_pars_fragment:dy,map_particle_fragment:hy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:vy,morphtarget_vertex:yy,normal_fragment_begin:My,normal_fragment_maps:Sy,normal_pars_fragment:by,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:jy,specularmap_pars_fragment:Yy,tonemapping_fragment:Ky,tonemapping_pars_fragment:$y,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:Qy,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:sM,backgroundCube_vert:rM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:cM,depth_vert:lM,depth_frag:uM,distance_vert:dM,distance_frag:hM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:_M,meshbasic_frag:xM,meshlambert_vert:vM,meshlambert_frag:yM,meshmatcap_vert:MM,meshmatcap_frag:SM,meshnormal_vert:bM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:wM,meshphysical_vert:AM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:IM,points_frag:LM,shadow_vert:DM,shadow_frag:NM,sprite_vert:UM,sprite_frag:FM},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:nn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:nn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:nn([ae.points,ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:nn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:nn([ae.common,ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:nn([ae.sprite,ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:nn([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:nn([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Qn.physical={uniforms:nn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const $a={r:0,b:0,g:0},ws=new Wn,OM=new Ve;function BM(i,e,t,n,s,r){const o=new Pe(0);let a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const S=y.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(y){let E=!1;const S=f(y);S===null?g(o,a):S&&S.isColor&&(g(S,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,E){const S=f(E);S&&(S.isCubeTexture||S.mapping===Bc)?(l===void 0&&(l=new tt(new Ys(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Vr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ws.copy(E.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(ws)),l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==at,(u!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new tt(new ms(2,2),new _i({name:"BackgroundMaterial",uniforms:Vr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,E){y.getRGB($a,Jm(i)),t.buffers.color.setClear($a.r,$a.g,$a.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:_,dispose:p}}function kM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(P,U,k,X,V){let G=!1;const B=h(P,X,k,U);r!==B&&(r=B,l(r.object)),G=f(P,X,k,V),G&&m(P,X,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(P,U,k,X),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,U,k,X){const V=X.wireframe===!0;let G=n[U.id];G===void 0&&(G={},n[U.id]=G);const B=P.isInstancedMesh===!0?P.id:0;let ee=G[B];ee===void 0&&(ee={},G[B]=ee);let Z=ee[k.id];Z===void 0&&(Z={},ee[k.id]=Z);let de=Z[V];return de===void 0&&(de=d(c()),Z[V]=de),de}function d(P){const U=[],k=[],X=[];for(let V=0;V<t;V++)U[V]=0,k[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:X,object:P,attributes:{},index:null}}function f(P,U,k,X){const V=r.attributes,G=U.attributes;let B=0;const ee=k.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const _e=V[Z];let fe=G[Z];if(fe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),_e===void 0||_e.attribute!==fe||fe&&_e.data!==fe.data)return!0;B++}return r.attributesNum!==B||r.index!==X}function m(P,U,k,X){const V={},G=U.attributes;let B=0;const ee=k.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let _e=G[Z];_e===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor));const fe={};fe.attribute=_e,_e&&_e.data&&(fe.data=_e.data),V[Z]=fe,B++}r.attributes=V,r.attributesNum=B,r.index=X}function _(){const P=r.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function g(P){p(P,0)}function p(P,U){const k=r.newAttributes,X=r.enabledAttributes,V=r.attributeDivisors;k[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),V[P]!==U&&(i.vertexAttribDivisor(P,U),V[P]=U)}function y(){const P=r.newAttributes,U=r.enabledAttributes;for(let k=0,X=U.length;k<X;k++)U[k]!==P[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function E(P,U,k,X,V,G,B){B===!0?i.vertexAttribIPointer(P,U,k,V,G):i.vertexAttribPointer(P,U,k,X,V,G)}function S(P,U,k,X){_();const V=X.attributes,G=k.getAttributes(),B=U.defaultAttributeValues;for(const ee in G){const Z=G[ee];if(Z.location>=0){let de=V[ee];if(de===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){const _e=de.normalized,fe=de.itemSize,He=e.get(de);if(He===void 0)continue;const vt=He.buffer,mt=He.type,K=He.bytesPerElement,ie=mt===i.INT||mt===i.UNSIGNED_INT||de.gpuType===zd;if(de.isInterleavedBufferAttribute){const oe=de.data,ke=oe.stride,De=de.offset;if(oe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Z.locationSize;Fe++)p(Z.location+Fe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<Z.locationSize;Fe++)g(Z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Fe=0;Fe<Z.locationSize;Fe++)E(Z.location+Fe,fe/Z.locationSize,mt,_e,ke*K,(De+fe/Z.locationSize*Fe)*K,ie)}else{if(de.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)p(Z.location+oe,de.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let oe=0;oe<Z.locationSize;oe++)g(Z.location+oe);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let oe=0;oe<Z.locationSize;oe++)E(Z.location+oe,fe/Z.locationSize,mt,_e,fe*K,fe/Z.locationSize*oe*K,ie)}}else if(B!==void 0){const _e=B[ee];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Z.location,_e);break;case 3:i.vertexAttrib3fv(Z.location,_e);break;case 4:i.vertexAttrib4fv(Z.location,_e);break;default:i.vertexAttrib1fv(Z.location,_e)}}}}y()}function T(){M();for(const P in n){const U=n[P];for(const k in U){const X=U[k];for(const V in X){const G=X[V];for(const B in G)u(G[B].object),delete G[B];delete X[V]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const k in U){const X=U[k];for(const V in X){const G=X[V];for(const B in G)u(G[B].object),delete G[B];delete X[V]}}delete n[P.id]}function R(P){for(const U in n){const k=n[U];for(const X in k){const V=k[X];if(V[P.id]===void 0)continue;const G=V[P.id];for(const B in G)u(G[B].object),delete G[B];delete V[P.id]}}}function x(P){for(const U in n){const k=n[U],X=P.isInstancedMesh===!0?P.id:0,V=k[X];if(V!==void 0){for(const G in V){const B=V[G];for(const ee in B)u(B[ee].object),delete B[ee];delete V[G]}delete k[X],Object.keys(k).length===0&&delete n[U]}}}function M(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function zM(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function VM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==En&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!x)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:w}}function HM(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ps,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const y=r?0:n,E=y*4;let S=p.clippingState||null;c.value=S,S=u(m,d,E,f);for(let T=0;T!==E;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=f;E!==_;++E,S+=4)o.copy(h[E]).applyMatrix4(y,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const us=4,Zf=[.125,.215,.35,.446,.526,.582],Ls=20,GM=256,mo=new Hc,Jf=new Pe;let Fl=null,Ol=0,Bl=0,kl=!1;const WM=new C;class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=WM}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:qi,format:En,colorSpace:rn,depthBuffer:!1},s=ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(r)),this._blurMaterial=jM(r,e,t),this._ggxMaterial=qM(r,e,t)}return s}_compileMaterial(e){const t=new tt(new It,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s,r){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Jf),h.toneMapping=ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Ys,new Ut({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Jf),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;pr(s,S*T,E>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ws||e.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-us?n-m+us:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,pr(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,mo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,pr(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,mo)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ls;g>Ls&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);const p=[];let y=0;for(let R=0;R<Ls;++R){const x=R/_,M=Math.exp(-x*x/2);p.push(M),R===0?y+=M:R<g&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const S=this._sizeLods[s],T=3*S*(s>E-us?s-E+us:0),w=4*(this._cubeSize-S);pr(t,T,w,3*S,2*S),c.setRenderTarget(t),c.render(h,mo)}}function XM(i){const e=[],t=[],n=[];let s=i;const r=i-us+1+Zf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-us?c=Zf[o-i+us-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),E=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,x=w>2?0:-1,M=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];y.set(M,_*m*w),E.set(d,g*m*w);const N=[w,w,w,w,w,w];S.set(N,p*m*w)}const T=new It;T.setAttribute("position",new zt(y,_)),T.setAttribute("uv",new zt(E,g)),T.setAttribute("faceIndex",new zt(S,p)),n.push(new tt(T,null)),s>us&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ep(i,e,t){const n=new li(i,e,t);return n.texture.mapping=Bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qM(i,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function jM(i,e,t){const n=new Float32Array(Ls),s=new C(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function tp(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function np(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}class ag extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $m(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ys(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Fi});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Rt),new kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function YM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ol||f===al)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new ag(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===ol||f===al,_=f===Ws||f===Or;if(m||_){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Qf(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Qf(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===ol?d.mapping=Ws:f===al&&(d.mapping=Or),d}function c(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function KM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Rc("WebGLRenderer: "+n+" extension not supported."),s}}}function $M(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let E=0,S=y.length;E<S;E+=3){const T=y[E+0],w=y[E+1],R=y[E+2];d.push(T,w,w,R,R,T)}}else{const y=m.array;_=m.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const T=E+0,w=E+1,R=E+2;d.push(T,w,w,R,R,T)}}const g=new(m.count>=65535?jm:qm)(d,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ZM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function JM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function QM(i,e,t){const n=new WeakMap,s=new gt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var f=N;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*h),x=new Wm(R,T,w,h);x.type=bn,x.needsUpdate=!0;const M=S*4;for(let P=0;P<h;P++){const U=p[P],k=y[P],X=E[P],V=T*w*4*P;for(let G=0;G<U.count;G++){const B=G*M;m===!0&&(s.fromBufferAttribute(U,G),R[V+B+0]=s.x,R[V+B+1]=s.y,R[V+B+2]=s.z,R[V+B+3]=0),_===!0&&(s.fromBufferAttribute(k,G),R[V+B+4]=s.x,R[V+B+5]=s.y,R[V+B+6]=s.z,R[V+B+7]=0),g===!0&&(s.fromBufferAttribute(X,G),R[V+B+8]=s.x,R[V+B+9]=s.y,R[V+B+10]=s.z,R[V+B+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new Ye(T,w)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function eS(i,e,t,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const tS={[Tm]:"LINEAR_TONE_MAPPING",[wm]:"REINHARD_TONE_MAPPING",[Am]:"CINEON_TONE_MAPPING",[Rm]:"ACES_FILMIC_TONE_MAPPING",[Pm]:"AGX_TONE_MAPPING",[Im]:"NEUTRAL_TONE_MAPPING",[Cm]:"CUSTOM_TONE_MAPPING"};function nS(i,e,t,n,s){const r=new li(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new li(e,t,{type:qi,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xt([0,2,0,0,2,0],2));const c=new xx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new tt(a,c),u=new Hc(-1,1,1,-1,0,1);let h=null,d=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(y,E)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const E=r.width,S=r.height;for(let T=0;T<g.length;T++){const w=g[T];w.setSize&&w.setSize(E,S)}},this.begin=function(y,E){if(f||y.toneMapping===ci&&g.length===0)return!1;if(_=E,E!==null){const S=E.width,T=E.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return p===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=ci,!0},this.hasRenderPass=function(){return p},this.end=function(y,E){y.toneMapping=m,f=!0;let S=r,T=o;for(let w=0;w<g.length;w++){const R=g[w];if(R.enabled!==!1&&(R.render(y,T,S,E),R.needsSwap!==!1)){const x=S;S=T,T=x}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,c.defines={},Qe.getTransfer(h)===at&&(c.defines.SRGB_TRANSFER="");const w=tS[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(_),y.render(l,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const cg=new kt,ld=new $o(1,1),lg=new Wm,ug=new G_,dg=new $m,ip=[],sp=[],rp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function eo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=sp[e];t===void 0&&(t=new Int32Array(e),sp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function aS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;ap.set(n),i.uniformMatrix2fv(this.addr,!1,ap),Ht(t,n)}}function cS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),Ht(t,n)}}function lS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;rp.set(n),i.uniformMatrix4fv(this.addr,!1,rp),Ht(t,n)}}function uS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function pS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function xS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ld.compareFunction=t.isReversedDepthBuffer()?$d:Kd,r=ld):r=cg,t.setTexture2D(e||r,s)}function vS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ug,s)}function yS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dg,s)}function MS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lg,s)}function SS(i){switch(i){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return oS;case 35674:return aS;case 35675:return cS;case 35676:return lS;case 5124:case 35670:return uS;case 35667:case 35671:return dS;case 35668:case 35672:return hS;case 35669:case 35673:return fS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return MS}}function bS(i,e){i.uniform1fv(this.addr,e)}function ES(i,e){const t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function TS(i,e){const t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function wS(i,e){const t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function AS(i,e){const t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function RS(i,e){const t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CS(i,e){const t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function PS(i,e){i.uniform1iv(this.addr,e)}function IS(i,e){i.uniform2iv(this.addr,e)}function LS(i,e){i.uniform3iv(this.addr,e)}function DS(i,e){i.uniform4iv(this.addr,e)}function NS(i,e){i.uniform1uiv(this.addr,e)}function US(i,e){i.uniform2uiv(this.addr,e)}function FS(i,e){i.uniform3uiv(this.addr,e)}function OS(i,e){i.uniform4uiv(this.addr,e)}function BS(i,e,t){const n=this.cache,s=e.length,r=Xc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ld:o=cg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function kS(i,e,t){const n=this.cache,s=e.length,r=Xc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ug,r[o])}function zS(i,e,t){const n=this.cache,s=e.length,r=Xc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dg,r[o])}function VS(i,e,t){const n=this.cache,s=e.length,r=Xc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lg,r[o])}function HS(i){switch(i){case 5126:return bS;case 35664:return ES;case 35665:return TS;case 35666:return wS;case 35674:return AS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return IS;case 35668:case 35672:return LS;case 35669:case 35673:return DS;case 5125:return NS;case 36294:return US;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return VS}}class GS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SS(t.type)}}class WS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HS(t.type)}}class XS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function cp(i,e){i.seq.push(e),i.map[e.id]=e}function qS(i,e,t){const n=i.name,s=n.length;for(zl.lastIndex=0;;){const r=zl.exec(n),o=zl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cp(t,l===void 0?new GS(a,i,e):new WS(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new XS(a),cp(t,h)),t=h}}}class gc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);qS(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jS=37297;let YS=0;function KS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const up=new ze;function $S(i){Qe._getMatrix(up,Qe.workingColorSpace,i);const e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case wc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+KS(i.getShaderSource(e),a)}else return r}function ZS(i,e){const t=$S(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JS={[Tm]:"Linear",[wm]:"Reinhard",[Am]:"Cineon",[Rm]:"ACESFilmic",[Pm]:"AgX",[Im]:"Neutral",[Cm]:"Custom"};function QS(i,e){const t=JS[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new C;function eb(){Qe.getLuminanceCoefficients(Za);const i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function nb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ib(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function To(i){return i!==""}function hp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(i){return i.replace(sb,ob)}const rb=new Map;function ob(i,e){let t=Ge[e];if(t===void 0){const n=rb.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ud(t)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace(ab,cb)}function cb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const lb={[uc]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function ub(i){return lb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const db={[Ws]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function hb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":db[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const fb={[Or]:"ENVMAP_MODE_REFRACTION"};function pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mb={[Em]:"ENVMAP_BLENDING_MULTIPLY",[i_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mb[i.combine]||"ENVMAP_BLENDING_NONE"}function _b(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xb(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ub(t),l=hb(t),u=pb(t),h=gb(t),d=_b(t),f=tb(t),m=nb(r),_=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(To).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(To).join(`
`),p.length>0&&(p+=`
`)):(g=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ci?QS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ZS("linearToOutputTexel",t.outputColorSpace),eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=ud(o),o=hp(o,t),o=fp(o,t),a=ud(a),a=hp(a,t),a=fp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+g+o,S=y+p+a,T=lp(s,s.VERTEX_SHADER,E),w=lp(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(w)||"",V=U.trim(),G=k.trim(),B=X.trim();let ee=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const de=dp(s,T,"vertex"),_e=dp(s,w,"fragment");Ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+de+`
`+_e)}else V!==""?Ae("WebGLProgram: Program Info Log:",V):(G===""||B==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ee,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(w),x=new gc(s,_),M=ib(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,jS)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let vb=0;class yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mb(e),t.set(e,n)),n}}class Mb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Sb(i,e,t,n,s,r){const o=new Qd,a=new yb,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,M,N,P,U){const k=P.fog,X=U.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||V,G),ee=B&&B.mapping===Bc?B.image.height:null,Z=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=de!==void 0?de.length:0;let fe=0;X.morphAttributes.position!==void 0&&(fe=1),X.morphAttributes.normal!==void 0&&(fe=2),X.morphAttributes.color!==void 0&&(fe=3);let He,vt,mt,K;if(Z){const ot=Qn[Z];He=ot.vertexShader,vt=ot.fragmentShader}else He=x.vertexShader,vt=x.fragmentShader,a.update(x),mt=a.getVertexShaderID(x),K=a.getFragmentShaderID(x);const ie=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ke=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,Fe=!!x.map,Gt=!!x.matcap,et=!!B,rt=!!x.aoMap,dt=!!x.lightMap,We=!!x.bumpMap,Tt=!!x.normalMap,I=!!x.displacementMap,Lt=!!x.emissiveMap,it=!!x.metalnessMap,ft=!!x.roughnessMap,Ee=x.anisotropy>0,A=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,Y=x.sheen>0,$=x.transmission>0,j=Ee&&!!x.anisotropyMap,ve=A&&!!x.clearcoatMap,se=A&&!!x.clearcoatNormalMap,Ce=A&&!!x.clearcoatRoughnessMap,Ue=F&&!!x.iridescenceMap,J=F&&!!x.iridescenceThicknessMap,te=Y&&!!x.sheenColorMap,ye=Y&&!!x.sheenRoughnessMap,Se=!!x.specularMap,he=!!x.specularColorMap,Xe=!!x.specularIntensityMap,D=$&&!!x.transmissionMap,re=$&&!!x.thicknessMap,ne=!!x.gradientMap,me=!!x.alphaMap,Q=x.alphaTest>0,q=!!x.alphaHash,Me=!!x.extensions;let Oe=ci;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const pt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:vt,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rn,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:Gt,envMap:et,envMapMode:et&&B.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:dt,bumpMap:We,normalMap:Tt,displacementMap:I,emissiveMap:Lt,normalMapObjectSpace:Tt&&x.normalMapType===u_,normalMapTangentSpace:Tt&&x.normalMapType===Vm,metalnessMap:it,roughnessMap:ft,anisotropy:Ee,anisotropyMap:j,clearcoat:A,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:F,iridescenceMap:Ue,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:te,sheenRoughnessMap:ye,specularMap:Se,specularColorMap:he,specularIntensityMap:Xe,transmission:$,transmissionMap:D,thicknessMap:re,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Er&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:q,combine:x.combine,mapUv:Fe&&m(x.map.channel),aoMapUv:rt&&m(x.aoMap.channel),lightMapUv:dt&&m(x.lightMap.channel),bumpMapUv:We&&m(x.bumpMap.channel),normalMapUv:Tt&&m(x.normalMap.channel),displacementMapUv:I&&m(x.displacementMap.channel),emissiveMapUv:Lt&&m(x.emissiveMap.channel),metalnessMapUv:it&&m(x.metalnessMap.channel),roughnessMapUv:ft&&m(x.roughnessMap.channel),anisotropyMapUv:j&&m(x.anisotropyMap.channel),clearcoatMapUv:ve&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(x.sheenRoughnessMap.channel),specularMapUv:Se&&m(x.specularMap.channel),specularColorMapUv:he&&m(x.specularColorMap.channel),specularIntensityMapUv:Xe&&m(x.specularIntensityMap.channel),transmissionMapUv:D&&m(x.transmissionMap.channel),thicknessMapUv:re&&m(x.thicknessMap.channel),alphaMapUv:me&&m(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Tt||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Fe||me),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function g(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)M.push(N),M.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(M,x),y(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const M=f[x.type];let N;if(M){const P=Qn[M];N=mx.clone(P.uniforms)}else N=x.uniforms;return N}function S(x,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new xb(i,M,x,s),l.push(N),u.set(M,N)),N}function T(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:R}}function bb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Eb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _p(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,g,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=g,y.group=p),e++,y}function c(d,f,m,_,g,p){const y=a(d,f,m,_,g,p);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):t.push(y)}function l(d,f,m,_,g,p){const y=a(d,f,m,_,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||Eb),n.length>1&&n.sort(f||gp),s.length>1&&s.sort(f||gp)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Tb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new _p,i.set(n,[o])):s>=r.length?(o=new _p,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Pe};break;case"SpotLight":t={position:new C,direction:new C,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Ab(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rb=0;function Cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pb(i){const e=new wb,t=Ab(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Ve,o=new Ve;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,E=0,S=0,T=0,w=0,R=0;l.sort(Cb);for(let M=0,N=l.length;M<N;M++){const P=l[M],U=P.color,k=P.intensity,X=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===kr?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*k,h+=U.g*k,d+=U.b*k;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],k);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,ee=t.get(P);ee.shadowIntensity=B.intensity,ee.shadowBias=B.bias,ee.shadowNormalBias=B.normalBias,ee.shadowRadius=B.radius,ee.shadowMapSize=B.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=B.intensity,ee.shadowBias=B.bias,ee.shadowNormalBias=B.normalBias,ee.shadowRadius=B.radius,ee.shadowMapSize=B.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=V,S++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const B=P.shadow,ee=t.get(P);ee.shadowIntensity=B.intensity,ee.shadowBias=B.bias,ee.shadowNormalBias=B.normalBias,ee.shadowRadius=B.radius,ee.shadowMapSize=B.mapSize,ee.shadowCameraNear=B.camera.near,ee.shadowCameraFar=B.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(k),G.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==T||x.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=T,x.numLightProbes=R,n.version=Rb++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const E=l[p];if(E.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function xp(i){const e=new Pb(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ib(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xp(i),e.set(s,[a])):r>=o.length?(a=new xp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`,Nb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Ub=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],vp=new Ve,go=new C,Vl=new C;function Fb(i,e,t){let n=new rh;const s=new Ye,r=new Ye,o=new gt,a=new vx,c=new yx,l={},u=t.maxTextureSize,h={[Wi]:on,[on]:Wi,[dn]:dn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new It;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let p=this.type;this.render=function(w,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===B0&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uc);const M=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Fi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=w.length;X<V;X++){const G=w[X],B=G.shadow;if(B===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ee=B.getFrameExtents();s.multiply(ee),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,B.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===bo){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new li(s.x,s.y,{format:kr,type:qi,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new $o(s.x,s.y,bn),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=ji,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else G.isPointLight?(B.map=new ag(s.x),B.map.depthTexture=new fx(s.x,gi)):(B.map=new li(s.x,s.y),B.map.depthTexture=new $o(s.x,s.y,gi)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=ji,this.type===uc?(B.map.depthTexture.compareFunction=Z?$d:Kd,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}const de=B.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<de;_e++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(B.map),i.clear());const fe=B.getViewport(_e);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),U.viewport(o)}if(G.isPointLight){const fe=B.camera,He=B.matrix,vt=G.distance||fe.far;vt!==fe.far&&(fe.far=vt,fe.updateProjectionMatrix()),go.setFromMatrixPosition(G.matrixWorld),fe.position.copy(go),Vl.copy(fe.position),Vl.add(Nb[_e]),fe.up.copy(Ub[_e]),fe.lookAt(Vl),fe.updateMatrixWorld(),He.makeTranslation(-go.x,-go.y,-go.z),vp.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vp,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(G);n=B.getFrustum(),S(R,x,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===bo&&y(B,x),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,N,P)};function y(w,R){const x=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new li(s.x,s.y,{format:kr,type:qi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,f,_,null)}function E(w,R,x,M){let N=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)N=P;else if(N=x.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=N.uuid,k=R.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let V=X[k];V===void 0&&(V=N.clone(),X[k]=V,R.addEventListener("dispose",T)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,M===bo?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=i.properties.get(N);U.light=x}return N}function S(w,R,x,M,N){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===bo)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const k=e.update(w),X=w.material;if(Array.isArray(X)){const V=k.groups;for(let G=0,B=V.length;G<B;G++){const ee=V[G],Z=X[ee.materialIndex];if(Z&&Z.visible){const de=E(w,Z,M,N);w.onBeforeShadow(i,w,R,x,k,de,ee),i.renderBufferDirect(x,null,k,de,w,ee),w.onAfterShadow(i,w,R,x,k,de,ee)}}}else if(X.visible){const V=E(w,X,M,N);w.onBeforeShadow(i,w,R,x,k,V,null),i.renderBufferDirect(x,null,k,V,w,null),w.onAfterShadow(i,w,R,x,k,V,null)}}const U=w.children;for(let k=0,X=U.length;k<X;k++)S(U[k],R,x,M,N)}function T(w){w.target.removeEventListener("dispose",T);for(const x in l){const M=l[x],N=w.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function Ob(i,e){function t(){let D=!1;const re=new gt;let ne=null;const me=new gt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!D&&(i.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){D=Q},setClear:function(Q,q,Me,Oe,pt){pt===!0&&(Q*=Oe,q*=Oe,Me*=Oe),re.set(Q,q,Me,Oe),me.equals(re)===!1&&(i.clearColor(Q,q,Me,Oe),me.copy(re))},reset:function(){D=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,ne=null,me=null,Q=null;return{setReversed:function(q){if(re!==q){const Me=e.get("EXT_clip_control");q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=q;const Oe=Q;Q=null,this.setClear(Oe)}},getReversed:function(){return re},setTest:function(q){q?ie(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(q){ne!==q&&!D&&(i.depthMask(q),ne=q)},setFunc:function(q){if(re&&(q=M_[q]),me!==q){switch(q){case xu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case yu:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case Mu:i.depthFunc(i.EQUAL);break;case Su:i.depthFunc(i.GEQUAL);break;case bu:i.depthFunc(i.GREATER);break;case Eu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=q}},setLocked:function(q){D=q},setClear:function(q){Q!==q&&(Q=q,re&&(q=1-q),i.clearDepth(q))},reset:function(){D=!1,ne=null,me=null,Q=null,re=!1}}}function s(){let D=!1,re=null,ne=null,me=null,Q=null,q=null,Me=null,Oe=null,pt=null;return{setTest:function(ot){D||(ot?ie(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(ot){re!==ot&&!D&&(i.stencilMask(ot),re=ot)},setFunc:function(ot,bi,Ei){(ne!==ot||me!==bi||Q!==Ei)&&(i.stencilFunc(ot,bi,Ei),ne=ot,me=bi,Q=Ei)},setOp:function(ot,bi,Ei){(q!==ot||Me!==bi||Oe!==Ei)&&(i.stencilOp(ot,bi,Ei),q=ot,Me=bi,Oe=Ei)},setLocked:function(ot){D=ot},setClear:function(ot){pt!==ot&&(i.clearStencil(ot),pt=ot)},reset:function(){D=!1,re=null,ne=null,me=null,Q=null,q=null,Me=null,Oe=null,pt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,E=null,S=null,T=null,w=null,R=new Pe(0,0,0),x=0,M=!1,N=null,P=null,U=null,k=null,X=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ee)[1]),G=B>=1):ee.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),G=B>=2);let Z=null,de={};const _e=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),He=new gt().fromArray(_e),vt=new gt().fromArray(fe);function mt(D,re,ne,me){const Q=new Uint8Array(4),q=i.createTexture();i.bindTexture(D,q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ne;Me++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(re+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return q}const K={};K[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Fr),We(!1),Tt(rf),ie(i.CULL_FACE),rt(Fi);function ie(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function oe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ke(D,re){return h[D]!==re?(i.bindFramebuffer(D,re),h[D]=re,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function De(D,re){let ne=f,me=!1;if(D){ne=d.get(re),ne===void 0&&(ne=[],d.set(re,ne));const Q=D.textures;if(ne.length!==Q.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Me=Q.length;q<Me;q++)ne[q]=i.COLOR_ATTACHMENT0+q;ne.length=Q.length,me=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,me=!0);me&&i.drawBuffers(ne)}function Fe(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Gt={[Is]:i.FUNC_ADD,[z0]:i.FUNC_SUBTRACT,[V0]:i.FUNC_REVERSE_SUBTRACT};Gt[H0]=i.MIN,Gt[G0]=i.MAX;const et={[W0]:i.ZERO,[X0]:i.ONE,[q0]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[J0]:i.SRC_ALPHA_SATURATE,[$0]:i.DST_COLOR,[Y0]:i.DST_ALPHA,[j0]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[Z0]:i.ONE_MINUS_DST_COLOR,[K0]:i.ONE_MINUS_DST_ALPHA,[Q0]:i.CONSTANT_COLOR,[e_]:i.ONE_MINUS_CONSTANT_COLOR,[t_]:i.CONSTANT_ALPHA,[n_]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(D,re,ne,me,Q,q,Me,Oe,pt,ot){if(D===Fi){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),D!==k0){if(D!==g||ot!==M){if((p!==Is||S!==Is)&&(i.blendEquation(i.FUNC_ADD),p=Is,S=Is),ot)switch(D){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",D);break}else switch(D){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case of:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",D);break}y=null,E=null,T=null,w=null,R.set(0,0,0),x=0,g=D,M=ot}return}Q=Q||re,q=q||ne,Me=Me||me,(re!==p||Q!==S)&&(i.blendEquationSeparate(Gt[re],Gt[Q]),p=re,S=Q),(ne!==y||me!==E||q!==T||Me!==w)&&(i.blendFuncSeparate(et[ne],et[me],et[q],et[Me]),y=ne,E=me,T=q,w=Me),(Oe.equals(R)===!1||pt!==x)&&(i.blendColor(Oe.r,Oe.g,Oe.b,pt),R.copy(Oe),x=pt),g=D,M=!1}function dt(D,re){D.side===dn?oe(i.CULL_FACE):ie(i.CULL_FACE);let ne=D.side===on;re&&(ne=!ne),We(ne),D.blending===Er&&D.transparent===!1?rt(Fi):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function Tt(D){D!==F0?(ie(i.CULL_FACE),D!==P&&(D===rf?i.cullFace(i.BACK):D===O0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),P=D}function I(D){D!==U&&(G&&i.lineWidth(D),U=D)}function Lt(D,re,ne){D?(ie(i.POLYGON_OFFSET_FILL),(k!==re||X!==ne)&&(k=re,X=ne,o.getReversed()&&(re=-re),i.polygonOffset(re,ne))):oe(i.POLYGON_OFFSET_FILL)}function it(D){D?ie(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function ft(D){D===void 0&&(D=i.TEXTURE0+V-1),Z!==D&&(i.activeTexture(D),Z=D)}function Ee(D,re,ne){ne===void 0&&(Z===null?ne=i.TEXTURE0+V-1:ne=Z);let me=de[ne];me===void 0&&(me={type:void 0,texture:void 0},de[ne]=me),(me.type!==D||me.texture!==re)&&(Z!==ne&&(i.activeTexture(ne),Z=ne),i.bindTexture(D,re||K[D]),me.type=D,me.texture=re)}function A(){const D=de[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function $(){try{i.texSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function se(){try{i.texStorage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Ce(){try{i.texStorage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Ue(){try{i.texImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function te(D){He.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function ye(D){vt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),vt.copy(D))}function Se(D,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let me=ne.get(D);me===void 0&&(me=i.getUniformBlockIndex(re,D.name),ne.set(D,me))}function he(D,re){const me=l.get(re).get(D);c.get(re)!==me&&(i.uniformBlockBinding(re,me,D.__bindingPointIndex),c.set(re,me))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,de={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,E=null,S=null,T=null,w=null,R=new Pe(0,0,0),x=0,M=!1,N=null,P=null,U=null,k=null,X=null,He.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:oe,bindFramebuffer:ke,drawBuffers:De,useProgram:Fe,setBlending:rt,setMaterial:dt,setFlipSided:We,setCullFace:Tt,setLineWidth:I,setPolygonOffset:Lt,setScissorTest:it,activeTexture:ft,bindTexture:Ee,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Ue,texImage3D:J,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:se,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:ve,scissor:te,viewport:ye,reset:Xe}}function Bb(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return f?new OffscreenCanvas(A,v):Ko("canvas")}function _(A,v,F){let Y=1;const $=Ee(A);if(($.width>F||$.height>F)&&(Y=F/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*$.width),ve=Math.floor(Y*$.height);h===void 0&&(h=m(j,ve));const se=v?m(j,ve):h;return se.width=j,se.height=ve,se.getContext("2d").drawImage(A,0,0,j,ve),Ae("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+ve+")."),se}else return"data"in A&&Ae("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,F,Y,$=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=v;if(v===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),v===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const ve=$?wc:Qe.getTransfer(Y);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=ve===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(A,v){let F;return A?v===null||v===gi||v===Xo?F=i.DEPTH24_STENCIL8:v===bn?F=i.DEPTH32F_STENCIL8:v===Wo&&(F=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===Xo?F=i.DEPTH_COMPONENT24:v===bn?F=i.DEPTH_COMPONENT32F:v===Wo&&(F=i.DEPTH_COMPONENT16),F}function T(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Rt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),x(v),v.isVideoTexture&&u.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),N(v)}function x(A){const v=n.get(A);if(v.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const $=Y[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function M(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const F=A.source,Y=d.get(F);delete Y[v.__cacheKey],o.memory.textures--}function N(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let $=0;$<v.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,$=F.length;Y<$;Y++){const j=n.get(F[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(A)}let P=0;function U(){P=0}function k(){const A=P;return A>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function X(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function V(A,v){const F=n.get(A);if(A.isVideoTexture&&it(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,A,v);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function G(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){K(F,A,v);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function B(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){K(F,A,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function ee(A,v){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){ie(F,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const Z={[Br]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},de={[Bt]:i.NEAREST,[Dm]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[dc]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},_e={[d_]:i.NEVER,[g_]:i.ALWAYS,[h_]:i.LESS,[Kd]:i.LEQUAL,[f_]:i.EQUAL,[$d]:i.GEQUAL,[p_]:i.GREATER,[m_]:i.NOTEQUAL};function fe(A,v){if(v.type===bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rt||v.magFilter===dc||v.magFilter===Eo||v.magFilter===Di||v.minFilter===Rt||v.minFilter===dc||v.minFilter===Eo||v.minFilter===Di)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,de[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==Eo&&v.minFilter!==Di||v.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function He(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const Y=v.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const j=X(v);if(j!==A.__cacheKey){$[j]===void 0&&($[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[j].usedTimes++;const ve=$[A.__cacheKey];ve!==void 0&&($[A.__cacheKey].usedTimes--,ve.usedTimes===0&&M(v)),A.__cacheKey=j,A.__webglTexture=$[j].texture}return F}function vt(A,v,F){return Math.floor(Math.floor(A/F)/v)}function mt(A,v,F,Y){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,Y,v.data);else{j.sort((J,te)=>J.start-te.start);let ve=0;for(let J=1;J<j.length;J++){const te=j[ve],ye=j[J],Se=te.start+te.count,he=vt(ye.start,v.width,4),Xe=vt(te.start,v.width,4);ye.start<=Se+1&&he===Xe&&vt(ye.start+ye.count-1,v.width,4)===he?te.count=Math.max(te.count,ye.start+ye.count-te.start):(++ve,j[ve]=ye)}j.length=ve+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let J=0,te=j.length;J<te;J++){const ye=j[J],Se=Math.floor(ye.start/4),he=Math.ceil(ye.count/4),Xe=Se%v.width,D=Math.floor(Se/v.width),re=he,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Xe,D,re,ne,F,Y,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function K(A,v,F){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const $=He(A,v),j=v.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+F);const ve=n.get(j);if(j.version!==ve.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const se=Qe.getPrimaries(Qe.workingColorSpace),Ce=v.colorSpace===os?null:Qe.getPrimaries(v.colorSpace),Ue=v.colorSpace===os||se===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let J=_(v.image,!1,s.maxTextureSize);J=ft(v,J);const te=r.convert(v.format,v.colorSpace),ye=r.convert(v.type);let Se=E(v.internalFormat,te,ye,v.colorSpace,v.isVideoTexture);fe(Y,v);let he;const Xe=v.mipmaps,D=v.isVideoTexture!==!0,re=ve.__version===void 0||$===!0,ne=j.dataReady,me=T(v,J);if(v.isDepthTexture)Se=S(v.format===Ns,v.type),re&&(D?t.texStorage2D(i.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Se,J.width,J.height,0,te,ye,null));else if(v.isDataTexture)if(Xe.length>0){D&&re&&t.texStorage2D(i.TEXTURE_2D,me,Se,Xe[0].width,Xe[0].height);for(let Q=0,q=Xe.length;Q<q;Q++)he=Xe[Q],D?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,te,ye,he.data):t.texImage2D(i.TEXTURE_2D,Q,Se,he.width,he.height,0,te,ye,he.data);v.generateMipmaps=!1}else D?(re&&t.texStorage2D(i.TEXTURE_2D,me,Se,J.width,J.height),ne&&mt(v,J,te,ye)):t.texImage2D(i.TEXTURE_2D,0,Se,J.width,J.height,0,te,ye,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,Xe[0].width,Xe[0].height,J.depth);for(let Q=0,q=Xe.length;Q<q;Q++)if(he=Xe[Q],v.format!==En)if(te!==null)if(D){if(ne)if(v.layerUpdates.size>0){const Me=$f(he.width,he.height,v.format,v.type);for(const Oe of v.layerUpdates){const pt=he.data.subarray(Oe*Me/he.data.BYTES_PER_ELEMENT,(Oe+1)*Me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Oe,he.width,he.height,1,te,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,J.depth,te,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,J.depth,0,he.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,J.depth,te,ye,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,J.depth,0,te,ye,he.data)}else{D&&re&&t.texStorage2D(i.TEXTURE_2D,me,Se,Xe[0].width,Xe[0].height);for(let Q=0,q=Xe.length;Q<q;Q++)he=Xe[Q],v.format!==En?te!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Se,he.width,he.height,0,he.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,te,ye,he.data):t.texImage2D(i.TEXTURE_2D,Q,Se,he.width,he.height,0,te,ye,he.data)}else if(v.isDataArrayTexture)if(D){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,J.width,J.height,J.depth),ne)if(v.layerUpdates.size>0){const Q=$f(J.width,J.height,v.format,v.type);for(const q of v.layerUpdates){const Me=J.data.subarray(q*Q/J.data.BYTES_PER_ELEMENT,(q+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,te,ye,Me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,ye,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,te,ye,J.data);else if(v.isData3DTexture)D?(re&&t.texStorage3D(i.TEXTURE_3D,me,Se,J.width,J.height,J.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,ye,J.data)):t.texImage3D(i.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,te,ye,J.data);else if(v.isFramebufferTexture){if(re)if(D)t.texStorage2D(i.TEXTURE_2D,me,Se,J.width,J.height);else{let Q=J.width,q=J.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,Se,Q,q,0,te,ye,null),Q>>=1,q>>=1}}else if(Xe.length>0){if(D&&re){const Q=Ee(Xe[0]);t.texStorage2D(i.TEXTURE_2D,me,Se,Q.width,Q.height)}for(let Q=0,q=Xe.length;Q<q;Q++)he=Xe[Q],D?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,te,ye,he):t.texImage2D(i.TEXTURE_2D,Q,Se,te,ye,he);v.generateMipmaps=!1}else if(D){if(re){const Q=Ee(J);t.texStorage2D(i.TEXTURE_2D,me,Se,Q.width,Q.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,ye,J)}else t.texImage2D(i.TEXTURE_2D,0,Se,te,ye,J);g(v)&&p(Y),ve.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ie(A,v,F){if(v.image.length!==6)return;const Y=He(A,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const j=n.get($);if($.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const ve=Qe.getPrimaries(Qe.workingColorSpace),se=v.colorSpace===os?null:Qe.getPrimaries(v.colorSpace),Ce=v.colorSpace===os||ve===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!Ue&&!J?te[q]=_(v.image[q],!0,s.maxCubemapSize):te[q]=J?v.image[q].image:v.image[q],te[q]=ft(v,te[q]);const ye=te[0],Se=r.convert(v.format,v.colorSpace),he=r.convert(v.type),Xe=E(v.internalFormat,Se,he,v.colorSpace),D=v.isVideoTexture!==!0,re=j.__version===void 0||Y===!0,ne=$.dataReady;let me=T(v,ye);fe(i.TEXTURE_CUBE_MAP,v);let Q;if(Ue){D&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,ye.width,ye.height);for(let q=0;q<6;q++){Q=te[q].mipmaps;for(let Me=0;Me<Q.length;Me++){const Oe=Q[Me];v.format!==En?Se!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Oe.width,Oe.height,Se,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Xe,Oe.width,Oe.height,0,Oe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Oe.width,Oe.height,Se,he,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Xe,Oe.width,Oe.height,0,Se,he,Oe.data)}}}else{if(Q=v.mipmaps,D&&re){Q.length>0&&me++;const q=Ee(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,q.width,q.height)}for(let q=0;q<6;q++)if(J){D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,Se,he,te[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,te[q].width,te[q].height,0,Se,he,te[q].data);for(let Me=0;Me<Q.length;Me++){const pt=Q[Me].image[q].image;D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,pt.width,pt.height,Se,he,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Xe,pt.width,pt.height,0,Se,he,pt.data)}}else{D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Se,he,te[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,Se,he,te[q]);for(let Me=0;Me<Q.length;Me++){const Oe=Q[Me];D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,Se,he,Oe.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Xe,Se,he,Oe.image[q])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function oe(A,v,F,Y,$,j){const ve=r.convert(F.format,F.colorSpace),se=r.convert(F.type),Ce=E(F.internalFormat,ve,se,F.colorSpace),Ue=n.get(v),J=n.get(F);if(J.__renderTarget=v,!Ue.__hasExternalTextures){const te=Math.max(1,v.width>>j),ye=Math.max(1,v.height>>j);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,j,Ce,te,ye,v.depth,0,ve,se,null):t.texImage2D($,j,Ce,te,ye,0,ve,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,J.__webglTexture,0,I(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,J.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(A,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,j=S(v.stencilBuffer,$),ve=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(v),j,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,A)}else{const Y=v.textures;for(let $=0;$<Y.length;$++){const j=Y[$],ve=r.convert(j.format,j.colorSpace),se=r.convert(j.type),Ce=E(j.internalFormat,ve,se,j.colorSpace);Lt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(v),Ce,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(v),Ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(A,v,F){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v.depthTexture);const Ue=r.convert(v.depthTexture.format),J=r.convert(v.depthTexture.type);let te;v.depthTexture.format===ji?te=i.DEPTH_COMPONENT24:v.depthTexture.format===Ns&&(te=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,te,v.width,v.height,0,Ue,J,null)}}else V(v.depthTexture,0);const j=$.__webglTexture,ve=I(v),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Ce=v.depthTexture.format===Ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ji)Lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,se,j,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,se,j,0);else if(v.depthTexture.format===Ns)Lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,se,j,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,se,j,0);else throw new Error("Unknown depthTexture format")}function Fe(A){const v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)De(v.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?De(v.__webglFramebuffer[0],A,0):De(v.__webglFramebuffer,A,0)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[Y],A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,v,F){const Y=n.get(A);v!==void 0&&oe(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Fe(A)}function et(A){const v=A.texture,F=n.get(A),Y=n.get(v);A.addEventListener("dispose",R);const $=A.textures,j=A.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)F.__webglFramebuffer[se][Ce]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let se=0,Ce=$.length;se<Ce;se++){const Ue=n.get($[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Lt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Ce=$[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const Ue=r.convert(Ce.format,Ce.colorSpace),J=r.convert(Ce.type),te=E(Ce.internalFormat,Ue,J,Ce.colorSpace,A.isXRRenderTarget===!0),ye=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)oe(F.__webglFramebuffer[se][Ce],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce);else oe(F.__webglFramebuffer[se],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Ce=$.length;se<Ce;se++){const Ue=$[se],J=n.get(Ue);let te=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),fe(te,Ue),oe(F.__webglFramebuffer,A,Ue,i.COLOR_ATTACHMENT0+se,te,0),g(Ue)&&p(te)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),fe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)oe(F.__webglFramebuffer[Ce],A,v,i.COLOR_ATTACHMENT0,se,Ce);else oe(F.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,se,0);g(v)&&p(se),t.unbindTexture()}A.depthBuffer&&Fe(A)}function rt(A){const v=A.textures;for(let F=0,Y=v.length;F<Y;F++){const $=v[F];if(g($)){const j=y(A),ve=n.get($).__webglTexture;t.bindTexture(j,ve),p(j),t.unbindTexture()}}}const dt=[],We=[];function Tt(A){if(A.samples>0){if(Lt(A)===!1){const v=A.textures,F=A.width,Y=A.height;let $=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(A),se=v.length>1;if(se)for(let Ue=0;Ue<v.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ue=0;Ue<v.length;Ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const J=n.get(v[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,$,i.NEAREST),c===!0&&(dt.length=0,We.length=0,dt.push(i.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(j),We.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ue=0;Ue<v.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const J=n.get(v[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function I(A){return Math.min(s.maxSamples,A.samples)}function Lt(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ft(A,v){const F=A.colorSpace,Y=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==rn&&F!==os&&(Qe.getTransfer(F)===at?(Y!==En||$!==hn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",F)),v}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=Gt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kb(i,e){function t(n,s=os){let r;const o=Qe.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Om)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nm)return i.BYTE;if(n===Um)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===zd)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Bm)return i.ALPHA;if(n===km)return i.RGB;if(n===En)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Gd)return i.RED;if(n===Wd)return i.RED_INTEGER;if(n===kr)return i.RG;if(n===Xd)return i.RG_INTEGER;if(n===qd)return i.RGBA_INTEGER;if(n===hc||n===fc||n===pc||n===mc)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tu||n===wu||n===Au||n===Ru)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cu||n===Pu)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lu)return r.COMPRESSED_R11_EAC;if(n===Du)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nu)return r.COMPRESSED_RG11_EAC;if(n===Uu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fu||n===Ou||n===Bu||n===ku||n===zu||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===qu||n===ju||n===Yu||n===Ku)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ou)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yu)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ku)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Zu||n===Ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$u)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===ed||n===td||n===nd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ed)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===td)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vb=`
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

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:zb,fragmentShader:Vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gb extends js{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Hb,p={},y=t.getContextAttributes();let E=null,S=null;const T=[],w=[],R=new Ye;let x=null;const M=new qt;M.viewport=new gt;const N=new qt;N.viewport=new gt;const P=[M,N],U=new zx;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=T[K];return ie===void 0&&(ie=new pl,T[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=T[K];return ie===void 0&&(ie=new pl,T[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=T[K];return ie===void 0&&(ie=new pl,T[K]=ie),ie.getHandSpace()};function V(K){const ie=w.indexOf(K.inputSource);if(ie===-1)return;const oe=T[ie];oe!==void 0&&(oe.update(K.inputSource,K.frame,l||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",B);for(let K=0;K<T.length;K++){const ie=w[K];ie!==null&&(w[K]=null,T[K].disconnect(ie))}k=null,X=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(E),f=null,d=null,h=null,s=null,S=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ke=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Ns:ji,ke=y.stencil?Xo:gi);const Fe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new li(d.textureWidth,d.textureHeight,{format:En,type:hn,depthTexture:new $o(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new li(f.framebufferWidth,f.framebufferHeight,{format:En,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(K){for(let ie=0;ie<K.removed.length;ie++){const oe=K.removed[ie],ke=w.indexOf(oe);ke>=0&&(w[ke]=null,T[ke].disconnect(oe))}for(let ie=0;ie<K.added.length;ie++){const oe=K.added[ie];let ke=w.indexOf(oe);if(ke===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=w.length){w.push(oe),ke=Fe;break}else if(w[Fe]===null){w[Fe]=oe,ke=Fe;break}if(ke===-1)break}const De=T[ke];De&&De.connect(oe)}}const ee=new C,Z=new C;function de(K,ie,oe){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const ke=ee.distanceTo(Z),De=ie.projectionMatrix.elements,Fe=oe.projectionMatrix.elements,Gt=De[14]/(De[10]-1),et=De[14]/(De[10]+1),rt=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],We=(De[8]-1)/De[0],Tt=(Fe[8]+1)/Fe[0],I=Gt*We,Lt=Gt*Tt,it=ke/(-We+Tt),ft=it*-We;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(it),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Gt+it,A=et+it,v=I-ft,F=Lt+(ke-ft),Y=rt*et/A*Ee,$=dt*et/A*Ee;K.projectionMatrix.makePerspective(v,F,Y,$,Ee,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function _e(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,oe=K.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),U.near=N.near=M.near=ie,U.far=N.far=M.far=oe,(k!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,X=U.far),U.layers.mask=K.layers.mask|6,M.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const ke=K.parent,De=U.cameras;_e(U,ke);for(let Fe=0;Fe<De.length;Fe++)_e(De[Fe],ke);De.length===2?de(U,M,N):U.projectionMatrix.copy(M.projectionMatrix),fe(K,U,ke)};function fe(K,ie,oe){oe===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let He=null;function vt(K,ie){if(u=ie.getViewerPose(l||o),m=ie,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ke=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let et=0;et<oe.length;et++){const rt=oe[et];let dt=null;if(f!==null)dt=f.getViewport(rt);else{const Tt=h.getViewSubImage(d,rt);dt=Tt.viewport,et===0&&(e.setRenderTargetTextures(S,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(S))}let We=P[et];We===void 0&&(We=new qt,We.layers.enable(et),We.viewport=new gt,P[et]=We),We.matrix.fromArray(rt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(rt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(dt.x,dt.y,dt.width,dt.height),et===0&&(U.matrix.copy(We.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(We)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const et=h.getDepthInformation(oe[0]);et&&et.isValid&&et.texture&&g.init(et,s.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let et=0;et<oe.length;et++){const rt=oe[et].camera;if(rt){let dt=p[rt];dt||(dt=new Zm,p[rt]=dt);const We=h.getCameraImage(rt);dt.sourceTexture=We}}}}for(let oe=0;oe<T.length;oe++){const ke=w[oe],De=T[oe];ke!==null&&De!==void 0&&De.update(ke,ie,l||o)}He&&He(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const mt=new og;mt.setAnimationLoop(vt),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const As=new Wn,Wb=new Ve;function Xb(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jm(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,E,S){p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,S=y.envMapRotation;E&&(g.envMap.value=E,As.copy(S),As.x*=-1,As.y*=-1,As.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(As)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qb(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const S=E.program;n.uniformBlockBinding(y,S)}function l(y,E){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",g));const T=E.program;n.updateUBOMapping(y,T);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const E=h();y.__bindingPointIndex=E;const S=i.createBuffer(),T=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],S=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=S.length;w<R;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,N=x.length;M<N;M++){const P=x[M];if(f(P,w,M,T)===!0){const U=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let V=0;V<k.length;V++){const G=k[V],B=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,S,T){const w=y.value,R=E+"_"+S;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const x=T[R];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[R]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function m(y){const E=y.uniforms;let S=0;const T=16;for(let R=0,x=E.length;R<x;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let N=0,P=M.length;N<P;N++){const U=M[N],k=Array.isArray(U.value)?U.value:[U.value];for(let X=0,V=k.length;X<V;X++){const G=k[X],B=_(G),ee=S%T,Z=ee%B.boundary,de=ee+Z;S+=Z,de!==0&&T-de<B.storage&&(S+=T-de),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=B.storage}}}const w=S%T;return w>0&&(S+=T-w),y.__size=S,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",y),E}function g(y){const E=y.target;E.removeEventListener("dispose",g);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const jb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Yb(){return Kn===null&&(Kn=new ih(jb,16,16,kr,qi),Kn.name="DFG_LUT",Kn.minFilter=Rt,Kn.magFilter=Rt,Kn.wrapS=si,Kn.wrapT=si,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class ph{constructor(e={}){const{canvas:t=v_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,g=new Set([qd,Xd,Wd]),p=new Set([hn,gi,Wo,Xo,Vd,Hd]),y=new Uint32Array(4),E=new Int32Array(4);let S=null,T=null;const w=[],R=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=Kt;let P=0,U=0,k=null,X=-1,V=null;const G=new gt,B=new gt;let ee=null;const Z=new Pe(0);let de=0,_e=t.width,fe=t.height,He=1,vt=null,mt=null;const K=new gt(0,0,_e,fe),ie=new gt(0,0,_e,fe);let oe=!1;const ke=new rh;let De=!1,Fe=!1;const Gt=new Ve,et=new C,rt=new gt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Tt(){return k===null?He:1}let I=n;function Lt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",pt,!1),I===null){const O="webgl2";if(I=Lt(O,b),I===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ne("WebGLRenderer: "+b.message),b}let it,ft,Ee,A,v,F,Y,$,j,ve,se,Ce,Ue,J,te,ye,Se,he,Xe,D,re,ne,me;function Q(){it=new KM(I),it.init(),re=new kb(I,it),ft=new VM(I,it,e,re),Ee=new Ob(I,it),ft.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),A=new JM(I),v=new bb,F=new Bb(I,it,Ee,v,ft,re,A),Y=new YM(M),$=new iv(I),ne=new kM(I,$),j=new $M(I,$,A,ne),ve=new eS(I,j,$,ne,A),he=new QM(I,ft,F),te=new HM(v),se=new Sb(M,Y,it,ft,ne,te),Ce=new Xb(M,v),Ue=new Tb,J=new Ib(it),Se=new BM(M,Y,Ee,ve,m,c),ye=new Fb(M,ve,ft),me=new qb(I,A,ft,Ee),Xe=new zM(I,it,A),D=new ZM(I,it,A),A.programs=se.programs,M.capabilities=ft,M.extensions=it,M.properties=v,M.renderLists=Ue,M.shadowMap=ye,M.state=Ee,M.info=A}Q(),_!==hn&&(x=new nS(_,t.width,t.height,s,r));const q=new Gb(M,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(b){b!==void 0&&(He=b,this.setSize(_e,fe,!1))},this.getSize=function(b){return b.set(_e,fe)},this.setSize=function(b,O,W=!0){if(q.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=b,fe=O,t.width=Math.floor(b*He),t.height=Math.floor(O*He),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(_e*He,fe*He).floor()},this.setDrawingBufferSize=function(b,O,W){_e=b,fe=O,He=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,O,W,H){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,W,H),Ee.viewport(G.copy(K).multiplyScalar(He).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,O,W,H){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,O,W,H),Ee.scissor(B.copy(ie).multiplyScalar(He).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){Ee.setScissorTest(oe=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,W=!0){let H=0;if(b){let z=!1;if(k!==null){const le=k.texture.format;z=g.has(le)}if(z){const le=k.texture.type,pe=p.has(le),ue=Se.getClearColor(),be=Se.getClearAlpha(),we=ue.r,Be=ue.g,qe=ue.b;pe?(y[0]=we,y[1]=Be,y[2]=qe,y[3]=be,I.clearBufferuiv(I.COLOR,0,y)):(E[0]=we,E[1]=Be,E[2]=qe,E[3]=be,I.clearBufferiv(I.COLOR,0,E))}else H|=I.COLOR_BUFFER_BIT}O&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Se.dispose(),Ue.dispose(),J.dispose(),v.dispose(),Y.dispose(),ve.dispose(),ne.dispose(),me.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",$h),q.removeEventListener("sessionend",Zh),ys.stop()};function Me(b){b.preventDefault(),Ac("WebGLRenderer: Context Lost."),N=!0}function Oe(){Ac("WebGLRenderer: Context Restored."),N=!1;const b=A.autoReset,O=ye.enabled,W=ye.autoUpdate,H=ye.needsUpdate,z=ye.type;Q(),A.autoReset=b,ye.enabled=O,ye.autoUpdate=W,ye.needsUpdate=H,ye.type=z}function pt(b){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const O=b.target;O.removeEventListener("dispose",ot),bi(O)}function bi(b){Ei(b),v.remove(b)}function Ei(b){const O=v.get(b).programs;O!==void 0&&(O.forEach(function(W){se.releaseProgram(W)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,H,z,le){O===null&&(O=dt);const pe=z.isMesh&&z.matrixWorld.determinant()<0,ue=P0(b,O,W,H,z);Ee.setMaterial(H,pe);let be=W.index,we=1;if(H.wireframe===!0){if(be=j.getWireframeAttribute(W),be===void 0)return;we=2}const Be=W.drawRange,qe=W.attributes.position;let Re=Be.start*we,lt=(Be.start+Be.count)*we;le!==null&&(Re=Math.max(Re,le.start*we),lt=Math.min(lt,(le.start+le.count)*we)),be!==null?(Re=Math.max(Re,0),lt=Math.min(lt,be.count)):qe!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,qe.count));const wt=lt-Re;if(wt<0||wt===1/0)return;ne.setup(z,H,ue,W,be);let St,ut=Xe;if(be!==null&&(St=$.get(be),ut=D,ut.setIndex(St)),z.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*Tt()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(z.isLine){let Zt=H.linewidth;Zt===void 0&&(Zt=1),Ee.setLineWidth(Zt*Tt()),z.isLineSegments?ut.setMode(I.LINES):z.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else z.isPoints?ut.setMode(I.POINTS):z.isSprite&&ut.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Zt=z._multiDrawStarts,Te=z._multiDrawCounts,an=z._multiDrawCount,nt=be?$.get(be).bytesPerElement:1,Cn=v.get(H).currentProgram.getUniforms();for(let jn=0;jn<an;jn++)Cn.setValue(I,"_gl_DrawID",jn),ut.render(Zt[jn]/nt,Te[jn])}else if(z.isInstancedMesh)ut.renderInstances(Re,wt,z.count);else if(W.isInstancedBufferGeometry){const Zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Zt);ut.renderInstances(Re,wt,Te)}else ut.render(Re,wt)};function Kh(b,O,W){b.transparent===!0&&b.side===dn&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,ba(b,O,W),b.side=Wi,b.needsUpdate=!0,ba(b,O,W),b.side=dn):ba(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),T=J.get(W),T.init(O),R.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),b!==W&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const H=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ue=le[pe];Kh(ue,W,z),H.add(ue)}else Kh(le,W,z),H.add(le)}),T=R.pop(),H},this.compileAsync=function(b,O,W=null){const H=this.compile(b,O,W);return new Promise(z=>{function le(){if(H.forEach(function(pe){v.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){z(b);return}setTimeout(le,10)}it.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let sl=null;function C0(b){sl&&sl(b)}function $h(){ys.stop()}function Zh(){ys.start()}const ys=new og;ys.setAnimationLoop(C0),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(b){sl=b,q.setAnimationLoop(b),b===null?ys.stop():ys.start()},q.addEventListener("sessionstart",$h),q.addEventListener("sessionend",Zh),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=x!==null&&(k===null||W)&&x.begin(M,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,k),T=J.get(b,R.length),T.init(O),R.push(T),Gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(Gt,ri,O.reversedDepth),Fe=this.localClippingEnabled,De=te.init(this.clippingPlanes,Fe),S=Ue.get(b,w.length),S.init(),w.push(S),q.enabled===!0&&q.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&rl(pe,O,-1/0,M.sortObjects)}rl(b,O,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(vt,mt),We=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,We&&Se.addToRenderList(S,b),this.info.render.frame++,De===!0&&te.beginShadows();const z=T.state.shadowsArray;if(ye.render(z,b,O),De===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const pe=S.opaque,ue=S.transmissive;if(T.setupLights(),O.isArrayCamera){const be=O.cameras;if(ue.length>0)for(let we=0,Be=be.length;we<Be;we++){const qe=be[we];Qh(pe,ue,b,qe)}We&&Se.render(b);for(let we=0,Be=be.length;we<Be;we++){const qe=be[we];Jh(S,b,qe,qe.viewport)}}else ue.length>0&&Qh(pe,ue,b,O),We&&Se.render(b),Jh(S,b,O)}k!==null&&U===0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),H&&x.end(M),b.isScene===!0&&b.onAfterRender(M,b,O),ne.resetDefaultState(),X=-1,V=null,R.pop(),R.length>0?(T=R[R.length-1],De===!0&&te.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function rl(b,O,W,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){H&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);const pe=ve.update(b),ue=b.material;ue.visible&&S.push(b,pe,ue,W,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const pe=ve.update(b),ue=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),rt.copy(pe.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(ue)){const be=pe.groups;for(let we=0,Be=be.length;we<Be;we++){const qe=be[we],Re=ue[qe.materialIndex];Re&&Re.visible&&S.push(b,pe,Re,W,rt.z,qe)}}else ue.visible&&S.push(b,pe,ue,W,rt.z,null)}}const le=b.children;for(let pe=0,ue=le.length;pe<ue;pe++)rl(le[pe],O,W,H)}function Jh(b,O,W,H){const{opaque:z,transmissive:le,transparent:pe}=b;T.setupLightsView(W),De===!0&&te.setGlobalState(M.clippingPlanes,W),H&&Ee.viewport(G.copy(H)),z.length>0&&Sa(z,O,W),le.length>0&&Sa(le,O,W),pe.length>0&&Sa(pe,O,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Qh(b,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new li(1,1,{generateMipmaps:!0,type:Re?qi:hn,minFilter:Di,samples:ft.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const le=T.state.transmissionRenderTarget[H.id],pe=H.viewport||G;le.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);const ue=M.getRenderTarget(),be=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(le),M.getClearColor(Z),de=M.getClearAlpha(),de<1&&M.setClearColor(16777215,.5),M.clear(),We&&Se.render(W);const Be=M.toneMapping;M.toneMapping=ci;const qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),De===!0&&te.setGlobalState(M.clippingPlanes,H),Sa(b,W,H),F.updateMultisampleRenderTarget(le),F.updateRenderTargetMipmap(le),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,wt=O.length;lt<wt;lt++){const St=O[lt],{object:ut,geometry:Zt,material:Te,group:an}=St;if(Te.side===dn&&ut.layers.test(H.layers)){const nt=Te.side;Te.side=on,Te.needsUpdate=!0,ef(ut,W,H,Zt,Te,an),Te.side=nt,Te.needsUpdate=!0,Re=!0}}Re===!0&&(F.updateMultisampleRenderTarget(le),F.updateRenderTargetMipmap(le))}M.setRenderTarget(ue,be,we),M.setClearColor(Z,de),qe!==void 0&&(H.viewport=qe),M.toneMapping=Be}function Sa(b,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let z=0,le=b.length;z<le;z++){const pe=b[z],{object:ue,geometry:be,group:we}=pe;let Be=pe.material;Be.allowOverride===!0&&H!==null&&(Be=H),ue.layers.test(W.layers)&&ef(ue,O,W,be,Be,we)}}function ef(b,O,W,H,z,le){b.onBeforeRender(M,O,W,H,z,le),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(M,O,W,H,b,le),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,M.renderBufferDirect(W,O,H,z,b,le),z.side=Wi,z.needsUpdate=!0,M.renderBufferDirect(W,O,H,z,b,le),z.side=dn):M.renderBufferDirect(W,O,H,z,b,le),b.onAfterRender(M,O,W,H,z,le)}function ba(b,O,W){O.isScene!==!0&&(O=dt);const H=v.get(b),z=T.state.lights,le=T.state.shadowsArray,pe=z.state.version,ue=se.getParameters(b,z.state,le,O,W),be=se.getProgramCacheKey(ue);let we=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=Y.get(b.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",ot),we=new Map,H.programs=we);let qe=we.get(be);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===pe)return nf(b,ue),qe}else ue.uniforms=se.getUniforms(b),b.onBeforeCompile(ue,M),qe=se.acquireProgram(ue,be),we.set(be,qe),H.uniforms=ue.uniforms;const Re=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=te.uniform),nf(b,ue),H.needsLights=L0(b),H.lightsStateVersion=pe,H.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=qe,H.uniformsList=null,qe}function tf(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=gc.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function nf(b,O){const W=v.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function P0(b,O,W,H,z){O.isScene!==!0&&(O=dt),F.resetTextureUnits();const le=O.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ue=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:rn,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=Y.get(H.envMap||pe,be),Be=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color;let St=ci;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(St=M.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=ut!==void 0?ut.length:0,Te=v.get(H),an=T.state.lights;if(De===!0&&(Fe===!0||b!==V)){const Wt=b===V&&H.id===X;te.setState(H,b,Wt)}let nt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==an.state.version||Te.outputColorSpace!==ue||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==we||H.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Be||Te.vertexTangents!==qe||Te.morphTargets!==Re||Te.morphNormals!==lt||Te.morphColors!==wt||Te.toneMapping!==St||Te.morphTargetsCount!==Zt)&&(nt=!0):(nt=!0,Te.__version=H.version);let Cn=Te.currentProgram;nt===!0&&(Cn=ba(H,O,z));let jn=!1,Ms=!1,Zs=!1;const ht=Cn.getUniforms(),Yt=Te.uniforms;if(Ee.useProgram(Cn.program)&&(jn=!0,Ms=!0,Zs=!0),H.id!==X&&(X=H.id,Ms=!0),jn||V!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",b.projectionMatrix),ht.setValue(I,"viewMatrix",b.matrixWorldInverse);const Zi=ht.map.cameraPosition;Zi!==void 0&&Zi.setValue(I,et.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Ms=!0,Zs=!0)}if(Te.needsLights&&(an.state.directionalShadowMap.length>0&&ht.setValue(I,"directionalShadowMap",an.state.directionalShadowMap,F),an.state.spotShadowMap.length>0&&ht.setValue(I,"spotShadowMap",an.state.spotShadowMap,F),an.state.pointShadowMap.length>0&&ht.setValue(I,"pointShadowMap",an.state.pointShadowMap,F)),z.isSkinnedMesh){ht.setOptional(I,z,"bindMatrix"),ht.setOptional(I,z,"bindMatrixInverse");const Wt=z.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ht.setValue(I,"boneTexture",Wt.boneTexture,F))}z.isBatchedMesh&&(ht.setOptional(I,z,"batchingTexture"),ht.setValue(I,"batchingTexture",z._matricesTexture,F),ht.setOptional(I,z,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",z._indirectTexture,F),ht.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",z._colorsTexture,F));const $i=W.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&he.update(z,W,Cn),(Ms||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,ht.setValue(I,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Yb()),Ms&&(ht.setValue(I,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&I0(Yt,Zs),le&&H.fog===!0&&Ce.refreshFogUniforms(Yt,le),Ce.refreshMaterialUniforms(Yt,H,He,fe,T.state.transmissionRenderTarget[b.id]),gc.upload(I,tf(Te),Yt,F)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gc.upload(I,tf(Te),Yt,F),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(I,"center",z.center),ht.setValue(I,"modelViewMatrix",z.modelViewMatrix),ht.setValue(I,"normalMatrix",z.normalMatrix),ht.setValue(I,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let Zi=0,Js=Wt.length;Zi<Js;Zi++){const sf=Wt[Zi];me.update(sf,Cn),me.bind(sf,Cn)}}return Cn}function I0(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function L0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,O,W){const H=v.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=O,v.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const W=v.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const D0=I.createFramebuffer();this.setRenderTarget=function(b,O=0,W=0){k=b,P=O,U=W;let H=null,z=!1,le=!1;if(b){const ue=v.get(b);if(ue.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),G.copy(b.viewport),B.copy(b.scissor),ee=b.scissorTest,Ee.viewport(G),Ee.scissor(B),Ee.setScissorTest(ee),X=-1;return}else if(ue.__webglFramebuffer===void 0)F.setupRenderTarget(b);else if(ue.__hasExternalTextures)F.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(ue.__boundDepthTexture!==Be){if(Be!==null&&v.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);const we=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[O])?H=we[O][W]:H=we[O],z=!0):b.samples>0&&F.useMultisampledRTT(b)===!1?H=v.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[W]:H=we,G.copy(b.viewport),B.copy(b.scissor),ee=b.scissorTest}else G.copy(K).multiplyScalar(He).floor(),B.copy(ie).multiplyScalar(He).floor(),ee=oe;if(W!==0&&(H=D0),Ee.bindFramebuffer(I.FRAMEBUFFER,H)&&Ee.drawBuffers(b,H),Ee.viewport(G),Ee.scissor(B),Ee.setScissorTest(ee),z){const ue=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ue.__webglTexture,W)}else if(le){const ue=O;for(let be=0;be<b.textures.length;be++){const we=v.get(b.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,we.__webglTexture,W,ue)}}else if(b!==null&&W!==0){const ue=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,O,W,H,z,le,pe,ue=0){if(!(b&&b.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){Ee.bindFramebuffer(I.FRAMEBUFFER,be);try{const we=b.textures[ue],Be=we.format,qe=we.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Be)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(qe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&W>=0&&W<=b.height-z&&I.readPixels(O,W,H,z,re.convert(Be),re.convert(qe),le)}finally{const we=k!==null?v.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,H,z,le,pe,ue=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be)if(O>=0&&O<=b.width-H&&W>=0&&W<=b.height-z){Ee.bindFramebuffer(I.FRAMEBUFFER,be);const we=b.textures[ue],Be=we.format,qe=we.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(O,W,H,z,re.convert(Be),re.convert(qe),0);const lt=k!==null?v.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,lt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await y_(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Re),I.deleteSync(wt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,W=0){const H=Math.pow(2,-W),z=Math.floor(b.image.width*H),le=Math.floor(b.image.height*H),pe=O!==null?O.x:0,ue=O!==null?O.y:0;F.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,pe,ue,z,le),Ee.unbindTexture()};const N0=I.createFramebuffer(),U0=I.createFramebuffer();this.copyTextureToTexture=function(b,O,W=null,H=null,z=0,le=0){let pe,ue,be,we,Be,qe,Re,lt,wt;const St=b.isCompressedTexture?b.mipmaps[le]:b.image;if(W!==null)pe=W.max.x-W.min.x,ue=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Be=W.min.y,qe=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-z);pe=Math.floor(St.width*Yt),ue=Math.floor(St.height*Yt),b.isDataArrayTexture?be=St.depth:b.isData3DTexture?be=Math.floor(St.depth*Yt):be=1,we=0,Be=0,qe=0}H!==null?(Re=H.x,lt=H.y,wt=H.z):(Re=0,lt=0,wt=0);const ut=re.convert(O.format),Zt=re.convert(O.type);let Te;O.isData3DTexture?(F.setTexture3D(O,0),Te=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),Te=I.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),Te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const an=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),jn=I.getParameter(I.UNPACK_SKIP_ROWS),Ms=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qe);const Zs=b.isDataArrayTexture||b.isData3DTexture,ht=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Yt=v.get(b),$i=v.get(O),Wt=v.get(Yt.__renderTarget),Zi=v.get($i.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Js=0;Js<be;Js++)Zs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(b).__webglTexture,z,qe+Js),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(O).__webglTexture,le,wt+Js)),I.blitFramebuffer(we,Be,pe,ue,Re,lt,pe,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||v.has(b)){const Yt=v.get(b),$i=v.get(O);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,N0),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,U0);for(let Wt=0;Wt<be;Wt++)Zs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,z,qe+Wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,z),ht?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$i.__webglTexture,le,wt+Wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$i.__webglTexture,le),z!==0?I.blitFramebuffer(we,Be,pe,ue,Re,lt,pe,ue,I.COLOR_BUFFER_BIT,I.NEAREST):ht?I.copyTexSubImage3D(Te,le,Re,lt,wt+Wt,we,Be,pe,ue):I.copyTexSubImage2D(Te,le,Re,lt,we,Be,pe,ue);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Te,le,Re,lt,wt,pe,ue,be,ut,Zt,St.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,le,Re,lt,wt,pe,ue,be,ut,St.data):I.texSubImage3D(Te,le,Re,lt,wt,pe,ue,be,ut,Zt,St):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,Re,lt,pe,ue,ut,Zt,St.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,Re,lt,St.width,St.height,ut,St.data):I.texSubImage2D(I.TEXTURE_2D,le,Re,lt,pe,ue,ut,Zt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,an),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,jn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ms),le===0&&O.generateMipmaps&&I.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&F.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?F.setTextureCube(b,0):b.isData3DTexture?F.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?F.setTexture2DArray(b,0):F.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){P=0,U=0,k=null,Ee.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function yp(i,e){if(e===c_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===id||e===zm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===id)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function qc(i){const e=new Map,t=new Map,n=i.clone();return hg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function hg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)hg(i.children[n],e.children[n],t)}class Kb extends Qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new Mp(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mp(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new fE(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Do.extractUrlBase(e);o=Do.resolveURL(l,this.path)}else o=Do.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ng(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fg){try{o[$e.KHR_BINARY_GLTF]=new pE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new AE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new Jb;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new mE(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new gE;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new _E;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function $b(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Pt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zb{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],rn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Gc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new rg(u),l.distance=h;break;case"spot":l=new Nx(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Jb{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){const s=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class eE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(s)}}class tE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class nE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class iE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Kt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class sE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class rE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],rn),Promise.all(s)}}class oE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class aE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Kt)),Promise.all(s)}}class cE{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class lE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Si:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class uE{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class dE{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class hE{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Mp{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class fE{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const m of h){const _=new Ve,g=new C,p=new wn,y=new C(1,1,1),E=new ax(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&y.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,_.compose(g,p,y));for(const S in c)if(S==="_COLOR_0"){const T=c[S];E.instanceColor=new rd(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,c[S]);yt.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const fg="glTF",_o=12,Sp={JSON:1313821514,BIN:5130562};class pE{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_o,r=new DataView(e,_o);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Sp.JSON){const l=new Uint8Array(e,_o+o,a);this.content=n.decode(l)}else if(c===Sp.BIN){const l=_o+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=dd[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=dd[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=wr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}h(f)},a,l,rn,d)})})}}class gE{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _E{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class pg extends $r{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,y=1-g,E=p-d+h;for(let S=0;S!==a;S++){const T=o[_+S+a],w=o[_+S+c]*u,R=o[m+S+a],x=o[m+S]*u;r[S]=y*T+E*w+g*R+p*x}return r}}const xE=new wn;class vE extends pg{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return xE.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:Bt,9729:Rt,9984:Dm,9985:dc,9986:Eo,9987:Di},Ep={33071:si,33648:Ec,10497:Br},Hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yE={CUBICSPLINE:void 0,LINEAR:jo,STEP:qo},Gl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ME(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),i.DefaultMaterial}function Rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SE(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EE(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wl(t.attributes):e=i.indices+":"+Wl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wl(i.targets[n]);return e}function Wl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wE=new Ve;class AE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $b,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Lx(this.options.manager):this.textureLoader=new Bx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ng(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Rs(r,a,s),Zn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Do.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hl[s.type],a=wr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new zt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Hl[s.type],l=wr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(y);E||(_=new l(a,p*f,s.count*f/u),E=new ex(_,f/u),t.cache.add(y,E)),g=new nh(E,c,d%f/u,m)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),g=new zt(_,c,m);if(s.sparse!==void 0){const p=Hl.SCALAR,y=wr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new y(o[1],E,s.sparse.count*p),w=new l(o[2],S,s.sparse.count*c);a!==null&&(g=new zt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,x=T.length;R<x;R++){const M=T[R];if(g.setX(M,w[R*c]),c>=2&&g.setY(M,w[R*c+1]),c>=3&&g.setZ(M,w[R*c+2]),c>=4&&g.setW(M,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=bp[d.magFilter]||Rt,u.minFilter=bp[d.minFilter]||Di,u.wrapS=Ep[d.wrapS]||Br,u.wrapT=Ep[d.wrapT]||Br,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==Rt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new kt(_);g.needsUpdate=!0,d(g)}),t.load(Do.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Zn(h,o),h.userData.mimeType=o.mimeType||TE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Kr,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new oh,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],rn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);const u=r.alphaMode||Gl.OPAQUE;if(u===Gl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Gl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ut&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ut&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ut){const h=r.emissiveFactor;a.emissive=new Pe().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&o!==Ut&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Rs(s,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Tp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=EE(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Tp(new It,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?ME(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const y=l[f];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new sx(_,y):new tt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=yp(p.geometry,zm):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=yp(p.geometry,id));else if(g.mode===Mn.LINES)p=new Km(_,y);else if(g.mode===Mn.LINE_STRIP)p=new ah(_,y);else if(g.mode===Mn.LINE_LOOP)p=new dx(_,y);else if(g.mode===Mn.POINTS)p=new ca(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&bE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zn(p,r),g.extensions&&Rs(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Rs(s,h[0],r),h[0];const d=new pn;r.extensions&&Rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Gm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sh(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let E=0,S=d.length;E<S;E++){const T=d[E],w=f[E],R=m[E],x=_[E],M=g[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const N=n._createAnimationTracks(T,w,R,x,M);if(N)for(let P=0;P<N.length;P++)p.push(N[P])}const y=new ad(r,void 0,p);return Zn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wE)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,m=h[0];u.pivot=new C().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Ym:l.length>1?u=new pn:l.length===1?u=l[0]:u=new yt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Zn(u,r),r.extensions&&Rs(n,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new pn;n.name&&(r.name=s.createUniqueName(n.name)),Zn(r,n),n.extensions&&Rs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){const d=c[u];d.parent!==null?r.add(qc(d)):r.add(d)}const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof ui||d instanceof kt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ss[r.path]===ss.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ss[r.path]){case ss.weights:l=Hr;break;case ss.rotation:l=Gr;break;case ss.translation:case ss.scale:l=Wr;break;default:n.itemSize===1?l=Hr:l=Wr;break}const u=s.interpolation!==void 0?yE[s.interpolation]:jo,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+ss[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Gr?vE:pg;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RE(i,e,t){const n=e.attributes,s=new xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const u=hd(wr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=hd(wr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new yi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=dd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Zn(i,e),RE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?SE(i,e.targets,t):i})}const xs=document.querySelector("#app");xs.innerHTML=`
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
          <button id="createVersusBtn" type="button">Crear Versusmatch</button>
        </div>
        <h2>Salas activas</h2>
        <div id="roomList" class="room-list"></div>
        <p id="lobbyError" class="error hidden"></p>
      </div>
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

  <div id="mobileControls" class="mobile-controls hidden">
    <div id="mobileLookZone" class="mobile-look-zone"></div>
    <button id="mobileOptionsBtn" type="button" class="mobile-menu-btn">Menu</button>
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
`;const ds=document.querySelector("#bootLoader"),wp=document.querySelector("#bootLoaderText"),Ap=document.querySelector("#bootLoaderFill"),Rp=document.querySelector("#bootLoaderPercent"),Vn=document.querySelector("#lobby"),Xl=document.querySelector("#connectionStatus"),mh=document.querySelector("#playerName"),sn=document.querySelector("#characterSelect"),vr=document.querySelector("#characterPreview"),CE=document.querySelector("#refreshRoomsBtn"),PE=document.querySelector("#createVersusBtn"),ql=document.querySelector("#roomList"),Ja=document.querySelector("#lobbyError"),Bs=document.querySelector("#versusLobby"),IE=document.querySelector("#versusRoomInfo"),Ic=document.querySelector("#versusTypeSelect"),LE=document.querySelector("#versusWaitingInfo"),jl=document.querySelector("#versusLeftPlayers"),Yl=document.querySelector("#versusRightPlayers"),Qa=document.querySelector("#versusHint"),fd=document.querySelector("#versusReadyBtn"),mg=document.querySelector("#versusStartBtn"),DE=document.querySelector("#versusLeaveBtn"),ec=document.querySelector("#versusChatLog"),Ar=document.querySelector("#versusChatInput"),NE=document.querySelector("#versusChatSendBtn"),Cp=document.querySelector("#matchInfo"),Pp=document.querySelector("#respawnScreen"),UE=document.querySelector("#respawnCounter"),gg=document.querySelector("#winnerScreen"),Kl=document.querySelector("#winnerText"),pd=document.querySelector("#winnerCounter"),$l=document.querySelector("#damageOverlay"),tc=document.querySelector("#damageIndicator"),Ip=document.querySelector("#scoreboard"),Lp=document.querySelector("#scoreboardBody"),FE=document.querySelector("#healthStat"),OE=document.querySelector("#shieldStat"),BE=document.querySelector("#ammoStat"),Zl=document.querySelector("#specialStat"),kE=document.querySelector("#healthSideLabel"),zE=document.querySelector("#shieldSideLabel"),VE=document.querySelector("#ammoSideLabel"),xo=document.querySelector("#abilityHud"),Dp=document.querySelector("#abilityCooldownText"),Np=document.querySelector("#abilityCooldownFill"),HE=document.querySelector("#healthBarFill"),GE=document.querySelector("#shieldBarFill"),WE=document.querySelector("#ammoBarFill"),No=document.querySelector("#teamScoreHud"),Up=document.querySelector("#teamScoreRed"),Fp=document.querySelector("#teamScoreBlue"),Op=document.querySelector("#teamScoreTarget"),XE=document.querySelector("#stats"),Bp=document.querySelector("#roomHud"),kp=document.querySelector("#stateHud"),zp=document.querySelector("#weatherHud"),Vp=document.querySelector("#playersHud"),Hp=document.querySelector("#perfPanel"),qE=document.querySelector("#fpsValue"),jE=document.querySelector("#latencyValue"),YE=document.querySelector("#drawCallsValue"),KE=document.querySelector("#trianglesValue"),$E=document.querySelector("#geometriesValue"),ZE=document.querySelector("#texturesValue"),JE=document.querySelector("#vfxValue"),Jl=document.querySelector("#hostControls"),_g=document.querySelector("#startGameBtn"),xg=document.querySelector("#endGameBtn"),QE=document.querySelector("#leaveRoomHudBtn"),gh=document.querySelector("#chatFeed"),vg=document.querySelector("#chatPanel"),nc=document.querySelector("#chatLog"),yg=document.querySelector("#chatInputWrap"),Lc=document.querySelector("#chatInput"),vo=document.querySelector("#crosshair"),md=document.querySelector("#mobileControls"),Ii=document.querySelector("#mobileLookZone"),Dn=document.querySelector("#mobileJoystick"),hs=document.querySelector("#mobileJoystickThumb"),Cs=document.querySelector("#mobileFireBtn"),Gp=document.querySelector("#mobileSpecialBtn"),Wp=document.querySelector("#mobileJumpBtn"),Ql=document.querySelector("#mobileOptionsBtn"),Dc=document.querySelector("#mobileFullscreenPrompt"),_h=document.querySelector("#mobileFsAcceptBtn"),xh=document.querySelector("#mobileFsSkipBtn");document.querySelector("#teamAimIndicator");document.querySelector("#teamMiniMap");const Mg=document.querySelector("#optionsScreen"),gd=document.querySelector("#optMouseSensitivity"),Sg=document.querySelector("#optMouseSensitivityValue"),_d=document.querySelector("#optMasterVolume"),bg=document.querySelector("#optMasterVolumeValue"),xd=document.querySelector("#optMusicVolume"),Eg=document.querySelector("#optMusicVolumeValue"),vd=document.querySelector("#optSfxVolume"),Tg=document.querySelector("#optSfxVolumeValue"),yd=document.querySelector("#optFov"),wg=document.querySelector("#optFovValue"),Md=document.querySelector("#optShowPerf"),eT=document.querySelector("#optResumeBtn"),tT=document.querySelector("#optLeaveLobbyBtn"),L={ws:null,self:null,rooms:[],joinedRoom:null,remotePlayers:new Map,lastStateSentAt:0,showMatchInfo:!1,showScoreboard:!1,showPerf:!1,fps:0,latencyMs:null},ti={drawCalls:0,triangles:0,geometries:0,textures:0,vfx:0},Bn=[],Xp=40,nT=8e3,Ui=[],qp=60;let Bi=!1,Ks=!1;const Ag="koketria_settings_v1",Ie={mouseSensitivity:1,masterVolume:1,musicVolume:1,sfxVolume:1,fov:75,showPerfByDefault:!1},eu=["battle1","battle2","battle3"],ge={enabled:!1,active:!1,moveTouchId:null,lookTouchId:null,movePointerId:null,lookPointerId:null,moveX:0,moveY:0,lookLastX:0,lookLastY:0};let jc=!1,jp=0;const Rg=()=>{Je.KeyW=!1,Je.KeyA=!1,Je.KeyS=!1,Je.KeyD=!1,Je.Space=!1},Cg=()=>{ge.moveTouchId=null,ge.lookTouchId=null,ge.movePointerId=null,ge.lookPointerId=null,ge.moveX=0,ge.moveY=0,gn=!1,Je.KeyW=!1,Je.KeyA=!1,Je.KeyS=!1,Je.KeyD=!1,hs&&(hs.style.transform="translate(-50%, -50%)")},iT=()=>{const i=String(navigator.userAgent||""),e=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(any-pointer: coarse)").matches,t=window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=/android|iphone|ipad|ipod|mobile/i.test(i),s=Number(navigator.maxTouchPoints||navigator.msMaxTouchPoints||0),r=Math.min(window.innerWidth,window.innerHeight)<=1024;return n?!0:!t&&e&&s>0&&r},Pg=()=>{const i=String(navigator.userAgent||""),e=/android/i.test(i),t=/chrome\//i.test(i),n=/edga|opr|samsungbrowser|ucbrowser|yabrowser|duckduckgo|firefox|fxios/i.test(i);return e&&t&&!n},Ig=()=>!!(document.fullscreenElement||document.webkitFullscreenElement),vh=()=>{Dc&&Dc.classList.add("hidden")},Yp=async()=>{try{screen.orientation?.lock&&await screen.orientation.lock("landscape")}catch{}},sT=async()=>{if(!Pg())return!1;if(Ig())return await Yp(),!0;const i=[document.documentElement,xs,fn?.domElement].filter(Boolean);for(let e=0;e<i.length;e+=1){const t=i[e];try{if(typeof t.requestFullscreen=="function")await t.requestFullscreen({navigationUI:"hide"});else if(typeof t.webkitRequestFullscreen=="function")t.webkitRequestFullscreen();else continue;return await Yp(),!0}catch{}}return!1},Lg=()=>{if(!Dc)return;const i=!!(L.joinedRoom&&L.joinedRoom.room&&L.joinedRoom.room.status==="in_game"&&xs.classList.contains("in-room")),e=ge.enabled&&Pg()&&i&&!vn()&&!Ig()&&!jc;Dc.classList.toggle("hidden",!e)},vs=()=>{const i=ge.active;ge.enabled=iT();const e=ge.enabled&&$t()&&!vn()&&!Ks;ge.active=e,md&&(md.classList.toggle("hidden",!e),xs.classList.toggle("mobile-input",e),!e&&i&&Cg(),Lg())},yh=()=>{if(!nc)return;const i=Date.now();for(let t=Bn.length-1;t>=0;t-=1)i-Bn[t].ts>nT&&Bn.splice(t,1);gh.classList.toggle("open",Bn.length>0);const e=Bn.slice(-8);nc.innerHTML=e.map(t=>{const n=t.isSelf?" (Tú)":"";return`<p><strong>${t.playerName}${n}:</strong> ${t.text}</p>`}).join(""),nc.scrollTop=nc.scrollHeight},rT=(i,e)=>{if(!e)return;const t=!!(L.self&&String(i||"")===String(L.self.name||""));Bn.push({playerName:String(i||"Player"),text:String(e||""),isSelf:t,ts:Date.now()}),Bn.length>Xp&&Bn.splice(0,Bn.length-Xp),yh()},Zo=()=>{if(!ec)return;const i=Ui.slice(-12);ec.innerHTML=i.map(e=>{const t=e.isSelf?" (Tú)":"";return`<p><strong>${e.playerName}${t}:</strong> ${e.text}</p>`}).join(""),ec.scrollTop=ec.scrollHeight},oT=(i,e)=>{if(!e)return;const t=!!(L.self&&String(i||"")===String(L.self.name||""));Ui.push({playerName:String(i||"Player"),text:String(e||""),isSelf:t,ts:Date.now()}),Ui.length>qp&&Ui.splice(0,Ui.length-qp),Zo()};setInterval(()=>{Bn.length>0&&!Bi&&yh()},500);const aT=()=>{L.joinedRoom&&(Bi=!0,Rg(),gn=!1,vg.classList.add("open"),yg.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),Lc.value="",Lc.focus())},Sd=()=>{Bi=!1,vg.classList.remove("open"),yg.classList.add("hidden"),Lc.blur()},Us=(i="")=>{if(!i){Ja.classList.add("hidden"),Ja.textContent="";return}Ja.classList.remove("hidden"),Ja.textContent=i},ni=(i,e,t,n)=>{const s=Number(i);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):n},cT=()=>{try{const i=localStorage.getItem(Ag);if(!i)return;const e=JSON.parse(i);Ie.mouseSensitivity=ni(e.mouseSensitivity,.4,2.5,Ie.mouseSensitivity),Ie.masterVolume=ni(e.masterVolume,0,1,Ie.masterVolume),Ie.musicVolume=ni(e.musicVolume,0,1,Ie.musicVolume),Ie.sfxVolume=ni(e.sfxVolume,0,1,Ie.sfxVolume),Ie.fov=ni(e.fov,60,100,Ie.fov),Ie.showPerfByDefault=!!e.showPerfByDefault}catch{}},to=()=>{localStorage.setItem(Ag,JSON.stringify(Ie))},lT=i=>{const e=[...i];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e},Uo=i=>{xs.classList.toggle("in-room",i),Hi(),!i&&document.pointerLockElement&&document.exitPointerLock(),i||(Zc(),Bn.length=0,yh(),Sd(),gh.classList.remove("open"),Cg(),jc=!1,vh()),vs()},Dg=()=>{L.showMatchInfo&&L.joinedRoom?Cp.classList.add("visible"):Cp.classList.remove("visible")},Mh=()=>{if(!L.joinedRoom||!L.showScoreboard){Ip.classList.add("hidden");return}const i=[...L.joinedRoom.players].sort((s,r)=>(r.kills||0)!==(s.kills||0)?(r.kills||0)-(s.kills||0):(s.deaths||0)-(r.deaths||0)),e=s=>{const r=L.self&&s.id===L.self.id?" (Tú)":"";return`<tr><td>${s.name}${r}</td><td>${s.kills||0}</td><td>${s.deaths||0}</td></tr>`},t=L.joinedRoom.room||{};if(io(t)&&String(t.versusType||"").toLowerCase()==="2v2"){const s=i.filter(l=>bt(l.team)==="red"),r=i.filter(l=>bt(l.team)==="blue"),o=i.filter(l=>!bt(l.team)),a=(l,u,h)=>{const d=[];if(d.push(`<tr class="scoreboard-team-row ${l}"><td colspan="3">${u}</td></tr>`),h.length<=0)d.push('<tr class="scoreboard-empty-row"><td colspan="3">Esperando jugador...</td></tr>');else for(let f=0;f<h.length;f+=1)d.push(e(h[f]));return d.join("")},c=[a("team-red","Equipo Rojo",s),a("team-blue","Equipo Azul",r)];if(o.length>0){c.push('<tr class="scoreboard-team-row team-unknown"><td colspan="3">Sin equipo</td></tr>');for(let l=0;l<o.length;l+=1)c.push(e(o[l]))}Lp.innerHTML=c.join("")}else Lp.innerHTML=i.map(e).join("");Ip.classList.remove("hidden")},no=()=>{if(!L.joinedRoom||!L.showPerf){Hp.classList.add("hidden");return}qE.textContent=String(L.fps),jE.textContent=Number.isFinite(L.latencyMs)?`${Math.round(L.latencyMs)} ms`:"--",YE.textContent=String(Math.round(ti.drawCalls)),KE.textContent=String(Math.round(ti.triangles)),$E.textContent=String(Math.round(ti.geometries)),ZE.textContent=String(Math.round(ti.textures)),JE.textContent=String(Math.round(ti.vfx)),Hp.classList.remove("hidden")},Ng=()=>!!(L.joinedRoom&&L.self&&L.joinedRoom.room.hostId===L.self.id),$t=()=>!!(L.joinedRoom&&L.joinedRoom.room.status==="in_game"&&!Et&&!Xr),Jo=()=>!!(L.joinedRoom&&L.joinedRoom.room.status==="in_game"),uT=i=>i==="rainy"?"Lluvioso":i==="sunny"?"Soleado":i==="night"?"Noche":i==="snow"?"Nieve":i||"-",Fo=i=>{const e=i||"night";Og=e,Eh.visible=e==="rainy",wh.visible=e==="snow",Gg.visible=e==="night"||e==="snow",Xg.visible=!1,Ah.visible=!1,Rh.visible=!1,e==="sunny"?(xe.background=new Pe(12050431),xe.fog.color.set(12050431),xe.fog.near=90,xe.fog.far=400,Ro.intensity=.74,Jn.intensity=1.2,Jn.color.set(16773826),Co.opacity=.35):e==="rainy"?(xe.background=new Pe(599e4),xe.fog.color.set(599e4),xe.fog.near=10,xe.fog.far=95,Ro.intensity=.26,Jn.intensity=.42,Jn.color.set(9156567),Co.opacity=.25):e==="snow"?(xe.background=new Pe(14215668),xe.fog.color.set(14215668),xe.fog.near=26,xe.fog.far=200,Ro.intensity=.65,Jn.intensity=.9,Jn.color.set(15202047),Co.opacity=.42):(xe.background=new Pe(461588),xe.fog.color.set(461588),xe.fog.near=16,xe.fog.far=140,Ro.intensity=.26,Jn.intensity=.38,Jn.color.set(8354248),Co.opacity=.6)},_t=i=>{if(!L.ws||L.ws.readyState!==WebSocket.OPEN){Us("WebSocket no conectado");return}L.ws.send(JSON.stringify(i))};let Kp=0,Li=null,$p=0;const dT=2e3;let tu=0,Zp=performance.now(),kn=1;const Sh=(i=!1)=>{const e=performance.now();if(!L.showPerf||!L.joinedRoom||!L.ws||L.ws.readyState!==WebSocket.OPEN||Li&&e-Li.sentAt<5e3||!i&&e-$p<dT)return;const t=`${Date.now()}-${Kp}`;Kp+=1,Li={id:t,sentAt:e},$p=e,_t({type:"ping",probeId:t,clientTs:Date.now(),rttMs:Number.isFinite(L.latencyMs)?Math.round(L.latencyMs):void 0})},hT=()=>{const i=performance.now();tu+=1;const e=i-Zp;if(e>=500){L.fps=Math.max(0,Math.round(tu*1e3/e));const t=L.fps;t>=58?kn=1:t>=48?kn=.82:t>=38?kn=.62:t>=30?kn=.48:kn=.34,tu=0,Zp=i,L.showPerf&&L.joinedRoom&&no()}Sh()},io=i=>String(i?.mode||"").toLowerCase()==="versusmatch",bt=i=>{const e=String(i||"").trim().toLowerCase();return e==="red"||e==="blue"?e:null},Ug=()=>!1,ki=i=>{const e=bt(i);return e==="red"?{tracer:16739179,impactA:16751772,impactB:16739179,label:"Aliado"}:e==="blue"?{tracer:6726911,impactA:11061503,impactB:6726911,label:"Enemigo"}:{tracer:10682286,impactA:12579839,impactB:8257426,label:"-"}},wo=i=>{const e=String(i||"");if(!e)return null;if(L.self&&e===L.self.id)return bt(Le.team);const t=L.remotePlayers.get(e);return bt(t?.team)},fT=i=>{const e=String(i?.versusType||"").trim().toLowerCase();return e==="1v1"?10:20},Yi=()=>L.joinedRoom&&io(L.joinedRoom.room)?3:10,Jp=()=>{if(!No||!Up||!Fp||!Op)return;const i=L.joinedRoom?.room,e=String(i?.versusType||"").toLowerCase(),t=e==="1v1"||e==="2v2";if(!L.joinedRoom||!io(i)||!t||i.status!=="in_game"){No.classList.add("hidden");return}let n=0,s=0;const r=Array.isArray(L.joinedRoom.players)?L.joinedRoom.players:[];for(let a=0;a<r.length;a+=1){const c=r[a],l=Math.max(0,Number(c.kills||0)),u=bt(c.team);u==="red"?n+=l:u==="blue"&&(s+=l)}const o=fT(i);Up.textContent=`ROJO ${n}`,Fp.textContent=`AZUL ${s}`,Op.textContent=`META ${o}`,No.classList.remove("hidden")},Fg=i=>{if(!i)return;String(i.mode||"freeforall").toLowerCase()!=="versusmatch"&&No&&No.classList.add("hidden")},_c=()=>{const i=L.joinedRoom?.room,e=!!(i&&io(i));xs.classList.toggle("versus-mode",e)},vn=()=>!!(L.joinedRoom&&io(L.joinedRoom.room)&&L.joinedRoom.room.status==="waiting"),Ao=()=>{const i=vn();Bs&&Bs.classList.toggle("hidden",!i),Vn&&(i?Vn.classList.add("hidden"):Vn.classList.remove("hidden"))},pT=()=>{const i=document.querySelectorAll(".versus-player-model[data-preview-key]"),e=new Set;i.forEach(n=>{const s=String(n.dataset.previewKey||"").trim(),r=String(n.dataset.character||"").trim();if(!s)return;e.add(s);const o=zn.get(s);if(o&&o.characterId===r&&o.renderer?.domElement?.parentElement===n)return;o&&Ad(s);const a=new th,c=new qt(40,1,.1,100),l=new ph({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,1.8));const u=Math.max(60,n.clientWidth||92),h=Math.max(60,n.clientHeight||92);l.setSize(u,h,!1),n.innerHTML="",n.appendChild(l.domElement);const d=new ig(13172706,1056784,.95);a.add(d);const f=new Gc(16777215,.85);f.position.set(2.8,4.8,3.4),a.add(f);const m={key:s,characterId:r,node:n,renderer:l,scene:a,camera:c,mixer:null,model:null,rotateSpeed:.32+Math.random()*.2};if(zn.set(s,m),!r)return;const _=p=>{if(!p?.loaded||!p.scene||!zn.has(s))return;const y=zn.get(s);if(!y||y.characterId!==r)return;const E=qc(p.scene),S=new xn().setFromObject(E),T=S.getCenter(new C),w=S.getSize(new C);E.position.set(-T.x,-S.min.y,-T.z),y.scene.add(E),y.model=E,y.camera.position.set(0,Math.max(.95,w.y*.62),Math.max(1.45,w.y*.9)),y.camera.lookAt(0,Math.max(.72,w.y*.45),0);const R=p.animationSet?.running||p.animationSet?.idle||p.animationSet?.funny||p.animationSet?.dead||rs(p.animations||[],"running",["running","idle","funny","dead"]);if(R){const x=new fh(E),M=x.clipAction(R);M.reset(),M.setLoop(oa,1/0),M.play(),y.mixer=x}},g=Fc.get(r);g?.loaded&&g.scene?_(g):$s(r).then(p=>{_(p)})});const t=[...zn.keys()];for(let n=0;n<t.length;n+=1)e.has(t[n])||Ad(t[n])},Qp=(i,e,t,n,s={})=>{if(!i)return!1;const{showOnlyActualPlayers:r=!1}=s,o=Array.isArray(e)?e:[],a=Math.max(1,o.length);i.style.setProperty("--team-count",String(a));const c=r?o.length:Math.max(1,Number(t)||1),l=[String(n||""),String(c)],u=r?o.length:c;for(let m=0;m<u;m+=1){const _=o[m];_?l.push(`${_.id}|${_.name}|${_.character||""}|${bt(_.team)||""}|${!!_.ready}`):l.push("empty")}const h=l.join("::");if(i.dataset.renderKey===h)return!1;const d=[];for(let m=0;m<c;m+=1){const _=o[m];if(_){const g=String(_.name||`Player ${m+1}`),p=ea(_.character||"-"),y=!!_.ready,E=L.self&&_.id===L.self.id,T=bt(_.team)==="red"?"Cambiar a Azul":"Cambiar a Rojo";d.push(`
        <div class="versus-player">
          <div class="versus-player-model" data-preview-key="${i.id}-${m}" data-character="${String(_.character||"")}"></div>
          <strong>${g}</strong>
          <span>${p}</span>
          <span class="versus-ready ${y?"on":"off"}">${y?"Ready":"No Ready"}</span>
          ${E?`<button class="versus-team-switch-btn" type="button" data-action="switch-team" data-player-id="${_.id}">${T}</button>`:""}
        </div>
      `)}else r||d.push(`
        <div class="versus-player empty">
          <div class="versus-player-model placeholder"></div>
          <strong>Esperando...</strong>
          <span>Slot libre</span>
        </div>
      `)}return i.innerHTML=d.join(""),i.dataset.renderKey=h,i.querySelectorAll('[data-action="switch-team"]').forEach(m=>{m.addEventListener("click",()=>{_t({type:"versus_switch_team"})})}),!0},Oo=()=>{if(!Bs)return;if(!vn()){L.joinedRoom?.room?.mode==="versusmatch"&&L.joinedRoom?.room?.status==="in_game"&&Ui.length>0&&(Ui.length=0,Zo()),Bs.classList.add("hidden"),RT();return}const i=L.joinedRoom.room,e=Number(L.joinedRoom.players?.length||0),t=Number(i.requiredPlayers||0),n=Number(i.maxPlayers||4),s=String(i.versusType||""),r=Ng(),o=s==="1v1"||s==="2v2",a=Array.isArray(L.joinedRoom.players)?[...L.joinedRoom.players]:[];a.sort((M,N)=>M.id===L.self?.id?-1:N.id===L.self?.id?1:String(M.name||"").localeCompare(String(N.name||"")));const c=o?s==="2v2"?2:1:Math.max(1,Math.ceil(n/2));let l=a.filter(M=>bt(M.team)==="red"),u=a.filter(M=>bt(M.team)==="blue");l.length===0&&u.length===0&&(l=a.slice(0,c),u=a.slice(c,c*2));const h=l.length,d=u.length,f=`${s}|${c}|${l.map(M=>`${M.id}:${M.character||""}:${bt(M.team)||"-"}`).join(",")}|${u.map(M=>`${M.id}:${M.character||""}:${bt(M.team)||"-"}`).join(",")}`,m=o&&t>0&&e===t,_=o?s==="2v2"?2:1:0,g=a.filter(M=>bt(M.team)==="red").length,p=a.filter(M=>bt(M.team)==="blue").length,y=o&&g===_&&p===_,E=a.filter(M=>!!M.ready).length,S=m&&a.every(M=>!!M.ready),T=L.self?a.find(M=>M.id===L.self.id):null,w=!!T?.ready;Bs.classList.remove("hidden"),IE.textContent=`Sala: ${i.name} (${i.id})`,Ic.value=o?s:"",Ic.disabled=!r,LE.textContent=o?`Esperando: ${e}/${t} (${s}) | Equipos: Rojo ${g}/${_} - Azul ${p}/${_} | Ready: ${E}/${t}`:`Esperando selección de modalidad (${e}/${n})`;const R=Qp(jl,l,c,"left",{showOnlyActualPlayers:!0}),x=Qp(Yl,u,c,"right",{showOnlyActualPlayers:!0});jl.classList.toggle("empty-team",h===0),Yl.classList.toggle("empty-team",d===0),h===0&&(jl.innerHTML=`
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Rojo</span>
      </div>
    `),d===0&&(Yl.innerHTML=`
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Azul</span>
      </div>
    `),(R||x||f!==wd||zn.size===0)&&(pT(),wd=f),fd.disabled=!T,fd.textContent=w?"Ready: ON":"Ready: OFF",mg.disabled=!r||!S||!y,m&&!y?Qa.textContent=`Equipos desbalanceados. Deben quedar ${_} en Rojo y ${_} en Azul.`:m&&!S?Qa.textContent="Faltan jugadores por marcar Ready para iniciar.":S?Qa.textContent="Todos listos. El host puede iniciar la partida.":Qa.textContent="Las partidas versus aparecen en estado waiting hasta completar jugadores.",Zo()},bd=()=>{if(ql.innerHTML="",L.rooms.length===0){const i=document.createElement("p");i.className="room-empty",i.textContent="No hay salas activas.",ql.appendChild(i);return}L.rooms.forEach(i=>{const e=io(i)?"versusmatch":"freeforall",t=i.versusType?` (${i.versusType})`:"",n=Number(i.maxPlayers)>0?Number(i.maxPlayers):5,s=document.createElement("article");s.className="room-card",s.innerHTML=`
      <div>
        <strong>${i.name}</strong>
        <p>ID: ${i.id}</p>
        <p>Modo: ${e}${t}</p>
        <p>Jugadores: ${i.players}/${n}</p>
        <p>Estado: ${i.status}</p>
      </div>
      <button type="button">Unirse</button>
    `,s.querySelector("button").addEventListener("click",()=>{Us(),_t({type:"join_room",roomId:i.id,playerName:mh.value.trim(),character:sn.value||je})}),ql.appendChild(s)}),Oo()},mT=()=>`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`,gT=()=>`${window.location.protocol}//${window.location.host}`,xe=new th;xe.background=new Pe(66817);xe.fog=new eh(66817,18,160);let Og="night";const ce=new qt(75,window.innerWidth/window.innerHeight,.1,500);ce.position.set(0,1.7,10);const Xs=new qt(75,window.innerWidth/window.innerHeight,.1,500);let Rr=!1;const _T=1.25,xT=.7,vT=.18,em=new C,ic=new C,tm=new C,nm=new C,sc=new C,fn=new ph({antialias:!0});fn.setSize(window.innerWidth,window.innerHeight);fn.setPixelRatio(Math.min(window.devicePixelRatio,2));xs.appendChild(fn.domElement);const Ro=new Ox(6750088,.3);xe.add(Ro);const Jn=new Gc(4849523,.8);Jn.position.set(15,30,10);xe.add(Jn);const Qo=new rg(10026904,0,8,2);ce.add(Qo);Qo.position.set(.2,-.18,-.6);xe.add(ce);const Bg=new tt(new ms(320,320),new Xn({color:135426,roughness:1}));Bg.rotation.x=-Math.PI/2;xe.add(Bg);const kg=new tv(320,80,4194150,1002015);kg.position.y=.01;xe.add(kg);const yT=new Xn({color:5984868,emissive:2762034,emissiveIntensity:.18,metalness:.06,roughness:.9});new Xn({color:8089476,emissive:2893110,emissiveIntensity:.14,metalness:.04,roughness:.92});new Xn({color:9401999,emissive:3417405,emissiveIntensity:.11,metalness:.04,roughness:.9});const fs=[],Nc=[],ps=.55,MT=156;let im=null;const Yc=5600,Nn=new Float32Array(Yc*3),Ed=new Float32Array(Yc);for(let i=0;i<Yc;i+=1)Nn[i*3]=(Math.random()-.5)*260,Nn[i*3+1]=Math.random()*120+6,Nn[i*3+2]=(Math.random()-.5)*260,Ed[i]=22+Math.random()*26;const bh=new It;bh.setAttribute("position",new zt(Nn,3));const ST=new Kr({color:6750054,size:.26,transparent:!0,opacity:.98,sizeAttenuation:!0}),Eh=new ca(bh,ST);xe.add(Eh);const Kc=1700,Un=new Float32Array(Kc*3),zg=new Float32Array(Kc);for(let i=0;i<Kc;i+=1)Un[i*3]=(Math.random()-.5)*260,Un[i*3+1]=Math.random()*120+6,Un[i*3+2]=(Math.random()-.5)*260,zg[i]=1.6+Math.random()*2.7;const Th=new It;Th.setAttribute("position",new zt(Un,3));const bT=new Kr({color:16777215,size:.22,transparent:!0,opacity:.85,sizeAttenuation:!0}),wh=new ca(Th,bT);xe.add(wh);const Vg=1200,xc=new Float32Array(Vg*3);for(let i=0;i<Vg;i+=1)xc[i*3]=(Math.random()-.5)*420,xc[i*3+1]=70+Math.random()*80,xc[i*3+2]=(Math.random()-.5)*420;const Hg=new It;Hg.setAttribute("position",new zt(xc,3));const ET=new Kr({color:12572927,size:.36,transparent:!0,opacity:.78,sizeAttenuation:!0}),Gg=new ca(Hg,ET);xe.add(Gg);const $c=900,vc=new Float32Array($c*3),Wg=new Float32Array($c);for(let i=0;i<$c;i+=1)vc[i*3]=(Math.random()-.5)*300,vc[i*3+1]=8+Math.random()*34,vc[i*3+2]=(Math.random()-.5)*300,Wg[i]=.4+Math.random()*.9;const Uc=new It;Uc.setAttribute("position",new zt(vc,3));const Co=new Kr({color:16773311,size:.18,transparent:!0,opacity:.62,sizeAttenuation:!0,depthWrite:!1}),Xg=new ca(Uc,Co);xe.add(Xg);const Ah=new tt(new Mi(8.5,24,24),new Ut({color:15331839,transparent:!0,opacity:.9}));Ah.position.set(78,95,-124);xe.add(Ah);const Rh=new tt(new Mi(4.2,18,18),new Ut({color:16373920,transparent:!0,opacity:.74}));Rh.position.set(-104,76,-112);xe.add(Rh);const nu=[],Td=[];let Bo=0;const TT=new C,qg=new Kb,Fc=new Map,un=[];let je="";const wT=["attack","dead","running","idle","jump","funny"],Ke={renderer:null,scene:null,camera:null,mixer:null,model:null,lastWidth:0,lastHeight:0},zn=new Map;let wd="";const Le={group:null,mixer:null,actions:null,currentAnimation:"",shootUntil:0,loadingKey:"",funnyUntil:0,team:null,teamOutline:null},ua=i=>{const e=String(i||"").trim();return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"")==="pezunalunar"?"pezunalunar":e:""},AT=(i,e)=>`/characters/${encodeURIComponent(ua(i))}/${encodeURIComponent(e)}`,ea=i=>ua(i)==="pezunalunar"?"pezuñalunar":i,Ad=i=>{const e=zn.get(i);e&&(e.model&&e.scene&&e.scene.remove(e.model),e.renderer&&e.renderer.domElement?.parentElement&&e.renderer.domElement.parentElement.removeChild(e.renderer.domElement),e.renderer?.dispose(),zn.delete(i))},RT=()=>{const i=[...zn.keys()];for(let e=0;e<i.length;e+=1)Ad(i[e]);wd=""},CT=i=>/\.(glb|gltf)$/i.test(String(i||"").trim()),PT=i=>{const e=String(i||"").trim();if(!e)return[];const t=ua(e);return t===e?[e]:[t,e]},IT=i=>new Promise(e=>{const t=n=>{if(n>=i.length){e(null);return}qg.load(i[n],s=>e(s),void 0,()=>t(n+1))};t(0)}),sm={mana:{url:"/items/mana.glb",targetHeight:.62},defensa:{url:"/items/defensa.glb",targetHeight:.7},vida:{url:"/items/vida.glb",targetHeight:.68}},yo=new Map,rc=new Map,LT=(i,e)=>{const t=new xn().setFromObject(i),n=t.getSize(new C);if(Number.isFinite(n.y)&&n.y>1e-4){const o=e/n.y;i.scale.setScalar(o),t.setFromObject(i)}const s=t.getCenter(new C),r=Number.isFinite(t.min.y)?t.min.y:0;return i.position.set(-s.x,-r,-s.z),i.traverse(o=>{o.isMesh&&(o.frustumCulled=!0)}),i},yc=async i=>{const e=String(i||"").trim();if(!e||!sm[e])return null;if(yo.has(e))return yo.get(e);if(rc.has(e))return rc.get(e);const{url:t,targetHeight:n}=sm[e],s=new Promise(r=>{qg.load(t,o=>{const a=o?.scene?o.scene.clone(!0):null;if(!a){yo.set(e,null),r(null);return}const c=LT(a,n);yo.set(e,c),r(c)},void 0,()=>{yo.set(e,null),r(null)})}).finally(()=>{rc.delete(e)});return rc.set(e,s),s},iu=(i,e)=>{const t=new pn,n=new pn;t.add(n);const s=e();return s.name="__pickup_fallback__",n.add(s),yc(i).then(r=>{if(!r||!t.parent)return;for(;n.children.length>0;)n.remove(n.children[0]);const o=r.clone(!0);o.name=`pickup_${i}`,n.add(o),t.userData.modelLoaded=!0}),t},mr=(i,e)=>{if(!i?.animations||i.animations.length===0)return null;const t=i.animations[0].clone();return t.name=e,t},$s=async i=>{if(!i)return null;const e=Fc.get(i);if(e?.loaded)return e;if(e?.loadingPromise)return e.loadingPromise;const t=e||{loaded:!1,scene:null,animations:[],animationSet:{},loadingPromise:null};return Fc.set(i,t),t.loadingPromise=new Promise(n=>{const s=PT(i);if(s.length===0){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}Promise.all(wT.map(async r=>{const o=CT(r)?[r]:[r,`${r}.glb`,`${r}.gltf`],a=s.flatMap(l=>o.map(u=>AT(l,u))),c=await IT(a);return{actionName:r,gltf:c}})).then(r=>{const o=r.find(_=>_.actionName==="dead"&&_.gltf?.scene)?.gltf,a=r.find(_=>_.actionName==="idle"&&_.gltf?.scene)?.gltf,c=r.find(_=>_.actionName==="running"&&_.gltf?.scene)?.gltf,l=r.find(_=>_.actionName==="jump"&&_.gltf?.scene)?.gltf,u=r.find(_=>_.actionName==="funny"&&_.gltf?.scene)?.gltf,h=r.find(_=>_.actionName==="attack"&&_.gltf?.scene)?.gltf,d=a||c||l||u||o||h;if(!d?.scene){t.loaded=!1,t.scene=null,t.animations=[],t.animationSet={},t.loadingPromise=null,n(t);return}const f={attack:mr(h,"attack"),dead:mr(o,"dead"),running:mr(c,"running"),idle:mr(a,"idle"),jump:mr(l,"jump"),funny:mr(u,"funny")},m=Object.values(f).filter(Boolean);t.loaded=!0,t.scene=d.scene,t.animations=m,t.animationSet=f,t.loadingPromise=null,n(t)})}),t.loadingPromise},jg=i=>{const e=sn.value||je;if(sn.innerHTML="",un.length=0,lT(i).forEach(n=>un.push(n)),un.length===0){const n=document.createElement("option");n.value="",n.textContent="Sin personajes",sn.appendChild(n),sn.disabled=!0,je="";return}sn.disabled=!1,un.forEach(n=>{const s=document.createElement("option");s.value=n,s.textContent=ea(n),sn.appendChild(s)}),je=un.includes(e)?e:un[0],sn.value=je},su=(i,e,t="")=>{const n=Math.max(1,e),s=Math.max(0,Math.min(1,i/n)),r=Math.round(s*100);Ap&&(Ap.style.width=`${r}%`),Rp&&(Rp.textContent=`${r}%`),wp&&t&&(wp.textContent=t)},Yg=async()=>{const i=gT();try{const t=await(await fetch(`${i}/characters`)).json();if(t?.ok&&Array.isArray(t.data)&&t.data.length>0)return t.data}catch{}return["silentman","pumori","neoorphen","pezunalunar"]},rm=new Set,Ds=(i,e=6e3)=>new Promise(t=>{if(!i){t(!1);return}if(rm.has(i)){t(!0);return}const n=new Audio;let s=!1;const r=c=>{s||(s=!0,n.removeEventListener("canplaythrough",o),n.removeEventListener("loadedmetadata",o),n.removeEventListener("error",a),c&&rm.add(i),t(c))},o=()=>r(!0),a=()=>r(!1);n.preload="auto",n.addEventListener("canplaythrough",o,{once:!0}),n.addEventListener("loadedmetadata",o,{once:!0}),n.addEventListener("error",a,{once:!0}),n.src=i,n.load(),setTimeout(()=>r(!1),e)}),DT=async i=>{const e=await Ih(i);return await Ds(e,6e3)?!0:Ds(e,1e4)},NT=async()=>{ds&&ds.classList.remove("hidden"),Vn&&Vn.classList.add("hidden");const i=await Yg();jg(i),Jc(je);const e=[...un],t=2+e.length*2+1+eu.length+2+3+1;let n=0;const s=r=>{n+=1,su(n,t,r)};su(0,t,"Cargando tema pre-lobby..."),await Ds(Zg,1e4),s("Tema pre-lobby cargado"),Hi(),su(n,t,"Preparando catalogo..."),Kg(),s("Catalogo listo");for(let r=0;r<e.length;r+=1){const o=e[r];await $s(o),s(`Modelo: ${ea(o)}`)}for(let r=0;r<e.length;r+=1){const o=e[r];await DT(o),s(`Audio ataque: ${ea(o)}`)}await Ds(Vi,6e3),s("Audio base cargado");for(let r=0;r<eu.length;r+=1){const o=eu[r];await Ds(Ph(o),1e4),s(`Tema batalla: ${o}`)}await Ds(Ch,1e4),s("Audio lobby cargado"),await Ds(Jg,1e4),s("Audio lobby2 cargado"),await yc("mana"),s("Item mana cargado"),await yc("defensa"),s("Item defensa cargado"),await yc("vida"),s("Item vida cargado"),await Hh(),so();for(const r of L.remotePlayers.values())sa(r);s("Lobby listo"),ds&&ds.classList.add("hidden"),Vn&&Vn.classList.remove("hidden"),Hi()},UT=async()=>{const i=await Yg();jg(i),Jc(je),await $s(je),await Hh(),so();for(const e of L.remotePlayers.values())sa(e)},so=()=>{if(!Ke.scene)return;const i=sn.value||je;if(!i)return;Ke.model&&(Ke.scene.remove(Ke.model),Ke.model=null,Ke.mixer=null);const e=Fc.get(i);if(!e?.loaded||!e.scene){$s(i).then(a=>{a?.loaded&&(sn.value||je)===i&&so()});return}const t=qc(e.scene),n=new xn().setFromObject(t),s=n.getCenter(new C),r=n.getSize(new C);t.position.set(-s.x,-n.min.y,-s.z),Ke.scene.add(t),Ke.model=t,Ke.camera.position.set(0,Math.max(1.2,r.y*.55),Math.max(2.3,r.y*.95)),Ke.camera.lookAt(0,Math.max(.9,r.y*.45),0);const o=e.animationSet?.running||rs(e.animations||[],"running",["running"]);if(o){const a=new fh(t),c=a.clipAction(o);c.reset(),c.setLoop(oa,1/0),c.play(),Ke.mixer=a}},Kg=()=>{if(!vr||Ke.renderer)return;const i=new th,e=new qt(40,1,.1,100),t=new ph({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=vr.clientWidth||280,s=vr.clientHeight||220;t.setSize(n,s,!1),vr.appendChild(t.domElement);const r=new ig(12514815,1975838,.95);i.add(r);const o=new Gc(16777215,1);o.position.set(3.5,5,4),i.add(o),Ke.scene=i,Ke.camera=e,Ke.renderer=t,Ke.lastWidth=n,Ke.lastHeight=s,so()},$g=()=>{if(!Ke.renderer||!Ke.camera)return;const i=vr.clientWidth||280,e=vr.clientHeight||220;i===Ke.lastWidth&&e===Ke.lastHeight||(Ke.lastWidth=i,Ke.lastHeight=e,Ke.camera.aspect=i/e,Ke.camera.updateProjectionMatrix(),Ke.renderer.setSize(i,e,!1))},Sn=new Audio("/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3");Sn.preload="auto";Sn.loop=!1;Sn.volume=.24;const Mo=[],FT=8,Zg="/themes/pre-lobby.mp3",Ch="/themes/lobby.mp3",Jg="/lobby/2.mp3",Rd={battle1:"/themes/battle1.mp3",battle2:"/themes/battle2.mp3",battle3:"/themes/battle3.mp3"},Ph=i=>Rd[i]||Rd.battle1,di=new Audio(Zg);di.preload="auto";di.loop=!1;di.volume=.28;const hi=new Audio(Ch);hi.preload="auto";hi.loop=!0;hi.volume=.34;const zi=new Audio(Ph("battle1"));zi.preload="auto";zi.loop=!0;zi.volume=.38;let ta=!1,ks=!1,Cr=!1,Pr=!1,as=!1,ru="battle1";const Vi="/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3",OT=[".ogg",".mp3",".wav",".m4a",""],oc=new Map;let ou="";const om=140,au=6,cs=[],BT=24,kT=3e4,zT=15e3;let Oc=0,Po=null;const Qg=(i,e,t)=>{(i.getAttribute(t)||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute(t,e),i.load())},e0=()=>!L.joinedRoom&&ds&&!ds.classList.contains("hidden"),t0=()=>!L.joinedRoom&&Vn&&!Vn.classList.contains("hidden")&&(!ds||ds.classList.contains("hidden"))||vn(),VT=()=>vn()?Jg:Ch,n0=()=>!!(L.joinedRoom&&L.joinedRoom.room?.status==="in_game"),cu=()=>{!ks&&di.paused||(di.pause(),di.currentTime=0,ks=!1,as=!1)},ac=()=>{!Cr&&hi.paused||(hi.pause(),hi.currentTime=0,Cr=!1)},lu=()=>{!Pr&&zi.paused||(zi.pause(),zi.currentTime=0,Pr=!1)},HT=()=>{if(!ta||ks||!e0())return;ks=!0;const i=di.play();i&&typeof i.catch=="function"&&i.catch(()=>{ks=!1})},GT=()=>{if(!ta||Cr||!t0())return;Cr=!0;const i=hi.play();i&&typeof i.catch=="function"&&i.catch(()=>{Cr=!1})},WT=()=>{if(!ta||Pr||!n0())return;Pr=!0;const i=zi.play();i&&typeof i.catch=="function"&&i.catch(()=>{Pr=!1})},Hi=()=>{if(n0()){as=!1,cu(),ac(),WT();return}if(e0()){as=!1,lu(),ac(),HT();return}if(t0()){const i=VT();if((hi.getAttribute("data-lobby-src")||"")!==i&&(Qg(hi,i,"data-lobby-src"),Cr=!1),lu(),ks&&!di.ended){as=!0,ac();return}as=!1,cu(),GT();return}as=!1,lu(),cu(),ac()},Mc=i=>{const e=String(i||"").trim(),t=Rd[e]?e:"battle1";t!==ru&&(ru=t,Qg(zi,Ph(ru),"data-bgm-src"),Pr=!1,Hi())},da=()=>{const i=Math.max(0,Math.min(1,Ie.masterVolume));Sn.volume=.24*i*Ie.sfxVolume,di.volume=.28*i*Ie.musicVolume,hi.volume=.34*i*Ie.musicVolume,zi.volume=.38*i*Ie.musicVolume,ce.fov=Ie.fov,ce.updateProjectionMatrix(),Xs.fov=Ie.fov,Xs.updateProjectionMatrix(),L.showPerf=Ie.showPerfByDefault||L.showPerf,no()},XT=()=>{gd.value=String(Ie.mouseSensitivity),Sg.textContent=Ie.mouseSensitivity.toFixed(2),_d.value=String(Ie.masterVolume),bg.textContent=`${Math.round(Ie.masterVolume*100)}%`,xd.value=String(Ie.musicVolume),Eg.textContent=`${Math.round(Ie.musicVolume*100)}%`,vd.value=String(Ie.sfxVolume),Tg.textContent=`${Math.round(Ie.sfxVolume*100)}%`,yd.value=String(Math.round(Ie.fov)),wg.textContent=String(Math.round(Ie.fov)),Md.checked=!!Ie.showPerfByDefault},Zc=()=>{Ks=!1,Mg.classList.add("hidden"),vs()},i0=()=>{L.joinedRoom&&(Ks=!0,gn=!1,Rg(),Mg.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),vs())},s0=()=>{Ks?Zc():i0()},qT=i=>{const e=ua(i);return e?OT.map(t=>`/characters/${encodeURIComponent(e)}/attack_sound${t}`):[]},jT=i=>new Promise(e=>{const t=new Audio;let n=!1;const s=a=>{n||(n=!0,t.removeEventListener("canplaythrough",r),t.removeEventListener("loadedmetadata",r),t.removeEventListener("error",o),e(a))},r=()=>s(!0),o=()=>s(!1);t.preload="metadata",t.addEventListener("canplaythrough",r,{once:!0}),t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",o,{once:!0}),t.src=i,t.load(),setTimeout(()=>s(!1),900)}),Ih=async i=>{const e=ua(i);if(!e)return Vi;if(oc.has(e))return oc.get(e);const t=qT(e);for(let n=0;n<t.length;n+=1){const s=t[n];if(await jT(s))return oc.set(e,s),s}return oc.set(e,Vi),Vi},r0=(i,e)=>{(i.getAttribute("data-attack-src")||"")!==e&&(i.pause(),i.currentTime=0,i.src=e,i.setAttribute("data-attack-src",e),i.removeAttribute("data-fallback-applied"),i.load())},Jc=async i=>{const e=String(i||"").trim();if(e===ou&&Sn.getAttribute("data-attack-src"))return;ou=e;const t=await Ih(e);e===ou&&r0(Sn,t)},Lh=()=>{ta||(ta=!0,Hi())};window.addEventListener("pointerdown",Lh,{once:!0});window.addEventListener("keydown",Lh,{once:!0});window.addEventListener("touchstart",Lh,{once:!0,passive:!0});di.addEventListener("ended",()=>{ks=!1,as&&(as=!1,Hi())});const YT=()=>{const i=Sn.getAttribute("data-attack-src")||Sn.src||Vi,e=new Audio(i);if(e.preload="auto",e.loop=!1,e.volume=Sn.volume,Mo.length>=FT){const s=Mo.shift();s&&(s.pause(),s.currentTime=0)}Mo.push(e);const t=()=>{const s=Mo.indexOf(e);s>=0&&Mo.splice(s,1)};e.addEventListener("ended",t,{once:!0}),e.addEventListener("pause",t,{once:!0});const n=e.play();n&&typeof n.catch=="function"&&n.catch(()=>{t();const s=Sn.getAttribute("data-fallback-applied")==="1";i!==Vi&&!s&&(Sn.setAttribute("data-fallback-applied","1"),r0(Sn,Vi))})},KT=i=>{const e=i.distanceTo(ce.position);if(e>=om)return 0;const n=1-(Math.max(au,e)-au)/(om-au);return .02+Math.pow(Math.max(0,n),1.6)*.2},am=()=>{for(let i=0;i<cs.length;i+=1){const e=cs[i];e.pause(),e.currentTime=0}cs.length=0},cm=async(i,e="")=>{const t=KT(i);if(t<=.02)return;let n=Vi;e&&(n=await Ih(e));const s=new Audio(n||Vi);if(s.preload="auto",s.loop=!1,s.volume=t*Ie.masterVolume*Ie.sfxVolume,cs.length>=BT){const a=cs.shift();a&&(a.pause(),a.currentTime=0)}cs.push(s);const r=()=>{const a=cs.indexOf(s);a>=0&&cs.splice(a,1)};s.addEventListener("ended",r,{once:!0}),s.addEventListener("pause",r,{once:!0});const o=s.play();o&&typeof o.catch=="function"&&o.catch(()=>{r()})},Ir=new Qx;new Ye(0,0);const $T=new zc(.028,.028,1,10,1,!0),ZT=new Ut({color:10682286,transparent:!0,opacity:1,blending:Xi,depthWrite:!1}),JT=new Mi(.11,8,8),QT=new Ut({color:8257426,transparent:!0,opacity:.9}),zs=[],Lr=[],ko=[],zo=[],Vo=[],Ho=[],fi=[],ew=24,tw=new Mi(.045,6,6),Vs=[],nw=420,iw=680,sw=980,uu=35,lm=165,So=new C,um=new C,Sc=new C,Fs=new C,dm=new C,hm=new C,rw=new C(0,1,0),o0=i=>{const e=Go();if(!e||!i)return kn;const t=i.x-e.position.x,n=i.y-e.position.y,s=i.z-e.position.z,r=Math.sqrt(t*t+n*n+s*s);if(r<=uu)return kn;if(r>=lm)return kn*.35;const o=(r-uu)/(lm-uu);return kn*(1-o*.65)},ow=()=>Math.max(120,Math.round(nw*(.45+kn*.55))),aw=()=>Math.max(180,Math.round(iw*(.4+kn*.6))),Je={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,Space:!1};let Hs=!1,Tn=0,An=0;const Dh=9,cw=24,lw=18,uw=.45,dw=.92,mn=1.7,a0=6.8,hw=18;let gn=!1,du=0;const fw=8,pw=1,Cd=55,mw=19,fm=260,gw=.018,_w=.008,xw=1.2,vw=2.25,yw=1.2,At=100,ha=100,Qc=0,_s=30,fa=120,_n=100,pm=Math.ceil(_n/3),Mw=12,Sw=50,bw=6e4,Ew=12,Tw=20,ww=30,Aw=6e4,Rw=25,Cw=20,Pw=6e4,Iw=At/3,Lw=18,pa=.5,ma=.92,Dw=.18,Nw=-.45,hu=2.45,Pd=.9,mm=.09,Uw=320;let Nh=0,jt=At,xi=Qc,Gi=_s,pi=fa-_s,Ft=_n,mi=Math.round(_n),en=0,ii=!1,Dr=0,Ot=!1,oi=0,Et=!1,Ki=0,Gn=Yi(),Xr=!1,Uh=0,Nr=0,fu=0,yr=0,na=0,Ur=0,c0=0,l0=0,Fh=0,Oh=0,u0=0;const gm=new Wn(0,0,0,"YXZ"),gr=new C,pu=new C,$n=new C,Mt=new C,_m=new C,Fw=new ev,Bh=Math.PI,Ow=170,Bw=160,kw=4.8,zw=2.4,Vw=9.5,Hw=.55,Gw=.32,Ww=140,d0=220,Xw=()=>Date.now(),qw=new kc(.2,.18,4,8),jw=new Xn({color:5082623,emissive:1719696,emissiveIntensity:.85,roughness:.35,metalness:.4}),Mr=[],Yw=new ch(.32,0),Kw=new Xn({color:4584703,emissive:1006976,emissiveIntensity:.9,roughness:.25,metalness:.3}),Sr=[],br=[],cc=i=>{let e=Number(i)>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}},$w=i=>{const e=String(i||"");let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0||1},Zw=(i,e,t=0)=>!0,xm=(i,e,t=0)=>({x:i,z:e}),Jw=()=>{for(let i=nu.length-1;i>=0;i-=1){const e=nu[i];e&&(xe.remove(e),e.traverse(t=>{t.isMesh&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>s.dispose()))}))}nu.length=0,Td.length=0},ei=i=>{Bo=Math.min(1,Bo+.5),i&&TT.copy(i)},h0=i=>{const e=Number(i);if(!Number.isFinite(e)||im===e)return;im=e;for(let o=fs.length-1;o>=0;o-=1){const a=fs[o];xe.remove(a),a.geometry.dispose(),a.material.dispose()}fs.length=0,Nc.length=0,Jw();for(let o=Mr.length-1;o>=0;o-=1)xe.remove(Mr[o].mesh);Mr.length=0;for(let o=Sr.length-1;o>=0;o-=1)xe.remove(Sr[o].mesh);Sr.length=0;for(let o=br.length-1;o>=0;o-=1)xe.remove(br[o].mesh);br.length=0;const t=cc(e^2654435769);for(let o=0;o<220;o+=1){const a=1+t()*3,c=1+t()*3,l=3+t()*24,u=new tt(new Ys(a,l,c),yT.clone());u.position.set((t()-.5)*220,l/2,(t()-.5)*220),u.userData.hp=1+Math.floor(t()*3),xe.add(u),fs.push(u),Nc.push({minX:u.position.x-a/2,maxX:u.position.x+a/2,minZ:u.position.z-c/2,maxZ:u.position.z+c/2})}const n=cc(e^2246822507);for(let o=0;o<Sw;o+=1){const a=iu("mana",()=>new tt(qw,jw.clone())),c=(n()-.5)*180,l=(n()-.5)*180,u=.35;a.position.set(c,u,l),xe.add(a),Mr.push({mesh:a,baseY:u,phase:n()*Math.PI*2,active:!0,respawnAt:0})}const s=cc(e^3266489909);for(let o=0;o<ww;o+=1){const a=iu("defensa",()=>new tt(Yw,Kw.clone())),c=(s()-.5)*180,l=(s()-.5)*180,u=.6;a.position.set(c,u,l),xe.add(a),Sr.push({mesh:a,baseY:u,phase:s()*Math.PI*2,active:!0,respawnAt:0})}const r=cc(e^668265263);for(let o=0;o<Cw;o+=1){const a=iu("vida",()=>new tt(new lh(.34,0),new Xn({color:9502623,emissive:2985794,emissiveIntensity:.8,roughness:.32,metalness:.25}))),c=(r()-.5)*180,l=(r()-.5)*180,u=.55;a.position.set(c,u,l),xe.add(a),br.push({mesh:a,baseY:u,phase:r()*Math.PI*2,active:!0,respawnAt:0})}},el=i=>String(i||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,""),ro=i=>{const e=el(i);return e==="silentman"||e==="silenmant"},ga=i=>el(i)==="pumori",_a=i=>el(i)==="neoorphen",xa=i=>{const e=el(i);return e==="pezunalunar"||e==="pezuanalunar"},f0=i=>ro(i)||_a(i)||xa(i)||ga(i),oo=i=>ro(i)||ga(i)||_a(i)||xa(i),Qw=()=>oo(je)?pw:1/fw,p0=()=>Math.max(0,Oc-performance.now()),m0=i=>{const e=Number(i);if(!Number.isFinite(e)||e<=0){Oc=0;return}Oc=performance.now()+e},kh=(i=!1)=>{if(!Zl)return;const e=!!L.joinedRoom;if(!f0(je)){(i||Po!==-1)&&(Zl.textContent="Especial R: -",Po=-1),xo&&xo.classList.add("hidden");return}const t=p0(),n=t>0?Math.ceil(t/1e3):0;if(!(!i&&Po===n)&&(Po=n,Zl.textContent=n>0?`Especial R: ${n}s`:"Especial R: LISTO",xo&&(e?xo.classList.remove("hidden"):xo.classList.add("hidden")),Dp&&(Dp.textContent=n>0?`${n}s`:"LISTO"),Np)){const s=ro(je)?zT:kT,r=Math.max(0,Math.min(1,t/s));Np.style.width=`${Math.round((1-r)*100)}%`}};h0(1);const Nt=()=>{const i=oo(je),e=i?Math.round(Ft):Gi,t=i?_n:pi,n=i?"Mana":"Balas",s=Math.round(jt),r=Math.round(xi);if(FE.textContent=`Vida: ${s}`,OE.textContent=`Escudo: ${r}`,BE.textContent=`${n}: ${e} / ${t}${!i&&ii?" (recargando...)":""}`,kh(!0),XE.textContent=`Kills: ${Nh}`,kE.textContent=`${s}`,zE.textContent=`${r}`,VE.textContent=`${e} / ${t}`,HE.style.width=`${Math.max(0,Math.min(100,jt/At*100))}%`,GE.style.width=`${Math.max(0,Math.min(100,xi/ha*100))}%`,WE.style.height=`${Math.max(0,Math.min(100,e/t*100))}%`,!L.joinedRoom){Bp.textContent="Sala: -",kp.textContent="Estado: waiting",zp.textContent="Clima: -",Vp.textContent="Jugadores: -",Jl.classList.add("hidden"),Jp();return}const o=L.joinedRoom.room,a=L.joinedRoom.players.map(c=>c.name).join(", ");if(Bp.textContent=`Sala: ${o.name} (${o.id})`,kp.textContent=`Estado: ${o.status}`,zp.textContent=`Clima: ${uT(o.weather)}`,Vp.textContent=`Jugadores: ${a||"-"}`,Ng()){Jl.classList.remove("hidden");const c=Number(L.joinedRoom.players?.length||0),l=String(o.mode||"freeforall").toLowerCase(),u=Number(o.requiredPlayers||0),h=l!=="versusmatch"||u>0&&c===u;_g.disabled=o.status==="in_game"||!h,xg.disabled=o.status!=="in_game"}else Jl.classList.add("hidden");Dg(),Mh(),no(),g0(),Jp()},vi=()=>{if(!Et||!L.joinedRoom||!Jo()){Pp.classList.add("hidden");return}UE.textContent=String(Gn),Pp.classList.remove("hidden")},Os=()=>{Xr=!1,Uh=0,Nr=0,gg.classList.add("hidden")},eA=(i,e)=>{const t=String(i?.name||"Desconocido"),n=String(i?.character||"Sin personaje"),s=bt(i?.team),r=Math.max(1,Number(e)||10);Xr=!0,Uh=performance.now()+r*1e3,Nr=r,s==="red"?Kl.textContent="Ganador: Equipo Rojo":s==="blue"?Kl.textContent="Ganador: Equipo Azul":Kl.textContent=`Ganador: ${t} (${n})`,pd.textContent=String(Nr),gg.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),gn=!1,Et&&(Et=!1,Ki=0,Gn=Yi(),vi())},g0=(i=0)=>{if(!$l)return;const e=!!(L.joinedRoom&&L.joinedRoom.room.status==="in_game"),n=1-Math.max(0,Math.min(1,jt/At));let s=e&&!Et?n*.62:0;e||(yr=0);const r=i>0?Math.min(1,i*4.8):1;fu+=(s-fu)*r,yr=Math.max(0,yr-(i>0?i*1.7:0));const o=e&&!Et?(Math.sin(performance.now()*.01)+1)*.5*n*.22:0,a=Math.max(0,Math.min(.92,fu+o+yr));$l.style.opacity=a.toFixed(3),$l.style.setProperty("--bleed-inner",`${20+n*24}%`)},tA=(i=!1)=>{const e=performance.now();c0=e+140,i&&(l0=e+220)},nA=()=>{Fh=performance.now()+320},iA=i=>{if(!i||!L.remotePlayers.has(i))return;const e=L.remotePlayers.get(i);if(!e?.group)return;const t=e.group.position.x-ce.position.x,n=e.group.position.z-ce.position.z;u0=(Math.atan2(t,-n)-Tn)*180/Math.PI,Oh=performance.now()+520},sA=()=>{if(!vo)return;const i=performance.now(),e=Math.sqrt(Mt.x*Mt.x+Mt.z*Mt.z),t=Math.min(1,e/Math.max(.001,Dh)),n=Ot?.85:0,s=5+t*7.5+n*6+na*10+Ur*6.5;vo.style.setProperty("--crosshair-gap",`${s.toFixed(2)}px`),vo.classList.toggle("hit",i<=c0),vo.classList.toggle("headshot",i<=l0),vo.classList.toggle("kill",i<=Fh)},rA=()=>{if(!tc)return;if(!(performance.now()<=Oh)){tc.classList.remove("visible");return}tc.classList.add("visible"),tc.style.setProperty("--damage-angle",`${u0.toFixed(1)}deg`)},bc=()=>{hA(),jt=At,xi=Qc,Gi=_s,pi=fa-_s,Ft=_n,mi=Math.round(_n),en=0,Oc=0,Po=null,ii=!1,Dr=0,Ot=!1,oi=0,Nh=0,Et=!1,Gn=Yi(),Ki=0,Os(),gn=!1,Fh=0,Oh=0,vi(),Nt()},zh=()=>{oo(je)||ii||Gi>=_s||pi<=0||!$t()||(ii=!0,Dr=yw,Nt())},Id=()=>!$t()||!f0(je)?!1:p0()>0?(kh(!0),!0):xa(je)?(_t({type:"player_special_lunar_rain"}),!0):ro(je)?(_t({type:"player_special_silent_cone"}),!0):_a(je)?(_t({type:"player_special_neoorphen_meteor"}),!0):(ga(je)&&_t({type:"player_special_pumori_orbit"}),!0),vm=()=>{gs(),$t()&&!Ot&&ce.position.y<=mn+.001&&(Ot=!0,oi=a0,qs(!0))},oA=()=>{jt=At,xi=Qc,Gi=_s,pi=fa-_s,Ft=_n,mi=Math.round(_n),en=0,ii=!1,Dr=0,Ot=!1,oi=0,Et=!1,Gn=Yi(),Ki=0,vi(),_t({type:"player_respawn"}),Nt()},_0=()=>{if(!Jo())return;Et=!0,gn=!1,Ot=!1,oi=0;const i=Yi();Ki=performance.now()+i*1e3,Gn=i,document.pointerLockElement&&document.exitPointerLock(),vi()},ym=(i,e,t)=>{const n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return i+n*t},rs=(i,e,t)=>{const n=i.find(s=>s.name===e);return n||i.find(s=>{const r=String(s.name||"").toLowerCase();return t.some(o=>r.includes(o))})},Vh=i=>{const e=String(i||"").trim();if(!e)return un[0]||je||"silentman";if(un.includes(e))return e;const t=e.toLowerCase(),n=un.find(s=>ea(s).toLowerCase()===t);return n||e},ai=(i,e)=>{if(!i.actions)return;const t=i.actions[e]||i.actions.move||null;t&&i.currentAnimation!==e&&(Object.values(i.actions).forEach(n=>{!n||n===t||n.fadeOut(.12)}),e==="death"?(t.reset(),t.setLoop(jd,1),t.clampWhenFinished=!0,t.fadeIn(.08).play()):(t.reset(),t.setLoop(oa,1/0),t.clampWhenFinished=!1,t.fadeIn(.1).play()),i.currentAnimation=e)},ia=i=>{i.actions&&ai(i,"idle")},ls=i=>{if(!Le.actions)return;const e=Le.actions[i]||Le.actions.move||null;e&&Le.currentAnimation!==i&&(Object.values(Le.actions).forEach(t=>{!t||t===e||t.fadeOut(.1)}),i==="death"||i==="funny"?(e.reset(),e.setLoop(jd,1),e.clampWhenFinished=!0,e.fadeIn(.08).play()):(e.reset(),e.setLoop(oa,1/0),e.clampWhenFinished=!1,e.fadeIn(.08).play()),Le.currentAnimation=i)},gs=()=>{Le.funnyUntil<=0||(Le.funnyUntil=0,Le.currentAnimation==="funny"&&ls("idle"))},x0=i=>{const e=new pn,t=qc(i.scene),n=new xn().setFromObject(t),s=Number.isFinite(n.min.y)?n.min.y:0;t.position.y-=s,e.add(t);const r=new fh(t),o=i.animations||[],a=i.animationSet?.idle||rs(o,"idle",["idle"]),c=i.animationSet?.running||rs(o,"running",["running"]),l=i.animationSet?.jump||rs(o,"jump",["jump"]),u=i.animationSet?.funny||rs(o,"funny",["funny"]),h=i.animationSet?.attack||rs(o,"attack",["attack"]),d=i.animationSet?.dead||rs(o,"dead",["dead"]),f={idle:a?r.clipAction(a):null,move:c?r.clipAction(c):null,jump:l?r.clipAction(l):null,funny:u?r.clipAction(u):null,shoot:h?r.clipAction(h):null,death:d?r.clipAction(d):null};return xe.add(e),{group:e,avatarRoot:t,mixer:r,actions:f,body:null,head:null}},aA=()=>{Le.teamOutline&&il(Le.teamOutline),Le.group&&xe.remove(Le.group),Le.group=null,Le.mixer=null,Le.actions=null,Le.currentAnimation="",Le.funnyUntil=0,Le.teamOutline=null},Hh=async()=>{const i=sn.value||je;if(!i)return;const e=`${i}`;Le.loadingKey=e;const t=await $s(i);if(!t?.loaded||Le.loadingKey!==e)return;aA();const n=x0(t);Le.group=n.group,Le.mixer=n.mixer,Le.actions=n.actions,Le.currentAnimation="",Le.shootUntil=0,Le.funnyUntil=0,ra(),ls("idle")},cA=i=>{if(!Le.group)return;Le.teamOutline&&(Le.teamOutline.visible=Ug());const e=!!(L.joinedRoom&&Rr&&!Et);if(Le.group.visible=e,!e)return;Le.group.position.set(ce.position.x,ce.position.y-mn,ce.position.z),Le.group.rotation.y=Tn+Bh;const t=performance.now(),n=Je.KeyW||Je.KeyA||Je.KeyS||Je.KeyD;Le.funnyUntil>t?ls("funny"):Ot?ls("jump"):Le.shootUntil>t?ls("shoot"):ls(n?"move":"idle"),Le.mixer&&Le.mixer.update(i)},lA=i=>{const e=new pn,t=new Xn({color:i?4835839:6815591,emissive:i?731702:1003290,emissiveIntensity:.6,roughness:.6}),n=t.clone(),s=new tt(new kc(.35,.9,4,8),t),r=new tt(new Mi(.22,12,12),n);return s.position.y=1.15,r.position.y=1.95,e.add(s),e.add(r),xe.add(e),{group:e,avatarRoot:e,body:s,head:r,mixer:null,actions:null}},sa=async i=>{const e=Vh(i.character);if(!e)return;const t=await $s(e);if(!t?.loaded||!L.remotePlayers.has(i.id))return;const n=L.remotePlayers.get(i.id);if(!n)return;n.character=e;const s=n.group.position.clone(),r=n.group.rotation.y;tl(n);const o=x0(t);o.group.position.copy(s),o.group.rotation.y=r,n.group=o.group,n.avatarRoot=o.avatarRoot,n.body=o.body,n.head=o.head,n.mixer=o.mixer,n.actions=o.actions,n.currentAnimation=null,n.animationUntil=0,n.isDead=!1,n.isJumping=!1,n.deadAt=0,qh(n);const a=T0();n.group.add(a.holder),n.healthBar=a,Gs(n),ia(n)},tl=i=>{i.teamOutline&&(il(i.teamOutline),i.teamOutline=null),i.healthBar&&(i.healthBar.holder?.parent&&i.healthBar.holder.parent.remove(i.healthBar.holder),i.healthBar.bg&&(i.healthBar.bg.geometry.dispose(),i.healthBar.bg.material.dispose()),i.healthBar.fill&&(i.healthBar.fill.geometry.dispose(),i.healthBar.fill.material.dispose()),i.healthBar.text&&(i.healthBar.text.geometry.dispose(),i.healthBar.text.material.dispose()),i.healthBar.textTexture&&i.healthBar.textTexture.dispose(),i.healthBar=null),xe.remove(i.group),i.body&&(i.body.geometry.dispose(),i.body.material.dispose()),i.head&&(i.head.geometry.dispose(),i.head.material.dispose())},uA=(i,e,t)=>{const n=lA(e),s=Vh(t);L.remotePlayers.set(i,{id:i,name:"Player",character:s,group:n.group,avatarRoot:n.avatarRoot,body:n.body,head:n.head,mixer:n.mixer,actions:n.actions,currentAnimation:null,animationUntil:0,isDead:!1,health:At,isJumping:!1,deadAt:0,targetPosition:new C(0,0,0),targetYaw:0,targetPitch:0,netSnapshots:[],netInitialized:!1,smoothedMoveSpeed:0,movingUntil:0,lastAnimationAt:0,healthBar:null,team:null,teamOutline:null});const r=L.remotePlayers.get(i),o=T0();r.group.add(o.holder),r.healthBar=o,Gs(r),r.character||(r.character=un[0]||je||"silentman"),qh(r),sa(r)},Ld=i=>{if(L.self&&i.id===L.self.id)return;L.remotePlayers.has(i.id)||uA(i.id,L.joinedRoom?.room?.hostId===i.id,i.character);const e=L.remotePlayers.get(i.id);i.name&&(e.name=String(i.name)),e.team=bt(i.team),qh(e);const n=typeof i.character=="string"&&i.character.length>0?Vh(i.character):e.character;n!==e.character&&(e.character=n||e.character,sa(e)),e.mixer||(e.character||(e.character=un[0]||je||"silentman"),e.character&&sa(e));const s=i.state?.position||{x:0,y:mn,z:0},r=i.state?.rotation||{yaw:0,pitch:0},o=!!i.state?.moving,a=Number.isFinite(Number(i.ts))?Number(i.ts):Date.now();e.isJumping=!!i.state?.jumping,o&&(e.movingUntil=Math.max(Number(e.movingUntil||0),performance.now()+d0)),Number.isFinite(Number(i.health))&&(e.health=Math.max(0,Math.min(At,Math.round(Number(i.health)))),Gs(e)),typeof i.alive=="boolean"&&(!i.alive&&!e.isDead?(e.isDead=!0,e.deadAt=performance.now(),e.animationUntil=0,ai(e,"death"),Gs(e)):i.alive&&e.isDead&&(e.isDead=!1,e.deadAt=0,e.animationUntil=0,ia(e),Number.isFinite(Number(i.health))||(e.health=At),Gs(e)));const l={ts:a,x:s.x,y:s.y-mn,z:s.z,yaw:r.yaw,pitch:r.pitch,jumping:!!i.state?.jumping,moving:o};e.netSnapshots.push(l),e.netSnapshots.length>32&&e.netSnapshots.splice(0,e.netSnapshots.length-32),e.netInitialized||(e.group.position.set(l.x,l.y,l.z),e.targetPosition.set(l.x,l.y,l.z),e.group.rotation.y=l.yaw+Bh,e.targetYaw=l.yaw,e.targetPitch=l.pitch,e.smoothedMoveSpeed=0,e.netInitialized=!0)},dA=i=>{const e=new Set;i.players.forEach(t=>{L.self&&t.id===L.self.id||(e.add(t.id),Ld(t))});for(const[t,n]of L.remotePlayers.entries())e.has(t)||(tl(n),L.remotePlayers.delete(t))},Mm=()=>{for(const i of L.remotePlayers.values())tl(i);L.remotePlayers.clear()},Rn=(i,e,t=10682286,n={})=>{Fs.subVectors(e,i);const s=Fs.length();if(s<=1e-4)return;const r=Sc.copy(i).add(e).multiplyScalar(.5),o=o0(r);if(o<.999&&Math.random()>o)return;const a=Number.isFinite(n.radiusScale)?n.radiusScale:1,c=Number.isFinite(n.life)?n.life:.14,l=Number.isFinite(n.opacity)?n.opacity:1,u=ZT.clone();u.color=new Pe(t),u.opacity=l;const h=new tt($T,u);if(h.position.copy(r),h.quaternion.setFromUnitVectors(rw,Fs.multiplyScalar(1/s)),h.scale.set(a,s,a),h.userData.life=c,xe.add(h),zs.push(h),zs.length>ow()){const d=zs.shift();d&&(xe.remove(d),d.material.dispose())}},Dd=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new C().crossVectors(r,new C(0,1,0));o.lengthSq()<1e-4?o=new C(1,0,0):o.normalize();const a=new C().crossVectors(o,r).normalize(),c=ki(t.team),l=new tt(new Mi(.22,14,14),new Ut({color:c.impactA,transparent:!0,opacity:.96,blending:Xi,depthWrite:!1}));l.position.copy(i),xe.add(l),ko.push({mesh:l,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:85,phase:Math.random()*Math.PI*2,spin:Math.PI*15+Math.random()*Math.PI*6,radius:.72,radiusFalloff:.22,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:c.impactA,b:c.impactB,tracer:c.tracer}})},v0=(i=1,e=1,t=null)=>{const n=ki(t),s=new pn,r=new tt(new Ys(.46*i,.26*i,.22*i),new Ut({color:n.impactA,transparent:!0,opacity:Math.max(.1,Math.min(1,.98*e)),blending:Xi,depthWrite:!1})),o=new tt(new zc(.05*i,.05*i,.7*i,10),new Ut({color:n.tracer,transparent:!0,opacity:Math.max(.1,Math.min(1,.95*e)),blending:Xi,depthWrite:!1}));return o.rotation.z=Math.PI/2,s.add(r),s.add(o),s},y0=(i,e,t={})=>{const n=e.clone().sub(i);if(n.length()<=1e-4)return;const r=n.clone().normalize();let o=new C().crossVectors(r,new C(0,1,0));o.lengthSq()<1e-4?o=new C(1,0,0):o.normalize();const a=new C().crossVectors(o,r).normalize(),c=ki(t.team),l=v0(1,1,t.team);l.position.copy(i),xe.add(l),zo.push({mesh:l,prevPos:i.clone(),pos:i.clone(),velocity:r.clone().multiplyScalar(34).add(a.clone().multiplyScalar(7.2)),origin:i.clone(),right:o,up:a,traveledDistance:0,spin:(Math.random()>.5?1:-1)*(Math.PI*6.5+Math.random()),phase:Math.random()*Math.PI*2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:c.impactA,b:c.impactB,tracer:c.tracer}})},qr=i=>{const e=String(i||"");for(let t=fi.length-1;t>=0;t-=1){const n=fi[t];if(n.ownerId===e){for(let s=0;s<n.hammers.length;s+=1){const r=n.hammers[s],o=r?.mesh;o&&(r.disposed||(xe.remove(o),o.traverse(a=>{a.isMesh&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),r.disposed=!0))}fi.splice(t,1)}}},hA=()=>{for(let i=fi.length-1;i>=0;i-=1)qr(fi[i]?.ownerId)},M0=i=>{const e=String(i||"");if(!e)return null;if(L.self&&e===L.self.id)return ce.position.clone();const t=L.remotePlayers.get(e);return t?.group?t.group.position.clone():null},fA=(i,e)=>{const t=String(i||"");if(!t||(qr(t),!M0(t)))return;const s=performance.now(),r=[],o=Math.max(500,Number(e)||1e4),a=wo(t);fi.push({ownerId:t,team:a,hammers:r,createdAt:s,endAt:s+o,spawnIntervalMs:220,nextSpawnAt:s,spawnCount:0,maxOrbitRadius:22,maxActiveHammers:28,phase:Math.random()*Math.PI*2})},pA=(i,e=null)=>{if(!i?.mesh||i.disposed)return;const t=i.mesh;if(xe.remove(t),t.traverse(n=>{n.isMesh&&(n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose())}),i.disposed=!0,t.visible=!1,e){const n=Ct(e,16773830),s=Ct(e,10154239);n&&(n.scale.setScalar(1.9),n.userData.life=.28),s&&(s.scale.setScalar(1.45),s.userData.life=.24)}},Nd=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new C().crossVectors(r,new C(0,1,0));o.lengthSq()<1e-4?o=new C(1,0,0):o.normalize();const a=new C().crossVectors(o,r).normalize(),c=ki(t.team),l=new tt(new Mi(.3,16,16),new Ut({color:c.tracer,transparent:!0,opacity:.9,blending:Xi,depthWrite:!1}));l.position.copy(i),xe.add(l),Vo.push({mesh:l,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:60,phase:Math.random()*Math.PI*2,spin:Math.PI*9+Math.random()*Math.PI*3,waveAmpA:1.05,waveAmpB:.42,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:c.impactA,b:c.impactB,tracer:c.tracer}})},Ud=(i,e,t={})=>{const n=e.clone().sub(i),s=n.length();if(s<=1e-4)return;const r=n.clone().normalize();let o=new C().crossVectors(r,new C(0,1,0));o.lengthSq()<1e-4?o=new C(1,0,0):o.normalize();const a=new C().crossVectors(o,r).normalize(),c=ki(t.team),l=new tt(new Mi(.22,16,16),new Ut({color:c.impactA,transparent:!0,opacity:.96,blending:Xi,depthWrite:!1}));l.position.copy(i),xe.add(l),Ho.push({mesh:l,start:i.clone(),end:e.clone(),prevPos:i.clone(),pos:i.clone(),dir:r,right:o,up:a,distance:s,traveled:0,speed:80,phase:Math.random()*Math.PI*2,spin:Math.PI*10+Math.random()*Math.PI*4,waveAmpA:.4,waveAmpB:.2,trailTimer:0,source:t.source==="remote"?"remote":"local",ownerId:String(t.ownerId||""),colors:{a:c.impactA,b:c.impactB,tracer:c.tracer}})},Ct=(i,e=8257426)=>{const t=o0(i);if(t<.999&&Math.random()>t||Lr.length>=aw())return null;const n=new tt(JT,QT.clone());return n.material.color=new Pe(e),n.position.copy(i),n.userData.life=.26,xe.add(n),Lr.push(n),n},jr=(i,e,t,n)=>{So.subVectors(e,i);const s=So.length();if(s<=1e-4)return null;So.multiplyScalar(1/s),um.subVectors(t,i);const r=um.dot(So);return r<0||r>s?null:(Sc.copy(So).multiplyScalar(r).add(i),Sc.distanceToSquared(t)<=n*n?Sc.clone():null)},va=(i,e,t=.2)=>{Fs.subVectors(e,i);const n=Fs.length();if(n<=1e-4)return null;Fs.multiplyScalar(1/n),Ir.set(i,Fs),Ir.far=n+t;const s=Ir.intersectObjects(fs,!1);return s.length>0?s[0].point.clone():null},ya=(i,e)=>{dm.set(ce.position.x,ce.position.y+Dw,ce.position.z),hm.set(ce.position.x,ce.position.y+Nw,ce.position.z);const t=jr(i,e,dm,pa);if(t)return{point:t,headshot:!0};const n=jr(i,e,hm,ma);return n?{point:n,headshot:!1}:null},nl=(i,e)=>{},mA=i=>{if(!L.self)return;const e=i.players.find(s=>s.id===L.self.id);if(!e)return;Le.team=bt(e.team),ra();const t=e.state?.position,n=e.state?.rotation;t&&(ce.position.set(t.x,t.y,t.z),A0(),Ot=!!e.state?.jumping,!Ot&&ce.position.y<=mn+.001&&(oi=0)),n&&(Tn=n.yaw,An=n.pitch,Ma()),Nh=Number.isFinite(e.kills)?e.kills:0,Number.isFinite(e.health)&&(jt=Math.max(0,Math.min(At,Number(e.health)))),Number.isFinite(e.shield)&&(xi=Math.max(0,Math.min(ha,Math.round(e.shield)))),Number.isFinite(e.mana)&&(Ft=Math.max(0,Math.min(_n,Math.round(e.mana))),mi=Math.round(Ft)),Number.isFinite(Number(e.pendingHealthRegen))&&(en=Math.max(0,Number(e.pendingHealthRegen))),Number.isFinite(Number(e.lunarRainCooldownMs))&&m0(Number(e.lunarRainCooldownMs)),Bd(),e.alive===!1&&!Et&&Jo()&&_0(),e.alive===!0&&Et&&(Et=!1,Ki=0,Gn=Yi(),vi())},gA=i=>{if(!L.self||!i?.players)return;const e=i.players.find(t=>t.id===L.self.id);e&&(Le.team=bt(e.team),ra())},Sm=(i,e={})=>{const t=!L.joinedRoom;t&&bc(),L.joinedRoom=i;const n=Number.isFinite(i.room?.mapSeed)?i.room.mapSeed:$w(i.room?.id);h0(n),dA(i),gA(i),Fo(i.room?.weather),Mc(i.room?.battleTheme),(e.applyOwnState||t)&&mA(i);const s=i.room.status==="in_game"||i.room.status==="cooldown";Uo(s),_c(),Fg(i.room),Ao(),i.room.status!=="cooldown"&&Os(),Oo(),Nt()},S0=()=>{const i=mT(),e=new WebSocket(i);L.ws=e,Xl.textContent=`Conectando a ${i}`,e.addEventListener("open",()=>{Xl.textContent="Conectado",Us(),_t({type:"list_rooms"})}),e.addEventListener("message",t=>{let n;try{n=JSON.parse(t.data)}catch{Us("Respuesta invalida del servidor");return}if(n.ok===!1&&n.error){Us(n.error.message||"Error del servidor");return}if(n.type==="connected"){L.self=n.data.player,mh.value=L.self.name,L.self.character&&un.includes(L.self.character)&&(je=L.self.character,sn.value=L.self.character),Jc(L.self.character||je),L.rooms=n.data.rooms||[],so(),bd(),Ao();return}if(n.type==="rooms_list"){L.rooms=n.data||[],bd();return}if(n.type==="room_joined"){Sm(n.data,{applyOwnState:!0});return}if(n.type==="room_state"){Sm(n.data);return}if(n.type==="left_room"){L.joinedRoom=null,L.showScoreboard=!1,Li=null,L.latencyMs=null,Mm(),Uo(!1),_c(),am(),Fo("night"),Mc("battle1"),bc(),Os(),Le.team=null,ra(),Ui.length=0,Zo(),Nt(),Ao(),Oo(),Hi();return}if(n.type==="pong"){const s=String(n.data?.probeId||"");Li&&s===Li.id&&(L.latencyMs=performance.now()-Li.sentAt,Li=null,no());return}if(n.type==="player_joined"){n.data?.player&&Ld(n.data.player);return}if(n.type==="player_left"){const s=n.data?.playerId;qr(s),s&&L.remotePlayers.has(s)&&(tl(L.remotePlayers.get(s)),L.remotePlayers.delete(s));return}if(n.type==="player_move"){const{playerId:s,position:r,rotation:o,character:a,jumping:c,moving:l,ts:u}=n.data||{};if(!s||L.self&&s===L.self.id)return;Ld({id:s,ts:u,character:a,state:{position:r,rotation:o,jumping:c,moving:l}});return}if(n.type==="player_shoot"){const s=n.data;if(!s)return;const r=s.playerId?L.remotePlayers.get(s.playerId):null,o=s.character||r?.character||"",a=bt(r?.team||wo(s.playerId)),c=ki(a),l=ro(o),u=ga(o),h=_a(o),d=xa(o);if(s.playerId&&L.remotePlayers.has(s.playerId)){const y=L.remotePlayers.get(s.playerId);y.isDead||(ai(y,"shoot"),y.animationUntil=performance.now()+420)}const f=new C(s.origin.x,s.origin.y,s.origin.z),m=new C(s.direction.x,s.direction.y,s.direction.z).normalize(),_=s.distance||100,p=f.clone().add(m.clone().multiplyScalar(_)).clone();l?(Dd(f,p,{source:"remote",ownerId:s.playerId,team:a}),ei(f)):u?(y0(f,p,{source:"remote",ownerId:s.playerId,team:a}),ei(f)):h?(Nd(f,p,{source:"remote",ownerId:s.playerId,team:a}),ei(f)):d?(Ud(f,p,{source:"remote",ownerId:s.playerId,team:a}),ei(f)):(Rn(f,p,c.tracer),Ct(p,c.impactB)),cm(f,o);return}if(n.type==="special_lunar_rain_wave"){const s=n.data||{},r=String(s.playerId||""),o=wo(r),a=ki(o),c=Array.isArray(s.strikes)?s.strikes:[];for(let l=0;l<c.length;l+=1){const u=c[l]||{},h=u.start||{},d=u.impact||{};if(!Number.isFinite(Number(h.x))||!Number.isFinite(Number(h.y))||!Number.isFinite(Number(h.z))||!Number.isFinite(Number(d.x))||!Number.isFinite(Number(d.y))||!Number.isFinite(Number(d.z)))continue;const f=new C(Number(h.x),Number(h.y),Number(h.z)),m=new C(Number(d.x),Number(d.y),Number(d.z));Ud(f,m,{source:"local",ownerId:r,team:o}),Ct(m,Math.random()>.5?a.impactA:a.impactB)}return}if(n.type==="special_silent_cone"){const s=n.data||{},r=String(s.playerId||""),o=s.origin||{},a=Array.isArray(s.rays)?s.rays:[];if(!r||!Number.isFinite(Number(o.x))||!Number.isFinite(Number(o.y))||!Number.isFinite(Number(o.z)))return;const c=new C(Number(o.x),Number(o.y),Number(o.z)),l=L.remotePlayers.get(r),u=wo(r),h=s.character||l?.character||"silentman";r!==L.self?.id&&l&&!l.isDead&&(ai(l,"shoot"),l.animationUntil=performance.now()+420);const d=Math.max(1,Math.ceil(a.length/ew));for(let f=0;f<a.length;f+=d){const m=a[f]||{},_=m.direction||{},g=Number(m.distance||0);if(!Number.isFinite(Number(_.x))||!Number.isFinite(Number(_.y))||!Number.isFinite(Number(_.z))||!Number.isFinite(g)||g<=0)continue;const p=new C(Number(_.x),Number(_.y),Number(_.z)).normalize(),y=c.clone().add(p.multiplyScalar(g));Dd(c.clone(),y,{source:"local",ownerId:r,team:u})}ei(c),r!==L.self?.id&&cm(c,h);return}if(n.type==="special_neoorphen_meteor_wave"){const s=n.data||{},r=String(s.playerId||""),o=wo(r),a=ki(o),c=Array.isArray(s.strikes)?s.strikes:[];let l=null;for(let u=0;u<c.length;u+=1){const h=c[u]||{},d=h.start||{},f=h.impact||{};if(!Number.isFinite(Number(d.x))||!Number.isFinite(Number(d.y))||!Number.isFinite(Number(d.z))||!Number.isFinite(Number(f.x))||!Number.isFinite(Number(f.y))||!Number.isFinite(Number(f.z)))continue;const m=new C(Number(d.x),Number(d.y),Number(d.z)),_=new C(Number(f.x),Number(f.y),Number(f.z));l||(l=_.clone()),Nd(m,_,{source:"local",ownerId:r,team:o}),Rn(m,_,a.tracer,{radiusScale:1.6,life:.52,opacity:.98});const g=Ct(_,a.tracer),p=Ct(_,a.impactB);g&&(g.scale.setScalar(2.6),g.userData.life=.48),p&&(p.scale.setScalar(2.1),p.userData.life=.42)}l&&ei(l);return}if(n.type==="special_pumori_orbit_start"){const s=String(n.data?.playerId||""),r=Number(n.data?.durationMs||1e4);if(!s)return;fA(s,r);return}if(n.type==="player_damage"){if(!L.self||!$t())return;const s=Number(n.data?.health),r=Number(n.data?.shield),o=!!n.data?.headshot;Number.isFinite(s)&&(jt=Math.max(0,Math.min(At,s))),Number.isFinite(r)&&(xi=Math.max(0,Math.min(ha,Math.round(r)))),Bd(),yr=Math.min(.45,yr+(o?.35:.2)),iA(n.data?.fromPlayerId),Nt();return}if(n.type==="hit_confirm"){tA(!!n.data?.headshot);return}if(n.type==="player_resources"){const s=Number(n.data?.mana),r=Number(n.data?.health),o=Number(n.data?.pendingHealthRegen),a=Number(n.data?.lunarRainCooldownMs);let c=!1;Number.isFinite(s)&&(Ft=Math.max(0,Math.min(_n,Math.round(s))),mi=Math.round(Ft),c=!0),Number.isFinite(r)&&(jt=Math.max(0,Math.min(At,r)),c=!0),Number.isFinite(o)&&(en=Math.max(0,o)),Number.isFinite(a)&&m0(a),Bd(),c&&Nt();return}if(n.type==="player_death"){const s=n.data?.playerId;if(!s)return;if(qr(s),L.self&&n.data?.killerId===L.self.id&&s!==L.self.id&&nA(),L.self&&s===L.self.id){jt=0,en=0,Nt(),_0();return}if(!L.remotePlayers.has(s))return;const r=L.remotePlayers.get(s);r.isDead=!0,r.health=0,r.isJumping=!1,r.deadAt=performance.now(),ai(r,"death"),r.animationUntil=0,Gs(r);return}if(n.type==="player_respawned"){const s=n.data?.playerId;if(!s)return;if(L.self&&s===L.self.id){const a=n.data?.position;a&&Number.isFinite(Number(a.x))&&Number.isFinite(Number(a.y))&&Number.isFinite(Number(a.z))&&(ce.position.set(Number(a.x),Number(a.y),Number(a.z)),A0()),jt=Number.isFinite(n.data?.health)?Number(n.data.health):At,xi=Number.isFinite(n.data?.shield)?Math.round(n.data.shield):Qc,Number.isFinite(n.data?.mana)&&(Ft=Math.round(n.data.mana),mi=Math.round(Ft)),en=0,Et=!1,Ki=0,Gn=Yi(),vi(),Nt();return}const r=L.remotePlayers.get(s);if(!r)return;r.isDead=!1,r.deadAt=0,r.health=Number.isFinite(Number(n.data?.health))?Math.max(0,Math.min(At,Math.round(Number(n.data.health)))):At,r.animationUntil=0,ia(r);const o=n.data?.position;if(o&&Number.isFinite(Number(o.x))&&Number.isFinite(Number(o.y))&&Number.isFinite(Number(o.z))){const a=Number(o.x),c=Number(o.y)-mn,l=Number(o.z);r.group.position.set(a,c,l),r.targetPosition.set(a,c,l)}Gs(r);return}if(n.type==="chat_message"){const s=n.data||{},r=String(s.playerName||"Player"),o=String(s.text||"").trim();if(!o)return;rT(r,o),oT(r,o),gh.classList.add("open");return}if(n.type==="player_funny"){const s=n.data?.playerId;if(!s||!L.remotePlayers.has(s))return;const r=L.remotePlayers.get(s);if(r.isDead)return;r.currentAnimation==="funny"&&(r.currentAnimation=""),ai(r,"funny");const o=r.actions?.funny,a=Math.max(500,Math.round((o?.getClip()?.duration||1)*1e3));r.animationUntil=performance.now()+a;return}if(n.type==="game_state"){if(L.joinedRoom&&L.joinedRoom.room.id===n.data.roomId){L.joinedRoom.room.status=n.data.status,L.joinedRoom.room.hostId=n.data.hostId,n.data.mode&&(L.joinedRoom.room.mode=n.data.mode),Object.prototype.hasOwnProperty.call(n.data,"versusType")&&(L.joinedRoom.room.versusType=n.data.versusType),Number.isFinite(Number(n.data.requiredPlayers))&&(L.joinedRoom.room.requiredPlayers=Number(n.data.requiredPlayers)),Number.isFinite(Number(n.data.maxPlayers))&&(L.joinedRoom.room.maxPlayers=Number(n.data.maxPlayers)),n.data.weather&&(L.joinedRoom.room.weather=n.data.weather,Fo(n.data.weather)),n.data.battleTheme&&(L.joinedRoom.room.battleTheme=n.data.battleTheme,Mc(n.data.battleTheme)),n.data.status!=="in_game"&&Et&&(Et=!1,Ki=0,Gn=Yi(),vi()),n.data.status!=="cooldown"&&Os();const s=n.data.status==="in_game"||n.data.status==="cooldown";Uo(s),_c(),Fg(L.joinedRoom.room),Ao(),Oo(),Nt(),Hi()}return}if(n.type==="match_winner"){if(!L.joinedRoom)return;const s=n.data?.winner||{};n.data?.winnerTeam&&(s.team=n.data.winnerTeam),eA(s,n.data?.countdownSeconds);return}if(n.type==="match_reset"){Os(),bc(),Nt();return}}),e.addEventListener("close",()=>{Xl.textContent="Desconectado. Reintentando...",L.joinedRoom=null,L.showScoreboard=!1,Li=null,L.latencyMs=null,Mm(),Uo(!1),_c(),am(),Fo("night"),Mc("battle1"),bc(),Os(),Le.team=null,ra(),Ui.length=0,Zo(),Nt(),Ao(),Oo(),Hi(),setTimeout(S0,1200)}),e.addEventListener("error",()=>{Us("No se pudo conectar al WebSocket")})};sn.addEventListener("change",()=>{je=sn.value||je,L.self&&(L.self.character=je),Jc(je),$s(je),Hh(),so(),Nt()});CE.addEventListener("click",()=>{_t({type:"list_rooms"}),UT()});PE.addEventListener("click",()=>{Us(),_t({type:"create_room",mode:"versusmatch",playerName:mh.value.trim(),character:sn.value||je})});Ic.addEventListener("change",()=>{if(!vn())return;const i=Ic.value;i&&_t({type:"room_set_versus_type",versusType:i})});fd.addEventListener("click",()=>{if(!vn()||!L.self||!L.joinedRoom)return;const e=!(L.joinedRoom.players||[]).find(t=>t.id===L.self.id)?.ready;_t({type:"versus_set_ready",ready:e})});mg.addEventListener("click",()=>{vn()&&_t({type:"start_game"})});DE.addEventListener("click",()=>{_t({type:"leave_room"})});const Gh=()=>{if(!vn())return;const i=String(Ar.value||"").trim();i&&(_t({type:"chat_message",text:i}),Ar.value="",Ar.focus())};NE.addEventListener("click",()=>{Gh()});Ar.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),Gh())});QE.addEventListener("click",()=>{_t({type:"leave_room"})});_g.addEventListener("click",()=>{_t({type:"start_game"})});xg.addEventListener("click",()=>{_t({type:"end_game"})});eT.addEventListener("click",()=>{Zc()});tT.addEventListener("click",()=>{Zc(),_t({type:"leave_room"})});const b0=i=>e=>{e&&(e.preventDefault(),e.stopPropagation());const t=performance.now();t<jp||(jp=t+450,i())},Wh=b0(async()=>{jc=!0,vh(),await sT()}),Xh=b0(()=>{jc=!0,vh()});_h?.addEventListener("click",Wh);_h?.addEventListener("touchstart",Wh,{passive:!1});_h?.addEventListener("pointerdown",Wh);xh?.addEventListener("click",Xh);xh?.addEventListener("touchstart",Xh,{passive:!1});xh?.addEventListener("pointerdown",Xh);gd.addEventListener("input",()=>{Ie.mouseSensitivity=ni(gd.value,.4,2.5,Ie.mouseSensitivity),Sg.textContent=Ie.mouseSensitivity.toFixed(2),to()});_d.addEventListener("input",()=>{Ie.masterVolume=ni(_d.value,0,1,Ie.masterVolume),bg.textContent=`${Math.round(Ie.masterVolume*100)}%`,da(),to()});xd.addEventListener("input",()=>{Ie.musicVolume=ni(xd.value,0,1,Ie.musicVolume),Eg.textContent=`${Math.round(Ie.musicVolume*100)}%`,da(),to()});vd.addEventListener("input",()=>{Ie.sfxVolume=ni(vd.value,0,1,Ie.sfxVolume),Tg.textContent=`${Math.round(Ie.sfxVolume*100)}%`,da(),to()});yd.addEventListener("input",()=>{Ie.fov=ni(yd.value,60,100,Ie.fov),wg.textContent=String(Math.round(Ie.fov)),da(),to()});Md.addEventListener("change",()=>{Ie.showPerfByDefault=!!Md.checked,!L.showPerf&&Ie.showPerfByDefault&&(L.showPerf=!0,Sh(!0)),no(),to()});const Ma=()=>{gm.set(An,Tn,0),ce.quaternion.setFromEuler(gm)},E0=()=>{if(!Rr)return;em.copy(ce.position),ce.getWorldDirection(sc),sc.normalize();const i=em.clone().add(sc.clone().multiplyScalar(18));tm.set(-Math.sin(Tn),0,-Math.cos(Tn)).normalize(),nm.set(Math.cos(Tn),0,-Math.sin(Tn)).normalize(),ic.copy(ce.position).addScaledVector(sc,-.8).add(new C(0,_T,0)).addScaledVector(tm,-4.6).addScaledVector(nm,xT),ic.y=Math.max(mn+.6,ic.y),Xs.position.lerp(ic,vT),Xs.lookAt(i)},Go=()=>Rr?Xs:ce,_A=(i,e,t,n={})=>{let s=t,r=null;const o=new C,a=new C,c=new C,l=Number.isFinite(n.headRadius)?n.headRadius:pa,u=Number.isFinite(n.bodyRadius)?n.bodyRadius:ma,h=(d,f)=>{a.copy(d).sub(i);const m=a.dot(e);m<0||m>s||(c.copy(e).multiplyScalar(m).add(i),c.distanceToSquared(d)<=f*f&&(s=m,r=c.clone()))};for(const d of L.remotePlayers.values())!d?.group||d.isDead||(o.set(d.group.position.x,d.group.position.y+1.85,d.group.position.z),h(o,l),o.set(d.group.position.x,d.group.position.y+1.1,d.group.position.z),h(o,u));return r?{point:r,distance:s}:null},T0=()=>{const i=new pn,e=new tt(new ms(Pd,mm),new Ut({color:1776411,transparent:!0,opacity:.78,depthWrite:!1,depthTest:!1,side:dn,toneMapped:!1}));e.renderOrder=999,e.position.set(0,hu,0),i.add(e);const t=new tt(new ms(Pd-.02,mm-.02),new Ut({color:5701485,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:dn,toneMapped:!1}));t.renderOrder=1e3,t.position.set(0,hu,.001),i.add(t);const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d"),r=new hx(n);r.minFilter=Rt,r.magFilter=Rt,r.generateMipmaps=!1;const o=new tt(new ms(1.05,.18),new Ut({map:r,transparent:!0,opacity:.96,depthWrite:!1,depthTest:!1,side:dn,toneMapped:!1}));return o.renderOrder=1001,o.position.set(0,hu+.16,.001),i.add(o),{holder:i,bg:e,fill:t,text:o,textCanvas:n,textCtx:s,textTexture:r,lastText:""}},il=i=>{i&&(i.parent&&i.parent.remove(i),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose())},ra=()=>{Le.teamOutline&&(il(Le.teamOutline),Le.teamOutline=null)},qh=i=>{i?.teamOutline&&(il(i.teamOutline),i.teamOutline=null)},Gs=i=>{if(!i?.healthBar?.fill)return;const e=Number.isFinite(Number(i.health))?Number(i.health):At,t=Math.max(0,Math.min(1,e/At));i.healthBar.fill.scale.x=Math.max(.001,t),i.healthBar.fill.position.x=(t-1)*(Pd-.02)*.5,t>.66?i.healthBar.fill.material.color.set(5701485):t>.33?i.healthBar.fill.material.color.set(16769898):i.healthBar.fill.material.color.set(16738151);const n=bt(i.team),s=`${String(i.name||"Player")} ${Math.round(e)}`,r=`${n||"none"}:${s}`;if(i.healthBar.lastText!==r&&i.healthBar.textCtx){const o=i.healthBar.textCtx;o.clearRect(0,0,i.healthBar.textCanvas.width,i.healthBar.textCanvas.height),o.font="bold 24px Courier New, monospace",o.textAlign="center",o.textBaseline="middle",o.strokeStyle="rgba(0, 0, 0, 0.75)",o.lineWidth=6,o.strokeText(s,i.healthBar.textCanvas.width/2,32),n==="red"?o.fillStyle="#ffb6b6":n==="blue"?o.fillStyle="#b9d2ff":o.fillStyle="#d8ffd8",o.fillText(s,i.healthBar.textCanvas.width/2,32),i.healthBar.textTexture.needsUpdate=!0,i.healthBar.lastText=r}i.healthBar.holder.visible=!i.isDead},qs=(i=!1)=>{if(!L.joinedRoom)return;const e=performance.now();if(!i&&e-L.lastStateSentAt<55)return;L.lastStateSentAt=e;const t=Je.KeyW||Je.KeyA||Je.KeyS||Je.KeyD||Mt.lengthSq()>.5;_t({type:"player_move",position:{x:ce.position.x,y:ce.position.y,z:ce.position.z},rotation:{yaw:Tn,pitch:An},jumping:Ot,moving:t})},Fd=(i,e)=>{for(let t=0;t<Nc.length;t+=1){const n=Nc[t];if(i+ps>n.minX&&i-ps<n.maxX&&e+ps>n.minZ&&e-ps<n.maxZ)return!0}return!1},Od=(i,e)=>Zw(i,e,ps+.05)?!Fd(i,e):!1,xA=(i,e)=>{const t=xm(i,e,ps+.05);if(Od(t.x,t.z))return t;const n=14;for(let s=.6;s<=n;s+=.6)for(let o=0;o<24;o+=1){const a=o/24*Math.PI*2,c=xm(t.x+Math.cos(a)*s,t.z+Math.sin(a)*s,ps+.05);if(Od(c.x,c.z))return c}return t},w0=(i,e)=>{const t=ce.position.x,n=ce.position.z,s=MT-ps,r=Math.max(-s,Math.min(s,i)),o=Math.max(-s,Math.min(s,e));let a=t,c=n;return Fd(r,n)||(a=r),Fd(a,o)||(c=o),{x:a,z:c}},A0=()=>{if(!Od(ce.position.x,ce.position.z)){const e=xA(ce.position.x,ce.position.z);ce.position.x=e.x,ce.position.z=e.z}const i=w0(ce.position.x,ce.position.z);ce.position.x=i.x,ce.position.z=i.z,ce.position.y=Math.max(mn,ce.position.y)};fn.domElement.addEventListener("click",()=>{!ge.enabled&&!Hs&&L.joinedRoom&&fn.domElement.requestPointerLock()});document.addEventListener("pointerlockchange",()=>{Hs=document.pointerLockElement===fn.domElement,xs.classList.toggle("locked",Hs),Hs||(gn=!1,L.joinedRoom&&!Ks&&!Et&&!Xr&&!Bi&&i0()),vs()});document.addEventListener("mousemove",i=>{if(!Hs||!$t())return;const e=.0021*Ie.mouseSensitivity;Tn-=i.movementX*e,An-=i.movementY*e,An=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,An)),Ma(),qs()});window.addEventListener("mousedown",i=>{i.button===0&&Hs&&$t()&&(gs(),gn=!0)});window.addEventListener("mouseup",i=>{i.button===0&&(gn=!1)});const bm=(i,e)=>{if(!ge.active||!$t())return;const t=.0024*Ie.mouseSensitivity;Tn-=i*t,An-=e*t,An=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,An)),Ma(),qs()},lc=i=>{if(!Dn||!hs||!i)return;const e=Dn.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2,s=i.clientX-t,r=i.clientY-n,o=Math.max(28,Math.min(e.width,e.height)*.36),a=Math.sqrt(s*s+r*r),c=a>o&&a>0?{x:s/a*o,y:r/a*o}:{x:s,y:r};ge.moveX=o>0?c.x/o:0,ge.moveY=o>0?c.y/o:0,hs.style.transform=`translate(calc(-50% + ${c.x}px), calc(-50% + ${c.y}px))`},vA=()=>{if(!md||!Dn||!Ii)return;const i=()=>ge.active&&$t();Dn.addEventListener("touchstart",c=>{if(!i()||ge.moveTouchId!==null)return;const l=c.changedTouches[0];l&&(ge.moveTouchId=l.identifier,lc(l),c.preventDefault())},{passive:!1}),Dn.addEventListener("touchmove",c=>{if(!(!i()||ge.moveTouchId===null))for(let l=0;l<c.changedTouches.length;l+=1){const u=c.changedTouches[l];if(u.identifier===ge.moveTouchId){lc(u),c.preventDefault();break}}},{passive:!1});const e=c=>{if(ge.moveTouchId!==null){for(let l=0;l<c.changedTouches.length;l+=1)if(c.changedTouches[l].identifier===ge.moveTouchId){ge.moveTouchId=null,ge.moveX=0,ge.moveY=0,hs&&(hs.style.transform="translate(-50%, -50%)"),c.preventDefault();break}}};Dn.addEventListener("touchend",e,{passive:!1}),Dn.addEventListener("touchcancel",e,{passive:!1}),Ii.addEventListener("touchstart",c=>{if(!i()||ge.lookTouchId!==null)return;const l=c.changedTouches[0];l&&(ge.lookTouchId=l.identifier,ge.lookLastX=l.clientX,ge.lookLastY=l.clientY,c.preventDefault())},{passive:!1}),Ii.addEventListener("touchmove",c=>{if(!(!i()||ge.lookTouchId===null))for(let l=0;l<c.changedTouches.length;l+=1){const u=c.changedTouches[l];if(u.identifier===ge.lookTouchId){const h=u.clientX-ge.lookLastX,d=u.clientY-ge.lookLastY;ge.lookLastX=u.clientX,ge.lookLastY=u.clientY,bm(h,d),c.preventDefault();break}}},{passive:!1});const t=c=>{if(ge.lookTouchId!==null){for(let l=0;l<c.changedTouches.length;l+=1)if(c.changedTouches[l].identifier===ge.lookTouchId){ge.lookTouchId=null,c.preventDefault();break}}};Ii.addEventListener("touchend",t,{passive:!1}),Ii.addEventListener("touchcancel",t,{passive:!1});const n=c=>{i()&&(gs(),gn=!0,c.preventDefault())},s=c=>{gn=!1,c.preventDefault()};Cs?.addEventListener("touchstart",n,{passive:!1}),Cs?.addEventListener("touchend",s,{passive:!1}),Cs?.addEventListener("touchcancel",s,{passive:!1}),Gp?.addEventListener("touchstart",c=>{i()&&(gs(),Id(),c.preventDefault())},{passive:!1}),Wp?.addEventListener("touchstart",c=>{i()&&(vm(),c.preventDefault())},{passive:!1});const r=c=>{c&&(c.preventDefault(),c.stopPropagation()),!(!ge.enabled||!L.joinedRoom||vn())&&s0()};Ql?.addEventListener("touchstart",r,{passive:!1}),Ql?.addEventListener("click",r),Dn.addEventListener("pointerdown",c=>{!i()||ge.movePointerId!==null||(ge.movePointerId=c.pointerId,lc(c),c.preventDefault())}),Dn.addEventListener("pointermove",c=>{!i()||ge.movePointerId!==c.pointerId||(lc(c),c.preventDefault())});const o=c=>{ge.movePointerId===c.pointerId&&(ge.movePointerId=null,ge.moveX=0,ge.moveY=0,hs&&(hs.style.transform="translate(-50%, -50%)"),c.preventDefault())};Dn.addEventListener("pointerup",o),Dn.addEventListener("pointercancel",o),Ii.addEventListener("pointerdown",c=>{!i()||ge.lookPointerId!==null||(ge.lookPointerId=c.pointerId,ge.lookLastX=c.clientX,ge.lookLastY=c.clientY,c.preventDefault())}),Ii.addEventListener("pointermove",c=>{if(!i()||ge.lookPointerId!==c.pointerId)return;const l=c.clientX-ge.lookLastX,u=c.clientY-ge.lookLastY;ge.lookLastX=c.clientX,ge.lookLastY=c.clientY,bm(l,u),c.preventDefault()});const a=c=>{ge.lookPointerId===c.pointerId&&(ge.lookPointerId=null,c.preventDefault())};Ii.addEventListener("pointerup",a),Ii.addEventListener("pointercancel",a),Cs?.addEventListener("pointerdown",n),Cs?.addEventListener("pointerup",s),Cs?.addEventListener("pointercancel",s),Cs?.addEventListener("pointerleave",s),Gp?.addEventListener("pointerdown",c=>{i()&&(gs(),Id(),c.preventDefault())}),Wp?.addEventListener("pointerdown",c=>{i()&&(vm(),c.preventDefault())}),Ql?.addEventListener("pointerdown",r)};window.addEventListener("keydown",i=>{if(i.code==="Escape"&&!Bi){i.preventDefault(),s0();return}if(i.code==="Enter"){if(i.preventDefault(),!L.joinedRoom)return;if(vn()){document.activeElement===Ar?Gh():Ar.focus();return}if(!Bi){aT();return}const e=Lc.value.trim();e&&_t({type:"chat_message",text:e}),Sd();return}if(Bi){i.code==="Escape"&&(i.preventDefault(),Sd());return}if(i.code==="Tab"&&(i.preventDefault(),L.joinedRoom&&(L.showScoreboard=!0,Mh())),i.code==="KeyI"&&(L.showMatchInfo=!L.showMatchInfo,Dg()),i.code==="KeyP"&&(L.showPerf=!L.showPerf,L.showPerf&&Sh(!0),no()),i.code==="KeyF"){if(i.preventDefault(),L.joinedRoom&&Le.actions?.funny){const e=Le.actions.funny.getClip(),t=Math.max(500,Math.round((e?.duration||1)*1e3));Le.funnyUntil=performance.now()+t,ls("funny"),_t({type:"player_funny"})}return}i.code==="KeyC"&&(Rr=!Rr,Rr&&E0()),i.code==="Space"&&(i.preventDefault(),gs(),$t()&&!Ot&&ce.position.y<=mn+.001&&(Ot=!0,oi=a0,qs(!0))),i.code==="KeyR"&&(gs(),Id()||zh()),i.code in Je&&((i.code==="KeyW"||i.code==="KeyA"||i.code==="KeyS"||i.code==="KeyD")&&gs(),Je[i.code]=!0)});window.addEventListener("keyup",i=>{Bi||(i.code==="Space"&&i.preventDefault(),i.code==="Tab"&&(L.showScoreboard=!1,Mh()),i.code in Je&&(Je[i.code]=!1))});const yA=()=>{if(!ge.active||!$t()||Bi){ge.active&&(Je.KeyW=!1,Je.KeyA=!1,Je.KeyS=!1,Je.KeyD=!1);return}const i=.18;Je.KeyW=ge.moveY<-i,Je.KeyS=ge.moveY>i,Je.KeyA=ge.moveX<-i,Je.KeyD=ge.moveX>i},MA=()=>{const i=ro(je),e=ga(je),t=_a(je),n=xa(je),s=i||e||t||n,r=bt(Le.team),o=ki(r);if(s&&Ft<pm)return;if(!s&&Gi<=0){zh();return}s?(Ft=Math.max(0,Ft-pm),mi=Math.round(Ft)):Gi-=1,YT(),Le.shootUntil=performance.now()+420,Nt(),ce.getWorldDirection(_m);const a=_m.clone().normalize(),c=ce.position.clone().add(a.clone().multiplyScalar(.55)),l=Math.sqrt(Mt.x*Mt.x+Mt.z*Mt.z),u=Math.min(1,l/Math.max(.001,Dh)),h=!s,d=h?(.0018+u*.0032+(Ot?.0055:0)+Ur*.0048)*(1/Ie.mouseSensitivity):0,f=a.clone();if(d>0){const p=new C().crossVectors(f,ce.up).normalize(),y=new C().crossVectors(p,f).normalize(),E=(Math.random()*2-1)*d,S=(Math.random()*2-1)*d;f.add(p.multiplyScalar(E)).add(y.multiplyScalar(S)).normalize()}Ir.set(c,f),Ir.far=220;const m=Ir.intersectObjects(fs,!1);let _=m.length>0?m[0].point:c.clone().add(f.clone().multiplyScalar(120));if(s||e||t){const p=_A(c,f,c.distanceTo(_),{headRadius:pa,bodyRadius:ma});p?.point&&_.copy(p.point)}e&&c.distanceTo(_)>Cd&&(_=c.clone().add(f.clone().multiplyScalar(Cd)));const g=c.distanceTo(_);if(i?(Dd(c,_,{source:"local",ownerId:L.self?.id,team:r}),ei(c)):e?(y0(c,_,{source:"local",ownerId:L.self?.id,team:r}),ei(c)):t?(Nd(c,_,{source:"local",ownerId:L.self?.id,team:r}),ei(c)):n?(Ud(c,_,{source:"local",ownerId:L.self?.id,team:r}),ei(c)):(Rn(c,_,o.tracer),Ct(_,o.impactB)),_t({type:"player_shoot",origin:{x:c.x,y:c.y,z:c.z},direction:{x:f.x,y:f.y,z:f.z},distance:g}),Qo.intensity=2.3,na=Math.min(1.3,na+.52+u*.14+(Ot?.18:0)),Ur=Math.min(xw,Ur+(h?.22+u*.18+(Ot?.24:0):.08)),An+=(Math.random()*.5+.5)*gw,Tn+=(Math.random()-.5)*_w,An=Math.min(An,Math.PI/2-.01),Ma(),m.length>0){const p=m[0].object;p.material.emissiveIntensity=1.3}},SA=(i,e)=>{i.active=!1,i.respawnAt=e+bw,i.mesh.visible=!1,oo(je)?(Ft=Math.min(_n,Ft+Tw),mi=Math.round(Ft)):pi=Math.min(fa,pi+Ew),Nt()},bA=(i,e)=>{i.active=!1,i.respawnAt=e+Aw,i.mesh.visible=!1,xi=Math.min(ha,xi+Rw),Nt()},EA=(i,e)=>{i.active=!1,i.respawnAt=e+Pw,i.mesh.visible=!1;const t=Math.max(0,At-(jt+en)),n=Math.min(t,Iw);n<=0||(en+=n,_t({type:"player_pickup_health"}))},TA=i=>{if(!$t()||Et||jt<=0||en<=0)return;const e=Math.max(0,At-jt);if(e<=1e-4){en=0;return}const t=Math.min(e,en,Lw*i);if(t<=1e-4)return;const n=Math.round(jt);jt+=t,en=Math.max(0,en-t),Math.round(jt)!==n&&Nt()},Bd=()=>{const i=Math.max(0,At-jt);en=Math.max(0,Math.min(en,i))},jh=2.2,Yh=.1,Yr=(i,e)=>{if(!i?.mesh||!i.active||!i.mesh.visible)return;if(Vs.length>=sw){const a=Vs.shift();a&&(xe.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose())}const t=new Ut({color:e,transparent:!0,opacity:.55+Math.random()*.25,blending:Xi,depthWrite:!1}),n=new tt(tw,t),s=Math.random()*Math.PI*2,r=.11+Math.random()*.28;n.position.set(i.mesh.position.x+Math.cos(s)*r,i.mesh.position.y+.08+Math.random()*.32,i.mesh.position.z+Math.sin(s)*r),xe.add(n);const o=.95+Math.random()*.85;Vs.push({mesh:n,life:o,initialLife:o,velocity:new C((Math.random()-.5)*.16,1.6+Math.random()*1.25,(Math.random()-.5)*.16)})},wA=i=>{for(let e=Vs.length-1;e>=0;e-=1){const t=Vs[e];t.life-=i,t.mesh.position.addScaledVector(t.velocity,i),t.velocity.y+=i*.55,t.mesh.scale.multiplyScalar(1+i*1.45);const n=Math.max(0,t.life/t.initialLife);t.mesh.material.opacity=n*.75,t.life<=0&&(xe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Vs.splice(e,1))}},AA=i=>{if(!$t()||Ks){Mt.multiplyScalar(Math.max(0,1-i*10));return}$n.set(0,0,0),ce.getWorldDirection(gr),gr.y=0,gr.normalize(),pu.crossVectors(gr,ce.up).normalize(),Je.KeyW&&$n.add(gr),Je.KeyS&&$n.sub(gr),Je.KeyA&&$n.sub(pu),Je.KeyD&&$n.add(pu);const e=$n.lengthSq()>0;e&&($n.normalize().multiplyScalar(Dh),(Je.KeyA||Je.KeyD)&&!(Je.KeyW||Je.KeyS)&&$n.multiplyScalar(dw));const n=1-Math.exp(-((e?cw:lw)*(Ot?uw:1))*i);if(Mt.x+=((e?$n.x:0)-Mt.x)*n,Mt.z+=((e?$n.z:0)-Mt.z)*n,Math.abs(Mt.x)<1e-4&&(Mt.x=0),Math.abs(Mt.z)<1e-4&&(Mt.z=0),Mt.lengthSq()>0){const s=ce.position.x+Mt.x*i,r=ce.position.z+Mt.z*i,o=w0(s,r),a=Math.abs(o.x-ce.position.x)>1e-4||Math.abs(o.z-ce.position.z)>1e-4;Math.abs(o.x-s)>2e-4&&(Mt.x=0),Math.abs(o.z-r)>2e-4&&(Mt.z=0),ce.position.x=o.x,ce.position.z=o.z,ce.position.y=Math.max(mn,ce.position.y),a&&qs()}},RA=i=>{!Ot&&ce.position.y<=mn+.001&&oi<=0||(oi-=hw*i,ce.position.y+=oi*i,ce.position.y<=mn?(ce.position.y=mn,oi=0,Ot&&(Ot=!1,qs(!0))):Ot=!0,qs())},CA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<Mr.length;n+=1){const s=Mr[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*2.2,s.mesh.position.y=s.baseY+Math.sin(t*jh+s.phase)*Yh,Math.random()<i*2.9&&(Yr(s,9421823),Math.random()<.72&&Yr(s,9421823)),!$t()||(oo(je)?Ft>=_n:pi>=fa))continue;const r=ce.position.x-s.mesh.position.x,o=ce.position.z-s.mesh.position.z;r*r+o*o<=1.1*1.1&&SA(s,e)}},PA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<Sr.length;n+=1){const s=Sr[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.position.y=s.baseY+Math.sin(t*jh+s.phase)*Yh,Math.random()<i*3.1&&(Yr(s,9435135),Math.random()<.75&&Yr(s,9435135)),!$t()||xi>=ha)continue;const r=ce.position.x-s.mesh.position.x,o=ce.position.z-s.mesh.position.z;r*r+o*o<=1.1*1.1&&bA(s,e)}},IA=i=>{const e=performance.now(),t=e/1e3;for(let n=0;n<br.length;n+=1){const s=br[n];if(!s.active)if(e>=s.respawnAt)s.active=!0,s.mesh.visible=!0;else continue;if(s.mesh.rotation.y+=i*1.9,s.mesh.position.y=s.baseY+Math.sin(t*jh+s.phase)*Yh,Math.random()<i*3.5&&(Yr(s,10878896),Math.random()<.82&&Yr(s,10878896)),!$t()||Et||Math.max(0,At-(jt+en))<=1e-4)continue;const o=ce.position.x-s.mesh.position.x,a=ce.position.z-s.mesh.position.z;o*o+a*a<=1.1*1.1&&EA(s,e)}},LA=i=>{if(!Eh.visible)return;const e=.15+Math.sin(performance.now()*.0024)*.2;for(let t=0;t<Yc;t+=1){const n=t*3,s=t*3+1,r=t*3+2;Nn[s]-=Ed[t]*i,Nn[n]+=e*i*Ed[t]*.35,Nn[r]+=Math.sin(performance.now()*.0015+t)*.015,Nn[s]<.2&&(Nn[s]=Math.random()*120+25,Nn[n]=ce.position.x+(Math.random()-.5)*220,Nn[r]=ce.position.z+(Math.random()-.5)*220)}bh.attributes.position.needsUpdate=!0},DA=i=>{if(wh.visible){for(let e=0;e<Kc;e+=1){const t=e*3,n=t+1,s=t+2;Un[n]-=zg[e]*i,Un[t]+=Math.sin(performance.now()*9e-4+e)*.02,Un[s]+=Math.cos(performance.now()*7e-4+e)*.02,Un[n]<.2&&(Un[n]=Math.random()*120+25,Un[t]=ce.position.x+(Math.random()-.5)*180,Un[s]=ce.position.z+(Math.random()-.5)*180)}Th.attributes.position.needsUpdate=!0}},NA=i=>{Bo=Math.max(0,Bo-i*(Og==="night"?.35:.55));const t=performance.now()*.001,n=Uc.attributes.position.array;for(let r=0;r<$c;r+=1){const o=r*3;n[o+1]+=Math.sin(t*Wg[r]+r)*.003,n[o]+=Math.cos(t*.7+r)*.0025,n[o+2]+=Math.sin(t*.5+r)*.0025}Uc.attributes.position.needsUpdate=!0;const s=Bo*.95;for(let r=0;r<Td.length;r+=1){const o=Td[r],a=(Math.sin(t*1.6+o.phase)+1)*.035;o.material.emissiveIntensity=o.base+a+s,o.material.color&&s>.08&&o.material.color.offsetHSL(Math.sin(t+o.phase)*3e-4,4e-4,3e-4)}},UA=i=>{const e=Math.min(1,i*8),t=performance.now(),n=Xw()-Ow;for(const s of L.remotePlayers.values()){const r=s.netSnapshots||[];if(r.length>0){const w=n-1e3;for(;r.length>2&&r[0].ts<w;)r.shift();let R=r[r.length-1];for(let x=1;x<r.length;x+=1){const M=r[x-1],N=r[x];if(n<M.ts||n>N.ts)continue;const P=Math.max(1,N.ts-M.ts),U=Math.max(0,Math.min(1,(n-M.ts)/P));R={x:M.x+(N.x-M.x)*U,y:M.y+(N.y-M.y)*U,z:M.z+(N.z-M.z)*U,yaw:M.yaw+((N.yaw-M.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)*U,pitch:M.pitch+(N.pitch-M.pitch)*U,jumping:M.jumping||N.jumping,moving:M.moving||N.moving,ts:n};break}if(r.length>=2&&n>r[r.length-1].ts){const x=r[r.length-1],M=r[r.length-2],N=n-x.ts;if(N<=Bw){const P=Math.max(1,x.ts-M.ts),U=N/P;R={x:x.x+(x.x-M.x)*U,y:x.y+(x.y-M.y)*U,z:x.z+(x.z-M.z)*U,yaw:x.yaw,pitch:x.pitch,jumping:x.jumping,moving:x.moving,ts:n}}else R=x}s.targetPosition.set(R.x,R.y,R.z),s.targetYaw=R.yaw,s.targetPitch=R.pitch,s.isJumping=!!R.jumping,R.moving&&(s.movingUntil=Math.max(Number(s.movingUntil||0),t+d0))}const o=s.group.position.distanceTo(s.targetPosition);let a=e;o>kw?a=Math.max(a,Math.min(1,i*12)):o>zw&&(a=Math.max(a,Math.min(1,i*10)));const c=s.group.position.x,l=s.group.position.y,u=s.group.position.z;o>Vw?s.group.position.copy(s.targetPosition):s.group.position.lerp(s.targetPosition,a),s.group.rotation.y=ym(s.group.rotation.y,s.targetYaw+Bh,a);const h=s.group.position.x-c,d=s.group.position.y-l,f=s.group.position.z-u,m=Math.sqrt(h*h+d*d+f*f),_=i>0?m/i:0,g=Math.min(1,i*10);s.smoothedMoveSpeed=Gm.lerp(Number(s.smoothedMoveSpeed||0),_,g);const p=s.currentAnimation==="move"?s.smoothedMoveSpeed>Gw:s.smoothedMoveSpeed>Hw,E=t<Number(s.movingUntil||0)||p,S=s.isJumping||s.targetPosition.y>.08||s.group.position.y>.08,T=t-Number(s.lastAnimationAt||0)>=Ww;if(s.head&&(s.head.rotation.x=ym(s.head.rotation.x,s.targetPitch,a)),s.healthBar?.holder){s.healthBar.holder.quaternion.copy(Go().quaternion);const w=s.group.position.distanceTo(Go().position),R=w<=Uw,x=Math.max(.74,Math.min(1.06,1.12-w/170));s.healthBar.holder.scale.setScalar(x),s.healthBar.holder.visible=!s.isDead&&R}s.teamOutline&&(s.group.position.distanceTo(Go().position),s.teamOutline.visible=Ug()),s.mixer&&s.mixer.update(i),s.animationUntil>0&&t>=s.animationUntil&&(s.isDead&&(s.isDead=!1),S?(ai(s,"jump"),s.lastAnimationAt=t):E?(ai(s,"move"),s.lastAnimationAt=t):(ia(s),s.lastAnimationAt=t),s.animationUntil=0),!s.isDead&&s.animationUntil<=0&&(S?s.currentAnimation!=="jump"&&(ai(s,"jump"),s.lastAnimationAt=t):E?s.currentAnimation!=="move"&&T&&(ai(s,"move"),s.lastAnimationAt=t):s.currentAnimation!=="idle"&&T&&(ia(s),s.lastAnimationAt=t))}},FA=i=>{Qo.intensity=Math.max(0,Qo.intensity-20*i),na=Math.max(0,na-i*4.8),Ur=Math.max(0,Ur-i*vw),wA(i);for(let e=zs.length-1;e>=0;e-=1){const t=zs[e];t.userData.life-=i,t.material.opacity=Math.max(0,t.userData.life*7.5),t.userData.life<=0&&(xe.remove(t),t.material.dispose(),zs.splice(e,1))}for(let e=Lr.length-1;e>=0;e-=1){const t=Lr[e];t.userData.life-=i,t.scale.multiplyScalar(1+7*i),t.material.opacity=Math.max(0,t.userData.life*5),t.userData.life<=0&&(xe.remove(t),t.material.dispose(),Lr.splice(e,1))}for(let e=0;e<fs.length;e+=1){const t=fs[e];t.material.emissiveIntensity>.5&&(t.material.emissiveIntensity=Math.max(.5,t.material.emissiveIntensity-3*i))}},OA=i=>{for(let e=ko.length-1;e>=0;e-=1){const t=ko[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.max(0,t.radius*(1-n*t.radiusFalloff)),o=Math.cos(s)*r,a=Math.sin(s)*r,l=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(o)).add(t.up.clone().multiplyScalar(a));t.pos.copy(l),t.mesh.position.copy(l),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.02)*.24),t.trailTimer+=i;const u=t.source==="remote"?.028:.012;if(t.trailTimer>=u){t.trailTimer=0;const d=Ct(l,Math.random()>.5?t.colors.a:t.colors.b);d&&(d.scale.setScalar(1.35+Math.random()*.95),d.userData.life=.3+Math.random()*.18)}let h=null;if(t.source==="remote"){const d=ya(t.prevPos,t.pos);d&&(h=d.point,d.headshot)}if(h||(h=va(t.prevPos,t.pos,.22)),h||n>=1){xe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),ko.splice(e,1);const d=h?h.clone():t.end.clone();h&&t.source==="remote"&&nl({},t.ownerId);const f=Ct(d,t.colors.a);f&&(f.scale.setScalar(2.3),f.userData.life=.42);const m=Ct(d,t.colors.b);m&&(m.scale.setScalar(1.7),m.userData.life=.36),Rn(d.clone().add(t.up.clone().multiplyScalar(1.05)),d.clone().add(t.up.clone().multiplyScalar(-1.05)),t.colors.a,{radiusScale:2.2,life:.34,opacity:1}),Rn(d.clone().add(t.right.clone().multiplyScalar(.7)),d.clone().add(t.right.clone().multiplyScalar(-.7)),t.colors.tracer,{radiusScale:1.9,life:.34,opacity:1})}}},BA=i=>{for(let e=zo.length-1;e>=0;e-=1){const t=zo[e];t.prevPos.copy(t.pos),t.velocity.y-=mw*i,t.pos.add(t.velocity.clone().multiplyScalar(i)),t.mesh.position.copy(t.pos);const n=t.pos.distanceTo(t.prevPos);t.traveledDistance+=n;const s=Math.max(0,Math.min(1,t.traveledDistance/Cd)),r=t.phase+s*t.spin;t.mesh.rotation.set(r*.9,r*1.1,r*.75),t.trailTimer+=i;const o=t.source==="remote"?.032:.018;if(t.trailTimer>=o){t.trailTimer=0;const c=Ct(t.pos,Math.random()>.5?t.colors.a:t.colors.b);c&&(c.scale.setScalar(1+Math.random()*.9),c.userData.life=.22+Math.random()*.16)}let a=null;if(t.pos.y<=.2&&(a=t.pos.clone(),a.y=.2),!a&&n>1e-4&&(a=va(t.prevPos,t.pos,.4)),!a){if(t.source==="local")for(const c of L.remotePlayers.values()){if(!c?.group||c.isDead)continue;const l=new C(c.group.position.x,c.group.position.y+1.85,c.group.position.z),u=new C(c.group.position.x,c.group.position.y+1.1,c.group.position.z);if(a=jr(t.prevPos,t.pos,l,pa)||jr(t.prevPos,t.pos,u,ma),a)break}else if(t.source==="remote"){const c=ya(t.prevPos,t.pos);c&&(a=c.point,c.headshot)}}if(!a&&t.traveledDistance>=fm&&(a=null),(a||t.traveledDistance>=fm)&&(xe.remove(t.mesh),t.mesh.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material.dispose())}),zo.splice(e,1),a)){const c=a.clone();t.source==="remote"&&nl({},t.ownerId);const l=Ct(c,t.colors.a),u=Ct(c,t.colors.b);l&&(l.scale.setScalar(2.5),l.userData.life=.42),u&&(u.scale.setScalar(1.9),u.userData.life=.35),Rn(c.clone().add(t.up.clone().multiplyScalar(1.15)),c.clone().add(t.up.clone().multiplyScalar(-1.15)),t.colors.a,{radiusScale:2.3,life:.34,opacity:1}),Rn(c.clone().add(t.right.clone().multiplyScalar(.8)),c.clone().add(t.right.clone().multiplyScalar(-.8)),t.colors.tracer,{radiusScale:2,life:.34,opacity:1})}}},kA=i=>{for(let e=Vo.length-1;e>=0;e-=1){const t=Vo[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA*(1-n*.22),o=Math.sin(s*.5+Math.PI*.35)*t.waveAmpB,c=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(o));t.pos.copy(c),t.mesh.position.copy(c),t.mesh.scale.setScalar(1.12+Math.sin(performance.now()*.02)*.28),t.trailTimer+=i;const l=t.source==="remote"?.016:.007;if(t.trailTimer>=l){t.trailTimer=0;const h=Math.random()>.5?t.colors.tracer:t.colors.a,d=Math.random()>.5?t.colors.tracer:t.colors.b,f=Ct(c,h),m=Ct(c.clone().add(t.right.clone().multiplyScalar((Math.random()-.5)*.12)),d);f&&(f.scale.setScalar(.72+Math.random()*.35),f.userData.life=.22+Math.random()*.08),m&&(m.scale.setScalar(.62+Math.random()*.28),m.userData.life=.18+Math.random()*.08)}let u=null;if(t.source==="remote"){const h=ya(t.prevPos,t.pos);h&&(u=h.point,h.headshot)}if(u||(u=va(t.prevPos,t.pos,.22)),u||n>=1){xe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Vo.splice(e,1);const h=u?u.clone():t.end.clone();u&&t.source==="remote"&&nl({},t.ownerId);const d=Ct(h,t.colors.tracer);d&&(d.scale.setScalar(2.45),d.userData.life=.45);const f=Ct(h,t.colors.b);f&&(f.scale.setScalar(1.9),f.userData.life=.38),Rn(h.clone().add(t.up.clone().multiplyScalar(.95)),h.clone().add(t.up.clone().multiplyScalar(-.95)),t.colors.tracer,{radiusScale:2,life:.28,opacity:1}),Rn(h.clone().add(t.right.clone().multiplyScalar(.75)),h.clone().add(t.right.clone().multiplyScalar(-.75)),t.colors.a,{radiusScale:1.75,life:.28,opacity:.95})}}},zA=i=>{for(let e=Ho.length-1;e>=0;e-=1){const t=Ho[e];t.prevPos.copy(t.pos),t.traveled+=t.speed*i;const n=Math.max(0,Math.min(1,t.traveled/t.distance)),s=t.phase+n*t.spin,r=Math.sin(s)*t.waveAmpA,o=Math.cos(s*.7+Math.PI*.3)*t.waveAmpB,c=t.start.clone().lerp(t.end,n).add(t.right.clone().multiplyScalar(r)).add(t.up.clone().multiplyScalar(o));t.pos.copy(c),t.mesh.position.copy(c),t.mesh.scale.setScalar(1.25+Math.sin(performance.now()*.03)*.18),t.trailTimer+=i;const l=t.source==="remote"?.012:.005;if(t.trailTimer>=l){t.trailTimer=0;const h=2.9+Math.random()*1.4,d=c.clone().add(t.dir.clone().multiplyScalar(-h)),f=Math.random()>.5?t.colors.a:t.colors.tracer;Rn(c,d,f,{radiusScale:1.8,life:.36,opacity:.92});const m=Ct(d,Math.random()>.5?t.colors.a:t.colors.b);m&&(m.scale.setScalar(.7+Math.random()*.3),m.userData.life=.22+Math.random()*.08)}let u=null;if(t.source==="remote"){const h=ya(t.prevPos,t.pos);h&&(u=h.point,h.headshot)}if(u||(u=va(t.prevPos,t.pos,.24)),u||n>=1){xe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Ho.splice(e,1);const h=u?u.clone():t.end.clone();u&&t.source==="remote"&&nl({},t.ownerId);const d=Ct(h,t.colors.a),f=Ct(h,t.colors.b);d&&(d.scale.setScalar(2.2),d.userData.life=.4),f&&(f.scale.setScalar(2.8),f.userData.life=.46),Rn(h.clone().add(t.up.clone().multiplyScalar(1.35)),h.clone().add(t.up.clone().multiplyScalar(-1.35)),t.colors.a,{radiusScale:2.35,life:.36,opacity:1}),Rn(h.clone().add(t.right.clone().multiplyScalar(1.05)),h.clone().add(t.right.clone().multiplyScalar(-1.05)),t.colors.tracer,{radiusScale:2.15,life:.36,opacity:.98})}}},VA=i=>{const e=performance.now();for(let t=fi.length-1;t>=0;t-=1){const n=fi[t];if(!n||e>=n.endAt){qr(n?.ownerId);continue}const s=M0(n.ownerId);if(!s){qr(n.ownerId);continue}if(n.hammers.length>0){let l=0;for(let u=0;u<n.hammers.length;u+=1){const h=n.hammers[u];h?.disposed||(n.hammers[l]=h,l+=1)}n.hammers.length=l}for(;n.nextSpawnAt<=e&&n.nextSpawnAt<n.endAt;){if(n.hammers.length<n.maxActiveHammers){const l=v0(.82,.95,n.team);l.position.copy(s),l.visible=!0,xe.add(l);const u=Math.max(0,Math.min(1,(n.nextSpawnAt-n.createdAt)/Math.max(1,n.endAt-n.createdAt)));n.hammers.push({mesh:l,spawnAt:n.nextSpawnAt,baseAngle:Math.random()*Math.PI*2+n.spawnCount%4*(Math.PI*.5),maxRadius:Math.max(2.2,n.maxOrbitRadius*(.22+u*.78)),prevPos:s.clone(),disposed:!1})}n.spawnCount+=1,n.nextSpawnAt+=n.spawnIntervalMs}const r=(e-n.createdAt)/1e3,o=Math.max(0,Math.min(1,(e-n.createdAt)/Math.max(1,n.endAt-n.createdAt))),a=1.15+Math.sin(r*5.5)*.12,c=!!(L.self&&n.ownerId===L.self.id);for(let l=0;l<n.hammers.length;l+=1){const u=n.hammers[l],h=u.mesh;if(!h||u.disposed)continue;h.visible=!0;const d=Math.max(0,Math.min(1,(e-u.spawnAt)/1200)),f=u.maxRadius*(.25+.75*o*d),m=n.phase+r*5.4+u.baseAngle+l*.11,_=f+Math.sin(r*3.4+l)*.12;u.prevPos.copy(h.position),h.position.set(s.x+Math.cos(m)*_,s.y+a+Math.sin(r*3.1+l)*.22,s.z+Math.sin(m)*_),h.rotation.set(r*5.8+l,r*6.5+l*.7,r*4.9+l);let g=null;if(h.position.y<=.22&&(g=h.position.clone(),g.y=.22),g||(g=va(u.prevPos,h.position,.34)),!g)if(c)for(const p of L.remotePlayers.values()){if(!p?.group||p.isDead)continue;const y=new C(p.group.position.x,p.group.position.y+1.85,p.group.position.z),E=new C(p.group.position.x,p.group.position.y+1.1,p.group.position.z);if(g=jr(u.prevPos,h.position,y,pa)||jr(u.prevPos,h.position,E,ma),g)break}else{const p=ya(u.prevPos,h.position);p&&(g=p.point)}if(g){pA(u,g);continue}if(Math.random()<.45){const p=Ct(h.position,Math.random()>.5?16773830:10154239);p&&(p.scale.setScalar(.45+Math.random()*.35),p.userData.life=.1+Math.random()*.1)}}}},HA=()=>{let i=0;for(let e=0;e<fi.length;e+=1){const t=fi[e];if(t?.hammers)for(let n=0;n<t.hammers.length;n+=1)t.hammers[n]?.mesh?.visible&&!t.hammers[n]?.disposed&&(i+=1)}return i},GA=i=>{const e=oo(je);if($t()){if(e){const t=mi;Ft=Math.min(_n,Ft+Mw*i),mi=Math.round(Ft),ii&&(ii=!1,Dr=0),mi!==t&&Nt()}if(!e&&ii&&(Dr-=i,Dr<=0)){const t=_s-Gi,n=Math.min(t,pi);Gi+=n,pi-=n,ii=!1,Nt()}if(du-=i,Ks){gn=!1;return}(Hs||ge.active)&&gn&&du<=0&&!ii&&(MA(),du=Qw(),!e&&Gi<=0&&pi>0&&zh())}},WA=()=>{if(!Et||!L.joinedRoom||!Jo()){Et&&!Jo()&&(Et=!1,Ki=0,Gn=Yi(),vi());return}const i=Math.max(0,Ki-performance.now()),e=Math.ceil(i/1e3);e!==Gn&&(Gn=e,vi()),i<=0&&oA()},XA=()=>{if(!Xr||!L.joinedRoom||L.joinedRoom.room.status!=="cooldown"){Xr&&Os();return}const i=Math.max(0,Uh-performance.now()),e=Math.ceil(i/1e3);e!==Nr&&(Nr=e,pd.textContent=String(Nr)),i<=0&&(pd.textContent="0")},mu=()=>!L.joinedRoom&&Vn&&!Vn.classList.contains("hidden"),qA=()=>vn()&&Bs&&!Bs.classList.contains("hidden"),R0=()=>{requestAnimationFrame(R0);const i=Math.min(Fw.getDelta(),.05);if(vs(),hT(),yA(),AA(i),RA(i),TA(i),cA(i),E0(),CA(i),PA(i),IA(i),LA(i),DA(i),NA(i),UA(i),OA(i),BA(i),kA(i),zA(i),VA(),GA(i),WA(),XA(),FA(i),sA(),rA(),kh(!1),g0(i),mu()&&Ke.mixer&&Ke.mixer.update(i),mu()&&Ke.model&&(Ke.model.rotation.y+=i*.45),mu()&&Ke.renderer&&Ke.scene&&Ke.camera&&($g(),Ke.renderer.render(Ke.scene,Ke.camera)),qA()&&zn.size>0)for(const e of zn.values()){if(!e.renderer||!e.scene||!e.camera||!e.node?.isConnected)continue;const t=Math.max(60,e.node.clientWidth||92),n=Math.max(60,e.node.clientHeight||92),s=e.renderer.domElement;s&&(s.width!==t||s.height!==n)&&e.renderer.setSize(t,n,!1),e.camera.aspect=t/n,e.camera.updateProjectionMatrix(),e.mixer&&e.mixer.update(i),e.model&&(e.model.rotation.y+=i*e.rotateSpeed),e.renderer.render(e.scene,e.camera)}fn.render(xe,Go()),ti.drawCalls=fn.info.render.calls||0,ti.triangles=fn.info.render.triangles||0,ti.geometries=fn.info.memory.geometries||0,ti.textures=fn.info.memory.textures||0,ti.vfx=zs.length+Lr.length+Vs.length+ko.length+zo.length+Vo.length+Ho.length+HA()};window.addEventListener("resize",()=>{ce.aspect=window.innerWidth/window.innerHeight,ce.updateProjectionMatrix(),Xs.aspect=window.innerWidth/window.innerHeight,Xs.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight),Ke.renderer&&Ke.camera&&$g(),vs()});window.addEventListener("orientationchange",vs);document.addEventListener("fullscreenchange",Lg);cT();XT();da();Uo(!1);Fo("night");Kg();vA();vs();vi();Nt();bd();Ma();R0();S0();NT();
