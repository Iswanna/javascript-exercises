const reverseString = function(word) {
  let word1 = word.split("");
  word1 = word1.reverse();
  let word2 = word1.join("");
  return word2;

};

// Do not edit below this line
module.exports = reverseString;
