import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import home from 'pages/home/store/index.js'


export default new Vuex.Store({
	modules:{
		home:home
	}
})