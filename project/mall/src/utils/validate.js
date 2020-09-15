// 只能为数字验证
export function isPhone(value) {
	return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(value);
}



export function isPassword(value) {
	return /^[A-Za-z0-9]{6,12}$/.test(value);
}