
export const SERVER = 'http://127.0.0.1:3000';
export const UPLOAD_IMAGES = SERVER + '/products/images';
export const UPLOAD_DETAIL_IMAGES = SERVER + '/products/detailImages';
export const API_CONFIG = {
	login: 						['/sessions/users','post'],
	logout: 					['/sessions/users','delete'],
	getCounts: 					['/counts','get'],
	getUserList: 				['/users/list','get'],
	addCategories: 				['/categories','post'],
	getLevelCategories: 		['/categories/levelCategories','get'],
	getCategoriesList: 			['/categories/list','get'],
	updateCategoriesName: 		['/categories/name','put'],
	updateMobileName: 			['/categories/mobileName','put'],
	updateOrderName: 			['/categories/order','put'],
	updateIsShow: 				['/categories/isShow','put'],
}
