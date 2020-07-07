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
				success:function(result){
					//根据后台返回数据做出不同处理
					if(result.code == 0){
						const data = result.data;
						let $dom = $(`<li class="todo-item" data-id="${data.id}">${data.task}</li>`);
						$('.todo-list').append($dom);
						$('.todo-input').val('');
					}else{
						console.log(data.massage)
					}
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})
	//处理删除逻辑
	$('.todo-list').on('click','.todo-item',function(){
		let $this = $(this);
		let id = $this.data('id');
		// console.log(id);
		$.ajax({
			url:'/del',
			type:'get',
			dataType:'json',
			data:{
				id:id
			},
			success:function(data){
				if(data.code == 0){
					$this.remove()
				}else{
					console.log(data.message)
				}
			},
			error:function(err){
				console.log(err)
			}
		})
	})
})(jQuery)