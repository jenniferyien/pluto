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

//Round 3
function toonify(accent, sentence){
  var newSent = '';
  if(accent === 'daffy'){
    for(var i=0; i < sentence.length; i++){
      if(sentence[i] === 's'){
        newSent = sentence.split(sentence[i]).join('th');
      }
    }
  } else if (accent === 'elmer'){
    for(var x=0; x < sentence.length; x++){
      if(sentence[x] === 'r'){
        newSent = sentence.split(sentence[x]).join('w');
      }
    }
  }
  return newSent;
}

toonify("daffy", "so you smell like sausage");
toonify("elmer", "where is the rabbit?");

//Round 4
function digitSum(num){
  var string = num.toString();
  var sum = 0;
  for(var i = 0; i < string.length; i++){
    sum = sum + parseInt(string[i]);
  }
  return sum;
}
digitSum(24);

//Round 5
function wordReverse(sentence){
  var sentArray = sentence.split(" ");
  var newArray = [];
  for(var i=0; i < sentArray.length; i++){
    newArray.unshift(sentArray[i]);
  }
  newArray = newArray.toString();
  newArray = newArray.split(',').join(' ');
  return newArray;
}

wordReverse("Now I know what a TV dinner feels like");
wordReverse("Put Hans back on the line");

//Round 6
function letterReverse(sentence){
  var sent = sentence.split(" ");
  var newSent = [];
  for(var i=0; i < sent.length; i++){
    var word = sent[i];
    var wordString = word.toString().split();
    var newWord = [];
    for(var y = 0; y < word.length; y++){
      newWord.unshift(word[y]);
    }
    newWord = newWord.toString();
    newWord= newWord.split(',').join('');
    newSent.push(newWord);
  }
    newSent = newSent.toString();
    newSent = newSent.split(',').join(' ');
    return newSent;
}

letterReverse("Now I know what a TV dinner feels like");
letterReverse("Put Hans back on the line");
