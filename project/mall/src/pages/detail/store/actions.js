

import api from 'api/index.js'
import { GET_PRODUCTS_DETAIL } from './types.js'

export default {
	async [GET_PRODUCTS_DETAIL]({commit},id){
		const result = await api.getProductsDetail({
			id:id,
		})
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCTS_DETAIL,result.data.data)
		}
	},
}