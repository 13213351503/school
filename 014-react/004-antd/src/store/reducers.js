const defaultState = {
			list:['包子','油膜','胡辣汤'],
			task:''
		}


export default (state=defaultState,action)=>{
	console.log(state)
	console.log(action)


	return state
}