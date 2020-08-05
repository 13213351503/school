

export const setLocalStorage = (data)=>{// 保存用户状态
	return window.localStorage.setItem('username',data);
}
export const getLocalStorage = ()=>{// 获取用户状态
	return window.localStorage.getItem('username');
}
export const removeLocalStorage = ()=>{// 删除用户状态
	return window.localStorage.removeItem('username');
}
