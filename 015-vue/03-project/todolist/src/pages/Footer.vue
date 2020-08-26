<template>
	<div id="footer">
		<input type="checkbox" v-model="allChecked">{{totalChecked}}/{{total}}
		<button @click="handleCheckDel()">选中删除</button>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		props:{
			tasks:Array,
			selectCheck:Function,
			selectDelCheck:Function,
		},
		computed:{
			total:function(){
				return this.tasks.length
			},
			totalChecked:function(){
				//total是存放符合条件的值,item是tasks里面的每一项,最后的0表示从第几位开始
				return this.tasks.reduce((total,item)=>{
					if(item.check){
						total = total + 1
					}
					return total
				},0)
			},
			allChecked:{
				get(){
					return (this.total == this.totalChecked) && (this.total != 0)
				},
				set(value){
					this.selectCheck(value)
				}
			}
		},
		methods:{
			handleCheckDel:function(){
				if(window.confirm('您确定要删除吗?')){
					this.selectDelCheck()
				}
			}
		}
	}
</script>

<style scoped>
	#footer{
		width: 500px;
		margin: 0 auto;
	}
	#footer button{
		float: right;
		margin-top: 3px;
		margin-right: -7px;
	}
</style>
