//目标，导出一个对象：对象的属性名就是方法名，值就是方法

import { SERVER,API_CONFIG } from './config.js';
import axios from 'axios';
import { removeUsername } from 'util/index.js';


const getApiConfig = (API_CONFIG)=>{
	const apiObj = {};
	for(let key in API_CONFIG){
		apiObj[key] = (data)=>{
			let url = SERVER + API_CONFIG[key][0] || '/';
			let method = API_CONFIG[key][1] || 'get';
			//发送请求到后台
			return request(url,method,data)
		}
	}

	return apiObj;
}


const request = (url,method,data)=>{
	return new Promise((resolve,reject)=>{
		const options = {
			method:method,
			url:url,
			data:data,
			withCredentials:true
		}
		axios(options)
		.then(result=>{
			// console.log(result)
			//为了解决后台session过期或者通过某种方式主动清除后台session
			//需要重新登录，前台用户状态要和后台保持统一
			if(result.data.code == 10){
				//1.清除前台用户状态
				removeUsername()
				//2.返回登录页面
				window.location.href = '/login';
				reject('获取数据失败,没有权限')
			}
			resolve(result)
		})
		.catch(err=>{
			reject(err)
		})
	})
}

export default getApiConfig(API_CONFIG);