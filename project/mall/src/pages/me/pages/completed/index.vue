<template>
	<div id="Completed">
		<van-nav-bar
			title="已完成"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'Completed',
		methods:{
			
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}
	}
</script>

<style scoped lang="less">
	#Completed{
		
	}
</style>
