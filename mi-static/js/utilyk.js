handleCart()
handleNav()
function handleCart(){
	//获取元素
	var oCart = document.querySelector('.top .cart')
	var oCartBox = oCart.querySelector('.cart-box a')
	var oCartContent = oCart.querySelector('.cart-content')
	var oLoader = oCartContent.querySelector('.loader')
	var oEmptyCart = oCartContent.querySelector('.empty-cart')
	//添加事件
	//鼠标移入
	oCart.onmouseenter = function(){
		//购物车的图标背景颜色和字体的颜色
		oCartBox.style.background = '#fff'
		oCartBox.style.color = '#ff6700'
		//加载信息图标
		oLoader.style.display = 'block'
		//卷出购物内容并加载购物车信息和图标
		animate(oCartContent,{height:100},true,function(){
			oLoader.style.display = 'none'
			oEmptyCart.style.display ='block'
		})
	}
	//鼠标移出
	oCart.onmouseleave = function(){
		//购物车的图标背景颜色和字体的颜色
		oCartBox.style.background = '#424242'
		oCartBox.style.color = '#b0b0b0'
		//收回购物内容和购物车信息，图标
		animate(oCartContent,{height:0},true,function(){
			oLoader.style.display = 'none'
			oEmptyCart.style.display ='block'
		})
	}
}
function handleNav(){
	//获取元素
	var aHeaderNav = document.querySelectorAll('.header-nav .header-nav-item')
	var oHeaderNavContent = document.querySelector('.header .header-nav-content')
	var oContainer = oHeaderNavContent.querySelector('.header-nav-content .container')
	var headerTimer = 0
	// console.log(aHeaderNav)
	// 遍历添加事件
	for(var i = 0;i < aHeaderNav.length - 2;i++){
		//生成加载图标
		oContainer.innerHTML = '<div class="loader"></div>'
		oContainer.style.borderTop = '1px solid #ccc'
		//鼠标移入事件
		aHeaderNav[i].onmouseenter = function(){
			clearTimeout(headerTimer)
			animate(oHeaderNavContent,{height:180},true,function(){
				oContainer.style.overflow = 'visible'
				
			})
		}
		aHeaderNav[i].onmouseleave = function(){
			hidNavContent()
		}
	}
	function hidNavContent(){
		headerTimer = setTimeout(function(){
			animate(oHeaderNavContent,{height:0},true,function(){
				oContainer.style.overflow = 'hidden'
			})
		},500)
	}
	
	oHeaderNavContent.onmouseenter = function(){
		clearTimeout(headerTimer)
	}
	oHeaderNavContent.onmouseleave = function(){
		hidNavContent()
	}
	
}