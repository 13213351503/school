;(function($){
/*顶部导航逻辑------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log(ev.type);
		if(ev.type == 'dropdown-show'){
			var $this = $(this);
			var $dropdownLayer = $this.find('.dropdown-layer');
			var url = $this.data('load');
			$.getJSON(url,function(data){
				var html = '';   
				for(var i=0;i<data.length;i++){
					html += '<li><a href="'+data[i].url+'"class="menu-item">'+data[i].name+'</a></li>';
				}
			})
		}
	})
/*顶部导航逻辑------结束*/
})(jQuery);