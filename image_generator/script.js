var RandomNumber = Math.round(Math.random() * 9+1 );
var RandomNumber2 = Math.round(Math.random() * 9+1 );
var RandomNumber3 = Math.round(Math.random() * 9+1 );
var RandomNumber4 = Math.round(Math.random() * 5 );





$("#buttonDiv").click(function() {
	RandomNumber = Math.round(Math.random() * 9+1 );
	RandomNumber2 = Math.round(Math.random() * 9+1 );
	RandomNumber3 = Math.round(Math.random() * 9+1 );
	RandomNumber4 = Math.round(Math.random() * 5 );
	$("#imageDiv").css("background-image", "url(img/shape" + RandomNumber + ".gif)");
	$("#imageDiv2").css("background-image", "url(img/shape" + RandomNumber2 + ".gif)");
	$("#imageDiv3").css("background-image", "url(img/shape" + RandomNumber3 + ".gif)");
	$("#imageDiv4").css("background-image", "url(img/word" + RandomNumber4 + ".gif)");
	
	// console.log("it worked!");
	
});


// var 




console.log(RandomNumber);

$("body").css("background-image", "url(img/shape3.gif)");