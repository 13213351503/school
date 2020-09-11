<template>
	<div id="Detail">
		<van-nav-bar
			title="商品详情"
			left-text="返回"
			left-arrow
		/>
		<div  v-for="(category, index) of this.$store.state.detail.detail" :key="index">
			<van-swipe :autoplay="3000">
				<van-swipe-item >
					<img v-lazy="" />
				</van-swipe-item>
			</van-swipe>
			
			<div class="content">
				<div class="product-content">
					<div class="content-title">{{category.description}}</div>
					<div class="content-desc"></div>
					<div class="content-price">{{category.price}}</div>
				</div>
			</div>
			
			<div class="detail">
				<div class="detail-grop">
					<div class="detail-title"></div>
					<i></i>
				</div>
				<div class="product-detail">
					<div><img src=""></img></div>
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
	import { Toast } from '../../plugins/vant/index.js';
	export default {
		name:'Detail',
		mounted(){
			var id = this.$route.query.id;
			// console.log(id);
			this.$store.dispatch(GET_PRODUCTS_DETAIL,id)
		},
		methods: {
			onClickLeft() {
				Toast('返回');
			},
			onClickIcon() {
				Toast('点击图标');
			},
			onClickButton() {
				Toast('点击按钮');
			},
		},
	}
</script>

<style scoped lang="less">
	#Detail{
		
	}
</style>
