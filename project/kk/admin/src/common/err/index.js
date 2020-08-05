import React,{Component} from 'react'
import './index.css'

// 引入警告提示相关组件
import { Alert } from 'antd';

//容器组件
class Err extends React.Component {
	render() {
		return (
			<div className="Err">
				<Alert
					message="Error"
					description="访问的页面找不到了,请检查输入的地址是否正确!"
					type="error"
					showIcon
				/>
			</div>
		);
	}
}
export default Err;