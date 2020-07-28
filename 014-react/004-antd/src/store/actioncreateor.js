import {
	CHANGE_ITME,
	ADD_ITME,
	DEL_ITME,
	LOAD_ITME
} from './actionType.js';


export const getChangeItemAction = (val)=>({
		type:CHANGE_ITME,
		payload:val
})
export const getAddItemAction = ()=>({
		type:ADD_ITME,
})
export const getDelItemAction = (index)=>({
		type:DEL_ITME,
		payload:index
})
export const getLoadItemAction = (data)=>({
		type:LOAD_ITME,
		payload:data
})