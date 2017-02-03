//Commit 1 -  When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.

// $("body").mouseover(function(event){
//   console.log(event.pageX, event.pageY);
// })

//Commit 2 - Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.

// $("body").mouseover(function(event){
//   var pointerCoords = event.pageX + ", " + event.pageY
//   $("h1").replaceWith("<h1>" + pointerCoords + "</h1>")
// })

//Commit 3 - When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse. [Read the docs on css](http://api.jquery.com/css/). Try dividing the x and y coordinates by a factor (anywhere from 6 - 20) before setting your margin, and make this factor different for each image.

var getCoords = $("body").mousemove(function(event){
  var xCoords = event.pageX
  var yCoords = event.pageY
  var pointerCoords = xCoords + ", " + yCoords
  $("h1").replaceWith("<h1>" + pointerCoords + "</h1>")
})

var margTop = $("img").css("margin-top", "xCoords")
var margLeft = $("img").css("margin-left", "yCoords")
