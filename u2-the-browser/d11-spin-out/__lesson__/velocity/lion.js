$(function() {
  $('#lion').on('load', function() {
    var lion = $('#lion').contents();

    function look() {
      var leftPupil = lion.find('#left-pupil');
      var rightPupil = lion.find('#right-pupil');
      var shift = Math.random()*5;
      console.log(shift);
      leftPupil.velocity({translateX: shift-3, translateY: shift}, 800);
      rightPupil.velocity({translateX: shift-3, translateY: shift}, 800);
    }

    setInterval(look, 2000)

  });
});

// function Lion(selector) {
//   this.svg = Snap(selector);
//   this.leftPupil = this.svg.select("#left-pupil");
//   this.rightPupil = this.svg.select("#right-pupil");
// }
//
// Lion.prototype.alert = function() {
//   var leftEar = this.leftEar;
//   var rightEar = this.rightEar;
//   leftEar.animate({
//     transform: 'r20,50,50t10,-10'
//   }, 1000);
//   rightEar.animate({
//     transform: 'r-20,100,100t10,0'
//   }, 1000);
// }
//
// Lion.prototype.relax = function() {
//   var leftEar = this.leftEar;
//   var rightEar = this.rightEar;
//   leftEar.animate({
//     transform: 'r0,50,50t0,0'
//   }, 1000);
//   rightEar.animate({
//     transform: 'r0,100,50t0,0'
//   }, 1000);
// }
//
// Lion.prototype.look = function() {
//   var leftPupil = this.leftPupil;
//   var rightPupil = this.rightPupil;
//   var shift = Math.random()*5;
//   leftPupil.animate({
//     transform: 't-'+shift+',2'
//   }, 800, mina.easeinout)
//   rightPupil.animate({
//     transform: 't-'+shift+',2'
//   }, 800, mina.easeinout)
// }
