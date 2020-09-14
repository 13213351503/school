<template>
	<div id="Delivered">
		<van-nav-bar
			title="已发货"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'Cart',
		methods:{
			
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}
	}
</script>

<style scoped lang="less">
	#Cart{
		
	}
</style>
