

module.exports = {
    validate:function(value,type){
        if(type == 'required'){
            return !!value;
        }else if(type == 'username'){
            return /^[a-z][a-z0-9]{2,5}$/i.test(value)
        }else if(type == 'password'){
            return /^\w{3,6}$/i.test(value)
        }

    }
}