
var alertThreepio = function() {

	// Threepio getting your name and then converting it to all
	// lowercase to make the comparison that much easier.
	var name = window.prompt("Threepio : And your name is?");

  // Creating a seperate variable for the name to be stored in lowercase for easier string comparison
	var lowerCaseName = name.toLowerCase();

	// If/Else block to parse through prompt response
	if (lowerCaseName == "obi-wan kenobi") {

    // Alert triggered if you are Obi-Wan Kenobi
		window.alert("Threepio : Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
	} else {  // Else block triggered if you give a name other than Obi-Wan Kenobi

    // Creating a response variable that should be either yes, y, no, or n
		var response = window.prompt("Threepio : It is a pleasure to meet you, " + name + ". I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?(yes/no)");

    // Making response all lower-case because it doesn't need to be used for anything other than strind comparison
		response = response.toLowerCase();

    // If/Else block comparing your answers to the second prompt
		if((response === "yes") || (response === "y")){
			window.alert("Threepio : Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
		}
		else if((response === "no")|| (response == "n")){

      // Alerts for when you're not the man they're looking for
			window.alert("Threepio : I've really enjoyed speaking with you, " + name + ", but if you'll please excuse me, I have to help my friend find someone named Obi-Wan Kenobi.");
			window.alert("Threepio : Well R2, I suppose we'll just have to keep looking. \nR2-D2: (Agreeable droid noises)");
		}
		else {

      // Alerts for when you submit an answer that is not of the form of yes, no, YES, NO, n, N, y, Y etc...
			window.alert("I'm sorry, I didn't hear you correctly. I only respond to \"yes\" or \"no\"...");
			window.alert("Threepio : Well R2, I suppose we'll just have to keep looking. \nR2-D2: (Agreeable droid noises)");
		}
	}
} // alertThreepio function ends!

// Threepio's greeting
window.alert("Threepio : Hello, I am C-3P0, human-cyborg relations");
// initializing alertThreepio function
alertThreepio();
