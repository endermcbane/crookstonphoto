$(document).ready(function(){
var imageCount = 1



var myimage = document.getElementById("imageholderPort").naturalWidth;

console.log(myimage);

function nextPhoto () {
		imageCount = imageCount+1;
		if (imageCount > 24){
			imageCount = 1
		}
		document.getElementById('imageholderPort').style.backgroundImage = 'url("images/p'+imageCount+'.jpg")';
		console.log(imageCount)

	};

function previousPhoto () {
		imageCount = imageCount-1;
		if (imageCount <= 0){
			imageCount = 24
		}
		document.getElementById('imageholderPort').style.backgroundImage = 'url("images/p'+imageCount+'.jpg")';
		console.log(imageCount)

	};

var autoAdvance = setInterval(function () {nextPhoto()}, 6000);


	$(".body").on('click', '#advance', function(){
		nextPhoto();
		clearInterval(autoAdvance);
	});

	$(".body").on('click', '.advanceImage', function(){
		nextPhoto();
		clearInterval(autoAdvance);
	});
	
	$(".body").on('click', '#previous', function(){
		previousPhoto();
		clearInterval(autoAdvance);
	});

	$(".body").on('click', '.backImage', function(){
		previousPhoto();
		clearInterval(autoAdvance);
	});


$('#advance').mouseenter(function() {
	    $('.advanceImage').show();
	  })
	 .mouseleave(function() {
	    $('.advanceImage').hide();
	  })

$('.advanceImage').mouseenter(function() {
	    $('.advanceImage').show();
	  })


$('#previous').mouseenter(function() {
	    $('.backImage').show();
	  })
	 .mouseleave(function() {
	    $('.backImage').hide();
	  })

$('.backImage').mouseenter(function() {
	    $('.backImage').show();
	  })
});
