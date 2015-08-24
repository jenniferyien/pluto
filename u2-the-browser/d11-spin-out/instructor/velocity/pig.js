$(function() {
  $('#pig').on('load', function() {
    var pig = $('#pig').contents();
    var wagged = false;

    function alert() {
      leftEar = pig.find("#left-ear");
      rightEar = pig.find("#right-ear");
      leftEar.velocity({rotateZ:90}, 1000)
      rightEar.velocity({rotateZ:-90}, 1000)
    }

    function relax() {
      leftEar = pig.find("#left-ear");
      rightEar = pig.find("#right-ear");
      leftEar.velocity({rotateZ:0}, 1000)
      rightEar.velocity({rotateZ:0}, 1000)
    }

    function snort() {
      var snout = pig.find('#snout');
      snout
        .velocity({translateY: -5}, 200, {ease: 'in'})
        .velocity({translateY:  0}, 200, {ease: 'out'})
      return false;
    }

    function wag() {
      var tail = pig.find("#tail");
      if (wagged) {
        tail.velocity({rotateZ: 0}, 1000);
        wagged = false;
      } else {
        tail.velocity({rotateZ: 10}, 1000);
        wagged = true;
      }
    }

    setInterval(wag, 1000);
    $('#pig').hover(alert, relax);
    $('.snort').on('click', snort);

  })
})
