// pages/movie/movie-more/movie-more.js
var app = getApp()
var {getMovieList} = require('../../../utils/util.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        requestUrl:'',
        totalCurent:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var type = options.type;
        var _this = this;
        var navigationBarTitle = '';
        //获取请求地址,请求数据
        var baseUrl = app.GLOBALDATA.baseUrl;
        var requestUrl = '';
        if(type == 'inTheaters'){
            requestUrl = baseUrl + '/in_theaters';
            navigationBarTitle = '正在热映';
        };
        if(type == 'comingSoon'){
            requestUrl = baseUrl + '/coming_soon';
            navigationBarTitle = '即将上映';
        };
        if(type == 'top250'){
            requestUrl = baseUrl + '/top250';
            navigationBarTitle = '豆瓣Top250';
        };
        wx.setNavigationBarTitle({
            title: navigationBarTitle
        })
        this.setData({requestUrl:requestUrl})
        wx.showNavigationBarLoading();
        // getMovieList(requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         wx.hideNavigationBarLoading();
        //     })
        // });
        getMovieList(requestUrl,this.handleMovieList)
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var _this = this;
        wx.showNavigationBarLoading();
        // getMovieList(this.data.requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         wx.hideNavigationBarLoading();
        //     })
        // });
        getMovieList(this.data.requestUrl,this.handleMovieList)
    },
    handleMovieList:function(data){
        this.data.totalCurent = this.data.totalCurent + data.length

        this.setData({movies:data},function(){
            wx.hideNavigationBarLoading();
			
        })
    },


    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        wx.showNavigationBarLoading();
        getMovieList(this.data.requestUrl + '?start='+ this.data.totalCurent +'&count=20',this.handleMovieList)
        console.log(this.data.totalCurent)

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})