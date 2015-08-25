$(function() {
<<<<<<< HEAD
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
=======
  $('#level3').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level2').click(function(event) {
    event.stopPropagation();
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level1').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('body').click(function(event){
    alert('Clicked on <body>');
>>>>>>> c7a0b5d1d37c2afe2f258e4bccaea28864db6baf
  });
});
