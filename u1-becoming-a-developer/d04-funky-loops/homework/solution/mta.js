console.log("loaded mta");

nLineStops   = ['Times Square',
                '34th',
                '28th-n',
                '23rd-n',
                'Union Square',
                '8th'];

lLineStops   = ['8th Ave',
                '6th Ave',
                'Union Square',
                '3rd Ave',
                '1st Ave'];

sixLineStops = ['Grand Central',
                '33rd',
                '28th-six',
                '23rd-six',
                'Union Square',
                'Astor Place'];

//part 4 solution

console.log( 'Here\'s a list of N line stops.');

for (var i = 0; i < nLineStops.length; i++) {
  console.log(nLineStops[i]);
};

var start = prompt("What stop are you getting on?");
var stop = prompt("What stop are you getting off?");

var numberOfStops = Math.abs(nLineStops.indexOf(stop) - nLineStops.indexOf(start) );

console.log("Your trip from the " + start + " station to the " + stop + " station is " + numberOfStops + " stops long.");


// part 5 and on


// here are just some variable and functions to use.
var startLine,
    startStop,
    endLine,
    endStop,
    stops = 0,
    transfers = 0;

//we haven't taugh objects yet. we will, don't freak
var subwayLines = {  N: nLineStops,
                     L: lLineStops,
                   Six: sixLineStops
                  };

function displayLines(){

  console.log("Here's a list of subway lines:\n");

  //iterate through the object for each line, we use the keys and display them
  // Object.keys gives you an array of key values
  for (var i = 0; i < Object.keys( subwayLines ).length; i++) {
    console.log( i + 1 + ". " + Object.keys(subwayLines)[i]);
  };

}

function displayStops(line){

   for (var i = 0; i < line.length; i++ ) {
     console.log(line[i]);
   };
}

function getStartInfo(){

  displayLines();

  startLine = prompt("What Line are you getting on?");

  displayStops( subwayLines[startLine] );

  startStop = prompt("What stop are you getting on?");

}


function getEndInfo(){

  displayLines();

  endLine = prompt("What line are you getting off?");

  displayStops( subwayLines[endLine] );

  endStop = prompt("What stop are you getting off?");

}

function calculateStops(line, start, stop){
  return Math.abs( subwayLines[line].indexOf(start) - subwayLines[line].indexOf(stop) );
}


// here's where we actually do stuff
getStartInfo();
getEndInfo();

if( startLine != endLine ){
  stops = calculateStops(startLine, startStop, "Union Square");
  stops += calculateStops(endLine, "Union Square", endStop);
  transfers = 1;
} else {
  stops = calculateStops(startLine, startStop, endStop);
}

console.log("Your trip from the " + startStop + " station to the " + endStop + " station is "+ stops +" stops long.");
console.log("You will have to make " + transfers + " transfer at Union Square to the "+ endLine +" line.");
