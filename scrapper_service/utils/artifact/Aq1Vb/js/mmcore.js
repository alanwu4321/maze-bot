/*! Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.16 */
/*v1.16.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(e,C){function u(a,c){return typeof a===c}function L(a){return u(a,"function")}function v(a){return u(a,"undefined")}function M(a){return!v(a)&&null!==a}function y(a,c){return Object.prototype.hasOwnProperty.call(a,c)}function G(a,c){return y(a,c)&&u(a[c],"string")}function N(a,c,b){try{L(a)&&a.apply(c,b)}catch(D){V&&V.log(D)}}function f(a,c){for(var b in a)y(a,b)&&c(a[b],b)}function O(a){var c=!1;f(a,function(){c=!0});return!c}function H(a){var c=new Date;c.setTime(c.getTime()+864E5*a);
return c}function ea(a,c,b){b=b||0;for(var e=a.length;b<e;b++)if(a[b]===c||L(c)&&c(a[b]))return b;return-1}function I(a){a=JSON.parse('{"v":'+a+"}");return"v"in a?a.v:a}function aa(a){function c(){for(var a=document.cookie.split(/;\s+/g),b={},c=0;c<a.length;c++){var d=a[c].split(/;|=/);1<d.length&&(b[d[0]]=d[1])}return b}var b=this,e=a.domain,p=a.secure,d=encodeURIComponent,g=decodeURIComponent;b.set=function(a,c,g,m){m||(c=d(c));a=d(a)+"="+c+";domain="+e+";path=/"+(g?";expires="+H(g).toGMTString():
"")+(p?";secure;sameSite=none":"");document.cookie=a;return b};b.remove=function(a){b.set(a,"",-1);return b};b.removeAll=function(a){if(a){var d=c();f(d,function(c,d){(new RegExp("^"+a)).test(d)&&b.remove(g(d))})}};b.get=function(a,b){a=new RegExp("(?:^|; )"+d(a).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)");a=document.cookie.match(a);if(!a)return C;a=a[1];return b?a:g(a)};b.getAll=function(a,b){if(a){var d=c(),e={};f(d,function(c,d){(new RegExp("^"+a)).test(d)&&(e[g(d)]=b?c:g(c))});return e}}}
function E(a,c,b){b=Q[b]||b||"def";var e=c+"."+b+".",p=e.replace(/\./g,"\\.");this.get=function(b){if(!b){b=a.getAll(p);var c=e.length,d={};f(b,function(a,b){d[b.substring(c)]=I(a)});return d}return(b=a.get(e+b))?I(b):b};this.set=function(b,c,f){null===c||v(c)?a.remove(e+b):(c=JSON.stringify({v:c}),c=c.substring(5,c.length-1),a.set(e+b,c,v(f)?0:f));return this};this.removeAll=function(){a.removeAll(p);return this}}function J(a,c,b){function e(a,b){var c={};f(a,function(a,b){c[b]=a});f(b,function(a,
b){c[b]=a});return c}function p(b){for(var c={},d="",e=0,w;w=a.get(b+e++,!0);)d+=w;d=decodeURIComponent(d);try{c=JSON.parse(d)}catch(W){}return c}function d(){r=p(R);x=p(S);P();r[b]=r[b]||{};x[b]=x[b]||{}}function g(b,c,d){c=JSON.stringify(c);var e="{}"===c,w=0;for(c=encodeURIComponent(c);a.get(b+w,!0);)a.remove(b+w++);if(!e)for(w=0;e=c.substr(3E3*w,3E3);)a.set(b+w++,e,v(d)?365:d,!0)}function n(){g(R,r);g(S,x,0)}function fa(a){var b={};f(a,function(a,c){b[c]=m(a).v});return b}function P(){var a=(new Date).getTime(),
c=r[b];f(c,function(b,d){m(b).e<=a&&delete c[d]});n()}function m(a){var b=a.indexOf("|");return{v:JSON.parse(a.substring(b+1,a.length)),e:a.substring(0,b)}}var r,x;c+=".";var R=c+"store.p.",S=c+"store.s.";b=ga[b]||b||"def";this.get=function(a){d();var c=e(r[b],x[b]);return a?c[a]?m(c[a]).v:c[a]:fa(c)};this.set=function(a,c,e){d();var g=r[b],f=x[b];delete g[a];delete f[a];null===c||v(c)||(e?(c=H(e).getTime()+"|"+JSON.stringify(c),g[a]=c):f[a]="0|"+JSON.stringify(c));n();return this};this.removeAll=
function(){d();r[b]={};x[b]={};n();return this};this.exportData=function(){d();var a={};f(r,function(c,b){a[b]=c});f(x,function(c,b){a[b]=e(a[b],c)});f(a,function(b,c){f(b,function(b,d){a[c][d]=m(b)})});return a};d()}function K(a,c){function b(a){f([g,n],function(b){for(var c=0;c<b.length;c++){var d=b.key(c);0===d.indexOf(p)&&a(b,d)}})}function e(a,b){var c=(new Date).getTime();if((b=JSON.parse(b))&&b.e&&b.e<c)localStorage.removeItem(a);else return b&&b.v}c=Q[c]||c||"def";var p=a+"."+c+".",d=this,
g=sessionStorage,n=localStorage;d.get=function(a){if(!a){var c={},d=p.length;b(function(a,b){c[b.substring(d)]=e(b,a.getItem(b))});return c}a=p+a;var f=g.getItem(a)||n.getItem(a);return e(a,f)};d.set=function(a,b,c){a=p+a;if(M(b)){var e=c?n:g;b=JSON.stringify({v:b,e:c?H(c).getTime():C});e.setItem(a,b)}else g.removeItem(a),n.removeItem(a);return d};d.removeAll=function(){b(function(a,b){a.removeItem(b)});return d}}function ha(a){var c=this,b=arguments;c.get=function(a){if(!a){for(var c=b[0].get(),
d=1;d<b.length;d++)f(b[d].get(),function(a,b){c[b]=v(c[b])?a:c[b]});return c}for(d=0;d<b.length;d++){var e=b[d].get(a);if(M(e))return e}};c.set=function(a,e,d){f(b,function(b){b.set(a,e,d)});return c};c.removeAll=function(){f(b,function(a){a.removeAll()});return c}}function ia(a){function c(){var a=function(a){var b=new n(m,g,a);y&&(b=new ha(b,new K(g,a)));return b};a.isSecure=u;a.testStorage=b;return a}function b(){var a=(""+Math.random()).substring(0,5);m.set(g+".tst",a,10);a=m.get(g+".tst",!0)===
a?1:0;m.remove(g+".tst");return a}function v(a){var b=(new J(m,g,C)).exportData(),c=!1;f(b,function(b,d){var e=a(d);f(b,function(a,b){c=!0;var d=a.e;d=(d=parseInt(d))?(d-(new Date).getTime())/864E5:d;e.set(b,a.v,d)})});return function(){c&&(m.removeAll(g+"\\.store\\.p\\."),m.removeAll(g+"\\.store\\.s\\."))}}function p(a){var b=m.getAll(g+"\\.",!0),c={};f(b,function(b,d){var e=d.split(/\./);if(2<e.length&&"store"!==e[1]){b=c[e[1]];b||(b=new E(m,g,e[1]),c[e[1]]=b);var f=a(e[1]);d=d.substring((e[0]+
"."+e[1]+".").length);b=b.get(d);f.set(d,b,30)}});return function(){f(c,function(a){a.removeAll()})}}var d=a.storageType,g=a.cprefix;if(0>ea("cookie cookie-secure cookie-key-value cookie-key-value-secure cookie-key-value-with-fallback cookie-key-value-secure-with-fallback".split(" "),d))throw"Invalid storage type: "+d;var n=0===d.indexOf("cookie-key-value")?E:J,u=0<d.indexOf("-secure"),y=0<d.indexOf("-with-fallback");a=a.cookie_domain||e.location.hostname.replace(/^www\./i,"");var m=new aa({domain:a,
secure:u});(function(){var a=g+".|storage";n===E?O(m.getAll(g+"\\.store\\.",!0))?y&&localStorage.getItem(a)!==d&&(p(function(a){return new K(g,a)}),localStorage.setItem(a,d)):v(c())():n!==J||O(m.getAll(g+"\\.",!0))||p(c())()})();this.createBuilder=c}if(!e.mmsystem){var V=e.console||{log:function(){},error:function(){}},Q={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"},ga={p:"mmparams.p",d:"mmparams.d",e:"mmengine"},ja=new function(a){function c(a,b){if(z[a])for(var c=z[a].length-1;0<=c;c--)z[a][c].call({},
b)}function b(a){A=u(a,"boolean")?a:!1}function D(a,b,c){c=c||{};c.type="text/javascript";c.id=a;c.src=b;if(A){a=document.getElementsByTagName("head")[0];var k=document.createElement("script");f(c,function(a,b){k.setAttribute(b,a)});a.insertBefore(k,a.lastChild)}else{var l="";f(c,function(a,b){l+=" "+b+'="'+a+'"'});document.write("<script"+l+">\x3c/script>")}}function p(a){if(!u(a,"object"))return a;if(a.constructor===Array)return a.join(";");var b=[];f(a,function(a,c){a.constructor===Array?f(a,function(a){b.push(c+
"="+a)}):b.push(c+"="+encodeURIComponent(a))});return b.join(";")}function d(a){a=a?x(a):{};var b={};u(a["mm-dlp-api"],"string")&&(b.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},b.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(b.fv.url)[0]);f(a,function(a,c){"mmcore."===c.substring(0,7)&&(b[c.substring(7)]=a)});return b}function g(){var b="mmRequestCallbacks["+F+"]",c={},d=e.screen;c.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,
1024),scrw:d.width,scrh:d.height,clrd:d.colorDepth,cok:h.baseStorage.testStorage()};c.lver="1.16";c.jsncl=b;c.ri=F;c.lto=-(new Date).getTimezoneOffset();c.jrt="inline"===a.executionMode?"f":"s";return c}function n(b,c){var k=b&&b.Packages||[],d=k.length;if(0<d){e.mmInitCallback=function(a){a(h,b,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:Q});0===--d&&(c(),e.mmInitCallback=C)};for(var l=0;l<k.length;l++)D("mmpack."+l,0===k[l].indexOf("//")?k[l]:a.baseContentUrl+k[l])}else c()}
function H(a){(a=document.getElementById(a))&&a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function P(a,b,d){a=(I[a-1]=b)&&b.PersistData||[];var k=b&&b.SystemData&&b.SystemData[0]&&b.SystemData[0].ResponseId||0;if(k>=K){for(var l=a.length;l--;)h.setParam(a[l].Name,a[l].Value,q.persistent,a[l].Expiration);K=k}if(G(b,"mmcoreResponse")&&y(e,"mmcore"))try{Function(b.mmcoreResponse).call(e)}catch(ca){V.log(ca)}c("response",b);d(!!b);c("responseExecuted",b);A=!0}function m(a,b){var c=
"mmrequest."+F;(function(a,b){e.mmRequestCallbacks[a]=function(k){H(c);var l=!1,ba=function(){l=!0;1===a?n(k,function(){P(a,k,b);var c=d(document.location.search).origin;c&&e.parent&&e.parent.postMessage&&e.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):P(a,k,b)};if(0!==T.length){for(var X=0;X<T.length;X++)T[X](k,ba);l||(A=!0)}else ba();delete e.mmRequestCallbacks[a]}})(F,b);D(c,a,{onerror:"window['mmRequestCallbacks']["+F+"](false);"});F++}function r(){var a={};
return{get:function(b){return b?a[b]:a},set:function(b,c,k){0>parseInt(k)?delete a[b]:a[b]=c},removeAll:function(){a={}}}}function x(a){a=a.split(/\?|&/);for(var b={},c,d,k=0;k<a.length;k++)if(a[k]){c=a[k].split("=");try{d=decodeURIComponent(c[1]||"")}catch(ca){d=c[1]||""}b[c[0]]=d}return b}function R(a){function b(a,b,k){var e;if(e=d[a]){c[a]=b;e=e.split(/;/);for(var l=0;l<e.length;l++){var f=e[l].split("=");(a=f[0].replace(/^\s+|\s+$/gm,""))&&k(b,a,f[1]||"")}}}var c={},d=x(a);U||(c.pageid=d.pageid);
c.jsver=d.jsver;b("uv",{},function(a,b,c){y(a,b)||(a[b]=[]);a[b].push(c)});b("uat",{},function(a,b,c){a[b]=decodeURIComponent(c)});b("ids",{},function(a,b,c){c&&(a[b]=decodeURIComponent(c))});b("rul",[],function(a,b,c){a.push(b)});return c}function S(){if(y(e,"mmcore")){var b=e.mmcore;b.server=a.srv;h.CGRequestInternal=h.CGRequest;h.CGRequest=function(a,c){U=!0;Y=a;Z=c;b.CGRequest()};var c=b._Tag;b._Tag=function(d){if(-1==d.indexOf(a.srv))c.apply(b,arguments);else{b._Clear.call(b);var k=h.mergeParams(Z,
R(d));da=A;U||(A=b._async);h.CGRequestInternal(Y,k);A=da;Z=Y=C;U=!1}};var d=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||d.apply(b,arguments)}}}function w(a,b,c){var d="";0<b.length&&"."!=b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);u(d,"string")&&d&&(h.setParam(c,d,q.persistent,365),a.remove(b))}function E(a){var b=y(e,"mmcore")&&e.mmcore.cookie_domain?e.mmcore.cookie_domain:G(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;a=y(e,"mmcore")&&e.mmcore.cprefix?
e.mmcore.cprefix:G(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";b=new aa({domain:b||e.location.hostname.replace(/^www\./i,"")});w(b,a,"pd");w(b,a,"srv");w(b,"","mmid")}function J(a){var c=h.getParam,d=function(a,b,c,d){h.setParam(a,b,v(c)?1:c,d)};N(a.beforeInit,{},[c,d,{getParam:c,setParam:d,validateResponses:h.validateResponses,disable:function(){B[q.page].set("disabled",1)},setAsync:b}]);W()||(h.on("request",function(){N(a.beforeRequest,{},[c,d])}),h.on("response",function(b){N(a.afterResponse,
{},[c,d,b])}),h.on("responseExecuted",function(b){N(a.afterResponseExecution,{},[c,d,b])}))}function M(a){e.mmcoreInitCallback=function(b){E(a);S();h.CGRequest(function(){L(b)&&b.apply(e.mmcore,arguments)},{});delete e.mmcoreInitCallback};"local"!==a.mmcoreUrl&&D("mmcoreIntegration",a.mmcoreUrl)}function O(a,b){G(b,"un")&&(a=0===a.indexOf("http:")?a.substring(5):a,a=0===a.indexOf("//")?"https:"+a:a);return a}function W(){return 1==B[q.persistent].get("disabled")||1==B[q.page].get("disabled")}this.version=
"1.16";var h=this,I=[],F=1,A=!1,z={},Q={},t=[],B=[],q={persistent:0,deferredRequest:1,request:2,page:3},T=[],K=0,Y,Z,da,U=!1;this.baseStorage=(new ia(a)).createBuilder();this.baseStorage.storeStrategy=q;this.mergeParams=function(a,b){a=v(a)?{}:a;b=v(b)?{}:b;if(!u(b,"object"))return b;var c={};u(a,"object")&&f(a,function(a,b){c[b]=a});f(b,function(a,d){c[d]=c[d]?c[d].constructor===Array&&b[d].constructor===Array?c[d].concat(a):h.mergeParams(c[d],a):a});return c};this.CGRequest=function(b,l){b=b||function(){};
l=l||{};e.mmRequestCallbacks=e.mmRequestCallbacks||{};c("request");var k=h.mergeParams(g(),h.mergeParams(h.mergeParams(t[q.persistent].get(),h.mergeParams(t[q.deferredRequest].get(),h.mergeParams(t[q.page].get(),t[q.request].get()))),d(location.search))),n=[];l=h.mergeParams(k,l);f(l,function(a,b){n.push(encodeURIComponent(b)+"="+encodeURIComponent(p(a)))});t[q.deferredRequest].removeAll();t[q.request].removeAll();l=O(a.srv,l);m(l+n.join("&"),b);return this};this.getResponses=function(){return I};
this.setParam=function(a,b,c,d){t[c].set(a,b,v(d)?365:d);return this};this.getParam=function(a,b){return t[b].get(a)};this.removeParam=function(a,b){t[b].set(a,"",-1);return this};this.on=function(a,b){z[a]&&z[a].push(b);return h};this.disable=function(){B[q.persistent].set("disabled",1,0);return this};this.enable=function(){B[q.persistent].set("disabled",null,-1);return this};this.validateResponses=function(a){L(a)&&T.push(a)};(function(a){function c(){J(a);W()||(G(a,"mmcoreUrl")&&a.mmcoreUrl?M(a):
(E(a),h.CGRequest(C,{})))}f(a,function(a,b){h[b]=a});var g=d(document.location.search);if(1!=g.disabled){h.calcCookieDomain=h.cookie_domain||e.location.hostname.replace(/^www\./i,"");b(a.async);B[q.persistent]=h.baseStorage("ls");B[q.page]=r();t[q.persistent]=h.baseStorage("p");t[q.deferredRequest]=h.baseStorage("d");t[q.request]=r();t[q.page]=r();z.request=[];z.response=[];z.responseExecuted=[];var k=d(document.referrer).pruh,g=g.pruh,m=e.mmpruh,n=h.getParam("pruh",0),p=(k?k+",":"")+(g?g+",":"")+
(m?m+",":"")+(n?n:"");p?(e.mmInitCallback=function(a){a(h,p,c)},D("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):c()}})(a);return this}({
 storageType:'cookie-key-value-with-fallback',
 cprefix:'mmapi',
 domain:'rakuten.com',
 baseContentUrl:'//service.maxymiser.net/platform/us/api/',
 cookie_domain: '.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0],
 srv:'//service.maxymiser.net/cg/v5us/?',
 async:false,
 mmcoreUrl:'',
 mmcoreCookieDomain:'',
 mmcoreCprefix:'',
 beforeInit:function(getParam, setParam, loader){
  /* Cross-domain data restore from window.name */
 function restoreVisitorIdFromWindow() {
   var key, crossDomainData;
   if (window.JSON && window.JSON.stringify && window.JSON.parse) {
     window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, function(matchedString, capturedData) {
       crossDomainData = JSON.parse(capturedData);
       for (key in crossDomainData) {
         if (crossDomainData.hasOwnProperty(key)) {
           setParam(key, crossDomainData[key], 0);
         }
       }
       return '';
     });
   }
 }
 restoreVisitorIdFromWindow();
 },
 beforeRequest:function(getParam, setParam){},
 afterResponse:function(getParam, setParam, genInfo){
   /* Cross-domain data capture to window.name */
  function captureVisitorIdToWindow(crossDomainParams) {
    var i, cgParamName, cgParamValue,
      crossDomainData = {},
      hasCrossDomainParams = false;
    if (window.JSON && window.JSON.stringify && window.JSON.parse) {
      for (i = crossDomainParams.length; i--;) {
        cgParamName = crossDomainParams[i];
        cgParamValue = getParam(cgParamName, 0);
        if (typeof cgParamValue !== 'undefined' && cgParamValue !== 'undefined') {
          hasCrossDomainParams = true;
          crossDomainData[cgParamName] = cgParamValue;
        }
      }
      if (hasCrossDomainParams) {
        window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, '') + ('|*mm' + JSON.stringify(crossDomainData) + 'mm*|');
      }
    }
  }
  captureVisitorIdToWindow(['pd', 'mmid', 'srv']);
 },
 afterResponseExecution:function(getParam, setParam, genInfo){}
});e.mmsystem=new function(a){this.enableUtility=function(c){var b=a.getParam("un",a.baseStorage.storeStrategy.persistent)||
"";(new RegExp("(^|,)"+c+"($|,)")).test(b)||(b=b.split(","),b.push(c),a.setParam("un",b.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(c){var b=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(b)&&(b=b.replace(new RegExp("(^|,)"+c+"($|,)","gi"),",").replace(/(^,)|(,$)/g,""),a.setParam("un",b,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};
this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}(ja)}})(window);
