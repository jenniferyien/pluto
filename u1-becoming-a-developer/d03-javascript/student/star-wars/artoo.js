var called = window.alert("(beep-boop whrrrrrr bleep) Welcome to the R2D2 calculator!");
while(true) {
  var userInput = prompt("Please enter which operator you would like to use ('+', '-', '*', '/'). Enter 'q' to exit.");
  if (userInput === 'q'){
    break;
  } else if (userInput === '+' || userInput === '-' || userInput === '*' || userInput === '/') {
    var frstOper = prompt("Enter you first operand:");
    var secOper = prompt("Enter your second operand:");
      if (userInput === "+"){
        var solution = frstOper + secOper;
      } else if (userInput === "-"){
        var solution = frstOper - secOper;
      } else if (userInput === "*") {
        var solution = frstOper * secOper;
      } else if (userInput === "/") {
        var solution = frstOper / secOper;
      }
    window.alert("The solution to " + frstOper + " " + userInput + " " + secOper + " is " + solution + ".");
  } else {
    window.alert("whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!");
  }
}
