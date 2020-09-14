<template>
	<div id="TobeDelivered">
		<van-nav-bar
			title="待发货"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'TobeDelivered',
		methods:{
			
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}
	}
</script>

<style scoped lang="less">
	#TobeDelivered{
		
	}
</style>
