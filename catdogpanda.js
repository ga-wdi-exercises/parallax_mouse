//Commit 1 -  When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.

// $("body").mouseover(function(event){
//   console.log(event.pageX, event.pageY);
// })

//Commit 2 - Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.

$("body").mouseover(function(event){
  var pointerCoords = event.pageX + ", " + event.pageY
  $("h1").replaceWith("<h1>" + pointerCoords + "</h1>")
})
