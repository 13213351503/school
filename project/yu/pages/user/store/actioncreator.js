import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js'

import axios from 'axios'

export const getChangeItemAction = (val)=>({
	type:CHANGE_ITEM,
    payload:val
})
export const getAddItemAction = ()=>({
	type:ADD_ITEM,
})
export const getDelItemAction = (index)=>({
	type:DEL_ITEM,
    payload:index
})

export const getLoadDataAction = (data) =>({
	type:LOAD_DATA,
	payload:data
})
export const getRequestLoadDataAction =()=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch)=>{
			//发送ajax请求再生成action对象
        	axios.get('http://127.0.0.1:3000')
	        .then(result=>{
	            //真正派发action
	           dispatch(getLoadDataAction(result.data))
	        })
	        .catch(err=>{
	            console.log(err)
	        })
        }
        
}