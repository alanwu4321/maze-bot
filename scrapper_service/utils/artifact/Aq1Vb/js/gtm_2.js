
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"629",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.innerWidth;return a=520\u003E=a?\"M\":820\u003E=a?\"T\":\"D\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_info"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a=a.device})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"af_pr"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chk_info.final_amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"tw.com.rakuten.point.app\";return-1!=navigator.userAgent.toLowerCase().indexOf(a)})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={},c=[],d,e=[],f=[];var a=0;for(d=dataLayer.length;a\u003Cd;a++)if(\"undefined\"!==typeof dataLayer[a].products){var g=dataLayer[a].products;var h=g.split(\",\");break}d=h.length;for(a=0;a\u003Cd;a++)c[a]=h[a].split(\";\"),c[a].shift();b.encoded=g;b.product_ids=[];b.product_ids_asterisk=\"\";b.total_quantity=0;b.product_quantities_comma=\"\";b.total_price=0;b.product_prices_comma=\"\";d=c.length;for(a=0;a\u003Cd;a++)b.product_ids.push(c[a][0]),b.total_quantity+=+c[a][1],e.push(c[a][1]),b.total_price+=+c[a][2],\nf.push(c[a][2]);b.product_ids_asterisk=b.product_ids.join(\"*\");b.product_quantities_comma=e.join(\",\");b.product_prices_comma=f.join(\",\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b;var a=0;for(b=dataLayer.length;a\u003Cb;a++)if(\"undefined\"!==typeof dataLayer[a].orderNumber)var c=dataLayer[a].orderNumber;return c})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"chk_info.order_id",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof trackingParam.purchaseID){console.log(\"SP\");var a=",["escape",["macro",27],8,16],"}else console.log(\"PC\"),a=",["escape",["macro",28],8,16],";console.log(\"Common_OrderID \\x3d\",a);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],";console.log(\"cart.total_price \\x3d \",a.total_price);return a.total_price})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(dataLayer\u0026\u00260!=dataLayer.length){for(var c=0,a=0;a\u003CdataLayer[0].cart_info.merchants.length;a++)for(var d=dataLayer[0].cart_info.merchants[a],b=0;b\u003Cd.items.length;b++){var e=d.items[b];c+=+e.prod_amount}return c}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===dataLayer[0].chk_info)return 0;var a=dataLayer[0].chk_info.coupon_val;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"undefined\"===typeof dataLayer[0].cart_info?",["escape",["macro",30],8,16],":",["escape",["macro",31],8,16],";var b=",["escape",["macro",32],8,16],";return a-b})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"cart_info"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=",["escape",["macro",34],8,16],";a=a.merchants;for(var c=0;a.length\u003Ec;c++)for(var e=a[c].items,d=0;e.length\u003Ed;d++)b=b+e[d].prod_id+\"*\";return b.slice(0,-1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=",["escape",["macro",34],8,16],";a=a.merchants;for(var c=0;a.length\u003Ec;c++)for(var e=a[c].items,d=0;e.length\u003Ed;d++)b=b+e[d].item_id+\"*\";return b.slice(0,-1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],";return a.product_ids_asterisk})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof dataLayer[0].cart_info?",["escape",["macro",37],8,16],":",["escape",["macro",36],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof dataLayer[0].cart_info?\"not*available\":",["escape",["macro",35],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=\"iCh_gid\\x3d\",d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){url=\"http:\/\/t.conn.tw\/sp?mcode\\x3d%2FCfVg%2FL8j27A94Bv\\x26bid\\x3d1470_1\\x26gid\\x3d",["escape",["macro",40],7],"\\x26oid\\x3d",["escape",["macro",29],7],"\\x26amount\\x3d",["escape",["macro",33],7],"\\x26gno\\x3d",["escape",["macro",38],7],"\\x26gname\\x3d",["escape",["macro",39],7],"\";return decodeURI(url)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",6],8,16],",a=[],d=c.page_products;if(null==d)return a;for(var b=0,e=0;e\u003Cd.length;e++){a.push(c.page_products[b].item_id);if(2==b)break;b+=1}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";a=a.page_products;var b=\"\";return null==a?b:b=a.item_id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=[],a=",["escape",["macro",34],8,16],";a=a.merchants;for(var b=0;a.length\u003Eb;b++)for(var e=a[b].items,c=0;e.length\u003Ec;c++)d.push(e[c].item_id);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[],b=",["escape",["macro",34],8,16],";b=b.merchants;for(var d=0;d\u003Cb.length;d++)for(var c=b[d].items,a=0;c.length\u003Ea;a++)e.push({id:c[a].item_id,price:c[a].prod_price,quantity:c[a].prod_qty});return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=\"\",d=\"affScid\\x3d\",e=document.cookie.split(\";\"),c=0;c\u003Ce.length;c++){for(var a=e[c];\" \"==a.charAt(0);)a=a.substring(1);0==a.indexOf(d)\u0026\u0026(b=a.substring(d.length,a.length))}console.log(\"affScid\\x3d \",b);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=\"_mall_uuid\\x3d\",d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1043505833",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",1],
      "vtp_enableRdpCheckbox":true,
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":161
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":162
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":164
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":165
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":166
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":167
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":168
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":169
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":170
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":171
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":172
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":173
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",9],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1024152844",
      "vtp_conversionLabel":"noUyCO6i3JMBEIyqregD",
      "vtp_url":["macro",1],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":176
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":641
    },{
      "function":"__cl",
      "tag_id":642
    },{
      "function":"__cl",
      "tag_id":643
    },{
      "function":"__cl",
      "tag_id":644
    },{
      "function":"__cl",
      "tag_id":645
    },{
      "function":"__cl",
      "tag_id":646
    },{
      "function":"__cl",
      "tag_id":647
    },{
      "function":"__cl",
      "tag_id":648
    },{
      "function":"__cl",
      "tag_id":649
    },{
      "function":"__cl",
      "tag_id":650
    },{
      "function":"__cl",
      "tag_id":651
    },{
      "function":"__cl",
      "tag_id":652
    },{
      "function":"__cl",
      "tag_id":653
    },{
      "function":"__cl",
      "tag_id":654
    },{
      "function":"__cl",
      "tag_id":655
    },{
      "function":"__cl",
      "tag_id":656
    },{
      "function":"__cl",
      "tag_id":657
    },{
      "function":"__cl",
      "tag_id":658
    },{
      "function":"__cl",
      "tag_id":659
    },{
      "function":"__cl",
      "tag_id":660
    },{
      "function":"__cl",
      "tag_id":661
    },{
      "function":"__cl",
      "tag_id":662
    },{
      "function":"__cl",
      "tag_id":663
    },{
      "function":"__cl",
      "tag_id":664
    },{
      "function":"__cl",
      "tag_id":665
    },{
      "function":"__cl",
      "tag_id":666
    },{
      "function":"__cl",
      "tag_id":667
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=1024152844,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"GXg1CLzvtAoQjKqt6AM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/1024152844\/?label=GXg1CLzvtAoQjKqt6AM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){function f(a){return\"\"==a?!1:eval(\"typeof \"+a)!=k}function g(a){var b=document.createElement(\"script\");b.setAttribute(\"type\",\"text\/javascript\");b.setAttribute(\"src\",a);return b}function l(a){var b=document.getElementsByTagName(\"head\")[0];b?b.appendChild(g(a)):document.body.appendChild(g(a))}function m(a,b){var c=setInterval(function(){f(a)\u0026\u0026(clearInterval(c),b())},50)}function n(a,b,c,d){0==f(b)?(l(a),m(b,function(){c\u0026\u0026c();d\u0026\u0026d()})):d\u0026\u0026d()}var p={mid:85},k=\"undefined\",c=\"http:\/\/\",q=\"https:\/\/\",\nh=\"\/\/\",e=c;-1!=document.location.href.indexOf(c)?e=h:-1!=document.location.href.indexOf(q)\u0026\u0026(e=h);c=e+\"rec.scupio.com\/recweb\/js\/rec.js\";n(c,\"scupioec\",null,function(){self.scupioec.call(p)})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=977503047,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/977503047\/?value=0\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=977503047,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"g9zlCITSiV4Qx4aO0gM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/977503047\/?label=g9zlCITSiV4Qx4aO0gM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=977503047,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"AtVOCLrSiV4Qx4aO0gM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/977503047\/?label=AtVOCLrSiV4Qx4aO0gM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eif(-1===window.location.pathname.indexOf(\"\/app\/top\")\u0026\u0026-1===window.location.pathname.indexOf(\"\/checkout\")){var gtmPcCss=\"https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/gtm\/pcbanner.css\",gtmMobileCss=\"https:\/\/intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/mobilebanner.css?v3\",gtmJsData=\"https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/gtm\/data-random.js?v5\",gtmLoadScript=function(a,c){var b=document.createElement(\"script\");b.onload=function(a){c()};b.src=a;var d=document.getElementsByTagName(\"body\")[0];d.insertBefore(b,\nd.childNodes[0])},gtmLoadCss=function(a,c){var b=document.createElement(\"link\");b.onload=function(a){c()};b.href=a;b.type=\"text\/css\";b.rel=\"stylesheet\";document.getElementsByTagName(\"head\")[0].appendChild(b)},mobileType,isMobile={Android:function(){return navigator.userAgent.match(\/Android\/i)},BlackBerry:function(){return navigator.userAgent.match(\/BlackBerry\/i)},iOS:function(){return navigator.userAgent.match(\/iPhone|iPod\/i)},Opera:function(){return navigator.userAgent.match(\/Opera Mini\/i)},Windows:function(){return navigator.userAgent.match(\/IEMobile\/i)},\nany:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},getRandomNumber=function(a,c){return Math.floor(Math.random()*(c-a+1)+a)},readCookie=function(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),b=0;b\u003Cc.length;b++){for(var d=c[b];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null},setCookie=function(a,c,b){var d=new Date;d.setTime(d.getTime()+864E5*c);c=\"expires\\x3d\"+\nd.toGMTString();document.cookie=b+\"\\x3d\"+a+\"; \"+c+\"\"};gtmLoadScript(gtmJsData,function(){isMobile.any()?gtmLoadCss(gtmMobileCss,function(){if(null===readCookie(window.gtmMobileCookieName)){var a=getRandomNumber(0,window.gtmMobileLinks.length-1);window.gtmMobileLink=window.gtmMobileLinks[a];window.gtmMobileImage=window.gtmMobileImages[a];window.gtmMobileScName=window.gtmMobileScNames[a];setCookie(a,window.gtmMobileExpireDays,window.gtmMobileCookieName)}else a=readCookie(window.gtmMobileCookieName),\nwindow.gtmMobileLink=window.gtmMobileLinks[a],window.gtmMobileImage=window.gtmMobileImages[a],window.gtmMobileScName=window.gtmMobileScNames[a];a=document.createElement(\"DIV\");var c=\"https:\/\/rakuten.112.2o7.net\/b\/ss\/rakuten-tw-rmail\/1\/H.15.1--NS\/2015111900800?AQB\\x3d1\\x26pccr\\x3dtrue\\x26g\\x3dnone\\x26pageName\\x3dRAD: \"+window.gtmMobileScName+\"\\x26AQE\\x3d1\";document.getElementById(\"bu_static_content\");var b=null===document.getElementById(\"bu_static_content\")?document.getElementsByTagName(\"body\")[0]:\ndocument.getElementById(\"bu_static_content\");a.className=\"ui-marathon-banner mobile\";a.innerHTML=\"\/\"===window.location.pathname?'\\x3ca id\\x3d\"fx\" target\\x3d\"_self\" href\\x3d\"'+window.gtmMobileLink+'\"\\x3e\\x3cimg src\\x3d\"'+window.gtmMobileImage+'\"\/\\x3e\\x3cimg id\\x3d\"tkcode\"src\\x3d\"'+c+'\" style\\x3d\"display:none\"\/\\x3e\\x3cimg src\\x3d\"https:\/\/rakuten.112.2o7.net\/b\/ss\/rakuten-tw-rmail\/1\/H.15.1--NS\/2015111900800?AQB\\x3d1\\x26amp;pccr\\x3dtrue\\x26amp;g\\x3dnone\\x26amp;pageName\\x3dRAD-Header-All-SuperBanner-ver\\x26amp;AQE\\x3d1\" style\\x3d\"display:none\"\/\\x3e\\x3c\/a\\x3e':\n'\\x3ca target\\x3d\"_self\" href\\x3d\"'+window.gtmMobileLink+'\"\\x3e\\x3cimg src\\x3d\"'+window.gtmMobileImage+'\"\/\\x3e\\x3cimg id\\x3d\"tkcode\"src\\x3d\"'+c+'\" style\\x3d\"display:none\"\/\\x3e\\x3c\/a\\x3e';b.insertBefore(a,b.childNodes[0])}):gtmLoadCss(gtmPcCss,function(){})})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":56
    },{
      "function":"__html",
      "setup_tags":["list",["tag",144,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E-1===window.location.pathname.indexOf(\"\/product\")\u0026\u0026function(){var m=\"http:\/\/intl.rakuten-static.com\/b\/tw\/assets\/gtm\/shop_control.css\",n=\"http:\/\/intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/mobilebanner-shop.css\",p=\"http:\/\/intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/bottombanner.css?v3\",q=\"http:\/\/intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/bottombanner.js?v7\",r=function(a,d){var b=document.createElement(\"script\");b.onload=function(a){d()};b.src=a;a=document.getElementsByTagName(\"body\")[0];\na.insertBefore(b,a.childNodes[0])},f=function(a,d){var b=document.createElement(\"link\");b.onload=function(a){d()};b.href=a;b.type=\"text\/css\";b.rel=\"stylesheet\";document.getElementsByTagName(\"head\")[0].appendChild(b)},c={Android:function(){return navigator.userAgent.match(\/Android\/i)},BlackBerry:function(){return navigator.userAgent.match(\/BlackBerry\/i)},iOS:function(){return navigator.userAgent.match(\/iPhone|iPod\/i)},Opera:function(){return navigator.userAgent.match(\/Opera Mini\/i)},Windows:function(){return navigator.userAgent.match(\/IEMobile\/i)},\nany:function(){return c.Android()||c.BlackBerry()||c.iOS()||c.Opera()||c.Windows()}};r(q,function(){c.any()?f(p,function(){f(n,function(){});var a=null===document.getElementById(\"bu_static_content\")?document.getElementsByTagName(\"body\")[0]:document.getElementById(\"bu_static_content\"),d=document.createElement(\"DIV\");d.className=\"popup-menu-share-wrapper\";d.innerHTML=window.popupShareContent;var b=document.createElement(\"DIV\");b.className=\"popup-menu-more-wrapper\";b.innerHTML=window.popupMoreContent;\nvar c=document.createElement(\"DIV\");c.className=\"wrap-fixed-bottom-nav\";c.innerHTML=window.fixedBottonNav;var g=document.createElement(\"DIV\");g.className=\"mask-move\";a.appendChild(d);a.appendChild(b);a.appendChild(c);a.appendChild(g);var e,h=$(\".popup-menu-more-wrapper\"),k=$(\".wrap-fixed-bottom-nav\");$(\".more-item\").on(\"touchstart\",function(a){a.preventDefault();e=$(\"body\").scrollTop();h.addClass(\"show\");$(\"#bu_static_content\").addClass(\"lockscroll\");0===$(\"#bu_static_content\").length\u0026\u0026$(\"#page\").addClass(\"lockscroll\")});\n$(\".popup-menu-more-wrapper .close-more\").on(\"click\",function(a){a.preventDefault();h.removeClass(\"show\");$(\"#bu_static_content\").removeClass(\"lockscroll\");0===$(\"#bu_static_content\").length\u0026\u0026$(\"#page\").removeClass(\"lockscroll\");window.scrollTo(0,e)});var l=$(\".popup-menu-share-wrapper\");$(\".share-item\").on(\"touchstart\",function(a){a.preventDefault();e=$(\"body\").scrollTop();l.addClass(\"show\");e=$(\"body\").scrollTop();$(\".mask-move\").addClass(\"mask-move-show\");$(\"#bu_static_content\").addClass(\"lockscroll\");\n0===$(\"#bu_static_content\").length\u0026\u0026$(\"#page\").addClass(\"lockscroll\");k.addClass(\"higher-than-mask\")});$(\".popup-menu-share-wrapper .close-share\").on(\"click\",function(a){a.preventDefault();window.scrollTo(0,e);l.removeClass(\"show\");$(\".mask-move\").removeClass(\"mask-move-show\");$(\"#bu_static_content\").removeClass(\"lockscroll\");0===$(\"#bu_static_content\").length\u0026\u0026$(\"#page\").removeClass(\"lockscroll\");k.removeClass(\"higher-than-mask\")});a=window.location.href;window.fbUrl=\"\";window.lnUrl=\"\";-1!==a.indexOf(\"?\")\u0026\u0026\n(a=a.substring(0,a.indexOf(\"?\")));window.fbUrl=a+\"?scid\\x3dsharefbeventa001[iphone]\";window.lnUrl=a+\"?scid\\x3dsharelneventa001[iphone]\"}):f(m,function(){})})}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar topLayer=document.createElement(\"DIV\");setTimeout(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.src=document.location.protocol+\"\/\/script.crazyegg.com\/pages\/scripts\/0032\/8588.js?\"+Math.floor((new Date).getTime()\/36E5);a.async=!0;a.type=\"text\/javascript\";b.parentNode.insertBefore(a,b)},1);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(){var b=document.URL,a=b.split(\"?scid\\x3d\")[1];if(\"undefined\"!==typeof a)var c=a.split(\/[\u0026\\+?\\\/]\/)[0];else a=b.split(\"\\x26scid\\x3d\")[1],\"undefined\"!==typeof a\u0026\u0026(c=a.split(\/[\u0026\\+?\\\/]\/)[0]);return c}function f(b){b=\"affScid\\x3d\"+b;var a=\"domain\\x3d.rakuten.com.tw\",c=\"path\\x3d\/\";document.cookie=b+\"; \"+a+\"; \"+c+\";\"}var d=e();\"undefined\"!==typeof d\u0026\u0026f(d)})(this);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"UA-57084276-1\",\"auto\");ga(\"create\",\"UA-92004309-1\",\"auto\",\"rmsgMallTracker\");ga(\"send\",\"pageview\");ga(\"rmsgMallTracker.send\",\"pageview\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.appier_q=window.appier_q||[];window.appier_q.push({t:\"register\",content:{id:\"ovpA\",site:\"rakuten.com.tw\"}},{t:\"pv_track\",action_id:\"3d885Y7YN9xWIfx\",track_id:\"UI9zNhSS4mhQN5W\",isCountReload:!0,counter:0},{t:\"pv_track\",action_id:\"sWN2U01rYp6xGx8\",track_id:\"UI9zNhSS4mhQN5W\",isCountReload:!1,counter:1});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/aa.js?id=rakuten.com.tw\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.appier_q=window.appier_q||[];window.appier_q.push({t:\"register\",content:{id:\"ovpA\",site:\"rakuten.com.tw\"}},{t:\"type_home\",content:\"\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/aa.js?id=rakuten.com.tw\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar appierRtSearch=dataLayer[1].search_info.search_keyword.split(\",\"),appierRtProductIDList=[];if(0\u003CdataLayer[0].page_info.page_products.length)for(var i=0;10\u003Ei;i++)appierRtProductIDList.push(dataLayer[0].page_info.page_products[i].item_id);window.appier_q=window.appier_q||[];window.appier_q.push({t:\"register\",content:{id:\"ovpA\",site:\"rakuten.com.tw\"}},{t:\"type_listpage\",keywords:appierRtSearch,productIDList:appierRtProductIDList});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/aa.js?id=rakuten.com.tw\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/jsc\/ovpA-_-rakuten_com_tw\/appier_category_rt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/jsc\/ovpA-_-rakuten_com_tw\/appier_product_rt_1104.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var appierRtCartList=[],cartItemNum=dataLayer[0].cart_info.merchants.length,total_amount=0,i=0;i\u003CcartItemNum;i++){var prod={};prod.productID=dataLayer[0].cart_info.merchants[i].items[0].item_id;prod.unit=dataLayer[0].cart_info.merchants[i].items[0].prod_qty;prod.price=dataLayer[0].cart_info.merchants[i].items[0].prod_price;total_amount+=parseInt(dataLayer[0].cart_info.merchants[i].items[0].prod_amount,10);appierRtCartList.push(prod)}var appierRtPrice=total_amount.toString();\nwindow.appier_q=window.appier_q||[];window.appier_q.push({t:\"register\",content:{id:\"ovpA\",site:\"rakuten.com.tw\"}},{t:\"type_cart\",itemList:appierRtCartList,totalvalue:appierRtPrice});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/aa.js?id=rakuten.com.tw\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/jsc\/ovpA-_-rakuten_com_tw\/appier_pur_tk_1104.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003E(function(){function k(){var b=dataLayer[0].chk_info.order_id;return b}function l(){var b=[];if(\"undefined\"===dataLayer[0].cart_info)return 0;var d=dataLayer[0].cart_info;d=d.merchants;var c,a;for(c=0;d.length\u003Ec;c++){var e=d[c].items;for(a=0;e.length\u003Ea;a++)b.push(e[a].prod_id)}return b}function m(){var b=[];if(\"undefined\"===dataLayer[0].cart_info)return 0;var d=dataLayer[0].cart_info;d=d.merchants;var c,a;for(c=0;d.length\u003Ec;c++){var e=d[c].items;for(a=0;e.length\u003Ea;a++)b.push(e[a].item_id)}return b}\nfunction n(){var b=0;b=function(){if(\"undefined\"===dataLayer[0].chk_info)return 0;var c=dataLayer[0].chk_info.coupon_val;return c};var d=function(){if(dataLayer\u0026\u00260!=dataLayer.length){var c=0,a,b;for(a=0;a\u003CdataLayer[0].cart_info.merchants.length;a++){var d=dataLayer[0].cart_info.merchants[a];for(b=0;b\u003Cd.items.length;b++){var f=d.items[b];c+=f.prod_amount}}return c}};b=+d()-+b();return+b}function f(b){b+=\"\\x3d\";var d=document.cookie.split(\";\"),c,a;for(c=0;c\u003Cd.length;c++){for(a=d[c];\" \"==a.charAt(0);)a=\na.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"}function g(b){if(f(b)){b+=\"\\x3d\";var d=\"domain\\x3d.rakuten.com.tw\",c=\"path\\x3d\/\",a=new Date(\"Thu, 01 Jan 1970 00:00:01 GMT\");a=\"expires\\x3d\"+a;document.cookie=b+\"; \"+d+\"; \"+a+\"; \"+c+\"; \"}}function r(b,d){if(!isNaN(b)\u0026\u0026!isNaN(d)){var c=864E5,a=b-d;return a\/c}return-1}function h(){var b=(new Date).getTime();console.log(\"CurrentTimeStamp \"+b);var d=k(),c=f(\"af_gid\")?f(\"af_gid\"):f(\"iCh_gid\"),a=f(\"af_pr\")?f(\"af_pr\"):f(\"pr\");\nif(d\u0026\u0026\"undefined\"===typeof d)setTimeout(function(){h()},1E3);else if(a\u0026\u0026\"\"!=a){var e=a.includes(\"|\")?a.split(\"|\")[0]:a;a=a.includes(\"|\")?a.split(\"|\")[1]:\"N.A\";console.log(\"cookieCreationTimeStamp \"+a);a=r(b,a);console.log(\"No of Days \"+a);var p=n(),q=m(),t=l();b=\"dXNlcjowMjgyY2ZjYS00YTRjLTQxYzctYjY1My0yYmFmZTgwNjU4NmE\\x3d\";d={trackingId:e,orderId:d,amount:p,transactionId:c,productId:t,itemId:q,malluuid:f(\"_mall_uuid\"),shopuuid:\"Internal\"};if(\"b263ed86d0a40639\"==e\u0026\u00260\u003C=a\u0026\u00261\u003E=a||\"b263ed86d0a40639\"!=\ne)c=new XMLHttpRequest,c.open(\"POST\",\"https:\/\/publisher.affiliate.rakuten.com.tw\/order\/notification\",!0),c.setRequestHeader(\"Content-type\",\"application\/json;charset\\x3dUTF-8\"),c.setRequestHeader(\"Authorization\",\"Basic \"+b),c.send(JSON.stringify(d));\"b263ed86d0a40639\"!=e\u0026\u0026(g(\"iCh_gid\"),g(\"af_gid\"))}\"b263ed86d0a40639\"!=e\u0026\u0026(g(\"pr\"),g(\"af_pr\"))}h()})(this);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"183778785452057\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=183778785452057\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var keyword=dataLayer[1].search_info.search_keyword,len=dataLayer[0].page_info.page_products.length,item_id=\"\",item_list=\"\",i=0;i\u003Clen;i++)item_id=dataLayer[0].page_info.page_products[i].item_id,item_list+=i===len-1?item_id:item_id+\",\";fbq(\"track\",\"Search\",{search_string:keyword,content_ids:[item_list],content_type:\"product\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar item_id=dataLayer[0].page_info.page_products.item_id,price=dataLayer[0].page_info.page_products.prod_price,shopurl=dataLayer[0].page_info.page_shop.shop_url,ctrl=dataLayer[0].page_info.ctrl,cat_id=dataLayer[0].page_info.page_cat.cat_id,cat_mpath=dataLayer[0].page_info.page_cat.cat_mpath,prod_id=dataLayer[0].page_info.page_products.prod_id,Item_Brand=dataLayer[0].page_info.page_products.brand,ItempageURL=new URL(document.URL),scid=ItempageURL.searchParams.get(\"scid\");\nfbq(\"track\",\"ViewContent\",{content_ids:[item_id],content_type:\"product\",value:price,currency:\"TWD\",surl:shopurl,Pagetype:[ctrl],Item_cat_id:cat_id,Item_cat_path:cat_mpath,Prod_id:prod_id,Item_brandname:Item_Brand,scid:scid});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var total=dataLayer[0].cart_info.merchants[0].items.length,item_ids=\"\",total_price=dataLayer[0].chk_info.final_amount,ShopID=dataLayer[0].chk_info.order_id.split(\"-\")[0],getH=parseInt(dataLayer[0].chk_info.order_id.split(\"-\")[2].substr(0,2),10),OrderH=24\u003C=getH+8?getH+8-24:getH+8,i=0;i\u003Ctotal;i++){var item_id=dataLayer[0].cart_info.merchants[0].items[i].item_id;item_ids+=i===total-1?item_id:item_id+\",\"}\nfbq(\"track\",\"Purchase\",{content_ids:[item_ids],content_type:\"product\",value:total_price,currency:\"TWD\",ShopID:[ShopID],OrderH:[OrderH]});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{value:10,currency:\"USD\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.onesignal.com\/sdks\/OneSignalSDK.js\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar OneSignal=window.OneSignal||[];\nOneSignal.push([\"init\",{appId:\"bdb4cc00-969d-4678-adae-0e86a939c07c\",autoRegister:!0,subdomainName:\"rakuten\",httpPermissionRequest:{enable:!0,modalTitle:\"\\u53f0\\u7063\\u6a02\\u5929\\u5e02\\u5834\",modalMessage:\"\\u611f\\u8b1d\\u60a8\\u8a02\\u95b1\\u53f0\\u7063\\u6a02\\u5929\\u5e02\\u5834\\u901a\\u77e5\\u5feb\\u8a0a\\uff0c\\u60a8\\u5c07\\u53ef\\u4e0d\\u5b9a\\u671f\\u6536\\u5230\\u7279\\u60e0\\u901a\\u77e5\\u3002\",modalButtonText:\"\\u5b8c\\u6210\\u8a02\\u95b1\"},welcomeNotification:{title:\"\\u8a02\\u95b1\\u5b8c\\u6210\\u901a\\u77e5\",message:\"\\u611f\\u8b1d\\u60a8\\u7684\\u8a02\\u95b1\\uff0c\\u60a8\\u5c07\\u53ef\\u4e0d\\u5b9a\\u671f\\u6536\\u5230\\u7279\\u60e0\\u901a\\u77e5\\u3002\"},\nnotifyButton:{enable:!1},safari_web_id:\"web.onesignal.auto.2e1b0bc4-2845-4ea5-bb2f-59e722cf7b3c\"}]);\u003C\/script\u003E\n\u003Cstyle\u003E\n    #onesignal-modal-container #onesignal-modal-dialog .modal-body-title{\n        background-color: #bf0000!important;\n    }\n    #onesignal-modal-container #onesignal-modal-dialog .modal-button.primary{\n        background-color: #bf0000!important;\n    }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){\"undefined\"==typeof window.APPIER_RETARGET\u0026\u0026function(a,b,f,d){var e=b.getElementsByTagName(\"script\")[0];b=b.createElement(\"script\");var c=\"APPIER_RETARGET\";a._appierSendQueue=a._appierSendQueue||[];a.appierRetargetJson={id:f,site:d};b.async=!0;b.src=\"\/\/jscdn.appier.net\/aa.js?id\\x3d\"+d;e.parentNode.insertBefore(b,e);!a[c]\u0026\u0026(a[c]={});!a[c].send\u0026\u0026(a[c].send=function(b){a._appierSendQueue.push(b)})}(window,document,\"ovpA\",\"rakuten.com.tw\");window.APPIER_RETARGET.send({t:\"pv_track\",action_id:\"3d885Y7YN9xWIfx\",\ntrack_id:\"UI9zNhSS4mhQN5W\",isCountReload:!0,counter:0});window.APPIER_RETARGET.send({t:\"pv_track\",action_id:\"sWN2U01rYp6xGx8\",track_id:\"UI9zNhSS4mhQN5W\",isCountReload:!1,counter:1});window.APPIER_RETARGET.send({t:\"type_conversion\",content:\"submit\",action_id:\"W6NS0NttxEmt85Y\",track_id:\"UI9zNhSS4mhQN5W\",opts:{unique_key:\"true\"}})})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var objClickedElement=$(",["escape",["macro",5],8,16],"),item_id=objClickedElement.parent().find(\".b-btn-wishlist\").attr(\"id\").split(\"_\")[1],uid=objClickedElement.attr(\"data-base-sku\"),price_ar=$(\"#price_\"+uid).html().split(\",\"),price=0,i=0,j=price_ar.length;i\u003Cj;i++)price+=price_ar[i];fbq(\"track\",\"AddToCart\",{content_ids:[item_id],content_type:\"product\",value:parseInt(price,10).toFixed(2),currency:\"TWD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=dataLayer[0].page_info.device,hasSelectedVariant=\"\";\nif(\"M\"==deviceType){var lv1VariantNum=document.getElementsByClassName(\"qa-variantSelect-drdn\").length,countNum=0;if(0==lv1VariantNum)hasSelectedVariant=\"no variant\";else{for(var i=0,j=lv1VariantNum;i\u003Clv1VariantNum;i++)for(var selectionBtnNum=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children.length,k=0;k\u003CselectionBtnNum;k++){var isSelected=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children[k].classList.contains(\"selected\");isSelected\u0026\u0026(countNum+=1)}lv1VariantNum==\ncountNum\u0026\u0026(hasSelectedVariant=\"varanit has been selected\")}}else hasSelectedVariant=document.getElementsByName(\"variant_id\")[0].value;\nif(\"\"!=hasSelectedVariant){var item_id=dataLayer[0].page_info.page_products.item_id,price=dataLayer[0].page_info.page_products.prod_price,shopurl=dataLayer[0].page_info.page_shop.shop_url,ctrl=dataLayer[0].page_info.ctrl,cat_id=dataLayer[0].page_info.page_cat.cat_id,cat_mpath=dataLayer[0].page_info.page_cat.cat_mpath,prod_id=dataLayer[0].page_info.page_products.prod_id,Item_Brand=dataLayer[0].page_info.page_products.brand,ItempageURL=new URL(document.URL),scid=ItempageURL.searchParams.get(\"scid\");\nfbq(\"track\",\"AddToCart\",{content_ids:item_id,content_type:\"product\",value:parseInt(price,10).toFixed(2),currency:\"TWD\",surl:shopurl,Pagetype:ctrl,Item_cat_id:cat_id,Item_cat_path:cat_mpath,Prod_id:prod_id,Item_brandname:Item_Brand,scid:scid})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar objClickedElement=$(",["escape",["macro",5],8,16],"),uid=\"\",prod_id=\"\",surl=\"\",price_ar=[],price=0,targetElement=\"cart-icon\"===objClickedElement[0].className?objClickedElement.parent().parent():objClickedElement,item_id=targetElement[0].parentNode.id.split(\"ADD_TO_CART-\")[1];\ntry{for(var total=dataLayer[\"0\"].page_info.page_products.length,ctrl=dataLayer[\"0\"].page_info.ctrl,shopLink=\"\",i=0;i\u003Ctotal;i++){var dataLayer_item_id=dataLayer[\"0\"].page_info.page_products[i].item_id;if(dataLayer_item_id===item_id){uid=dataLayer[\"0\"].page_info.page_products[i].prod_uid;prod_id=dataLayer[\"0\"].page_info.page_products[i].prod_id;price_ar=$(\"#product-info-\"+item_id+\" .product-price\").html().split(\",\");shopLink=dataLayer[\"0\"].page_info.page_products[i].prod_url.split(\"\/product\/\"+prod_id+\n\"\/\")[0];surl=shopLink.split(\"https:\/\/www.rakuten.com.tw\/shop\/\")[1];for(var j=0;j\u003Cprice_ar.length;j++)price+=price_ar[j];break}}fbq(\"track\",\"AddToCart\",{content_ids:[item_id],content_type:\"product\",value:parseInt(price,10).toFixed(2),currency:\"TWD\",Surl:[surl],Pagetype:[ctrl],Prod_id:[prod_id]})}catch(a){log.error(a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar item_id=dataLayer[0].page_info.page_products.item_id,price=dataLayer[0].page_info.page_products.prod_price,sid=dataLayer[0].page_info.page_shop.sid,ctrl=dataLayer[0].page_info.ctrl,cat_id=dataLayer[0].page_info.page_cat.cat_id,prod_id=dataLayer[0].page_info.page_products.prod_id;fbq(\"track\",\"AddToWishlist\",{content_ids:[item_id],content_type:\"product\",value:price,currency:\"TWD\",Sid:[sid],Pagetype:[ctrl],Item_cat_id:[cat_id],Prod_id:[prod_id]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var objClickedElement=$(",["escape",["macro",5],8,16],"),item_id=objClickedElement.attr(\"data-item-id\"),sid=objClickedElement.attr(\"data-shop-id\"),price=0,price_ar=objClickedElement.attr(\"data-price\").split(\",\"),i=0,j=price_ar.length;i\u003Cj;i++)price+=price_ar[i];fbq(\"track\",\"AddToCart\",{content_ids:[item_id],content_type:\"product\",value:parseInt(price,10).toFixed(2),currency:\"TWD\",Sid:[sid],Pagetype:\"Wishlist\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar objClickedElement=$(",["escape",["macro",5],8,16],"),price_ar=[],price=\"\",targetElement=\"heart-icon\"===objClickedElement[0].className?objClickedElement.parent().parent():objClickedElement,item_id=targetElement[0].parentNode.id.split(\"ADD_TO_WISHLIST-\")[1];\ntry{for(var total=dataLayer[\"0\"].page_info.page_products.length,i=0;i\u003Ctotal;i++){var dataLayer_item_id=dataLayer[\"0\"].page_info.page_products[i].item_id;if(dataLayer_item_id===item_id){price_ar=$(\"#product-info-\"+item_id+\" .product-price\").html().split(\"\\x3cspan\")[0].split(\",\");for(var j=0;j\u003Cprice_ar.length;j++)price+=price_ar[j];break}}fbq(\"track\",\"AddToWishlist\",{content_ids:[item_id],content_type:\"product\",value:parseInt(price,10).toFixed(2),currency:\"TWD\"})}catch(a){log.error(a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"00905c5e-b7c8-4b63-a847-adb666741595\"});_lt(\"send\",\"pv\",[\"00905c5e-b7c8-4b63-a847-adb666741595\"]);\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/tr.line.me\/tag.gif?c_t=lap\u0026amp;t_id=00905c5e-b7c8-4b63-a847-adb666741595\u0026amp;e=pv\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"Conversion\"},[\"00905c5e-b7c8-4b63-a847-adb666741595\"]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  body {\n  \tpadding-top: 14.4%;\n  }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_offer_\"+dataLayer[0].page_info.page_products.item_id;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"require\",\"ecommerce\");ga(\"ecommerce:addTransaction\",{id:dataLayer[0].chk_info.order_id,revenue:dataLayer[0].chk_info.final_amount});dataLayer[0].cart_info.merchants[0].items.map(function(a){ga(\"ecommerce:addItem\",{id:dataLayer[0].chk_info.order_id,sku:a.prod_id,price:a.prod_price,quantity:a.prod_qty})});ga(\"ecommerce:send\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_home\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_category2_\"+document.URL.split(\"\/\")[4];document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"undefined\"!=typeof dataLayer[0].page_info){var a=document.createElement(\"script\");a.async=!0;var c=dataLayer[0].page_info.page_products.length,b=0;for(a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_listing_\";0\u003Cc-b\u0026\u00265!=b;)0!=b\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[0].page_info.page_products[b].item_id,b++}else if(\"undefined\"!=typeof dataLayer[1].page_info)for(a=document.createElement(\"script\"),a.async=!0,c=dataLayer[1].page_info.page_products.length,\nb=0,a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_listing_\";0\u003Cc-b\u0026\u00265!=b;)0!=b\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[1].page_info.page_products[b].item_id,b++;else if(\"undefined\"!=typeof dataLayer[2].page_info)for(a=document.createElement(\"script\"),a.async=!0,c=dataLayer[2].page_info.page_products.length,b=0,a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_listing_\";0\u003Cc-b\u0026\u00265!=b;)0!=b\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[2].page_info.page_products[b].item_id,\nb++;else for(a=document.createElement(\"script\"),a.async=!0,c=dataLayer[3].page_info.page_products.length,b=0,a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_listing_\";0\u003Cc-b\u0026\u00265!=b;)0!=b\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[3].page_info.page_products[b].item_id,b++;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;var e=dataLayer[0].cart_info.merchants.length,b=0,c=0;for(a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_basketstatus_\";0\u003Ce-b\u0026\u00265!=c;){for(var d=0,f=dataLayer[0].cart_info.merchants[b].items.length;0\u003Cf-d\u0026\u00265!=c;)0!=c\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[0].cart_info.merchants[b].items[d].item_id,d++,c++;b++}document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo\\x26ncm\\x3d1\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;var c=dataLayer[0].cart_info.merchants[0].items.length,b=0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_orderstatus2_\";for(a.src+=dataLayer[0].chk_info.final_amount+\"_\"+dataLayer[0].chk_info.order_id+\"_\";0\u003Cc-b;)0!=b\u0026\u0026(a.src+=\",\"),a.src+=dataLayer[0].cart_info.merchants[0].items[b].item_id,b++;a.src+=\"\\x26cd\\x3ddefault\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"https:\/\/asia.creativecdn.com\/tags?type\\x3dscript\\x26id\\x3dpr_xl6PaWcpnEBhJNtGUlzo_startorder\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tagtoo_advertiser_id=1007,tagtoo_ga=document.createElement(\"script\");tagtoo_ga.type=\"text\/javascript\";tagtoo_ga.async=!0;tagtoo_ga.src=\"\/\/ad.tagtoo.co\/media\/ad\/track.js\";var tagtoo_s=document.getElementsByTagName(\"script\")[0];tagtoo_s.parentNode.insertBefore(tagtoo_ga,tagtoo_s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar CPpageURL=new URL(document.URL),TKCid=CPpageURL.searchParams.get(\"scid\"),ccid=CPpageURL.searchParams.get(\"ccid\"),chkPA=[\"lnrt\",\"fbsp\",\"GSA_\"];null!==TKCid\u0026\u0026-1!==chkPA.indexOf(TKCid.substr(0,4))\u0026\u0026null!==ccid\u0026\u0026(angular.element(document.getElementsByTagName(\"mycoupon-save\")).scope().$$childHead.$ctrl.couponCode=ccid,angular.element(document.getElementsByTagName(\"mycoupon-save\")).scope().$$childHead.$apply());\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"ViewContent\"},[\"00905c5e-b7c8-4b63-a847-adb666741595\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=dataLayer[0].page_info.device,hasSelectedVariant=\"\";\nif(\"M\"==deviceType){var lv1VariantNum=document.getElementsByClassName(\"qa-variantSelect-drdn\").length,countNum=0;if(0==lv1VariantNum)hasSelectedVariant=\"no variant\";else{for(var i=0,j=lv1VariantNum;i\u003Clv1VariantNum;i++)for(var selectionBtnNum=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children.length,k=0;k\u003CselectionBtnNum;k++){var isSelected=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children[k].classList.contains(\"selected\");isSelected\u0026\u0026(countNum+=1)}lv1VariantNum==\ncountNum\u0026\u0026(hasSelectedVariant=\"varanit has been selected\")}}else hasSelectedVariant=document.getElementsByName(\"variant_id\")[0].value;\"\"!=hasSelectedVariant\u0026\u0026_lt(\"send\",\"cv\",{type:\"AddToCart\"},[\"00905c5e-b7c8-4b63-a847-adb666741595\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eel=document.getElementsByClassName(\"wishlist-btn\");el[0].remove();var superSaleLink=document.createElement(\"div\");superSaleLink.className=\"super-sale-link\";superSaleLink.style.flexGrow=\"0\";superSaleLink.innerHTML='\\x3ca href\\x3d\"https:\/\/www.rakuten.com.tw\/coupon\/?l-id\\x3dtw_product_campaign-icon\" target\\x3d\"_blank\"\\x3e\\x3cimg src\\x3d\"https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/coupon\/images\/2018\/201812_coupon_app.png\" alt\\x3d\"coupon icon\" width\\x3d\"34\" height\\x3d\"34\" \/\\x3e\\x3c\/a\\x3e';document.getElementsByClassName(\"cart-wishlist-btns\")[0].appendChild(superSaleLink);\u003C\/script\u003E\n\u003Cstyle\u003E\n  .super-sale-link {\n    width: 44px;\n    border: 1px solid #bf0000;\n    border-radius: 3px;\n    padding: 5px;\n  }\n  .super-sale-link a{\n    display: block;\n  }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  .go-to-top{\n    display: block;\n    background: none;\n    border-radius: unset;\n    box-shadow: none;\n    width: 150px;\n    height: 45px;\n    overflow: hidden;\n  }\n  .go-to-top-wrapper{\n      bottom: 150px;\n  }\n  .go-to-top-button{\n      position: relative;\n      float: right;\n  }\n  .go-to-top-button p{\n    width: 100px;\n    line-height: 30px;\n    color: #333;\n    font-style: normal;\n    font-size: 14px;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    border-radius: 20px 0 0 20px;\n    position: absolute;\n    top: 4px;\n    right: -60px;\n    z-index: -1;\n    padding-left: 15px;\n    display: block;\n    box-sizing: border-box;\n    transition: .3s;\n  }\n  .go-to-top-button:hover{\n      padding-left: 80px;\n  }\n  .supersale .go-to-top-button:hover{\n      padding-left: 93px;\n  }\n  .go-to-top-button:hover p{\n    width: 100px;\n    right: 20px;\n  }\n  .supersale .go-to-top-button:hover p{\n    width: 113px;\n  }\n  .go-to-top-icon{\n    line-height: 1;\n    display: inline-block;\n    border-radius: 20px;\n    background-color: #fff;\n  }\n  .go-to-top-icon::before{\n    border-radius: 20px;\n    box-shadow: -2px 3px 4px 1px rgba(0,0,0,0.25);\n  }\n  .supersale .go-to-top-icon::before {\n    content: \"\";\n    background: url(https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/event\/supersale\/2020\/202004\/img\/ic-supersale@2x.png) 0 0 no-repeat;\n    display: block;\n    width: 40px;\n    height: 40px;\n    background-size: 40px;\n  }\n  .go-to-top-button \u003E div{\n    display: block;\n    height: 40px;\n    width: 135px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-radius: 0 20px 20px 0;\n    overflow: hidden;\n  }\n\u003C\/style\u003E\n\u003Cdiv class=\"go-to-top-wrapper\"\u003E\n\t\u003Cdiv class=\"go-to-top go-to-top-hidden\" id=\"gtm-go-to-top-wrapper\"\u003E\n\t\t\u003Cdiv class=\"go-to-top-button\" style=\"line-height:1\"\u003E\n\t\t\t\u003Ci class=\"go-to-top-icon\"\u003E\u003C\/i\u003E\n            \u003Cdiv\u003E\u003Cp\u003E回到頁首\u003C\/p\u003E\u003C\/div\u003E\n        \u003C\/div\u003E\n    \u003C\/div\u003E\n    \u003Ca class=\"go-to-top go-to-top-hidden supersale\" id=\"gtm-go-to-top-wrapper2\" href=\"https:\/\/www.rakuten.com.tw\/event\/supersale\/\" target=\"_blank\"\u003E\n\t\t\u003Cdiv class=\"go-to-top-button\" style=\"line-height:1\"\u003E\n\t\t\t\u003Ci class=\"go-to-top-icon\"\u003E\u003C\/i\u003E\n            \u003Cdiv\u003E\u003Cp\u003ESale開催中\u003C\/p\u003E\u003C\/div\u003E\n        \u003C\/div\u003E\n\t\u003C\/a\u003E\n\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar scrollToItem=function(){document.getElementsByClassName(\"b-layout-wrapper\")[0].scrollIntoView({behavior:\"smooth\",block:\"start\"})};document.getElementById(\"backTop\").remove();document.getElementsByClassName(\"go-to-top-button\")[0].addEventListener(\"click\",scrollToItem);\nwindow.addEventListener(\"scroll\",function(){window.scrollY-200\u003Edocument.getElementsByClassName(\"b-layout-wrapper\")[0].offsetTop?(document.getElementById(\"gtm-go-to-top-wrapper\").classList.remove(\"go-to-top-hidden\"),document.getElementById(\"gtm-go-to-top-wrapper2\").classList.remove(\"go-to-top-hidden\")):(document.getElementById(\"gtm-go-to-top-wrapper\").classList.add(\"go-to-top-hidden\"),document.getElementById(\"gtm-go-to-top-wrapper2\").classList.add(\"go-to-top-hidden\"))});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.cookie=\"__imaxc\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Edocument.cookie=\"mmapi.TWNFE-2477_PC%20Personal%20Recommend%20API%20recommendation%20logic%20on%20home%20page.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.TWNFE-2477_PC%20Personal%20Recommend%20API%20recommendation%20logic%20on%20home%20page.GoogleUniversalExperience\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.TWNFE-2645_mWeb_resize%20Top%20banner%20and%20hot%20event%20section%20banner%20on%20home%20page.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\ndocument.cookie=\"mmapi.TWNFE-2645_PC_resize%20Top%20banner%20and%20hot%20event%20section%20banner%20on%20home%20page.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.copy_TWNFE-2645_PC_resize%20Top%20banner%20and%20hot%20event%20section%20banner%20on%20home%20page.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.GI-9832%203%20floating%20btns%20V3.pushIntegrationsEventTriggered\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\ndocument.cookie=\"mmapi.GI-9832%203%20floating%20btns%20V3.pushIntegrationsEventProcessedByAdobe\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.TWNFE-2717_PC_home%20page_Recommend%20Widgets%20AB%20Test.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.GI-9832%203%20floating%20btns%20V3.pushIntegrationsInitEventTriggered\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\ndocument.cookie=\"mmapi.GI-9832%203%20floating%20btns%20V3.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.e.AdobeIntegrationData;path\\x3d\/;domain\\x3d.rakuten.com.tw\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi_rms.store.p.0\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.e.RATAppendData\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\ndocument.cookie=\"mmapi.TWNFE-2645_mWeb_home%20page_resize%20Top%20banner%20and%20hot%20event%20section%20banner%20on%20home%20page.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.GI-9822_PC%20and%20mWeb_new%20Chinese%20typeface%20test.GoogleUniversalExperience\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.GI-9822_PC%20and%20mWeb_new%20Chinese%20typeface%20test.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\ndocument.cookie=\"mmapi.TWNFE-2717_mWeb_home%20page_Recommend%20Widgets%20AB%20Test.adobe-integration\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";document.cookie=\"mmapi.TWNFE-2717_mWeb_home%20page_Recommend%20Widgets%20AB%20Test.pushIntegrationsInitEventTriggered\\x3d;path\\x3d\/;domain\\x3d.rakuten.com.tw;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar xmlhttp=new XMLHttpRequest,theUrl=\"https:\/\/twapi.rakuten.tw\/api\/events\";xmlhttp.open(\"POST\",theUrl);xmlhttp.setRequestHeader(\"Content-Type\",\"application\/json;charset\\x3dUTF-8\");var item_id=dataLayer[0].page_info.page_products.item_id,eventData={};\nif(\"undefined\"!==typeof document.cookie.split(\"grm\\x3d\")[1]){var memberId=document.cookie.split(\"grm\\x3d\")[1].split(\";\")[0];eventData.memberId=decodeURIComponent(memberId)}else{var cookie=document.cookie.split(\"_mall_uuid\\x3d\")[1].split(\";\")[0];eventData.cookie=cookie}eventData.page=\"product\";eventData.event=\"page_load\";eventData.target=[];eventData.target.push(item_id);xmlhttp.send(JSON.stringify(eventData));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){jQuery(\"[ng-if\\x3d'$ctrl.showInstoLink']\").find(\"a\").css({color:\"#fff\",\"background-color\":\"#bf0000\",\"line-height\":\"70px\",\"vertical-align\":\"middle\",\"font-size\":\"25px\"});jQuery(\"[ng-if\\x3d'$ctrl.showInstoLink']\").find(\"a\")[0].innerHTML=\"\\u9ede\\u6211\\u7acb\\u5373\\u7533\\u8acb\\u7121\\u5361\\u5206\\u671f\"},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ItempageURL=new URL(document.URL);ItempageURL=ItempageURL.toString();var tempUrl=ItempageURL.split(\"\/\"),Surl=\"\"!=tempUrl[5]?tempUrl[4]+\":\"+tempUrl[5]:tempUrl[4];fbq(\"track\",\"ViewContent\",{Pagetype:\"Event\",Pagename:Surl});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=dataLayer[0].page_info.device,hasSelectedVariant=\"\",isProductPage=\"product\"==dataLayer[0].page_info.ctrl,item_id=\"\",page=\"\";\nif(isProductPage){if(\"M\"==deviceType){var lv1VariantNum=document.getElementsByClassName(\"qa-variantSelect-drdn\").length,countNum=0;if(0==lv1VariantNum)hasSelectedVariant=\"no variant\";else{for(var i=0,j=lv1VariantNum;i\u003Clv1VariantNum;i++)for(var selectionBtnNum=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children.length,k=0;k\u003CselectionBtnNum;k++){var isSelected=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children[k].classList.contains(\"selected\");isSelected\u0026\u0026(countNum+=\n1)}lv1VariantNum==countNum\u0026\u0026(hasSelectedVariant=\"varanit has been selected\")}}else hasSelectedVariant=document.getElementsByName(\"variant_id\")[0].value;\"\"!=hasSelectedVariant\u0026\u0026(item_id=dataLayer[0].page_info.page_products.item_id,page=\"product\")}else for(i=0;i\u003CdataLayer.length;i++)\"gtm.click\"==dataLayer[i].event\u0026\u0026\"undefined\"!=dataLayer[i].gtm\u0026\u0026\"undefined\"!=dataLayer[i][\"gtm.elementClasses\"]\u0026\u0026(-1!==dataLayer[i][\"gtm.elementClasses\"].indexOf(\"b-btn-wishlist\")?(item_id=dataLayer[i][\"gtm.elementId\"].split(\"_\")[1],\npage=\"search_category\"):-1!==dataLayer[i][\"gtm.elementClasses\"].indexOf(\"heart-icon\")\u0026\u0026(item_id=dataLayer[i][\"gtm.element\"].parentNode.id.split(\"_\")[1],page=\"search_category\"));\nif(\"\"!=item_id\u0026\u0026null!=item_id\u0026\u0026\"undefined\"!=item_id){var xmlhttp=new XMLHttpRequest,theUrl=\"https:\/\/twapi.rakuten.tw\/api\/events\";xmlhttp.open(\"POST\",theUrl);xmlhttp.setRequestHeader(\"Content-Type\",\"application\/json;charset\\x3dUTF-8\");var eventData={};if(\"undefined\"!==typeof document.cookie.split(\"grm\\x3d\")[1]){var memberId=document.cookie.split(\"grm\\x3d\")[1].split(\";\")[0];eventData.memberId=decodeURIComponent(memberId)}else{var cookie=document.cookie.split(\"_mall_uuid\\x3d\")[1].split(\";\")[0];eventData.cookie=\ncookie}eventData.page=page;eventData.event=\"add_wishlist\";eventData.target=[];eventData.target.push(item_id);xmlhttp.send(JSON.stringify(eventData))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=dataLayer[0].page_info.device,hasSelectedVariant=\"\",isProductPage=\"product\"==dataLayer[0].page_info.ctrl,item_id=\"\",page=\"\";\nif(isProductPage){if(\"M\"==deviceType){var lv1VariantNum=document.getElementsByClassName(\"qa-variantSelect-drdn\").length,countNum=0;if(0==lv1VariantNum)hasSelectedVariant=\"no variant\";else{for(var i=0,j=lv1VariantNum;i\u003Clv1VariantNum;i++)for(var selectionBtnNum=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children.length,k=0;k\u003CselectionBtnNum;k++){var isSelected=document.getElementsByClassName(\"qa-variantSelect-drdn\")[i].children[k].classList.contains(\"selected\");isSelected\u0026\u0026(countNum+=\n1)}lv1VariantNum==countNum\u0026\u0026(hasSelectedVariant=\"varanit has been selected\")}}else hasSelectedVariant=document.getElementsByName(\"variant_id\")[0].value;\"\"!=hasSelectedVariant\u0026\u0026(item_id=dataLayer[0].page_info.page_products.item_id,page=\"product\")}else for(i=0;i\u003CdataLayer.length;i++)if(\"gtm.click\"==dataLayer[i].event\u0026\u0026\"undefined\"!=dataLayer[i].gtm\u0026\u0026\"undefined\"!=dataLayer[i][\"gtm.elementClasses\"]\u0026\u0026-1!==dataLayer[i][\"gtm.elementClasses\"].indexOf(\"search_to_cart\")){var childNodes=dataLayer[i][\"gtm.element\"].parentNode.childNodes;\nfor(j=0;j\u003CchildNodes.length;j++)null!=childNodes[j].className\u0026\u0026\"undefined\"!=childNodes[j].className\u0026\u0026-1!==childNodes[j].className.indexOf(\"b-btn-wishlist\")\u0026\u0026(item_id=childNodes[j].id.split(\"_\")[1],page=\"search_category\")}\nif(\"\"!=item_id\u0026\u0026null!=item_id\u0026\u0026\"undefined\"!=item_id){var xmlhttp=new XMLHttpRequest,theUrl=\"https:\/\/twapi.rakuten.tw\/api\/events\";xmlhttp.open(\"POST\",theUrl);xmlhttp.setRequestHeader(\"Content-Type\",\"application\/json;charset\\x3dUTF-8\");var eventData={};if(\"undefined\"!==typeof document.cookie.split(\"grm\\x3d\")[1]){var memberId=document.cookie.split(\"grm\\x3d\")[1].split(\";\")[0];eventData.memberId=decodeURIComponent(memberId)}else{var cookie=document.cookie.split(\"_mall_uuid\\x3d\")[1].split(\";\")[0];eventData.cookie=\ncookie}eventData.page=page;eventData.event=\"add_cart\";eventData.target=[];eventData.target.push(item_id);xmlhttp.send(JSON.stringify(eventData))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar l=dataLayer[0].cart_info.merchants[0].items.length,i=0,value=[],pid=[];value[0]={};for(var eventData={target:[]};0\u003Cl-i;)pid+=dataLayer[0].cart_info.merchants[0].items[i].item_id,eventData.target.push(dataLayer[0].cart_info.merchants[0].items[i].item_id),i++;var xmlhttp=new XMLHttpRequest,theUrl=\"https:\/\/twapi.rakuten.tw\/api\/events\";xmlhttp.open(\"POST\",theUrl);xmlhttp.setRequestHeader(\"Content-Type\",\"application\/json;charset\\x3dUTF-8\");\nif(\"undefined\"!==typeof document.cookie.split(\"grm\\x3d\")[1]){var memberId=document.cookie.split(\"grm\\x3d\")[1].split(\";\")[0];eventData.memberId=decodeURIComponent(memberId)}else{var cookie=document.cookie.split(\"_mall_uuid\\x3d\")[1].split(\";\")[0];eventData.cookie=cookie}eventData.page=\"cart\";eventData.event=\"check_out\";xmlhttp.send(JSON.stringify(eventData));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EArray.apply(null,document.getElementsByClassName(\"help-text\")).map(function(d){d.addEventListener(\"click\",function(){for(var d=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(\"item-name-link\")[0].getAttribute(\"href\").split(\"\/\")[6],h=dataLayer[0].cart_info.merchants.length,b=0;b\u003Ch;b++)for(var k=dataLayer[0].cart_info.merchants[b].items.length,c=0;c\u003Ck;c++)if(prod_id=dataLayer[0].cart_info.merchants[b].items[c].prod_id,d==prod_id){var e=new XMLHttpRequest,\nf=\"https:\/\/twapi.rakuten.tw\/api\/events\";e.open(\"POST\",f);e.setRequestHeader(\"Content-Type\",\"application\/json;charset\\x3dUTF-8\");f=dataLayer[0].cart_info.merchants[b].items[c].item_id;var a={};if(\"undefined\"!==typeof document.cookie.split(\"grm\\x3d\")[1]){var g=document.cookie.split(\"grm\\x3d\")[1].split(\";\")[0];a.memberId=decodeURIComponent(g)}else g=document.cookie.split(\"_mall_uuid\\x3d\")[1].split(\";\")[0],a.cookie=g;a.page=\"cart\";a.event=\"remove_cart\";a.target=[];a.target.push(f);e.send(JSON.stringify(a))}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815511084?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812857688?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858024?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858291?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858627?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813273127?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812859503?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813273748?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815517264?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var appierRtorderId=dataLayer[0].chk_info.order_id,appierRtItemList=[],cartItemNum=dataLayer[0].cart_info.merchants[0].items.length,i=0;i\u003CcartItemNum;i++){var prod={};prod.productID=dataLayer[0].cart_info.merchants[0].items[i].item_id;prod.unit=dataLayer[0].cart_info.merchants[0].items[i].prod_qty;prod.price=dataLayer[0].cart_info.merchants[0].items[i].prod_price;appierRtItemList.push(prod)}var appierRtPrice=dataLayer[0].chk_info.final_amount,appierRtCurrency=dataLayer[0].cart_info.currency;\nwindow.appier_q=window.appier_q||[];window.appier_q.push({t:\"register\",content:{id:\"ovpA\",site:\"rakuten.com.tw\"}},{t:\"type_purchase\",itemList:appierRtItemList,totalvalue:appierRtPrice,currency:appierRtCurrency,action_id:\"13AWAWp8SdSj8Ef\",track_id:\"UI9zNhSS4mhQN5W\",opts:{uu:appierRtorderId,action_param1:JSON.stringify(appierRtItemList),total_revenue:appierRtPrice,currency:appierRtCurrency}});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/jscdn.appier.net\/aa.js?id=rakuten.com.tw\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813274486?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":212
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=[{Mean:\"Men\",Catlist:\"2466,2510\",Seg:\"812857688?\"},{Mean:\"Fashion\",Catlist:\"2304,2796,542,2510\",Seg:\"815511084?\"},{Mean:\"Living\",Catlist:\"1753,1704,1076,964,1822,1775,1770\",Seg:\"812858024?\"},{Mean:\"Gourmet\",Catlist:\"1256,2096\",Seg:\"812858291?\"},{Mean:\"3C\",Catlist:\"2251,2215,2150,345,1334\",Seg:\"812858627?\"},{Mean:\"Kids\",Catlist:\"1982,1334\",Seg:\"813273127?\"},{Mean:\"Beauty\",Catlist:\"629\",Seg:\"812859503?\"},{Mean:\"Health\",Catlist:\"2898\",Seg:\"813273748?\"},{Mean:\"Outdoor\",Catlist:\"2488,2042\",\nSeg:\"815517264?\"}],d=dataLayer[0].page_info.page_cat.cat_mpath.split(\",\"),b=\"\";a.map(function(a){for(var c=0;c\u003Cd.length;)-1!==a.Catlist.indexOf(d[c])\u0026\u0026(b=a.Seg),c++});0\u003Cb.length\u0026\u0026(a=document.createElement(\"img\"),a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d\"+b),a.setAttribute(\"width\",\"1\"),a.setAttribute(\"height\",\"1\"),a.setAttribute(\"border\",\"0\"),a.setAttribute(\"style\",\"display:none;\"),document.querySelector(\"body\").prepend(a))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815511084?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812857688?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858024?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858291?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812858627?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813273127?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812859503?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815517264?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813274486?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815897629?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d818117973?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815903587?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":226
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815893960?\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a);a=document.createElement(\"img\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815468465?\");\na.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815840657?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815846534?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812944702?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815146719?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d815143329?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812954497?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812958448?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d812538638?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":235
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d813511345?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":236
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d822360041?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d822360356?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d824991153?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":239
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"img\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"src\",\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/21798755501\/DFPAudiencePixel;ord\\x3d1;dc_seg\\x3d822361007?\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"border\",\"0\");a.setAttribute(\"style\",\"display:none;\");document.querySelector(\"body\").prepend(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":240
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar flag=0,e;\nfunction main(a,c,d){window.addEventListener(\"scroll\",function(b){b=a.offsetTop-a.scrollLeft+a.clientTop;window.scrollY+c\u003Eb\u0026\u00260===flag\u0026\u0026(b=document.createElement(\"script\"),b.setAttribute(\"class\",\"survey\"),document.querySelector(\"body\").prepend(b),document.querySelector(\".survey\").innerHTML='(function(t,e,s,o){var n,c,l;t.SMCX\\x3dt.SMCX||[],e.getElementById(o)||(n\\x3de.getElementsByTagName(s),c\\x3dn[n.length-1],l\\x3de.createElement(s),l.type\\x3d\"text\/javascript\",l.async\\x3d!0,l.id\\x3do,l.src\\x3d[\"https:\"\\x3d\\x3d\\x3dlocation.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/'+d+\n'.js\"].join(\"\"),c.parentNode.insertBefore(l,c))})(window,document,\"script\",\"smcx-sdk\");',flag++)})}\nvar timeoutID=window.setInterval(function(){if(null!==document.querySelector(\".paginate-bar\")||null!==document.querySelector(\".page.selected\")){e=null!==document.querySelector(\".paginate-bar\")?document.querySelector(\".paginate-bar\"):document.querySelector(\".page.selected\");var a=null!==document.querySelector(\".paginate-bar\")?300:2300,c=null!==document.querySelector(\".paginate-bar\")?\"tRaiETqnLgj758hTBazgd7vvZgHetFKjUcxeXcfjvaUCBqeW_2BX97h_2Fu4JYJ6hvOA\":\"tRaiETqnLgj758hTBazgd3sVvnzL7B8f6Z6hCWTgfzco3LwWibjXBN9Vju9cK5wU\";\nmain(e,a,c);window.clearInterval(timeoutID)}},1E3);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar creditCardBnDIV=document.createElement(\"DIV\");creditCardBnDIV.classList.add(\"creditCardBn\");var pureBnA=document.createElement(\"DIV\");pureBnA.classList.add(\"pcBanner\");creditCardBnDIV.appendChild(pureBnA);var pureBnB=document.createElement(\"DIV\");pureBnB.classList.add(\"spBanner\");creditCardBnDIV.appendChild(pureBnB);var container=document.querySelector(\"cart-main\");container.insertBefore(creditCardBnDIV,container.childNodes[0]);\u003C\/script\u003E\n\u003Cstyle\u003E\n.creditCardBn {\n    margin-bottom: 8px;\n}\n.creditCardBn * {\n    display: block;\n    padding: 0 8px;\n}\n.creditCardBn *::before {\n    content: \"\";\n    width: 1162px;\n    height: 62px;\n    display: block;\n    background: url(https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/cart\/creditCardBn.png) no-repeat;\n    background-size: contain;\n    margin: 0 auto;\n}\n.creditCardBn *.spBanner{\n    display: none;\n}\n@media screen and (max-width: 1199px) {\n    .creditCardBn *::before {\n        content: \"\";\n        width: 962px;\n        height: 5.3vw;\n        background-size: contain;\n    }\n}\n\n@media screen and (max-width: 991px) {\n    .creditCardBn *::before {\n        content: \"\";\n        width: 100%;\n        height: 5.3vw;\n        background-size: contain;\n    }\n}\n\n@media screen and (max-width: 639px) {\n    .creditCardBn *::before {\n        content: \"\";\n        width: 100%;\n        height: 10vw;\n        display: block;\n        background: url(https:\/\/intl.rakuten-static.com\/b\/tw\/assets\/cart\/creditCardBn_sp.png) no-repeat;\n        background-size: contain;\n    }\n    .creditCardBn *.pcBanner{\n        display: none;\n    }\n    .creditCardBn *.spBanner{\n        display: block;\n    }\n}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eif(-1===window.location.pathname.indexOf(\"\/user\/app\")\u0026\u0026-1===window.location.pathname.indexOf(\"\/checkout\")){var gtmPcCss=\"https:\/\/secure.intl.rakuten-static.com\/b\/tw\/assets\/gtm\/pcbanner.css\",gtmMobileCss=\"https:\/\/secure.intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/mobilebanner-test.css?v3\",gtmJsData=\"https:\/\/secure.intl.rakuten-static.com\/b\/tw\/assets\/gtm\/data-random.js?v5\",gtmMobildFixedCSS=\"https:\/\/secure.intl.rakuten-static.com\/b\/tw\/assets_mobile\/gtm\/mobilebanner-shop.css\",gtmLoadScript=function(a,\nc){var b=document.createElement(\"script\");b.onload=function(a){c()};b.src=a;a=document.getElementsByTagName(\"body\")[0];a.insertBefore(b,a.childNodes[0])},gtmLoadCss=function(a,c){var b=document.createElement(\"link\");b.onload=function(a){c()};b.href=a;b.type=\"text\/css\";b.rel=\"stylesheet\";document.getElementsByTagName(\"head\")[0].appendChild(b)},mobileType,isMobile={Android:function(){return navigator.userAgent.match(\/Android\/i)},BlackBerry:function(){return navigator.userAgent.match(\/BlackBerry\/i)},\niOS:function(){return navigator.userAgent.match(\/iPhone|iPod\/i)},Opera:function(){return navigator.userAgent.match(\/Opera Mini\/i)},Windows:function(){return navigator.userAgent.match(\/IEMobile\/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},getRandomNumber=function(a,c){return Math.floor(Math.random()*(c-a+1)+a)},readCookie=function(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),b=0;b\u003Cc.length;b++){for(var d=c[b];\" \"==\nd.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null},setCookie=function(a,c,b){var d=new Date;d.setTime(d.getTime()+864E5*c);c=\"expires\\x3d\"+d.toGMTString();document.cookie=b+\"\\x3d\"+a+\"; \"+c};gtmLoadScript(gtmJsData,function(){isMobile.any()?gtmLoadCss(gtmMobileCss,function(){if(null===readCookie(window.gtmMobileCookieName)){var a=getRandomNumber(0,window.gtmMobileLinks.length-1);window.gtmMobileLink=window.gtmMobileLinks[a];window.gtmMobileImage=\nwindow.gtmMobileImages[a];window.gtmMobileScName=window.gtmMobileScNames[a];setCookie(a,window.gtmMobileExpireDays,window.gtmMobileCookieName)}else a=readCookie(window.gtmMobileCookieName),window.gtmMobileLink=window.gtmMobileLinks[a],window.gtmMobileImage=window.gtmMobileImages[a],window.gtmMobileScName=window.gtmMobileScNames[a];console.log(a);a=document.createElement(\"DIV\");var c=\"http:\/\/rakuten.112.2o7.net\/b\/ss\/rakuten-tw-rmail\/1\/H.15.1--NS\/2015111900800?AQB\\x3d1\\x26pccr\\x3dtrue\\x26g\\x3dnone\\x26pageName\\x3dRAD: \"+\nwindow.gtmMobileScName+\"\\x26AQE\\x3d1\";document.getElementById(\"bu_static_content\");var b=null===document.getElementById(\"bu_static_content\")?document.getElementsByTagName(\"body\")[0]:document.getElementById(\"bu_static_content\");a.className=\"ui-marathon-banner mobile\";\"\/\"===window.location.pathname?(console.log(1),a.innerHTML='\\x3ca id\\x3d\"fx\" target\\x3d\"_self\" href\\x3d\"'+window.gtmMobileLink+'\"\\x3e\\x3cimg src\\x3d\"'+window.gtmMobileImage+'\"\/\\x3e\\x3cimg id\\x3d\"tkcode\"src\\x3d\"'+c+'\" style\\x3d\"display:none\"\/\\x3e\\x3cimg src\\x3d\"http:\/\/rakuten.112.2o7.net\/b\/ss\/rakuten-tw-rmail\/1\/H.15.1--NS\/2015111900800?AQB\\x3d1\\x26amp;pccr\\x3dtrue\\x26amp;g\\x3dnone\\x26amp;pageName\\x3dRAD-Header-All-SuperBanner-ver\\x26amp;AQE\\x3d1\" style\\x3d\"display:none\"\/\\x3e\\x3c\/a\\x3e'):\n(console.log(2),a.innerHTML='\\x3ca target\\x3d\"_self\" href\\x3d\"'+window.gtmMobileLink+'\"\\x3e\\x3cimg src\\x3d\"'+window.gtmMobileImage+'\"\/\\x3e\\x3cimg id\\x3d\"tkcode\"src\\x3d\"'+c+'\" style\\x3d\"display:none\"\/\\x3e\\x3c\/a\\x3e');b.insertBefore(a,b.childNodes[0])}):gtmLoadCss(gtmPcCss,function(){})})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"M"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/search\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/category"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/member\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/order\/"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"\/"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-addToCart-btn"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"M"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-buyNow-btn"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-BuyNow-btn"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-AddToCart-btn"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-addToCart-btn \u003E .add-to-cart-icon"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-addToCart-btn \u003E span"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-buyNow-btn \u003E .cart-icon"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-buyNow-btn \u003E span"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-AddToCart-btn \u003E .add-to-cart-icon"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-AddToCart-btn \u003E span"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-BuyNow-btn \u003E .cart-icon"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-BuyNow-btn \u003E span"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https:\\\/\\\/(www|secure)\\.rakuten\\.com\\.tw\\\/cart"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"https:\/\/www.rakuten.com.tw\/wishlist\/"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".search-icon"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".searchRed"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/shop\/([\\w-]*\/)product\/([\\w-]*\/)"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/buy\/complete"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"784e577979f3487a"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".add-button--border.add-to-wishlist-btn, .add-to-wishlist-btn i"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".add-button--fill.add-to-cart-btn, .add-to-cart-btn i"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"M"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https:\\\/\\\/(www|secure)\\.rakuten\\.com\\.tw\\\/checkout\\\/complete"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/shop\/([\\w-]*\/)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"https:\/\/www.rakuten.com.tw\/"
    },{
      "function":"_ew",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/shop\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/shop\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"?ac=yes"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https:\\\/\\\/(www|secure)\\.rakuten\\.com\\.tw\\\/checkout"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/?l-id=RADShopHeaderLogoTop"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/?l-id=RADLogoTop"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/?l-id=rakuten_top_header_logo"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/?l-id=tw_product_rakuten"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https:\\\/\\\/(www|secure)\\.rakuten\\.com\\.tw\\\/buy"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"https:\/\/www.rakuten.com.tw\/coupon\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"https:\/\/shop.site.rakuten.tw\/ecsite\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/info\/ec\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/info\/ec\/media\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/info\/ec\/social\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/info\/ec\/overseas\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/www.rakuten.com.tw\/info\/ec\/ecc\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/info\/ec\/new_store\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/info\/ec\/new_how\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/info\/ec\/new_faq\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"https:\/\/shop.site.rakuten.tw\/ec\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"https:\/\/shop.site.rakuten.tw\/ecsite\/joinAction.jsp"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"https:\/\/shop.site.rakuten.tw\/ec\/end.html"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"content-test.www.rakuten.com.tw"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":".rakuten.com.tw\/checkout"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/buy"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"app\/top"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"gourmet\/yummy\/healingitem"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/contact"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"https:\/\/pointexchange.rakuten.com.tw\/exchange\/"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"content-test.www.rakuten.com.tw\/shop\/"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"www-contenttest.rakuten.com.tw\/shop\/([\\w-]*\/)product\/([\\w-]*\/)"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"content-test.rakuten.com.tw\/shop\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"scid="
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/content-test.www.rakuten.com.tw\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"content-test.www.rakuten.com.tw\/search"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/category\/([\\w-]*\/)"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"content-test\\.www\\.rakuten\\.com\\.tw\\\/category\\\/[0-9]+"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/shop"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"content-test.*\\.rakuten\\.com\\.tw\\\/cart"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"content-test.*rakuten\\.com\\.tw\\\/checkout\\\/complete"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/checkout\/complete"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"b-btn b-btn-type-a b-btn-emph submit-btn"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"b-btn b-btn-type-a b-btn-emph qa-subscribeMail-btn"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"b-btn b-btn-type-a b-btn-emph"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"http:\/\/shop.site.rakuten.tw\/ecsite\/success.jsp"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".b-btn.b-btn-type-a.b-btn-def.b-btn-small.search_to_cart"
    },{
      "function":"_css",
      "arg0":["macro",5],
      "arg1":".qa-product-AddtoWishlist-btn, .qa-product-AddtoWishlist-btn i"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"b-btn b-btn-type-a b-btn-emph b-btn-addtocart"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/magazine\/feature"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":".rakuten.com.tw\/buy\/shipping"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https:\\\/\\\/(www|secure)\\.rakuten\\.com\\.tw\\\/mycoupons"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/shop\/([\\w-]*\/)product\/([\\w-]*\/)"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"D"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/ad\/"
    },{
      "function":"_css",
      "arg0":["macro",11],
      "arg1":".add-button--border.add-to-wishlist-btn, .add-to-wishlist-btn i"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"add-to-cart-btn"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/lady|bag|brands|inner|accessory"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/mens"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/dept|kitchen|art|pets|flower|music|books"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/food|drinks"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/phone|3c|camera|electronics|music|game"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/kids|game|baby"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/cosmetics"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/healthy"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"https\\:\\\/\\\/www\\.rakuten\\.com\\.tw\\\/event\\\/special\\\/sports|moto"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/shop\/rakutenbuy\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/fashion\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/fashion\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/men\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/men\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/living\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/home\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/food\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/gourmet\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/3c\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/3c\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/kid\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/kid\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/cosmetic\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/supersale\/cosmetic\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/outdoor\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/event\/japan"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/ticket\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/event\/bank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/event\/rakuten-card-sale"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"rakuten.com.tw\/event\/supersale\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"www.rakuten.com.tw\/event\/sale\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/member\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/user\/new\/campaign\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/japan\/search\/?se_type=travel"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/dbsbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/fubonbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/feibbank"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"www.rakuten.com.tw\/event\/bank\/ubotbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/hsbcbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/kgibank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/taishinbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/cathaybank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/esunbank"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"www.rakuten.com.tw\/event\/bank\/citibank"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\\\/(3m|acer|adidas|anello|annasui|apple|arcteryx|asus|balenciaga|bape|benq|burberry|bvlgari|canon|casio-accessory|cathkidston|chanel|chloe|chromehearts|ck|clarins|clinique|coach|cocodor|converse|dc-shoes|dell|dior|dw|dyson|eleki|fendi|fila|gigabyte|givenchy|gregory|gucci|hermes|herschel|hitachi|hp|htc|iris|kanebo|kanken|keen|lancome|lg|longchamp|lotto|lovetodream|makeupforever|merrell|michaelkors|mio|mizuno|msi|native|newbalance|new-balance|nike|nokia|pampers|panasonic|philips|prada|puma|reebok|samsung|sharp|shiseido|shuuemura|sony|suntory|supreme|swatch-accessory|thesaem|tommyhilfiger|toryburch|toshiba|vans|versace|ysl|%E9%9B%85%E8%A9%A9%E8%98%AD%E9%BB%9B|ASICS%20%E4%BA%9E%E7%91%9F%E5%A3%AB|havaianas%20%E5%93%88%E7%93%A6%E4%BB%95|MUJI%20%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81|nike|%E7%9A%AE%E5%A4%BE|%E5%8E%9A%E5%BA%95%E9%9E%8B|%E4%B8%89%E7%9C%BC%E6%80%AA|%E6%89%8B%E6%A9%9F%E4%BF%9D%E8%AD%B7%E7%9A%AE%E5%A5%97|%E7%B8%AE%E5%8F%A3|%E9%9E%8B|%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%92%B0|%E6%B0%B4%E6%B3%A2%E7%88%90|%E6%98%9F%E9%9A%9B%E5%A4%A7%E6%88%B0|%E6%8A%98%E7%96%8A%E6%A1%8C|%E9%9B%AA%E9%9D%B4|%E7%B4%A0T|%E8%9B%8B%E9%BB%83%E5%93%A5|%E4%B8%AD%E5%A4%A7%E5%B0%BA%E7%A2%BC|%E9%95%B7%E5%B8%BDT|%E5%B7%B4%E6%96%AF%E5%85%89%E5%B9%B4|%E6%9D%AF%E8%93%8B|%E7%99%BD%E8%A5%AF%E8%A1%AB|%E5%B8%BDT|%E6%8A%B9%E8%8C%B6%E8%9B%8B%E7%B3%95|%E9%9B%AA%E9%9D%B4|%E6%87%B6%E4%BA%BA%E9%9E%8B|%E6%8B%89%E6%8B%89%E7%86%8A|%E7%8E%BB%E7%92%83%E7%BD%90|%E7%91%9C%E7%8F%88%E5%A2%8A|%E9%91%84%E9%90%B5%E9%8D%8B|%E7%9F%BD%E8%97%BB%E5%9C%9F)\\\/$"
    }],
  "rules":[
    [["if",0],["add",0,2,54,62,69,77,86,89,95,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,49,51,53,96]],
    [["if",0,1],["add",1]],
    [["if",7,8,9],["add",3,72,92,101]],
    [["if",8,9,10],["add",3,72,92,101]],
    [["if",9,11],["add",3,72,92,101]],
    [["if",9,12],["add",3,72,92,101]],
    [["if",8,9,13],["add",3,72,92,101]],
    [["if",8,9,14],["add",3,72,92,101]],
    [["if",8,9,15],["add",3,72,92,101]],
    [["if",8,9,16],["add",3,72,92,101]],
    [["if",9,17],["add",3,72,92,101]],
    [["if",9,18],["add",3,72,92,101]],
    [["if",9,19],["add",3,72,92,101]],
    [["if",9,20],["add",3,72,92,101]],
    [["if",0,21],["add",4,45,59,85,103,126,143],["block",49]],
    [["if",0,22],["add",5]],
    [["if",9,23],["add",6]],
    [["if",8,9,24],["add",6]],
    [["if",0,25],["add",7,11,64,80,91,97],["block",16]],
    [["if",0,26],["unless",27],["add",8,14,44,45,61,66,78,81,87,102]],
    [["if",9,28],["add",9,76,100]],
    [["if",9,29],["add",10,73,101]],
    [["if",0,3],["add",12,17,83],["block",1]],
    [["if",25,30,31],["add",13]],
    [["if",0,32],["add",14,44,45]],
    [["if",0,6],["add",15,82],["block",2]],
    [["if",0,33],["add",16]],
    [["if",0,2],["add",17,56,63,142],["block",1]],
    [["if",0,34],["add",45,55]],
    [["if",0,35],["add",45]],
    [["if",0,36],["unless",35,37],["add",45,115]],
    [["if",0,38],["add",45]],
    [["if",0,39],["add",45]],
    [["if",0,40],["add",45]],
    [["if",0,41],["add",45]],
    [["if",0,42],["add",45]],
    [["if",0,43],["add",45]],
    [["if",0,44],["add",45,129]],
    [["if",0,45],["add",46]],
    [["if",0,46],["add",46]],
    [["if",0,47],["add",46]],
    [["if",0,48],["add",46]],
    [["if",0,49],["add",46]],
    [["if",0,50],["add",46]],
    [["if",0,51],["add",46]],
    [["if",0,52],["add",46]],
    [["if",0,53],["add",46]],
    [["if",0,54],["add",46]],
    [["if",0,55],["add",47]],
    [["if",0,56],["add",48,70]],
    [["if",0,57],["add",49]],
    [["if",0,65],["add",50,58]],
    [["if",0,66,67],["add",50]],
    [["if",0,68],["add",52]],
    [["if",0,69],["add",55]],
    [["if",0,70],["add",56]],
    [["if",0,71],["add",57]],
    [["if",0,72],["add",57]],
    [["if",0,73],["add",58]],
    [["if",0,74],["add",59]],
    [["if",0,75],["add",60]],
    [["if",0,76],["add",60]],
    [["if",0,26,27],["add",60]],
    [["if",0,59],["add",65],["block",49]],
    [["if",9,77],["add",67]],
    [["if",9,78],["add",68]],
    [["if",9,79],["add",68]],
    [["if",0,80],["add",70]],
    [["if",9,81],["add",71]],
    [["if",9,82],["add",74,100]],
    [["if",9,83],["add",75]],
    [["if",0,84],["add",79]],
    [["if",2,31],["add",84]],
    [["if",9,85],["add",88]],
    [["if",31,86],["add",90]],
    [["if",0,1,25],["add",93]],
    [["if",31,87,88],["add",94]],
    [["if",26,31],["add",98,113]],
    [["if",0,89],["add",99]],
    [["if",0,90],["add",99]],
    [["if",9,91],["add",100]],
    [["if",9,92],["add",101]],
    [["if",0,93],["add",104]],
    [["if",0,94],["add",105]],
    [["if",0,95],["add",106]],
    [["if",0,96],["add",107]],
    [["if",0,97],["add",108]],
    [["if",0,98],["add",109]],
    [["if",0,99],["add",110]],
    [["if",0,100],["add",111]],
    [["if",0,101],["add",112]],
    [["if",0,102],["add",114]],
    [["if",0,103],["add",116,129]],
    [["if",0,104],["add",116]],
    [["if",0,105],["add",117,129]],
    [["if",0,106],["add",117]],
    [["if",0,107],["add",118,129]],
    [["if",0,108],["add",118]],
    [["if",0,109],["add",119,129]],
    [["if",0,110],["add",119]],
    [["if",0,111],["add",120,129]],
    [["if",0,112],["add",120]],
    [["if",0,113],["add",121,129]],
    [["if",0,114],["add",121]],
    [["if",0,115],["add",122,129]],
    [["if",0,116],["add",122]],
    [["if",0,117],["add",123,129]],
    [["if",0,118],["add",124]],
    [["if",0,119],["add",125]],
    [["if",0,120],["add",127]],
    [["if",0,121],["add",127,134]],
    [["if",0,122],["add",128]],
    [["if",0,123],["add",129]],
    [["if",0,124],["add",129]],
    [["if",0,125],["add",129]],
    [["if",0,126],["add",130]],
    [["if",0,127],["add",131]],
    [["if",0,128],["add",132]],
    [["if",0,129],["add",133]],
    [["if",0,130],["add",135]],
    [["if",0,131],["add",136]],
    [["if",0,132],["add",137]],
    [["if",0,133],["add",138]],
    [["if",0,134],["add",139]],
    [["if",0,135],["add",140]],
    [["if",0,136],["add",141]],
    [["if",0,137],["add",142]],
    [["if",0,4],["block",2,3,6,9,10]],
    [["if",0,5],["block",2,3,6,9,10]],
    [["if",0,58],["block",49]],
    [["if",0,60],["block",49]],
    [["if",0,61],["block",49]],
    [["if",0,62],["block",49]],
    [["if",0,63],["block",49]],
    [["if",0,64],["block",49]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Ef:!0},ha={};try{ha.__proto__=ea;da=ha.Ef;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ca,ka=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ta=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Da=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Za=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,Za)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,Za)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},lb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,wb,xb,yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Uc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=zb(k,b);xb&&(d=xb.cg(d,k))}catch(y){b.Be&&b.Be(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Bb(a[p],b,c);wb&&(m=m||r===wb.Gb);d.push(r)}return wb&&m?wb.fg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(wb&&sa(a[1])&&"macro"===a[1][0]&&wb.Fg(a))return wb.Xg(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var q=a[1];if(!sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={ne:a[2],
index:q};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Eb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{xd:a("convert_case_to"),yd:a("convert_false_to"),zd:a("convert_null_to"),Ad:a("convert_true_to"),Bd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),va:a("function"),cf:a("instance_name"),hf:a("live_only"),kf:a("malware_disabled"),lf:a("metadata"),Gh:a("original_vendor_template_id"),rf:a("once_per_event"),Id:a("once_per_load"),Qd:a("setup_tags"),Sd:a("tag_id"),Td:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Ib(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<sb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var cc,dc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Rf&&(l["fix_"+m]=!0),l.pe=l.pe||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var t=k.slice(q.length);if(t.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,P:q.P,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var t={};q[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;t[w]=z.textContent||z.innerText||B});return{tagName:q[1],P:t,zb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},u=function(){for(var q in p)if(p[q].test(k)){var t=r[q]();return t?(t.type=t.type||q,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.pe&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ze=function(){return this[this.length-1]};v.Wc=function(z){var E=this.ze();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.bg=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.zb=q.test(z.tagName)||z.zb);return z},y=u,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.Wc("TABLE")?(k="<TBODY>"+k,B()):l.Qh&&t.test(E)&&v.bg(E)?v.Wc(E)?x():(k="</"+z.tagName+">"+k,B()):z.zb||v.push(z)},endTag:function(z){v.ze()?l.og&&!v.Wc(z.tagName)?x():v.pop():l.og&&(y(),B())}},B=function(){var z=k,E=w(y());k=z;if(E&&
A[E.type])A[E.type](E)};u=function(){B();return w(y())}}();return{append:function(q){k+=q},fh:u,Xh:function(q){for(var t;(t=u())&&(!q[t.type]||!1!==q[t.type](t)););},clear:function(){var q=k;k="";return q},Yh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.bi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ai=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.H=b;a.J=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var p="<"+m.tagName,r;for(r in m.P){var u=m.P[r];p+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return p+(m.zb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.h=function(k){var l={},m;for(m in k){var p=k[m];l[m]=p&&p.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.i=a.i||!b[h]&&h;cc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,q){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(q,r[t],t)}function d(r,u,q){for(var t in r)r.hasOwnProperty(t)&&u.call(q,t,r[t])}function e(r,
u){d(u,function(q,t){r[q]=t});return r}function f(r,u){r=r||{};d(u,function(q,t){b(r[q])||(r[q]=t)});return r}function h(r){try{return m.call(r)}catch(q){var u=[];c(r,function(t){u.push(t)});return u}}var k={If:a,Jf:a,Kf:a,Lf:a,Sf:a,Tf:function(r){return r},done:a,error:function(r){throw r;},ih:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function r(q,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function u(q,t){var v=q.ownerDocument;e(this,{root:q,options:t,Ab:v.defaultView||v.parentWindow,Pa:v,fc:cc("",{Rf:!0}),Ic:[q],fd:"",gd:v.createElement(q.nodeName),wb:[],Fa:[]});r(this.gd,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.Fa,arguments);for(var q;!this.Rb&&this.Fa.length;)q=this.Fa.shift(),"function"===typeof q?this.Yf(q):this.qd(q)};u.prototype.Yf=function(q){var t={type:"function",value:q.name||q.toString()};this.bd(t);q.call(this.Ab,this.Pa);this.Ge(t)};
u.prototype.qd=function(q){this.fc.append(q);for(var t,v=[],w,y;(t=this.fc.fh())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Ah(v);w&&this.xg(t);y&&this.yg(t)};u.prototype.Ah=function(q){var t=this.Vf(q);t.de&&(t.Sc=this.fd+t.de,this.fd+=t.ah,this.gd.innerHTML=t.Sc,this.xh())};u.prototype.Vf=function(q){var t=this.Ic.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.P){if(!/^noscript$/i.test(x.tagName)){var A=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.P.id&&"ps-style"!==x.P.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.zb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ci:q,raw:v.join(""),de:w.join(""),ah:y.join("")}};u.prototype.xh=function(){for(var q,t=[this.gd];b(q=t.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.Ic[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.Ic[w].appendChild(q)}t.unshift.apply(t,h(q.childNodes))}};u.prototype.xg=function(q){var t=this.fc.clear();t&&this.Fa.unshift(t);q.src=q.P.src||q.P.Hh;q.src&&this.wb.length?this.Rb=q:this.bd(q);var v=this;this.zh(q,function(){v.Ge(q)})};u.prototype.yg=function(q){var t=this.fc.clear();t&&this.Fa.unshift(t);q.type=q.P.type||q.P.Ih||"text/css";this.Bh(q);t&&this.write()};u.prototype.Bh=function(q){var t=this.Xf(q);this.Cg(t);q.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=q.content:
t.appendChild(this.Pa.createTextNode(q.content)))};u.prototype.Xf=function(q){var t=this.Pa.createElement(q.tagName);t.setAttribute("type",q.type);d(q.P,function(v,w){t.setAttribute(v,w)});return t};u.prototype.Cg=function(q){this.qd('<span id="ps-style"/>');var t=this.Pa.getElementById("ps-style");t.parentNode.replaceChild(q,t)};u.prototype.bd=function(q){q.Tg=this.Fa;this.Fa=[];this.wb.unshift(q)};u.prototype.Ge=function(q){q!==this.wb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.wb.shift(),this.write.apply(this,q.Tg),!this.wb.length&&this.Rb&&(this.bd(this.Rb),this.Rb=null))};u.prototype.zh=function(q,t){var v=this.Wf(q),w=this.oh(v),y=this.options.If;q.src&&(v.src=q.src,this.mh(v,w?y:function(){t();y()}));try{this.Bg(v),q.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Wf=function(q){var t=this.Pa.createElement(q.tagName);d(q.P,function(v,w){t.setAttribute(v,w)});q.content&&(t.text=q.content);return t};u.prototype.Bg=function(q){this.qd('<span id="ps-script"/>');
var t=this.Pa.getElementById("ps-script");t.parentNode.replaceChild(q,t)};u.prototype.mh=function(q,t){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);t()}})};u.prototype.oh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ih&&q.src&&q.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Jf(),w.stream=u.apply(null,w),y.Kf())}function u(w,y,x){function A(H){H=x.Tf(H);v.write(H);x.Lf(H)}v=new p(w,x);v.id=q++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.Ab.onerror||a;v.Ab.onerror=function(H,K,R){x.error({Uh:H+
" - "+K+":"+R});E.apply(v.Ab,arguments)};v.write(y,function(){e(B,z);v.Ab.onerror=E;x.done();v=null;r()});return v}var q=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Sh?w[0]:w;var A=[w,y,x];w.Wg={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.Sf(A);t.push(A);v||r();return w.Wg},{streams:{},Wh:t,Lh:p})}();dc=l.postscribe}})();var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},sc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},tc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc=function(a){return uc?G.querySelectorAll(a):null},wc=function(a,b){if(!uc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},xc=!1;if(G.querySelectorAll)try{var yc=G.querySelectorAll(":root");yc&&1==yc.length&&yc[0]==G.documentElement&&(xc=!0)}catch(a){}var uc=xc;var J={ra:"_ee",Jh:"_uci",yc:"event_callback",Fb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",zc:"restricted_data_processing",Za:"allow_google_signals",ba:"cookie_expires",Eb:"cookie_update",$a:"session_duration",ja:"user_properties"};J.we=[J.aa,J.Za,J.Eb];J.ye=[J.ba,J.Fb,J.$a];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.w="GTM-N72TJV";Vc.Kb="432";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,ad=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Vc.w+"&cv=629",ed={},fd={},gd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var hd={},jd=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},kd=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.Hg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.gh(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[dd,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Kb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{Hg:function(){if(c<a)return!1;Da()-d>=b&&(c=0);return c>=a},gh:function(){Da()-d>=b&&(c=0);c++;d=Da()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.va]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=n(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>n(c,l[r])){jd("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var u=!1;if(d){var q=0<=n(e,k);if(q)u=q;else{var t=ya(e,l||[]);t&&jd("GTM",10);u=t}}var v=!m||u;v||!(0<=n(l,"sandboxedScripts"))||c&&-1!==n(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={cg:function(a,b){b[Fb.xd]&&"string"===typeof a&&(a=1==b[Fb.xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.zd)&&null===a&&(a=b[Fb.zd]);b.hasOwnProperty(Fb.Bd)&&void 0===a&&(a=b[Fb.Bd]);b.hasOwnProperty(Fb.Ad)&&!0===a&&(a=b[Fb.Ad]);b.hasOwnProperty(Fb.yd)&&!1===a&&(a=b[Fb.yd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.w,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};qa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.w,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Pf:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!ra(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=ra(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(bd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=n(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||jd("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Qd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{C:f,B:1===k.ne?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.kf])k();else{var w=Cb(f,c,[]),y=De(c.id,String(f[Fb.va]),Number(f[Fb.Sd]),w[Fb.lf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Da()-B;Fd(c.id,sb[a],"5");Ee(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Da()-B;Fd(c.id,sb[a],"6");Ee(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var A=function(){var z=Da()-B;Fd(c.id,f,"7");Ee(c.id,y,"exception",z);x||(x=!0,k())};var B=Da();try{zb(w,c)}catch(z){A(z)}}}var f=sb[a],h=b.C,k=b.B,l=b.terminate;if(c.Uc(f))return null;var m=Bb(f[Fb.Td],c,[]);if(m&&m.length){var p=m[0],r=ff(p.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.ne?l:r}if(f[Fb.Id]||f[Fb.rf]){var u=f[Fb.Id]?tb:c.ph,q=h,t=k;if(!u[a]){e=Ga(e);var v=hf(a,u,e);h=v.C;k=v.B}return function(){u[a](q,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{C:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.ub[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{C:f,B:f,terminate:f},a,d);h?c.push({Qe:d,Le:Db(e),ng:h}):(mf(d,a),f())}catch(l){f()}}b.Pf();c.sort(nf);for(var k=0;k<c.length;k++)c[k].ng();return 0<c.length};function nf(a,b){var c,d=b.Le,e=a.Le;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Qe,k=b.Qe;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Uc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Qd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Td],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Uc:qe(c),ub:[],ph:[],Be:function(){jd("GTM",6)}};h.ub=Jb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.w);if(!k)return k;for(var l=0;l<h.ub.length;l++)if(h.ub[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.va])])return!0}return!1};var rf=[];function sf(){var a=gc("google_tag_data",{});a.ics||(a.ics={entries:{},set:tf,update:uf,addListener:vf,notifyListeners:wf,active:!1});return a.ics}function tf(a,b,c,d,e){var f=sf();f.active=!0;if(void 0!=b){var h=f.entries,k=h[a]||{},l=k.region,m=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(h[a]={region:m,initial:"granted"===b,update:k.update})}}
function uf(a,b){var c=sf();c.active=!0;if(void 0!=b){var d=xf(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(xf(a)!==d)for(var f=0;f<rf.length;++f){var h=rf[f];sa(h.he)&&-1!==h.he.indexOf(a)&&(h.Ke=!0)}}}function vf(a,b){rf.push({he:a,pg:b})}function wf(){for(var a=0;a<rf.length;++a){var b=rf[a];if(b.Ke){b.Ke=!1;try{b.pg.call()}catch(c){}}}}
var xf=function(a){var b=sf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},yf=function(){return sf().active},zf=function(a,b){sf().addListener(a,b)},Af=function(a,b){if(!1===xf(b)){var c=!1;zf([b],function(){!c&&xf(b)&&(a(),c=!0)})}};var Bf=[J.i,J.J],Cf=function(a){var b=xf(a);return void 0!=b?b:!0},Df=function(){for(var a=[],b=0;b<Bf.length;b++){var c=xf(Bf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},Ef=function(a,b){zf(a,b)};var Gf=/^https?:\/\/www\.googletagmanager\.com/;function Hf(){var a;return a}function Jf(a,b){}
function If(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function Kf(){var a=!1;return a};var Lf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){}},Mf=function(a){var b=new Lf;b.eventModel=a;return b},Nf=function(a,b){a.targetConfig=b;return a},Of=function(a,b){a.containerConfig=b;return a},Pf=function(a,b){a.h=b;return a},Qf=function(a,b){a.globalConfig=b;return a},Rf=function(a,b){a.C=b;return a},Sf=function(a,b){a.B=b;return a};
Lf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Tf=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};function Uf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Vf={},Wf=function(a){return void 0==Vf[a]?!1:Vf[a]};var Yf=function(a,b,c,d){return Xf(d)?Uf(a,String(b||document.cookie),c):[]},ag=function(a,b,c,d,e){if(Xf(e)){var f=Zf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=$f(f,function(h){return h.Sb},b);if(1===f.length)return f[0].id;f=$f(f,function(h){return h.vb},c);return f[0]?f[0].id:void 0}}};function bg(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Yf(b,f,!1,d).indexOf(c)}
var fg=function(a,b,c){function d(q,t,v){if(null==v)return delete h[t],q;h[t]=v;return q+"; "+t+"="+v}function e(q,t){if(null==t)return delete h[t],q;h[t]=!0;return q+"; "+t}if(!Xf(c.Ca))return!1;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=cg(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Th);f=d(f,"samesite",
c.Zh);c.$h&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=dg(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,u=d(f,"domain",r);if(!eg(r,c.path)&&bg(u,a,b,c.Ca))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return eg(l,c.path)?!1:bg(f,a,b,c.Ca)},gg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return fg(a,b,c)};
function $f(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Zf(a,b,c){for(var d=[],e=Yf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Sb:1*l[0]||1,vb:1*l[1]||1}))}}return d}
var cg=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},hg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ig=/(^|\.)doubleclick\.net$/i,eg=function(a,b){return ig.test(document.location.hostname)||"/"===b&&hg.test(a)},dg=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ig.test(e)||hg.test(e)||a.push("none");
return a},Xf=function(a){if(!Wf("gtag_cs_api")||!a||!yf())return!0;var b=xf(a);return null==b?!0:!!b};var jg=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Da()/1E3)].join(".")},mg=function(a,b,c,d,e){var f=kg(b);return ag(a,f,lg(c),d,e)},ng=function(a,b,c,d){var e=""+kg(c),f=lg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},kg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},lg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function og(a,b,c){var d,e=a.tb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Da())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function pg(){for(var a=rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var rg,tg;function ug(a){rg=rg||sg();tg=tg||pg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(rg[l],rg[m],rg[p],rg[r])}return b.join("")}
function vg(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}rg=rg||sg();tg=tg||pg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var wg;var Ag=function(){var a=xg,b=yg,c=zg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Bg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};zg().decorators.push(f)},Cg=function(a,b,c){for(var d=zg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var p=0;p<l.length;p++)if(l[p]instanceof RegExp){if(l[p].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[p])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},zg=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Dg=/(.*?)\*(.*?)\*(.*)/,Eg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Fg=/^(?:www\.|m\.|amp\.)+/,Gg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Hg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Jg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ug(String(d))))}var e=b.join("*");return["1",Ig(e),e].join("*")},Ig=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=wg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Lg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=Kg(d)||{};var e=$e(b,"fragment").match(Hg("_gl"));a.fragment=Kg(e&&e[3]||"")||{}}},Mg=function(){var a=Lg(),b=zg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},Kg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Dg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===Ig(k,p)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)r[u[q]]=vg(u[q+1]);return r}}}}catch(t){}};
function Ng(a,b,c,d){function e(p){var r=p,u=Hg(a).exec(r),q=r;if(u){var t=u[2],v=u[4];q=u[1];v&&(q=q+t+v)}p=q;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Gg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Og(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Cg(b,1,c),e=Cg(b,2,c),f=Cg(b,3,c);if(Ia(d)){var h=Jg(d);c?Pg("_gl",h,a):Qg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=Jg(e);Qg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Qg(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Pg(m,p,r);break a}}"string"==typeof r&&Ng(m,p,r,void 0)}}
function Qg(a,b,c,d){if(c.href){var e=Ng(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function Pg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Ng(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var xg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Og(e,e.hostname)}}catch(h){}},yg=function(a){try{if(a.action){var b=$e(af(a.action),"host");Og(a,b)}}catch(c){}},Rg=function(a,b,c,d){Ag();Bg(a,b,"fragment"===c?2:1,!!d,!1)},Sg=function(a){Ag();Bg(a,[F.location.hostname],3,!0,!0)},Tg=function(){var a=G.location.hostname,b=Eg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Fg,""),l=e.replace(Fg,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},Ug=function(a,b){return!1===a?!1:a||b||Tg()};var Vg=/^\w+$/,Wg=/^[\w-]+$/,Xg=/^~?[\w-]+$/,Yg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Zg=function(a){var b;if(Wf("gtag_cs_api")&&yf()){var c=xf("ad_storage");b=null==c?!0:!!c}else b=!0;b?a():Af(a,"ad_storage")};function $g(a){return a&&"string"==typeof a&&a.match(Vg)?a:"_gcl"}
var bh=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return ah(b,c,d)},ah=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Wg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Wf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},dh=function(a){var b=bh();Zg(function(){return ch(b,a)})};
function ch(a,b,c){function d(m,p){var r=eh(m,e);r&&(gg(r,p,f),h=!0)}b=b||{};var e=$g(b.prefix);c=c||Da();var f=og(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.di?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var gh=function(a,b){var c=Mg();Zg(function(){for(var d=$g(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Yg[f]){var h=eh(f,d),k=c[h];if(k){var l=Math.min(fh(k),Da()),m;b:{for(var p=l,r=Yf(h,G.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(fh(r[u])>p){m=!0;break b}m=!1}if(!m){var q=og(b,l,!0);q.Ca="ad_storage";gg(h,k,q)}}}}ch(ah(c.gclid,c.gclsrc),b)})},eh=function(a,b){var c=Yg[a];if(void 0!==c)return b+c},fh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function hh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ih=function(a,b,c,d,e){if(sa(b)){var f=$g(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=eh(a[l],f);if(m){var p=Yf(m,G.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};Zg(function(){Rg(h,b,c,d)})}},jh=function(a){return a.filter(function(b){return Xg.test(b)})},kh=function(a,b){for(var c=$g(b.prefix),d={},e=0;e<a.length;e++)Yg[a[e]]&&(d[a[e]]=Yg[a[e]]);Zg(function(){C(d,function(f,h){var k=Yf(c+h,G.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=fh(l),
p={};p[f]=[hh(l)];ch(p,b,m)}})})},lh=function(){var a=["","aw.ds"],b=bh(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&Sg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function mh(){var a=!1;return a}
function nh(a){function b(l){var m;Wc.reported_gclid||(Wc.reported_gclid={});m=Wc.reported_gclid;var p=d+(l?"gcu":"gcs");if(!m[p]){m[p]=!0;var r=[],u=function(t,v){v&&r.push(t+"="+encodeURIComponent(v))},q=d;u("gclid",q);u("gclsrc",e);sc("https://www.google.com/pagead/landing?"+r.join("&"))}}var c=bh(),d=c.gclid||"",e=c.gclsrc,f=!a&&
(!d||e&&"aw.ds"!==e?!1:!0),h=mh();if(f||h){var k=""+jg();b();}};var oh;if(3===Vc.Kb.length)oh="g";else{var ph="G";oh=ph}
var qh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:oh,OPT:"o"},rh=function(a){var b=Vc.w.split("-"),c=b[0].toUpperCase(),d=qh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Kb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Kb+e};var Bh=["1"],Ch={},Gh=function(a){var b=Dh(a.prefix);Ch[b]||Eh(b,a.path,a.domain)||(Fh(b,jg(),a),Eh(b,a.path,a.domain))};function Fh(a,b,c){var d=ng(b,"1",c.domain,c.path),e=og(c);e.Ca="ad_storage";gg(a,d,e)}function Eh(a,b,c){var d=mg(a,b,c,Bh,"ad_storage");d&&(Ch[a]=d);return d}function Dh(a){return(a||"_gcl")+"_au"};var Hh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({md:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].md]||(f[a[h].md]=[]),f[a[h].md].push({timestamp:k[1],rg:k[2]}))}return f};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){Cf("ad_storage")?a():Af(a,"ad_storage")}function Kh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(Ih)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Lh(a,b){if("aw"==a||"dc"==a){var c=Kh("gcl"+a);if(c)return c.split(".")}var d=$g(b);if("_gcl"==d){var e;e=bh()[a]||[];if(0<e.length)return e}var f=eh(a,d),h;if(f){var k=[];if(G.cookie){var l=Yf(f,G.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=hh(l[m]);p&&-1===n(k,p)&&k.push(p)}h=jh(k)}else h=k}else h=k}else h=[];return h}
var Mh=function(){var a=Kh("gac");if(a)return decodeURIComponent(a);var b=Hh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].rg);f=jh(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Nh=function(a,b){var c=bh().dc||[];Jh(function(){Gh(b);var d=Ch[Dh(b.prefix)],e=!1;if(d&&0<c.length){var f=Wc.joined_au=Wc.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;sc(l);e=f[h]=!0}}null==a&&(a=
e);if(a&&d){var m=Dh(b.prefix),p=Ch[m];p&&Fh(m,p,b)}})};var Hi={},Ii=["G","GP"];Hi.Se="";var Ji=Hi.Se.split(",");function Ki(){var a=Wc;return a.gcq=a.gcq||new Li}
var Mi=function(a,b,c){Ki().register(a,b,c)},Ni=function(a,b,c,d){Ki().push("event",[b,a],c,d)},Oi=function(a,b){Ki().push("config",[a],b)},Pi={},Qi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.m={};this.o=null;this.h=!1},Ri=function(a,b,c,d,e){this.type=a;this.o=b;this.U=c||"";this.h=d;this.m=e},Li=function(){this.m={};this.o={};this.h=[]},Si=function(a,b){var c=Sc(b);return a.m[c.containerId]=a.m[c.containerId]||new Qi},Ti=function(a,b,c,d){if(d.U){var e=Si(a,d.U),
f=e.o;if(f){var h=D(c),k=D(e.targetConfig[d.U]),l=D(e.containerConfig),m=D(e.m),p=D(a.o),r=Md("gtm.uniqueEventId"),u=Sc(d.U).prefix,q=Sf(Rf(Qf(Pf(Of(Nf(Mf(h),k),l),m),p),function(){Gd(r,u,"2");}),function(){Gd(r,u,"3");});try{Gd(r,u,"1");f(d.U,b,d.o,q)}catch(t){
Gd(r,u,"4");}}}};
Li.prototype.register=function(a,b,c){if(3!==Si(this,a).status){Si(this,a).o=b;Si(this,a).status=3;c&&(Si(this,a).m=c);var d=Sc(a),e=Pi[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Da()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+p:"&cl="+p}delete Pi[d.containerId]}this.flush()}};
Li.prototype.push=function(a,b,c,d){var e=Math.floor(Da()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===Si(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(Si(this,c).status=2,this.push("require",[],f.containerId),Pi[f.containerId]=Da(),Wd()){}else{var p=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
ic(r+"/gtag/js?id="+p+"&l=dataLayer&cx=c")}}this.h.push(new Ri(a,e,c,b,d));d||this.flush()};
Li.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.m)c.m=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Si(this,c.U).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.o)});break;case "config":var d=c.h[0],e=!!d[J.bc];delete d[J.bc];var f=Si(this,c.U),h=Sc(c.U),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.U]={});f.h&&e||Ti(this,J.D,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.U]);break;
case "event":Ti(this,c.h[1],c.h[0],c)}this.h.shift()}};var Ui=["GP","G"],Vi="G".split(/,/);Vi.push("GF");Vi.push("HA");var Wi=!1;Wi=!0;var Xi=null,Yi={},Zi={},$i;function aj(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.yc]&&(c.eventCallback=b[J.yc]),b[J.Fb]&&(c.eventTimeout=b[J.Fb]));return c}
var gj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=aj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||sa(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var hj={policy:!0};var ij=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},kj=function(a){var b=jj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var lj=!1,mj=[];function nj(){if(!lj){lj=!0;for(var a=0;a<mj.length;a++)I(mj[a])}}var oj=function(a){lj?I(a):mj.push(a)};var Gj=function(a){if(Fj(a))return a;this.h=a};Gj.prototype.wg=function(){return this.h};var Fj=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Gj.prototype.getUntrustedUpdateValue=Gj.prototype.wg;var Hj=[],Ij=!1,Jj=function(a){return F["dataLayer"].push(a)},Kj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Lj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});ad||(ad=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));cd=c;var e=Mj(a);cd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}
function Mj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.w,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Nj(){for(var a=!1;!Ij&&0<Hj.length;){Ij=!0;delete Jd.eventModel;Ld();var b=Hj.shift();if(null!=b){var c=Fj(b);if(c){var d=b;b=Fj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(sa(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(qa(b))try{b.call(Nd)}catch(v){}else if(sa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),p=m.pop(),r=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[p].apply(u,r)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&g(b[0])){var t=gj[b[0]];if(t&&(!c||!hj[b[0]])){b=t(b);break a}}b=void 0}if(!b){Ij=!1;continue}}a=Lj(b)||a}}finally{c&&Ld(!0)}}Ij=!1}
return!a}function Oj(){var a=Nj();try{ij(F["dataLayer"],Vc.w)}catch(b){}return a}
var Qj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});oj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Hj.push.apply(Hj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Nj()&&h};Hj.push.apply(Hj,a.slice(0));Pj()&&I(Oj)},Pj=function(){var a=!0;return a};var Rj={};Rj.Gb=new String("undefined");
var Sj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Rj.Gb?b:a[d]);return c.join("")}};Sj.prototype.toString=function(){return this.h("undefined")};Sj.prototype.valueOf=Sj.prototype.toString;Rj.Af=Sj;Rj.Gc={};Rj.fg=function(a){return new Sj(a)};var Tj={};Rj.hh=function(a,b){var c=gd();Tj[c]=[a,b];return c};Rj.ie=function(a){var b=a?0:1;return function(c){var d=Tj[c];if(d&&"function"===typeof d[b])d[b]();Tj[c]=void 0}};Rj.Fg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Rj.Xg=function(a){if(a===Rj.Gb)return a;var b=gd();Rj.Gc[b]=a;return'google_tag_manager["'+Vc.w+'"].macro('+b+")"};Rj.Pg=function(a,b,c){a instanceof Rj.Af&&(a=a.h(Rj.hh(b,c)),b=pa);return{Sc:a,C:b}};var Uj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Vj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Wj=function(a,b,c){Vj(a)[b]=c},Xj=function(a,b,c,d){var e=Vj(a),f=Fa(e,b,d);e[b]=c(f)},Yj=function(a,b,c){var d=Vj(a);return Fa(d,b,c)};var Zj=["input","select","textarea"],ak=["button","hidden","image","reset","submit"],bk=function(a){var b=a.tagName.toLowerCase();return!ta(Zj,function(c){return c===b})||"input"===b&&ta(ak,function(c){return c===a.type.toLowerCase()})?!1:!0},ck=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},dk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var ek=!!F.MutationObserver,fk=void 0,gk=function(a){if(!fk){var b=function(){var c=G.body;if(c)if(ek)(new MutationObserver(function(){for(var e=0;e<fk.length;e++)I(fk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<fk.length;e++)I(fk[e])}))})}};fk=[];G.body?b():I(b)}fk.push(a)};var Bk=F.clearTimeout,Ck=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},Dk=function(){return F.location.href},Ek=function(a){return $e(af(a),"fragment")},Fk=function(a){return Ze(af(a))},W=function(a,b){return Md(a,b||2)},Gk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Jj(a)):d=Jj(a);return d},Hk=function(a,b){F[a]=b},X=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},Ik=function(a,b,c){return Yf(a,b,void 0===c?!0:!!c)},Jk=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},Kk=function(a){return!!Yj(a,"init",!1)},Lk=function(a){Wj(a,"init",!0)},Mk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},Nk=function(a,b){var c=a[b];return c};var Ok=Rj.Pg;var kl=new xa;function ll(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),p=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ml(a){return nl(a)?1:0}
function nl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(ml({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");return 0<=n(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,t=kl.get(q);t||(t=new RegExp(c,u),kl.set(q,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ll(b,
c)}return!1};var ol=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var pl={},ql=encodeURI,Y=encodeURIComponent,rl=lc;var sl=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var tl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};pl.Gg=function(){var a=!1;return a};var Gm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Rm=window,Sm=document,Tm=function(a){var b=Rm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rm["ga-disable-"+a])return!0;try{var c=Rm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Uf("AMP_TOKEN",String(Sm.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Sm.getElementById("__gaOptOutExtension")?!0:!1};
var Wm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ja]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var $m=function(a,b,c){Ni(b,c,a)},an=function(a,b,c){Ni(b,c,a,!0)},cn=function(a,b){};
function bn(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Je();S(b,function(){var d=X("google_trackConversion");if(qa(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=tl(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:rh()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);d(h)||c()}else c()},c)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=W("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Fk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Uj(c,"gtm.click");Gk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Kk("cl")){var c=X("document");mc(c,"click",a,!0);Lk("cl")}I(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ik(a.vtp_name,W("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=W("gtm.url",1);c=c||Dk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Fk(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=$e(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();






Z.a.aev=["google"],function(){function a(q,t){var v=Ud(q,"gtm");if(v)return v[t]}function b(q,t,v,w){w||(w="element");var y=q+"."+t,x;if(p.hasOwnProperty(y))x=p[y];else{var A=a(q,w);if(A&&(x=v(A),p[y]=x,r.push(y),35<r.length)){var B=r.shift();delete p[B]}}return x}function c(q,t,v){var w=a(q,u[t]);return void 0!==w?w:v}function d(q,t){if(!q)return!1;var v=e(Dk());sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(q))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!sl(q,w)}function e(q){m.test(q)||(q="http://"+q);return $e(af(q),"HOST",!0)}function f(q,t,v){switch(q){case "SUBMIT_TEXT":return b(t,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return oc(q,"value");case "button":return pc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var t=0,v=0;v<q.elements.length;v++)bk(q.elements[v])&&t++;return t}}function l(q,t,v){var w=a(q,"interactedFormField");return w&&oc(w,t)||v}var m=/^https?:\/\//i,p={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var t=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,pc)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),B=af(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=$e(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(t,w,v);else{var H=q.vtp_attribute,K=a(t,"element");E=K&&oc(K,H)||v||""}return E;case "MD":var R=q.vtp_mdValue,V=b(t,"MD",nk);return R&&V?qk(V,R)||
v:V||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Je();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:rh()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?W(x):k[y];A&&(l[w]=A)}},p=m("JSON");p("google_conversion_currency","vtp_currencyCode");p("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(p=m(k.vtp_productReportingDataSource),p("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),p("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),p("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),p("google_basket_discount","vtp_discount","discount"),p("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?W(x):k[y];A(B)&&r(w,B)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(p=u(k.vtp_newCustomerReportingDataSource),p("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),p("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,S(q,f(),e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,hc(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var b=function(d,e,f){Ae(function(){var h,k=Wc;k.postscribe||(k.postscribe=dc);h=k.postscribe;var l={done:e},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{h(m,d,l)}catch(p){I(f)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=Ok(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Sc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else Ck(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();








var dn={};dn.macro=function(a){if(Rj.Gc.hasOwnProperty(a))return Rj.Gc[a]},dn.onHtmlSuccess=Rj.ie(!0),dn.onHtmlFailure=Rj.ie(!1);dn.dataLayer=Nd;dn.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function en(){Wc[Vc.w]=dn;Ha(fd,Z.a);wb=wb||Rj;xb=re}
function fn(){Vf.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.w]){var a=Wc.zones;a&&a.unregisterChild(Vc.w)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},u=0;u<p.length;u++)r[p[u][0]]=Array.prototype.slice.call(p[u],1);qb.push(r)}ub=Z;vb=ml;en();Qj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&G.documentElement.doScroll){var q=
!0;try{q=!F.frameElement}catch(y){}q&&ze()}mc(F,"load",ye)}lj=!1;"complete"===G.readyState?nj():mc(F,"load",nj);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}bd=(new Date).getTime();}}
fn();

})()
