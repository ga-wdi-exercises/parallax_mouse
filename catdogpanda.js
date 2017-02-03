$(document).ready(function(){

  //
  // $(document).mousemove(function(event){
  // $("body").text(event.pageX)
  //  console.log()
  // })

  $( "body").on( "mousemove", function( event ) {
    $( "h1").text( "LAB " + "X" + event.pageX + ",Y" + event.pageY );

    $( ".cat" ).css({
      "margin-top": event.pageY/20,
      "margin-left": event.pageX/20
      // "margin-left": 100,
      // "margin-top": 20
    });

    $( ".panda" ).css({
      "margin-top": event.pageY/6,
      "margin-left": event.pageX/10
      // "margin-left": 50,
      // "margin-top": 10
    });

    $( ".dog" ).css({
      "margin-top": event.pageY/15,
      "margin-left": event.pageX/8
      // "margin-top": 50,
      // "margin-left": 13
    });
  });

  // $( ".dog" )
  //   .on( "mouseleave", function() {
  //     $( this ).css({
  //       "margin-top": event.pageY,
  //       "margin-left": event.pagex,
  //       "margin-left": 40,
  //       "margin-top": 10
  //     });
  //   })
  //
  // $( ".panda" )
  //   .on( "mousemove", function() {
  //     $( this ).css({
  //       "margin-top": event.pageY,
  //       "margin-left": event.pagex,
  //
  //     });
  //   })
  //   $( ".panda" )
  //     .on( "mouseleave", function() {
  //       $( this ).css({
  //         "margin-top": event.pageY,
  //         "margin-left": event.pagex,
  //         // "margin-top": 30,
  //         // "margin-left": 20
  //       });
  //     })




  let changeImg = $("img")

  changeImg.click(function(){
   $(this).addClass("border");
  // changeImg.click(function(){
  //   $(this).off("border")
  })
  })
  // changeImg.mouseenter(function(evt){
  //   evt.preventDefault()
  //    $(this).fadeOut(".border")
  // })
})



// let show = $("img").click(function(){
//   $(this).addClass(".border")
// })
//
// $("img").show(show){
//
// }
// $("img").fadeIn(show){
//


// .on( "mouseleave", function() {
//   var styles = {
//     backgroundColor : "#ddd",
//     fontWeight: ""
//   };
//   $( this ).css( styles );
// });










// $(documentation).on("mousemove", function( event){
//   $(".cat").css
// })
//
// $(".dog")
//
// $(".panda")
