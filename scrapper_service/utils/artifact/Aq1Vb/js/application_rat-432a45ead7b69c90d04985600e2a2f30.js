/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
!function($){$.fn.appear=function(f,o){var s=$.extend({one:!0},o);return this.each(function(){var t=$(this);if(t.appeared=!1,f){var w=$(window),c=function(){if(t.is(":visible")){var a=w.scrollLeft(),b=w.scrollTop(),o=t.offset(),x=o.left,y=o.top;y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()?t.appeared||t.trigger("appear",s.data):t.appeared=!1}else t.appeared=!1},m=function(){if(t.appeared=!0,s.one){w.unbind("scroll",c);var i=$.inArray(c,$.fn.appear.checks);0<=i&&$.fn.appear.checks.splice(i,1)}f.apply(this,arguments)};s.one?t.one("appear",s.data,m):t.bind("appear",s.data,m),w.scroll(c),$.fn.appear.checks.push(c),c()}else t.trigger("appear",s.data)})},$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(0<l)for(;l--;)$.fn.appear.checks[l]()},run:function(){$.fn.appear.timeout&&clearTimeout($.fn.appear.timeout),$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}}),$.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(i,n){var u=$.fn[n];u&&($.fn[n]=function(){var r=u.apply(this,arguments);return $.fn.appear.run(),r})})}(jQuery);