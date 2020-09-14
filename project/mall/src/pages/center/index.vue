<template>
	<div id="Center">
		<div class="login">
			<van-tabs v-model="active" class="van-tabs__wrap">
				<van-tab title="密码登录" >
					<div class="van-tabs__content">
						<van-form @submit="onSubmit">
							<van-field
								:value="form.mobilePhone"
								v-model="form.mobilePhone"
								name="username"
								placeholder="请输入手机号"
								:error-message="errMsg.mobilePhone"
								clearable
								@blur="isPhone"
								@touchstart.native.stop="show = true"
							/>
							<van-field
								v-model="form.mobilePassword"
								type="password"
								name="password"
								placeholder="请输入密码"
								@blur="isPassword"
								clearable
								:error-message="errMsg.mobilePassword"
							/>
							<div class="checking">
								<van-field
									v-model="verification"
									name="captchaCode"
									placeholder="请输入图形内验证码"
									:rules="[{ required: true }]"
								/>
								<div class="captch" >
									<div class="captch-img" v-html="captcha" @click="handleCaptch">
									</div>
								</div>
							</div>
							
							<div style="margin: 16px;">
								<van-button round block type="info" native-type="submit" @onSubmit='onSubmit(values)'>
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
				<PhoneLogin />
				<Register />
			</van-tabs>
			
			
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { isPhone,isPassword } from 'utils/validate.js'
	import { Toast } from 'vant';
	import { GET_CAPTCHA } from './store/types.js'
	import Register from 'components/register/index.vue'
	import PhoneLogin from 'components/phone-login/index.vue'
	import api from 'api/index.js'
	export default {
		name:'Center',
		data() {
			return {
				active: 0,
				password: '',
				verification:'',
				show: false,
				form: {
					mobilePhone: '',
					mobilePassword:'',
				},
				errMsg: {
					mobilePhone: '',
					mobilePassword:'',
				}
			};
		},
		mounted(){
			this.$store.dispatch(GET_CAPTCHA)
		},
		methods: {
			goback(){
				this.$router.replace('/')
			},
			onSubmit(values) {
				var _this = this
				api.getLogin({
					username:values.username,
					password:values.password,
					captchaCode:values.captchaCode
				})
				.then((data)=>{
					if(data.data.code == 0){
						localStorage.setItem('username',values.username)
						_this.$router.push({
							path :'/me',
						})
					}
				})
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
			
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			handleCaptch(){
				this.$store.dispatch(GET_CAPTCHA)
			},
			
		},
		computed: {
			...mapGetters([
				'captcha',
			])
		},
		components: {
			Register,
			PhoneLogin
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
			
		}
	}
</style>
