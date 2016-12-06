$("#right, #left").on("click", function() {
	var image  = $("figure img").attr("img/1.jpg");
	var selected = $("img").addClass("figure img.selected");
	$("figure img").fadeToggle("number");
});

