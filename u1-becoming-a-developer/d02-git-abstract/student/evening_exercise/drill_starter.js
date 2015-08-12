//Part 1 Pythagorean Theorem
var side1 = prompt("What is the length of the first side?");
var side2 = prompt("What is the length of the second side?");
alert("The length of the triangle with sides of length " + side1 + " and " + side2 + " is " + Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2)) + ".");

//Part 2 Basic Conversion - Pounds to kg
var lbtokg = prompt("Give a weight in pounds:");
var conversion = lbtokg * 0.453592;
alert(lbtokg + " pounds is equal to " + conversion + " kg.");

//Part 3 Killer Caffeine
var personWeight = prompt("How much do you weigh?");
var coffeecup = personWeight * .63;
//8oz cup = 1 cup of coffee = 95mg
// 6 g = 6000mg
// 6000mg/ 95mg per cup = 63.15 cups of coffee rounding to 63 cups of coffee
//therefore 63 cups of coffee will kill a person that is 100 pounds
// 1lb = .63 cups of coffee
alert("It would take " + coffeecup + " cups of coffee to kill YOU.");
