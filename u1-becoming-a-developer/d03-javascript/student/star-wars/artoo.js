var called = window.alert("(beep-boop whrrrrrr bleep) Welcome to the R2D2 calculator!");
while(true) {
  var userInput = prompt("Please enter which operator you would like to use ('+', '-', '*', '/', '^', '^1/2', 'sin', 'cos', 'tan', '!'). Enter 'q' to exit.");
  if (userInput === 'q'){
    break;
  } else if (userInput === '+' || userInput === '-' || userInput === '*' || userInput === '/' || userInput === '^') {
    var frstOper = parseInt(prompt("Enter you first operand:"),10);
    var secOper = parseInt(prompt("Enter your second operand:"),10);
      // if (userInput === "+"){
      //   var solution = frstOper + secOper;
      // } else if (userInput === "-"){
      //   var solution = frstOper - secOper;
      // } else if (userInput === "*") {
      //   var solution = frstOper * secOper;
      // } else if (userInput === "/") {
      //   var solution = frstOper / secOper;
      // }
      switch (userInput){
        case '+':
            var solution = frstOper + secOper;
            break;
        case '-':
            var solution = frstOper - secOper;
            break;
        case '*':
            var solution = frstOper * secOper;
            break;
        case '/':
            var solution = frstOper / secOper;
            break;
        case '^':
            var solution = Math.pow(frstOper,secOper);
            break;
      }

    window.alert("The solution to " + frstOper + " " + userInput + " " + secOper + " is " + solution + ".");
  } else if(userInput === '^1/2' || userInput === 'sin' || userInput === 'tan' || userInput === 'cos'){
    var Oper = parseInt(prompt("Enter operand:"),10);
      switch (userInput){
        case '^1/2':
            var solution = Math.sqrt(Oper);
            break;
        case 'sin':
            var solution = Math.sin(Oper);
            break;
        case 'cos':
            var solution = Math.cos(Oper);
            break;
        case 'tan':
            var solution = Math.tan(Oper);
            break;
      }
    window.alert("The solution to " + Oper + " " + userInput + " is " + solution + ".");
  } else if (userInput === '!'){
      var factorial = parseInt(prompt("Enter operand:"),10);
      var solution = 1;
      for (var i = factorial; i > 0; i--){
        var x = solution * i;
        solution = x;
      }
      window.alert("The solution to " + factorial + " " + userInput + " is " + solution + ".");
  } else {
    window.alert("whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!");
  }
}
