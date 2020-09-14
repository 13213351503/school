

import api from 'api/index.js'
import { GET_CAPTCHA,GET_LOGIN } from './types.js'

export default {
	async [GET_CAPTCHA]({commit}){
		const result = await api.getCaptcha({})
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_CAPTCHA,result.data.data)
		}
	},
	async [GET_LOGIN]({commit},values){
		
		const username = values.username
		const password = values.password
		const captchaCode = values.captchaCode
		
		const result = await api.getLogin({
			username:username,
			password:password,
			captchaCode:captchaCode
		})
		console.log(result)
		if(result.data.code == 0){
			commit(GET_LOGIN,result.data.data)
		}
	},
}