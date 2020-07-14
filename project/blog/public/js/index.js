;(function($){
	var userInfo = $('#user-info');			//登陆成功界面
	var register = $('#register');			//注册界面
	var login = $('#login');				//登陆界面
	var registerInput = $('#username')		//用户名输入框
	var passwordInput = $('#password')		//密码输入框
	var repasswordInput = $('#repassword')	//确认密码输入框


	$('#go-register').on('click',function(){
		login.hide();
		register.show();
	})
	$('#go-login').on('click',function(){
		login.show();
		register.hide()
	})


	$('#sub-register').on('click',function(){
		var username = registerInput.val();
		var username = passwordInput.val();
		var repassword = repasswordInput.val();

		var userReg = /^[a-z][0-9]{2,9}$/i;
		var passwordReg = /^[a-z]\w{5,11}$/;
	})
})(jQuery)