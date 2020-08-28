import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//加载全局css样式
import './assets/css/common.css'

//加载全局vant组件
import './plugins/vant/index.js'

import store from './store/index.js'

//引入路由
import router from './router'

//注册全局过滤器
import filters from './filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
