
		// 【元素，属性，值】

	function animate(obj,attr,target){				//定义一个封装函数，里面传的值为【元素，属性，值】
		clearInterval(obj.timer);					//这里设置关闭定时器是为了防止多次点击总会有一个定时器无法关闭
		obj.timer=setInterval(function(){			//开启定时器
			var current =parseFloat(getComputedStyle(obj,false)[attr]);	//获取当前的属性和值，并转化为数字
			var iSpeed = 0;									//定义速度
			if(attr == 'opacity'){							//如果传进来的属性是透明度
				current =  Math.round(current*100);			//让它的透明度的值都*100，方便函数计算
			}
			if(current<target){							//当前值小于目标值
				iSpeed = 6;								//给他设置速度为正2
			}else{										//当前值大于目标值
				iSpeed = -6;							//给他设置速度为负2
			}
			if(Math.abs(current-target) <Math.abs(iSpeed)){		//如果当前值和目标值的差小于当前速度值
				if(attr == 'opacity'){							//如果属性的“透明度”
					obj.style[attr] = target/100;				//让它的当前值/100
				}else{											//如果属性不是透明度
					obj.style[attr] = target + 'px';			//让他的当前值加上PX单位
				}
				clearInterval(obj.timer);						//关闭定时器
			}else{												//如果当前值和目标值的差大于当前速度值
				if(attr == 'opacity'){							//如果属性的“透明度”
					obj.style[attr]=(current + iSpeed)/100 ;	//让他的当前值加上速度值并且/100
				}else{											//如果属性不是透明度
					obj.style[attr] = current + iSpeed + 'px';	//让他的当前值加上速度值并且加上速度单位
				}											
			}
			
		},30)
	}	
	function getScrollTop(){
		return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	}