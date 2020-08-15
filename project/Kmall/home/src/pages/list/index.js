

require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('pages/common/footer/index.js');
require('./index.css');

var _util = require('util/index.js');
var api = require('api/index.js');
var tpl = require('./index.tpl');
var pagination = require('util/pagination/index.js');



var page = {
  productsListParams:{
    category:_util.getParamsFromUrl('categoryId'),
    keyword:_util.getParamsFromUrl('keyword'),
    page:_util.getParamsFromUrl('page') || 1,
    orderBy:_util.getParamsFromUrl('orderBy') || 'default',
  },
    init:function(){
      this.paginationBox = $('.pagination-box')
      //1.加载列表页商品数据
      this.loadProductsList();
      //2.绑定事件
      this.bindEvent();
      //3.初始化分页器
      this.initPagination();
    },
    initPagination:function(){
      var _this = this;
      this.paginationBox.pagination();
      this.paginationBox.on('page-change',function(ev,page){
          // console.log(page);
          _this.productsListParams.page = page;
          _this.loadProductsList();
      });

    },
    bindEvent:function(){
      var _this = this;
      $('.sort-item').on('click',function(){
        var $this = $(this);
        //默认排序
        if($(this).hasClass('default')){
          //如果当前就是选中状态则不需要排序
          if($this.hasClass('active')){
            return
          }
          //选中当前状态取消兄弟元素状态
          $this.addClass('active')
          .siblings('.sort-item')
          .removeClass('active')
          //更新排序参数
          _this.productsListParams.orderBy = 'default';
        }
        //价格排序
        else if($(this).hasClass('price')){
          //选中当前状态取消兄弟元素状态
          $this.addClass('active')
          .siblings('.sort-item')
          .removeClass('active')
          //价格按降序排序
          if($this.hasClass('asc')){
            //选中价格升序降序状态
            $this.addClass('desc')
            .removeClass('asc')
            //更新排序参数
          _this.productsListParams.orderBy = 'price_desc';
          }
          //价格按升序排序
          else if($this.hasClass('desc')){
            //选中价格升序降序状态
            $this.addClass('asc')
            .removeClass('desc')
            //更新排序参数
          _this.productsListParams.orderBy = 'price_asc';
          }
        }
        //更新参数重新获取列表数据
        _this.productsListParams.page = 1;
        _this.loadProductsList();
      })
    },
    loadProductsList:function(){
      var _this = this;
      api.getProductList({
        data:_this.productsListParams,
          success:function(products){
              // console.log(data);
              if(products.list.length > 0){
                var html = _util.render(tpl,products)
                $('.product-list-box').html(html)
              }else{
                $('.product-list-box').html('<p class="empty-message">您查看的商品约会去了</p>')
              }
              //构建分页器结构
              _this.paginationBox.pagination('render',{
                current:products.current,
                pageSize:products.pageSize,
                total:products.total,
              });
          }
      })
    }
}
    

$(function(){
    page.init();
})
