<template>
	<div id="TobePaid">
		<van-nav-bar
			title="待付款"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'TobePaid',
		mounted(){
			var username = localStorage.getItem('username')
			console.log(username)
			// if(!localStorage.getItem('username')){
			// 	this.$router.push({
			// 		path :'/center',
			// 	})
			// }
		},
		methods:{
			
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}	
	}
</script>

<style scoped lang="less">
	#TobePaid{
		
	}
</style>
