

require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var tpl = require('./index.tpl');



var page = {
  productsDetailParams:{
        id:_util.getParamsFromUrl('productId'),
   
  },
    init:function(){
        //1.加载列表页商品数据
        this.loadProductsDetail();
        //2.绑定事件
        this.bindEvent();

    },
    bindEvent:function(){
      
    },
    loadProductsDetail:function(){
      var _this = this;
      if(this.productsDetailParams.id){
        api.getProductDetail({
            data:_this.productsDetailParams,
              success:function(productDetail){
                  // console.log(productDetail);
              }
          })
      }
      
    }
}
    

$(function(){
    page.init();
})
