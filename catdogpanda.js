$(document).ready(function(){

//
// $(document).mousemove(function(event){
// $("body").text(event.pageX)
//  console.log()
// })

$( "body").on( "mousemove", function( event ) {
  $( "h1").text( "LAB " + "X" + event.pageX + ",Y" + event.pageY );
});

$( ".cat" )
  .on( "mousemove", function() {
    $( this ).css({
      "margin-top": event.pageY,
      "margin-left": event.pagex
    });
  })

  $( ".dog" )
    .on( "mousemove", function() {
      $( this ).css({
        "margin-top": event.pageY,
        "margin-left": event.pagex,
        "margin-top": 10,
        "margin-left": 20
      });
    })


    $( ".panda" )
      .on( "mousemove", function() {
        $( this ).css({
          "margin-top": event.pageY: 10,
          "margin-left": event.pagex: 20
        });
      })


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


})
