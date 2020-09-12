import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import home from 'pages/home/store/index.js'
import sort from 'pages/sort/store/index.js'
import list from 'pages/list/store/index.js'
import detail from 'pages/detail/store/index.js'
import center from 'pages/center/store/index.js'


export default new Vuex.Store({
	modules:{
		home:home,
		sort:sort,
		list:list,
		detail:detail,
		center:center
	}
})