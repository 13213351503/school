

require('pages/common/logo/index.js')
require('pages/common/footer/index.js');
require('./index.css');
var _util = require('util')



$(function(){
    // $('.register').show()
     
    //获取地址栏参数,如果没有默认default
    var type = _util.getParamsFromUrl('type') || 'default';
    $('.'+type).show();
})
