import React,{ Component,Fragment } from 'react';
import './index.css';
import { Input,Button,Row,Col,List  } from 'antd';
import { connect } from 'react-redux'
import axios from 'axios';
import { actionCreateor } from './store/index.js';

class TodoList extends Component{
	componentDidMount(){
		this.props.handelInit()
	};
	render(){
		const { task,list,handelChange,handelAdd,handelDle } = this.props;
		return (
			<div className="TodoList">
				<Row>
			      <Col span={21}><Input onChange={handelChange} value={task} /></Col>
			      <Col span={3}><Button onClick={handelAdd} type="primary">提交</Button></Col>
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
	}
}
//将属性从store映射到组件
const mapStateToProps = (state)=>{
	console.log(state);
	return {
		task:state.TodoList.task,
		list:state.TodoList.list
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handelChange:(ev)=>{
			let val = ev.target.value
			dispatch(actionCreateor.getChangeItemAction(val))
		},
		handelAdd:()=>{
			dispatch(actionCreateor.getAddItemAction())
		},
		handelDle:(index)=>{
			dispatch(actionCreateor.getDelItemAction(index))
		},
		handelInit:()=>{
			dispatch(actionCreateor.getRequestLoadItemAction())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)