<template>
	<div id="List">
		<van-sticky>
			<!-- <i class="back-icon" @click='goBack'><van-icon name="arrow-left" /></i> -->
			<Search  />
		</van-sticky>
		
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
		>
			<van-cell />
			<div class="card" v-for="(product,index) in this.$store.state.list.products" :key="''+index">
				<div class="card-content" >
					<a class="card-img" @click="handleDetail(product._id)"><img :src="product.mainImage"></a>
					<div class="card-contented">
						<div class="content-title">{{product.name}}</div>
						<div class="content-detail">{{product.name}}</div>
						<div class="content-price">￥ {{product.price}}</div>
					</div>
				</div>
				<div class="card-cart"><van-icon name="cart-o" color="#52c41a" size=".75rem" /></div>
			</div>
		</van-list>
	</div>
</template>

<script>
	import { GET_PRODUCTS_LIST } from './store/types.js'
	import Search from 'components/search/index.vue'
	export default {
		name:'List',
		data(){
			return{
				id:this.$route.query.id,
				list: [],
				loading: false,
				finished: false,
			}
		},
		mounted(){
			// console.log(id)
			this.$store.dispatch(GET_PRODUCTS_LIST,this.id)
		},
		methods:{
			goBack(){
				this.$router.replace('/')
			},
			onLoad() {
				// 异步更新数据
				// setTimeout 仅做示例，真实场景中一般为 ajax 请求
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}

					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			},
			handleDetail(id){
				this.$router.push({
					path :'/detail',
					query:{
						id:id
					},
				})
			}
		},
		components: {
			Search
		},
	}
</script>

<style scoped lang="less">
	#List{
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
		// .van-search{
		// 	margin-left: .46875rem;
		// 	box-sizing: border-box;
		// }
	}
	.card{
		margin-top: .25rem;
		position: relative;
		box-sizing: border-box;
		padding: .25rem .5rem;
		color: #323233;
		font-size: .375rem;
		background-color: #fafafa;
		.card-content{
			display: flex;
			.card-img{
				position: relative;
				flex: none;
				width: 2.8125rem;
				height: 2.8125rem;
				margin-right: .25rem;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.card-contented{
				justify-content: center;
				min-width: 0;
				min-height: 2.8125rem;
				.content-title{
					max-height: 1rem;
					font-weight: 500;
					line-height: .5rem;
					display: -webkit-box;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.content-detail{
					max-height: .625rem;
					color: #7d7e80;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					word-break: break-all;
				}
				.content-price{
					display: inline-block;
					color: #f44;
					font-weight: 500;
				}
			}
		}
		.card-cart{
			flex: none;
			text-align: right;
		}
	}
	
	
</style>
