## Exercises

0. Car Specs

  * Part A
    Construct an Key-Value Object with the following attributes and you choose the values

    * Brand
    * Model
    * Price
    * Style

  * Part B
    Use `for in` iterator to nicely print the information for the your car as such
    ```
    ===== My Car =====
    Brand: Tesla
    Model: Model S
    Price: $80,000
    Style: Sport
    ```

    ```js
    var myCar = {
      brand: 'Tesla',
      model: 'Model S',
      price: '$80,000',
      style: 'Sport'
    };

    // For In Loop
    for(spec in myCar) {
      console.log(spec+":", myCar[spec]);
    }
    ```


1. Evens and Odds
Write a loop that will iterate over the numbers from 1 to 8, check if the number is even or odd, then print, for example, "2 is even".

```js
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.forEach(function(num) {
  if(num%2 === 0) {
    console.log(num, 'is even');
  } else {
    console.log(num, 'is odd');
  }
});
```

2. Clerical Error
You have been tasked with keeping track of a bunch of account balances. Due to a clerical error, the balances were all 14 more than they should have been?
Write a program to fix the error.
```js
var sampleBalances  = [100, 25, 3000, 45, 36];

var updatedBalances = sampleBalances.map(function(balance) {
  return (balance - 14);
});
```

3. Range
Write a function **range(firstInt, lastInt)** that creates a range in the form of an array, e.g. ```[1, 2, 3, 4, 5, 6]```
```range(1, 9)``` should return ```[1, 2, 3, 4, 5, 6, 7, 8, 9]```
```range(0, 3)``` should return ```[0, 1, 2, 3]```

```js
var range = function(firstInt, lastInt) {
  var numberRange = [];
  for(var currentInt=firstInt; currentInt<=lastInt; currentInt++){
    numberRange.push(currentInt);
  }
  return numberRange;
}
```

4. Lengths
Write a function **lengths(arrayOfStrings)** that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
```javascript
var words = ["hello", "what", "is", "up", "dude"];
lengths(words); // should return [5, 4, 2, 2, 4]
```

```js
// SOLUTION
var lengths(someArray) {
  var lengthsArray = someArray.map(function(element) {
    return element.length;
  });

  return lengthsArray;
}
```

5. Use map to add append 'the great' to each name in the array

  ```js
  // Array Manipulation
  var names = ['Lichard', 'Kathew', 'Omily'];

  // Output
  ['Lichard the great', 'Kathew the great', 'Omily the great']
  ```

  ```js
  // SOLUTION
  var theGreats = names.map(function(name) {
    return name + 'the great';
  });
  ```

6. Filter through the array for saucy meals using `filter`
  ```js
  var meals = [
      ['milk', 'cereal'],
      ['meat', 'sauce', 'bread'],
      ['pasta', 'sauce', 'meat']
  ];

  // Ouput
  [
    ['meat', 'sauce', 'bread'],
    ['pasta', 'sauce', 'meat']
  ];
  ```

  ```js
  // SOLUTION
  var saucyMeal = meals.filter(function(ingredients) {
    for(var i=0; i<ingredients.length; i++) {
      if(ingredients[i] === 'sauce') {
        return true;
      }
    }
    return false;
  });
  ```

7. Return a new array containing the square root value
  ```js
  var numbers = [1, 4, 9];

  // Output
  [1, 2, 3]
  ```

  ```js
  // SOLUTION
  var squredNumbers = numbers.map(function(num) {
    return Math.sqrt(num);
  });
  ```

8. createSquareGrid function
Write a function that creates a square array of arrays given any length.
```javascript
var createSquareGrid = function createSquareGrid(length) {
  // Fill me in, please.
};
```
Example: ```createSquareGrid(3)``` should return
```javascript
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```

```js
// SOLUTION
var createSquareGrid = function createSquareGrid(length) {
  var result = [];
  var startingInteger = 1;
  for (var j = 0; j < length; j++) {
    result.push([]);

    for (var k = 0; k < length; k++) {
      result[j].push(startingInteger + (length * j) + k);
    }
  }
  return result;
};
```

9. consoleLogEach(array) is a function that logs each element of the given array
    ```javascript
    // Starter Code Example:
    var consoleLogEach = function consoleLogEach(array) {
      array.forEach(function(element) {
        console.log(element);
      });
    };
    ```
