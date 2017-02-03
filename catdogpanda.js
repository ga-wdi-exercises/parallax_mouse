$('body').mousemove(function(event) {
  var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";

  $('h1').text(pageCoords);


$('body').mousemove(function(event) {
  $(".cat").css("margin-left", event.pageX/ 4).css("margin-top", event.pageY/ 9);
});

$('body').mousemove(function(event) {
  $(".dog").css("margin-left", event.pageX/ 7).css("margin-top", event.pageY/ 18);
});

$('body').mousemove(function(event) {
  $(".panda").css("margin-left", event.pageX/ 10).css("margin-top", event.pageY/ 12);
});

});

$('img').on('click', function() {
$(this).toggleClass('border');
  })

$('body').on('click', function() {
$('body').off();
})
/*$('.cat').mouseover(function() {
    $(this).css('margin-left', 'marginLeftCat')
})
$('.cat').mouseover(function() {
    $(this).css('margin-top', 'marginTopCat')
})

});

  /*
  $('.cat').mouseover(function() {
      $(this).css($('margin-left', 'margin-top'), (pageCoords))
  })

  $('.panda').mouseover(function() {
      $(this).css($('margin-left', 'margin-top'), (pageCoords))
  })
  $('.dog').mouseover(function() {
      $(this).css($('margin-left', 'margin-top'), (pageCoords))
  })

})
*/
