const ftoc = function(fah) {
  let fahResult = (fah - 32) * (5 / 9);
  fahResult = Math.round(fahResult * 10)/10 

  return fahResult;
};

const ctof = function(deg) {
  let degResult = (deg * (9/5)) + 32;
  degResult = Math.round(degResult * 10)/10;
  return degResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
