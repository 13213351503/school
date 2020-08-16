

require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var tpl = require('./index.tpl');



var page = {
 
    init:function(){
        //1.绑定事件
        this.bindEvent();

    },
    bindEvent:function(){
        var _this = this;
    
    },
}
    

$(function(){
    page.init();
})
