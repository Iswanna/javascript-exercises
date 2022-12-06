const sumAll = function(firstNum, secondNum) {
    let cumSum = 0;
    let result;
   let figOne = firstNum;
   let figTwo = secondNum;
   
   if (firstNum === secondNum) {
     figOne = firstNum;
     figTwo = secondNum;
   } else if (firstNum < secondNum) {
     figOne = firstNum;
     figTwo = secondNum;
   } else if (firstNum > secondNum) {
     figOne = secondNum;
     figTwo = firstNum;
   } 
  
   for (let i = figOne; i <= figTwo; i++) {
     cumSum += i ;
   
 
   }
 
 
   if (typeof figOne !== "number" || typeof figTwo !== "number") {
     cumSum = "ERROR";
   } else if (firstNum < 1 || secondNum < 1) {
     cumSum = "ERROR";
   } 
   
   return cumSum;
 };

// Do not edit below this line
module.exports = sumAll;
