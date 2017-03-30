$ (window).ready (function () {
	$ ("#topper").click (function () {
		$ ("#arrow-center").removeClass ("buzz").addClass ("away");
	});

	// Topper
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 800,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	chevron = $ ("#chevron"),
	arrows = $ ("#arrows"),
	trails = $ (".trails"),
	topper = $ ('.topper');

	// Toggle Topper
	$ (window).scroll (function () {
		($ (this).scrollTop () > offset) ? chevron.addClass ('is-visible') : topper.removeClass ('is-visible fade-out');
		
		if ($ (this).scrollTop () > offset_opacity) { 
			topper.addClass ('fade-out');
		}
	});
	
	$ ("#chevron").hover (function () {
		$ ("#arrows").addClass ("is-visible");
		$ (".trails").addClass ("buzz");
	}, function () {
		$ ("#arrows").removeClass ("is-visible");
	});
	
	$ (".topper").click (function () {
		$ ("#arrows").addClass ("away");
	});

	// Smooth Topper
	topper.on ('click', function (event) {
		event.preventDefault ();
		$ ('body, html').animate ({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});