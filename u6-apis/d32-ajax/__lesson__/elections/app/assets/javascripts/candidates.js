// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
	$('button').click(function(event) {
		var candidateId = parseInt(event.currentTarget.dataset.id);
		
		// Method #1 Callback Function
		$.ajax({
			method: 'POST',
			url: '/candidates/vote',
			data: { id: candidateId },
			success: function(data, status, xhr) {
				console.log('Great success!', data, status);
				$('.votes').text(data.votes);
				
				//* Solution 1*//
				// var currentVotes = parseInt($('.votes').text());

				// // Increment votes on client by 1
				// $('.votes').text(currentVotes+1);
			}, 
			error: function(xhr, status, error) {
				console.log(status, error, xhr);
			}
		}); // end of $.ajax

		// Method #2 Promises
		// $.ajax({
		// 	method: 'POST',
		// 	url: '/candidates/vote',
		// 	data: { id: candidateId }
		// }).done(function(){
		// 	console.log('Great success!');
		// 	var currentVotes = parseInt($('.votes').text());

		// 	// Increment votes on client by 1
		// 	$('.votes').text(currentVotes+1);
		// }).fail(function() {
		// 	console.log('ERROR');
		// }); // end of $.ajax		
	}); // end of click function
});