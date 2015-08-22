$(function(){
    var inputText = $('#enteredText');
    inputText.keyup(function(event){
      var inputRead = inputText.val();

      $('.box').html(inputRead.replace(/Command/g,'&#8984;')
                                .replace(/Tab/g,'&#8677;')
                                .replace(/Return/g,'&#9166;')
                                .replace(/Option/g,'&#8997;')
                                .replace(/Control/g,'&#94;')
                                .replace(/ESC/g,'&#9099;')
                                .replace(/Left/g,'&#8592;')
                                .replace(/Down/g,'&#8595;')
                                .replace(/Up/g,'&#8593;')
                                .replace(/Right/g,'&#8594;')
                                .replace(/Shift/g,'&#8679;')
                                .replace(/Eject/g,'&#9167;')
                                .replace(/CapsLock/g,'&#8682;'));
    });






});
