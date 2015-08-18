// (function(){
// alert("hello");
  // need better solution
  // var car = ['Tesla','sport','4-wheel drive'];
  // var brand = car [0];
  // var style = car[1];

  var tesla = {
    brand: 'Tesla',
    model: 'Model S',
    class: 'sport',
    color: 'silver',
    horsepower: 435,
    cost: 80000,
    isElectric: true,
    mileage: 0,
    drive: function(){
      console.log('drive')
    },
    break: function(){
      console.log('brake');
    }
  };

  var bmw = {
    brand: 'BMW',
    model: 'M5',
    class: 'sport',
    color: 'blue',
    horsepower: 999,
    cost: 90000,
    isElectric: false,
    mileage: 0,
    drive: function(){
      console.log('drive')
    },
    break: function(){
      console.log('brake');
    }
  };

  var ford = {
    brand: 'Ford',
    model: 'Mustang',
    class: 'sport',
    color: 'red w/ white stripe & blue stars',
    horsepower: 1000,
    cost: 50000,
    isElectric: false,
    mileage: 0,
    drive: function(){
      this.mileage++;
      this.cost--;
      console.log('drive');
    },
    break: function(){
      console.log('brake');
    },
    incidents: [
        {date: new Date(2012,12,28), description: 'drunk driving'},
        {date: new Date(2013,12,28), description: 'arrested for DUI'}
      ]
  };



  // var cars = [
  //   { brand: 'Tesla', model: 'S', class: 'sport', color: 'silver', horsepower: 435, cost: 80000, isElectric: true},
  //   { brand: 'BMW', model: 'M5', class: 'sport', color: 'blue', horsepower: 999, cost: 90000, isElectric: false},
  //   { brand: 'Ford', model: 'Mustang', class: 'sport', color: 'red w/ white stripe & blue stars', horsepower: 1000, cost: 50000, isElectric: false }
  // ]
  //
  // for(var i=0; i < cars.length; i++){
  //   console.log('Brand: ' + cars[i].brand + '\n' +
  //                 'Model: ' + cars[i].model + '\n' +
  //                 'Class: ' + cars[i].class + '\n' +
  //                 'Color: ' + cars[i].color + '\n' +
  //                 'Horsepower: ' + cars[i].horsepower + '\n' +
  //                 'Cost: ' + cars[i].cost);
  // }








// })();
