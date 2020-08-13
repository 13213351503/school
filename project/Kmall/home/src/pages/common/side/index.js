
require('./index.css');
var tpl = require('./index.tpl')
var _util = require('util/index.js')
// import Hogan from 'hogan.js'

module.exports = {
    render:function(name){
        var list = [
            {   
                name:'user-center',
                link:'./user-center.html',
                desc:'用户中心',
            },
            {   
                name:'order-list',
                link:'./order-list.html',
                desc:'我的订单',
            },
            {   
                name:'user-update-password',
                link:'./user-update-password.html',
                desc:'修改密码',
            },
        ]
        list.find(function(item){
            // console.log(item);
            return item.name == name
        }).isActive=true
        // console.log(list);
        /*
        var template = Hogan.compile(tpl);
        var html = template.render({
            list:list
        });
        */
        var html = _util.render(tpl,{
            list:list
        })
        $('.side').html(html)
    }
}