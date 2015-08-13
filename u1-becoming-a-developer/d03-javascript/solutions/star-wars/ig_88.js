var findHanSolo = function() {
	// Declaring relevant variables here:

  // variable to control the while loop
  var loop = true;
  // variable to store the answer to the prompt
	var answer;
  // variabel to store lowercased version of the answer variable
	var answerLowerCase;

  // While loop to continuously loop through these steps until Han shoots first
	while(loop){

    // prompting user for input and storing string in answer
		answer = window.prompt('Freeze! Who are you?');

    // Creating lowercased version of answer variable
		answerLowerCase = answer.toLowerCase();

    // If/Else block going through prompt answers
		if(answerLowerCase === 'zap'){

      // calling zap20Times function that is defined below
      zap20Times();
      // making the looping condition false so you can exit the loop
			loop = false;
		}
		else if(answerLowerCase !== 'han solo'){
			window.alert('You must die! (zap zap kaboom)!');
		} else {
			window.alert('You are mine Han Solo!');

      // calling zap20Times helper function to engage fire-fight
      zap20Times();
		}
	} // While loop ends!

  // Checking if Han escapes from the bounty hunter after the fire fight
	if(escapes()){

    // Han escapes... Bounty hunter is angry!
		window.alert('I\'ll get you next time, Solo!');
	} else{

    // Han is caught... Jabba will be pleased
		window.alert('Solo is caught! Jabba the Hutt will pay handsomely...');
	}
} //findHanSolo function ends!



// ***************************************
// ********** Helper functions! **********
// ***************************************

// Function to loop through 'zap!' alerts 20 times
var zap20Times = function() {

  // for-loop
  for(var i = 0; i < 20; i++){

    // Alert window to simulate fire-fight
    window.alert('(zap)');

	} // for-loop ends!
} // zap20Times function ends!



// Function to determine whether or not Han escapes from the bounty hunter
var escapes = function(){

  // Math.round(Math.random()) will end up resulting in either a 1 or 0 and then storing that value in probability variable
	var probability = Math.round(Math.random());

  // If/Else block that returns true or false if Han escapes
	if(probability === 1){

    // If probability is equal to 1 then Han escapes
		return true;
	} else {

    // If probability is equal to 0 then Han does not escape
		return false;
	}
} // escape function ends!
