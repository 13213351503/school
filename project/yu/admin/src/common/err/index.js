
/*
* @Author: Chen
* @Date:   2019-12-03 17:36:42
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-06 15:11:45
*/
import React,{Component} from 'react'
import { Alert,Button } from 'antd'
import './index.css'
import {
  Link,
} from "react-router-dom";

//容器组件
class Err extends React.Component {
	render() {
		return (
			<div className='err'>
				<Alert 
					message='Not Found'
					description='您访问的页面不在范围内,请确认地址是否正确'
					type='error'
					showIcon
				/>
				<Link to=''><Button type='link'>返回首页</Button></Link>
			</div>
		);
	}
}


export default Err