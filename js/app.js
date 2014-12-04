$(document).ready(function(){
var imageCount = 1
function nextPhoto () {
		imageCount = imageCount+1;
		document.getElementById('imageholder').style.backgroundImage = 'url("images/2.jpg")';
		console.log(imageCount)

	};

	$(".heading").on('click', '.navigation', function(){
		nextPhoto();
	});
	

});