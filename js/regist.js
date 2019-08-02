window.onload = function(){
	var passwordLookIcon = document.getElementById('icon_eye_close');
	var passwordInput = document.getElementById('password');
	var password_input_text = document.getElementById('password_open');
	passwordLookIcon.onclick = function iconEyeChange(ev){
		console.log("123");
		if(passwordInput.type == "password"){
			passwordInput.type = "text";
			passwordLookIcon.style.backgroundImage = 'url(./images/open.png)'
		}else{
			passwordInput.type = "password";
			passwordLookIcon.style.backgroundImage = 'url(./images/close.png)'
		}
		/*if(password_look_icon.className == "icon_eye_close"){
			password_look_icon.className = "icon_eye_open";
			password_input_pass.style.display = 'none';
			password_input_text.style.display = 'inline-block';

		}else if(password_look_icon.className == "icon_eye_open"){
			password_look_icon.className = "icon_eye_close";
			password_input_text.style.display = 'none';
			password_input_pass.style.display = 'inline-block';
		}
*/
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
	
