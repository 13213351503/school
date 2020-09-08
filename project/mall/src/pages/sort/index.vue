<template>
	<div id="Sort">
		<Search />
		
	</div>
</template>

<script>
	import Search from 'components/search/index.vue'
	export default {
		name:'Sort',
		components: {
			Search
		}
		
	}
</script>

<style scoped lang="less">
	#Sort{
		p{
			color: #008000;
		}
	}
</style>
