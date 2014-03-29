$(document).bind('mobileinit', function() {
	$.mobile.defaultPageTransition = 'slide';
});


$( document ).bind( 'pageshow', function(){
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".slider-holder",
		slideshowSpeed: 5000,
		directionNav: true,
		controlNav: false,
		animationDuration: 900
	});
});
