/* Article Progress */

$ (window).resize (function () {
	var windows_top = $ (window).scrollTop ();
	var document_height = $ (document).height ();
	var window_height = $ (window).height ();

	var scrolled = (windows_top / (document_height - window_height)) * 100;
	
	if (scrolled < 50) $ (".progress-bar").removeClass ("progress-bar-success progress-bar-striped active").addClass ("progress-bar-danger");
	else $ (".progress-bar").removeClass ("progress-bar-danger progress-bar-striped active").addClass ("progress-bar-success");
	
	if (scrolled == 100) $ (".progress-bar").addClass ("progress-bar-striped active");

	$ (".progress-bar").css ("width", (scrolled + "%"));
});

$ (window).scroll (function () {
	var windows_top = $ (window).scrollTop ();
	var document_height = $ (document).height ();
	var window_height = $ (window).height ();

	var scrolled = (windows_top / (document_height - window_height)) * 100;

	if (scrolled < 50) $ (".progress-bar").removeClass ("progress-bar-success progress-bar-striped active").addClass ("progress-bar-danger");
	else $ (".progress-bar").removeClass ("progress-bar-danger progress-bar-striped active").addClass ("progress-bar-success");
	
	if (scrolled == 100) $ (".progress-bar").addClass ("progress-bar-striped active");

	$ (".progress-bar").css ("width", (scrolled + "%"));
});