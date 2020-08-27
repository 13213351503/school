<template>
	<div id="list">
		<Item 
			v-for='(todo,index) in this.$store.state.tasks'
			:key="''+index"
			:todo='todo'
			:index='index'
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
		}
	}
</script>

<style scoped>
	
</style>
