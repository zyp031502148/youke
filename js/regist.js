window.onload = function(){
	var passwordLookIcon = document.getElementById('icon_eye_close');
	var passwordInput = document.getElementById('password');
	var password_input_text = document.getElementById('password_open');
	var tel = document.querySelector('.tel');
	var fsyzBtn = document.querySelector('.fsyz_btn');
	var registBtn = document.querySelector('.regist_btn')
	passwordLookIcon.onclick = function iconEyeChange(ev){
		if(passwordInput.type == "password"){
			passwordInput.type = "text";
			passwordLookIcon.style.backgroundImage = 'url(./images/open.png)'
		}else{
			passwordInput.type = "password";
			passwordLookIcon.style.backgroundImage = 'url(./images/close.png)'
		}
	}
	fsyzBtn.onclick = function(){
		 var regPhone = /^1[3-9][0-9]{9}$/;
		 var telNumber = tel.value;
		 if(!regPhone.test(telNumber)){
		 		alert('请输入正确的手机号！')
		 }else{
		 	var option = {
		 		type:'GET',
		 		url:'',
		 		date:{
		 			tel:telNumber,
		 		},
		 		success:function(res){
		 			res = JSON.parse(res);
		 			var yzCode = res.yzCode;
		 		}
		 	}
		ajax(option);
	}
}
	registBtn.onclick = function(){
		var passwordVal = document.querySelector('#password').value;
		var option = {
		 		type:'GET',
		 		url:'',
		 		date:{
		 			tel:passwordVal,
		 		},
		 		success:function(res){
		 			res = JSON.parse(res);
		 		}
		 	}
	  ajax(option);
	}
	var searchBox = document.getElementById('searchbox');
	var seachOnclick = document.getElementById('keyword'); 
	seachOnclick.onclick = function(){
		searchBox.className= "searchbox1";
	}
	seachOnclick.onblur = function(){
		searchBox.className= "searchbox";
	}
}

	
