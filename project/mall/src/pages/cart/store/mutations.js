import { GET_CAPTCHA} from '../store/types.js'

export default {
	[GET_CAPTCHA]:function(state,captcha){
		// console.log(state,captcha)
		state.captcha = captcha
	},
	
}