;(function($){
	$.fn.extend({
		pagination:function(options){
			var $elem = $(this);
			$elem.on('click','a',function(){
				var $this = $(this);
				//获取当前页
				var currentPage = $elem.find('.active a').html()*1;
				//根据当前页计算具体页码
				var labelText = $this.attr('aria-label');
				var page = 1;
				if(labelText == 'Next'){
					page = currentPage + 1;
				}else if(labelText == 'Previous'){
					page = currentPage - 1;
				}else{
					page = $this.html()*1;
				}
				//发送ajax请求
				$.ajax({
					url:options.url+'?page='+page,
					type:'GET',
					dataType:'json'
				})
				.done(function(result){
					console.log(result)
					// if(result.code == 0){

					// }
				})
				.fail(function(err){
					console.log(err)
				})
			})
		}
	})
})(jQuery)