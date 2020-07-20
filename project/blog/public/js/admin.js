;(function($){
	$('.del').on('click',function(){
		if(!window.confirm('确定删除该条数据吗？')){
			return false
		}
	})
})(jQuery)