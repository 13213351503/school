// 目标:导出一个对象,对象的属性是方法名,值为对应方法
import { SERVER,API_CONFIG } from './config.js';// 引入config组件
import axios from 'axios';// 引入ajax组件
import { removeLocalStorage } from 'util';// 引入清除cookie组件

const getApiConfig = (API_CONFIG)=>{
	// 定义空对象,存ajax相关配置
	const apiObj = {};
	// 把ajax相关配置,遍历到空对象
	for(let key in API_CONFIG){
		apiObj[key] = (data)=>{
			let url = SERVER + API_CONFIG[key][0] || '/';
			let method = API_CONFIG[key][1] || 'get';
			//发送请求到后台
			return request(url,method,data);
		}
	}
	return apiObj;
}

// 定义发送ajax的方法
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
			//为了解决后台session过期获取通过某种方式主动清除后台session
			//需要重新登录前台用户状态要和后台保持统一
			if(result.data.code == 10){
				//1.清除前台用户状态
				removeLocalStorage()
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



export default getApiConfig(API_CONFIG)