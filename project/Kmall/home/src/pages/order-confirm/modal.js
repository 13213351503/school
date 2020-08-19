
var _util = require('util/index.js');
var _city = require('util/city/index.js');
var api = require('api/index.js');

var modalTpl = require('./modal.tpl');


var formDataMsg = {
    show:function(msg){
         $('.error-item')
        .show()
        .find('.error-msg')
        .text(msg)
    },
    hide:function(){
        $('.error-item')
        .hide()
        .find('.error-msg')
        .text('')
    }
}


module.exports = {
    show:function(shippings){
        //缓存编辑地址回传的数据
        this.shippings = shippings;
        this.modalBox = $('.modal-box');
        this.shippingBox = $('.shipping-box');
        //加载地址弹出层
        this.loadModal();
        //绑定事件
        this.bindEvent();
        // console.log(_city.getCities('河南省'))
        // console.log(_city.getProvinces())
        this.loadProvinces()

    },
    loadProvinces:function(){
        var provinces = _city.getProvinces();
        // console.log(provinces);
        var provincesSelectOptions = this.getSelectOptions(provinces);
        var provincesSelect = this.modalBox.find('.province-select');
        provincesSelect.html(provincesSelectOptions);
    
        //处理编辑地址
        if(this.shippings){
            provincesSelect.val(this.shippings.province);
            this.loadCities(this.shippings.province)
        }
    },
    loadCities:function(province){
        var cities = _city.getCities(province);
        // console.log(cities);
        var citiesSelectOptions = this.getSelectOptions(cities);
        var citiesSelect = this.modalBox.find('.city-select');
        citiesSelect.html(citiesSelectOptions);
    
        //处理编辑地址
        if(this.shippings){
            citiesSelect.val(this.shippings.city);
        }
    },
    getSelectOptions:function(arr){
        var html = '<option value="">请选择</option>';
            for(var i = 0;i<arr.length;i++){
                html += '<option value="'+arr[i]+'">'+arr[i]+'</option>'
            }
        return html
    },
    loadModal:function(){
        var html = _util.render(modalTpl,this.shippings);
        this.modalBox.html(html);
    },
    bindEvent:function(){
        var _this = this;
        //点击关闭按钮关闭弹出层
        this.modalBox.on('click','.modal-header .close',function(ev){
            //防止点击表单时关闭弹出层
            ev.stopPropagation();
            _this.hideModal();
        });
        //根据省份加载城市信息
        this.modalBox.on('change','.province-select',function(ev){
            var province = $(this).val();
            _this.loadCities(province);
        });

        //点击新增地址提交数据
        this.modalBox.find('#btn-submit').on('click',function(){
            _this.submit();
        });
        //键盘提交事件
        $('input').on('keyup',function(ev){
            if(ev.keyCode == 13){
                _this.submit();
            }
        });
    },
    hideModal:function(){
        this.modalBox.empty();
    },
    //表单提交验证
    submit:function(){
        var _this = this;
        //1.获取数据
        var formData = {
            name:$.trim($('[name="name"]').val()),
            province:$.trim($('[name="province"]').val()),
            city:$.trim($('[name="city"]').val()),
            address:$.trim($('[name="address"]').val()),
            phone:$.trim($('[name="phone"]').val()),
            zip:$.trim($('[name="zip"]').val()),
           
        };
        //2.验证数据合法性
        var validateFormData = this.vaildate(formData);
        //3.验证通过发送请求
        if(validateFormData.status){//验证通过
            //隐藏错误提示
            formDataMsg.hide();
            //发送ajax请求
            var request = api.addShippings;
            var action = '新增'
            //处理编辑地址
            if(_this.shippings){
                request = api.upadteShippingsDetail;
                formData.id = _this.shippings._id;
                action = '编辑'
            }    

            request({
                data:formData,
                success:function(data){
                    // console.log(data);
                    //1.关闭弹出层
                    _this.hideModal();
                    //2.重新渲染地址列表
                    _this.shippingBox.trigger('get-shippings',[data])
                    //3.成功提示信息
                    _util.showSuccessMsg(action+'地址成功');
                },
                error:function(msg){
                    formDataMsg.show('新增地址失败,请稍后再试');
                }
            })
        }else{
            formDataMsg.show(validateFormData.msg);
        }
            
    },
    vaildate:function(formData){
        var result = {
            status:false,
            msg:''
        };
        //收货人非空验证
        if(!_util.validate(formData.name,'required')){
            result.msg = '请输入收货人姓名';
            return result
        };
        //省份非空验证
        if(!_util.validate(formData.province,'required')){
            result.msg = '请选择收货省份';
            return result
        };
        //城市合法验证
        if(!_util.validate(formData.city,'required')){
            result.msg = '请选择收货城市';
            return result
        };
        //地址非空验证
        if(!_util.validate(formData.address,'required')){
            result.msg = '请选择收货地址';
            return result
        };
        //手机号非空验证
        if(!_util.validate(formData.phone,'required')){
            result.msg = '请输入手机号';
            return result
        };
        //手机号合法验证
        if(!_util.validate(formData.phone,'phone')){
            result.msg = '手机号格式不正确';
            return result
        };


        result.status = true;
        return result;
    }
} 