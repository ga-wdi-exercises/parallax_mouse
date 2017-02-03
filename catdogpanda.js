// https://github.com/xgironx/parallax_mouse
// http://api.jquery.com/mousemove/
$("body").mousemove(function(event) {
var msg = "Handler for .mousemove() called at ";
msg += event.pageX + ", " + event.pageY;
$("#log").append("<div>" + msg + "</div>");
console.log(msg);
});
