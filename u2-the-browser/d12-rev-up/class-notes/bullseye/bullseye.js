// ** TASK ** //
// You are an Archer that is extremely precise and never miss.
// Not even in the bubbly distorted world of JavaScript.

// Add click event handlers to each bullseye ring that will alert when you hit
// your desired target on the bullseye. Since you are in JavaScript
// world your shot could bubble to other rings in the bullseye. Remember you
// have a reputation to uphold, so make sure your shots do not bubble to other rings.

$(function() {
  // Leave this event listener to ensure that when you hit ring #1 it does not\
  // buble up to the body
  var highlight = function(element){
    $(element).css('background-color','yellow');
    alert('You hit ' + $(event.currentTarget).attr('id'));
    $(element).css('background-color','');

  }


  $('body').click(function() {
    highlight(event.currentTarget);
  });

  // Fire your code away
  $('#d3').click(function(event){
    highlight(event.currentTarget);
  });
  $('#d2').click(function(event){
    highlight(event.currentTarget);
  })
  $('#d1').click(function(event){
    highlight(event.currentTarget);
  })


});
