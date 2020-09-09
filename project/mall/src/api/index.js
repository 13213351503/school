//目标，导出一个对象：对象的属性名就是方法名，值就是方法


import { API_CONFIG } from './config.js'
import axios from 'axios'

const getApiObj = (API_CONFIG)=>{
	const apiObj = {}
	for(let key in API_CONFIG){
		apiObj[key] = (data)=>{
			let url = API_CONFIG[key][0] || '/'
			let method = API_CONFIG[key][1] || 'get'
			//发送请求
			return request(url,method,data)
		}
	}
 
	return apiObj
}
const request = (url,method,data)=>{
	return new Promise((resolve,reject)=>{
		const options = {
			method:method,
			url:url,
			withCredentials:true
		}
		//携带参数
		switch(method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				options.params = data
				break
			default :
				options.data = data
		}
		axios(options)
		.then(result=>{
			if(result.data.code == 10){
				//应该前台返回登录页面
				//2.返回登录页面
				window.location.href = '/login'
				reject('请求失败,没有权限')
			}
			resolve(result)
		})
		.catch(err=>{
			reject(err)
		})
	})
}

export default getApiObj(API_CONFIG)