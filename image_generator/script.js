var RandomNumber = Math.round(Math.random() * 9+1 );
var RandomNumber2 = Math.round(Math.random() * 9+1 );
var RandomNumber3 = Math.round(Math.random() * 9+1 );

var initialized = false;

var phrases = ['A','a','B','b','C','c','D','d','E','e','E','f','F','g','G','h','H','i','I','j','J','k','K','L','l','M',
'm','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];

var random_number = Math.floor(Math.random() * phrases.length),
    poem_to_use   = phrases[random_number];


$("#buttonDiv").click(function() {
	RandomNumber = Math.round(Math.random() * 9+1 );
	RandomNumber2 = Math.round(Math.random() * 9+1 );
	RandomNumber3 = Math.round(Math.random() * 9+1 );
	RandomNumber4 = Math.round(Math.random() * 9+1 );

	$("#imageDiv").css("background-image", "url(img/green" + RandomNumber + ".jpg)");
	$("#imageDiv2").css("background-image", "url(img/green" + RandomNumber2 + ".jpg)");
	$("#imageDiv3").css("background-image", "url(img/green" + RandomNumber3 + ".jpg)");
	

	
	$('.drawspace').mousemove(function(event) {
  
  var x              = event.pageX,
      y              = event.pageY,
      wrapped_phrase = "<div style='top: " + y + "px; left: " + x + "px;' class='phrase'>" + poem_to_use + "</div>";

$('.drawspace').append(wrapped_phrase);
});



$('.drawspace').click(function() {
  random_number = Math.floor(Math.random() * phrases.length);
  poem_to_use       = phrases[random_number];
  


  $(this).html('');
});
});
