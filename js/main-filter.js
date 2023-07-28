$(function() {
    "use strict";
  //------- Active Nice Select --------//
    $('select').niceSelect();

    let lastClicked = null;

$(".clickable").click(function() {
  if (lastClicked) {
    lastClicked.hide();
  }
  
  let me = $("#" + this.id + "text");
  me.show();
  lastClicked = me;
});

    
  });