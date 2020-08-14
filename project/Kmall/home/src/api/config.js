
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
    getProductList:              ['/products/list','get'],

}
