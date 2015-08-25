$(function(){
  //Part 1 - Way NO Way
  $('button.way-no-way').on('click',function(){
    $(this).toggleClass(function(){
      if($(this).hasClass('way-no-way')){
        $(this).text('no-way');
      } else {
        $(this).text('way');
      }
    });
  });

  //Part 2 - Toggle On Wayne
  $('span.name').on('click',function(){
    $(this).addClass('hidden');
    $('input.input-name').removeClass('hidden');
    var inputVal = $('input.input-name').val();
    $('span.name').text(inputVal);
  });

  //Part 3 - Toggle off Garth
  $('input.input-name').keypress(function(){
    $(this).addClass('hidden');
    $('span.name').removeClass('hidden');
    $('span.name').text(inputVal);
  })

  //Part 4 - Extreme Close-up
  $('img.extreme-closeup').mousedown(function(){
    $(this).css("transform" : "scale(20)");
  });

  //Part 5 - That was a good buzz! Alright!
  $('img.extreme-closeup').mouseup(function(){
    $(this).css("transform ": "scale(1)");
  });

  //Part 6 - Top Fives
  $('input.input-phrase').keypress(function(){
    var para = $('<p>')
    $('div#phrases').append(para);
    $('input.input-phrase').val('');
  });

});
