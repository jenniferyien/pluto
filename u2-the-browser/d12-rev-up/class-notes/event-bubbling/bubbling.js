$(function() {
  $('#level3').on('click', function(event){
      alert('clicked on ' + $(event.currentTarget).attr('id'));
  });
  $('#level2').on('click', function(event){
    event.stopPropagation();
      alert('clicked on ' + $(event.currentTarget).attr('id'));
  });
  $('#level1').on('click', function(event){
      alert('clicked on ' + $(event.currentTarget).attr('id'));
  });
  $('body').on('click', function(event){
      alert('clicked on <body>');
  });
});
