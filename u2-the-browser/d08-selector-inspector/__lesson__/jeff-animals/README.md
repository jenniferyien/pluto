## Learning Objectives

* Explain the interaction between JavaScript and the rendered document
* Use jQuery to CRUD DOM nodes
* Read documentation to find applicable methods
* Identify a particular node's position in the graph relative to  other nodes

## Lesson

### Intro (5 mins)

* Used to interactive applications. When I click this thing, something happens. When I hover, something else happens. 
* Show example
* Today, we will focus on the changing of the rendered document's contents.

### I DO (15 mins)

* Open up example.html
* Discuss the tree like structure
* Install jQuery - discuss library, loading, etc.
* Change stuff
  * Change the text of one
  * Make staten island blue
  * Add a class
  * do it both in the console and as a JS file that is attached
* Add Brooklyn
* Review - tag, attributes, text content - going to use these properties to 'target' DOM elements

### WE DO - Pair (30 mins)

jQuery Docs

#### NYC

* Using jQuery, add a new `ul` with your favorite landmarks.

#### Hack Google
- go to google.com
- change the label on the search button to whatever you want

#### Animals

- remove the sheep
- move all of the mammals to the end of the list
- remove the class `.fish` from all of the applicable `li`s
- remove plants with the word 'tree' in them

#### Smiley Time

Write a function, `buildSmileys` that takes a number and font size as arguments. It should return divs of smiley faces - *_*. Append them to the DOM.

```javascript
function buildSmileys(number, fontSize) {
  // ... your code here
}

var smileys = buildSmileys(10, 20);
$('body').append(smileys);
```

### I DO - setTimeout, setInterval (15 mins)

* Demo simple example. 
* Talk about callbacks.
* Blinking box (codealong)

### WE DO - Pair (15 mins)

#### 99 Bottles of Juice

Create a page that prints the lyrics to 99 bottles of juice on the wall verse by verse, printing a new verse every 2 seconds.

### YOU DO - Assessment (15 mins)

1. How does markup get turned into something visual?
* What would happen if I typed `$('p.muffins').css('color', 'blue')`
* Describe the following code in your own words:

  ```javascript
  var heading = $("<h1>Our Bakery Homepage</h1>");
  $('body').append(heading);
  ```
* Describe the 'familial relations' of the `a` tag below:

  ```html
  <div class="sidebar">
    <img src='/buy-now.png'>
    <p>
      This all-in-one muffin making kit can be yours for only $99.
      <a href='/more-details'>Click here for more details</a>
    </p>
  </div>
  ```

#### Hack NyTimes
- Change the NyTimes headline to whatever you want, such as "Sales of pajama pants skyrocket; economists confused, yet comfy"
- Change the top headline picture to whatever you want, such as a bulldog puppy

#### The Walker

See attached.