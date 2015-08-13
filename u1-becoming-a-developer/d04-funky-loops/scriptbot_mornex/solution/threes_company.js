console.log('threes company loaded');

var script = "Opening theme and titles.\n";


var answer = prompt("Who does this week feature?");

if( answer.toLowerCase() === 'chrissy'){
  script += "Chrissy has a problem.\n";
  script += "There is a bawdy situation involving Jack\n";

  var jackMucksUp = prompt("Does Jack muck it up?");

  if(jackMucksUp === "yes"){
    script += "Janet solves the problem and grows as a person.\n";
  } else { //implement no
    script += "The problem solves itself.\n"
  }

//if it's not chrissy default to Janet, because our tree gives no other options
} else {
  script += "Janet has a problem\n";
  script += "Jack acts foolishly\n";
  script += "Janet solves the problem and grows as a person.\n"; //this is a repeated line, how would you refactor?
}

script += "Mr. Roper says something that is really uncomfortable.\n";

script += "Roll Credits.\n";

console.log(script);






