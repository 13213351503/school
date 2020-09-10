import { GET_LIST,GET_PRODUCT,GET_ADS } from '../store/types.js'

export default {
	[GET_LIST]:function(state,payload){
		// console.log(state)
		state.homeList = payload
	},
	
	[GET_PRODUCT]:function(state,floors){
		// console.log(state,floors)
		state.products = floors
	},
	[GET_ADS]:function(state,ads){
		// console.log(state,ads)
		state.ads = ads
	},
	
}