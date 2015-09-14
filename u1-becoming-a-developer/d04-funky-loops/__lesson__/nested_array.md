#Nested array

## Opening
 - What are they going to learn?
  - Today we will be going over Nested Arrays, which is exactly like how it sounds. Think of it like the movie **Inception**  - dream within a dream. We will learn how to create an array within an array or a nested arrays. Then look into how we could operate on them. This will be taught as if it was the first time.
 - Why is is it important? **(Ask students what they think)**
  - Can be used to organize sets of data
  - Can be used to represent hiearchy
 - How it relates to previous work?
  - We learned about arrays in the past
    - what can arrays store (numbers, strings, objects,...arrays)?
    - what is a variable?
  - How will learning occur?
   - To learn this material we'll use what we know about arrays (creating, traversal, accessing) then do an **Inception** on it.


### I do _(10m)_
To declare a nested array simply do the following.
```javascript
var meals = [
    ['milk', 'cereal'],
    ['meat', 'sauce', 'bread'],
    ['pasta', 'sauce', 'meat']
];
```

Any ideas how we could loop through every element in every subarray?

```js
for(var i = 0; i < meals.length; i++) {
  for(var j = 0; j < meals[i].length; j++) {
    console.log(meals[i][j]);
  }
}
```

### We do _(10m)_
Let's add these instructors to the Archer team array.
```javascript
var matt = ["Matt H.", 65, "regal"]
var shorty = ["Matt S.", 17, "shawwty"]
var remina = ["Remina", 9001,"tressed"]
var alex = ["Alex", 186, "peels"]
```


### You do _(15m)_
Print all elements in the `archer` subarrays
```javascript
archer = [
	["Matt H.", 65, "regal"],
	["Matt S.", 17, "shawwty"],
	["Remina", 9001,"tressed"],
	["Alex", 186, "peels"]
]
```

### Review _(5m)_

### You do _(30m)_
Now let's add another level. Loop through and print the meals and the ingredients in the following format

```js
## omlet ##
eggs, garlic, onions
-
```

```javascript
var meals = [
  ['omlet', ['eggs', 'garlic', 'onions']],
  ['fried rice', ['rice', 'eggs', 'fish sauce', 'garlic', 'onion', 'pork', 'white pepper']],
  ['chicken pasta', ['tomatoes', 'pasta', 'olives', 'basil', 'garlic', 'onion', 'chicken']],
];
```

### Review _(10m)_
Review

### You do _(30m)_
Now let's add another level. Loop through and print the cost of each ingredients and the total for all the ingredients

```js
## omlet ##
- eggs: $5.00
- garlic: $2.00
- onions: $2.50
Total: $9.50
```

```javascript
var meals = [
  ['omlet', [['eggs', 5], ['garlic', 2], ['onions', 2.50]]],
  ['fried rice', [['rice', 3], ['eggs', 5], ['fish sauce', 5], ['garlic', 2], ['onion', 2.50], ['pork', 8.25], ['white pepper', 2.25]]],
];
```

### Review _(10m)_



### BONUS
Given the following array of arrays:

```javascript
var pokemans = [
	["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]],
	["Snorlax",["HP",[160,["Attack",[110,["Defense",[65,["Speed",[30]]]]]]]]],
	["Mew",["HP",[100,["Attack",[100,["Defense",[100,["Speed",[100]]]]]]]]]
]
```
The console should log for each pokemon:

```
Squirtle || HP: 44 || Attack: 48 || Defense: 65 || Speed: 43
```
