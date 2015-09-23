$(function() {

	$('button').click(function(event) {
		 event.preventDefault();
    var cityTemp = event.currentTarget.dataset.temp;
    var location = $('#cityName').val();

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + location,
			method: 'GET',
			// data: { format: 'json' },
      data: { temp: cityTemp },
			success: function(data, status, xhr) {
        console.log(data.main);
				$('#forecast').text("In "+ data.name + " it's " + (((data.main.temp - 273.15)* 1.8000) + 32.00).toFixed(1) + ' degrees Farenheit.');
        $('.date').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
			},
			error: function(xhr, status, error) {
				console.log("Yikes!", error);
			}
		});
	});
//   $.get( "api.openweathermap.org/data/2.5/weather?q="+location, function( data ) {
//   $( "#forecast" ).text( JSON.stringify(data) );
//   alert( "Load was performed." );
//   });
// });

});
