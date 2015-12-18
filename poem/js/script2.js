var initialized = false;

var phrases = ['First change, large answer',
               'Water before thought',
               'Years to spell sound live',
               'Like time may change',
               'New place to picture',
               'Boy came after mother',
               'New day, new him',
               'Help through starts, mountains climb',
               'Tree thoughts head under air',
               'People use their time to start',
               'Place things after birth',
               'Years to live, change air',
               'Begin life between ideas',
               'Plants give spell to being',
               'Eyes light thought without talk'
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