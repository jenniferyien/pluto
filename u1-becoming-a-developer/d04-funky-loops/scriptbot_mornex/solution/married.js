console.log("married with script bot");

var script = "Opening themes and credits\n";

var answer = prompt("Is Peggy whining about something?");

var peggyWhining = answer === "yes";

console.log(peggyWhining);


if( peggyWhining ){
  script += "Al is mean to peggy.\n";
} else {
  script += "The kids start to whine.\nAl is mean to them.\n";
}

script += "Roll Credits.";

console.log(script);
