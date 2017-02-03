$ ('body').mousemove(function(event){
  var pageCoords = (event.pageX + "," + event.pageY);
  $ ('h1').text("Coordinates: " + pageCoords);
});

$('body').mousemove(function(event) {
  $(".cat").css("margin-left", event.pageX/ 6).css("margin-top", event.pageY/ 3);
});

$('body').mousemove(function(event) {
  $(".dog").css("margin-left", event.pageX/ 20).css("margin-top", event.pageY/ 20);
});

$('body').mousemove(function(event) {
  $(".panda").css("margin-left", event.pageX/ 15).css("margin-top", event.pageY/ 15);
});

$('img').click(function() {
   $(this).toggleClass('border');
});

$('body').click(function(){
  $(this).off();
});
