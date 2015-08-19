# Dino Digging!

  Someone has stolen our specimens and damaged our data! It's your job to help the team make sense of the data that's left, and help us reorganize.

![Chris Pratt Being King of the Raptors](http://i.imgur.com/jSKkQhS.gif)

## Learning Objectives

  - Getting new data and learning how to format in a programmer friendly way.

  - Iterating over objects and arrays to find data

## Setup

  You'll be working in your own code snippets for this assignment, but when you're done save your work in today's `student` directory in a file called `dino-digging.js`

### Part 1 - Fixing the Data (20 minutes)

Phew! We still have the financial data we need to manage dig site expenses. Unfortunately it's not very user friendly. Copy the code below into a code snippet, and check out this JavaScript [style guide](https://github.com/airbnb/javascript#objects) to format the **objects** and **arrays** below so that you and your dev team can better understand the data. The easier it is to read visually the easier it is to work with.

```javascript
var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};
```

  - Use a `for` loop to output the specimens in each dig site

  - Calculate the average depth of all dig sites.

  - ***Bonus*** Push each variable above into a new array called `hammondsMines` and create a function called that will print (use `console.log` for this) out ALL of the specimen of EVERY dig site in this fashion:

  ```
  location1:
  dino1
  dino2

  location2:
  dino1
  dino2
  dino3

  ...
  ```

### Part 2 - Get Assets in Order (20 minutes)

If you haven't already, push each variable above into a new array called `hammondsMines`

Now that we have some usable data, continue working in your code snippet and help us crunch some numbers!

 - Use `for` loops to iterate through `hammondsMines` and perform each of the following( separately ).

    - Output the location names of each dig site to the console.

    - Calculate the total annual budget to run all dig sites.

### Part 3 - Start Optimizing

  Due to dinosaur related lawsuits, we're over budget!

  - Use a `for` loop to calculate the cumulative depth dug across all dig sites.

    -Calculate the cost/meter of digging.

  - Use a `for` loop to find the dig site that costs the most to run, so we can send the message along to close it down.
