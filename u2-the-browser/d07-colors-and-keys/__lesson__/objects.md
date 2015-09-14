# JS Objects

## Learning Objectives

* Be able to describe what is a JS object
* Differentiate between a JS object and a JS array
* Add, access, edit, and delete properties of an object
* Model a problem domain in an object-oriented fashion
* Create JS objects with attributes and behaviors
* Create JS object factories to DRY up object creation

## Outline

### I do _(10m)_
Personal info example
#### Simple arrays are not good enough!!
  * propertyName-propertyValue PAIRS
  * The key is the "locator" for each element
  * Example of the web (form data)!

#### Create a personal info hash
  * name
  * age
  * occupation
  * favoriteFood

#### Things to cover in this process
  * Creating a obj
  * Syntax of a obj
  * Adding properties
  * Accessing properties (dot and bracket notation!!)

### We do _(15m)_
 * We're going to make cars
  * create a car object called `mustang` with the following properties
    * color - red
    * class - muscle
    * horsepower - 435
  * create a car object called `tesla` with the following properties
    * color - silver
    * class - sport
    * horsepower - 211
  * create a car object called `ferrari`
    * color - black
    * class - exotic
    * horsepower - 543
* In your console
  * Find out what class car the mustang is (use both notations)
  * Find out how many horsepower the ferrari has (use both notations)
  * Find out what color the tesla is
  * Give the ferrari a paint job (make it orange)
  * Give the mustang a suite tune-up. Change its horsepower to 500
  * The Tesla goes super-saiyan. Change its class to "dbz", and change its horsepower to 9001

### You do _(15m)_
Create your own car object model

> ### BREAK _(10m)_

### We do _(10m)_
Currently the cars has only attributes and no functionality. What can we do about that? Yesterday we learned that function is data as well. What can object attributes store?
  * Add a drive function
  * Add a break function


### I do _(5m)_
#### `this`
Functions for an object can reference itself as well. Why would we want to do that?

> To access the object's attributes, such as mileage: `this.mileage`

For example every time your car drives shouldn't the mileage increase. How can we do that?

Let's add a mileage attribute and modify the drive function to increment it each time it drives.


```js
drive: function() {
  this.mileage++;
  console.log('driving...');
}
```

### You do _(15m)_
Update the car object to have a `fuel` and `breakPad` attribute. Every time the car drives the `fuel` should decrease and every time the car breaks the `breakPad` should decrease. If the fuel is low, you should also have a way to add fuel.

```js
drive: function() {
  if (fuel > 0) {
    fuel--;
    return 'Vroom!';
  } else {
    return 'out of gas';
  }
},
refuel: function() {
  fuel = 5;
},

break: function() {
  this.breakPad--;
  console.log('breaking...');
},
```
## I do _(5m)_
Let's say I bought a car from a really bad driver. The car woudl then have accident reports associated with the car. How could we represent it?

```js
incidents: [
  { date: new Date(2012, 12, 28), description: 'drunk driving'},
  { date: new Date(2013, 1, 28), description: 'drunk driving'},
  { date: new Date(2014, 4, 30), description: 'rear ended'}
]
```

## I do _(10m)_
Object Factory
* Let's make two cars
* What sucks about this?
* How can we DRY up this code?
* Car Factory!

```js
var carFactory = function(color, class, horsepower) {
  return {
    color: color,
    class: class,
    horsepower: horsepower,
    fuel: 5,
    drive: function() {
      if (fuel > 0) {
        fuel--;
        return 'Vroom!';
      } else {
        return 'out of gas';
      }
    },
    refuel: function() {
      fuel = 5;
    },
    paint: function(color) {
      this.color = color;
    },
    tuneup: function() {
      this.horsepower += 10;
    }
  }
};
```

> Break _(10m)_

## We do _(10m)_
* Model a lamp! - `lamp.js`
  * wattage - number
  * on - boolean
  * turnOn() - turn the lamp on
  * turnOff() - turn the lamp off
  * status() - return a string
    * "Lamp is off" if lamp is off
    * "Lamp is shining with X watts of power" if lamp is on

```js
var lamp = {
  wattage: 50,
  on: false,
  turnOn: function() {
    this.on = true;
  },

  turnOff: function() {
    this.on = false;
  },

  status: function() {
    if (this.on) {
      return "Lamp is shining with " + this.wattage + " watts of power"
    } else {
      return "Lamp is off"
    }
  }
};
```

## You do _(20m)_
* Model a pokemon! - `pokemon.js`
  * number - number
  * name - string
  * type - string
  * moves - array of strings
  * hp - number starting at 100
  * takeDamage(amount) - reduce hp by amount, to a minimum of 0
  * visitPokeCenter() - restore hp to 100
  * isFainted()
    * return true of hp less than or equal to zero
    * return false if hp is greater than zero

```js
var bulbasaur = {
  number: 1,
  name: "Bulbasaur",
  type: "grass",
  moves: ["tackle", "vine whip", "scratch", "leech seed"],
  hp: 100,
  takeDamage: function(amount) {
    this.hp -= amount;
    if (this.hp < 0) {
      this.hp = 0;
    }
  },

  visitPokeCenter: function() {
    this.hp = 100;
  },

  isFainted: function() {
    return (this.hp <= 0);
  },

  randomMove: function() {
    return this.moves[Math.floor(this.moves.length * Math.random())];
  },

  attack: function() {
    return this.name + " used " + this.randomMove() + "!";
  }
}
```

### You do _(20m)_
* Model an apartment building
* Go crazy
* What are the nouns in this problem domain?
* Be conscious of your attributes vs your behaviors

> Show and tell _(10m)_
