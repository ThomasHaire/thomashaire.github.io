$(document).ready(function(){
    $(this).scrollTop(0);
});

var text = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 80,
  backDelay: 700,
  backSpeed: 100,
  showCursor: true,
  cursorChar: '_',
  loop: true,
  loopCount: 1
});
