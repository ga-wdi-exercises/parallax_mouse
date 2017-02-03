$('body').mousemove(function(event){
  var coordinates = event.pageX + "," + event.pageY
   $('h1').text(coordinates);
  })


$('body').mousemove(function(){
  $('.cat').css("margin-left",event.pageX/5).css("margin-top",event.pageY/5)
})

$('body').mousemove(function(){
  $('.dog').css("margin-left",event.pageX/7).css("margin-top",event.pageY/7)
})

$('body').mousemove(function(){
  $('.panda').css("margin-left",event.pageX/12).css("margin-top",event.pageY/12)
})


// "margin-left": event.PageX/10,
//   "margin-top": event.PageY/10 }
