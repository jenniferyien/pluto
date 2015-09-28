// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.Jcrop
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function() {
  var jcrop =  $('.cropplease').Jcrop({
    onChange: showCoords,
    onSelect: showCoords
  });
  function showCoords(c)
  {
  	$('#x').val(c.x);
  	$('#y').val(c.y);
  	$('#x2').val(c.x2);
  	$('#y2').val(c.y2);
  	$('#w').val(c.w);
  	$('#h').val(c.h);
  };

  $('#crop').click(function() {
  var selection = jcrop.tellSelect();
  alert('selected size: ' + selection.w + 'x' + selection.h);
  })
})
