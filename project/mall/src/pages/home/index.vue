<template>
	<div id="Home">
		<Search />
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<van-col span="24">
					<img v-lazy="image" />
				</van-col>
			</van-swipe-item>
		</van-swipe>
		<van-grid :border="false" :column-num="5" :gutter="10" >
			<van-grid-item v-for="(item, index) in items" :key="index" text="文字" />
				<img src="item" />
			</van-grid-item>	
			<!-- <van-grid-item v-for="(image, index) in images" :key="index" icon="image" text="文字" /> -->
		</van-grid>
	</div>
</template>

<script>
	import Search from 'components/search/index.vue'
	export default {
		name:'Home',
		data() {
			return {
				images: [
					'https://api.mall.kuazhu.com/ad-images/1599184940642.jpg',
					'https://api.mall.kuazhu.com/ad-images/1599184962033.jpg',
					'https://api.mall.kuazhu.com/ad-images/1599184975302.jpg',
					'https://api.mall.kuazhu.com/ad-images/1599184987338.jpg',
				],
				items:[
					"https://api.mall.kuazhu.com/category-icons/1595243404358.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243379743.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243323048.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243298132.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243270185.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243232631.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243206088.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595243130830.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1595244144843.jpg", 
					"https://api.mall.kuazhu.com/category-icons/1587973628877.png", 
				]
			};
		},
		components: {
			Search
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
		.van-swipe__indicators{
			position: absolute;
			bottom: 20px;
			left: 50%;
		};
		
		.van-grid-item__content{
			border: 1px solid #fff;
			border-radius: 50%;
			img{
				width: 100%;
				height: 100%;
			}
		};
		.van-grid-item__text{
			display: block;
		}
		
		
	}
</style>
