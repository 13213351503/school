(function($){
	// 顶部导航逻辑开始
	$('.top .top-right .dropdown').hover(function(){
		$(this).addClass('menu-active');
	},function(){
		$(this).removeClass('menu-active');
	})

	// 顶部导航逻辑结束
})(jQuery);