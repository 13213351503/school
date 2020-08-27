import { ADD_TODO,DEL_TODO,SELECT_CHECHED,SELECT_DEL_CHECK } from '../store/types.js'

export default {
	[ADD_TODO]:function(store,todo){
		store.commit(ADD_TODO,todo)
	},
	[DEL_TODO]:function(store,index){
		store.commit(DEL_TODO,index)
	},
	[SELECT_CHECHED]:function(store,value){
		store.commit(SELECT_CHECHED,value)
	},
	[SELECT_DEL_CHECK]:function(store){
		store.commit(SELECT_DEL_CHECK)
	}
}