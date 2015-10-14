## Node.JS OMDB Activity

For this activity, we are going to use the `request` library to communicate with the OMDB API.

Before you begin, read up on the basic functionality here: [https://www.npmjs.com/package/request](https://www.npmjs.com/package/request).

#### STEP 1: Installing Packages

- Create a new directory in your `students` folder named `omdbjs`.
- Install the packages `request` package

#### STEP 2: JavaScript

- Create a JavaScript file in this directory:  `omdbjs.js`
- Use `request` to make a HTTP request to OMDB and display the response as JSON on the screen

#### STEP 3: Format the Output

- Use the `JSON.parse` function to parse the response body into an object
- Display the movie information:

```sh
Frozen
Released: 2013
Directed by: Chris Buck, Jennifer Lee
When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.
```

- **BONUS:** Use chalk to colorize the output!

#### STEP 4: Create a Function

Now things are gonna get a little harder.  Let's convert this into a function.  Because JavaScript
is "asynchronous" we cannot simply `return` the value. Instead, we **must** use a "callback" function.

Remember how callback functions work.  You pass a `function(){}` as an argument to another function.

```
var movieInfo = function(title, callback) {
  // ...
  callback(parsedMovieInfo);
}
```

```
movieInfo('Frozen', function(movie) {
  console.log("Can you believe that "+movie["Title"]+" "+movie["Awards"]);
});
```

That's all you get to start with, now it's up to you to fill in the rest: `// ...`
