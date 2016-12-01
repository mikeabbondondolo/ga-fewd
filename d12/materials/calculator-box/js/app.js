
// 2. Add .on("click") event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .on("click")
// - . text() or .html()
// - .css()


var count = 0;

$("#red").on("click", function() {
	$("#out").css("background-color", "red");
})

$("#out").on("click", function() {
	$("#out").css("background-color", "white");
})

$("#blue").on("click", function() {
	$("#out").css("background-color", "blue");
})


$("#a10").on("click", function() {
	count = count + 10;
	$("#out").text(count);
});


$("#a20").on("click", function() {
	count = count + 20;
	$("#out").text(count);
});


$("#a30").on("click", function() {
	count = count + 30;
	$("#out").text(count);
});


$("#n10").on("click", function() {
	count = count - 10;
	$("#out").text(count);
});


$("#n20").on("click", function() {
	count = count - 20;
	$("#out").text(count);
});


$("#n30").on("click", function() {
	count = count - 30;
	$("#out").text(count);
});