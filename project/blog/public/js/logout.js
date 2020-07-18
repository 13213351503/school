$('#logout').on('click',function(){
	$.ajax({
		url:'/user/logout',
		type:'get',
	})
	.done(function(data){
		if(data.code == 0){
			window.location.href = '/';
		}
	})
	.fail(function(err){
		alert('请求失败，请稍后再试')
	})
})	