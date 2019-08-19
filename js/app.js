window.onload = function(){
	var searchBox = document.getElementById('searchbox');
	var seachOnclick = document.getElementById('keyword');
	var searchbtn = document.getElementById('searchbtn'); 
	seachOnclick.onclick = function(){
		console.log("!111");
		searchBox.className= "searchbox1";
		searchbtn.style.opacity = 1;
	}
	seachOnclick.onblur = function(){
		searchBox.className= "searchbox";
	}

	
}
