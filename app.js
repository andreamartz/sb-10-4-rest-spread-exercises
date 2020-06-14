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
