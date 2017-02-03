// Commit 1 When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.
// Commit 2 Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.
// Commit 3 When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse. Read the docs on css. Try dividing the x and y coordinates by a factor (anywhere from 6 - 20) before setting your margin, and make this factor different for each image.
// Commit 4 Have it so that when you click on any image, it either adds or removes the ".border" class
// Bonus 1 Have it so that when you click on the body, it freezes position of the images. Check out the documentation .off()
// Bonus 2 If I click on an image now, for some reason it is freezing the position of all the images. All I want it to do is add or remove the border though. How do I stop that from happening? What is this? A hint? What the heck is event propagation?
// https://github.com/xgironx/parallax_mouse


// Commit 1 When the mouse moves within the body, console.log the x and y coordinates. The docs on mousemove may be helpful here.
// http://api.jquery.com/mousemove/
// $("body").mousemove(function(event) {
// var msg = "Handler for .mousemove() called at ";
//     msg += event.pageX + ", " + event.pageY;
//     $("#log").append("<div>" + msg + "</div>");
//     console.log(msg);
//     });


                // // Commit 2 Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.
    // $("body").mousemove(function(event) {
    // var msg = event.pageX + ", " + event.pageY;
    // // $("#log").append("<div>" + msg + "</div>");
    // $("#log").append(msg);
    //     console.log(msg);
    //     // $('log').text(' x')
    //     // $("h1").html("<em>" + msg + "</em>");   //https://www.freecodecamp.com/challenges/change-text-inside-an-element-using-jquery
    //     $("h1").text(msg);
    //     });


          // Commit 3 When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse. Read the docs on css. Try dividing the x and y coordinates by a factor (anywhere from 6 - 20) before setting your margin, and make this factor different for each image.
  $("body").mousemove(function(event) {
    // var msg = event.pageX + ", " + event.pageY;
    var x = event.pageX;
    var y = event.pageY;
    var msg = 'x: ' + x + ', ' + 'y: ' + y
    // $("#log").append(msg);
    console.log(msg);
    $("h1").text(msg);
    // $('cat').css('margin-top', y).css('margin-left', x)
    $('img.cat').css('margin-top', y/6).css('margin-left', x/6)
    $('img.dog').css('margin-top', y/11).css('margin-left', x/11)
    $('img.panda').css('margin-top', y/20).css('margin-left', x/20)
    // console.log('catCoords: ' + catCoords);
    });
