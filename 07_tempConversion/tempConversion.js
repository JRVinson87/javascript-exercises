const ftoc = function(temp) {
  temp -= 32;
  temp *= (5 / 9);
  return Math.round(temp * 10) / 10;
};

const ctof = function(temp) {
  temp *= (9 / 5);
  temp += 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
