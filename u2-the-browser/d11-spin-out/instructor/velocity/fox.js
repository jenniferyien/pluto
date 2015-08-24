$(function() {
  $('#fox').on('load', function() {

    var fox = $('#fox').contents();
    var wagged = false;

    function alert() {
      var leftEar = fox.find('#left-ear');
      var rightEar = fox.find('#right-ear');
      leftEar.velocity({rotateZ: 20}, 1000);
      rightEar.velocity({rotateZ: -20}, 1000);
    }

    function relax() {
      var leftEar = fox.find('#left-ear');
      var rightEar = fox.find('#right-ear');
      leftEar.velocity({rotateZ: 0}, 1000);
      rightEar.velocity({rotateZ: 0}, 1000);
    }

    function look() {
      var leftPupil = fox.find('#left-pupil');
      var rightPupil = fox.find('#right-pupil');
      var shiftX = Math.random()*5;
      var shiftY = Math.random()*4;
      leftPupil.velocity({translateX: shiftX, translateY: shiftY}, 100)
      rightPupil.velocity({translateX: shiftX, translateY: shiftY}, 100)
    }

    function wag() {
      var tail = fox.find('#tail');
      if (wagged) {
        tail.velocity({rotateZ: 0}, 1000)
        wagged = false;
      } else {
        tail.velocity({rotateZ: 12}, 1000)
        wagged = true;
      }
    }

    setInterval(look, 1000)
    setInterval(wag, 1000);
    fox.hover(alert, relax)
  })
});
