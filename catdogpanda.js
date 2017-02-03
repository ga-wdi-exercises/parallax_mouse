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
})
