import React,{ Component,Fragment } from 'react';
import './app.css';
import Item from './item.js';
import { Input,Button,Row,Col,List  } from 'antd';
import store from './store/index.js'
import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction
} from './store/actioncreateor.js'

class AppUI extends Component{
	//当组件的state或者props发生改变时render函数会重新执行
	render(){
		const { handelDle,handelChange,handelAdd,task,list } = this.props
		return (
			<div className="app">
				<Row>
			      <Col span={21}><Input onChange={handelChange} value={task} /></Col>
			      <Col span={3}><Button type="primary" onClick={handelAdd}>提交</Button></Col>
			    </Row>
				 <List
				  style={{marginTop:'20px'}}
			      bordered
			      dataSource={list}
			      renderItem={(item,index) => (
			        <List.Item 
						onClick={ ()=>{handelDle(index)}}>
			           	{item}
			        </List.Item>
			      )}
			    />
			</div>
		)
	};
}
export default AppUI