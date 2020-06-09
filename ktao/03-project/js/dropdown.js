;(function($){
	function Dropdown($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$layer = this.$elem.find('.dropdown-layer');
		this.active = this.$elem.data('active') + '-active';

		this.Timer = null;
		//2.初始化
		this.init()
	}
	Dropdown.prototype = {
		constructor:Dropdown,
		init:function(){
			//1.初始化显示隐藏插件
			this.$layer.showHide(this.options);
			//2.监听显示隐藏事件
			this.$layer.on('show shown hide hidden',function(ev){
				this.$elem.trigger('dropdown-'+ev.type)
			}.bind(this));
			//3.绑定事件

			// 处理点击事件
			if(this.options.eventName == 'click'){
				this.$elem.on('click',function(ev){
					// 阻止事件冒泡
					ev.stopPropagation();
					this.show();
				}.bind(this));
				$(document).on('click',function(){
					this.hide();
				}.bind(this));
			}else{
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));				
			}
		},
		show:function(){
			this.Timer = setTimeout(function(){
				this.$layer.showHide('show');
				//显示时添加类
				this.$elem.addClass(this.active);			
			}.bind(this),this.options.delay);
		},
		hide:function(){
			clearTimeout(this.Timer);
			this.$layer.showHide('hide');
			//隐藏时删除类
			this.$elem.removeClass(this.active);
		}
	}

	Dropdown.DEFAULT = {
		js:true,
		mode:'fade',
		delay:200,
		eventName:''
	}


	$.fn.extend({
		dropdown:function(options){
			//1.实现隐士迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//利用面向对象完成下拉菜单功能
				options = $.extend({},Dropdown.DEFAULT,options);
				new Dropdown($elem,options)
			})
		}
	})
})(jQuery);