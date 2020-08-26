<template>
	<div id="list">
		<Item 
			v-for='(todo,index) in tasks'
			:key="''+index"
			:todo='todo'
			:index='index'
			:delTodo='delTodo'
		/>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
		name:'List',
		components:{
			Item,
		},
		props:{
			tasks:Array,
			delTodo:Function,
		}
	}
</script>

<style scoped>
	
</style>
