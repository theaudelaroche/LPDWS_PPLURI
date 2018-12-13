$(document).ready(function(){
  $(window).bind('scroll',function(e){
      parallaxScroll();
  });

  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg3').css('top',(0-(scrolled*.3))+'px');
  }
})
