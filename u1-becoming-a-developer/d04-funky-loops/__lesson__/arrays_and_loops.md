## Loop Review
We learned about three types of loops yesterday: `for`, `while`, `do while`.

To get to you about the different types of loops, here is what I learned.
- `for` loops are good when you know the exact times you want to loop
- `while` loops are good for when you have to loop an indefinite amount of time. For example, Let's say we could only read one line of text of a book and want to store the text. A `while` loop would be helpful, since we don't know how many lines the book has.
- `do while` loops are good for when you want to execute code at least once. For example, user prompts.

### You do _(20m)_
Write a mulitplication practice game. That randomly generates numbers between 1-10 to creat questions. After each time the user answer the question correct let them know. Otherwise tell them they are wrong and the correct answer. Then ask the user if they would like more practice.

```js
do {
    var op1 = Math.floor(Math.random() * 10) + 1
    var op2 = Math.floor(Math.random() * 10) + 1
    var answer = op1 * op2;
    var response = parseInt(prompt('What is '+ op1 +' * '+ op2 + '?'));
    
    if(answer === response) {
        alert('Correct!');
    } else {
        alert('Wrong, the answer is '+ answer);
    }
    var practice = prompt('More Practice? (y/n)');
} while(practice !== 'n');
```

### You do _(20m)_

Implement fibonaci

```js
var end = 8;
var sum = 0;
var previous = 0;
var current = 1;

for(var i=2; i<=end; i++) {
    if(end===0 || end===1) {
        sum = end;
        break;
        // set sum to end value
    }
    sum = previous + current;
    previous = current;
    current = sum;
}

console.log(sum);
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
Write a loop to add all numbers in the blob array to a new array

```js
var blob = [1, 'two', 3, false, 42 ,'four', true];
```

### I do _(10m)_
Review solution
```js
var blob = [1, 'two', 3, false, 42 ,'four', true];
var numbers = [];
for(var i=0; i<blob.length; i++) {
  if(typeof blob[i] === "number") {
    numbers.push(blob[i]);
  }
}
```

> # Break

### You do _(30m)_
1. Write a `for` and `while` loop to find names that start with a vowel
2. Add these names to a new array called `vowelNames`
3. If then name is a vowel remove it from the names array.

```js
var names = ['adam', 'bobby', 'kyle', 'jaden', 'catherine', 'emily', 'joey', 'elijah', 'denis'];
```

### I do _(15m)_
Review solution

```js
var names = ['adam', 'bobby', 'kyle', 'jaden', 'catherine', 'emily', 'joey', 'elijah', 'denis'];
var vowelNames = [];
for(var i=0; i<names.length; i++) {
  if(names[i].substring(0,0) == 'a' || names[i].substring(0,0) == 'e' || names[i].substring(0,0) == 'i'
      || names[i].substring(0,0) == '0' || names[i].substring(0,0) == 'u') {
    vowelNames.push(names[i]);
    names.splice(i, 1);
  }
}
```

Ask them to refactor.

> # Break _(10m)_


