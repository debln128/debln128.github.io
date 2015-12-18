var initialized = false;

var phrases = ['Dead evenings settled yellow tones',
               'Quiet temperatures joined fear',
               'Death poem, silent crowd',
               'Flat elements swim silence',
               'Branches died with oxygen',
               'Insects lie under current wings',
               'Electric bones value silence',
               'Fear stretched located death',
               'Crops dry in the fall',
               'Black birds picked to fear',
               'Strange feeling, thick blood',
               'Bell sounds indicate evenings',
               'Printed marks allow action',
               'Death gun rose conditions',
               'Dead experience observes glass'
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