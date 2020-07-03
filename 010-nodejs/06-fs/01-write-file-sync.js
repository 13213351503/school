const fs = require('fs');




// //fs.openSync(path[, flags, mode])
// const fd = fs.openSync('./001.txt','a');

// //fs.writeSync(fd, string[, position[, encoding]])
// fs.writeSync(fd,'hello haha');

// //fs.closeSync(fd)
// fs.closeSync(fd);


//fs.writeFileSync(file, data[, options])
fs.writeFileSync('./001.txt','duangduangduang',{flag:'a'});