import React,{ Component,Fragment } from 'react';

//子组件不能改变父组件中的数据
//子组件调用父组件传递过来的方法,将要传递的参数传给该方法
class Item extends Component{
	constructor(props){
		super(props)
		// console.log(this.props);
	};
	render(){
		// console.log(this.props);
		const { handleDelete,item } = this.props 	//父组件定义属性并赋值,子组件通过 this.props.属性名  来接收
		return (
			<li onClick={handleDelete}>{item}</li>
		)
	};
	//卸载,当组件从 DOM 中移除时会调用
	componentWillUnmount(){
		console.log('item componentWillUnmount');
	};
}



export default Item