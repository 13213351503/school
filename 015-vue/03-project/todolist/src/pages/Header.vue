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
				//2.生成任务对象
				var todo = {
					task,
					check:false,
				}
				//3.将任务对象添加到目标数组
				this.addTodo(todo)
				//清空输入框值
				this.task = ''
			}
		},
		props:{
			addTodo:Function
		}
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
