

require('pages/common/nav/index.js');
var _side = require('pages/common/side/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var tpl = require('./index.tpl')



var page = {
    init:function(){
       //侧边栏选中状态
       this.renderSide()
       //获取登陆用户信息
       this.loadUserInfo()
    },
    renderSide:function(){
        _side.render('user-center')
    },
    loadUserInfo:function(){
        api.getUserInfo({
            success:function(data){
                // console.log(data);
                var html = _util.render(tpl,data)
                $('.side-content').html(html)
            }
        })
    }
}
    

$(function(){
    page.init();
})
