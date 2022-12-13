const findTheOldest = function(arr) {
  let namej = "";
  let difference = 0;
  let sub;
  let oldestBirth = 0;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k].yearOfBirth > oldestBirth) {
      oldestBirth = arr[k].yearOfBirth;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].yearOfBirth !== oldestBirth  && arr[i].yearOfDeath === undefined) {
      namej = arr[i];
      break;
    } else {
      for (let j = 0; j < arr.length; j++) {
        sub = arr[j].yearOfDeath - arr[j].yearOfBirth;
        if(sub > difference) {
          difference = sub;
          namej = arr[j];
        }
      }
    }
  }
  return namej;
};

// Do not edit below this line
module.exports = findTheOldest;
