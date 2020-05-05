!function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n,o=Object(this),r=o.length>>>0,i=Number(t)||0;if(null===this)throw new TypeError('"this" is null or not defined');if(0===r)return-1;if(Math.abs(i)===1/0&&(i=0),r<=i)return-1;for(n=Math.max(0<=i?i:r-Math.abs(i),0);n<r;){if(o.hasOwnProperty(n)&&o[n]===e)return n;n+=1}return-1}),this.now=function(){return Number(new Date)},Function.prototype.bind||(Function.prototype.bind=function(e){var t,n,o,r;if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");return t=Array.prototype.slice.call(arguments,1),o=function(){},r=function(){return n.apply(this instanceof o?this:e,t.concat(Array.prototype.slice.call(arguments)))},(n=this).prototype&&(o.prototype=this.prototype),r.prototype=new o,r}),String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),document.getElementsByClassName||(document.getElementsByClassName=function(e){return this.querySelectorAll("."+e)}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty}(),function(g){"use strict";var c=g._bw=g._bw||function(){c.callMethods.apply(c,arguments)};if(g.bw=g._bw,c&&c.init)throw new Error("Loading multiple times for pixel.js");c.init=!0,c.modules={},c.resolvedModules={},c.getModules=function(e){return c.resolvedModules[e]||(c.resolvedModules[e]=c.modules[e]()),c.resolvedModules[e]},c.ensureModuleRegistered=function(e,t){c.modules[e]||(c.modules[e]=t)},c.ensureModuleRegistered("utils",function(){return function(){var e,v,t,u,n,o;!function(e){function n(e,t){try{g._bw.getModules("eventsLogging").sendError({from:e,message:t},1e-4)}catch(e){}}e.inIframe=function(){try{return g.self!==g.top}catch(e){return!0}},e.getUrl=function(){var e;try{"about:blank"===(e=g.top.location.href)&&(e=g.location.href)}catch(e){n("getUrl",e.message)}return e||g.location.href},e.getReferrer=function(){var e,t="";try{(e=g.top)&&e.document&&e.document.referrer&&(t=e.document.referrer)}catch(e){n("getReferrer",e.message)}return t},e.getMetadata=function(){var e,t,n,o,r,i=/^(og:)/,a=document.getElementsByTagName("title"),s=document.getElementsByTagName("meta"),c=document.querySelector('script[type="application/ld+json"]'),u={Meta:{title:0<a.length?a[0].text:""},OpenGraph:{},"JSON-LD":c&&c.text};for(o=0,r=s.length;o<r;o++)t=(e=s[o]).getAttribute("name")||e.getAttribute("property"),n=e.getAttribute("content"),t&&(t=t.toLowerCase(),i.test(t)?u.OpenGraph[t]=n:u.Meta[t]=n);return u},e.now=function(){return Number(new Date)},e.getParamFromUrl=function(e,t){var n;try{if(n=RegExp("[?|&]"+t+"=(.+?)(&|$)").exec(e))return decodeURIComponent(n[1])}catch(e){}return""},e.getBridgewellFirstPartyCookie=function(e){var t=g._bw,n=t.getModules("storageUtils"),o="";try{(o=n.getCookie(e))||(o="c"+t.it+"x"+"xxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)}),n.setCookie(e,o,864e6))}catch(e){!function(e,t){try{g._bw.getModules("eventsLogging").logError(e,t)}catch(e){}}("utils-getBridgewellFirstPartyCookie",e)}return o}}(this),function(e){var c=g._bw,u=c.getModules("eventsLogging").logError,l=10<=function(){var e,t,n=10;try{(-1!==(e=g.navigator.userAgent).indexOf("MSIE")||document.documentMode)&&("Microsoft Internet Explorer"===navigator.appName?t=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"):"Netscape"===navigator.appName&&(t=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")),t&&null!==t.exec(e)&&(n=parseFloat(RegExp.$1)))}catch(e){}return n}();function r(e){e.sent||(e.sent=!0,c.callMethods.apply(c,e))}function i(e){var t,n=0,o=g[e];if(0<c.pixelIdList.length)for(;n<o.length;)r(o[n]),n++;else for(;n<o.length;){if(!(t=o[n]).sent&&"init"===t[0])return r(t),void i(e);n++}}function d(e,t,n,o){var r=c.getModules("utils"),i={},a=new(c.getModules("initParamList").createParamlist);return o&&a.addRange(o),i.pixel_version=c.version,i.url=r.getUrl(),i.referrer=r.getReferrer(),i.is_in_iframe=r.inIframe(),i.ga_id=c.gid,i.first_party_cookie=c.fp,a.append("advertiser_id",e),a.append("browser",i),a.append("event_name",t),a.append("init_time",c.it),a.append("scupio_com_cookie_id",c.orgid),a.append("ubid",c.ubid),a.append("custom_data",n),a.append("develop_mode",c.developMode),a.append("gt",c.gt),a.append("aggt",c.aggt),l||(1948<a.toQueryString().length&&a.truncate("referral",1e3,"__T"),1948<a.toQueryString().length&&a.truncate("url",1e3,"__T")),a}e.flushQueue=function(e){for(;e.length;)c.callMethods.apply(c,e.shift())},e.isAutoConfig=function(e){return-1===c.disabledAutoConfigList.indexOf(e)},e.generateBaseParamList=function(e){var t=new(c.getModules("initParamList").createParamlist);return t.append("user_data",e.userData),t.append("event_count",e.eventCount++),t},e.packageParam=d,e.sendEvent=function(t,e,n,o){var r,i=c.getModules("utils"),a=l?"POST":"GET",s=d(t,e,n,o);r={success:function(e){c.developMode&&console.log(e),e&&(e.cookie_matching_tags&&i.cookieMatching(e.cookie_matching_tags),e.third_party_tracking_data&&i.trackThirdPartyEvent(t,e.third_party_tracking_data))},fail:function(){u("ajax","fail")},ontimeout:function(){u("ajax","timeout")},onerror:function(){u("ajax","error")},onabort:function(){u("ajax","abort")}},i.ajax("https://pixel-api.scupio.com/v0/event",{data:s.toQueryString(),method:a,timeout:5e3},r)},e.useGET=function(){l=!1},e.hackPush=function(t){var e=g[t]=g[t]||[];e.ready||(i(t),e.push=function(e){Array.prototype.push.apply(this,[e]),function(e){var t=0,n=g[e];if(!n.allsent){for(;t<n.length;){if(!n[t].sent)return!1;t++}n.allsent=!0}return!0}(t)?r(e):i(t)},e.ready=!0)},e.flushHackPushedDataLayer=i}(this),e=this,v=g._bw,e.trackGoogleEvent=function(e,t,n){var o=document.getElementsByTagName("script")[0],r=document.createElement("script"),i=g.dataLayer=g.dataLayer||[];function a(){i.push(arguments)}r.src="https://www.googletagmanager.com/gtag/js?id="+e,r.async=!0,o.parentNode.insertBefore(r,o),a("js",new Date),a("config",e),t&&a("event",t,n)},e.trackFbEvent=function(e,t,n){var o,r=v.getModules("utils"),i=new(v.getModules("initParamList").createParamlist),a=document.createElement("img"),s=document.getElementsByTagName("script")[0];i.append("id",e),i.append("ev",t),i.append("dl",r.getUrl()),i.append("rl",r.getReferrer()),i.append("if",r.inIframe()),i.append("ts",(new Date).valueOf()),i.append("cd",n),o=i.toQueryString(),a.src="https://www.facebook.com/tr/?"+o,a.style.display="none",s.parentNode.insertBefore(a,s)},e.trackTagtooEvent=function(e){var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];g.tagtoo_advertiser_id=e,t.type="text/javascript",t.async=!0,t.src="https://ad.tagtoo.co/media/ad/track.js",n.parentNode.insertBefore(t,n)},e.trackOathEvents=function(e){var t=document.getElementsByTagName("script")[0],n=document.createElement("script"),o=t.parentNode,r="dotq";g[r]=g[r]||[],g[r].push(e),n.src="https://s.yimg.com/wi/ytc.js",n.async=!0,n.onload=n.onreadystatechange=function(){var t,e=this.readyState,n=g[r];if(!e||"complete"==e||"loaded"==e)try{t=g.YAHOO.ywa.I13N.fireBeacon,g[r]=[],g[r].push=function(e){t([e])},t(n)}catch(e){}},o.insertBefore(n,t)},e.trackThirdPartyEvent=function(e,t){var n,o,r,i,a,s,c,u,l,d=v.getModules("utils"),p=t.google||[],g=t.facebook||[],f=t.tagtoo||[],m=t.oath||[];for(i=0,r=p.length;i<r;i++)n=p[i],d.trackGoogleEvent(n.account_id,n.event_name,n.parameter);for(i=0,r=g.length;i<r;i++)o=(n=g[i]).event_name,a=e,s=o,c=void 0,c=v.getModules("configStore"),u=c.getFacebookEventConfig(a),l=u.shouldSendFbUniqueEvent,(s!==u.uniqueEvent||(c.setShouldSendFbUniqueEvent(a,!1),l))&&d.trackFbEvent(n.account_id,o,n.parameter);for(i=0,r=f.length;i<r;i++)n=f[i],d.trackTagtooEvent(n.account_id);for(i=0,r=m.length;i<r;i++)n=m[i],d.trackOathEvents(n.parameter)},function(e){var l=g._bw,p="https://img.scupio.com/html/ls.html?mid=",o={SERVER_ID:"_bwsid",FINGERPRINT:"_bwfpid",FINGERPRINT_DETAIL:"_bwfpid_detail",LOCAL_STORAGE_ID:"sclsid",GYM_TRIP_ID:"gym_tripid",GYM_TRIP_RAKUTEN_ID:"af_gid",GYM_AGG_ID:"bwaggid"},d={STORAGE_UTILS:"storageUtils",UTILS:"utils"};function t(e){var t=l.getModules(d.STORAGE_UTILS);return t.getFirstPartyLocalStorageItem(e)||t.getSessionStorageItem(e)||t.getCookie(e)}function r(e,t){var n=l.getModules(d.STORAGE_UTILS);n.setCookie(e,t,864e6),n.setFirstPartyLocalStorageItem(e,t),n.setSessionStorageItem(e,t)}function n(e,n){var o=l.getModules("fingerprint"),t={excludes:["webgl","webglVendorAndRenderer","adBlock","fonts","enumerateDevices","pixelRatio","doNotTrack","fontsFlash"]};n||(n=e,e=t),e.excludes=e.excludes||t.excludes,o.getInfos(e,function(e){var t=o.hash(e);n&&n(t,e)})}e.getServerId=function(){return t(o.SERVER_ID)},e.getTempServerId=function(){return"csid"+l.getModules(d.UTILS).now()+"x"+"xxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)})},e.storeServerId=function(e){r(o.SERVER_ID,e)},e.getFingerprintId=function(){return t(o.FINGERPRINT)},e.storeFingerprint=function(e){var t=l.getModules(d.STORAGE_UTILS),g=l.getModules(d.UTILS),n=e.fpid,f=e.details,m=function(e){return"string"!=typeof e&&(e=JSON.stringify(e)),e};r(o.FINGERPRINT,n),t.setFirstPartyLocalStorageItem(o.FINGERPRINT_DETAIL,f),t.setSessionStorageItem(o.FINGERPRINT_DETAIL,f),t.openIndexedDB(function(e){var p;e&&(p=e.getStore(t.STORE.FINGERPRINT)).getRange(null,function(e){var t,n,o,r,i,a,s=e.result,c={},u=[],l=[],d=g.now();for(t=0,n=s.length;t<n;t++)c[(o=s[t]).name]=o;for(t=0,n=f.length;t<n;t++)i=(o=f[t]).key,a=o.value,(r=c[i])?m(a)!==m(r.value)&&l.push({name:i,value:a,change_count:r.change_count+1,create_time:r.create_time,update_time:d}):u.push({name:i,value:a,change_count:0,create_time:d,update_time:d});p.insert(u),p.update(l)})})},e.calcFingerprintId=n,e.checkIdPair=function(e,s){var c=e.sid,u=e.fpid;n({},function(t,n){var e,o,r,i,a;e={sid:c,fpid:t,oldfpid:u},o=function(e){s&&s({sid:e.sid,fpid:t,fpDetails:n})},r="ajax-checkIdPair",i=l.getModules(d.UTILS),a=l.getModules("eventsLogging").logError,i.ajax("https://pixel-api.scupio.com/v0/id",{data:e,method:"POST",timeout:5e3},{success:function(e){o(e)},fail:function(){a(r,"fail")},ontimeout:function(){a(r,"timeout")},onerror:function(){a(r,"error")},onabort:function(){a(r,"abort")}})})},e.toGetOrgUserId=function(t){var n,e,o,r,i,a,s=function(e){s=function(){},clearTimeout(n),t(e=e||"")},c=function(e){var t,n,o,r;e&&"string"==typeof e.origin&&0<=e.origin.indexOf("//img.scupio.com")&&(t=e.data||e.message,n="message",r=c,(o=g).removeEventListener?o.removeEventListener(n,r,!1):o.detachEvent&&o.detachEvent("on"+n,r),s(t))};"function"==typeof g.postMessage?(r="message",a=c,(i=g).addEventListener?i.addEventListener(r,a,!1):i.attachEvent&&i.attachEvent("on"+r,a),e=document.getElementsByTagName("script")[0],(o=document.createElement("iframe")).src="https://img.scupio.com/html/em.html",o.style.display="none",e.parentNode.insertBefore(o,e)):s(""),n=setTimeout(s,800)},e.getUBID=function(n,e){var t=l.getModules(d.STORAGE_UTILS).getFirstPartyLocalStorageItem(o.LOCAL_STORAGE_ID);t?n(t):function(e,t,n){var o,r,i,a,s,c,u=!1,l=document.getElementsByTagName("script")[0];function d(e){u||(u=!0,t(e),clearTimeout(o))}"function"==typeof g.postMessage&&"object"==typeof g.localStorage?(a="message",c=function e(t){var n,o,r,i;t&&"string"==typeof t.origin&&0<=t.origin.indexOf("//img.scupio.com")&&(n=t.data||t.message,o="message",i=e,(r=g).removeEventListener?r.removeEventListener(o,i,!1):r.detachEvent&&r.detachEvent("on"+o,i),d(n))},(s=g).addEventListener?s.addEventListener(a,c,!1):s.attachEvent&&s.attachEvent("on"+a,c),(r=document.createElement("iframe")).src=p+e,(i=r.style).display="none",i.position="absolute",i.visibility="hidden",l.parentNode.insertBefore(r,l)):d(null),o=setTimeout(d,n)}(0,function(e){var t;t=e,l.getModules(d.STORAGE_UTILS).setFirstPartyLocalStorageItem(o.LOCAL_STORAGE_ID,t),n(e)},e||2e3)},e.processGYMTripId=function(){var e=l.getModules(d.STORAGE_UTILS),t=l.getModules(d.UTILS);l.gt=l.gt||t.getParamFromUrl(g.location.search,o.GYM_TRIP_ID)||t.getParamFromUrl(t.getReferrer(),o.GYM_TRIP_ID)||e.getCookie(o.GYM_TRIP_RAKUTEN_ID)||e.getCookie(o.GYM_TRIP_ID),e.setCookie(o.GYM_TRIP_ID,l.gt),l.aggt=l.aggt||t.getParamFromUrl(g.location.search,o.GYM_AGG_ID)||t.getParamFromUrl(t.getReferrer(),o.GYM_AGG_ID)||e.getCookie(o.GYM_AGG_ID),e.setCookie(o.GYM_AGG_ID,l.aggt)}}(this),t=this,u=g._bw,t.cookieMatching=function(e){var t,n,o="ajax-cookieMatching",r=e||[],i=r.length,a=u.getModules("eventsLogging"),s=u.getModules("utils"),c=a.logError;for(n={fail:function(){c(o,"fail")},ontimeout:function(){c(o,"timeout")},onerror:function(){c(o,"error")},onabort:function(){c(o,"abort")}},t=0;t<i;t++)try{s.ajax(r[t].base_url,{method:"GET",timeout:5e3,data:r[t].parameters},n)}catch(e){c(o,"error")}},this.ajax=function(e,t,o){if("string"!=typeof e||void 0===t)return!1;var n,r,i,a=new XMLHttpRequest,s="",c="function",u=t.data,l=Object.prototype.hasOwnProperty;if(t.method=t.method||"POST",e=e+"?cb="+Math.random(),"string"!=typeof u)for(n in u)l.call(u,n)&&(s&&(s+="&"),"string"==typeof u[n]?s+=n+"="+encodeURIComponent(u[n]):s+=n+"="+encodeURIComponent(JSON.stringify(u[n])));else s=u;switch(t.method){case"POST":a.open(t.method,e,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),a.setRequestHeader("Accept","application/json, text/javascript, */*"),a.withCredentials=!0,a.timeout=t.timeout||1e3,a.onload=function(e){if(200===a.status){var t=e.srcElement||e.target,n="";if(o&&typeof o.success===c){try{n=JSON.parse(t.response)}catch(e){}n?o.success(n):o.success()}}else o&&typeof o.fail===c&&o.fail(e)},a.onerror=function(e){o&&typeof o.onerror===c&&o.onerror(e)},a.onabort=function(e){o&&typeof o.onabort===c&&o.onabort(e)},a.ontimeout=function(e){o&&typeof o.ontimeout===c&&o.ontimeout(e)},a.send(s);break;case"GET":r=document.createElement("script"),i=document.getElementsByTagName("script")[0],r.src=e+"&"+s,r.async="boolean"!=typeof t.async||t.async,i.parentNode.insertBefore(r,i)}},n=this,o={},function i(a,s,c){function u(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=s[t]={exports:{}};a[t][0].call(r.exports,function(e){return u(a[t][1][e]||e)},r,r.exports,i,a,s,c)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){n.ENDPOINT="https://u.scupio.com/event"},{}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.EventLogger=void 0;var o,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=(o=e("ajax"))&&o.__esModule?o:{default:o},d=e("./../config"),p=i.default.ajax,a=function(){function n(e,t){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.tagName=e,this.samplingRatio=t&&t.samplingRatio||1}return r(n,[{key:"logInfo",value:function(e,t,n){this.logWithPrefix("INFO",e,t,n)}},{key:"logDebug",value:function(e,t,n){this.logWithPrefix("DEBUG",e,t,n)}},{key:"logWarning",value:function(e,t,n){this.logWithPrefix("WARNING",e,t,n)}},{key:"logError",value:function(e,t,n){this.logWithPrefix("ERR",e,t,n)}},{key:"logWithPrefix",value:function(e,t,n,o){var r,i,a,s=(e||"INFO")+"_"+this.tagName,c=Math.random(),u=o&&o.samplingRatio;u||0===u||(u=this.samplingRatio),c<u&&(r=s,i=l({from:t},"string"==typeof n?{message:n}:n),a="tag="+r+"&log="+encodeURIComponent(JSON.stringify(i)),p(d.ENDPOINT,{method:"GET",data:a}))}}]),n}();n.EventLogger=a},{"./../config":1,ajax:4}],3:[function(n,e,t){(function(e){var t=n("./eventLogger");e.EventLogger=t.EventLogger}).call(this,"undefined"!=typeof global?global:void 0!==o?o:void 0!==g?g:{})},{"./eventLogger":2}],4:[function(e,t,n){this.ajax=function(e,t,o){if("string"!=typeof e||void 0===t)return!1;var n,r,i,a=new XMLHttpRequest,s="",c="function",u=t.data,l=Object.prototype.hasOwnProperty;if(t.method=t.method||"POST",e=e+"?cb="+Math.random(),"string"!=typeof u)for(n in u)l.call(u,n)&&(s&&(s+="&"),"string"==typeof u[n]?s+=n+"="+encodeURIComponent(u[n]):s+=n+"="+encodeURIComponent(JSON.stringify(u[n])));else s=u;switch(t.method){case"POST":a.open(t.method,e,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),a.setRequestHeader("Accept","application/json, text/javascript, */*"),a.withCredentials=!0,a.timeout=t.timeout||1e3,a.onload=function(e){if(200===a.status){var t=e.srcElement||e.target,n="";if(o&&typeof o.success===c){try{n=JSON.parse(t.response)}catch(e){}n?o.success(n):o.success()}}else o&&typeof o.fail===c&&o.fail(e)},a.onerror=function(e){o&&typeof o.onerror===c&&o.onerror(e)},a.onabort=function(e){o&&typeof o.onabort===c&&o.onabort(e)},a.ontimeout=function(e){o&&typeof o.ontimeout===c&&o.ontimeout(e)},a.send(s);break;case"GET":r=document.createElement("script"),i=document.getElementsByTagName("script")[0],r.src=e+"&"+s,r.async="boolean"!=typeof t.async||t.async,i.parentNode.insertBefore(r,i)}}},{}]},{},[3]),n.EventLogger=o.EventLogger}.bind(e={})(),e;var e}),c.ensureModuleRegistered("storageUtils",function(){return function(){var e,o,r,t,n,i;e=this,o=g.localStorage,r="object"==typeof o&&null!==o&&"function"==typeof o.getItem&&"function"==typeof o.setItem,e.getFirstPartyLocalStorageItem=function(e){var t="";try{r&&(t=o.getItem(e)||"")}catch(e){}return t},e.setFirstPartyLocalStorageItem=function(e,t){var n=null!=t;try{r&&n&&("string"!=typeof t&&(t=JSON.stringify(t)),0<t.length&&o.setItem(e,t))}catch(e){}},t=this,n=g.sessionStorage,t.getSessionStorageItem=function(e){var t="";return n&&(t=n.getItem(e)||""),t},t.setSessionStorageItem=function(e,t){n&&null!=t&&("string"!=typeof t&&(t=JSON.stringify(t)),0<t.length&&n.setItem(e,t))},t.removeSessionStorageItem=function(e){n&&n.removeItem(e)},function(e){var t=1,o="_BWDB",a={FINGERPRINT:"fp"},r=[],n=function(){var e=!0;return g.indexedDB||(g.indexedDB=g.indexedDB||g.mozIndexedDB||g.webkitIndexedDB||g.msIndexedDB,g.IDBTransaction=g.IDBTransaction||g.webkitIDBTransaction||g.msIDBTransaction||{READ_WRITE:"readwrite"},g.IDBKeyRange=g.IDBKeyRange||g.webkitIDBKeyRange||g.msIDBKeyRange,g.indexedDB||(e=!1)),(n=function(){return e})()};function i(e){var s=e,c=function(e,t,n){var o,r=s.transaction(e,"readwrite"),i=r.objectStore(e),a=!1;"function"!=typeof n&&(n=function(){}),r.oncomplete=function(e){a||n({success:!0,msg:null,event:e,result:o&&o.result})},r.onerror=function(e){a||n({success:!1,msg:e.target.error.message,event:e}),a=!0};try{o=t(i)}catch(e){n({success:!(a=!0),msg:e.message,event:e})}};function t(o){var r="add",i="put",a="delete",s=function(t,n){var o,r,i;return Array.isArray(t)?function(e){for(o=0,r=t.length;o<r;o++)i=e[n](t[o]);return i}:function(e){return e[n](t)}};this.storeName=o,this.insert=function(e,t){var n=s(e,r);c(o,n,t)},this.update=function(e,t){var n=s(e,i);c(o,n,t)},this.delete=function(e,t){var n=s(e,a);c(o,n,t)},this.getByIndex=function(t,e){c(o,function(e){return e.get(t)},e)},this.getRange=function(t,e){c(o,t&&"*"!==t?function(e){return e.getAll(t)}:function(e){return e.getAll()},e)}}this.startTransaction=c,this.getStore=function(e){return new t(e)},this.close=function(){s.close()}}function s(n){var e=g.indexedDB.open(o,t);e.onerror=function(){n(!1)},e.onsuccess=function(e){var t=new i(e.target.result);r.push(t),n(t)},e.onupgradeneeded=function(e){var t,n,o,r,i=e.target.result;t=i,n=a.FINGERPRINT,o={keyPath:"name"},(r=t.createObjectStore(n,o)).createIndex("value","value",{unique:!1}),r.createIndex("change_count","value",{unique:!1}),r.createIndex("create_time","create_time",{unique:!1}),r.createIndex("update_time","update_time",{unique:!1}),r.transaction.oncomplete=function(){}}}e.STORE=a,e.openIndexedDB=function(e){n()?s(e):e(!1)},e.deleteIndexedDB=function(e){var t,n;!function(){var e,t;for(e=0,t=r.length;e<t;e++)r[e].close()}(),t=e,(n=g.indexedDB.deleteDatabase(o)).onerror=function(e){t({success:!1,event:e})},n.onblocked=function(e){t({success:!1,event:e})},n.onsuccess=function(e){t({success:!0,event:e})}}}(this),(i=this).getCookie=function(e){var t,n,o,r="";try{for(e=decodeURIComponent(e),n=(t=document.cookie.split(";")).length-1;0<=n;)0===(o=t[n].trim()).indexOf(e)&&(r=o.substring(e.length+1,o.length)),n-=1}catch(e){}return decodeURIComponent(r)},i.setCookie=function(e,t,n,o,r,i){if(e&&t)try{var a=encodeURIComponent(e)+"="+encodeURIComponent(t),s="";"number"==typeof n&&((s=new Date).setSeconds(s.getSeconds()+n),s="; expires="+s.toUTCString()),o=o?"; path="+o:"; path=/",r=r?"; domain="+r:"",i=i?"; secure=true":"",document.cookie=[a,s,o,r,i].join("")}catch(e){}}}.bind(e={})(),e;var e}),c.ensureModuleRegistered("configStore",function(){return function(){var e,n,o;e=this,(n={})[o="facebookEvent"]={},e.initFbEventConfig=function(e){n[o][e]=n[o][e]||{uniqueEvent:"PageView",shouldSendFbUniqueEvent:!0}},e.getFacebookEventConfig=function(e){return n[o][e]},e.setShouldSendFbUniqueEvent=function(e,t){"boolean"==typeof t&&(n[o][e].shouldSendFbUniqueEvent=t)},e.setFacebookEventConfig=function(e,t){n[o][e]=t}}.bind(e={})(),e;var e}),c.ensureModuleRegistered("initParamList",function(){return function(){!function(e){var a="deep";function t(){this._paramList=[]}t.prototype.append=function(e,t){return this._append(encodeURIComponent(e),t,a),this},t.prototype._appendPrimitive=function(e,t){null!=t&&this._paramList.push({name:e,value:t})},t.prototype._appendObject=function(e,t){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&this._append(e+"["+encodeURIComponent(n)+"]",t[n],"shallow")},t.prototype._append=function(e,t,n){var o,r,i;n=n||a,i=typeof(r=t),null==r||"number"===i||"boolean"===i||"string"===i?this._appendPrimitive(e,t):n===a?this._appendObject(e,t):this._appendPrimitive(e,(o=t,"undefined"!=typeof JSON&&null!==JSON&&JSON.stringify?JSON.stringify(o):Object.prototype.toString.call(o)))},t.prototype.each=function(e){var t,n,o;for(t=0,n=this._paramList.length;t<n;t++)(o=e(this._paramList[t].name,this._paramList[t].value))&&(this._paramList[t]=o)},t.prototype.addRange=function(e){var n=this;e.each(function(e,t){return n._append(e,t)})},t.prototype.toQueryString=function(){var n=[];return this.each(function(e,t){n.push(e+"="+encodeURIComponent(t))}),n.join("&")},t.prototype.truncate=function(n,o,r){this.each(function(e,t){if(e===n&&"string"==typeof t&&t.length>o)return r=r||"__T",{name:e,value:t=t.substr(0,o)+r}})},e.createParamlist=t}(this)}.bind(e={})(),e;var e}),c.ensureModuleRegistered("eventsLogging",function(){return function(){!function(e){var a=g._bw,s=!1,c=!0,u=.1,l="pixelEvent",n=!0,o={duplicatePixelId:"duplicatePixelId",invalidMethod:"invalidMethod",invalidPixelId:"invalidPixelId",invalidEventName:"invalidEventName",invalidUserData:"invalidUserData",invalidCustomData:"invalidCustomData",invalidConsentAction:"invalidConsentAction",invalidParam:"invalidParam",invalidParamValue:"invalidParamValue",noMethodParam:"noMethodParam",notAnyPixelId:"notAnyPixelId",nonInitializePixelId:"nonInitializePixelId",invalidSetType:"invalidSetType",invalidOption:"invalidOption"};function r(e,t){var n=new(a.getModules("utils").EventLogger)(l,{samplingRatio:t});try{n.logError(e.from,{url:encodeURIComponent(g.location.href),desc:e.message})}catch(e){}}function d(e){var t=g.console;n&&t&&t.warn&&t.warn("[Bridgewell Tracking Code] - "+e)}function i(e,t){c?r({from:e,message:t},u):r({from:e,message:t}),s&&d(t)}e.enableVerboseDebugLogging=function(){s=!0},e.disableAllLogging=function(){n=!1},e.disableSampling=function(){c=!1},e.sendError=r,e.logError=i,e.logUserError=function(e){d(function(e){var t=" must be a string type.",n=" must be an object type.";switch(e.type){case o.duplicatePixelId:return'Duplicate pixel id: "'+e.pixelId+'".';case o.invalidMethod:return"\"bw('"+e.method+"', ...);\" is an invalid bw command.";case o.invalidPixelId:return"The pixel id: "+e.pixelId+t;case o.invalidEventName:return"The event name: "+e.eventName+t;case o.invalidCustomData:return"The custom data: "+e.customData+n;case o.invalidUserData:return"The user data: "+e.userData+n;case o.invalidConsentAction:return"The action: "+e.action+" for \"bw('consent', '"+e.action+'\', ...);" is an invalid action. Valid actions are "revoke" and "grant".';case o.invalidParam:return'Parameter: "'+e.param+'" must be a '+e.validationType+" type.";case o.invalidParamValue:return'Parameter: "'+e.param+'" is an invalid value. Valid values are "'+e.validationValue.join('", "').replace(/,([^,]*)$/,", and$1")+'".';case o.noMethodParam:return"You must provide other parameters for \"bw('"+e.method+"', ...)\".";case o.notAnyPixelId:return"Not initialize any pixel id, please initialize a pixel id first and then call \"bw('track', ...);\" or \"bw('trackCustom', ...);\"";case o.nonInitializePixelId:return'The pixel id: "'+e.pixelId+'" is not initialized first.';case o.invalidSetType:return"The type of set: "+e.setType+" does not exist.";case o.invalidOption:return"The type of option should be boolean.";default:return i(e.from,e.message),"Invalid User Error."}}(e))},e.logBotEvent=function(e,t,n){var o=a.getModules("utils"),r={from:e,message:t},i=new o.EventLogger(l,{samplingRatio:c?n||u:1});try{i.logInfo(r.from,{url:encodeURIComponent(o.getUrl()),desc:r.message})}catch(e){}s&&d(t)},e.errorType=o}(this)}.bind(e={})(),e;var e}),c.ensureModuleRegistered("supportedMethods",function(){return function(){!function(e){var a=g._bw,s=Object.prototype.hasOwnProperty,c=Object.prototype.toString,u=a.getModules("utils"),t=a.getModules("eventsLogging"),l=t.errorType,d=t.logUserError,r={autoConfig:"autoConfig"},n={revoke:"revoke",grant:"grant"};function o(e,t){var n,o,r=a.pixelIdList,i=r.length;if(t=t||{},i)if("string"==typeof e)for("[object Object]"!==c.call(t)&&(d({type:l.invalidCustomData,customData:t}),t={}),n=0;n<i;n++)o=r[n],u.sendEvent(o.id,e,t,u.generateBaseParamList(o));else d({type:l.invalidEventName,eventName:e});else d({type:l.notAnyPixelId})}function i(e,t,n){var o=a.pixelIds;n=n||{},"string"==typeof e?s.call(o,e)?"string"==typeof t?("[object Object]"!==c.call(n)&&(d({type:l.invalidCustomData,customData:n}),n={}),u.sendEvent(o[e].id,t,n,u.generateBaseParamList(o[e]))):d({type:l.invalidEventName,eventName:t}):d({type:l.nonInitializePixelId,pixelId:e}):d({type:l.invalidPixelId,pixelId:e})}e.init=function(e,t,n){var o,r=a.pixelIds,i=a.getModules("configStore");t=t||{},"string"==typeof e?s.call(r,e)?d({type:l.duplicatePixelId,pixelId:e}):("[object Object]"!==c.call(t)&&(d({type:l.invalidUserData,pixelId:e,userData:t}),t={}),o={id:e,userData:t,eventCount:0},r[e]=o,a.pixelIdList.push(o),n?i.setFacebookEventConfig(e,n):i.initFbEventConfig(e),a.flushPushedQueues()):d({type:l.invalidPixelId,pixelId:e})},e.set=function(){var e,t=Array.prototype.slice.call(arguments),n=t.shift(),o={};s.call(r,n)||d({type:l.invalidSetType,setType:n}),o.autoConfig=function(e,t){var n=a.disabledAutoConfigList,o=n.indexOf(t);"boolean"==typeof e?"string"==typeof t?(-1!==o&&n.splice(o,1),e||n.push(t)):d({type:l.invalidPixelId,pixelId:t}):d({type:l.invalidOption})},(e=o[n])&&e.apply(this,t)},e.consent=function(e){if(s.call(n,e))switch(e){case n.revoke:a.isLocked=!0;break;case n.grant:delete a.isLocked,u.flushQueue(a.queueLocked)}else d({type:l.invalidConsentAction,action:e})},e.track=function(e,t){o(e,t)},e.trackCustom=o,e.trackSingle=function(e,t,n){i(e,t,n)},e.trackSingleCustom=i,e.debug=function(e){"boolean"==typeof e?a.developMode=e:d({type:l.invalidOption})}}(this)}.bind(e={})(),e;var e}),c.ensureModuleRegistered("main",function(){return o=c.getModules("supportedMethods"),e=c.getModules("utils"),t="_bwq",n=c.getModules("storageUtils"),r=c.getModules("eventsLogging"),i=r.errorType,a=r.logUserError,s={init:"init",set:"set",consent:"consent",track:"track",trackCustom:"trackCustom",trackSingle:"trackSingle",trackSingleCustom:"trackSingleCustom",debug:"debug"},c.version="0.0.1",c.it=e.now(),c.gid=n.getCookie("_ga"),c.orgid=n.getCookie("_bworgid"),e.toGetOrgUserId(function(e){c.orgid=e,n.setCookie("_bworgid",c.orgid)}),c.ubid="",e.getUBID(function(e){c.ubid=e}),e.processGYMTripId(),c.fp=e.getBridgewellFirstPartyCookie("__BWfp"),c.metadata=e.getMetadata(),c.developMode=!1,c.queue=c.queue||[],c.queueLocked=[],c.pixelIds={},c.pixelIdList=[],c.disabledAutoConfigList=[],c.callMethods=function(){var e=Object.prototype.hasOwnProperty,t=Array.prototype.slice.call(arguments),n=t.shift();e.call(s,n)?t.length?c.isLocked&&n!==s.consent?c.queueLocked.push(arguments):o[n].apply(this,t):a({type:i.noMethodParam,method:n}):a({type:i.invalidMethod,method:n})},c.flushPushedQueues=function(){g[t]=g[t]||[],e.flushHackPushedDataLayer(t)},e.flushQueue(c.queue),e.hackPush(t),{};var o,e,t,n,r,i,a,s}),c.getModules("main")}(window);