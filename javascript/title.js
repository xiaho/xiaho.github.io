if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}
function loaded(){
	setInterval(loop, 300);
}
var x = 0;
var titleText = [ "乡", "乡|", "乡h/", "乡hy|", "乡hyp/", "乡hyph|", "乡hyphy/", "乡hyphy|", "乡hyph/", "乡hyp|", "乡hy/", "乡h|", "乡/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}