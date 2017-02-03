//select the body
//attach event listener for mouseover
/*
<h1 id="coords">Coordinates?</h1>
<img src='img/cat.jpg' alt='cat' class='cat'>
<img src='img/dog.jpg' alt='dog' class='dog'>
<img src='img/panda.jpg' alt='panda' class='panda'>
<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script src="catdogpanda.js"></script>
*/

//commit 1
// When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.
// $('body').mouseover(function(event){
// })


//commit 2
//Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.

/*$('body').mousemove(function(event){
  $('#coords').text(event.pageX + ', ' + event.pageY);
  console.log(event.pageX, event.pageY);
  */



//Commit 3
//When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse. Read the docs on css. Try dividing the x and y coordinates by a factor (anywhere from 6 - 20) before setting your margin, and make this factor different for each image.

var marginLeft = $("img").css("margin-left")
var marginTop = $("img").css("margin-top")
  console.log(marginTop, marginLeft);



//Commit 4
//Have it so that when you click on any image, it either adds or removes the ".border" class


marginLeft = $("img.border").css("margin-left")
marginTop = $("img.border").css("margin-top")
  console.log(marginTop, marginLeft);
