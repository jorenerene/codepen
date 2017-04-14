/* https://developers.google.com/youtube/iframe_api_reference */

var tag = document.createElement ("script");

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName ("script")[0];
firstScriptTag.parentNode.insertBefore (tag, firstScriptTag);

var playerOne, playerTwo;

function onYouTubeIframeAPIReady () {
	playerOne = new YT.Player ("playerOne", {
		videoId: "pXo-qYia8Yg",
		playerVars: {
			controls: 0,
			showinfo: 0,
			modestbranding:1,
			autohide:1
		},
		events: {
			"onReady": onPlayerReady,
			"onStateChange": onPlayerStateChange
		}
	});

	playerTwo = new YT.Player ("playerTwo", {
		videoId: "V4s8bjN0BAM",
		playerVars: {
			controls: 0,
			showinfo: 0,
			modestbranding:1,
			autohide:1
		},
		events: {
			"onReady": onPlayerReady,
			"onStateChange": onPlayerStateChange
		}
	});
}

function onPlayerReady (event) {
	$ ("#layer-toggle").removeClass ("black");
	
	event.target.mute ();
	event.target.playVideo ();
}

function onPlayerStateChange (event) {
	if (event.data === YT.PlayerState.ENDED) {
		event.target.playVideo (); 
	}
}

function paternalParent () {
	$ ("#switch").addClass ("toggle");
	
	$ ("body").css ("background", "linear-gradient(rgba(255,227,227,0.85), rgba(255,227,227,0.85)), url('https://68.media.tumblr.com/6c894cc54d4ec81fc7c229bcf54b7257/tumblr_ondvifW3F31qjqi9so1_1280.png')");
}

function maternalParent () {
	$ ("#switch").removeClass ("toggle");
	
	$ ("body").css ("background", "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://68.media.tumblr.com/2d5b3d2e1a59bc02b3c1578377416171/tumblr_ondjrxqPIX1qjqi9so1_1280.png')");
}

$ (window).ready (function () {
	$ (window).keydown (function (e) {
		if (e.which == 80) {
			paternalParent ()
		}
	});
	
	$ (window).keyup (function (e) {
		if (e.which == 80) {
			maternalParent ()
		}
	});
	
	$ ("#layer-toggle").on ("mousedown touchstart", function (e) {
		paternalParent ()
	});

	$ ("#layer-toggle").on ("mouseup touchend", function (e) {
		maternalParent ()
	});
});