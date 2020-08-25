<template>
	<div id="App">
		<Header :addTodo='addTodo'/>
		<List :tasks='tasks'/>
		<Footer />
	</div>
  
</template>

<script>
	import Header from './pages/Header.vue'
	import List from './pages/List.vue'
	import Footer from './pages/Footer.vue'
	export default {
		name: 'App',
		data(){
			return {
				tasks:[
					{
						task:'吃饭',
						check:false,
					},
					{
						task:'睡觉',
						check:false,
					}
				]
			}
		},
		methods:{
			addTodo:function(todo){
				this.tasks.unshift(todo)	//将新增添加到第一位
			}
		},
		components: {
			Header,
			List,
			Footer
		}
	}
</script>

<style scoped>
	
</style>
