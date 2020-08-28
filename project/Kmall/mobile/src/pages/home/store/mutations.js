import { GET_ADS,GET_FLOORS } from '../store/types.js'

export default {
	
	[GET_ADS]:function(state,payload){
		state.homeAds = payload
	},
	[GET_FLOORS](state,payload){
		state.floors = payload.homeFloors
	},
	
}