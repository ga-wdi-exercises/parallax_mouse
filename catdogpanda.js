

//commit 1
$("body").mousemove(function(event){
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
  $( "#log" ).append( "<div>" + msg + "</div>" );
     console.log(msg)
 })

 //Commit 2

 $("body").mousemove(function(event){
   $("#coords").text("X"  + event.pageX + ",Y" + event.pageY);

 });

//commit 3
$(".cat").css({"margin-left": event.pageX/6, "margin-top": event.pageY/6});
$(".dog").css({"margin-left": event.page/12, "margin-top": event.pageY/12});
$(".dog").css({"margin-left": event.page/12, "margin-top": event.pageY/12});
