const getTheTitles = function(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length-1) {
        result += arr[i].title + " ";
      } else if (i === arr.length-1) {
        result += arr[i].title;
      }
       
    }
    result = result.split(" ");
    return result;
  };

// Do not edit below this line
module.exports = getTheTitles;
