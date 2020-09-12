<template>
	<div id="Register">
		<van-tab title="免费注册" >
			<div class="van-tabs__content">
				<van-form @submit="onSubmit">
					<van-field
						:value="shows"
						name="用户名"
						placeholder="请输入手机号"
						:rules="[{ phone, required: true,message: '请输入正确内容', }]"
						@touchstart.native.stop="show = true"
					/>
					<div class="checking">
						<van-field
							v-model="password"
							type="password"
							name="密码"
							placeholder="请输入短信验证码"
							:rules="[{ cipher, required: true, message: '请填写短信验证码' }]"
						/>
						<div class="ckecking-button">
							<van-button type="primary" size="small">发送验证码</van-button>
						</div>
					</div>
					
					<van-field
						:value="shows"
						name="用户名"
						type="password"
						placeholder="请输入密码"
						:rules="[{ phone, required: true,message: '请输入密码', }]"
						@touchstart.native.stop="show = true"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						placeholder="请再次输入密码"
						:rules="[{ cipher, required: true, message: '请再次输入密码' }]"
					/>
					
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
				<div class="backhome" @click="goback">返回首页</div>
				
				<van-number-keyboard
					:show="show"
					@input="onInput"
					@blur="show = false"
					v-model='shows'
				/>
			</div>
		</van-tab>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'Register',
		data() {
			return {
				active: 0,
				registerPassword: '',
				verification:'',
				show: false,
				shows:'',
			};
		},
		methods: {
			goback(){
				this.$router.replace('/')
			},
			onSubmit(values) {
				console.log('submit', values);
			},
			phone(val) {
				return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val);
			},
			cipher(val){
				return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
			},
			
			
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			
		},
	}
</script>

<style scoped lang="less">
	.van-tabs__wrap{
		padding-bottom: .46875rem;
	}
	.van-cell{
		line-height: 1.25rem;
	}
	
	
	.backhome{
		margin-left: .3125rem;
		margin-top: .3125rem;
		font-size: .375rem;
		color: #1890ff;
	}
	.van-button--info{
		color: #fff;
		background-color: #07c160;
		border: .03125rem solid #07c160;
	}
	.checking{
		display: flex;
		.ckecking-button{
			position: relative;
			right: 0.625rem;
			top: 0.175rem;
			.van-button--small{
				width: 2.4rem;
				height: 2.1875rem;
				height: 0.935rem;
				line-height: .875rem;
				overflow: hidden;
			}
			.van-button__text{
				font-size: 0.375rem;
			}
		}
	}
</style>
