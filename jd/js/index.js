





(function($){
	// 顶部导航逻辑开始
	$('.top .top-right .dropdown').hover(function(){
		var menuData = $(this).data('active');
		console.log(menuData);
		$(this).addClass(menuData + '-active');
	},function(){
		var menuData = $(this).data('active');
		$(this).removeClass(menuData + '-active');
	})

	// 顶部导航逻辑结束
})(jQuery);