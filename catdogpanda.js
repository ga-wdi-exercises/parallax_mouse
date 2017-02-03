
// var newBody = $(document.body)
// newbody.mouseover(function(){
//  console.log(coords);
// })


$("body").mousemove(function(event){
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
  $( "#log" ).append( "<div>" + msg + "</div>" );
     console.log(msg)
 })
