var request = require('request');

module.exports = function(movieTitle, callback) {
  request('http://www.omdbapi.com/?t='+movieTitle, function(error, response, body) {
    var movieData = JSON.parse(body);
    callback(movieData, "Jaden");
  })
}
