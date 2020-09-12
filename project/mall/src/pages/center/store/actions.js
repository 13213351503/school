

import api from 'api/index.js'
import { GET_CAPTCHA } from './types.js'

export default {
	async [GET_CAPTCHA]({commit}){
		const result = await api.getCaptcha({})
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_CAPTCHA,result.data.data)
		}
	},
}