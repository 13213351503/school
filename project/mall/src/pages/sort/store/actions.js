import api from 'api/index.js';
import { GET_LIST,GET_CHILDS } from './types.js';

export default {
	
	
	async [GET_LIST]({commit}){
		// console.log(payload)
		const result = await api.getCategories()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_LIST,result.data.data)
		}
	},
	
	async [GET_CHILDS]({commit},payload){
		const result = await api.getChildCategories()
		console.log(result,payload)
		// console.log(payload)
		if(result.data.code == 0){
			commit(GET_CHILDS,result.data.data,payload)
		}
	},
	
	
	
}