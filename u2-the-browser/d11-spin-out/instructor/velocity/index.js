$(function() {
  var wheel = $('#wheel');

  setInterval(function() {
    wheel
      .velocity({ rotateZ: 360 }, { duration: 2000, easing: "linear" })
      .velocity({ rotateZ: 0 }, 0)
  })

})
