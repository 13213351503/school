// ;(function($){
// 	var userInfo = $('#user-info');			//登陆成功界面
// 	var register = $('#register');			//注册界面
// 	var login = $('#login');				//登陆界面
// 	var registerInput = $('#username')		//用户名输入框
// 	var passwordInput = $('#password')		//密码输入框
// 	var repasswordInput = $('#repassword')	//确认密码输入框


// 	$('#go-register').on('click',function(){
// 		//隐藏登录面板
// 		login.hide();
// 		//显示注册面板
// 		register.show();
// 	})
// 	$('#go-login').on('click',function(){
// 		//显示登录面板
// 		login.show();
// 		//隐藏注册面板
// 		register.hide()
// 	})

// 	//首位必须字母，最少3-10位
// 	var userReg = /^[a-z][0-9]{2,9}$/i;
// 	//首位必须字母，剩下最少6-12位
// 	var passwordReg = /^[a-z]\w{5,11}$/i;
// 	$('#sub-register').on('click',function(){
// 		//获取注册信息
// 		var registerName = registerInput.val();		//用户名输入框值
// 		var passwordName = passwordInput.val();		//密码输入框值
// 		var repasswordName = repasswordInput.val();	//确认密码输入框值
// 		var errs = register.find('.err');			//验证输入值的p标签
// 		var errMsg = '';


// 		//验证数据合法性
// 		if(!userReg.test(registerName)){
// 			errMsg = '请输入3-10位的账号，首位必须为字母';
// 		}else if(!passwordReg.test(passwordName)){
// 			errMsg = '请输入6-12位密码，首字母必须为字母';
// 		}else if(passwordName != repasswordName){
// 			errMsg = '请确认两次输入的密码是否一致';
// 		}else{
// 			errMsg = '';
// 		}

// 		if(errMsg){
// 			errs.html(errMsg);
			
// 		}else{
// 			$.ajax({
// 				url:'/user/register',
// 				type:'post',
// 				dataType:'json',
// 				data:{
// 					username: registerName,
// 					password: passwordName
// 				}
// 			})
// 			.done(function(data){
// 				console.log(data)
// 			})
// 			.fail(function(err){
// 				errs.html('请求失败，请稍后再试')
// 			})
// 		}
		


// 	})
// })(jQuery)