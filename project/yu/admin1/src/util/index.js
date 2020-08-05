/*
* @Author: Chen
* @Date:   2019-12-08 11:29:10
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-08 15:39:51
*/
export const saveUsername = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUsername = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUsername = ()=>{
	return window.localStorage.removeItem('username')
}