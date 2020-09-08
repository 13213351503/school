<template>
	<div id="App">
		<router-view></router-view>
		<Tabbar />
	</div>
</template>

<script>
	import Tabbar from './components/tabbar/index.vue'

	export default {
		name: 'App',
		components: {
			Tabbar
		}
	}
</script>

<style>
#app {
  
}
</style>
