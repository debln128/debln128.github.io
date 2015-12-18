var initialized = false;

var phrases = ['Become power among known direction',
               'Interest roots quickly yet against measure',
               'Building nothing developed melody',
               'Mind over matter',
               'Maps reach waves slowly through travel',
               'Force brought power filled with equations',
               'Distance grows wish',
               'Weather discovered interest',
               'Believe beside picked direction',
               'Heat filled strong notice',
               'Small boat, big travel',
               'Beautiful instruments lay built energy',
               'Thousands of equations lay wheels',
               'Questions drive general direction',
               'Anything questioned raised wonder',
               
              ];

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