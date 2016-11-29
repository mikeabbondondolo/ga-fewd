// $("a#color-button").on("click", function() {

//   var red = $("#red").val();
//   var green = $("#green").val();
//   var blue = $("#blue").val();
//   var rgb =  "rgb(" + red +", " + green +", " + blue +")"
//   $("#wrapper").css("background-color", "rgb(" + red +", " + green +", " + blue +")");
//   $("p#colorful-text").text(rgb);
// });

$("a#color-button").on("click", function() {

  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  var rgb =  "rgb(" + red +", " + green +", " + blue +")"
  $("#wrapper").css("background-color", "rgb(" + red +", " + green +", " + blue +")");
  $("p#colorful-text").text(rgb);
});



