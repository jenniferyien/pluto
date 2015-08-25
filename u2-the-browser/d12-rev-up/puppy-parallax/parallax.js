// parallax code goes here
$(function(){
    // function scrolling(){
    //     var scrolled = $(window).scrollTop();
    //     $('.bg').css('top',-(scrolled * 0.2) + 'px');
    //     $('.bg').css('left',-(scrolled * 0.5)+ 'px');
    //     $('.top-center').css('right',-(scrolled * 0.3)+ 'px');
    //     $('.bottom-left').css('right',-(scrolled * 0.6)+ 'px');
    // };
    // $(window).scroll(function(e){
    //   scrolling();
    // });

    $(window).mousemove(function(event){
      var xMove = -(event.pageX)/15;
      var yMove = -(event.pageY)/15;
      $('.bg').css('left',xMove);
      $('.bg').css('left',yMove);

    });


});
