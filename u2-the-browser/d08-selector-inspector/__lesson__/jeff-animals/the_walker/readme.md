## The Walker
In the `index.html` file lives a friendly captive .gif known only as *The Walker*. At present, The Walker only knows how to walk in place, but he has hired us to imbue him with more dynamic behavior. His specifications are below.

#### Directions

1. Make The Walker begin his journey at the right border(provided in main.js) and __walk left__ across the page.
2. Cool, once #1 is complete, have The Walker turn around once he reaches the left border, as if he's forgotten his keys. He should then __walk right__ until he's off the screen.
  - To flip the gif, I've provided you with a pre-written style declaration in [style.css](./stylesheets/style.css), so check it out.

#### Bonus
* When The Walker crosses the threshold of *either* border, he would like to turn around, as if happily captive in a cell with invisible walls.
### Thoughts

- Brush up on JS timers <a href="https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers"> here </a>
	- Specifically, look into `setInterval`. 

- HTML elements have a 'left' and 'right' css style attribute that you can manipulate...<a href="http://www.w3schools.com/cssref/pr_pos_right.asp">look into that</a>...

- In our main.js file, I've predfined two 'borders' that we want to use to 'control' our walking man.
