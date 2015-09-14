# Loops

## Intro _(5m)_

- **What are we going to learn?**

> - Who listens to music here? What's your favorite song? There is a loop button so you could listen to your favorite songs over and over again.
> - I think you all know where I'm going with this. We'll be learning about programming loops.

- **Why is this important?**

> - In some cases we have to do the same operations more than once and it would be inefficient to repeat code.
> - If we think back to arrays wouldn't it great to have a loop that increments a index to access each element without having to write the manual code.

## Objectives
- Learn about `for`, `while`, `do while` loops
- Understand when to use one over the other
- Understand how loops allows us to reduce code redundancy
- Be able to traverse through arrays with loops

## Loops

### I do _(10m)_
Let's imagine you go to some party and your objective is to get the food, but there are generic boring people there who want to talk to you. They all greet you the same way and you have no interest in speaking to these people, so you give them all the same generic responses.

```js
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
```

It get's tiring to either have to write or copy/paste code and look at it.

Here's when loops become very useful. All of this redundancy could be simplified to

```js
for(var i=0; i<5; i++) {
  console.log("I'm fine, thank you. Nice to see you again.");
}
```

What's going on here
```js
var i=0 // that is declaring a counting variable
i<5 // is a condition we apply for the loop to run. If it evaluates to false the loop stops.
i++ // increments the counting variables
```

### We do _(5m)_
Let's say you have a dog name Skippy and he wants to play fetch. However you have a WDI assignment due soon and only have time for five throws. Let's code a loop together that would allow us to play fetch with Skippy 5 times.

```js
for(var i=0; i<5; i++) {
  console.log("throw " + i);
}
```

### I do _(10m)_
Another type of loop is a `while` loop. Why do we have this loop? There are times when you want the loop to run for an indefinite amount of times and may or may not terminate.

```js
while([condition]) {

}
```

Let's look at an example to see what I mean. For example, if we have a self driving car that stops once it detects that it is in close proximity to a wall.

If the self-driving car was in a desert, it would drive for a long time cause there are no walls any time soon.

```js
while(true) {
  console.log('Drive...');
}
```

### We do _(5m)_
How about in an urban setting?

```js
var distance = 5;
while(distance < 8) {
  console.log("Drive...");
  distance += 1;
}
```

The last type of loop is a `do while` loop. This type of loop executes the code least once then checks the condition.

### I do _(5m)_
A good use case for this is a user prompt. We don't want to prompt for an input first then check what if the input is valid. If it is not valid, we re-prompt.

```js
do {
  // something ...
} while([condition]);
```

### We do _(5m)_
Let's create a user prompt for a name

```js
do {
    var input = prompt('Please enter your name');
    if (input != null) {
        break;
    } else {
      alert('Invalid Input');
    }
} while(true);
```

### You do _(20m)_
Create a guess a number game.

```js
var target = 5;
do {
    var input = prompt('Guess a number 1 - 10');
    var guess = parseInt(input);
    if(input === null) {
      alert('Please enter something');
    } else if(guess !== target) {
      alert('Nope, guess again');
    } else {
      alert('Congratulations you got it!')
    }
} while(guess !== target);
```

## Arrays & Loops

### I do _(5m)_
We spoke earlier that loops works with really well with arrays as well. Let's see how so, but first let's review
```js
var names = ['Maria', 'Justin', 'Jason', 'Paul'];
var lotteryNumbers = [7, 2, 45, 15, 9, 66];
var booleans = [true, false, true, false];
var blob = [1, 'two', 3, false, 'four', true];
```

Now let's say I want to print all the names in the `names` array. Taking what we learned how can we do this using loops.

Oh wait how do we know the length of the array? Similar to a String there is a `length` property. Hmmm...that's interesting. Why does a String have a `length` property like an array. A String is an array of Characters.


### We do _(5m)_
Ok now we know what we need to start looping through the array and printing all the names in the `names` array.

Let's use a `for` loop.
```js
for(var i = 0; i < names.length; i++) {
  console.log(names[i]);
};
```

Now with a `while` loop.
```js
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
};
```
Why isn't a `do while` loop appropriate?
> runs a least once, but it could be problematic if the array doesn't exist

### You do _(20m)_
Now can you can use a `for` and `while` loop for the `blob` array.

### I do _(10m)_
Review solution

### You do _(15m)_
Now that we have combined loops with arrays, I'd like to go over an example that is a bit more appropriate for `while` loops. To review `while` loops are great for going over things for an indefinite amount of time that will eventually end.

Given this array write a `while` loop that terminates when you detect an element with a value of `42`.
```js
var blob = [1, 'two', 3, false, 42 ,'four', true];
```

### I do _(10m)_
Review solution

### You do _(10m)_
Create a playlist of songs that you want to play on repeat.

### I do _(5m)_
Review
