$ (window).ready (function () {
	$ ("[data-toggle=tooltip]").tooltip ({
		"container": "body",
		"trigger": "hover"
	});
	
	$ ("[data-toggle=tooltip]").click (function () {
		$ (this).tooltip ("hide");
		$ (this).popover ("show");
	});
	
	$ ("[data-toggle=tooltip]").hover (function () {}, function () {
		$ (this).popover ("hide");
	});
	
	$ ("[data-toggle=tooltip]").popover ({
		"trigger": "click",
		"container": "body",
		"placement": "auto",
		"html": true
	});
	
function ellipse (context, cx, cy, rx, ry) {
	context.translate (cx - rx, cy - ry);
	context.scale (rx, ry);
	context.arc (1, 1, 1, 0, 2 * Math.PI, false);
}
	
function draw() {
	var canvas = document.getElementById ('canvas-rabbit');
	
	if (canvas.getContext) {
		var ctx = canvas.getContext ('2d');

		ctx.fillStyle = "white";
		ctx.save (); // save state
		ctx.beginPath();
		ctx.translate (130, 130);
		ctx.rotate (-20 * Math.PI / 180);
		ctx.translate (-130, -130);
		ellipse (ctx, 130, 75, 20, 50); // Left Ear
		ctx.restore (); // restore to original state
		ctx.fill ();

		ctx.fillStyle = "pink";
		ctx.save (); // save state
		ctx.beginPath();
		ctx.translate (130, 130);
		ctx.rotate (-20 * Math.PI / 180);
		ctx.translate (-130, -130);
		ellipse (ctx, 130, 75, 12, 36); // Inside Left Ear
		ctx.restore (); // restore to original state
		ctx.fill ();

		ctx.fillStyle = "white";
		ctx.save (); // save state
		ctx.beginPath();
		ctx.translate (170, 130);
		ctx.rotate (20 * Math.PI / 180);
		ctx.translate (-170, -130);
		ellipse (ctx, 170, 75, 20, 50); // Right Ear
		ctx.restore (); // restore to original state
		ctx.fill ();

		ctx.fillStyle = "pink";
		ctx.save (); // save state
		ctx.beginPath();
		ctx.translate (170, 130);
		ctx.rotate (20 * Math.PI / 180);
		ctx.translate (-170, -130);
		ellipse (ctx, 170, 75, 12, 36); // Inside Right Ear
		ctx.restore (); // restore to original state
		ctx.fill ();

		ctx.beginPath ();
		ctx.arc (150, 150, 50, 0, Math.PI * 2, true); // Outer circle
		ctx.fillStyle = "white";
		ctx.fill ();

		ctx.save (); // save state
		ctx.beginPath();
		ellipse (ctx, 130, 135, 2.5, 5);
		ctx.restore (); // restore to original state
		ctx.fillStyle = "black";
		ctx.fill ();

		// ctx.beginPath ();
		// ctx.arc (170, 135, 5, 0, Math.PI * 2, true);  // Right eye
		ctx.save (); // save state
		ctx.beginPath();
		ellipse (ctx, 170, 135, 2.5, 5);
		ctx.restore (); // restore to original state
		ctx.fill ();

		ctx.fillStyle = "pink";
		ctx.save (); // save state
		ctx.beginPath();
		ellipse (ctx, 150, 160, 10, 5); // Nose
		ctx.restore (); // restore to original state
		ctx.fill ();
	}
}

draw ();
});