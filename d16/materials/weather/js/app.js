$("button").on("click", function(){
	var name = $("input").val();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=imperial&apikey=c5a7cea117bbc3696c875a1b4592099a", function(data) {
  console.log(data);
  var icon = data["weather"][0]["icon"];
  $("span.temperature").text(data["main"]["temp"]);
  $("img.icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");

});
})
