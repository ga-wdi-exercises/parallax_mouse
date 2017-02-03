// commit 1
$('body').mousemove(function(event) {
 var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
console.log(pageCoords)

// commit 2
$("#coords").html(pageCoords);

// commit 3
$('body').mousemove(function(event) {
 $(".cat").css("margin-left", event.pageX/ 2).css("margin-top", event.pageY/ 6);
 $(".dog").css("margin-left", event.pageX/ 2).css("margin-top", event.pageY/ 20);
 $(".panda").css("margin-left", event.pageX/ 2).css("margin-top", event.pageY/ 10);
});

})
// commit 4
$("img").click(function() {
  $( this ).toggleClass("border")
})

// Bonus
$("body").on("click", function(){
  $(this).off()

})
