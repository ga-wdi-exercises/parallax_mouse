// My answer to #1
// $( "body" ).mousemove(function( event ) {
//   var mousemove = "Handler for .mousemove() called at ";
//   mousemove += event.pageX + ", " + event.pageY;
// });

// #1 When the mouse moves within the body, console.log the x and y coordinates.
$('body').mousemove(function(event) {
  var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
 console.log(pageCoords)

// #2 Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.
$("#coords").html(pageCoords);

// #3 When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse.
// $(".head-image").css("src","left.jpg");

$('body').mousemove(function(event) {
  $(".cat").css("margin-left", event.pageX/ 70).css("margin-top", event.pageY/ 30);
  $(".dog").css("margin-left", event.pageX/ 10).css("margin-top", event.pageY/ 64);
  $(".panda").css("margin-left", event.pageX/ 20).css("margin-top", event.pageY/ 95);
});

// #4 Have it so that when you click on any image, it either adds or removes the ".border" class

// $("img").mousemove(function(event)) {
//   var cssChange = "("margin-top", "margin-left", "event.pageX", "event.pageY")"
//   console.log(cssChange)
// }

})
