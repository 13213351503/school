//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import Center from 'pages/center'
import Sort from 'pages/sort'
import Search from 'pages/search'
import List from 'pages/list'
import Detail from 'pages/detail'

//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
	routes:[
		{
			path:"/home",
			component:Home,
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path:"/sort",
			component:Sort,
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path:"/cart",
			component:Cart,
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path:"/center",
			component:Center,
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path:"/search",
			component:Search,
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path:"/list",
			component:List,
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path:"/detail",
			component:Detail,
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path:"/",
			redirect:"/home",
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		
	]
})