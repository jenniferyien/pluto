(function() {

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
  ]

  // - Print the names of all of the ships
  // for(var i=0;i<ships.length;i++) {
  //   console.log(ships[i].name);
  // }

  // - Print the names of all of the ships
  ships.forEach(function(ship) {
    console.log(ship.name);
  })

  console.log("======================");

  // - Get just the names of all of the ships
  // newArray = []
  // for(var i=0;i<ships.length;i++) {
  //   newArray.push(ships[i].name);
  // }
  // console.log(newArray)

  // - Get just the names of all of the ships
  var shipNames = ships.map(function(ship) {
    return ship.name;
  })
  console.log(shipNames)

  // - Get all of the years when ships were lost
  var shipYears = ships.map(function(ship) {
    return ship.lost;
  })
  console.log(shipYears)

  // - Get the (name/year) of all of the ships that were lost *after 1900*
  var shipsLostAfter1900 = ships.filter(function(ship) {
    return ship.lost > 1900
  })
  console.log(shipsLostAfter1900);

  // - Get the (name/year) of all of the ships that were lost *before 1900*
  var shipsLostBefore1900 = ships.filter(function(ship) {
    return ship.lost < 1900 && ship.lost != null
  })
  console.log(shipsLostBefore1900);

  // - Get the (name/year) of all of the ships that were lost between 1800-1899
  var shipsLostIn19Century = ships.filter(function(ship) {
    return ship.lost >= 1800 && ship.lost < 1900
  })
  console.log(shipsLostIn19Century);

  //- Get all of the ships with HMS in their name
  var hmsShips = ships.filter(function(ship) {
    return ship.name.includes("HMS");
  })
  console.log(hmsShips);

})();
