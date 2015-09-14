
// 1. Programmatically recreate the sampleArrayOfArrays.

var result = [];
var startingInteger = 1;

for (var j = 0; j < 3; j++) {
    result[j] = [];
    var currentInnerArray = result[j];
    console.log('Result:', result);

    for (var k = 0; k < 3; k++) {
      currentInnerArray[k] = startingInteger + (3 * j) + k;
      console.log(' Inside Loop Result:', result);

    }
}

console.log('RESULT:', result);

// alternate

var result = [];
var startingInteger = 1;

for (var j = 0; j < 3; j++) {
  result.push([]);


  for (var k = 0; k < 3; k++) {
    result[j].push(3 * j + k + 1);
  }
}

console.log(result);

// alternate 2

var results = [];
var range = [];

for (var i = 1; i < (3 * 3) + 1; i++) {
  range.push(i);
}

for (var i = 0; i < 3; i++) {
  results.push(range.slice(i * 3, i * 3 + 3))
}

console.log(results);

// 2. Write a function that creates a square array of arrays given any length.
// ```javascript
// var createSquareGrid = function createSquareGrid(length) {
//   // Fill me in, please.
// };
// ```
// Example: ```createSquareGrid(3)``` should return
// ```javascript
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
// ```

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

//  3. Write a function called **leftToRightDiagonal(2dArray)** that given a square 2D array, i.e. an array of arrays, returns a new array containing elements in the top left to bottom right diagonal in order.
// ```leftToRightDiagonal(sampleArrayOfArrays)``` should return
// ```javascript
// [1, 5, 9]
// ```

var leftToRightDiagonal = function leftToRightDiagonal(grid) {
  var results = [];

  for (var j = 0; j < grid.length; j++) {
    for (var k = 0; k < grid[j].length; k++) {
      if (j === k) {
        results.push(grid[j][k]);
      }
    }
  }

  return results;
};

// 4. Write a function called **RightToLeftDiagonal(2dArray)** that given a square 2D array, i.e. an array of arrays, returns a new array containing elements in the bottom left to top right diagonal in order.

// 5. Write a function **lengths(arrayOfStrings)** that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// ```javascript
// var words = ["hello", "what", "is", "up", "dude"];
// lengths(words); // should return [5, 4, 2, 2, 4]
// ```
// 5. Write a new function called **isPrime(number)** that takes in a number and returns true if it is a prime number and false if it is not. (1 by definition is not a prime number.) Model this function after the Sieve of Eratosthenes using an array.

// 6. Write the following functions using loops:

// * consoleLogEach(array)
//     * is a function that logs each element of the given array
//     ```javascript
//     // Starter Code Example:
//     var consoleLogEach = function consoleLogEach(array) {
//       // Fill me in, please.
//     };
//     ```
// * max(array)
//     * is a function that returns the largest element in the given array
// * min(array)
//     * is a function that returns the smallest element in the given array
// * indexOf(array, element)
//     * is a function that returns the first index of a given element in the given array. Return -1 if the element is not in the array.
// * lastIndexOf(array, element)
//     * is a function that returns the last index of a given element in the given array. Return -1 if the element is not in the array.
// * contains(array, element) a.k.a. includes
//     * is a function that returns true if the element is in the array and false if it is not.
// * flatten(array) **Silver Challenge**
//     * is a function that returns an array that has one level of nesting removed
//     ```flatten([1, 2, [3, 4, 5, 6], 7, 8, 9])``` should return
//     ```[1, 2, 3, 4, 5, 6, 7, 8, 9]```
//     Hint: Use the ```Array.isArray()``` method
