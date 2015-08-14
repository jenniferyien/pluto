var nLineStops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th']
var lLineStops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave']
var sixLineStops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place']

//Part 4
var whatStop = prompt("What subway stop would you like to stop at on the N train?\nThe N train starts off at Times Square.\nWould you like to stop at " + nLineStops);

  for(var i =0; i < nLineStops.length; i++){
      if(nLineStops[i].toLowerCase() === whatStop.toLowerCase()){
        alert("To go to " + whatStop + " it will take you " + i + " stops on the N train.");
      }
  }
//Part 5 - Bonus (Tried)
//   var trainStops = 0;
//   var totalStop = 0;
//   var z = 0;
//   var z1 = 0;
//
// var whichTrain = prompt("Which train do you want to get on? [N,L]");
// var answer = whichTrain;
//
// for(var i=0; i<1 ; i++){
//   while(answer.toLowerCase() === 'n' || answer.toLowerCase() === 'l') {
//     if (answer.toLowerCase() === 'n'){
//     var whatStart = prompt("What subway stop would you like to get on at on the N train?\nWould you like to start at " + nLineStops);
//     for(var i =0; i < nLineStops.length; i++){
//         if(nLineStops[i].toLowerCase() === whatStart.toLowerCase()){
//         var y = nLineStops.indexOf('Union Square') - nLineStops.indexOf(nLineStops[i]);
//       }
//     } }
//     if (answer.toLowerCase() === 'l'){
//       var whatStart = prompt("What subway stop would you like to get on at on the L train?\nWould you like to start at " + lLineStops);
//       for(var i =0; i < lLineStops.length; i++){
//       if(lLineStops[i].toLowerCase() === whatStart.toLowerCase()){
//         var x = lLineStops.indexOf('Union Square') - lLineStops.indexOf(lLineStops[i]);
//       }
//       }
//     }
//   var change = prompt("Which train do you want to get off? [N,L]");
//   answer = change;
//   trainStops = Math.abs(x) + Math.abs(y);
//   totalStop = trainStops;
// }
//   totalStop = totalStop + trainStops
//   alert("It will take you " + totalStop + " stops for the trip." )
// }
