		//匀速动画封装函数
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


	//减速动画封装函数
	function animate1(obj,attr,target){
		clearInterval(obj.timer);					//这里设置关闭定时器是为了防止多次点击总会有一个定时器无法关闭
		obj.timer=setInterval(function(){			//循环定时器开启，并给定时器赋值id
			var iSpeed = 0							//定义速度
			var current = parseFloat(getComputedStyle(obj,false)[attr]);	//获取当前值，并且记得取整数
			if(attr == 'opacity'){											//当传进来的属性为透明度的时候
				current = Math.round(current *100);							//方便运算使当前值*100
			}
			// console.log(iSpeed,current);
			iSpeed =(target-current)/10;//执行速度和目标值减去当前值的差成正比,即离目标的越远速度越快,因此执行速度可以是(目标值 - 当前值) / 系数	;
			iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed)
			//三目运算，如果速度大于0，则向上取整数，如果小于0，则向下取整数
			if(!iSpeed){				//由于减速动画最终的速度会变为0,所以可以用速度作为结束条件
				clearInterval(obj.timer);							//关闭定时器
			}else{	
				if(attr == 'opacity'){								//属性为	opacity的时候
					obj.style[attr]=(current + iSpeed)/100;			//当前值加上速度值/100
				}else{
					obj.style[attr]=current + iSpeed + 'px';		//当前值加上速度值加上像素单位
				}					
			}
			
		},30)
	}


	//减速和匀速一起封装的函数
	function animate2(obj,attr,target,isLinear){		//定义一个匀速和减速在一起的函数
		if(isLinear == undefined){						//调用函数的时候如果不传值默认的会是undefined，当传进来的是undefined时，让它进行匀速动画
				isLinear=true							//布尔值为true的时候都进行匀速动画
			}
		clearInterval(obj.timer);						//开启定时器之前先关闭定时器
		obj.timer =setInterval(function(){				//开启定时器
			var isStop = false;							//当函数进行不下去的时候记得定义一个新的变量
			var iSpeed = 0;								//速度定义默认为0
			var current = parseFloat(getComputedStyle(obj,false)[attr]);		//获取当前值，并且记得取整数
			if(attr == 'opacity'){							//当传进来的属性为透明度的时候
				current = Math.round(current *100);			//方便运算使当前值*100
			}
			if(isLinear){									//如果使用匀速动画
				if(current<target){							//当前值小于目标值
					iSpeed = 2;								//给他设置速度为正2
				}else{										//当前值大于目标值
					iSpeed = -2;							//给他设置速度为负2
				}
				if(Math.abs(current-target) <Math.abs(iSpeed)){		//如果当前值和目标值的差小于当前速度值
					if(attr == 'opacity'){							//如果属性的“透明度”
						obj.style[attr] = target/100;				//让它的当前值/100
					}else{											//如果属性不是透明度
						obj.style[attr] = target + 'px';			//让他的当前值加上PX单位
					}
					isStop = true;									//如果动画结束，关闭定时器
				}
			}else{													//如果执行减速动画
				iSpeed =(target-current)/10;																								//执行速度和目标值减去当前值的差成正比,即离目标的越远速度越快,因此执行速度可以是(目标值 - 当前值) / 系数;
				iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed)
				//三目运算，如果速度大于0，则向上取整数，如果小于0，则向下取整数
				if(!iSpeed){			//由于减速动画最终的速度会变为0,所以可以用速度作为结束条件
					isStop = true;		//如果速度为0的时候，就代表动画进行完成，这个时候关闭定时器				
				}
			}
			if(isStop){					//如果isStop的值为true，则进入判断中，关闭定时器
				clearInterval(obj.timer);
			}else{						//如果isStop的值为false
				if(attr == 'opacity'){	//属性为	opacity的时候
					obj.style[attr]=(current + iSpeed)/100;	//当前值加上速度值/100
				}else{
					obj.style[attr]=current + iSpeed + 'px';//当前值加上速度值加上像素单位
				}											
			}
		},30)
	}


	//多值动画
	function animate3(obj,options,isLinear,endfn){		//定义一个匀速和减速在一起的函数
		if(isLinear == undefined){						//调用函数的时候如果不传值默认的会是undefined，当传进来的是undefined时，让它进行匀速动画
				isLinear=true							//布尔值为true的时候都进行匀速动画
			}
		clearInterval(obj.timer);						//开启定时器之前先关闭定时器
		obj.timer =setInterval(function(){				//开启定时器
			var isStopAll = true;			//因为在原来的函数中，如果有一项到达目标值，定时器就会关闭，所以要重新定义一个函数来关闭定时器
			for(var attr in options){		//遍历options中的属性和值
				var isStop = false;							//当函数进行不下去的时候记得定义一个新的变量
				var iSpeed = 0;								//速度定义默认为0
				var current = parseFloat(getComputedStyle(obj,false)[attr]);		//获取当前值，并且记得取整数
				if(attr == 'opacity'){							//当传进来的属性为透明度的时候
					current = Math.round(current *100);			//方便运算使当前值*100
				}
				if(isLinear){									//如果使用匀速动画
					if(current<options[attr]){							//当前值小于目标值
						iSpeed = 2;								//给他设置速度为正2
					}else{										//当前值大于目标值
						iSpeed = -2;							//给他设置速度为负2
					}
					if(Math.abs(current-options[attr]) <Math.abs(iSpeed)){		//如果当前值和目标值的差小于当前速度值
						if(attr == 'opacity'){							//如果属性的“透明度”
							obj.style[attr] = options[attr]/100;				//让它的当前值/100
						}else{											//如果属性不是透明度
							obj.style[attr] = options[attr] + 'px';			//让他的当前值加上PX单位
						}
					}else{
						isStopAll = false	//如果有任意一项属性没有达到目标值，就继续执行，不关闭定时器
					}
				}else{													//如果执行减速动画
					iSpeed =(options[attr]-current)/10;																								//执行速度和目标值减去当前值的差成正比,即离目标的越远速度越快,因此执行速度可以是(目标值 - 当前值) / 系数;
					iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed)
					//三目运算，如果速度大于0，则向上取整数，如果小于0，则向下取整数
					if(!iSpeed){			//由于减速动画最终的速度会变为0,所以可以用速度作为结束条件
						isStop = true;		//如果速度为0的时候，就代表动画进行完成，这个时候关闭定时器				
					}else{
						isStopAll = false	//如果有任意一项属性没有达到目标值，就继续执行，不关闭定时器
					}
				}
				if(!isStop){				//取非就是还没有到达目标值，如果没有到达目标是，继续执行
					if(attr == 'opacity'){	//属性为	opacity的时候
						obj.style[attr]=(current + iSpeed)/100;	//当前值加上速度值/100
					}else{
						obj.style[attr]=current + iSpeed + 'px';//当前值加上速度值加上像素单位
					}
				}
				if(isStopAll){
					clearInterval(obj.timer);		//所有的属性都达到目标值了，关闭定时器
					typeof endfn == 'function' && endfn(); //与运算，一假则假，只有前面的条件符合才可以
				}
			}			
			
		},30)
	}
	
	//确定页面的垂直滚动距离
	function getScrollTop(){
		return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	}
	//确定页面的水平滚动距离
	function getScrollLeft(){
		return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
	}