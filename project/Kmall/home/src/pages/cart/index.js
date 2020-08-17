

var _nav = require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var tpl = require('./index.tpl');



var page = {
 
    init:function(){
        this.$cartBox = $('.cart .cart-box');
        //1.绑定事件
        this.bindEvent();
        //2.获取购物车信息
        this.loadCarts();

    },
    bindEvent:function(){
        var _this = this;
        //1.单个选中或取消状态
        this.$cartBox.on('click','.select-one',function(){
            var $this = $(this);
            var productId = $this.parents('.product-item').data('product-id');
            //选中
            if($this.is(':checked')){
                // console.log('checked');
                api.updateCartsChoice({
                    data:{
                        productId:productId,
                        checked:true,
                    },
                    success:function(data){
                        // console.log(data);
                        _this.renderCarts(data);
                    },
                    error:function(err){
                         // _this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
                         _this.showErrPage()
                    },
                })
            }
            //取消
            else{
                // console.log('unchecked');
                api.updateCartsChoice({
                    data:{
                        productId:productId,
                        checked:false,
                    },
                    success:function(data){
                        // console.log(data);
                        _this.renderCarts(data);
                    },
                    error:function(err){
                         // _this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
                         _this.showErrPage()
                    },
                })
            }
        })
        //2.全选/全不选
        this.$cartBox.on('click','.select-all',function(){
            var $this = $(this);
            //选中
            if($this.is(':checked')){
                // console.log('checked');
                api.updateCartsChoice({
                    data:{
                        checked:true,
                    },
                    success:function(data){
                        // console.log(data);
                        _this.renderCarts(data);
                    },
                    error:function(err){
                         // _this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
                         _this.showErrPage()
                    },
                })
            }
            //取消
            else{
                // console.log('unchecked');
                api.updateCartsChoice({
                    data:{
                        checked:false,
                    },
                    success:function(data){
                        // console.log(data);
                        _this.renderCarts(data);
                    },
                    error:function(err){
                         // _this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
                         _this.showErrPage()
                    },
                })
            }
        })
        //3.删除单个商品
        this.$cartBox.on('click','.delete-one',function(){
            var $this = $(this);
            //删除商品需要获取当前商品ID
            var productId = $this.parents('.product-item').data('product-id');
            if(_util.showConfirmMsg('您确定要删除这个宝贝吗?')){
                api.deleteCarts({
                    data:{
                        productId:productId,
                    },
                    success:function(data){
                        _this.renderCarts(data);
                    },
                    error:function(err){
                       _this.showErrPage()
                    }
                })
            }
        })
        //4.删除选中商品,由于商品状态全部存在后台,所以前台不需要传递参数
        this.$cartBox.on('click','.delete-selected',function(){
            var $this = $(this);
            //删除商品需要获取当前商品ID
            var productId = $this.parents('.product-item').data('product-id');
            if(_util.showConfirmMsg('您确定要删除选中的宝贝吗?')){
                api.deleteCarts({
                    success:function(data){
                        _this.renderCarts(data);
                    },
                    error:function(err){
                       _this.showErrPage()
                    }
                })
            }
        })
        //5.增加/减少商品数量
        this.$cartBox.on('click','.count-btn',function(){
            var $this = $(this);
            //点击增加减少获取对应的input输入框
            var $input = $this.siblings('.count-input');
            //更新商品数量需要获取当前商品ID
            var productId = $this.parents('.product-item').data('product-id');
            //获取当前商品数量
            var current = parseInt($input.val());
            var count = current;
            //获取商品库存
            var stock = $input.data('stock');
            if($this.hasClass('plus')){
                // console.log('plus');
                if(current >= stock){
                    _util.showErrmMsg('您购买的商品已经是最后一件了');
                    return
                }
                $input.val(current + 1);
                count = current + 1;
            }
            else if($this.hasClass('minus')){
                // console.log('minus');
                if(current <= 1){
                    _util.showErrmMsg('你就这样把我抛弃了吗?');
                    return
                }
                $input.val(current - 1);
                count = current - 1;
            }
            //发送请求
            api.updateCartsCount({
                data:{
                    productId:productId,
                    count:count,
                },
                success:function(data){
                    _this.renderCarts(data);
                },
                error:function(err){
                   _this.showErrPage()
                },
            })
        })
        //6.商品结算
        this.$cartBox.on('click','.btn-submit',function(){
            if(_this.totalCartPrice <= 0){
                 _util.showErrmMsg('您的购物车空空如也~')
            }else{
                window.location.href = './order-confirm.html'
            }
        })
    },
    renderCarts:function(data){
        //为了保持购物车数量数据同步,渲染购物车时调用获取购物车数量方法
        _nav.loadCarts();
        //处理结算时需要获取总价格,将总价格缓存下来
        this.totalCartPrice = data.totalCartPrice;
        if(data.cartList.length > 0){
            var html = _util.render(tpl,data);
            this.$cartBox.html(html)
        }else{
            this.$cartBox.html('<p class="empty-message">请添加您喜欢的商品</p>')
        }
    },
    showErrPage:function(){
         this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
    },
    loadCarts:function(){
        var _this = this;
        api.getCarts({
            success:function(data){
                // console.log(data);
                // if(data.cartList.length > 0){
                //     var html = _util.render(tpl,data);
                //     _this.$cartBox.html(html)
                // }else{
                //     _this.$cartBox.html('<p class="empty-message">请添加您喜欢的商品</p>')
                // }
                _this.renderCarts(data);
            },
            error:function(err){
               // _this.$cartBox.html('<p class="empty-message">请求出错了,请稍后再试</p>')
               _this.showErrPage()
            }
        })
    }
}
    

$(function(){
    page.init();
})
