# Array (1h 20m)

## INTRO
- **Relation to what they learned previously**

> Previously we learned about JavaScript variables. With a variable we could only store one thing at a time, which is limiting.

> If we have a bunch data that is related. For example, people's names. We could have a bunch of variables to store each name, but at some point that becomes impractical. We need a better way to group related data.

- **What are we going to learn**

> This brings us to what we are going to learn today, which is another type of JavaScript variable called Arrays. An Array is really cool because it allows you to store a collection of data in one place and they could be accessed through indices.
For example, let's say we wanted a reference to the Beatles.  This would look like:

## Objectives
- Use array functions to manipulate arrays

- Learn use cases for Arrays

## Warm up _(5m)_
We previously learned about variables from the Intro to JS lesson.

Let's review:

```js
var numberVariable = 42;
var stringVariable = 'Hello';
var booleanVariable = true;
```

An Arrays is a variable as well, but it has special capabilities. We'll see why shortly.

## I do _(5m)_
Sometimes it is useful to have a collection of things that are related. This is where Arrays come in. For example, let's say we wanted a reference to the Beatles. This would look like this:

```js
var beatles = ['John', 'Paul', 'George', 'Ringo'];
```

I mentioned earlier that Arrays are a special kind of variable. Here's why - instead of being able to contain numbers or strings, it can contain a collection of Numbers, Strings, and Booleans.

For example, we could have

```js
var names = ['Maria', 'Justin', 'Jason', 'Paul'];
var lotteryNumbers = [7, 2, 45, 15, 9, 66];
var booleans = [true, false, true, false];
var blob = [1, 'two', 3, false, 'four', true];
```

> Check for understanding

## I do _(5m)_
That's great that an array could store a collection of data items, but how do we get access to the items stored in there? It wouldn't be very useful if we don't have a way to access the data.

To access data in an Array we much use bracket notation `[]` with a valid index that is an integer from `0` to `1`.

Wait what?! Did I just say from `0` to `1`?
Yes I did. This is because computers start counting at `0`

```js
var beatles = ['John', 'Paul', 'George', 'Ringo'];
```

## I do _(5m)_
For this example we will get the following results:

```js
beatles[0] // returns 'John'

beatles[1] // returns 'Paul', and so on.
```

## We do _(10m)_
In the following array, how would I access 'Jeremy'? 'Diol'? 'Win'?

```js
var arcadeFire = ['Win', 'Regine', 'Richard', 'William',
                  'Tim', 'Jeremy', 'Sarah', 'Owen',
                  'Diol', 'Tiwill', 'Stuart', 'Matt'];
```

> ##Break _(10m)_

## I do _(20m)_
Let's go over somethings Array methods.

| Methods | Description  |
|---|---|
| `push` | add an element to the end of the array |
| `pop` | remove an element from the end of the array |
| `slice` | returns an array containing elements based specified index (does not modify array) |
| `splice` | adds/removes items to/from an array, and returns the removed item(s) (modifies array) |
| `shift` | removes the first item of an array, and returns that item (modifies array) |
| `unshift` | adds new items to the beginning of an array, and returns the new length (modifies array) |

### Start a Band

I want to start a band. I'm not sure who should be in it. I'd like to create it as I go along. How can I represent this band?

`var myBand = []`

I guess I want to be in this band. How can I add myself?

`myBand.push('Maria')`

More members...

`myBand = ['Maria', 'Jason', 'Andy', 'Justin']`

Q: What if I got a phone call from Dave Grohl and he wants to be in my band. The sad truth is that I am going to need to replace Jason. How might I accomplish this?

`myBand[1] = 'Dave Grohl'`

Q: Turns out Justin got a better opportunity, so he wants to leave the band. How can I remove him?

Since he's at the last index, we can use a built-in method called '.pop'

``myBand.pop()``

``.pop()`` removes the last element in an array

Q: A ridiculous question, but what if I want to remove Dave?

```js
myBand.splice(1,1)
```

The first argument is the index number to start at and the second argument is the number of elements we want to remove.

Q: Let's look back at our arcadeFire array. How would I delete Diol, Tiwill, Stuart

```js
arcadeFire.splice(8, 3)
```

Q: In the myBand array, How do I get rid of myself?

We have a method for that!

```js
myBand.shift()
```

I want to come back! Puts me back at the top again.

```js
myBand.unshift('Maria')
```

## You do _(20m)_
Given the following array:

```js
var nirvana = ['kurt cobain', 'aaron burckhard', 'krist novoselic']
```

1. Replace Aaron with Dale Crover
  
  `nirvana.splice(1, 1, 'dale crover');`

2. Replace Dale with Dave Foster
  
  `nirvana.splice(1, 1, 'dave foster');`

3. Replace Dave with Chad Channing
  
  `nirvana.splice(1, 1, 'chad channing');`

4. Add Jason Everman to the band
  
  `nirvana.push('jason everman);`

5. Remove Jason Everman

  `nirvana.pop();`

6. Replace Chad with Dan Peters
  
  `nirvana.splice(1, 1, 'dan peters');`

7. Replace Dan with Dave Grohl (finally!)
  
  `nirvana.splice(1, 1, 'dave grohl');`

8. Add John Duncan to the band
  
  `nirvana.push('john duncan');`

9. Remove John
  
  `nirvana.splice(3, 1);`

10. Add Lori Goldston to the band
  
  `nirvana.push('lori goldston');`

11. Add Pat Smear
  
  `nirvana.push('lori goldston');`

12. Remove Kurt Cobain
  
  `nirvana.shift();`
