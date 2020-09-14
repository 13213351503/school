import Vue from 'vue'
import App from './App.vue'




Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
//加载全局css样式
import './assets/css/common.css'
import router from './router/index.js'
//全局加载vant组件
import './plugins/vant/index.js';


import store from './store/index.js'

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
