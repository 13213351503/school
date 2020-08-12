

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
        });
        //监听用户名事件当失去焦点时验证用户名
        $('[name="username"]').on('blur',function(){
            var username = $.trim($(this).val())
            //用户名非空验证
            if(!_util.validate(username,'required')){
                formDataMsg.show('请输入用户名');
                return
            };
            //用户名合法验证
            if(!_util.validate(username,'username')){
                formDataMsg.show('用户名是以字母开始,长度为3-6位');
                return
            };
            api.checkUsername({
                data:{
                    username:username
                },
                success:function(data){
                   formDataMsg.hide();
                },
                error:function(msg){
                    formDataMsg.show(msg);
                }
            })
        })
    },
    submit:function(){
        //1.获取数据
        var formData = {
            username:$.trim($('[name="username"]').val()),
            password:$.trim($('[name="password"]').val()),
            repassword:$.trim($('[name="repassword"]').val()),
            phone:$.trim($('[name="phone"]').val()),
            email:$.trim($('[name="email"]').val()),
        };
        //2.验证数据合法性
        var validateFormData = this.vaildate(formData);
        //3.验证通过发送请求
        if(validateFormData.status){//验证通过
            //隐藏错误提示
            formDataMsg.hide();
            //发送ajax请求
            api.register({
                data:formData,
                success:function(data){
                    //注册成功回到成功提示页
                    window.location.href = '/result.html'
                },
                error:function(msg){
                    formDataMsg.show(msg);
                }
            })
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
        //两次密码输入一致验证
        if(formData.password != formData.repassword){
            result.msg = '两次输入密码不一致'
            return result
        }
        //手机号非空验证
        if(!_util.validate(formData.phone,'required')){
            result.msg = '请输入手机号';
            return result
        };
        //手机号合法验证
        if(!_util.validate(formData.phone,'phone')){
            result.msg = '手机号格式不正确';
            return result
        };
         //邮箱非空验证
        if(!_util.validate(formData.email,'required')){
            result.msg = '请输入邮箱';
            return result
        };
        //邮箱合法验证
        if(!_util.validate(formData.email,'email')){
            result.msg = '邮箱格式不正确';
            return result
        };


        result.status = true;
        return result;
    }
}
    

$(function(){
    page.init();
})