10. count(array, element) is a function that returns the number of times the given element is contained in the array.

```js
var count = function(array, element) {
  var matches = array.filter(function(data){
      if(data === element) {
        return true;
      }
      return false;
  });

  return matches.length;
};
```

11. pluck(arrayOfObjects, property) is a function that takes in an array of similar objects and a property name and returns a new array contain only the value of the given property for each object in the original array.

    * **HINT:** to delete a key-value pair from an object you use the `delete OBJECT.KEY`

    Given:
    ```javascript
    var pumpkinsRecords = [
      {title: "Gish", year: 1991, albumsSold: 534000},
      {title: "Siamese Dream", year: 1993, albumsSold: 1000037},
      {title: "Mellon Collie and the Infinite Sadness", year: 1995, albumsSold: 1000500},
      {title: "Adore", year: 1998, albumsSold: 300100},
      {title: "Machina", year: 2000, albumsSold: 200000},
      {title: "Machina II", year: 2000, albumsSold: 50000},
      {title: "Zietgiest", year: 2007, albumsSold: 250}
    ];
    ```
    ```pluck(pumplinsRecords, 'title')``` should return
    ```["Gish", Siamese Dream", "Mellon Collie and the Infinite Sadness", "Adore", "Machina", "Machina II", "Zietgiest"]```


    ```js
    var pluck = function(array, attribute) {
      array.forEach(function(object) {
        delete object[attribute];
      });
    };
    ```
12. max(array) is a function that returns the largest element in the given array
    ```var minMaxTestArray1 = [9, 10, 4, 3, 17, 13, 0, 2];```
    ```var minMaxTestArray2 = ['a', 'z', 'Z', 'c', 'e', 'E', 'f'];```

```js
var max = function(array) {
  var currentMax = array[0];
  for(var i=1; i<array.length; i++) {
    if(currentMax < array[i]) {
      currentMax = array[i];
    }
  }
  return currentMax;
};
```

13. min(array) is a function that returns the smallest element in the given array
    ```var minMaxTestArray1 = [9, 10, 4, 3, 17, 13, 0, 2];```
    ```var minMaxTestArray2 = ['a', 'z', 'Z', 'c', 'e', 'E', 'f'];```

```js
var max = function(array) {
  var currentMax = array[0];
  for(var i=1; i<array.length; i++) {
    if(currentMax > array[i]) {
      currentMax = array[i];
    }
  }
  return currentMax;
};
```

14. indexOf(array, element)
    * is a function that returns the first index of a given element in the given array. Return -1 if the element is not in the array.

```js
var indexOf = function(array, element) {
  array.forEach(function(data, index) {
    if(element === data) {
      return index;
    }
  });
  return -1;
};
```

15. lastIndexOf(array, element) is a function that returns the last index of a given element in the given array. Return -1 if the element is not in the array.

```js
var lastIndexOf = function(array, element) {
  for(var i=array.length; i>-1; i++) {
    if(array[i] === element) {
      return i;
    }
  }
  return -1;
};
```

16. contains(array, element) a.k.a. includes
    * is a function that returns true if the element is in the array and false if it is not.

    ```js
    var contains = function(array, element) {
      array.forEach(function(elem) {
        if(element === elem) {
          return true;
        }
      });
      return false;
    };
    ```


17. flatten(array) is a function that returns an array that has one level of nesting removed
    ```flatten([1, 2, [3, 4, 5, 6], 7, 8, 9])``` should return
    ```[1, 2, 3, 4, 5, 6, 7, 8, 9]```

    Hint: Use the ```Array.isArray()``` method

    ```js
    var flatten = function(array) {
      array.forEach(function(element, parentCurrentIndex, parentArray) {
        if(Array.isArray(element)) {
          var subArray = element;
          var indexOfSubArray = parentCurrentIndex;
          var movedIndex;
          subArray.forEach(function(subElem, subIndex, subArray) {

            movedIndex = parentCurrentIndex + subIndex;
            parentArray.splice(movedIndex, 0, subElem);

            if(subIndex == subArray.length-1) {
                parentArray.splice(movedIndex+1, 1);
            }
          });
        }
      });
      return array;
    };
    ```
