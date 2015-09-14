## JavaScript
(continues from [abstractions](abstractions.md))

##### LEARNING OBJECTIVES
- Create and link HTML and JavaScript files
- Declare variables
- Use the assignment operator
- Comment their code
- Explore String Methods

##### VOCABULARY (introduce as necessary)
- **string** - A sequence of letters / text
- **function** - a block of code designed to perform a particular task
- **argument** - Data passed in when a function is invoked

### STEP 1: JavaScript (10 min)

- What is JavaScript?
- Why do we need to know Javascript?
- Javascript is the language of the web.

Let's start programming!

Let's create a new folder `hellojs` and a file `pluto.js`. Inside of it, let's type:

```js
alert('Hello World!');
```

- Explain Javascript syntax (function, string, argument)
- How can we determine what this code does? [Google it! / MDN]
- Pull up the documentation for `alert` on MDN

### STEP 2: Linking Javascript (5 min)

```html
<html>
  <head>
    <title>Hello from Pluto</title>
    <script src="/pluto.js"></script>
  </head>
  <body>
   ...
   </body>
</html>
```

- Start the `server`
- **PROMPT:**  Can anybody explain what just happened?  Why did the HTML file cause my javascript file to run?

- We can use `var` to declare a variable.  You should always define variables with `var`!

```js
var message = 'Hello World';
alert(message);
```

### STEP 3: Prompting for Input (10 min)

- By introducing input, we have introduced some uncertainty into the program.

```js
var message = "Hello "
var name = prompt("What is your name?")
alert(message+name)
```

We could write this same code in another way.  There is often no 'right answer' when it comes to code.  You are likely to see all sorts of code, so it's important that you understand what things *do* and *reason* about it.

```js
var message, name;
message = "Hello ";
name = prompt("What is your name?");
alert(message+name);
```

**PROMPT:** Can you think of another way we could write this code and get the exact same behavior?

- What happens if I create a variable named `prompt`?

---
** BREAK (10 minutes)**

### STEP 4: Variables (10 min)

- JavaScript variables have "types", and "types" have methods. You call methods using a `.` and the method name.
- Let's experiment in the JavaScript console.

## String Methods
- `"Hello".toUpperCase()`
- `"Hello".toLowerCase()`

> Using these functions, modify your code so that it tells the person to take out the trash IN UPPERCASE. (2 minutes)

Methods take arguments.

- `"Hello".indexOf('l')`
- `"Charlie".replace('Ch','M')`
- `"My favorite color today is RED".replace('RED','BLUE')`
- `"charlie".slice(1)`
- `"charlie".slice(0,1)`
- `"charlie".slice(1,2)`

Using these functions, modify your code so that it uppercases only the first letter of the person's name. (2 minutes)

#### Converting Strings to Integers

- `parseInt("10", 10)`
- `parseInt("101011101", 2)`
- `parseInt("Jaden", 10)`

Write a program that accepts a binary number and converts it into decimal (2 minutes)

### STEP 5: Math (15 min)

Computers are basically fancy calculators. Let's go back to the console, and do some Math:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulus (`%`)
- `Math.floor(10)`
- `Math.ceil(10)`
- `Math.round(10)`
- `Math.random()`

### STEP 6: Finish `hellojs` (20 minutes)

You're program should:
- Alert "Hello World"
- Prompt for a Name
- Alert "TAKE OUT THE TRASH, [NAME]" where name is all uppercase.
- Prompt "How many bags of trash is there?"
- Alert "It should take you **[MINUTES]** minutes", where **[MINUTES]** is the number of bags multiplied by 5
- Alert a random number between 1 and 10

### STEP 7: Output

- alert('')
- console.log('')
- document.write('')

### STEP 8: Wrap Up

- JavaScript is the "language of the web"
- "Strings" are sequences of text
- "Integers" are numeric values
- Functions take arguments and return a value
- Methods are functions called on variables

---

#### INTRODUCE HOMEWORK
