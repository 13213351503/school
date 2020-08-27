<template>
	<div id="footer">
		<input type="checkbox" v-model="allChecked">{{totalChecked}}/{{total}}
		<button @click="handleCheckDel()">选中删除</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { SELECT_CHECHED,SELECT_DEL_CHECK } from '../store/types.js'
	export default {
		name:'Footer',
		computed:{
			/*
			total:function(){
				return this.$store.getters.total
			},
			totalChecked:function(){
				return this.$store.getters.totalChecked
			},
			*/
			...mapGetters([
				'total',
				'totalChecked'
			]),
			allChecked:{
				get(){
					return this.$store.getters.allChecked
				},
				set(value){
					this.$store.dispatch(SELECT_CHECHED,value)
				}
			}
		},
		methods:{
			handleCheckDel:function(){
				if(window.confirm('您确定要删除吗?')){
					this.$store.dispatch(SELECT_DEL_CHECK)
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
