# Scope and Debugging

##### LEARNING OBJECTIVES
- Review function scope
- Understand avoiding global scope (`window`)

---

### STEP 0: Debugging

- Introduce `debugger` and `break points`
- Introduce `scope` pane

> Let's talk about scope

### STEP 1: Block Scope

Yesterday, we learned about functions.  Functions seem a lot like blocks.  Can anybody tell me what a "block" is?

**REDEFINE:**

** block **: The code between the `{` and `}` symbols after an `if/else/while/do/for`

We also talked a bit about "scope".  I'm curious if variables inside a block act like variables inside a function.

```js
if (true) {
  var someVariable = "I'm in a block!";
  debugger;
}
debugger;
```

### STEP 2: Function Scope

```js
var outsideVariable = "I'm outside of a function!";
function() {
  var insideVariable = "I'm in a function!";
  debugger;
}
debugger;
```

**IDENTIFY HOW BLOCK AND FUNCTION SCOPE IS DIFFERENT**

### BREAK: Javascript - The Bad Parts

In a new file, type:

```js
var document = 10;
=> undefined
document
=> #document
```
> What the heck?  Why is this happening?
> Remember the `prompt` bug from earlier?

```
var prompt;
prompt("asdf")
```
** prompt is not a function **

---

> JavaScript *protects* some variables and won't let you step on their toes.

Another example:

```js
var window = 10;
=> undefined
window
=> Window {...}
```

### STEP 3: Global Scope

> There are literally hundreds of global variables that you either can not define globally without potentially destroying or breaking the entire page.

> These "global" variables exist on our "global" object.  In the browser, this is "window".

In a console, type: `window.` and scroll through the autocorrect.  Then go to: https://developer.mozilla.org/en-US/docs/Web/API/Window

> Well... Isn't that just great... Who knows what all you've all been breaking this whole time!

```js
var prompt;
```

### STEP 4: Closure

> Well, JavaScript kind of sucks.  This language was written in 10 days, 20 years ago (1995).  It wasn't well thought out.

> But wait!  Remember from earlier?  Functions have their own scope!  We can just wrap all of our code in a function, and not worry about breaking things!

```js
function myFanyProgram() {
  var prompt;
  alert("prompt() is broken here...");
}
myFancyProgram();
console.log(prompt("But it's not gone forever!"))
```

All we have to do, is remember to invoke our function and we can create "isolation".

**DEFINE "isolation"**

**isolation**:  Set apart from the rest, to act without external influences.

### STEP 5: Hoisting

Does anybody want to explain hoisting?

> Javascript moves `function`s and `var`s to the top.

This means we can write things like:

```js
myApplication();
function myApplication() {
  var prompt;
  alert("prompt() is broken here...")
}
```

> And it will still work!  Javascript is CRAZY SAUCE.

> This is actually really confusing and can cause
> unexpected things to happen.  Now, do you remember
> Bobby's solutions to the star-wars activity?

```js
var myApplication = function() {
  var prompt;
  alert("prompt() is broken here...")
}
myApplication();
```

- This is a VERY interesting way to define a function, but it works
- Functions can be defined just like variables

```js
myApplication();
var myApplication = function() {
  var prompt;
  alert("prompt() is broken here...")
}
```

- Does hosisting still work?  No!  Thank goodness. That's a lot less confusing.

> So if functions are variables, what do you think will happen if I do this?

```js
(function(){
  var prompt;
  alert("prompt() is broken here...")
})()
```

Welcome to the JavaScript "Closure", the nasty global variable hack that saves the language from it's own terrible design.

> EVERY DAMN JAVASCRIPT FILE YOU CREATE SHOULD START AND END WITH A CLOSURE!

```js
(function() {
  function sayHello() {
    console.log("Hello World");
  }
  sayHello();
})
debugger;
```

---

> Okay. I've been abused by JavaScript enough today...

### ACTIVITY: READ ABOUT CLOSURES AND DEBUGGING

- http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
- https://developer.chrome.com/devtools/docs/javascript-debugging
