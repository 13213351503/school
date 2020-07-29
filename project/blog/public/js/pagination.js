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
				//由于列表页只显示对应分类下文章
				//需要获取当前分类id
				var id = $elem.data('id');
				var url = options.url+'?page='+page;
				if(id){
					url = url + '&id=' + id;
				}
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json'
				})
				.done(function(result){
					if(result.code == 0){
						$elem.trigger('get-data',result.data);
					}
				})
				.fail(function(err){
					console.log(err)
				})
			})
		}
	})
})(jQuery)