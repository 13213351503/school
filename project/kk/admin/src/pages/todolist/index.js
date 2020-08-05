import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Input,Button,Row,Col,List   } from 'antd'

import {actionCreator} from './store/index.js'


//容器组件
class TodoList extends Component{
	componentDidMount(){
		//发送ajax
		// this.props.handleInit()
	}
	render(){
		const { list,task,handleInput,handelAdd,handleDel }= this.props
		return(
			<div className='TodoList'>
				<Row>
					<Col span={18}>
						<Input 
							onChange={handleInput}
							value={task}
						/>
					</Col>
					<Col span={6}>
						<Button 
							type="primary"
							onClick={handelAdd}
						>
							提交
						</Button>
					</Col>
				</Row>
				<List
					style={{marginTop:15}}
			      	bordered
			      	dataSource={list}
			      	renderItem={(item,index) => (
				        <List.Item onClick={()=>{handleDel(index)}}>
				          {item}
				        </List.Item>
			      	)}
			    />
			</div>	
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('todolist').get('list'),
		task:state.get('todolist').get('task')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput:(ev)=>{
			const val = ev.target.value
			dispatch(actionCreator.getChangeItemAction(val))
		},
		handelAdd:()=>{
			dispatch(actionCreator.getAddItemAction())
		},
		handleDel:(index)=>{
			dispatch(actionCreator.getDeleteItemAction(index))
		},
		handleInit:()=>{
			dispatch(actionCreator.getRequestLoadDataAction())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)