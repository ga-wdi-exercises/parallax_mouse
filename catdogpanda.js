$("body").mousemove(function(event) {
  var msg = "";
  msg += event.pageX + ", " + event.pageY;
  console.log(msg)
  $("h1").text( "Coordinates: " + msg);
});

$("body").on("mousemove", function() {
  $(".cat").css({
    "margin-top": function(mousemove) {
      return parseFloat(event.pageY) * 0.1;
    },
    "margin-left": function(mousemove) {
      return parseFloat(event.pageX) * 0.1;
    }
  });
});

$("body").on("mousemove", function() {
  $(".dog").css({
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


//
