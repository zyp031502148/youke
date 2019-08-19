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
function renderPage(currentPage){
	var option = {
		type : 'GET',
		url : './api/cepin_list.json',
		async : true,
		data:{
			//page:1
		},
		success : function(res){
			res = JSON.parse(res);
			console.log("当前获取数据：" + res);
			var list = res.data.list;
			var divcps = document.createElement('div');
			for(var i = 0; i < res.data.listSize; i++){
				divcps.className = "ceping-contents";
				var divcp = creatCp(list[i]);
				divcps.appendChild(divcp);
				cepingBody.innerHTML = "";
				cepingBody.appendChild(divcps);
			}
			if(currentPage==0){
				var lastPage = document.querySelector('.lastPage');
				lastPage.innerHTML = Math.ceil(res.data.total/12);
				createPage(lastPage.innerHTML);
			}
			
		}
	}
	ajax(option);
}

function createPage(total){
	var page = document.querySelector(".page").children[0].children;
	var pageParent = document.querySelector(".page").children[0]; 
	console.log(pageParent);	
	/*pageParent.innerHTML = (
												'<li class="pre-page" style="display: none"><a href="#"><img class="prePage" src="images/left2.png"></a></li>'
													+'<li class="act" id="pagelink">1</li>'
													+'<li class="sl">...</li>'
													+'<li id="pagelink" class="lastPage">'+total+'</li>'
													+'<li class="next-page"><a href="#"><img class="nextPage" src="images/right2.png"></a></li>'
													);*/
	var omit = document.querySelectorAll(".sl")[0];
	var lastPage = document.querySelector('.lastPage');
	for(var i=2; i<total; i++){
		var liNode = document.createElement("li");
		liNode.setAttribute('id', 'pagelink');
		liNode.innerHTML = i;
		if(i>5){
			liNode.style.display = 'none';
		}else{
			liNode.style.display = 'block';
		}
		pageParent.insertBefore(liNode,omit);
	}
	if(total<5){
		pageSl(0);
		page[total].style.display = 'none';
	}else{
		console.log(123);
		pageSl(1);
	}
}
function pageOnlyChange(item){
	var currentPage =  document.querySelector(".act");
	currentPage.classList.remove('act');
	item.classList.add('act');	
}
function pageSl(flag){
	var omit = document.querySelectorAll(".sl")[0];
	if(flag){
		omit.style.display = 'block';
	}else{
		omit.style.display = 'none';
	}
}
function pageMore(item){
	var currentPage =  document.querySelector(".act");
	var page = document.querySelector(".page").children[0].children;;
	var lastPage = document.querySelector('.lastPage');
	var jPageNum = parseInt(item.innerHTML);
	var total  = parseInt(lastPage.innerHTML);
	for(var i=1; i<total;i++){
		page[i].style.display = 'none';
	}
	page[jPageNum].classList.add('act');
	currentPage.classList.remove('act');	
	page[jPageNum].style.display = 'block';
	page[jPageNum-1].style.display = 'block';
	page[jPageNum-2].style.display = 'block';
	page[jPageNum+1].style.display = 'block';
	page[jPageNum+2].style.display = 'block';
}

	function jump(jPageNum,totalPage,item){
		if(jPageNum<totalPage){
			if(jPageNum>totalPage-2||jPageNum<3){
				pageOnlyChange(item);
			}else{
				pageMore(item);
				console.log('pagemore');
			}
			if(jPageNum+3 >= totalPage){
				pageSl(0);
			}else{
				pageSl(1);
				console.log(1);
			}
		}else if(jPageNum==totalPage||jPageNum==totalPage+1){
			pageOnlyChange(item);
		}
		if(jPageNum>1){
			prePage.style.display = 'block';
		}
	}
	var pageParent = document.querySelector(".page").children[0];
	var prePage = document.querySelector(".pre-page");
	var nextPage = document.querySelector(".next-page");
	var lastPage = document.querySelector('.lastPage');
	var ok = document.querySelector('#OK');
	var jumpPage = document.querySelector('#jumpPage');
	pageParent.onclick = function(){
		var item = event.target;
		var jPageNum = parseInt(item.innerHTML);
		var totalPage = parseInt(lastPage.innerHTML);
		renderPage(jPageNum);
		jump(jPageNum,totalPage,item);
	}
	prePage.onclick = function(){
		var itemIndex = document.querySelector(".act").innerHTML-1;
		var totalPage = parseInt(lastPage.innerHTML);
		renderPage(itemIndex);
		jump(itemIndex,totalPage,page[itemIndex]);
	}
	nextPage.onclick = function(){
		var itemIndex = parseInt(document.querySelector(".act").innerHTML)+1;
		var totalPage = parseInt(lastPage.innerHTML);
		renderPage(itemIndex);
		if(itemIndex==totalPage){
			itemIndex++;
		}
		jump(itemIndex,totalPage,page[itemIndex]);
	}
	ok.onclick = function(){
		var itemIndex = parseInt(jumpPage.value);
		var totalPage = parseInt(lastPage.innerHTML);
		if(itemIndex<=totalPage&&itemIndex>3){
			if(itemIndex==totalPage){
				itemIndex++;
			}
			renderPage(itemIndex);
			jump(itemIndex,totalPage,page[itemIndex]);
			jumpPage.value='';
		}else if(itemIndex<=totalPage&&itemIndex<=3&&totalPage>3){
			for(var i=itemIndex+2; i<totalPage;i++){
				page[i].style.display = 'none';
			}
			pageSl(1);
			page[1].style.display = 'block';
			page[2].style.display = 'block';
			page[3].style.display = 'block';
			pageOnlyChange(page[itemIndex]);
			renderPage(itemIndex);
		}else{
			alert("已超出页数！");
		}
		
	}
