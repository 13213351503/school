import { GET_LIST,GET_CHILDS } from '../store/types.js'

export default {
	[GET_LIST]:function(state,payload){
		// console.log(state)
		state.sidebar = payload
	},
	
	[GET_CHILDS]:function(state,list){
		// console.log(state)
		state.categories = list
	},
}