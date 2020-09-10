//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import Center from 'pages/center'
import Sort from 'pages/sort'
import Search from 'pages/search'

//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
	routes:[
		{path:"/home",component:Home},
		{path:"/sort",component:Sort},
		{path:"/cart",component:Cart},
		{path:"/center",component:Center},
		{path:"/search",component:Search},
		{path:"/",redirect:"/home"},
	]
})