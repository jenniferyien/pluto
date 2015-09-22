// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// Write AJAX call based on the following criteria
// 1. url is /candidates/vote
// 2. method is POST
// 3. data is an id
// 4. when the ajax callback is successful log Very Nice!
// 5. if the ajax callback is not sucessful log Yikes!

$(function() {

	$('button').click(function(event) {
		var candidateId = event.currentTarget.dataset.id;

		$.ajax({
			url: '/candidates/vote',
			method: 'POST',
			data: { id: candidateId },
			success: function(data, status, xhr) {
				console.log("Very Nice!", data);
				$('.votes').text(data.votes)
			},
			error: function(xhr, status, error) {
				console.log("Yikes!", error);
			}
		});
	});

	
});