function getRandomInt (min, max) {
	return Math.floor (Math.random () * (max - min + 1)) + min;
}

$ (document).ready (function () {
	$ ('[data-toggle="popover"]').popover ({
		"html": true,
		"placement": "right",
		"viewport": "header",
		"trigger": "hover"
	});
	
	$ ('.btn-social').on ('show.bs.popover', function () {
		$ (".btn-feedback").css ("right", "-90px");
		$ (".btn-feedback").css ("opacity", "0.0");
    
		if ($ (this).hasClass ("btn-instagram")) {
			feedback = ".btn-heart";
			$ (".background").addClass ("reverse-gradient");
		} else {
			feedback = ".btn-retweet";
			$ (".background").removeClass ("reverse-gradient");
		}
		
		$ (feedback).each (function () {
			var random = getRandomInt (20, 80);
			$ (this).css ("top", random + "vh");
			
			random = getRandomInt (10, 25);
			$ (this).css ("right", random + "%");
			
			random = getRandomInt (1, 2);
			$ (this).css ("transition-duration", random + "s");
			
			$ (".btn-feedback").css ("opacity", "0.8");
		});
	});
	
	/*
	window.setTimeout (function () {
		$ (".btn-instagram").popover ("show");
	}, 1000);
	
	window.setTimeout (function () {
		$ (".btn-instagram").popover ("toggle");
		$ (".btn-twitter").popover ("toggle");
		
		window.setInterval (function () {
			$ (".btn-instagram").popover ("toggle");
			$ (".btn-twitter").popover ("toggle");			

			$ (".background").toggleClass ("reverse-gradient");
		}, 2000);
	}, 3000);
	*/
});