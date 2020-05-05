////Ver 20161128
(function(){
    var appierPathArray = window.location.pathname.split( '/' ); 
    var appierRtItemId=[];  
    var appierRtCatgory="";
    /// Retargeting
        if (typeof window.APPIER_RETARGET == 'undefined') {
        (function(w, d, s, m) {
            var f = d.getElementsByTagName('script')[0],
                j = d.createElement('script'),
                ns = 'APPIER_RETARGET';
            w._appierSendQueue = w._appierSendQueue || [];
            w['appierRetargetJson'] = { id: s, site: m};
            j.async = true;
            j.src = '//jscdn.appier.net/aa.js?id='+m;
            f.parentNode.insertBefore(j, f);
            !w[ns] && (w[ns] = {});
            (!w[ns].send) && (w[ns].send = function(j){w._appierSendQueue.push(j);});
        })(window, document, 'ovpA', 'rakuten.com.tw');
    }

    ///Category
    for (i = 0; i < appierPathArray.length; i++) {
        if (appierPathArray[i] === 'category'){
            appierRtCatgory=decodeURIComponent(appierPathArray[i+1]);
            break; 
        }
        else if (appierPathArray[i] === 'shop'){
            appierRtCatgory=decodeURIComponent(appierPathArray[i+1]);
            break; 
        }
        else if (appierPathArray[i] === 'brand'){
            appierRtCatgory=decodeURIComponent(appierPathArray[i+1]);
            break; 
        }
    }
    
    ///PC
    if (typeof dataLayer[0] != "undefined") {
        if (dataLayer.length >0 && (typeof dataLayer[0].page_info != "undefined")){
            if(typeof dataLayer[0].page_info.page_products.item_id != "undefined"){
                appierRtItemId.push(dataLayer[0].page_info.page_products.item_id);
            }
        }
    }

    ///MB
    if(typeof _data != "undefined" && (typeof _data.page_info != "undefined")){
        if(typeof _data.page_info.page_products.item_id != "undefined"){
            appierRtItemId.push(_data.page_info.page_products.item_id);
        }
    }

    ///activate pixel
    if (appierRtItemId.length>0){
        for(k = 0; k < appierRtItemId.length; k++){
            window.APPIER_RETARGET.send({'t': 'type_product','content': appierRtItemId[k]});
        }
    }
    else if(appierRtCatgory.length>0){
            window.APPIER_RETARGET.send({'t': 'type_listpage','content': appierRtCatgory});
    }
})();