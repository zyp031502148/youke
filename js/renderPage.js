function creatCp(item) {
		var divcp = document.createElement("div");
		divcp.className = "ceping-content";
		divcp.innerHTML = (
			'<a href="comment.html">' +
			'<img src=' + item.img + '>' +
			'<p class="ceping-text">' + item.introduction + '</p>' +
			'<p class="time">' + item.time + '</p>' +
			'<span>' +
			'<span>' + item.likeNumber + '</span>' +
			'点赞' +
			'<span>/</span>' +
			'<span>' + item.commentNumber + '</span>' +
			'评论' +
			'</span>' +
			'</a>'
		);
		return divcp;
	}

/**
 * [renderPage description]
 * @param  {接口} url [description]
 * @return {[type]}     [description]
 */
function renderPage(url){
	var option = {
		type : 'GET',
		url : url,
		async : true,
		data:{
		},
		success : function(res){
			res = JSON.parse(res);
			console.log("当前获取数据：" + res);
			var list = res.data.list;
			var divcps = document.createElement('div');
			for(var i = 0; i < list.length; i++){
				divcps.className = "ceping-contents";
				var divcp = creatCp(list[i]);
				divcps.appendChild(divcp);
				cepingBody.innerHTML = "";
				cepingBody.appendChild(divcps);
			}
		}
	}
	ajax(option);
}