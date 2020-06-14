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
