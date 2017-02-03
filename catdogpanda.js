// commmit 1)
$('body').mousemove(function(event) {
 var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
})
// replace H1 with pagecoords (commit 2)
$("#cords").html("pageCoords")
//  commit 3
$('body').mousemove(function(event) {
 $(".cat").css("margin-left", event.pageX/ 2).css("margin-top", event.pageY/ 15);
});
  $(".dog").css("margin-left", event.pageX/2).css("margin-top", event.pageY/20);
});
    $(".panda").css("margin-left", event.pageX/2).css("margin-top", event.pageY/10);
  });
