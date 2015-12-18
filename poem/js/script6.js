var initialized = false;

var phrases = ['She wrote someone that observed yourself',
               'Design practice, to rise statement',
               'Separate planets to create rhythm',
               'Wish, although broken',
               'Solve sleep through practice',
               'Lost symbols seed business',
               'Direct cloud rises history',
               'Burning snow shouted fire',
               'Silent elements sense sight',
               'Blow branches, spread wings',
               'Thick oxygen, thin air',
               'Sharp string lifted weight',
               'Molecules solutioned stretched details',
               'Interesting terms sell information',
               'Silent solution arrived with sound',
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