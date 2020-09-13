// 只能为数字验证
export function isPhone(value) {
	// var number = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/
	// if (!number.test(value)) {
	// 	callback(new Error("格式有误,只能为数字"));
	// } else {
	// 	callback();
	// }
	return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(value);
}
	