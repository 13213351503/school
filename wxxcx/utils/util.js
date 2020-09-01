
function getMovieList(url,success){
    wx.request({
      url:url,
      success:function (res) {
        var data = formatMovieList(res.data.subjects)
        success(data)
      }
    })
}
function formatMovieList(data){
  return data.map(function(item){
    return {
      title:item.title,
      mainImage:item.images.large,
      average:item.rating.average,
      star:item.rating.stars
    }
  })
}

module.exports = {
  getMovieList,
}
