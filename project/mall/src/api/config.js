
export const API_CONFIG = {
    //首页加载数据
    getHomeAds:                 ['/ads/positionAds','get'],
    getHomeFloors:              ['/floors?limit=10','get'],
    getCategories:              ['/categories/arrayCategories','get'],
    getChildCategories:         ['/categories/childArrayCategories?limit=20&pid=','get'],
    getProductsList:         	['/products/list','get'],
}
