# Iterators

## Agenda
- Review functions
- Review objects
- Review array, nested array, array of objects
- Introduce iterators (`forEach`, `for in`, `map`, `filter`, `sort`)

## Learning Objectives
- Know that everything in JS is an object
- Combine a mix of array, nested array, objects, and functions concepts (don't freak out)
- Utilize iterators learned to perform procedures on arrays and objects

## Big Picture
Almost all apps will require you to work with data in some form. These exercises will provide you with tools to organize and manipulate data.

## Annoucement
- We will get a guest lecture from Jeff in the afternoon. He's the Big Boss.

## I do / We do _(20m)_

### Object Review
- A list of Key-Value pairs aka `attribute`
- A key could be assigned any type of object.
```js
var person = {
  name: 'Pan',
  gender: 'male',
  isAwesome: true
}
```

### Array Review

- 1D Array
  ```js
  var pansTips = ['Focus on the BIG Picture!', 'Stay FOCUS!', 'Work hard', 'Keep Calm!'];
  ```
- 2D Array
  Think Inception the move. A dream within a dream. An array within an array.
  ```js
  var roomLayout = [
    ['Esther', 'Andres', 'Raquel', 'Matt', 'Joy'],
    ['Toti', 'Josh', 'Brian', 'Harry', 'Ed'],
    ['Yuka', 'Steph', 'Zoe', 'Eric', 'Calvin'];
  ];
  ```
- Array of Objects
  Think Inception again. Not too different.
  ```js
  var students = [
    { name: 'Toti', gender: 'male', isAwesome: true },
    { name: 'Raquel', gender: 'female', isAwesome: false },
    { name: 'Jacob', gender: 'male', isAwesome: true },
    { name: 'Brian', gender: 'male', isAwesome: true },
  ]
  ```

### Function Review
- Functions are procedures/subprograms/subroutines/methods. They allow programmers to to create well-defined code *modules*.
- Functions help programmers split a large problem into small chunks.
- Functions allow a programmer to use a well-defined routine multiple times.
- Functions use arguments to accept necessary **"input"**.
- If required, functions use a ```return``` statement to communicate **"output"** (not the *see it on the screen* type of output). Data that should be returned to the location that invoked the method should be sent via a ```return``` statement
- JavaScript treats functions as first-class citizens aka they are treated like every other object, so quite the contrary. That means that you can treat them as other objects and can pass a function as an argument to another function.

```js
// There are many ways to declare functions

// Hoisting occurs
function messageToClass(isCalm) {
  if(isCalm) {
    return 'Carry On';
  } else {
    return 'Keep Calm and Code On';
  }
}

// No hoisting declaration
var messageToClass = function(isCalm) {
  if(isCalm) {
    return 'Carry On';
  } else {
    return 'Keep Calm and Code On';
  }
}

// Anonymously. We'll be using this way a lot in this lesson.
function(isCalm) {
  if(isCalm) {
    return 'Carry On';
  } else {
    return 'Keep Calm and Code On';
  }
}
```

## I do _(5m)_

### `forEach`

- You can apply an operation to every element in an  array by using the **```forEach```** method.
- The ```foreach``` method takes an *operation* as an argument.
- In other words, the ```foreach``` method requires a *function* as an argument. That function gets applied to every element in the array.

```js
ARRAY.forEach(function(element, index, array) {

});
```

## Other Array Methods that take Callback Functions
These methods are more specific than the ```foreach``` method. Each of the following methods modify data from the original array and return a new array with transformed data .

### `map`
- The ```map``` method returns an array with the *transformed* results of the original array, according to the operation specified as an argument

```js
ARRAY.map(function(element, index, array) {

});
```


### `filter`
- Filter returns a new array with all elements that passes a test implemented by your provided function
```js
someArray.filter(function() {
 if(something) {
  return true;
 }
 return false;
});
```

### Filtering through Nested Arrays

**You do (15 minutes)** - Individually, filter for a all meals with sauce

**Outcome**
```javascript
// Array Within Array Manipulation
var meals = [
    ['milk', 'cereal'],
    ['meat', 'sauce', 'bread'],
    ['pasta', 'sauce', 'meat']
];

// Obtain all meals with sauce
var saucyMeals = meals.filter(function(thatMeal){
    for(var i=0; i<thatMeal.length; i++){
        if (thatMeal[i] === 'sauce'){
            return true
        }
    }
    return false;
});
```

### Objects within Arrays

> **Code along** - Often we work with many types of objects. If we wanted to group them, how would we do that? (Ask class)
**Review** - JavaScript Objects are key value pairs

> `{name: 'lichard', age: 3}`.

**Show code**
```javascript
// Object Within Array Manipulation
var people = [
    {name: 'lichard', age: 3},
    {name: 'kathew', age: 33},
    {name: 'omily', age: 13}
];
```

> **Review**
```javascript
myArray.map(function(element, index) {
 // do something...
});
```

> **You do (10 minutes)** - update each person object to have a club attribute set to Koalas using map

**Outcome**
```javascript
// Object Within Array Manipulation
var people = [
    {name: 'lichard', age: 3},
    {name: 'kathew', age: 33},
    {name: 'omily', age: 13}
];

// Each is in the koala club! Place that in their attributes
var koalaClub = people.map(function(person){
    person.club = 'Koalas';
    return person;
});
```

> **Check understanding**

<br>

> **I do** - based on what we know about objects we could also store any type of data in an object as well.
As a person I have many hobbies. How do you think we could represent that in an object? Hint hint, remember **inception**.

**Outcome**
```javascript
// Array Within Object Within Array Manipulation
var people =[
    {name: 'lichard', age: 3, hobbies: ['bug picking', 'eating', 'music']},
    {name: 'kathew', age: 33, hobbies: ['fencing', 'dat bass']},
    {name: 'omily', age: 13, hobbies: ['skateboarding', 'music']}
];
```

> **Acivitity (20 minutes)** - In groups of two or three filter through an array of people for people who like music

**Outcome**
```javascript
// Array Within Object Within Array Manipulation
var people =[
    {name: 'lichard', age: 3, hobbies: ['bug picking', 'eating', 'music']},
    {name: 'kathew', age: 33, hobbies: ['fencing', 'dat bass']},
    {name: 'omily', age: 13, hobbies: ['skateboarding', 'music']}
];

// Find all the music fans
var musicFans = people.filter(function(person){
    var hobbies = person.hobbies;
    for(var i=0; i<hobbies.length; i++){
        if (hobbies[i]==='music'){
            return true;
        }
    }
    return false;
});
```

## Other Resources
- http://colintoh.com/blog/5-array-methods-that-you-should-use-today
