"use strict";

function largestNumber(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return null;
}
const biggest = largestNumber(5, 8);
console.log(biggest);

// the code below achieves the same using the 'spread operator', passing with a tuple type
const nums = [5, 8];
const biggest2 = largestNumber(...nums);
console.log(biggest2);

// example using a rest parameter
function add() {
  let total = 0;
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}
const addNums = add(1, 2, 3, 4);
console.log(addNums);

// example with default parameter
function divide(dividend) {
  let divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const quotient = dividend / divisor;
  return quotient;
}
const quotient = divide(42, 2);
console.log("calling the divide function with '2' paramters: ".concat(quotient));
const quotient2 = divide(42);
console.log("calling divide function with '1' parameter: ".concat(quotient2));

// function expression (1)
let remainder;
remainder = function (dividend, divisor) {
  const quotient = Math.floor(dividend / divisor);
  return dividend - quotient;
};
const rem = remainder(8, 5);
console.log("remainder: ".concat(rem));

// function expression (2) - Fat Arrow Function (Preferred)
const remainder2 = (dividend, divisor) => {
  const quotient = Math.floor(dividend / divisor);
  return dividend - quotient;
};
console.log(remainder2(13, 4));