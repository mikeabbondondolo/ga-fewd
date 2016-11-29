$ ("button").on("click", function(){

	var text = $("#temperature").val();
	var temperature = (text - 32) * 5 / 9;
	var converted = "converted(" + text", " + temperature")";

});

