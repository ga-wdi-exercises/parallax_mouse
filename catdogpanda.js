$(document).ready(function() {
  // console.log($);
  // console.log("hello world");

  $("body").mousemove(function (e){
      // var pos = $("body").position();
      var page = event.pageX + ", " + event.pageY;
      // console.log(event.pageX + ", " + event.pageY);
        $("h1").text(event.pageX + ", " + event.pageY);

        $("img.cat").css("margin-left", event.pageX/6).css("margin-top", event.pageY/6);
        $("img.dog").css("margin-left", event.pageX/12).css("margin-top", event.pageY/12);
        $("img.panda").css("margin-left", event.pageX/20).css("margin-top", event.pageY/20);

  });

  $("img").click( function(){
    // $(this).css("border-color", "blue").clickOn(1).clickOff(2);
    $(this).toggleClass("border");


  });

});
