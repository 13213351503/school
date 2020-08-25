<template>
	<div id="footer">
		<input type="checkbox">1/2
		<button>选中删除</button>
	</div>
</template>

<script>
	export default {
		name:'Footer'
	}
</script>

<style scoped>
	#footer{
		width: 500px;
		margin: 0 auto;
	}
	#footer button{
		float: right;
		margin-top: 3px;
		margin-right: -7px;
	}
</style>
