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

	$('input[name="commit"]').click(function(event){
			event.preventDefault();
			var candidateAttr = {
				first_name: $('#candidate_first_name').val(),
				last_name: $('#candidate_last_name').val(),
				bio: $('#candidate_bio').val(),
				party: $('#candidate_party').val(),
				campaign: $('#candidate_campaign').val()
			}
			console.log("candidateAttr", candidateAttr);

			$.ajax({
				url:'/candidates',
				method: 'POST',
				data: {candidate: candidateAttr},
				success: function(result, status, xhr){
					console.log('result', result);
				},
				error: function(xhr, status, error){
					console.log("Error", error);
				}
			});
	});

});
