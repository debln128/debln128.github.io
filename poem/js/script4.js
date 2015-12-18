var initialized = false;

var phrases = ['Controlled feelings, wonder themselves',
               'Hope springs elements determined by love',
               'Broken strings streched chance into loving',
               'Sleep wonders tiny feelings',
               'Drawing plains under your skin',
               'Stone floor, soft heart',
               'Seeds join equal feelings',
               'Express someone, speak quiet',
               'Single woman caught ring',
               'He wrote everyone he loved',
               'Sleep melody springs waves',
               'To believe, is key to soul',
               'Break yourself, lost captain',
               'Alone decimal, banked numeral',
               'Flowers laughed in result of love',

               
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