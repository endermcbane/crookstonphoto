$(document).ready(function(){
var imageCount = 1





function nextPhoto () {
		imageCount = imageCount+1;
		if (imageCount > 24){
			imageCount = 1
		}
		document.getElementById('imageholder').style.backgroundImage = 'url("images/p'+imageCount+'.jpg")';
		console.log(imageCount)

	};

function previousPhoto () {
		imageCount = imageCount-1;
		if (imageCount <= 0){
			imageCount = 2
		}
		document.getElementById('imageholder').style.backgroundImage = 'url("images/p'+imageCount+'.jpg")';
		console.log(imageCount)

	};

var autoAdvance = setInterval(function () {nextPhoto()}, 6000);


	$(".body").on('click', '.advanceImage', function(){
		nextPhoto();
		clearInterval(autoAdvance);
	});
	
	$(".body").on('click', '.backImage', function(){
		previousPhoto();
	});

});



