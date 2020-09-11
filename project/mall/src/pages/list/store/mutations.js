import { GET_PRODUCTS_LIST } from '../store/types.js'

export default {
	[GET_PRODUCTS_LIST]:function(state,product){
		// console.log(state,product)
		state.products = product.list
	},
	
}