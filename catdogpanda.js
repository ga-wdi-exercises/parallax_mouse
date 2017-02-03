
$("body").mousemove(function(event){
  var coordinates = "( " + event.pageX + ", " + event.pageY + " )";
  console.log(coordinates);
  $("h1").text(coordinates);
  })
