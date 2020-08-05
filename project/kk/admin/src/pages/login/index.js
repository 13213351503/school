import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'

import {actionCreator} from './store/index.js'
// 引入表单注册相关组件
import { Form, Icon, Input, Button, Checkbox } from 'antd';

//容器组件
class NormalLoginForm extends React.Component {
	constructor(props){
		super(props);
		// 把this绑定在handleSubmit上
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// 表单通过验证走这个函数
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// console.log('Received values of form: ', values);
				this.props.handleLogin(values);
			}
		});
	};
	render() {
		// getFieldDecorator:定义验证规则👇
		const { getFieldDecorator } = this.props.form;
		const { isFetching } = this.props;
		return (
			<div className="Login">
				<Form className="login-form">
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: '小老弟,请输入你的用户名!' },
							{ pattern: /^[a-z][a-z,1-9]{2,5}$/i, message: '用户名是字母开头,3到6位的字符!' }],
						})(
			            <Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="用户名" 
							autoComplete="off"
			            />,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: '把你的密码也写上!' },
							{ pattern: /\w{3,6}/i, message: '密码是3到6位的任意字符!' }],
						})(
			            <Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="密码"
			            />,
						)}
					</Form.Item>
					<Form.Item>
						<Button 
							type="primary" 
							className="login-form-button but-sub-login"
							onClick={this.handleSubmit}
							loading={isFetching}
						>
						登陆
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


//将属性映射到组件中
const mapStateToProps = (state)=>{
	// console.log(state);
	return {
		isFetching : state.get('login').get('isFetching'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleLogin:(data)=>{
			// console.log(data);
			// 调用派发action的方法
			dispatch(actionCreator.getLoginAction(data));
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)