require('pages/common/footer/index.js');
require('pages/common/nav/index.js');
require('pages/common/search/index.js');
require('./index.css');
require('node_modules/swiper/css/swiper.min.css')
import Swiper from 'swiper'; 

var api = require('api/index.js');
var _util = require('util/index.js');
var categoryTpl = require('./categories.tpl');
var adsTpl = require('./ads.tpl');
var floorsTpl = require('./floors.tpl');


var page = {
    init:function(){
        //加载首页分类数据
        this.loadHomeCategories();
        //集成swiper并加载广告数据
        this.loadSwiper(); 
        //首页加载楼层
        this.loadFloors(); 
    },
    loadHomeCategories:function(){
        api.getHomeCategories({
            success:function(categories){
                // console.log(data);
                var html = _util.render(categoryTpl,{
                    categories:categories,  
                })
                $('.categories').html(html)
            }
        })
    },
    loadSwiper:function(){
        //加载广告
        api.getHomeAds({
            data:{
                position:1,
            },
            success:function(ads){
                // console.log(ads);
                var html = _util.render(adsTpl,{
                    ads:ads,  
                })
                $('.swiper-wrapper').html(html)
                //配置swiper信息
                var mySwiper = new Swiper ('.swiper-container', {
                    autoplay:{          //自动轮播 
                        disableOnInteraction: false,
                    },
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                      clickable :true,  //点击分页器的指示点分页器会控制Swiper切换。
                    },
                    
                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    
                })        
            }
        })
        
    },
    loadFloors:function(){
        api.getHomeFloors({
            success:function(floors){
                console.log(floors);
                var html = _util.render(floorsTpl,{
                    floors:floors,  
                })
                $('.floor-wrap').html(html)
            }
        })
    }
}


$(function(){
    page.init();
})