
	var sent_btn = document.getElementById("sent_btn");
	var sent_txt = document.getElementById("sent_txt");
	var reply_btn = document.getElementById("reply_btn");
	var ccb_w_l_reader = document.getElementById('ccb_w_l_reader');

	/*获取时间函数*/
	function getTime(){
		var now = new Date();
		var y = now.getFullYear();
		var m = now.getMonth()+1;
		m = (m<10)?"0"+m:m;
		var d = now.getDate();
		var h = now.getHours();
		h = (h<10)?"0"+h:h;
		var mi = now.getMinutes();
		mi = (mi<10)?"0"+mi:mi;
		return y+'-'+m+'-'+d+" "+h+":"+mi;
	}
	var maxLenght = 300;
	var commentNum = document.getElementById("comment_num");
	var messege_number = document.getElementById('messege_number');
	var comment_div = document.getElementById("comment_div");
	sent_btn.onclick = function(){
		if (sent_txt.value == "") {
			alert("发布内容不能为空！");
		}else{
			comment_div.innerHTML +='<div class="ccb_w_l_reader"><div><img src="images/user-head.png"><div  class="ccb_w_l_reader_t"><span class="user_name">艳丽</span><span class="comment_time">'+getTime()+'</span><p>'+sent_txt.value+'</p><a href="#">回复</a></div></div></div>'
			sent_txt.value ="";
			
			messege_number.innerHTML++;
			
			return false;
		}
	}

	sent_txt.onkeyup = function(){
		if(sent_txt.value.length > maxLenght){
				sent_txt.substring(0,300);
				commentNum.innerHTML = 300;
			}else{
				commentNum.innerHTML = sent_txt.value.length;
			}
	}

	var dz_action = document.getElementById('dz_action');
	var dz_number = document.getElementById('dz_number');
	dz_action.onclick = function(){
		dz_number.innerHTML++; 
	}


//为一条动态点赞


	// function commentReply(){
	// 	user_reply_txt.style.width = 500+"px";
	// 	user_reply_txt.remove();
	// 	this.parentNode.appendChild("<div class = 'user_reply_txt'><textarea name = '' cols = '40' rows='5'></textarea><br><input type = 'submot' value = '发表'></div>");
	// 	}
	// 	reply_btn.onclick = commentReply();

