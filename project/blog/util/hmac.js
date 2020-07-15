const crypto = require('crypto');


module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512','aaaaaaa');
	//加密明文
	hmac.update('haha');
	//生成密文并返回
	return hmac.digest('hex')
}