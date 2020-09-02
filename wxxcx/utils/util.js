
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
      star:getStars(item.rating.stars)
    }
  })
}
function getStars(star){
  var arr = [];
  var num = star.substring(0,1);
  for(var i = 1;i<=5;i++){
    if(i<=num){
      arr.push(1)
    }else{
      arr.push(0)
    }
  };
  return arr;
}

module.exports = {
  getMovieList:getMovieList,
}
