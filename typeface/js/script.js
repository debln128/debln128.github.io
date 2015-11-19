var soundon = false;
var hovered = false;

$('.letter_l').on('mouseover', function () {
     console.log(this);
  $(".letter_l p").show();
  $('.img_lonely').show();
    if (soundon == false) {
        document.getElementById("windaudio1").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio1").pause();
        soundon = false;
    }
});


$('.letter_l').mouseenter(function() {
     
          $('.letter_l div').css('background-color', 'pink');
});

 $('.letter_o').on('mouseover', function () {
     console.log(this);
  $(".letter_o p").show();
  $('.img2_lonely').show();
   if (soundon == false) {
        document.getElementById("windaudio2").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio2").pause();
        soundon = false;
    }
});

$('.letter_o').mouseenter(function() {
     
          $('.letter_o div').css('background-color', 'pink');
});

 $('.letter_n').on('mouseover', function () {
     console.log(this);
  $(".letter_n p").show();
  $('.img3_lonely').show();
   if (soundon == false) {
        document.getElementById("windaudio3").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio3").pause();
        soundon = false;
    }
  
 });
 
 $('.letter_n').mouseenter(function() {
     
          $('.letter_n div').css('background-color', 'pink');
          
});
  
$('.letter_e').on('mouseover', function () {
     console.log(this);
  $(".letter_e p").show();
  $('.img4_lonely').show();
   if (soundon == false) {
        document.getElementById("windaudio4").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio4").pause();
        soundon = false;
    }
 
});

 $('.letter_e').mouseenter(function() {
     
          $('.letter_e div').css('background-color', 'pink');
          
});

 $('.letter_l2').on('mouseover', function () {
     console.log(this);
  $(".letter_l2 p").show();
  $('.img5_lonely').show();
   if (soundon == false) {
        document.getElementById("windaudio5").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio5").pause();
        soundon = false;
    }
 
});

 $('.letter_l2').mouseenter(function() {
     
          $('.letter_l2 div').css('background-color', 'pink');
          
});

 $('.letter_y').on('mouseover', function () {
     console.log(this);
  $(".letter_y p").show();
  $('.img6_lonely').show();
   if (soundon == false) {
        document.getElementById("windaudio6").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio6").pause();
        soundon = false;
    }
 
});

 $('.letter_y').mouseenter(function() {
     
          $('.letter_y div').css('background-color', 'pink');
          
});

    




    

    
    
    

    








