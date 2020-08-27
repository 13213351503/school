import { ADD_TODO,DEL_TODO,SELECT_CHECHED,SELECT_DEL_CHECK } from '../store/types.js'

export default {
	[ADD_TODO]:function(state,todo){
		state.tasks.unshift(todo)
	},
	[DEL_TODO]:function(state,index){
		state.tasks.splice(index,1)
	},
	[SELECT_CHECHED]:function(state,value){
		state.tasks.forEach((item)=>{
			item.check = value
		})
	},
	[SELECT_DEL_CHECK]:function(state){
		state.tasks = state.tasks.filter((item)=>{
			item.check != true
		})
	},
	
}