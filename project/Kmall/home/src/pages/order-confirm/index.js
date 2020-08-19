

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
    rederShippings:function(shippings){
        var html = _util.render(shippingTpl,{
            shippings:shippings,
        });
        this.shippingBox.html(html);
    },
    loadShippingList:function(){
        var _this = this
        api.getShippingsList({
          success:function(data){
            // console.log(data)
            // var html = _util.render(shippingTpl,{
            //     shippings:data,
            // });
            // _this.shippingBox.html(html);
            _this.rederShippings(data)
          },
          error:function(){
            _this.productBox.html('<p class="empty-message">获取商品列表失败,请稍后再试!</p>')
          }
        })
        
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
        var _this = this
        //监听自定义事件处理新增地址成功后获取最新地址信息
        this.shippingBox.on('get-shippings',function(ev,shippings){
            _this.rederShippings(shippings);
        })
        //1.点击新增地址弹出新增地址弹出层
        this.shippingBox.on('click','.shipping-add',function(){
            _modal.show();
        })
        //2.点击删除地址
        this.shippingBox.on('click','.shipping-delete',function(){
            if(_util.showConfirmMsg('您确定要删除地址吗?')){
                //删除地址需要获取该地址ID
                var shippingId = $(this).parents('.shipping-item').data('shipping-id');
                api.deleteShippings({
                    data:{
                        id:shippingId,
                    },
                    success:function(shippings){
                        // console.log(data)
                        _this.rederShippings(shippings);
                    },
                    error:function(){
                        _util.showErrMsg('删除地址失败,请稍后再试!!!')
                    }
                })
            }
        })
        //3.点击编辑地址
        this.shippingBox.on('click','.shipping-edit',function(){
            var $this = $(this);
            var _this = this
            var shippingId = $this.parents('.shipping-item').data('shipping-id') 
                api.getShippingsDetail({
                    data:{
                        id:shippingId,
                    },
                    success:function(shippings){
                        console.log(shippings)
                        //获取目标信息显示弹出层
                        _modal.show(shippings)
                    },
                    error:function(){
                        _util.showErrMsg('获取地址失败,请稍后再试!!!')
                    }
                })

            })
    }
   
}
    

$(function(){
    page.init();
})
