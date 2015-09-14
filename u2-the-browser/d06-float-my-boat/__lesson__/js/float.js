function someFunction(someParameter) {
  alert("You wrote "+someParameter);
  debugger;
}

window.addEventListener('load', function(){
  // .. This is a "closure", we can safely define variables here:
  var float = 'left';
  var boat = document.getElementById("float");
  boat.style.float = float;
  someFunction("Hey");
});
