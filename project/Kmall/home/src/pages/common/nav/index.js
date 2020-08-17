
require('./index.css')
var api = require('api/index.js');
var _util = require('util/index.js')


var page = {
	init:function(){
		//加载用户的登录名
		this.loadUsername();
        //绑定事件
        this.bindEvent();
        //加载购物车数量
        this.loadCarts();
	},
    loadCarts:function(){
        var $cartNum = $('.cart-num')
        api.getCartsCount({
                success:function(count){
                    $cartNum.text(count || 0)

                },
                error:function(){
                    $cartNum.text(0);
                }
            })
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

module.exports = page;