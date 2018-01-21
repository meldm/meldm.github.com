window.onload = function() {
	var bkgColor = document.getElementById("rowColors"),
		bkgGreen = document.getElementById("boxGreen"),
		bkgBlue = document.getElementById("boxBlue"),
		bkgRainbow = document.getElementById("boxRainbow");

	bkgGreen.addEventListener("click", function() {document.body.className = "backgr-green";});
	bkgBlue.addEventListener("click", function() {document.body.className = "backgr-blue";});
	bkgRainbow.addEventListener("click", function() {document.body.className = "backgr-rainbow";});	
}();