
require('./index.css')
var api = require('api/index.js');
var _util = require('util/index.js')


var page = {
	init:function(){
		//加载用户的登录名
		this.loadUsername();
        //绑定事件
        this.bindEvent();
	},
    bindEvent:function(){
        $('#logout').on('click',function(){
            api.logout({
                success:function(result){
                  window.location.reload();
                  // window.location.href = '/';
                },
                error:function(msg){
                    _util.showErrMsg(msg);
                }
            })
        })
    },

	loadUsername:function(){
        api.getUsername({
            success:function(result){
                $('.not-login').hide()
                $('.login')
                .show()
                .find('.username')
                .text(result.username)
            }
        })
        /*
		$.ajax({
            url:'/sessions/users',
            method:'get',
            dataType:'json',
            success:function(result){
                $('.not-login').hide()
                $('.login')
                .show()
                .find('.username')
                .text(result.data.username)
            }
        })
        */
	}
}


$(function(){
	page.init();
})