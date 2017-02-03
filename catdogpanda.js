
$("body").mousemove(function(event){
    var coordinates = "( " + event.pageX + ", " + event.pageY + " )";
    var catXCoord = (event.pageX / 14);
    var catYCoord =  (event.pageY / 20);

    var dogXCoord = (event.pageX / 6);
    var dogYCoord =  (event.pageY / 10);

    var pandaXCoord = (event.pageX / 16);
    var pandaYCoord =  (event.pageY / 12);


    console.log(coordinates);

    $("h1").text(coordinates);
    $(".cat").css("margin-left", catXCoord).css("margin-top", catYCoord);
    $(".dog").css("margin-left", dogXCoord).css("margin-top", dogYCoord);
    $(".panda").css("margin-left", pandaXCoord).css("margin-top", pandaYCoord);
    })

var clickCounter = 0;

$("img").click(function(event){
  clickCounter++;
  if(clickCounter % 2 == 1){
  $(this).addClass("border");

} else {
  $(this).removeClass("border");
}
});
