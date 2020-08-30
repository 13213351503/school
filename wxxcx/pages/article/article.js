// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[
            {
                author:'K',
                avatar:'/pages/image/avatar/111.jpg',
                time:'2020-08-30',
                title:'火锅',
                mainImage:'/pages/image/article/u=1412718983,1138680485&fm=26&gp=0.jpg',
                desc:'毛肚,牛肉',
                star:'200',
                view:'999',
            },
            {
                author:'y',
                avatar:'/pages/image/avatar/u=1283079160,971140895&fm=26&gp=0.jpg',
                time:'2020-08-06',
                title:'烧烤',
                mainImage:'/pages/image/article/u=3604995668,4286802266&fm=26&gp=0.jpg',
                desc:'五花肉',
                star:'300',
                view:'899',
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    }
})