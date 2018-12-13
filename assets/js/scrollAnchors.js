$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		scrollBar : true,
		onLeave: function(origin, destination, direction){
			var index = destination.index;
			console.log(index);
			if(index == 0){
				console.log('premiere');
				$('.gif-1').css("display", "block");
				$('.gif-2').css("display", "none");
				$('.gif-3').css("display", "none");
				// premiere
			} else if (index == 1){
				console.log('deuxieme');
				$('.gif-1').css("display", "none");
				$('.gif-2').css("display", "block");
				$('.gif-3').css("display", "none");
				// deuxieme section
			} else if (index == 2){
				// troisieme
				console.log('troisieme')
				$('.gif-1').css("display", "none");
				$('.gif-2').css("display", "none");
				$('.gif-3').css("display", "block");
			}
		},
	});
});
