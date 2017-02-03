// // When the mouse moves within the body, console.log the x and y coordinates.
// $( "body" ).mousemove(function( event ) {
//   var mousemove = "Handler for .mousemove() called at ";
//   mousemove += event.pageX + ", " + event.pageY;
// });
$('body').mousemove(function(event) {
  var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";

 console.log(pageCoords)
})
