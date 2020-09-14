<template>
	<div id="Allorders">
		<van-nav-bar
			title="所有订单"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'Allorders',
		methods:{
			
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}
	}
</script>

<style scoped lang="less">
	#Allorders{
		
	}
</style>
