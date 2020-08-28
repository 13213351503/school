import api from 'api'
import { GET_ADS,GET_FLOORS } from '../store/types.js'
export default {
	
	async [GET_ADS]({commit}){
		const result = await api.getHomeAds()
		if(result.data.code == 0){
			commit(GET_ADS,result.data.data)
		}
	},
	async [GET_FLOORS]({commit}){
		const result = await api.getHomeFloors()
		if(result.data.code == 0){
			commit(GET_FLOORS,{homeFloors:result.data.data})
		}
	},
}