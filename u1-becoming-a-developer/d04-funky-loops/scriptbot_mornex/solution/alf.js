console.log("ALF IS LOADED");

var script = "Opening themes and titles.\n";

script += "ALF has a conversation with his faimily, and hatches a plan.\n";

var answer = prompt("Does ALF pretend to be human?");

var alfPretendsToBeHuman = answer === "yes";

if( alfPretendsToBeHuman ){
  script += "ALF pus on a trench coat and wanders around.\n";
  script += "ALF narrowly avoids being discovered.\n";
} else {
  script += "ALF makes a new friend.\n"
}

// because you guys love do whiles so much <3
do {
  script += "ALF tries to eat the cat. His family catches him.\n";
  answer = prompt("Does ALF try to eat the cat?");
  var attemptedCatslaughter = answer === "yes";
} while( attemptedCatslaughter )

script += "ALF learns a lesson about trust, and everyone laughs.\n";
script +="roll credits\n";

console.log(script);
