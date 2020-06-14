// Refactor this function using rest operator and an arrow fcn:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactored
function filterOutOdds2(...nums) {
  return nums.filter((num) => num % 2 === 0);
}
// or

const filterOutOdds3 = (...nums) => nums.filter((num) => num % 2 === 0);

// console.log("evens2: ", filterOutOdds2(56, 4, 5, 6, 7, 103, 167, 4, 22));
// console.log("evens3: ", filterOutOdds3(56, 4, 5, 6, 7, 103, 167, 4, 22));

// **********************************************************************
// findMin
// Write a function called findMin that accepts a variable number of arguments
//   and returns the smallest argument.
// Make sure to do this using the rest and spread operators.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => {
  const arr = [...nums];
  return arr.reduce((min, cur) => (min < cur ? min : cur));
};

// or even

const findMin2 = (...nums) => Math.min(...nums);

// **********************************************************************
// mergeObjects
// Write a function called mergeObjects that accepts two objects
//   and returns a new object which contains all the keys and values
//   of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// **********************************************************************
// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and
// a variable number of arguments. The function should return a new array
// with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => {
  const doubleArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubleArgs];
};

// or even

const doubleAndReturnArgs2 = (arr, ...args) => [
  ...arr,
  ...args.map((arg) => arg * 2),
];

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]
// console.log(doubleAndReturnArgs2([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs2([2], 10, 4)); // [2, 20, 8]

// **********************************************************************
// Slice and Dice!
// For this section, write the following functions using rest, spread
// and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object
// and not modifying the existing inputs.

// *************
// removeRandom
// *************
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  // generate a random index number
  const idx = Math.floor(Math.random() * items.length);
  console.log("index: ", idx);

  // slice or splice the array
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
// console.log(removeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// *************
// extend
// *************
/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {}

// *************
// addKeyVal
// *************
/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {}

// *************
// removeKey
// *************
/** Return a new object with a key removed. */

function removeKey(obj, key) {}

// *************
// combine
// *************
/** Combine two objects and return a new object. */

function combine(obj1, obj2) {}

// *************
// update
// *************
/** Return a new object with a modified key and value. */

function update(obj, key, val) {}
