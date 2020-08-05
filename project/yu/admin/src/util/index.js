export const saveUsername = (username)=>{
	return window.localStorage.setItem('username',username)
}
export const getUsername = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUsername = ()=>{
	return window.localStorage.removeItem('username')
}