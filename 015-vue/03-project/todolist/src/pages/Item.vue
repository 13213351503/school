<template>
	<ul id="item">
		<li
			:style="{background:bgColor}"
			@mouseenter="handlebgc(true)"
			@mouseleave="handlebgc(false)"
		>
			<input type="checkbox" v-model="todo.check">
			<span>{{todo.task}}</span>
			<button v-if="isShow">删除</button>
		</li>
	</ul>
	
</template>

<script>
	export default {
		name:'Item',
		data(){
			return {
				bgColor:'#fff',
				isShow:true,
			}
		},
		methods:{
			handlebgc:function(show){
				this.bgColor = show ? '#bdccff' : '#fff'
				this.isShow = show
			},
		},
		props:{
			todo:Object,
		}
	}
</script>

<style scoped>
	#item{
		list-style: none;
	}
	#item li{
		width: 505px;
		margin: 10px auto;
		border: 1px dashed #000000;
		margin-left: 663px;
		height: 40px;
		line-height: 40px;
	}
	#item li button{
		float: right;
		margin-top: 9px;
		margin-right: 8px;
	}
</style>
