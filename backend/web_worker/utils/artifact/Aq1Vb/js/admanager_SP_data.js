//20191111: LL shop 40>35
//20191106: adult exclude
//20191030: LL shop, browsing, wishlist more imp
//20191019: LL shop 35>40, 
//20191016: LL shop 30>35, wishlist 130>110, browsing 130>120
//20191003: add widget head code in shop
//20190918: add widget head code in shop sp page
//20190820: Change Search, Category LL render 10 > 5, fetch 300 > 400
//20190819: Change Footer ad size to RWD Version, 
//20190802: search SP LL adjust
//20190801: fix brnad url mapping
function isMobile() {
  // alternative
  var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
  for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  return false;
}
if((document.location.pathname!=='/' && isMobile()===false) || isMobile()===true) {
  var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
  (function() {
  var chkMobile = isMobile();
  var publisherId = '/21798755501/';
  var adUnitList = {
	//Header	  
	'header-pc-320X50(right)': {'unitName': 'div-gpt-ad-Header-PC-320X50(right)-0','size': [[234, 60], [320, 68], [300, 50], [320, 50]]},
	'Event-SP-Text': {'unitName': 'div-gpt-ad-FooterAD-SP-0','size': ['fluid']},
	//DU  
	'Shop-SP-336X280': {'unitName': 'div-gpt-ad-Shop-SP-336X280-0','size': [[300, 250], [336, 280], [1, 1]]},
	'SearchCategory-SP-336X280': {'unitName': 'div-gpt-ad-SearchCategory-SP-336X280-0','size': [[300, 250], [336, 280]]},
	'BrowsingHistory-SP-336X280': {'unitName': 'div-gpt-ad-BrowsingHistory-SP-336X280-0','size': [[300, 250], [336, 280]]},
	'Wishlist-SP-336X280': {'unitName': 'div-gpt-ad-Wishlist-SP-336X280-0','size': [[300, 250], [336, 280]]},
	//this is for Shop sp, don't remove!!!
	'Footer-RWD-RWD': {'unitName': 'div-gpt-ad-Shop-SP-Footer-RWD-1','size': [[300, 250], [336, 280], [640, 165], [730, 183], [950, 250], [970, 250]]},
	'Widget-SP-Shop': {'unitName': 'div-gpt-ad-Widget-SP-0','size':[[500,280]]},
	'Widget-Pix-Similar-SP-Shop': {'unitName': 'div-gpt-ad-Widget-SP-1','size':[[1,1]]}
    };
  var urlMapping = {
    'order-and-its-child' : ['myorder-rwd'],
    'mycoupons-and-its-child' : ['mycoupon-rwd'],
    'shop-and-its-child' : ['header-pc-320X50(right)','Shop-SP-336X280','Shop-PC-950X90','Event-SP-Text','Widget-SP-Shop','Widget-Pix-Similar-SP-Shop','Footer-RWD-RWD'],
    'search-and-its-child' : ['header-pc-320X50(right)','SearchCategory-PC-200X600','SearchCategory-SP-336X280'],
    'category-and-its-child' : ['header-pc-320X50(right)','SearchCategory-PC-200X600','SearchCategory-SP-336X280'],
    'Brandzone' : ['header-pc-320X50(right)','SearchCategory-PC-200X600','SearchCategory-SP-336X280'],
    'browsing_history-and-its-child' : ['header-pc-320X50(right)','BrowsingHistory-PC-950X90','BrowsingHistory-SP-336X280'],
    'wishlist-and-its-child' : ['header-pc-320X50(right)','Wishlist-PC-950X90','Wishlist-SP-336X280'],
    'messages-and-its-child' : ['header-pc-320X50(right)','Message-PC-950X90']
  };
  var AdRuleByRegExp = [
    {'RegMean':'shop-and-its-child','fetchercent':500,'renderPercent':35,'mobileScaling':2.0,'fetchercent_SP':500,'renderPercent_SP':40,'mobileScaling_SP':2.0,'Reg': /^\/shop\/(?!happylifeshop|hoshino-sexy|baomei|dagong|elesis|hs-jeong|lovecity|mastertoy0186|mmshoppen|more-ray|star720216|sweetyoung|yes5136|jddoll|cc078019|condom|coolguy|eb2b2c|eztin|happyogc|lovetoy|metis|miffybaby|muzle|p-huo|purplestar|sweetgoddess|vivi-lin|xingcloud0724|yourcolor|aisexy|ankangstore|beebuy|dodo|freshot|kemei|ken74116|majani|min8714234|momosexystore|ustyle|yurubra|hongyuang\/category\/1mtf8|mg98322\/category\/ls3ag|sbox8\/category\/3754391|wen88\/product\/P0745168652634|mg98322\/category\/fh00p|dp-toy|rbook\/search\/BL|apr|love-69)/},
    {'RegMean':'category-and-its-child','fetchercent':300,'renderPercent':100,'mobileScaling':2.0,'fetchercent_SP':400,'renderPercent_SP':5,'mobileScaling_SP':2.0,'Reg': /^\/category\/(?!1334|2797|5769|7228|7243|7247|7184)/},
    {'RegMean':'search-and-its-child','fetchercent':300,'renderPercent':100,'mobileScaling':2.0,'fetchercent_SP':400,'renderPercent_SP':5,'mobileScaling_SP':2.0,'Reg': /^\/search\/(?!%E5%81%BD%E5%A8%98%E5%B0%88%E7%94%A8|%E5%81%BD%E5%A8%98|%E5%B0%8F%E6%80%AA%E7%8D%B8|%E6%83%85%E8%B6%A3%E5%85%A7%E8%A1%A3|%E6%83%85%E8%B6%A3|%E6%8C%89%E6%91%A9%E6%A3%92|%E6%BD%A4%E6%BB%91%E5%8A%91|%E6%BD%A4%E6%BB%91%E6%B6%B2|%E6%BD%A4%E6%BB%91|%E8%B7%B3%E8%9B%8B|%E9%A3%9B%E6%A9%9F%E6%9D%AF|R-20|r20%20%E9%A3%9B%E6%A9%9F%E6%9D%AF%20%E4%B8%89%E4%BB%A3|r20|R20|%25E6%2583%2585%25E8%25B6%25A3|%E6%BD%A4%E6%BB%91%E6%B6%B2|%E7%9D%A1%E8%A1%A3|tenga|TENGA|av|%E8%87%AA%E6%85%B0%E5%A5%97|ogc%E6%A0%AA%E5%BC%8F%E6%9C%83%E7%A4%BE|%E6%8C%89%E6%91%A9%E6%A3%92%20%E6%83%85%E8%B6%A3%E5%95%86%E5%93%81%20%E8%80%81%E4%BA%8C|%E6%83%85%E8%B6%A3%E7%94%A8%E5%93%81%20%E6%98%A5%E8%97%A5)/},
    {'RegMean':'Brandzone','fetchercent':300,'renderPercent':100,'mobileScaling':2.0,'fetchercent_SP':300,'renderPercent_SP':5,'mobileScaling_SP':2.0,'Reg': /^\/(3m|acer|adidas|anello|annasui|apple|arcteryx|asus|balenciaga|bape|benq|burberry|bvlgari|canon|casio-accessory|cathkidston|chanel|chloe|chromehearts|ck|clarins|clinique|coach|cocodor|converse|dc-shoes|dell|dior|dw|dyson|eleki|fendi|fila|gigabyte|givenchy|gregory|gucci|hermes|herschel|hitachi|hp|htc|iris|kanebo|kanken|keen|lancome|lg|longchamp|lotto|lovetodream|makeupforever|merrell|michaelkors|mio|mizuno|msi|native|newbalance|new-balance|nike|nokia|pampers|panasonic|philips|prada|puma|reebok|samsung|sharp|shiseido|shuuemura|sony|suntory|supreme|swatch-accessory|thesaem|tommyhilfiger|toryburch|toshiba|vans|versace|ysl|%E9%9B%85%E8%A9%A9%E8%98%AD%E9%BB%9B|ASICS%20%E4%BA%9E%E7%91%9F%E5%A3%AB|havaianas%20%E5%93%88%E7%93%A6%E4%BB%95|MUJI%20%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81|nike|%E7%9A%AE%E5%A4%BE|%E5%8E%9A%E5%BA%95%E9%9E%8B|%E4%B8%89%E7%9C%BC%E6%80%AA|%E6%89%8B%E6%A9%9F%E4%BF%9D%E8%AD%B7%E7%9A%AE%E5%A5%97|%E7%B8%AE%E5%8F%A3|%E9%9E%8B|%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%92%B0|%E6%B0%B4%E6%B3%A2%E7%88%90|%E6%98%9F%E9%9A%9B%E5%A4%A7%E6%88%B0|%E6%8A%98%E7%96%8A%E6%A1%8C|%E9%9B%AA%E9%9D%B4|%E7%B4%A0T|%E8%9B%8B%E9%BB%83%E5%93%A5|%E4%B8%AD%E5%A4%A7%E5%B0%BA%E7%A2%BC|%E9%95%B7%E5%B8%BDT|%E5%B7%B4%E6%96%AF%E5%85%89%E5%B9%B4|%E6%9D%AF%E8%93%8B|%E7%99%BD%E8%A5%AF%E8%A1%AB|%E5%B8%BDT|%E6%8A%B9%E8%8C%B6%E8%9B%8B%E7%B3%95|%E9%9B%AA%E9%9D%B4|%E6%87%B6%E4%BA%BA%E9%9E%8B|%E6%8B%89%E6%8B%89%E7%86%8A|%E7%8E%BB%E7%92%83%E7%BD%90|%E7%91%9C%E7%8F%88%E5%A2%8A|%E9%91%84%E9%90%B5%E9%8D%8B|%E7%9F%BD%E8%97%BB%E5%9C%9F)\/$/},
    //BrowsingHistory&Wishlist
    {'RegMean':'browsing_history-and-its-child','fetchercent':300,'renderPercent':40,'mobileScaling':2.0,'fetchercent_SP':200,'renderPercent_SP':130,'mobileScaling_SP':2.0,'Reg': /^\/browsing_history\//},
    {'RegMean':'wishlist-and-its-child','fetchercent':300,'renderPercent':130,'mobileScaling':2.0,'fetchercent_SP':200,'renderPercent_SP':130,'mobileScaling_SP':2.0,'Reg': /^\/wishlist\//},
    {'RegMean':'messages-and-its-child','fetchercent':300,'renderPercent':45,'mobileScaling':2.0,'fetchercent_SP':200,'renderPercent_SP':60,'mobileScaling_SP':2.0,'Reg': /^\/messages\//}
  ];
  
  var adInPage = [];
  var fetchercent,renderPercent,mobileScaling;
  AdRuleByRegExp.map(function(obj) { 
    if(obj.Reg.test(document.location.pathname)){
      adInPage = urlMapping[obj.RegMean];
      if(chkMobile){
        fetchercent = obj.fetchercent_SP;
        renderPercent = obj.renderPercent_SP;
        mobileScaling = obj.mobileScaling_SP;
      }
      else{
        fetchercent = obj.fetchercent;
        renderPercent = obj.renderPercent;
        mobileScaling = obj.mobileScaling;
      }
    }
  });

  if(adInPage.length > 0){
    googletag.cmd.push(function() {
      adInPage.map((key) => {
        var mapping1 = googletag.sizeMapping().addSize([1200, 0], [
            [970, 250],
            [1, 1]
        ]).addSize([992, 0], [
            [950, 250],
            [1, 1]
        ]).addSize([950, 0], [
            [730, 183],
            [1, 1]
        ]).addSize([768, 0], [
            [640, 165],
            [1, 1]
        ]).addSize([680, 0], [
            [336, 280],
            [1, 1]
        ]).addSize([0, 0], [
            [300, 250],
            [336, 280],
            [1, 1]
        ]).build();
        if(typeof adUnitList[key] !== 'undefined'){
          //check device
          if((adUnitList[key].unitName.indexOf('PC') !== -1 && chkMobile === false) || (adUnitList[key].unitName.indexOf('SP') !== -1 && chkMobile === true) || (adUnitList[key].unitName.indexOf('APP') !== -1 && chkMobile === true) || (adUnitList[key].unitName.indexOf('RWD') !== -1)){
            if(key==="Event-SP-Text"||key==="Widget-SP-Shop"||key==='Widget-Pix-Similar-SP-Shop'){
              googletag.defineSlot(publisherId + key, adUnitList[key].size ,adUnitList[key].unitName).addService(googletag.pubads());
            }
            else{
              googletag.defineSlot(publisherId + key, adUnitList[key].size ,adUnitList[key].unitName).defineSizeMapping(mapping1).addService(googletag.pubads());
            }
          }
        }
      });
    var keyvalue = (location.pathname.split('/')[1]==='')?'top':location.pathname.split('/')[1];
    var keyvalue2 =(typeof location.pathname.split('/')[2]!=='undefined' && location.pathname.split('/')[2]!=='')?location.pathname.split('/')[2]:'null';
    googletag.pubads().setTargeting('section_Name',keyvalue);
    googletag.pubads().setTargeting('url_path_l2',keyvalue2);
    if(document.location.pathname.indexOf('/product/')!==-1){
    	if(typeof dataLayer[0].page_info!=='undefined' || typeof dataLayer[1].page_info!=='undefined'){
      			var sourcedata= (typeof dataLayer[0].page_info!=='undefined')?dataLayer[0].page_info:dataLayer[1].page_info;
          		var brand = (sourcedata.page_products.brand!==null)?sourcedata.page_products.brand:'null';
          		var brandtmp = brand.replace(/\s+/g,'').replace(/[\u4e00-\u9fa5]+/g,'').toLowerCase();
          		brand = brandtmp.length>0?brandtmp:brand.replace(/\s+/g,'');
              	googletag.pubads().setTargeting('url_path_l3','product');
            	googletag.pubads().setTargeting('shop_url',document.location.href.split('product')[0]);
                googletag.pubads().setTargeting('brand',(sourcedata.page_products.brand!==null)?sourcedata.page_products.brand:'null');
          		googletag.pubads().setTargeting('prod_price',sourcedata.page_products.prod_price.toString());
                googletag.pubads().setTargeting('cat_l1_id',sourcedata.page_cat.cat_mpath.split(',')[0]);
          		googletag.pubads().setTargeting('cat_l2_id',sourcedata.page_cat.cat_mpath.split(',')[1]);
          		googletag.pubads().setTargeting('cat_l3_id',(typeof sourcedata.page_cat.cat_mpath.split(',')[2]!=='undefined')?sourcedata.page_cat.cat_mpath.split(',')[2]:'null');
            //}
        }
    }
	googletag.pubads().setCentering(true);
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: fetchercent,  // Fetch slots within 5 viewports.
      renderMarginPercent: renderPercent,  // Render slots within 2 viewports.
      mobileScaling: mobileScaling  // Double the above values on mobile.
    });

    googletag.enableServices();
    });
  }
  })();
}
//1234