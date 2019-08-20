
window.onload = function(){
 
	var slides = document.getElementsByClassName("wrapslider")[0];
	var pic = document.getElementsByClassName("slidesimg")[0];
	var ul = document.getElementsByClassName("flex-viewport")[0];
	var ridio = slides.getElementsByClassName("ridio")[0];
	var sliderbtn = slides.getElementsByClassName("sliderbtn")[0];
	var imgWidth = pic.offsetHeight;
	ul.style.height = imgWidth+"px";

	//复制第一张图到ul的最后一项
	var tempLi = ul.children[0].children[0];
	ul.children[0].appendChild(tempLi);
	
	//给Ol中添加li
	for (var i = 0; i < ul.children[0].children.length; i++) {
		var newOlLi = document.createElement("li");
		ridio.children[0].appendChild(newOlLi);
	}

	var olLoArr = ridio.children[0].children;
	olLoArr[0].classList.add("current");

  //上下切换图片
  var key = 0;
  var flag = 0;
  var  divArr = sliderbtn.children;
  divArr[0].onclick = function(ev){
  	key--;
  	flag--;
  	if(flag == 0 || key < 0){
  		key = 0;
  		flag = 0;
  		ul.children[0].style.top = -flag*imgWidth + "px";
  	}
  	if(key >0 && flag >=0){
  		ul.children[0].style.top = -flag*imgWidth + "px";
  	}
  	console.log(olLoArr[flag]);
  	for (var j = 0; j < olLoArr.length; j++) {
				olLoArr[j].className = "";
			}
  	olLoArr[flag].classList.add ("current") ;
  }
  divArr[1].onclick = function(ev){
  	key++;
  	flag++;
  	if(flag == ul.children[0].children.length-1 || key >= (ul.children[0].children.length)){
  		key = ul.children[0].children.length-1;
  		flag = ul.children[0].children.length-1;
  		ul.children[0].style.top = -flag*imgWidth+"px";
  	}
  	console.log(ul.children[0].style.top.toString());
  	if(key > 0 && flag < ul.children[0].children.length-1){
  		ul.children[0].style.top = -flag*imgWidth+"px";
  	}
  	for (var j = 0; j < olLoArr.length; j++) {
				olLoArr[j].className = "";
			}
  	olLoArr[flag].classList.add ("current") ;
  }

	//鼠标放在ol上切换照片
	for (var i = 0; i < olLoArr.length; i++) {
		olLoArr[i].index = i;
		olLoArr[i].onmouseover = function(ev){
			for (var j = 0; j < olLoArr.length; j++) {
				olLoArr[j].className = "";
			}
			this.classList.add ("current");
			ul.children[0].style.top = -this.index * imgWidth+"px";
		}
	}
	//自动轮换图片
	var key2 = 0;
	function autoplay(){
		
		if(key2 < olLoArr.length-1){
			key2++;
			ul.children[0].style.top = -key2 * imgWidth + "px";
		}else if(key2 = olLoArr.length-1){
			key2 = 0;
			ul.children[0].style.top = -key2 * imgWidth + "px";
		}
		for (var j = 0; j < olLoArr.length; j++) {
				olLoArr[j].className = "";
			}
			olLoArr[key2].classList.add ("current");
	}
	setInterval(autoplay,3000);

	
		
	var searchbtn = document.getElementById('searchbtn'); 
	var searchBox = document.getElementById('searchbox');
	var seachOnclick = document.getElementById('keyword'); 
	seachOnclick.onclick = function(){
		searchBox.className= "searchbox1";
		searchbtn.style.opacity = 1;
	}
	seachOnclick.onblur = function(){
		searchBox.className= "searchbox";
	}

	var newGoods = document.querySelectorAll(".new-goods>.goods>.reduction");
	var fashionGoods = document.querySelectorAll(".fashion-goods>.goods>.reduction")
	var newGoodsReduction = newGoods;
	var newGoodsoption = {
		type : 'GET',
		url : '../api/products_list.json',
		async : true,
		data:{
			
		},
		success : function(res){
			res = JSON.parse(res);
			console.log(res);
			var data = res.data.list;
			console.log(newGoodsReduction.length);
			for(var i = 0; i<newGoodsReduction.length; i++){
				console.log(data[i].goodsImg);
				newGoodsReduction[i].children[0].children[0].children[0].src = data[i].goodsImg;
				newGoodsReduction[i].children[0].children[0].children[1].src = 'images/a+.png';
				newGoodsReduction[i].children[0].children[1].children[0].innerHTML = data[i].goodsName;
				newGoodsReduction[i].children[0].children[1].children[1].innerHTML = data[i].likeNumber;
			}
		
	}
	
}
ajax(newGoodsoption);
var fashionGoodsoption = {
		type : 'GET',
		url : '../api/products_list.json',
		async : true,
		data:{
			
		},
		success : function(res){
			res = JSON.parse(res);
			console.log(res);
			var data = res.data.list;
			for(var i = 0; i<fashionGoods.length; i++){
				console.log(data[i].goodsImg);
				fashionGoods[i].children[0].children[0].children[0].src = data[i].goodsImg;
				fashionGoods[i].children[0].children[0].children[1].src = 'images/a+.png';
				fashionGoods[i].children[0].children[1].children[0].innerHTML = data[i].goodsName;
				fashionGoods[i].children[0].children[1].children[1].innerHTML = data[i].likeNumber;
			}
		
	}
	
}
ajax(fashionGoodsoption);
var babyMotherGoods = document.querySelectorAll(".baby-mother>.goods>.reduction")
var babyMotherGoodsoption = {
		type : 'GET',
		url : '../api/products_list.json',
		async : true,
		data:{
			
		},
		success : function(res){
			res = JSON.parse(res);
			console.log(res);
			var data = res.data.list;
			for(var i = 0; i<babyMotherGoods.length; i++){
				console.log(data[i].goodsImg);
				babyMotherGoods[i].children[0].children[0].children[0].src = data[i].goodsImg;
				babyMotherGoods[i].children[0].children[0].children[1].src = 'images/a+.png';
				babyMotherGoods[i].children[0].children[1].children[0].innerHTML = data[i].goodsName;
				babyMotherGoods[i].children[0].children[1].children[1].innerHTML = data[i].likeNumber;
			}
		
	}
	
}
ajax(babyMotherGoodsoption);

var foodDrinkGoods = document.querySelectorAll(".food-drink>.goods>.reduction")
var foodGrinkGoodsoption = {
		type : 'GET',
		url : '../api/products_list.json',
		async : true,
		data:{
			
		},
		success : function(res){
			res = JSON.parse(res);
			console.log(res);
			var data = res.data.list;
			for(var i = 0; i<foodDrinkGoods.length; i++){
				console.log(data[i].goodsImg);
				foodDrinkGoods[i].children[0].children[0].children[0].src = data[i].goodsImg;
				foodDrinkGoods[i].children[0].children[0].children[1].src = 'images/a+.png';
				foodDrinkGoods[i].children[0].children[1].children[0].innerHTML = data[i].goodsName;
				foodDrinkGoods[i].children[0].children[1].children[1].innerHTML = data[i].likeNumber;
			}
		
	}
	
}
ajax(foodGrinkGoodsoption);
var homeGoods = document.querySelectorAll(".home>.goods>.reduction")
var homeGoodsoption = {
		type : 'GET',
		url : '../api/products_list.json',
		async : true,
		data:{
			
		},
		success : function(res){
			res = JSON.parse(res);
			console.log(res);
			var data = res.data.list;
			for(var i = 0; i<homeGoods.length; i++){
				console.log(data[i].goodsImg);
				homeGoods[i].children[0].children[0].children[0].src = data[i].goodsImg;
				homeGoods[i].children[0].children[0].children[1].src = 'images/a+.png';
				homeGoods[i].children[0].children[1].children[0].innerHTML = data[i].goodsName;
				homeGoods[i].children[0].children[1].children[1].innerHTML = data[i].likeNumber;
			}
		
	}
	
}
ajax(homeGoodsoption);

}
