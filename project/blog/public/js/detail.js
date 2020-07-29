;(function($){
	$('#btn-sub-comment').on('click',function(){
		//获取评论输入框信息
		var val = $('#text-comment').val().trim()
		var $err = $('#comment .err')
		if(!val){
			$err.html('请输入内容在提交!!!')
			return 
		}else{
			$err.html('')
		}
		if(val.length > 100){
			$err.html('评论内容不超过10个字符!!!')
			return 
		}else{
			$err.html('')
		}

		//验证成功,发送ajax请求
		//评论需要知道属于哪一篇文章,因此需要获取文章ID
		var id = $(this).data('id')
		$.ajax({
			url:'/comment/add',
			type:'post',
			dataType:'json',
			data:{
				content:val,
				article:id
			}
		})
		.done(function(result){
			// console.log(result)
			if(result.code == 0){
				$('#text-comment').val('')
				//todo.....
				$('#comment-page').trigger('get-data',result.data)
			}
		})
		.fail(function(err){
			$err.html('评论失败,请稍后再试!!!')
		})
	})
})(jQuery);