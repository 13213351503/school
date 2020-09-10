<template>
	<div id="Home">
		<van-sticky>
			<Search />
		</van-sticky>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in this.$store.state.home.ads" :key="index">
				<van-col span="24">
					<img v-lazy="image.image" />
				</van-col>
			</van-swipe-item>
		</van-swipe>
		<div id="item">
			<div 
				id="item-list" 
				v-for="(item,index) in this.$store.state.home.homeList"
				:key="''+index"
				@click="handleProducts"
			>
				<img :src="item.icon"></img>
				<div id="item-content">{{item.name}}</div>
			</div>
		</div>
		
		<ul id="product">
			<li 
				class="product-floors"
				v-for="(item,index) in this.$store.state.home.products"
				:key="''+index"
			>
				<div class="product-title">{{item.title}}</div>
				<ul class="product-list">
					<li 
					
						class="product-item"
						v-for="(product,productindex) in item.products"
						:key="''+productindex"
					>
						<div class="product-header">
							<a href="#">
								<img :src="product.mainImage"></img>
							</a>
							<div class="product-name">
								{{product.name}}
							</div>
							<div class="produce-pi">
								<div class="product-price">￥{{product.price}}</div>
								<van-icon name="cart-o" color="#52c41a" size=".75rem" />
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	// import { mapGetters } from 'vuex'
	import { GET_LIST, GET_PRODUCT, GET_ADS,GET_PRODUCTS_DETAIL } from './store/types.js'
	import Search from 'components/search/index.vue'
	
	export default {
		name:'Home',
		
		mounted(){
			//加载轮播图
			this.$store.dispatch(GET_ADS);
			//加载首页列表
			this.$store.dispatch(GET_LIST);
			//加载楼层
			this.$store.dispatch(GET_PRODUCT)
			
		},
		components: {
			Search
		},
		methods:{
			handleProducts(){
				this.$store.dispatch(GET_PRODUCTS_DETAIL)
			}
		}
		
	}
</script>

<style scoped lang="less">
	#Home{
		.van-swipe{
			position: relative;
		}
		.van-swipe-item{
			position: relative;
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 5rem;
			}
		};
		#item{
			display: flex;
			flex-wrap:wrap;
			#item-list{
				box-sizing: border-box;
				width: 20%;
				overflow: hidden;
				flex-direction:column;
				img{
					margin-top: 10px;
					width: 1.5rem;
					height: 1.5rem;
					display: inline-block;
					border-radius: 50%;
					justify-content:center;
					margin-left: 12px;
				}
				#item-content{
					margin-top: .1rem;
					color: #7d7e80;
					font-size: .375rem;
					text-align: center;
				}
			}
		}
		
		#product{
			display: flex;
			flex-wrap:wrap;
			flex-direction: column;
			padding: 0 .3125rem;
			margin-bottom: 1.25rem;
			.product-floors{
				margin-top: 20px;
			}
			.product-title{
				margin-bottom: .15625rem;
				line-height: .9375rem;
				font-size: .5625rem;
				text-align: center;
			}
			.product-list{
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				.product-item{
					box-sizing: border-box;
					width: 4.53125rem;
					height: 6.875rem;
					background-color: #fff;
					margin-bottom: .3125rem;
					padding: .15625rem;
					.product-header{
						display: flex;
						flex-direction: column;
						justify-content: center;
						img{
							display: block;
							width: 100%;
							height: 100%;
						}
						
						.product-name{
							height: 1.25rem;
							max-height: 1.25rem;
							line-height: .625rem;
							font-size: .4375rem;
							overflow: hidden;
							text-overflow: ellipsis;
							word-break: break-all;
							vertical-align: baseline;
							font-weight: 400;
						}
						.produce-pi{
							display: flex;
							justify-content:space-between;
							van-icon{
								float: right;
							}
							.product-price{
								line-height: .625rem;
								display: inline-block;
								color: #f44;
								font-weight: 500;
								font-size: 0.4375rem;
							}
						}
					}
				}
			}
		}
		
		
		
	}
</style>
