<template>
	<div id="Search">
		<div>
			<i class="back-icon" @click='goBack'><van-icon name="arrow-left" /></i>
			<van-search class="van-search"  placeholder="请输入搜索关键词" />
		</div>
		<div class="recent-search">
			<span class="title">最近搜索</span>
			<span class="clear" @click="empty">清除</span>
		</div>
		<div class="history-search" v-for="(item,index) in historyList" :key="index" @click="goSearchDetail(item)">
			<span>111</span>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name:'Search',
		data() {
			return {
				search_val: '', //搜索的内容
				historyList: [] //历史搜索记录，存本地
			}
		},
		mounted() {
			//如果本地存储的数据historyList有值，直接赋值给data中的historyList
			if (JSON.parse(localStorage.getItem("historyList"))) {
				this.historyList = JSON.parse(localStorage.getItem("historyList"));
			}
		},
		methods:{
			goBack(){
				this.$router.replace('/')
			},
			get_search(){
				if(this.search_val == ''){
					this.$toast('请输入搜索内容');
					return false;
				}else{
					// 没有搜索记录，把搜索值push进数组首位，存入本地
					if (!this.historyList.includes(this.search_val)) {
						this.historyList.unshift(this.search_val);
						localStorage.setItem("historyList", JSON.stringify(this.historyList));
					}else{
						//有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
						let i =this.historyList.indexOf(this.search_val);
						this.historyList.splice(i,1)
						this.historyList.unshift(this.search_val);
						localStorage.setItem("historyList", JSON.stringify(this.historyList));
					}
				}
				//跳转到搜索结果页
				this.$router.push({
					path: "/list", 
					query: { 
						search_val: this.search_val,
					},
				});
			},
			//点击历史搜索，跳转搜索结果页
			goSearchDetail(title){
				this.$router.push({
					path: "/list", 
					query: { 
						search_val: title,
					},
				});
			},
			
			//清空历史搜索记录
			empty(){
				this.$toast.success('清空历史搜索成功');
				localStorage.removeItem('historyList');
				this.historyList = [];
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
