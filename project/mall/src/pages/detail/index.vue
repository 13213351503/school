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
					<i class="detail-icon" ><van-icon name="arrow" @click="handleshows" /></i>
				</div>
				<div class="product-detail" v-show="shows" >
					<div><img :src="detailItem.mainImage"></img></div>
				</div>
			</div>
			
			<van-goods-action>
				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
				<van-goods-action-button
					@click="onClickButton"
					type="danger"
					text="加入购物车"
				/>
			</van-goods-action>
			<van-sku
				v-model="show"
				:sku="sku"
				:goods="goods"
				:goods-id="goodsId"
				:quota="quota"
				:quota-used="quotaUsed"
				:hide-stock="sku.hide_stock"
			/>
		</div>
	</div>
</template>

<script>
	import { GET_PRODUCTS_DETAIL } from './store/types.js'
	import { mapGetters } from 'vuex'
	import { Toast } from '../../plugins/vant/index.js';
	export default {
		name:'Detail',
		
		data() {
			return {
				show: false,
				shows:false,
				goodsId: '946755',
				quota:0,
				quotaUsed:0,
				sku: {},
				goods: {
					// 默认商品 sku 缩略图
					picture: '',
				},
			};
		},
		mounted(){
			var _this = this
			var id = this.$route.query.id;
			this.$store.dispatch(GET_PRODUCTS_DETAIL,id)
			.then(()=>{
				// console.log(this.detailItem)
				_this.sku = _this.makeSku()
			})
		},
		
		methods: {
			handleshows(){
				if(!this.shows){
					this.shows = true
				}else{
					this.shows = false
				}
			},
			onClickButton() {
				
				this.show = true
			},
			onClickLeft() {
				window.history.go(-1)
			},
			onClickIcon() {
				Toast('点击图标');
			},
			makeSku(){
				// console.log(this.detailItem.attrs[0].value);
				var values = this.detailItem.attrs[0].value; 
				
				var name = [];
				console.log(this.detailItem.price)
				for(var i = 0;i<values.length;i++){
					name.push({
						id:values[i],
						name:values[i]
					})
				}
				
				var sku = {
					tree: [
						{
							k: '', // skuKeyName：规格类目名称
							k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
							v: [
								{
									id: '1', // skuValueId：规格值 id
									name: '', // skuValueName：规格值名称
								},
								{
									id: '2',
									name: '',
								},
								{
									id: '3',
									name: '',
								}
							],
						}
					],
					list: [
						{
							id: 2259, // skuId
							s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
							price: this.detailItem.price, // 价格（单位分）
							stock_num: this.detailItem.stock // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId
							s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
							price: this.detailItem.price, // 价格（单位分）
							stock_num: this.detailItem.stock // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId
							s1: '3', // 规格类目 k_s 为 s1 的对应规格值 id
							price: this.detailItem.price, // 价格（单位分）
							stock_num: this.detailItem.stock // 当前 sku 组合对应的库存
						},
					],
					price: this.detailItem.price, // 默认价格（单位元）
					stock_num: this.detailItem.stock, // 商品总库存
					collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
					none_sku: false, // 是否无规格商品
					hide_stock: false ,// 是否隐藏剩余库存
					mainImage:this.detailItem.mainImage
				};
				sku.tree[0].v = name;
				sku.tree[0].k = this.detailItem.attrs[0].key;
				
				return sku
			},
			
			
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
