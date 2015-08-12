//Part 1 Pythagorean Theorem
var side1 = prompt("What is the length of the first side?");
var side2 = prompt("What is the length of the second side?");
alert("The length of the triangle with sides of length " + side1 + " and " + side2 + " is " + Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2)) + ".");

//Part 2 Basic Conversion - Pounds to kg
var lbtokg = prompt("Give a weight in pounds:");
var conversion = lbtokg * 0.453592;
alert(lbtokg + " pounds is equal to " + conversion + " kg.");
