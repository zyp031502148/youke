function formsParams(data){
		var arr = [];
		for(var prop in data){
			arr.push(prop + "=" + data[prop]);
		}
		return arr.join("&");
	}

/**
	 * @param  {type,url,async,data,success}
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
			}

			if (xhr.readyState == 4 && xhr.status !== 200) {
				alert(xhr.status);
			}

		}
	}