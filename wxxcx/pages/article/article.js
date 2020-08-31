// pages/article/article.js
var {articles} = require('../../db/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //页面加载完毕发送请求,获取数据
        //setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
        this.setData({articles:articles},function(){

        })

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    articleDetailTap:function(ev){
        var detailId = ev.currentTarget.dataset.detail
        // console.log(detailId)
        wx.navigateTo({
          url: '/pages/article/article-detail/article-detail?detailId='+ detailId,
        })
    }
})