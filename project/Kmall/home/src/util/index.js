

module.exports = {
    validate:function(value,type){
        //非空验证
        if(type == 'required'){
            return !!value;
        }
        //用户名验证
        else if(type == 'username'){
            return /^[a-z][a-z0-9]{2,5}$/i.test(value)
        }
        //密码验证
        else if(type == 'password'){
            return /^\w{3,6}$/i.test(value)
        }
        //手机号验证
        else if(type == 'phone'){
            return /^1[35678]\d{9}$/.test(value)
        }
        //邮箱验证
        else if(type == 'email'){
            return /^\w+@\w+\.\w{2,6}$/i.test(value)
        }

    },
    showSuccessMsg:function(msg){
    	alert(msg)
    },
    showErrmMsg:function(msg){
    	alert(msg)
    }
}