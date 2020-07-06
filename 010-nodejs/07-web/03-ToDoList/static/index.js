// alert('hhahaha')


;(function($){
	$('.todo-input').on('keydown',function(ev){
		// console.log(ev.keyCode)

		if(ev.keyCode == 13){
			//发送ajax请求,添加数据
			$.ajax({
				url:'/add',
				type:"post",
				data:{
					task:$('.todo-input').val()
				},
				dataType:'json',
				success:function(data){
					console.log(data)
				},
				error:function(err){
					console.log(err)
				}
			})
		}
		// console.log($.ajax.data);
	})
})(jQuery)