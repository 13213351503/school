<!-- 结构 -->
<template>
  <div>
	<Logo />
	<Content />
	<p>晚上吃火锅</p>
  </div>
</template>
<!-- 逻辑 -->
<script>
	import Logo from './pages/Logo.vue'
	import Content from './pages/content.vue'
	export default {
		name:'App',
		components:{
			Logo,
			Content,
		}
	}
</script>
<!-- 样式 -->
<style>
	p{
		background-color: red;
	}
</style>
