$(document).ready(function(){
var imageCount = 1

var myimage = document.getElementById("imageholder").naturalWidth;

console.log(myimage);

function nextPhoto () {
		imageCount = imageCount+1;
		if (imageCount > 2){
			imageCount = 1
		}
		document.getElementById('imageholder').style.backgroundImage = 'url("images/'+imageCount+'.jpg")';
		console.log(imageCount)

	};

function previousPhoto () {
		imageCount = imageCount-1;
		if (imageCount <= 0){
			imageCount = 2
		}
		document.getElementById('imageholder').style.backgroundImage = 'url("images/'+imageCount+'.jpg")';
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



