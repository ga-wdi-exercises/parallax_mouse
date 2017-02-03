$("body").mousemove(function(event) {
  var msg = "";
  msg += event.pageX + ", " + event.pageY;
  console.log(msg)
  $("h1").text( "Coordinates: " + msg);
});

//I realized I could combine the cat + dog classes so this is unneccesary:

// $("body").on("mousemove", function() {
//   $(".dog").css({
//     "margin-top": function(mousemove) {
//       return parseFloat(event.pageY) * 0.1;
//     },
//     "margin-left": function(mousemove) {
//       return parseFloat(event.pageX) * 0.1;
//     }
//   });
// });

$("body").on("mousemove", function() {
  $(".cat, .dog").css({
    "margin-top": function(mousemove) {
      return parseFloat(event.pageY) * 0.1;
    },
    "margin-left": function(mousemove) {
      return parseFloat(event.pageX) * 0.1;
    }
  });
});

$("body").on("mousemove", function() {
  $(".panda").css({
    "margin-top": function(mousemove) {
      return parseFloat(event.pageY) * 0.05;
    },
    "margin-left": function(mousemove) {
      return parseFloat(event.pageX) * 0.05;
    }
  });
});

// original code:

// $(".dog").on("click", function(){
//   $(".dog").toggleClass('border')
// })
// $(".cat").on("click", function(){
//   $(".cat").toggleClass('border')
// })
// $(".panda").on("click", function(){
//   $(".panda").toggleClass('border')
// })

//then I remembered the power of -this-:

$("img").on("click", function(){
  $(this).toggleClass('border')
})

//
