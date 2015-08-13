var script = "Opening theme and credits.\n";
script += "ALF has a conversation with his family, and hatches a plan.\n";

var human = prompt("Does ALF pretend to be human?");

var answer = (human.toLowerCase() === "yes");

if (answer) {
  script += "ALF puts on a trench coat and wanders around.\n ALF narrowly avoids being discovered.";
} else {
  script += "ALF makes a new friend.";
}

var cat = prompt("Does ALF try to eat the cat?");

while(cat.toLowerCase() === 'yes'){
  script += "ALF tries to eat the cat. His family catches him.\n";
  cat = prompt("Does ALF try to eat the cat?");
  // cat = 'yes';
}

script += "ALF learns a lesson about trust, and everyone laughs.\n";
script += "Roll credits.";
