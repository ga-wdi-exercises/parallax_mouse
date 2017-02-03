
// var newBody = $(document.body)
// newbody.mouseover(function(){
//  console.log(coords);
// })

//Commit 1
// $("body").mousemove(function(event){
//   var msg = "Handler for .mousemove() called at ";
//   msg += event.pageX + ", " + event.pageY;
//   $( "#log" ).append( "<div>" + msg + "</div>" );
//      console.log(msg)
//  })

 //Commit 2

 $("#coords").mousemove(function(event){
   var msg = "Handler for .mousemove() called at ";
   msg += event.pageX + ", " + event.pageY;
   $( "#log" ).append( "<div>" + msg + "</div>" );
       console.log(msg)
  })

//commit 3
