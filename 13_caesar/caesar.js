const caesar = function(strin, num) {
    //A-Z is 65-90
    //a-z is 97-122
    let charWord;
    let asciiWord;
    let alphabetWord;
    let result ="";
    
    for (let i = 0; i < strin.length; i++) {
      charWord = strin.charCodeAt(i);
     
  
      if (charWord >= 65 && charWord <=90) {
        asciiWord = charWord + num;
      
      
        if (asciiWord >= 65 && asciiWord <= 90) {
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        } else if (asciiWord < 65) {
          asciiWord = 90 - ((64 - asciiWord) % 26);
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        } else if (asciiWord > 90) {
          asciiWord = 65 + ((asciiWord - 91) % 26);
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        }
      } else if (charWord >= 97 && charWord <= 122) {
        
       
      
        asciiWord = charWord + num;
  
        if (asciiWord >= 97 && asciiWord <= 122) {
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        } else if (asciiWord < 97) {
          asciiWord = 122 - ((96 - asciiWord) % 26);
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        } else if (asciiWord > 122) {
          asciiWord = 97 + ((asciiWord - 123) % 26);
          alphabetWord = String.fromCharCode(asciiWord);
          result += alphabetWord;
        }
  
        
  
       
  
      } else {
        result += strin[i];
      }
  
    }
    return result;
  };

// Do not edit below this line
module.exports = caesar;


