import React,{ Component,Fragment } from 'react';
import './app.css';
import Item from './item.js';
import { Input,Button,Row,Col,List  } from 'antd';
// import 'antd/dist/antd.css';
// 
// 
import store from './store/index.js'

import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction
} from './store/actioncreateor.js'

class App extends Component{
	//this.state 存放组件内部数据,this.props存放组件的外部数据,render负责渲染页面
	constructor(props){
		super(props),
		this.state = store.getState()
		this.handelChange = this.handelChange.bind(this)
		this.handelAdd = this.handelAdd.bind(this)
		console.log(store)
		store.subscribe(()=>{
			this.setState(store.getState())
		})

	};
	//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
	static getDerivedStateFromProps(props, state){
		// console.log(props);
		// console.log(state);
		return {};
	};
	//该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
	shouldComponentUpdate(nextProps, nextState){
		// if(nextState.task == 'x'){
		// 	return false
		// }else{
		// 	return true
		// }
		return true
	};
	//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
	getSnapshotBeforeUpdate(prevProps, prevState){
		return {
			name:'tom',
			age:20
		}
	};
	//组件更新完成后执行
	componentDidUpdate(prevProps, prevState,snapshot){

	};
	//组件挂载完毕执行,多用于发送ajax获取数据
	componentDidMount(){
	};
	
	handelAdd(){
		// let list = [...this.state.list];
		// list.push(this.state.task);
		
		// let action = {
		// 	type:ADD_ITME,
		// }
		store.dispatch(getAddItemAction())
	};
	handelDle(index){
		// let list = [...this.state.list];
		// list.splice(index,1);
		
		// let action = {
		// 	type:DEL_ITME,
		// 	payload:index
		// }
		store.dispatch(getDelItemAction(index))

	};
	handelChange(ev){
		// console.log(ev.target.value);
		// console.log(this.input);
		let val = ev.target.value;
		// let action = {
		// 	type:CHANGE_ITME,
		// 	payload:val
		// }
		store.dispatch(getChangeItemAction(val))
	};
	
	//当组件的state或者props发生改变时render函数会重新执行
	render(){
		return (
			<div className="app">
				<Row>
			      <Col span={21}><Input onChange={this.handelChange} value={this.state.task} /></Col>
			      <Col span={3}><Button type="primary" onClick={this.handelAdd}>提交</Button></Col>
			    </Row>
				 <List
				  style={{marginTop:'20px'}}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (
			        <List.Item 
						onClick={this.handelDle.bind(this,index)}>
			           	{item}
			        </List.Item>
			      )}
			    />
			</div>
			
		)
	};
}

export default App