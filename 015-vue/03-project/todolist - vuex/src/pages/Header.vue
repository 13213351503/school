<template>
	<div id="header">
		<h1>TodoList</h1>
		<input
			v-model="task"
			type="text"
			@keyup.enter="handleAdd()"
		>
	</div>
</template>
	
<script>
	import { ADD_TODO } from '../store/types.js'
	export default {
		name:'Header',
		data(){
			return {
				task:'',
			}
		},
		methods:{
			handleAdd:function(){
				//1.验证输入框
				var task = this.task.trim()	
				if(!task){
					window.confirm('请输入任务!!')
					return
				}
				//2.生成任务对象
				var todo = {
					task,
					check:false,
				}
				//3.将任务对象添加到目标数组
				//派发action,第一个参数是任务名,第二个是将要添加的任务对象
				this.$store.dispatch(ADD_TODO,todo)
				//清空输入框值
				this.task = ''
			}
		},
	}
</script>

<style scoped>
	#header{
		width: 500px;
		margin: 100px auto 0;
	}
	#header h1{
		text-align: center;
	}
	#header input{
		width: 100%;
		height: 30px;
	}
</style>
