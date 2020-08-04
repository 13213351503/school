//目标，导出一个对象：对象的属性名就是方法名，值就是方法

import { SERVER,API_CONFIG } from './config.js'
const getApiconfig = ()=>{
	const apiObj = {};
	for(let key in API_CONFIG){
		apiObj[key] = (data)=>{

		}
	} 

	return apiObj
}

export default getApiconfig(API_CONFIG);