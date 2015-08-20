# jQuery Reference Guide

| Function | Arguments |
|---|---|
| `setTimeout(…)`	| Callback and Milliseconds |
| `setInterval(…)` | Callback and Milliseconds |
| `$("…").addClass("…")` | Class to add to element |
| `$("…").removeClass("…")` | Class to remove from element |
| `$("…").toggleClass("…")` | Class to toggle on element |
| `$("…").append($("…"))` | Element to add to element |

##### REFERENCES
- https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers
- https://api.jquery.com/addclass/
- https://api.jquery.com/removeclass/
- http://api.jquery.com/toggleclass/
- http://api.jquery.com/append/

##### FUNCTIONS

**"Normal" function:**
```js
function myFunction() {
  console.log("myFunction was called");
  return true;
}
```

**Alternative Syntax  (same as above):**
```js
var myFunction = function() {
  console.log("myFunction was called");
  return true;
}
```

**Anonymous Functions:**
```js
(function() {
  console.log("anonymous was called");
  return true;
})();
```

**Callback Functions:**
```js
[1,2,3,4,5,6,7].forEach(function(e) {
  console.log("COUNT: "+e+" flowers")
})
```

Functions are the likely the single most difficult concept to grasp, but they are VITAL to JavaScript.  **Master Them!** - It's smooth sailing from here on out!
