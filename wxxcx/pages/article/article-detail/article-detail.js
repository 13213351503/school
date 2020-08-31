// pages/article/article-detail/article-detail.js
var {articles} = require('../../../db/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var detailId = options.detailId;
        var article = articles[detailId];
        var isCollected = false;

        //获取文章收藏状态
        var article_collection = wx.getStorageSync('article_collection')
        console.log(article_collection)

        if(article_collection){
            isCollected = !!article_collection
        }
        //如果没有收藏状态，初始化收藏状态
        else{
            /*
                {
                    0:false
                }
            */ 
            var data = {}
            data[detailId] = false
            wx.setStorageSync('article_collection', data)
        }


        // console.log(article)
        this.setData({...article,isCollected})

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
    tapCollection:function(){
        // wx.setStorageSync('key', {name:'hadden'})
        // var value = wx.getStorageSync('key')
        // console.log(value)
        var article_collection = wx.getStorageSync('article_collection')
        console.log(article_collection)
    },
    tapaction:function(){
        var itemList = ['分享给好友','分享到朋友圈','分享到微博']
        wx.showActionSheet({
            itemList: itemList,
            success (res) {
                wx.showToast({
                    title: itemList[res.tapIndex] + '成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail (res) {
                wx.showToast({
                    title: '失败',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
          
    },
    tapMusic:function(){
        var backgroundAudioManager = wx.getBackgroundAudioManager()
        // console.log(this.data.isLoading)
        if(this.data.isLoading){

        }
        else{
            backgroundAudioManager.title = this.data.music.title
            backgroundAudioManager.coverImgUrl = this.data.music.coverImgUrl
            backgroundAudioManager.src = this.data.music.src
        }
    }
})