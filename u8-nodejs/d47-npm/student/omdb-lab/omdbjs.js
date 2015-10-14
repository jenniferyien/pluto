var request = require('request');
var chalk = require('chalk')

// module.export =
//   request.get('http://www.omdbapi.com/?t=frozen', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var movieInfo = JSON.parse(body);
//     console.log(chalk.white.bgCyan(movieInfo.Title)); // Show the HTML for the Google homepage.
//     console.log(chalk.white.bgBlue("Released: "+ movieInfo.Year));
//     console.log(chalk.white.bgRed("Directed by: "+ movieInfo.Director));
//     console.log(chalk.white.bgGreen(movieInfo.Plot));
//   }
// })

module.exports = function(title, callback) {
  request.get('http://www.omdbapi.com/?t='+title, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var movie = JSON.parse(body);
      callback(movie);
    }
  })
}
