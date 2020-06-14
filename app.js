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
