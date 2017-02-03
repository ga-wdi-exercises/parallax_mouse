/*Commit 1
When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.*/

$("body").mouseover(function(event){
  console.log(event.pageX, event.pageY);
})
