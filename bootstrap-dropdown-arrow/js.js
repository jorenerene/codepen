$ (window).ready (function () {
	$ ('[data-toggle="popover"]').popover ();
	$ ('[data-toggle="tooltip"]').tooltip ();
	
	/* https://github.com/twbs/bootstrap/blob/master/js/dropdown.js */
	
	function clearBackdrop () {
		$ (".navbar-backdrop").remove ();
	}
	
	$ (".navbar .dropdown").on ('hidden.bs.dropdown', function () {
		clearBackdrop ();
	});
	
	$ (".navbar .dropdown").on ('shown.bs.dropdown', function () {
		if (!$ (".navbar-backdrop").length) {
			// if no .navbar-dropdown AND an open dropdown
			
			var backdrop = $ ("<div>", {
				class: "navbar-backdrop"
			});
			
			$ (backdrop).appendTo ("body").on ('click', clearBackdrop);
		}
	});
});