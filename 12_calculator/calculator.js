const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function( inputSum ) {
  let initialValue = 0;
  return inputSum.reduce((accum, element) => accum + element, initialValue);
};

const multiply = function( inputMult ) {
  let initialValue = 1;
  return inputMult.reduce((accum, element) => accum * element, initialValue);
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let accum = 1
	for(i = 1; i <= a; i++){
    accum = accum * i
  }
  return accum;
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
