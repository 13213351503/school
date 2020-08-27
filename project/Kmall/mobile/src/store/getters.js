export default {
	total:function(state){
		return state.tasks.length
	},
	totalChecked:function(state){
		return state.tasks.reduce((total,item)=>{
			if(item.check){
				total = total + 1
			}
			return total
		},0)
	},
	allChecked:function(state,getters){
		return (getters.total == getters.totalChecked) && (getters.total != 0)
	}
}