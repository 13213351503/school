<template>
	<div id="Search">
		<div>
			<i class="back-icon" @click='goBack'><van-icon name="arrow-left" /></i>
			<van-search class="van-search"  placeholder="请输入搜索关键词" />
		</div>
		<div class="recent-search">
			<span class="title">最近搜索</span>
			<span class="clear">清除</span>
		</div>
		<div class="history-search">
			<span>111</span>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name:'Search',
		methods:{
			goBack(){
				this.$router.replace('/')
			}
		}
	}
</script>

<style scoped lang="less">
	#Search{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		.back-icon{
			position: absolute;
			top: .53125rem;
			font-size: .5625rem;
			color: #1890ff;
		}
		
		.van-search{
			margin-left: .46875rem;
			align-items: center;
			box-sizing: border-box;
			padding: .3125rem .375rem;
		}
		.recent-search{
			display: flex;
			padding: .3125rem .3125rem 0;
			justify-content: space-between;

			.title{
				font-size: .375rem
				
			}
			.clear{
				font-size: .375rem;
				color: #1890ff;
				
			}
		}
		.history-search{
			padding: .15625rem .3125rem;
			display: flex;
			flex-wrap: wrap;
			span{
				display: inline-block;
				margin-right: .3125rem;
				margin-top: .3125rem;
				padding: .0625rem .15625rem;
				background-color: #f2f2f2;
				font-size: .4375rem;
				color: rgba(0,0,0,.45);
			}
		}
		
	}
</style>
