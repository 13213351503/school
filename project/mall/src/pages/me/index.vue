<template>
	<div id="Me">
		<div class="header">
			<div class="header-img">
				<img src="https://api.mall.kuazhu.com/avatar/default.jpg">
			</div>
			<span>{{user}}</span>
		</div>
		<div class="links">
			<div class="van-col van-col--6" @click="handleTobePaid">
				<i class="van-icon van-icon-pending-payment"><span>待付款</span></i>
			</div>
			<div class="van-col van-col--6" @click="handleTobedelivered">
				<i class="van-icon van-icon-tosend"><span>待发货</span></i>
			</div>
			<div class="van-col van-col--6" @click="handleDelivered">
				<i class="van-icon van-icon-logistics"><span>已发货</span></i>
			</div>
			<div class="van-col van-col--6" @click="handleCompleted">
				<i class="van-icon van-icon-records"><span>已完成</span></i>
			</div>
		</div>
		<div class="grop">
			<div class="van-cell">
				<i class="van-icon van-icon-records van-cell__left-icon"></i>
				<div class="van-cell__title">全部订单</div>
				<i class="van-icon van-icon-arrow van-cell__right-icon" @click="handleAllorders"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Me',
		data(){
			return {
				user:localStorage.getItem('username')
			}
		},
		mounted(){
			var username = localStorage.getItem('username')
			if(!username){
				this.$router.push({
					path :'/center',
				})
			}
		},
		methods:{
			handleTobePaid(){
				this.$router.push({
					path :'/me/tobepaid',
				})	
			},
			handleTobedelivered(){
				this.$router.push({
					path :'/me/tobedelivered',
				})
			},
			handleDelivered(){
				this.$router.push({
					path :'/me/delivered',
				})
			},
			handleCompleted(){
				this.$router.push({
					path :'/me/completed',
				})
			},
			handleAllorders(){
				this.$router.push({
					path :'/me/allorders',
				})
			},
		},
	}
</script>

<style scoped lang="less">
	html{
		background-color: #fff;
	}
	#Me{
		.header{
			background-color: #52c41a;
			padding: .625rem .15625rem;
			display: flex;
			div{
				width: 1.5625rem;
				height: 1.5625rem;
				border-radius: 50%;
				overflow: hidden;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
				
			}
			span{
				margin-left: .3125rem;
				font-size: .5625rem;
				align-self: center;
				color: #323233;
			}
		}
		.links{
			padding-top: .46875rem;
			padding-bottom: 1.6rem;
			text-align: center;
			background-color: #fff;
			.van-col--6 {
				width: 25%;
			}
			.van-col {
				.van-icon{
					font-size: .75rem;
					span{
						display: block;
						font-size: .35rem;
					}
				}
			}
		}
		.grop{
			
			margin-bottom: .46875rem;
			background-color: #fff;
			.van-cell{
				position: relative;
				box-sizing: border-box;
				width: 100%;
				padding: .3125rem .5rem;
				overflow: hidden;
				color: #323233;
				font-size: .4375rem;
				line-height: .75rem;
				background-color: #fff;
				.van-cell__left-icon{
					min-width: 1em;
					height: .75rem;
					font-size: .5rem;
					line-height: .75rem;
					margin-right: .15625rem;
				}
				.van-cell__title{
					color: #323233;
					font-size: .4375rem;
					line-height: .75rem;
				}
			}
		}
	}
</style>
