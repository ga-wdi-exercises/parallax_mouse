
// onmousemove = function(e){
// console.log("mouse location:", e.clientX, e.clientY)
// }

// var coords = document.getElementById('coords');

//
// $("body").mousemove(function(e) {
//     document.Form1.posx.value = e.pageX;
//     document.Form1.posy.value = e.pageY;
// })

// var info = .getElementById("#coords");
//
// function tellPos(h1){
//   coords.innerHTML = 'Postion X :  ' + h1.page = '<br />Position Y :' + h1.pageY;
//   }
//   addEventListener('mousemove',tellPos, false);
// onmousemove = function(e){
// ("mouse location:", e.clientX, e.clientY)
// }

onmousemove = function(e){
$('#coords').text(e.clientX, e.clientY)
}
