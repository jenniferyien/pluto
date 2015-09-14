 // NAVTIVE JAVASCRIPT ITERATORS //

//** FOR IN **//
var obj = {
  name: 'pan',
  gender: 'male'
}

for(key in obj) {
  obj[key]
}

//** FOREACH **//
ARRAY.forEach(function(element, index, array) {
  // do something
});


//** MAP **//
// returns a new array
var newArray = ARRAY.map(function(element, index, array){
    // return something
});

//** FILTER **//
var newArray = ARRAY.filter(function(element, index, array){
  if(//something)
    return true;
  else
    return false;
})
