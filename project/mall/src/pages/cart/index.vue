<template>
	<div id="Cart">
		<div>
			<van-nav-bar
				title="购物车"
			/>
		</div>
		<div class="empty">
			<div class="empty-img">
				<p class="err-empty-description">暂无数据</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Cart',
		
	}
</script>

<style scoped lang="less">
	#Cart{
		.empty{
			text-align: center;
			padding: 3.125rem 0;
			background-color: #fff;
			.err-empty-description{
				color: rgba(0,0,0,.45);
			}
		}
	}
</style>

