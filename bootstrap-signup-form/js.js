$ ('#sign-modal').on ('hidden.bs.modal', function () {
    $ (".jumbotron").fadeIn ();
});

$ ('#sign-modal').on ('shown.bs.modal', function () {
	$ (".jumbotron").fadeOut ();
});

$ ("#sign-modal").modal ("show");

/* Y Axis Perspective */

var modal = $ (".modal-content");
var modalCenter = [modal.offset ().left + modal.width()/2, modal.offset ().top + modal.height()/2];

$ (document).mousemove (function (e) {
	var angle = Math.atan2 (e.pageX - modalCenter [0], (e.pageY - modalCenter [1])) * (180 / Math.PI);
	
	if (angle > 30 || angle < -30) return true;

	modal.css ({ "-webkit-transform": 'rotateY(' + angle + 'deg)'});

	modal.css ({ '-moz-transform': 'rotateY(' + angle + 'deg)'});
});