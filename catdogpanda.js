// $("body").mousemove(function(event) {
//   var msg = "";
//   msg += event.pageX + ", " + event.pageY;
//   console.log(msg)
//   $("h1").text( "Coordinates: " + msg);
// });
//
// //I realized I could combine the cat + dog classes so this is unneccesary:
//
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
//
// //this changes the margins on the images
// //i would like to combine both of these into fewer lines, but it works perfectly for now
//
// $("body").on("mousemove", function() {
//   $(".cat, .dog").css({
//     "margin-top": function(mousemove) {
//       return parseFloat(event.pageY) * 0.1;
//     },
//     "margin-left": function(mousemove) {
//       return parseFloat(event.pageX) * 0.1;
//     }
//   });
// });
//
// $("body").on("mousemove", function() {
//   $(".panda").css({
//     "margin-top": function(mousemove) {
//       return parseFloat(event.pageY) * 0.05;
//     },
//     "margin-left": function(mousemove) {
//       return parseFloat(event.pageX) * 0.05;
//     }
//   });
// });
//
// // original code:
//
// // $(".dog").on("click", function(){
// //   $(".dog").toggleClass('border')
// // })
// // $(".cat").on("click", function(){
// //   $(".cat").toggleClass('border')
// // })
// // $(".panda").on("click", function(){
// //   $(".panda").toggleClass('border')
// // })
//
// //then I remembered the power of -this- to change the borders:
//
// $("img").on("click", function(){
//   $(this).toggleClass('border')
// })

//Bedig inspired me to realize I could combine all of this into one block!! Thanks Bedig!

$("body").mousemove(function(event) {
  var msg = "";
  msg += event.pageX + ", " + event.pageY;
  $("h1").text( "Coordinates: " + msg);
  $(".cat, .dog").css({
    "margin-top": function(mousemove) {
      return parseFloat(event.pageY) * 0.1;
    },
    "margin-left": function(mousemove) {
      return parseFloat(event.pageX) * 0.1;
    }
  });
  $(".panda").css({
    "margin-top": function(mousemove) {
      return parseFloat(event.pageY) * 0.05;
    },
    "margin-left": function(mousemove) {
      return parseFloat(event.pageX) * 0.05;
    }
  });
});

$("img").on("click", function(){
  $(this).toggleClass('border')
})

//  bonus one!
$("body").on("click", function(){
  $("body").off()
})

// bonus two!




//
