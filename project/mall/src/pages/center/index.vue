<template>
	<div id="Center">
		<div class="login">
			<van-tabs v-model="active" class="van-tabs__wrap">
				<van-tab title="密码登录" ></van-tab>
				<van-tab title="手机号登录" ></van-tab>
				<van-tab title="免费注册" ></van-tab>
			</van-tabs>
			
			<div class="van-tabs__content">
				<van-form @submit="onSubmit">
					<van-field
						v-model="username"
						name="用户名"
						placeholder="请输入手机号"
						:rules="[{ pattern, message: '请输入正确内容' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						placeholder="请输入密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div>
						<van-field
							v-model="verification"
							type="password"
							name="密码"
							placeholder="请输入图形内验证码"
							:rules="[{ required: true, message: '请输入图形内验证码' }]"
						/>
						<div>
							
						</div>
					</div>
					
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
			</div>
			<div class="backhome">返回首页</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:'Center',
		data() {
			return {
				active: 0,
				username: '',
				password: '',
				verification:'',
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			pattern(username) {
				return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(username);
			},
		},
	}
</script>

<style scoped lang="less">
	#Center{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 200;
		background-color: #fff;
		.login{
			margin-top: 1.875rem;
			.van-tabs__wrap{
				overflow: hidden;
				box-sizing: content-box;
				height: 100%;
				padding-bottom: .46875rem;
				.van-tab{
					position: relative;
					flex: 1;
					box-sizing: border-box;
					min-width: 0;
					padding: 0 .15625rem;
					color: #7d7e80;
					font-size: .4375rem;
					line-height: 1.375rem;
					text-align: center;
					cursor: pointer;
				}
				
			}
			
			
			.backhome{
				margin-left: .3125rem;
				margin-top: .3125rem;
				font-size: .375rem;
				color: #1890ff;
			}
		}
	}
</style>
