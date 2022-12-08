const leapYears = function(leapYr) {
    let result;
    if (!(leapYr % 4) && (leapYr % 100) || !(leapYr % 400)) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
  

// Do not edit below this line
module.exports = leapYears;
