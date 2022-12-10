const fibonacci = function(num) {
    num = +num;
    let nextNum;
    if (num === 1) {
      nextNum = 1;
    } else if (num > 1) {
        let n1 = 0;
        let n2 = 1;
        
        for (let i=2; i<=num; i++) {
          nextNum = n1 + n2;
          n1 = n2;
          n2 = nextNum;
        }
      } else {
        nextNum = "OOPS"
      }
      
    return nextNum;
  };
// Do not edit below this line
module.exports = fibonacci;
