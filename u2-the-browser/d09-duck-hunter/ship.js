(function(){
  var ships = [
  {
    name: 'The Titanic',
    lost: 1912
  },
  {
    name: 'The Santa Maria',
    lost: 1492
  },
  {
    name: 'HMS Bounty',
    lost: 1790
  },
  {
    name: 'Old Ironsides',
    lost: null
  },
  {
    name: 'Potemkin',
    lost: 1923
  },
  {
    name: 'USS Monitor',
    lost: 1862
  },
  {
    name: 'HMS Dreadnought',
    lost: 1923
  },
  {
    name: 'Bismarck',
    lost: 1941
  },
  {
    name: 'HMS Beagle',
    lost: 1870
  },
  {
    name: 'Nuestra Señora de Atocha',
    lost: 1622
  }
];

// for(var i = 0; i < ships.length; i++){
//   console.log(ships[i].name);
// }

ships.forEach(function(ship){
  console.log(ship.name);
})

var list = ships.map(function(shipName){
  return shipName.name;
});

console.log(list);

var year = ships.map(function(shipName){
  return shipName.lost;
});

console.log(year);

var lostafter = ships.filter(function(element){
    return element.lost > 1900
      // console.log("Lost after 1900: " + 'Name: ' + element.name + ' Lost: ' + element.lost );
});

console.log(lostafter);

var lostbefore = ships.filter(function(element){
    return element.lost < 1900 && element.lost !== null
      // console.log("Lost before 1900: " + 'Name: ' + element.name + ' Lost: ' + element.lost );
});

console.log(lostbefore);

var lostbetween = ships.filter(function(element){
  return 1800 <= element.lost && element.lost < 1899
  // console.log("Lost between 1800-1899: " + 'Name: ' + element.name + ' Lost: ' + element.lost )
});

console.log(lostbetween);

var losthms = ships.filter(function(element){
  // return element.name.search('HMS') >= 0;
  return element.name.includes('HMS')
    // console.log("Ship name with HMS: " + 'Name: ' + element.name + ' Lost: ' + element.lost );
});

console.log(losthms);

})();
