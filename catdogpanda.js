$( "body" ).mousemove(function( event ) {
  var msg = " ";
  msg += event.pageX + ", " + event.pageY;
  console.log(msg)
  $("h1").text( "Coordinates: " + msg);
});
