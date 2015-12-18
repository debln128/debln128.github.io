var initialized = false;

var phrases = ['...'];

var random_number = Math.floor(Math.random() * phrases.length),
    poem_to_use   = phrases[random_number];

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