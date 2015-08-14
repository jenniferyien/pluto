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
