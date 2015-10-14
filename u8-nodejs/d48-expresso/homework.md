# Express yourself!
![WakaWakaFlaka bear](http://31.media.tumblr.com/e25f6d59a88d559a5fdfe169fec9f74b/tumblr_ntc7mgWwvK1r83d7lo2_540.gif)

## Learning Objectives
The objective of this homework is to reinforce your familiarity of setting up a Node application using `express.js`, and using curl from the terminal to get/post/edit data. "Why are we doing curl from the terminal?" you ask, well my dear friends this is server land and sometimes all you have at your disposal is the terminal.

## Completion
_**ALL**_

## Setup
In today's directory (`u8-nodejs/d48-expresso/`), create a `homework` directory, change directories so that you're in `homework`, and use `npm init` to create your `package.json`. Inside your `package.json`, change `"main":"index.js"` to `"main":"app.js"` and then create an `app.js` file in your current directory.

## Assignment
Using what you learned today do the following:
- Use these dependencies for your Node application: express & body-parser. _hint: if done correctly, these will show up in your package.json under... dependencies!_
- Set your application to be hosted on port `1337` and have it listening on the same port.
- Create get route for '/' that prints "Hey look, I'm expressing myself! Waka Waka!" in the terminal
- Create a variable called `muppetsDB` that contains the following information: 

```
{id: 1, name: "Kermit",
 description: "green, frog",
 age: "37"},
{id: 2, name: "Fozzy Bear", descritpion: "comedian, bear", age: "40"},
{id: 3, name: "Swedish Chef", description: "chef, VERY Swedish", age: "unknown"},
{id: 4, name: "Gonzo", description: "blue", age: "37"}
```
- Create a `get` route for `/muppets` that will print and display the different muppet's
- Create a post route `/muppets/new` to add a new muppet

- Create an edit route for `/muppets/:id`

- Create a delete route `/muppets/:id`

### CURL TIME! For the next part, create a file called muppets.md and copy all of the CLI commands you used for the rest of the assignment. Using Curl in the terminal, do the following:
- add at least 4 more muppets
- edit the Swedish Chef's age to 50
- delete you're least favorite muppet
