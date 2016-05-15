var phrases = ['A','a','B','b','C','c','D','d','E','e','E','f','F','g','G','h','H',
'i','I','j','J','k','K','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S',
's','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];

var imageDiv = ['#imageDiv', '#imageDiv2', '#imageDiv3', '#imageDiv4', '#imageDiv5',
'#imageDiv6', '#imageDiv7', '#imageDiv8', '#imageDiv9', '#imageDiv10', '#imageDiv11'];

var random;
var is_drawing = false;
var wrapped_phrase = '';
var poem_to_use;

var random_generator = function(max) {
  var random = Math.round(Math.random() * max);
  return random;
}


var random_phrase = function() {
  var random = random_generator(phrases.length - 1);
  poem_to_use = phrases[random];
  return poem_to_use;
}


var random_div = function() {
  var div = random_generator(imageDiv.length - 1);
  div = imageDiv[div];
  return div;
}

var random_image = function(div) {
  var image = random_generator(15);
  $(div).css("background-image", "url(img/green" + image + ".jpg)");
}

$("#buttonDiv").click(function() {
  var current_div = 0;
  for (var i = 0; i < imageDiv.length; i++) {
    random_image(imageDiv[current_div]);
    current_div++;
  }
  console.log(current_div);
});

var last_x, last_y, x, y;

$(window).mousedown(function(event) {
  poem_to_use = random_phrase();
  is_drawing = true;
});

$(window).mousemove(function(event) {
  x = event.pageX;
  y = event.pageY;
  wrapped_phrase = "<div style='top: " + y + "px; left: " + x + "px;' class='phrase'>" + poem_to_use + "</div>";

  if (is_drawing === true) {
    $('body').append(wrapped_phrase);
    console.log(wrapped_phrase);
  }
});

$(window).mouseup(function(event) {
  is_drawing = false;
  x = y = 0
  poem_to_use = "";
})
