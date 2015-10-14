var cowsay = require('cowsay');
var chalk = require('chalk');

module.exports = function(movieTitle){
  var speak = chalk.cyan(cowsay.say({f: 'turtle', text: "I LOVE "+ movieTitle}));
  console.log(speak);
};
