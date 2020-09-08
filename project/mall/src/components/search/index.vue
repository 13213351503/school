<template>
	<div id="Search">
		<van-search  v-model="value" placeholder="请输入搜索关键词" />
	</div>
</template>

<script>
	
	export default {
		name:'Search',
		data() {
			return {
				active: 0,
				value: '',
			};
		},
	}
</script>

<style scoped lang="less">
	
</style>