import React,{ Component,Fragment } from 'react';
import './app.css';
import Item from './item.js';
import { Input,Button,Row,Col,List  } from 'antd';
import store from './store/index.js';
import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction,
	getLoadItemAction,
	getRequestLoadItemAction
} from './store/actioncreateor.js';
import AppUI from './AppUI.js';
import axios from 'axios';

class App extends Component{
	//this.state 存放组件内部数据,this.props存放组件的外部数据,render负责渲染页面
	constructor(props){
		super(props),
		this.state = store.getState() 
		this.handelChange = this.handelChange.bind(this)
		this.handelAdd = this.handelAdd.bind(this)
		this.handelDle = this.handelDle.bind(this)
		console.log(store)
		store.subscribe(()=>{
			this.setState(store.getState())
		})

	};
	componentDidMount(){
		// axios.get('http://127.0.0.1:3000')
		// .then((data)=>{
		// 	console.log(data)
		// 	store.dispatch(getLoadItemAction(data.data))
		// })
		// .catch((err)=>{
		// 	console.log(err);
		// })
		store.dispatch(getRequestLoadItemAction())
	};
	handelAdd(){
		store.dispatch(getAddItemAction())
	};
	handelDle(index){
		store.dispatch(getDelItemAction(index))

	};
	handelChange(ev){
		let val = ev.target.value;
		store.dispatch(getChangeItemAction(val))
	};
	render(){
		const {task,list} = this.state
		return(
			<AppUI 
			task = {task}
			list = {list}
			handelChange = {this.handelChange}
			handelAdd = {this.handelAdd}
			handelDle = {this.handelDle}
			/>
		)
	}
}

export default App