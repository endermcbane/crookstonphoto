$(document).ready(function(){
var imageCount = 1
function nextPhoto () {
		imageCount = imageCount+1;
		if (imageCount > 2){
			imageCount = 1
		}
		document.getElementById('imageholder').style.backgroundImage = 'url("images/'+imageCount+'.jpg")';
		console.log(imageCount)

	};

	$(".heading").on('click', '.navigation', function(){
		nextPhoto();
	});
	

});