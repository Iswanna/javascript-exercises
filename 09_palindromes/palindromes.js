const palindromes = function (stringt) {
    stringt = stringt.toLowerCase();
    let stringt11 = stringt.match(/[a-z]/g);
    
    let stringt1 = stringt11.join("");
    
    
    let stringtArra = stringt11.reverse();
    
    stringtArra = stringtArra.join("");
    
    if (stringt1 === stringtArra) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
