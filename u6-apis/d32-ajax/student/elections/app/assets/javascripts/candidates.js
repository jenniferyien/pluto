// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
  // $.ajax({
  //   url: 'some/url',
  //   method: 'POST GET',
  //   data: {
  //     //data being sent to server
  //     key: value,
  //     key: value
  //   },
  //   success: function(data, status, xhr){
  //     // data being returned to server
  //   },
  //   error: function(xhr, status, error){
  //
  //   }
  // });
  $('button').on('click',function(event) {
    var candidateId = event.currentTarget.dataset.id;
    $.ajax({
      url: '/candidates/vote',
      method: 'POST',
      data: { id: candidateId },
      success: function(data, status, xhr) {
        console.log('Very Nice!', data);
        $('.votes').text(data.votes);

      },
      error: function(xhr, status, error){
        console.log('Yikes!', error);
      }
    });
  });


});
