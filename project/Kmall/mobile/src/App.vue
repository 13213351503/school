<template>
	<div id="App">
		<Home />
	</div>
  
</template>

<script>
	import Home from 'pages/home/index.vue'
	
	export default {
		name: 'App',
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		components: {
			Home,
		}
	}
</script>

<style scoped>
	#App{
		width: 500px;
		height: 500px;
		margin: 100px auto;
	}
</style>
