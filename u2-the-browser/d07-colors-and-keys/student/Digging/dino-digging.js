var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};
var hammondsMines = [];

var digsites = [buenosAires,mexico,snakewaterMontana,nicaragua];
var depth = 0;

for(var i=0; i < digsites.length; i++){
  depth = depth + parseInt(digsites[i].depthInMeters);
  console.log(digsites[i].location + ': ' + digsites[i].specimens);
}

console.log(depth/digsites.length);

//bonus
function mineSite(){
  for(var i=0; i < digsites.length; i++){
    
    console.log(digsites[i].location + ':\n' +
                digsites[i].specimens)
  }
}
hammondsMines.push(mineSite());

console.log(hammondsMines);
