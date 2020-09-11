

import api from 'api/index.js'
import { GET_LIST,GET_PRODUCT,GET_ADS } from './types.js'

export default {
	async [GET_ADS]({commit}){
		const result = await api.getHomeAds()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_ADS,result.data.data)
		}
	},
	
	async [GET_LIST]({commit}){
		const result = await api.getCategories()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_LIST,result.data.data)
		}
	},
	async [GET_PRODUCT]({commit}){
		const result = await api.getHomeFloors()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCT,result.data.data)
		}
	},
	
}