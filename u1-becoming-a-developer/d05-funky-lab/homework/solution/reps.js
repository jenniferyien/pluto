console.log("REPS LOADED");

// part 1
function fizzbuzzer(number){

  if( number % 5 === 0 && number % 3 === 0){
    return "FizzBuzz";
  } else if ( number % 5 === 0){
    return "Buzz";
  } else if ( number % 3 === 0 ){
    return "Fizz";
  } else {
    return "McClane";
  }

}//fizzbuzzer

// part 2
function transmogrifier( x, y, power ){

  return Math.pow( x * y, power );

}//transmogrifier


// part 3
function toonify(accent, sentence){

  if( accent === "elmer"){

    // we have to make a new string because in javascript, strings are immutable (huge consequences)
    // immutability means you cant change what already exists
    // so our only choice is to construct a new string  (p.s.: this doesnt happen in ruby)
    var newWords = '';

    for(var i=0; i < sentence.length; i++){
      if(sentence[i] === 'r'){
        newWords += 'w'
      } else if ( sentence[i] === 'R'){
        newWords += 'W';
      } else {
        newWords += sentence[i];
      }
    }//for

   return newWords;

 } else if( accent === "daffy") {
    // replace abstracts away what we just did above.
    // it lends itself well to multiple character insertions (although it's painless to do something like the elmer case)
    // the regex matches r globally( as in every time it occurs in the string), and case insensitive
    return sentence.replace( /s/gi, 'th');

  } else {

    return sentence;

  }

}//toonify

// part 4
function digitSum(number){
  // split the number by turning it into a string
  var digits = number.toString().split('');
  var sum = 0;

  // iterate over the array of characters
  for( var i=0; i < digits.length; i++){
    // turn each char back into a number and add it to sum
    sum += Number(digits[i]);
  }

  return sum;

  //in one line its:
  // return number.toString().split('').reduce( function(x,y){ return Number(x) + Number(y) } );
  // since you don't know callbacks this is ill advised.

}//digitSum

//part 5
function wordReverse( sentence ){
  // we have three things going on here
  // we split the string into an array on space to get each word
  // arrays have a reverse method
  // join() is a method on array that merges the array elements into a string,
  // but with it's argument between each element, in this case a space
  return sentence.split(' ').reverse().join(" ");

}

// part 6
function letterReverse(sentence){
  // this time we have to reverese each word individually, time to save the array
  var brokenSentence = sentence.split(' '); // get each word separated by space

  // I chose to save each reversed word as an element in this array
  var newWords = [];

  for( var i = 0; i < brokenSentence.length; i++){
    // split each word into an array
    //if you delimit on an empty string (no whitespace )it takes every character as an element
    //reverse the resulting array, join back into string with no whitespace
    newWords.push( brokenSentence[i].split('').reverse().join('') );
  }

  //simply merge the array of words into a string with spaces inbetween
  return newWords.join(" ");
}//letterReverse

// part 7
function longest( collection ){

  var longest_String = '';

  // because we iterate in order, the next word with the same amount of letters will never overwrite, so we satisfy the case of a tie returning the first longest word
  for(var i = 0; i < collection.length; i++ ){
    if( collection[i].length > longest_String.length ){
      longest_String = collection[i];
    }
  }

  return longest_String;

}
