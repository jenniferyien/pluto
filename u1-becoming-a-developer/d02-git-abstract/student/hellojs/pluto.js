var message, name, bags, minutes;
message = " take out the trash!!";
name = prompt("What is your name?");
alert (name.toUpperCase() + message);

bags = parseInt(prompt("How many bags of trash are there?"));
alert (bags);

minutes = (bags *5) + " minutes";

alert ("It should take you " + minutes);
