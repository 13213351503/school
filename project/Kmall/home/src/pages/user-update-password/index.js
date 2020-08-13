

require('pages/common/nav/index.js');
var _side = require('pages/common/side/index.js');
require('pages/common/search/index.js');
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
       //侧边栏选中状态
       this.renderSide();
       //绑定事件
       this.bindEvent();
       //获取登陆用户信息判断用户是否登录
       this.loadUserInfo()
       
    },
    renderSide:function(){
        _side.render('user-update-password')
    },
    loadUserInfo:function(){
        api.getUserInfo({})
    },
    bindEvent:function(){
      var _this = this;
      $('#btn-submit').on('click',function(){
          _this.submit();
      });
      //监听键盘事件提交表单
      $('.form-box input').on('keyup',function(ev){
          if(ev.keyCode == 13){
              _this.submit();
          }
      })
    },
    submit:function(){
        //1.获取数据
        var formData = {
            password:$.trim($('[name="password"]').val()),
            repassword:$.trim($('[name="repassword"]').val()),  
        };
        //2.验证数据合法性
        var validateFormData = this.vaildate(formData);
        //3.验证通过发送请求
        if(validateFormData.status){//验证通过
            formDataMsg.hide();
            //发送ajax请求
            api.updatePassword({
                data:{
                  password:formData.password
                },
                success:function(data){
                    // window.location.href = '/result.html?type=updatePassword';
                    _util.goResult('updatePassword');
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
        //验证两次密码一致
        if(formData.password != formData.repassword){
            result.msg = '两次密码输入不一致';
            return result
        }
        result.status = true;
        return result;
    }
    
}
    

$(function(){
    page.init();
})
