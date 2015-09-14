# Constructors and Prototypes

## Learning Objectives

- See parallels with Ruby classes from previous lesson
- Define a constructor function in JavaScript
- Use a constructor to create multiple objects
- Use a constructor's prototype to store common functionality

## Outline

### Overview
- Yesterday we learned about Ruby class and we created an instances of some class, such as the Dog class
- Today we will be learning how to do it in JavaScript

### Review
- What are objects in JavaScript? Everything and they are key-value pairs.
  * Write out some example objects of Dennis and Bobby
- Made multiple object literals, each with their own attributes and behaviors
  * Point out that it isn't DRY - it's MOIST...ew

### Constructors

- A constructor is a function in javascript that is used to create multiple objects that possess unique attributes, but with the same behaviors
- This is the equivalent of a Ruby class
- Acknowledge that declaring a constructor with a function is uncommon, but this is how JS does it

**I Do**

```js
var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	};
};
```

```js
var dennis = new Person('Dennis', 'Liaw', 9001);
dennis.fullName();
dennis.age;

var bobby = new Person('Bobby', 'King', 50);
bobby.fullName();
bobby.age;
```

> Conventions
- capitalize the function (will work without it, but follow CONVENTION)
- to make an object we use a keyword `new` similarly to Ruby

**You do** 15 minutes

* Taking the concept of Ruby classes and the Dog example, define a constructor for a fish
* Create 3 different types of fish. One of them must be an Anglerfish. Make sure that they have different attributes and add a swim function to each fish.
* Explain what's an Anglerfish

**REVIEW 10 minutes SEND ME YOUR FISH**

# BREAK

We have a problem. When we run our constructor function, we are creating new instances of the objects. Each object gets its own set of attributes, and its own set of behaviors. This means every time we make an object, it will create a new copy of every behavior function we define.

If we make 10 fish, we make ten minion objects, and ten revert functions, and ten mutate functions.

What if we make 10000 fish. That's 10000 copies of the same function stored in memory. This is memory intensive.

**Note**
Keep in mind that Ruby will not have this behavior because it is not prototype-based programming language.

## Prototype-Based Programming
  * A style of Object Oriented Programming
  * It clones objects to reuse or inherit behaviors
  * Each clone can share attributes and methods through their prototype
  * Why is JS like this? Because this approach is much more light weight compared to Java or Ruby? If anyone remembers Java Applets, they were slow and the experience sucked.

### How can we fix this?
Let's get back to our problem. We need to better abstract Person prototype.

## Prototypes

#### First we do

```js
// This creates a Person prototype
var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

// This adds a Person fullName function to the prototype, so the function is not redeclared each time an instance of a Person is created
Person.prototype.fullName = function() {
	return this.firstName + ' ' + this.lastName;
};

Person.prototype.introduce = function() {
	return 'Hi my name is ' + this.fullName() + '!';
};
```

#### Now let's discuss

**DRAW ON BOARD**

- the prototype gives us the ability to store common attributes and behaviors for all objects created from a constructor.
- It stores one copy, that all objects can use.

**String.prototype**
For example, every String object has access to several methods and attributes defined in the prototype
```js
'String 1'.length
'String 1'.split(' ');
```

### How does it work?

- when an object calls a method, first it checks itself and sees if that behavior has been defined for it. If it does not find it, it will look at its prototype to see if it has been defined there and it'll keep looking down the prototype chain until there are no more prototypes or when `null` is returned.

- When an object is made, a connection is made to the prototype

**You do** 10 minutes

Refactor your fish constructor to use a prototype
- add a swim function that returns the fish type and size
- for the Anglerfish add a fused attribute that is a boolean

# BREAK

## Benefits

- define a function once, that multiple objects have access to
- can add functionality at any point in your program and be assured that any previously created objects will have that functionality

**You do** 20 minutes

Make a `Car` constructor and a `lot` object literal.

- `Car` has make, model, rimDiameter
	- info method -> return the make, model and rim diameter
	- upgradeRims -> rimDiameter + 10
- `lot` is an object literal, with an array of cars
	- behavior: addCar -> accept a car object and add
	- behavior: listAllCars -> iterate over the array of cars logging the response of calling the car objects info method

** GET STUDENT TO COME UP AND TYPE RESPONSES**

**DOES THIS MEAN WE SHOULD CHANGE AND ADD PROPERTIES TO JAVASCRIPT STRING, NUMBER, ARRAY AND OBJECT CLASSES** NO!

## Conclusion
- JavaScript is OOP as well, but in a different fashion
- It is different or even weird, but with the benefit of running really fast in browser it's worth it.
