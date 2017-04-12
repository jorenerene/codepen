$ ("#font-size").slider({
	tooltip: "always",
	formatter: function(value) {
		return value + "px";
	}
});

$ ("#font-size").on ("slide", function (e) {
	// $ ("#value").text (e.value);
});

$.getJSON ("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCJQllfCsU4TQDNQ19GifRDV_HNyWD07fk", function (data) {
	console.log (data);
	
	fonts = data.items;
	
	for (f in fonts) {
		$ ("#font-family").append ( $ ("<option>", {
			text: fonts [f].family,
			value: f
		}));
	}
	
	for (v in fonts [0].variants) {
		$ ("#font-style").append ( $ ("<option>", {
			text: fonts [0].variants [v],
			value: fonts [0].variants [v]
		}));
	}
	
	$ (".selectpicker").selectpicker ("refresh");
});

$ ("#font-family").change (function () {
	$ ("#font-style").html ("");
	
	var selected = $ (this).val ();
	
	for (v in fonts [selected].variants) {
		$ ("#font-style").append ( $ ("<option>", {
			text: fonts [selected].variants [v],
			value: fonts [selected].variants [v]
		}));
	}
	
	$ ('.selectpicker').selectpicker ('refresh');
});

function update_fonts () {
	var selectors = $ ("#font-selectors").val ();
	
	var family = $ ("#font-family").val ();
	family = fonts [family].family;

	$ (selectors).css ("font-family", family);
	
	var style = $ ("#font-style").val ();
	
	var styles = style.match (/[a-zA-Z]+|[0-9]+/g);
	
	if (style.indexOf ("italic") != -1) $ (selectors).css ("font-style", "italic");
	if (style.indexOf ("bold") != -1) $ (selectors).css ("font-weight", "bold");
}

$ (".font-load").change (function () {
	var family = $ ("#font-family").val ();
	family = fonts [family].family;
	
	if ($ ("#font-style").val () != "regular") family += ":" + $ ("#font-style").val ();
	
	WebFont.load ({
		google: {
			families: [family]
		}
	});

	update_fonts ();
});

$ (".selectpicker").selectpicker ({
	style: "btn-default",
	size: "auto",
	template: {
		caret: '<span class="fa fa-fw fa-angle-down"></span>'
	}
});