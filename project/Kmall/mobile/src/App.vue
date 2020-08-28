<template>
	<div id="App">
		<!-- 路由出口 -->
		<router-view></router-view>
		<Tabbar />
	</div>
  
</template>

<script>
	import Tabbar from './components/tabbar/index.vue'
	export default {
		name: 'App',
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		//注册组件
		components: {
			Tabbar
		}
	}
</script>

<style scoped>
	#App{
		
	}
</style>
