<template>
	<div id="Register">
		<van-tab title="免费注册" >
			<div class="van-tabs__content">
				<van-form @submit="onSubmit">
					<van-field
						:value="form.mobilePhone"
						name="用户名"
						placeholder="请输入手机号"
						v-model="form.mobilePhone"
						:error-message="errMsg.mobilePhone"
						@blur="isPhone"
						clearable
						@touchstart.native.stop="show = true"
					/>
					<div class="checking">
						<van-field
							name="验证码"
							placeholder="请输入短信验证码"
							:rules="[{ required: true, message: '请填写短信验证码' }]"
						/>
						<div class="ckecking-button">
							<van-button type="primary" size="small" @click="handleDialog">发送验证码</van-button>
						</div>
					</div>
					
					<van-field
						name="密码"
						type="password"
						placeholder="请输入密码"
						v-model="form.mobilePassword"
						@blur="isPassword"
						clearable
						:error-message="errMsg.mobilePassword"
					/>
					<van-field
						v-model="againPassword"
						@blur="isAgainPassword"
						:error-message="errMsg.againPassword"
						clearable
						type="password"
						name="确认密码"
						placeholder="请再次输入密码"
						:rules="[{ required: true, message: '请再次输入密码' }]"
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
					v-model='form.mobilePhone'
				/>
			</div>
		</van-tab>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	import { isPhone,isPassword } from 'utils/validate.js'
	export default {
		name:'Register',
		data() {
			return {
				active: 0,
				againPassword:'',
				show: false,
				form: {
					mobilePhone: '',
					mobilePassword:'',
				},
				errMsg: {
					mobilePhone: '',
					mobilePassword:'',
					againPassword:'',
				}
			};
		},
		methods: {
			goback(){
				this.$router.replace('/')
			},
			onSubmit(values) {
				console.log('submit', values);
			},
			isPhone(){
				if (!this.form.mobilePhone){
					this.errMsg.mobilePhone = '请填写手机号码！'
					return false
				}else if(!isPhone(this.form.mobilePhone)) {
					this.errMsg.mobilePhone = '手机号格式不正确！'
					return false
				} else {
					this.errMsg.mobilePhone = ''
					return true
				}
			},
			isPassword(){
				if (!this.form.mobilePassword){
					this.errMsg.mobilePassword = '请填写密码！'
					return false
				}else if(!isPassword(this.form.mobilePassword)) {
					this.errMsg.mobilePassword = '以首字母开头，必须包含数字的6-18位！'
					return false
				} else {
					this.errMsg.mobilePassword = ''
					return true
				}
			},
			isAgainPassword(){
				if (!this.form.mobilePassword){
					this.errMsg.mobilePassword = '请填写密码！'
					return false
				}else if(this.againPassword !== this.form.mobilePassword) {
					this.errMsg.againPassword = '两次输入密码不一致！'
					return false
				} else {
					this.errMsg.againPassword = ''
					return true
				}
			},
			
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			//手机验证码弹出框
			handleDialog(){
				Dialog.confirm({
					title: '',
					message: '弹窗内容',
				})
				.then(() => {
					// on confirm
				})
				.catch(() => {
					// on cancel
				});
			}
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
