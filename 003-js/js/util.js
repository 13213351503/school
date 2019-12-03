/*
	obj 要改变的是那个元素
	attr 要改变的是那个属性
	target 要将该属性的值改到多少
*/
function animate(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(current < target){
			iSpeed = 8;
		}else{
			iSpeed = -8;
		}
		if( Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
				obj.style[attr] = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
			
		}
	},30);
}

function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}