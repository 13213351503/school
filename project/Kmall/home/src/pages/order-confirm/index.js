

var _nav = require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');



var page = {
 
    init:function(){
        this.shippingBox = $('.shipping-box');
        this.productBox = $('.product-box');
       //1.加载地址列表
       this.loadShippingList();
       //2.加载商品列表
       this.loadProductList();
       //3.绑定事件
       this.bindEvent();

    },
    loadShippingList:function(){
        var html = _util.render(shippingTpl);
        this.shippingBox.html(html);
    },
    loadProductList:function(){
        var html = _util.render(productTpl);
        this.productBox.html(html);
    },
    bindEvent:function(){

    }
   
}
    

$(function(){
    page.init();
})
