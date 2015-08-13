//Creating the function to start the R2 Calculator
var alertArtoo = function() {

	//Initialising the variables here
	var operator;
	var operand1;
	var operand2;
	var result;

	//Initializing looping condition
	var loop = true;

  // starting while-loop
	while(loop) {

		//Prompting user for input of operator
		operator = window.prompt("Please enter which operator you would like to use ('+', '-', '*', '/'). Enter 'q' to exit.");

		//Checking to see if the operator is 'q' or not, if it is then quit program
		if(operator != 'q'){

      // checking if inputted operator is in fact an operator using isOperator function
			if(isOperator(operator)){

        // prompting for the operands
				operand1 = window.prompt('Enter your first operand');
				operand2 = window.prompt('Enter your second operand');

        // checking to make sure operands are numbers
				if(!(isNaN(operand1)) && !(isNaN(operand2))) {

          // getting the calculator result from helper function solve
					result = solve(operator,operand1,operand2);

          // printing out result
					window.alert('The Solution to ' + operand1 + ' ' + operator + ' ' + operand2 + ' is ' + result);
				}
			} else {
        // this pops up when an invalid response has been input
				window.alert('Please enter a valid response');
			}
		} else {
      // exit calculator once "q" has been input
			loop = false;
		}
	}
  // return result - Not necessary
	return result;
} // End alertArtoo function!


// ***************************************
// ********** Helper functions! **********
// ***************************************

// Helper function to determine if string is an operator
var isOperator = function(str){

  // if statement to determine if str is a valid operator
	if( (str === "*") || (str === "/") || (str === "+") || (str === "-")) {
		return true;
	} else {
		return false;
	}
} // end isOperator function!


// Helper function to solve calculator equation
var solve = function(operator,operand1,operand2){
  // declaring result variable
  var result;

  // If/Else block to determine which action to take to get result
  if(operator === "+"){
    result = parseInt(operand1) + parseInt(operand2);
  } else if(operator === "-"){
    result = parseInt(operand1) - parseInt(operand2);
  } else if(operator === "*"){
    result = parseInt(operand1) * parseInt(operand2);
  } else { //Because this is being used AFTER isOperator we know its one of the 4 and only division is left
    result = parseInt(operand1) / parseInt(operand2);
  }

  // returning the result from the calculator equation
  return result;
} // end solve function!


//R2's greeting
window.alert('R2D2 : (beep-boop whrrrrrr bleep)\nWelcome to the R2D2 calculator!');
alertArtoo();
