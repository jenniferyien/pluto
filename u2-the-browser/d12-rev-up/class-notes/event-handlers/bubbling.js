$('body').click(function(event) {
  alert('Bubbled up to <body>');
});

$('div').click(function(event) {
  alert('Bubbled up to <div>');
});

$('p').click(function(event) {
  alert('Bubbled up to <p>');
});

$('span').click(function(event) {
  alert('Clicked on <span>');
});
