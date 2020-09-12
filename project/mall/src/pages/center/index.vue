<template>
	<div id="Center">
		<div class="login">
			<van-tabs v-model="active" class="van-tabs__wrap">
				<van-tab title="密码登录" >
					<div class="van-tabs__content">
						<van-form @submit="onSubmit">
							<van-field
								:value="shows"
								name="用户名"
								placeholder="请输入手机号"
								:rules="[{ phone, required: true,message: '请输入正确内容', }]"
								@touchstart.native.stop="show = true"
							/>
							<van-field
								v-model="password"
								type="password"
								name="密码"
								placeholder="请输入密码"
								:rules="[{ cipher, required: true, message: '请填写密码' }]"
							/>
							<div class="checking">
								<van-field
									v-model="verification"
									name="验证码"
									placeholder="请输入图形内验证码"
									:rules="[{ required: true, message: '请输入图形内验证码' }]"
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
							v-model='shows'
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
	import { Toast } from 'vant';
	import { GET_CAPTCHA } from './store/types.js'
	import Register from 'components/register/index.vue'
	import PhoneLogin from 'components/phone-login/index.vue'
	export default {
		name:'Center',
		data() {
			return {
				active: 0,
				password: '',
				verification:'',
				show: false,
				shows:'',
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
				console.log('submit', values);
			},
			
			phone(val) {
				return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val);
			},
			//密码至少包含 数字和英文，长度6-20
			cipher(val){
				return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
			},
			
			
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			handleCaptch(){
				this.$store.dispatch(GET_CAPTCHA)
			}
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
