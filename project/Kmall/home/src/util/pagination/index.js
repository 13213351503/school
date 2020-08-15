require('./index.css')
var tpl = require('./index.tpl')
var _util = require('util/index.js')


;(function($){
    function Pagination($elem){
        this.$elem = $elem;
        this.bindEvent();
    }
    
    Pagination.prototype = {
        constructor:Pagination,
        bindEvent:function(){
            var _this = this;
            this.$elem.on('click','.page-item',function(){
                // console.log(this);
                var $this = $(this);
                // 当前页码是disabled或者active时不发送请求
                if($this.hasClass('disabled') || $this.hasClass('active')){
                    return
                };
                var page = $this.data('value');
                // console.log(page);
                _this.$elem.trigger('page-change',page);
            })
        },
        render:function(options){
            // console.log(options)
            // 1.根据参数计算总页码
            var pages = Math.ceil(options.total / options.pageSize);
            // console.log(pages);
            // 2.生成页码数据
            var pageArray = [];
            // 3.根据当前页计算上一页和下一页
            var prve = options.current -1;
            var next = options.current +1;
            //上一页
            pageArray.push({
                name:'上一页',
                value:prve,
                disabled:prve > 0 ? false : true,
            })

            //计算中间页
            var start = (options.current - options.range) <= 0 ? 1 : options.current - options.range;
            var end = (options.current + options.range) > pages ? pages : options.current + options.range;
            for(var i = start;i<=end;i++){
                pageArray.push({
                    name:i,
                    value:i,
                    active: options.current == i ? true : false,
                })
            }
            
            //下一页
            pageArray.push({
                name:'下一页',
                value:next,
                disabled:next > pages ? true : false,
            })
            // console.log(pageArray);
            // 根据页码数构建分页器
            var html = _util.render(tpl,{
                pageArray:pageArray,
                current:options.current,
                pages:pages,  
            })
            $('.pagination-box').html(html)
        }
    }
    Pagination.DEFAULT = {
        range:3,
    }
    $.fn.extend({
        pagination:function(fn,options){
            // console.log(this);  //this 这里是一个jquery对象
            return this.each(function(){
                // console.log(this);  //这里的this 是每一个dom节点
                var $this = $(this);
                var pagination = $this.data('pagination');
                // console.log(pagination);
                //单例模式
                if(!pagination){
                    var pagination = new Pagination($this);
                    $this.data('pagination',pagination)
                    // console.log(pagination);
                }
                options = $.extend({},Pagination.DEFAULT,options)
                if(typeof pagination[fn] == 'function'){
                    pagination[fn](options);
                }
            })
        }
    })
})(jQuery);