

var _nav = require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var _modal = require('./modal.js');
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
        var _this = this
        api.getOrderList({
          success:function(data){
            // console.log(data)
            if(data.cartList.length>0){
              var html = _util.render(productTpl,data)
              _this.productBox.html(html)
            }else{
              _this.productBox.html('<p class="empty-message">您还没有选择任何商品</p>')
            }
          },
          error:function(){
            _this.productBox.html('<p class="empty-message">获取商品列表失败,请稍后再试!</p>')
          }
        })
    },
    bindEvent:function(){
      this.shippingBox.on('click','.shipping-add',function(){
          _modal.show();
      })
    }
   
}
    

$(function(){
    page.init();
})
