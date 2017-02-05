// COMMIT 1 & COMMIT 2
$('body').mousemove(function(event){
  var coordinates = event.pageX + "," + event.pageY
   $('h1').text(coordinates);
  })

// COMMIT 3
$('body').mousemove(function(){
  $('.cat').css("margin-left",event.pageX/5).css("margin-top",event.pageY/5)
})

$('body').mousemove(function(){
  $('.dog').css("margin-left",event.pageX/7).css("margin-top",event.pageY/7)
})

$('body').mousemove(function(){
  $('.panda').css("margin-left",event.pageX/12).css("margin-top",event.pageY/12)
})

//COMMIT 4
$('img').click(function(){
    event.stopPropagation(); // Bonus 2
  $(this).toggleClass('border')
})

// Bonus 1
$('body').click(function(){
  $('body').off()
})



// Bonus 2

// "margin-left": event.PageX/10,
//   "margin-top": event.PageY/10 }

// var newClass = ('<class></class>')
//
//
// $('.img').click(function(){
//
// })
