<template>
	<div id="App">
		<Header :addTodo='addTodo'/>
		<List :tasks='tasks' :delTodo='delTodo'/>
		<Footer :tasks='tasks' :selectCheck='selectCheck' :selectDelCheck='selectDelCheck'/>
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
			},
			delTodo:function(index){
				this.tasks.splice(index,1)
			},
			selectCheck:function(value){	
				this.tasks.forEach((item)=>{
					item.check = value
				})
			},
			selectDelCheck:function(){
				this.tasks = this.tasks.filter((item)=>{
					item.check != true
				})
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
