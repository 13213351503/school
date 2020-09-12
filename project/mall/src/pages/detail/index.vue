<template>
	<div id="Detail">
		<van-nav-bar
			title="商品详情"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
		<div class="detailItem">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(category,index) in detailItem.images" :key="''+index">
					<img v-lazy="category" />
				</van-swipe-item>
			</van-swipe>
			
			<div class="content">
				<div class="product-content">
					<div class="content-title">{{detailItem.description}}</div>
					<div class="content-desc">{{detailItem.name}}</div>
					<div class="content-price">￥{{detailItem.price}}</div>
				</div>
			</div>
			
			<div class="detail">
				<div class="detail-grop">
					<div class="detail-title">查看商品详情</div>
					<i class="detail-icon" @click='handleShow'><van-icon name="arrow" /></i>
				</div>
				<div class="product-detail" >
					<div><img :src="detailItem.mainImage"></img></div>
				</div>
			</div>
			
			<van-goods-action>
				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
				<van-goods-action-button
					type="danger"
					text="立即购买"
					@click="onClickButton"
				/>
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	import { GET_PRODUCTS_DETAIL } from './store/types.js'
	import { mapGetters } from 'vuex'
	import { Toast } from '../../plugins/vant/index.js';
	export default {
		name:'Detail',
		// data(){
		// 	isDetail:false
		// },
		
		mounted(){
			var id = this.$route.query.id;
			// console.log(id);
			this.$store.dispatch(GET_PRODUCTS_DETAIL,id)
		},
		methods: {
			onClickLeft() {
				window.history.go(-1)
			},
			onClickIcon() {
				Toast('点击图标');
			},
			onClickButton() {
				Toast('点击按钮');
			},
			handleShow(){
				this.isDetail = !this.isDetail;
				if(this.isDetail){
					this.isDetail=false
				}
			}
		},
		computed: {
			...mapGetters([
				'detailItem',
			])
		}
	}
</script>

<style scoped lang="less">
	#Detail{
		.detailItem{
			.van-swipe{
				margin: 0 auto;
				position: relative;
				overflow: hidden;
				list-style: none;
				padding: 0;
				.van-swipe__track{
					position: relative;
					width: 100%;
					height: 100%;
					z-index: 1;
					.van-swipe-item{
						text-align: center;
						img{
							width: 5rem;
							height: 5rem;
						}
					}
				}
			}
			.content{
				background-color: #fff;
				.product-content{
					box-sizing: border-box;
					width: 100%;
					padding: .3125rem .5rem;
					overflow: hidden;
					color: #323233;
					font-size: .4375rem;
					line-height: .75rem;
					background-color: #fff;
					.content-title{
						font-size: .5rem;
						overflow: hidden;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
					.content-desc{
						margin-top: .3125rem;
						color: #ccc;
						display: -webkit-box;
						overflow: hidden;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
					.content-price{
						margin-top: .3125rem;
						color: #f44;
					}
				}
			}
			
			.detail{
				position: relative;
				margin: .46875rem 0;
				.detail-grop{
					position: relative;
					display: flex;
					box-sizing: border-box;
					width: 100%;
					padding: .3125rem .5rem;
					overflow: hidden;
					color: #323233;
					font-size: .4375rem;
					line-height: .75rem;
					background-color: #fff;
					.detail-title{
						color: #323233;
						font-size: .4375rem;
						line-height: .75rem;
					}
					.detail-icon {
						margin-right: .15625rem;
						color: #969799;
						min-width: 1em;
						height: .75rem;
						font-size: .5rem;
						line-height: .75rem;
						position: relative;
						top: 0.16rem;
						left: 5.7rem;
						
					}
				}
				.product-detail{
					margin-bottom: 1.5625rem;
					font-size: .375rem;
					img{
						background-size: contain;
						width: 100%;
						height: auto;
						margin: 0 auto;
						display: block;
					}

				}
			}
		}
	}
</style>
