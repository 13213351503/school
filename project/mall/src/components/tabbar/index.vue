<template>
	<div id="Tabbar">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="search" to="/sort">分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/center">个人中心</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	
	export default {
		name:'Tabbar',
		data() {
			return {
				active: 0,
			};
		},
	}
</script>

<style scoped lang="less">
	
</style>
