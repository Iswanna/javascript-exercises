
const repeatString = function(string, num) {
    let result = "";
    if (num >= 0) {
        for(let i=1; i<=num; i++) {
            result += string;
             
        }
        return result;
    } else {
        result = "ERROR";
        
    } 
    return result;
};

// Do not edit below this line
module.exports = repeatString;
