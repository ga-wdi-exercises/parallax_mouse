$('body').mousemove(function(event) {
  var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
 console.log(pageCoords)

$("#coords").html(pageCoords);


$("img").css("margin-left","margin-top");



$('body').mousemove(function(event) {
 $(".cat").css("margin-left", event.pageX/ 70).css("margin-top", event.pageY/ 30);
 $(".dog").css("margin-left", event.pageX/ 10).css("margin-top", event.pageY/ 64);
 $(".panda").css("margin-left", event.pageX/ 20).css("margin-top", event.pageY/ 95);
});
})
