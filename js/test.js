

let lastClicked = null;

$(".clickable").click(function() {
  if (lastClicked) {
    lastClicked.hide();
  }
  
  let me = $("#" + this.id + "text");
  me.show();
  lastClicked = me;
});


// $('#two').click(function() {
//     $('#twotext').css({
//         // 'background-color': 'red',
//         // 'color': 'white',
//         // 'font-size': '44px'

//         // 'position': 'absolute',
//         // 'bottom': '-10px',
//         // 'left': '0',
//         // 'right': '0',
//         // 'width': '0',
//         // 'content': "''",
//         // 'height': '0',
//         // 'margin': '0 auto',
//         // 'border-style': 'solid',
//         // 'border-color': '#dbcc8f transparent transparent transparent',
//         // 'opacity': '0',

//     });
// });