import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//加载全局css样式
import './assets/css/common.css'
import router from './router/index.js'
//全局加载vant组件
import vant from './plugins/vant/index.js'

new Vue({
	vant,
	router,
	render: h => h(App),
}).$mount('#app')
