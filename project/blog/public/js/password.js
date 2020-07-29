;(function($){
	var $formPassword = $('.form-password')
	$('.btn-sub-password').on('click',function(){
		//1获取信息
		var password = $formPassword.find("[name='password']").val()
		var repassword = $formPassword.find("[name='repassword']").val()
		//2验证数据合法性
		// 密码是3-6位的任意字符
		var passwordReg = /^\w{3,6}$/
		if(!passwordReg.test(password)){
			$('.err').eq(0).html('密码是3-6位的任意字符')
			return false
		}else{
			$('.err').eq(0).html('')
		}

		if(password != repassword){
			$('.err').eq(1).html('两次密码不一致,请重新输入')
			return false
		}else{
			$('.err').eq(1).html('')
		}
	})
})(jQuery);