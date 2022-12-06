const removeFromArray = function() {
    let arg1 = arguments;
  
 
  let arr = arguments[0];
  let resultg = "";
  
  
  for (let i = 1; i < arg1.length; i++){
    for (let j = 0; j < arr.length; j++) {
      if (arg1[i] === arr[j]) {
        resultg = arr.splice(j, 1);
        j--
      }
  }
    }
  
  return(arr);

};

// Do not edit below this line
module.exports = removeFromArray;
