alert("Opening theme and titles.");

var feature = prompt("Who does this week feature? [Janet or Chrissy]");
var muck = '';

if(feature.toLowerCase() === "janet"){
    alert("Chrissy has a promblem.");
    alert("There is a bawdy situation involving Jack.");
    muck = prompt("Does Jack muck it all up? [yes or no]");
  } else if (feature.toLowerCase() === "chrissy"){
    alert("Janet has a problem.");
    alert("Jack acts foolishly.");
    muck = 'yes';
  }

if(muck.toLowerCase() === 'yes'){
    alert("Janet solves the problem and grows as a person.");
  } else if (muck.toLowerCase() === 'no'){
    alert("The problem solves itself.");
  }

alert("Mr.Roper says something that is really uncomfortable.")

alert("Roll credits");
