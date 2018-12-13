$(document).ready(function(){
  $(window).bind('scroll',function(e){
      parallaxScroll();
  });

  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg3').css('top',(0-(scrolled*.3))+'px');
  }

  function changeSrc(){
  	var scrolled = $(window).scrollTop();
  	var screen = $(window).height();

  	if(scrolled<screen){
  		console.log('premiere');
  		$('.gif-1').css("display", "block");
  		$('.gif-2').css("display", "none");
  		$('.gif-3').css("display", "none");
  		// premiere
  	} else if (scrolled>screen && scrolled<2*screen){
  		console.log('deuxieme');
  		$('.gif-1').css("display", "none");
  		$('.gif-2').css("display", "block");
  		$('.gif-3').css("display", "none");
  		// deuxieme section
  	} else if (scrolled>2*screen){
  		// troisieme
  		console.log('troisieme')
  		$('.gif-1').css("display", "none");
  		$('.gif-2').css("display", "none");
  		$('.gif-3').css("display", "block");
  	}
  }
})
