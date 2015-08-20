$(function() {

  // DOM READY EVENT
  // ALL MY CODE GOES HERE
  var myNewDiv = $("<div>I'M A DIV</div>")
  $('body').append(myNewDiv);

  setInterval(function() {
    myNewDiv.toggleClass('fancy');

  }, 1000)

});
