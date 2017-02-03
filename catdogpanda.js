// $(.body).mousemove(function(e){
//   var pageCoords = "( " + e.pageX + ", "e.pageY + " )";
//   var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
//   $("sapn:first").text("( e.pageX, e.pageY ) - " + pageCoords);
//   $("span:last").text("(e.clientX, e.clientY ) - " + clientCoords)
// });
// commmit 1)
$('body').mousemove(function(event) {
 var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
})
// replace H1 with pagecoords (commit 2)
$("#cords").html("pageCoords")
