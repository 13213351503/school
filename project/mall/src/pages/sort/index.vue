<template>
	<div id="Sort">
		<van-sticky>
			<Search />
		</van-sticky>
		<van-row class='sidebar'>
			<van-col span="6">
				<van-sidebar v-model="activeKey" class='sidebar-left' >
					<van-sidebar-item 
						class='sidebar-item' 
						v-for="(item,index) in this.$store.state.sort.sidebar" 
						:key="''+index" 
						:title='item.name'
						@click='handleContent(item._id)'
					/>
				</van-sidebar>
			</van-col>
			<van-col span="18" class="sidebar-icon" >
				<div class="child-item">
					<img src="">
					<p>全屏手机</p>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	import Search from 'components/search/index.vue'
	import { GET_LIST,GET_CHILDS } from './store/types.js'
	export default {
		name:'Sort',
		mounted(){
			//加载侧边栏
			this.$store.dispatch(GET_LIST);
		},
		components: {
			Search
		},
		data() {
			return {
				activeKey: 0,
			};
		},
		methods:{
			handleContent(id){
				this.$store.dispatch(GET_CHILDS,id);
			}
		}
		
	}
</script>

<style scoped lang="less">
	
	#Sort{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		.sidebar{
			.sidebar-icon{
				width: 33.3%;
				text-align: center;
				.child-item{
					img{
						width: 2rem;
						height: 2rem;
					}
					p{
						font-size: .375rem;
						font-weight: 400;
					}
				}
				
			}
		}
		
	}
</style>
