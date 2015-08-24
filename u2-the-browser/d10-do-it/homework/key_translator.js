$(function(){
    var inputText = $('#enteredText');
    inputText.keyup(function(event){
      var inputRead = inputText.val();

      $('.box').html(inputRead.replace(/Command/gi,'&#8984;')
                                .replace(/Tab/gi,'&#8677;')
                                .replace(/Return/gi,'&#9166;')
                                .replace(/Option/gi,'&#8997;')
                                .replace(/Control/gi,'&#94;')
                                .replace(/ESC/gi,'&#9099;')
                                .replace(/Left/gi,'&#8592;')
                                .replace(/Down/gi,'&#8595;')
                                .replace(/Up/gi,'&#8593;')
                                .replace(/Right/gi,'&#8594;')
                                .replace(/Shift/gi,'&#8679;')
                                .replace(/Eject/gi,'&#9167;')
                                .replace(/CapsLock/gi,'&#8682;'));
    });






});
