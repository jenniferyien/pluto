# Events

## Learning Objectives
- remember to add event object to each callback function
- use event delegation and its benefits
- understanding the bubble up flow from event delegation

## Review
When we were previously learned about event handlers there was an event parameter that was passed
into the callback function. Does anyone know what is that event parameter?

Everything in JavaScript is an object, so an `event` is also an object.

Some useful attribute and method for event are
  * event.preventDefault()
  * event.which
  * event.currentTarget
  * event.stopPropogation()

## Intro Event delegation _(5m)_
Show the Just Do It app and walk through the code. Previously we added a click event listener to every `<li>`. That's tedious and there should be a better way.

Well there's this thing called Event Delegation which means that an event could be binded to the parent and all the children will be delegated that event listener.

## Revisit Do It List _(15m)_
That's kind of magical, but how does that work. There is a concept called bubbling in JavaScript. For our scenario, a click event listener is attached to the `<ul>`. When we click on an `<li>` it bubbles up this event until it reaches something that can handle a click. In our case it stops bubbling at the `<ul>` because it has an event listener for a click event and the callback function executes.

## Intro to currentTarget _(5m)_
However now we don't know which `<li>` is selected, but we did learn about `event.currentTarget` that will give us the element's selector. We could wrap that in a `$()` for selecting the specific element that was clicked. Great everything works now.

## Mention THIS _(5m)_
Talk about how the function also has access to `this`, but depending on where it is on the bubbling chain
this will reference it's current scope.

## Intro to Bubbling _(5m)_
```js
$(function() {
  $('body').click(function(event) {
    alert('Bubbled up to <body>');
  });

  $('div#level1').click(function(event) {
    alert('Bubbled on level1')
  });

  $('p#level2').click(function(event) {
    alert('Bubbled on level2')
  });

  $('span#level3').click(function(event) {
    highlight(event.currentTarget);
  });

  var highlight = function(element) {
    $(element).css('background-color', 'yellow');
    alert($(element).attr('id'));
    $(element).css('background-color', '');
  }
});
```

## Bullseye Excercise _(30m)_
See README

## Review Bullseye _(10m)_
