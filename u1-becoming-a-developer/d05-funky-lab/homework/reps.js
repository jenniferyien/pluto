//Round 0
var words = ["hello", "what", "is", "up", "dude"]
function lengths(array) {
  var arrayWordLength = [];
  for(var i=0; i < array.length; i++){
    arrayWordLength.push(array[i].length);
  }
  return arrayWordLength;
}
lengths(words);

//Round 1
function fizzbuzzer(number){
  if (number % 3 === 0 && number % 5 === 0){
    return "FizzBuzz";
  } else if (number % 3 === 0){
    return "Fizz";
  } else if (number % 5 === 0){
    return "Buzz";
  } else if (number % 3 !== 0 || number % 5 !== 0){
    return "McClane";
  }
}
fizzbuzzer(5);

//Round 2
function transmogrifier(a,b,c){
  var transmogrified = Math.pow((a * b),c);
  return transmogrified;
}
transmogrifier(5, 3, 2); //225
transmogrifier(5, 4, 3); //8000
transmogrifier(13, 12, 5); //92389579776
transmogrifier(42, 13, 7); //14466001271480793000
