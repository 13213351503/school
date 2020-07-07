const crypto = require('crypto');

// const hmac = crypto.createHmac('md5','aaaaaaa');
const hmac = crypto.createHmac('sha256','aaaaaaa');
// const hmac = crypto.createHmac('sha512','aaaaaaa');

hmac.update('haha');
console.log(hmac.digest('hex'))