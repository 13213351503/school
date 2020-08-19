
export const API_CONFIG = {
	//登陆注册
    login: 						['/sessions/users','post'],
	getUsername: 				['/sessions/username','get'],
	logout: 					['sessions/users','delete'],
	register: 					['/users','post'],
    //个人中心
    checkUsername:              ['/users/checkUsername','get'],
	getUserInfo: 				['/sessions/users','get'],
	updatePassword: 			['/users','put'],
    //首页加载数据
    getHomeCategories:          ['/categories/homeCategories','get'],
    getHomeAds:                 ['/ads/positionAds','get'],
    getHomeFloors:              ['/floors','get'],
    //列表页
    getProductList:             ['/products/list','get'],
    //详情页
    getProductDetail:           ['/products/detail','get'],
    //购物车 
    addCarts:                   ['/carts','post'],
    getCartsCount:              ['/carts/count','get'],
    getCarts:                   ['/carts','get'],
    updateCartsChoice:          ['/carts/choices','put'],
    deleteCarts:                ['/carts','delete'],
    updateCartsCount:           ['/carts/counts','put'],
    //订单确认页面
    getOrderList:               ['/orders/products','get'],
    addShippings:               ['/shippings','post'],
    getShippingsList:           ['/shippings/list','get'],
    deleteShippings:            ['/shippings','delete'],
    getShippingsDetail:         ['/shippings/detail','get'],
    upadteShippingsDetail:      ['/shippings','put'],

}
