$('body').mousemove(function(event){
  var coordinates = event.pageX + "," + event.pageY
   $('h1').text(coordinates);
  });
