$(document).ready(function() {
  // console.log($);
  // console.log("hello world");

  $("body").mousemove(function (e){
      // var pos = $("body").position();
      var page = event.pageX + ", " + event.pageY;
      // console.log(event.pageX + ", " + event.pageY);
        $("h1").text(event.pageX + ", " + event.pageY); 


  });




















});
