# jQuery Events

##### AGENDA
- Demonstrate Browser Incompatibility
- jQuery Events
- Event Bubbling

##### LEARNING OBJECTIVES
- SWBAT bind events to DOM elements using jQuery
- SWBAT understand event bubbling
- SWBAT use event delegation

### STEP 1: History of Browsers [I]
- Discuss browser evolution through time
- Demonstrate incompatibility with IE7
- Explain why we use jQuery (attachEvent vs addEventListener)

### STEP 2: Introduce jQuery's click event [W]
- Create a button
- Attach alert event to button
- Review "append"
- Attach alert event to div
- Modify button event to change div color when clicked

### STEP 3: Introduce jQuery's hover event [W]
- Add a "hover" event to the div that changes the div's color
- Add second callback to reset div's color

### STEP 5: Review "[add/remove/toggle]Class" [W]
- Move the style to a CSS file
- Modify JS so it works again

### STEP 6: Delegation [W]
- Create a div
- Modify div click event to append a new div
- How can me make the new div's also respond to clicks?
- Introduce jQuery event delegation

```js
$(document).on('click', 'div', function() {
  alert('I AM A DIV');
}
```

### STEP 7: Duck Hunt [Y]
