(function(g,h,c,j,d,l,k){/*! Jssor */
new(function(){});var e={xd:function(a){return-c.cos(a*c.PI)/2+.5},wd:function(a){return a},vg:function(a){return a*a},Qc:function(a){return-a*(a-2)},zg:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},sg:function(a){return a*a*a},pg:function(a){return(a-=1)*a*a+1},jg:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},Mf:function(a){return a*a*a*a},kf:function(a){return-((a-=1)*a*a*a-1)},jf:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},hf:function(a){return a*a*a*a*a},gf:function(a){return(a-=1)*a*a*a*a+1},ff:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},df:function(a){return 1-c.cos(c.PI/2*a)},cf:function(a){return c.sin(c.PI/2*a)},mf:function(a){return-1/2*(c.cos(c.PI*a)-1)},bf:function(a){return a==0?0:c.pow(2,10*(a-1))},Ze:function(a){return a==1?1:-c.pow(2,-10*a)+1},Ye:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.pow(2,10*(a-1)):1/2*(-c.pow(2,-10*--a)+2)},Te:function(a){return-(c.sqrt(1-a*a)-1)},xf:function(a){return c.sqrt(1-(a-=1)*a)},vf:function(a){return(a*=2)<1?-1/2*(c.sqrt(1-a*a)-1):1/2*(c.sqrt(1-(a-=2)*a)+1)},uf:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b))},tf:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.pow(2,-10*a)*c.sin((a-d)*2*c.PI/b)+1},sf:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b):c.pow(2,-10*(a-=1))*c.sin((a-d)*2*c.PI/b)*.5+1},rf:function(a){var b=1.70158;return a*a*((b+1)*a-b)},qf:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},lf:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},Vc:function(a){return 1-e.ic(1-a)},ic:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},tg:function(a){return a<1/2?e.Vc(a*2)*.5:e.ic(a*2-1)*.5+.5},wf:function(){return 1-c.abs(1)},yf:function(a){return 1-c.cos(a*c.PI*2)},Af:function(a){return c.sin(a*c.PI*2)},Kf:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},Bf:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},f={Cf:e.xd,Df:e.wd,Ef:e.vg,Ff:e.Qc,Hf:e.zg,If:e.sg,Jf:e.pg,zf:e.jg,of:e.Mf,af:e.kf,Re:e.jf,Se:e.hf,Ve:e.gf,We:e.ff,Xe:e.df,lg:e.cf,td:e.mf,og:e.bf,qg:e.Ze,ug:e.Ye,wg:e.Te,xg:e.xf,yg:e.vf,Ag:e.uf,hg:e.tf,rg:e.sf,eg:e.rf,Pf:e.qf,Qf:e.lf,Rf:e.Vc,Sf:e.ic,Uf:e.tg,Vf:e.wf,Xf:e.yf,Yf:e.Af,Zf:e.Kf,bg:e.Bf};var b=new function(){var f=this,Ab=/\S+/g,F=1,yb=2,fb=3,eb=4,jb=5,G,r=0,i=0,s=0,X=0,z=0,I=navigator,ob=I.appName,o=I.userAgent,p=parseFloat;function Ib(){if(!G){G={Gf:"ontouchstart"in g||"createTouch"in h};var a;if(I.pointerEnabled||(a=I.msPointerEnabled))G.qd=a?"msTouchAction":"touchAction"}return G}function v(j){if(!r){r=-1;if(ob=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var e=o.indexOf("MSIE");r=F;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_on X=@_jscript_version@*/;i=h.documentMode||s}else if(ob=="Netscape"&&!!g.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),f=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=yb;i=p(o.substring(d+8))}else if(b>=0){var k=o.substring(0,b).lastIndexOf("/");r=f>=0?eb:fb;i=p(o.substring(k+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=F;i=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=jb;i=p(a[2])}}}return j==r}function q(){return v(F)}function Q(){return q()&&(i<6||h.compatMode=="BackCompat")}function db(){return v(fb)}function ib(){return v(jb)}function vb(){return db()&&z>534&&z<535}function J(){v();return z>537||i>42||r==F&&i>=11}function O(){return q()&&i<9}function wb(a){var b,c;return function(f){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){var b=a;if(d)b=g+e;if(f.style[b]!=k)return c=b})}return c}}function ub(b){var a;return function(c){a=a||wb(b)(c)||b;return a}}var K=ub("transform");function nb(a){return{}.toString.call(a)}var kb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){kb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(nb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function C(a){return a==j?String(a):kb[nb(a)]||"object"}function lb(a){for(var b in a)return d}function A(a){try{return C(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function u(a,b){return{x:a,y:b}}function rb(b,a){setTimeout(b,a||0)}function H(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}function tb(b,a){if(i<9)b.style.filter=a}f.Qe=Ib;f.rd=q;f.pf=db;f.Ue=J;wb("transform");f.yd=function(){return i};f.Bd=rb;function Y(a){a.constructor===Y.caller&&a.Cd&&a.Cd.apply(a,Y.caller.arguments)}f.Cd=Y;f.qb=function(a){if(f.ef(a))a=h.getElementById(a);return a};function t(a){return a||g.event}f.fd=t;f.cc=function(b){b=t(b);var a=b.target||b.srcElement||h;if(a.nodeType==3)a=f.sd(a);return a};f.Kc=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};function D(c,d,a){if(a!==k)c.style[d]=a==k?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,j);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function ab(b,c,a,d){if(a!==k){if(a==j)a="";else d&&(a+="px");D(b,c,a)}else return p(D(b,c))}function m(c,a){var d=a?ab:D,b;if(a&4)b=ub(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Db(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?p(a[1])/100:1}else return p(b.style.opacity||"1")}function Fb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=H(h,[i],d);tb(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var L={gb:["rotate"],Q:["rotateX"],P:["rotateY"],Jb:["skewX"],Kb:["skewY"]};if(!J())L=B(L,{z:["scaleX",2],q:["scaleY",2],M:["translateZ",1]});function M(d,a){var c="";if(a){if(q()&&i&&i<10){delete a.Q;delete a.P;delete a.M}b.f(a,function(d,b){var a=L[b];if(a){var e=a[1]||0;if(N[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(J()){if(a.db||a.eb||a.M!=k)c+=" translate3d("+(a.db||0)+"px,"+(a.eb||0)+"px,"+(a.M||0)+"px)";if(a.z==k)a.z=1;if(a.q==k)a.q=1;if(a.z!=1||a.q!=1)c+=" scale3d("+a.z+", "+a.q+", 1)"}}d.style[K(d)]=c}f.Fc=m("transformOrigin",4);f.nf=m("backfaceVisibility",4);f.Lf=m("transformStyle",4);f.Of=m("perspective",6);f.Nf=m("perspectiveOrigin",4);f.ig=function(a,b){if(q()&&s<9||s<10&&Q())a.style.zoom=b==1?"":b;else{var c=K(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=H(e,[g],f);a.style[c]=d}};f.gc=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!f.kg(a,d))&&b(c)}};f.a=function(a,d,b,c){a=f.qb(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};f.K=function(a,c,d,b){a=f.qb(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};f.Lb=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};f.mg=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};f.J=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};f.ng=function(a,b){if(b==k)return a.textContent||a.innerText;var c=h.createTextNode(b);f.mc(a);a.appendChild(c)};f.zb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function mb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(U(a,b)==c)return a;if(!e){var d=mb(a,c,e,b);if(d)return d}}}f.D=mb;function S(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){U(a,b)==d&&c.push(a);if(!f){var e=S(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function gb(a,c,d){for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}f.Bg=gb;f.fg=function(b,a){return b.getElementsByTagName(a)};function B(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==k){a=c[b];var h=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}return d}f.I=B;function Z(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(A(a)&&A(b)){a=Z(a,b);e=!lb(a)}!e&&(d[c]=a)}}return d}f.Cc=function(a){return C(a)=="function"};f.ef=function(a){return C(a)=="string"};f.fc=function(a){return!isNaN(p(a))&&isFinite(a)};f.f=n;f.gg=A;function R(a){return h.createElement(a)}f.Hb=function(){return R("DIV")};f.Tf=function(){return R("SPAN")};f.ud=function(){};function V(b,c,a){if(a==k)return b.getAttribute(c);b.setAttribute(c,a)}function U(a,b){return V(a,b)||V(a,"data-"+b)}f.s=V;f.i=U;function x(b,a){if(a==k)return b.className;b.className=a}f.vd=x;function qb(b){var a={};n(b,function(b){if(b!=k)a[b]=b});return a}function sb(b,a){return b.match(a||Ab)}function P(b,a){return qb(sb(b||"",a))}f.Wf=sb;function bb(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function E(a,c,b){x(a,bb(" ",B(Z(P(x(a)),P(c)),P(b))))}f.sd=function(a){return a.parentNode};f.V=function(a){f.W(a,"none")};f.X=function(a,b){f.W(a,b?"none":"")};f.ag=function(b,a){b.removeAttribute(a)};f.cg=function(){return q()&&i<10};f.dg=function(d,a){if(a)d.style.clip="rect("+c.round(a.j||a.v||0)+"px "+c.round(a.F)+"px "+c.round(a.G)+"px "+c.round(a.k||a.A||0)+"px)";else if(a!==k){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=H(g,f,"");b.Pb(d,e)}};f.Z=function(){return+new Date};f.ab=function(b,a){b.appendChild(a)};f.Gb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};f.Sb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};f.Hd=function(a,b){n(a,function(a){f.Sb(a,b)})};f.mc=function(a){f.Hd(f.zb(a,d),a)};f.Md=function(a,b){var c=f.sd(a);b&1&&f.E(a,(f.n(c)-f.n(a))/2);b&2&&f.C(a,(f.p(c)-f.p(a))/2)};f.Ob=function(b,a){return parseInt(b,a||10)};f.Id=p;f.kg=function(b,a){var c=h.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return l}return b===a};function W(d,c,b){var a=d.cloneNode(!c);!b&&f.ag(a,"id");return a}f.sb=W;f.tb=function(e,g){var a=new Image;function b(e,d){f.K(a,"load",b);f.K(a,"abort",c);f.K(a,"error",c);g&&g(a,d)}function c(a){b(a,d)}if(ib()&&i<11.6||!e)b(!e);else{f.a(a,"load",b);f.a(a,"abort",c);f.a(a,"error",c);a.src=e}};f.Pd=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){f.tb(a.src,b)});b()};f.Rd=function(a,g,i,h){if(h)a=W(a);var c=S(a,g);if(!c.length)c=b.fg(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=W(i);x(e,x(d));b.Pb(e,d.style.cssText);b.Gb(e,d);b.Sb(d)}return a};function Gb(a){var l=this,p="",r=["av","pv","ds","dn"],e=[],q,j=0,g=0,d=0;function i(){E(a,q,e[d||j||g&2||g]);b.T(a,"pointer-events",d?"none":"")}function c(){j=0;i();f.K(h,"mouseup",c);f.K(h,"touchend",c);f.K(h,"touchcancel",c)}function o(a){if(d)f.Lb(a);else{j=4;i();f.a(h,"mouseup",c);f.a(h,"touchend",c);f.a(h,"touchcancel",c)}}l.Nd=function(a){if(a===k)return g;g=a&2||a&1;i()};l.Nb=function(a){if(a===k)return!d;d=a?0:3;i()};l.bb=a=f.qb(a);var m=b.Wf(x(a));if(m)p=m.shift();n(r,function(a){e.push(p+a)});q=bb(" ",e);e.unshift("");f.a(a,"mousedown",o);f.a(a,"touchstart",o)}f.dc=function(a){return new Gb(a)};f.T=D;f.Mb=m("overflow");f.C=m("top",2);f.E=m("left",2);f.n=m("width",2);f.p=m("height",2);f.Ec=m("marginLeft",2);f.ed=m("marginTop",2);f.B=m("position");f.W=m("display");f.u=m("zIndex",1);f.jc=function(b,a,c){if(a!=k)Fb(b,a,c);else return Db(b)};f.Pb=function(a,b){if(b!=k)a.style.cssText=b;else return a.style.cssText};var T={wb:f.jc,j:f.C,k:f.E,yb:f.n,Ab:f.p,Bb:f.B,Jg:f.W,Cb:f.u};function w(g,l){var e=O(),b=J(),d=vb(),h=K(g);function i(b,d,a){var e=b.ib(u(-d/2,-a/2)),f=b.ib(u(d/2,-a/2)),g=b.ib(u(d/2,a/2)),h=b.ib(u(-d/2,a/2));b.ib(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var n=a.M||0,p=(a.Q||0)%360,q=(a.P||0)%360,u=(a.gb||0)%360,l=a.z,m=a.q,g=a.Kg;if(l==k)l=1;if(m==k)m=1;if(g==k)g=1;if(e){n=0;p=0;q=0;g=0}var c=new Cb(a.db,a.eb,n);c.Q(p);c.P(q);c.qe(u);c.Vd(a.Jb,a.Kb);c.nc(l,m,g);if(b){c.mb(a.A,a.v);d.style[h]=c.ve()}else if(!X||X<9){var o="",j={x:0,y:0};if(a.R)j=i(c,a.R,a.fb);f.ed(d,j.y);f.Ec(d,j.x);o=c.ye();var s=d.style.filter,t=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),r=H(s,[t],o);tb(d,r)}}w=function(e,c){c=c||{};var h=c.A,i=c.v,g;n(T,function(a,b){g=c[b];g!==k&&a(e,g)});f.dg(e,c.g);if(!b){h!=k&&f.E(e,(c.Pc||0)+h);i!=k&&f.C(e,(c.Oc||0)+i)}if(c.ze)if(d)rb(f.J(j,M,e,c));else a(e,c)};f.Db=M;if(d)f.Db=w;if(e)f.Db=a;else if(!b)a=M;f.U=w;w(g,l)}f.Db=w;f.U=w;function Cb(i,k,o){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,i||0,k||0,o||0,1],h=c.sin,g=c.cos,l=c.tan;function f(a){return a*c.PI/180}function n(a,b){return{x:a,y:b}}function m(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return m.apply(j,(a||b).concat(c))}d.nc=function(a,c,d){if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.mb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.Q=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.P=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.qe=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.Vd=function(a,c){if(a||c){i=f(a);k=f(c);b=e([1,l(k),0,0,l(i),1,0,0,0,0,1,0,0,0,0,1])}};d.ib=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return n(a[12],a[13])};d.ve=function(){return"matrix3d("+b.join(",")+")"};d.ye=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.z=function(b,c){return a.Jc(b,c,0)};a.q=function(b,c){return a.Jc(b,0,c)};a.Jc=function(a,c,d){return b(a,[[c,0],[0,d]])};a.ib=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var N={Pc:0,Oc:0,A:0,v:0,cb:1,z:1,q:1,gb:0,Q:0,P:0,db:0,eb:0,M:0,Jb:0,Kb:0};f.dd=function(a){var c=a||{};if(a)if(b.Cc(a))c={bc:c};else if(b.Cc(a.g))c.g={bc:a.g};return c};function pb(c,a){var b={};n(c,function(c,d){var e=c;if(a[d]!=k)if(f.fc(c))e=c+a[d];else e=pb(c,a[d]);b[d]=e});return b}f.Ie=pb;f.Je=function(l,m,x,q,z,A,n){var a=m;if(l){a={};for(var g in m){var B=A[g]||1,w=z[g]||[0,1],f=(x-w[0])/w[1];f=c.min(c.max(f,0),1);f=f*B;var u=c.floor(f);if(f!=u)f-=u;var h=q.bc||e.xd,i,C=l[g],o=m[g];if(b.fc(o)){h=q[g]||h;var y=h(f);i=C+o*y}else{i=b.I({Ib:{}},l[g]);var v=q[g]||{};b.f(o.Ib||o,function(d,a){h=v[a]||v.bc||h;var c=h(f),b=d*c;i.Ib[a]=b;i[a]+=b})}a[g]=i}var t=b.f(m,function(b,a){return N[a]!=k});t&&b.f(N,function(c,b){if(a[b]==k&&l[b]!==k)a[b]=l[b]});if(t){if(a.cb)a.z=a.q=a.cb;a.R=n.R;a.fb=n.fb;a.ze=d}}if(m.g&&n.mb){var p=a.g.Ib,s=(p.j||0)+(p.G||0),r=(p.k||0)+(p.F||0);a.k=(a.k||0)+r;a.j=(a.j||0)+s;a.g.k-=r;a.g.F-=r;a.g.j-=s;a.g.G-=s}if(a.g&&b.cg()&&!a.g.j&&!a.g.k&&!a.g.v&&!a.g.A&&a.g.F==n.R&&a.g.G==n.fb)a.g=j;return a}};function n(){var a=this,d=[];function i(a,b){d.push({Zb:a,sc:b})}function h(a,c){b.f(d,function(b,e){b.Zb==a&&b.sc===c&&d.splice(e,1)})}a.ob=a.addEventListener=i;a.removeEventListener=h;a.l=function(a){var c=[].slice.call(arguments,1);b.f(d,function(b){b.Zb==a&&b.sc.apply(g,c)})}}var m=function(z,C,f,K,N,M){z=z||0;var a=this,q,o,p,u,A=0,G,H,F,B,y=0,i=0,m=0,D,k,e,h,n,J,w=[],x;function P(a){e+=a;h+=a;k+=a;i+=a;m+=a;y+=a}function t(p){var g=p;if(n){if(g>=h||g<=e&&!J)g=((g-e)%n+n)%n+e;if(f.Me&&g<=e)g=e+n}if(!D||u||i!=g){var j=c.min(g,h);j=c.max(j,e);if(!D||u||j!=m){if(M){var l=(j-k)/(C||1);if(f.se)l=1-l;var o=b.Je(N,M,l,G,F,H,f);if(x)b.f(o,function(b,a){x[a]&&x[a](K,b)});else b.U(K,o)}a.Xb(m-k,j-k);var r=m,q=m=j;b.f(w,function(b,c){var a=g<=i?w[w.length-c-1]:b;a.H(m-y)});i=g;D=d;a.Qb(r,q)}}}function E(a,b,d){b&&a.lb(h);if(!d){e=c.min(e,a.Wb()+y);h=c.max(h,a.Fb()+y)}w.push(a)}var r=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.msRequestAnimationFrame;if(b.pf()&&b.yd()<7)r=j;r=r||function(a){b.Bd(a,f.od)};function I(){if(q){var d=b.Z(),e=c.min(d-A,f.nd),a=i+e*p;A=d;if(a*p>=o*p)a=o;t(a);if(!u&&a*p>=o*p)L(B);else r(I)}}function s(f,g,j){if(!q){q=d;u=j;B=g;f=c.max(f,e);f=c.min(f,h);o=f;p=o<i?-1:1;a.md();A=b.Z();r(I)}}function L(b){if(q){u=q=B=l;a.ld();b&&b()}}a.kd=function(a,b,c){s(a?i+a:h,b,c)};a.jd=s;a.hb=L;a.fe=function(a){s(a)};a.Y=function(){return i};a.hd=function(){return o};a.xb=function(){return m};a.H=t;a.mb=function(a){t(i+a)};a.gd=function(){return q};a.Xd=function(a){n=a};a.lb=P;a.O=function(a,b){E(a,0,b)};a.rc=function(a){E(a,1)};a.Zd=function(a){h+=a};a.Wb=function(){return e};a.Fb=function(){return h};a.Qb=a.md=a.ld=a.Xb=b.ud;a.yc=b.Z();f=b.I({od:16,nd:50},f);n=f.zc;J=f.ae;x=f.be;e=k=z;h=z+C;H=f.ce||{};F=f.de||{};G=b.dd(f.S)};new(function(){});var i=function(p,fc){var f=this;function Bc(){var a=this;m.call(a,-1e8,2e8);a.me=function(){var b=a.xb(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{jb:f,ne:d,Bb:e}};a.Qb=function(b,a){var e=c.floor(a);if(e!=a&&a>b)e++;Tb(e,d);f.l(i.oe,t(a),t(b),a,b)}}function Ac(){var a=this;m.call(a,0,0,{zc:r});b.f(C,function(b){D&1&&b.Xd(r);a.rc(b);b.lb(kb/bc)})}function zc(){var a=this,b=Ub.bb;m.call(a,-1,2,{S:e.wd,be:{Bb:Zb},zc:r},b,{Bb:1},{Bb:-2});a.uc=b}function mc(o,n){var b=this,e,g,h,k,c;m.call(b,-1e8,2e8,{nd:100});b.md=function(){M=d;R=j;f.l(i.Oe,t(w.Y()),w.Y())};b.ld=function(){M=l;k=l;var a=w.me();f.l(i.De,t(w.Y()),w.Y());!a.Bb&&Dc(a.ne,s)};b.Qb=function(i,f){var b;if(k)b=c;else{b=g;if(h){var d=f/h;b=a.Yc(d)*(g-e)+e}}w.H(b)};b.Vb=function(a,d,c,f){e=a;g=d;h=c;w.H(a);b.H(0);b.jd(c,f)};b.ie=function(a){k=d;c=a;b.kd(a,j,d)};b.ge=function(a){c=a};w=new Bc;w.O(o);w.O(n)}function oc(){var c=this,a=Xb();b.u(a,0);b.T(a,"pointerEvents","none");c.bb=a;c.Rb=function(){b.V(a);b.mc(a)}}function xc(o,g){var e=this,q,M,v,k,y=[],x,B,W,H,S,F,h,w,p;m.call(e,-u,u+1,{});function E(a){q&&q.Dd();T(o,a,0);F=d;q=new I.L(o,I,b.Id(b.i(o,"idle"))||lc);q.H(0)}function Z(){q.yc<I.yc&&E()}function O(p,r,o){if(!H){H=d;if(k&&o){var h=o.width,c=o.height,n=h,m=c;if(h&&c&&a.Eb){if(a.Eb&3&&(!(a.Eb&4)||h>K||c>J)){var j=l,q=K/J*c/h;if(a.Eb&1)j=q>1;else if(a.Eb&2)j=q<1;n=j?h*J/c:K;m=j?J:c*K/h}b.n(k,n);b.p(k,m);b.C(k,(J-m)/2);b.E(k,(K-n)/2)}b.B(k,"absolute");f.l(i.Yd,g)}}b.V(r);p&&p(e)}function Y(b,c,d,f){if(f==R&&s==g&&N)if(!Cc){var a=t(b);A.je(a,g,c,e,d);c.Wd();U.lb(a-U.Wb()-1);U.H(a);z.Vb(b,b,0)}}function bb(b){if(b==R&&s==g){if(!h){var a=j;if(A)if(A.jb==g)a=A.le();else A.Rb();Z();h=new vc(o,g,a,q);h.id(p)}!h.gd()&&h.qc()}}function G(d,f,l){if(d==g){if(d!=f)C[f]&&C[f].pd();else!l&&h&&h.re();p&&p.Nb();var m=R=b.Z();e.tb(b.J(j,bb,m))}else{var k=c.min(g,d),i=c.max(g,d),o=c.min(i-k,k+r-i),n=u+a.Ce-1;(!S||o<=n)&&e.tb()}}function db(){if(s==g&&h){h.hb();p&&p.Le();p&&p.Ke();h.zd()}}function eb(){s==g&&h&&h.hb()}function ab(a){!P&&f.l(i.He,g,a)}function Q(){p=w.pInstance;h&&h.id(p)}e.tb=function(c,a){a=a||v;if(y.length&&!H){b.X(a);if(!W){W=d;f.l(i.Ge,g);b.f(y,function(a){if(!b.s(a,"src")){a.src=b.i(a,"src2");b.W(a,a["display-origin"])}})}b.Pd(y,k,b.J(j,O,c,a))}else O(c,a)};e.Fe=function(){var i=g;if(a.Ic<0)i-=r;var d=i+a.Ic*tc;if(D&2)d=t(d);if(!(D&1)&&!ib)d=c.max(0,c.min(d,r-u));if(d!=g){if(A){var f=A.he(r);if(f){var k=R=b.Z(),h=C[t(d)];return h.tb(b.J(j,Y,d,h,f,k),v)}}cb(d)}else if(a.ub){e.pd();G(g,g)}};e.ec=function(){G(g,g,d)};e.pd=function(){p&&p.Le();p&&p.Ke();e.Hc();h&&h.Ee();h=j;E()};e.Wd=function(){b.V(o)};e.Hc=function(){b.X(o)};e.Ne=function(){p&&p.Nb()};function T(a,c,e){if(b.s(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.s(a,"src")){S=d;a["display-origin"]=b.W(a);b.V(a)}}if(e){b.u(a,(b.u(a)||0)+1);b.ed(a,0);b.Ec(a,0);b.Db(a,{M:0})}}var f=b.zb(a);b.f(f,function(f){var h=f.tagName,i=b.i(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)Q();else b.a(w,"dataavailable",Q)}if(i=="caption"){if(c){b.Fc(f,b.i(f,"to"));b.nf(f,b.i(f,"bf"));b.i(f,"3d")&&b.Lf(f,"preserve-3d")}else if(!b.rd()){var g=b.sb(f,l,d);b.Gb(g,f,a);b.Sb(f,a);f=g;c=d}}else if(!F&&!e&&!k){if(h=="A"){if(b.i(f,"u")=="image")k=b.Bg(f,"IMG");else k=b.D(f,"image",d);if(k){x=f;b.W(x,"block");b.U(x,V);B=b.sb(x,d);b.B(x,"relative");b.jc(B,0);b.T(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.i(f,"u")=="image")k=f;if(k){k.border=0;b.U(k,V)}}T(f,c,e+1)})}e.Xb=function(c,b){var a=u-b;Zb(M,a)};e.jb=g;n.call(e);b.Of(o,b.i(o,"p"));b.Nf(o,b.i(o,"po"));var L=b.D(o,"thumb",d);if(L){b.sb(L);b.V(L)}b.X(o);v=b.sb(gb);b.u(v,1e3);b.a(o,"click",ab);E(d);e.ke=k;e.Lc=B;e.uc=M=o;b.ab(M,v);f.ob(203,G);f.ob(28,eb);f.ob(24,db)}function vc(y,g,p,q){var a=this,n=0,u=0,h,j,e,c,k,t,r,o=C[g];m.call(a,0,0);function v(){b.mc(L);cc&&k&&o.Lc&&b.ab(L,o.Lc);b.X(L,!k&&o.ke)}function w(){a.qc()}function x(b){r=b;a.hb();a.qc()}a.qc=function(){var b=a.xb();if(!B&&!M&&!r&&s==g){if(!b){if(h&&!k){k=d;a.zd(d);f.l(i.Ud,g,n,u,h,c)}v()}var l,p=i.Dc;if(b!=c)if(b==e)l=c;else if(b==j)l=e;else if(!b)l=j;else l=a.hd();f.l(p,g,b,n,j,e,c);var m=N&&(!E||F);if(b==c)(e!=c&&!(E&12)||m)&&o.Fe();else(m||b!=e)&&a.jd(l,w)}};a.re=function(){e==c&&e==a.xb()&&a.H(j)};a.Ee=function(){A&&A.jb==g&&A.Rb();var b=a.xb();b<c&&f.l(i.Dc,g,-b-1,n,j,e,c)};a.zd=function(a){p&&b.Mb(lb,a&&p.wc.Cg?"":"hidden")};a.Xb=function(b,a){if(k&&a>=h){k=l;v();o.Hc();A.Rb();f.l(i.Be,g,n,u,h,c)}f.l(i.Ae,g,a,n,j,e,c)};a.id=function(a){if(a&&!t){t=a;a.ob($JssorPlayer$.ee,x)}};p&&a.rc(p);h=a.Fb();a.rc(q);j=h+q.Mc;e=h+q.Nc;c=a.Fb()}function Kb(a,c,d){b.E(a,c);b.C(a,d)}function Zb(c,b){var a=x>0?x:fb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){qb=M;Ib=z.hd();G=w.Y()}function gc(){Pb();if(B||!F&&E&12){z.hb();f.l(i.xe)}}function ec(f){if(!B&&(F||!(E&12))&&!z.gd()){var d=w.Y(),b=c.ceil(G);if(f&&c.abs(H)>=a.Tc){b=c.ceil(d);b+=jb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&qb)z.fe(Ib);else if(d==b){tb.Ne();tb.ec()}else z.Vb(d,b,e*Vb)}}function Hb(a){!b.i(b.cc(a),"nodrag")&&b.Lb(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.fd(a);var k=b.cc(a);if(!O&&!b.i(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;R=j;b.a(h,c?"touchmove":"mousemove",Bb);b.Z();P=0;gc();if(!qb)x=0;if(c){var g=a.touches[0];ub=g.clientX;vb=g.clientY}else{var e=b.Kc(a);ub=e.x;vb=e.y}H=0;hb=0;jb=0;f.l(i.we,t(G),G,a)}}function Bb(e){if(B){e=b.fd(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.Kc(e);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||fb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=O;if(ob&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-hb<-2)jb=0;else if(H-hb>2)jb=-1;hb=H;H=a;sb=G-H/i/(Y||1);if(H&&x&&!yb){b.Lb(e);if(!M)z.ie(sb);else z.ge(sb)}}}}}function bb(){qc();if(B){B=l;b.Z();b.K(h,"mousemove",Bb);b.K(h,"touchmove",Bb);P=H;z.hb();var a=w.Y();f.l(i.ue,t(a),a,t(G),G);E&12&&Pb();ec(d)}}function jc(c){if(P){b.mg(c);var a=b.cc(c);while(a&&v!==a){a.tagName=="A"&&b.Lb(c);try{a=a.parentNode}catch(d){break}}}}function Jb(a){C[s];s=t(a);tb=C[s];Tb(a);return s}function Dc(a,b){x=0;Jb(a);f.l(i.te,t(a),b)}function Tb(a,c){wb=a;b.f(S,function(b){b.oc(t(a),a,c)})}function sc(){var b=i.bd||0,a=X;if(ob)a&1&&(a&=1);i.bd|=a;return O=a&~b}function qc(){if(O){i.bd&=~X;O=0}}function Xb(){var a=b.Hb();b.U(a,V);b.B(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}else if(D&2){b=t(b+wb);d=l}cb(b,a.pc,d)}function xb(){b.f(S,function(a){a.Yb(a.Tb.Gg<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].ec()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={yb:K,Ab:J,j:0,k:0};b.f(T,function(a){b.U(a,V);b.B(a,"absolute");b.Mb(a,"hidden");b.V(a)});b.U(gb,V)}function ab(b,a){cb(b,a,d)}function cb(g,f,j){if(Rb&&(!B&&(F||!(E&12))||a.ad)){M=d;B=l;z.hb();if(f==k)f=Vb;var e=Cb.xb(),b=g;if(j){b=e+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var i=(b-e)%r;b=e+i;var h=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.Vb(e,b,h||1)}}f.kd=function(){if(!N){N=d;C[s]&&C[s].ec()}};function W(){return b.n(y||p)}function nb(){return b.p(y||p)}f.R=W;f.fb=nb;function Eb(c,d){if(c==k)return b.n(p);if(!y){var a=b.Hb(h);b.vd(a,b.vd(p));b.Pb(a,b.Pb(p));b.W(a,"block");b.B(a,"relative");b.C(a,0);b.E(a,0);b.Mb(a,"visible");y=b.Hb(h);b.B(y,"absolute");b.C(y,0);b.E(y,0);b.n(y,b.n(p));b.p(y,b.p(p));b.Fc(y,"0 0");b.ab(y,a);var g=b.zb(p);b.ab(p,y);b.T(p,"backgroundImage","");b.f(g,function(c){b.ab(b.i(c,"noscale")?p:a,c);b.i(c,"autocenter")&&Lb.push(c)})}Y=c/(d?b.p:b.n)(y);b.ig(y,Y);var f=d?Y*W():c,e=d?c:Y*nb();b.n(p,f);b.p(p,e);b.f(Lb,function(a){var c=b.Ob(b.i(a,"autocenter"));b.Md(a,c)})}f.Jd=Eb;n.call(f);f.bb=p=b.qb(p);var a=b.I({Eb:0,Ce:1,lc:1,kc:0,hc:l,ub:1,vb:d,ad:d,Ic:1,Sc:3e3,Rc:1,pc:500,Yc:e.Qc,Tc:20,cd:0,rb:1,Gc:0,Fd:1,ac:1,Ad:1},fc);a.vb=a.vb&&b.Ue();if(a.Ld!=k)a.Sc=a.Ld;if(a.Od!=k)a.Gc=a.Od;var fb=a.ac&3,tc=(a.ac&4)/-4||1,mb=a.Ig,I=b.I({L:q,vb:a.vb},a.Sd);I.pb=I.pb||I.Hg;var Fb=a.Ed,Z=a.Td,eb=a.Eg,Q=!a.Fd,y,v=b.D(p,"slides",Q),gb=b.D(p,"loading",Q)||b.Hb(h),Nb=b.D(p,"navigator",Q),dc=b.D(p,"arrowleft",Q),ac=b.D(p,"arrowright",Q),Mb=b.D(p,"thumbnavigator",Q),pc=b.n(v),nc=b.p(v),V,T=[],uc=b.zb(v);b.f(uc,function(a){a.tagName=="DIV"&&!b.i(a,"u")&&T.push(a);b.u(a,(b.u(a)||0)+1)});var s=-1,wb,tb,r=T.length,K=a.Qd||pc,J=a.Kd||nc,Wb=a.cd,zb=K+Wb,Ab=J+Wb,bc=fb&1?zb:Ab,u=c.min(a.rb,r),lb,x,O,yb,S=[],Qb,Sb,Ob,cc,Cc,N,E=a.Rc,lc=a.Sc,Vb=a.pc,rb,ib,kb,Rb=u<r,D=Rb?a.ub:0,X,P,F=1,M,B,R,ub=0,vb=0,H,hb,jb,Cb,w,U,z,Ub=new oc,Y,Lb=[];if(r){if(a.vb)Kb=function(a,c,d){b.Db(a,{db:c,eb:d})};N=a.hc;f.Tb=fc;ic();b.s(p,"jssor-slider",d);b.u(v,b.u(v)||0);b.B(v,"absolute");lb=b.sb(v,d);b.Gb(lb,v);if(mb){cc=mb.Dg;rb=mb.L;ib=u==1&&r>1&&rb&&(!b.rd()||b.yd()>=8)}kb=ib||u>=r||!(D&1)?0:a.Gc;X=(u>1||kb?fb:-1)&a.Ad;var Gb=v,C=[],A,L,Db=b.Qe(),ob=Db.Gf,G,qb,Ib,sb;Db.qd&&b.T(Gb,Db.qd,([j,"pan-y","pan-x","none"])[X]||"");U=new zc;if(ib)A=new rb(Ub,K,J,mb,ob);b.ab(lb,U.uc);b.Mb(v,"hidden");L=Xb();b.T(L,"backgroundColor","#000");b.jc(L,0);b.Gb(L,Gb.firstChild,Gb);for(var db=0;db<T.length;db++){var wc=T[db],yc=new xc(wc,db);C.push(yc)}b.V(gb);Cb=new Ac;z=new mc(Cb,U);b.a(v,"click",jc,d);b.a(p,"mouseout",b.gc(hc,p));b.a(p,"mouseover",b.gc(Ec,p));if(X){b.a(v,"mousedown",Yb);b.a(v,"touchstart",rc);b.a(v,"dragstart",Hb);b.a(v,"selectstart",Hb);b.a(h,"mouseup",bb);b.a(h,"touchend",bb);b.a(h,"touchcancel",bb);b.a(g,"blur",bb)}E&=ob?10:5;if(Nb&&Fb){Qb=new Fb.L(Nb,Fb,W(),nb());S.push(Qb)}if(Z&&dc&&ac){Z.ub=D;Z.rb=u;Sb=new Z.L(dc,ac,Z,W(),nb());S.push(Sb)}if(Mb&&eb){eb.kc=a.kc;Ob=new eb.L(Mb,eb);S.push(Ob)}b.f(S,function(a){a.tc(r,C,gb);a.ob(o.xc,kc)});b.T(p,"visibility","visible");Eb(W());xb();a.lc&&b.a(h,"keydown",function(b){if(b.keyCode==37)ab(-a.lc);else b.keyCode==39&&ab(a.lc)});var pb=a.kc;if(!(D&1))pb=c.max(0,c.min(pb,r-u));z.Vb(pb,pb,0)}};i.He=21;i.we=22;i.ue=23;i.Oe=24;i.De=25;i.Ge=26;i.Yd=27;i.xe=28;i.oe=202;i.te=203;i.Ud=206;i.Be=207;i.Ae=208;i.Dc=209;var o={xc:1},r=function(e,C){var f=this;n.call(f);e=b.qb(e);var s,A,z,r,k=0,a,m,i,w,x,h,g,q,p,B=[],y=[];function v(a){a!=-1&&y[a].Nd(a==k)}function t(a){f.l(o.xc,a*m)}f.bb=e;f.oc=function(a){if(a!=r){var d=k,b=c.floor(a/m);k=b;r=a;v(d);v(b)}};f.Yb=function(a){b.X(e,a)};var u;f.tc=function(D){if(!u){s=c.ceil(D/m);k=0;var o=q+w,r=p+x,n=c.ceil(s/i)-1;A=q+o*(!h?n:i-1);z=p+r*(h?n:i-1);b.n(e,A);b.p(e,z);for(var f=0;f<s;f++){var C=b.Tf();b.ng(C,f+1);var l=b.Rd(g,"numbertemplate",C,d);b.B(l,"absolute");var v=f%(n+1);b.E(l,!h?o*v:f%i*o);b.C(l,h?r*v:c.floor(f/(n+1))*r);b.ab(e,l);B[f]=l;a.Ac&1&&b.a(l,"click",b.J(j,t,f));a.Ac&2&&b.a(l,"mouseover",b.gc(b.J(j,t,f),l));y[f]=b.dc(l)}u=d}};f.Tb=a=b.I({Uc:10,Wc:10,Xc:1,Ac:1},C);g=b.D(e,"prototype");q=b.n(g);p=b.p(g);b.Sb(g,e);m=a.Zc||1;i=a.pe||1;w=a.Uc;x=a.Wc;h=a.Xc-1;a.nc==l&&b.s(e,"noscale",d);a.nb&&b.s(e,"autocenter",a.nb)},s=function(a,g,h){var c=this;n.call(c);var r,e,f,i;b.n(a);b.p(a);var p,m;function k(a){c.l(o.xc,a,d)}function t(c){b.X(a,c);b.X(g,c)}function s(){p.Nb(h.ub||e>0);m.Nb(h.ub||e<r-h.rb)}c.oc=function(b,a,c){if(c)e=a;else{e=b;s()}};c.Yb=t;var q;c.tc=function(c){r=c;e=0;if(!q){b.a(a,"click",b.J(j,k,-i));b.a(g,"click",b.J(j,k,i));p=b.dc(a);m=b.dc(g);q=d}};c.Tb=f=b.I({Zc:1},h);i=f.Zc;if(f.nc==l){b.s(a,"noscale",d);b.s(g,"noscale",d)}if(f.nb){b.s(a,"autocenter",f.nb);b.s(g,"autocenter",f.nb)}};function q(e,d,c){var a=this;m.call(a,0,c);a.Dd=b.ud;a.Mc=0;a.Nc=c}var t=function(v,g,u){var a=this,w,n={},p=g.pb,r=g.Fg,e=new m(0,0),t=[],o=[],h=[];m.call(a,0,0);function q(d,c){var a={};b.f(d,function(d,f){var e=n[f];if(e){if(b.gg(d))d=q(d,c||f=="e");else if(c)if(b.fc(d))d=w[d];a[e]=d}});return a}function s(e,c){var a=[],d=b.zb(e);b.f(d,function(d){var h=b.i(d,"u")=="caption";if(h){var e=b.i(d,"t"),g=p[b.Ob(e)]||p[e],f={bb:d,wc:g};a.push(f)}if(c<5)a=a.concat(s(d,c+1))});return a}function l(c,d,e){var a=0;!b.f(c,function(b,c){a=c;return b.N>e})&&a++;c.splice(a,0,d)}function z(k,n,e){var a;if(r){var i=b.i(k,"c");if(i){var g=r[b.Ob(i)];if(g){a={N:g.r,kb:0,Ub:[],vc:[],Bc:0};l(h,a,g.b)}}}b.f(n,function(g){var f=b.I(d,{},q(g)),i=b.dd(f.S);delete f.S;if(f.k){f.A=f.k;i.A=i.k;delete f.k}if(f.j){f.v=f.j;i.v=i.j;delete f.j}var p={S:i,R:e.yb,fb:e.Ab},n=new m(g.b,g.d,p,k,e,f),h=t[g.b];if(h==j){h={N:g.b,Ub:[]};t[g.b]=h;l(o,h,g.b)}h.Ub.push(n);if(a&&g.b+g.d>a.N){a.kb=c.max(a.kb,g.b+g.d);a.vc.push(n)}e=b.Ie(e,f)});if(a&&a.vc.length){var f=new m(a.N,a.kb-a.N,{zc:a.kb-a.N,ae:d,Me:d});b.f(a.vc,function(a){f.O(a,d)});f.lb(a.kb-a.N);a.Ub=[f]}return e}function y(a){b.f(a,function(d){var a=d.bb,f=b.n(a),e=b.p(a),c={k:b.E(a),j:b.C(a),A:0,v:0,wb:1,Cb:b.u(a)||0,gb:0,Q:0,P:0,z:1,q:1,db:0,eb:0,M:0,Jb:0,Kb:0,yb:f,Ab:e,g:{j:0,F:f,G:e,k:0}};c.Pc=c.k;c.Oc=c.j;z(a,d.wc,c)})}function B(g,f,h){var c=g.b-f;if(c){var b=new m(f,c);b.O(e,d);b.lb(h);a.O(b)}a.Zd(g.d);return c}function A(f){var c=e.Wb(),d=0;b.f(f,function(e,f){e=b.I({d:u},e);B(e,c,d);c=e.b;d+=e.d;if(!f||e.t==2){a.Mc=c;a.Nc=c+e.d}b.f(h,function(a){if(a.kb>e.b)a.Bc+=e.d})})}function i(j,e,a){var f=e.length;if(f>4)for(var k=c.ceil(f/4),d=0;d<k;d++){var g=e.slice(d*4,c.min(d*4+4,f)),h=new m(g[0].N,a||0);i(h,g,a);j.O(h,a)}else b.f(e,function(c){b.f(c.Ub,function(b){b.lb(c.Bc||0);j.O(b,a)})})}a.Dd=function(){a.H(-1,d)};w=[f.Cf,f.Df,f.Ef,f.Ff,f.Hf,f.If,f.Jf,f.zf,f.of,f.af,f.Re,f.Se,f.Ve,f.We,f.Xe,f.lg,f.td,f.og,f.qg,f.ug,f.wg,f.xg,f.yg,f.Ag,f.hg,f.rg,f.eg,f.Pf,f.Qf,f.Rf,f.Sf,f.Uf,f.Vf,f.Xf,f.Yf,f.Zf,f.bg];var C={j:"y",k:"x",G:"m",F:"t",gb:"r",Q:"rX",P:"rY",z:"sX",q:"sY",db:"tX",eb:"tY",M:"tZ",Jb:"kX",Kb:"kY",wb:"o",S:"e",Cb:"i",g:"c"};b.f(C,function(b,a){n[b]=a});y(s(v,1));i(e,o);var x=g.Pe||[],k=[].concat(x[b.Ob(b.i(v,"b"))]||[]);k.push({b:e.Fb(),d:k.length?0:u});A(k);i(a,h,a.Fb());a.H(-1)};jssor_1_slider_init=function(){var h=[[{b:-1,d:1,o:-1},{b:0,d:1e3,x:-257,y:-5,o:1}],[{b:480,d:520,x:120,y:-270}],[{b:1e3,d:500,y:250},{b:8e3,d:1e3,x:600}],[{b:-1,d:1,o:-1,sX:-.6,sY:-.6},{b:1500,d:500,o:1,r:360,sX:.6,sY:.6},{b:8e3,d:1e3,y:-150}],[{b:-1,d:1,o:-1,tZ:-200},{b:2e3,d:1e3,o:1,tZ:200},{b:3e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,o:-1,tZ:-200},{b:3e3,d:1e3,o:1,tZ:200},{b:4e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,o:-1,tZ:-200},{b:4e3,d:1e3,o:1,tZ:200},{b:5e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,o:-1,tZ:-200},{b:5e3,d:1e3,o:1,tZ:200},{b:6e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,o:-1,tZ:-200},{b:6e3,d:1e3,o:1,tZ:200},{b:7e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,o:-1,tZ:-200},{b:7e3,d:1e3,o:1,tZ:200},{b:8e3,d:1e3,o:-1,tZ:200}],[{b:-1,d:1,c:{x:250,t:-250}},{b:0,d:1e3,c:{x:-250,t:250}},{b:5e3,d:1e3,y:100}],[{b:-1,d:1,o:-1},{b:1e3,d:1e3,o:1},{b:5e3,d:1e3,y:280}],[{b:2e3,d:1e3,y:190,e:{y:28}},{b:5e3,d:1e3,x:280}],[{b:3e3,d:520,y:50},{b:5e3,d:1e3,y:-50}],[{b:3520,d:480,x:-400},{b:5e3,d:800,x:400,e:{x:7}}],[{b:4e3,d:500,x:-400},{b:5e3,d:800,x:400,e:{x:7}}],[{b:4500,d:500,x:-400},{b:5e3,d:800,x:400,e:{x:7}}],[{b:-1,d:1,c:{x:250,t:-250}},{b:0,d:1e3,c:{x:-250,t:250}},{b:1e4,d:500,y:90}],[{b:-1,d:1,c:{x:150,t:-150}},{b:1e3,d:1e3,c:{x:-150,t:150}},{b:1e4,d:500,c:{y:150,m:-150}}],[{b:2e3,d:500,x:220}],[{b:3500,d:500,rX:-20},{b:4e3,d:1e3,rX:40},{b:5e3,d:500,rX:-10},{b:9500,d:500,o:-1}],[{b:3500,d:2e3,r:360}],[{b:-1,d:1,o:-1},{b:2500,d:500,x:76,y:-25,o:1}],[{b:-1,d:1,o:-1},{b:2500,d:500,x:47,y:65,o:1}],[{b:-1,d:1,o:-1},{b:2500,d:500,x:-47,y:65,o:1}],[{b:-1,d:1,o:-1},{b:2500,d:500,x:-76,y:-25,o:1}],[{b:-1,d:1,o:-1},{b:2500,d:500,y:-80,o:1}],[{b:-1,d:1,c:{x:120,t:-120}},{b:6100,d:400,c:{x:-120,t:120}},{b:1e4,d:500,y:-120}],[{b:6500,d:500,x:220}],[{b:-1,d:1,o:-1,r:180,sX:-.5,sY:-.5},{b:7e3,d:500,o:1,r:180,sX:.5,sY:.5},{b:8e3,d:500,o:-1,r:180,sX:9,sY:9}],[{b:-1,d:1,o:-1,r:180,sX:-.5,sY:-.5},{b:8e3,d:500,o:1,r:180,sX:.5,sY:.5},{b:9e3,d:500,o:-1,r:180,sX:9,sY:9}],[{b:-1,d:1,o:-1,r:180,sX:-.5,sY:-.5},{b:9e3,d:500,o:1,r:180,sX:.5,sY:.5},{b:9500,d:500,o:-1,r:180,sX:9,sY:9}]],j={hc:d,Yc:f.td,Sd:{L:t,pb:h,Pe:[[{d:3e3,b:8e3,t:2}],[{d:2e3,b:5e3}],[{d:3e3,b:9500,t:2}]]},Td:{L:s},Ed:{L:r}},e=new i("jssor_1",j);function a(){var b=e.bb.parentNode.clientWidth;if(b){b=c.min(b,980);e.Jd(b)}else g.setTimeout(a,30)}a();b.a(g,"load",a);b.a(g,"resize",a);b.a(g,"orientationchange",a)}})(window,document,Math,null,true,false)