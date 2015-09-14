# Intro to Functions

##### LEARNING OBJECTIVES
- Define a function
- Understand how arguments become parameters
- Use return values in function definitions

##### Vocabulary
- **function** - the definition of a command, action or verb
- **parameter** - a variable part of the method signature, the place holder

---

## STEP 1: Why we create functions [I]

- Creating Abstraction
- Hiding Details
- Isolating Logical Pieces
- Documentation / Naming

## STEP 2: Defining Functions [I]

```
function speak() {
  alert("WOOF!")
}
```

How do we get data into our function?  Well, there are two different ways I want to discuss today.

```
function sayMyName(name) {
  alert("Your name is "+name);
}
```

**ACTIVITY:** See if you can write this function (5 minutes):

```
function findTheNeedle(haystack) {
  // .. Loop through haystack to find the string "needle" and alert "Found it!"
}
```

Test your function like this: `findTheNeedle(["straw", "hay", "dirt", "needle", "rock"])`

---

Does anybody have a solution they'd like to share?

---

Our functions can accept multiple arguments.  Let's modify our code so we can search for anything (not just "needles")

```
function findAnything(haystack, thingToFind) {
  // Modify your code above and so you can search for anything. Then see if you can find the "rock" in the haystack.
}
```

One of the BIGGEST things you need to remember is that EVERYTHING returns something:

```
function findAnything(haystack, thingToFind) {
  for(var i=0; i<haystack.length; i++) {
    if (haystack[i] == thing_to_find) {
      return i;
    }
  }
}
```

**ACTIVITY:** Let's write a function that returns an array where each element is
multiplied by 2.

```
function doubleDouble(arrayToDouble) {
  // Write a function that doubles each element in the array
}
```

**ACTIVITY:** Now, write *another* function that creates an array of 5 random
numbers

```
function toilAndTrouble() {
  // Write *another* function that creates an array of 5 random
  numbers
}
```

Now, let's call them together: `doubleDouble(toilAndTrouble())`

> You guys feel like programmers yet?
