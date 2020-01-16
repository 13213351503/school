handleCart()
handleNav()
handleCarousel()
handleCate()
handleCountDown()
handleProduct()
handleElecProduct()
//购物车移入事件
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
//处理导航部分
function handleNav(){
	//获取元素
	var aHeaderNav = document.querySelectorAll('.header-nav .header-nav-item')
	var oHeaderNavContent = document.querySelector('.header .header-nav-content')
	var oContainer = oHeaderNavContent.querySelector('.header-nav-content .container')
	var headerTimer = 0
	var loadTimer = 0
	// console.log(aHeaderNav)
	// 遍历添加事件
	for(var i = 0;i < aHeaderNav.length - 2;i++){
		//鼠标移入事件
		aHeaderNav[i].index = i
		aHeaderNav[i].onmouseenter = function(){
			oContainer.innerHTML = '<div class="loader"></div>'
			oContainer.style.borderTop = '1px solid #ccc'
			clearTimeout(headerTimer)
			animate(oHeaderNavContent,{height:180},true,function(){
				oContainer.style.overflow = 'visible'
			})
			clearTimeout(loadTimer)
			var index = this.index
			loadTimer = setTimeout(function(){
				loadDate(index)
			},1000)	
		}
		aHeaderNav[i].onmouseleave = function(){
			hidNavContent()
		}
	}
	//生成函数使用定时器
	function hidNavContent(){
		headerTimer = setTimeout(function(){
			animate(oHeaderNavContent,{height:0},true,function(){
				oContainer.style.overflow = 'hidden'
				oContainer.style.borderTop = 'none'

			})
		},500)
	}
	
	oHeaderNavContent.onmouseenter = function(){
		clearTimeout(headerTimer)
	}
	oHeaderNavContent.onmouseleave = function(){
		hidNavContent()
	}
	function loadDate(index){
		var date = aNavDateList[index]
		// console.log(date)
		// 
		// 用数据拼接html字符，并把接好的html字符显示出来
		var html = '<ul>'
		for(var i = 0;i<date.length;i++){
			html += '	<li>'
			html +=	'		<div class="img-box">'
			html +=	'			<a href="'+date[i].url+'">'
			html +=	'				<img src="'+date[i].src+'" alt="">'
			html +=	'			</a>'
			html +=	'		</div>'
			html +=	'		<p class="product-name">'+date[i].name+'</p>'
			html +=	'		<p class="product-price">'+date[i].price+'元起</p>'
			if(date[i].tag){
				html +=	'		<span class="tag">'+date[i].tag+'</span>'
			}
			html +=	'	</li>'
		}
		html += '</ul>'
		oContainer.innerHTML = html
	}
	
}
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:5000
	})
}
//处理分类面板
function handleCate(){
	var oCateBox = document.querySelector('.cate-box')
	var oCateContent = document.querySelector('.cate-content')
	var aCateItem = oCateBox.querySelectorAll('.cate-item')
	// console.log(aCateItem)
	for(var i = 0;i<aCateItem.length;i++){
		aCateItem[i].index = i
		aCateItem[i].onmouseenter = function(){
			for(var j =0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item'
			}
			this.className = 'cate-item active'
			oCateContent.style.display = 'block'

			loadCade(this.index)
		}
		
	}
	oCateBox.onmouseleave = function(){
		for(var j =0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item'
			}
		oCateContent.style.display = 'none'
	}

	function loadCade(index){
		console.log(index)
		var date = aLoadCadeList[index]
		var html = '<ul>'
		for(var i = 0;i<date.length;i++){
			html +=			'<li>'
			html +=				'<a href="'+date[i].url+'">'
			html +=					'<img src="'+date[i].img+'" alt="">'
			html +=					'<span>'+date[i].name+'</span>'
			html +=				'</a>'
			html +=			'</li>'
		}
		html += '</ul>'
		oCateContent.innerHTML = html
	}
	
}
function handleCountDown(){
	var aTimerNum = document.querySelectorAll('.timer-num')
	var timer = 0
	var endTime = new Date('2019/12/27 16:40:20')
	// console.log(aTimerNum)
	var endTimer = endTime.getTime()
	function bb(num){
		if(num<10){
			return '0'+num
		}else{
			return ''+num
		}
	}
	time()
	function time(){
		
		var nowTimer = Date.now()
		var timeOver = endTimer-nowTimer
		var miao = timeOver/1000
		if(miao<0){
			miao = 0
			clearInterval(time)
		}
		var iHour = parseInt(miao/3600)
		var iMinter = parseInt((miao%3600)/60)
		var iSecond = parseInt((miao%3600)%60)
		// console.log(iSecond)
		aTimerNum[0].innerHTML = bb(iHour)
		aTimerNum[1].innerHTML = bb(iMinter)
		aTimerNum[2].innerHTML = bb(iSecond)
	}
	setInterval(time,1000)
	// console.log(endTimer)
	// console.log(nowTimer)
	// console.log(timeOver)
	

}
//闪购切换
function handleProduct(){
	var aBtn = document.querySelectorAll('.ctr-btn')
	var oProductList = document.querySelector('.product-list')
	aBtn[0].onclick = function(){
		oProductList.style.marginLeft = '0px'
	}
	aBtn[1].onclick = function(){
		oProductList.style.marginLeft = '-978px'
	}
}
//处理商品家电切换
function handleElecProduct(){
	var aTabItem = document.querySelectorAll('.tab-item')
	for(var i = 0;i<aTabItem.length;i++){
		aTabItem[i].index = i
		aTabItem[i].onmouseenter = function(){
			for(var j = 0;j<aTabItem.length;j++){
				aTabItem[j].className = 'tab-item'
			}
			this.className = 'tab-item tab-item-active'
			loadCate(this.index)
		}
	}

	function loadCate(index){
		var date = aElecListData[index]
		console.log(date)

	}
}