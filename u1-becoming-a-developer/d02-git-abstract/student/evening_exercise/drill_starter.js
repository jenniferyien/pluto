//Part 1 Pythagorean Theorem
var side1 = parseInt(prompt("What is the length of the first side?"));
var side2 = parseInt(prompt("What is the length of the second side?"));
alert("The length of the triangle with sides of length " + side1 + " and " + side2 + " is " + Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2)) + ".");

//Part 2 Basic Conversion - Pounds to kg
var lbtokg = parseInt(prompt("Give a weight in pounds:"));
var conversion = lbtokg * 0.453592;
alert(lbtokg + " pounds is equal to " + conversion + " kg.");

//Part 3 Killer Caffeine
var personWeight = parseInt(prompt("How much do you weigh?"));
var coffeecup = personWeight * .63;
//8oz cup = 1 cup of coffee = 95mg
// 6 g = 6000mg
// 6000mg/ 95mg per cup = 63.15 cups of coffee rounding to 63 cups of coffee
//therefore 63 cups of coffee will kill a person that is 100 pounds
// 1lb = .63 cups of coffee
alert("It would take " + coffeecup + " cups of coffee to kill YOU.");

//Part 4 Old Modems
var download = 25
var modem = 56*(1.25 * Math.pow(10, -7));
//conversion 1 kilobit = 1.25e-7 GB
var dlTime = (download / modem);
//60 sec in 1 min
// 60 min in 1 hour
alert("It would take " + dlTime + " sec or " + (dlTime/60) + " min or " + (dlTime/60)/60 + " hr to download a " + download + "GB ripped copy of Blade Runner over a $200 56k/s modem from 1995.")

//Part 5 A Long Long Long time
//Portland, Maine to Portland, Oregon = 3187 miles taking I-80 and I-90
//Beatles White Album 2 disc is 1 hr 32 min 22 sec = 5542 sec
var album = 5542 //sec
// 1 hr = 3600 sec
var drive = 55/3600 //x miles in 1 sec
var trip = 3187/drive //= how many secs in the drive
alert("You can listen to the Beatle's White Album 2 disc for " + trip/album + " times as you drive from Portland, ME to Portland, OR on I-80 and I-90.")

//Part 6 Adventure Time!
var x = prompt("Please give me a noun.");
var y = prompt("Please give me a past verb.");
var z = prompt("Please give me a noun.");
var aa = prompt("Please give me a past verb.");
var bb = prompt("Please give me a noun.");
var cc = prompt("Please give me a verb");
var dd = prompt("Please give me a unit of time");
var ee = prompt("Please give me a adjective.");
var ff = prompt("Please give me a past verb.");
alert("Today I went to go get " + x + " from the kitchen, but when I " + y + " the " + z + " was empty. I " + aa + " whether I should go downstairs to buy " + bb + " or simply " + cc + " to the realities of my calendar. Within a " + dd + ", I knew there was no time before my next meeting, filled my " + ee + " cup with hot water and " + ff + " to work.");

//Part 7 Happy New Year Plutos
//4.67 billion miles from pluto to earth
//light travels at 670,616,629 miles per hour
var plutoToEarth = 4.67 * Math.pow(10, 9);
var lightTravel = 670616629 //miles per hour
var messageTime = (plutoToEarth/lightTravel)/24;
//24 hours in a day
alert("My parents should send their Happy New Years message to me in " + messageTime + "Earth days.");
