function formsParams(data){
		var arr = [];
		for(var prop in data){
			arr.push(prop + "=" + data[prop]);
		}
		return arr.join("&");
	}

/**
	 * @param  {[type]}
	 * @return {[type]}
	 */
	function ajax(options){
		var xhr = null;
		var params = formsParams(options.data);
		//创建对象
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//链接
		if (options.type == "GET") {
			xhr.open(options.type, options.url + "?" +params, options.async);
			xhr.send(null);
		}else if(options.type == "POST"){
			xhr.open(options.type,options.url,options.async);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(params);
		}
		/********************************************************
		application/x-www-form-urlencoded------------表单数据类型
		application/multipart/form-data--------------上传文件类型
		application/text/plian-----------------------文本数据类型
		*********************************************************/
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				options.success(xhr.responseText);
			}else{
				alert(xhr.status);
			}
		}
	}

	var username = document.getElementById("username");
	var password = document.getElementById("password");


	/*使用案例*/
	var options =  {
		type: 'GET',
		url: './api/login_success.json',
		async: true,
		data: {
			username: "username.value",
			userpassword: "password.value"
		},
		success: function(res) {
			res = JSON.parse(res);
			console.log(res);
			// console.log(res.data.userName);
		}

	}
		var lg_btn = document.getElementById("lg_btn");
		lg_btn.onclick = ajax(options);