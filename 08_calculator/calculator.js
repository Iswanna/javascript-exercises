const add = function() {
  let addUp = arguments[0];
	for (let i=1; i<arguments.length; i++) {
    addUp += arguments[i];
  }
  return addUp;
};

const subtract = function() {
	let subtractUp = arguments[0];
	for (let i=1; i<arguments.length; i++) {
    subtractUp -= arguments[i];
  }
  return subtractUp;
};

const sum = function(arr) {
	let sumUp = 0;
	for (let i=0; i<arr.length; i++) {
    sumUp += arr[i];
  }
  return sumUp;
};

const multiply = function(arrt) {
  let multiplyUp = 1;
	for (let i=0; i<arrt.length; i++) {
    multiplyUp *= arrt[i];
  }
  return multiplyUp;
};

const power = function() {
	let powerUp = arguments[0];
	for (let i=1; i<arguments.length; i++) {
    powerUp **= arguments[i];
  }
  return powerUp;
};

const factorial = function(fact) {
	let factorialUp = 1;
	for (let i=fact; i > 0; i--) {
    factorialUp *= i;
  }
  return factorialUp;
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
