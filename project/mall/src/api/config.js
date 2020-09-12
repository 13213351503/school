
export const API_CONFIG = {
    //轮播图
    getHomeAds:                 ['/ads/positionAds','get'],
	//首页楼层
    getHomeFloors:              ['/floors?limit=10','get'],
	//分类页侧边导航/首页轮播图下面
    getCategories:              ['/categories/arrayCategories','get'],
	//分类页右侧详情
    getChildCategories:         ['/categories/childArrayCategories','get'],
	//首页商品列表
    getProductsList:         	['/products/list','get'],
	//商品详情页
    getProductsDetail:         	['/products/detail','get'],
	//密码登陆验证码
	getCaptcha:         		['/users/captcha','get'],
	
}
