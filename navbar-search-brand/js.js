$ (window).ready (function () {
	menuHoverX = 0;
	menuHoverY = 0;
	
	function consoleHover () {
		console.log ("menuHoverX: " + menuHoverX);
		console.log ("menuHoverY: " + menuHoverY);
	}

	$ ('[data-toggle="popover"]').popover ({
		trigger: "click",
		html: "true"
	});
	
	$ ('[data-toggle="tooltip"]').tooltip ();
	
	$ ("ul.nav .dropdown").hover (function (e) {
		/*
		Cancel hover event if user scrolls towards open dropdown despite hovering over adjacent dropdowns.
		*/
		
		if ($ (".navbar-toggle").css ("display") == "block") return true;
		
		$ (this).addClass ("open");
	}, function (e) {
		if ($ (".navbar-toggle").css ("display") == "block") return true;
		
		$ (this).removeClass ("open");
	});
	
	$ (".navbar").mouseleave (function () {
		menuHoverX = 0;
		menuHoverY = 0;
	});
});