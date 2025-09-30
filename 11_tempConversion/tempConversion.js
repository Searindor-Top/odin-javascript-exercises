const convertToCelsius = function(fahrenNumber) {
  return Math.round(((fahrenNumber - 32) / 1.8)*10)/10; // round(num) * 10 / 10 => redondea a 1 decimal
};

const convertToFahrenheit = function(celsNumber) {
  return Math.round((celsNumber * 1.8 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
