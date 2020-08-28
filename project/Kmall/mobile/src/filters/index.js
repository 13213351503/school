export default {
	formatPrice:function(price=0){
		return '￥' + parseFloat(price).toFixed(2)
	}
}