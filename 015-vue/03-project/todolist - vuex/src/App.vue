<template>
	<div id="App">
		<Header />
		<List />
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
				
			}
		},
		methods:{
			
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
