

import api from 'api/index.js'
import { GET_PRODUCTS_DETAIL } from './types.js'

export default {
	async [GET_PRODUCTS_DETAIL]({commit},id){
		const result = await api.getProductsDetail({
			id:id,
		})
		// console.log(result)
		if(result.data.code == 0){
			var detail = result.data.data
			detail.images = detail.images.split(',')
			// console.log(detail)
			commit(GET_PRODUCTS_DETAIL,detail)
		}
	},
}