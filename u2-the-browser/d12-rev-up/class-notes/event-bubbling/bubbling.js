$(function() {
  $('body').click(function(event) {
    alert('Bubbled up to <body>');
  });

  $('div#level1').click(function(event) {
    alert('Bubbled on level1')
  });

  $('p#level2').click(function(event) {
    alert('Bubbled on level2')
  });

  $('span#level3').click(function(event) {
    highlight(event.currentTarget);
  });

  var highlight = function(element) {
    $(element).css('background-color', 'yellow');
    alert($(element).attr('id'));
    $(element).css('background-color', '');
  }
});
