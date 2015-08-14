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
