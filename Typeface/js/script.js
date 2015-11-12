var soundon = false;


$('.letter_l').click(function(){
    $('.img_lonely').show();
    if (soundon == false) {
        document.getElementById("windaudio").play();
        soundon = true; 
    } else {
        document.getElementById("windaudio").pause();
        soundon = false;
    }
    
$('.letter_o').click(function(){
    $('.img2_lonely').show();
     document.getElementById("windaudio").pause();
});
    
});







