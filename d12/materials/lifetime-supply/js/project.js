$("button").on("click", function() {

  var age = $("#age").val();
  var maxAge = $("#max-age").val();
  var numPerDay = $("#num-per-day").val();
  var solution = ((maxAge - age) * 365) * numPerDay;

  var drink = $("#item").val();

  $("#solution").text(solution);

  $("#drink").text(drink);



});


