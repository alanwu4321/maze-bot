/*
* WaterMark
* @version 1.1
* @updated 2010-11-24
* @author abgne.tw http://abgne.tw/jquery-plugins/jquery_watermark-1-0.html
* @requires jQuery 1.2.6 or later
* 
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

;(function ($) {
	$.fn.waterMark = function(options){
		var opts = $.extend({}, $.fn.waterMark.defaults, options || {});
		
		return this.each(function(){
			var _this = $(this),
				_title = _this.attr('title'),
				_class = _this.attr('className') || '';

			if(!!_title || (opts.useInputCss && !!_class)){
				var _water = $('<div></div>').appendTo('body');
				_water.css({
					position: 'absolute',
					width: _this.width(),
					height: _this.height(),
					fontSize: _this.css('fontSize'),
					lineHeight: _this.css('lineHeight'),
					top: _this.position().top + parseInt(_this.css('borderTopWidth'), 10) + 'px',
					left: _this.position().left + parseInt(_this.css('borderLeftWidth'), 10) + 'px',
					paddingTop: _this.css('paddingTop'),
					paddingBottom: _this.css('paddingBottom'),
					paddingLeft: _this.css('paddingLeft'),
					paddingRight: _this.css('paddingRight'),
					marginTop: _this.css('marginTop'),
					marginBottom: _this.css('marginBottom'),
					marginLeft: _this.css('marginLeft'),
					marginRight: _this.css('marginRight'),
					cursor: 'text',
					overflow: 'hidden'
				}).html(_title).click(function(){
					_this.trigger('focus');
				}).addClass(_class + ' ' + opts.waterCss);

				_this.focus(function(){
					_water.hide();
				}).blur(function(){
					if(this.value=='') _water.show();
					else _water.hide();
				}).blur();
			}
		});
	};

	$.fn.waterMark.defaults = {
		waterCss: '',
		useInputCss: true
	};
})(jQuery);