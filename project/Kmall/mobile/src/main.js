import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import css from './assets/css/common.css'
import store from './store/index.js'

new Vue({
	css,
	store,
	render: h => h(App),
}).$mount('#app')
