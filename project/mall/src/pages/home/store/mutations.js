import { GET_LIST,GET_PRODUCT } from '../store/types.js'

export default {
	[GET_LIST]:function(state,payload){
		// console.log(state)
		state.homeList = payload
	},
	
	[GET_PRODUCT]:function(state,floors){
		console.log(state,floors)
		state.products = floors
	},
	
}