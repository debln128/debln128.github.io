var initialized = false;

var phrases = ['You are as true as your being',
               'Little things know best, but say where one stands',
               'Words will water down what questions ask',
               'Certain cries become questions',
               'Dont tell to be fair',
               'Down under something said',
               'Hours ask questions over fire',
               'Minutes contain decided truths',
               'Remember, no low notice',
               'Mountains grow high truths',
               'White words spell thought',
               'Row yourself to light',
               'Start always until being true',
               'Never close books, open words',
               'Who says north from south',
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