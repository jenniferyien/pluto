$(function(){
    function clock(){

        var rotate= 0;
        setInterval(function secondHand(){
          $('#second-hand').css("transform","rotate(" + rotate + "deg)");
          rotate+=6;
        }, 45);

        var change = 0;
        setInterval(function minuteHand(){
          $('#minute-hand').css("transform","rotate(" + change + "deg)");
          change+=6;
        }, 1500);

        var hour = 0;
        setInterval(function hourHand(){
          $('#hour-hand').css("transform","rotate(" + hour + "deg)");
          hour+=30;
        },45000);
    };

    window.addEventListener("load", function(){

      clock();
    });


});
