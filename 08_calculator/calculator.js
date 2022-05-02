const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if(arr.length < 1) {
    return 0;
  } else {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
};

const multiply = function(arr) {
  if(arr.length < 1) {
    return 0;
  } else {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
      total *= arr[i];
    }
    return total;
  }
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num < 2) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
