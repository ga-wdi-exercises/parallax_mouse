// $(.body).mousemove(function(e){
//   var pageCoords = "( " + e.pageX + ", "e.pageY + " )";
//   var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
//   $("sapn:first").text("( e.pageX, e.pageY ) - " + pageCoords);
//   $("span:last").text("(e.clientX, e.clientY ) - " + clientCoords)
// });

$('body').mousemove(function(event) {
 var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";

 console.log(pageCoords)
})
