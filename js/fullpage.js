window.onload = function() {
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	var fullpage_img = document.getElementById('fullpage_img');
	var green_bg = document.getElementById('green_bg');
	var white_bg = document.getElementById('white_bg');
	var yellow_bg = document.getElementById('yellow_bg');
	var black_bg = document.getElementById('black_bg');
	var img_position = document.getElementById('img_position');
	var full_page2 = document.getElementById('full_page2')
	var full_page3 = document.getElementById('full_page3')
	var full_page4 = document.getElementById('full_page4')
	var full_page5 = document.getElementById('full_page5')



	/*	green_bg.style.width = w+"px";
		green_bg.style.height = h*0.72+"px";
		white_bg.style.width = w + "px";
		white_bg.style.height = h*0.03 + "px";
		yellow_bg.style.width = w + "px";
		yellow_bg.style.height = h*0.2 + "px"
		black_bg.style.width = w + "px";
		black_bg.style.height = h*0.05 + "px";*/
	/*full_page2.style.height = h + "px";
	full_page3.style.height = h + "px";
	full_page4.style.height = h + "px";
	full_page5.style.height = h + "px";*/

	// fullpage_img.style.height = h + "px";

	//给ol中添加li
	var fullpage_radio = document.getElementsByClassName("fullpage_radio")[0];
	for (var i = 0; i < fullpage_img.children.length; i++) {
		var newOlLi = document.createElement("li");
		fullpage_radio.children[0].appendChild(newOlLi);
	}
	//当时这一个选项时给响应li添加样式
	var olliArr = fullpage_radio.children[0].children;
	olliArr[0].classList.add("fullpage_li_on");

	// 设置开关索引
	var flag = true;
	var index = 0;

	//封装事件，兼容浏览器。
	function on(obj, eventType, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(eventType, fn);
		} else {
			obj.attachEvent("on" + eventType, fn);
		}
	}

	//鼠标滚动事件处理函数
	function handler(e) {
		var _e = window.event || e;
		if (flag) {
			flag = false;
			if (_e.wheelDelta == 120 || _e.datail == -3) {
				index--;
				if (index < 0) {
					index = 0;
				}
			} else {
				index++;
				if (index > olliArr.length - 1) {
					index = olliArr.length - 1;
				}
			}
			fullpage_img.style.top = -index * h + "px";
			for (var j = 0; j < olliArr.length; j++) {
				olliArr[j].className = "";
			}
			olliArr[index].className = "fullpage_li_on";
			setTimeout(function() {
				flag = true;
			}, 1000);
		}
	}
	on(document, "mousewheel", handler); //滚轮滚动事件
	on(document, "DOMMouserScroll", handler); //滚动事件，适配火狐浏览器
	on(window, "resize", function() {
		w = document.documentElement.clientWidth;
		h = document.documentElement.clientHeight;
	});
	// 左边列表点击处理

	/**
	 * [move description]
	 * @return {[type]} [description]
	 */
	function move(index) {
		for (var j = 0; j < olliArr.length; j++) {
			olliArr[j].className = "";
		}
		olliArr[index].className = "fullpage_li_on";
		//fullpage_img.style.top = -this.tag*h + "px";
		//错误的
		var timer = setInterval(function() {
			//alert(this.tag);
			if (fullpage_img.offsetTop <= -index * h) {
				clearInterval(timer);
				fullpage_img.style.top = -index * h + "px";
			} else {
				fullpage_img.style.top = fullpage_img.offsetTop - 10 + "px";
			}
		}, 30);
	}


	for (var i = 0; i < olliArr.length; i++) {
		olliArr[i].tag = i;
		olliArr[i].onclick = function() {
			move(this.tag);
		}
	}
}