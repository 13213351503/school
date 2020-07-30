import React,{ Component,Fragment } from 'react';
import './app.css';
import Item from './item.js';
import { Input,Button,Row,Col,List  } from 'antd';
import { connect } from 'react-redux'
import store from './store/index.js';
import axios from 'axios';
import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction,
	getLoadItemAction,
	getRequestLoadItemAction
} from './store/actioncreateor.js';

class App extends Component{
	componentDidMount(){
		this.props.handelInit()
	};
	render(){
		return (
			<div className="app">
				<Row>
			      <Col span={21}><Input onChange={this.props.handelChange} value={this.props.task} /></Col>
			      <Col span={3}><Button onClick={this.props.handelAdd} type="primary">提交</Button></Col>
			    </Row>
				 <List
				  style={{marginTop:'20px'}}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) => (
			        <List.Item
			        	onClick={ ()=>{this.props.handelDle(index)}}> 
			           	{item}
			        </List.Item>
			      )}
			    />
			</div>
		)
	}
}
//将属性从store映射到组件
const mapStateToProps = (state)=>{
	return {
		task:state.task,
		list:state.list
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handelChange:(ev)=>{
			let val = ev.target.value
			dispatch(getChangeItemAction(val))
		},
		handelAdd:()=>{
			dispatch(getAddItemAction())
		},
		handelDle:(index)=>{
			dispatch(getDelItemAction(index))
		},
		handelInit:()=>{
			dispatch(getRequestLoadItemAction())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)