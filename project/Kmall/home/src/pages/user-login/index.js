

require('pages/common/logo/index.js')
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');


var formDataMsg = {
    show:function(msg){
         $('.error-item')
        .show()
        .find('.error-msg')
        .text(msg)
    },
    hide:function(){
        $('.error-item')
        .hide()
        .find('.error-msg')
        .text('')
    }
}


var page = {
    init:function(){
        var _this = this;
        $('#btn-submit').on('click',function(){
            _this.submit();
        });
        //监听键盘事件提交表单
        $('input').on('keyup',function(ev){
            if(ev.keyCode == 13){
                _this.submit();
            }
        })
    },
    submit:function(){
        //1.获取数据
        var formData = {
            username:$.trim($('[name="username"]').val()),
            password:$.trim($('[name="password"]').val()),
        };
        //2.验证数据合法性
        var validateFormData = this.vaildate(formData);
        //3.验证通过发送请求
        if(validateFormData.status){//验证通过
            formDataMsg.hide();
            //发送ajax请求
            api.login({
                data:formData,
                success:function(data){
                    window.location.href = '/'
                },
                error:function(msg){
                    formDataMsg.show(msg);
                }
            })
            /*
            $.ajax({
                url:'/sessions/users',
                method:'post',
                dataType:'json',
                data:formData,
                success:function(data){
                    if(data.code == 0){
                        window.location.href = '/'
                    }else{
                        formDataMsg.show(data.message);
                    }
                },
                error:function(err){
                    formDataMsg.show('网络错误,请稍后再试');
                }
            })
            */
        }else{
            formDataMsg.show(validateFormData.msg);
        }
            
    },
    vaildate:function(formData){
        var result = {
            status:false,
            msg:''
        };
        //用户名非空验证
        if(!_util.validate(formData.username,'required')){
            result.msg = '用户名不能为空';
            return result
        };
        //用户名合法验证
        if(!_util.validate(formData.username,'username')){
            result.msg = '用户名是以字母开始,长度为3-6位';
            return result
        };
        //密码非空验证
        if(!_util.validate(formData.password,'required')){
            result.msg = '密码不能为空';
            return result
        };
        //密码合法验证
        if(!_util.validate(formData.password,'password')){
            result.msg = '密码长度为3-6位任意字符';
            return result
        };
        result.status = true;
        return result;
    }
}
    

$(function(){
    page.init();
})
